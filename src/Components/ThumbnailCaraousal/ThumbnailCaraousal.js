import React from "react";
import "./ThumbnailCaraousal.scss";
import downArrow from '../../assests/arrow-down-grey.svg';


const ThumbnailCaraousal = (props) => {

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (dots[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }


    const image = props.image;
    console.log("temp",props.image);
    return (        
        <div class="thumbnail-container aem-Grid aem-Grid--12">
            <div class="row show-lg aem-GridColumn aem-GridColumn--default--2 visible_sm">
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(1)} alt="The Woods" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(2)} alt="Cinque Terre" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(3)}  alt="Mountains and fjords" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(4)}  alt="Northern Lights" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(5)}  alt="Nature and sunrise" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(6)}  alt="Snowy Mountains" />
                </div>

                <a class="next-slide"  onClick={() => plusSlides(1)}><img src={downArrow} alt="down arrow" /></a>
            </div>

            <div class="aem-GridColumn aem-GridColumn--default--10">
                <div class="mySlides">                    
                    <img src={image} />
                </div>

                <div class="mySlides">
                    {/* <img src={require('./images/2.jpg')} /> */}
                </div>

                <div class="mySlides">
                    {/* <img src={image} /> */}
                </div>

                <div class="mySlides">
                    {/* <img src={image} /> */}
                </div>

                <div class="mySlides">
                    {/* <img src={image} /> */}
                </div>               

            </div>

        </div>

    );

};

export default ThumbnailCaraousal;