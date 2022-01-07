import React, { Component } from 'react'

import EditarCobrador from "./EditarCobrador"

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
                            <th scope="col">Operador Relacionado</th>
                            {/* <th scope="col">Tipo Identificacion Operador Relacionado</th> */}
                            <th scope="col">Estado</th>
                            <th scope="col" style={{ width: '120px' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.ListaCobradores.length > 0
                                ?(
                                    props.ListaCobradores.map(
                                        cobrador => {
                                            const { TipoIdentificacion, Identificacion, Nombre, Email, IdentificacionOperador, Activo } = cobrador;
                                            return (

                                                <tr key={Identificacion.toString()}>
                                                    <th>{(TipoIdentificacion == 1)?"Persona Física":"Persona Jurídica"}</th>
                                                    <td>{Identificacion}</td>
                                                    <td>{Nombre}</td>
                                                    <td>{Email}</td>                                                    
                                                    <td>{IdentificacionOperador}</td>                                                    
                                                    <td> 
                                                        {(Activo == 1)
                                                        ?<span className="badge badge-soft-success font-size-12">Activo</span>
                                                        :<span className="badge badge-soft-warning font-size-12">InActivo</span>
                                                        }
                                                        
                                                    </td>
                                                    <td>
                                                        <div className="button-items">

                                                            <EditarCobrador cobrador={cobrador} HandleEditarCobrador={props.HandleEditarCobrador} />

                                                            <button type="button" className="btn btn-light btn-sm" title="Eliminar" onClick={(e) => props.HandleEliminarCobrador(e,TipoIdentificacion,Identificacion)}>
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
                                        <td colSpan={12}>Intentando cargar datos...</td>
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
