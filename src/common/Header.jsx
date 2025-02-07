import React from "react";
import "./Header.css"

class Header extends React.Component{
    render(){
        return(
        // <h1>Hii</h1>
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sustainability</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Customer Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ooo</a>
        </li>
       <img className="hm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYablQBdUce6WUhEaxCGu-DAW6LDFKiDIzlQ&s" alt="H&M" />
      </ul>
      <form className="d-flex" role="search">
        
        <div className="icons">
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYnIOM6R6COoA3jzfYzZ4iJJ5hAQg4Al6mg&s" alt="Sign In" title="Sign In" /><span>Login Up</span>&emsp;
          <img className="ico" src="https://as2.ftcdn.net/jpg/02/34/72/91/1000_F_234729116_KlAWcHK9Wlj2NUOPnVUE2vTqD78i28rD.jpg" alt="Liked" title="Liked" /><span>Liked Items</span>&emsp;
          <img className="icon" src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png" alt="Add to Cart" title="Add to Cart" /><span>Products </span>&emsp;
          <img className="ico" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DY1tjGc0WbPmAFUTZRtS0YTRq4m7Q6Dpdw&s" alt="Add to Cart" title="Search" />
        </div>
        
      </form>
    </div>
  </div>
</nav>
        </>
        )
    }
}

export default Header;