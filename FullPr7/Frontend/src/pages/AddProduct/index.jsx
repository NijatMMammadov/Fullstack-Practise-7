import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AddProduct() {

  let [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/products/`)
      .then(res => {
        (setProducts(res.data))
        console.log(res.data);
      })
  }, [])

  function handleDelete(id) {

    axios.delete(`http://localhost:3000/products/${id}`)
    .then(res=>res.data)
    let deleteProduct = products.filter(item => item._id !== id)
    console.log(deleteProduct);
    setProducts(deleteProduct);
  }

  return (
    <>
      <TableContainer style={{ margin: "100px auto", width: "80%" }} component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Images</TableCell>
              <TableCell align="center">Desc</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((prod) => (
              <TableRow
                key={prod._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {prod.name}
                </TableCell>
                <TableCell align="center">{prod.title}</TableCell>
                <TableCell align="center"><img style={{ width: "50px" }} src={prod.image} alt="" /></TableCell>
                <TableCell align="center">{prod.desc}</TableCell>
                <TableCell align="left"><button onClick={() => handleDelete(prod._id)} className='btn-delete'>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AddProduct
