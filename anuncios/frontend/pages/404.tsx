import React from "react";
import { Error404 } from "@codeunic/ui-components/build";
import Head from "next/head";
// @ts-ignore
import { Link } from '@routes';

function Error() {
    const wrapperLink = (component: string) => {
        return (
            <Link route={"index"}>
                <a>{component}</a>
            </Link>
        )
    }
    return (
        <>
            <Head>
                <title>Error page 404</title>
            </Head>
            <style jsx global>{`
                body {
                    background: white;
                }          
            `}</style>
            <Error404 wrapperBack={wrapperLink}/>
        </>
    )
}

export default Error