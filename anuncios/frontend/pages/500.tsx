import React from "react";
import Head from "next/head";
// @ts-ignore
import { Link } from '@routes';
import { Error500 } from "@codeunic/ui-components/build";

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
                <title>Error page 500</title>
            </Head>
            <style jsx global>{`
                body {
                    background: white;
                }          
            `}</style>
            <Error500 wrapperBack={wrapperLink}/>
        </>
    )
}

export default Error