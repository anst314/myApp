import { useState, useEffect } from 'react';

import './App.css';
import Activity from './components/Activity';

function App() {
  const [activityData, setActivityData] = useState(null);
  useEffect(() => {
   async function fetchData() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();
    console.log(data);
    setActivityData(data);
    }
    fetchData();
  }, [])
  return (
    <div className="App">
     {activityData && <Activity activity = {activityData}/>}
    </div>
  );
}

export default App;
