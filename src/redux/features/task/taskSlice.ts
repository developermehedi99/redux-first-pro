import { RootState } from "@/redux/store";
import { TTask } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

interface TinitialState {
  tasks: TTask[];
}

const initialState: TinitialState = {
  tasks: [
    {
      id: "01",
      title: "Frontend developer",
      description: "hey bro i am front end developer and working in fiver",
      dueDate: "2025-02",
      isComplete: false,
      priority: "high",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export default taskSlice.reducer;
