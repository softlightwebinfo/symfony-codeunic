package controllers

import (
	"cientosdeanuncios.com/backend/proto"
	"cientosdeanuncios.com/backend/services"
	"context"
	"database/sql"
	"fmt"
)

type CategoryController struct {
	DB   *sql.DB
	User int64
}

func (then CategoryController) GetAllParents(_ context.Context, rq *proto.GetAllParentsRq) (*proto.GetAllParentsRs, error) {
	response := proto.GetAllParentsRs{}
	query, err := then.DB.Query("SELECT id, category, parent from categories WHERE parent is null")

	if err != nil {
		return nil, err
	}

	for query.Next() {
		var setting = &proto.Category{}
		err := query.Scan(
			&setting.Id,
			&setting.Category,
			&setting.Parent,
		)

		if err != nil {
			fmt.Println("Error", err.Error())
		}

		response.Categories = append(response.Categories, setting)
	}

	return &response, nil
}
func (then CategoryController) GetAll(_ context.Context, rq *proto.GetAllRq) (*proto.GetAllRs, error) {
	response := proto.GetAllRs{}

	query, err := then.DB.Query("SELECT id, category, parent from categories WHERE parent is null")

	if err != nil {
		return nil, err
	}

	for query.Next() {
		var setting = &proto.Category{}
		err := query.Scan(
			&setting.Id,
			&setting.Category,
			&setting.Parent,
		)

		if err != nil {
			fmt.Println("Error", err.Error())
		}

		setting.Categories = services.RecursiveCategory(then.DB, setting)

		response.Categories = append(response.Categories, setting)
	}

	return &response, nil
}
