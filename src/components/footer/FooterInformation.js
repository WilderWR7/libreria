import React from 'react' 
export const FooterInformation = () => {
    return (
        <div className="container">
            <div className="footer-widgets-wrap pt-5 pb-5">
                            
                                <div className="widget clearfix">
                                    <p>Libreria <strong>ITALIA</strong>, <strong>Precios ecomicos</strong> &amp; <strong>Buena Atención.</strong> Lo esperamos.</p>
                                    <div style={{background: "url('assets/img/world-map.png')", noRepeat: "center center", backgroundSize: "100%"}}>
                                        <address>
                                            <strong>Ubicacion:</strong><br/>
                                            La Paz,Zona Alto Mariscal Santa Cruz<br/>
                                            Calle: Ignacio Zeballos #2412<br/>
                                        </address>
                                        <abbr title="Phone Number"><strong>Telefono:</strong></abbr> +59173264508<br/>
                                        <abbr title="Email Address"><strong>Email:</strong></abbr> wilder.mayta91@gmail.com
                                    </div>
                                </div>
            </div>
        </div>
    )
}
