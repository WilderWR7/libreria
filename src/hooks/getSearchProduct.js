import { productos } from '../data/productos'

export const getSearchProduct = (search) => {
    const product = productos;
    let newProdut =[];
    product.map( p=> {
        const id = p.id.toLowerCase();
        if(id.includes(search)){
            newProdut = [...newProdut,p];
        }
        return newProdut;
    }
    )
    return newProdut;
}
