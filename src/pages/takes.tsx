import { AddTask } from "@/components/module/task/addTaskModal";
import TaskCard from "@/components/module/task/taskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Takes = () => {
  const tasks = useAppSelector(selectTasks);
  // console.log(tasks);

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2>Tasks</h2>
        <AddTask />
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Takes;
