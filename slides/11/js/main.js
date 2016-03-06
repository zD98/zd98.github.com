/**
 * Created by zd on 2016/3/4.
 */
//AJAX

(function () {
  //var xhr = new XMLHttpRequest();
  //xhr.open("GET", "/static/test.json",true);
  //xhr.send();
  //
  //xhr.open("POST","/static/test.json",true);
  //xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  ////onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。
  //xhr.onreadystatechange = function(){
  //  if(xhr.readyState == 4 && xhr.status == 200){
  //
  //  }
  //};
  //var res = xhr.responseText

  var $http = function (type, url, data) {
    return this;
  };

  $http.post = function (url, data) {
    return this;
  };
  $http.get = function (url) {
    var promise = new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onreadystatechange = handle;
      xhr.responseType = "json";
      xhr.setRequestHeader("Accept", "application/json");
      xhr.send();
      function handle() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status == 200) {
          resolve(this.response)
        } else {
          reject(new Error(this.statusText))
        }
      }
    });
    return promise;
  };

}());