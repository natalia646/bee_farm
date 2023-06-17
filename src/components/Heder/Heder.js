import React, { useState } from "react";
import "./Heder.css";

export default function Heder() {
  const [style, setStyle] = useState({ 'text-decoration': 'none'})

  return (
    <div className="navigator">
      <div className="logo">
        <img src="./assets/fon/logo-page.jpg" alt="logo" className="lotype"></img>
        <h3 className="h3">{`Бджолина 
        Ферма`}</h3>
      </div>
      <nav className="nav" >
        <a href="">Про нас</a>
        <a href="">Продукція</a>
        <a href="">Магазин</a>
        <a href="">Контакти</a>
      </nav>
    </div>
  );
}
