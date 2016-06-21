/**
 * Created by abc on 20/06/2016.
 */

var app=angular.module('app');
app.directive('headerDirective',function() {
    return{
        restrict:'AEC',
        templateUrl:'headerdirective.html'

    };
});