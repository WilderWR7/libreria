import React from 'react'
import { productos } from '../../data/productos'
import { CardProductos } from './CardProductos'
import './styles.css'
export const ContentProducts = ( {product = productos} ) => {
    const products = product;
    return (
        <div className="tabs mt-4 clearfix" id="tab-3">	
            <div className="tab-container">
                <div className="tab-content" id="tabs-9">
                    <div className="container-productos">
                        {
                            products.map(products => {
                                return <CardProductos key = {products.id } products = {products}/>
                            })
                        }
                    </div>

                </div>
                
            </div>
		</div>
    )
}
