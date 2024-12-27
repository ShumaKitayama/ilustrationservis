package handlers

import (
	"art_rental_backend/models"
	"context"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetArtworks(c *gin.Context, db *mongo.Database) {
	artistID := c.Query("artist_id")
	var filter bson.M

	// artist_id が指定されている場合のみフィルタを追加
	if artistID != "" {
		intArtistID, err := strconv.Atoi(artistID)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid artist_id format"})
			return
		}
		filter = bson.M{"artist_id": intArtistID}
	} else {
		filter = bson.M{} // フィルタなし（すべての作品を取得）
	}

	var artworks []models.Artwork

	// フィルタに基づいて作品を検索
	cursor, err := db.Collection("artworks").Find(context.Background(), filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var artwork models.Artwork
		if err := cursor.Decode(&artwork); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to decode artwork"})
			return
		}
		artworks = append(artworks, artwork)
	}

	// データが見つからなかった場合のエラーハンドリング（必要に応じて）
	if len(artworks) == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "No artworks found"})
		return
	}

	c.JSON(http.StatusOK, artworks)
}
