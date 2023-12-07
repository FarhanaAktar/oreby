
import "slick-carousel/slick/slick.css";  
import { 
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
 } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from"./pages/home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
 <Route index element={<Home/>}/>
 <Route path="/shop" element = {<Shop/>}/>
 <Route path="/products/:productId" element = {<SingleProduct/>}/>
    </Route>
  )
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App

