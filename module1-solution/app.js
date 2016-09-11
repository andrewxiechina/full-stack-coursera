(function() {
  angular.module('myApp', [])
  .controller('LunchCheckController', LunchCheckController)
  .$inject('$scope');


  function LunchCheckController ($scope) {
    $scope.message = "";
    $scope.count = function () {
      var s = $scope.name.trim();
      if (s == "") {
        $scope.status = "fail";
        return $scope.message = "Please enter data first."
      }
      $scope.status = "success";

      var arr = s.split(",");
      var result = 0;

      for (i of arr) {
        if (i != "") {
          result += 1;
        }
      }

      if (result > 3) {
        return $scope.message =  "Too much!";
      } else {
        return $scope.message =  "Enjoy!";
      }
    };
  }
})();
