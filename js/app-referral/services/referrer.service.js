let ReferrerService = function($state, $http, PARSE, HEROKU) {
  
  console.log('referrer service');

  // SERVER INFO
  let url = PARSE.URL + 'classes/';
  let mandrillURL = HEROKU.URL + 'invites';

  // SERVICE PROPERTIES & FUNCTIONS
  this.shareVisit     = shareVisit;
  this.addReferrer    = addReferrer;
  this.enterContest   = enterContest;
  this.getShareMsgs   = getShareMsgs;
  this.sendEmail      = sendEmail;
  this.getReferrers   = getReferrers;
  this.getConversions = getConversions;


  // FUNCTIONS
  

  function getConversions () {
    return $http.get(url + 'landingConversion', PARSE.CONFIG);
  }


  function getReferrers () {
    console.log('get referrers called');
    // pulling from the sharevisits. May need a table for real sends? but some people may copy link
    return $http.get(url + 'landingVisit', PARSE.CONFIG);
    // return $http.get(url + 'sharevisit', PARSE.CONFIG);
  }


  function sendEmail (email) {
    console.log('EMAIL TO SEND', email);
    console.log('MANDRILL URL:', mandrillURL);
    return $http.post(mandrillURL, email, HEROKU.CONFIG);
  }

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

ReferrerService.$inject = ['$state', '$http', 'PARSE', 'HEROKU'];

export default ReferrerService;