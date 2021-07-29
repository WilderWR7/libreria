import React from 'react'
import { Link } from 'react-router-dom'

export const Information = () => {
    return (
        <div className="section mb-0 mt-0 pt-1">
					<div className="container pt-4">
						<div className="row col-mb-50">
							<div className="col-sm-6 col-lg-3 pb-4">
								<div className="feature-box fbox-plain fbox-dark fbox-sm">
									<Link to = '/' className="social-icon si-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
										<i className="icon-facebook"></i>
										<i className="icon-facebook"></i>
									</Link>
									<div className="fbox-content">
										<h3>Libreria Italia LP</h3>
										<p className="mt-0">Encuentranos en Facebook.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 pb-4">
								<div className="feature-box fbox-plain fbox-dark fbox-sm">		
									<Link to = '/' className="social-icon si-gplus" data-toggle="tooltip" data-placement="top" title="Google+">
										<i className="icon-gplus"></i>
										<i className="icon-gplus"></i>
									</Link>
									<div className="fbox-content">
										<h3>L-ITALIA69@GMAIL.COM</h3>
										<p className="mt-0">Comunicate con nosotros.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 pb-4">
								<div className="feature-box fbox-plain fbox-dark fbox-sm">		
									<Link to = '/' className="social-icon si-call" data-toggle="tooltip" data-placement="top" title="Call">
										<i className="icon-call"></i>
										<i className="icon-call"></i>
									</Link>
									<div className="fbox-content">
										<h3>+591-63168771</h3>
										<p className="mt-0">Llamanos...</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 pb-4">
								<div className="feature-box fbox-plain fbox-dark fbox-sm">		
									<Link to = '/' className="social-icon si-paypal" data-toggle="tooltip" data-placement="top" title="PayPal">
										<i className="icon-paypal"></i>
										<i className="icon-paypal"></i>
									</Link>
									<div className="fbox-content">
										<h3>Pay pal</h3>
										<p className="mt-0">Aceptamos pagos mediante Pay Pal.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
    )
}
