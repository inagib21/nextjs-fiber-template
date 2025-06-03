package handler

import (
	"fmt"
	"net/http"
)

// Handler - handles the serverless function request
func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
}
