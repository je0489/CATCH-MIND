(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notification");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzUxZDUwODYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25cIjsiXX0=
},{"./login":2,"./notification":3,"./sockets":4}],2:[function(require,module,exports){
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
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = void 0;
var notifications = document.getElementById("jsNotifications");

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname, "just joined");
};

exports.handleNewUser = handleNewUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJub3RpZmljYXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUF0Qjs7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BRXZCO0FBQUEsTUFERkMsUUFDRSxRQURGQSxRQUNFO0FBQ0ZDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLEVBQXNCLGFBQXRCO0FBQ0gsQ0FKTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTm90aWZpY2F0aW9uc1wiKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoe1xuICAgIG5pY2tuYW1lXG59KSA9PiB7XG4gICAgY29uc29sZS5sb2cobmlja25hbWUsIFwianVzdCBqb2luZWRcIik7XG59Il19
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notification = require("./notification");

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
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notification.handleNewUser);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsT0FBTztBQUFBLFNBQUlILE1BQU0sR0FBR0csT0FBYjtBQUFBLENBQTVCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUQsT0FBTyxFQUFJO0FBQ2xDLGdCQUVJRSxNQUZKO0FBQUEsTUFDSUMsTUFESixXQUNJQSxNQURKO0FBR0FKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQywyQkFBM0I7QUFDSCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBoYW5kbGVOZXdVc2VyXG59IGZyb20gJy4vbm90aWZpY2F0aW9uJztcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSBhU29ja2V0ID0+IHNvY2tldCA9IGFTb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IGFTb2NrZXQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnRzXG4gICAgfSA9IHdpbmRvdztcbiAgICB1cGRhdGVTb2NrZXQoYVNvY2tldCk7XG4gICAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG59Il19
},{"./notification":3}]},{},[1])