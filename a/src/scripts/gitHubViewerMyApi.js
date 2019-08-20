let contactBook = angular.module('GHViewer');

function randomInteger(min,max){
    return Math.floor(min + Math.random()*(max+1-min));
};

function MyListController($scope,$http,$compile) {
    $scope.persons;
    $scope.userInformation;

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