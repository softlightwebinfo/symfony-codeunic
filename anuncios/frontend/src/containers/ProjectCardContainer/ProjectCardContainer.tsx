import { Badge, BEM, CardImage, Col, Image, Modal, Row, Typography } from "@codeunic/ui-components/build";
import React, { useState } from "react";
import { IProjectCardContainerProps } from "@interfaces/props/IProjectCardContainerProps";
import "./ProjectCardContainer.scss"
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ProjectCardContainer = (props: IProjectCardContainerProps) => {
    const {project} = props;
    const [open, setOpen] = useState(false);
    const image = "https://cdn2.hubspot.net/hubfs/156214/blog/Que%20es%20un%20banner-1.jpg";
    const {description, updatedAt, currentPrice, currentTimeHours, id, title} = project;
    const bem = new BEM("ProjectCardContainer", {});
    return (
        <div className={bem.toString()}>
            <CardImage
                className={bem.Children("image")}
                onClick={() => setOpen(true)}
                image={image}
                title={title}
            />
            <Modal
                id={`modal-${id}`}
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                size={"alert"}
                title={title}
            >
                <Image title={title} src={image}/>
                <Typography className={bem.Children("description")}>{description}</Typography>
                <Row className={bem.Children("flex")}>
                    <Col md={9}>
                        <Typography variant={"caption"}>Coste del proyecto:</Typography>
                    </Col>
                    <Col auto>
                        <Badge>{currentPrice.formatMoney()} €</Badge>
                    </Col>
                    <Col md={9} auto>
                        <Typography variant={"caption"}>Tiempo del proyecto:</Typography>
                    </Col>
                    <Col auto>
                        <Badge><FontAwesomeIcon icon={faClock}/>{currentTimeHours}</Badge>
                    </Col>
                    <Col md={9} auto>
                        <Typography variant={"caption"}>Fecha publicación:</Typography>
                    </Col>
                    <Col auto>
                        <Badge>{moment(updatedAt).format("YYYY-MM-DD")}</Badge>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default ProjectCardContainer;