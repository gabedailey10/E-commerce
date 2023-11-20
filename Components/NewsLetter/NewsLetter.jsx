import React from 'react'
import './Newsletter.css';
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Email Offers</h1>
      <p>Subscrice to our Newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
