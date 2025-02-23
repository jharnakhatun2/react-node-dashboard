import React from "react"
import swal from 'sweetalert';

const AddNew = () => {

const handleSubmit = (e) =>{
  e.preventDefault();
  const form = e.target ;
  const image = form.image.value ;
  const title = form.title.value ;
  const price = form.price.value ;
  const description = form.description.value ;
  const products = {image, title, price, description};
  console.log(products)
  fetch('http://localhost:5000/product',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify(products)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
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

  const inputStyle = "block w-full grow py-2 pr-3 pl-2 text-base text-gray-700 placeholder:text-gray-400 bg-gray-200 focus:outline-none sm:text-sm/6 border rounded border-gray-200 hover:shadow-sm transition delay-150 duration-300 ease-in-out"
  return (
    <div className="py-8 w-full md:w-5/6 lg:w-3/4 xl:w-4/6 mx-auto">
      <div className="border-b border-gray-300 pb-3">
        <h1 className="text-2xl text-marcellus font-medium">Add New Product</h1>
        <p className="text-gray-500">To upload a product from the dashboard and navigate to the "Products" section. </p>
      </div>
      <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            placeholder="Image Url"
            name="image"
            className={`${inputStyle}`}
            required
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Type Title"
            name="title"
            className={`${inputStyle}`}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            placeholder="Type Price"
            name="price"
            className={`${inputStyle}`}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Type Description"
            name="description"
            className={`${inputStyle}`}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add New Product"
            className={`bg-green-300 text-gray-700 font-medium md:max-w-1/3 uppercase ${inputStyle}`}
          />
        </div>
      </form>
    </div>
  )
};

export default AddNew;
