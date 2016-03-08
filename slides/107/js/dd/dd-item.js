/**
 * Created by zd on 2016/3/6.
 */
//额  考虑情况  拖拽元素多少  当前是没个元素都添加?  或者添加到body
function DDItem() {

  var element = null;
  var dragging = false;

  function _init() {
    element.classList.add("dd-item");
  }

  // 移动 DOM后 无法通知这里  就是 怎么想办法加一个钩子 将那边的DOM绑定回这里

  return {
    start: function (ele) {
      element = ele;
      _init();
    }
  };
}