import React, { Component } from 'react';
import qpass from '../../layout/img/QPass.svg';
import zend from '../../layout/img/zend.svg';
import mailblast from '../../layout/img/mailblast.svg';
import cuadrostexture from '../../layout/img/cuadros-texture1-8.png';
import iconotecnologia from '../../layout/img/icono-tecnologia.svg';
import iconoautonomia from '../../layout/img/icono-autonomia.svg';
import iconoflexibilidad from '../../layout/img/icono-flexibilidad.svg';
import facturasweb from '../../layout/img/facturas-web.svg';
import Constantes from "../../Constantes";
export default class Nosotros extends Component {
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
        const texto_9 = this.state.traducciones.filter(traducciones => traducciones.id=== 9).map(traducciones => traducciones.texto_es)
        const texto_10 = this.state.traducciones.filter(traducciones => traducciones.id=== 10).map(traducciones => traducciones.texto_es)
        const texto_11 = this.state.traducciones.filter(traducciones => traducciones.id=== 11).map(traducciones => traducciones.texto_es)
        const texto_12 = this.state.traducciones.filter(traducciones => traducciones.id=== 12).map(traducciones => traducciones.texto_es)
        const texto_13 = this.state.traducciones.filter(traducciones => traducciones.id=== 13).map(traducciones => traducciones.texto_es)
        const texto_14 = this.state.traducciones.filter(traducciones => traducciones.id=== 14).map(traducciones => traducciones.texto_es)
        const texto_15 = this.state.traducciones.filter(traducciones => traducciones.id=== 15).map(traducciones => traducciones.texto_es)
        const texto_16 = this.state.traducciones.filter(traducciones => traducciones.id=== 16).map(traducciones => traducciones.texto_es)
        const texto_17 = this.state.traducciones.filter(traducciones => traducciones.id=== 17).map(traducciones => traducciones.texto_es)
      return (
          <>
        <div className="wrap-section " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
         <div className="logos-hero text-center">
             <div className="row align-items-center logo-hero-content">
                 <div className="col-6 col-sm-6 col-md-3  qpass">
                     <a href="<?= $sitiodestino ?>" target="_blank">
                         <img src={qpass} alt="QPass" />
                     </a>
                 </div>
                 <div className="col-6 col-sm-6 col-md-3 zend">
                     <a href="http://eltallerweb.com/" target="_blank">
                         <img src={zend} alt="Zend - Rogue Wave" width="" />
                     </a>
                 </div>
                 <div className="col-6 col-sm-6 col-md-3 mailblast">
                     <a href="https://mailblast.mx/" target="_blank">
                         <img src={mailblast} alt="Mailblast" />
                     </a>
                 </div>
                 <div className="col-6 col-sm-6 col-md-3 facturas">
                     <a href="http://www.facturasweb.com.mx/" target="_blank">
                         <img src={facturasweb} alt="Facturas Web" />
                         </a>
                </div>
            </div>
        </div>
    </div>
     
     <div id="nosotros">
    </div>
    <div className="nosotros">
        <div className="wrap-section">
            <div className="row d-flex justify-content-between nosotros-content">
                <div className="col-12 col-lg-4" >
                    <h4>{texto_9}</h4>
                    <div className="plecah4"></div>
                    <h2 dangerouslySetInnerHTML={{ __html:texto_10 }}>
                    </h2>
                    <p>
                       {texto_11}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </p>
                    <div className="d-none d-lg-block" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700" >
                        <img src={cuadrostexture} width="200" alt="" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col-3 col-md-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                            <img src={iconotecnologia}alt="tecnologia" width="80%"/>
                        </div>
                        <div className="col-11 col-md-10"data-aos="fade-up" data-aos-duration="1000" >
                            <h3>{texto_12}</h3>
                            <p>{texto_13}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-3 col-md-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                            <img src={iconoautonomia} alt="autonomia" width="80%"/>
                        </div>
                        <div className="col-11 col-md-10" data-aos="fade-up" data-aos-duration="1000">
                            <h3>{texto_14}</h3>
                            <p>{texto_15}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-3 col-md-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900" >
                            <img src={iconoflexibilidad}alt="flexibilidad" width="80%" />
                        </div>
                        <div className="col-11 col-md-10" data-aos="fade-up" data-aos-duration="1000">
                            <h3>{texto_16}</h3>
                            <p>{texto_17}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  );
}
}
