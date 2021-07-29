import React from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../../data/productos'
import { fisherYatesShuffle } from '../../hooks/fisherYatesShuffle'
import { getProductOfCategory } from '../../hooks/getProductOfCategory'
import { ContentProducts } from './ContentProducts'
import './styles.css'

export const Content = () => {
    const {idcate} = useParams();
    let product = getProductOfCategory(idcate);
    if(product.length === 0) {
        product = productos;
        fisherYatesShuffle(product)
    }

    return (
        <section className = 'banner-app m-56 content-products-background animate__animated animate__fadeIn' id = 'content'>
            <div className="content-wrap pt-0">
				<div className="container clearfix">
                    <ContentProducts product = {product} />
                </div>
            </div>
        </section>
    )
}
