import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardBasic from './BootstrapComponents/CardBasic';
import OutlineVariants from './BootstrapComponents/OutlineVariants';

import KARIMOU_PLATINE from '../images/karimou_platine.jpg';
import COUPLE_DANSEUR1 from '../images/couple_danseur1.jpg';

const About = () => {
    const data = {
        image: KARIMOU_PLATINE,
        imageAlt: "Dj Karimou",
        title: "Dj Karimou",
        text: "Salsa 2 Night est un groupe de social dancing qui regroupe des danseurs passionés de Salsa, Bachata, Kizomba. Mais aussi des professeurs qualifiés qui enseignent les danses citées ci-dessus.",
        buttonLabel: "Ecrivez-moi"
    }

    const OutlineVariants1 = {
        color: "info",
        title: "Nouveau concept",
        text: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        buttonLabel: "Action"
    }

    const OutlineVariants2 = {
        color: "warning",
        title: "Nouveau concept",
        text: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        buttonLabel: "Action"
    }

    return (
        <Row>
            <Col xs={12}>
                <h2>A propos de nous</h2>
            </Col>

            <Col md="3">
                <CardBasic data={data} />
            </Col>
            <Col md="9">
                <Row>
                    <Col>
                        <p>
                            Salsa 2 Night est un groupe de social dancing qui regroupe des danseurs passionés de Salsa, 
                            Bachata, Kizomba. Mais aussi des professeurs qualifiés qui enseignent les danses citées ci-dessus.
                        </p>

                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                            quis nostrum exercitationem ullam corporis suscipit laboriosam,.                         
                        </p>

                    </Col>
                </Row> 

                <Row>
                    <Col>
                        <OutlineVariants data={OutlineVariants1} />
                    </Col>

                    <Col>
                        <OutlineVariants data={OutlineVariants2} />
                    </Col>                    
                </Row>          
            </Col>
        </Row>
    );
};

export default About;