import React, { useState, useEffect } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var CountdownWidget = function CountdownWidget(_ref) {
  var initialDuration = _ref.initialDuration,
    onComplete = _ref.onComplete;
  var _useState = useState(initialDuration),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    running = _useState4[0],
    setRunning = _useState4[1];
  useEffect(function () {
    if (!running) return;
    if (timeLeft <= 0) {
      onComplete === null || onComplete === void 0 || onComplete();
      setRunning(false);
      return;
    }
    var timer = setInterval(function () {
      setTimeLeft(function (prev) {
        return prev - 1;
      });
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [running, timeLeft]);
  var start = function start() {
    setTimeLeft(initialDuration);
    setRunning(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #ccc',
      padding: '1rem',
      width: '200px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", null, timeLeft, "s"), /*#__PURE__*/React.createElement("button", {
    onClick: start,
    disabled: running
  }, "Start"));
};

export { CountdownWidget, CountdownWidget as default };
//# sourceMappingURL=index.js.map
