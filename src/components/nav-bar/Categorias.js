import React from 'react'
import { Link } from 'react-router-dom'

export const Categorias = ( {category} ) => {
    
    const handleClick = () =>{
        document.querySelector('.button-click').click();
    }

    return (
        <li className="nav-item">
            <Link onClick = { handleClick } className="nav-link active link-light" aria-current="page" to ={`/category/${category}`}>{category}</Link>
        </li>
    )
}
