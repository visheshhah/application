import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard';

interface Product{
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
}

function App() {

  let items = products.map(p => 
    <li key={p.id}>
      <ProductCard id={p.id} name={p.name} quantity={p.quantity} category={p.category} price={p.price}/>
    </li>
)

  return (
    <>
      <ul>{items}</ul>
    </>
  )
}

let products: Product[] = [
  {id: 0, name:"Laptop", price:50000, category:"Electronics", quantity:10},
  {id: 1, name:"Mobile Phone", price:20000, category:"Electronics", quantity:20},
];

/* function displayProducts(products: Product[]){
  products.map((p) => {
    <ProductCard id={p.id} name={p.name} quantity={p.quantity} category={p.category} price={p.price}/>
  })
} */
export default App
