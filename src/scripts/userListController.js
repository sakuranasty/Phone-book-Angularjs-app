(function () {
    let GHViewer = angular.module('GHViewer');

    GHViewer.controller('MyListController', ['$scope', 'userList', function ($scope, userList) {

        $scope.ghUsers;
        $scope.userInformation;
      
        $scope.ghUsers = userList;


        function scrollToAcive() {
            var activeLink = document.querySelector('.active');
            if(!activeLink) return;
            var elemoffs = activeLink.offsetTop;
            var container = document.querySelector('.phone-table');
            container.scrollTop = elemoffs - container.offsetTop;
        }

        setTimeout(scrollToAcive,0);


    }]);
}());