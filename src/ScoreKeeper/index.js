
import {useState} from 'react'

function ScoreKeeper(){

    let [count, setCount] = useState(0);

    return (
        <section>
            <p> Score : <strong> {count}  / 32</strong></p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </section>
    )
}

export default ScoreKeeper