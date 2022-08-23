import { useState } from 'react'
import Header from './components/header'
import Products from './components/Products'
import AddProduct from './components/AddProduct'


const App = () => {

    const [products, setproducts] = useState([
    {
        id: 1,
        text: 'off white air jordan',
        price: '$2000',
        reminder: true,
    },
    {
        id: 2,
        text: 'off white Hoddie',
        price: '$1000',
        reminder: false
    }
]);

const AddAProduct = (product) => {
  const id = Math.floor(Math.random() * 10000) + 1
    const newProduct = { id, ...product }
    setproducts([...products, newProduct])
}

const DeleteProducts = (id) => {
  setproducts(products.filter((product) => product.id !== id ))

}

const reminderToggle = (id) => {
  setproducts(
  products.map((product) => product.id === id ? {...product, reminder: !product.reminder } : product)
  )
}

  return (
    <div className="container">
    <Header />
    <AddProduct onAdd={AddAProduct} />
    {products.length > 0 ? (<Products products={products} onDelete={DeleteProducts} toggle={reminderToggle} />) : (<p style={{textAlign: 'center', backgroundColor: 'grey', color: 'white',  border: '1px solid black',}}>No Products here</p>)}
    </div>
  );
}

export default App;
