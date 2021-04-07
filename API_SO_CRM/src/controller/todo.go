package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
	"net/http"
	"so-crm/src/entity"
	"so-crm/src/models"
	"so-crm/src/models/request"
	"so-crm/src/service"
)

type TodoController struct {
}

func (controller *TodoController) GetAll() gin.HandlerFunc {
	return func(c *gin.Context) {
		user := service.AuthServiceLogin(c)
		var todo []*entity.Todo
		sql, params := models.DB.
			Query().
			From("todo").
			Select("id, fk_user_id, title, description, success, priority, tags, updated_at").
			Where("fk_user_id", "=", user.Id).
			Build()

		query, err := models.DB.Query().DB.Query(sql, params...)

		if err != nil {
			c.JSON(http.StatusInternalServerError, err)
			return
		}

		for query.Next() {
			todoRow := entity.Todo{}
			_ = query.Scan(
				&todoRow.Id,
				&todoRow.FkUserId,
				&todoRow.Title,
				&todoRow.Description,
				&todoRow.Success,
				&todoRow.Priority,
				pq.Array(&todoRow.Tags),
				&todoRow.UpdatedAt,
			)
			todo = append(todo, &todoRow)
		}

		c.JSON(http.StatusOK, todo)
	}
}

func (controller *TodoController) Create() gin.HandlerFunc {
	return func(c *gin.Context) {
		user := service.AuthServiceLogin(c)
		rq := request.TODOCreate{}
		todo := entity.Todo{}

		if errJson := c.BindJSON(&rq); errJson != nil {
			c.JSON(http.StatusBadRequest, errJson)
			return
		}

		todo.Title = rq.Title
		todo.FkUserId = user.Id
		todo.Tags = []string{"test", "test2"}

		err := models.DB.Mutation().Return(true).Save(&todo)

		if err != nil {
			c.JSON(http.StatusInternalServerError, err)
			return
		}

		c.JSON(http.StatusOK, todo)
	}
}
