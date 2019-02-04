import React from 'react'
import Part from './Part'


const Content = ({course}) => {
    console.log(course.parts)
    return (
    <div>
      <Part parts={course.parts} />
    </div>
  )
    }
  export default Content