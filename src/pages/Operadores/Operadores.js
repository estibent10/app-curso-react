import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags';

//import DatosOperadores from "./OperadoresData"

import CrearOperador from "../../components/Operadores/CrearOperador"
import RefrescarListaOperadores from "../../components/Operadores/RefrescarListaOperadores"
import ListarOperadores from "../../components/Operadores/ListarOperadores"

const Operadores = () => {

    const UrlBaseApi = "https://api-curso-react.azurewebsites.net/api/Operadores";

    useEffect(() => {
        ObtenerListaOperadores();
    }, []);

    //const [ListaOperadores, setListaOperadores] = useState(DatosOperadores);
    const [ListaOperadores, setListaOperadores] = useState([]);


    //Llamadas a Apis    
    
    //GET Todos
    const ObtenerListaOperadores = async () => {
        
        let res = await fetch(UrlBaseApi);
        
        let operadores = await res.json();
        
        setListaOperadores(operadores);
    };

     //GET BY ID
     /*const ObtenerOperador = async (TipoIdentificacion, Identificacion) => {
        try {

            const UrlApiObtenerOperador = UrlBaseApi + "/" + TipoIdentificacion + "/" + Identificacion;

            let res = await fetch(UrlApiObtenerOperador, {
                method: "GET",
            });            

            let operador = await res.json();

            return operador;            

        }
        catch (err) {
            console.log(err);
        }
    };*/

    //POST
    const AgregarOperador = async (operador) => {
        try {

            let res = await fetch(UrlBaseApi, {
                method: "POST",
                body: JSON.stringify(operador),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            //let response = await res.json();
            //Se puede validar si todo salió bien que muestre una alerta 
            
        }
        catch (err) {
            console.log(err);
        }
    };

    
    //DELETE
    const EliminarOperador = async (TipoIdentificacion, Identificacion) => {
        try {

            const UrlApiEliminarOperador = UrlBaseApi + "/" + TipoIdentificacion + "/" + Identificacion;

            let res = await fetch(UrlApiEliminarOperador, {
                method: "DELETE",
            });            

            //let response = await res.json();
            //Se puede validar si todo salió bien que muestre una alerta 

        }
        catch (err) {
            console.log(err);
        }
    };

     //PUT
     const EditarOperador = async (operador) => {
        try {

            const UrlApiEditarOperador = UrlBaseApi + "/" + operador.TipoIdentificacion + "/" + operador.Identificacion;

            let res = await fetch(UrlApiEditarOperador, {
                method: "PUT",
                body: JSON.stringify(operador),
                headers: {
                    "Content-Type": "application/json",
                }
            });           

            //let response = await res.json();
            //Se puede validar si todo salió bien que muestre una alerta 

        }
        catch (err) {
            console.log(err);
        }
    };

    //Manejadores de Eventos
    const HandleRefrescarListaOperadores = (e) =>{
        ObtenerListaOperadores();
    };

    /*const HandleObtenerOperador = async (e, TipoIdentificacion, Identificacion) =>{     
        
        let operador = await ObtenerOperador(TipoIdentificacion, Identificacion);
        
        return operador;
        
    };*/

    const HandleAgregarOperador = async (e, operador) =>{     
        
        await AgregarOperador(operador);

        ObtenerListaOperadores();
    };

    const HandleEliminarOperador = async (e, TipoIdentificacion, Identificacion) =>{     
        
        await EliminarOperador(TipoIdentificacion, Identificacion);

        ObtenerListaOperadores();
    };

    const HandleEditarOperador = async (e, operador) =>{     
        
        await EditarOperador(operador);

        ObtenerListaOperadores();
    };

    return (
        <>
            <div className="page-content">
                
                <MetaTags>
                    <title>SINPE-TP | Operadores</title>
                </MetaTags>
                
                <div className="container-fluid">
                    
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    
                                    <CardTitle className="h4 mb-4">Operadores</CardTitle>
                                    
                                    <div className="button-items" > 
                                        
                                        <CrearOperador HandleAgregarOperador={HandleAgregarOperador} />
                                        
                                        <RefrescarListaOperadores HandleRefrescarListaOperadores={HandleRefrescarListaOperadores}/>

                                    </div>
                                    <br></br>
                                    
                                    <ListarOperadores ListaOperadores={ListaOperadores} HandleEditarOperador={HandleEditarOperador} HandleEliminarOperador={HandleEliminarOperador}/>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Operadores;

 
