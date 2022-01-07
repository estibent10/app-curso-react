import React, { useState } from 'react'
import {
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
} from "reactstrap";

import { AvField, AvForm } from "availity-reactstrap-validation";

const CrearCobrador = (props) => {

    const [ModalAgregarCobrador, setModalAgregarCobrador] = useState(false);

    const ToggleModalAgregarCobrador = () => {
        setModalAgregarCobrador(!ModalAgregarCobrador);
    };

    const HandleValidEventSubmitAgregarCobrador = (event, values) => {

        values.TipoIdentificacion = Number(values.TipoIdentificacion);

        values.TipoIdentificacionOperador = Number(values.TipoIdentificacionOperador);

        props.HandleAgregarCobrador(event, values);

        ToggleModalAgregarCobrador();

    };

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={ToggleModalAgregarCobrador} >
                <i className="fa fa-plus mr-1"></i> Nuevo Cobrador
            </button>

            <Modal
                isOpen={ModalAgregarCobrador}
                toggle={ToggleModalAgregarCobrador}            
            >
                <ModalHeader toggle={ToggleModalAgregarCobrador} tag="h4">
                    Nuevo Cobrador
                </ModalHeader>
                <ModalBody>
                    <AvForm
                        onValidSubmit={HandleValidEventSubmitAgregarCobrador}
                    >
                        <Row form>

                            <Col className="col-12 mb-3">
                                <AvField
                                    name="TipoIdentificacion"
                                    label="Tipo De Identificación"
                                    type="select"
                                    errorMessage="Ingrese un tipo de identificación válido"
                                    validate={{
                                        required: { value: true },
                                        pattern: { value: '^[1-2]+$' },

                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">Persona Física</option>
                                    <option value="2">Persona Jurídica</option>
                                </AvField>
                            </Col>

                            <Col className="col-12 mb-3">
                                <AvField
                                    name="Identificacion"
                                    label="Identificación"
                                    type="text"
                                    errorMessage="Ingrese una identificación válida"
                                    validate={{
                                        required: { value: true },
                                        maxLength: { value: 22, errorMessage: 'Ingrese máximo 22 caracteres' }
                                    }}
                                />
                            </Col>

                            <Col className="col-12 mb-3">
                                <AvField
                                    name="Nombre"
                                    label="Nombre"
                                    type="text"
                                    errorMessage="Ingrese un nombre válido"
                                    validate={{
                                        required: { value: true },
                                        maxLength: { value: 100, errorMessage: 'Ingrese máximo 150 caracteres' }
                                    }}
                                />
                            </Col>

                            <Col className="col-12 mb-3">
                                <AvField
                                    name="Email"
                                    label="Email"
                                    type="email"
                                    errorMessage="Ingrese un Email válido"
                                    validate={{
                                        required: { value: true },
                                        maxLength: { value: 50, errorMessage: 'Ingrese máximo 150 caracteres' }
                                    }}
                                />
                            </Col>

                            <Col className="col-12 mb-3">
                                <AvField
                                    name="TipoIdentificacionOperador"
                                    label="Tipo De Identificación Operador"
                                    type="select"
                                    errorMessage="Ingrese un tipo de identificación válido"
                                    validate={{
                                        required: { value: true },
                                        pattern: { value: '^[1-2]+$' },

                                    }}
                                    
                                    
                                >
                                    <option value="0"></option>
                                    <option value="1">Persona Física</option>
                                    <option value="2">Persona Jurídica</option>
                                </AvField>
                            </Col>

                            <Col className="col-12 mb-3">
                                <AvField
                                    name="IdentificacionOperador"
                                    label="Identificación Operador"
                                    type="text"
                                    errorMessage="Ingrese una identificación válida"
                                    validate={{
                                        required: { value: true },
                                        maxLength: { value: 22, errorMessage: 'Ingrese máximo 22 caracteres' }
                                    }}
                                    
                                    
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-end">
                                    <button
                                        type="button"
                                        className="btn btn-light me-2"
                                        onClick={ToggleModalAgregarCobrador}
                                    >
                                        Cerrar
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-success save-event"
                                    >
                                        Guardar
                                    </button>

                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CrearCobrador;
