import React, { useState } from 'react'
import {
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
} from "reactstrap";

import { AvField, AvForm } from "availity-reactstrap-validation";

const EditarOperador = (props) => {

    const [ModalEditarOperador, setModalEditarOperador] = useState(false);

    const ToggleModalEditarOperador = () => {
        
        setModalEditarOperador(!ModalEditarOperador);       

    };

    const HandleValidEventSubmitEditarOperador = (event, values) => {

        values.TipoIdentificacion = Number(values.TipoIdentificacion);

        props.HandleEditarOperador(event, values);

        ToggleModalEditarOperador();

    };

    return (
        <>
            <button type="button" className="btn btn-light btn-sm" title="Editar" onClick={ToggleModalEditarOperador}>
                <i className="fa fa-pencil-alt"></i>
            </button>

            <Modal
                isOpen={ModalEditarOperador}
                toggle={ToggleModalEditarOperador}            
            >
                <ModalHeader toggle={ToggleModalEditarOperador} tag="h4">
                    Editar Operador
                </ModalHeader>
                <ModalBody>
                    <AvForm
                        onValidSubmit={HandleValidEventSubmitEditarOperador}
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
                                    value={props.operador.TipoIdentificacion}
                                    disabled
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
                                    value={props.operador.Identificacion}
                                    disabled
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
                                    value={props.operador.Nombre}
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
                                    value={props.operador.Email}
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
                                    value={props.operador.CuentaIBAN}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-end">
                                    <button
                                        type="button"
                                        className="btn btn-light me-2"
                                        onClick={ToggleModalEditarOperador}
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

export default EditarOperador;
