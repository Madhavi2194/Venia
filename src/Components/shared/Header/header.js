import React, { Component } from 'react';
import './header.scss';


class Header extends Component {
    
    render() {
        return (
            <>
            <header className="container px-4">
            <nav className="">
               
                <div className=" navbar">
                    <button className='visible_lg'>
                        <img className="Hamburger" alt="Hambuger" src= {require("../../../assests/menu.png")}/>
                    </button>
                    <div className="navbar-brand" >
                         <img className="logo-img" alt="LOGO" src= {require("../../../assests/logo.png")}/>
                        
                    </div >
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav visible_sm">
                            <li className="nav-item">
                                <a  className="nav-link active"  >Women</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link" >Men </a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link" aria-current="page">Smart Gear </a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link" aria-current="page">Accesories </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-icons">
                        <ul>
                            <li className="nav-icon">
                               <a><img  src= {require("../../../assests/search.png")}/> </a>
                            </li>
                            <li className="nav-icon visible_lg_block">
                               <a className=''><img  src= {require("../../../assests/user.png")}/> <span className='text_top'> Sign in</span></a>
                            </li>
                            <li className="nav-icon">
                               <a><img src={require("../../../assests/shopping-bag.png")}/></a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
         
        </header>
        <hr className='border-grey'></hr>
        </>
        );
    }
}


export default Header;