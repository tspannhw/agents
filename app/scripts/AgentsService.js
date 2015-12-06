'use strict';

export default class AgentsService {
  constructor($http) {
    this._$http = $http;
  }

  getAgents() {
    return this._$http.get('agents');
  }
}
AgentsService.$inject = ['$http'];
