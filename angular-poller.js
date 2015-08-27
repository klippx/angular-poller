/*
 * @license
 * angular-poller v0.0.0
 * (c) 2015 Mathias Klippinge http://klippx.github.io/
 * License: MIT
 */

angular.module('angular-poller', [])
  .service('pollingService', [
    '$timeout', function($timeout) {
      this.setTimeout = function(scope, fn, delay) {
        var deregister, promise;
        promise = $timeout(fn, delay);
        deregister = scope.$on('$destroy', function() {
          return $timeout.cancel(promise);
        });
        return promise.then(deregister);
      };
      return this;
    }
  ]);
