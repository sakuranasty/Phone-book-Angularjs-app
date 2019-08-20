(function () {

    var gitHubFetchDataOverHttp = function ($http) {
        
        getUserList = function () {
            //returns a promice
            $http.get('https://api.github.com/users').then(function (resp) {
                return resp.data;
            })
        };

        getUserDetails = function (userLogin) {
            $http.get('https://api.github.com/users' + userLogin).then(function (resp) {
                return resp.data;
            });
        };

        //function to get repositories

         return {
            getUserList,
            getUserDetails
         }

        //just functionality to make http request. functionality to work with the result of the request should be provided in the instance where this service is called

        var registerModule = angular.module('GHViewer').factory('gitHubFetchDataOverHttp', gitHubFetchDataOverHttp);
    }
}());