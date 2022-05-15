import {useState, useEffect} from 'react';
import axios from 'axios';

function ApiTest() {
  // Declare a new 'apiState' variable, with initial contents of "not working"
  const [apiState, setApiState] = useState({state: 'uninitialized', db: 'unknown', users: []});

  // useEffect is run automatically when the component is mounted or updated
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/state')
        setApiState({state: result.data.state, db: result.data.database, users: result.data.users})
      } catch (error) {  
        console.error("Caught an error: " + error)
        setApiState('error: ' + error)
      }
    };

    fetchData()
  }, []);
  
  // Hooks return very simple bits of HTML
  return (
    <div className="ApiTest">
      <h1>API Test Component</h1>
      <p>The API is {apiState.state} and the Database is {apiState.db}</p>
      <p>(Users: {apiState.users ? JSON.stringify(apiState.users) : 'none'})</p>
    </div>
  );
}

export default ApiTest;
