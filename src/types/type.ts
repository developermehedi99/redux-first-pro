export interface TTask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplete: boolean;
  priority: "high" | "medium" | "low";
}
