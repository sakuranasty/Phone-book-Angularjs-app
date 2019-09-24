(function(){
    let GHViewer = angular.module('GHViewer');
    
    GHViewer.component('userListComponent',{
        templateUrl: 'src/views/userList.html',
        controller: 'MyListController'
    });
}());