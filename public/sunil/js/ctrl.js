/**
 * Created by abc on 20/06/2016.
 */
var app=angular.module('app');


app.controller("default", function($scope, $http) {

    $scope.serverCall1 = function() {

        $http.get("/a")
            .success(function(resdata){
                $scope.ARES = resdata;
            }).error(function(resdata){
            console.log(resdata);
        });

    };

    $scope.serverCall2 = function() {

        $http.get("/a/b")
            .success(function(rescall){
                $scope.RESCALL=rescall;
            }).error(function(rescall) {
            console.log(rescall);
        });
    };

    $scope.serverCall3=function(){
        $http.get("/a/b/c")

            .success(function(call3){
                $scope.CALL=call3;
            }).error(function(call3){
            console.log(call3);
        });
    };

    $scope.serverCall4=function() {
        var user = {
            "name": "Sunil",
            "email": "sunil@affixus.com",
            "mobile": 8828299466
        };

        $http.get("/abcd", {params : user})
            .success(function (sdata) {
                $scope.SDATA = sdata;
            }).error(function (edata) {
            console.log("Object not found");
        });
    };

    $scope.postcall=function() {
        debugger;
       var user ={
           name:"sunil m."
       };
        $http.post("/a/b/c/d", {data : user})
            .success(function (postdata) {
                $scope.POSTDATA = postdata;
            }).error(function (edata) {
            console.log("body-object not found");
        });
    };

});




app.controller("second", function($scope, $http){
    $scope.applicant = {};
    $scope.educationlist=['B.Tech', 'B.Com', 'B.Sc', 'BA'];
    $scope.knldg=["a","b","c"];

    $scope.savedata=function() {
        debugger;

        $http.get("/p", {params : $scope.applicant})
            .success(function (appdata) {
                $scope.APPDATA = appdata;
                console.log("Success");
            }).error(function (edata) {
               console.log("Failed");
        });
    };


});

