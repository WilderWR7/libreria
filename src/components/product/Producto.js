import React from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../hooks/getProduct';
import './style.css'

export const Producto = () => {
    const { producto } = useParams();
    const value = getProduct(producto)
    window.scrollTo(0,0)
    return (
    <div className="main banner-app m-56">
        <div className="shop_top">
            <div className="container">
                <div className="row">
                    <div className="container-products">
                        <div className="container-products-imagen">
                            <img className="imagenEditar" src={`/libreria/assets/img/libreria/${value.categoria}/${value.id}.jpg`} alt = {`${value.id}`}/>
                        </div>
                        <div className="single_right">
                            <h3> { value.id} </h3>
                            <h4> Descripcion </h4>
                            <p className="m_10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</p>
                            <div className="btn_form">
                            <h4>Bs. {value.precio}</h4>
                            <form>
                                <input className = 'btn btn-danger' type="submit" value="Comprar" title=""/>
                            </form>
                            </div>
                            <div className="social_buttons">
                                <button type="button" className="btn btn-outline-info mr-2 mt-2">
                                <i className="icon-twitter"></i> Tweet
                                </button>
                                <button type="button" className="btn btn-outline-primary mr-2 mt-2">
                                <i className="icon-facebook"></i> Share
                                </button>
                                <button type="button" className="btn btn-outline-secondary mr-2 mt-2">
                                <i className="icon-google"></i> Google+
                                </button>
                                <button type="button" className="btn btn-outline-danger mt-2">
                                <i className="icon-pinterest"></i> Pinterest
                                </button>
                            </div>
                        </div>
                            <div className="clear"> </div>
                    </div>
                </div>		   
            </div>
        </div>
	</div>
    )
}
