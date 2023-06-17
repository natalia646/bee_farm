import React from 'react';
import './Product.css'


export default function Product({icon, typeOfProducts, className, onClick}) {

  return (
    <article className= {`${className} Product`} onClick={onClick}>
      <img src={icon} alt='icon' className='product-icon'></img>
      <h2 className='h2'>{typeOfProducts}</h2>
    </article>

  )
}
