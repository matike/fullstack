import React from 'react'
import Header from './Header'
import Content from './Content'

const Total = ({course}) => course.parts.reduce((tot, p) => tot+p.exercises,0)

const Course = ({ course }) => {
    console.log(course)
    return (
            <li>
                <Header course={course}></Header>
                <Content course={course}/>
                <p><Total course={course}></Total></p>
            </li>
        )
    
}

export default Course
