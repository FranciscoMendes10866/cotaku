package routes

import "github.com/gofiber/fiber/v2"

// AuthRouter ...
func AuthRouter(app *fiber.App) {
	api := app.Group("/api/auth")
	api.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello from the auth router.")
	})
}
