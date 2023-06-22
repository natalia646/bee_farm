import React from 'react';
import './Product.css'


export default function Product({icon, typeOfProducts, className, onMouseOver, style}) {

  const backgroundImg = {
    backgroundImage: "url(/assets/fon/Bonbon/jpg)"
  }

  return (
    <article className= {`${className} Product`} onMouseOver={onMouseOver} style={{backgroundImage: "url(/public/assets/fon/Honey.jpg)"}}>
      <img src={icon} alt='icon' className='product-icon'></img>
      <h2 className='h2'>{typeOfProducts}</h2>
    </article>

  )
}
