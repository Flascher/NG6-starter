import angular from 'angular';

import TodoList from './todo-list/todo-list';
import TodoListItem from './todo-list/todo-list-item/todo-list-item';
import TodoInput from './todo-list/todo-input/todo-input';
import Icon from './icon/icon';

export default angular.module('app.common', [
  TodoList,
  TodoListItem,
  TodoInput,
  Icon
]).name;
