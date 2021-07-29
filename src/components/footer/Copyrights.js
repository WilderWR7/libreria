import React from 'react'
import { Link } from 'react-router-dom'

export const Copyrights = () => {
    return (
        <div id="copyrights">
            <div className="container">
            <div className="row">
                <div className="text-center text-md-left">
                    Copyrights &copy; 2021 All Rights Reserved by Wilder Inc.<br/>
                </div>

                <div className="text-center text-md-right">
                    <div className="d-flex justify-content-center">
                        <Link to ="/libreria" className="social-icon si-small si-borderless si-facebook">
                            <i className="icon-facebook"></i>
                            <i className="icon-facebook"></i>
                        </Link>

                        <Link to ="/libreria" className="social-icon si-small si-borderless si-gplus">
                            <i className="icon-gplus"></i>
                            <i className="icon-gplus"></i>
                        </Link>
                    </div>
                    <div>
                    <i className="icon-envelope2"></i> wilder.mayta91@gmail.com 
                    </div>
                    <div>
                    <i className="icon-headphones"></i>+59163168771
                    </div>
                    <div>
                    <i className="icon-facebook"> </i>   Wilder Mayta Machicado
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
