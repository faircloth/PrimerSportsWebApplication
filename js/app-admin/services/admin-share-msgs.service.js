let AdminShareMsgsService = function($state, $http, PARSE) {
  
  console.log('share message service');

  // SERVER INFO
  let url = PARSE.URL + 'classes/';

  // SERVICE PROPERTIES & FUNCTIONS
  this.createShareMsg   = createShareMsg;
  this.getShareMsgs     = getShareMsgs;
  this.submitMsgEdits   = submitMsgEdits;

  // FUNCTIONS
  function createShareMsg (shareMessage) {
    console.log('share message in service:', shareMessage);
    return $http.post(url + 'shareMessage', shareMessage, PARSE.CONFIG);
  }

  function getShareMsgs () {
    return $http.get(url + 'shareMessage', PARSE.CONFIG);
  }

  function submitMsgEdits (shareMessage) {
    return $http.put(url + 'shareMessage/' + shareMessage.objectId, shareMessage, PARSE.CONFIG);
  }

};

AdminShareMsgsService.$inject = ['$state', '$http', 'PARSE'];

export default AdminShareMsgsService;