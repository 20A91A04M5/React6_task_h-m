import React from "react";
import "./Navs.css"
class Navb extends React.Component{
    render(){
        return(
            <>
            <nav className="pro">
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', }}>
                    <a href="#home" style={{ margin: '20px 15px', textDecoration:"none", color:"black" }}>Ladies</a>
                    <a href="#about" style={{ margin: '20px 15px' , textDecoration:"none", color:"black" }}>Men</a>
                    {/* <a href="#services" style={{ margin: '0 15px' , textDecoration:"none", color:"black" }}>Baby</a> */}
                    <a href="#contact" style={{ margin: '20px 15px', textDecoration:"none", color:"black" }}>Kids</a>
                    <a href="#contact" style={{ margin: '20px 15px', textDecoration:"none", color:"black" }}>Home</a>
                    <a href="#contact" style={{ margin: '20px 15px', textDecoration:"none", color:"black" }}>Footer</a>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginRight:"10%" }}>
                    <input type="text" placeholder="Search" style={{ border: 'none', borderBottom: '1px solid black', outline: 'none' }} />
                </div>
            </nav>
            </>
        )
    }
}

export default Navb;