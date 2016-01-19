let LandingPageAController = function($scope, $anchorScroll, $location, $state, $rootScope) {
  
  console.log('Landing page a controller');

  let vm = this;


  // FUNCTIONS TO DEFINE
  vm.goToPage = goToPage;
  vm.goToDemo = goToDemo;


  // FUNCTIONS
  function goToPage (root) {
    $state.go(root);
  }

  function goToDemo(id) {
    $location.hash(id);
    $anchorScroll();
  }


};

LandingPageAController.$inject = ['$scope', '$anchorScroll', '$location', '$state', '$rootScope'];

export default LandingPageAController;  