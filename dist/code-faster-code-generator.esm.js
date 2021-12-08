/*!
  * code-generator v0.0.8
  * (c) 2021 biqi li
  * @license Apache-2.0
  */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var CodeGenerator = /*#__PURE__*/function () {
  function CodeGenerator() {

    _classCallCheck(this, CodeGenerator);
  }

  _createClass(CodeGenerator, [{
    key: "generator",
    value: function generator(template) {
      return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
    }
  }]);

  return CodeGenerator;
}();

export { CodeGenerator as default };
