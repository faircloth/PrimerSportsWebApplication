let AdminHomeController = function($scope, ContentMgmtService, $state) {
  
  console.log('admin home controller');

  // VIEW MODEL
  let vm = this;


  // FUNCTIONS TO DEFINE
  vm.getTags        = getTags;
  vm.goToTagManager = goToTagManager;


  // ACTIVE ON LOAD
  getTags();

  // FUNCTIONS
  function getTags () {
    ContentMgmtService.getTags().then( (response) => {
      console.log(response);
      vm.currentTags = response.data.results;
    }); 
  }

  function goToTagManager () {
    $state.go('root.admin-manage-tags');
  }

};

AdminHomeController.$inject = ['$scope', 'ContentMgmtService', '$state'];

export default AdminHomeController;