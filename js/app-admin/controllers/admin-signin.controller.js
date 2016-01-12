let AdminSigninController = function($scope, AdminService) {
  
  console.clear();
  AdminService.signin();

};

AdminSigninController.$inject = ['$scope', 'AdminService'];

export default AdminSigninController; 