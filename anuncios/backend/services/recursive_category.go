package services

import (
	"cientosdeanuncios.com/backend/proto"
	"database/sql"
	"fmt"
)

func RecursiveCategory(sql *sql.DB, category *proto.Category) []*proto.Category {
	query, err := sql.Query("SELECT id, category, parent from categories WHERE parent=$1", category.Id)
	response := proto.GetAllRs{}

	if err != nil {
		return nil
	}

	for query.Next() {
		var setting = &proto.Category{}
		err := query.Scan(
			&setting.Id,
			&setting.Category,
			&setting.Parent,
		)

		if setting.Parent > 0 {
			setting.Categories = RecursiveCategory(sql, setting)
		}

		if err != nil {
			fmt.Println("Error", err.Error())
		}

		response.Categories = append(response.Categories, setting)
	}

	return response.Categories
}
