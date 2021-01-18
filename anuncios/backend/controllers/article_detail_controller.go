package controllers

import (
	"cientosdeanuncios.com/backend/proto"
	"context"
	"database/sql"
	"strings"
)

type ArticleDetailController struct {
	DB   *sql.DB
	User int64
}

func (then ArticleDetailController) GetArticle(_ context.Context, rq *proto.GetArticleDetailRq) (*proto.GetArticleDetailRs, error) {
	response := proto.GetArticleDetailRs{}
	article := &proto.ArticleDetail{}
	images := sql.NullString{}
	tags := sql.NullString{}
	tree := sql.NullString{}

	err := then.DB.QueryRow("SELECT a.id, a.title, a.description, a.created_at, a.updated_at, a.fk_user, (SELECT string_agg(i.image, ',') from articles_images i WHERE i.fk_article=a.id group by i.fk_article) as images, mt.category_tree, a.fk_label, af.fk_article is not null  AS isFeatured, (SELECT string_agg(at.tag, ',') from articles_tags at where at.fk_article=a.id) as tags from articles a LEFT JOIN mt_categories_tree mt ON mt.categoryid=a.fk_category LEFT JOIN articles_features af on a.id = af.fk_article and af.expiration_at >= now() WHERE a.deleted_at is null and a.id=$1", rq.GetId()).Scan(
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
		&tags,
	)

	if err != nil {
		return nil, err
	}

	if len(images.String) > 0 {
		split := strings.Split(images.String, ",")
		for _, image := range split {
			article.Images = append(article.Images, &proto.ArticleDetailImages{
				Image: image,
			})
		}
	}

	if len(tags.String) > 0 {
		split := strings.Split(tags.String, ",")
		for _, tag := range split {
			article.Tags = append(article.Tags, tag)
		}
	}

	article.Category = tree.String
	response.Data = article

	return &response, nil
}
