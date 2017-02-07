(function() {
    'use strict';
    angular
        .module('app')
        .service('Service', Service);
    Service.$inject = ['$http'];
    /* @ngInject */
    function Service($http) {
        this.request = request;
        ////////////////
        function request(url, request) {
            console.log(request);
            return $http.post(url, JSON.parse(request), {
                headers: {
                    'x-authtoken':  'aaa'
                }
            });
        }
    }
})();
