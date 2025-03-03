import React, { useEffect, useState } from "react"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { useAuth } from "../../components/Context/AuthProvider";
import Loader from "../../util/Loader/Loader";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const UserTable = () => {
  const [allUsers, setUsers] = useState([]);
  const { loading } = useAuth();

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch('http://localhost:5000/users')
        const data = await response.json();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchFunction();
  }, [])


  //Delete Users
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
        fetch(`http://localhost:5000/users/${id}`, { method: 'DELETE' })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal({
                title: "Deleted!",
                text: "User Deleted Successfully",
                icon: "success",
                dangerMode: false,
              });
              const users = allUsers.filter((user) => user._id !== id);
              console.log(users)
              setUsers(users);
            }
          })
      }
    });
  }

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <h1>Total Users : {allUsers.length}</h1>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>CREATION TIME</TableColumn>
          <TableColumn className="flex justify-center">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {
            allUsers?.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.creationTime}</TableCell>
                <TableCell onClick={() => handleDelete(user._id)} className="flex justify-center text-xl text-red-600 cursor-pointer hover:text-red-400"><MdOutlineDeleteForever /></TableCell>
              </TableRow>
            ))
          }

        </TableBody>
      </Table>
    </>
  )
};

export default UserTable;
