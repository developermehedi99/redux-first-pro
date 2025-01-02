import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { TTask } from "@/types/type";
import { Trash2 } from "lucide-react";

interface Tprops {
  task: TTask;
}

const TaskCard = ({ task }: Tprops) => {
  return (
    <div className="border px-3 py-5 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "high",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "low",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div>
          <Button variant="link" className="p-8 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox></Checkbox>
        </div>
      </div>
      <p className="mt-2">{task.description}</p>
    </div>
  );
};

export default TaskCard;
