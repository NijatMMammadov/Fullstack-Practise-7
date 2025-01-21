import React, { useContext } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoritesContext } from '../context/FavoritesContext'
import { useNavigate } from 'react-router'

function Product() {

  let { favorites, setFavorites } = useContext(FavoritesContext)
  let [products, setProducts] = useState([])

  const navigate=useNavigate()

  function getData() {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  function handleAddFav(product) {
    let findFavorites = favorites.find(favorit => favorit._id === product._id)
    if (findFavorites) {
      alert("var")
    } else {
      setFavorites([...favorites, product])
    }
  }

  function handleNavDetail(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      <section id='products contain'>
        <div className='products-content'>
          <h2>
            Recent Podcasts
          </h2>
        </div>
        <div className='products contain '>
          {
            products.map(product => (
              <div key={product._id} className='product'>
                <img src={product.image} alt="" />
                <p>
                  {product.name}
                </p>
                <p>
                  {product.title}
                </p>
                {product.desc}
                <br />
                <button onClick={() => handleNavDetail(product._id)} className='btn-product'>Detail</button>
                <IconButton onClick={() => handleAddFav(product)}><FavoriteBorderIcon /></IconButton>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Product
