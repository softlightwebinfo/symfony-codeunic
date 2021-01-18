package controllers

import (
	"cientosdeanuncios.com/backend/proto"
	"context"
	"database/sql"
	"fmt"
)

type SettingController struct {
	DB   *sql.DB
	User int64
}

func (then SettingController) GetAboutUs(_ context.Context, rq *proto.GetAboutUsRq) (*proto.GetAboutUsRs, error) {
	response := proto.GetAboutUsRs{}

	query, err := then.DB.Query("SELECT id, title, description, icon, updated_at FROM about_us where type=$1", rq.GetType())

	if err != nil {
		return nil, err
	}

	for query.Next() {
		var setting = &proto.AboutUs{}
		err := query.Scan(
			&setting.Id,
			&setting.Title,
			&setting.Description,
			&setting.Icon,
			&setting.UpdatedAt,
		)

		if err != nil {
			fmt.Println("Error", err.Error())
		}

		response.Data = append(response.Data, setting)
	}

	return &response, nil
}
