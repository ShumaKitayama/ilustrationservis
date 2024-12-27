package models

type Artwork struct {
	ID          int    `json:"id" bson:"id"`
	ArtistID    int    `json:"artist_id" bson:"artist_id"`
	Title       string `json:"title" bson:"title"`
	Description string `json:"description" bson:"description"`
	ImageURL    string `json:"image_url" bson:"image_url"`
	QRCodeURL   string `json:"qr_code_url" bson:"qr_code_url"`
}
