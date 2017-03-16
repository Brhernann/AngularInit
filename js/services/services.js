'use strict';

var app = angular.module('Visor');

app.service('MyServices', function($resource, $httpParamSerializerJQLike) {
    var service = $resource('http://saltala.cl/igniter/webservices:action', null,
      {
    'GetData': { method:'POST',
                        params: { action : 'NameWebServices' },
                        headers : {"Content-Type": "application/x-www-form-urlencoded"},
                        transformRequest: function(data) {
                        return $httpParamSerializerJQLike(data);
                  }},
      });

    return service;
  });
