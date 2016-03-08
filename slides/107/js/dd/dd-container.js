/**
 * Created by zd on 2016/3/6.
 */
/*
 * ele  dom  container的HTML元素
 * items []  container包含的子元素
 * */

function DDContainer() {

  var element = null;


  return {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,

    start: function (ele) {
      if (ele !== undefined) {
        element = ele;
      } else {
        element = document.createElement('div');
      }
      DDManager.addContainer(this);
      this._init();
    },
    _init: function () {
      element.classList.add('dd-container');

      this.left = element.offsetLeft;
      this.top = element.offsetTop;
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      this.right = this.left + width;
      this.bottom = height + this.top;
    }
    ,
    getElement: function () {
      return element;
    },
    addItem: function (item) {

      element.appendChild(item.element);
    },
    removeItem: function (item) {
      element.removeChild(item);
    },
    destroy: function () {

    }
  };
}

DDContainer.prototype.addItem = function () {

};

DDContainer.prototype.removeItem = function () {

};


