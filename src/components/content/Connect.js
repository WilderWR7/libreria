import React from 'react'
import {Link} from 'react-router-dom'
export const Connect = () => {
    return (
        <div className="row justify-content-center mb-0">

						<div className='container'>
							<div className="text-center title-border">
								<h4>Connect with Us</h4>
							</div>
								<div className = 'centrar'>
									<Link to = '/libreria' className="social-icon si-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
										<i className="icon-facebook"></i>
										<i className="icon-facebook"></i>
									</Link>
		
									<Link to = '/libreria' className="social-icon si-paypal" data-toggle="tooltip" data-placement="top" title="PayPal">
										<i className="icon-paypal"></i>
										<i className="icon-paypal"></i>
									</Link>
		
									<Link to = '/libreria' className="social-icon si-gplus" data-toggle="tooltip" data-placement="top" title="Google+">
										<i className="icon-gplus"></i>
										<i className="icon-gplus"></i>
									</Link>
		
									<Link to = '/libreria' className="social-icon si-call" data-toggle="tooltip" data-placement="top" title="Call">
										<i className="icon-call"></i>
										<i className="icon-call"></i>
									</Link>
								</div>
						</div>
					</div>
    )
}
