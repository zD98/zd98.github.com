/**
 * Created by zd on 2015/10/5.
 */
var unique = function (arr) {
  var result = [];
  for (var len = arr.length; len--;) {
    if (result.indexOf(arr[len]) === -1) {
      result.push(arr[len]);
    }
  }
  return result;
};


unique = function (arr) {
  var result = [], hash = {};
  for (var len = arr.length; len--;) {
    if (!hash[arr[len]]) {
      hash[arr[len]] = true;
      result.push(result[i]);
    }
  }
};

unique = function (arr) {
  var result = [arr[0]], isRepeat;
  if (arr.length === 0) {
    return;
  }
  for (var i = 0, len = arr.length; i < len; i++) {
    isRepeat = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        isRepeat = true;
        break;
      }
    }
    if (!isRepeat) {
      result.push(arr[i]);
    }
  }

};

var shuffle = function (array) {
  var copy = [],
    n = array.length,
    i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
};
shuffle = function (array) {
  var copy = [],
    n = array.length,
    i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
};

shuffle = function (array) {
  var m = array.length,
    t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

