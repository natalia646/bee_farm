import React from 'react';
import './WhatWiDo.css';
import Product from '../Product/Product';




export default function WhatWiDo() {

  const icons = ['../images/icon1.png', '../images/icon2.png', '../images/icon3.png', '../images/icon4.png'];
  
  const typeOfProducts = ['Мед', 'Вулики', 'Продукція', 'Інвертар',]

  return (
    <div>
      <h2>Чим ми займаємося</h2>
      <p>Наша сімейна компанія займається всім, що стосується меду та його виробництва. Дізнайтеся більше про наші послуги нижче.</p>

      <div className='blocks'>
        {icons.map(icon => <Product icon = {icon} />)}    
      </div>

    </div>
  )
}
