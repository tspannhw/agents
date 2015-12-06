'use strict';

import routing from './app-config';
import AgentsService from './AgentsService';

// need this to inject templates into cache
angular.module('templates', []);

angular.module('cc', ['ui.router', 'templates', 'ui-leaflet']).config(routing);

angular.module('cc').service('AgentsService', AgentsService);
