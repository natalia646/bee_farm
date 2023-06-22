import React from 'react';
import './AllHoney.css'

export default function Honey({img, name, prise, extent}) {
  return (
    <div className='honey'>
      <img src={img} alt='honey' className='img-honey'></img>
      <h3>{name}</h3>
      <p className='p-honey'>{prise}</p>
      {extent.map((li,i) => <li className='extent-honey' key={i}>{li} л.</li>)}
    </div>
  )
}
