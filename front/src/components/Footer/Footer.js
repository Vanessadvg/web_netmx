import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Constantes from "../../Constantes";
export default class Footer extends Component {
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
        const texto_75 = this.state.traducciones.filter(traducciones => traducciones.id=== 75).map(traducciones => traducciones.texto_es)
        const texto_76 = this.state.traducciones.filter(traducciones => traducciones.id=== 76).map(traducciones => traducciones.texto_es)
        const texto_77 = this.state.traducciones.filter(traducciones => traducciones.id=== 77).map(traducciones => traducciones.texto_es) 
        const texto_78 = this.state.traducciones.filter(traducciones => traducciones.id=== 78).map(traducciones => traducciones.texto_es)
        const texto_79 = this.state.traducciones.filter(traducciones => traducciones.id=== 79).map(traducciones => traducciones.texto_es)
        const texto_80 = this.state.traducciones.filter(traducciones => traducciones.id=== 80).map(traducciones => traducciones.texto_es) 
      return (
          <>
        <footer>
        <div className="row redes d-flex justify-content-center">
            <div className="col-12 col-sm-9"></div>
            <div className="col-8 col-sm-3">
                <a href="https://www.facebook.com/pages/NetMX/151741050960" target="_blank">
                    
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/NetMX" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://mx.linkedin.com/company/netmx" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
        <div className="row legales">
            <div className="col-12 col-sm-6 col-lg-4 text-center">
                <p dangerouslySetInnerHTML={{ __html:texto_75}}>
                </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-8 text-center text-md-right">
                <a href="<?= $_SERVER['HTTP_HOST'] == 'netmx.mx'? 'avisolegal_mx.html' : 'avisolegal.html' ?> ">{texto_76}</a> <b>|</b>
                <a href="<?= $_SERVER['HTTP_HOST'] == 'netmx.mx'? 'politicasprivacidad_mx.html' : 'politicasprivacidad.html' ?>">{texto_77} </a> <b>|</b>
                <a href="<?= $_SERVER['HTTP_HOST'] == 'netmx.mx'? 'politicascookies_mx.html' : 'politicascookies.html' ?>">{texto_78} </a> <b>|</b>
                <a href="terminosycondiciones.html">{texto_79}</a> <b>|</b>
                <a href="anticorrupcion.html">{texto_80} </a>
            </div>
        </div>
    </footer>
    </>
  );
}
}

