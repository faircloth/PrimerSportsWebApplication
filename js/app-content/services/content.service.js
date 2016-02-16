let ContentService = function($state, $http, PARSE) {
  
  console.log('content service here');

  this.getArticles = getArticles;

  let url = PARSE.URL + 'classes/';


  function getArticles () {
    return $http.get(url + 'article', PARSE.CONFIG)
  }

};

ContentService.$inject = ['$state', '$http', 'PARSE'];

export default ContentService;  