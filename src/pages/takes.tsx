import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Takes = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <div>
      <h2>this is takes page</h2>
    </div>
  );
};

export default Takes;
