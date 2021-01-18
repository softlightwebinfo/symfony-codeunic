import React from "react";
import Template from "@components/Template";
import {
    AvatarUser,
    Badge,
    Card,
    CardArticleFeaturedWidget,
    CardImage,
    Col,
    Container,
    HeaderImage,
    Row,
    Section,
    Typography
} from "@codeunic/ui-components/build";
// @ts-ignore
import { getArticle, selectArticle } from "@store/slices/articleSlice";
import { useSelector } from 'react-redux';
import { IArticleDetail } from "@interfaces/Defaults/IArticleDetail";
import moment from "moment";
import setting from "@settings";

export default function Index() {
    const {article}: { article: IArticleDetail } = useSelector(selectArticle);
    return (
        <Template title={article.title}>
            <HeaderImage
                images={(article.images || article.imagesList).map(_ => ({
                    src: setting.getNoPhoto(),
                }))}
            />
            <Section style={{backgroundColor: "transparent"}}>
                <Container>
                    <Row style={{marginLeft: -10, marginRight: -10, marginTop: 40}}>
                        <Col md={9} style={{paddingRight: 20}}>
                            <Typography variant={"body1"} gutterBottom>
                                <Badge
                                    variant={"solid"}
                                    color={"info"}
                                    style={{marginRight: 10}}
                                >
                                    {moment(article.updated_at).format("YYYY-MM-DD")}
                                </Badge>
                                {article.category}
                            </Typography>
                            <Typography variant={"h3"} gutterBottom component={"h2"}>
                                <>
                                    {article.title}
                                    <Badge style={{marginLeft: 10}} variant={"solid"}
                                           color={"success"}>{article.label}</Badge>
                                    {article.is_featured && (
                                        <Badge style={{marginLeft: 10}} variant={"solid"}
                                               color={"orange"}>Destacado</Badge>
                                    )}
                                </>
                            </Typography>
                            <Typography
                                gutterBottom
                                style={{marginBottom: 40}}
                                variant={"h6"}
                            >
                                {article.description}
                            </Typography>
                            <Row style={{marginLeft: -5, marginRight: -5}}>
                                {(article.images || article.imagesList).map((value, index) => (
                                    <Col key={index} md={4}>
                                        <CardImage
                                            style={{marginBottom: 15}}
                                            image={setting.getImageArticle(value.image, true)}
                                            title={value.image}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Card dark>
                                <AvatarUser
                                    isDark
                                    name={"Musicos del mundo"}
                                    subTitle={"Programador informatico"}
                                    avatar={setting.getNoPhoto()}
                                />
                            </Card>
                            <CardArticleFeaturedWidget
                                style={{marginTop: 20}}
                                description={article.description}
                                title={article.title}
                                breadCrumb={article.category.split("/").map(item => ({
                                    label: item,
                                    onClick: (e) => console.log(e)
                                }))}
                                image={"https://i.pinimg.com/474x/77/f7/1c/77f71c8a34780da8c8ea90331ce002b9.jpg"}
                                avatar={"https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"}
                                label={article.label}
                                isFeatured={article.is_featured}
                            />
                            <div>
                                {article.tags.map((tag) => (
                                    <Badge
                                        style={{marginRight: 5}}
                                        color={"info"}
                                        variant={"solid"}
                                        key={tag}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Template>
    )
}

Index.getInitialProps = async ({store}) => {
    // console.log("CTX", ctx)
    await store.dispatch(getArticle(5));
    return {};
}