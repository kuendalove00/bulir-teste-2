import React, { useCallback } from "react";
import {  Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { nomeRotas } from "./nomeRotas";

import { Login } from "../pages/login/Login";
import { Registo } from "../pages/registo/Registo";
import AddServico from "../pages/servicos/add";
import { ListServico } from "../pages/servicos/list";


import Perfil from "../pages/perfil";
import Layout from "../components/Layout";
import AvailableServico from "../pages/servicos/availables";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}   element={<Login />} />
        <Route path={nomeRotas.login}   element={<Login />} />
        <Route path={nomeRotas.registo}  element={<Registo />} />
          <Route element={<Layout />}>
            <Route path={nomeRotas.servicos.cadastrar}  element={<AddServico />} />
            <Route path={nomeRotas.servicos.listar}  element={<ListServico />} />
            <Route path={nomeRotas.servicos.disponiveis}  element={<AvailableServico />} />
            <Route path={nomeRotas.perfil}  element={<Perfil />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;