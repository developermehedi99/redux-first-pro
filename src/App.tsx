import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const disPatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  console.log(count);

  const handleIncrement = (amount: number) => {
    disPatch(increment(amount));
  };
  const handleDecrement = () => {
    disPatch(decrement());
  };

  return (
    <div>
      <h1 className="font-bold text-5xl mb-10">Redux toolkit counter</h1>
      <h1 className="text-3xl">{count}</h1>
      <button onClick={() => handleIncrement(1)} className="mr-4">
        increment
      </button>
      <button onClick={() => handleIncrement(5)} className="mr-4">
        increment by 5
      </button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default App;
