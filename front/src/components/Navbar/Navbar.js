import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from '../../layout/img/NetMx-nav.svg';
import netmx from '../../layout/img/NetMX.svg';
import curva from '../../layout/img/curva.png';
import Constantes from "../../Constantes";
import 'react-toastify/dist/ReactToastify.css';
export default class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            traducciones: [],
        };
    }
    async componentDidMount() {
    fetch(`${Constantes.RUTA_API}/obtener_traduccion.php`) 
  .then(result=>result.json())
  .then(traducciones=>this.setState({traducciones}))
       
 
    }
    render() {
        const texto_1 = this.state.traducciones.filter(traducciones => traducciones.id=== 1).map(traducciones => traducciones.texto_es)
        const texto_2 = this.state.traducciones.filter(traducciones => traducciones.id=== 2).map(traducciones => traducciones.texto_es)
        const texto_3 = this.state.traducciones.filter(traducciones => traducciones.id=== 3).map(traducciones => traducciones.texto_es)
        const texto_4 = this.state.traducciones.filter(traducciones => traducciones.id=== 4).map(traducciones => traducciones.texto_es)
        const texto_5 = this.state.traducciones.filter(traducciones => traducciones.id=== 5).map(traducciones => traducciones.texto_es)
        const texto_6 = this.state.traducciones.filter(traducciones => traducciones.id=== 6).map(traducciones => traducciones.texto_es)
      return (
          
          <header>
       
        <nav className="navbar navbar-expand-lg navbar-dark menu menu--ferdinand"  id="nav-main">
        <a className="navbar-brand" href="index.php">
            <img src={logo} height="50" alt="NetMX" />
        </a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto menu__list">
                <li className="nav-item active menu__item menu__item--current">
                    <a className="nav-link menu__link" href="#inicio" data-scroll >{texto_1} <span
                            className="sr-only">(current)</span></a>;
                       
                            </li>
             
                <li className="nav-item menu__item">
                    <a className="nav-link menu__link" data-scroll href="#nosotros" >{texto_2} </a>
                </li>
                <li className="nav-item menu__item">
                    <a className="nav-link menu__link" data-scroll href="#servicios">{texto_3}</a>
                </li>
                <li className="nav-item menu__item">
                    <a className="nav-link menu__link" data-scroll href="#productos">{texto_4}</a>
                </li>
                <li className="nav-item menu__item">
                    <a className="nav-link menu__link" data-scroll href="#portafolio">{texto_5}</a>
                </li>
                <li className="nav-item menu__item">
                    <a className="nav-link menu__link" data-scroll href="#contacto">{texto_6}</a>
                </li>

            </ul>
        </div>
        </nav>
     
  </header>

)
}
}

