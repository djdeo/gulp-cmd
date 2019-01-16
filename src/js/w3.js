var w3 = {};
w3.hide = function (sel) {
    w3.hideElements(w3.getElements(sel));
};
w3.hideElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        w3.hideElement(elements[i]);
    }
};