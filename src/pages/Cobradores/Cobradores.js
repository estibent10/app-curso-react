import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags';

import CrearCobrador from "../../components/Cobradores/CrearCobrador"
import RefrescarListaCobradores from "../../components/Cobradores/RefrescarListaCobradores"
import ListarCobradores from "../../components/Cobradores/ListarCobradores"

const Cobradores = () => {

    const UrlBaseApi = "https://api-curso-react.azurewebsites.net/api/Cobradores";

    useEffect(() => {
        ObtenerListaCobradores();
    }, []);

    const [ListaCobradores, setListaCobradores] = useState([]);


    //Llamadas a Apis    

    //GET Todos
    const ObtenerListaCobradores = async () => {

        let res = await fetch(UrlBaseApi);

        let Cobradores = await res.json();

        setListaCobradores(Cobradores);
    };

    //POST
    const AgregarCobrador = async (cobrador) => {
        try {

            let res = await fetch(UrlBaseApi, {
                method: "POST",
                body: JSON.stringify(cobrador),
                headers: {
                    "Content-Type": "application/json"
                }
            });

        }
        catch (er) {
            console.log(er);
        }
    };


    //DELETE
    const EliminarCobrador = async (TipoIdentificacion, Identificacion) => {
        try {

            const UrlApiEliminarCobrador = UrlBaseApi + "/" + TipoIdentificacion + "/" + Identificacion;

            let res = await fetch(UrlApiEliminarCobrador, {
                method: "DELETE",
            });


        }
        catch (er) {
            console.log(er);
        }
    };

    //PUT
    const EditarCobrador = async (cobrador) => {
        try {

            const UrlApiEditarCobrador = UrlBaseApi + "/" + cobrador.TipoIdentificacion + "/" + cobrador.Identificacion;

            let res = await fetch(UrlApiEditarCobrador, {
                method: "PUT",
                body: JSON.stringify(cobrador),
                headers: {
                    "Content-Type": "application/json",
                }
            });


        }
        catch (er) {
            console.log(er);
        }
    };

    //Manejadores de Eventos
    const HandleRefrescarListaCobradores = (e) => {
        ObtenerListaCobradores();
    };

    const HandleAgregarCobrador = async (e, cobrador) => {

        await AgregarCobrador(cobrador);

        ObtenerListaCobradores();
    };

    const HandleEliminarCobrador = async (e, TipoIdentificacion, Identificacion) => {

        await EliminarCobrador(TipoIdentificacion, Identificacion);

        ObtenerListaCobradores();
    };

    const HandleEditarCobrador = async (e, cobrador) => {

        await EditarCobrador(cobrador);

        ObtenerListaCobradores();
    };

    return (
        <>
            <div className="page-content">

                <MetaTags>
                    <title>SINPE-TP | Cobradores</title>
                </MetaTags>

                <div className="container-fluid">

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>

                                    <CardTitle className="h4 mb-4">Cobradores</CardTitle>

                                    <div className="button-items" >

                                        <CrearCobrador HandleAgregarCobrador={HandleAgregarCobrador} />

                                        <RefrescarListaCobradores HandleRefrescarListaCobradores={HandleRefrescarListaCobradores} />

                                    </div>
                                    <br></br>

                                    <ListarCobradores ListaCobradores={ListaCobradores} HandleEditarCobrador={HandleEditarCobrador} HandleEliminarCobrador={HandleEliminarCobrador} />

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Cobradores;


