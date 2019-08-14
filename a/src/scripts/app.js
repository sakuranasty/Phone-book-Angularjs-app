let contactBook = angular.module('ContactBook',[]);

function randomInteger(min,max){
    return Math.floor(min + Math.random()*(max+1-min));
};

function MyListController($scope,$http,$compile) {
    $scope.persons;

    $http.get('https://api.github.com/users').then(function(resp){
        $scope.persons = resp.data;
    },
    function(){
        document.querySelector(".phone-table").innerHTML = 'failed to load users list';
    })
        
    $scope.somevar = 'some blah blah';
    
    $scope.showDetails = function(person){
        var login = person.login;
        $scope.detailsUrl='https://api.github.com/users/'+(login);
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/'+(login)
        }).then(function(response){
            $scope.userInformation = response.data;
        },
        function(){
            document.querySelector('.warning').innerHTML = 'FAILED TO LOAD DETAILS';
        });
    };
    
    
};

contactBook.controller('MyListController', ['$scope','$http','$compile', MyListController]);






















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

