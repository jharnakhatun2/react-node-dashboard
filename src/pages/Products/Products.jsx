import React, { useEffect, useState } from "react"
import { Image } from "@heroui/image";
import { FaRegEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { Button } from "@heroui/react";
import { Link } from "react-router";
import ProductModal from "./ProductModal";
import { useAuth } from "../../components/Context/AuthProvider";
import DashboardLink from "../../util/DashboardLink/DashboardLink";
import Loader from "../../util/Loader/Loader";
import Swal from "sweetalert2";



const Products = () => {
  const { searchQuery, loading, setLoading } = useAuth();
  const [productsData, setProductsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;



  //Get product
  useEffect(() => {
    fetch('https://react-node-server-487w.onrender.com/product')
      .then(res => res.json())
      .then(data => {
        setProductsData(data);
        setLoading(false)
      })
  }, []);

  //Delete product
  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://react-node-server-487w.onrender.com/product/${id}`, { method: 'DELETE' })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              swal({
                title: "Deleted!",
                text: "Product Deleted Successfully",
                icon: "success",
                dangerMode: false,
              });
              const allData = productsData.filter((product) => product._id !== id);
              setProductsData(allData);
            }
          })
      }
    });
  }

  // Filter products based on search query
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //handle Modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  //product button style
  const buttonStyle = "w-6 h-6 p-1 rounded cursor-pointer transition delay-150 duration-300 ease-in-out";


  // Handle Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className="flex items-center gap-1 pb-5">
        <DashboardLink />
        <p className="text-gray-700">Products ({productsData.length})</p>
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-zinc-600 text-2xl h-84 flex justify-center items-center">No Product!</p>
      ) : (<div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {currentProducts?.map((product) => (
          /* eslint-disable no-console */
          <div key={product._id} className="flex items-center gap-3">
            <div className="w-full sm:w-64">
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
            <div className="space-y-2">
              {/* Modal Button */}
              <div><FaRegEye
                onClick={() => handleOpenModal(product)} className={`bg-green-300 hover:bg-green-200 ${buttonStyle}`} /></div>
              <div><Link to={`/dashboard/update/${product._id}`}><FaPen className={`bg-gray-500 hover:bg-gray-300 ${buttonStyle}`} /></Link></div>
              <div><ImBin className={`bg-red-500 hover:bg-red-300 ${buttonStyle}`} onClick={() => handleDelete(product._id)} /></div>
            </div>
          </div>

        ))}
      </div>)}


      {/* Pagination */}
      <div className="flex justify-end gap-2 my-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            size="sm"
            key={index + 1}
            color={currentPage === index + 1 ? "primary" : "default"}
            onPress={() => handlePageChange(index + 1)}
            className={`rounded ${currentPage === index + 1 ? "bg-green-400 text-white" : "bg-gray-200"}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Single Product View With Modal */}
      {selectedProduct && <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />}

    </>
  )
};

export default Products;
