import React from "react"
import "./About.css"
import Back from "../back/Back"
import AboutCard from "./AboutCard"
import awrapper from './awrapper.webp'
const About = () => {
  return (
    <div className="aboutall">
      <Back title='About Us'/>
      <img src={awrapper} alt=""/>
      <AboutCard />
      <h1>we are committed to transforming the way you learn by providing a dynamic, interactive, and user-friendly online education platform. Whether you're a student seeking to expand your knowledge, a professional looking to upskill, or a lifelong learner with a passion for new topics, our website offers a diverse range of courses tailored to your needs.</h1>
    </div>
  )
}

export default About
