import React, { Component } from "react";
import Template from "@components/Template";
import { faBox, faMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactPage } from "@codeunic/ui-components/build";

export default class Index extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Template title={"Contact"}>
                <ContactPage
                    image={"https://therushaway.com/wp-content/uploads/2019/02/website-development-banner-png-1.png"}
                    title={"Send us a Message"}
                    description={"You can contact us with anything related to our Products. We will get in touch with you as soon as possible."}
                    onChange={console.log}
                    onSubmit={console.log}
                    address={"inca mallorca españa"}
                    information={[
                        {
                            icon: faMarker,
                            title: "Find us at the office",
                            description: ["Desaparecido, nr 90", "41122 El inquieto", "La esperanza"]
                        },
                        {
                            icon: faPhone,
                            title: "Give us a ring",
                            description: ["Michael Jordan", "+40 125 123 456", "Mon - Fri, 08:00 - 22:00"]
                        },
                        {
                            icon: faBox,
                            title: "Legal information",
                            description: ["Nombre empresa", "VAT 2124542EN", "IBAN EN98 12345678912345678945", "Bank Espe"]
                        },
                    ]}
                />
            </Template>
        )
    }
}