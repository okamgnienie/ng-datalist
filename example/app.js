angular.module('myApp', ['ng-datalist'])
  .controller('myController', myController);


function myController ($scope) {
  // Some list binded to the view:
  $scope.myAwesomeList = ['Banana', 'Bicycle', 'Random stuff', 'Book', 'Music', 'GIT'];

  // Storing current element:
  $scope.myElement = '';

  $scope.fieldRequired = true;

  $scope.submitMyForm = function (event) {
    event.preventDefault();
    alert("Form submited with value: " + $scope.myElement);
  }
}

