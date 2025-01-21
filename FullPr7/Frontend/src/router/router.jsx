import AddProduct from "../pages/AddProduct";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

const ROUTER=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
            {
                path:"/addproduct",
                element:<AddProduct/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
]
export default ROUTER