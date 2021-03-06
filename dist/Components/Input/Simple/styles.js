"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 6px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.53;\n  letter-spacing: normal;\n  padding: 9px 24px;\n  width: 100%;\n  background: transparent;\n  outline: 0;\n  box-sizing: border-box;\n  ::placeholder {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject(), function (props) {
  return props.noBorder ? 'none' : "1px solid ".concat(_Colors.default["gray-30"]);
}, _Colors.default["gray-100"], _Colors.default["gray-50"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n    background-color: ".concat(_Colors.default["gray-10"], ";\n  ");
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    background-color: ".concat(_Colors.default["red-dark"], ";\n  ");
}, function (_ref3) {
  var loading = _ref3.loading;
  return loading && "\n    background-color: ".concat(_Colors.default["primary"], ";\n  ");
});

exports.Input = Input;