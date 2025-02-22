import React, { useEffect, useState } from "react"
import { useAuth } from "../../components/Context/AuthProvider";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(products)
  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data);
      setLoading(false)
    })
  },[]);

  if(loading){
    return <p>Loading ...</p>
  }
  return (
    <div>
      <h1>Products : {products.length}</h1>
      {products.map((product) =>(
        <div key={product.id} className="bg-gray-200">
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>Price :${product.price}</p>
      </div>
      ))}
      
    </div>
  )
};

export default Products;
