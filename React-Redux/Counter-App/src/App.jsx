
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './App/counterSlice';
import Navbar from './Components/Navbar';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter App</h1>

        <Navbar />
        <button onClick={()=>dispatch(decrement())}>
          -
        </button>

        <h2>Counter: {counter}</h2>
        <button onClick={()=>dispatch(increment())}>
          +
        </button>
        {"     "}
        <button onClick={()=>dispatch(incrementByAmount(5))}>
          + 5
        </button>
      </div>
    </>
  )
}

export default App
