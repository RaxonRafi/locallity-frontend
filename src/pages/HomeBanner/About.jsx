import React, { Fragment} from 'react';
import './HomeBanner.css';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../assets/_img/concentrated-young-lady-working-with-laptop-home_171337-4898.avif'
import img1 from '../../assets/_img/--img-1.jpg'
import img2 from '../../assets/_img/--img-2.jpg'
const About = () => {
    return (
        <Fragment >
            <div id="about" className="AboutContainer">
                <Container>
                    <Row>
                        <Col md={6} lg={4} sm={12}>
                            <div className="AboutText">
                                <h2>Sobre nosotros</h2>
                                <p>Locallity nace sobre la necesidad de encontrar y promover negocios locales cerca de donde estamos.</p>
                                <p>Es un <span className="directorio">directorio</span> que permite:</p>
                                <div className="div1">

                                    <div className="logoDiv">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="textDiv">

                                        <p>a los <span className="negociosLocales">negocios locales</span> llegar a más clientes, darse a conocer y apoyarlos a crecer.</p>

                                    </div>

                                </div>
                                <div className="div1">

                                    <div className="logoDiv">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="textDiv">

                                        <p>conectar a <span className="negociosLocales">nuestros clientes</span> de manera fácil, rápida y segura con la oferta cerca de ellos</p>


                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={8} sm={12}>
                            <div className="aboutImgDiv">
                                <img className="aboutImg" src={aboutImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>        
            </div>
        </Fragment>
    );
};

export default About;