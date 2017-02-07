(function() {
    'use strict';
    angular
        .module('app', [])
        .controller('Controller', Controller);
    Controller.$inject = ['Service'];
    /* @ngInject */
    function Controller(Service) {
        var vm = this;
        vm.request = request;
        vm.url = "https://frailejon-app.appspot.com/rest/service/api/v1";
        vm.JSONrequest = '{ \n' +
		                '"table": "resume_trace", \n' +
		                '"type": "resume", \n' +
		                '"limit": "5", \n' +
		                '"filter": [{ \n' +
		                    '"column": "idSourceDepot",\n' +
		                    '"operator": "=", \n' +
		                    '"value": 1 \n' +
		                '}]\n' +
		            '}';

        activate();

        ////////////////

        function activate() {
        }

        function request() {
            Service.request(vm.url, vm.JSONrequest)
                .then(function(data) {
                    console.log(data);
                });
        }
    }
})();
