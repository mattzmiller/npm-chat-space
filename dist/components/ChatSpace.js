"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatSpace;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _chatIcon = _interopRequireDefault(require("./chat-icon.svg"));
var _chatExitIcon = _interopRequireDefault(require("./chat-exit-icon.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ChatSpace() {
  const [chatInput, setChatInput] = (0, _react.useState)("");
  const [showChat, setShowChat] = (0, _react.useState)(false);
  function inputHandler(e) {
    setChatInput(e.target.value);
  }
  function chatIconClickHandler(e) {
    setShowChat(true);
  }
  function closeChatSpaceHandler(e) {
    setShowChat(false);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, showChat ? /*#__PURE__*/React.createElement(React.Fragment, null) : /*#__PURE__*/React.createElement("div", {
    style: chatSpaceIcon
  }, /*#__PURE__*/React.createElement("img", {
    onClick: chatIconClickHandler,
    style: chatSpaceImg,
    className: "animate-[bounce_2.7s_ease-in-out_infinite]",
    src: _chatIcon.default,
    alt: "chat-icon"
  })), showChat ? /*#__PURE__*/React.createElement("div", {
    style: chatSpace
  }, /*#__PURE__*/React.createElement("div", {
    style: chatSpaceExitBtn
  }, /*#__PURE__*/React.createElement("img", {
    onClick: closeChatSpaceHandler,
    style: chatSpaceExitIcon,
    src: _chatExitIcon.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("ul", {
    style: messageContainer
  }, /*#__PURE__*/React.createElement("li", {
    style: messageSender
  }, "This is where the messages will appear")), /*#__PURE__*/React.createElement("form", {
    style: formStyling,
    action: ""
  }, /*#__PURE__*/React.createElement("input", {
    style: inputField,
    onChange: inputHandler,
    value: chatInput,
    type: "text"
  }), /*#__PURE__*/React.createElement("button", {
    style: sendBtn,
    type: "submit"
  }, "Send"))) : /*#__PURE__*/React.createElement(React.Fragment, null));
}
const chatSpaceImg = {
  width: "75px",
  height: "75px"
};
const chatSpaceIcon = {
  position: "fixed",
  bottom: "3%",
  right: "3%"
};
const inputField = {
  color: "black",
  marginRight: "5px",
  height: "32px",
  width: "65%",
  borderRadius: "24px",
  border: "2px solid #B7C8F6"
};
const chatSpace = {
  width: "300px",
  height: "400px",
  border: "2x solid grey",
  borderRadius: "16px",
  backgroundColor: "#A5D0EA",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "end",
  position: "fixed",
  bottom: "3%",
  right: "3%"
};
const sendBtn = {
  borderRadius: "24px",
  border: "1.5px solid #3069FF",
  padding: "8px 22px",
  backgroundColor: "#3069FF",
  color: "white",
  fontSize: "16px"
};
const formStyling = {
  width: "95%",
  margin: "6px",
  position: "absolute",
  bottom: "1%",
  right: "0.5%"
};
const chatSpaceExitBtn = {
  margin: "10px 12.5px"
};
const chatSpaceExitIcon = {
  width: "30px",
  height: "30px"
};
const messageContainer = {
  margin: "10px 15px",
  width: "80%"
};
const messageSender = {
  width: "80%",
  padding: "10px",
  borderRadius: "16px",
  backgroundColor: "#6D9198",
  listStyle: "none",
  color: "white"
};