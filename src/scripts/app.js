let GHViewer = angular.module('GHViewer', ['ui.router']);

GHViewer.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/user-list");

    $stateProvider
        .state('userlist', {
            url: '/user-list',
            templateUrl: 'src/views/userList.html',
            controller: 'MyListController',
            resolve: {
                userList: ['FetchDataOverHttp', function (FetchDataOverHttp) {
                    return FetchDataOverHttp.getUserList();
                }]
            }
        })
        .state('userlist.userdetail', {
            url: '/user-detail/{userlogin}',
            views: {
                'userdetails@userlist': {
                    templateUrl: 'src/views/userDetails.html',
                    controller: 'userDetailsController'
                }
            },
            resolve: {
                userDetails: ['$stateParams', 'FetchDataOverHttp', function ($stateParams, FetchDataOverHttp) {
                    var userlogin = $stateParams.userlogin;
                    return FetchDataOverHttp.getUserDetails(userlogin);
                }
                ]
            }
        })

}]);

