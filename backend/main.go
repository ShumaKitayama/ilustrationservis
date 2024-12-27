package main

import (
	"context"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"art_rental_backend/handlers"

	"github.com/gin-contrib/cors" // CORS対応用のライブラリ
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func connectDB() *mongo.Client {
	mongoURI := os.Getenv("MONGO_URI")
	if mongoURI == "" {
		log.Fatal("MONGO_URI is not set in environment variables")
	}

	clientOptions := options.Client().ApplyURI(mongoURI)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	return client
}

func main() {
	// .envをロード
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	client := connectDB()
	defer client.Disconnect(context.Background())

	log.Println("Connected to MongoDB successfully!")
	db := client.Database("art_rental_system")
	router := gin.Default()

	// CORS設定を追加
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // ReactアプリのURL
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
	}))

	// 静的ファイルの提供を1回だけ設定
	router.Static("/images", "/app/images")
	router.Static("/qr", "/app/qr")

	// APIエンドポイントの登録
	router.GET("/artists", func(c *gin.Context) {
		handlers.GetArtists(c, db)
	})
	router.GET("/artists/:id", func(c *gin.Context) {
		handlers.GetArtistDetails(c, db)
	})
	router.GET("/artworks", func(c *gin.Context) {
		handlers.GetArtworks(c, db)
	})

	log.Println("Connected to MongoDB successfully!")

	router.Run(":8080")
}
