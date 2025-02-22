import React from "react"

const AddNew = () => {
  return (
    <div>
      <h1 className="text-2xl">Add New Products</h1>
      <form>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs" />
      </form>
    </div>
  )
};

export default AddNew;
