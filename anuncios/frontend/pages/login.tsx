import React, { useEffect, useState } from "react";
// @ts-ignore
import { AuthServiceClient } from "../src/protos/AuthServiceClientPb";
import setting from "@settings";
import { LoginPage, useGeneralContext } from "@codeunic/ui-components/build";
import { AuthRequest } from "../src/protos/auth_pb";
// @ts-ignore
import { Link, Router } from "@routes";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuth } from "@store/slices/authSlice";
import { IAuth, IAuthUser } from "@interfaces/reducers/IAuth";
import { setCookie } from "nookies";

const client = new AuthServiceClient(setting.getApiProto(), null, null);

const loginIndex = (_) => {
    const {token} = useSelector(selectAuth) as IAuth;

    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const context = useGeneralContext();
    const dispatch = useDispatch();
    const onSubmit = async (e, data) => {
        e.preventDefault();
        const rq = new AuthRequest();
        rq.setUsername(data.email);
        rq.setPassword(data.password);
        try {
            const response = await client.auth(rq, {});
            dispatch(login({
                token: response.getToken(),
                user: (response.getUser()?.toObject()) as unknown as IAuthUser,
            }));

            setCookie(null, "token", response.getToken(), {});

            context.sendNotification({
                title: `Bienvenido ${response.getUser()?.getName()}`,
                message: "Has iniciado sesión correctamente",
                type: "success"
            });
        } catch (e) {
            context.sendNotification({
                title: "Error",
                message: e.message,
                type: "error"
            });
        }
    }

    useEffect(() => {
        if (token) {
            Router.pushRoute("index");
        }
    }, [token]);

    return (
        <LoginPage
            backgroundImage={"https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg"}
            login={{
                initPassword: state.password,
                initEmail: state.email,
                logoTitle: "Codeunic",
                logoSrc: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                linkCreateAccountWrapper: (component) => (
                    <Link route={"register"}>
                        <a>{component}</a>
                    </Link>
                ),
                linkNeedHelpWrapper: (component) => (
                    <Link route={"help"}>
                        <a>{component}</a>
                    </Link>
                ),
                onChange: (id, value) => {
                    setState({...state, [id]: value});
                },
                onSubmit,
            }}
            footer={{
                title: "Codeunic",
                textRight: "@2020, Designed by codeunic",
                links: {
                    list: [
                        {label: "BLOG", route: "blog"},
                        {label: "ABOUT US", route: "about"},
                        {label: "HELP", route: "help"},
                    ]
                }
            }}
        />
    )
};

export default loginIndex;