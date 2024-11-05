import {TaskModel} from "../task/task.model";

export const DUMMY_TASKS: TaskModel[] = [
  {
    id: '69f70d84-09b5-4708-bd12-c6dc5b999b45',
    title: 'Angular Task',
    points: 10,
    status: 'todo',
    dueDate: '2021-12-12',
    tags: ['VUE', 'REACT']
  },
  {
    id: '69f70d84-09b5-4708-bd12-c6dc5b999b46',
    title: 'React Task',
    points: 10,
    status: 'todo',
    dueDate: '2021-12-12',
    tags: ['ANDROID', 'IOS']
  },
  {
    id: '69f70d84-09b5-4708-bd12-c6dc5b999b47',
    title: 'Vue Task',
    points: 10,
    status: 'in-progress',
    dueDate: '2021-12-12',
    tags: ['ANGULAR', 'VUE']
  },
  {
    id: '69f70d84-09b5-4708-bd12-c6dc5b999b48',
    title: 'Svelte Task',
    points: 10,
    status: 'completed',
    dueDate: '2021-12-12',
    tags: ['REACT', 'ANGULAR']
  },
  {
    id: '69f70d84-09b5-4708-bd12-c6dc5b999b49',
    title: 'Node Task',
    points: 10,
    status: 'completed',
    dueDate: '2021-12-12',
    tags: ['ANDROID', 'VUE']
  }
];
