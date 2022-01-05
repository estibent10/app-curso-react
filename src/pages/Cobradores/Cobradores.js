import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags';
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Cobradores = () => {
    return (
        <>
            <div className="page-content">
                
                <MetaTags>
                    <title>SINPE-TP | Cobradores</title>
                </MetaTags>
                
                <div className="container-fluid">
                    
                    {/* <Breadcrumbs title="Cobradores" breadcrumbItem="Cobradores" /> */}
                    
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4 mb-4">Cobradores</CardTitle>
                                    {/* Botón Nuevo */}
                                    {/* grid */}
                                    <h1>SINPE-TP</h1>
                                    <p>Sistema Nacional De Pago Electrónico En El Transporte Público</p>
                                    <img></img>
                                    <p>Estudiante: Steven Díaz Gómez</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Cobradores