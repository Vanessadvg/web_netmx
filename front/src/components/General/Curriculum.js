import React, { Component } from 'react';
import Constantes from "../../Constantes";
export default class Curriculum extends Component {
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
        const texto_52 = this.state.traducciones.filter(traducciones => traducciones.id=== 52).map(traducciones => traducciones.texto_es)
        const texto_53 = this.state.traducciones.filter(traducciones => traducciones.id=== 53).map(traducciones => traducciones.texto_es)
        const texto_54 = this.state.traducciones.filter(traducciones => traducciones.id=== 54).map(traducciones => traducciones.texto_es) 
      return (
          <>
        <div className="unete">
        <div className="wrap-section">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4  col-lg-5" data-aos="fade-up" data-aos-duration="1200">
                    <div className="plecah4"></div>
                    <h2 dangerouslySetInnerHTML={{ __html:texto_52}}>
                    </h2>
                </div>
                <div className="col-12 col-sm-12 col-md-6  col-lg-7" data-aos="fade-down" data-aos-duration="1200"
                     data-aos-delay="400">
                    <p>
                        <br/>
                        {texto_53}
                        <br/> <br/><br/>

                    <div className="d-flex justify-content-start justify-content-sm-center">
                        <a className="btn btn-line" href="">{texto_54}</a>
                    </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
  );
}
}
