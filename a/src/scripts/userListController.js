(function () {
    let GHViewer = angular.module('GHViewer');

    GHViewer.controller('MyListController', ['$scope', 'gitHubFetchDataOverHttp', function ($scope, gitHubFetchDataOverHttp) {

        $scope.ghUsers;
        $scope.userInformation;
        // $scope.scrollToAcive = scrollToAcive;

        var onUsersFetched = function (data) {
            $scope.ghUsers = data;
            setTimeout(scrollToAcive,0);
        };
        var onError = function () {
            $scope.ErrMsg = 'failed to load data';
        };

        gitHubFetchDataOverHttp.getUserList().then(onUsersFetched, onError);


        function scrollToAcive() {
            var activeLink = document.querySelector('.active');
            if(!activeLink) return;
            var elemoffs = activeLink.offsetTop;
            var container = document.querySelector('.phone-table');
            container.scrollTop = elemoffs - container.offsetTop;
        }

    }]);
}());