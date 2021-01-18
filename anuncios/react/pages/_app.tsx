import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import wrapper from "../src/store/storeSaga";
import { ContextProvider } from "@codeunic/ui-components/build";
import withReduxSaga from 'next-redux-saga'


class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
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

export default wrapper.withRedux(withReduxSaga(MyApp))