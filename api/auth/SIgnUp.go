package auth

import (
	"context"

	"github.com/FranciscoMendes10866/cotaku/api/db"
	"github.com/FranciscoMendes10866/cotaku/api/structs"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// SignUp ...
func SignUp(c *fiber.Ctx) error {
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
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 4)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	body.Password = string(hash)
	create, err := prisma.User.CreateOne(
		db.User.Email.Set(body.Email),
		db.User.Password.Set(body.Password),
		db.User.Username.Set(body.Username),
		db.User.IsAdmin.Set(body.IsAdmin),
	).Exec(context.Background())
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	response := structs.User{
		ID:       create.ID,
		Username: create.Username,
		IsAdmin:  create.IsAdmin,
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
