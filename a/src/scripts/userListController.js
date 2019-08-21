(function(){
    let GHViewer = angular.module('GHViewer');
    
    GHViewer.controller('MyListController', ['$scope','gitHubFetchDataOverHttp', function($scope, gitHubFetchDataOverHttp){

        $scope.ghUsers;
        $scope.userInformation;
        
        var onUsersFetched = function(data){
            $scope.ghUsers = data;
        };
        var onError = function(){
            $scope.ErrMsg = 'failed to load data';
        };

        gitHubFetchDataOverHttp.getUserList().then(onUsersFetched,onError);
        
    
}]);
}());