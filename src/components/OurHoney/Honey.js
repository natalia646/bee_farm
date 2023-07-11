import React from 'react';
import './AllHoney.css'

export default function Honey({img, name, prise, extent}) {
  return (
    <div className='honey'>
      <figure>
        <img src={img} alt='honey' className='img-honey'></img>
        <figcaption>{name}</figcaption>
      <p className='p-honey'>від {prise} грн.</p>
      {extent.map((li,i) => <li className='extent-honey' key={i}>{li} л.</li>)}
      </figure>


    </div>
  )
}
