import React, { Component } from 'react';
import appQPasssmall from '../../layout/img/portfolio/app-QPass-small.png';
import shakeyssmall from '../../layout/img/portfolio/shakeys-small.png';
import theLotsmall from '../../layout/img/portfolio/theLot-small.png';
import ranversmall from '../../layout/img/portfolio/ranver-small.png';
import Constantes from "../../Constantes";
export default class Portafolio extends Component {
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
        const texto_41 = this.state.traducciones.filter(traducciones => traducciones.id=== 41).map(traducciones => traducciones.texto_es)
        const texto_42 = this.state.traducciones.filter(traducciones => traducciones.id=== 42).map(traducciones => traducciones.texto_es)
        const texto_43 = this.state.traducciones.filter(traducciones => traducciones.id=== 43).map(traducciones => traducciones.texto_es)
        const texto_44 = this.state.traducciones.filter(traducciones => traducciones.id=== 44).map(traducciones => traducciones.texto_es)
        const texto_45 = this.state.traducciones.filter(traducciones => traducciones.id=== 45).map(traducciones => traducciones.texto_es)
        const texto_46 = this.state.traducciones.filter(traducciones => traducciones.id=== 46).map(traducciones => traducciones.texto_es)
        const texto_47 = this.state.traducciones.filter(traducciones => traducciones.id=== 47).map(traducciones => traducciones.texto_es)
        const texto_48 = this.state.traducciones.filter(traducciones => traducciones.id=== 48).map(traducciones => traducciones.texto_es)
        const texto_49 = this.state.traducciones.filter(traducciones => traducciones.id=== 49).map(traducciones => traducciones.texto_es)
        const texto_50 = this.state.traducciones.filter(traducciones => traducciones.id=== 50).map(traducciones => traducciones.texto_es)
        const texto_51 = this.state.traducciones.filter(traducciones => traducciones.id=== 51).map(traducciones => traducciones.texto_es)
        
      return (
          <>
        <div className="portafolio" id="portafolio">
        <div className="wrap-section">
            <div className="row d-flex justify-content-end mb-20" data-aos="fade-up" data-aos-duration="1200">
                <div className="col-12 col-lg-5 text-right">
                    <h4>{texto_41}</h4>
                    <div className=" d-flex justify-content-end">
                        <div className="plecah4 text-right "></div>
                    </div>
                    <h2 dangerouslySetInnerHTML={{ __html:texto_42 }}>
                    </h2>
                    <p>{texto_43} </p>
                </div>
            </div>
          
            <div className="row portfolio-items d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1200"
                 data-aos-delay="200">
                <div className="col-8 col-sm-5 col-md-3">
                    <div className="portfolio-item shadow">
                        <div className="hover-bg">
                            <a href="" title="Aplicación QPass" data-toggle="modal" data-target="#modal-qpass">
                                <div className="hover-text">
                                    <h3 dangerouslySetInnerHTML={{ __html:texto_44 }}></h3>
                                    <small>{texto_45}</small>
                                </div>
                                <img src={appQPasssmall} width="100%" alt="App QPass"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-sm-5 col-md-3">
                    <div className="portfolio-item shadow">
                        <div className="hover-bg">
                            <a href="http://shakeys.mx/" title="Shakey's" target="_blank">
                                <div className="hover-text">
                                    <h3>{texto_46}</h3>
                                    <small>{texto_47}</small>
                                </div>
                                <img src={shakeyssmall} width="100%" alt="App QPass"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-sm-5 col-md-3">
                    <div className="portfolio-item shadow">
                        <div className="hover-bg">
                            <a href="https://thelotent.com/" title="The LOT" target="_blank">
                                <div className="hover-text">
                                    <h3>{texto_48}</h3>
                                    <small>{texto_49}</small>
                                </div>
                                <img src={theLotsmall} width="100%" alt="App QPass"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-sm-5 col-md-3">
                    <div className="portfolio-item shadow">
                        <div className="hover-bg">
                            <a href="http://facturacion.ranver.com.mx/" title="Facturación Ranver" target="_blank">
                                <div className="hover-text">
                                    <h3>{texto_50}</h3>
                                    <small>{texto_51}</small>
                                </div>
                                <img src={ranversmall} width="100%" alt="Ranver Facturación" />
                            </a>
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


