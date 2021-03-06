(function(angular){
    var app = angular.module('ForumApp');
    
      app.run(["$rootScope", "$location","$state", function($rootScope, $location,$state) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === "AUTH_REQUIRED") {
        $state.go("home");
      }
    });
  }]);
  
})(angular);