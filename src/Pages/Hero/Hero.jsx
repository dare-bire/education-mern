import React from "react"
import Heading from "../heading/Heading"
import arrow_icon from '../../assets/arrow.png'
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains,
             far from the countries Vokalia and Consonantia, 
             there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <img src={arrow_icon } alt=""/>
              </button>
              <button className="primary-btn">
                VIEW COURSE <img src={arrow_icon } alt=""/>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
