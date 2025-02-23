import React, { useEffect, useState } from "react"
import { Image } from "@heroui/image";
import { FaRegEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { Pagination } from "@heroui/react";
import { FaGlobe } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data);
        setLoading(false)
      })
  }, []);

  const buttonStyle = "w-6 h-6 p-1 rounded cursor-pointer transition delay-150 duration-300 ease-in-out";


  if (loading) {
    return <p>Loading ...</p>
  }
  return (
    <>
      <div className="flex items-center gap-1 pb-5">

        <FaGlobe className="text-green-600" />
        <p className="flex items-center gap-3 text-green-600"><Link to="/dashboard">Dashboard</Link> <IoMdArrowDropright /> <span className="text-gray-700">Products</span> </p>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          /* eslint-disable no-console */
          <div key={product._id} className="flex items-center gap-3">
            <div className="w-64">

              <Image
                alt={product.title}
                className="w-full object-cover h-[200px] rounded"
                radius="lg"
                shadow="sm"
                src={product.image}
                width="100%"
              />

              <h3 className="font-medium py-1">{product.title}</h3>
              <p className="text-zinc-700">Price : $ <span className="font-bold text-black text-lg">{product.price}</span>
              </p>
            </div>
            <div className="space-y-2  ">
              <FaRegEye className={`bg-green-300 hover:bg-green-200 ${buttonStyle}`} />
              <Link to={`/dashboard/update/${product._id}`}><FaPen className={`bg-gray-500 hover:bg-gray-300 ${buttonStyle}`} /></Link>
              
              <ImBin className={`bg-red-500 hover:bg-red-300 ${buttonStyle}`} />
            </div>
          </div>

        ))}
      </div>
      <Pagination loop showControls color="success" initialPage={1} total={5} className="pt-24 mx-auto" />
    </>
  )
};

export default Products;
