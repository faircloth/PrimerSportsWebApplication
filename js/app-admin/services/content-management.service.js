let ContentMgmtService = function($state, $http, PARSE) {
  
  console.log('Content management service');

  // SERVER INFO
  let url = PARSE.URL + 'classes/';

  let myAPI = 'https://pure-everglades-58557.herokuapp.com/api/articles';
  let mc = 'ca8cea917c998a43832a7ab96cf8ea87-us9';

  let mcA = 'https://us9.api.mailchimp.com/';
  let cid = '696cff045f';

  // SERVICE PROPERTIES & FUNCTIONS
  this.addArticle  = addArticle;
  this.getTags     = getTags;
  this.addTag      = addTag;
  this.getArticles = getArticles;
  this.getCampaign = getCampaign;

  // FUNCTIONS
  function getCampaign () {
    console.log('called in service');
    console.log('MC URL', mcA);
    console.log('Campaign id', cid);
    return $http({
      method: 'GET',
      url: mcA + 'campaigns/' + cid + '/content',
      user: 'brent.macon@gmail.com:<' + mc + '>'
    });
  }

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
  
  function getArticles () {
    console.log('get request made to api');
    return $http({
      method: 'GET',
      url: myAPI,
      headers: "Access-Control-Allow-Origin: http://localhost:8000"
    });
  }
  

};

ContentMgmtService.$inject = ['$state', '$http', 'PARSE'];

export default ContentMgmtService;