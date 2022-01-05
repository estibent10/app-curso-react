import React from "react";
import { Redirect } from "react-router-dom";


import Login from "../pages/Authentication/Login";
import Login1 from "../pages/AuthenticationInner/Page-login";

import Inicio from "../pages/Inicio/Inicio";
import Operadores from "../pages/Operadores/Operadores";
import Cobradores from "../pages/Cobradores/Cobradores";

const userRoutes = [
  { path: "/inicio", component: Inicio },
  { path: "/operadores", component: Operadores },
  { path: "/cobradores", component: Cobradores },
  { path: "/", exact: true, component: () => <Redirect to="/inicio" /> },
];

const authRoutes = [
  // { path: "/logout", component: Logout },
  { path: "/login", component: Login },  

  //   // Authentication Inner
  { path: "/pages-login", component: Login1 },
];

export { userRoutes, authRoutes }
