import React from 'react';
import { Form } from 'react-bootstrap';

const Registration2 = ({handleInputChange, handleFileChange}) => {
    return (
        <div>
            <div className="pt-4 pb-2">
                <p>Si quieren enviar imágenes adicionales, favor de mandarlas a hola@locallity.com.mx</p>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Sube alguna imagen que represente tus productos/servicios.</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" multiple />
                    <span className='error'>4 Images maximum</span>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Sube el logo del negocio en alta resolución.</Form.Label>
                    <Form.Control onChange={handleInputChange} type="file" />
                    <span className='error'>logo should be PNG format, and 223X223px</span>
                </Form.Group>
                <p>Al enviar los datos, aceptas nuestros términos y condiciones.</p>
            </div>
        </div>
    );
};

export default Registration2;