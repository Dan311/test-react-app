import logo from './logo.svg';
import './App.css';
import HooksExamples from './test-components/hooks-examples';

function App() {
  function handleClick(event) {
    console.log(event)
    console.log("What Up")
    
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={handleClick}>Click Button</button>
      <HooksExamples/>
      </header>
    </div>
  );
}

export default App;
