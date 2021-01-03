import { useState } from 'react';


// https://reactjs.org/docs/hooks-intro.html

function UseStateExamples({ initialValue = 0 } ) {
 
    console.log("initialValue:", initialValue)
    const [count, setCount] = useState(initialValue);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
        );
}

export default UseStateExamples