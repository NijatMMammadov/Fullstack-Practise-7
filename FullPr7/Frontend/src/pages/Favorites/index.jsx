import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { IconButton } from '@mui/material'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Helmet } from 'react-helmet';


function Favorites() {

  let { favorites, setFavorites } = useContext(FavoritesContext)

  function handleDeleteFav(id) {
    let deleteFavorites = favorites.filter(fav => fav._id != id)
    setFavorites(deleteFavorites)
  }

  if (!favorites.length > 0) {
    return <h2 style={{ textAlign: "center", fontSize: "48px", color: "red", margin: "250px" }}>Product Not Found</h2>
  }

  return (
    <>
      <Helmet>
        <title>Favorites Page</title>
        <meta name='description' content='Favorites' />
      </Helmet>
      <hr />
      <section id='products contain'>
        <div className='products-content'>
          <h2>
            FAVORITES
          </h2>
        </div>
        <div className='products contain '>
          {
            favorites.map(item => (
              <div key={item._id} className='product'>
                <img src={item.image} alt="" />
                <p>
                  {item.name}
                </p>
                <p>
                  {item.title}
                </p>
                {item.desc}
                <br />
                <IconButton onClick={() => handleDeleteFav(item._id)}><HeartBrokenIcon /></IconButton>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Favorites
