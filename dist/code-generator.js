/*!
  * code-generator v0.0.1
  * (c) 2021 biqi li
  * @license Apache-2.0
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["code-generator"] = factory());
})(this, (function () { 'use strict';

    function greeter(person) {
      return "Hello, " + person.firstName + " " + person.lastName;
    }

    var user = {
      firstName: "Jane",
      lastName: "User"
    };
    var index = greeter(user);

    return index;

}));
