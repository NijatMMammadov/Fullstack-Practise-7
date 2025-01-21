import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Helmet from "react-helmet"
import { useParams } from 'react-router'

function Detail() {

  let [product, setProduct] = useState([])
  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => {
        (setProduct(res.data.data))
        console.log(res.data.data);
      })
  }, [])

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <meta name='description' content='Detail' />
      </Helmet>
      <>
        <div className='products contain '>
          {
            <div key={product._id} className='product'>
              <img src={product.image} alt="" />
              <p>
                {product.name}
              </p>
              <p>
                {product.title}
              </p>
              {product.desc}
            </div>
          }
        </div>
      </>
    </>
  )
}

export default Detail
