(function(){
    let GHViewer = angular.module('GHViewer');
    
    GHViewer.component('userDetailsComponent',{
        templateUrl: 'src/views/userDetails.html',
        controller: 'userDetailsController'
    });
}());