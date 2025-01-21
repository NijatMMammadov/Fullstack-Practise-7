import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router';

function Footerr() {
  return (
    < >
      <div className='footer'>
        <p>
        Copyright ©2025 All rights reserved | This template is made with
        </p>
        <FavoriteBorderIcon></FavoriteBorderIcon>
        <p>
          by
        </p>
        <Link style={{color:"black",textDecoration:"none"}}>Colorlib</Link>
      </div>
    </>
  )
}

export default Footerr
