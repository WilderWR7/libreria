import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export const CardProductos = ( { products } ) => {
    return (
        <div className="product card-background">
            <div className="grid-inner">
                <div className="product-image">
                    <Link to = {`/libreria/product/${products.id}`}><img src= {`/libreria/assets/img/libreria/${products.categoria}/${products.id}.jpg`} alt={`${products.id}`} /></Link>
                </div>
                <div className="product-desc pl-2">
                    <div className="product-title"><h3 className = 'titulo-producto'><Link to = {`/libreria/product/${products.id}`} > {products.id} </Link></h3></div>
                    <div className="product-price"><ins>Bs. {products.precio}</ins></div>
                    <div className="product-rating">
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star-half-full"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
