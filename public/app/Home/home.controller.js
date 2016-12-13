
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory'];

    function HomeController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory) {

        $scope.message= " Bienvenue sur l'application Storym, dont la finalité est de créer " +
            "des histoires intéractives à la manière des ' livre dont vous êtes " +
            "le héro ' accèssibles depuis une application mobile actuellement en développement (Ionic 2). "
    }

})();


