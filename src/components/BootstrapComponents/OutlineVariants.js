import React from 'react';
import { Card, Button, CardTitle, CardText, Alert } from 'reactstrap';

const OutlineVariants = (props) => {
    return (

        <Card body outline color={props.data.color}>

            <CardTitle>{props.data.title}</CardTitle>
            <CardText>
                {props.data.text}
            </CardText>
            <Button>buttonLabel</Button>
        </Card>

    );
};

export default OutlineVariants;