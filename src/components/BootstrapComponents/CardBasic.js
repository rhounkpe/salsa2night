import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import KARIMOU_PLATINE from '../../images/karimou_platine.jpg';

const CardBasic = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.data.image} alt={props.data.imageAlt} />
                <CardBody>
                    <CardTitle>{props.data.title}</CardTitle>
                    <CardSubtitle>{props.data.subtitle}</CardSubtitle>
                    <CardText>{props.data.text}</CardText>
                    <Button>{props.data.buttonLabel}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardBasic;