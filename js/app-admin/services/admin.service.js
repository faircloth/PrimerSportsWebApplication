let AdminService = function($http, HEROKU, $cookies, $state) {
  
  // SERVER INFORMATION

  // let url = HEROKU.URL;


  // FUNCTIONS TO DEFINE
  this.signin     = signin;
  // this.signup     = signup;
  // this.storeAuth  = storeAuth;
  // this.setHeaders = setHeaders;
  // this.checkAuth  = checkAuth;
  // this.logout     = logout;

  // FUNCTIONS

  function signin () {
    console.log('Admin service sign in function');
  }


  // function Admin (adminObj) {
  //   this.firstName = adminObj.firstName;
  //   this.lastName  = adminObj.lastName;
  //   this.email     = adminObj.email;
  //   this.username  = adminObj.username;
  //   this.password  = adminObj.password;
  // }


};

AdminService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default AdminService;    