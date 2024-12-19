import React, { Fragment} from 'react';
import './HomeBanner.css';
import { Col, Container, Row } from 'react-bootstrap';
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                    <div className="copyRightDiv">
                        <div className="Copyright">
                                <span>©2023 - Locallity</span> 
                            </div>
                            <div className="links">
                                <ul className="list-inline">
                                    <li className="list-inline-item pl-3" ><a className="list-group-item-action linkFooter" href="https://www.instagram.com/locallity/">Términos&nbsp;y&nbsp;condiciones</a></li>
                                    <li className="list-inline-item pl-3" ><a className="list-group-item-action" href="https://www.facebook.com/__"><AiFillFacebook/></a></li>
                                    <li className="list-inline-item pl-3" ><a className="list-group-item-action" href="https://www.instagram.com/locallity.mx/" ><AiOutlineInstagram/></a></li>
                                </ul>

                            </div>
                    </div>

                    </Col>
                </Row>
            </Container>
            
        </Fragment>
    );
};

export default Footer;