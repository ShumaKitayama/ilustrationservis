package models

type Artist struct {
	ID       int    `json:"id" bson:"id"`
	Name     string `json:"name" bson:"name"`
	Profile  string `json:"profile" bson:"profile"`
	ImageURL string `json:"image_url" bson:"image_url"`
}
