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
                'userdetails@userlist' : {
                    component: 'userDetailsComponent'
                }
            },
            resolve: {
                userDetails: ['$stateParams', 'FetchDataOverHttp', function ($stateParams, FetchDataOverHttp) {
                    var userlogin = $stateParams.userlogin;


                    console.log(userlogin);
                    console.log(FetchDataOverHttp.getUserDetails(userlogin));


                    return FetchDataOverHttp.getUserDetails(userlogin);
                }
                ]
            }
        })

}]);

