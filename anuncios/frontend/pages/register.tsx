import React, { Component } from "react";
import { RegisterPage } from "@codeunic/ui-components/build";
// @ts-ignore
import { Link } from '@routes';
import { FooterWidgetPropsLinkList } from "@codeunic/ui-components/build/widgets/FooterWidget/FooterWidget.types";

export default class Index extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RegisterPage
                backgroundImage={"https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg"}
                register={{
                    logoTitle: "Codeunic",
                    logoSrc: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                    linkLoginWrapper: (component) => (
                        <Link route={"login"}>
                            <a>{component}</a>
                        </Link>
                    ),
                    linkNeedHelpWrapper: (component) => (
                        <Link route={"help"}>
                            <a>{component}</a>
                        </Link>
                    ),
                    onChange(e, value, id) {
                        console.log(e, value, id);
                    },
                    onSubmit(e) {
                        console.log(e);
                    }
                }}
                footer={{
                    title: "Codeunic",
                    textRight: "@2020, Designed by codeunic",
                    links: {
                        wrapper(component: React.ReactElement, row: FooterWidgetPropsLinkList) {
                            return (
                                <Link route={row.route}>
                                    <a>{component}</a>
                                </Link>
                            );
                        },
                        list: [
                            {label: "BLOG", route: "blog"},
                            {label: "ABOUT US", route: "about"},
                            {label: "HELP", route: "help"},
                        ]
                    }
                }}
            />
        )
    }
}