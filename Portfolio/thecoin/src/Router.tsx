import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/:coinMarket/detail" element={<Detail />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
