(function () {
  angular.module('basketballApp').controller('teamDetailsCtrl', ['$stateParams', teamDetailsCtrl]);

  function teamDetailsCtrl($stateParams) {
    var self = this;
    console.log($stateParams);
  };
})();
