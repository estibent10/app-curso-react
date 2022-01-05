import React, { Component } from 'react'

const ListarCobradores = (props) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-nowrap table-hover mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Tipo Identificación</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cuenta IBAN</th>
                            <th scope="col">Estado</th>
                            <th scope="col" style={{ width: '120px' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.ListaOperadores.length > 0
                                ?(
                                    props.ListaOperadores.map(
                                        operador => {
                                            const { TipoIdentificacion, Identificacion, Nombre, Email, CuentaIBAN, Estado } = operador;
                                            return (

                                                <tr>
                                                    <th>{TipoIdentificacion}</th>
                                                    <td>{Identificacion}</td>
                                                    <td>{Nombre}</td>
                                                    <td>{Email}</td>
                                                    <td>{CuentaIBAN}</td>
                                                    <td> <span className="badge badge-soft-success font-size-12">{Estado}</span> </td>
                                                    <td>
                                                        <div class="button-items">
                                                            <button type="button" className="btn btn-light btn-sm" title="Modificar">
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </button>

                                                            <button type="button" className="btn btn-light btn-sm" title="Eliminar">
                                                                <i className="fa fa-trash-alt"></i>
                                                            </button>
                                                        </div>

                                                    </td>
                                                </tr>

                                            )
                                        }
                                    )

                                )
                                :(
                                    <tr className="table-danger">
                                        <td colSpan={12}>No se encontraron datos</td>
                                    </tr>
                                )
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListarCobradores;
