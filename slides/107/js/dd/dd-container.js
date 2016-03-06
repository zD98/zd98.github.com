/**
 * Created by zd on 2016/3/6.
 */
/*
 * ele  dom  container的HTML元素
 * items []  container包含的子元素
 * */

function DDContainer() {

  var dragging = null,
    diffX = 0,
    diffY = 0,
    element = null;
  var _this = this;

  function _init() {

    if (element.className.indexOf("dd-container") == -1) {
      element.className += " dd-container";
    }
    EventUtil.addListener(element, 'mousedown', _handleEvent);
    EventUtil.addListener(element, 'mousemove', _handleEvent);
    EventUtil.addListener(element, 'mouseup', _handleEvent);
  }


  function _handleEvent(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    switch (event.type) {
      case "mousedown":
        if (target.className.indexOf("draggable") > -1) {
          dragging = target;
          diffX = event.clientX - target.offsetLeft;
          diffY = event.clientY - target.offsetTop;
        }
        break;
      case "mousemove":
        if (dragging !== null) {
          dragging.style.left = (event.clientX - diffX) + "px";
          dragging.style.top = (event.clientY - diffY) + "px";
        }
        break;
      case "mouseup":
        if (dragging !== null) {
          dragging = null;
        }
        //addItem
        //removeItem
        break;
    }
  }

  return {
    start: function (ele) {
      if (ele !== undefined) {
        element = ele;
      } else {
        element = document.createElement('div');
      }
      _init();
    },
    getElement: function () {
      return element;
    },
    addItem: function () {

    },
    removeItem: function () {

    },
    destroy: function () {

    }
  };
}


//function DDContainer(ele){
//  if(this instanceof  DDContainer){
//    if(ele !== undefined&&ele.nodeType) {
//      this.ele = ele;
//      this.dragging = null;
//      this.diffX = 0;
//      this.diffY = 0;
//    }
//  }else{
//    return new DDContainer(ele);
//  }
//}


DDContainer.prototype.addItem = function () {

};

DDContainer.prototype.removeItem = function () {

};

