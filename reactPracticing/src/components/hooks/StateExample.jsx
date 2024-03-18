import './StateExample.css'
import { useState } from 'react';



function StateExample() {

    const [count, setCount] = useState(0);
    
    return (
        <div className='statePage'>
            <h2> {count} </h2>
            < button onClick={() => {
                (count + 1) <= 10 && setCount(count + 1)}
                } className="btn btn-info" > Increment </button>
            < button onClick={() => {
                (count - 1) >= 0 && setCount(count - 1)}
                } 
                className="btn btn-primary" > Decrement </button>
        </div>
    )
}

export default StateExample;
