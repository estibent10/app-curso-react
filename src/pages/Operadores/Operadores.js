import React, {useState} from 'react'
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags';

import DatosOperadores from "./OperadoresData"


import ListarCobradores from "../../components/Operadores/ListarCobradores"
import CrearOperador from "../../components/Operadores/CrearOperador"

const Operadores = () => {

    const [ListaOperadores, setListaOperadores] = useState(DatosOperadores);


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
                                    
                                    <CrearOperador/>
                                    <br></br>
                                    <ListarCobradores ListaOperadores={ListaOperadores}/>
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

 
