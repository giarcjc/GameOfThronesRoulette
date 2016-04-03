(function(){
  'use strict';

  function WheelDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/wheel.tmpl.html',
      link: function(scope, elem, attrs){
        scope.canvas = elem.find('myCanvas')[0];
        var spinWheel
        var counter = false;

       scope.spin = function(){
         if(!counter){
           counter = true;
           return spinWheel.startAnimation();
         } else {
           spinWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
           return spinWheel.startAnimation();
         }
       };



       spinWheel = new Winwheel({
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
          'spins' : 8,
          'callbackFinished' : 'this.target.result()'
         }
       });

       spinWheel.result = function(){
         var winningSegmentNumber = spinWheel.getIndicatedSegmentNumber();
         for (var x = 1; x < spinWheel.segments.length; x++){
           spinWheel.segments[x].fillStyle = 'gray';
         }
         spinWheel.segments[winningSegmentNumber].fillStyle = 'yellow';
         spinWheel.draw();
         console.log('result is ' + winningSegmentNumber);
       }

      }
    }
  }

  angular.module('wheelmodule', [])
    .directive('wheel', WheelDirective)
})();
