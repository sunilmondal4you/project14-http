/**
 * Created by abc on 20/06/2016.
 */

var app=angular.module('app',['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'first.html',
            controller : 'default'
        })

        .when('/second', {
            templateUrl : 'second.html',
            controller : 'second'
        });


});