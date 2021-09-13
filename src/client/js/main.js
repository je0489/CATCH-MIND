(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZGE2NGE5MmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjsiXX0=
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

var logIn = function logIn(nickname) {
  var _window = window,
      events = _window.events;
  window.socket = io("/");
  window.socket.emit(events.setNickname, {
    nickname: nickname
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsImxvZ0luIiwibmlja25hbWUiLCJ3aW5kb3ciLCJldmVudHMiLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJzZXROaWNrbmFtZSIsImNoZWNrTmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImV2bmV0IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLFFBQVEsRUFBSTtBQUN0QixnQkFFSUMsTUFGSjtBQUFBLE1BQ0lDLE1BREosV0FDSUEsTUFESjtBQUdBRCxFQUFBQSxNQUFNLENBQUNFLE1BQVAsR0FBZ0JDLEVBQUUsQ0FBQyxHQUFELENBQWxCO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjRSxJQUFkLENBQW1CSCxNQUFNLENBQUNJLFdBQTFCLEVBQXVDO0FBQ25DTixJQUFBQSxRQUFRLEVBQVJBO0FBRG1DLEdBQXZDO0FBR0gsQ0FSRDs7QUFVQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQStDO0FBQUEsTUFBOUNQLFFBQThDLHVFQUFuQ1EsWUFBWSxDQUFDQyxPQUFiLENBQXFCYixRQUFyQixDQUFtQztBQUNqRSxNQUFJSSxRQUFRLEtBQUssSUFBakIsRUFDSVQsSUFBSSxDQUFDbUIsU0FBTCxHQUFpQmIsVUFBakIsQ0FESixLQUVLO0FBQ0ROLElBQUFBLElBQUksQ0FBQ21CLFNBQUwsR0FBaUJaLFNBQWpCO0FBQ0FDLElBQUFBLEtBQUssQ0FBQ0MsUUFBRCxDQUFMO0FBQ0g7QUFDSixDQVBEOztBQVNBLElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsS0FBSyxFQUFJO0FBQzlCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdwQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQ0lzQixLQURKLEdBRUlELEtBRkosQ0FDSUMsS0FESjtBQUdBRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FQLEVBQUFBLFlBQVksQ0FBQ1EsT0FBYixDQUFxQnBCLFFBQXJCLEVBQStCbUIsS0FBL0I7QUFDQVIsRUFBQUEsYUFBYSxDQUFDUSxLQUFELENBQWI7QUFDSCxDQVREOztBQVdBUixhQUFhOztBQUNiLElBQUliLFNBQUosRUFBZTtBQUNYQSxFQUFBQSxTQUFTLENBQUN1QixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnRzXG4gICAgfSA9IHdpbmRvdztcbiAgICB3aW5kb3cuc29ja2V0ID0gaW8oXCIvXCIpO1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdChldmVudHMuc2V0Tmlja25hbWUsIHtcbiAgICAgICAgbmlja25hbWVcbiAgICB9KTtcbn1cblxuY29uc3QgY2hlY2tOaWNrbmFtZSA9IChuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKSkgPT4ge1xuICAgIGlmIChuaWNrbmFtZSA9PT0gbnVsbClcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xuICAgIGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgICAgICAgbG9nSW4obmlja25hbWUpO1xuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGV2bmV0ID0+IHtcbiAgICBldm5ldC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlXG4gICAgfSA9IGlucHV0O1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xuICAgIGNoZWNrTmlja25hbWUodmFsdWUpO1xufVxuXG5jaGVja05pY2tuYW1lKCk7XG5pZiAobG9naW5Gb3JtKSB7XG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59Il19
},{}]},{},[1])