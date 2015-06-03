angular.module('myApp', [])
    .controller('MultiplicationCtrl', function($scope, $attrs) {
        $scope.numberLimit = $attrs.initialNumberLimit || 10;

        $scope.numbers = function() {
            var numbers = [];
            for (var i = 0; i < $scope.numberLimit; i++) {
                numbers[i] = i + 1;
            };
            return numbers;
        };

        $scope.compute = function(a, b) {
            return a * b;
        };
    });

/*
Let’s walk through this code: On the myApp app module, we’re declaring a controller called MultiplicationCtrl. As well as $scope it also requires $attrs, which we’ll use to pull in an initial value for the table size from your template. The $attrs service provides a map of all the attributes present on the element which the ng-controller was placed on.

Inside the controller, you define a scope variable called numberLimit that uses $attrs service. In the multiplication controller element in your template, you’ll set the value of the attribute like this: <table ng-controller="MultiplicationCtrl" initial-number-limit="10">. If the attribute is not set then you default to 10.

Next you define the scope variable numbers as a function that returns an array of numbers from 0 all the way up to the provided limit.

Now go back to your HTML template. Although you set an intelligent default in your controller, you’re going to explicitly set numberLimit to 10 in your template. Also because numbers is now a function you need to call it in your ng-repeat blocks*/