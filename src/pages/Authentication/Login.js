import PropTypes from 'prop-types'
import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Alert, Container, Card } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions"

// import images

//import logo from "../../assets/images/logo-dark.png"
//import logolight from "../../assets/images/logo-light.png"
import logo from "../../assets/images/TP/LOGO-SINPE-TP-01-Marca.png"
import logolight from "../../assets/images/TP/logoTP.png";



const Login = (props) => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.loginUser(values, props.history)
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>SINPE-TP | Login</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="mdi mdi-home-variant h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="text-center mb-5">
                <Link to="/" className="auth-logo">
                  <img src={logo} alt="" height="150" className="auth-logo-dark" />
                  <img src={logolight} alt="" height="28" className="auth-logo-light" />
                </Link>
                <p className="font-size-15 text-muted mt-3">Sistema Nacional De Pago Electrónico En El Transporte Público</p>
              </div>
              <Card className="overflow-hidden">
                <Row className="g-0">
                  <Col lg={6}>
                    <div className="p-lg-5 p-4">
                      <div>
                        <h5>Bienvenido !</h5>
                        <p className="text-muted">Inicio de sesión.</p>
                      </div>
                      <div className="mt-4 pt-3">
                        <AvForm
                          className="form-horizontal"
                          onValidSubmit={(e, v) => {
                            handleValidSubmit(e, v)
                          }}
                        >
                          {props.error && typeof props.error === "string" ? (
                            <Alert color="danger">{props.error}</Alert>
                          ) : null}

                          <div className="mb-3">
                            <AvField
                              name="email"
                              label="Email"
                              value="admin@themesbrand.com"
                              className="form-control"
                              placeholder="Ingrese Email"
                              type="email"
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <div className="float-end">
                              <Link to="/olvido-contrasena" className="text-muted">Recuperar Contraseña?</Link>
                            </div>
                            <AvField
                              name="password"
                              label="Contraseña"
                              value="123456"
                              type="password"
                              required
                              placeholder="Ingrese Contraseña"
                            />
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Recordarme
                        </label>
                          </div>

                          <div className="mt-3">
                            <button
                              className="btn btn-primary w-100 waves-effect waves-light"
                              type="submit"
                            >
                              Ingresar
                        </button>
                          </div>
                          <div className="mt-4 text-center">
                            <p className="mb-0">No tiene una cuenta en SINPE-TP ? <a href="/register" className="fw-medium text-primary"> Crear Cuenta </a> </p>
                          </div>
                        </AvForm>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="p-lg-5 p-4 bg-auth h-100 d-none d-lg-block">
                      <div className="bg-overlay"></div>
                    </div>
                  </Col>
                </Row>
              </Card>
              <div className="mt-5 text-center">
                <p>© {new Date().getFullYear()} SINPE-TP. Creado con <i
                  className="mdi mdi-heart text-danger"></i> para los operadores del transporte público de Costa Rica
                        </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}