import React from 'react';
import Head from 'next/head';
import { ContextProvider } from "@codeunic/ui-components/build";
import App, { AppInitialProps } from "next/app";
import { wrapper } from "@store/store";
import { parseCookies } from "nookies";
import { initialValidate } from "@store/slices/authSlice";

// import "@codeunic/ui-components/build/index.css";
class WrappedApp extends App<AppInitialProps> {
    public static getInitialProps = async ({Component, ctx}) => {
        // Keep in mind that this will be called twice on server, one for page and second for error page
        const {token} = parseCookies(ctx);

        //Comprobar si el usuario existe en el store, si no existe, cargar el usuario.
        await ctx.store.dispatch(initialValidate(token));
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}),
                // Some custom thing for all pages
                appProp: ctx.pathname
            }
        };
    };

    render() {
        let {Component, pageProps} = this.props;
        const translations = {};
        const lang = "en";
        return (
            <ContextProvider translations={translations} lang={lang}>
                {Component}
                <Head>
                    <title>My page</title>
                </Head>
                <Component {...pageProps}/>
            </ContextProvider>
        );
    }
}

export default wrapper.withRedux(WrappedApp);
