import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {
  console.log(courses)
  const rows = () => courses.map(course =>
    <Course
      key={course.id}
      course={course}
    />
  )

  return (

    <div>
      <ul>{rows()}</ul>
    </div>
  )
}

export default App