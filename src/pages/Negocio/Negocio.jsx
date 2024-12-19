import React, { useEffect, useState } from 'react';
import './Negocio.css';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { RiEBike2Fill, } from 'react-icons/ri';
import { VscTasklist } from 'react-icons/vsc';
import { TbWorld } from 'react-icons/tb';
import ModalImage from 'react-modal-image';
import { BsFacebook, BsEnvelopeAt, BsFillPinFill, BsTelephoneOutbound, BsBriefcase, BsAirplane } from 'react-icons/bs';
import {GrLocation} from 'react-icons/gr'
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import config from '../../config';
import { useParams } from 'react-router-dom';
import Navigation from '../HomeBanner/Navigation';

const fetchData = async (id_business) => {
    try {
      const response = await axios.get(`${config.base_URL}${config.locality}/${id_business}`);
      return response.data.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

const Negocio = () => {

    const { id_business } = useParams();
    const [loading, setLoading] = useState(true);
    // use this for show data
    const [business, setBusiness] = useState({});
    const [images, setImages] = useState([]);
    const [days, setDays] = useState([]);
    const [socialNetworks, setSocialNetworks] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchDataAndSetData = async () => {
          try {
              const fetchedData = await fetchData(id_business);
              if (fetchedData) {
                  setBusiness(fetchedData.business_details[0]);
                  setImages(fetchedData.images)
                  const day =fetchedData.business_details[0].business_days.split(",")
                  const socialNetworksArray = fetchedData.business_details[0].social_networks.split(",");
                  setSocialNetworks(socialNetworksArray)
                  setDays(day);
                  setLoading(false);
              }
          } catch(error) {
            
            setLoading(false);
          }
        };
    
        if (id_business) {
          fetchDataAndSetData();
        }
    
        // Cleanup function
        return () => {
          // Perform any cleanup if necessary
        };
    }, [id_business]);
    
    if (loading) {
        return <div className="d-flex align-items-center justify-content-center py-5 my-5" style={{height: '100vh'}}>
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <>
            <div className='negocio-img'>
                <Navigation />
            </div>
            <Container>
                <img src={business.logo_url} className='negocio-logo' alt="negocio logo" />

                <Row>
                    <Col lg={9} className='mt-3'>
                        <div className='mt-4 pt-5'>
                            <div className='custom-flex'>
                                <h3 className='negocio-title'>{business.name}</h3>
                                <span className='fs-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                                    </svg>
                                </span>
                            </div>
                            {/* <p className="title-business">{business.description}</p> */}
                        </div>
                        <div className='mt-5'>
                            <h3 className='negocio-title'>Información General</h3>
                            <p className="title-business">{business.description}</p>
                        </div>
                        <div>
                            <Row>
                                <Col className='mt-4' lg={4}>
                                <a className="text-decoration-none text-dark" href={"mailto:"+business.email}>
                                    <div className="feature-card">
                                    <BsEnvelopeAt className='feature-img' />
                                    <div>
                                       <h6 className='mb-0 feature-title'>Correo electrónico</h6>

                                            <p className="text-muted mb-0">Toca aquí para enviar</p>
                                      
                                    </div>
                                    </div>
                                    </a>
                                </Col>
                                <Col className='mt-4' lg={4}>
                                    <div className="feature-card">
                                    <BsTelephoneOutbound className='feature-img' />
                                    <div>
                                       <a className="text-decoration-none text-dark" href={"tel:"+business.cell_phone_number}>
                                            <h6 className='mb-0 feature-title'>Teléfono</h6>
                                            <p className="text-muted mb-0">Toca aquí para llamar</p>
                                        </a>
                                    
                                    </div>
                                    </div>
                                </Col>
                                <Col className='mt-4' lg={4}>
                                    <div className="feature-card">
                                    <FaWhatsapp className='feature-img' />
                                    <div>
                                            <h6 className='mb-0 feature-title'>WhatsApp</h6>
                                            <p className="text-muted mb-0">{business.cell_phone_number}</p>
                                    </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                
                                {
                                    business.bill ? 
                                      (
                                    <Col className='mt-4' lg={4}>
                                        <div className="feature-card">
                                        <VscTasklist className='feature-img' />
                                        <div>
                                            <h6 className='mb-0 feature-title'>Emite factura</h6>
                                        </div>
                                        </div>
                                    </Col>

                                      ): null
                                }
                            </Row>
                           
                        </div>
                        {
                            business.online_store ? 
                             (
                             <div> 
                             <div className='mt-5'>
                                <h3 className='negocio-title'>Tienda en línea</h3>
                                <p className="title-business">Toca el icono para abrir en una nueva pestaña.</p>
                             </div>
                                <div className='mt-3 pb-3'>
                                  <Row>
                                     {
                        
                                     socialNetworks.map((link, index) => {
                                        const trimmedLink = link.trim();
                                        let icon = null;
                                        let heading = null;
                                        let lastElement = null;
                                        let linkUrl = null;


                                        if (trimmedLink.includes('instagram')) {
                                            icon = <AiOutlineInstagram className='feature-img' />;
                                            heading = "Instagram";
                                            const startIndex = trimmedLink.indexOf('.com/') + 5;
                                            const endIndex = trimmedLink.indexOf('/', startIndex);
                                            lastElement = trimmedLink.substring(startIndex, endIndex);
                                            linkUrl = "@"+lastElement
                                        
                                            
                                        } else if (trimmedLink.includes('facebook')) {
                                            icon = <BsFacebook className='feature-img' />;
                                            heading = "Facebook"
                                            const splitParts = trimmedLink.split('/');
                                            lastElement = splitParts.pop();
                                            linkUrl = "/"+lastElement
                                        } else {

                                            icon = <TbWorld className='feature-img' />
                                            heading = "Sitio Web"
                                            const splitParts = trimmedLink.split('/');
                                            lastElement = splitParts.pop();
                                            linkUrl = trimmedLink

                                        }

                                        return (

                                            
                                         <Col className='mb-4' lg={4}>
                                             <div className="feature-card cursor-pointer" onClick={()=>window.location.href = trimmedLink}>
                                                 {icon}
                                             <div>
                                             <h6 className='mb-0 feature-title'> {heading}</h6>
                                                 <p className="text-muted mb-0">{linkUrl}</p>
                                             </div>
                                             </div>
                                         </Col>
                                          
                                        );
                                        })}
                   
                                     </Row>
                                 </div>
                            </div>   
                             ): null
                        }
                      
                        <hr/>
                        <div className='mt-4'>
                            <h3 className='negocio-title'>Galería de imágenes</h3>
                            <p className="title-business">Toca una imagen para abrir la galería.</p>
                        </div>
                        <div className='mt-1 gal-card'>
                            {
                                images.map((item,index)=>
                                (
                                    <ModalImage
                                    className='img-galery'
                                    key={index}
                                    small={item}
                                    large={item}
                                    alt="Image-1"
                                    />
                                ))
                            }
                       
                         
                        </div>
                        {
                            business.physical_store && business.url_google != null  ?
                             (
                             <div className='mt-5 mb-4'>
                                <h3 className='negocio-title mb-3'>Tienda física</h3>
                                <div>
                                    <a target="_blank" rel="noreferrer" className="text-decoration-none text-dark" href={business.url_google}> 
                                        <div className="feature-card cursor-pointer">
                                            <BsFillPinFill className='feature-img' />
                                        <div>
                                            <h6 className='mb-1 feature-title'>Encuéntranos en</h6>
                                            <p className="text-primary mb-0">{business.city + ","+business.state+","+business.country}</p>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             ): null 
                        }
                        <Row>
                            <Col lg={6}>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className="Accordion-width my-5">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> Hoy {business.start_date+ "-"+business.end_date}</Accordion.Header>
                                        <Accordion.Body>
                                        <Table bordered>
                                            <tbody>
                                                {
                                                    days.map((item,index)=>
                                                    (
                                                        <tr key={index}>
                                                            <td>{item}</td>
                
                                                            <td>{business.start_date+ "-"+business.end_date}</td>
                                                        </tr>
                                                    ))
                                                }
                                            
                                            </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col lg={6}>
                            {/* {
                                business.url_google &&
                                <div className='mb-5 pb-3' style={{ width: '100%', maxWidth: '600px' }}>
                                            <Map url={business.url_google} />
                                </div>
                            } */}
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} className='right-col-negocio'>
                        <div>
                            <h4 className='fw-bolder'>Características</h4>
                            {
                                business.delivery && 
                                <div className="feature-card" >
                                    <RiEBike2Fill className='feature-img-right' />
                                    <p>Servicio a domicilio</p>
                                </div>
                            }
                            {
                                business.shipping &&
                                <div className="feature-card" >
                                    <BsAirplane className='feature-img-right' />
                                    <p>Envios nacionales</p>
                                </div>
                            }
                             {
                                business.delivery && 
                                <div className="feature-card" >
                                    <GrLocation className='feature-img-right' />
                                    <p>Envios locales</p>
                                </div>
                            }
                            {
                                business.is_owner_verified &&
                                <div className="feature-card" >
                                    <BsBriefcase className='feature-img-right' />
                                    <p>Negocio verificado</p>
                                </div>
                            }
                            
                        </div>
{/*                         <div className='mt-4'>
                            <h5 className='fw-bolder'>CÓDIGO PROMOCIONAL</h5>
                            <FormControl className="w-75" type='text' placeholder='' />
                            <p className='mt-1 fw-bold'>Válido al 15 de octubre 2021.</p>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Negocio;
