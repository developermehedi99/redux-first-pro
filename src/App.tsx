import { Outlet } from "react-router-dom";
import "./App.css";
// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { RootState } from "./redux/store";
// import { useAppDespatch, useAppSelector } from "./redux/hook";
// import { Button } from "./components/ui/button";
import Navbar from "./components/ui/navbar";

function App() {
  // const dispatch = useAppDespatch();
  // const { count } = useAppSelector((state: RootState) => state.counter);

  // const handleIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };
  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
