let GHViewer = angular.module('GHViewer',['ngRoute','gitHubFetchDataOverHttp']);

GHViewer.config(function($routeProvider){
    $routeProvider.when('/mainpage',{
        templateUrl: 'src/views/userList.html',
        controller: 'MyListController'
    })
    .otherwise({'redirectTo':'/mainpage'})

});
























/*function generateNumber(){
    let prefixRange = [300,400];
    let keyRange = [0,100];
    let indexRange = [0,100];
    return `${randomInteger(...prefixRange)}-${randomInteger(...keyRange)}-${randomInteger(...indexRange)}`;
};*/


// function showDetails(){
    //     $http({
        //         method: 'GET',
        //         url: 'https://raw.githubusercontent.com/sakuranasty/detailstemplates/master/'+($index+1)+'.png'
        //     }).then(function(response){
            //         $scope.detailMarkup = response.data
            //     },function(){
                //         $scope.detailMarkup = 'FAILED TO LOAD DETAILS';
                //     });
                // };
                
// var Response;







    // angular.module('ContactBook').directive('myHtml', ['$compile', function ($compile) {
    //     return {
    //         restrict: 'A',
    //         replace: false,
    //         terminal: true,
    //         priority: 10000,
    //         link: function (scope, element, attrs) {
    //             var template = attrs['myHtml'];
    //             element[0].innerHTML = scope.response;
    //             $compile(element.contents())(scope);
                
    //         }
    //     };
    //  }]);

