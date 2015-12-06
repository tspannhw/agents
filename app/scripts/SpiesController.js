'use strict';

export default class SpiesController {

  constructor($scope, $http, AgentsService) {
    this._$scope = $scope;
    this._$http = $http;
    this.ageFilter = -1;

    AgentsService.getAgents()
      .then(result => {
        this.agents = result.data;
        this._$scope.markers = this.agents;
      });

    this.genderFilter = {
      id: 0,
      name: 'None'
    };

    this.genderOptions = [{
      id: 0,
      name: 'None'
    }, {
      id: 1,
      name: 'Male'
    }, {
      id: 2,
      name: 'Female'
    }];

    this.center = {
      lat: 0,
      lng: 0,
      zoom: 1
    };

    this.defaults = {
      scrollWheelZoom: false
    };

    angular.extend($scope, {
      center: this.center,
      defaults: this.defaults,
      markers: this.agents
    });
  }

  filterAgentByAge() {
    let self = this, filteredAgents = {};

    if (this.ageFilter === -1) {
      filteredAgents = this.agents;
    } else {
      filteredAgents = this.agents.filter(function(agent) {
        return agent.age > self.ageFilter;
      });
    }

    // update leaflet
    this._$scope.markers = filteredAgents;
  }

  filterAgentByGender() {
    let self = this, filteredAgents = {};
    if (this.genderFilter.name === 'None') {
      filteredAgents = this.agents;
    } else {
      filteredAgents = this.agents.filter(function(agent) {
        return agent.gender === self.genderFilter.name;
      });
    }

    // update leaflet
    this._$scope.markers = filteredAgents;
  }
}
SpiesController.$inject = ['$scope', '$http', 'AgentsService'];
