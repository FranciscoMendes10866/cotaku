package auth

import (
	"context"

	"github.com/FranciscoMendes10866/cotaku/api/db"
	"github.com/FranciscoMendes10866/cotaku/api/structs"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// SignIn ...
func SignIn(c *fiber.Ctx) error {
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
	pass := body.Password
	find, err := prisma.User.FindMany(
		db.User.Email.Equals(body.Email),
	).Exec(context.Background())
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	match := bcrypt.CompareHashAndPassword([]byte(find[0].Password), []byte(pass))
	if match != nil {
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	prisma.User.FindOne(
		db.User.ID.Equals(find[0].ID),
	).Update(
		db.User.IsOnline.Set(true),
	).Exec(context.Background())
	response := structs.User{
		ID:       find[0].ID,
		Username: find[0].Username,
		IsAdmin:  find[0].IsAdmin,
	}
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = response.ID
	claims["is_admin"] = response.IsAdmin
	assignToken, err := token.SignedString([]byte("UxdENYL22giLSnH"))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.JSON(fiber.Map{
		"token":    assignToken,
		"username": response.Username,
		"id":       response.ID,
	})
}
