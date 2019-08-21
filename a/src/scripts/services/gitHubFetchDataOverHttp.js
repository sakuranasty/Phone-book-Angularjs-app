(function () {
    var GHViewerModule = angular.module('GHViewer');
    GHViewerModule.factory('gitHubFetchDataOverHttp',['$http', function ($http) {
        var getUserList = function () {
            //returns a promise
           return $http.get('https://api.github.com/users').then(function (resp) {
                return resp.data;
            })
        };

        var getUserDetails = function (userLogin) {
            $http.get('https://api.github.com/users' + userLogin).then(function (resp) {
                return resp.data;
            });
        };

        //function to get repositories
        return {
            getUserList: getUserList ,
            getUserDetail: getUserDetails
        }

    }])
}());