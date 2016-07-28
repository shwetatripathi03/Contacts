var contactApp = angular.module('contactApp', []);
contactApp.controller('contactController', function($scope) {
  $scope.search = "";
  $scope.order = "name";
  $scope.selectedPerson = null;

  $scope.selectContact = function(person) {
    $scope.selectedPerson = person;
  };

  $scope.sensitiveSearch = function(contact) {
    if($scope.search) {
      return contact.name.indexOf($scope.search) == 0 || contact.email.indexOf($scope.search) == 0;
    }
    return true;
  };

  $scope.contacts = [{
    "name" : "Tom",
    "City" : "Syracuse",
    "Phone": "203-918-2467",
    "email" : "abc@gmail.com"
  },
  {
    "name" : "Denny",
    "City" : "Atlanta",
    "Phone": "203-524-756",
    "email": "xyz@gmail.com"
  },
    {
    "name" : "Ryan",
    "City" : "Dellas",
    "Phone": "742-457-687",
    "email" : "pqr@gmail.com"
  }

  ];


   $scope.Add = function () {
            
            // Add to main records
            $scope.contacts.push({
                'name': $scope.newName,
                'City': $scope.newCity,
                'Phone': $scope.newPhone,
                'email': $scope.newEmail
            });

            $scope.newName = "";
            $scope.newCity = "";
            $scope.newPhone = "";
            $scope.newEmail = "";
            $scope.search = "";
          };
});