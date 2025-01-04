import { RootState } from "@/redux/store";
import { TTask } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface TinitialState {
  tasks: TTask[];
}

const initialState: TinitialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTask>) => {
      const id = uuidv4();

      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
