package routes

import (
	"github.com/FranciscoMendes10866/cotaku/api/auth"
	"github.com/FranciscoMendes10866/cotaku/api/guards"
	"github.com/gofiber/fiber/v2"
)

// AuthRouter ...
func AuthRouter(app *fiber.App) {
	api := app.Group("/api/auth")
	api.Post("/sign_up", auth.SignUp)
	api.Post("/sign_in", auth.SignIn)
	api.Patch("/sign_out", guards.Authorization(), auth.SignOut)
}
