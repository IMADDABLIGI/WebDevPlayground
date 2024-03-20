import {useRef, useEffect} from 'react'

import './RefExample.css'

function RefExample() 
{

    const inputRef = useRef(null); // useRef does not rerender the component like useState but instead it can update a value in the rendering
    let userInput;


    useEffect(() => { // Using useEffect with useRef to focus on the input as soon as the page get render
        inputRef.current.focus();
    },)

    const handleClick = () => {
        inputRef.current.focus();

        userInput = inputRef.current.value;
        console.log(userInput);
        // console.log(inputRef.current.value);
    }
 
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) { // Check if Enter key is pressed
        let userInputs = e.target.value;
        console.log(userInputs);
        }
    };




    return (
        <div className='refPage'>
            <input className='input' placeholder='Write something ...' ref={inputRef} onKeyDown={handleKeyPress} ></input>
            <button className='btn btn-info increment' onClick={handleClick} > Focus </button>
        </div>
    )
}

export default RefExample;