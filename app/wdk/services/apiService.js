'use strict';
angular.module('app').service('apiService', ['$appConfig', '$http', '$location', function ($appConfig, $http, $location) {
    var cache = [];

    this.getNodes = function(table) {
      return $http.get($appConfig.apiUrl + table)
      .then(function(response) {
            return response.data;
        }, function(response) {
            console.log("Error cargando los nodes.")
            console.log(response)
        });
    };

    this.getNodesById = function(table, id) {
      return $http.get($appConfig.apiUrl + table + '/' + id)
      .then(function(response) {
            return response.data;
        }, function(response) {
            console.log("Error cargando los nodes.")
            console.log(response)
        });
    };

    this.getNode = function(table, id) {
      return $http.get($appConfig.apiUrl + table + '/' + id)
      .then(function(response) {
            return response.data[0];
        }, function(response) {
            console.log("Error cargando el node.")
            console.log(response)
        });
    };

    this.addNode = function(table, node) {
      return $http.post($appConfig.apiUrl + table, node)
      .then(function(response) {
            return response.data;
        }, function(response) {
            return response;
        });
    };

    this.updateNode = function(table, id, node){
        return $http.put($appConfig.apiUrl + table + '/' + id, node)
      .then(function(response) {
            return response.data;
        }, function(response) {
            console.log("Error actualizando el node.")
            console.log(response)
        });
    };

    this.deleteNode = function(table, id){
        return $http.delete($appConfig.apiUrl + table + '/' + id)
      .then(function(response) {
            return response.data;
        }, function(response) {
            console.log("Error eliminando el node.")
            console.log(response)
        });
    };



}]);