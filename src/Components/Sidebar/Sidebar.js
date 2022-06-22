import React from "react";
import './Sidebar.scss';

class Sidebar extends React.Component {
    render() {
        return (
            <section className="sidebar">
                <h4>Filters</h4>

                <div className="filter-section">                   
                    <p>Attributes</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                    </ul>

                    <p className="border-line">
                        <a href="#">Show More</a>
                    </p>
                </div>
                <div className="filter-section">
                    <p>Attributes</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li className="border-line">
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text ">Option</label>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-colors-wrapper">
                    <p>Color</p>
                    <div className="sidebar-colors-section border-line">
                        <div className="black-color"></div>
                        <div className="white-color"></div>
                        <div className="teal-green"></div>
                        <div className="mustard-color"></div>
                        <div className="blue-color"></div>
                        <div className="red-color"></div>
                        <div className="lavender-color"></div>
                        <div className="pink-color"></div>
                        <div className="dark-yellow"></div>
                        <div className="multi-color"></div>                      
                    </div>
                </div>
                <div className="filter-section">
                    <p>Attributes</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1">Option</label>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Sidebar;