import {TaskModel} from "../task/task.model";

export const DUMMY_TASKS: TaskModel[] = [
  {
    title: 'Master Angular',
    points: 10,
    dueDate: '2025-12-31',
    tags: ['ANGULAR'],
    status: 'in-progress'
  },
  {
    title: 'Build first prototype',
    points: 20,
    dueDate: '2024-05-31',
    tags: ['IOS'],
    status: 'working'
  },
  {
    title: 'Prepare issue template',
    points: 30,
    dueDate: '2024-06-15',
    tags: ['REACT'],
    status: 'completed'
  },
  {
    title: 'Prepare issue template',
    points: 30,
    dueDate: '2024-06-15',
    tags: ['REACT'],
    status: 'completed'
  }
];
