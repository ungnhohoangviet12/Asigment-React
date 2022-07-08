import { useEffect, useRef } from 'react';
import './App.css';
// import CounterTime from './components/CounterTime';

function App() {
  const divv = useRef(null)

  useEffect(() => {

    divv.current.style.color = 'red'
  }, [])



  return (
    <div className="App" ref={divv}>
      hennho
      {/* <CounterTime /> */}

    </div>
  );
}

export default App;
