import './Product.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const product = ({products, setProducts, setTotal}) => {

    useEffect(() => {

        const getProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/product/30/')
            if(response.status == 200){
                const records = response.data.products;
                const total = response.data.total;
                
                setProducts(records);
                setTotal(total);
            }
        }

        getProducts();
    }, [])

    return (
        <div className="products">
            {products && (
                products.map((product, index) => {
                    return (
                        <div key={index} className="product">
                            <h3>{product.name}</h3>
                            <p>{product.description.slice(0, 70)}...</p>
                            <p>RS. {product.price}/-</p>
                            <button>Buy</button>
                        </div>
                    )
                })
            )}

            
        </div>
    )
}

export default product