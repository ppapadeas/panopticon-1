var panopticon = angular.module('panopticon', [
    'ngRoute'
]);

panopticon.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/join', {
                templateUrl: 'partials/join.html'
            }).
            when('/support', {
                templateUrl: 'partials/support.html'
            }).
            when('/faq', {
                templateUrl: 'partials/faq.html'
            }).
            when('/projects', {
                templateUrl: 'partials/projects.html'
            }).
            when('/services', {
                templateUrl: 'partials/services.html'
            }).
            when('/location', {
                templateUrl: 'partials/location.html',
                redirectTo: get_to_top
            }).
            when('/people', {
                templateUrl: 'partials/people.html',
                redirectTo: get_to_top
            }).
            when('/supporters', {
                templateUrl: 'partials/supporters.html',
                redirectTo: get_to_top
            }).
            otherwise({
                templateUrl: 'partials/vision.html'
            });
    }
]);
