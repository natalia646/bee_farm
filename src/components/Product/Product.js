import React from 'react';
import './Product.css'

export default function Product({icon}) {

  return (
    <article className='Product'>
      <img src={icon} alt='icon' className='product-icon'></img>
      <h2>Мед</h2>
      <p>Ми виробляємо, розливаємо та продаємо мед</p>
      <a href=''>Дізнатись більше</a>
    </article>
  )
}
