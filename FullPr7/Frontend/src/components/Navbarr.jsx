import React from 'react'
import { Link, useNavigate } from "react-router"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from "@mui/material"

function Navbarr() {

    const navigate=useNavigate()

    function handleNavigateFav(){
        navigate("/favorites")
    }
    function handleNavigateHome(){
        navigate("/")
    }

    function AddProduct(){
        navigate("/addproduct")
    }

    return (
        <>
            <div className="nvb contain">
                <div className="nvb-logo">
                    <h1>
                        Podca
                    </h1>
                </div>
                <div className='nvb-links'>
                    <Link onClick={()=>handleNavigateHome()} className='link'>HOME</Link>
                    <Link className='link'>ABOUT US</Link>
                    <Link className='link'>PODCA</Link>
                    <Link className='link'>BLOG</Link>
                    <Link  className='link'>CONTACT</Link>
                    <Link onClick={()=>AddProduct()} className='link'>ADD PRODUCT</Link>
                    <IconButton onClick={()=>handleNavigateFav()}><FavoriteBorderIcon/></IconButton>
                </div>
            </div>
        </>
    )
}

export default Navbarr
