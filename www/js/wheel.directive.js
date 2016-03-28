(function(){
  'use strict';

  function WheelDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/wheel.tmpl.html',
      link: function(scope, elem, attrs){
        scope.canvas = elem.find('myCanvas')[0];

        var counter = 0;

        var spinWheel = new Winwheel({
         'canvasId' : 'myCanvas',
         'numSegments': 10,
         'outerRadius' : 170,
         'lineWidth': 3,
         'segments': [
           {'fillStyle' : '#eae56f', 'text' : 'Episode 1'},
           {'fillStyle' : '#89f26e', 'text' : 'Episode 2'},
           {'fillStyle' : '#7de6ef', 'text' : 'Episode 3'},
           {'fillStyle' : '#e7706f', 'text' : 'Episode 4'},
           {'fillStyle' : '#eae56f', 'text' : 'Episode 5'},
           {'fillStyle' : '#89f26e', 'text' : 'Episode 6'},
           {'fillStyle' : '#7de6ef', 'text' : 'Episode 7'},
           {'fillStyle' : '#e7706f', 'text' : 'Episode 8'},
           {'fillStyle' : '#eae56f', 'text' : 'Episode 9'},
           {'fillStyle' : '#e7706f', 'text' : 'Episode 10'}
         ],
         'animation' : {
           'type' : 'spinToStop',
           'duration' : 5,
           'spins' : 8
         }
       });

       scope.spin = function(){
         if(counter === 0){
           counter = 1;
          return spinWheel.startAnimation();
         } else {
          spinWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
          return spinWheel.startAnimation();
         }
       };

      }
    }
  }

  angular.module('wheelmodule', [])
    .directive('wheel', WheelDirective)
})();
