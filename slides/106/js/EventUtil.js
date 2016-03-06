/**
 * Created by zd on 2016/3/6.
 */

var EventUtil = {

  addListener: function (ele, type, callback) {
    if (ele.addEventListener) {
      ele.addEventListener(type, callback, false);
    } else if (ele.attachEvent) {
      ele.attachEvent("on" + type, callback)
    } else {
      ele["on" + type] = callback;
    }
  },

  removeListener: function (ele, type, callback) {
    if (ele.removeEventListener) {
      ele.addEventListener(type, callback, false);
    } else if (ele.detachEvent) {
      ele.detachEvent("on" + type, callback)
    } else {
      ele["on" + type] = null;
    }
  },

  getEvent: function (event) {
    return event ? event : window.event;
  },

  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};