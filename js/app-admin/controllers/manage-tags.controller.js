let ManageTagsController = function($scope, ContentMgmtService, $state, $stateParams) {
  
  console.log('manage tags controller');

  // VIEW MODEL
  let vm = this;

  // FUNCTIONS TO DEFINE
  vm.addTag      = addTag;
  vm.getTags     = getTags;
  vm.getArticles = getArticles;
  vm.getCampaign = getCampaign;


  // ACTIVE ON LOAD
  getTags();

  // FUNCTIONS
  function getCampaign () {
    console.log('get campaign called in controller');
    ContentMgmtService.getCampaign().then( (response) => {
      console.log(response);
    });
  }

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

  function getArticles () {
    console.log('get articles called');
    ContentMgmtService.getArticles().then( (response) => {
      console.log(response);
    });
  }


};

ManageTagsController.$inject = ['$scope', 'ContentMgmtService', '$state', '$stateParams'];

export default ManageTagsController;  