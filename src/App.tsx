import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useAppDespatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDespatch();
  const { count } = useAppSelector((state: RootState) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>React redux projects</h2>
      <h2>{count}</h2>
      <button onClick={() => handleIncrement(1)}>increment</button>
      <button onClick={() => handleIncrement(5)}>increment by 5</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default App;
