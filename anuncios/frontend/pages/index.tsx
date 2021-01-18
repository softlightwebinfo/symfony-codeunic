import React from "react";
import Template from "@components/Template";
import { faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    CardAboutSimpleWidget,
    CardArticleFeaturedWidget,
    Carousel,
    Col,
    Container,
    Row,
    TitleArrow
} from "@codeunic/ui-components";
import { SectionInfoLayout, slugify } from "@codeunic/ui-components/build";
import { wrapper } from "@store/store";
import { getAboutUs, selectSetting } from "@store/slices/settingSlice";
import { useSelector } from 'react-redux';
import { IAboutUs } from "@interfaces/Defaults/IAboutUs.";
import { ICategory } from "@interfaces/Defaults/ICategory";
import { CategoryListRecursive } from "@components/CategoryListRecursive/CategoryListRecursive";
import { getCategories, selectCategories } from "@store/slices/categorySlice";
import { getArticles, getProjects, selectPurchases } from "@store/slices/purchasesSlice";
import { IProject } from "@interfaces/Defaults/IProject";
import ProjectCardContainer from "../src/containers/ProjectCardContainer/ProjectCardContainer";
import { IArticle } from "@interfaces/Defaults/IArticle";
// @ts-ignore
import { Link } from '@routes';

export default function Index() {
    const {aboutUs} = useSelector(selectSetting);
    const {categories} = useSelector(selectCategories);
    const {projects, articles} = useSelector(selectPurchases);

    return (
        <Template title={"Pagina principal"}>
            <Carousel
                images={[
                    {src: "https://digivizer.com/wp-content/uploads/2020/05/carousel-blogheader-1024x536-1.png"},
                    {src: "https://mk0pollfishcomghx3kd.kinstacdn.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"},
                    {src: "https://blog.applovin.com/wp-content/uploads/2019/09/1440x810_popular-banner.jpg"},
                    {src: "https://i.ytimg.com/vi/1OoNautKkX4/maxresdefault.jpg"},
                ]}
            />
            {aboutUs[1] && (
                <>
                    <TitleArrow
                        title={"Sobre nosotros"}
                        subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                    />
                    <Container>
                        <Row>
                            {aboutUs[1].map((row: IAboutUs) => (
                                <Col xs={12} sm={6} md={6} lg={4} xl={3} key={row.id}>
                                    <a href="/hello">
                                        <CardAboutSimpleWidget
                                            icon={faUser}
                                            title={row.title}
                                            description={row.description}
                                        />
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </>
            )}
            {articles && (
                <>
                    <TitleArrow
                        spaceTop
                        title={"Anuncios destacados"}
                        subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                    />
                    <Container>
                        <Row>
                            {articles.map((row: IArticle, index) => (
                                <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                                    <Link
                                        route={"article-detail"}
                                        params={{
                                            category: slugify(row.category),
                                            slug: slugify(row.title),
                                            id: row.id
                                        }}>
                                        <a>
                                            <CardArticleFeaturedWidget
                                                description={row.description}
                                                title={row.title}
                                                breadCrumb={row.category.split("/").map(item => ({
                                                    label: item,
                                                    onClick: (e) => console.log(e)
                                                }))}
                                                image={"https://i.pinimg.com/474x/77/f7/1c/77f71c8a34780da8c8ea90331ce002b9.jpg"}
                                                avatar={"https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"}
                                                label={row.label}
                                                isFeatured={row.is_featured}
                                            />
                                        </a>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </>
            )}
            <TitleArrow
                spaceTop
                title={"Listado de categorias"}
                subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
            />
            <Container>
                <Row>
                    {categories.map((row: ICategory, index) => (
                        <Col paddingBottom xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                            <CategoryListRecursive category={row}/>
                        </Col>
                    ))}
                </Row>
            </Container>
            {projects && (
                <>
                    <TitleArrow
                        spaceTop
                        title={"Proyectos destacados"}
                        subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                    />
                    <Row containerFluid>
                        {projects.map((row: IProject) => (
                            <Col noPadding xs={12} sm={6} md={6} lg={3} xl={3} key={row.id}>
                                <ProjectCardContainer project={row}/>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
            <SectionInfoLayout
                spaceTop
                backgroundImage={"https://oij.org/wp-content/uploads/2018/03/fondo-Azul-1100x730.png"}
                image={"https://cdn2.hubspot.net/hubfs/156214/blog/Que%20es%20un%20banner-1.jpg"}
                imageTitle={"New Horizons"}
                list={aboutUs[2]?.map((item: IAboutUs) => ({
                    id: item.id,
                    icon: faMoneyBill,
                    title: item.title,
                    description: item.description,
                })) ?? []}
            />
        </Template>
    )
}

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
    // @ts-ignore
    await store.dispatch(getAboutUs(1));
    // @ts-ignore
    await store.dispatch(getAboutUs(2));
    // @ts-ignore
    await store.dispatch(getCategories());
    // @ts-ignore
    await store.dispatch(getProjects());
    // @ts-ignore
    await store.dispatch(getArticles());
    return {props: {getStaticProp: "bar"}};
});
