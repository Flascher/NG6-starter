import Item from './todo-list-item/todo-list-item.data';

export default class TodoListController {
  static $inject = ['todoListService']
  constructor(todoListService) {
    this.todoListService = todoListService;
    this.tasks = [];
  }
  $onInit() {
    this.tasks = this.todoListService.getTasks();
  }
};
