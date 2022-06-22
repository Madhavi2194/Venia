import React, { Component } from 'react';
import './ProductDetails.scss';
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectedProduct, removeSelectedProduct, addTOCart } from '../../redux/actions/productsActions';
import { useEffect } from 'react';
import ThumbnailCaraousal from '../ThumbnailCaraousal/ThumbnailCaraousal';




function ProductDetails() {
    const navigate = useNavigate();
    const { productID } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    const navigateCart = () => {
        dispatch(addTOCart(product))
        navigate("/cart")
    }

    useEffect(() => {
        if (productID) {

            fetchProductDetail(productID);
        }

        // return () => {
        //     dispatch(removeSelectedProduct());
        // };
    }, [productID]);

    /* Increment decrement */
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }



    return (
        <div>
            <div className='productdetails-wrapper'>
                <div className='product-wrapper'>
                    <ThumbnailCaraousal image={image}></ThumbnailCaraousal>
                    {/* <img src={product.image} alt={title} className="product-img" id="ti-1"/> */}
                </div>
                <div className='product-description'>

                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 px-20">
                        clothing / Women's / Outwear
                    </div>
                    <h4 className='display-l-36- '>{title}</h4>
                    <p className='display-s-20- mb-16'>$ {price}</p>
                    <div className="mb-16"> Star count:(160)</div>
                    <span className='mb-16'><img src={require("../../assests/heart.png")} /></span>
                    <p className='regular-heading-m-16- mb-16 border-line pt-18 '>{product.description}</p>
                    <p className='regular-heading-l-20- mb-16'>Color</p>

                    <div className="sidebar-colors-section  mb-24">
                        <div className="teal-blue"><img src={require("../../assests/Swatch 01.png")} /></div>
                        <div className="magento-color"><img src={require("../../assests/Swatch 02.png")} /></div>
                        <div className="darkblack-color"><img src={require("../../assests/Swatch 03.png")} /></div>
                        <div className="grey-color"><img src={require("../../assests/Swatch 04.png")} /></div>
                    </div>

                    <p className='regular-heading-l-20- mb-16'>Size</p>
                    <div className="size-section  mb-24">
                        <div className="size"> X </div>
                        <div className="size"> S </div>
                        <div className="size"> M </div>
                        <div className="size"> L </div>
                        <div className="size"> XL </div>

                    </div>
                    <section>
                        <p className='regular-heading-l-20- mb-20'>Quantity</p>
                        <div className="quantity-wrapper">
                            <button className="minus" onClick={decNum}> </button>
                            <input type="text" className="form-control  quantity-btn" value={num} onChange={handleChange} />
                            <button className="plus" onClick={incNum}></button>
                        </div>
                    </section>
                    <section className='block-header'>
                        <div>
                            <button onClick={navigateCart} className='addcart_buttom'> ADD TO CART</button>
                            <div className='flex-display'>
                                <div className="desc-icon"><img src={require("../../assests/heart.png")} />&nbsp; Save</div>
                                <div className="desc-icon"><img src={require("../../assests/share-2.png")} /> Share</div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <div className='container'>
                <div className="aem-Grid aem-Grid--12 product-info-section">
                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 mb-32">
                        <div>
                            <h2 className='display-l-36- '>{title}</h2>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-description regular-body-s-14- mb-32 mr-32">
                        <div className="block-header mb-16">
                            <div>
                                <b className='regular-heading-l-20-'>Description</b>
                            </div>
                        </div>
                        <div className='md-16 regular-heading-m-16-'>{description}</div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-details regular-body-s-14- mb-16">
                        <div className="block-header mb-20 ">
                            <div><b className='regular-heading-l-20- '>Details</b></div>
                        </div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                <div><img className="img-details regular-heading-m-16-" src={require("../../assests/sweat.png")} />&nbsp;&nbsp;Sweat-wicking</div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                <div><img className="img-details regular-heading-m-16-" src={require("../../assests/breathable.png")} />&nbsp;&nbsp;Breathable</div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                <div><img className="img-details regular-heading-m-16-" src={require("../../assests/feather.png")} />&nbsp;&nbsp;Lightweight fabric</div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                <div><img className="img-details regular-heading-m-16-" src={require("../../assests/materials.png")} />&nbsp;&nbsp;69% nylon, 31% lycra</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="horizontal-bar"></div>
            </div>
        </div>
    );

}



export default ProductDetails;



