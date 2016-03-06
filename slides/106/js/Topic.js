/**
 * Created by zd on 2016/3/6.
 */
var topic = function () {
  var subscribers = {};

  return {
    publish: function (type, data) {

      if (subscribers[type] == undefined) {
        return;
      }
      var it = null;
      var callback = null;

      subscribers[type].forEach(function (sub) {

        it = sub.it;
        callback = sub.callback;
        if (data == undefined) {
          callback.call(it);
        } else {
          callback.call(it, data);
        }
      })
    },

    subscribe: function (type, callback, it) {
      //简单判断  日后再改
      if (type === undefined || typeof type !== "string" || Object.prototype.toString.call(type) == "[object Function]") {
        console.log("wrong");
        return;
      }
      if (subscribers[type] == undefined) {
        subscribers[type] = [];
      }
      //简单判断
      var sub = {};
      sub.callback = callback;
      if (it !== undefined) {
        sub.it = it;
      } else {
        sub.it = null;
      }
      subscribers[type].push(sub);
    },

    unSubscribe: function (type, callback) {
      if (subscribers[type] == undefined) {
        return;
      }
      subscribers[type].forEach(function (sub, index, array) {
        if (sub.callback == callback) {
          array.splice(index, 1);
          return false;
        }
        console.log(index);
      })
    }
  };
}();

//测试Topic
//(function(){
//  topic.subscribe("test",function(){
//    console.log("test");
//  });
//
//  var a ={name:"test name"};
//  var say  = function(){
//    console.log(this.name);
//  };
//  topic.subscribe("test",say,a);
//  topic.subscribe("test",function(){
//    console.log("test3333");
//  });
//  topic.subscribe("test22",function(){
//    console.log("test22");
//  });
//  topic.publish("test");
//  topic.publish("test22");
//  topic.unSubscribe("test",say);
//  topic.publish("test");
//})();
