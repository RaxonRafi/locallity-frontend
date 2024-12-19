import React, { useState } from 'react';
import './Anunciantes.css';
import { Row, Col, Form } from 'react-bootstrap';
// import bakery from '../../assets/images/logo-4-01.jpg';
import Footer from '../HomeBanner/Footer';
import Navigation from '../HomeBanner/Navigation';
import BusinessMap from './BusinessMap';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { toast } from 'react-toastify';


const category = [
    {id: 1, lable: 'Papelería'},
    {id: 2, lable: 'Eventos'},
    {id: 3, lable: 'Regalos'},
    {id: 4, lable: 'Bienestar'},
    {id: 5, lable: 'Hogar'},
]
const Subcategoría = [
    {id: 1, lable: 'Muebles'},
    {id: 2, lable: 'Fragancias'},
    {id: 3, lable: 'Decoración General'},
    {id: 4, lable: 'Cocina'},
    {id: 5, lable: 'Mudanza'},
    {id: 6, lable: 'Exterior'},
    {id: 7, lable: 'Casa Inteligente'},
    {id: 8, lable: 'Diseño de Interiores'},
]
const OtrosFiltros = [
    {id: 1, lable: 'Facturacion', title: 'bill'},
    {id: 2, lable: 'Tienda Física', title: 'physical_store'},
    {id: 3, lable: 'Tienda Online', title: 'online_store'},
    {id: 4, lable: 'Envíos nacionales', title: 'shipping'},
    {id: 5, lable: 'Negocio verificado', title: ''},
]


const Anunciantes = () => {
    const [showCategory, setShowCategory] = useState(true);
    const [showSub, setShowSub] = useState(true);
    const [showFil, setShowFil] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedOtherFilter, setSelectedOtherFilter] = useState('');
    const handleCategoryChange = (event, category) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedCategory(category);
        } else {
            setSelectedCategory('');
        }
    };
    const handleSubCategoryChange = (event, subCategory) => {
        const isChecked = event.target.checked;
        if (isChecked && selectedCategory) {
            setSelectedSubCategory(subCategory);
        } else {
            setSelectedSubCategory('');
            if (!selectedCategory) {
                toast.warn('Please Select Category first');
            }
        }
    };
    const handleOtherFilltersChange = (event, other) => {
        const isChecked = event.target.checked;
        if (isChecked && selectedCategory && selectedSubCategory) {
            setSelectedOtherFilter(other);
        } else {
            setSelectedOtherFilter('');
            if (!selectedCategory || !selectedSubCategory) {
                toast.warn(`Please Select ${!selectedCategory ? 'Category' : ''}, ${!selectedSubCategory ? 'SubCategory' : ''}`);
            }
        }
    };
    return (
        <div>
            <Navigation />
            <div className="container mt-3 pb-3">
            <Row >
                <Col lg={3} md={12} sm={12}>
                    <div className="anunciantes">
                        {/* <div className="biMenudiv">
                            <div onClick={() => setShowFilter(!showFilter)} className='biMenu'>
                                <BiMenuAltLeft style={{ fontSize: '15px' }}/>
                            </div>
                        </div> */}
                        <div>
                            <hr className='my-2'/>
                            <div onClick={() => setShowCategory(!showCategory)} className='d-flex justify-content-between cursor-pointer'>
                                <p className="fs-6 fw-medium">Categoría</p>
                                {
                                    showCategory ? 
                                    <SlArrowUp className='mt-2' style={{ fontSize: '15px' }} />
                                    :
                                    <SlArrowDown className='mt-2' style={{ fontSize: '15px' }} />
                                }
                            </div> 
                            <hr className='mt-0 mb-2' />
                            {
                                showCategory && 
                                <div>
                                    {
                                        category.map(item => (
                                            <Form.Check
                                            key={item.id}
                                            type='checkbox'
                                            className='fs-6'
                                            id={`category-${item.id}`}
                                            label={item.lable}
                                            checked={selectedCategory && selectedCategory === item.lable}
                                            onChange={(event) => handleCategoryChange(event, item.lable)}
                                        />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                        <div>
                            <hr className='my-2'/>
                            <div onClick={() => setShowSub(!showSub)} className='d-flex justify-content-between cursor-pointer'>
                                <p className="fs-6 fw-medium">Subcategoría</p>
                                {
                                    showSub ? 
                                    <SlArrowUp className='mt-2' style={{ fontSize: '15px' }} />
                                    :
                                    <SlArrowDown className='mt-2' style={{ fontSize: '15px' }} />
                                }
                            </div> 
                            <hr className='mt-0 mb-2' />
                            {
                                showSub &&
                                <div>
                                    {
                                        Subcategoría.map(item => (
                                            <Form.Check
                                            key={item.id}
                                            type='checkbox'
                                            className='fs-6'
                                            id={`subcategoría-${item.id}`}
                                            label={item.lable}
                                            checked={selectedSubCategory && selectedSubCategory === item.lable}
                                            onChange={(event) => handleSubCategoryChange(event, item.lable)}
                                        />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                        <div>
                            <hr className='my-2'/>
                            <div onClick={() => setShowFil(!showFil)} className='d-flex justify-content-between cursor-pointer'>
                                <p className="fs-6 fw-medium">Otros filtros</p>
                                {
                                    showFil ? 
                                    <SlArrowUp className='mt-2' style={{ fontSize: '15px' }} />
                                    :
                                    <SlArrowDown className='mt-2' style={{ fontSize: '15px' }} />
                                }
                            </div> 
                            <hr className='mt-0 mb-2' />
                            {
                                showFil && 
                                <div>
                                    {
                                        OtrosFiltros.map(item => (
                                            <Form.Check
                                            key={item.id}
                                            type='checkbox'
                                            className='fs-6'
                                            id={`filtros-${item.id}`}
                                            label={item.lable}
                                            checked={selectedOtherFilter && selectedOtherFilter.id === item.id}
                                            onChange={(event) => handleOtherFilltersChange(event, item)}
                                        />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Col>
                <Col lg={9} md={12} sm={12}>
                   
                        <BusinessMap
                            setCategorie={setSelectedCategory}
                            categorie={selectedCategory}
                            setSubCategory={setSelectedSubCategory}
                            subCategory={selectedSubCategory}
                            setOtherFilter={setSelectedOtherFilter}
                            otherFilter={selectedOtherFilter}
                        />
                        
                </Col>
            </Row>
            </div>
            <hr />
            <Footer />
        </div>
    );
};

export default Anunciantes;
