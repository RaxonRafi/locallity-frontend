import React, { Fragment, useState, useEffect } from 'react';
import './HomeBanner.css';
import Navigation from './Navigation'
import HomeSlider from './HomeSlider';
import { Container, Row ,Col, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import cat1 from '../../assets/_img/--comida.svg'
import cat2 from '../../assets/_img/--hogar.svg'
import cat3 from '../../assets/_img/--eventos.svg'
import cat4 from '../../assets/_img/--bienestar.svg'
import cat5 from '../../assets/_img/--regalos.svg'
import cat6 from '../../assets/_img/--papeleria.svg'
import cat7 from '../../assets/_img/--shopping.svg'
import cat8 from '../../assets/_img/--infantil.svg'
import About from './About';
import GoogleMaps from './GoogleMaps';
import Safety from './Safety';
import Footer from './Footer';
import { useRedirect } from '../../hooks/useRedirect';
import pathname from '../../routes';


const HomeBanner = () => {
    const [categorie, setCategorie] = useState('');
    const [search, setSearch] = useState('');
    const redirect = useRedirect();
    useEffect(() => {
        if (categorie) {
            redirect(`${pathname.anunciantes}?category=${categorie}`);
        }
    }, [categorie, redirect]);
    return (
        <Fragment>
            <Container fluid style={{ overflow: 'hidden' }} className="topBanner">
                <div className="topBannerOverlay">
                <Navigation/>
                  <Container className="bannerContents text-center">
                    <Row>
                        <Col>
                          <p className="bannerText">Todos los negocios locales en un solo lugar.<br/><br/></p>
                        </Col>
                    </Row>
                      <div className="formRow">
                        <Row>
                            <Col lg={6}  md={6} sm={6} xs={12} className="firstCol">
                                <Form.Select className="selectItemBox1" aria-label="Default select example">
                                    <option value="Monterrey">Nuevo León</option>
                                </Form.Select>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12} className="secondCol">
                              <Row>
                                <Col lg={6} md={8} sm={10} xs={10} >
                                    <Form.Select onChange={e => setSearch(e.target.value)} className="selectItemBox" aria-label="Default select example">
                                        <option value="">Elige la categoría</option>
                                        <option value="Comida">Comida</option>
                                        <option value="Infantil / Bebés">Infantil / Bebés</option>
                                        <option value="Hogar">Hogar</option>
                                        <option value="Papelería">Papelería</option>
                                        <option value="Eventos">Eventos</option>
                                        <option value="Bienestar">Bienestar</option>
                                        <option value="Regalos">Regalos</option>
                                        <option value="Shopping">Shopping</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={6} md={4} sm={2} xs={2} className="btnCol">
                                    <div className="btnDiv">
                                        <Button onClick={() => redirect(`${pathname.anunciantes}?category=${search}`)} className="btnStyle" variant="primary">Buscar</Button>
                                    </div>
                                </Col>
                              </Row> 
                            </Col>
                           
                        </Row>
                    </div>
                  </Container>
                </div>
            </Container>

            <HomeSlider />

            <Container fluid className="Categories">
                <div className="categoryChild">
                  <Container >
                    <h2>Descubre por categoría</h2>
                    <p>Toca una categoría para iniciar la búsqueda por ubicación.</p>
                        <div className="categoryItems">
                        <Row>
                          <Col lg={4} md={6} sm={12} xs={12} className="mb-3">
                            <div onClick={() => setCategorie('Comida')} className="cardDiv">
                                <Card className="categoryCard">              
                                        <Card.Body>
                                            <div className="cardItems d-flex align-items-center">
                                                <div className="categoryImg">
                                                    <img height={70} width={78} src={cat1}  alt=""  />
                                                </div>
                                                <div className="categoryDetails ml-3">
                                                <h5>Comida</h5>
                                                <span>3158 anunciantes</span>
                                                </div>

                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                              </Col> 
                              <Col lg={4} md={6} sm={12} xs={12} className="mb-3 ">
                                <div onClick={() => setCategorie('Shopping')} className="cardDiv">
                                    <Card className="categoryCard">              
                                        <Card.Body>
                                            <div className="cardItems d-flex align-items-center">
                                                <div className="categoryImg">
                                                    <img height={70} width={78} src={cat7}  alt="cat7"  />
                                                </div>
                                                <div className="categoryDetails ml-3">
                                                <h5>Shopping</h5>
                                                <span>3258 anunciantes</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                               </Col> 
                               <Col lg={4} md={6} sm={12} xs={12} className="mb-3">
                                <div onClick={() => setCategorie('Papeleria')} className="cardDiv">
                                    <Card className="categoryCard">              
                                        <Card.Body>
                                            <div className="cardItems d-flex align-items-center">
                                                <div className="categoryImg">
                                                    <img height={70} width={78} src={cat6}  alt=""  />
                                                </div>
                                                <div className="categoryDetails ml-3">
                                                <h5>Papeleria</h5>
                                                <span>4719 anunciantes</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} xs={12} className="mb-3">
                                <div onClick={() => setCategorie('Hogar')} className="cardDiv">
                                <Card className="categoryCard">              
                                    <Card.Body>
                                        <div className="cardItems d-flex align-items-center">
                                            <div className="categoryImg">
                                                <img height={70} width={78} src={cat2}  alt=""  />
                                            </div>
                                            <div className="categoryDetails ml-3">
                                            <h5>Hogar</h5>
                                            <span>4719 anunciantes</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                              </div>
                            </Col>  
                            <Col  lg={4} md={6} sm={12} xs={12} className="mb-3">
                               <div onClick={() => setCategorie('Regalos')} className="cardDiv">
                                    <Card className="categoryCard">              
                                        <Card.Body>
                                            <div className="cardItems d-flex align-items-center">
                                                <div className="categoryImg">
                                                    <img height={70} width={78} src={cat5}  alt=""  />
                                                </div>
                                                <div className="categoryDetails ml-3">
                                                <h5>Regalos</h5>
                                                <span>1453 anunciantes</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                            </Col>
                            <Col  lg={4} md={6} sm={12} xs={12} className="mb-3">
                               <div onClick={() => setCategorie('Bienestar')} className="cardDiv">
                                    <Card className="categoryCard">              
                                        <Card.Body>
                                            <div className="cardItems d-flex align-items-center">
                                                <div className="categoryImg">
                                                    <img height={70} width={78} src={cat4}  alt=""  />
                                                </div>
                                                <div className="categoryDetails ml-3">
                                                <h5>Bienestar</h5>
                                                <span>980 anunciantes</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                                
                            </Col>
                            <Col lg={4} md={6} sm={12} xs={12} className="mb-3">
                                <div onClick={() => setCategorie('Eventos')} className="cardDiv">
                                        <Card className="categoryCard">              
                                            <Card.Body>
                                                <div className="cardItems d-flex align-items-center">
                                                    <div className="categoryImg">
                                                        <img height={70} width={78} src={cat3}  alt=""  />
                                                    </div>
                                                    <div className="categoryDetails ml-3">
                                                    <h5>Eventos</h5>
                                                    <span>980 anunciantes</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                </div>
                            </Col>
                            <Col  lg={4} md={6} sm={12} xs={12} className="mb-3">
                                <div onClick={() => setCategorie('Bebé')} className="cardDiv">
                                    <Card className="categoryCard">              
                                        <Card.Body>
                                            <div className="cardItems d-flex align-items-center">
                                                <div className="categoryImg">
                                                    <img height={70} width={78} src={cat8}  alt=""  />
                                                </div>
                                                <div className="categoryDetails ml-3">
                                                <h5>Infantil / Bebé</h5>
                                                <span>3158 anunciantes</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                            </Col>
                        </Row>
                        </div>
                    </Container>
                </div>
            </Container>
            <About/>
            <GoogleMaps/>
            <Safety/>
            <Footer/>
        </Fragment>
    );
};

export default HomeBanner;