import React from "react";
import './Recentlyviewed.scss';
import bangle from '../../../assests/bangle.jpg';
import hoodie from '../../../assests/Hoodie.jpg';
import tshrit from '../../../assests/tshirt.jpg';



function Recentlyviewed () {
    return(
        <> 
        <section className="ui grid container">
            <div className="heading">
                <h1 className="recent-view-heading">Recently View</h1>
            </div>
            <center>     

            <div className="recent-view-section">
             
                <div className="abc">
                <div className="recent-view-section-img">
                <img src={bangle} alt="" className="rec-img" />
                <h4><b> Gold & Silver  Bracelet</b></h4><br/>
                <p>$144</p>
                </div>
              
                </div>
                <div className="abc">
                <div className="recent-view-section-img">
                <img src={hoodie} alt="" className="rec-img" />
                <h4><b>Mens  Jacket</b></h4><br/>
                <p>$55.99</p>
                </div>
                
                </div>
                <div className="abc">
                <div className="recent-view-section-img">
                <img src={tshrit} alt="" className="rec-img" />
                <h4><b>Mens Casual  T-Shirts</b></h4><br/>
                <p>$9.99</p>
                </div>
               
                </div>
                <div className="abc">
                <div className="recent-view-section-img">
                <img src={bangle} alt="" className="rec-img" />
                <h4><b>Gold & Silver  Bracelet</b></h4><br/>
                <p>$114</p>
                </div>
                </div>
               
            </div>
            </center>  

        </section>
        </>
    )
}

export default Recentlyviewed;