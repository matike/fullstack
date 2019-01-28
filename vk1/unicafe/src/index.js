import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {

    return (
        <tbody>
            <tr>
                <td width="100">{props.text}</td>
                <td width="100">{props.value}{props.percent}</td>
            </tr>
        </tbody>
    )
}

const AllStatistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <div>
                <p>
                    Ei yhtään palautetta annettu
                </p>
            </div>
        )
    }
    return(
        <table>
        <Statistics value={props.good} text="hyvä">
        </Statistics>
        <Statistics value={props.neutral} text="neutraali">
        </Statistics>
        <Statistics value={props.bad} text="huono">
        </Statistics>
        <Statistics value={props.good + props.neutral + props.bad} text="yhteensä">
        </Statistics>
        <Statistics value={(props.good + props.neutral + props.bad) / 3} text="keskiarvo">
        </Statistics>
        <Statistics value={props.good / (props.good + props.neutral + props.bad) * 100} text="positiivisia" percent="%">
        </Statistics>
    </table>
    )
    }

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>anna palautetta</h1>
            <Button handleClick={() => setGood(good + 1)} text="hyvä" >
            </Button>
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" >
            </Button>
            <Button handleClick={() => setBad(bad + 1)} text="huono" >
            </Button>

            <h1>statistiikka</h1>
            <AllStatistics good={good} neutral={neutral} bad={bad}></AllStatistics>

        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)