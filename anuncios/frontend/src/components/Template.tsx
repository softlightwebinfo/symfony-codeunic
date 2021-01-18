import React from 'react';
import { ITemplateProps } from "@interfaces/props/ITemplateProps";
import { Button, FooterBigWidget, HeaderLayout, OfBar, useGeneralContext } from "@codeunic/ui-components/build";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBoxes, faCog, faFire, faList } from "@fortawesome/free-solid-svg-icons";
import { MenuPropsMenuItem } from "@codeunic/ui-components/build/components/Menu/Menu.types";
import Head from "next/head";
import setting from "@settings";
// @ts-ignore
import { Link } from '@routes';

export default function Template(props: ITemplateProps) {
    const use = useGeneralContext();
    return (
        <div>
            <Head>
                <title>{props.title} | {setting.getAppName()}</title>
            </Head>
            <HeaderLayout
                headerTop={{
                    message: {
                        icon: <FontAwesomeIcon icon={faFire}/>,
                        message: "A new version will be released on December 25th. Stay tuned!"
                    },
                    rows: {
                        rows: [
                            {
                                children: (
                                    <Link route={"login"}>
                                        <a>{use?.getTranslation("btnLogin")}</a>
                                    </Link>
                                )
                            },
                            {
                                children: (
                                    <Link route={"register"}>
                                        <a>{use?.getTranslation("btnCreateAccount")}</a>
                                    </Link>
                                )
                            },
                        ]
                    }
                }}
                headerMain={{
                    leftProps: {
                        logo: {
                            image: setting.getLogo(),
                            title: setting.getAppName(),
                        },
                        input: {
                            input: {
                                placeholder: `Search in all`,
                            },
                            dropdown: {
                                onClick: () => {

                                },
                                select: "app",
                                data: [
                                    {label: "App", value: "app"},
                                    {label: "Products", value: "products"},
                                    {label: "Blogs", value: "blogs"},
                                ]
                            }
                        }
                    }
                }}
                headerNav={{
                    rowsLeft: {
                        active: "main/dashboard/crypto",
                        onClick(key: string, value: MenuPropsMenuItem, index: number) {
                            console.log(key, value, index);
                        },
                        menu: {
                            "main": {
                                wrapper: (component) => (
                                    <Link route={"index"}>
                                        <a>{component}</a>
                                    </Link>
                                ),
                                label: "Pagina Principal",
                            },
                            "articles": {
                                label: "Anuncios",
                            },
                            "inmuebles": {
                                label: "Inmuebles",
                            },
                            "hogar": {
                                label: "Hogar",
                            },
                            "profesionales": {
                                label: "Profesionales",
                            },
                            "contact": {
                                wrapper: (component) => (
                                    <Link route={"contact"}>
                                        <a>{component}</a>
                                    </Link>
                                ),
                                label: "Contacto",
                            },
                            "help": {
                                label: "Help",
                            },
                        }
                    },
                    rowsRight: {
                        active: "",
                        icons: true,
                        onClick(key: string, value: MenuPropsMenuItem, index: number) {
                            console.log("right", key, value, index);
                        },
                        menu: {
                            "list": {
                                label: <Button hasIcon><FontAwesomeIcon icon={faList}/></Button>
                            },
                            "setting": {
                                label: <Button hasIcon><FontAwesomeIcon icon={faCog}/></Button>
                            },
                            "app": {
                                label: <Button hasIcon><FontAwesomeIcon icon={faBoxes}/></Button>
                            }
                        }
                    },
                }}
            />
            {props.children}
            <FooterBigWidget
                top={{
                    titleLeft: setting.getAppName(),
                    descriptionLeft: "Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!",
                    titleRight: "Subscribe to newsletter",
                    descriptionRight: "Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!",
                    linkWrapper(component: React.ReactElement, label): any {
                        return (
                            <Link route={label.route}>
                                <a>
                                    {component}
                                </a>
                            </Link>
                        )
                    },
                    links: [
                        {
                            title: "About",
                            links: [
                                {label: "Blog", route: "blog"},
                                {label: "About us", route: "aboutUs"},
                                {label: "Contact us", route: "contact"}
                            ]
                        },
                        {
                            title: "Menu", links: [
                                {label: "Blog", route: "blog"},
                                {label: "About us", route: "aboutUs"},
                                {label: "Contact us", route: "contact"}
                            ]
                        },
                        {
                            title: "Legal", links: [
                                {label: "FAQ", route: "faq"},
                                {label: "Terms & Conditions", route: "termsConditions"},
                                {label: "Cookies", route: "cookies"}
                            ]
                        },
                    ],
                }}
                bottom={{
                    title: setting.getAppName(),
                    textRight: `Copyright © 2020 ${setting.getAppName()} All Rights Reserved.`,
                    links: {
                        wrapper: (component, row) => (
                            <Link route={row.route}>
                                <a>{component}</a>
                            </Link>
                        ),
                        list: [
                            {label: "Home", route: "index"},
                            {label: "Blog", route: "blog"},
                            {label: "Help", route: "help"},
                            {label: "Contact us", route: "contact"},
                        ]
                    }
                }}
            />
            <OfBar
                show={false}
                avatar={"https://bit.ly/dan-abramov"}
                name={"System"}
                role={"Admin"}
                message={
                    <div className={"h-spacer"}>
                        <FontAwesomeIcon icon={faBox}/>
                        <b>Winter sale!</b>
                        Take advantage of our 6 Special and save
                        <b>up 85% off</b>
                    </div>
                }
                onClose={() => alert("Hello")}
                onClickButton={() => alert("hello")}
                labelButton={"View Offers"}
            />
        </div>
    );
}