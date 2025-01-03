import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskSlice from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
