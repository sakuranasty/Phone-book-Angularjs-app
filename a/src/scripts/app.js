let GHViewer = angular.module('GHViewer',['ui.router']);

GHViewer.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/user-list");

    $stateProvider
    .state('userlist',{
        url: '/user-list',
        templateUrl: 'src/views/userList.html',
        controller: 'MyListController'
        
    })
    .state('userlist.userdetail', {
        url: '/user-detail/{userlogin}',
        views: { 'userdetails@userlist': {
            component: 'userDetailsComponent'
        }

    }})

}]);

