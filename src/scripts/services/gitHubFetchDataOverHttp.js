(function () {
    var GHViewerModule = angular.module('GHViewer');

    GHViewerModule.provider('FetchDataOverHttp', function FetchDataOverHttpProvider() {
        this.$get = ['$http', function ($http) {
            var gitHubFetchData = {};
            gitHubFetchData.getUserList = function () {
                return $http.get('https://api.github.com/users')
                    .then(function (resp) {
                        return resp.data;
                    });
            }

            gitHubFetchData.getUserDetails = function (userLogin) {
                return $http.get('https://api.github.com/users/' + userLogin)
                    .then(function (resp) {
                        return resp.data;
                    });
            }
            return gitHubFetchData;
        }];
    })
}());