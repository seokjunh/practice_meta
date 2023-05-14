import React from "react";
import "./style/Home.css";
import {Link} from 'react-router-dom'
import BannerImage from "./assets/image.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage}` }}>
      <div className="headerContainer">
        <h1>안녕하세요!</h1>
        <Link to="/menu">
          <button>주문하기</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
