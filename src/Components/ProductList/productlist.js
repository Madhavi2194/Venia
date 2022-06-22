import React, { useEffect } from "react";
import './productlist.scss';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from '../../redux/actions/productsActions';
//import { selectedProduct, removeSelectedProduct,} from "../../redux/actions/productsActions";
import Productdetails from "../product/product";
import Sidebar from '../Sidebar/Sidebar';



 

function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
       
        return(
          
          <div className= "container grid-wrapper">
            <div className="grid-child-sidebar">
               <Sidebar/>
            </div>

            <div className="grid-child-product">
              <div className="grid-container-inner"  >
                <Productdetails/>
              </div>
            </div>
          </div>
          
        )

    
}
export default ProductList;