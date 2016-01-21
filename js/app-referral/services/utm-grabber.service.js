import _ from 'underscore';

let UtmGrabberService = function($state) {
  
  // grab url information

  let currentPageUrl = window.location.href;
  let paramStart  = currentPageUrl.indexOf('?');
  let urlParams   = currentPageUrl.substring(paramStart + 1);
  let paramArray  = urlParams.split('&');
  let utmParameters = _.map(paramArray, function(pair) {
    let startPoint = pair.indexOf('=');
    return pair.substring(startPoint + 1);
  });

  this.currentPageUrl = window.location.href;
  this.source   = utmParameters[0];
  this.medium   = utmParameters[1];
  this.campaign = utmParameters[2];
  
  let urlReferrer = document.referrer;
  let testUrl = document.URL;
  // let utmMedium = urlPara.utm_medium;
  // console.log('Current page url:', this.currentPageUrl);

};

UtmGrabberService.$inject = ['$state'];

export default UtmGrabberService; 