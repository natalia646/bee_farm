import React from "react";
import "./WhatWiDo.css";
import Product from "./Product";

export default function WhatWiDo() {
  const icons = [
    "../images/icon1.png",
    "../images/icon2.png",
    "../images/icon3.png",
    "../images/icon4.png",
  ];
  const typeOfProducts = ["Мед", "Вулики", "Продукція", "Інвертар"];

  const [activeIndex, setActiveIndex] = React.useState(2);
  const clickProduct = (index) => {
    setActiveIndex(index);
  };

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
              className={activeIndex === i ? "active" : ""}
              onClick={() => clickProduct(i)}
              icon={icon}
              typeOfProducts={typeOfProducts[i]}
            />
          ))}
        </div>
      
    </div>
  );
}
