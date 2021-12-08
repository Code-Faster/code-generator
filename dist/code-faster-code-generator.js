/*!
  * code-generator v0.0.6
  * (c) 2021 biqi li
  * @license Apache-2.0
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["code-faster-code-generator"] = {}));
})(this, (function (exports) { 'use strict';

    function generator(template) {
      return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
    }

    exports.generator = generator;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
