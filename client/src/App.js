import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  // Declare a new 'apiState' variable, with initial contents of "not working"
  const [apiState, setApiState] = useState('uninitialized');

  // useEffect is run automatically when the component is mounted or updated
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/state')
        setApiState(result.data.state)
      } catch (error) {  
        console.error("Caught an error: " + error)
        setApiState('error: ' + error)
      }
    };

    fetchData()
  });
  
  // Hooks return very simple bits of HTML
  return (
    <div className="App">
      <h1>Example Application Component</h1>
      <p>
        The API is {apiState}
      </p>
    </div>
  );
}

export default App;
