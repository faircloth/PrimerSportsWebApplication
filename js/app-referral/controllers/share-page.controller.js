let SharePageController = function($scope) {
  
  console.log('share page controller');

  let vm = this;

  vm.enterContest = enterContest;
  vm.contestEntered = false;

  function enterContest (entry) {
    console.log(entry);
    vm.link = entry.name;
    vm.contestEntered = true;
  }



};

SharePageController.$inject = ['$scope'];

export default SharePageController;