import Layout from '../src/components/layout'
import React from "react";
import { RecoveryContainer } from "../src/containers/RecoveryContainer";

export default function Home({}) {
    return (
        <Layout title={"Recovery Page"}>
            <RecoveryContainer/>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
