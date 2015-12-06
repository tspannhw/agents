'use strict';

export default class SpiesController {

  constructor($scope, $http, AgentsService, leafletData) {
    this._$scope = $scope;
    this._$http = $http;
    this._leafletData = leafletData;
    this.ageFilter = 0;
    this.searchFilter = '';

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
      scrollWheelZoom: true
    };

    angular.extend($scope, {
      center: this.center,
      defaults: this.defaults,
      markers: this.agents
    });
  }

  filterAgents() {
    let filteredAgents = this.agents;

    // filter down
    filteredAgents = this.filterAgentByAge(filteredAgents);
    filteredAgents = this.filterAgentByGender(filteredAgents);
    filteredAgents = this.searchAgents(filteredAgents);

    // update leaflet
    this._$scope.markers = filteredAgents;
  }

  searchAgents(filteredAgents) {
    let self = this,
      highlightedAgents = [];

    filteredAgents = filteredAgents.filter(agent =>
      agent.name.toUpperCase().includes(self.searchFilter.toUpperCase()));


    // highlight newly filtered
    // highlightedAgents.forEach(agent => {
    //   self._leafletData.getMap('agentMap').then(function(map) {
    //     L.circle([agent.lat, agent.lng], 500, {
    //       color: 'red',
    //       fillColor: '#f03',
    //       fillOpacity: 0.25
    //     }).addTo(map);
    //   });
    // });
    return filteredAgents;
  }

  filterAgentByAge(filteredAgents) {
    let self = this;

    if (this.ageFilter !== 0) {
      filteredAgents = filteredAgents.filter(function(agent) {
        return agent.age <= self.ageFilter;
      });
    }

    return filteredAgents;
  }

  filterAgentByGender(filteredAgents) {
    let self = this;
    if (this.genderFilter.name !== 'None') {
      filteredAgents = filteredAgents.filter(function(agent) {
        return agent.gender === self.genderFilter.name;
      });
    }

    return filteredAgents;
  }
}
SpiesController.$inject = ['$scope', '$http', 'AgentsService', 'leafletData'];
