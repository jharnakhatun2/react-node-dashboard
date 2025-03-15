import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import swal from 'sweetalert';
import Loader from "../../util/Loader/Loader";
import DashboardLink from "../../util/DashboardLink/DashboardLink";
import { useAuth } from "../../components/Context/AuthProvider";

const EditProduct = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  const {loading, setLoading} = useAuth();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://react-node-server-487w.onrender.com/product/${id}`);
        const data = await response.json();
        setSingleData(data);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const products = { image, title, price, description };
    fetch(`https://react-node-server-487w.onrender.com/product/${singleData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          swal({
            title: "Update Successful!",
            text: "Navigate to the Products section",
            icon: "success",
            dangerMode: false,
          })
        }

      })
  }

  const inputStyle = "block w-full grow py-2 pr-3 pl-2 text-base text-gray-700 placeholder:text-gray-400 bg-gray-200 focus:outline-none sm:text-sm/6 border rounded border-gray-200 hover:shadow-sm transition delay-150 duration-300 ease-in-out"

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className="py-8 w-full md:w-5/6 lg:w-3/4 xl:w-4/6 mx-auto">
        <div className="flex items-center gap-1 pb-5">
          <DashboardLink />
          <p className="text-gray-700">Update</p>
        </div>
        <div className="border-b border-gray-300 pb-3">
          <h1 className="text-lg uppercase text-marcellus font-medium">Update Product</h1>
          <p className="text-gray-500">To update your product from the dashboard and navigate to the "Products" section. </p>
        </div>
        <form className="space-y-5 mt-5" onSubmit={handleUpdate}>
          <div>
            <label>Image </label>
            <input
              type="text"
              placeholder="Upload Image"
              name="image"
              defaultValue={singleData.image}
              className="input-style"
            />
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Type Title"
              name="title"
              defaultValue={singleData.title}
              className="input-style"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              placeholder="Type Price"
              name="price"
              defaultValue={singleData.price}
              className="input-style"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              type="text"
              placeholder="Type Description"
              name="description"
              defaultValue={singleData.description}
              className="input-style"
              rows={5}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Update"
              className="bg-green-300 text-gray-700 font-medium md:max-w-1/3 uppercase input-style"
            />
          </div>
        </form>
      </div>
    </>
  )
};

export default EditProduct;
