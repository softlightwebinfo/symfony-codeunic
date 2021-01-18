import React, { Component } from "react";
import Template from "@components/Template";
import { Blog, Col, Container, Row, TitleArrow } from "@codeunic/ui-components/build";

export default class Index extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Template title={"Blog"}>
                <TitleArrow style={{
                    borderTop: "1px solid gainsboro"
                }} title={"Blogs"} subTitle={"Listado de blogs de las empresas"}/>
                <Container>
                    <Row>
                        {[...new Array(30)].map((_, index) => (
                            <Col md={4} paddingBottom key={index}>
                                <Blog
                                    title={"I must explain to you how all this mistaken idea truth"}
                                    description={"Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages."}
                                    image={"https://images.squarespace-cdn.com/content/v1/51623c20e4b01df404d682ae/1402412649806-WES2112S8VKZGG5ZFT32/ke17ZwdGBToddI8pDm48kD_VT6t79HqKMeH2mjoBACEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc8OxR_29GrTqbrfrW5RubGNPXMGc8zeGoiluUTMG1DUcvRGlw2ORfiGCT0bzsg0nO/city+banner+image+2.jpg?format=2500w"}
                                    date={"25 abril"}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Template>
        )
    }
}