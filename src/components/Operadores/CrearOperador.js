import React, { useState } from 'react'
import {
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
} from "reactstrap";

import { AvField, AvForm } from "availity-reactstrap-validation";

const CrearOperador = (props) => {

    const [ModalAgregarOperador, setModalAgregarOperador] = useState(false);

    const ToggleModalAgregarOperador = () => {
        setModalAgregarOperador(!ModalAgregarOperador);
    };

    const HandleValidEventSubmitAgregarOperador = (event, values) => {

        values.TipoIdentificacion = Number(values.TipoIdentificacion);

        props.HandleAgregarOperador(event, values);

        ToggleModalAgregarOperador();

    };

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={ToggleModalAgregarOperador} >
                <i className="fa fa-plus mr-1"></i> Nuevo Operador
            </button>

            <Modal
                isOpen={ModalAgregarOperador}
                toggle={ToggleModalAgregarOperador}            
            >
                <ModalHeader toggle={ToggleModalAgregarOperador} tag="h4">
                    Nuevo Operador
                </ModalHeader>
                <ModalBody>
                    <AvForm
                        onValidSubmit={HandleValidEventSubmitAgregarOperador}
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
                                    name="CuentaIBAN"
                                    label="Cuenta IBAN"
                                    type="text"
                                    errorMessage="Ingrese una cuenta IBAN válida"
                                    validate={{
                                        required: { value: true },
                                        maxLength: { value: 22, errorMessage: 'Ingrese máximo 50 caracteres' }
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
                                        onClick={ToggleModalAgregarOperador}
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

export default CrearOperador;
