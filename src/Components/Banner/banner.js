import React, { Component } from "react";
import './banner.scss';

class Banner extends Component {
    render() {
        return (
             <div className="container ">
                <div className="banner_display ">
                    <div className="banner-wrapper mb-32"> </div>
                    <div className="banner-sider">
                        <div className="innner-section display-xl-48-dekstop-only">Women's</div> 
                        <div className="border-blue"></div>
                    </div>
               </div>
            </div>
        )
    }

}

export default Banner;

