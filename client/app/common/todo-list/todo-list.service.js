import Item from './todo-list-item/todo-list-item.data';

class TodoListService {
  constructor() {
    this.tasks = [
      new Item('Learn to use ES6 with Angular 1.x'),
      new Item('Learn to use Angular1.x', true)
    ];
  }
  getTasks() {
    console.log(this.tasks);
    return this.tasks;
  }
  getTask(taskIndex) {
    return this.tasks[taskIndex];
  }
  createNewTask(taskText) {
    this.tasks.push(new Item(taskText));
    console.log(this.tasks);
  }
  toggleComplete(taskIndex) {
    this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    return this.tasks[taskIndex];
  }
}

export default angular.module('todoListService', [])
.service('todoListService', TodoListService).name;
