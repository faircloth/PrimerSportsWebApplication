let AdminShareMsgController = function($scope, AdminShareMsgsService, $state) {
  
  console.log('admin share message controller');

  let vm = this;

  vm.createShareMsg = createShareMsg;
  vm.submitMsgEdits = submitMsgEdits;

  vm.categories = [
    'Quick pitch',
    'Favorite part of Primer',
  ];

  function getShareMsgs () {
    AdminShareMsgsService.getShareMsgs().then( (response) => {
      console.log(response.data.results);
      vm.shareMsgs = response.data.results;
    });
  }

  getShareMsgs();


  function createShareMsg (shareMessage) {
    console.log(shareMessage);
    AdminShareMsgsService.createShareMsg(shareMessage).then( (response) => {
      console.log(response.data);
      // vm.shareMsgs.push()
    });
  }

  function submitMsgEdits (shareMessage) {
    console.log(shareMessage);
    AdminShareMsgsService.submitMsgEdits(shareMessage).then( (response) => {
      console.log('edit response:', response);
      $state.reload();
    });
  }

};

AdminShareMsgController.$inject = ['$scope', 'AdminShareMsgsService', '$state'];

export default AdminShareMsgController; 