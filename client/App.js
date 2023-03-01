import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./src/components/Footer/Footer";
import Navbar from "./src/components/Navbar/Navbar";
import Home from "./src/pages/Home/Home";
import Product from "./src/pages/Product/Product";
import Products from "./src/pages/Products/Products";

const Layout =()=>{
    return(
        <div className="app">
            <Navbar/>
            
            <Footer/>
        </div>
    )
}
const router = createBrowserRouter([
    {   
    path:"/",
    element: <Layout/>,
    children:[{
        path:"/",
        element:<Home/>
    },
    {
        path:"/products/:id",
        element: <Products/>
    },
    {
        path:"/product/:id",
        element: <Product/>
    }
    ]}
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
