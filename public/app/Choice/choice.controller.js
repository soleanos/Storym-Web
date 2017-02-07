(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('ChoiceController', ChoiceController);

    ChoiceController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChoice','_','$route'];

    function ChoiceController($scope, $location ,$http, $rootScope, ngDialog,ServiceChoice,_,$route) {

        $rootScope.reload = false;
        updateAllChoice();

        $rootScope.$watch('reload', function(newValue, oldValue) {
            if(newValue == true){
                setTimeout(function(){
                    updateAllChoice();
                    $rootScope.reload = false;
                    $route.reload();
                }, 100);
            }
        });

        function updateAllChoice(){
            ServiceChoice.getChoices().then(function (allChoices) {
                $scope.choices = allChoices.data;
            })
        }

        $scope.openUpdateModale = function (choiceSelected) {
            $rootScope.dialog = ngDialog.open({ template: 'templateUpdateChoice' });
            $rootScope.selectedChoice = choiceSelected;
        };

        $scope.openAddModale = function () {
            $rootScope.dialog = ngDialog.open({ template: 'templateAddChoice' });
        };

        $scope.DeleteChoice = function (story) {
            ServiceChoice.removeChoice(story);
            $rootScope.reload = true;
        }
    }
})();
