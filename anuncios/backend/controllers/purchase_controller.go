package controllers

import (
	"cientosdeanuncios.com/backend/proto"
	"context"
	"database/sql"
	"fmt"
	"strings"
)

type PurchaseController struct {
	DB   *sql.DB
	User int64
}

func (then PurchaseController) GetAllProjects(_ context.Context, rq *proto.GetAllProjectsRq) (*proto.GetAllProjectsRs, error) {
	response := proto.GetAllProjectsRs{}
	query, err := then.DB.Query("SELECT p.id, p.title, p.description, p.image_preview, p.updated_at, p.current_price, p.current_time_hours, u.id as user_id, u.user_name FROM purchases_projects pp INNER JOIN projects p on p.id = pp.fk_project inner join users u on p.fk_user = u.id WHERE pp.expiration_at > now() ORDER BY pp.updated_at DESC")

	if err != nil {
		return nil, err
	}

	for query.Next() {
		user := &proto.ProjectUser{}
		setting := &proto.Project{
			User: user,
		}
		price := sql.NullFloat64{}
		imagePreview := sql.NullString{}
		err := query.Scan(
			&setting.Id,
			&setting.Title,
			&setting.Description,
			&imagePreview,
			&setting.UpdatedAt,
			&price,
			&setting.CurrentTimeHours,
			&setting.User.Id,
			&setting.User.UserName,
		)

		s := fmt.Sprintf("%f", price.Float64) // s == "123.456000"

		setting.CurrentPrice = s
		setting.ImagePreview = imagePreview.String
		if err != nil {
			fmt.Println("Error", err.Error())
		}

		response.Data = append(response.Data, setting)
	}
	return &response, nil
}
func (then PurchaseController) GetAllArticles(_ context.Context, rq *proto.GetAllArticlesRq) (*proto.GetAllArticlesRs, error) {
	response := proto.GetAllArticlesRs{}
	query, err := then.DB.Query("SELECT a.id, a.title, a.description, a.created_at, a.updated_at, a.fk_user, (SELECT string_agg(i.image, ',') from articles_images i WHERE i.fk_article=a.id group by i.fk_article) as images, mt.category_tree, a.fk_label, af.fk_article is not null  AS isFeatured from purchases_articles pa INNER JOIN articles a on a.id = pa.fk_article LEFT JOIN mt_categories_tree mt ON mt.categoryid=a.fk_category LEFT JOIN articles_features af on a.id = af.fk_article and af.expiration_at >= now() WHERE pa.expiration_at >= now() and a.deleted_at is null ORDER BY pa.updated_at")

	if err != nil {
		return nil, err
	}

	for query.Next() {
		article := &proto.ArticlePurchases{}
		images := sql.NullString{}
		tree := sql.NullString{}
		err := query.Scan(
			&article.Id,
			&article.Title,
			&article.Description,
			&article.CreatedAt,
			&article.UpdatedAt,
			&article.FkUser,
			&images,
			&tree,
			&article.Label,
			&article.IsFeatured,
		)

		if len(images.String) > 0 {
			split := strings.Split(images.String, ",")
			for _, image := range split {
				article.Images = append(article.Images, &proto.ArticlePurchasesImages{
					Image: image,
				})
			}
		}

		article.Category = tree.String

		if err != nil {
			fmt.Println("Error", err.Error())
		}

		response.Data = append(response.Data, article)
	}
	return &response, nil
}
