import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "routes/route";
import "./App.css";

function App() {
  const mapRoutes = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));
  return <Routes>{mapRoutes}</Routes>;
}

export default App;
