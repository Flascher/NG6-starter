import template from './todo-list-item.html';
import controller from './todo-list-item.controller.js';
import './todo-list-item.scss';

export default {
    bindings: {
      index: '='
    },
    template,
    controller
};
