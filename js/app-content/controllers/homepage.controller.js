import $ from 'jquery';

let HomepageController = function($scope) {
  
  console.log('HomepageController');

  $(function () {
    $(document).bind('ready scroll', function (){
      var docScroll = $(document).scrollTop();
      console.log(docScroll);
      
      if (docScroll < 1000) {
        console.log('Not there yet');
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