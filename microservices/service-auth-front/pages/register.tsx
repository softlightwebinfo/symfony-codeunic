import Layout from '../src/components/layout'
import React from "react";
import { RegisterContainer } from "../src/containers/RegisterContainer";

export default function Home({}) {
    return (
        <Layout title={"Register Page"}>
            <RegisterContainer/>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
