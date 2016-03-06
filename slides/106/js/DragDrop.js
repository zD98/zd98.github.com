/**
 * Created by zd on 2016/3/6.
 */


var DragDrop = function () {
  var dragging = null,
    diffX = 0,
    diffY = 0,
    width = 0;

  function handleEvent(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    switch (event.type) {
      case "mousedown":
        if (target.className.indexOf("draggable") > -1) {
          dragging = target;
          diffX = event.clientX - target.offsetLeft;
          diffY = event.clientY - target.offsetTop;
          width = target.offsetWidth;
        }

        break;
      case "mousemove":
        if (dragging !== null) {
          //防止dragging 出框
          if (event.clientX > document.body.clientWidth + diffX - width || event.clientX < diffX) {
            //EventUtil.preventDefault(event);
            //EventUtil.stopPropagation(event);
            return false;
          }

          dragging.style.left = (event.clientX - diffX) + "px";
          dragging.style.top = (event.clientY - diffY) + "px";
        }
        break;
      case "mouseup":
        if (dragging !== null) {
          dragging = null;
        }
        break;
    }

  }

  return {
    enable: function () {
      EventUtil.addListener(document, "mousedown", handleEvent);
      EventUtil.addListener(document, "mousemove", handleEvent);
      EventUtil.addListener(document, "mouseup", handleEvent);
    },
    unable: function () {
      EventUtil.removeListener(document, "mousedown", handleEvent);
      EventUtil.removeListener(document, "mousemove", handleEvent);
      EventUtil.removeListener(document, "mouseup", handleEvent);
    }
  }

}();
