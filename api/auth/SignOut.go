package auth

import (
	"context"

	"github.com/FranciscoMendes10866/cotaku/api/db"
	"github.com/FranciscoMendes10866/cotaku/api/structs"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// SignOut ...
func SignOut(c *fiber.Ctx) error {
	prisma := db.NewClient()
	if err := prisma.Connect(); err != nil {
		return err
	}
	defer func() {
		if err := prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	body := new(structs.User)
	c.BodyParser(body)
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(string)
	find, err := prisma.User.FindOne(
		db.User.ID.Equals(tokenID),
	).Exec(context.Background())
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	if find.IsOnline == false {
		return c.JSON(fiber.Map{
			"error": "The user is no longer logged in.",
		})
	}
	prisma.User.FindOne(
		db.User.ID.Equals(tokenID),
	).Update(
		db.User.IsOnline.Set(false),
	).Exec(context.Background())
	return c.JSON(fiber.Map{
		"success": "Successfull sign out.",
	})
}
