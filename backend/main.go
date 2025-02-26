package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Response struct {
	Message string `json:"message"`
}

func main() {
	app := fiber.New()

	// CORS middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET, POST, PUT, DELETE",
	}))

	// Test endpoint
	app.Get("/api/health", func(c *fiber.Ctx) error {
		return c.JSON(Response{Message: "Backend is healthy!"})
	})

	// Start server
	log.Fatal(app.Listen(":8080"))
}
