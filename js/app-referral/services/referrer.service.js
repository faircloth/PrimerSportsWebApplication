let ReferrerService = function($state, $http, PARSE) {
  
  console.log('referrer service');

  // SERVER INFO
  let url = PARSE.URL + 'classes/';

  // SERVICE PROPERTIES & FUNCTIONS
  this.shareVisit   = shareVisit;
  this.addReferrer  = addReferrer;
  this.enterContest = enterContest;
  this.getShareMsgs = getShareMsgs;

  // FUNCTIONS
  function shareVisit (pageInfo) {
    console.log('page info:', pageInfo);
    return $http.post(url + 'sharevisit', pageInfo, PARSE.CONFIG);
  }

  function addReferrer () {
    console.log('addReferrer called');
    // pass in 'referrer'
    // return $http.post(url + 'article', article, PARSE.CONFIG);
  }

  function enterContest (entry) {
    console.log(entry);
    return $http.post(url + 'newSignUp', entry, PARSE.CONFIG);
  }

  function getShareMsgs () {
    console.log('get share msgs called');
    return $http.get(url + 'shareMessage', PARSE.CONFIG);
  }

  getShareMsgs();

};

ReferrerService.$inject = ['$state', '$http', 'PARSE'];

export default ReferrerService;