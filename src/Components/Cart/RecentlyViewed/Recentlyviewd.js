import React from "react";
import './Recentlyviewed.scss';


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
                <img src="" alt="" className="rec-img" />
                <h4><b>Mens Casual Premium Slim Fit</b></h4><br/>
                <p>$144</p>
                </div>
              
                </div>
                <div className="abc">
                <div className="recent-view-section-img">
                <img src="" alt="" className="rec-img" />
                <h4><b>Mens Cotton Jacket</b></h4><br/>
                <p>$55.99</p>
                </div>
                
                </div>
                <div className="abc">
                <div className="recent-view-section-img">
                <img src="" alt="" className="rec-img" />
                <h4><b>White Gold Plated Princess</b></h4><br/>
                <p>$9.99</p>
                </div>
               
                </div>
                <div className="abc">
                <div className="recent-view-section-img">
                <img src="" alt="" className="rec-img" />
                <h4><b>Mens Casual Premium Slim Fit</b></h4><br/>
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