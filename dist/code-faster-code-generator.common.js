/*!
  * code-generator v0.0.6
  * (c) 2021 biqi li
  * @license Apache-2.0
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function generator(template) {
  return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
}

exports.generator = generator;
