package structs

// User ...
type User struct {
	ID       string `json:"id"`
	Email    string `json:"email"`
	Username string `json:"username"`
	Password string `json:"password"`
	IsOnline bool   `json:"is_online"`
	IsAdmin  bool   `json:"is_admin"`
}
