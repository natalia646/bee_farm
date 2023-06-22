import React from "react";
import "./WhatWiDo.css";
import Product from "./Product";

export default function WhatWiDo() {
  const icons = [
    "../assets/images/icon1.png",
    "../assets/images/icon2.png",
    "../assets/images/icon3.png",
    "../assets/images/icon4.png",
    "../assets/images/icon4.png",
    "../assets/images/icon4.png",
  ];
  const blocksFon = [
    '../assets/fon/Bonbon/jpg',
    '../assets/fon/Bee-pollen/jpg',
    '../assets/fon/Candles/jpg',
    '../assets/fon/Gift-sets/jpg',
    '../assets/fon/Utensils/jpg',
    '../assets/fon/Honey/jpg',
  ]

  const typeOfProducts = ["Мед",   "Свічки","Подарункові набори", "Приладя","Бджолиний пилок", "Бонбоньєрки"];
  const classBlock = ["Honey", "Utensils", "Gift-sets", "Candles", "Bee-pollen", 'Bonbon'];

  const [activeIndex, setActiveIndex] = React.useState(2);
  const clickProduct = (index) => {
    setActiveIndex(index);
  };
    
  const backgroundImg = {
    backgroundImage: "url(../assets/fon/Bonbon/jpg)"
  }

  return (
    <div className="products">
      <h2 className="h2">Чим ми займаємося</h2>
      <p>
        Наша сімейна компанія займається всім, що стосується меду та його
        виробництва. Дізнайтеся більше про наші послуги нижче.
      </p>
        <div className="blocks">
          {icons.map((icon, i) => (
            <Product
              className={`${activeIndex === i ? `active` : ""} ${classBlock[i]}`}
              onMouseOver={() => clickProduct(i)}
              icon={icon}
              typeOfProducts={typeOfProducts[i]}
              key={i}
            />
          ))}
        </div>
      
    </div>
  );
}
