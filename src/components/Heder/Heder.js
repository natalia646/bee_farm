import React, { useState } from "react";
import "./Heder.css";

export default function Heder() {
  const [style, setStyle] = useState({ 'text-decoration': 'none'})

  return (
    <div className="navigator">
      <div className="logo">
        <img src="./assets/fon/logo2.jpg" alt="logo" className="lotype"></img>
        <h3 className="h3">{`Бджолина 
        Ферма`}</h3>
      </div>
      <nav className="nav" >
        <a className="a-navigator" href="">Про нас</a>
        <a className="a-navigator" href="">Продукція</a>
        <a className="a-navigator" href="">Магазин</a>
        <a className="a-navigator" href="">Контакти</a>
      </nav>
    </div>
  );
}
