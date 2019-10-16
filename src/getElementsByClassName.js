// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementList = [];

  var getClass = function func(element) {
    if (element.classList && element.classList.contains(className)) {
      elementList.push(element);
    }

    for (var i = 0; i < element.childNodes.length; i++) {
      func(element.childNodes[i]);
    }

    return elementList;
  };

  getClass(document.body);

  return elementList;
};