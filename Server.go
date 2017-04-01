package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Static("/static", "node_modules")
	e.Static("/public", "public")

	e.File("/", "public/index.html")

	e.Use(middleware.Logger())
	e.Use(middleware.Gzip())
	e.Use(middleware.Recover())

	createAPI(e)

	e.Logger.Fatal(e.Start(":3333"))
}

//Create the Api References
func createAPI(e *echo.Echo) {

	e.GET("/api/hello", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

}
