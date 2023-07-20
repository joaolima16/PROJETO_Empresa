import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ObrasPage from "../Pages/Obra/Obra";
import ListObrasPage from "../Pages/ListObras/LsObras";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ObrasPage />} path="/obra" />
        <Route element={<ListObrasPage />} path="/obras" />
    
      </Routes>
    </BrowserRouter>
  );
}
