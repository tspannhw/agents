'use strict';

export default class SpiesController {

  constructor($scope, $filter) {
    this._$scope = $scope;
    this._$filter = $filter;
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

    this.agents = [{
      name: 'Jilted Seahorse',
      lat: 34.014908,
      lng: -118.158966,
      age: 48,
      gender: 'Male'
    }, {
      name: 'Multitudinous Orphanage',
      lat: 46.028446,
      lng: -99.37192,
      age: 96,
      gender: 'Female'
    }];

    angular.extend($scope, {
      center: this.center,
      defaults: this.defaults,
      markers: this.agents
    });
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
SpiesController.$inject = ['$scope', '$filter'];
