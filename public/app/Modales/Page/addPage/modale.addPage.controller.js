
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleAjoutPageController', modaleAjoutPageController);

    modaleAjoutPageController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePage','$route','ServiceChoice','ServiceChapter'];

    function modaleAjoutPageController($scope, $location ,$http, $rootScope, ngDialog,ServicePage,$route,ServiceChoice,ServiceChapter) {


            $scope.initModalAdd = function(){
                $scope.newPage = {}
            };

            $scope.add = function(newPage){
                if(newPage){
                    newPage.choices = [];
                    if($scope.choice1 && $scope.choice2) {
                        newPage.choices.push($scope.choice1);
                        newPage.choices.push($scope.choice2);
                        ServicePage.createPage(newPage);
                        ngDialog.close();
                        $rootScope.reload = true;
                    }else{
                        alert("Vous n'avez pas sélectionné les deux choix possibles de la page à créer")
                    }
                }
            };



        ServiceChoice.getChoices().success(function (choices) {
            $scope.allChoices = choices;
        });

        ServiceChapter.getChapters().success(function (chapters) {
            $scope.allChapters = chapters;
        });

    }
})();