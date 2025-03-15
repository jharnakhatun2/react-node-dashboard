import React from "react"
import swal from 'sweetalert';
import DashboardLink from "../../util/DashboardLink/DashboardLink";

const AddNew = () => {

const handleSubmit = (e) =>{
  e.preventDefault();
  const form = e.target ;
  const image = form.image.value ;
  const title = form.title.value ;
  const price = form.price.value ;
  const description = form.description.value ;
  const products = {image, title, price, description};
  fetch('https://react-node-server-487w.onrender.com/product',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify(products)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      swal({
        title: "Done!",
        text: "Product Added Successfully",
        icon: "success",
        dangerMode: false,
      })
      form.reset();
    }
  })
}

  
  return (
    <div className="py-8 w-full md:w-5/6 lg:w-3/4 xl:w-4/6 mx-auto">
      <div className="flex items-center gap-1 pb-5">
        <DashboardLink />
        <p className="text-gray-700">Add New Product</p>
      </div>
      <div className="border-b border-gray-300 pb-3">
        <h1 className="text-lg text-marcellus font-medium uppercase">Add New Product</h1>
        <p className="text-gray-500">To upload a product from the dashboard and navigate to the "Products" section. </p>
      </div>
      <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            placeholder="Image Url"
            name="image"
            className="input-style"
            required
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Type Title"
            name="title"
           className="input-style"
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            placeholder="Type Price"
            name="price"
           className="input-style"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Type Description"
            name="description"
           className="input-style"
           rows={5}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add New Product"
            className="bg-green-300 text-gray-700 font-medium md:max-w-1/3 uppercase input-style"
          />
        </div>
      </form>
    </div>
  )
};

export default AddNew;
