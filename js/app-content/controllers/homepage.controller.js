import $ from 'jquery';

let HomepageController = function($scope, ContentService) {
  
  // Cycle backgrounds on homepage
  function cycleBackgrounds () {
    var index = 0;
    let $imageEls = $('.toggle-image');
    console.log($imageEls);
    setInterval( function () {
      index = index + 1 < $imageEls.length ? index + 1 : 0;
      $imageEls.eq(index).addClass('show');
      $imageEls.eq(index - 1).removeClass('show');
    }, 3000);
  }

  $(function () {
    cycleBackgrounds();
  });

  // End of background cycle



  let vm = this;


  // on page pageload

  function getArticles () {
    ContentService.getArticles().then( (response) => {
      console.log(response);
      vm.articles = response.data.results;
    });
  }

  getArticles();
  

  // used for sticky category bar


  // vm.closeBar = closeBar;

  // function closeBar () {
  //   console.log('x was clicked');
  //   // $('xBtn').addClass('hideX');
  //   $('category-nav').addClass('hideX');
  // }

  // console.log('HomepageController');

  // $(function () {
  //   $(document).bind('ready scroll', function (){
  //     var docScroll = $(document).scrollTop();
  //     // console.log(docScroll);
      
  //     if (docScroll < 980) {
  //       // console.log('Not there yet');
  //       if ($('.category-nav').hasClass('sticky')) {
  //         $('.category-nav').removeClass('sticky');
  //       }
  //     }

  //     if (docScroll >= 1000) {
  //       if (!$('.category-nav').hasClass('sticky')) {
  //         $('.category-nav').addClass('sticky');
  //         console.log('sticky class added');
  //       }
  //     }
  //   });
  // });



};

HomepageController.$inject = ['$scope', 'ContentService'];

export default HomepageController;