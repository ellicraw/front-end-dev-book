(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new ChatMessage({ message: 'pow!' });
    _wsClient2.default.sendMessage(message.serialize());
  });
  _wsClient2.default.registerMessageHandler(function (data) {
    console.log(data);
  });
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWixxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxxQkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQy9CLFFBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBQyxTQUFTLE1BQVYsRUFBaEIsQ0FBZDtBQUNBLHVCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0QsR0FIRDtBQUlBLHFCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3RDLFlBQVEsR0FBUixDQUFZLElBQVo7QUFDRCxHQUZEO0FBR0QsQzs7SUFHRyxXO0FBQ0osNkJBSUc7QUFBQSxRQUhRLENBR1IsUUFIRCxPQUdDO0FBQUEseUJBRkQsSUFFQztBQUFBLFFBRkssQ0FFTCw2QkFGTyxRQUVQO0FBQUEsOEJBREQsU0FDQztBQUFBLFFBRFUsQ0FDVixrQ0FEYSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDWjs7QUFBQTs7QUFDQyxTQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNIOzs7O2dDQUNXO0FBQ1YsYUFBTztBQUNMLGNBQU0sS0FBSyxJQUROO0FBRUwsaUJBQVMsS0FBSyxPQUZUO0FBR0wsbUJBQVcsS0FBSztBQUhYLE9BQVA7QUFLRDs7Ozs7O2tCQUVZLE87Ozs7O0FDakNmOzs7Ozs7QUFDQSxJQUFJLGFBQUo7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsV0FBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM1QyxTQUFPLE1BQVAsR0FBaUIsWUFBTTtBQUNyQixZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUMvQyxTQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDeEIsWUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixFQUFFLElBQXpCO0FBQ0EsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0Esb0JBQWdCLElBQWhCO0FBQ0QsR0FKRDtBQUtBOztBQUVGLFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBRWM7QUFDYixZQURhO0FBRWIsMENBRmE7QUFHYixnREFIYTtBQUliO0FBSmEsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xuXG5jbGFzcyBDaGF0QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcbiAgICBzb2NrZXQucmVnaXN0ZXJPcGVuSGFuZGxlcigoKSA9PiB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG5ldyBDaGF0TWVzc2FnZSh7bWVzc2FnZTogJ3BvdyEnfSk7XG4gICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XG4gICAgfSk7XG4gICAgc29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIG1lc3NhZ2U6IG0sXG4gICAgdXNlcjogdT0nYmF0bWFuJyxcbiAgICB0aW1lc3RhbXA6IHQ9KG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICB9KSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgICAgdGhpcy51c2VyID0gdTtcbiAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgfVxuICBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcbiAgICB9O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnXG5uZXcgQ2hhdEFwcCgpO1xuIiwibGV0IHNvY2tldDtcblxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICBzb2NrZXQub25vcGVuICA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICBzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUuZGF0YSk7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xuICB9O1xuIH1cblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCkge1xuICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCxcbiAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcbiAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcbiAgc2VuZE1lc3NhZ2Vcbn1cbiJdfQ==
