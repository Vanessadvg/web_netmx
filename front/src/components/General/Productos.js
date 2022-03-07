import React, { Component } from 'react';
import marcaqpass from '../../layout/img/marca-qpass.png';
import QPass from '../../layout/img/QPass.svg';
import marcazend from '../../layout/img/marca-zend.png';
import zend from '../../layout/img/zend.svg';
import marcamailblast from '../../layout/img/marca-mailblast.png';
import mailblast from '../../layout/img/mailblast.svg';
import marcafacturasweb from '../../layout/img/marca-facturas-web.png';
import facturasweb from '../../layout/img/facturas-web.svg';
import Constantes from "../../Constantes";
export default class Productos extends Component {
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
        const texto_27 = this.state.traducciones.filter(traducciones => traducciones.id=== 27).map(traducciones => traducciones.texto_es)
        const texto_28 = this.state.traducciones.filter(traducciones => traducciones.id=== 28).map(traducciones => traducciones.texto_es)
        const texto_29 = this.state.traducciones.filter(traducciones => traducciones.id=== 29).map(traducciones => traducciones.texto_es)
        const texto_30 = this.state.traducciones.filter(traducciones => traducciones.id=== 30).map(traducciones => traducciones.texto_es)
        const texto_31 = this.state.traducciones.filter(traducciones => traducciones.id=== 31).map(traducciones => traducciones.texto_es)
        const texto_32 = this.state.traducciones.filter(traducciones => traducciones.id=== 32).map(traducciones => traducciones.texto_es)
        const texto_33 = this.state.traducciones.filter(traducciones => traducciones.id=== 33).map(traducciones => traducciones.texto_es)
        const texto_34 = this.state.traducciones.filter(traducciones => traducciones.id=== 34).map(traducciones => traducciones.texto_es)
        const texto_35 = this.state.traducciones.filter(traducciones => traducciones.id=== 35).map(traducciones => traducciones.texto_es)
        const texto_36 = this.state.traducciones.filter(traducciones => traducciones.id=== 36).map(traducciones => traducciones.texto_es)
        const texto_37 = this.state.traducciones.filter(traducciones => traducciones.id=== 37).map(traducciones => traducciones.texto_es)
        const texto_38 = this.state.traducciones.filter(traducciones => traducciones.id=== 38).map(traducciones => traducciones.texto_es)
        const texto_39 = this.state.traducciones.filter(traducciones => traducciones.id=== 39).map(traducciones => traducciones.texto_es)
        const texto_40 = this.state.traducciones.filter(traducciones => traducciones.id=== 40).map(traducciones => traducciones.texto_es)
      return (
          <>
         <div id="productos">
        </div>
        <div className="productos" id="productos">
    <div className="wrap-section">
        <div className="row d-flex">
            <div className="col-12 col-sm-12 col-md-4  col-lg-5" data-aos="fade-down" data-aos-duration="1200">
                <h4>{texto_27}</h4>
                <div className="plecah4"></div>
                <h2 dangerouslySetInnerHTML={{ __html:texto_28 }}>
                </h2>
            </div>
            <div className="col-12 col-md-8 col-lg-7">
                <div className="row d-flex justify-content-around" width="100%">
                    <div className="col-10 col-sm-5  card-marca shadow-lg" data-aos="flip-left"
                         data-aos-duration="1500">
                        <div className="card-top">
                            <img src={marcaqpass} alt="QPass"/>
                        </div>
                        <div className="card-body text-center">
                            <img src={QPass} alt="QPass" width="180px"/>
                            <h3>{texto_29}</h3>
                            <p>
                               {texto_30}<br/>
                            </p>
                            <p>
                            <a className="btn btn-nmx" target="_blank" href="<?= $sitiodestino ?>">{texto_31}</a>
                            </p>
                        </div>
                        
                    </div>
                    <div className="col-10 col-sm-5 card-marca shadow-lg desfase-card" data-aos="flip-left"
                         data-aos-duration="1200">
                        <div className="card-top">
                            <img src={marcazend} alt="Zend Rogue Wave"/>
                        </div>
                        <div className="card-body text-center">
                            <img src={zend} alt="Zend Rogue Wave" width="200px"/>
                            <h3>{texto_32}</h3>
                            <p>
                            {texto_33}
                            </p>
                            <p>
                            <a className="btn btn-nmx" target="_blank" href="http://eltallerweb.com/">{texto_34}</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-10 col-sm-5 card-marca shadow-lg" data-aos="flip-left" data-aos-duration="1000">
                        <div className="card-top">
                            <img src={marcamailblast} alt="Mailblast"/>
                        </div>
                        <div className="card-body text-center">
                            <img src={mailblast} alt="Zend Rogue Wave" width="130px"/>
                            <h3>{texto_35}</h3>
                            <p>
                            {texto_36}
                            </p>
                            <p>
                            <a className="btn btn-nmx" target="_blank" href="https://mailblast.mx/">{texto_37}</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-10 col-sm-5 card-marca shadow-lg desfase-card" data-aos="flip-left"
                         data-aos-duration="1000">
                        <div className="card-top">
                            <img src={marcafacturasweb} alt="Facturas Web"/>
                        </div>
                        <div className="card-body text-center">
                            <img src={facturasweb} alt="Facturas Web" width="90px"/>
                            <h3>{texto_38}</h3>
                            <p>
                            {texto_39}
                            </p>
                            <p>
                            <a className="btn btn-nmx" target="_blank" href="http://www.facturasweb.com.mx/">{texto_40}</a>
                            </p>
                        </div>
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
