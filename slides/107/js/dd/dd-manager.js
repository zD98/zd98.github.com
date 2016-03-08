/**
 * Created by zd on 2016/3/7.
 */

var DDManager = (function () {


  var dragging = null,
    diffX = 0,
    diffY = 0,
    containers = [];

  function _drop(event, item) {
    var x = event.clientX, y = event.clientY;
    containers.forEach(function (container) {
      console.log(container);

      if (x > container.left && x < container.right && y > container.top && y < container.bottom) {

        dragging.parentNode.removeChild(dragging);
        container.getElement().appendChild(dragging);
      }
    });

    dragging = null;
  }

  function addContainer(container) {
    containers.push(container);
  }

  function _init() {
    EventUtil.addListener(document, 'mousedown', _mouseDown, true);
    EventUtil.addListener(document, 'mousemove', _mouseMove, true);
    EventUtil.addListener(document, 'mouseup', _mouseUp, true);
  }

  function _mouseDown(event) {

    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    if (target.classList.contains('dd-item')) {
      dragging = target;
      diffX = event.clientX - dragging.offsetLeft;
      diffY = event.clientY - dragging.offsetTop;
    }


  }

  function _mouseMove(event) {
    if (dragging !== null) {
      dragging.style.left = (event.clientX - diffX) + "px";
      dragging.style.top = (event.clientY - diffY) + "px";
    }
  }

  function _mouseUp(event) {
    if (dragging != null) {
      mouseStop(event);
    }
  }

  function mouseStart(event, item) {
    _mouseDown(event);
  }

  function mouseStop(event, item) {
    _drop(event, item);
  }

  function start() {
    _init();
  }


  return {
    start: start,
    mouseStart: mouseStart,
    mouseStop: mouseStop,
    addContainer: addContainer
  }
})();
DDManager.start();
