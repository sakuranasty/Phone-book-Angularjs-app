(function(){
    let GHViewer = angular.module('GHViewer');
    
    GHViewer.controller('userDetailsController', ['$scope','gitHubFetchDataOverHttp', '$stateParams', function($scope, gitHubFetchDataOverHttp, $stateParams){

        $scope.login;
        $scope.userInformation;
        scrollToAcive();
        
        var onUsersFetched = function(data){
            $scope.userInformation = data;
        };
        var onError = function(){
            $scope.ErrMsg = 'failed to load data';
        };

        $scope.login = $stateParams.userlogin;
        gitHubFetchDataOverHttp.getUserDetails($scope.login).then(onUsersFetched,onError);

        function scrollToAcive() {
            var elemoffs = document.querySelector('.active').offsetTop;
            var container = document.querySelector('.phone-table');
            container.scrollTop = elemoffs - container.offsetTop;
        }
    
}]);
}());