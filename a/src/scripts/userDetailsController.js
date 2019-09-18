(function(){
    let GHViewer = angular.module('GHViewer');
    
    GHViewer.controller('userDetailsController', ['$scope','userDetails', function($scope, userDetails){
        $scope.userInformation;
        $scope.userInformation = userDetails;

        function scrollToAcive() {
            var activeLink = document.querySelector('.active');
            if(!activeLink) return;
            var elemoffs = activeLink.offsetTop;
            var container = document.querySelector('.phone-table');
            container.scrollTop = elemoffs - container.offsetTop;
        }
        // scrollToAcive();
        
    }]);
}());



























// scrollToAcive();

// var onUsersFetched = function(data){
//     $scope.userInformation = data;
// };
// var onError = function(){
//     $scope.ErrMsg = 'failed to load data';
// };

// $scope.login = $stateParams.userlogin;
// gitHubFetchDataOverHttp.getUserDetails($scope.login).then(onUsersFetched,onError);













            // function scrollToAcive() {
            //     var elemoffs = document.querySelector('.active').offsetTop;
            //     var container = document.querySelector('.phone-table');
            //     container.scrollTop = elemoffs - container.offsetTop;
            // }