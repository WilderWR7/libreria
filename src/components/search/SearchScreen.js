import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import './styles.css'
import { getSearchProduct } from '../../hooks/getSearchProduct';
import { ContentProducts } from '../content/ContentProducts';

export const SearchScreen = () => {
    const location = useLocation();
    const {q=''} = queryString.parse(location.search.toLowerCase());
    const producto = getSearchProduct(q);
    window.scrollTo(0,0)
        return (
        <section className = 'banner-app m-56 content-products-background animate__animated animate__fadeIn' id = 'content'>
            <div className="content-wrap pt-0">
				<div className="container clearfix">
                    <ContentProducts product = {producto} />
                </div>
            </div>
        </section>
    )
}
