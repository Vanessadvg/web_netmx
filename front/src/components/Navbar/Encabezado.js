import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from '../../layout/img/NetMx-nav.svg';
import netmx from '../../layout/img/NetMX.svg';
import curva from '../../layout/img/curva.png';
import Constantes from "../../Constantes";
import 'react-toastify/dist/ReactToastify.css';
export default class Encabezado extends Component {
    
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
        const texto_7 = this.state.traducciones.filter(traducciones => traducciones.id=== 7).map(traducciones => traducciones.texto_es)
        const texto_8 = this.state.traducciones.filter(traducciones => traducciones.id=== 8).map(traducciones => traducciones.texto_es)
      return (
          <>
        <div className="hero" id="inicio">
        <div className="curva-hero"  >
        </div>
        <div className="content-hero">
        <div className="row align-items-center wrap-section">
            <div className="col-10 col-md-5 col-lg-6 col-xl-5">
                <div className="text-hero aos-init aos animate" data-aos="fade-up" data-aos-duration="1000">
                
                <h1 dangerouslySetInnerHTML={{ __html:texto_7 }}>
                  </h1>
 
                    <div className="pleca-hero"></div>
                    <p className="descripcion-hero" dangerouslySetInnerHTML={{ __html:texto_8 }}></p>
                        
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-md-block" data-aos="fade-up"
                 data-aos-duration="1000" data-aos-delay="800">
                <div className="text-hero text-right">
                <img src={netmx} height="350" alt="NetMX" width="350" />
                  
                </div>
            </div>
        </div>
    </div>
   
    <div className="cuadros-hero aos-init aos animate" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" style={{ backgroundImage:{curva} }}> 
    </div>
        </div>
  </>

)
}
}
