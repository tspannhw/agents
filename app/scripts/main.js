'use strict';

import routing from './app-config';

// need this to inject templates into cache
angular.module('templates', []);

angular.module('cc', [ 'ui.router', 'templates', 'ui-leaflet']).config(routing);
