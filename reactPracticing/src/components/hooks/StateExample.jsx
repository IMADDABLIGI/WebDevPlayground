import './StateExample.css'
import { useEffect , useState} from 'react';



function StateExample() {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("The count is:", count);
    }, [count] )

    return (
        <div className='statePage'>
            <h2> {count} </h2>
            <div className='button'>
                < button onClick={() => {
                    (count + 1) <= 10 && setCount(count + 1)}
                } className="btn btn-info increment" > Increment </button>
                < button onClick={() => {
                    (count - 1) >= 0 && setCount(count - 1)}
                } 
                className="btn btn-primary decrement" > Decrement </button>
            </div>
        </div>
    )
}

export default StateExample;
