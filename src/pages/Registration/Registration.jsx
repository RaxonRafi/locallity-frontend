/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Registration.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Registration1 from './Registration1';
import Registration2 from './Registration2';
import { toast } from 'react-toastify';
import { useRedirect } from '../../hooks/useRedirect';
import pathname from '../../routes';

const Register = ({handleInputChange, formData, errors}) => {


 
    return (
        <div>
            <div>
                <h5 className='mb-3'>Información General</h5>
                <p>A partir de esta sección, los datos van a ser públicos en el perfil del negocio.</p>
                <div className="row">
                    <div className="col-md-6">
                    <Form>
                        <Form.Group className='mb-3'>
                        <Form.Label className='lebel'>Nombre del negocio</Form.Label>
                        <Form.Control onChange={handleInputChange} value={formData.name} name='name' className='control' type="text" placeholder="Mi Negocio" />
                        {errors.name && <span className='text-danger error'>{errors.name}</span>}
                        </Form.Group>
                        
                        <Form.Group>
                        <Form.Label className='lebel'>Correo electrónico</Form.Label>
                        <Form.Control onChange={handleInputChange} value={formData.email} name='email' className='control' type="email" placeholder="ej. juanperez@gmail.com" />
                        {errors.email && <span className='text-danger error'>{errors.email}</span>}
                        </Form.Group>
                    </Form>
                    </div>
                    <div className="col-md-6">
                    <Form>
                        <Form.Group className='mb-3'>
                        <Form.Label className='lebel'>Nombre y apellido de contacto</Form.Label>
                        <Form.Control onChange={handleInputChange} value={formData.manager} name='manager' className='control' type="text" placeholder="ej. Juan Pérez" />
                        {errors.manager && <span className='text-danger error'>{errors.manager}</span>}
                        </Form.Group>

                        <Form.Group>
                        <Form.Label className='lebel'>Teléfono de contacto</Form.Label>
                        <Form.Control onChange={handleInputChange} value={formData.cell_phone_number} name='cell_phone_number' className='control' type="text" placeholder="ej. (222)237-9001" />
                        {/* {errors.cell_phone_number && <span className='text-danger error'>{errors.cell_phone_number}</span>} */}
                        </Form.Group>

                    </Form>
                    </div>
                </div>
                
            </div>

            <div className="row">
                <div className="col-md-6">
                <div className='mt-4'>
                <p className='mb-2'>Antigüedad del negocio</p>
                <div className="d-flex align-items-center gap-5">
                    <div className="custom-flex">
                        <input onChange={handleInputChange} type="radio" checked={formData.business_age === '0-1'} value="0-1" name="business_age" id="" />
                        <p>0 - 1 años</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} type="radio" checked={formData.business_age === '2-5'} value="2-5" name="business_age" id="" />
                        <p>2 - 5 años</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} type="radio" checked={formData.business_age === '5+'} value="5+" name="business_age" id="" />
                        <p>+5 años</p>
                    </div>
                </div>

            </div>

        </div>
                <div className="col-md-6">
                    <div className='mt-4'>
                        <Form.Group>
                            <Form.Label className='lebel'>Número de whatsapp</Form.Label>
                            <Form.Control onChange={handleInputChange} value={formData.whatsapp_no} name='whatsapp_no' className='control' type="text" placeholder="ej. +520000000000" />
                            {errors.whatsapp_no && <span className='text-danger error'>{errors.whatsapp_no}</span>}
                        </Form.Group>
                    </div>
                </div>
            </div>




            
            <div className='mt-2'>
                <Form.Group className='mb-3'>
                    <Form.Label className='lebel'>Breve descripción del negocio</Form.Label>
                    <Form.Control onChange={handleInputChange} value={formData.description} name='description' className='control' type="text" placeholder="..." />
                    {errors.description && <span className='text-danger error'>{errors.description}</span>}
                </Form.Group>
            </div>
            <div className='mt-4'>
                <p className='mb-2'>¿Cuentas con servicio a domicilio?</p>
                <div className="d-flex align-items-center gap-5">
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.delivery === '1'} value='1' type="radio" name="delivery" id="" />
                        <p>Sí</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.delivery === '0'} value='0' type="radio" name="delivery" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='mb-2'>¿Cuentas con envíos locales?</p>
                <div className="d-flex align-items-center gap-5">
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.local_shipment === '1'} value='1' type="radio" name="local_shipment" id="" />
                        <p>Sí</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.local_shipment === '0'} value='0' type="radio" name="local_shipment" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='mb-2'>¿Cuentas con envíos nacionales?</p>
                <div className="d-flex align-items-center gap-5">
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.national_shipment === '1'} value='1' type="radio" name="national_shipment" id="" />
                        <p>Sí</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.national_shipment === '0'} value='0' type="radio" name="national_shipment" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='mt-4 pb-4'>
                <p className='mb-2'>¿Cuentas con facturación?</p>
                <div className="d-flex align-items-center gap-5">
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.bill === '1'} value='1' type="radio" name="bill" id="" />
                        <p>Sí</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.bill === '0'} value='0' type="radio" name="bill" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='pt-4 pb-5'>
                <div>
                    <h5>Filtro de Ubicación</h5>
                    <p>Completa de acuerdo a dónde es la sede de tu negocio o mercado principal.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <Form>
                        <Form.Group className='mb-3'>
                        <Form.Label className='lebel'>Estado</Form.Label>
                        <Form.Select onChange={handleInputChange} value={formData.state} name='state' aria-label="Default select example">
                            <option value='Nuevo León'>Nuevo León</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                        <Form.Label className='lebel'>Municipio</Form.Label>
                        <Form.Select onChange={handleInputChange} value={formData.municipality} name='municipality' aria-label="Default select example">
                            <option value="Apodaca">Apodaca</option>
                            <option value="Cadereyta Jiménez">Cadereyta Jiménez</option>
                            <option value="García">García</option>
                            <option value="General Escobedo">General Escobedo</option>
                            <option value="Guadalupe">Guadalupe</option>
                            <option value="Juárez">Juárez</option>
                            <option value="Monterrey">Monterrey</option>
                            <option value="Pesquería">Pesquería</option>
                            <option value="Salinas Victoria">Salinas Victoria</option>
                            <option value="San Nicolás de los Garza">San Nicolás de los Garza</option>
                            <option value="San Pedro Garza García">San Pedro Garza García</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="Santiago">Santiago</option>   
                        </Form.Select>
                        </Form.Group>
                    </Form>
                    </div>
                    <div className="col-md-6">
                    <Form>
                        <Form.Group className='mb-3'>
                        <Form.Label className='lebel'>Ciudad</Form.Label>
                        <Form.Select onChange={handleInputChange} value={formData.city} name='city' aria-label="Default select example">
                            <option value='Monterrey'>Monterrey</option>
                        </Form.Select>
                        </Form.Group>
                            
                        <Form.Group>
                        <Form.Label className='lebel'>Código Postal</Form.Label>
                        <Form.Control onChange={handleInputChange} value={formData.postal_code} name='postal_code' className='control' type="text" placeholder="" />
                        </Form.Group>
                    </Form>
                    </div>
                </div>
            </div>
        </div>   
    );
}

const Registration = () => {
    const navigate = useRedirect();
    const [switchPage, setSwitchPage] = useState(1);
    const [errors, setErrors] = useState({});
    const [selectedImgsFile, setSelectedImgsFile] = useState(null);
    const [selectedLogoFile, setSelectedLogoFile] = useState(null);
    const [formData, setFormData] = useState({
        name: 'Pakal', //oki
        price:'1000', //oki
        manager: 'Emmanuel',//ok
        description: 'Somos tu mejor opción de experiencia digital con Soluciones Tecnológicas Globales Pakal.', //oki
        event_classification:'Birthday',//ok
        capacity_people:'100',//ok
        address_1:'Juarez Ave. #123',//ok
        address_2:'Juarez Ave. #123',//ok
        address_3:'Juarez Ave. #123',//ok
        city: 'Monterrey',//oki
        state: 'Nuevo León',//oki
        country:'Mexico',//oki
        postal_code: '01470',//oki
        cell_phone_number: '555-123-4567',//oki
        email: 'emmanuel@gmail.com',//oki
        event_type:'social',//ok
        publication_likes:'1',//ok
        questions: '5',//oki
        policies_terms:'policies and terms',//ok
        delivery: '1', //oki
        shipping:'1',//oki
        bill: '1',//oki
        antiquity: '5',//oki
        physical_store: '1',//oki
        online_store: '1',//oki
        url_google: 'https://goo.gl/maps/ucd1NUFHpBJBfzbL6',//oki
        business_days: '0-1',//oki
        category: 'Infantil/Bebés',//oki
        subcategory: 'Accesorios',//oki
        discount_code: 'LOCALLITY10',//oki
        business_age:'0-1',//oki
        municipality: 'demo',//oki
        accepts_credit_cards: '1',//oki
        is_owner_verified: '1',//oki
        status:'Activo',//oki
        start_date: '09:00 AM',//oki
        end_date: '06:00 PM',//oki
        social_networks: 'https://www.instagram.com/technologies_solutions_pakal/,https://solutions-pakal.web.app/',//oki
        national_shipment: '1',//oki
        local_shipment: '1',//oki
        whatsapp_no:'+525569711608',//oki
    });

    const handleInputChange = (e) => { //=== ok
        const { name, value, type } = e.target;

         if (name === 'social_networks') {
            setFormData((prevFormData) => {
                const existingNetworks = prevFormData.social_networks.split(',').map(item => item.trim());
                const newValue = value.trim(); // Remove extra spaces
    
                if (!existingNetworks.includes(newValue)) {
                    const updatedNetworks = [newValue, ...existingNetworks].filter(Boolean).join(',');
    
                    return {
                        ...prevFormData,
                        social_networks: updatedNetworks
                    };
                }
                
                return prevFormData; // Value already exists, no change needed
            });
        }
        else if (type === 'file') {
            if (e.target.files && e.target.files.length > 0) {
                setSelectedLogoFile(e.target.files[0]);
            }
        }
        else if (type === 'checkbox') {
          const isChecked = e.target.checked;
    
          setFormData((prevFormData) => {
            let updatedDays = prevFormData.business_days.split(',');
            if (isChecked) {
              // Add the day to the array if checked
              updatedDays.push(name);
            } else {
              // Remove the day from the array if unchecked
              updatedDays = updatedDays.filter((day) => day !== name);
            }
            // Join the updated days array into a comma-separated string
            const updatedBusinessDays = updatedDays.join(',');
            return {
              ...prevFormData,
              business_days: updatedBusinessDays
            };
          });
        } else {
            // default
            setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
            }));
        }
        
      }; //=== ok

      const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const filesArray = Array.from(e.target.files);
          setSelectedImgsFile(filesArray);
        }
      };

      const validateForm = () => {
          const errors = {};
          const regexPhone = /^\+\d{1,13}$/;
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const descriptionValue = formData.description.trim();
    
        // Perform validation checks for each field
        if (!formData.name) {
          errors.name = "Name is required.";
        }
        if (!formData.email) {
          errors.email = "Email is required.";
        }
        if (!regexEmail.test(formData.email)) {
        errors.email = "Invalid email address.";
        }
        if (!formData.manager) {
          errors.manager = "Manager is required.";
        }
        if (!formData.cell_phone_number) {
          errors.cell_phone_number = "Phone is required.";
        }
        if (descriptionValue.length > 250) {
            errors.description = "you can only add 250 characters maximum.";
        }
    
        // Set the errors state
        setErrors(errors);
    
        // Return true if there are no errors, false otherwise
        return Object.keys(errors).length === 0;
      };

      const handleNextPageTwo = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (validateForm()) {
            setSwitchPage(2);
        }
      };
      const handleNextPageThree = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (validateForm()) {
            setSwitchPage(3);
        }
      };

    const handleSubmit = async () => {
        if (formData.name === '' && formData.email === '' && formData.manager === '' && formData.cell_phone_number === '') {
            toast.warn('Already Data Submitted');
            return;
        }
        if (!validateForm()) {
            return; 
        }
        if (!selectedImgsFile && !selectedLogoFile) {
            toast.warn('Please select images and a logo');
            return;
        }

        

        const data = new FormData();
        data.append('name', formData.name); // oki
        data.append('price', '10000');   //oki
        data.append('manager', formData.manager); //oki
        data.append('description', formData.description); //oki
        // data.append('event_classification', 'Birthday'); //ok
        // data.append('capacity_people', '100'); //ok
        // data.append('address_1', 'Juarez Ave. #123'); //ok
        // data.append('address_2', 'Juarez Ave. #123'); //ok
        // data.append('address_3', 'Juarez Ave. #123'); //ok
        data.append('city', formData.city);//oki
        data.append('state', formData.state);//oki
        data.append('country', 'Mexico');//oki
        data.append('postal_code', formData.postal_code);//oki
        data.append('cell_phone_number', formData.cell_phone_number);//oki
        data.append('email', formData.email);//oki
        // data.append('event_type', 'Social');//ok
        // data.append('publication_likes','1');
        // data.append('questions', '5');//oki
        // data.append('policies_terms', 'policies and terms');//ok
        data.append('delivery', formData.delivery);//ok
        data.append('shipping', formData.shipping);//ok
        data.append('bill', formData.bill);//ok
        data.append('antiquity', formData.antiquity);//ok
        data.append('physical_store', formData.physical_store);//ok
        data.append('online_store', formData.online_store);//ok
        data.append('url_google', formData.url_google);//ok
        data.append('business_days', formData.business_days);//ok
        data.append('category', formData.category);//ok
        data.append('subcategory', formData.subcategory);//ok
        data.append('discount_code', formData.discount_code);//ok
        data.append('business_age', formData.business_age);//ok
        data.append('municipality', formData.municipality);//ok
        data.append('accepts_credit_cards', formData.accepts_credit_cards);//ok
        data.append('is_owner_verified', '1');//ok
        data.append('status', 'Activo');//ok
        data.append('start_date', formData.start_date);//ok
        data.append('end_date', formData.end_date);//ok
        data.append('social_networks', formData.social_networks);//ok
        data.append('national_shipment', formData.national_shipment);//ok
        data.append('local_shipment', formData.local_shipment);//ok
        data.append('whatsapp_no', formData.whatsapp_no);//ok
        if (selectedImgsFile && Array.isArray(selectedImgsFile)) {
            selectedImgsFile.forEach((file) => {
              if (file) {
                data.append('images', file);
              }
            });
          }
        data.append('logo', selectedLogoFile);

        //const headers = {
        //    'X-Requested-With': 'XMLHttpRequest',
        //    'content-type': 'application/json'
        //};
        // const urlBase = 'http://localhost:5000/api/v1/locality';
         const urlBase = 'https://api-business-registration.onrender.com/api/v1/locality';
        
        try {
            const response = await axios.post(urlBase, data);
            console.log('Respuesta:', response.data);
            if (response.status !== 200) {
                toast.error(response.data.message);
            }
            if (response.status === 200) {
                toast.success(response.data.message);
                setFormData({
                    name: '',
                    email: '',
                    manager: '',
                    cell_phone_number: '',
                    business_age: '0-1',
                    description: '',
                    delivery: '1',
                    national_shipment: '1',
                    local_shipment: '1',
                    bill: '1',
                    state: 'Nuevo León',
                    city: 'Monterrey',
                    municipality: '',
                    postal_code: '',
                    physical_store: '1',
                    url_google: '',
                    business_days: '',
                    start_date: '',
                    end_date: '',
                    online_store: '1',
                    social_networks: '',
                    category: '',
                    subcategory: '',
                    discount_code: '',
                    price: '1000',
                    antiquity: '5',
                    questions: '5',
                    event_classification: 'example',
                    capacity_people: '100',
                    accepts_credit_cards: '1',
                    is_owner_verified: '1',
                    whatsapp_no:''
                })
                setSelectedImgsFile(null);
                setSelectedLogoFile(null);
                navigate(pathname.success);
            }

        } catch (error) {
            toast.error(error.message)
            //console.error(error);
          }
    }
      

    return (
        <div className='container px-3'>
            <div className='d-flex align-items-center'>
                <div className='registration mx-auto'>
                    <div className='text-center mt-4'>
                        <h3 className='mb-2'>Registra tu marca</h3>
                        <p className='fs-6 pb-1'>Completa el formulario para formar parte de la plataforma.</p>
                    </div>
                    <hr />
                    {switchPage === 1 && <Register handleInputChange={handleInputChange} formData={formData} errors={errors} />}
                    {switchPage === 2 && <Registration1 handleInputChange={handleInputChange} formData={formData} />}
                    {switchPage === 3 && <Registration2 handleInputChange={handleInputChange} handleFileChange={handleFileChange} errors={errors} />}
                    <hr />
                    <div className='pb-5'>
                        {switchPage === 1 && 
                            <div className='btn-flex-2'>
                                <button onClick={() => {
                                    navigate(pathname.home)
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} className='rounded-1 btn btn-primary fs-6'>Regresar</button>
                                <p>Etapa 1 de 2</p>
                                <button onClick={handleNextPageTwo} className='rounded-1 btn btn-primary fs-6'>Siguiente</button>
                            </div>
                        } 
                        {switchPage === 2 && 
                            <div className='btn-flex-2'>
                                <button onClick={() => {
                                    setSwitchPage(1)
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} className='rounded-1 btn btn-light fs-6'>Atrás</button>
                                <p>Etapa 2 de 2</p>
                                <button onClick={handleNextPageThree} className='rounded-1 btn btn-primary fs-6'>Siguiente</button>
                            </div>
                        } 
                        {switchPage === 3 && 
                            <div className='btn-flex-2'>
                                <button onClick={() => {
                                    setSwitchPage(2)
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} className='rounded-1 btn btn-light fs-6'>Atrás</button>
                                <button onClick={handleSubmit} className='rounded-1 btn btn-primary fs-6'>Enviar datos</button>
                            </div>
                        } 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
