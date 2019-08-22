let GHViewer = angular.module('GHViewer',['ngRoute']);

GHViewer.config(function($routeProvider){
    $routeProvider.when('/mainpage',{
        templateUrl: 'src/views/userList.html',
        controller: 'MyListController'
    })
    .when('/user-detail/:userlogin', {
        templateUrl: 'src/views/userDetails.html',
        controller: 'userDetailsController'
    })
    .otherwise({'redirectTo':'/mainpage'})

});

