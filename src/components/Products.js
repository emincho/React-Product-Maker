import Product from './Product'

const Products = ({ products, onDelete, toggle }) => {
    return (
        <>
           {products.map((product) => (<Product key={product.id} product={product} onDelete={onDelete} toggle={toggle}/> ))} 
        </>
    )
}

export default Products
