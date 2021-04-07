import Layout from '../src/components/layout'
import React from "react";
import { LoginContainer } from "../src/containers/LoginContainer";

export default function Home({}) {
    return (
        <Layout title={"Login Page"}>
            <LoginContainer/>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
