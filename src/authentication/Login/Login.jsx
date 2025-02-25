import React from "react"

const Login = () => {
  return (
    <div>
      <div>
      <form className="space-y-5 mt-5">
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
    </div>
  )
};

export default Login;
