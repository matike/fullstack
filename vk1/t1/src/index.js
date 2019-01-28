import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <p>
                <h1>{props.course}</h1>
            </p>
        </div>

    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>

    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
        </div>

    )
}

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} tehtävää</p>
        </div>

    )
}

const App = () => {
    const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }
  
    return (
        <div>
            <Header course={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))