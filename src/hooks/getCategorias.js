import { productos } from "../data/productos"

export const getCategorias = () => {
    const products = productos;
    let category =[];
    products.forEach ( p => {
        if(!category.includes(p.categoria)){
            category = [...category,p.categoria]
        }
    })
    return category;
}
