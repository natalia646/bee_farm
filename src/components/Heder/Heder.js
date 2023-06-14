import React, { useState } from "react";
import "./Heder.css";

export default function Heder() {
  const [style, setStyle] = useState({ 'text-decoration': 'none'})

  const mouseMove = function(){
    
  }

  return (
    <div className="navigator">
      <h3>Бджолина Ферма</h3>
      <nav className="nav" >
        <a href="">Про нас</a>
        <a href="">Продукція</a>
        <a href="">Магазин</a>
        <a href="">Контакти</a>
      </nav>
    </div>
  );
}
