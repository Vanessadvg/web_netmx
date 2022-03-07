import React, {  useEffect } from "react";
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './components/General/Nosotros';
import Servicios from './components/General/Servicios';
import AOS from "aos";
import './layout/css/bootstrap/bootstrap.css';
import './layout/css/style2.css';
import './layout/css/nav/demo.css';
import './layout/css/nav/component.css';
import './layout/css/owlcarousel/owl.carousel.min.css';
import './layout/css/owlcarousel/owl.theme.default.min.css';
import "./layout/css/aos.css";
import Encabezado from "./components/Navbar/Encabezado";
import Productos from "./components/General/Productos";
import Portafolio from "./components/General/Portafolio";
import Curriculum from "./components/General/Curriculum";
import Contacto from "./components/General/Contacto";
import Footer from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 
  return (
    <div className="App">
      <div className="menu fixed-top "></div>
      <Navbar></Navbar>
      <Encabezado></Encabezado>
      <Nosotros></Nosotros>
      <Servicios></Servicios>
      <Productos></Productos>
      <Portafolio></Portafolio>
      <Curriculum></Curriculum>
      <Contacto></Contacto>
      <Footer></Footer>
      </div>
  );
}

export default App;
