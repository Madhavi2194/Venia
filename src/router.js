import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "./Pages/Home/home";
import Cart from "./Pages/Cart/CartPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import App from "./App";

const Router = () => (

    <BrowserRouter>

        <App>

            <Routes>

                <Route path="/" element={

                    <Home/>

                } />

             <Route path="/product/:productID" element={

                    <ProductPage>
                    </ProductPage>

                } />



                <Route path="/cart" element={

                    <Cart></Cart>

                } />

            </Routes>

        </App>

    </BrowserRouter>

);
export default Router ;