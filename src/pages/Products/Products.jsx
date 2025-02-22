import React, { useEffect, useState } from "react"
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { FaRegEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";


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

  const buttonStyle = "w-6 h-6 p-1 rounded cursor-pointer transition delay-150 duration-300 ease-in-out";


  if(loading){
    return <p>Loading ...</p>
  }
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
      {products.map((product) => (
        /* eslint-disable no-console */
        <div key={product.id} className="flex items-center">
          <div>
          <Image
              alt={product.title}
              className="w-full object-cover h-[200px]"
              radius="lg"
              shadow="sm"
              src={product.image}
              width="90%"
            />
              <h3>{product.title}</h3>
              <p>Price : ${product.price}</p>
              </div>
              <div className="space-y-2  ">
              <FaRegEye className={`bg-green-300 hover:bg-green-200 ${buttonStyle}`}/>
              <FaPen className={`bg-gray-500 hover:bg-gray-300 ${buttonStyle}`}/>
              <ImBin  className={`bg-red-500 hover:bg-red-300 ${buttonStyle}`}/>
              </div>
        </div>
        
      ))}
    </div>
  )
};

export default Products;
{/* <Card key={product.id} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={product.title}
              className="w-full object-cover h-[200px]"
              radius="lg"
              shadow="sm"
              src={product.image}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.title}</b>
            <p className="text-default-500">${product.price}</p>
          </CardFooter>
        </Card> */}