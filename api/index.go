package handler

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

// Handler is the public function Vercel will call.
func Handler(w http.ResponseWriter, r *http.Request) {
	r.RequestURI = r.URL.String() // Needed for Fiber to correctly route
	app().ServeHTTP(w, r)
}

// app sets up and returns the Fiber application.
func app() http.HandlerFunc {
	fiberApp := fiber.New()

	fiberApp.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello from Fiber root on Vercel!",
			"uri":     c.Request().URI().String(),
			"path":    c.Path(),
		})
	})

	fiberApp.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "healthy", "source": "Fiber"})
	})

	fiberApp.Get("/v1/test", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"version": "v1", "data": "Test data for v1"})
	})

	return adaptor.FiberApp(fiberApp)
} 