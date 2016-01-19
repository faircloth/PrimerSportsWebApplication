let CreateArticleController = function($scope, ContentMgmtService) {
  
  console.clear();
  console.log('Create Article Controller');

  // VIEW MODEL
  let vm = this;


  // FUNCTIONS TO DEFINE
  vm.getTags       = getTags;
  vm.createArticle = createArticle;


  // ACTIVE ON LOAD
  getTags();

  // FUNCTIONS

  function Article (article) {
    this.tagName      = article.tagName;
    this.feature      = article.feature;
    this.title        = article.title;
    this.content      = article.content;
    this.imgUrl       = article.imgUrl;
  }


  function getTags () {
    ContentMgmtService.getTags().then( (response) => {
      console.log(response);
      vm.currentTags = response.data.results;
    }); 
  }

   function createArticle (article) {
    let newArticle = new Article (article);
    console.log(newArticle);
    ContentMgmtService.addArticle(newArticle).then( (response)=> {
      console.log(response);
    });
  }




};

CreateArticleController.$inject = ['$scope', 'ContentMgmtService'];

export default CreateArticleController; 