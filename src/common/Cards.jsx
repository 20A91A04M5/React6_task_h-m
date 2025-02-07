import React from "react";
import "./Card.css"
import profile from "../assets/KTM.jpg"
import profile1 from "../assets/frd.jpeg"



class Cards extends React.Component{
    render(){
        return(
            <>
            <div className="imgs">
                <img className="im" src="https://image.hm.com/content/dam/global_campaigns/season_01/women/startpage-assets/wk05/WS11H-16x9-women-startpage-wk05.jpg?imwidth=4800" alt="Image 1" />
                <img className="im" src="https://static.fibre2fashion.com/Newsresource/images/290/h-m_301741.jpg" alt="Image 2" />
                <img className="im" src="https://hmgroup.com/wp-content/uploads/2021/01/WWF-kids-pic1-1024x768.jpg" alt="Image 3" />
            </div>

            {/* <div id="carouselExampleCaptions" className ="carousel slide" style={{width:"70%",display:"flex",justifyContent:"center", alignItems:"center"}}>
  <div className ="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className ="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className ="carousel-inner">
    <div className ="carousel-item active">
      <img src={profile} className ="d-block  w-100" alt="..." width={"60%"} height={"300px"} />
      
    </div>
    <div className ="carousel-item">
      <img src={profile1} className ="d-block w-100" alt="..." />
      <div className ="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className ="carousel-item">
      <img src={profile} className ="d-block w-100" alt="..." />
      <div className ="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Previous</span>
  </button>
  <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
</div> */}
</>
        )
    }
}

export default Cards;