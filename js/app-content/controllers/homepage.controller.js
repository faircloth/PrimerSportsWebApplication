import $ from 'jquery';

let HomepageController = function($scope) {
  
  function cycleBackgrounds () {
    var index = 0;

    let $imageEls = $('.toggle-image');
    console.log($imageEls);

    // $imageEls = $('.toggle-image');


    setInterval( function () {
      index = index + 1 < $imageEls.length ? index + 1 : 0;
      $imageEls.eq(index).addClass('show');
      $imageEls.eq(index - 1).removeClass('show');

    }, 3000);

  }

  
  $(function () {
    cycleBackgrounds();
  });


  let vm = this;

  vm.closeBar = closeBar;

  function closeBar () {
    console.log('x was clicked');
    // $('xBtn').addClass('hideX');
    $('category-nav').addClass('hideX');
  }

  console.log('HomepageController');

  $(function () {
    $(document).bind('ready scroll', function (){
      var docScroll = $(document).scrollTop();
      // console.log(docScroll);
      
      if (docScroll < 980) {
        // console.log('Not there yet');
        if ($('.category-nav').hasClass('sticky')) {
          $('.category-nav').removeClass('sticky');
        }
      }

      if (docScroll >= 1000) {
        if (!$('.category-nav').hasClass('sticky')) {
          $('.category-nav').addClass('sticky');
          console.log('sticky class added');
        }
      }
    });
  });



};

HomepageController.$inject = ['$scope'];

export default HomepageController;