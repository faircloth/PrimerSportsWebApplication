let ManageTagsController = function($scope, ContentMgmtService, $state, $stateParams) {
  
  console.log('manage tags controller');

  // VIEW MODEL
  let vm = this;


  // FUNCTIONS TO DEFINE
  vm.addTag   = addTag;
  vm.getTags  = getTags;


  // ACTIVE ON LOAD
  getTags();

  // FUNCTIONS
  function addTag (tag) {
    ContentMgmtService.addTag(tag).then( (response) => {
      console.log(response);
    });
  }

  function getTags () {
    ContentMgmtService.getTags().then( (response) => {
      console.log(response);
      vm.currentTags = response.data.results;
    }); 
  }


};

ManageTagsController.$inject = ['$scope', 'ContentMgmtService', '$state', '$stateParams'];

export default ManageTagsController;  