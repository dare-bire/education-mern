import React from "react"
import "./Allcourse.css"
import { online } from "../../dummydata"
import Heading from "../heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content-grid3'>
            {online.map((val) => (
              <div className='box' key={val.courseName}> {/* Added a key prop for list rendering */}
                <div className='img'>
                  <img src={val.cover} alt={`Cover for ${val.courseName}`} />
                  <img src={val.hoverCover} alt={`Hover cover for ${val.courseName}`} className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
