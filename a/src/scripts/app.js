let contactBook = angular.module('ContactBook',[]);

function randomInteger(min,max){
    return Math.floor(min + Math.random()*(max+1-min));
};

function generateNumber(){
    let prefixRange = [300,400];
    let keyRange = [0,100];
    let indexRange = [0,100];
    return `${randomInteger(...prefixRange)}-${randomInteger(...keyRange)}-${randomInteger(...indexRange)}`;
};
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
function MyListController($scope,$http,$compile) {
    var persons = [
        {'name': 'Julie', 'number': generateNumber()},
        {'name': 'Peter', 'number': generateNumber()},
        {'name': 'Stephen', 'number': generateNumber()},
        {'name': 'Hpsuh', 'number': generateNumber()},
        {'name': 'Daniele', 'number': generateNumber()},
        {'name': 'Elizabeth', 'number': generateNumber()},
        {'name': 'Cristine', 'number': generateNumber()}
    ];
    $scope.persons = persons;

    $scope.somevar = 'some blah blah';

    $scope.showDetails = function(person){
        var index = persons.indexOf(person);
        $scope.detailsUrl='https://raw.githubusercontent.com/sakuranasty/detailstemplates/master/'+(index+1)+'.html';
        $http({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/sakuranasty/detailstemplates/master/'+(index+1)+'.html'
        }).then(function(response){
            var div = angular.element(document.querySelector(".phone-details"));
            div.html(response.data);
            $compile(div)($scope); // посмотреть директиву для вставки html
            // $scope.response = response.data;
            // Response=$scope.response ;
        },
        function(){
            document.querySelector('.phone-details').innerHTML = 'FAILED TO LOAD DETAILS';
        });
    };
    

};

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
contactBook.controller('MyListController', ['$scope','$http','$compile', MyListController]);

