package handler

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

// Handler is the public function Vercel will call.
// It adapts the Fiber app to the http.HandlerFunc interface Vercel expects.
func Handler(w http.ResponseWriter, r *http.Request) {
	// This is needed to set the proper request path in `*fiber.Ctx` for routing within Fiber
	r.RequestURI = r.URL.String()
	fiberApp().ServeHTTP(w, r)
}

// fiberApp sets up and returns the Fiber application.
func fiberApp() http.HandlerFunc {
	app := fiber.New()

	// Example route from the Fiber Vercel recipe
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello from Fiber on Vercel!",
			"uri":     c.Request().URI().String(),
			"path":    c.Path(),
		})
	})

	// You can add more Fiber routes here, for example:
	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "healthy"})
	})

	// Add specific versions like in the example
	app.Get("/v1", func(ctx *fiber.Ctx) error {
		return ctx.JSON(fiber.Map{
			"version":      "v1",
			"example_data": "Data for v1 endpoint",
		})
	})

	app.Get("/v2", func(ctx *fiber.Ctx) error {
		return ctx.JSON(fiber.Map{
			"version":      "v2",
			"example_data": "Data for v2 endpoint",
		})
	})

	return adaptor.FiberApp(app)
}
