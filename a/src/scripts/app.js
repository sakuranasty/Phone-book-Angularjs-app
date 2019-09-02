let GHViewer = angular.module('GHViewer',['ui.router']);

GHViewer.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/mainpage");

    $stateProvider
    .state('mainpage',{
        url: '/mainpage',
        component: 'userListComponent'
    })
    .state('userdetail', {
        url: '/user-detail/{userlogin}',
        component: 'userListComponent'
    })

}]);

