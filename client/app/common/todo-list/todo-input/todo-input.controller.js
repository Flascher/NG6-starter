export default class TodoInputController {
  static $inject = ['todoListService'];
  constructor(todoListService) {
    this.todoListService = todoListService;
  }
  $onInit() {
    this.task = '';
  }
  isSubmitActive() {
    return this.task.length > 0;
  }
  submitTask() {
    // actually submit the task if there's text there
    if (this.isSubmitActive()) {
      this.todoListService.createNewTask(this.task);
      this.task = '';
    }
  }
}
