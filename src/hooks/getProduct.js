import { productos } from '../data/productos'

export const getProduct = (id) => {
    return productos.find(p=> p.id === id);
}
