import todoListComponent from './todo-list.component';
import todoListService from './todo-list.service';

export default angular.module('todoList', [
  'todoListService'
])
.component('todoList', todoListComponent).name;
