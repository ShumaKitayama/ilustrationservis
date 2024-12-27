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

func GetArtists(c *gin.Context, db *mongo.Database) {
	var artists []models.Artist
	cursor, err := db.Collection("artists").Find(context.Background(), bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var artist models.Artist
		cursor.Decode(&artist)
		artists = append(artists, artist)
	}

	c.JSON(http.StatusOK, artists)
}

func GetArtistDetails(c *gin.Context, db *mongo.Database) {
	id := c.Param("id")
	artistID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}
	var artist models.Artist

	err = db.Collection("artists").FindOne(context.Background(), bson.M{"id": artistID}).Decode(&artist)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Artist not found"})
		return
	}

	c.JSON(http.StatusOK, artist)
}
