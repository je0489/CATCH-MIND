(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "other" : "self", "\">").concat(nickname || "you", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  var _window = window,
      events = _window.events;
  (0, _sockets.getSocket)().emit(events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsIndpbmRvdyIsImV2ZW50cyIsImVtaXQiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDMEJILFFBQVEsR0FBRyxPQUFILEdBQWEsTUFEL0MsZ0JBQzBEQSxRQUFRLElBQUksS0FEdEUsc0JBQ3VGRCxJQUR2RjtBQUdBTCxFQUFBQSxRQUFRLENBQUNVLFdBQVQsQ0FBcUJILEVBQXJCO0FBQ0gsQ0FORDs7QUFRQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUMzQkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHWCxPQUFPLENBQUNZLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUNBLE1BQ0lDLEtBREosR0FFSUYsS0FGSixDQUNJRSxLQURKO0FBR0EsZ0JBRUlDLE1BRko7QUFBQSxNQUNJQyxNQURKLFdBQ0lBLE1BREo7QUFHQSw0QkFBWUMsSUFBWixDQUFpQkQsTUFBTSxDQUFDZixPQUF4QixFQUFpQztBQUM3QmlCLElBQUFBLE9BQU8sRUFBRUo7QUFEb0IsR0FBakM7QUFHQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNILENBZEQ7O0FBZ0JPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FHMUI7QUFBQSxNQUZGRCxPQUVFLFFBRkZBLE9BRUU7QUFBQSxNQURGZCxRQUNFLFFBREZBLFFBQ0U7QUFDRkYsRUFBQUEsU0FBUyxDQUFDZ0IsT0FBRCxFQUFVZCxRQUFWLENBQVQ7QUFDSCxDQUxNOzs7O0FBT1AsSUFBSUgsT0FBSixFQUFhO0FBQ1RBLEVBQUFBLE9BQU8sQ0FBQ21CLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DWCxhQUFuQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBnZXRTb2NrZXRcbn0gZnJvbSAnLi9zb2NrZXRzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XG5cbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3RoZXJcIiA6IFwic2VsZlwifVwiPiR7bmlja25hbWUgfHwgXCJ5b3VcIn06PC9zcGFuPiAke3RleHR9XG4gICAgYDtcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XG59XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWVcbiAgICB9ID0gaW5wdXQ7XG4gICAgY29uc3Qge1xuICAgICAgICBldmVudHNcbiAgICB9ID0gd2luZG93O1xuICAgIGdldFNvY2tldCgpLmVtaXQoZXZlbnRzLnNlbmRNc2csIHtcbiAgICAgICAgbWVzc2FnZTogdmFsdWVcbiAgICB9KTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYXBwZW5kTXNnKHZhbHVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoe1xuICAgIG1lc3NhZ2UsXG4gICAgbmlja25hbWVcbn0pID0+IHtcbiAgICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xufVxuXG5pZiAoc2VuZE1zZykge1xuICAgIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcbn0iXX0=
},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjdjZDhlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zb2NrZXRzXCI7XG5pbXBvcnQgXCIuL2xvZ2luXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjsiXX0=
},{"./chat":1,"./login":3,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

var logIn = function logIn(nickname) {
  var socket = io("/");
  var _window = window,
      events = _window.events;
  socket.emit(events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

var checkNickname = function checkNickname() {
  var nickname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage.getItem(NICKNAME);
  if (nickname === null) body.className = LOGGED_OUT;else {
    body.className = LOGGED_IN;
    logIn(nickname);
  }
};

var handleFormSubmit = function handleFormSubmit(evnet) {
  evnet.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  checkNickname(value);
};

checkNickname();

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsImxvZ0luIiwibmlja25hbWUiLCJzb2NrZXQiLCJpbyIsIndpbmRvdyIsImV2ZW50cyIsImVtaXQiLCJzZXROaWNrbmFtZSIsImNoZWNrTmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImV2bmV0IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBSUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLFFBQVEsRUFBSTtBQUN0QixNQUFNQyxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0EsZ0JBRUlDLE1BRko7QUFBQSxNQUNJQyxNQURKLFdBQ0lBLE1BREo7QUFHQUgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVlELE1BQU0sQ0FBQ0UsV0FBbkIsRUFBZ0M7QUFDNUJOLElBQUFBLFFBQVEsRUFBUkE7QUFENEIsR0FBaEM7QUFHQSw0QkFBWUMsTUFBWjtBQUNILENBVEQ7O0FBV0EsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUErQztBQUFBLE1BQTlDUCxRQUE4Qyx1RUFBbkNRLFlBQVksQ0FBQ0MsT0FBYixDQUFxQmIsUUFBckIsQ0FBbUM7QUFDakUsTUFBSUksUUFBUSxLQUFLLElBQWpCLEVBQ0lULElBQUksQ0FBQ21CLFNBQUwsR0FBaUJiLFVBQWpCLENBREosS0FFSztBQUNETixJQUFBQSxJQUFJLENBQUNtQixTQUFMLEdBQWlCWixTQUFqQjtBQUNBQyxJQUFBQSxLQUFLLENBQUNDLFFBQUQsQ0FBTDtBQUNIO0FBQ0osQ0FQRDs7QUFTQSxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEtBQUssRUFBSTtBQUM5QkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHcEIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUNJc0IsS0FESixHQUVJRCxLQUZKLENBQ0lDLEtBREo7QUFHQUQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBUCxFQUFBQSxZQUFZLENBQUNRLE9BQWIsQ0FBcUJwQixRQUFyQixFQUErQm1CLEtBQS9CO0FBQ0FSLEVBQUFBLGFBQWEsQ0FBQ1EsS0FBRCxDQUFiO0FBQ0gsQ0FURDs7QUFXQVIsYUFBYTs7QUFDYixJQUFJYixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDdUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBpbml0U29ja2V0c1xufSBmcm9tICcuL3NvY2tldHMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbiAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50c1xuICAgIH0gPSB3aW5kb3c7XG4gICAgc29ja2V0LmVtaXQoZXZlbnRzLnNldE5pY2tuYW1lLCB7XG4gICAgICAgIG5pY2tuYW1lXG4gICAgfSk7XG4gICAgaW5pdFNvY2tldHMoc29ja2V0KTtcbn1cblxuY29uc3QgY2hlY2tOaWNrbmFtZSA9IChuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKSkgPT4ge1xuICAgIGlmIChuaWNrbmFtZSA9PT0gbnVsbClcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xuICAgIGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgICAgICAgbG9nSW4obmlja25hbWUpO1xuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGV2bmV0ID0+IHtcbiAgICBldm5ldC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlXG4gICAgfSA9IGlucHV0O1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xuICAgIGNoZWNrTmlja25hbWUodmFsdWUpO1xufVxuXG5jaGVja05pY2tuYW1lKCk7XG5pZiAobG9naW5Gb3JtKSB7XG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59Il19
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hadnleDisconneted = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var alertNotification = function alertNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return alertNotification("".concat(nickname, " just joined"), "rgb(88, 86, 214)");
};

exports.handleNewUser = handleNewUser;

var hadnleDisconneted = function hadnleDisconneted(_ref2) {
  var nickname = _ref2.nickname;
  return alertNotification("".concat(nickname, " just left"), "rgb(255, 59, 48)");
};

exports.hadnleDisconneted = hadnleDisconneted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnROb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhZG5sZURpc2Nvbm5ldGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3ZDLE1BQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBRUFELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1ksV0FBTCxDQUFpQk4sWUFBakI7QUFDSCxDQVBEOztBQVNPLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUNyQkMsUUFEcUIsUUFDckJBLFFBRHFCO0FBQUEsU0FHekJYLGlCQUFpQixXQUFJVyxRQUFKLG1CQUE0QixrQkFBNUIsQ0FIUTtBQUFBLENBQXRCOzs7O0FBS0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQ3pCRCxRQUR5QixTQUN6QkEsUUFEeUI7QUFBQSxTQUc3QlgsaUJBQWlCLFdBQUlXLFFBQUosaUJBQTBCLGtCQUExQixDQUhZO0FBQUEsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGFsZXJ0Tm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHtcbiAgICAgICAgbmlja25hbWVcbiAgICB9KSA9PlxuICAgIGFsZXJ0Tm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGpvaW5lZGAsIFwicmdiKDg4LCA4NiwgMjE0KVwiKTtcblxuZXhwb3J0IGNvbnN0IGhhZG5sZURpc2Nvbm5ldGVkID0gKHtcbiAgICAgICAgbmlja25hbWVcbiAgICB9KSA9PlxuICAgIGFsZXJ0Tm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnRgLCBcInJnYigyNTUsIDU5LCA0OClcIik7Il19
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notification = require("./notification");

var _chat = require("./chat");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      _window$events = _window.events,
      newUser = _window$events.newUser,
      disconnected = _window$events.disconnected,
      newMsg = _window$events.newMsg;
  updateSocket(aSocket);
  aSocket.on(newUser, _notification.handleNewUser);
  aSocket.on(disconnected, _notification.hadnleDisconneted);
  aSocket.on(newMsg, _chat.handleNewMessage);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwibmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsIm5ld01zZyIsIm9uIiwiaGFuZGxlTmV3VXNlciIsImhhZG5sZURpc2Nvbm5ldGVkIiwiaGFuZGxlTmV3TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUlBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsT0FBTztBQUFBLFNBQUlILE1BQU0sR0FBR0csT0FBYjtBQUFBLENBQTVCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUQsT0FBTyxFQUFJO0FBQ2xDLGdCQU1JRSxNQU5KO0FBQUEsK0JBQ0lDLE1BREo7QUFBQSxNQUVRQyxPQUZSLGtCQUVRQSxPQUZSO0FBQUEsTUFHUUMsWUFIUixrQkFHUUEsWUFIUjtBQUFBLE1BSVFDLE1BSlIsa0JBSVFBLE1BSlI7QUFPQVAsRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDTyxFQUFSLENBQVdILE9BQVgsRUFBb0JJLDJCQUFwQjtBQUNBUixFQUFBQSxPQUFPLENBQUNPLEVBQVIsQ0FBV0YsWUFBWCxFQUF5QkksK0JBQXpCO0FBQ0FULEVBQUFBLE9BQU8sQ0FBQ08sRUFBUixDQUFXRCxNQUFYLEVBQW1CSSxzQkFBbkI7QUFDSCxDQVpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBoYW5kbGVOZXdVc2VyLFxuICAgIGhhZG5sZURpc2Nvbm5ldGVkXG59IGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCB7XG4gICAgaGFuZGxlTmV3TWVzc2FnZVxufSBmcm9tICcuL2NoYXQnO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2tldCA9IGFTb2NrZXQgPT4gc29ja2V0ID0gYVNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gYVNvY2tldCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIG5ld1VzZXIsXG4gICAgICAgICAgICBkaXNjb25uZWN0ZWQsXG4gICAgICAgICAgICBuZXdNc2dcbiAgICAgICAgfVxuICAgIH0gPSB3aW5kb3c7XG4gICAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xuICAgIGFTb2NrZXQub24obmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gICAgYVNvY2tldC5vbihkaXNjb25uZWN0ZWQsIGhhZG5sZURpc2Nvbm5ldGVkKTtcbiAgICBhU29ja2V0Lm9uKG5ld01zZywgaGFuZGxlTmV3TWVzc2FnZSk7XG59Il19
},{"./chat":1,"./notification":4}]},{},[2])