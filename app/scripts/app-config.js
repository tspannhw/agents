'use strict';

import SpiesController from './SpiesController';

routing.$inject = ['$urlRouterProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/spies');

  $stateProvider.state('spies', {
    url: '/spies',
    views: {
      'content': {
        templateUrl: 'templates/spies.html',
        controller: SpiesController,
        controllerAs: 'vm'
      }
    }
  });
}
