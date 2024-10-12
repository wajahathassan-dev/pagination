import './App.css'
import Product from './components/Product/Product'
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(null);

  return (
    <>
      <Product products={products} setProducts={setProducts} setTotal={setTotal}/>
      <Pagination setProducts={setProducts} total={total} setTotal={setTotal}/>
    </>
  )
}

export default App