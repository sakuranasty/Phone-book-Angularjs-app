(function(){
    let GHViewer = angular.module('GHViewer');
    
    GHViewer.controller('userDetailsController', ['$scope','userDetails', function($scope, userDetails){
        console.log(1);
        console.log(userDetails);
        $scope.userInformation;
        $scope.userInformation = userDetails;
        
        
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