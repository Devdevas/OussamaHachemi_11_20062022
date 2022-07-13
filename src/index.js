import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Lodging from "./pages/Lodging";
import DataProvider from "./utils/context";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/logement/:id" element={<Lodging />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </DataProvider>                                                                                                                 
    </Router>
  </React.StrictMode>
);
