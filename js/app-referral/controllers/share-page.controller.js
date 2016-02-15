import _ from 'underscore';

let SharePageController = function($scope, UtmGrabberService, ReferrerService, $state, $location, $window, AdminShareMsgsService) {
  




  // CLOUDSPONGE
  $scope.contacts = [];
  $scope.fullAddressbook = [];

  window.csPageOptions = { 
    textarea_id: "contact_list",
    mobile_render: true,
    inlineOauth: 'mobile',
    // include: ["email"],
    beforeDisplayContacts: function (contacts, b, c) {
      $scope.fullAddressbook = contacts;
    },
    afterSubmitContacts: function (contacts) {
      $scope.contacts = contacts;
    }
  };

  (function(u){
    var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
    a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
  })('//api.cloudsponge.com/widget/48bc871ee2384e8458627dc574cce552f0c03907.js');

  // END OF CLOUDSPONGE




  console.log('PAGE URL', UtmGrabberService);

  let vm = this;

  vm.enterContest     = enterContest;
  vm.contestEntered   = true;
  vm.goToUtm          = goToUtm;
  vm.getMessage       = getMessage;
  vm.favoriteOptions  = false;
  vm.writeMyOwn       = writeMyOwn;
  vm.select           = select;
  vm.sendEmail        = sendEmail;
  vm.typeMyOwn        = typeMyOwn;

  function typeMyOwn() {
    $scope.showTypeBox = !$scope.showTypeBox;
    console.log($scope.showTypeBox);
  }


  function sendEmail (contacts, referrerEmail, text1, text2, linkSource, greeting, typedContacts, referrerName) {
    console.log('TO:', contacts);
    console.log(contacts.length);
    
    let toFieldImport = [];

    if (contacts.length > 0 && Array.isArray(contacts) ) {
      console.log('import was used and contacts in an array');
      contacts.forEach ( function (contact) {
        toFieldImport.push(contact.email[0].address);
      });
      console.log('TO FIELD FROM IMPORT:', toField);
    } 

    let toFieldTyped = [];

    if (typedContacts) {
      console.log('import not used, string was passed instead');
      // console.log('typed contacts:', typedContacts);
      let arrTypeYesSpace = typedContacts.split(', ');
      // let arrTypeNoSpace = typedContacts.split(',');
      // console.log('ARRAY OF TYPED SPACE:', arrTypeYesSpace);
      // console.log('ARRAY OF TYPED No SP:', arrTypeNoSpace);
      toFieldTyped = arrTypeYesSpace;
      // console.log('toFIELD from typedContacts', toField);
    }

    console.log('toFIELD from import', toFieldImport);
    console.log('toFIELD from typed', toFieldTyped);

    let toField = [];

    if (toFieldImport.length > 0) {
      toFieldImport.forEach ( function (email) {
        toField.push(email);
      });
    }

    if (toFieldTyped.length > 0) {
      toFieldTyped.forEach ( function (email) {
        toField.push(email);
      });
    }
    
    setTimeout ( function() {
      console.log('TO FIELD', toField);
      console.log('GREETING', greeting);
      console.log('REFERRER EMAIL:', referrerEmail);
      let emailA = {
        greeting: greeting,
        list: toField,
        email: referrerEmail,
        text: text1,
        text2: text2,
        name: referrerName,
        image: '',
        link: linkSource
      };
      
      if (!referrerEmail.includes('@') ) {
        alert('Error: You must provide a valid email for yourself.');
      } else if (toField.length === 0) { 
        alert('Error: Please enter at least one recipient email address.');
      } else if (referrerName.length <= 1) {
        alert('Error: Please enter your first name so we can add it to your message.');
      } else if (!text1) {
        alert('Error: Please write a short message to include in your share email.');
      } else {
        ReferrerService.sendEmail(emailA).then( function (response) {
          console.log('RESPONSE', response);
          $state.go('root.thanks', {email: referrerEmail});
        },
        function () {
          console.log('error called');
          console.log('error!');
          vm.sendError = true;
          // setTimeout( function () {
          //   $window.location.reload();
          // }, 2000);
        });
      }
    }, 2000);


  }

  
  // TRY TO AUTOMATE
  let favoriteLabel = "Favorite part of Primer";
  let selectedChoice = 'Quick pitch';

  // START EMPTY
  vm.categories    = [];
  vm.favoriteParts = [];

  getShareMsgs();
  function getShareMsgs () {
    ReferrerService.getShareMsgs().then( (response) => {
      
      vm.shareMessages = response.data.results;
      let quickPitch = _.findWhere(vm.shareMessages, {category: 'Quick pitch'});
      console.log(quickPitch);
      vm.text1 = quickPitch.text1;
      vm.text2 = quickPitch.text2;
      // Build category list and array of favorites messages
      vm.shareMessages.forEach( function (message) {
        if (message.category === favoriteLabel) {
          vm.favoriteParts.push(message);
          console.log('FAVORITE PARTS:', vm.favoriteParts);
        }
        if (!vm.categories.includes(message.category)) {
          vm.categories.push(message.category);
          console.log('CATEGORY LIST:', vm.categories);
        }
      });
    });
    vm.favoriteParts = vm.favoriteParts.reverse();
  }
  
  function getMessage (categoryName) {
    console.log(categoryName);
    if (categoryName === favoriteLabel) {
      vm.favoriteOptions = true;
    } else {
      vm.favoriteOptions = false;
      let selectedMessage = _.findWhere(vm.shareMessages, {category: categoryName});
      console.log('SELECTED MESSAGE:', selectedMessage );
      vm.text1 = selectedMessage.text1;
      vm.text2 = selectedMessage.text2;
    }
  }

  function select (favoritePart) {
    console.log(favoritePart);
    vm.text1 = favoritePart.text1;
    vm.text2 = favoritePart.text2;
  }


  function writeMyOwn () {
    console.log('write my own message called');
    vm.favoriteOptions = false;
  }


  function goToUtm (url) {
    console.log('GO TO UTM:', url);
    $window.location.hash = url;
    // Better way to do this?
    $window.location.reload();
  }

  let pageInfo = {
    pageUrl: UtmGrabberService.currentPageUrl,
    source: UtmGrabberService.source,
    medium: UtmGrabberService.medium,
    campaign: UtmGrabberService.campaign
  };


  // http://primer-webapp.surge.sh/#/landing-a?utm_source=

  let landingPages = {
    A: 'http://primer-webapp.surge.sh/#/signup?utm_source=',
    B: 'http://primer-webapp.surge.sh/#/landing-b?utm_source=',
  };


  vm.referrerEmail  = pageInfo.source;
  vm.referrerName   = pageInfo.campaign;
  vm.linkSource     = landingPages.A + pageInfo.source;

  registerPageVisit (pageInfo);

  function registerPageVisit (pageInfo) {
    if (!pageInfo.medium){
      console.log('no url info');
      vm.contestEntered = false;
    } else {
      ReferrerService.shareVisit(pageInfo);
    }
  }


  function enterContest (entry) {

    if ( !entry ) {
      alert('Please sign up so we can track your results!');
    } else {

      let startingPoint = pageInfo.pageUrl.indexOf('#/');
      let extension = pageInfo.pageUrl.substring(startingPoint + 2);
      let newUrlExtension = extension + '?utm_source=' + entry.email + '&utm_medium=newsignup' + '&utm_campaign=' + entry.name.replace(/\s+/g, '');
      
      ReferrerService.enterContest(entry).then( (response) => {
        console.log(response);
        goToUtm(newUrlExtension);
        vm.contestEntered = true;
      });

      setTimeout( function () {
        registerPageVisit(pageInfo);
      }, 500);
    }
  }



};

SharePageController.$inject = ['$scope', 'UtmGrabberService', 'ReferrerService', '$state', '$location', '$window', 'AdminShareMsgsService'];

export default SharePageController;