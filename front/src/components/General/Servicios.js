import React, { Component } from 'react';
import iconodisenoweb from '../../layout/img/icono-diseno-web.svg';
import iconosaplicaciones from '../../layout/img/iconos-aplicaciones.svg';
import Constantes from "../../Constantes";
export default class Servicios extends Component {
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
        const texto_18 = this.state.traducciones.filter(traducciones => traducciones.id=== 18).map(traducciones => traducciones.texto_es)
        const texto_19 = this.state.traducciones.filter(traducciones => traducciones.id=== 19).map(traducciones => traducciones.texto_es)
        const texto_20 = this.state.traducciones.filter(traducciones => traducciones.id=== 20).map(traducciones => traducciones.texto_es)
        const texto_21 = this.state.traducciones.filter(traducciones => traducciones.id=== 21).map(traducciones => traducciones.texto_es)
        const texto_23 = this.state.traducciones.filter(traducciones => traducciones.id=== 23).map(traducciones => traducciones.texto_es)
        const texto_24 = this.state.traducciones.filter(traducciones => traducciones.id=== 24).map(traducciones => traducciones.texto_es)
        const texto_25 = this.state.traducciones.filter(traducciones => traducciones.id=== 25).map(traducciones => traducciones.texto_es)
        const texto_26 = this.state.traducciones.filter(traducciones => traducciones.id=== 26).map(traducciones => traducciones.texto_es)
        
      return (
          <>
           <div id="servicios">
        </div>
    <div className="servicios" id="servicios">
        <div className="wrap-section">
            <div className="row d-flex justify-content-end" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-12 col-lg-5 text-right">
                    <h4>{texto_18}</h4>
                    <div className=" d-flex justify-content-end">
                        <div className="plecah4 text-right "></div>
                    </div>
                    <h2 dangerouslySetInnerHTML={{ __html:texto_19 }}>
                    </h2>
                </div>
            </div>
            <div className="row d-flex content-servicios justify-content-lg-end justify-content-center">
                <div className="col-8 col-lg-3 item-servicio text-center" data-aos="fade-up-right" data-aos-duration="1000"
                     data-aos-delay="400">
                    <img src={iconodisenoweb} alt="Soluciones Web" width="32%" data-aos="fade-up"
                         data-aos-duration="1200" data-aos-delay="400"/>
                    <h3 dangerouslySetInnerHTML={{ __html:texto_20 }}>
                    </h3>
                    <p>
                       {texto_21}
                    </p>
                </div>
                <div className="col-8 col-lg-3 item-servicio text-center" data-aos="fade-up-right" data-aos-duration="1000"
                     data-aos-delay="200">
                    <img src={iconodisenoweb} alt="Soluciones Web" width="28%" data-aos="fade-up" 
                         data-aos-duration="1200" data-aos-delay="400"/>
                    <h3 dangerouslySetInnerHTML={{ __html:texto_23 }}>
                    </h3>
                    <p>
                        {texto_24}
                    </p>
                </div>
                <div className="col-8 col-lg-3 item-servicio text-center" data-aos="fade-up-right" data-aos-duration="1000">
                    <img src={iconosaplicaciones} alt="Soluciones Web" width="25%" data-aos="fade-up"
                         data-aos-duration="1200" data-aos-delay="400"/>
                    <h3 dangerouslySetInnerHTML={{ __html:texto_25 }}>
                    </h3>
                    <p>
                       {texto_26}
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
  );
}
}
