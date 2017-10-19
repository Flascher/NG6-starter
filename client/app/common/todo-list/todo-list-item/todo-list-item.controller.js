export default class TodoListItemController {
  static $inject = ['todoListService'];
  constructor(todoListService) {
    this.todoListService = todoListService;

    this.taskData = {};

    this.compmleted = false;
    this.iconName = '';
    this.task = '';
  }
  $onInit() {
    this.taskData = this.todoListService.getTask(this.index);

    this.completed = this.taskData.completed;
    this.task = this.taskData.task;
    this.iconName = this.taskData.completed ? 'check-circle' : 'x-circle';
  }
  toggleTaskStatus() {
    this.taskData = this.todoListService.toggleComplete(this.index);

    this.completed = this.taskData.completed;
    this.iconName = this.taskData.completed ? 'check-circle' : 'x-circle';
  }
}
