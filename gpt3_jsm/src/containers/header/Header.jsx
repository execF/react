import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere minima eligendi dolorum illo, ullam at eius assumenda qui delectus quas inventore corporis nostrum saepe debitis quaerat voluptatum harum voluptate. Ut odit excepturi fugit quod consequuntur et voluptatem repellendus qui labore.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/> 
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header