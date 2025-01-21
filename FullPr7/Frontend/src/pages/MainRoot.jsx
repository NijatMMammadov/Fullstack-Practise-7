import React from 'react'
import Navbarr from '../components/Navbarr'
import Footerr from '../components/Footerr'
import { Outlet } from "react-router"

function MainRoot() {
    return (
        <div>
            <Navbarr></Navbarr>
            <Outlet />
            <Footerr></Footerr>
        </div>
    )
}

export default MainRoot
