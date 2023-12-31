import React from 'react'
import Shelf from '../../subassets/shelf.jpeg'
import Button from './Button'

const Consultation = () => {
  return (
    <section id='consult' className='consult'>
      <img src={Shelf} alt="shelf" />
      <div className="overlay">
        <h4 className='tophead'>
          we go the extra mile so that you can win your case.
        </h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, error nesciunt nobis aut ratione</p>
        <Button title='Free Consultation' />
      </div>
    </section>
    )
}

export default Consultation