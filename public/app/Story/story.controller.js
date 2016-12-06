
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceSession'];

    function StoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceSession) {

        $scope.storys =  [];

        ServiceStory.getStorys().success(function (allStorys) {

                for  (var indiceStory in allStorys){

                    var story = allStorys[indiceStory];
                    console.log(story);

                //  // // Je verifie que la ligne de resultat est bien un lien en string et non pas un true ou un $promise{..}
                //  if(typeof lienStory == 'object'){
                //      console.log(lienStory)
                //
                //     //  ServiceStory.getStory(lienStory).$promise.then(function (story) {
                //     //     var SessionsLewList = [];
                //     //     for(var indiceSession in story.sessions_suivies){
                //     //         var lienSession = story.sessions_suivies[indiceSession];
                //     //
                //     //         ServiceSession.getSession(lienSession).$promise.then(function (session) {
                //     //             SessionsLewList.push(session);
                //     //         });
                //     //
                //     //     }
                //     //     story.sessions_suivies = SessionsLewList;
                //     //     $scope.storys.push(story);
                //     // });
                //  }

                    $scope.storys.push(story);
            }
        }

         );

        $scope.openUpdateModale = function (index) {
           $rootScope.dialog = ngDialog.open({ template: 'templateUpdate' });
           $rootScope.indexGlobal = index;
        };

        $scope.openAddModale = function () {
           $rootScope.dialog = ngDialog.open({ template: 'templateAdd' });
        };



    }
})();

