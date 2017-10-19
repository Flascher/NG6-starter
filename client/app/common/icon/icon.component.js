import controller from './icon.controller';

export default {
    bindings: {
        name: '<'
    },
    controller,
    template: `<div class="icon" ng-bind-html="$ctrl.iconSvg"></div>`
};
