import { productos } from "../data/productos"

export const getProductOfCategory = (category) => {
    const products = productos;
    
        return products.filter(p => p.categoria === category)
    
}
