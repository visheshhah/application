import { useState } from 'react'

import ProductCard from './components/ProductCard';
import AddProductForm from './pages/AddProductForm';

function App() {

/*   let items = products.map(p => 
    <li key={p.id}>
      <ProductCard id={p.id} name={p.name} quantity={p.quantity} category={p.category} price={p.price}/>
    </li>
) */

  return (
    <>
      {/* <ul>{items}</ul> */}
      <AddProductForm/>

    </>
  )
}

/* let products: Product[] = [
  {id: 0, name:"Laptop", price:50000, category:"Electronics", quantity:10},
  {id: 1, name:"Mobile Phone", price:20000, category:"Electronics", quantity:20},
   {id: 2, name:"T-Shirt", price:200, category:"Fashion", quantity:0},
   {id: 3, name:"Pants", price:800, category:"Fashion", quantity:4},
];

function AddProduct(product: Product){
    product.id = products.length + 1;
    products.push(product);
}

function deleteProduct(id : number){
    products = products.filter(p => p.id != id);
} */

/* function displayProducts(products: Product[]){
  products.map((p) => {
    <ProductCard id={p.id} name={p.name} quantity={p.quantity} category={p.category} price={p.price}/>
  })
} */
export default App
