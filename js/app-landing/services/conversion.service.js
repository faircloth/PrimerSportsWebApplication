let ConversionService = function($http, PARSE) {
  
  console.log('this is the conversion service');

  let url = PARSE.URL + 'classes/';

  this.registerPageView   = registerPageView;
  this.registerConversion = registerConversion;


  console.log('Parse URL', url);

  function registerPageView (pageInfo) {
    console.log('the landing page was visited');
    let pageView = {
      pageUrl: pageInfo.pageUrl,
      source: pageInfo.source
    };
    console.log('OBJECT TO STORE:', pageView);
    return $http.post(url + 'landingVisit', pageView, PARSE.CONFIG);
  }

  function registerConversion (subscriber, pageInfo2) {
    console.log('a conversion occured!');
    let conversionObj = {
      firstName: subscriber.firstName,
      lastName: subscriber.lastName,
      email: subscriber.email,
      pageUrl: pageInfo2.pageUrl,
      source: pageInfo2.source
    };
    console.log('CONVERSION OBJ TO STORE:', conversionObj);
    if (conversionObj) {
      return $http.post(url + 'landingConversion', conversionObj, PARSE.CONFIG);
    } else {
      alert('Sorry. The server timed out. Please try again.');
    }
  }



};

ConversionService.$inject = ['$http', 'PARSE'];

export default ConversionService;