package handler

import (
	"encoding/json"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
}

// Handler - handles the serverless function request
func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	response := Response{
		Message: "Backend is healthy!",
	}

	json.NewEncoder(w).Encode(response)
}
