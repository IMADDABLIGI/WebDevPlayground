// import './MemoExample.css'
import { useState, useMemo} from 'react';

const congratsMessage = () => {
    console.log('message');
    return 'Salam'
}

function MemoExample() {
    
    const [count, setCount] = useState(0); // useState does render the component to render a new change
    let [isMax, setIsMax] = useState(false);
    
    
    let msg = useMemo(() => congratsMessage(), [isMax]); // We use useMemo if we want a function don't be running in every rendering and to run only in the first time or if a variable changed.
    // let msg = congratsMessage(); // Here this function will be running every time a render is happend.
    
    const handleClick = () => {
        (count + 1) <= 10 && setCount(count + 1);
        (count === 5) && setIsMax(true);
        console.log('TEST');
    }


    return (
        <div className='statePage'>
            <h2> {count} </h2>
            {msg}
            <div className='button'>
                < button onClick={handleClick} 
                className="btn btn-info increment" > Increment </button>
            </div>
        </div>
    )
}

export default MemoExample;
