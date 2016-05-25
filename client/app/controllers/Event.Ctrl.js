angular.module('break')
.controller('EventCtrl', function($scope,$http, moment) {
  //will make 2 api calls (Events and Events Message Board)
  // and will merge the two pieces of data
  //the following is a mock up for the merged data
  //that will be used and populated by the controller
  $scope.event = {

    title: "X-games Austin",
    img: 'http://cdn.bmx.transworld.net/wp-content/blogs.dir/444/files/2016/02/2006-x-games12-dirt.jpg',
    description: "A festival that highlights the intersection of sports and lifestyle that exists in action sports",
    users_att: ['Sin', 'James', 'Adam'],
    owners: ['ryan'],
    creation_time: new Date("2016 05 28 21:00:00"),
    start_time: new Date("2016 06 02 13:00:00"),
    end_time: new Date("2016 06 03 18:00:00"),
    categories: ["Outdoors"],
    messages: {
      event_id: 1,
      messages: [{
        user_id: 1,
        msg: "Hello World",
        time: new Date("2016 05 02 13:00:00")
      }, {
        user_id: 2,
        msg: "Hello Planet",
        time: new Date("2016 04 02 13:00:00")
      }, {
        user_id: 3,
        msg: "Hello floating rock",
        time: new Date("2016 03 02 13:00:00")
      }]
    }
  };
  $scope.event.timeFromNow = moment($scope.event.start_time).fromNow();
  $scope.event.startInHour = parseInt(moment($scope.event.start_time).diff(Date.now(), 'hours'));
  $scope.event.displayTime = moment($scope.event.start_time).format('MMMM Do YYYY, h:mm:ss a');

  //Joining event - call the api to join the event User Model -> joinEvent(user_id, event_id)
  $scope.joinEvent = function(){
    $http({
      method:"POST",
      url:'/endpoint',
      data:{
        authToken: "TBD"
      }
    }).then(function(resp){
      //success function
    }, function(resp){
      //fail function
    })
  }


})