(function () {
  'use strict';

  function returnData(resp) {
    return resp.data;
  }

  angular
    .module('centralApp')
    .factory('EnumService',['$http','$state', '$cookies', function ($http, $state, $cookies) {
      var s = {};

      s.get_api = function (url,cache = false, headers = {}, params = {}) {
        headers["Authorization"] = $cookies.get("token");
        return new Promise(function(resolve, reject){
          $http.get(url, { params: params, cache: cache, headers: headers, with_credentials: true}).then(function(response){
            resolve(response);            
          }).catch(function(err){
            if(err.status == 200){
            }
            reject(err);
          })
        })
      };

      s.post_api = function (url,data={}, cache=false,headers={}) {
        headers["Authorization"] = $cookies.get("token");
        return $http.post(url, data, { cache: cache, headers: headers, with_credentials: true });
      };

      s.put_api = function (url,data={}, cache=false,headers={}) {
        headers["Authorization"] = $cookies.get("token");
        return $http.put(url, data, { cache: cache, headers: headers, with_credentials: true });
      };

      s.delete_api = function (url,data={}, cache=false,headers={}) {
        headers["Authorization"] = $cookies.get("token");
        return $http.delete(url, data, { cache: cache, headers: headers, with_credentials: true });
      };

      return s;
    }]);
})();
