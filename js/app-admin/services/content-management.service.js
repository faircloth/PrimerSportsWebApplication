let ContentMgmtService = function($state, $http, PARSE) {
  
  console.log('Content management service');

  // SERVER INFO
  let url = PARSE.URL + 'classes/';

  // SERVICE PROPERTIES & FUNCTIONS
  this.addArticle = addArticle;
  this.getTags    = getTags;
  this.addTag     = addTag;

  // FUNCTIONS
  function addArticle (article) {
    console.log('article in service', article);
    return $http.post(url + 'article', article, PARSE.CONFIG);
  }

  function getTags () {
    console.log('Get tags function called');
    return $http({
      method: 'GET',
      url: url + 'tag',
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  }

  function addTag (tag) {
    console.log('Add tag function called');
    return $http.post(url + 'tag', tag, PARSE.CONFIG);
  }
  
  

};

ContentMgmtService.$inject = ['$state', '$http', 'PARSE'];

export default ContentMgmtService;