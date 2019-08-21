let GHViewer = angular.module('GHViewer',['ngRoute']);

GHViewer.config(function($routeProvider){
    $routeProvider.when('/mainpage',{
        templateUrl: 'src/views/userList.html',
        controller: 'MyListController'
    })
    .otherwise({'redirectTo':'/mainpage'})

});

