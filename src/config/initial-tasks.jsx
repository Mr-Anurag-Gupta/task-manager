import { nanoid } from "nanoid";

export const initialTasks = [
  { taskName: "Buy a car.", taskId: nanoid(8), completed: false },
  {
    taskName: "Make tea for family members.",
    taskId: nanoid(8),
    completed: true,
  },
  {
    taskName: "Completed one topic of React course",
    taskId: nanoid(8),
    completed: false,
  },
  {
    taskName: "Make a beautiful parents.",
    taskId: nanoid(8),
    completed: true,
  },
  {
    taskName: "Become an awesome dad.",
    taskId: nanoid(8),
    completed: true,
  },
  {
    taskName: "Prepare for next switch",
    taskId: nanoid(8),
    completed: true,
  },
  {
    taskName: "Soon I'll be getting onsite opportunity",
    taskId: nanoid(8),
    completed: true,
  },
];
