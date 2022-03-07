import React, { Component } from 'react';
import phone from '../../layout/img/phone.svg';
import email from '../../layout/img/email.svg';
import Constantes from "../../Constantes";
export default class Contacto extends Component {
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
        const texto_55 = this.state.traducciones.filter(traducciones => traducciones.id=== 55).map(traducciones => traducciones.texto_es)
        const texto_56 = this.state.traducciones.filter(traducciones => traducciones.id=== 56).map(traducciones => traducciones.texto_es)
        const texto_57 = this.state.traducciones.filter(traducciones => traducciones.id=== 57).map(traducciones => traducciones.texto_es) 
        const texto_58 = this.state.traducciones.filter(traducciones => traducciones.id=== 58).map(traducciones => traducciones.texto_es)
        const texto_59 = this.state.traducciones.filter(traducciones => traducciones.id=== 59).map(traducciones => traducciones.texto_es)
        const texto_60 = this.state.traducciones.filter(traducciones => traducciones.id=== 60).map(traducciones => traducciones.texto_es) 
        const texto_61 = this.state.traducciones.filter(traducciones => traducciones.id=== 61).map(traducciones => traducciones.texto_es)
        const texto_62 = this.state.traducciones.filter(traducciones => traducciones.id=== 62).map(traducciones => traducciones.texto_es)
        const texto_63 = this.state.traducciones.filter(traducciones => traducciones.id=== 63).map(traducciones => traducciones.texto_es) 
        const texto_64 = this.state.traducciones.filter(traducciones => traducciones.id=== 64).map(traducciones => traducciones.texto_es)
        const texto_65 = this.state.traducciones.filter(traducciones => traducciones.id=== 65).map(traducciones => traducciones.texto_es)
        const texto_66 = this.state.traducciones.filter(traducciones => traducciones.id=== 66).map(traducciones => traducciones.texto_es) 
        const texto_67 = this.state.traducciones.filter(traducciones => traducciones.id=== 67).map(traducciones => traducciones.texto_es)
        const texto_68 = this.state.traducciones.filter(traducciones => traducciones.id=== 68).map(traducciones => traducciones.texto_es)
        const texto_69 = this.state.traducciones.filter(traducciones => traducciones.id=== 69).map(traducciones => traducciones.texto_es) 
        const texto_70 = this.state.traducciones.filter(traducciones => traducciones.id=== 70).map(traducciones => traducciones.texto_es)
        const texto_71 = this.state.traducciones.filter(traducciones => traducciones.id=== 71).map(traducciones => traducciones.texto_es)
        const texto_72 = this.state.traducciones.filter(traducciones => traducciones.id=== 72).map(traducciones => traducciones.texto_es) 
        const texto_73 = this.state.traducciones.filter(traducciones => traducciones.id=== 73).map(traducciones => traducciones.texto_es)
        const texto_74 = this.state.traducciones.filter(traducciones => traducciones.id=== 74).map(traducciones => traducciones.texto_es) 
      return (
          <>
       <div className="contacto" id="contacto">
        <div className="row d-flex justify-content-end" data-aos="fade-down" data-aos-duration="1200">
            <div className="col-12 col-lg-5 text-right">
                <h4>{texto_55}</h4>
                <div className=" d-flex justify-content-end">
                    <div className="plecah4 text-right "></div>
                </div>
                <h2 dangerouslySetInnerHTML={{ __html:texto_56}}>
                </h2>
            </div>
        </div>
        <div className="row d-flex justify-content-end">
            
            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 datos-contacto" data-aos="fade-up" data-aos-duration="1200"
                 data-aos-delay="200">
                <b>{texto_57}</b> <br/>
                <p className="mb-0">
                <img src={phone} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="tel:+14153419051" target="_blank" >+1 415 341 9051</a></p>
                <p className="mb-0">
                <img src={email} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="mailto:info@qpass.co" >info@qpass.co</a><br/>
                </p>
                <br/>

                <b>{texto_58}</b> <br/>
                <p className="mb-0">
                <img src={phone} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="tel:+52555682 100" target="_blank">+52 55 5682 3100</a></p>
                <p className="mb-0">
                <img src={email} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="mailto:buzon@netmx.mx">buzon@netmx.mx</a><br/>
                </p>
                <br/>

                <b>{texto_59}</b> <br/>
                <p className="mb-0">
                <img src={phone} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="tel:+34919030620" target="_blank">+34 919 030 620</a></p>
                <p className="mb-0">
                <img src={email} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="mailto:buzon@netmx.es" target="_blank">buzon@netmx.es</a><br/>
                </p>
                <br/>

                <b>{texto_60}</b> <br/>
                <p className="mb-0">
                <img src={phone} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="tel:+56225708442" target="_blank">+56 2 2570 8442</a></p>
                <p className="mb-0">
                <img src={email} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="mailto:buzon@netmx.cl" target="_blank">buzon@netmx.cl</a><br/>
                </p>
                <br/>

                <b>{texto_61}</b> <br/>
                <p className="mb-0">
                <img src={phone} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="tel:+556139643380" target="_blank">+55 61 3964 3380</a></p>
                <p className="mb-0">
                <img src={email} alt="Phone" style={{width:21 ,marginTop:-4}}/>&nbsp;&nbsp;
                <a href="mailto:info@qpass.co" style={{color:'#fff'}}>info@qpass.co</a><br/>
                </p>
                <br/>
            </div>
            <div className="col-12 col-sm-7 col-md-7 col col-lg-5" ata-aos="fade-up" data-aos-duration="1200"
                 data-aos-delay="200">
                                   
                <div className="form-group">
                <input type="text" id="contacto" name="contacto" className="form-control" placeholder={"*"+texto_62}/>
                </div>
                <div className="form-group">
                <input type="email" id="email" name="email" className="form-control" placeholder={"*"+texto_63}/>
                </div>
                <div className="form-group">
                <input type="text" id="telefono" name="telefono" className="form-control" placeholder={"*"+texto_64}/>
                </div>
                <div className="form-group">
               <textarea type="text" id="mensaje" name="mensaje" className="form-control" placeholder={"*"+texto_65}/>
            
                </div>
                <div className="form-group ">
                    <div className="row">
						<div className="col-12" style={{color:'#fff'}}>
                        <input type="checkbox" id="terminos" value="*He le" style={{color:'#fff'}}/>
                            *{texto_66} <a href="<?= $_SERVER['HTTP_HOST'] == 'netmx.mx' ? 'politicasprivacidad_mx.html' : 'politicasprivacidad.html' ?>" target="_blank" style={{color:'#fff'}}>{texto_67}</a><br/>
                        </div>
                        <div className="col-12  col-md-8">
                            <div className="form-group"> 
                                <script src="https://www.google.com/recaptcha/api.js?render=6LfMN80ZAAAAAHerwaKCKQF_IFXWa_L-blQ2mEVG"></script> 
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                        <button id="contactar" type="button" className="btn btn-primary  btn-line3">{texto_70}</button>
                            <p id="flash_success" className="small pt-3" style={{display:'none'}}>Te contactaremos en breve, gracias por escribir.</p>
                            <p id="flash_error" className="small pt-3" style={{display:'none'}}>Verifica que todos tus campos sean correctos.</p>
                        </div>
						<div className="col-12">
                        <p style={{fontSize: "0.75em"}}>{texto_71}<br/> {texto_72} {texto_73}<a href="<?= $_SERVER['HTTP_HOST'] == 'netmx.mx'? 'politicasprivacidad_mx.html' : 'politicasprivacidad.html' ?>" target="_blank" style={{color:'#fff'}}>{texto_74}</a>.</p></div>
                    </div>
                </div>
               

            </div>

            


        </div>
    </div>
</>
  );
}
}
