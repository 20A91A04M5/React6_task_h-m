import React from "react";
import "./Foot.css"

class Foot extends React.Component{
    render(){
        return(
            <>
        <div id="Ft">
            <div className="itm">
                <div className="shp">
                    <h4>Shop Items</h4>
                    <a href="#">Ladies</a>
                    <a href="#">Gents</a>
                    <a href="#">Kids</a>
                </div>
                <div className="shp">
                    <h4>Info and Help</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Shipping Info</a>
                    
                </div>
            </div>
            {/* <div className="icos">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{ color: 'black' }}></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook" style={{color:'black'}}></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
            </div> */}
            <small id="sml">&copy; 2025 Task's Fashon Design</small>
        </div>
            </>
        )
    }
}

export default Foot;