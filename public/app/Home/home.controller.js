
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory'];

    function HomeController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory) {

        $scope.message= " Bienvenue sur ce super site !! "

    }

})();


