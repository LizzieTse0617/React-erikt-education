function Nw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var ss =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var dd = {},
  xv = { exports: {} },
  Tt = {},
  wv = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja = Symbol.for('react.element'),
  Fw = Symbol.for('react.portal'),
  Ow = Symbol.for('react.fragment'),
  Vw = Symbol.for('react.strict_mode'),
  Ww = Symbol.for('react.profiler'),
  Uw = Symbol.for('react.provider'),
  Hw = Symbol.for('react.context'),
  Gw = Symbol.for('react.forward_ref'),
  Kw = Symbol.for('react.suspense'),
  Yw = Symbol.for('react.memo'),
  Xw = Symbol.for('react.lazy'),
  Wm = Symbol.iterator;
function Qw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Wm && e[Wm]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var kv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cv = Object.assign,
  Ev = {};
function si(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ev),
    (this.updater = n || kv);
}
si.prototype.isReactComponent = {};
si.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
si.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Pv() {}
Pv.prototype = si.prototype;
function Nf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ev),
    (this.updater = n || kv);
}
var Ff = (Nf.prototype = new Pv());
Ff.constructor = Nf;
Cv(Ff, si.prototype);
Ff.isPureReactComponent = !0;
var Um = Array.isArray,
  _v = Object.prototype.hasOwnProperty,
  Of = { current: null },
  Tv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      _v.call(t, r) && !Tv.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: ja,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Of.current,
  };
}
function qw(e, t) {
  return {
    $$typeof: ja,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ja;
}
function Zw(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Hm = /\/+/g;
function ic(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Zw('' + e.key)
    : t.toString(36);
}
function Ns(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ja:
          case Fw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + ic(a, 0) : r),
      Um(o)
        ? ((n = ''),
          e != null && (n = e.replace(Hm, '$&/') + '/'),
          Ns(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Vf(o) &&
            (o = qw(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Hm, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Um(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + ic(i, s);
      a += Ns(i, t, n, l, o);
    }
  else if (((l = Qw(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ic(i, s++)), (a += Ns(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function ls(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ns(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Jw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null },
  Fs = { transition: null },
  e2 = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: Fs,
    ReactCurrentOwner: Of,
  };
H.Children = {
  map: ls,
  forEach: function (e, t, n) {
    ls(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ls(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ls(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vf(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
H.Component = si;
H.Fragment = Ow;
H.Profiler = Ww;
H.PureComponent = Nf;
H.StrictMode = Vw;
H.Suspense = Kw;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e2;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Cv({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Of.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      _v.call(t, l) &&
        !Tv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ja, type: e.type, key: o, ref: i, props: r, _owner: a };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: Hw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Uw, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = Rv;
H.createFactory = function (e) {
  var t = Rv.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: Gw, render: e };
};
H.isValidElement = Vf;
H.lazy = function (e) {
  return { $$typeof: Xw, _payload: { _status: -1, _result: e }, _init: Jw };
};
H.memo = function (e, t) {
  return { $$typeof: Yw, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Fs.transition;
  Fs.transition = {};
  try {
    e();
  } finally {
    Fs.transition = t;
  }
};
H.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
H.useCallback = function (e, t) {
  return it.current.useCallback(e, t);
};
H.useContext = function (e) {
  return it.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return it.current.useEffect(e, t);
};
H.useId = function () {
  return it.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return it.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return it.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return it.current.useRef(e);
};
H.useState = function (e) {
  return it.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return it.current.useTransition();
};
H.version = '18.2.0';
wv.exports = H;
var S = wv.exports;
const w = Df(S),
  Gm = Nw({ __proto__: null, default: w }, [S]);
var Av = { exports: {} },
  $v = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, V) {
    var U = L.length;
    L.push(V);
    e: for (; 0 < U; ) {
      var W = (U - 1) >>> 1,
        ue = L[W];
      if (0 < o(ue, V)) (L[W] = V), (L[U] = ue), (U = W);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var V = L[0],
      U = L.pop();
    if (U !== V) {
      L[0] = U;
      e: for (var W = 0, ue = L.length, Y = ue >>> 1; W < Y; ) {
        var yt = 2 * (W + 1) - 1,
          Nn = L[yt],
          Le = yt + 1,
          Jt = L[Le];
        if (0 > o(Nn, U))
          Le < ue && 0 > o(Jt, Nn)
            ? ((L[W] = Jt), (L[Le] = U), (W = Le))
            : ((L[W] = Nn), (L[yt] = U), (W = yt));
        else if (Le < ue && 0 > o(Jt, U)) (L[W] = Jt), (L[Le] = U), (W = Le);
        else break e;
      }
    }
    return V;
  }
  function o(L, V) {
    var U = L.sortIndex - V.sortIndex;
    return U !== 0 ? U : L.id - V.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    y = !1,
    b = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= L)
        r(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = n(u);
    }
  }
  function C(L) {
    if (((b = !1), g(L), !y))
      if (n(l) !== null) (y = !0), lt(_);
      else {
        var V = n(u);
        V !== null && zt(C, V.startTime - L);
      }
  }
  function _(L, V) {
    (y = !1), b && ((b = !1), p($), ($ = -1)), (m = !0);
    var U = f;
    try {
      for (
        g(V), d = n(l);
        d !== null && (!(d.expirationTime > V) || (L && !be()));

      ) {
        var W = d.callback;
        if (typeof W == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var ue = W(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof ue == 'function' ? (d.callback = ue) : d === n(l) && r(l),
            g(V);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var yt = n(u);
        yt !== null && zt(C, yt.startTime - V), (Y = !1);
      }
      return Y;
    } finally {
      (d = null), (f = U), (m = !1);
    }
  }
  var A = !1,
    T = null,
    $ = -1,
    j = 5,
    B = -1;
  function be() {
    return !(e.unstable_now() - B < j);
  }
  function Ke() {
    if (T !== null) {
      var L = e.unstable_now();
      B = L;
      var V = !0;
      try {
        V = T(!0, L);
      } finally {
        V ? st() : ((A = !1), (T = null));
      }
    } else A = !1;
  }
  var st;
  if (typeof h == 'function')
    st = function () {
      h(Ke);
    };
  else if (typeof MessageChannel < 'u') {
    var Se = new MessageChannel(),
      xe = Se.port2;
    (Se.port1.onmessage = Ke),
      (st = function () {
        xe.postMessage(null);
      });
  } else
    st = function () {
      E(Ke, 0);
    };
  function lt(L) {
    (T = L), A || ((A = !0), st());
  }
  function zt(L, V) {
    $ = E(function () {
      L(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), lt(_));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (j = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var U = f;
      f = V;
      try {
        return L();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, V) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var U = f;
      f = L;
      try {
        return V();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (L, V, U) {
      var W = e.unstable_now();
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? W + U : W))
          : (U = W),
        L)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = U + ue),
        (L = {
          id: c++,
          callback: V,
          priorityLevel: L,
          startTime: U,
          expirationTime: ue,
          sortIndex: -1,
        }),
        U > W
          ? ((L.sortIndex = U),
            t(u, L),
            n(l) === null &&
              L === n(u) &&
              (b ? (p($), ($ = -1)) : (b = !0), zt(C, U - W)))
          : ((L.sortIndex = ue), t(l, L), y || m || ((y = !0), lt(_))),
        L
      );
    }),
    (e.unstable_shouldYield = be),
    (e.unstable_wrapCallback = function (L) {
      var V = f;
      return function () {
        var U = f;
        f = V;
        try {
          return L.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})($v);
Av.exports = $v;
var t2 = Av.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zv = S,
  Pt = t2;
function z(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Lv = new Set(),
  aa = {};
function oo(e, t) {
  Qo(e, t), Qo(e + 'Capture', t);
}
function Qo(e, t) {
  for (aa[e] = t, e = 0; e < t.length; e++) Lv.add(t[e]);
}
var zn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  fd = Object.prototype.hasOwnProperty,
  n2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Km = {},
  Ym = {};
function r2(e) {
  return fd.call(Ym, e)
    ? !0
    : fd.call(Km, e)
    ? !1
    : n2.test(e)
    ? (Ym[e] = !0)
    : ((Km[e] = !0), !1);
}
function o2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function i2(e, t, n, r) {
  if (t === null || typeof t > 'u' || o2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function at(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ge = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new at(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ge[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ge[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ge[e] = new at(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ge[e] = new at(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ge[e] = new at(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ge[e] = new at(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ge[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wf = /[\-:]([a-z])/g;
function Uf(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wf, Uf);
    Ge[t] = new at(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wf, Uf);
    Ge[t] = new at(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Wf, Uf);
  Ge[t] = new at(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ge[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new at(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ge[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hf(e, t, n, r) {
  var o = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (i2(t, n, o, r) && (n = null),
    r || o === null
      ? r2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dn = zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  us = Symbol.for('react.element'),
  xo = Symbol.for('react.portal'),
  wo = Symbol.for('react.fragment'),
  Gf = Symbol.for('react.strict_mode'),
  hd = Symbol.for('react.profiler'),
  Mv = Symbol.for('react.provider'),
  Iv = Symbol.for('react.context'),
  Kf = Symbol.for('react.forward_ref'),
  md = Symbol.for('react.suspense'),
  pd = Symbol.for('react.suspense_list'),
  Yf = Symbol.for('react.memo'),
  Kn = Symbol.for('react.lazy'),
  Bv = Symbol.for('react.offscreen'),
  Xm = Symbol.iterator;
function pi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xm && e[Xm]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ee = Object.assign,
  ac;
function Ri(e) {
  if (ac === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ac = (t && t[1]) || '';
    }
  return (
    `
` +
    ac +
    e
  );
}
var sc = !1;
function lc(e, t) {
  if (!e || sc) return '';
  sc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (sc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ri(e) : '';
}
function a2(e) {
  switch (e.tag) {
    case 5:
      return Ri(e.type);
    case 16:
      return Ri('Lazy');
    case 13:
      return Ri('Suspense');
    case 19:
      return Ri('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = lc(e.type, !1)), e;
    case 11:
      return (e = lc(e.type.render, !1)), e;
    case 1:
      return (e = lc(e.type, !0)), e;
    default:
      return '';
  }
}
function gd(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case wo:
      return 'Fragment';
    case xo:
      return 'Portal';
    case hd:
      return 'Profiler';
    case Gf:
      return 'StrictMode';
    case md:
      return 'Suspense';
    case pd:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Iv:
        return (e.displayName || 'Context') + '.Consumer';
      case Mv:
        return (e._context.displayName || 'Context') + '.Provider';
      case Kf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Yf:
        return (
          (t = e.displayName || null), t !== null ? t : gd(e.type) || 'Memo'
        );
      case Kn:
        (t = e._payload), (e = e._init);
        try {
          return gd(e(t));
        } catch {}
    }
  return null;
}
function s2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return gd(t);
    case 8:
      return t === Gf ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function pr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function jv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function l2(e) {
  var t = jv(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function cs(e) {
  e._valueTracker || (e._valueTracker = l2(e));
}
function Dv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = jv(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vd(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Nv(e, t) {
  (t = t.checked), t != null && Hf(e, 'checked', t, !1);
}
function yd(e, t) {
  Nv(e, t);
  var n = pr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? bd(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && bd(e, t.type, pr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qm(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function bd(e, t, n) {
  (t !== 'number' || fl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ai = Array.isArray;
function Do(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + pr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Zm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (Ai(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: pr(n) };
}
function Fv(e, t) {
  var n = pr(t.value),
    r = pr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Jm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ov(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function xd(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ov(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ds,
  Vv = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ds = ds || document.createElement('div'),
          ds.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ds.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function sa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ni = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  u2 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ni).forEach(function (e) {
  u2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ni[t] = Ni[e]);
  });
});
function Wv(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ni.hasOwnProperty(e) && Ni[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Uv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Wv(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var c2 = Ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wd(e, t) {
  if (t) {
    if (c2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(z(62));
  }
}
function kd(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Cd = null;
function Xf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ed = null,
  No = null,
  Fo = null;
function ep(e) {
  if ((e = Fa(e))) {
    if (typeof Ed != 'function') throw Error(z(280));
    var t = e.stateNode;
    t && ((t = au(t)), Ed(e.stateNode, e.type, t));
  }
}
function Hv(e) {
  No ? (Fo ? Fo.push(e) : (Fo = [e])) : (No = e);
}
function Gv() {
  if (No) {
    var e = No,
      t = Fo;
    if (((Fo = No = null), ep(e), t)) for (e = 0; e < t.length; e++) ep(t[e]);
  }
}
function Kv(e, t) {
  return e(t);
}
function Yv() {}
var uc = !1;
function Xv(e, t, n) {
  if (uc) return e(t, n);
  uc = !0;
  try {
    return Kv(e, t, n);
  } finally {
    (uc = !1), (No !== null || Fo !== null) && (Yv(), Gv());
  }
}
function la(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = au(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(z(231, t, typeof n));
  return n;
}
var Pd = !1;
if (zn)
  try {
    var gi = {};
    Object.defineProperty(gi, 'passive', {
      get: function () {
        Pd = !0;
      },
    }),
      window.addEventListener('test', gi, gi),
      window.removeEventListener('test', gi, gi);
  } catch {
    Pd = !1;
  }
function d2(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fi = !1,
  hl = null,
  ml = !1,
  _d = null,
  f2 = {
    onError: function (e) {
      (Fi = !0), (hl = e);
    },
  };
function h2(e, t, n, r, o, i, a, s, l) {
  (Fi = !1), (hl = null), d2.apply(f2, arguments);
}
function m2(e, t, n, r, o, i, a, s, l) {
  if ((h2.apply(this, arguments), Fi)) {
    if (Fi) {
      var u = hl;
      (Fi = !1), (hl = null);
    } else throw Error(z(198));
    ml || ((ml = !0), (_d = u));
  }
}
function io(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tp(e) {
  if (io(e) !== e) throw Error(z(188));
}
function p2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = io(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return tp(o), e;
        if (i === r) return tp(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function qv(e) {
  return (e = p2(e)), e !== null ? Zv(e) : null;
}
function Zv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jv = Pt.unstable_scheduleCallback,
  np = Pt.unstable_cancelCallback,
  g2 = Pt.unstable_shouldYield,
  v2 = Pt.unstable_requestPaint,
  _e = Pt.unstable_now,
  y2 = Pt.unstable_getCurrentPriorityLevel,
  Qf = Pt.unstable_ImmediatePriority,
  ey = Pt.unstable_UserBlockingPriority,
  pl = Pt.unstable_NormalPriority,
  b2 = Pt.unstable_LowPriority,
  ty = Pt.unstable_IdlePriority,
  nu = null,
  dn = null;
function S2(e) {
  if (dn && typeof dn.onCommitFiberRoot == 'function')
    try {
      dn.onCommitFiberRoot(nu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xt = Math.clz32 ? Math.clz32 : k2,
  x2 = Math.log,
  w2 = Math.LN2;
function k2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((x2(e) / w2) | 0)) | 0;
}
var fs = 64,
  hs = 4194304;
function $i(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = $i(s)) : ((i &= a), i !== 0 && (r = $i(i)));
  } else (a = n & ~o), a !== 0 ? (r = $i(a)) : i !== 0 && (r = $i(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function C2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function E2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Xt(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = C2(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Td(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ny() {
  var e = fs;
  return (fs <<= 1), !(fs & 4194240) && (fs = 64), e;
}
function cc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Da(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xt(t)),
    (e[t] = n);
}
function P2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function qf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function ry(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var oy,
  Zf,
  iy,
  ay,
  sy,
  Rd = !1,
  ms = [],
  rr = null,
  or = null,
  ir = null,
  ua = new Map(),
  ca = new Map(),
  Qn = [],
  _2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function rp(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      or = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ir = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ua.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ca.delete(t.pointerId);
  }
}
function vi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Fa(t)), t !== null && Zf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function T2(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (rr = vi(rr, e, t, n, r, o)), !0;
    case 'dragenter':
      return (or = vi(or, e, t, n, r, o)), !0;
    case 'mouseover':
      return (ir = vi(ir, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return ua.set(i, vi(ua.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), ca.set(i, vi(ca.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ly(e) {
  var t = Or(e.target);
  if (t !== null) {
    var n = io(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qv(n)), t !== null)) {
          (e.blockedOn = t),
            sy(e.priority, function () {
              iy(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Os(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ad(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cd = r), n.target.dispatchEvent(r), (Cd = null);
    } else return (t = Fa(n)), t !== null && Zf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function op(e, t, n) {
  Os(e) && n.delete(t);
}
function R2() {
  (Rd = !1),
    rr !== null && Os(rr) && (rr = null),
    or !== null && Os(or) && (or = null),
    ir !== null && Os(ir) && (ir = null),
    ua.forEach(op),
    ca.forEach(op);
}
function yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rd ||
      ((Rd = !0),
      Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, R2)));
}
function da(e) {
  function t(o) {
    return yi(o, e);
  }
  if (0 < ms.length) {
    yi(ms[0], e);
    for (var n = 1; n < ms.length; n++) {
      var r = ms[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rr !== null && yi(rr, e),
      or !== null && yi(or, e),
      ir !== null && yi(ir, e),
      ua.forEach(t),
      ca.forEach(t),
      n = 0;
    n < Qn.length;
    n++
  )
    (r = Qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
    ly(n), n.blockedOn === null && Qn.shift();
}
var Oo = Dn.ReactCurrentBatchConfig,
  vl = !0;
function A2(e, t, n, r) {
  var o = oe,
    i = Oo.transition;
  Oo.transition = null;
  try {
    (oe = 1), Jf(e, t, n, r);
  } finally {
    (oe = o), (Oo.transition = i);
  }
}
function $2(e, t, n, r) {
  var o = oe,
    i = Oo.transition;
  Oo.transition = null;
  try {
    (oe = 4), Jf(e, t, n, r);
  } finally {
    (oe = o), (Oo.transition = i);
  }
}
function Jf(e, t, n, r) {
  if (vl) {
    var o = Ad(e, t, n, r);
    if (o === null) Sc(e, t, r, yl, n), rp(e, r);
    else if (T2(o, e, t, n, r)) r.stopPropagation();
    else if ((rp(e, r), t & 4 && -1 < _2.indexOf(e))) {
      for (; o !== null; ) {
        var i = Fa(o);
        if (
          (i !== null && oy(i),
          (i = Ad(e, t, n, r)),
          i === null && Sc(e, t, r, yl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Sc(e, t, r, null, n);
  }
}
var yl = null;
function Ad(e, t, n, r) {
  if (((yl = null), (e = Xf(r)), (e = Or(e)), e !== null))
    if (((t = io(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (yl = e), null;
}
function uy(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (y2()) {
        case Qf:
          return 1;
        case ey:
          return 4;
        case pl:
        case b2:
          return 16;
        case ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jn = null,
  eh = null,
  Vs = null;
function cy() {
  if (Vs) return Vs;
  var e,
    t = eh,
    n = t.length,
    r,
    o = 'value' in Jn ? Jn.value : Jn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Vs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ws(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ps() {
  return !0;
}
function ip() {
  return !1;
}
function Rt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ps
        : ip),
      (this.isPropagationStopped = ip),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ps));
      },
      persist: function () {},
      isPersistent: ps,
    }),
    t
  );
}
var li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  th = Rt(li),
  Na = Ee({}, li, { view: 0, detail: 0 }),
  z2 = Rt(Na),
  dc,
  fc,
  bi,
  ru = Ee({}, Na, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== bi &&
            (bi && e.type === 'mousemove'
              ? ((dc = e.screenX - bi.screenX), (fc = e.screenY - bi.screenY))
              : (fc = dc = 0),
            (bi = e)),
          dc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : fc;
    },
  }),
  ap = Rt(ru),
  L2 = Ee({}, ru, { dataTransfer: 0 }),
  M2 = Rt(L2),
  I2 = Ee({}, Na, { relatedTarget: 0 }),
  hc = Rt(I2),
  B2 = Ee({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  j2 = Rt(B2),
  D2 = Ee({}, li, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  N2 = Rt(D2),
  F2 = Ee({}, li, { data: 0 }),
  sp = Rt(F2),
  O2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  V2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  W2 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function U2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = W2[e]) ? !!t[e] : !1;
}
function nh() {
  return U2;
}
var H2 = Ee({}, Na, {
    key: function (e) {
      if (e.key) {
        var t = O2[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ws(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? V2[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nh,
    charCode: function (e) {
      return e.type === 'keypress' ? Ws(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ws(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  G2 = Rt(H2),
  K2 = Ee({}, ru, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  lp = Rt(K2),
  Y2 = Ee({}, Na, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nh,
  }),
  X2 = Rt(Y2),
  Q2 = Ee({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q2 = Rt(Q2),
  Z2 = Ee({}, ru, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  J2 = Rt(Z2),
  ek = [9, 13, 27, 32],
  rh = zn && 'CompositionEvent' in window,
  Oi = null;
zn && 'documentMode' in document && (Oi = document.documentMode);
var tk = zn && 'TextEvent' in window && !Oi,
  dy = zn && (!rh || (Oi && 8 < Oi && 11 >= Oi)),
  up = String.fromCharCode(32),
  cp = !1;
function fy(e, t) {
  switch (e) {
    case 'keyup':
      return ek.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function hy(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ko = !1;
function nk(e, t) {
  switch (e) {
    case 'compositionend':
      return hy(t);
    case 'keypress':
      return t.which !== 32 ? null : ((cp = !0), up);
    case 'textInput':
      return (e = t.data), e === up && cp ? null : e;
    default:
      return null;
  }
}
function rk(e, t) {
  if (ko)
    return e === 'compositionend' || (!rh && fy(e, t))
      ? ((e = cy()), (Vs = eh = Jn = null), (ko = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return dy && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var ok = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!ok[e.type] : t === 'textarea';
}
function my(e, t, n, r) {
  Hv(r),
    (t = bl(t, 'onChange')),
    0 < t.length &&
      ((n = new th('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vi = null,
  fa = null;
function ik(e) {
  Ey(e, 0);
}
function ou(e) {
  var t = Po(e);
  if (Dv(t)) return e;
}
function ak(e, t) {
  if (e === 'change') return t;
}
var py = !1;
if (zn) {
  var mc;
  if (zn) {
    var pc = 'oninput' in document;
    if (!pc) {
      var fp = document.createElement('div');
      fp.setAttribute('oninput', 'return;'),
        (pc = typeof fp.oninput == 'function');
    }
    mc = pc;
  } else mc = !1;
  py = mc && (!document.documentMode || 9 < document.documentMode);
}
function hp() {
  Vi && (Vi.detachEvent('onpropertychange', gy), (fa = Vi = null));
}
function gy(e) {
  if (e.propertyName === 'value' && ou(fa)) {
    var t = [];
    my(t, fa, e, Xf(e)), Xv(ik, t);
  }
}
function sk(e, t, n) {
  e === 'focusin'
    ? (hp(), (Vi = t), (fa = n), Vi.attachEvent('onpropertychange', gy))
    : e === 'focusout' && hp();
}
function lk(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ou(fa);
}
function uk(e, t) {
  if (e === 'click') return ou(t);
}
function ck(e, t) {
  if (e === 'input' || e === 'change') return ou(t);
}
function dk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Zt = typeof Object.is == 'function' ? Object.is : dk;
function ha(e, t) {
  if (Zt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fd.call(t, o) || !Zt(e[o], t[o])) return !1;
  }
  return !0;
}
function mp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pp(e, t) {
  var n = mp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mp(n);
  }
}
function vy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? vy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function yy() {
  for (var e = window, t = fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fl(e.document);
  }
  return t;
}
function oh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function fk(e) {
  var t = yy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = pp(n, i));
        var a = pp(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var hk = zn && 'documentMode' in document && 11 >= document.documentMode,
  Co = null,
  $d = null,
  Wi = null,
  zd = !1;
function gp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zd ||
    Co == null ||
    Co !== fl(r) ||
    ((r = Co),
    'selectionStart' in r && oh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wi && ha(Wi, r)) ||
      ((Wi = r),
      (r = bl($d, 'onSelect')),
      0 < r.length &&
        ((t = new th('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Co))));
}
function gs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Eo = {
    animationend: gs('Animation', 'AnimationEnd'),
    animationiteration: gs('Animation', 'AnimationIteration'),
    animationstart: gs('Animation', 'AnimationStart'),
    transitionend: gs('Transition', 'TransitionEnd'),
  },
  gc = {},
  by = {};
zn &&
  ((by = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Eo.animationend.animation,
    delete Eo.animationiteration.animation,
    delete Eo.animationstart.animation),
  'TransitionEvent' in window || delete Eo.transitionend.transition);
function iu(e) {
  if (gc[e]) return gc[e];
  if (!Eo[e]) return e;
  var t = Eo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in by) return (gc[e] = t[n]);
  return e;
}
var Sy = iu('animationend'),
  xy = iu('animationiteration'),
  wy = iu('animationstart'),
  ky = iu('transitionend'),
  Cy = new Map(),
  vp =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function yr(e, t) {
  Cy.set(e, t), oo(t, [e]);
}
for (var vc = 0; vc < vp.length; vc++) {
  var yc = vp[vc],
    mk = yc.toLowerCase(),
    pk = yc[0].toUpperCase() + yc.slice(1);
  yr(mk, 'on' + pk);
}
yr(Sy, 'onAnimationEnd');
yr(xy, 'onAnimationIteration');
yr(wy, 'onAnimationStart');
yr('dblclick', 'onDoubleClick');
yr('focusin', 'onFocus');
yr('focusout', 'onBlur');
yr(ky, 'onTransitionEnd');
Qo('onMouseEnter', ['mouseout', 'mouseover']);
Qo('onMouseLeave', ['mouseout', 'mouseover']);
Qo('onPointerEnter', ['pointerout', 'pointerover']);
Qo('onPointerLeave', ['pointerout', 'pointerover']);
oo(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
oo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
oo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
oo(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
oo(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
oo(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var zi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  gk = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zi));
function yp(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), m2(r, t, void 0, e), (e.currentTarget = null);
}
function Ey(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          yp(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          yp(o, s, u), (i = l);
        }
    }
  }
  if (ml) throw ((e = _d), (ml = !1), (_d = null), e);
}
function ce(e, t) {
  var n = t[jd];
  n === void 0 && (n = t[jd] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Py(t, e, 2, !1), n.add(r));
}
function bc(e, t, n) {
  var r = 0;
  t && (r |= 4), Py(n, e, r, t);
}
var vs = '_reactListening' + Math.random().toString(36).slice(2);
function ma(e) {
  if (!e[vs]) {
    (e[vs] = !0),
      Lv.forEach(function (n) {
        n !== 'selectionchange' && (gk.has(n) || bc(n, !1, e), bc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vs] || ((t[vs] = !0), bc('selectionchange', !1, t));
  }
}
function Py(e, t, n, r) {
  switch (uy(t)) {
    case 1:
      var o = A2;
      break;
    case 4:
      o = $2;
      break;
    default:
      o = Jf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Pd ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Sc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Or(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Xv(function () {
    var u = i,
      c = Xf(n),
      d = [];
    e: {
      var f = Cy.get(e);
      if (f !== void 0) {
        var m = th,
          y = e;
        switch (e) {
          case 'keypress':
            if (Ws(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = G2;
            break;
          case 'focusin':
            (y = 'focus'), (m = hc);
            break;
          case 'focusout':
            (y = 'blur'), (m = hc);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = hc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = ap;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = M2;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = X2;
            break;
          case Sy:
          case xy:
          case wy:
            m = j2;
            break;
          case ky:
            m = q2;
            break;
          case 'scroll':
            m = z2;
            break;
          case 'wheel':
            m = J2;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = N2;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = lp;
        }
        var b = (t & 4) !== 0,
          E = !b && e === 'scroll',
          p = b ? (f !== null ? f + 'Capture' : null) : f;
        b = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              p !== null && ((C = la(h, p)), C != null && b.push(pa(h, C, g)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < b.length &&
          ((f = new m(f, y, null, n, c)), d.push({ event: f, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== Cd &&
            (y = n.relatedTarget || n.fromElement) &&
            (Or(y) || y[Ln]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Or(y) : null),
              y !== null &&
                ((E = io(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((b = ap),
            (C = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((b = lp),
              (C = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (E = m == null ? f : Po(m)),
            (g = y == null ? f : Po(y)),
            (f = new b(C, h + 'leave', m, n, c)),
            (f.target = E),
            (f.relatedTarget = g),
            (C = null),
            Or(c) === u &&
              ((b = new b(p, h + 'enter', y, n, c)),
              (b.target = g),
              (b.relatedTarget = E),
              (C = b)),
            (E = C),
            m && y)
          )
            t: {
              for (b = m, p = y, h = 0, g = b; g; g = vo(g)) h++;
              for (g = 0, C = p; C; C = vo(C)) g++;
              for (; 0 < h - g; ) (b = vo(b)), h--;
              for (; 0 < g - h; ) (p = vo(p)), g--;
              for (; h--; ) {
                if (b === p || (p !== null && b === p.alternate)) break t;
                (b = vo(b)), (p = vo(p));
              }
              b = null;
            }
          else b = null;
          m !== null && bp(d, f, m, b, !1),
            y !== null && E !== null && bp(d, E, y, b, !0);
        }
      }
      e: {
        if (
          ((f = u ? Po(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var _ = ak;
        else if (dp(f))
          if (py) _ = ck;
          else {
            _ = lk;
            var A = sk;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (_ = uk);
        if (_ && (_ = _(e, u))) {
          my(d, _, n, c);
          break e;
        }
        A && A(e, f, u),
          e === 'focusout' &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === 'number' &&
            bd(f, 'number', f.value);
      }
      switch (((A = u ? Po(u) : window), e)) {
        case 'focusin':
          (dp(A) || A.contentEditable === 'true') &&
            ((Co = A), ($d = u), (Wi = null));
          break;
        case 'focusout':
          Wi = $d = Co = null;
          break;
        case 'mousedown':
          zd = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (zd = !1), gp(d, n, c);
          break;
        case 'selectionchange':
          if (hk) break;
        case 'keydown':
        case 'keyup':
          gp(d, n, c);
      }
      var T;
      if (rh)
        e: {
          switch (e) {
            case 'compositionstart':
              var $ = 'onCompositionStart';
              break e;
            case 'compositionend':
              $ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              $ = 'onCompositionUpdate';
              break e;
          }
          $ = void 0;
        }
      else
        ko
          ? fy(e, n) && ($ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && ($ = 'onCompositionStart');
      $ &&
        (dy &&
          n.locale !== 'ko' &&
          (ko || $ !== 'onCompositionStart'
            ? $ === 'onCompositionEnd' && ko && (T = cy())
            : ((Jn = c),
              (eh = 'value' in Jn ? Jn.value : Jn.textContent),
              (ko = !0))),
        (A = bl(u, $)),
        0 < A.length &&
          (($ = new sp($, e, null, n, c)),
          d.push({ event: $, listeners: A }),
          T ? ($.data = T) : ((T = hy(n)), T !== null && ($.data = T)))),
        (T = tk ? nk(e, n) : rk(e, n)) &&
          ((u = bl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new sp('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Ey(d, t);
  });
}
function pa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = la(e, n)),
      i != null && r.unshift(pa(e, i, o)),
      (i = la(e, t)),
      i != null && r.push(pa(e, i, o))),
      (e = e.return);
  }
  return r;
}
function vo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bp(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = la(n, i)), l != null && a.unshift(pa(n, l, s)))
        : o || ((l = la(n, i)), l != null && a.push(pa(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var vk = /\r\n?/g,
  yk = /\u0000|\uFFFD/g;
function Sp(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      vk,
      `
`
    )
    .replace(yk, '');
}
function ys(e, t, n) {
  if (((t = Sp(t)), Sp(e) !== t && n)) throw Error(z(425));
}
function Sl() {}
var Ld = null,
  Md = null;
function Id(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bd = typeof setTimeout == 'function' ? setTimeout : void 0,
  bk = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  xp = typeof Promise == 'function' ? Promise : void 0,
  Sk =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof xp < 'u'
      ? function (e) {
          return xp.resolve(null).then(e).catch(xk);
        }
      : Bd;
function xk(e) {
  setTimeout(function () {
    throw e;
  });
}
function xc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), da(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  da(t);
}
function ar(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function wp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ui = Math.random().toString(36).slice(2),
  un = '__reactFiber$' + ui,
  ga = '__reactProps$' + ui,
  Ln = '__reactContainer$' + ui,
  jd = '__reactEvents$' + ui,
  wk = '__reactListeners$' + ui,
  kk = '__reactHandles$' + ui;
function Or(e) {
  var t = e[un];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[un])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wp(e); e !== null; ) {
          if ((n = e[un])) return n;
          e = wp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fa(e) {
  return (
    (e = e[un] || e[Ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Po(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function au(e) {
  return e[ga] || null;
}
var Dd = [],
  _o = -1;
function br(e) {
  return { current: e };
}
function fe(e) {
  0 > _o || ((e.current = Dd[_o]), (Dd[_o] = null), _o--);
}
function se(e, t) {
  _o++, (Dd[_o] = e.current), (e.current = t);
}
var gr = {},
  Ze = br(gr),
  ht = br(!1),
  Zr = gr;
function qo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function mt(e) {
  return (e = e.childContextTypes), e != null;
}
function xl() {
  fe(ht), fe(Ze);
}
function kp(e, t, n) {
  if (Ze.current !== gr) throw Error(z(168));
  se(Ze, t), se(ht, n);
}
function _y(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, s2(e) || 'Unknown', o));
  return Ee({}, n, r);
}
function wl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gr),
    (Zr = Ze.current),
    se(Ze, e),
    se(ht, ht.current),
    !0
  );
}
function Cp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = _y(e, t, Zr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(ht),
      fe(Ze),
      se(Ze, e))
    : fe(ht),
    se(ht, n);
}
var xn = null,
  su = !1,
  wc = !1;
function Ty(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function Ck(e) {
  (su = !0), Ty(e);
}
function Sr() {
  if (!wc && xn !== null) {
    wc = !0;
    var e = 0,
      t = oe;
    try {
      var n = xn;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xn = null), (su = !1);
    } catch (o) {
      throw (xn !== null && (xn = xn.slice(e + 1)), Jv(Qf, Sr), o);
    } finally {
      (oe = t), (wc = !1);
    }
  }
  return null;
}
var To = [],
  Ro = 0,
  kl = null,
  Cl = 0,
  jt = [],
  Dt = 0,
  Jr = null,
  Cn = 1,
  En = '';
function Ir(e, t) {
  (To[Ro++] = Cl), (To[Ro++] = kl), (kl = e), (Cl = t);
}
function Ry(e, t, n) {
  (jt[Dt++] = Cn), (jt[Dt++] = En), (jt[Dt++] = Jr), (Jr = e);
  var r = Cn;
  e = En;
  var o = 32 - Xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Xt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Cn = (1 << (32 - Xt(t) + o)) | (n << o) | r),
      (En = i + e);
  } else (Cn = (1 << i) | (n << o) | r), (En = e);
}
function ih(e) {
  e.return !== null && (Ir(e, 1), Ry(e, 1, 0));
}
function ah(e) {
  for (; e === kl; )
    (kl = To[--Ro]), (To[Ro] = null), (Cl = To[--Ro]), (To[Ro] = null);
  for (; e === Jr; )
    (Jr = jt[--Dt]),
      (jt[Dt] = null),
      (En = jt[--Dt]),
      (jt[Dt] = null),
      (Cn = jt[--Dt]),
      (jt[Dt] = null);
}
var kt = null,
  wt = null,
  ve = !1,
  Kt = null;
function Ay(e, t) {
  var n = Nt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ep(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (kt = e), (wt = ar(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (kt = e), (wt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jr !== null ? { id: Cn, overflow: En } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (kt = e),
            (wt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fd(e) {
  if (ve) {
    var t = wt;
    if (t) {
      var n = t;
      if (!Ep(e, t)) {
        if (Nd(e)) throw Error(z(418));
        t = ar(n.nextSibling);
        var r = kt;
        t && Ep(e, t)
          ? Ay(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (kt = e));
      }
    } else {
      if (Nd(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (kt = e);
    }
  }
}
function Pp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  kt = e;
}
function bs(e) {
  if (e !== kt) return !1;
  if (!ve) return Pp(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Id(e.type, e.memoizedProps))),
    t && (t = wt))
  ) {
    if (Nd(e)) throw ($y(), Error(z(418)));
    for (; t; ) Ay(e, t), (t = ar(t.nextSibling));
  }
  if ((Pp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              wt = ar(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      wt = null;
    }
  } else wt = kt ? ar(e.stateNode.nextSibling) : null;
  return !0;
}
function $y() {
  for (var e = wt; e; ) e = ar(e.nextSibling);
}
function Zo() {
  (wt = kt = null), (ve = !1);
}
function sh(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
var Ek = Dn.ReactCurrentBatchConfig;
function Ht(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var El = br(null),
  Pl = null,
  Ao = null,
  lh = null;
function uh() {
  lh = Ao = Pl = null;
}
function ch(e) {
  var t = El.current;
  fe(El), (e._currentValue = t);
}
function Od(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vo(e, t) {
  (Pl = e),
    (lh = Ao = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ft = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if (lh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ao === null)) {
      if (Pl === null) throw Error(z(308));
      (Ao = e), (Pl.dependencies = { lanes: 0, firstContext: e });
    } else Ao = Ao.next = e;
  return t;
}
var Vr = null;
function dh(e) {
  Vr === null ? (Vr = [e]) : Vr.push(e);
}
function zy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), dh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Mn(e, r)
  );
}
function Mn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yn = !1;
function fh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ly(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Mn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), dh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Mn(e, n)
  );
}
function Us(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qf(e, n);
  }
}
function _p(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function _l(e, t, n, r) {
  var o = e.updateQueue;
  Yn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        m = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            b = s;
          switch (((f = t), (m = n), b.tag)) {
            case 1:
              if (((y = b.payload), typeof y == 'function')) {
                d = y.call(m, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = b.payload),
                (f = typeof y == 'function' ? y.call(m, d, f) : y),
                f == null)
              )
                break e;
              d = Ee({}, d, f);
              break e;
            case 2:
              Yn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (to |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Tp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var My = new zv.Component().refs;
function Vd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? io(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      o = ur(e),
      i = Tn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = sr(e, i, o)),
      t !== null && (Qt(t, e, o, r), Us(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      o = ur(e),
      i = Tn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = sr(e, i, o)),
      t !== null && (Qt(t, e, o, r), Us(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = rt(),
      r = ur(e),
      o = Tn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = sr(e, o, r)),
      t !== null && (Qt(t, e, r, n), Us(t, e, r));
  },
};
function Rp(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ha(n, r) || !ha(o, i)
      : !0
  );
}
function Iy(e, t, n) {
  var r = !1,
    o = gr,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Ot(i))
      : ((o = mt(t) ? Zr : Ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qo(e, o) : gr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = lu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ap(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && lu.enqueueReplaceState(t, t.state, null);
}
function Wd(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = My), fh(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Ot(i))
    : ((i = mt(t) ? Zr : Ze.current), (o.context = qo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Vd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && lu.enqueueReplaceState(o, o.state, null),
      _l(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Si(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === My && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Ss(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function $p(e) {
  var t = e._init;
  return t(e._payload);
}
function By(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = cr(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, h, g, C) {
    return h === null || h.tag !== 6
      ? ((h = Rc(g, p.mode, C)), (h.return = p), h)
      : ((h = o(h, g)), (h.return = p), h);
  }
  function l(p, h, g, C) {
    var _ = g.type;
    return _ === wo
      ? c(p, h, g.props.children, C, g.key)
      : h !== null &&
        (h.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === Kn &&
            $p(_) === h.type))
      ? ((C = o(h, g.props)), (C.ref = Si(p, h, g)), (C.return = p), C)
      : ((C = Qs(g.type, g.key, g.props, null, p.mode, C)),
        (C.ref = Si(p, h, g)),
        (C.return = p),
        C);
  }
  function u(p, h, g, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Ac(g, p.mode, C)), (h.return = p), h)
      : ((h = o(h, g.children || [])), (h.return = p), h);
  }
  function c(p, h, g, C, _) {
    return h === null || h.tag !== 7
      ? ((h = Yr(g, p.mode, C, _)), (h.return = p), h)
      : ((h = o(h, g)), (h.return = p), h);
  }
  function d(p, h, g) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Rc('' + h, p.mode, g)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case us:
          return (
            (g = Qs(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = Si(p, null, h)),
            (g.return = p),
            g
          );
        case xo:
          return (h = Ac(h, p.mode, g)), (h.return = p), h;
        case Kn:
          var C = h._init;
          return d(p, C(h._payload), g);
      }
      if (Ai(h) || pi(h))
        return (h = Yr(h, p.mode, g, null)), (h.return = p), h;
      Ss(p, h);
    }
    return null;
  }
  function f(p, h, g, C) {
    var _ = h !== null ? h.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return _ !== null ? null : s(p, h, '' + g, C);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case us:
          return g.key === _ ? l(p, h, g, C) : null;
        case xo:
          return g.key === _ ? u(p, h, g, C) : null;
        case Kn:
          return (_ = g._init), f(p, h, _(g._payload), C);
      }
      if (Ai(g) || pi(g)) return _ !== null ? null : c(p, h, g, C, null);
      Ss(p, g);
    }
    return null;
  }
  function m(p, h, g, C, _) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (p = p.get(g) || null), s(h, p, '' + C, _);
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case us:
          return (p = p.get(C.key === null ? g : C.key) || null), l(h, p, C, _);
        case xo:
          return (p = p.get(C.key === null ? g : C.key) || null), u(h, p, C, _);
        case Kn:
          var A = C._init;
          return m(p, h, g, A(C._payload), _);
      }
      if (Ai(C) || pi(C)) return (p = p.get(g) || null), c(h, p, C, _, null);
      Ss(h, C);
    }
    return null;
  }
  function y(p, h, g, C) {
    for (
      var _ = null, A = null, T = h, $ = (h = 0), j = null;
      T !== null && $ < g.length;
      $++
    ) {
      T.index > $ ? ((j = T), (T = null)) : (j = T.sibling);
      var B = f(p, T, g[$], C);
      if (B === null) {
        T === null && (T = j);
        break;
      }
      e && T && B.alternate === null && t(p, T),
        (h = i(B, h, $)),
        A === null ? (_ = B) : (A.sibling = B),
        (A = B),
        (T = j);
    }
    if ($ === g.length) return n(p, T), ve && Ir(p, $), _;
    if (T === null) {
      for (; $ < g.length; $++)
        (T = d(p, g[$], C)),
          T !== null &&
            ((h = i(T, h, $)), A === null ? (_ = T) : (A.sibling = T), (A = T));
      return ve && Ir(p, $), _;
    }
    for (T = r(p, T); $ < g.length; $++)
      (j = m(T, p, $, g[$], C)),
        j !== null &&
          (e && j.alternate !== null && T.delete(j.key === null ? $ : j.key),
          (h = i(j, h, $)),
          A === null ? (_ = j) : (A.sibling = j),
          (A = j));
    return (
      e &&
        T.forEach(function (be) {
          return t(p, be);
        }),
      ve && Ir(p, $),
      _
    );
  }
  function b(p, h, g, C) {
    var _ = pi(g);
    if (typeof _ != 'function') throw Error(z(150));
    if (((g = _.call(g)), g == null)) throw Error(z(151));
    for (
      var A = (_ = null), T = h, $ = (h = 0), j = null, B = g.next();
      T !== null && !B.done;
      $++, B = g.next()
    ) {
      T.index > $ ? ((j = T), (T = null)) : (j = T.sibling);
      var be = f(p, T, B.value, C);
      if (be === null) {
        T === null && (T = j);
        break;
      }
      e && T && be.alternate === null && t(p, T),
        (h = i(be, h, $)),
        A === null ? (_ = be) : (A.sibling = be),
        (A = be),
        (T = j);
    }
    if (B.done) return n(p, T), ve && Ir(p, $), _;
    if (T === null) {
      for (; !B.done; $++, B = g.next())
        (B = d(p, B.value, C)),
          B !== null &&
            ((h = i(B, h, $)), A === null ? (_ = B) : (A.sibling = B), (A = B));
      return ve && Ir(p, $), _;
    }
    for (T = r(p, T); !B.done; $++, B = g.next())
      (B = m(T, p, $, B.value, C)),
        B !== null &&
          (e && B.alternate !== null && T.delete(B.key === null ? $ : B.key),
          (h = i(B, h, $)),
          A === null ? (_ = B) : (A.sibling = B),
          (A = B));
    return (
      e &&
        T.forEach(function (Ke) {
          return t(p, Ke);
        }),
      ve && Ir(p, $),
      _
    );
  }
  function E(p, h, g, C) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === wo &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case us:
          e: {
            for (var _ = g.key, A = h; A !== null; ) {
              if (A.key === _) {
                if (((_ = g.type), _ === wo)) {
                  if (A.tag === 7) {
                    n(p, A.sibling),
                      (h = o(A, g.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  A.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === Kn &&
                    $p(_) === A.type)
                ) {
                  n(p, A.sibling),
                    (h = o(A, g.props)),
                    (h.ref = Si(p, A, g)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, A);
                break;
              } else t(p, A);
              A = A.sibling;
            }
            g.type === wo
              ? ((h = Yr(g.props.children, p.mode, C, g.key)),
                (h.return = p),
                (p = h))
              : ((C = Qs(g.type, g.key, g.props, null, p.mode, C)),
                (C.ref = Si(p, h, g)),
                (C.return = p),
                (p = C));
          }
          return a(p);
        case xo:
          e: {
            for (A = g.key; h !== null; ) {
              if (h.key === A)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, g.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Ac(g, p.mode, C)), (h.return = p), (p = h);
          }
          return a(p);
        case Kn:
          return (A = g._init), E(p, h, A(g._payload), C);
      }
      if (Ai(g)) return y(p, h, g, C);
      if (pi(g)) return b(p, h, g, C);
      Ss(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, g)), (h.return = p), (p = h))
          : (n(p, h), (h = Rc(g, p.mode, C)), (h.return = p), (p = h)),
        a(p))
      : n(p, h);
  }
  return E;
}
var Jo = By(!0),
  jy = By(!1),
  Oa = {},
  fn = br(Oa),
  va = br(Oa),
  ya = br(Oa);
function Wr(e) {
  if (e === Oa) throw Error(z(174));
  return e;
}
function hh(e, t) {
  switch ((se(ya, t), se(va, e), se(fn, Oa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xd(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xd(t, e));
  }
  fe(fn), se(fn, t);
}
function ei() {
  fe(fn), fe(va), fe(ya);
}
function Dy(e) {
  Wr(ya.current);
  var t = Wr(fn.current),
    n = xd(t, e.type);
  t !== n && (se(va, e), se(fn, n));
}
function mh(e) {
  va.current === e && (fe(fn), fe(va));
}
var we = br(0);
function Tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var kc = [];
function ph() {
  for (var e = 0; e < kc.length; e++)
    kc[e]._workInProgressVersionPrimary = null;
  kc.length = 0;
}
var Hs = Dn.ReactCurrentDispatcher,
  Cc = Dn.ReactCurrentBatchConfig,
  eo = 0,
  Ce = null,
  Me = null,
  De = null,
  Rl = !1,
  Ui = !1,
  ba = 0,
  Pk = 0;
function Ye() {
  throw Error(z(321));
}
function gh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zt(e[n], t[n])) return !1;
  return !0;
}
function vh(e, t, n, r, o, i) {
  if (
    ((eo = i),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hs.current = e === null || e.memoizedState === null ? Ak : $k),
    (e = n(r, o)),
    Ui)
  ) {
    i = 0;
    do {
      if (((Ui = !1), (ba = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (De = Me = null),
        (t.updateQueue = null),
        (Hs.current = zk),
        (e = n(r, o));
    } while (Ui);
  }
  if (
    ((Hs.current = Al),
    (t = Me !== null && Me.next !== null),
    (eo = 0),
    (De = Me = Ce = null),
    (Rl = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function yh() {
  var e = ba !== 0;
  return (ba = 0), e;
}
function rn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return De === null ? (Ce.memoizedState = De = e) : (De = De.next = e), De;
}
function Vt() {
  if (Me === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = De === null ? Ce.memoizedState : De.next;
  if (t !== null) (De = t), (Me = e);
  else {
    if (e === null) throw Error(z(310));
    (Me = e),
      (e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null,
      }),
      De === null ? (Ce.memoizedState = De = e) : (De = De.next = e);
  }
  return De;
}
function Sa(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ec(e) {
  var t = Vt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = Me,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((eo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (Ce.lanes |= c),
          (to |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      Zt(r, t.memoizedState) || (ft = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ce.lanes |= i), (to |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pc(e) {
  var t = Vt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Zt(i, t.memoizedState) || (ft = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ny() {}
function Fy(e, t) {
  var n = Ce,
    r = Vt(),
    o = t(),
    i = !Zt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ft = !0)),
    (r = r.queue),
    bh(Wy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xa(9, Vy.bind(null, n, r, o, t), void 0, null),
      Fe === null)
    )
      throw Error(z(349));
    eo & 30 || Oy(n, t, o);
  }
  return o;
}
function Oy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Uy(t) && Hy(e);
}
function Wy(e, t, n) {
  return n(function () {
    Uy(t) && Hy(e);
  });
}
function Uy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zt(e, n);
  } catch {
    return !0;
  }
}
function Hy(e) {
  var t = Mn(e, 1);
  t !== null && Qt(t, e, 1, -1);
}
function zp(e) {
  var t = rn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rk.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function xa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gy() {
  return Vt().memoizedState;
}
function Gs(e, t, n, r) {
  var o = rn();
  (Ce.flags |= e),
    (o.memoizedState = xa(1 | t, n, void 0, r === void 0 ? null : r));
}
function uu(e, t, n, r) {
  var o = Vt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Me !== null) {
    var a = Me.memoizedState;
    if (((i = a.destroy), r !== null && gh(r, a.deps))) {
      o.memoizedState = xa(t, n, i, r);
      return;
    }
  }
  (Ce.flags |= e), (o.memoizedState = xa(1 | t, n, i, r));
}
function Lp(e, t) {
  return Gs(8390656, 8, e, t);
}
function bh(e, t) {
  return uu(2048, 8, e, t);
}
function Ky(e, t) {
  return uu(4, 2, e, t);
}
function Yy(e, t) {
  return uu(4, 4, e, t);
}
function Xy(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), uu(4, 4, Xy.bind(null, t, e), n)
  );
}
function Sh() {}
function qy(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zy(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jy(e, t, n) {
  return eo & 21
    ? (Zt(n, t) || ((n = ny()), (Ce.lanes |= n), (to |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = n));
}
function _k(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cc.transition;
  Cc.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (Cc.transition = r);
  }
}
function e1() {
  return Vt().memoizedState;
}
function Tk(e, t, n) {
  var r = ur(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    t1(e))
  )
    n1(t, n);
  else if (((n = zy(e, t, n, r)), n !== null)) {
    var o = rt();
    Qt(n, e, r, o), r1(n, t, r);
  }
}
function Rk(e, t, n) {
  var r = ur(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (t1(e)) n1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Zt(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), dh(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = zy(e, t, o, r)),
      n !== null && ((o = rt()), Qt(n, e, r, o), r1(n, t, r));
  }
}
function t1(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function n1(e, t) {
  Ui = Rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function r1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qf(e, n);
  }
}
var Al = {
    readContext: Ot,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useInsertionEffect: Ye,
    useLayoutEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useMutableSource: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    unstable_isNewReconciler: !1,
  },
  Ak = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (rn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: Lp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gs(4194308, 4, Xy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Tk.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zp,
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      return (rn().memoizedState = e);
    },
    useTransition: function () {
      var e = zp(!1),
        t = e[0];
      return (e = _k.bind(null, e[1])), (rn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        o = rn();
      if (ve) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), Fe === null)) throw Error(z(349));
        eo & 30 || Oy(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Lp(Wy.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        xa(9, Vy.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rn(),
        t = Fe.identifierPrefix;
      if (ve) {
        var n = En,
          r = Cn;
        (n = (r & ~(1 << (32 - Xt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ba++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Pk++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $k = {
    readContext: Ot,
    useCallback: qy,
    useContext: Ot,
    useEffect: bh,
    useImperativeHandle: Qy,
    useInsertionEffect: Ky,
    useLayoutEffect: Yy,
    useMemo: Zy,
    useReducer: Ec,
    useRef: Gy,
    useState: function () {
      return Ec(Sa);
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      var t = Vt();
      return Jy(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = Ec(Sa)[0],
        t = Vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ny,
    useSyncExternalStore: Fy,
    useId: e1,
    unstable_isNewReconciler: !1,
  },
  zk = {
    readContext: Ot,
    useCallback: qy,
    useContext: Ot,
    useEffect: bh,
    useImperativeHandle: Qy,
    useInsertionEffect: Ky,
    useLayoutEffect: Yy,
    useMemo: Zy,
    useReducer: Pc,
    useRef: Gy,
    useState: function () {
      return Pc(Sa);
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      var t = Vt();
      return Me === null ? (t.memoizedState = e) : Jy(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = Pc(Sa)[0],
        t = Vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ny,
    useSyncExternalStore: Fy,
    useId: e1,
    unstable_isNewReconciler: !1,
  };
function ti(e, t) {
  try {
    var n = '',
      r = t;
    do (n += a2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function _c(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ud(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lk = typeof WeakMap == 'function' ? WeakMap : Map;
function o1(e, t, n) {
  (n = Tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zl || ((zl = !0), (ef = r)), Ud(e, t);
    }),
    n
  );
}
function i1(e, t, n) {
  (n = Tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ud(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ud(e, t),
          typeof r != 'function' &&
            (lr === null ? (lr = new Set([this])) : lr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Mp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lk();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Kk.bind(null, e, t, n)), t.then(e, e));
}
function Ip(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tn(-1, 1)), (t.tag = 2), sr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Mk = Dn.ReactCurrentOwner,
  ft = !1;
function et(e, t, n, r) {
  t.child = e === null ? jy(t, null, n, r) : Jo(t, e.child, n, r);
}
function jp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Vo(t, o),
    (r = vh(e, t, n, r, i, o)),
    (n = yh()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        In(e, t, o))
      : (ve && n && ih(t), (t.flags |= 1), et(e, t, r, o), t.child)
  );
}
function Dp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Th(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), a1(e, t, i, r, o))
      : ((e = Qs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ha), n(a, r) && e.ref === t.ref)
    )
      return In(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = cr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function a1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ha(i, r) && e.ref === t.ref)
      if (((ft = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ft = !0);
      else return (t.lanes = e.lanes), In(e, t, o);
  }
  return Hd(e, t, n, r, o);
}
function s1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(zo, St),
        (St |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(zo, St),
          (St |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(zo, St),
        (St |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(zo, St),
      (St |= r);
  return et(e, t, o, n), t.child;
}
function l1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hd(e, t, n, r, o) {
  var i = mt(n) ? Zr : Ze.current;
  return (
    (i = qo(t, i)),
    Vo(t, o),
    (n = vh(e, t, n, r, i, o)),
    (r = yh()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        In(e, t, o))
      : (ve && r && ih(t), (t.flags |= 1), et(e, t, n, o), t.child)
  );
}
function Np(e, t, n, r, o) {
  if (mt(n)) {
    var i = !0;
    wl(t);
  } else i = !1;
  if ((Vo(t, o), t.stateNode === null))
    Ks(e, t), Iy(t, n, r), Wd(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ot(u))
      : ((u = mt(n) ? Zr : Ze.current), (u = qo(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && Ap(t, a, r, u)),
      (Yn = !1);
    var f = t.memoizedState;
    (a.state = f),
      _l(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || ht.current || Yn
        ? (typeof c == 'function' && (Vd(t, n, c, r), (l = t.memoizedState)),
          (s = Yn || Rp(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ly(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ht(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Ot(l))
        : ((l = mt(n) ? Zr : Ze.current), (l = qo(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || f !== l) && Ap(t, a, r, l)),
      (Yn = !1),
      (f = t.memoizedState),
      (a.state = f),
      _l(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || ht.current || Yn
      ? (typeof m == 'function' && (Vd(t, n, m, r), (y = t.memoizedState)),
        (u = Yn || Rp(t, n, u, r, f, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gd(e, t, n, r, i, o);
}
function Gd(e, t, n, r, o, i) {
  l1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Cp(t, n, !1), In(e, t, i);
  (r = t.stateNode), (Mk.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Jo(t, e.child, null, i)), (t.child = Jo(t, null, s, i)))
      : et(e, t, s, i),
    (t.memoizedState = r.state),
    o && Cp(t, n, !0),
    t.child
  );
}
function u1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? kp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kp(e, t.context, !1),
    hh(e, t.containerInfo);
}
function Fp(e, t, n, r, o) {
  return Zo(), sh(o), (t.flags |= 256), et(e, t, n, r), t.child;
}
var Kd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function c1(e, t, n) {
  var r = t.pendingProps,
    o = we.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    se(we, o & 1),
    e === null)
  )
    return (
      Fd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = fu(a, r, 0, null)),
              (e = Yr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Yd(n)),
              (t.memoizedState = Kd),
              e)
            : xh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Ik(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = cr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = cr(s, i)) : ((i = Yr(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Yd(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Kd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = cr(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function xh(e, t) {
  return (
    (t = fu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xs(e, t, n, r) {
  return (
    r !== null && sh(r),
    Jo(t, e.child, null, n),
    (e = xh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ik(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _c(Error(z(422)))), xs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = fu({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Yr(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Jo(t, e.child, null, a),
        (t.child.memoizedState = Yd(a)),
        (t.memoizedState = Kd),
        i);
  if (!(t.mode & 1)) return xs(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(z(419))), (r = _c(i, r, void 0)), xs(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), ft || s)) {
    if (((r = Fe), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Mn(e, o), Qt(r, e, o, -1));
    }
    return _h(), (r = _c(Error(z(421)))), xs(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Yk.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (wt = ar(o.nextSibling)),
      (kt = t),
      (ve = !0),
      (Kt = null),
      e !== null &&
        ((jt[Dt++] = Cn),
        (jt[Dt++] = En),
        (jt[Dt++] = Jr),
        (Cn = e.id),
        (En = e.overflow),
        (Jr = t)),
      (t = xh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Op(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Od(e.return, t, n);
}
function Tc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function d1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((et(e, t, r.children, n), (r = we.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Op(e, n, t);
        else if (e.tag === 19) Op(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(we, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Tl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Tc(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Tl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Tc(t, !0, n, null, i);
        break;
      case 'together':
        Tc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function In(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (to |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = cr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bk(e, t, n) {
  switch (t.tag) {
    case 3:
      u1(t), Zo();
      break;
    case 5:
      Dy(t);
      break;
    case 1:
      mt(t.type) && wl(t);
      break;
    case 4:
      hh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      se(El, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(we, we.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? c1(e, t, n)
          : (se(we, we.current & 1),
            (e = In(e, t, n)),
            e !== null ? e.sibling : null);
      se(we, we.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return d1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        se(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), s1(e, t, n);
  }
  return In(e, t, n);
}
var f1, Xd, h1, m1;
f1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xd = function () {};
h1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Wr(fn.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = vd(e, o)), (r = vd(e, r)), (i = []);
        break;
      case 'select':
        (o = Ee({}, o, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Sd(e, o)), (r = Sd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Sl);
    }
    wd(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (aa.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (i = i || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (aa.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ce('scroll', e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
m1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xi(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function jk(e, t, n) {
  var r = t.pendingProps;
  switch ((ah(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xe(t), null;
    case 1:
      return mt(t.type) && xl(), Xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ei(),
        fe(ht),
        fe(Ze),
        ph(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Kt !== null && (rf(Kt), (Kt = null)))),
        Xd(e, t),
        Xe(t),
        null
      );
    case 5:
      mh(t);
      var o = Wr(ya.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        h1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Xe(t), null;
        }
        if (((e = Wr(fn.current)), bs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[un] = t), (r[ga] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ce('cancel', r), ce('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ce('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < zi.length; o++) ce(zi[o], r);
              break;
            case 'source':
              ce('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ce('error', r), ce('load', r);
              break;
            case 'details':
              ce('toggle', r);
              break;
            case 'input':
              Qm(r, i), ce('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ce('invalid', r);
              break;
            case 'textarea':
              Zm(r, i), ce('invalid', r);
          }
          wd(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ys(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ys(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : aa.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ce('scroll', r);
            }
          switch (n) {
            case 'input':
              cs(r), qm(r, i, !0);
              break;
            case 'textarea':
              cs(r), Jm(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Sl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ov(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[un] = t),
            (e[ga] = r),
            f1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = kd(n, r)), n)) {
              case 'dialog':
                ce('cancel', e), ce('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ce('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < zi.length; o++) ce(zi[o], e);
                o = r;
                break;
              case 'source':
                ce('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ce('error', e), ce('load', e), (o = r);
                break;
              case 'details':
                ce('toggle', e), (o = r);
                break;
              case 'input':
                Qm(e, r), (o = vd(e, r)), ce('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ee({}, r, { value: void 0 })),
                  ce('invalid', e);
                break;
              case 'textarea':
                Zm(e, r), (o = Sd(e, r)), ce('invalid', e);
                break;
              default:
                o = r;
            }
            wd(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === 'style'
                  ? Uv(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Vv(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && sa(e, l)
                    : typeof l == 'number' && sa(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (aa.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && ce('scroll', e)
                      : l != null && Hf(e, i, l, a));
              }
            switch (n) {
              case 'input':
                cs(e), qm(e, r, !1);
                break;
              case 'textarea':
                cs(e), Jm(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + pr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Do(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Do(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Sl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null) m1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(z(166));
        if (((n = Wr(ya.current)), Wr(fn.current), bs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[un] = t),
            (i = r.nodeValue !== n) && ((e = kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ys(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ys(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[un] = t),
            (t.stateNode = r);
      }
      return Xe(t), null;
    case 13:
      if (
        (fe(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && wt !== null && t.mode & 1 && !(t.flags & 128))
          $y(), Zo(), (t.flags |= 98560), (i = !1);
        else if (((i = bs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[un] = t;
          } else
            Zo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Xe(t), (i = !1);
        } else Kt !== null && (rf(Kt), (Kt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Be === 0 && (Be = 3) : _h())),
          t.updateQueue !== null && (t.flags |= 4),
          Xe(t),
          null);
    case 4:
      return (
        ei(), Xd(e, t), e === null && ma(t.stateNode.containerInfo), Xe(t), null
      );
    case 10:
      return ch(t.type._context), Xe(t), null;
    case 17:
      return mt(t.type) && xl(), Xe(t), null;
    case 19:
      if ((fe(we), (i = t.memoizedState), i === null)) return Xe(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) xi(i, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Tl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    xi(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            _e() > ni &&
            ((t.flags |= 128), (r = !0), xi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Tl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xi(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !ve)
            )
              return Xe(t), null;
          } else
            2 * _e() - i.renderingStartTime > ni &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = _e()),
          (t.sibling = null),
          (n = we.current),
          se(we, r ? (n & 1) | 2 : n & 1),
          t)
        : (Xe(t), null);
    case 22:
    case 23:
      return (
        Ph(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? St & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Dk(e, t) {
  switch ((ah(t), t.tag)) {
    case 1:
      return (
        mt(t.type) && xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ei(),
        fe(ht),
        fe(Ze),
        ph(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mh(t), null;
    case 13:
      if (
        (fe(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        Zo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(we), null;
    case 4:
      return ei(), null;
    case 10:
      return ch(t.type._context), null;
    case 22:
    case 23:
      return Ph(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ws = !1,
  qe = !1,
  Nk = typeof WeakSet == 'function' ? WeakSet : Set,
  I = null;
function $o(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function Qd(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Vp = !1;
function Fk(e, t) {
  if (((Ld = vl), (e = yy()), oh(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Md = { focusedElem: e, selectionRange: n }, vl = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var b = y.memoizedProps,
                    E = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Ht(t.type, b),
                      E
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (C) {
          Pe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (y = Vp), (Vp = !1), y;
}
function Hi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Qd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function cu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function p1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), p1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[un], delete t[ga], delete t[jd], delete t[wk], delete t[kk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function g1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || g1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Sl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zd(e, t, n), e = e.sibling; e !== null; ) Zd(e, t, n), (e = e.sibling);
}
function Jd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jd(e, t, n), e = e.sibling; e !== null; ) Jd(e, t, n), (e = e.sibling);
}
var We = null,
  Gt = !1;
function On(e, t, n) {
  for (n = n.child; n !== null; ) v1(e, t, n), (n = n.sibling);
}
function v1(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == 'function')
    try {
      dn.onCommitFiberUnmount(nu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || $o(n, t);
    case 6:
      var r = We,
        o = Gt;
      (We = null),
        On(e, t, n),
        (We = r),
        (Gt = o),
        We !== null &&
          (Gt
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (Gt
          ? ((e = We),
            (n = n.stateNode),
            e.nodeType === 8
              ? xc(e.parentNode, n)
              : e.nodeType === 1 && xc(e, n),
            da(e))
          : xc(We, n.stateNode));
      break;
    case 4:
      (r = We),
        (o = Gt),
        (We = n.stateNode.containerInfo),
        (Gt = !0),
        On(e, t, n),
        (We = r),
        (Gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Qd(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      On(e, t, n);
      break;
    case 1:
      if (
        !qe &&
        ($o(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Pe(n, t, s);
        }
      On(e, t, n);
      break;
    case 21:
      On(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((qe = (r = qe) || n.memoizedState !== null), On(e, t, n), (qe = r))
        : On(e, t, n);
      break;
    default:
      On(e, t, n);
  }
}
function Up(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nk()),
      t.forEach(function (r) {
        var o = Xk.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (We = s.stateNode), (Gt = !1);
              break e;
            case 3:
              (We = s.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (We = s.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          s = s.return;
        }
        if (We === null) throw Error(z(160));
        v1(i, a, o), (We = null), (Gt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) y1(t, e), (t = t.sibling);
}
function y1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Wt(t, e), tn(e), r & 4)) {
        try {
          Hi(3, e, e.return), cu(3, e);
        } catch (b) {
          Pe(e, e.return, b);
        }
        try {
          Hi(5, e, e.return);
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 1:
      Wt(t, e), tn(e), r & 512 && n !== null && $o(n, n.return);
      break;
    case 5:
      if (
        (Wt(t, e),
        tn(e),
        r & 512 && n !== null && $o(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          sa(o, '');
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Nv(o, i),
              kd(s, a);
            var u = kd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === 'style'
                ? Uv(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? Vv(o, d)
                : c === 'children'
                ? sa(o, d)
                : Hf(o, c, d, u);
            }
            switch (s) {
              case 'input':
                yd(o, i);
                break;
              case 'textarea':
                Fv(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Do(o, !!i.multiple, m, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Do(o, !!i.multiple, i.defaultValue, !0)
                      : Do(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[ga] = i;
          } catch (b) {
            Pe(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Wt(t, e), tn(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Wt(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          da(t.containerInfo);
        } catch (b) {
          Pe(e, e.return, b);
        }
      break;
    case 4:
      Wt(t, e), tn(e);
      break;
    case 13:
      Wt(t, e),
        tn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ch = _e())),
        r & 4 && Up(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((qe = (u = qe) || c), Wt(t, e), (qe = u)) : Wt(t, e),
        tn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (d = I = c; I !== null; ) {
              switch (((f = I), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hi(4, f, f.return);
                  break;
                case 1:
                  $o(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (b) {
                      Pe(r, n, b);
                    }
                  }
                  break;
                case 5:
                  $o(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Gp(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (I = m)) : Gp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = Wv('display', a)));
              } catch (b) {
                Pe(e, e.return, b);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (b) {
                Pe(e, e.return, b);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Wt(t, e), tn(e), r & 4 && Up(e);
      break;
    case 21:
      break;
    default:
      Wt(t, e), tn(e);
  }
}
function tn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (g1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (sa(o, ''), (r.flags &= -33));
          var i = Wp(e);
          Jd(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Wp(e);
          Zd(e, s, a);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ok(e, t, n) {
  (I = e), b1(e);
}
function b1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ws;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || qe;
        s = ws;
        var u = qe;
        if (((ws = a), (qe = l) && !u))
          for (I = o; I !== null; )
            (a = I),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Kp(o)
                : l !== null
                ? ((l.return = a), (I = l))
                : Kp(o);
        for (; i !== null; ) (I = i), b1(i), (i = i.sibling);
        (I = o), (ws = s), (qe = u);
      }
      Hp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : Hp(e);
  }
}
function Hp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || cu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Tp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Tp(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && da(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        qe || (t.flags & 512 && qd(t));
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Gp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Kp(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cu(4, t);
          } catch (l) {
            Pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Pe(t, o, l);
            }
          }
          var i = t.return;
          try {
            qd(t);
          } catch (l) {
            Pe(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            qd(t);
          } catch (l) {
            Pe(t, a, l);
          }
      }
    } catch (l) {
      Pe(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (I = s);
      break;
    }
    I = t.return;
  }
}
var Vk = Math.ceil,
  $l = Dn.ReactCurrentDispatcher,
  wh = Dn.ReactCurrentOwner,
  Ft = Dn.ReactCurrentBatchConfig,
  X = 0,
  Fe = null,
  $e = null,
  He = 0,
  St = 0,
  zo = br(0),
  Be = 0,
  wa = null,
  to = 0,
  du = 0,
  kh = 0,
  Gi = null,
  ct = null,
  Ch = 0,
  ni = 1 / 0,
  Sn = null,
  zl = !1,
  ef = null,
  lr = null,
  ks = !1,
  er = null,
  Ll = 0,
  Ki = 0,
  tf = null,
  Ys = -1,
  Xs = 0;
function rt() {
  return X & 6 ? _e() : Ys !== -1 ? Ys : (Ys = _e());
}
function ur(e) {
  return e.mode & 1
    ? X & 2 && He !== 0
      ? He & -He
      : Ek.transition !== null
      ? (Xs === 0 && (Xs = ny()), Xs)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uy(e.type))),
        e)
    : 1;
}
function Qt(e, t, n, r) {
  if (50 < Ki) throw ((Ki = 0), (tf = null), Error(z(185)));
  Da(e, n, r),
    (!(X & 2) || e !== Fe) &&
      (e === Fe && (!(X & 2) && (du |= n), Be === 4 && qn(e, He)),
      pt(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((ni = _e() + 500), su && Sr()));
}
function pt(e, t) {
  var n = e.callbackNode;
  E2(e, t);
  var r = gl(e, e === Fe ? He : 0);
  if (r === 0)
    n !== null && np(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && np(n), t === 1))
      e.tag === 0 ? Ck(Yp.bind(null, e)) : Ty(Yp.bind(null, e)),
        Sk(function () {
          !(X & 6) && Sr();
        }),
        (n = null);
    else {
      switch (ry(r)) {
        case 1:
          n = Qf;
          break;
        case 4:
          n = ey;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = ty;
          break;
        default:
          n = pl;
      }
      n = _1(n, S1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function S1(e, t) {
  if (((Ys = -1), (Xs = 0), X & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (Wo() && e.callbackNode !== n) return null;
  var r = gl(e, e === Fe ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = w1();
    (Fe !== e || He !== t) && ((Sn = null), (ni = _e() + 500), Kr(e, t));
    do
      try {
        Hk();
        break;
      } catch (s) {
        x1(e, s);
      }
    while (1);
    uh(),
      ($l.current = i),
      (X = o),
      $e !== null ? (t = 0) : ((Fe = null), (He = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Td(e)), o !== 0 && ((r = o), (t = nf(e, o)))), t === 1)
    )
      throw ((n = wa), Kr(e, 0), qn(e, r), pt(e, _e()), n);
    if (t === 6) qn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Wk(o) &&
          ((t = Ml(e, r)),
          t === 2 && ((i = Td(e)), i !== 0 && ((r = i), (t = nf(e, i)))),
          t === 1))
      )
        throw ((n = wa), Kr(e, 0), qn(e, r), pt(e, _e()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Br(e, ct, Sn);
          break;
        case 3:
          if (
            (qn(e, r), (r & 130023424) === r && ((t = Ch + 500 - _e()), 10 < t))
          ) {
            if (gl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              rt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Bd(Br.bind(null, e, ct, Sn), t);
            break;
          }
          Br(e, ct, Sn);
          break;
        case 4:
          if ((qn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Xt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = _e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vk(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bd(Br.bind(null, e, ct, Sn), r);
            break;
          }
          Br(e, ct, Sn);
          break;
        case 5:
          Br(e, ct, Sn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return pt(e, _e()), e.callbackNode === n ? S1.bind(null, e) : null;
}
function nf(e, t) {
  var n = Gi;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = Ml(e, t)),
    e !== 2 && ((t = ct), (ct = n), t !== null && rf(t)),
    e
  );
}
function rf(e) {
  ct === null ? (ct = e) : ct.push.apply(ct, e);
}
function Wk(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Zt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qn(e, t) {
  for (
    t &= ~kh,
      t &= ~du,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Yp(e) {
  if (X & 6) throw Error(z(327));
  Wo();
  var t = gl(e, 0);
  if (!(t & 1)) return pt(e, _e()), null;
  var n = Ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Td(e);
    r !== 0 && ((t = r), (n = nf(e, r)));
  }
  if (n === 1) throw ((n = wa), Kr(e, 0), qn(e, t), pt(e, _e()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Br(e, ct, Sn),
    pt(e, _e()),
    null
  );
}
function Eh(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((ni = _e() + 500), su && Sr());
  }
}
function no(e) {
  er !== null && er.tag === 0 && !(X & 6) && Wo();
  var t = X;
  X |= 1;
  var n = Ft.transition,
    r = oe;
  try {
    if (((Ft.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (Ft.transition = n), (X = t), !(X & 6) && Sr();
  }
}
function Ph() {
  (St = zo.current), fe(zo);
}
function Kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bk(n)), $e !== null))
    for (n = $e.return; n !== null; ) {
      var r = n;
      switch ((ah(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xl();
          break;
        case 3:
          ei(), fe(ht), fe(Ze), ph();
          break;
        case 5:
          mh(r);
          break;
        case 4:
          ei();
          break;
        case 13:
          fe(we);
          break;
        case 19:
          fe(we);
          break;
        case 10:
          ch(r.type._context);
          break;
        case 22:
        case 23:
          Ph();
      }
      n = n.return;
    }
  if (
    ((Fe = e),
    ($e = e = cr(e.current, null)),
    (He = St = t),
    (Be = 0),
    (wa = null),
    (kh = du = to = 0),
    (ct = Gi = null),
    Vr !== null)
  ) {
    for (t = 0; t < Vr.length; t++)
      if (((n = Vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Vr = null;
  }
  return e;
}
function x1(e, t) {
  do {
    var n = $e;
    try {
      if ((uh(), (Hs.current = Al), Rl)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Rl = !1;
      }
      if (
        ((eo = 0),
        (De = Me = Ce = null),
        (Ui = !1),
        (ba = 0),
        (wh.current = null),
        n === null || n.return === null)
      ) {
        (Be = 1), (wa = t), ($e = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = He),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Ip(a);
          if (m !== null) {
            (m.flags &= -257),
              Bp(m, a, s, i, t),
              m.mode & 1 && Mp(i, u, t),
              (t = m),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var b = new Set();
              b.add(l), (t.updateQueue = b);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Mp(i, u, t), _h();
              break e;
            }
            l = Error(z(426));
          }
        } else if (ve && s.mode & 1) {
          var E = Ip(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Bp(E, a, s, i, t),
              sh(ti(l, s));
            break e;
          }
        }
        (i = l = ti(l, s)),
          Be !== 4 && (Be = 2),
          Gi === null ? (Gi = [i]) : Gi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = o1(i, l, t);
              _p(i, p);
              break e;
            case 1:
              s = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (lr === null || !lr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = i1(i, s, t);
                _p(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      C1(n);
    } catch (_) {
      (t = _), $e === n && n !== null && ($e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function w1() {
  var e = $l.current;
  return ($l.current = Al), e === null ? Al : e;
}
function _h() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    Fe === null || (!(to & 268435455) && !(du & 268435455)) || qn(Fe, He);
}
function Ml(e, t) {
  var n = X;
  X |= 2;
  var r = w1();
  (Fe !== e || He !== t) && ((Sn = null), Kr(e, t));
  do
    try {
      Uk();
      break;
    } catch (o) {
      x1(e, o);
    }
  while (1);
  if ((uh(), (X = n), ($l.current = r), $e !== null)) throw Error(z(261));
  return (Fe = null), (He = 0), Be;
}
function Uk() {
  for (; $e !== null; ) k1($e);
}
function Hk() {
  for (; $e !== null && !g2(); ) k1($e);
}
function k1(e) {
  var t = P1(e.alternate, e, St);
  (e.memoizedProps = e.pendingProps),
    t === null ? C1(e) : ($e = t),
    (wh.current = null);
}
function C1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dk(n, t)), n !== null)) {
        (n.flags &= 32767), ($e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), ($e = null);
        return;
      }
    } else if (((n = jk(n, t, St)), n !== null)) {
      $e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $e = t;
      return;
    }
    $e = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function Br(e, t, n) {
  var r = oe,
    o = Ft.transition;
  try {
    (Ft.transition = null), (oe = 1), Gk(e, t, n, r);
  } finally {
    (Ft.transition = o), (oe = r);
  }
  return null;
}
function Gk(e, t, n, r) {
  do Wo();
  while (er !== null);
  if (X & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (P2(e, i),
    e === Fe && (($e = Fe = null), (He = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ks ||
      ((ks = !0),
      _1(pl, function () {
        return Wo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ft.transition), (Ft.transition = null);
    var a = oe;
    oe = 1;
    var s = X;
    (X |= 4),
      (wh.current = null),
      Fk(e, n),
      y1(n, e),
      fk(Md),
      (vl = !!Ld),
      (Md = Ld = null),
      (e.current = n),
      Ok(n),
      v2(),
      (X = s),
      (oe = a),
      (Ft.transition = i);
  } else e.current = n;
  if (
    (ks && ((ks = !1), (er = e), (Ll = o)),
    (i = e.pendingLanes),
    i === 0 && (lr = null),
    S2(n.stateNode),
    pt(e, _e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (zl) throw ((zl = !1), (e = ef), (ef = null), e);
  return (
    Ll & 1 && e.tag !== 0 && Wo(),
    (i = e.pendingLanes),
    i & 1 ? (e === tf ? Ki++ : ((Ki = 0), (tf = e))) : (Ki = 0),
    Sr(),
    null
  );
}
function Wo() {
  if (er !== null) {
    var e = ry(Ll),
      t = Ft.transition,
      n = oe;
    try {
      if (((Ft.transition = null), (oe = 16 > e ? 16 : e), er === null))
        var r = !1;
      else {
        if (((e = er), (er = null), (Ll = 0), X & 6)) throw Error(z(331));
        var o = X;
        for (X |= 4, I = e.current; I !== null; ) {
          var i = I,
            a = i.child;
          if (I.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (I = d);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var f = c.sibling,
                        m = c.return;
                      if ((p1(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (I = f);
                        break;
                      }
                      I = m;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var b = y.child;
                if (b !== null) {
                  y.child = null;
                  do {
                    var E = b.sibling;
                    (b.sibling = null), (b = E);
                  } while (b !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (I = a);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hi(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (I = p);
                break e;
              }
              I = i.return;
            }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          a = I;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (I = g);
          else
            e: for (a = h; I !== null; ) {
              if (((s = I), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cu(9, s);
                  }
                } catch (_) {
                  Pe(s, s.return, _);
                }
              if (s === a) {
                I = null;
                break e;
              }
              var C = s.sibling;
              if (C !== null) {
                (C.return = s.return), (I = C);
                break e;
              }
              I = s.return;
            }
        }
        if (
          ((X = o), Sr(), dn && typeof dn.onPostCommitFiberRoot == 'function')
        )
          try {
            dn.onPostCommitFiberRoot(nu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (Ft.transition = t);
    }
  }
  return !1;
}
function Xp(e, t, n) {
  (t = ti(n, t)),
    (t = o1(e, t, 1)),
    (e = sr(e, t, 1)),
    (t = rt()),
    e !== null && (Da(e, 1, t), pt(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) Xp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (lr === null || !lr.has(r)))
        ) {
          (e = ti(n, e)),
            (e = i1(t, e, 1)),
            (t = sr(t, e, 1)),
            (e = rt()),
            t !== null && (Da(t, 1, e), pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kk(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Fe === e &&
      (He & n) === n &&
      (Be === 4 || (Be === 3 && (He & 130023424) === He && 500 > _e() - Ch)
        ? Kr(e, 0)
        : (kh |= n)),
    pt(e, t);
}
function E1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hs), (hs <<= 1), !(hs & 130023424) && (hs = 4194304))
      : (t = 1));
  var n = rt();
  (e = Mn(e, t)), e !== null && (Da(e, t, n), pt(e, n));
}
function Yk(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), E1(e, n);
}
function Xk(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), E1(e, n);
}
var P1;
P1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current) ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ft = !1), Bk(e, t, n);
      ft = !!(e.flags & 131072);
    }
  else (ft = !1), ve && t.flags & 1048576 && Ry(t, Cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ks(e, t), (e = t.pendingProps);
      var o = qo(t, Ze.current);
      Vo(t, n), (o = vh(null, t, r, e, o, n));
      var i = yh();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mt(r) ? ((i = !0), wl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            fh(t),
            (o.updater = lu),
            (t.stateNode = o),
            (o._reactInternals = t),
            Wd(t, r, e, n),
            (t = Gd(null, t, r, !0, i, n)))
          : ((t.tag = 0), ve && i && ih(t), et(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ks(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = qk(r)),
          (e = Ht(r, e)),
          o)
        ) {
          case 0:
            t = Hd(null, t, r, e, n);
            break e;
          case 1:
            t = Np(null, t, r, e, n);
            break e;
          case 11:
            t = jp(null, t, r, e, n);
            break e;
          case 14:
            t = Dp(null, t, r, Ht(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Hd(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Np(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((u1(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ly(e, t),
          _l(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ti(Error(z(423)), t)), (t = Fp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ti(Error(z(424)), t)), (t = Fp(e, t, r, n, o));
            break e;
          } else
            for (
              wt = ar(t.stateNode.containerInfo.firstChild),
                kt = t,
                ve = !0,
                Kt = null,
                n = jy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zo(), r === o)) {
            t = In(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dy(t),
        e === null && Fd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Id(r, o) ? (a = null) : i !== null && Id(r, i) && (t.flags |= 32),
        l1(e, t),
        et(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Fd(t), null;
    case 13:
      return c1(e, t, n);
    case 4:
      return (
        hh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jo(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        jp(e, t, r, o, n)
      );
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          se(El, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Zt(i.value, a)) {
            if (i.children === o.children && !ht.current) {
              t = In(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Tn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Od(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(z(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Od(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        et(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Vo(t, n),
        (o = Ot(o)),
        (r = r(o)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ht(r, t.pendingProps)),
        (o = Ht(r.type, o)),
        Dp(e, t, r, o, n)
      );
    case 15:
      return a1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Ks(e, t),
        (t.tag = 1),
        mt(r) ? ((e = !0), wl(t)) : (e = !1),
        Vo(t, n),
        Iy(t, r, o),
        Wd(t, r, o, n),
        Gd(null, t, r, !0, e, n)
      );
    case 19:
      return d1(e, t, n);
    case 22:
      return s1(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function _1(e, t) {
  return Jv(e, t);
}
function Qk(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Nt(e, t, n, r) {
  return new Qk(e, t, n, r);
}
function Th(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qk(e) {
  if (typeof e == 'function') return Th(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kf)) return 11;
    if (e === Yf) return 14;
  }
  return 2;
}
function cr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qs(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Th(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case wo:
        return Yr(n.children, o, i, t);
      case Gf:
        (a = 8), (o |= 8);
        break;
      case hd:
        return (
          (e = Nt(12, n, t, o | 2)), (e.elementType = hd), (e.lanes = i), e
        );
      case md:
        return (e = Nt(13, n, t, o)), (e.elementType = md), (e.lanes = i), e;
      case pd:
        return (e = Nt(19, n, t, o)), (e.elementType = pd), (e.lanes = i), e;
      case Bv:
        return fu(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Mv:
              a = 10;
              break e;
            case Iv:
              a = 9;
              break e;
            case Kf:
              a = 11;
              break e;
            case Yf:
              a = 14;
              break e;
            case Kn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Nt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Yr(e, t, n, r) {
  return (e = Nt(7, e, r, t)), (e.lanes = n), e;
}
function fu(e, t, n, r) {
  return (
    (e = Nt(22, e, r, t)),
    (e.elementType = Bv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Rc(e, t, n) {
  return (e = Nt(6, e, null, t)), (e.lanes = n), e;
}
function Ac(e, t, n) {
  return (
    (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Zk(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cc(0)),
    (this.expirationTimes = cc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rh(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new Zk(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Nt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fh(i),
    e
  );
}
function Jk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xo,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function T1(e) {
  if (!e) return gr;
  e = e._reactInternals;
  e: {
    if (io(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mt(n)) return _y(e, n, t);
  }
  return t;
}
function R1(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Rh(n, r, !0, e, o, i, a, s, l)),
    (e.context = T1(null)),
    (n = e.current),
    (r = rt()),
    (o = ur(n)),
    (i = Tn(r, o)),
    (i.callback = t ?? null),
    sr(n, i, o),
    (e.current.lanes = o),
    Da(e, o, r),
    pt(e, r),
    e
  );
}
function hu(e, t, n, r) {
  var o = t.current,
    i = rt(),
    a = ur(o);
  return (
    (n = T1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sr(o, t, a)),
    e !== null && (Qt(e, o, a, i), Us(e, o, a)),
    a
  );
}
function Il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ah(e, t) {
  Qp(e, t), (e = e.alternate) && Qp(e, t);
}
function eC() {
  return null;
}
var A1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function $h(e) {
  this._internalRoot = e;
}
mu.prototype.render = $h.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  hu(e, t, null, null);
};
mu.prototype.unmount = $h.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    no(function () {
      hu(null, e, null, null);
    }),
      (t[Ln] = null);
  }
};
function mu(e) {
  this._internalRoot = e;
}
mu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ay();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++);
    Qn.splice(n, 0, e), n === 0 && ly(e);
  }
};
function zh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function qp() {}
function tC(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Il(a);
        i.call(u);
      };
    }
    var a = R1(t, r, e, 0, null, !1, !1, '', qp);
    return (
      (e._reactRootContainer = a),
      (e[Ln] = a.current),
      ma(e.nodeType === 8 ? e.parentNode : e),
      no(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = Il(l);
      s.call(u);
    };
  }
  var l = Rh(e, 0, !1, null, null, !1, !1, '', qp);
  return (
    (e._reactRootContainer = l),
    (e[Ln] = l.current),
    ma(e.nodeType === 8 ? e.parentNode : e),
    no(function () {
      hu(t, l, n, r);
    }),
    l
  );
}
function gu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var l = Il(a);
        s.call(l);
      };
    }
    hu(t, a, e, o);
  } else a = tC(n, t, e, o, r);
  return Il(a);
}
oy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $i(t.pendingLanes);
        n !== 0 &&
          (qf(t, n | 1), pt(t, _e()), !(X & 6) && ((ni = _e() + 500), Sr()));
      }
      break;
    case 13:
      no(function () {
        var r = Mn(e, 1);
        if (r !== null) {
          var o = rt();
          Qt(r, e, 1, o);
        }
      }),
        Ah(e, 1);
  }
};
Zf = function (e) {
  if (e.tag === 13) {
    var t = Mn(e, 134217728);
    if (t !== null) {
      var n = rt();
      Qt(t, e, 134217728, n);
    }
    Ah(e, 134217728);
  }
};
iy = function (e) {
  if (e.tag === 13) {
    var t = ur(e),
      n = Mn(e, t);
    if (n !== null) {
      var r = rt();
      Qt(n, e, t, r);
    }
    Ah(e, t);
  }
};
ay = function () {
  return oe;
};
sy = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
Ed = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((yd(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = au(r);
            if (!o) throw Error(z(90));
            Dv(r), yd(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Fv(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Do(e, !!n.multiple, t, !1);
  }
};
Kv = Eh;
Yv = no;
var nC = { usingClientEntryPoint: !1, Events: [Fa, Po, au, Hv, Gv, Eh] },
  wi = {
    findFiberByHostInstance: Or,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  rC = {
    bundleType: wi.bundleType,
    version: wi.version,
    rendererPackageName: wi.rendererPackageName,
    rendererConfig: wi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wi.findFiberByHostInstance || eC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cs.isDisabled && Cs.supportsFiber)
    try {
      (nu = Cs.inject(rC)), (dn = Cs);
    } catch {}
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nC;
Tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zh(t)) throw Error(z(200));
  return Jk(e, t, null, n);
};
Tt.createRoot = function (e, t) {
  if (!zh(e)) throw Error(z(299));
  var n = !1,
    r = '',
    o = A1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rh(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ln] = t.current),
    ma(e.nodeType === 8 ? e.parentNode : e),
    new $h(t)
  );
};
Tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(z(188))
      : ((e = Object.keys(e).join(',')), Error(z(268, e)));
  return (e = qv(t)), (e = e === null ? null : e.stateNode), e;
};
Tt.flushSync = function (e) {
  return no(e);
};
Tt.hydrate = function (e, t, n) {
  if (!pu(t)) throw Error(z(200));
  return gu(null, e, t, !0, n);
};
Tt.hydrateRoot = function (e, t, n) {
  if (!zh(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = A1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = R1(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Ln] = t.current),
    ma(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new mu(t);
};
Tt.render = function (e, t, n) {
  if (!pu(t)) throw Error(z(200));
  return gu(null, e, t, !1, n);
};
Tt.unmountComponentAtNode = function (e) {
  if (!pu(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (no(function () {
        gu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ln] = null);
        });
      }),
      !0)
    : !1;
};
Tt.unstable_batchedUpdates = Eh;
Tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!pu(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return gu(e, t, n, !1, r);
};
Tt.version = '18.2.0-next-9e3b772b8-20220608';
function $1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($1);
    } catch (e) {
      console.error(e);
    }
}
$1(), (xv.exports = Tt);
var Lh = xv.exports,
  Zp = Lh;
(dd.createRoot = Zp.createRoot), (dd.hydrateRoot = Zp.hydrateRoot);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ka() {
  return (
    (ka = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ka.apply(this, arguments)
  );
}
var tr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(tr || (tr = {}));
const Jp = 'popstate';
function oC(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: a = '/',
      search: s = '',
      hash: l = '',
    } = ao(o.location.hash.substr(1));
    return of(
      '',
      { pathname: a, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(o, i) {
    let a = o.document.querySelector('base'),
      s = '';
    if (a && a.getAttribute('href')) {
      let l = o.location.href,
        u = l.indexOf('#');
      s = u === -1 ? l : l.slice(0, u);
    }
    return s + '#' + (typeof i == 'string' ? i : Bl(i));
  }
  function r(o, i) {
    vu(
      o.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(i) +
        ')'
    );
  }
  return aC(t, n, r, e);
}
function ze(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function vu(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function iC() {
  return Math.random().toString(36).substr(2, 8);
}
function e0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function of(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ka(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ao(t) : t,
      { state: n, key: (t && t.key) || r || iC() }
    )
  );
}
function Bl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function ao(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function aC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = tr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(ka({}, a.state, { idx: u }), ''));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = tr.Pop;
    let E = c(),
      p = E == null ? null : E - u;
    (u = E), l && l({ action: s, location: b.location, delta: p });
  }
  function f(E, p) {
    s = tr.Push;
    let h = of(b.location, E, p);
    n && n(h, E), (u = c() + 1);
    let g = e0(h, u),
      C = b.createHref(h);
    try {
      a.pushState(g, '', C);
    } catch {
      o.location.assign(C);
    }
    i && l && l({ action: s, location: b.location, delta: 1 });
  }
  function m(E, p) {
    s = tr.Replace;
    let h = of(b.location, E, p);
    n && n(h, E), (u = c());
    let g = e0(h, u),
      C = b.createHref(h);
    a.replaceState(g, '', C),
      i && l && l({ action: s, location: b.location, delta: 0 });
  }
  function y(E) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof E == 'string' ? E : Bl(E);
    return (
      ze(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, p)
    );
  }
  let b = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(E) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Jp, d),
        (l = E),
        () => {
          o.removeEventListener(Jp, d), (l = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: y,
    encodeLocation(E) {
      let p = y(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: m,
    go(E) {
      return a.go(E);
    },
  };
  return b;
}
var t0;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(t0 || (t0 = {}));
function sC(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? ao(t) : t,
    o = Mh(r.pathname || '/', n);
  if (o == null) return null;
  let i = z1(e);
  lC(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = vC(i[s], SC(o));
  return a;
}
function z1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith('/') &&
      (ze(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = dr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ze(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      z1(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: pC(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a);
      else for (let l of L1(i.path)) o(i, a, l);
    }),
    t
  );
}
function L1(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let a = L1(r.join('/')),
    s = [];
  return (
    s.push(...a.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && s.push(...a),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function lC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : gC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const uC = /^:\w+$/,
  cC = 3,
  dC = 2,
  fC = 1,
  hC = 10,
  mC = -2,
  n0 = (e) => e === '*';
function pC(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(n0) && (r += mC),
    t && (r += dC),
    n
      .filter((o) => !n0(o))
      .reduce((o, i) => o + (uC.test(i) ? cC : i === '' ? fC : hC), r)
  );
}
function gC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vC(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = yC(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: dr([o, c.pathname]),
      pathnameBase: CC(dr([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (o = dr([o, c.pathnameBase]));
  }
  return i;
}
function yC(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = bC(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === '*') {
        let f = s[d] || '';
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, '$1');
      }
      return (u[c] = xC(s[d] || '', c)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function bC(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    vu(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (a, s) => (r.push(s), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function SC(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      vu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function xC(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      vu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Mh(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function wC(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? ao(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : kC(n, t)) : t,
    search: EC(r),
    hash: PC(o),
  };
}
function kC(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function $c(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function M1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function I1(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = ao(e))
    : ((o = ka({}, e)),
      ze(
        !o.pathname || !o.pathname.includes('?'),
        $c('?', 'pathname', 'search', o)
      ),
      ze(
        !o.pathname || !o.pathname.includes('#'),
        $c('#', 'pathname', 'hash', o)
      ),
      ze(!o.search || !o.search.includes('#'), $c('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let d = t.length - 1;
    if (a.startsWith('..')) {
      let f = a.split('/');
      for (; f[0] === '..'; ) f.shift(), (d -= 1);
      o.pathname = f.join('/');
    }
    s = d >= 0 ? t[d] : '/';
  }
  let l = wC(o, s),
    u = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const dr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  CC = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  EC = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  PC = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function _C(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const B1 = ['post', 'put', 'patch', 'delete'];
new Set(B1);
const TC = ['get', ...B1];
new Set(TC);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jl() {
  return (
    (jl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jl.apply(this, arguments)
  );
}
const Ih = S.createContext(null),
  j1 = S.createContext(null),
  so = S.createContext(null),
  yu = S.createContext(null),
  lo = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  D1 = S.createContext(null);
function RC(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Va() || ze(!1);
  let { basename: r, navigator: o } = S.useContext(so),
    { hash: i, pathname: a, search: s } = Bh(e, { relative: n }),
    l = a;
  return (
    r !== '/' && (l = a === '/' ? r : dr([r, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function Va() {
  return S.useContext(yu) != null;
}
function Wa() {
  return Va() || ze(!1), S.useContext(yu).location;
}
function N1(e) {
  S.useContext(so).static || S.useLayoutEffect(e);
}
function AC() {
  let { isDataRoute: e } = S.useContext(lo);
  return e ? WC() : $C();
}
function $C() {
  Va() || ze(!1);
  let e = S.useContext(Ih),
    { basename: t, navigator: n } = S.useContext(so),
    { matches: r } = S.useContext(lo),
    { pathname: o } = Wa(),
    i = JSON.stringify(M1(r).map((l) => l.pathnameBase)),
    a = S.useRef(!1);
  return (
    N1(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof l == 'number') {
          n.go(l);
          return;
        }
        let c = I1(l, JSON.parse(i), o, u.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : dr([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
function Bh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(lo),
    { pathname: o } = Wa(),
    i = JSON.stringify(M1(r).map((a) => a.pathnameBase));
  return S.useMemo(() => I1(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function zC(e, t) {
  return LC(e, t);
}
function LC(e, t, n) {
  Va() || ze(!1);
  let { navigator: r } = S.useContext(so),
    { matches: o } = S.useContext(lo),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let l = Wa(),
    u;
  if (t) {
    var c;
    let b = typeof t == 'string' ? ao(t) : t;
    s === '/' || ((c = b.pathname) != null && c.startsWith(s)) || ze(!1),
      (u = b);
  } else u = l;
  let d = u.pathname || '/',
    f = s === '/' ? d : d.slice(s.length) || '/',
    m = sC(e, { pathname: f }),
    y = DC(
      m &&
        m.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: dr([
              s,
              r.encodeLocation
                ? r.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === '/'
                ? s
                : dr([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && y
    ? S.createElement(
        yu.Provider,
        {
          value: {
            location: jl(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: tr.Pop,
          },
        },
        y
      )
    : y;
}
function MC() {
  let e = VC(),
    t = _C(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? S.createElement('pre', { style: o }, n) : null,
    i
  );
}
const IC = S.createElement(MC, null);
class BC extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          lo.Provider,
          { value: this.props.routeContext },
          S.createElement(D1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function jC(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(Ih);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(lo.Provider, { value: t }, r)
  );
}
function DC(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let s = i.findIndex(
      (l) => l.route.id && (a == null ? void 0 : a[l.route.id])
    );
    s >= 0 || ze(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, l, u) => {
    let c = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || IC);
    let f = t.concat(i.slice(0, u + 1)),
      m = () => {
        let y;
        return (
          c
            ? (y = d)
            : l.route.Component
            ? (y = S.createElement(l.route.Component, null))
            : l.route.element
            ? (y = l.route.element)
            : (y = s),
          S.createElement(jC, {
            match: l,
            routeContext: { outlet: s, matches: f, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? S.createElement(BC, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: m(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var af;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate');
})(af || (af = {}));
var Ca;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(Ca || (Ca = {}));
function NC(e) {
  let t = S.useContext(Ih);
  return t || ze(!1), t;
}
function FC(e) {
  let t = S.useContext(j1);
  return t || ze(!1), t;
}
function OC(e) {
  let t = S.useContext(lo);
  return t || ze(!1), t;
}
function F1(e) {
  let t = OC(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ze(!1), n.route.id;
}
function VC() {
  var e;
  let t = S.useContext(D1),
    n = FC(Ca.UseRouteError),
    r = F1(Ca.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function WC() {
  let { router: e } = NC(af.UseNavigateStable),
    t = F1(Ca.UseNavigateStable),
    n = S.useRef(!1);
  return (
    N1(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, jl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function bn(e) {
  ze(!1);
}
function UC(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = tr.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Va() && ze(!1);
  let s = t.replace(/^\/*/, '/'),
    l = S.useMemo(() => ({ basename: s, navigator: i, static: a }), [s, i, a]);
  typeof r == 'string' && (r = ao(r));
  let {
      pathname: u = '/',
      search: c = '',
      hash: d = '',
      state: f = null,
      key: m = 'default',
    } = r,
    y = S.useMemo(() => {
      let b = Mh(u, s);
      return b == null
        ? null
        : {
            location: { pathname: b, search: c, hash: d, state: f, key: m },
            navigationType: o,
          };
    }, [s, u, c, d, f, m, o]);
  return y == null
    ? null
    : S.createElement(
        so.Provider,
        { value: l },
        S.createElement(yu.Provider, { children: n, value: y })
      );
}
function HC(e) {
  let { children: t, location: n } = e;
  return zC(sf(t), n);
}
var r0;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(r0 || (r0 = {}));
new Promise(() => {});
function sf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, sf(r.props.children, i));
        return;
      }
      r.type !== bn && ze(!1), !r.props.index || !r.props.children || ze(!1);
      let a = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = sf(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Dl() {
  return (
    (Dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Dl.apply(this, arguments)
  );
}
function O1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function GC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function KC(e, t) {
  return e.button === 0 && (!t || t === '_self') && !GC(e);
}
const YC = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  XC = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ];
function QC(e) {
  let { basename: t, children: n, window: r } = e,
    o = S.useRef();
  o.current == null && (o.current = oC({ window: r, v5Compat: !0 }));
  let i = o.current,
    [a, s] = S.useState({ action: i.action, location: i.location });
  return (
    S.useLayoutEffect(() => i.listen(s), [i]),
    S.createElement(UC, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
const qC =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ZC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  JC = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      d = O1(t, YC),
      { basename: f } = S.useContext(so),
      m,
      y = !1;
    if (typeof u == 'string' && ZC.test(u) && ((m = u), qC))
      try {
        let h = new URL(window.location.href),
          g = u.startsWith('//') ? new URL(h.protocol + u) : new URL(u),
          C = Mh(g.pathname, f);
        g.origin === h.origin && C != null
          ? (u = C + g.search + g.hash)
          : (y = !0);
      } catch {}
    let b = RC(u, { relative: o }),
      E = eE(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: o,
      });
    function p(h) {
      r && r(h), h.defaultPrevented || E(h);
    }
    return S.createElement(
      'a',
      Dl({}, d, { href: m || b, onClick: y || i ? r : p, ref: n, target: l })
    );
  }),
  Es = S.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: i = '',
        end: a = !1,
        style: s,
        to: l,
        children: u,
      } = t,
      c = O1(t, XC),
      d = Bh(l, { relative: c.relative }),
      f = Wa(),
      m = S.useContext(j1),
      { navigator: y } = S.useContext(so),
      b = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname,
      E = f.pathname,
      p =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    o ||
      ((E = E.toLowerCase()),
      (p = p ? p.toLowerCase() : null),
      (b = b.toLowerCase()));
    let h = E === b || (!a && E.startsWith(b) && E.charAt(b.length) === '/'),
      g =
        p != null &&
        (p === b || (!a && p.startsWith(b) && p.charAt(b.length) === '/')),
      C = h ? r : void 0,
      _;
    typeof i == 'function'
      ? (_ = i({ isActive: h, isPending: g }))
      : (_ = [i, h ? 'active' : null, g ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let A = typeof s == 'function' ? s({ isActive: h, isPending: g }) : s;
    return S.createElement(
      JC,
      Dl({}, c, { 'aria-current': C, className: _, ref: n, style: A, to: l }),
      typeof u == 'function' ? u({ isActive: h, isPending: g }) : u
    );
  });
var o0;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(o0 || (o0 = {}));
var i0;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(i0 || (i0 = {}));
function eE(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    s = AC(),
    l = Wa(),
    u = Bh(e, { relative: a });
  return S.useCallback(
    (c) => {
      if (KC(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : Bl(l) === Bl(u);
        s(e, { replace: d, state: o, preventScrollReset: i, relative: a });
      }
    },
    [l, s, u, r, o, n, e, i, a]
  );
}
function tE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function nE(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var rE = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(nE(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = tE(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Qe = '-ms-',
  Nl = '-moz-',
  Z = '-webkit-',
  V1 = 'comm',
  jh = 'rule',
  Dh = 'decl',
  oE = '@import',
  W1 = '@keyframes',
  iE = '@layer',
  aE = Math.abs,
  bu = String.fromCharCode,
  sE = Object.assign;
function lE(e, t) {
  return Ue(e, 0) ^ 45
    ? (((((((t << 2) ^ Ue(e, 0)) << 2) ^ Ue(e, 1)) << 2) ^ Ue(e, 2)) << 2) ^
        Ue(e, 3)
    : 0;
}
function U1(e) {
  return e.trim();
}
function uE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, n) {
  return e.replace(t, n);
}
function lf(e, t) {
  return e.indexOf(t);
}
function Ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ea(e, t, n) {
  return e.slice(t, n);
}
function sn(e) {
  return e.length;
}
function Nh(e) {
  return e.length;
}
function Ps(e, t) {
  return t.push(e), e;
}
function cE(e, t) {
  return e.map(t).join('');
}
var Su = 1,
  ri = 1,
  H1 = 0,
  gt = 0,
  Ae = 0,
  ci = '';
function xu(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Su,
    column: ri,
    length: a,
    return: '',
  };
}
function ki(e, t) {
  return sE(xu('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function dE() {
  return Ae;
}
function fE() {
  return (
    (Ae = gt > 0 ? Ue(ci, --gt) : 0), ri--, Ae === 10 && ((ri = 1), Su--), Ae
  );
}
function Ct() {
  return (
    (Ae = gt < H1 ? Ue(ci, gt++) : 0), ri++, Ae === 10 && ((ri = 1), Su++), Ae
  );
}
function hn() {
  return Ue(ci, gt);
}
function qs() {
  return gt;
}
function Ua(e, t) {
  return Ea(ci, e, t);
}
function Pa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function G1(e) {
  return (Su = ri = 1), (H1 = sn((ci = e))), (gt = 0), [];
}
function K1(e) {
  return (ci = ''), e;
}
function Zs(e) {
  return U1(Ua(gt - 1, uf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hE(e) {
  for (; (Ae = hn()) && Ae < 33; ) Ct();
  return Pa(e) > 2 || Pa(Ae) > 3 ? '' : ' ';
}
function mE(e, t) {
  for (
    ;
    --t &&
    Ct() &&
    !(Ae < 48 || Ae > 102 || (Ae > 57 && Ae < 65) || (Ae > 70 && Ae < 97));

  );
  return Ua(e, qs() + (t < 6 && hn() == 32 && Ct() == 32));
}
function uf(e) {
  for (; Ct(); )
    switch (Ae) {
      case e:
        return gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uf(Ae);
        break;
      case 40:
        e === 41 && uf(e);
        break;
      case 92:
        Ct();
        break;
    }
  return gt;
}
function pE(e, t) {
  for (; Ct() && e + Ae !== 47 + 10; )
    if (e + Ae === 42 + 42 && hn() === 47) break;
  return '/*' + Ua(t, gt - 1) + '*' + bu(e === 47 ? e : Ct());
}
function gE(e) {
  for (; !Pa(hn()); ) Ct();
  return Ua(e, gt);
}
function vE(e) {
  return K1(Js('', null, null, null, [''], (e = G1(e)), 0, [0], e));
}
function Js(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      m = 0,
      y = 0,
      b = 1,
      E = 1,
      p = 1,
      h = 0,
      g = '',
      C = o,
      _ = i,
      A = r,
      T = g;
    E;

  )
    switch (((y = h), (h = Ct()))) {
      case 40:
        if (y != 108 && Ue(T, d - 1) == 58) {
          lf((T += J(Zs(h), '&', '&\f')), '&\f') != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Zs(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += hE(y);
        break;
      case 92:
        T += mE(qs() - 1, 7);
        continue;
      case 47:
        switch (hn()) {
          case 42:
          case 47:
            Ps(yE(pE(Ct(), qs()), t, n), l);
            break;
          default:
            T += '/';
        }
        break;
      case 123 * b:
        s[u++] = sn(T) * p;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            p == -1 && (T = J(T, /\f/g, '')),
              m > 0 &&
                sn(T) - d &&
                Ps(
                  m > 32
                    ? s0(T + ';', r, n, d - 1)
                    : s0(J(T, ' ', '') + ';', r, n, d - 2),
                  l
                );
            break;
          case 59:
            T += ';';
          default:
            if (
              (Ps((A = a0(T, t, n, u, c, o, s, g, (C = []), (_ = []), d)), i),
              h === 123)
            )
              if (c === 0) Js(T, t, A, A, C, i, d, s, _);
              else
                switch (f === 99 && Ue(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Js(
                      e,
                      A,
                      A,
                      r && Ps(a0(e, A, A, 0, 0, o, s, g, o, (C = []), d), _),
                      o,
                      _,
                      d,
                      s,
                      r ? C : _
                    );
                    break;
                  default:
                    Js(T, A, A, A, [''], _, 0, s, _);
                }
        }
        (u = c = m = 0), (b = p = 1), (g = T = ''), (d = a);
        break;
      case 58:
        (d = 1 + sn(T)), (m = y);
      default:
        if (b < 1) {
          if (h == 123) --b;
          else if (h == 125 && b++ == 0 && fE() == 125) continue;
        }
        switch (((T += bu(h)), h * b)) {
          case 38:
            p = c > 0 ? 1 : ((T += '\f'), -1);
            break;
          case 44:
            (s[u++] = (sn(T) - 1) * p), (p = 1);
            break;
          case 64:
            hn() === 45 && (T += Zs(Ct())),
              (f = hn()),
              (c = d = sn((g = T += gE(qs())))),
              h++;
            break;
          case 45:
            y === 45 && sn(T) == 2 && (b = 0);
        }
    }
  return i;
}
function a0(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [''], m = Nh(f), y = 0, b = 0, E = 0;
    y < r;
    ++y
  )
    for (var p = 0, h = Ea(e, d + 1, (d = aE((b = a[y])))), g = e; p < m; ++p)
      (g = U1(b > 0 ? f[p] + ' ' + h : J(h, /&\f/g, f[p]))) && (l[E++] = g);
  return xu(e, t, n, o === 0 ? jh : s, l, u, c);
}
function yE(e, t, n) {
  return xu(e, t, n, V1, bu(dE()), Ea(e, 2, -2), 0);
}
function s0(e, t, n, r) {
  return xu(e, t, n, Dh, Ea(e, 0, r), Ea(e, r + 1, -1), r);
}
function Uo(e, t) {
  for (var n = '', r = Nh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function bE(e, t, n, r) {
  switch (e.type) {
    case iE:
      if (e.children.length) break;
    case oE:
    case Dh:
      return (e.return = e.return || e.value);
    case V1:
      return '';
    case W1:
      return (e.return = e.value + '{' + Uo(e.children, r) + '}');
    case jh:
      e.value = e.props.join(',');
  }
  return sn((n = Uo(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function SE(e) {
  var t = Nh(e);
  return function (n, r, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](n, r, o, i) || '';
    return a;
  };
}
function xE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var l0 = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function Y1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var wE = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = hn()), o === 38 && i === 12 && (n[r] = 1), !Pa(i);

    )
      Ct();
    return Ua(t, gt);
  },
  kE = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Pa(o)) {
        case 0:
          o === 38 && hn() === 12 && (n[r] = 1), (t[r] += wE(gt - 1, n, r));
          break;
        case 2:
          t[r] += Zs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = hn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += bu(o);
      }
    while ((o = Ct()));
    return t;
  },
  CE = function (t, n) {
    return K1(kE(G1(t), n));
  },
  u0 = new WeakMap(),
  EE = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !u0.get(r)) &&
        !o
      ) {
        u0.set(t, !0);
        for (
          var i = [], a = CE(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l];
      }
    }
  },
  PE = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function X1(e, t) {
  switch (lE(e, t)) {
    case 5103:
      return Z + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Nl + e + Qe + e + e;
    case 6828:
    case 4268:
      return Z + e + Qe + e + e;
    case 6165:
      return Z + e + Qe + 'flex-' + e + e;
    case 5187:
      return (
        Z + e + J(e, /(\w+).+(:[^]+)/, Z + 'box-$1$2' + Qe + 'flex-$1$2') + e
      );
    case 5443:
      return Z + e + Qe + 'flex-item-' + J(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Z +
        e +
        Qe +
        'flex-line-pack' +
        J(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Z + e + Qe + J(e, 'shrink', 'negative') + e;
    case 5292:
      return Z + e + Qe + J(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Z +
        'box-' +
        J(e, '-grow', '') +
        Z +
        e +
        Qe +
        J(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Z + J(e, /([^-])(transform)/g, '$1' + Z + '$2') + e;
    case 6187:
      return (
        J(J(J(e, /(zoom-|grab)/, Z + '$1'), /(image-set)/, Z + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, Z + '$1$`$1');
    case 4968:
      return (
        J(
          J(e, /(.+:)(flex-)?(.*)/, Z + 'box-pack:$3' + Qe + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, Z + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (sn(e) - 1 - t > 6)
        switch (Ue(e, t + 1)) {
          case 109:
            if (Ue(e, t + 4) !== 45) break;
          case 102:
            return (
              J(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Z +
                  '$2-$3$1' +
                  Nl +
                  (Ue(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~lf(e, 'stretch')
              ? X1(J(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ue(e, t + 1) !== 115) break;
    case 6444:
      switch (Ue(e, sn(e) - 3 - (~lf(e, '!important') && 10))) {
        case 107:
          return J(e, ':', ':' + Z) + e;
        case 101:
          return (
            J(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Z +
                (Ue(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Z +
                '$2$3$1' +
                Qe +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ue(e, t + 11)) {
        case 114:
          return Z + e + Qe + J(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Z + e + Qe + J(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Z + e + Qe + J(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Z + e + Qe + e + e;
  }
  return e;
}
var _E = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Dh:
          t.return = X1(t.value, t.length);
          break;
        case W1:
          return Uo([ki(t, { value: J(t.value, '@', '@' + Z) })], o);
        case jh:
          if (t.length)
            return cE(t.props, function (i) {
              switch (uE(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Uo(
                    [ki(t, { props: [J(i, /:(read-\w+)/, ':' + Nl + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return Uo(
                    [
                      ki(t, {
                        props: [J(i, /:(plac\w+)/, ':' + Z + 'input-$1')],
                      }),
                      ki(t, { props: [J(i, /:(plac\w+)/, ':' + Nl + '$1')] }),
                      ki(t, { props: [J(i, /:(plac\w+)/, Qe + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  TE = [_E],
  RE = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (b) {
        var E = b.getAttribute('data-emotion');
        E.indexOf(' ') !== -1 &&
          (document.head.appendChild(b), b.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || TE,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (b) {
          for (
            var E = b.getAttribute('data-emotion').split(' '), p = 1;
            p < E.length;
            p++
          )
            i[E[p]] = !0;
          s.push(b);
        }
      );
    var l,
      u = [EE, PE];
    {
      var c,
        d = [
          bE,
          xE(function (b) {
            c.insert(b);
          }),
        ],
        f = SE(u.concat(o, d)),
        m = function (E) {
          return Uo(vE(E), f);
        };
      l = function (E, p, h, g) {
        (c = h),
          m(E ? E + '{' + p.styles + '}' : p.styles),
          g && (y.inserted[p.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new rE({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(s), y;
  };
function Fl() {
  return (
    (Fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fl.apply(this, arguments)
  );
}
var Q1 = { exports: {} },
  ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oe = typeof Symbol == 'function' && Symbol.for,
  Fh = Oe ? Symbol.for('react.element') : 60103,
  Oh = Oe ? Symbol.for('react.portal') : 60106,
  wu = Oe ? Symbol.for('react.fragment') : 60107,
  ku = Oe ? Symbol.for('react.strict_mode') : 60108,
  Cu = Oe ? Symbol.for('react.profiler') : 60114,
  Eu = Oe ? Symbol.for('react.provider') : 60109,
  Pu = Oe ? Symbol.for('react.context') : 60110,
  Vh = Oe ? Symbol.for('react.async_mode') : 60111,
  _u = Oe ? Symbol.for('react.concurrent_mode') : 60111,
  Tu = Oe ? Symbol.for('react.forward_ref') : 60112,
  Ru = Oe ? Symbol.for('react.suspense') : 60113,
  AE = Oe ? Symbol.for('react.suspense_list') : 60120,
  Au = Oe ? Symbol.for('react.memo') : 60115,
  $u = Oe ? Symbol.for('react.lazy') : 60116,
  $E = Oe ? Symbol.for('react.block') : 60121,
  zE = Oe ? Symbol.for('react.fundamental') : 60117,
  LE = Oe ? Symbol.for('react.responder') : 60118,
  ME = Oe ? Symbol.for('react.scope') : 60119;
function At(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Fh:
        switch (((e = e.type), e)) {
          case Vh:
          case _u:
          case wu:
          case Cu:
          case ku:
          case Ru:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Pu:
              case Tu:
              case $u:
              case Au:
              case Eu:
                return e;
              default:
                return t;
            }
        }
      case Oh:
        return t;
    }
  }
}
function q1(e) {
  return At(e) === _u;
}
ie.AsyncMode = Vh;
ie.ConcurrentMode = _u;
ie.ContextConsumer = Pu;
ie.ContextProvider = Eu;
ie.Element = Fh;
ie.ForwardRef = Tu;
ie.Fragment = wu;
ie.Lazy = $u;
ie.Memo = Au;
ie.Portal = Oh;
ie.Profiler = Cu;
ie.StrictMode = ku;
ie.Suspense = Ru;
ie.isAsyncMode = function (e) {
  return q1(e) || At(e) === Vh;
};
ie.isConcurrentMode = q1;
ie.isContextConsumer = function (e) {
  return At(e) === Pu;
};
ie.isContextProvider = function (e) {
  return At(e) === Eu;
};
ie.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Fh;
};
ie.isForwardRef = function (e) {
  return At(e) === Tu;
};
ie.isFragment = function (e) {
  return At(e) === wu;
};
ie.isLazy = function (e) {
  return At(e) === $u;
};
ie.isMemo = function (e) {
  return At(e) === Au;
};
ie.isPortal = function (e) {
  return At(e) === Oh;
};
ie.isProfiler = function (e) {
  return At(e) === Cu;
};
ie.isStrictMode = function (e) {
  return At(e) === ku;
};
ie.isSuspense = function (e) {
  return At(e) === Ru;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === wu ||
    e === _u ||
    e === Cu ||
    e === ku ||
    e === Ru ||
    e === AE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === $u ||
        e.$$typeof === Au ||
        e.$$typeof === Eu ||
        e.$$typeof === Pu ||
        e.$$typeof === Tu ||
        e.$$typeof === zE ||
        e.$$typeof === LE ||
        e.$$typeof === ME ||
        e.$$typeof === $E))
  );
};
ie.typeOf = At;
Q1.exports = ie;
var IE = Q1.exports,
  Z1 = IE,
  BE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  jE = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  J1 = {};
J1[Z1.ForwardRef] = BE;
J1[Z1.Memo] = jE;
var DE = !0;
function NE(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var eb = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || DE === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  tb = function (t, n, r) {
    eb(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function FE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var OE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  VE = /[A-Z]|^ms/g,
  WE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  nb = function (t) {
    return t.charCodeAt(1) === 45;
  },
  c0 = function (t) {
    return t != null && typeof t != 'boolean';
  },
  zc = Y1(function (e) {
    return nb(e) ? e : e.replace(VE, '-$&').toLowerCase();
  }),
  d0 = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(WE, function (r, o, i) {
            return (ln = { name: o, styles: i, next: ln }), o;
          });
    }
    return OE[t] !== 1 && !nb(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  };
function _a(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (ln = { name: n.name, styles: n.styles, next: ln }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (ln = { name: r.name, styles: r.styles, next: ln }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return UE(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var i = ln,
          a = n(e);
        return (ln = i), _a(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function UE(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += _a(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (r += i + '{' + t[a] + '}')
          : c0(a) && (r += zc(i) + ':' + d0(i, a) + ';');
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          c0(a[s]) && (r += zc(i) + ':' + d0(i, a[s]) + ';');
      else {
        var l = _a(e, t, a);
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += zc(i) + ':' + l + ';';
            break;
          }
          default:
            r += i + '{' + l + '}';
        }
      }
    }
  return r;
}
var f0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ln,
  Wh = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = '';
    ln = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += _a(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += _a(r, n, t[s])), o && (i += a[s]);
    f0.lastIndex = 0;
    for (var l = '', u; (u = f0.exec(i)) !== null; ) l += '-' + u[1];
    var c = FE(i) + l;
    return { name: c, styles: i, next: ln };
  },
  HE = function (t) {
    return t();
  },
  rb = Gm['useInsertionEffect'] ? Gm['useInsertionEffect'] : !1,
  GE = rb || HE,
  h0 = rb || S.useLayoutEffect,
  ob = S.createContext(typeof HTMLElement < 'u' ? RE({ key: 'css' }) : null);
ob.Provider;
var ib = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(ob);
      return t(n, o, r);
    });
  },
  Ta = S.createContext({}),
  KE = function (t, n) {
    if (typeof n == 'function') {
      var r = n(t);
      return r;
    }
    return Fl({}, t, n);
  },
  YE = l0(function (e) {
    return l0(function (t) {
      return KE(e, t);
    });
  }),
  XE = function (t) {
    var n = S.useContext(Ta);
    return (
      t.theme !== n && (n = YE(n)(t.theme)),
      S.createElement(Ta.Provider, { value: n }, t.children)
    );
  },
  zu = ib(function (e, t) {
    var n = e.styles,
      r = Wh([n], void 0, S.useContext(Ta)),
      o = S.useRef();
    return (
      h0(
        function () {
          var i = t.key + '-global',
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + ' ' + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute('data-emotion', i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      h0(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && tb(t, r.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert('', r, a, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function QE() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Wh(t);
}
var qE = function () {
    var t = QE.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  ab = { exports: {} },
  Lu = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ZE = S,
  JE = Symbol.for('react.element'),
  eP = Symbol.for('react.fragment'),
  tP = Object.prototype.hasOwnProperty,
  nP = ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rP = { key: !0, ref: !0, __self: !0, __source: !0 };
function sb(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) tP.call(t, r) && !rP.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: JE,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: nP.current,
  };
}
Lu.Fragment = eP;
Lu.jsx = sb;
Lu.jsxs = sb;
ab.exports = Lu;
var R = ab.exports,
  lb = String.raw,
  ub = lb`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  oP = () => R.jsx(zu, { styles: ub }),
  iP = ({ scope: e = '' }) =>
    R.jsx(zu, {
      styles: lb`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${ub}
    `,
    });
function aP(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function uo(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = 'useContext',
      providerName: o = 'Provider',
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = S.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = S.useContext(s);
    if (!c && n) {
      const d = new Error(i ?? aP(r, o));
      throw (
        ((d.name = 'ContextError'),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [sP, lP] = uo({ strict: !1, name: 'PortalManagerContext' });
function cb(e) {
  const { children: t, zIndex: n } = e;
  return R.jsx(sP, { value: { zIndex: n }, children: t });
}
cb.displayName = 'PortalManager';
var Ra =
    globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
  [db, uP] = uo({ strict: !1, name: 'PortalContext' }),
  Uh = 'chakra-portal',
  cP = '.chakra-portal',
  dP = (e) =>
    R.jsx('div', {
      className: 'chakra-portal-zIndex',
      style: {
        position: 'absolute',
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  fP = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = S.useState(null),
      i = S.useRef(null),
      [, a] = S.useState({});
    S.useEffect(() => a({}), []);
    const s = uP(),
      l = lP();
    Ra(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement('div')),
        (i.current.className = Uh),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? R.jsx(dP, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? Lh.createPortal(R.jsx(db, { value: i.current, children: u }), i.current)
      : R.jsx('span', {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  hP = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      a = S.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div');
        return l && (l.className = Uh), l;
      }, [o]),
      [, s] = S.useState({});
    return (
      Ra(() => s({}), []),
      Ra(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? Lh.createPortal(R.jsx(db, { value: r ? a : null, children: t }), a)
        : null
    );
  };
function Mu(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? R.jsx(hP, { containerRef: n, ...r }) : R.jsx(fP, { ...r });
}
Mu.className = Uh;
Mu.selector = cP;
Mu.displayName = 'Portal';
function mP() {
  const e = S.useContext(Ta);
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    );
  return e;
}
var Hh = S.createContext({});
Hh.displayName = 'ColorModeContext';
function Gh() {
  const e = S.useContext(Hh);
  if (e === void 0)
    throw new Error('useColorMode must be used within a ColorModeProvider');
  return e;
}
var _s = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' };
function pP(e = {}) {
  const { preventTransition: t = !0 } = e,
    n = {
      setDataset: (r) => {
        const o = t ? n.preventTransition() : void 0;
        (document.documentElement.dataset.theme = r),
          (document.documentElement.style.colorScheme = r),
          o == null || o();
      },
      setClassName(r) {
        document.body.classList.add(r ? _s.dark : _s.light),
          document.body.classList.remove(r ? _s.light : _s.dark);
      },
      query() {
        return window.matchMedia('(prefers-color-scheme: dark)');
      },
      getSystemTheme(r) {
        var o;
        return ((o = n.query().matches) != null ? o : r === 'dark')
          ? 'dark'
          : 'light';
      },
      addListener(r) {
        const o = n.query(),
          i = (a) => {
            r(a.matches ? 'dark' : 'light');
          };
        return (
          typeof o.addListener == 'function'
            ? o.addListener(i)
            : o.addEventListener('change', i),
          () => {
            typeof o.removeListener == 'function'
              ? o.removeListener(i)
              : o.removeEventListener('change', i);
          }
        );
      },
      preventTransition() {
        const r = document.createElement('style');
        return (
          r.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          document.head.appendChild(r),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(r);
                });
              });
          }
        );
      },
    };
  return n;
}
var gP = 'chakra-ui-color-mode';
function vP(e) {
  return {
    ssr: !1,
    type: 'localStorage',
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var yP = vP(gP),
  m0 = () => {};
function p0(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t;
}
function fb(e) {
  const {
      value: t,
      children: n,
      options: {
        useSystemColorMode: r,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: a = yP,
    } = e,
    s = o === 'dark' ? 'dark' : 'light',
    [l, u] = S.useState(() => p0(a, s)),
    [c, d] = S.useState(() => p0(a)),
    {
      getSystemTheme: f,
      setClassName: m,
      setDataset: y,
      addListener: b,
    } = S.useMemo(() => pP({ preventTransition: i }), [i]),
    E = o === 'system' && !l ? c : l,
    p = S.useCallback(
      (C) => {
        const _ = C === 'system' ? f() : C;
        u(_), m(_ === 'dark'), y(_), a.set(_);
      },
      [a, f, m, y]
    );
  Ra(() => {
    o === 'system' && d(f());
  }, []),
    S.useEffect(() => {
      const C = a.get();
      if (C) {
        p(C);
        return;
      }
      if (o === 'system') {
        p('system');
        return;
      }
      p(s);
    }, [a, s, o, p]);
  const h = S.useCallback(() => {
    p(E === 'dark' ? 'light' : 'dark');
  }, [E, p]);
  S.useEffect(() => {
    if (r) return b(p);
  }, [r, b, p]);
  const g = S.useMemo(
    () => ({
      colorMode: t ?? E,
      toggleColorMode: t ? m0 : h,
      setColorMode: t ? m0 : p,
      forced: t !== void 0,
    }),
    [E, h, p, t]
  );
  return R.jsx(Hh.Provider, { value: g, children: n });
}
fb.displayName = 'ColorModeProvider';
function bP() {
  const e = Gh(),
    t = mP();
  return { ...e, theme: t };
}
var $t = (...e) => e.filter(Boolean).join(' ');
function qt(e) {
  const t = typeof e;
  return e != null && (t === 'object' || t === 'function') && !Array.isArray(e);
}
function nr(e, ...t) {
  return SP(e) ? e(...t) : e;
}
var SP = (e) => typeof e == 'function',
  g0 = (e) => (e ? '' : void 0),
  Ol = { exports: {} };
Ol.exports;
(function (e, t) {
  var n = 200,
    r = '__lodash_hash_undefined__',
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = '[object Arguments]',
    l = '[object Array]',
    u = '[object AsyncFunction]',
    c = '[object Boolean]',
    d = '[object Date]',
    f = '[object Error]',
    m = '[object Function]',
    y = '[object GeneratorFunction]',
    b = '[object Map]',
    E = '[object Number]',
    p = '[object Null]',
    h = '[object Object]',
    g = '[object Proxy]',
    C = '[object RegExp]',
    _ = '[object Set]',
    A = '[object String]',
    T = '[object Undefined]',
    $ = '[object WeakMap]',
    j = '[object ArrayBuffer]',
    B = '[object DataView]',
    be = '[object Float32Array]',
    Ke = '[object Float64Array]',
    st = '[object Int8Array]',
    Se = '[object Int16Array]',
    xe = '[object Int32Array]',
    lt = '[object Uint8Array]',
    zt = '[object Uint8ClampedArray]',
    L = '[object Uint16Array]',
    V = '[object Uint32Array]',
    U = /[\\^$.*+?()[\]{}|]/g,
    W = /^\[object .+?Constructor\]$/,
    ue = /^(?:0|[1-9]\d*)$/,
    Y = {};
  (Y[be] = Y[Ke] = Y[st] = Y[Se] = Y[xe] = Y[lt] = Y[zt] = Y[L] = Y[V] = !0),
    (Y[s] =
      Y[l] =
      Y[j] =
      Y[c] =
      Y[B] =
      Y[d] =
      Y[f] =
      Y[m] =
      Y[b] =
      Y[E] =
      Y[h] =
      Y[C] =
      Y[_] =
      Y[A] =
      Y[$] =
        !1);
  var yt = typeof ss == 'object' && ss && ss.Object === Object && ss,
    Nn = typeof self == 'object' && self && self.Object === Object && self,
    Le = yt || Nn || Function('return this')(),
    Jt = t && !t.nodeType && t,
    Cr = Jt && !0 && e && !e.nodeType && e,
    mo = Cr && Cr.exports === Jt,
    Fn = mo && yt.process,
    en = (function () {
      try {
        var v = Cr && Cr.require && Cr.require('util').types;
        return v || (Fn && Fn.binding && Fn.binding('util'));
      } catch {}
    })(),
    di = en && en.isTypedArray;
  function Za(v, x, P) {
    switch (P.length) {
      case 0:
        return v.call(x);
      case 1:
        return v.call(x, P[0]);
      case 2:
        return v.call(x, P[0], P[1]);
      case 3:
        return v.call(x, P[0], P[1], P[2]);
    }
    return v.apply(x, P);
  }
  function _x(v, x) {
    for (var P = -1, M = Array(v); ++P < v; ) M[P] = x(P);
    return M;
  }
  function Tx(v) {
    return function (x) {
      return v(x);
    };
  }
  function Rx(v, x) {
    return v == null ? void 0 : v[x];
  }
  function Ax(v, x) {
    return function (P) {
      return v(x(P));
    };
  }
  var $x = Array.prototype,
    zx = Function.prototype,
    Ja = Object.prototype,
    Yu = Le['__core-js_shared__'],
    es = zx.toString,
    gn = Ja.hasOwnProperty,
    Cm = (function () {
      var v = /[^.]+$/.exec((Yu && Yu.keys && Yu.keys.IE_PROTO) || '');
      return v ? 'Symbol(src)_1.' + v : '';
    })(),
    Em = Ja.toString,
    Lx = es.call(Object),
    Mx = RegExp(
      '^' +
        es
          .call(gn)
          .replace(U, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    ),
    ts = mo ? Le.Buffer : void 0,
    Pm = Le.Symbol,
    _m = Le.Uint8Array,
    Tm = ts ? ts.allocUnsafe : void 0,
    Rm = Ax(Object.getPrototypeOf, Object),
    Am = Object.create,
    Ix = Ja.propertyIsEnumerable,
    Bx = $x.splice,
    Er = Pm ? Pm.toStringTag : void 0,
    ns = (function () {
      try {
        var v = qu(Object, 'defineProperty');
        return v({}, '', {}), v;
      } catch {}
    })(),
    jx = ts ? ts.isBuffer : void 0,
    $m = Math.max,
    Dx = Date.now,
    zm = qu(Le, 'Map'),
    fi = qu(Object, 'create'),
    Nx = (function () {
      function v() {}
      return function (x) {
        if (!_r(x)) return {};
        if (Am) return Am(x);
        v.prototype = x;
        var P = new v();
        return (v.prototype = void 0), P;
      };
    })();
  function Pr(v) {
    var x = -1,
      P = v == null ? 0 : v.length;
    for (this.clear(); ++x < P; ) {
      var M = v[x];
      this.set(M[0], M[1]);
    }
  }
  function Fx() {
    (this.__data__ = fi ? fi(null) : {}), (this.size = 0);
  }
  function Ox(v) {
    var x = this.has(v) && delete this.__data__[v];
    return (this.size -= x ? 1 : 0), x;
  }
  function Vx(v) {
    var x = this.__data__;
    if (fi) {
      var P = x[v];
      return P === r ? void 0 : P;
    }
    return gn.call(x, v) ? x[v] : void 0;
  }
  function Wx(v) {
    var x = this.__data__;
    return fi ? x[v] !== void 0 : gn.call(x, v);
  }
  function Ux(v, x) {
    var P = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (P[v] = fi && x === void 0 ? r : x),
      this
    );
  }
  (Pr.prototype.clear = Fx),
    (Pr.prototype.delete = Ox),
    (Pr.prototype.get = Vx),
    (Pr.prototype.has = Wx),
    (Pr.prototype.set = Ux);
  function vn(v) {
    var x = -1,
      P = v == null ? 0 : v.length;
    for (this.clear(); ++x < P; ) {
      var M = v[x];
      this.set(M[0], M[1]);
    }
  }
  function Hx() {
    (this.__data__ = []), (this.size = 0);
  }
  function Gx(v) {
    var x = this.__data__,
      P = rs(x, v);
    if (P < 0) return !1;
    var M = x.length - 1;
    return P == M ? x.pop() : Bx.call(x, P, 1), --this.size, !0;
  }
  function Kx(v) {
    var x = this.__data__,
      P = rs(x, v);
    return P < 0 ? void 0 : x[P][1];
  }
  function Yx(v) {
    return rs(this.__data__, v) > -1;
  }
  function Xx(v, x) {
    var P = this.__data__,
      M = rs(P, v);
    return M < 0 ? (++this.size, P.push([v, x])) : (P[M][1] = x), this;
  }
  (vn.prototype.clear = Hx),
    (vn.prototype.delete = Gx),
    (vn.prototype.get = Kx),
    (vn.prototype.has = Yx),
    (vn.prototype.set = Xx);
  function po(v) {
    var x = -1,
      P = v == null ? 0 : v.length;
    for (this.clear(); ++x < P; ) {
      var M = v[x];
      this.set(M[0], M[1]);
    }
  }
  function Qx() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Pr(),
        map: new (zm || vn)(),
        string: new Pr(),
      });
  }
  function qx(v) {
    var x = is(this, v).delete(v);
    return (this.size -= x ? 1 : 0), x;
  }
  function Zx(v) {
    return is(this, v).get(v);
  }
  function Jx(v) {
    return is(this, v).has(v);
  }
  function ew(v, x) {
    var P = is(this, v),
      M = P.size;
    return P.set(v, x), (this.size += P.size == M ? 0 : 1), this;
  }
  (po.prototype.clear = Qx),
    (po.prototype.delete = qx),
    (po.prototype.get = Zx),
    (po.prototype.has = Jx),
    (po.prototype.set = ew);
  function go(v) {
    var x = (this.__data__ = new vn(v));
    this.size = x.size;
  }
  function tw() {
    (this.__data__ = new vn()), (this.size = 0);
  }
  function nw(v) {
    var x = this.__data__,
      P = x.delete(v);
    return (this.size = x.size), P;
  }
  function rw(v) {
    return this.__data__.get(v);
  }
  function ow(v) {
    return this.__data__.has(v);
  }
  function iw(v, x) {
    var P = this.__data__;
    if (P instanceof vn) {
      var M = P.__data__;
      if (!zm || M.length < n - 1)
        return M.push([v, x]), (this.size = ++P.size), this;
      P = this.__data__ = new po(M);
    }
    return P.set(v, x), (this.size = P.size), this;
  }
  (go.prototype.clear = tw),
    (go.prototype.delete = nw),
    (go.prototype.get = rw),
    (go.prototype.has = ow),
    (go.prototype.set = iw);
  function aw(v, x) {
    var P = ec(v),
      M = !P && Ju(v),
      K = !P && !M && jm(v),
      ae = !P && !M && !K && Nm(v),
      me = P || M || K || ae,
      G = me ? _x(v.length, String) : [],
      pe = G.length;
    for (var Lt in v)
      (x || gn.call(v, Lt)) &&
        !(
          me &&
          (Lt == 'length' ||
            (K && (Lt == 'offset' || Lt == 'parent')) ||
            (ae &&
              (Lt == 'buffer' || Lt == 'byteLength' || Lt == 'byteOffset')) ||
            Im(Lt, pe))
        ) &&
        G.push(Lt);
    return G;
  }
  function Xu(v, x, P) {
    ((P !== void 0 && !as(v[x], P)) || (P === void 0 && !(x in v))) &&
      Qu(v, x, P);
  }
  function sw(v, x, P) {
    var M = v[x];
    (!(gn.call(v, x) && as(M, P)) || (P === void 0 && !(x in v))) &&
      Qu(v, x, P);
  }
  function rs(v, x) {
    for (var P = v.length; P--; ) if (as(v[P][0], x)) return P;
    return -1;
  }
  function Qu(v, x, P) {
    x == '__proto__' && ns
      ? ns(v, x, { configurable: !0, enumerable: !0, value: P, writable: !0 })
      : (v[x] = P);
  }
  var lw = xw();
  function os(v) {
    return v == null
      ? v === void 0
        ? T
        : p
      : Er && Er in Object(v)
      ? ww(v)
      : Tw(v);
  }
  function Lm(v) {
    return hi(v) && os(v) == s;
  }
  function uw(v) {
    if (!_r(v) || Pw(v)) return !1;
    var x = nc(v) ? Mx : W;
    return x.test(zw(v));
  }
  function cw(v) {
    return hi(v) && Dm(v.length) && !!Y[os(v)];
  }
  function dw(v) {
    if (!_r(v)) return _w(v);
    var x = Bm(v),
      P = [];
    for (var M in v) (M == 'constructor' && (x || !gn.call(v, M))) || P.push(M);
    return P;
  }
  function Mm(v, x, P, M, K) {
    v !== x &&
      lw(
        x,
        function (ae, me) {
          if ((K || (K = new go()), _r(ae))) fw(v, x, me, P, Mm, M, K);
          else {
            var G = M ? M(Zu(v, me), ae, me + '', v, x, K) : void 0;
            G === void 0 && (G = ae), Xu(v, me, G);
          }
        },
        Fm
      );
  }
  function fw(v, x, P, M, K, ae, me) {
    var G = Zu(v, P),
      pe = Zu(x, P),
      Lt = me.get(pe);
    if (Lt) {
      Xu(v, P, Lt);
      return;
    }
    var bt = ae ? ae(G, pe, P + '', v, x, me) : void 0,
      mi = bt === void 0;
    if (mi) {
      var rc = ec(pe),
        oc = !rc && jm(pe),
        Vm = !rc && !oc && Nm(pe);
      (bt = pe),
        rc || oc || Vm
          ? ec(G)
            ? (bt = G)
            : Lw(G)
            ? (bt = yw(G))
            : oc
            ? ((mi = !1), (bt = pw(pe, !0)))
            : Vm
            ? ((mi = !1), (bt = vw(pe, !0)))
            : (bt = [])
          : Mw(pe) || Ju(pe)
          ? ((bt = G),
            Ju(G) ? (bt = Iw(G)) : (!_r(G) || nc(G)) && (bt = kw(pe)))
          : (mi = !1);
    }
    mi && (me.set(pe, bt), K(bt, pe, M, ae, me), me.delete(pe)), Xu(v, P, bt);
  }
  function hw(v, x) {
    return Aw(Rw(v, x, Om), v + '');
  }
  var mw = ns
    ? function (v, x) {
        return ns(v, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: jw(x),
          writable: !0,
        });
      }
    : Om;
  function pw(v, x) {
    if (x) return v.slice();
    var P = v.length,
      M = Tm ? Tm(P) : new v.constructor(P);
    return v.copy(M), M;
  }
  function gw(v) {
    var x = new v.constructor(v.byteLength);
    return new _m(x).set(new _m(v)), x;
  }
  function vw(v, x) {
    var P = x ? gw(v.buffer) : v.buffer;
    return new v.constructor(P, v.byteOffset, v.length);
  }
  function yw(v, x) {
    var P = -1,
      M = v.length;
    for (x || (x = Array(M)); ++P < M; ) x[P] = v[P];
    return x;
  }
  function bw(v, x, P, M) {
    var K = !P;
    P || (P = {});
    for (var ae = -1, me = x.length; ++ae < me; ) {
      var G = x[ae],
        pe = M ? M(P[G], v[G], G, P, v) : void 0;
      pe === void 0 && (pe = v[G]), K ? Qu(P, G, pe) : sw(P, G, pe);
    }
    return P;
  }
  function Sw(v) {
    return hw(function (x, P) {
      var M = -1,
        K = P.length,
        ae = K > 1 ? P[K - 1] : void 0,
        me = K > 2 ? P[2] : void 0;
      for (
        ae = v.length > 3 && typeof ae == 'function' ? (K--, ae) : void 0,
          me && Cw(P[0], P[1], me) && ((ae = K < 3 ? void 0 : ae), (K = 1)),
          x = Object(x);
        ++M < K;

      ) {
        var G = P[M];
        G && v(x, G, M, ae);
      }
      return x;
    });
  }
  function xw(v) {
    return function (x, P, M) {
      for (var K = -1, ae = Object(x), me = M(x), G = me.length; G--; ) {
        var pe = me[v ? G : ++K];
        if (P(ae[pe], pe, ae) === !1) break;
      }
      return x;
    };
  }
  function is(v, x) {
    var P = v.__data__;
    return Ew(x) ? P[typeof x == 'string' ? 'string' : 'hash'] : P.map;
  }
  function qu(v, x) {
    var P = Rx(v, x);
    return uw(P) ? P : void 0;
  }
  function ww(v) {
    var x = gn.call(v, Er),
      P = v[Er];
    try {
      v[Er] = void 0;
      var M = !0;
    } catch {}
    var K = Em.call(v);
    return M && (x ? (v[Er] = P) : delete v[Er]), K;
  }
  function kw(v) {
    return typeof v.constructor == 'function' && !Bm(v) ? Nx(Rm(v)) : {};
  }
  function Im(v, x) {
    var P = typeof v;
    return (
      (x = x ?? a),
      !!x &&
        (P == 'number' || (P != 'symbol' && ue.test(v))) &&
        v > -1 &&
        v % 1 == 0 &&
        v < x
    );
  }
  function Cw(v, x, P) {
    if (!_r(P)) return !1;
    var M = typeof x;
    return (M == 'number' ? tc(P) && Im(x, P.length) : M == 'string' && x in P)
      ? as(P[x], v)
      : !1;
  }
  function Ew(v) {
    var x = typeof v;
    return x == 'string' || x == 'number' || x == 'symbol' || x == 'boolean'
      ? v !== '__proto__'
      : v === null;
  }
  function Pw(v) {
    return !!Cm && Cm in v;
  }
  function Bm(v) {
    var x = v && v.constructor,
      P = (typeof x == 'function' && x.prototype) || Ja;
    return v === P;
  }
  function _w(v) {
    var x = [];
    if (v != null) for (var P in Object(v)) x.push(P);
    return x;
  }
  function Tw(v) {
    return Em.call(v);
  }
  function Rw(v, x, P) {
    return (
      (x = $m(x === void 0 ? v.length - 1 : x, 0)),
      function () {
        for (
          var M = arguments, K = -1, ae = $m(M.length - x, 0), me = Array(ae);
          ++K < ae;

        )
          me[K] = M[x + K];
        K = -1;
        for (var G = Array(x + 1); ++K < x; ) G[K] = M[K];
        return (G[x] = P(me)), Za(v, this, G);
      }
    );
  }
  function Zu(v, x) {
    if (!(x === 'constructor' && typeof v[x] == 'function') && x != '__proto__')
      return v[x];
  }
  var Aw = $w(mw);
  function $w(v) {
    var x = 0,
      P = 0;
    return function () {
      var M = Dx(),
        K = i - (M - P);
      if (((P = M), K > 0)) {
        if (++x >= o) return arguments[0];
      } else x = 0;
      return v.apply(void 0, arguments);
    };
  }
  function zw(v) {
    if (v != null) {
      try {
        return es.call(v);
      } catch {}
      try {
        return v + '';
      } catch {}
    }
    return '';
  }
  function as(v, x) {
    return v === x || (v !== v && x !== x);
  }
  var Ju = Lm(
      (function () {
        return arguments;
      })()
    )
      ? Lm
      : function (v) {
          return hi(v) && gn.call(v, 'callee') && !Ix.call(v, 'callee');
        },
    ec = Array.isArray;
  function tc(v) {
    return v != null && Dm(v.length) && !nc(v);
  }
  function Lw(v) {
    return hi(v) && tc(v);
  }
  var jm = jx || Dw;
  function nc(v) {
    if (!_r(v)) return !1;
    var x = os(v);
    return x == m || x == y || x == u || x == g;
  }
  function Dm(v) {
    return typeof v == 'number' && v > -1 && v % 1 == 0 && v <= a;
  }
  function _r(v) {
    var x = typeof v;
    return v != null && (x == 'object' || x == 'function');
  }
  function hi(v) {
    return v != null && typeof v == 'object';
  }
  function Mw(v) {
    if (!hi(v) || os(v) != h) return !1;
    var x = Rm(v);
    if (x === null) return !0;
    var P = gn.call(x, 'constructor') && x.constructor;
    return typeof P == 'function' && P instanceof P && es.call(P) == Lx;
  }
  var Nm = di ? Tx(di) : cw;
  function Iw(v) {
    return bw(v, Fm(v));
  }
  function Fm(v) {
    return tc(v) ? aw(v, !0) : dw(v);
  }
  var Bw = Sw(function (v, x, P, M) {
    Mm(v, x, P, M);
  });
  function jw(v) {
    return function () {
      return v;
    };
  }
  function Om(v) {
    return v;
  }
  function Dw() {
    return !1;
  }
  e.exports = Bw;
})(Ol, Ol.exports);
var xP = Ol.exports;
const cn = Df(xP);
var wP = (e) => /!(important)?$/.test(e),
  v0 = (e) =>
    typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e,
  kP = (e, t) => (n) => {
    const r = String(t),
      o = wP(r),
      i = v0(r),
      a = e ? `${e}.${i}` : i;
    let s = qt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = v0(s)), o ? `${s} !important` : s;
  };
function Kh(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = kP(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Ts =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Mt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = Kh({ scale: e, transform: t })), r;
  };
}
var CP =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === 'rtl' ? e : t;
function EP(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: CP(t),
    transform: n ? Kh({ scale: n, compose: r }) : r,
  };
}
var hb = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
];
function PP() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...hb,
  ].join(' ');
}
function _P() {
  return [
    'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
    ...hb,
  ].join(' ');
}
var TP = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    filter: [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)',
    ].join(' '),
  },
  RP = {
    backdropFilter: [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)',
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
  };
function AP(e) {
  return {
    '--chakra-ring-offset-shadow':
      'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
    '--chakra-ring-shadow':
      'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
    '--chakra-ring-width': e,
    boxShadow: [
      'var(--chakra-ring-offset-shadow)',
      'var(--chakra-ring-shadow)',
      'var(--chakra-shadow, 0 0 #0000)',
    ].join(', '),
  };
}
var $P = {
    'row-reverse': {
      space: '--chakra-space-x-reverse',
      divide: '--chakra-divide-x-reverse',
    },
    'column-reverse': {
      space: '--chakra-space-y-reverse',
      divide: '--chakra-divide-y-reverse',
    },
  },
  cf = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  zP = new Set(Object.values(cf)),
  df = new Set([
    'none',
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
  ]),
  LP = (e) => e.trim();
function MP(e, t) {
  if (e == null || df.has(e)) return e;
  if (!(ff(e) || df.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes('-gradient') ? i : `${i}-gradient`,
    [l, ...u] = a.split(',').map(LP).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in cf ? cf[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (zP.has(f)) return f;
    const m = f.indexOf(' '),
      [y, b] = m !== -1 ? [f.substr(0, m), f.substr(m + 1)] : [f],
      E = ff(b) ? b : b && b.split(' '),
      p = `colors.${y}`,
      h = p in t.__cssMap ? t.__cssMap[p].varRef : y;
    return E ? [h, ...(Array.isArray(E) ? E : [E])].join(' ') : h;
  });
  return `${s}(${d.join(', ')})`;
}
var ff = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
  IP = (e, t) => MP(e, t ?? {});
function BP(e) {
  return /^var\(--.+\)$/.test(e);
}
var jP = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), '');
    return { unitless: !n, value: t, unit: n };
  },
  nn = (e) => (t) => `${e}(${t})`,
  Q = {
    filter(e) {
      return e !== 'auto' ? e : TP;
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : RP;
    },
    ring(e) {
      return AP(Q.px(e));
    },
    bgClip(e) {
      return e === 'text'
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === 'auto' ? PP() : e === 'auto-gpu' ? _P() : e;
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = jP(e);
      return t || typeof e == 'number' ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != 'number' || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: 'right', right: 'left' };
      return t.direction === 'rtl' ? n[e] : e;
    },
    degree(e) {
      if (BP(e) || e == null) return e;
      const t = typeof e == 'string' && !e.endsWith('deg');
      return typeof e == 'number' || t ? `${e}deg` : e;
    },
    gradient: IP,
    blur: nn('blur'),
    opacity: nn('opacity'),
    brightness: nn('brightness'),
    contrast: nn('contrast'),
    dropShadow: nn('drop-shadow'),
    grayscale: nn('grayscale'),
    hueRotate: nn('hue-rotate'),
    invert: nn('invert'),
    saturate: nn('saturate'),
    sepia: nn('sepia'),
    bgImage(e) {
      return e == null || ff(e) || df.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none';
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = $P[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  k = {
    borderWidths: Mt('borderWidths'),
    borderStyles: Mt('borderStyles'),
    colors: Mt('colors'),
    borders: Mt('borders'),
    gradients: Mt('gradients', Q.gradient),
    radii: Mt('radii', Q.px),
    space: Mt('space', Ts(Q.vh, Q.px)),
    spaceT: Mt('space', Ts(Q.vh, Q.px)),
    degreeT(e) {
      return { property: e, transform: Q.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Kh({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Mt('sizes', Ts(Q.vh, Q.px)),
    sizesT: Mt('sizes', Ts(Q.vh, Q.fraction)),
    shadows: Mt('shadows'),
    logical: EP,
    blur: Mt('blur', Q.blur),
  },
  el = {
    background: k.colors('background'),
    backgroundColor: k.colors('backgroundColor'),
    backgroundImage: k.gradients('backgroundImage'),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Q.bgClip },
    bgSize: k.prop('backgroundSize'),
    bgPosition: k.prop('backgroundPosition'),
    bg: k.colors('background'),
    bgColor: k.colors('backgroundColor'),
    bgPos: k.prop('backgroundPosition'),
    bgRepeat: k.prop('backgroundRepeat'),
    bgAttachment: k.prop('backgroundAttachment'),
    bgGradient: k.gradients('backgroundImage'),
    bgClip: { transform: Q.bgClip },
  };
Object.assign(el, { bgImage: el.backgroundImage, bgImg: el.backgroundImage });
var q = {
  border: k.borders('border'),
  borderWidth: k.borderWidths('borderWidth'),
  borderStyle: k.borderStyles('borderStyle'),
  borderColor: k.colors('borderColor'),
  borderRadius: k.radii('borderRadius'),
  borderTop: k.borders('borderTop'),
  borderBlockStart: k.borders('borderBlockStart'),
  borderTopLeftRadius: k.radii('borderTopLeftRadius'),
  borderStartStartRadius: k.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: k.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: k.radii('borderTopRightRadius'),
  borderStartEndRadius: k.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: k.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: k.borders('borderRight'),
  borderInlineEnd: k.borders('borderInlineEnd'),
  borderBottom: k.borders('borderBottom'),
  borderBlockEnd: k.borders('borderBlockEnd'),
  borderBottomLeftRadius: k.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: k.radii('borderBottomRightRadius'),
  borderLeft: k.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: k.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: k.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: k.borders(['borderLeft', 'borderRight']),
  borderInline: k.borders('borderInline'),
  borderY: k.borders(['borderTop', 'borderBottom']),
  borderBlock: k.borders('borderBlock'),
  borderTopWidth: k.borderWidths('borderTopWidth'),
  borderBlockStartWidth: k.borderWidths('borderBlockStartWidth'),
  borderTopColor: k.colors('borderTopColor'),
  borderBlockStartColor: k.colors('borderBlockStartColor'),
  borderTopStyle: k.borderStyles('borderTopStyle'),
  borderBlockStartStyle: k.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: k.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: k.borderWidths('borderBlockEndWidth'),
  borderBottomColor: k.colors('borderBottomColor'),
  borderBlockEndColor: k.colors('borderBlockEndColor'),
  borderBottomStyle: k.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: k.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: k.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: k.borderWidths('borderInlineStartWidth'),
  borderLeftColor: k.colors('borderLeftColor'),
  borderInlineStartColor: k.colors('borderInlineStartColor'),
  borderLeftStyle: k.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: k.borderStyles('borderInlineStartStyle'),
  borderRightWidth: k.borderWidths('borderRightWidth'),
  borderInlineEndWidth: k.borderWidths('borderInlineEndWidth'),
  borderRightColor: k.colors('borderRightColor'),
  borderInlineEndColor: k.colors('borderInlineEndColor'),
  borderRightStyle: k.borderStyles('borderRightStyle'),
  borderInlineEndStyle: k.borderStyles('borderInlineEndStyle'),
  borderTopRadius: k.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: k.radii([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
  borderLeftRadius: k.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: k.radii([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
};
Object.assign(q, {
  rounded: q.borderRadius,
  roundedTop: q.borderTopRadius,
  roundedTopLeft: q.borderTopLeftRadius,
  roundedTopRight: q.borderTopRightRadius,
  roundedTopStart: q.borderStartStartRadius,
  roundedTopEnd: q.borderStartEndRadius,
  roundedBottom: q.borderBottomRadius,
  roundedBottomLeft: q.borderBottomLeftRadius,
  roundedBottomRight: q.borderBottomRightRadius,
  roundedBottomStart: q.borderEndStartRadius,
  roundedBottomEnd: q.borderEndEndRadius,
  roundedLeft: q.borderLeftRadius,
  roundedRight: q.borderRightRadius,
  roundedStart: q.borderInlineStartRadius,
  roundedEnd: q.borderInlineEndRadius,
  borderStart: q.borderInlineStart,
  borderEnd: q.borderInlineEnd,
  borderTopStartRadius: q.borderStartStartRadius,
  borderTopEndRadius: q.borderStartEndRadius,
  borderBottomStartRadius: q.borderEndStartRadius,
  borderBottomEndRadius: q.borderEndEndRadius,
  borderStartRadius: q.borderInlineStartRadius,
  borderEndRadius: q.borderInlineEndRadius,
  borderStartWidth: q.borderInlineStartWidth,
  borderEndWidth: q.borderInlineEndWidth,
  borderStartColor: q.borderInlineStartColor,
  borderEndColor: q.borderInlineEndColor,
  borderStartStyle: q.borderInlineStartStyle,
  borderEndStyle: q.borderInlineEndStyle,
});
var DP = {
    color: k.colors('color'),
    textColor: k.colors('color'),
    fill: k.colors('fill'),
    stroke: k.colors('stroke'),
  },
  hf = {
    boxShadow: k.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: k.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: k.prop('backgroundBlendMode'),
    opacity: !0,
  };
Object.assign(hf, { shadow: hf.boxShadow });
var NP = {
    filter: { transform: Q.filter },
    blur: k.blur('--chakra-blur'),
    brightness: k.propT('--chakra-brightness', Q.brightness),
    contrast: k.propT('--chakra-contrast', Q.contrast),
    hueRotate: k.degreeT('--chakra-hue-rotate'),
    invert: k.propT('--chakra-invert', Q.invert),
    saturate: k.propT('--chakra-saturate', Q.saturate),
    dropShadow: k.propT('--chakra-drop-shadow', Q.dropShadow),
    backdropFilter: { transform: Q.backdropFilter },
    backdropBlur: k.blur('--chakra-backdrop-blur'),
    backdropBrightness: k.propT('--chakra-backdrop-brightness', Q.brightness),
    backdropContrast: k.propT('--chakra-backdrop-contrast', Q.contrast),
    backdropHueRotate: k.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: k.propT('--chakra-backdrop-invert', Q.invert),
    backdropSaturate: k.propT('--chakra-backdrop-saturate', Q.saturate),
  },
  Vl = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Q.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: k.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: k.space('gap'),
    rowGap: k.space('rowGap'),
    columnGap: k.space('columnGap'),
  };
Object.assign(Vl, { flexDir: Vl.flexDirection });
var mb = {
    gridGap: k.space('gridGap'),
    gridColumnGap: k.space('gridColumnGap'),
    gridRowGap: k.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  FP = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Q.outline },
    outlineOffset: !0,
    outlineColor: k.colors('outlineColor'),
  },
  Bt = {
    width: k.sizesT('width'),
    inlineSize: k.sizesT('inlineSize'),
    height: k.sizes('height'),
    blockSize: k.sizes('blockSize'),
    boxSize: k.sizes(['width', 'height']),
    minWidth: k.sizes('minWidth'),
    minInlineSize: k.sizes('minInlineSize'),
    minHeight: k.sizes('minHeight'),
    minBlockSize: k.sizes('minBlockSize'),
    maxWidth: k.sizes('maxWidth'),
    maxInlineSize: k.sizes('maxInlineSize'),
    maxHeight: k.sizes('maxHeight'),
    maxBlockSize: k.sizes('maxBlockSize'),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: 'breakpoints',
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: 'none' },
        };
      },
    },
    hideBelow: {
      scale: 'breakpoints',
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: 'none' },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: k.propT('float', Q.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Bt, {
  w: Bt.width,
  h: Bt.height,
  minW: Bt.minWidth,
  maxW: Bt.maxWidth,
  minH: Bt.minHeight,
  maxH: Bt.maxHeight,
  overscroll: Bt.overscrollBehavior,
  overscrollX: Bt.overscrollBehaviorX,
  overscrollY: Bt.overscrollBehaviorY,
});
var OP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: k.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: k.prop('listStyleImage'),
};
function VP(e, t, n, r) {
  const o = typeof t == 'string' ? t.split('.') : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var WP = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > 'u') return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  UP = WP(VP),
  HP = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  GP = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  Lc = (e, t, n) => {
    const r = {},
      o = UP(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  KP = {
    srOnly: {
      transform(e) {
        return e === !0 ? HP : e === 'focusable' ? GP : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => Lc(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => Lc(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => Lc(t, e, n) },
  },
  Yi = {
    position: !0,
    pos: k.prop('position'),
    zIndex: k.prop('zIndex', 'zIndices'),
    inset: k.spaceT('inset'),
    insetX: k.spaceT(['left', 'right']),
    insetInline: k.spaceT('insetInline'),
    insetY: k.spaceT(['top', 'bottom']),
    insetBlock: k.spaceT('insetBlock'),
    top: k.spaceT('top'),
    insetBlockStart: k.spaceT('insetBlockStart'),
    bottom: k.spaceT('bottom'),
    insetBlockEnd: k.spaceT('insetBlockEnd'),
    left: k.spaceT('left'),
    insetInlineStart: k.logical({
      scale: 'space',
      property: { ltr: 'left', rtl: 'right' },
    }),
    right: k.spaceT('right'),
    insetInlineEnd: k.logical({
      scale: 'space',
      property: { ltr: 'right', rtl: 'left' },
    }),
  };
Object.assign(Yi, {
  insetStart: Yi.insetInlineStart,
  insetEnd: Yi.insetInlineEnd,
});
var YP = {
    ring: { transform: Q.ring },
    ringColor: k.colors('--chakra-ring-color'),
    ringOffset: k.prop('--chakra-ring-offset-width'),
    ringOffsetColor: k.colors('--chakra-ring-offset-color'),
    ringInset: k.prop('--chakra-ring-inset'),
  },
  de = {
    margin: k.spaceT('margin'),
    marginTop: k.spaceT('marginTop'),
    marginBlockStart: k.spaceT('marginBlockStart'),
    marginRight: k.spaceT('marginRight'),
    marginInlineEnd: k.spaceT('marginInlineEnd'),
    marginBottom: k.spaceT('marginBottom'),
    marginBlockEnd: k.spaceT('marginBlockEnd'),
    marginLeft: k.spaceT('marginLeft'),
    marginInlineStart: k.spaceT('marginInlineStart'),
    marginX: k.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: k.spaceT('marginInline'),
    marginY: k.spaceT(['marginTop', 'marginBottom']),
    marginBlock: k.spaceT('marginBlock'),
    padding: k.space('padding'),
    paddingTop: k.space('paddingTop'),
    paddingBlockStart: k.space('paddingBlockStart'),
    paddingRight: k.space('paddingRight'),
    paddingBottom: k.space('paddingBottom'),
    paddingBlockEnd: k.space('paddingBlockEnd'),
    paddingLeft: k.space('paddingLeft'),
    paddingInlineStart: k.space('paddingInlineStart'),
    paddingInlineEnd: k.space('paddingInlineEnd'),
    paddingX: k.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: k.space('paddingInline'),
    paddingY: k.space(['paddingTop', 'paddingBottom']),
    paddingBlock: k.space('paddingBlock'),
  };
Object.assign(de, {
  m: de.margin,
  mt: de.marginTop,
  mr: de.marginRight,
  me: de.marginInlineEnd,
  marginEnd: de.marginInlineEnd,
  mb: de.marginBottom,
  ml: de.marginLeft,
  ms: de.marginInlineStart,
  marginStart: de.marginInlineStart,
  mx: de.marginX,
  my: de.marginY,
  p: de.padding,
  pt: de.paddingTop,
  py: de.paddingY,
  px: de.paddingX,
  pb: de.paddingBottom,
  pl: de.paddingLeft,
  ps: de.paddingInlineStart,
  paddingStart: de.paddingInlineStart,
  pr: de.paddingRight,
  pe: de.paddingInlineEnd,
  paddingEnd: de.paddingInlineEnd,
});
var XP = {
    textDecorationColor: k.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: k.shadows('textShadow'),
  },
  QP = {
    clipPath: !0,
    transform: k.propT('transform', Q.transform),
    transformOrigin: !0,
    translateX: k.spaceT('--chakra-translate-x'),
    translateY: k.spaceT('--chakra-translate-y'),
    skewX: k.degreeT('--chakra-skew-x'),
    skewY: k.degreeT('--chakra-skew-y'),
    scaleX: k.prop('--chakra-scale-x'),
    scaleY: k.prop('--chakra-scale-y'),
    scale: k.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: k.degreeT('--chakra-rotate'),
  },
  qP = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: k.prop('transitionDuration', 'transition.duration'),
    transitionProperty: k.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: k.prop(
      'transitionTimingFunction',
      'transition.easing'
    ),
  },
  ZP = {
    fontFamily: k.prop('fontFamily', 'fonts'),
    fontSize: k.prop('fontSize', 'fontSizes', Q.px),
    fontWeight: k.prop('fontWeight', 'fontWeights'),
    lineHeight: k.prop('lineHeight', 'lineHeights'),
    letterSpacing: k.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
      },
    },
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)',
      },
      property: '--chakra-line-clamp',
    },
  },
  JP = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: k.spaceT('scrollMargin'),
    scrollMarginTop: k.spaceT('scrollMarginTop'),
    scrollMarginBottom: k.spaceT('scrollMarginBottom'),
    scrollMarginLeft: k.spaceT('scrollMarginLeft'),
    scrollMarginRight: k.spaceT('scrollMarginRight'),
    scrollMarginX: k.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: k.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: k.spaceT('scrollPadding'),
    scrollPaddingTop: k.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: k.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: k.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: k.spaceT('scrollPaddingRight'),
    scrollPaddingX: k.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: k.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
  };
function pb(e) {
  return qt(e) && e.reference ? e.reference : String(e);
}
var Iu = (e, ...t) => t.map(pb).join(` ${e} `).replace(/calc/g, ''),
  y0 = (...e) => `calc(${Iu('+', ...e)})`,
  b0 = (...e) => `calc(${Iu('-', ...e)})`,
  mf = (...e) => `calc(${Iu('*', ...e)})`,
  S0 = (...e) => `calc(${Iu('/', ...e)})`,
  x0 = (e) => {
    const t = pb(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : mf(t, -1);
  },
  Nr = Object.assign(
    (e) => ({
      add: (...t) => Nr(y0(e, ...t)),
      subtract: (...t) => Nr(b0(e, ...t)),
      multiply: (...t) => Nr(mf(e, ...t)),
      divide: (...t) => Nr(S0(e, ...t)),
      negate: () => Nr(x0(e)),
      toString: () => e.toString(),
    }),
    { add: y0, subtract: b0, multiply: mf, divide: S0, negate: x0 }
  );
function e_(e, t = '-') {
  return e.replace(/\s+/g, t);
}
function t_(e) {
  const t = e_(e.toString());
  return r_(n_(t));
}
function n_(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace('.', '\\.')
    : e;
}
function r_(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&');
}
function o_(e, t = '') {
  return [t, e].filter(Boolean).join('-');
}
function i_(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`;
}
function a_(e, t = '') {
  return t_(`--${o_(e, t)}`);
}
function O(e, t, n) {
  const r = a_(e, n);
  return { variable: r, reference: i_(r, t) };
}
function s_(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = O(`${e}-${o}`, i);
      continue;
    }
    n[r] = O(`${e}-${r}`);
  }
  return n;
}
function l_(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function u_(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), '');
  return { unitless: !n, value: t, unit: n };
}
function pf(e) {
  if (e == null) return e;
  const { unitless: t } = u_(e);
  return t || typeof e == 'number' ? `${e}px` : e;
}
var gb = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Yh = (e) => Object.fromEntries(Object.entries(e).sort(gb));
function w0(e) {
  const t = Yh(e);
  return Object.assign(Object.values(t), t);
}
function c_(e) {
  const t = Object.keys(Yh(e));
  return new Set(t);
}
function k0(e) {
  var t;
  if (!e) return e;
  e = (t = pf(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == 'number'
    ? `${e + n}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Li(e, t) {
  const n = ['@media screen'];
  return (
    e && n.push('and', `(min-width: ${pf(e)})`),
    t && n.push('and', `(max-width: ${pf(t)})`),
    n.join(' ')
  );
}
function d_(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : '0px';
  const n = w0(e),
    r = Object.entries(e)
      .sort(gb)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? k0(d) : void 0),
          {
            _minW: k0(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: Li(null, d),
            minWQuery: Li(s),
            minMaxQuery: Li(s, d),
          }
        );
      }),
    o = c_(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Yh(e),
    asArray: w0(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [null, ...n.map((a) => Li(a)).slice(1)],
    toArrayValue(a) {
      if (!qt(a)) throw new Error('toArrayValue: value must be an object');
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; l_(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error('toObjectValue: value must be an array');
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var Ve = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Vn = (e) => vb((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  yn = (e) => vb((t) => e(t, '~ &'), '[data-peer]', '.peer'),
  vb = (e, ...t) => t.map(e).join(', '),
  Bu = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within',
    _focusVisible: '&:focus-visible, &[data-focus-visible]',
    _disabled:
      '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&[aria-checked=true], &[data-checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _firstLetter: '&::first-letter',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate:
      '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _groupHover: Vn(Ve.hover),
    _peerHover: yn(Ve.hover),
    _groupFocus: Vn(Ve.focus),
    _peerFocus: yn(Ve.focus),
    _groupFocusVisible: Vn(Ve.focusVisible),
    _peerFocusVisible: yn(Ve.focusVisible),
    _groupActive: Vn(Ve.active),
    _peerActive: yn(Ve.active),
    _groupDisabled: Vn(Ve.disabled),
    _peerDisabled: yn(Ve.disabled),
    _groupInvalid: Vn(Ve.invalid),
    _peerInvalid: yn(Ve.invalid),
    _groupChecked: Vn(Ve.checked),
    _peerChecked: yn(Ve.checked),
    _groupFocusWithin: Vn(Ve.focusWithin),
    _peerFocusWithin: yn(Ve.focusWithin),
    _peerPlaceholderShown: yn(Ve.placeholderShown),
    _placeholder: '&::placeholder',
    _placeholderShown: '&:placeholder-shown',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &, &[dir=rtl]',
    _ltr: '[dir=ltr] &, &[dir=ltr]',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
    _light:
      '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
    _horizontal: '&[data-orientation=horizontal]',
    _vertical: '&[data-orientation=vertical]',
  },
  yb = Object.keys(Bu);
function C0(e, t) {
  return O(String(e).replace(/\./g, '-'), void 0, t);
}
function f_(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = C0(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!a) {
      if (o.startsWith('space')) {
        const f = o.split('.'),
          [m, ...y] = f,
          b = `${m}.-${y.join('.')}`,
          E = Nr.negate(s),
          p = Nr.negate(u);
        r[b] = { value: E, var: l, varRef: p };
      }
      (n[l] = s), (r[o] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const y = [String(o).split('.')[0], f].join('.');
        if (!e[y]) return f;
        const { reference: E } = C0(y, t == null ? void 0 : t.cssVarPrefix);
        return E;
      },
      d = qt(s) ? s : { default: s };
    (n = cn(
      n,
      Object.entries(d).reduce((f, [m, y]) => {
        var b, E;
        if (!y) return f;
        const p = c(`${y}`);
        if (m === 'default') return (f[l] = p), f;
        const h = (E = (b = Bu) == null ? void 0 : b[m]) != null ? E : m;
        return (f[h] = { [l]: p }), f;
      }, {})
    )),
      (r[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: n, cssMap: r };
}
function h_(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function m_(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function p_(e) {
  return typeof e == 'object' && e != null && !Array.isArray(e);
}
function E0(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (p_(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c,
          m = [...s, f];
        if (r != null && r(a, m)) return t(a, s);
        u[f] = i(d, m);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var g_ = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'gradients',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
  'breakpoints',
];
function v_(e) {
  return m_(e, g_);
}
function y_(e) {
  return e.semanticTokens;
}
function b_(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var S_ = (e) => yb.includes(e) || e === 'default';
function x_({ tokens: e, semanticTokens: t }) {
  const n = {};
  return (
    E0(e, (r, o) => {
      r != null && (n[o.join('.')] = { isSemantic: !1, value: r });
    }),
    E0(
      t,
      (r, o) => {
        r != null && (n[o.join('.')] = { isSemantic: !0, value: r });
      },
      { stop: (r) => Object.keys(r).every(S_) }
    ),
    n
  );
}
function w_(e) {
  var t;
  const n = b_(e),
    r = v_(n),
    o = y_(n),
    i = x_({ tokens: r, semanticTokens: o }),
    a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = f_(i, { cssVarPrefix: a });
  return (
    Object.assign(n, {
      __cssVars: {
        ...{
          '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-ring-offset-width': '0px',
          '--chakra-ring-offset-color': '#fff',
          '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
          '--chakra-ring-offset-shadow': '0 0 #0000',
          '--chakra-ring-shadow': '0 0 #0000',
          '--chakra-space-x-reverse': '0',
          '--chakra-space-y-reverse': '0',
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: d_(n.breakpoints),
    }),
    n
  );
}
var Xh = cn(
  {},
  el,
  q,
  DP,
  Vl,
  Bt,
  NP,
  YP,
  FP,
  mb,
  KP,
  Yi,
  hf,
  de,
  JP,
  ZP,
  XP,
  QP,
  OP,
  qP
);
Object.assign({}, de, Bt, Vl, mb, Yi);
var k_ = [...Object.keys(Xh), ...yb],
  C_ = { ...Xh, ...Bu },
  E_ = (e) => e in C_,
  P_ = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = nr(e[a], t);
      if (s == null) continue;
      if (((s = qt(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function __(e) {
  const t = [];
  let n = '',
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === '('
      ? ((r = !0), (n += i))
      : i === ')'
      ? ((r = !1), (n += i))
      : i === ',' && !r
      ? (t.push(n), (n = ''))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function T_(e) {
  return /^var\(--.+\)$/.test(e);
}
var R_ = (e, t) => e.startsWith('--') && typeof t == 'string' && !T_(t),
  A_ = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = __(t);
    return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t;
  };
function $_(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = nr(i, r),
        d = P_(c)(r);
      let f = {};
      for (let m in d) {
        const y = d[m];
        let b = nr(y, r);
        m in n && (m = n[m]), R_(m, b) && (b = A_(r, b));
        let E = t[m];
        if ((E === !0 && (E = { property: m }), qt(b))) {
          (f[m] = (s = f[m]) != null ? s : {}), (f[m] = cn({}, f[m], o(b, !0)));
          continue;
        }
        let p =
          (u =
            (l = E == null ? void 0 : E.transform) == null
              ? void 0
              : l.call(E, b, r, c)) != null
            ? u
            : b;
        p = E != null && E.processResult ? o(p, !0) : p;
        const h = nr(E == null ? void 0 : E.property, r);
        if (!a && E != null && E.static) {
          const g = nr(E.static, r);
          f = cn({}, f, g);
        }
        if (h && Array.isArray(h)) {
          for (const g of h) f[g] = p;
          continue;
        }
        if (h) {
          h === '&' && qt(p) ? (f = cn({}, f, p)) : (f[h] = p);
          continue;
        }
        if (qt(p)) {
          f = cn({}, f, p);
          continue;
        }
        f[m] = p;
      }
      return f;
    };
  return o;
}
var bb = (e) => (t) => $_({ theme: t, pseudos: Bu, configs: Xh })(e);
function le(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function z_(e, t) {
  if (Array.isArray(e)) return e;
  if (qt(e)) return t(e);
  if (e != null) return [e];
}
function L_(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function M_(e) {
  const t = e.__breakpoints;
  return function (r, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = z_(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      m = !!r.parts;
    for (let y = 0; y < d; y++) {
      const b = t.details[y],
        E = t.details[L_(c, y)],
        p = Li(b.minW, E == null ? void 0 : E._minW),
        h = nr((s = r[o]) == null ? void 0 : s[c[y]], a);
      if (h) {
        if (m) {
          (l = r.parts) == null ||
            l.forEach((g) => {
              cn(u, { [g]: f ? h[g] : { [p]: h[g] } });
            });
          continue;
        }
        if (!m) {
          f ? cn(u, h) : (u[p] = h);
          continue;
        }
        u[p] = h;
      }
    }
    return u;
  };
}
function I_(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      a = M_(i);
    return cn(
      {},
      nr((n = e.baseStyle) != null ? n : {}, t),
      a(e, 'sizes', o, t),
      a(e, 'variants', r, t)
    );
  };
}
function xr(e) {
  return h_(e, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
var B_ = {
    common:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  j_ = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  D_ = {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms',
  },
  N_ = { property: B_, easing: j_, duration: D_ },
  F_ = N_,
  O_ = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  V_ = O_,
  W_ = {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  },
  U_ = W_,
  H_ = {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  G_ = H_,
  K_ = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
    },
    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666',
    },
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },
    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
    linkedin: {
      50: '#E8F4F9',
      100: '#CFEDFB',
      200: '#9BDAF3',
      300: '#68C7EC',
      400: '#34B3E4',
      500: '#00A0DC',
      600: '#008CC9',
      700: '#0077B5',
      800: '#005E93',
      900: '#004471',
    },
    facebook: {
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B',
    },
    messenger: {
      50: '#D0E6FF',
      100: '#B9DAFF',
      200: '#A2CDFF',
      300: '#7AB8FF',
      400: '#2E90FF',
      500: '#0078FF',
      600: '#0063D1',
      700: '#0052AC',
      800: '#003C7E',
      900: '#002C5C',
    },
    whatsapp: {
      50: '#dffeec',
      100: '#b9f5d0',
      200: '#90edb3',
      300: '#65e495',
      400: '#3cdd78',
      500: '#22c35e',
      600: '#179848',
      700: '#0c6c33',
      800: '#01421c',
      900: '#001803',
    },
    twitter: {
      50: '#E5F4FD',
      100: '#C8E9FB',
      200: '#A8DCFA',
      300: '#83CDF7',
      400: '#57BBF5',
      500: '#1DA1F2',
      600: '#1A94DA',
      700: '#1681BF',
      800: '#136B9E',
      900: '#0D4D71',
    },
    telegram: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
  Y_ = K_,
  X_ = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  Q_ = X_,
  q_ = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  },
  Z_ = q_,
  J_ = {
    none: 0,
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  e5 = J_,
  t5 = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      '3xs': '0.45rem',
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  },
  Sb = t5,
  xb = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  n5 = {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    prose: '60ch',
  },
  r5 = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  o5 = { ...xb, ...n5, container: r5 },
  wb = o5,
  i5 = {
    breakpoints: G_,
    zIndices: V_,
    radii: Q_,
    blur: e5,
    colors: Y_,
    ...Sb,
    sizes: wb,
    shadows: Z_,
    space: xb,
    borders: U_,
    transition: F_,
  },
  { defineMultiStyleConfig: a5, definePartsStyle: Mi } = le([
    'stepper',
    'step',
    'title',
    'description',
    'indicator',
    'separator',
    'icon',
    'number',
  ]),
  wn = O('stepper-indicator-size'),
  Lo = O('stepper-icon-size'),
  Mo = O('stepper-title-font-size'),
  Ii = O('stepper-description-font-size'),
  Ci = O('stepper-accent-color'),
  s5 = Mi(({ colorScheme: e }) => ({
    stepper: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4',
      '&[data-orientation=vertical]': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      '&[data-orientation=horizontal]': {
        flexDirection: 'row',
        alignItems: 'center',
      },
      [Ci.variable]: `colors.${e}.500`,
      _dark: { [Ci.variable]: `colors.${e}.200` },
    },
    title: { fontSize: Mo.reference, fontWeight: 'medium' },
    description: { fontSize: Ii.reference, color: 'chakra-subtle-text' },
    number: { fontSize: Mo.reference },
    step: {
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      gap: '2',
      '&[data-orientation=horizontal]': { alignItems: 'center' },
      flex: '1',
      '&:last-of-type:not([data-stretch])': { flex: 'initial' },
    },
    icon: { flexShrink: 0, width: Lo.reference, height: Lo.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: 'full',
      width: wn.reference,
      height: wn.reference,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&[data-status=active]': {
        borderWidth: '2px',
        borderColor: Ci.reference,
      },
      '&[data-status=complete]': {
        bg: Ci.reference,
        color: 'chakra-inverse-text',
      },
      '&[data-status=incomplete]': { borderWidth: '2px' },
    },
    separator: {
      bg: 'chakra-border-color',
      flex: '1',
      '&[data-status=complete]': { bg: Ci.reference },
      '&[data-orientation=horizontal]': {
        width: '100%',
        height: '2px',
        marginStart: '2',
      },
      '&[data-orientation=vertical]': {
        width: '2px',
        position: 'absolute',
        height: '100%',
        maxHeight: `calc(100% - ${wn.reference} - 8px)`,
        top: `calc(${wn.reference} + 4px)`,
        insetStart: `calc(${wn.reference} / 2 - 1px)`,
      },
    },
  })),
  l5 = a5({
    baseStyle: s5,
    sizes: {
      xs: Mi({
        stepper: {
          [wn.variable]: 'sizes.4',
          [Lo.variable]: 'sizes.3',
          [Mo.variable]: 'fontSizes.xs',
          [Ii.variable]: 'fontSizes.xs',
        },
      }),
      sm: Mi({
        stepper: {
          [wn.variable]: 'sizes.6',
          [Lo.variable]: 'sizes.4',
          [Mo.variable]: 'fontSizes.sm',
          [Ii.variable]: 'fontSizes.xs',
        },
      }),
      md: Mi({
        stepper: {
          [wn.variable]: 'sizes.8',
          [Lo.variable]: 'sizes.5',
          [Mo.variable]: 'fontSizes.md',
          [Ii.variable]: 'fontSizes.sm',
        },
      }),
      lg: Mi({
        stepper: {
          [wn.variable]: 'sizes.10',
          [Lo.variable]: 'sizes.6',
          [Mo.variable]: 'fontSizes.lg',
          [Ii.variable]: 'fontSizes.md',
        },
      }),
    },
    defaultProps: { size: 'md', colorScheme: 'blue' },
  });
function te(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
    );
  }
  function o(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return te(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return te(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const m = `chakra-${(['container', 'root'].includes(c ?? '') ? [e] : [e, c])
      .filter(Boolean)
      .join('__')}`;
    return { className: m, selector: `.${m}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var u5 = te('accordion')
    .parts('root', 'container', 'button', 'panel')
    .extend('icon'),
  c5 = te('alert')
    .parts('title', 'description', 'container')
    .extend('icon', 'spinner'),
  d5 = te('avatar')
    .parts('label', 'badge', 'container')
    .extend('excessLabel', 'group'),
  f5 = te('breadcrumb').parts('link', 'item', 'container').extend('separator');
te('button').parts();
var h5 = te('checkbox').parts('control', 'icon', 'container').extend('label');
te('progress').parts('track', 'filledTrack').extend('label');
var m5 = te('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  p5 = te('editable').parts('preview', 'input', 'textarea'),
  g5 = te('form').parts('container', 'requiredIndicator', 'helperText'),
  v5 = te('formError').parts('text', 'icon'),
  y5 = te('input').parts('addon', 'field', 'element'),
  b5 = te('list').parts('container', 'item', 'icon'),
  S5 = te('menu')
    .parts('button', 'list', 'item')
    .extend('groupTitle', 'command', 'divider'),
  x5 = te('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  w5 = te('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
te('pininput').parts('field');
var k5 = te('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  C5 = te('progress').parts('label', 'filledTrack', 'track'),
  E5 = te('radio').parts('container', 'control', 'label'),
  P5 = te('select').parts('field', 'icon'),
  _5 = te('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  T5 = te('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  R5 = te('switch').parts('container', 'track', 'thumb'),
  A5 = te('table').parts(
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'tfoot',
    'caption'
  ),
  $5 = te('tabs').parts(
    'root',
    'tab',
    'tablist',
    'tabpanel',
    'tabpanels',
    'indicator'
  ),
  z5 = te('tag').parts('container', 'label', 'closeButton'),
  L5 = te('card').parts('container', 'header', 'body', 'footer');
function Ur(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class M5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Bi = M5;
function Qh(e) {
  if (typeof e != 'string') throw new Bi(e);
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0];
  let t = e.trim();
  t = V5.test(e) ? j5(e) : e;
  const n = D5.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(Aa(s, 2), 16)),
      parseInt(Aa(a[3] || 'f', 2), 16) / 255,
    ];
  }
  const r = N5.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || 'ff', 16) / 255,
    ];
  }
  const o = F5.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || '1'),
    ];
  }
  const i = O5.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Ur(0, 100, s) !== s) throw new Bi(e);
    if (Ur(0, 100, l) !== l) throw new Bi(e);
    return [...W5(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Bi(e);
}
function I5(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const P0 = (e) => parseInt(e.replace(/_/g, ''), 36),
  B5 =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const n = P0(t.substring(0, 3)),
          r = P0(t.substring(3)).toString(16);
        let o = '';
        for (let i = 0; i < 6 - r.length; i++) o += '0';
        return (e[n] = `${o}${r}`), e;
      }, {});
function j5(e) {
  const t = e.toLowerCase().trim(),
    n = B5[I5(t)];
  if (!n) throw new Bi(e);
  return `#${n}`;
}
const Aa = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  D5 = new RegExp(`^#${Aa('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  N5 = new RegExp(`^#${Aa('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  F5 = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Aa(
      ',\\s*(\\d+)\\s*',
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  O5 =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  V5 = /^[a-z]+$/i,
  _0 = (e) => Math.round(e * 255),
  W5 = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(_0);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a));
    const c = r - i / 2,
      d = s + c,
      f = l + c,
      m = u + c;
    return [d, f, m].map(_0);
  };
function U5(e, t, n, r) {
  return `rgba(${Ur(0, 255, e).toFixed()}, ${Ur(0, 255, t).toFixed()}, ${Ur(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(Ur(0, 1, r).toFixed(3))})`;
}
function H5(e, t) {
  const [n, r, o, i] = Qh(e);
  return U5(n, r, o, i - t);
}
function G5(e) {
  const [t, n, r, o] = Qh(e);
  let i = (a) => {
    const s = Ur(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ''}`;
}
function K5(e, t, n, r, o) {
  for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var Y5 = (e) => Object.keys(e).length === 0,
  nt = (e, t, n) => {
    const r = K5(e, `colors.${t}`, t);
    try {
      return G5(r), r;
    } catch {
      return n ?? '#000000';
    }
  },
  X5 = (e) => {
    const [t, n, r] = Qh(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  Q5 = (e) => (t) => {
    const n = nt(t, e);
    return X5(n) < 128 ? 'dark' : 'light';
  },
  q5 = (e) => (t) => Q5(e)(t) === 'dark',
  oi = (e, t) => (n) => {
    const r = nt(n, e);
    return H5(r, 1 - t);
  };
function T0(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var Z5 = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;
function J5(e) {
  const t = Z5();
  return !e || Y5(e)
    ? t
    : e.string && e.colors
    ? tT(e.string, e.colors)
    : e.string && !e.colors
    ? eT(e.string)
    : e.colors && !e.string
    ? nT(e.colors)
    : t;
}
function eT(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = '#';
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function tT(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function nT(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function D(e, t) {
  return (n) => (n.colorMode === 'dark' ? t : e);
}
function qh(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === 'vertical' ? n : r) : {};
}
function kb(e) {
  return qt(e) && e.reference ? e.reference : String(e);
}
var ju = (e, ...t) => t.map(kb).join(` ${e} `).replace(/calc/g, ''),
  R0 = (...e) => `calc(${ju('+', ...e)})`,
  A0 = (...e) => `calc(${ju('-', ...e)})`,
  gf = (...e) => `calc(${ju('*', ...e)})`,
  $0 = (...e) => `calc(${ju('/', ...e)})`,
  z0 = (e) => {
    const t = kb(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : gf(t, -1);
  },
  kn = Object.assign(
    (e) => ({
      add: (...t) => kn(R0(e, ...t)),
      subtract: (...t) => kn(A0(e, ...t)),
      multiply: (...t) => kn(gf(e, ...t)),
      divide: (...t) => kn($0(e, ...t)),
      negate: () => kn(z0(e)),
      toString: () => e.toString(),
    }),
    { add: R0, subtract: A0, multiply: gf, divide: $0, negate: z0 }
  );
function rT(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function oT(e, t = '-') {
  return e.replace(/\s+/g, t);
}
function Cb(e) {
  const t = oT(e.toString());
  return t.includes('\\.') ? e : rT(e) ? t.replace('.', '\\.') : e;
}
function iT(e, t = '') {
  return [t, Cb(e)].filter(Boolean).join('-');
}
function aT(e, t) {
  return `var(${Cb(e)}${t ? `, ${t}` : ''})`;
}
function sT(e, t = '') {
  return `--${iT(e, t)}`;
}
function je(e, t) {
  const n = sT(e, t == null ? void 0 : t.prefix);
  return { variable: n, reference: aT(n, lT(t == null ? void 0 : t.fallback)) };
}
function lT(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: uT, definePartsStyle: tl } = le(R5.keys),
  Xi = je('switch-track-width'),
  Xr = je('switch-track-height'),
  Mc = je('switch-track-diff'),
  cT = kn.subtract(Xi, Xr),
  vf = je('switch-thumb-x'),
  Ei = je('switch-bg'),
  dT = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [Xi.reference],
      height: [Xr.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [Ei.variable]: 'colors.gray.300',
      _dark: { [Ei.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: {
        [Ei.variable]: `colors.${t}.500`,
        _dark: { [Ei.variable]: `colors.${t}.200` },
      },
      bg: Ei.reference,
    };
  },
  fT = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [Xr.reference],
    height: [Xr.reference],
    _checked: { transform: `translateX(${vf.reference})` },
  },
  hT = tl((e) => ({
    container: {
      [Mc.variable]: cT,
      [vf.variable]: Mc.reference,
      _rtl: { [vf.variable]: kn(Mc).negate().toString() },
    },
    track: dT(e),
    thumb: fT,
  })),
  mT = {
    sm: tl({
      container: { [Xi.variable]: '1.375rem', [Xr.variable]: 'sizes.3' },
    }),
    md: tl({
      container: { [Xi.variable]: '1.875rem', [Xr.variable]: 'sizes.4' },
    }),
    lg: tl({
      container: { [Xi.variable]: '2.875rem', [Xr.variable]: 'sizes.6' },
    }),
  },
  pT = uT({
    baseStyle: hT,
    sizes: mT,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  }),
  { defineMultiStyleConfig: gT, definePartsStyle: Ho } = le(A5.keys),
  vT = Ho({
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start',
    },
    td: { textAlign: 'start' },
    caption: {
      mt: 4,
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'medium',
    },
  }),
  Wl = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  yT = Ho((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: D('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Wl,
      },
      td: {
        borderBottom: '1px',
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Wl,
      },
      caption: { color: D('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    };
  }),
  bT = Ho((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: D('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Wl,
      },
      td: {
        borderBottom: '1px',
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Wl,
      },
      caption: { color: D('gray.600', 'gray.100')(e) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': {
              borderBottomWidth: '1px',
              borderColor: D(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: D(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    };
  }),
  ST = { simple: yT, striped: bT, unstyled: {} },
  xT = {
    sm: Ho({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: Ho({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: Ho({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  wT = gT({
    baseStyle: vT,
    variants: ST,
    sizes: xT,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  dt = O('tabs-color'),
  Yt = O('tabs-bg'),
  Rs = O('tabs-border-color'),
  { defineMultiStyleConfig: kT, definePartsStyle: mn } = le($5.keys),
  CT = (e) => {
    const { orientation: t } = e;
    return { display: t === 'vertical' ? 'flex' : 'block' };
  },
  ET = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    };
  },
  PT = (e) => {
    const { align: t = 'start', orientation: n } = e;
    return {
      justifyContent: {
        end: 'flex-end',
        center: 'center',
        start: 'flex-start',
      }[t],
      flexDirection: n === 'vertical' ? 'column' : 'row',
    };
  },
  _T = { p: 4 },
  TT = mn((e) => ({ root: CT(e), tab: ET(e), tablist: PT(e), tabpanel: _T })),
  RT = {
    sm: mn({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: mn({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: mn({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  AT = mn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === 'vertical',
      o = r ? 'borderStart' : 'borderBottom',
      i = r ? 'marginStart' : 'marginBottom';
    return {
      tablist: { [o]: '2px solid', borderColor: 'inherit' },
      tab: {
        [o]: '2px solid',
        borderColor: 'transparent',
        [i]: '-2px',
        _selected: {
          [dt.variable]: `colors.${t}.600`,
          _dark: { [dt.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [Yt.variable]: 'colors.gray.200',
          _dark: { [Yt.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: dt.reference,
        bg: Yt.reference,
      },
    };
  }),
  $T = mn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [Rs.variable]: 'transparent',
        _selected: {
          [dt.variable]: `colors.${t}.600`,
          [Rs.variable]: 'colors.white',
          _dark: {
            [dt.variable]: `colors.${t}.300`,
            [Rs.variable]: 'colors.gray.800',
          },
          borderColor: 'inherit',
          borderBottomColor: Rs.reference,
        },
        color: dt.reference,
      },
      tablist: {
        mb: '-1px',
        borderBottom: '1px solid',
        borderColor: 'inherit',
      },
    };
  }),
  zT = mn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [Yt.variable]: 'colors.gray.50',
        _dark: { [Yt.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [Yt.variable]: 'colors.white',
          [dt.variable]: `colors.${t}.600`,
          _dark: {
            [Yt.variable]: 'colors.gray.800',
            [dt.variable]: `colors.${t}.300`,
          },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: dt.reference,
        bg: Yt.reference,
      },
      tablist: {
        mb: '-1px',
        borderBottom: '1px solid',
        borderColor: 'inherit',
      },
    };
  }),
  LT = mn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: nt(n, `${t}.700`), bg: nt(n, `${t}.100`) },
      },
    };
  }),
  MT = mn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [dt.variable]: 'colors.gray.600',
        _dark: { [dt.variable]: 'inherit' },
        _selected: {
          [dt.variable]: 'colors.white',
          [Yt.variable]: `colors.${t}.600`,
          _dark: {
            [dt.variable]: 'colors.gray.800',
            [Yt.variable]: `colors.${t}.300`,
          },
        },
        color: dt.reference,
        bg: Yt.reference,
      },
    };
  }),
  IT = mn({}),
  BT = {
    line: AT,
    enclosed: $T,
    'enclosed-colored': zT,
    'soft-rounded': LT,
    'solid-rounded': MT,
    unstyled: IT,
  },
  jT = kT({
    baseStyle: TT,
    sizes: RT,
    variants: BT,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  Te = s_('badge', ['bg', 'color', 'shadow']),
  DT = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: Te.bg.reference,
    color: Te.color.reference,
    boxShadow: Te.shadow.reference,
  },
  NT = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = oi(`${t}.500`, 0.6)(n);
    return {
      [Te.bg.variable]: `colors.${t}.500`,
      [Te.color.variable]: 'colors.white',
      _dark: {
        [Te.bg.variable]: r,
        [Te.color.variable]: 'colors.whiteAlpha.800',
      },
    };
  },
  FT = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = oi(`${t}.200`, 0.16)(n);
    return {
      [Te.bg.variable]: `colors.${t}.100`,
      [Te.color.variable]: `colors.${t}.800`,
      _dark: { [Te.bg.variable]: r, [Te.color.variable]: `colors.${t}.200` },
    };
  },
  OT = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = oi(`${t}.200`, 0.8)(n);
    return {
      [Te.color.variable]: `colors.${t}.500`,
      _dark: { [Te.color.variable]: r },
      [Te.shadow.variable]: `inset 0 0 0px 1px ${Te.color.reference}`,
    };
  },
  VT = { solid: NT, subtle: FT, outline: OT },
  Qi = {
    baseStyle: DT,
    variants: VT,
    defaultProps: { variant: 'subtle', colorScheme: 'gray' },
  },
  { defineMultiStyleConfig: WT, definePartsStyle: Qr } = le(z5.keys),
  L0 = O('tag-bg'),
  M0 = O('tag-color'),
  Ic = O('tag-shadow'),
  nl = O('tag-min-height'),
  rl = O('tag-min-width'),
  ol = O('tag-font-size'),
  il = O('tag-padding-inline'),
  UT = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    [M0.variable]: Te.color.reference,
    [L0.variable]: Te.bg.reference,
    [Ic.variable]: Te.shadow.reference,
    color: M0.reference,
    bg: L0.reference,
    boxShadow: Ic.reference,
    borderRadius: 'md',
    minH: nl.reference,
    minW: rl.reference,
    fontSize: ol.reference,
    px: il.reference,
    _focusVisible: { [Ic.variable]: 'shadows.outline' },
  },
  HT = { lineHeight: 1.2, overflow: 'visible' },
  GT = {
    fontSize: 'lg',
    w: '5',
    h: '5',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    borderRadius: 'full',
    marginStart: '1.5',
    marginEnd: '-1',
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  KT = Qr({ container: UT, label: HT, closeButton: GT }),
  YT = {
    sm: Qr({
      container: {
        [nl.variable]: 'sizes.5',
        [rl.variable]: 'sizes.5',
        [ol.variable]: 'fontSizes.xs',
        [il.variable]: 'space.2',
      },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: Qr({
      container: {
        [nl.variable]: 'sizes.6',
        [rl.variable]: 'sizes.6',
        [ol.variable]: 'fontSizes.sm',
        [il.variable]: 'space.2',
      },
    }),
    lg: Qr({
      container: {
        [nl.variable]: 'sizes.8',
        [rl.variable]: 'sizes.8',
        [ol.variable]: 'fontSizes.md',
        [il.variable]: 'space.3',
      },
    }),
  },
  XT = {
    subtle: Qr((e) => {
      var t;
      return { container: (t = Qi.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Qr((e) => {
      var t;
      return { container: (t = Qi.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Qr((e) => {
      var t;
      return { container: (t = Qi.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  QT = WT({
    variants: XT,
    baseStyle: KT,
    sizes: YT,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  }),
  { definePartsStyle: Pn, defineMultiStyleConfig: qT } = le(y5.keys),
  ZT = Pn({
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    },
  }),
  Wn = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' },
  },
  JT = {
    lg: Pn({ field: Wn.lg, addon: Wn.lg }),
    md: Pn({ field: Wn.md, addon: Wn.md }),
    sm: Pn({ field: Wn.sm, addon: Wn.sm }),
    xs: Pn({ field: Wn.xs, addon: Wn.xs }),
  };
function Zh(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || D('blue.500', 'blue.300')(e),
    errorBorderColor: n || D('red.500', 'red.300')(e),
  };
}
var e4 = Pn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Zh(e);
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: D('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: nt(t, r), boxShadow: `0 0 0 1px ${nt(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: nt(t, n),
          boxShadow: `0 0 0 1px ${nt(t, n)}`,
        },
      },
      addon: {
        border: '1px solid',
        borderColor: D('inherit', 'whiteAlpha.50')(e),
        bg: D('gray.100', 'whiteAlpha.300')(e),
      },
    };
  }),
  t4 = Pn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Zh(e);
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: D('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: D('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: nt(t, r) },
        _focusVisible: { bg: 'transparent', borderColor: nt(t, n) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: D('gray.100', 'whiteAlpha.50')(e),
      },
    };
  }),
  n4 = Pn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Zh(e);
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: {
          borderColor: nt(t, r),
          boxShadow: `0px 1px 0px 0px ${nt(t, r)}`,
        },
        _focusVisible: {
          borderColor: nt(t, n),
          boxShadow: `0px 1px 0px 0px ${nt(t, n)}`,
        },
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
      },
    };
  }),
  r4 = Pn({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  o4 = { outline: e4, filled: t4, flushed: n4, unstyled: r4 },
  ee = qT({
    baseStyle: ZT,
    sizes: JT,
    variants: o4,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  I0,
  i4 = {
    ...((I0 = ee.baseStyle) == null ? void 0 : I0.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  B0,
  j0,
  a4 = {
    outline: (e) => {
      var t, n;
      return (n = (t = ee.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, n;
      return (n = (t = ee.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? n
        : {};
    },
    filled: (e) => {
      var t, n;
      return (n = (t = ee.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? n
        : {};
    },
    unstyled:
      (j0 = (B0 = ee.variants) == null ? void 0 : B0.unstyled.field) != null
        ? j0
        : {},
  },
  D0,
  N0,
  F0,
  O0,
  V0,
  W0,
  U0,
  H0,
  s4 = {
    xs: (N0 = (D0 = ee.sizes) == null ? void 0 : D0.xs.field) != null ? N0 : {},
    sm: (O0 = (F0 = ee.sizes) == null ? void 0 : F0.sm.field) != null ? O0 : {},
    md: (W0 = (V0 = ee.sizes) == null ? void 0 : V0.md.field) != null ? W0 : {},
    lg: (H0 = (U0 = ee.sizes) == null ? void 0 : U0.lg.field) != null ? H0 : {},
  },
  l4 = {
    baseStyle: i4,
    sizes: s4,
    variants: a4,
    defaultProps: { size: 'md', variant: 'outline' },
  },
  As = je('tooltip-bg'),
  Bc = je('tooltip-fg'),
  u4 = je('popper-arrow-bg'),
  c4 = {
    bg: As.reference,
    color: Bc.reference,
    [As.variable]: 'colors.gray.700',
    [Bc.variable]: 'colors.whiteAlpha.900',
    _dark: {
      [As.variable]: 'colors.gray.300',
      [Bc.variable]: 'colors.gray.900',
    },
    [u4.variable]: As.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  d4 = { baseStyle: c4 },
  { defineMultiStyleConfig: f4, definePartsStyle: ji } = le(C5.keys),
  h4 = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = D(T0(), T0('1rem', 'rgba(0,0,0,0.1)'))(e),
      a = D(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${nt(n, a)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: s } : { bgColor: a }) };
  },
  m4 = {
    lineHeight: '1',
    fontSize: '0.25em',
    fontWeight: 'bold',
    color: 'white',
  },
  p4 = (e) => ({ bg: D('gray.100', 'whiteAlpha.300')(e) }),
  g4 = (e) => ({
    transitionProperty: 'common',
    transitionDuration: 'slow',
    ...h4(e),
  }),
  v4 = ji((e) => ({ label: m4, filledTrack: g4(e), track: p4(e) })),
  y4 = {
    xs: ji({ track: { h: '1' } }),
    sm: ji({ track: { h: '2' } }),
    md: ji({ track: { h: '3' } }),
    lg: ji({ track: { h: '4' } }),
  },
  b4 = f4({
    sizes: y4,
    baseStyle: v4,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  }),
  S4 = (e) => typeof e == 'function';
function ot(e, ...t) {
  return S4(e) ? e(...t) : e;
}
var { definePartsStyle: al, defineMultiStyleConfig: x4 } = le(h5.keys),
  qi = O('checkbox-size'),
  w4 = (e) => {
    const { colorScheme: t } = e;
    return {
      w: qi.reference,
      h: qi.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: D(`${t}.500`, `${t}.200`)(e),
        borderColor: D(`${t}.500`, `${t}.200`)(e),
        color: D('white', 'gray.900')(e),
        _hover: {
          bg: D(`${t}.600`, `${t}.300`)(e),
          borderColor: D(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: D('gray.200', 'transparent')(e),
          bg: D('gray.200', 'whiteAlpha.300')(e),
          color: D('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: D(`${t}.500`, `${t}.200`)(e),
        borderColor: D(`${t}.500`, `${t}.200`)(e),
        color: D('white', 'gray.900')(e),
      },
      _disabled: {
        bg: D('gray.100', 'whiteAlpha.100')(e),
        borderColor: D('gray.100', 'transparent')(e),
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: D('red.500', 'red.300')(e) },
    };
  },
  k4 = { _disabled: { cursor: 'not-allowed' } },
  C4 = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  E4 = { transitionProperty: 'transform', transitionDuration: 'normal' },
  P4 = al((e) => ({ icon: E4, container: k4, control: ot(w4, e), label: C4 })),
  _4 = {
    sm: al({
      control: { [qi.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: al({
      control: { [qi.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: al({
      control: { [qi.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  Ul = x4({
    baseStyle: P4,
    sizes: _4,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  }),
  { defineMultiStyleConfig: T4, definePartsStyle: sl } = le(E5.keys),
  R4 = (e) => {
    var t;
    const n = (t = ot(Ul.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...n,
      borderRadius: 'full',
      _checked: {
        ...(n == null ? void 0 : n._checked),
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      },
    };
  },
  A4 = sl((e) => {
    var t, n, r, o;
    return {
      label: (n = (t = Ul).baseStyle) == null ? void 0 : n.call(t, e).label,
      container:
        (o = (r = Ul).baseStyle) == null ? void 0 : o.call(r, e).container,
      control: R4(e),
    };
  }),
  $4 = {
    md: sl({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: sl({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: sl({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  z4 = T4({
    baseStyle: A4,
    sizes: $4,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  }),
  { defineMultiStyleConfig: L4, definePartsStyle: M4 } = le(P5.keys),
  $s = O('select-bg'),
  G0,
  I4 = {
    ...((G0 = ee.baseStyle) == null ? void 0 : G0.field),
    appearance: 'none',
    paddingBottom: '1px',
    lineHeight: 'normal',
    bg: $s.reference,
    [$s.variable]: 'colors.white',
    _dark: { [$s.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: $s.reference },
  },
  B4 = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  j4 = M4({ field: I4, icon: B4 }),
  zs = { paddingInlineEnd: '8' },
  K0,
  Y0,
  X0,
  Q0,
  q0,
  Z0,
  J0,
  eg,
  D4 = {
    lg: {
      ...((K0 = ee.sizes) == null ? void 0 : K0.lg),
      field: { ...((Y0 = ee.sizes) == null ? void 0 : Y0.lg.field), ...zs },
    },
    md: {
      ...((X0 = ee.sizes) == null ? void 0 : X0.md),
      field: { ...((Q0 = ee.sizes) == null ? void 0 : Q0.md.field), ...zs },
    },
    sm: {
      ...((q0 = ee.sizes) == null ? void 0 : q0.sm),
      field: { ...((Z0 = ee.sizes) == null ? void 0 : Z0.sm.field), ...zs },
    },
    xs: {
      ...((J0 = ee.sizes) == null ? void 0 : J0.xs),
      field: { ...((eg = ee.sizes) == null ? void 0 : eg.xs.field), ...zs },
      icon: { insetEnd: '1' },
    },
  },
  N4 = L4({
    baseStyle: j4,
    sizes: D4,
    variants: ee.variants,
    defaultProps: ee.defaultProps,
  }),
  jc = O('skeleton-start-color'),
  Dc = O('skeleton-end-color'),
  F4 = {
    [jc.variable]: 'colors.gray.100',
    [Dc.variable]: 'colors.gray.400',
    _dark: {
      [jc.variable]: 'colors.gray.800',
      [Dc.variable]: 'colors.gray.600',
    },
    background: jc.reference,
    borderColor: Dc.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  O4 = { baseStyle: F4 },
  Nc = O('skip-link-bg'),
  V4 = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [Nc.variable]: 'colors.white',
      _dark: { [Nc.variable]: 'colors.gray.700' },
      bg: Nc.reference,
    },
  },
  W4 = { baseStyle: V4 },
  { defineMultiStyleConfig: U4, definePartsStyle: Du } = le(_5.keys),
  $a = O('slider-thumb-size'),
  za = O('slider-track-size'),
  Zn = O('slider-bg'),
  H4 = (e) => {
    const { orientation: t } = e;
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...qh({
        orientation: t,
        vertical: { h: '100%' },
        horizontal: { w: '100%' },
      }),
    };
  },
  G4 = (e) => ({
    ...qh({
      orientation: e.orientation,
      horizontal: { h: za.reference },
      vertical: { w: za.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [Zn.variable]: 'colors.gray.200',
    _dark: { [Zn.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [Zn.variable]: 'colors.gray.300',
      _dark: { [Zn.variable]: 'colors.whiteAlpha.300' },
    },
    bg: Zn.reference,
  }),
  K4 = (e) => {
    const { orientation: t } = e;
    return {
      ...qh({
        orientation: t,
        vertical: {
          left: '50%',
          transform: 'translateX(-50%)',
          _active: { transform: 'translateX(-50%) scale(1.15)' },
        },
        horizontal: {
          top: '50%',
          transform: 'translateY(-50%)',
          _active: { transform: 'translateY(-50%) scale(1.15)' },
        },
      }),
      w: $a.reference,
      h: $a.reference,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      outline: 0,
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { bg: 'gray.300' },
    };
  },
  Y4 = (e) => {
    const { colorScheme: t } = e;
    return {
      width: 'inherit',
      height: 'inherit',
      [Zn.variable]: `colors.${t}.500`,
      _dark: { [Zn.variable]: `colors.${t}.200` },
      bg: Zn.reference,
    };
  },
  X4 = Du((e) => ({
    container: H4(e),
    track: G4(e),
    thumb: K4(e),
    filledTrack: Y4(e),
  })),
  Q4 = Du({
    container: { [$a.variable]: 'sizes.4', [za.variable]: 'sizes.1' },
  }),
  q4 = Du({
    container: { [$a.variable]: 'sizes.3.5', [za.variable]: 'sizes.1' },
  }),
  Z4 = Du({
    container: { [$a.variable]: 'sizes.2.5', [za.variable]: 'sizes.0.5' },
  }),
  J4 = { lg: Q4, md: q4, sm: Z4 },
  e3 = U4({
    baseStyle: X4,
    sizes: J4,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  }),
  Fr = je('spinner-size'),
  t3 = { width: [Fr.reference], height: [Fr.reference] },
  n3 = {
    xs: { [Fr.variable]: 'sizes.3' },
    sm: { [Fr.variable]: 'sizes.4' },
    md: { [Fr.variable]: 'sizes.6' },
    lg: { [Fr.variable]: 'sizes.8' },
    xl: { [Fr.variable]: 'sizes.12' },
  },
  r3 = { baseStyle: t3, sizes: n3, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: o3, definePartsStyle: Eb } = le(T5.keys),
  i3 = { fontWeight: 'medium' },
  a3 = { opacity: 0.8, marginBottom: '2' },
  s3 = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  l3 = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  u3 = Eb({ container: {}, label: i3, helpText: a3, number: s3, icon: l3 }),
  c3 = {
    md: Eb({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  d3 = o3({ baseStyle: u3, sizes: c3, defaultProps: { size: 'md' } }),
  Fc = O('kbd-bg'),
  f3 = {
    [Fc.variable]: 'colors.gray.100',
    _dark: { [Fc.variable]: 'colors.whiteAlpha.100' },
    bg: Fc.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  h3 = { baseStyle: f3 },
  m3 = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
  p3 = { baseStyle: m3 },
  { defineMultiStyleConfig: g3, definePartsStyle: v3 } = le(b5.keys),
  y3 = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  b3 = v3({ icon: y3 }),
  S3 = g3({ baseStyle: b3 }),
  { defineMultiStyleConfig: x3, definePartsStyle: w3 } = le(S5.keys),
  an = O('menu-bg'),
  Oc = O('menu-shadow'),
  k3 = {
    [an.variable]: '#fff',
    [Oc.variable]: 'shadows.sm',
    _dark: {
      [an.variable]: 'colors.gray.700',
      [Oc.variable]: 'shadows.dark-lg',
    },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: an.reference,
    boxShadow: Oc.reference,
  },
  C3 = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: {
      [an.variable]: 'colors.gray.100',
      _dark: { [an.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [an.variable]: 'colors.gray.200',
      _dark: { [an.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [an.variable]: 'colors.gray.100',
      _dark: { [an.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: an.reference,
  },
  E3 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  P3 = { opacity: 0.6 },
  _3 = {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    my: '2',
    opacity: 0.6,
  },
  T3 = { transitionProperty: 'common', transitionDuration: 'normal' },
  R3 = w3({
    button: T3,
    list: k3,
    item: C3,
    groupTitle: E3,
    command: P3,
    divider: _3,
  }),
  A3 = x3({ baseStyle: R3 }),
  { defineMultiStyleConfig: $3, definePartsStyle: yf } = le(x5.keys),
  Vc = O('modal-bg'),
  Wc = O('modal-shadow'),
  z3 = { bg: 'blackAlpha.600', zIndex: 'modal' },
  L3 = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: t ? 'center' : 'flex-start',
      overflow: n === 'inside' ? 'hidden' : 'auto',
      overscrollBehaviorY: 'none',
    };
  },
  M3 = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: 'md',
      color: 'inherit',
      my: t ? 'auto' : '16',
      mx: t ? 'auto' : void 0,
      zIndex: 'modal',
      maxH: n === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      [Vc.variable]: 'colors.white',
      [Wc.variable]: 'shadows.lg',
      _dark: {
        [Vc.variable]: 'colors.gray.700',
        [Wc.variable]: 'shadows.dark-lg',
      },
      bg: Vc.reference,
      boxShadow: Wc.reference,
    };
  },
  I3 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  B3 = { position: 'absolute', top: '2', insetEnd: '3' },
  j3 = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: '6',
      py: '2',
      flex: '1',
      overflow: t === 'inside' ? 'auto' : void 0,
    };
  },
  D3 = { px: '6', py: '4' },
  N3 = yf((e) => ({
    overlay: z3,
    dialogContainer: ot(L3, e),
    dialog: ot(M3, e),
    header: I3,
    closeButton: B3,
    body: ot(j3, e),
    footer: D3,
  }));
function Ut(e) {
  return yf(
    e === 'full'
      ? {
          dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' },
        }
      : { dialog: { maxW: e } }
  );
}
var F3 = {
    xs: Ut('xs'),
    sm: Ut('sm'),
    md: Ut('md'),
    lg: Ut('lg'),
    xl: Ut('xl'),
    '2xl': Ut('2xl'),
    '3xl': Ut('3xl'),
    '4xl': Ut('4xl'),
    '5xl': Ut('5xl'),
    '6xl': Ut('6xl'),
    full: Ut('full'),
  },
  O3 = $3({ baseStyle: N3, sizes: F3, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: V3, definePartsStyle: Pb } = le(w5.keys),
  Jh = je('number-input-stepper-width'),
  _b = je('number-input-input-padding'),
  W3 = kn(Jh).add('0.5rem').toString(),
  Uc = je('number-input-bg'),
  Hc = je('number-input-color'),
  Gc = je('number-input-border-color'),
  U3 = { [Jh.variable]: 'sizes.6', [_b.variable]: W3 },
  H3 = (e) => {
    var t, n;
    return (n = (t = ot(ee.baseStyle, e)) == null ? void 0 : t.field) != null
      ? n
      : {};
  },
  G3 = { width: Jh.reference },
  K3 = {
    borderStart: '1px solid',
    borderStartColor: Gc.reference,
    color: Hc.reference,
    bg: Uc.reference,
    [Hc.variable]: 'colors.chakra-body-text',
    [Gc.variable]: 'colors.chakra-border-color',
    _dark: {
      [Hc.variable]: 'colors.whiteAlpha.800',
      [Gc.variable]: 'colors.whiteAlpha.300',
    },
    _active: {
      [Uc.variable]: 'colors.gray.200',
      _dark: { [Uc.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  Y3 = Pb((e) => {
    var t;
    return {
      root: U3,
      field: (t = ot(H3, e)) != null ? t : {},
      stepperGroup: G3,
      stepper: K3,
    };
  });
function Ls(e) {
  var t, n, r;
  const o = (t = ee.sizes) == null ? void 0 : t[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : 'md',
    s = Sb.fontSizes[a];
  return Pb({
    field: { ...o.field, paddingInlineEnd: _b.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: kn(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  });
}
var X3 = { xs: Ls('xs'), sm: Ls('sm'), md: Ls('md'), lg: Ls('lg') },
  Q3 = V3({
    baseStyle: Y3,
    sizes: X3,
    variants: ee.variants,
    defaultProps: ee.defaultProps,
  }),
  tg,
  q3 = {
    ...((tg = ee.baseStyle) == null ? void 0 : tg.field),
    textAlign: 'center',
  },
  Z3 = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  ng,
  rg,
  J3 = {
    outline: (e) => {
      var t, n, r;
      return (r =
        (n = ot((t = ee.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, n, r;
      return (r =
        (n = ot((t = ee.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    filled: (e) => {
      var t, n, r;
      return (r =
        (n = ot((t = ee.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    unstyled:
      (rg = (ng = ee.variants) == null ? void 0 : ng.unstyled.field) != null
        ? rg
        : {},
  },
  eR = {
    baseStyle: q3,
    sizes: Z3,
    variants: J3,
    defaultProps: ee.defaultProps,
  },
  { defineMultiStyleConfig: tR, definePartsStyle: nR } = le(k5.keys),
  Ms = je('popper-bg'),
  rR = je('popper-arrow-bg'),
  og = je('popper-arrow-shadow-color'),
  oR = { zIndex: 10 },
  iR = {
    [Ms.variable]: 'colors.white',
    bg: Ms.reference,
    [rR.variable]: Ms.reference,
    [og.variable]: 'colors.gray.200',
    _dark: {
      [Ms.variable]: 'colors.gray.700',
      [og.variable]: 'colors.whiteAlpha.300',
    },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  aR = { px: 3, py: 2, borderBottomWidth: '1px' },
  sR = { px: 3, py: 2 },
  lR = { px: 3, py: 2, borderTopWidth: '1px' },
  uR = {
    position: 'absolute',
    borderRadius: 'md',
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  cR = nR({
    popper: oR,
    content: iR,
    header: aR,
    body: sR,
    footer: lR,
    closeButton: uR,
  }),
  dR = tR({ baseStyle: cR }),
  { definePartsStyle: bf, defineMultiStyleConfig: fR } = le(m5.keys),
  Kc = O('drawer-bg'),
  Yc = O('drawer-box-shadow');
function yo(e) {
  return bf(
    e === 'full'
      ? { dialog: { maxW: '100vw', h: '100vh' } }
      : { dialog: { maxW: e } }
  );
}
var hR = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  mR = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  pR = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [Kc.variable]: 'colors.white',
      [Yc.variable]: 'shadows.lg',
      _dark: {
        [Kc.variable]: 'colors.gray.700',
        [Yc.variable]: 'shadows.dark-lg',
      },
      bg: Kc.reference,
      boxShadow: Yc.reference,
    };
  },
  gR = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  vR = { position: 'absolute', top: '2', insetEnd: '3' },
  yR = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  bR = { px: '6', py: '4' },
  SR = bf((e) => ({
    overlay: hR,
    dialogContainer: mR,
    dialog: ot(pR, e),
    header: gR,
    closeButton: vR,
    body: yR,
    footer: bR,
  })),
  xR = {
    xs: yo('xs'),
    sm: yo('md'),
    md: yo('lg'),
    lg: yo('2xl'),
    xl: yo('4xl'),
    full: yo('full'),
  },
  wR = fR({ baseStyle: SR, sizes: xR, defaultProps: { size: 'xs' } }),
  { definePartsStyle: kR, defineMultiStyleConfig: CR } = le(p5.keys),
  ER = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
  PR = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  _R = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  TR = kR({ preview: ER, input: PR, textarea: _R }),
  RR = CR({ baseStyle: TR }),
  { definePartsStyle: AR, defineMultiStyleConfig: $R } = le(g5.keys),
  Go = O('form-control-color'),
  zR = {
    marginStart: '1',
    [Go.variable]: 'colors.red.500',
    _dark: { [Go.variable]: 'colors.red.300' },
    color: Go.reference,
  },
  LR = {
    mt: '2',
    [Go.variable]: 'colors.gray.600',
    _dark: { [Go.variable]: 'colors.whiteAlpha.600' },
    color: Go.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  MR = AR({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: zR,
    helperText: LR,
  }),
  IR = $R({ baseStyle: MR }),
  { definePartsStyle: BR, defineMultiStyleConfig: jR } = le(v5.keys),
  Ko = O('form-error-color'),
  DR = {
    [Ko.variable]: 'colors.red.500',
    _dark: { [Ko.variable]: 'colors.red.300' },
    color: Ko.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  NR = {
    marginEnd: '0.5em',
    [Ko.variable]: 'colors.red.500',
    _dark: { [Ko.variable]: 'colors.red.300' },
    color: Ko.reference,
  },
  FR = BR({ text: DR, icon: NR }),
  OR = jR({ baseStyle: FR }),
  VR = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  WR = { baseStyle: VR },
  UR = { fontFamily: 'heading', fontWeight: 'bold' },
  HR = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: 'xl', lineHeight: 1.2 },
    sm: { fontSize: 'md', lineHeight: 1.2 },
    xs: { fontSize: 'sm', lineHeight: 1.2 },
  },
  GR = { baseStyle: UR, sizes: HR, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: KR, definePartsStyle: YR } = le(f5.keys),
  Xc = O('breadcrumb-link-decor'),
  XR = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    outline: 'none',
    color: 'inherit',
    textDecoration: Xc.reference,
    [Xc.variable]: 'none',
    '&:not([aria-current=page])': {
      cursor: 'pointer',
      _hover: { [Xc.variable]: 'underline' },
      _focusVisible: { boxShadow: 'outline' },
    },
  },
  QR = YR({ link: XR }),
  qR = KR({ baseStyle: QR }),
  ZR = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  Tb = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === 'gray')
      return {
        color: D('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: D('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: D('gray.200', 'whiteAlpha.300')(e) },
      };
    const r = oi(`${t}.200`, 0.12)(n),
      o = oi(`${t}.200`, 0.24)(n);
    return {
      color: D(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: D(`${t}.50`, r)(e) },
      _active: { bg: D(`${t}.100`, o)(e) },
    };
  },
  JR = (e) => {
    const { colorScheme: t } = e,
      n = D('gray.200', 'whiteAlpha.300')(e);
    return {
      border: '1px solid',
      borderColor: t === 'gray' ? n : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)':
        { marginEnd: '-1px' },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)':
        { marginBottom: '-1px' },
      ...ot(Tb, e),
    };
  },
  eA = {
    yellow: {
      bg: 'yellow.400',
      color: 'black',
      hoverBg: 'yellow.500',
      activeBg: 'yellow.600',
    },
    cyan: {
      bg: 'cyan.400',
      color: 'black',
      hoverBg: 'cyan.500',
      activeBg: 'cyan.600',
    },
  },
  tA = (e) => {
    var t;
    const { colorScheme: n } = e;
    if (n === 'gray') {
      const l = D('gray.100', 'whiteAlpha.200')(e);
      return {
        bg: l,
        _hover: {
          bg: D('gray.200', 'whiteAlpha.300')(e),
          _disabled: { bg: l },
        },
        _active: { bg: D('gray.300', 'whiteAlpha.400')(e) },
      };
    }
    const {
        bg: r = `${n}.500`,
        color: o = 'white',
        hoverBg: i = `${n}.600`,
        activeBg: a = `${n}.700`,
      } = (t = eA[n]) != null ? t : {},
      s = D(r, `${n}.200`)(e);
    return {
      bg: s,
      color: D(o, 'gray.800')(e),
      _hover: { bg: D(i, `${n}.300`)(e), _disabled: { bg: s } },
      _active: { bg: D(a, `${n}.400`)(e) },
    };
  },
  nA = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: D(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: 'underline',
        _disabled: { textDecoration: 'none' },
      },
      _active: { color: D(`${t}.700`, `${t}.500`)(e) },
    };
  },
  rA = {
    bg: 'none',
    color: 'inherit',
    display: 'inline',
    lineHeight: 'inherit',
    m: '0',
    p: '0',
  },
  oA = { ghost: Tb, outline: JR, solid: tA, link: nA, unstyled: rA },
  iA = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  aA = {
    baseStyle: ZR,
    variants: oA,
    sizes: iA,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: qr, defineMultiStyleConfig: sA } = le(L5.keys),
  Hl = O('card-bg'),
  Rn = O('card-padding'),
  Rb = O('card-shadow'),
  ll = O('card-radius'),
  Ab = O('card-border-width', '0'),
  $b = O('card-border-color'),
  lA = qr({
    container: {
      [Hl.variable]: 'colors.chakra-body-bg',
      backgroundColor: Hl.reference,
      boxShadow: Rb.reference,
      borderRadius: ll.reference,
      color: 'chakra-body-text',
      borderWidth: Ab.reference,
      borderColor: $b.reference,
    },
    body: { padding: Rn.reference, flex: '1 1 0%' },
    header: { padding: Rn.reference },
    footer: { padding: Rn.reference },
  }),
  uA = {
    sm: qr({
      container: { [ll.variable]: 'radii.base', [Rn.variable]: 'space.3' },
    }),
    md: qr({
      container: { [ll.variable]: 'radii.md', [Rn.variable]: 'space.5' },
    }),
    lg: qr({
      container: { [ll.variable]: 'radii.xl', [Rn.variable]: 'space.7' },
    }),
  },
  cA = {
    elevated: qr({
      container: {
        [Rb.variable]: 'shadows.base',
        _dark: { [Hl.variable]: 'colors.gray.700' },
      },
    }),
    outline: qr({
      container: {
        [Ab.variable]: '1px',
        [$b.variable]: 'colors.chakra-border-color',
      },
    }),
    filled: qr({ container: { [Hl.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [Rn.variable]: 0 },
      header: { [Rn.variable]: 0 },
      footer: { [Rn.variable]: 0 },
    },
  },
  dA = sA({
    baseStyle: lA,
    variants: cA,
    sizes: uA,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  Zi = je('close-button-size'),
  Pi = je('close-button-bg'),
  fA = {
    w: [Zi.reference],
    h: [Zi.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [Pi.variable]: 'colors.blackAlpha.100',
      _dark: { [Pi.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [Pi.variable]: 'colors.blackAlpha.200',
      _dark: { [Pi.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: Pi.reference,
  },
  hA = {
    lg: { [Zi.variable]: 'sizes.10', fontSize: 'md' },
    md: { [Zi.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [Zi.variable]: 'sizes.6', fontSize: '2xs' },
  },
  mA = { baseStyle: fA, sizes: hA, defaultProps: { size: 'md' } },
  { variants: pA, defaultProps: gA } = Qi,
  vA = {
    fontFamily: 'mono',
    fontSize: 'sm',
    px: '0.2em',
    borderRadius: 'sm',
    bg: Te.bg.reference,
    color: Te.color.reference,
    boxShadow: Te.shadow.reference,
  },
  yA = { baseStyle: vA, variants: pA, defaultProps: gA },
  bA = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  SA = { baseStyle: bA },
  xA = { opacity: 0.6, borderColor: 'inherit' },
  wA = { borderStyle: 'solid' },
  kA = { borderStyle: 'dashed' },
  CA = { solid: wA, dashed: kA },
  EA = { baseStyle: xA, variants: CA, defaultProps: { variant: 'solid' } },
  { definePartsStyle: PA, defineMultiStyleConfig: _A } = le(u5.keys),
  TA = {
    borderTopWidth: '1px',
    borderColor: 'inherit',
    _last: { borderBottomWidth: '1px' },
  },
  RA = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  AA = { pt: '2', px: '4', pb: '5' },
  $A = { fontSize: '1.25em' },
  zA = PA({ container: TA, button: RA, panel: AA, icon: $A }),
  LA = _A({ baseStyle: zA }),
  { definePartsStyle: Ha, defineMultiStyleConfig: MA } = le(c5.keys),
  Et = O('alert-fg'),
  Bn = O('alert-bg'),
  IA = Ha({
    container: { bg: Bn.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: {
      color: Et.reference,
      flexShrink: 0,
      marginEnd: '3',
      w: '5',
      h: '6',
    },
    spinner: {
      color: Et.reference,
      flexShrink: 0,
      marginEnd: '3',
      w: '5',
      h: '5',
    },
  });
function em(e) {
  const { theme: t, colorScheme: n } = e,
    r = oi(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
var BA = Ha((e) => {
    const { colorScheme: t } = e,
      n = em(e);
    return {
      container: {
        [Et.variable]: `colors.${t}.500`,
        [Bn.variable]: n.light,
        _dark: { [Et.variable]: `colors.${t}.200`, [Bn.variable]: n.dark },
      },
    };
  }),
  jA = Ha((e) => {
    const { colorScheme: t } = e,
      n = em(e);
    return {
      container: {
        [Et.variable]: `colors.${t}.500`,
        [Bn.variable]: n.light,
        _dark: { [Et.variable]: `colors.${t}.200`, [Bn.variable]: n.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: Et.reference,
      },
    };
  }),
  DA = Ha((e) => {
    const { colorScheme: t } = e,
      n = em(e);
    return {
      container: {
        [Et.variable]: `colors.${t}.500`,
        [Bn.variable]: n.light,
        _dark: { [Et.variable]: `colors.${t}.200`, [Bn.variable]: n.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: Et.reference,
      },
    };
  }),
  NA = Ha((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Et.variable]: 'colors.white',
        [Bn.variable]: `colors.${t}.500`,
        _dark: {
          [Et.variable]: 'colors.gray.900',
          [Bn.variable]: `colors.${t}.200`,
        },
        color: Et.reference,
      },
    };
  }),
  FA = { subtle: BA, 'left-accent': jA, 'top-accent': DA, solid: NA },
  OA = MA({
    baseStyle: IA,
    variants: FA,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  { definePartsStyle: zb, defineMultiStyleConfig: VA } = le(d5.keys),
  Yo = O('avatar-border-color'),
  Qc = O('avatar-bg'),
  WA = {
    borderRadius: 'full',
    border: '0.2em solid',
    [Yo.variable]: 'white',
    _dark: { [Yo.variable]: 'colors.gray.800' },
    borderColor: Yo.reference,
  },
  UA = {
    [Qc.variable]: 'colors.gray.200',
    _dark: { [Qc.variable]: 'colors.whiteAlpha.400' },
    bgColor: Qc.reference,
  },
  ig = O('avatar-background'),
  HA = (e) => {
    const { name: t, theme: n } = e,
      r = t ? J5({ string: t }) : 'colors.gray.400',
      o = q5(r)(n);
    let i = 'white';
    return (
      o || (i = 'gray.800'),
      {
        bg: ig.reference,
        '&:not([data-loaded])': { [ig.variable]: r },
        color: i,
        [Yo.variable]: 'colors.white',
        _dark: { [Yo.variable]: 'colors.gray.800' },
        borderColor: Yo.reference,
        verticalAlign: 'top',
      }
    );
  },
  GA = zb((e) => ({
    badge: ot(WA, e),
    excessLabel: ot(UA, e),
    container: ot(HA, e),
  }));
function Un(e) {
  const t = e !== '100%' ? wb[e] : void 0;
  return zb({
    container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
    excessLabel: { width: e, height: e },
    label: {
      fontSize: `calc(${t ?? e} / 2.5)`,
      lineHeight: e !== '100%' ? t ?? e : void 0,
    },
  });
}
var KA = {
    '2xs': Un(4),
    xs: Un(6),
    sm: Un(8),
    md: Un(12),
    lg: Un(16),
    xl: Un(24),
    '2xl': Un(32),
    full: Un('100%'),
  },
  YA = VA({ baseStyle: GA, sizes: KA, defaultProps: { size: 'md' } }),
  XA = {
    Accordion: LA,
    Alert: OA,
    Avatar: YA,
    Badge: Qi,
    Breadcrumb: qR,
    Button: aA,
    Checkbox: Ul,
    CloseButton: mA,
    Code: yA,
    Container: SA,
    Divider: EA,
    Drawer: wR,
    Editable: RR,
    Form: IR,
    FormError: OR,
    FormLabel: WR,
    Heading: GR,
    Input: ee,
    Kbd: h3,
    Link: p3,
    List: S3,
    Menu: A3,
    Modal: O3,
    NumberInput: Q3,
    PinInput: eR,
    Popover: dR,
    Progress: b4,
    Radio: z4,
    Select: N4,
    Skeleton: O4,
    SkipLink: W4,
    Slider: e3,
    Spinner: r3,
    Stat: d3,
    Switch: pT,
    Table: wT,
    Tabs: jT,
    Tag: QT,
    Textarea: l4,
    Tooltip: d4,
    Card: dA,
    Stepper: l5,
  },
  QA = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-inverse-text': { _light: 'white', _dark: 'gray.800' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-subtle-text': { _light: 'gray.600', _dark: 'gray.400' },
      'chakra-placeholder-color': {
        _light: 'gray.500',
        _dark: 'whiteAlpha.400',
      },
    },
  },
  qA = {
    global: {
      body: {
        fontFamily: 'body',
        color: 'chakra-body-text',
        bg: 'chakra-body-bg',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        lineHeight: 'base',
      },
      '*::placeholder': { color: 'chakra-placeholder-color' },
      '*, *::before, &::after': { borderColor: 'chakra-border-color' },
    },
  },
  ZA = 'ltr',
  JA = {
    useSystemColorMode: !1,
    initialColorMode: 'light',
    cssVarPrefix: 'chakra',
  },
  e$ = {
    semanticTokens: QA,
    direction: ZA,
    ...i5,
    components: XA,
    styles: qA,
    config: JA,
  };
function t$() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
var n$ = t$();
function r$(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function o$(e, t, n, r) {
  const o = typeof t == 'string' ? t.split('.') : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var i$ = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > 'u') return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  Lb = i$(o$);
function Mb(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var Ib = (e) => Mb(e, (t) => t != null);
function a$(e) {
  return typeof e == 'function';
}
function Bb(e, ...t) {
  return a$(e) ? e(...t) : e;
}
function s$(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var l$ = typeof Element < 'u',
  u$ = typeof Map == 'function',
  c$ = typeof Set == 'function',
  d$ = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function ul(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ul(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (u$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!ul(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (c$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (d$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (l$ && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === '_owner' || o[r] === '__v' || o[r] === '__o') &&
          e.$$typeof
        ) &&
        !ul(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var f$ = function (t, n) {
  try {
    return ul(t, n);
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw r;
  }
};
const h$ = Df(f$);
function jb(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: a } = bP(),
    s = e ? Lb(i, `components.${e}`) : void 0,
    l = r || s,
    u = cn(
      { theme: i, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      Ib(r$(o, ['children']))
    ),
    c = S.useRef({});
  if (l) {
    const f = I_(l)(u);
    h$(c.current, f) || (c.current = f);
  }
  return c.current;
}
function co(e, t = {}) {
  return jb(e, t);
}
function Db(e, t = {}) {
  return jb(e, t);
}
var m$ = new Set([
    ...k_,
    'textStyle',
    'layerStyle',
    'apply',
    'noOfLines',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx',
  ]),
  p$ = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate']);
function g$(e) {
  return p$.has(e) || !m$.has(e);
}
function v$(e, ...t) {
  if (e == null)
    throw new TypeError('Cannot convert undefined or null to object');
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
function Nb(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var y$ =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  b$ = Y1(function (e) {
    return (
      y$.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  S$ = b$,
  x$ = function (t) {
    return t !== 'theme';
  },
  ag = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? S$ : x$;
  },
  sg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  w$ = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      eb(n, r, o),
      GE(function () {
        return tb(n, r, o);
      }),
      null
    );
  },
  k$ = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = sg(t, n, r),
      l = s || ag(o),
      u = !l('as');
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push('label:' + i + ';'),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, m = 1; m < f; m++) d.push(c[m], c[0][m]);
      }
      var y = ib(function (b, E, p) {
        var h = (u && b.as) || o,
          g = '',
          C = [],
          _ = b;
        if (b.theme == null) {
          _ = {};
          for (var A in b) _[A] = b[A];
          _.theme = S.useContext(Ta);
        }
        typeof b.className == 'string'
          ? (g = NE(E.registered, C, b.className))
          : b.className != null && (g = b.className + ' ');
        var T = Wh(d.concat(C), E.registered, _);
        (g += E.key + '-' + T.name), a !== void 0 && (g += ' ' + a);
        var $ = u && s === void 0 ? ag(h) : l,
          j = {};
        for (var B in b) (u && B === 'as') || ($(B) && (j[B] = b[B]));
        return (
          (j.className = g),
          (j.ref = p),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(w$, {
              cache: E,
              serialized: T,
              isStringTag: typeof h == 'string',
            }),
            S.createElement(h, j)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = d),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, 'toString', {
          value: function () {
            return '.' + a;
          },
        }),
        (y.withComponent = function (b, E) {
          return e(b, Fl({}, n, E, { shouldForwardProp: sg(y, E, !0) })).apply(
            void 0,
            d
          );
        }),
        y
      );
    };
  },
  C$ = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Gl = k$.bind();
C$.forEach(function (e) {
  Gl[e] = Gl(e);
});
var lg,
  E$ = (lg = Gl.default) != null ? lg : Gl,
  P$ =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...a } = t,
        s = Mb(a, (d, f) => E_(f)),
        l = Bb(e, t),
        u = v$({}, o, l, Ib(s), i),
        c = bb(u)(t.theme);
      return r ? [c, r] : c;
    };
function qc(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = g$);
  const o = P$({ baseStyle: n }),
    i = E$(e, r)(o);
  return w.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Gh();
    return w.createElement(i, { ref: u, 'data-theme': d ? c : void 0, ...l });
  });
}
function _$() {
  const e = new Map();
  return new Proxy(qc, {
    apply(t, n, r) {
      return qc(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, qc(n)), e.get(n);
    },
  });
}
var ne = _$();
function he(e) {
  return S.forwardRef(e);
}
function T$(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: r,
    } = e,
    o = S.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = S.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw (
        ((l.name = 'ContextError'),
        (a = Error.captureStackTrace) == null || a.call(Error, l, i),
        l)
      );
    }
    return s;
  }
  return [o.Provider, i, o];
}
function R$(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = S.useMemo(() => w_(n), [n]);
  return R.jsxs(XE, { theme: o, children: [R.jsx(A$, { root: t }), r] });
}
function A$({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',');
  return R.jsx(zu, { styles: (n) => ({ [t]: n.__cssVars }) });
}
T$({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
});
function $$() {
  const { colorMode: e } = Gh();
  return R.jsx(zu, {
    styles: (t) => {
      const n = Lb(t, 'styles.global'),
        r = Bb(n, { theme: t, colorMode: e });
      return r ? bb(r)(t) : void 0;
    },
  });
}
var Fb = S.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
Fb.displayName = 'EnvironmentContext';
function Ob(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = S.useRef(null),
    i = S.useMemo(
      () =>
        n || {
          getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [n]
    ),
    a = !r || !n;
  return R.jsxs(Fb.Provider, {
    value: i,
    children: [
      t,
      a && R.jsx('span', { id: '__chakra_env', hidden: !0, ref: o }),
    ],
  });
}
Ob.displayName = 'EnvironmentProvider';
var z$ = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: r,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
      } = e,
      c = R.jsx(Ob, { environment: s, disabled: u, children: t });
    return R.jsx(R$, {
      theme: a,
      cssVarsRoot: l,
      children: R.jsxs(fb, {
        colorModeManager: n,
        options: a.config,
        children: [
          i ? R.jsx(iP, { scope: o }) : R.jsx(oP, {}),
          R.jsx($$, {}),
          r ? R.jsx(cb, { zIndex: r, children: c }) : c,
        ],
      }),
    });
  },
  L$ = (e, t) => e.find((n) => n.id === t);
function ug(e, t) {
  const n = Vb(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function Vb(e, t) {
  for (const [n, r] of Object.entries(e)) if (L$(r, t)) return n;
}
function M$(e) {
  const t = e.includes('right'),
    n = e.includes('left');
  let r = 'center';
  return (
    t && (r = 'flex-end'),
    n && (r = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: r }
  );
}
function I$(e) {
  const n = e === 'top' || e === 'bottom' ? '0 auto' : void 0,
    r = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
    o = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
    i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
    a = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)';
  return {
    position: 'fixed',
    zIndex: 'var(--toast-z-index, 5500)',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a,
  };
}
function B$(e, t = []) {
  const n = S.useRef(e);
  return (
    S.useEffect(() => {
      n.current = e;
    }),
    S.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function j$(e, t) {
  const n = B$(e);
  S.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
function cg(e, t) {
  const n = S.useRef(!1),
    r = S.useRef(!1);
  S.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    S.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const Wb = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  Nu = S.createContext({}),
  Ga = S.createContext(null),
  Fu = typeof document < 'u',
  Kl = Fu ? S.useLayoutEffect : S.useEffect,
  Ub = S.createContext({ strict: !1 });
function D$(e, t, n, r) {
  const { visualElement: o } = S.useContext(Nu),
    i = S.useContext(Ub),
    a = S.useContext(Ga),
    s = S.useContext(Wb).reducedMotion,
    l = S.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  return (
    S.useInsertionEffect(() => {
      u && u.update(n, a);
    }),
    Kl(() => {
      u && u.render();
    }),
    S.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? Kl : S.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Io(e) {
  return (
    typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function N$(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Io(n) && (n.current = r));
    },
    [t]
  );
}
function La(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Ou(e) {
  return typeof e == 'object' && typeof e.start == 'function';
}
const tm = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  nm = ['initial', ...tm];
function Vu(e) {
  return Ou(e.animate) || nm.some((t) => La(e[t]));
}
function Hb(e) {
  return !!(Vu(e) || e.variants);
}
function F$(e, t) {
  if (Vu(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || La(n) ? n : void 0,
      animate: La(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function O$(e) {
  const { initial: t, animate: n } = F$(e, S.useContext(Nu));
  return S.useMemo(() => ({ initial: t, animate: n }), [dg(t), dg(n)]);
}
function dg(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const fg = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Ma = {};
for (const e in fg) Ma[e] = { isEnabled: (t) => fg[e].some((n) => !!t[n]) };
function V$(e) {
  for (const t in e) Ma[t] = { ...Ma[t], ...e[t] };
}
const rm = S.createContext({}),
  Gb = S.createContext({}),
  W$ = Symbol.for('motionComponentSymbol');
function U$({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && V$(e);
  function i(s, l) {
    let u;
    const c = { ...S.useContext(Wb), ...s, layoutId: H$(s) },
      { isStatic: d } = c,
      f = O$(s),
      m = r(s, d);
    if (!d && Fu) {
      f.visualElement = D$(o, m, c, t);
      const y = S.useContext(Gb),
        b = S.useContext(Ub).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, b, e, y));
    }
    return S.createElement(
      Nu.Provider,
      { value: f },
      u && f.visualElement
        ? S.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, s, N$(m, f.visualElement, l), m, d, f.visualElement)
    );
  }
  const a = S.forwardRef(i);
  return (a[W$] = o), a;
}
function H$({ layoutId: e }) {
  const t = S.useContext(rm).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function G$(e) {
  function t(r, o = {}) {
    return U$(e(r, o));
  }
  if (typeof Proxy > 'u') return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const K$ = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function om(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(K$.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Yl = {};
function Y$(e) {
  Object.assign(Yl, e);
}
const Ka = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  fo = new Set(Ka);
function Kb(e, { layout: t, layoutId: n }) {
  return (
    fo.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!Yl[e] || e === 'opacity'))
  );
}
const vt = (e) => !!(e && e.getVelocity),
  X$ = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  Q$ = Ka.length;
function q$(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = '';
  for (let a = 0; a < Q$; a++) {
    const s = Ka[a];
    if (e[s] !== void 0) {
      const l = X$[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    o ? (i = o(e, r ? '' : i)) : n && r && (i = 'none'),
    i
  );
}
const Yb = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Xb = Yb('--'),
  Sf = Yb('var(--'),
  Z$ =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  J$ = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  ro = (e, t, n) => Math.min(Math.max(n, e), t),
  ho = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  Ji = { ...ho, transform: (e) => ro(0, 1, e) },
  Is = { ...ho, default: 1 },
  ea = (e) => Math.round(e * 1e5) / 1e5,
  Wu = /(-)?([\d]*\.?[\d])+/g,
  Qb =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  ez =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ya(e) {
  return typeof e == 'string';
}
const Xa = (e) => ({
    test: (t) => Ya(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Hn = Xa('deg'),
  pn = Xa('%'),
  N = Xa('px'),
  tz = Xa('vh'),
  nz = Xa('vw'),
  hg = {
    ...pn,
    parse: (e) => pn.parse(e) / 100,
    transform: (e) => pn.transform(e * 100),
  },
  mg = { ...ho, transform: Math.round },
  qb = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    rotate: Hn,
    rotateX: Hn,
    rotateY: Hn,
    rotateZ: Hn,
    scale: Is,
    scaleX: Is,
    scaleY: Is,
    scaleZ: Is,
    skew: Hn,
    skewX: Hn,
    skewY: Hn,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Ji,
    originX: hg,
    originY: hg,
    originZ: N,
    zIndex: mg,
    fillOpacity: Ji,
    strokeOpacity: Ji,
    numOctaves: mg,
  };
function im(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (Xb(d)) {
      i[d] = f;
      continue;
    }
    const m = qb[d],
      y = J$(f, m);
    if (fo.has(d)) {
      if (((l = !0), (a[d] = y), !c)) continue;
      f !== (m.default || 0) && (c = !1);
    } else d.startsWith('origin') ? ((u = !0), (s[d] = y)) : (o[d] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = q$(e.transform, n, c, r))
        : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: m = 0 } = s;
    o.transformOrigin = `${d} ${f} ${m}`;
  }
}
const am = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Zb(e, t, n) {
  for (const r in t) !vt(t[r]) && !Kb(r, n) && (e[r] = t[r]);
}
function rz({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = am();
    return (
      im(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function oz(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    Zb(o, r, e),
    Object.assign(o, rz(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function iz(e, t, n) {
  const r = {},
    o = oz(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const az = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport',
]);
function Xl(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    az.has(e)
  );
}
let Jb = (e) => !Xl(e);
function sz(e) {
  e && (Jb = (t) => (t.startsWith('on') ? !Xl(t) : e(t)));
}
try {
  sz(require('@emotion/is-prop-valid').default);
} catch {}
function lz(e, t, n) {
  const r = {};
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((Jb(o) ||
        (n === !0 && Xl(o)) ||
        (!t && !Xl(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (r[o] = e[o]));
  return r;
}
function pg(e, t, n) {
  return typeof e == 'string' ? e : N.transform(t + n * e);
}
function uz(e, t, n) {
  const r = pg(t, e.x, e.width),
    o = pg(n, e.y, e.height);
  return `${r} ${o}`;
}
const cz = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  dz = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function fz(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? cz : dz;
  e[i.offset] = N.transform(-r);
  const a = N.transform(t),
    s = N.transform(n);
  e[i.array] = `${a} ${s}`;
}
function sm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((im(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: y, dimensions: b } = e;
  m.transform && (b && (y.transform = m.transform), delete m.transform),
    b &&
      (o !== void 0 || i !== void 0 || y.transform) &&
      (y.transformOrigin = uz(
        b,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    a !== void 0 && fz(m, a, s, l, !1);
}
const eS = () => ({ ...am(), attrs: {} }),
  lm = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function hz(e, t, n, r) {
  const o = S.useMemo(() => {
    const i = eS();
    return (
      sm(i, t, { enableHardwareAcceleration: !1 }, lm(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Zb(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function mz(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (om(n) ? hz : iz)(r, i, a, n),
      c = { ...lz(r, typeof n == 'string', e), ...l, ref: o },
      { children: d } = r,
      f = S.useMemo(() => (vt(d) ? d.get() : d), [d]);
    return S.createElement(n, { ...c, children: f });
  };
}
const um = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function tS(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const nS = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function rS(e, t, n, r) {
  tS(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(nS.has(o) ? o : um(o), t.attrs[o]);
}
function cm(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (vt(n[o]) || (t.style && vt(t.style[o])) || Kb(o, e)) && (r[o] = n[o]);
  return r;
}
function oS(e, t) {
  const n = cm(e, t);
  for (const r in e)
    if (vt(e[r]) || vt(t[r])) {
      const o =
        Ka.indexOf(r) !== -1
          ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function dm(e, t, n, r = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function iS(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ql = (e) => Array.isArray(e),
  pz = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  gz = (e) => (Ql(e) ? e[e.length - 1] || 0 : e);
function cl(e) {
  const t = vt(e) ? e.get() : e;
  return pz(t) ? t.toValue() : t;
}
function vz(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const a = { latestValues: yz(r, o, i, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const aS = (e) => (t, n) => {
  const r = S.useContext(Nu),
    o = S.useContext(Ga),
    i = () => vz(e, t, r, o);
  return n ? i() : iS(i);
};
function yz(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = cl(i[f]);
  let { initial: a, animate: s } = e;
  const l = Vu(e),
    u = Hb(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != 'boolean' &&
      !Ou(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const y = dm(e, m);
        if (!y) return;
        const { transitionEnd: b, transition: E, ...p } = y;
        for (const h in p) {
          let g = p[h];
          if (Array.isArray(g)) {
            const C = c ? g.length - 1 : 0;
            g = g[C];
          }
          g !== null && (o[h] = g);
        }
        for (const h in b) o[h] = b[h];
      }),
    o
  );
}
const bz = {
    useVisualState: aS({
      scrapeMotionValuesFromProps: oS,
      createRenderState: eS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == 'function'
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        sm(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          lm(t.tagName),
          e.transformTemplate
        ),
          rS(t, n);
      },
    }),
  },
  Sz = {
    useVisualState: aS({
      scrapeMotionValuesFromProps: cm,
      createRenderState: am,
    }),
  };
function xz(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(om(e) ? bz : Sz),
    preloadedFeatures: n,
    useRender: mz(t),
    createVisualElement: r,
    Component: e,
  };
}
function _n(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const sS = (e) =>
  e.pointerType === 'mouse'
    ? typeof e.button != 'number' || e.button <= 0
    : e.isPrimary !== !1;
function Uu(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const wz = (e) => (t) => sS(t) && e(t, Uu(t));
function An(e, t, n, r) {
  return _n(e, t, wz(n), r);
}
const kz = (e, t) => (n) => t(e(n)),
  fr = (...e) => e.reduce(kz);
function lS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const gg = lS('dragHorizontal'),
  vg = lS('dragVertical');
function uS(e) {
  let t = !1;
  if (e === 'y') t = vg();
  else if (e === 'x') t = gg();
  else {
    const n = gg(),
      r = vg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function cS() {
  const e = uS(!0);
  return e ? (e(), !1) : !0;
}
class wr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Cz(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return (
          u && a.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const Ne = { delta: 0, timestamp: 0, isProcessing: !1 },
  Ez = 40;
let xf = !0,
  Ia = !1;
const Hu = ['read', 'update', 'preRender', 'render', 'postRender'],
  Xo = Hu.reduce((e, t) => ((e[t] = Cz(() => (Ia = !0))), e), {}),
  Pz = (e) => Xo[e].process(Ne),
  dS = (e) => {
    (Ia = !1),
      (Ne.delta = xf ? 1e3 / 60 : Math.max(Math.min(e - Ne.timestamp, Ez), 1)),
      (Ne.timestamp = e),
      (Ne.isProcessing = !0),
      Hu.forEach(Pz),
      (Ne.isProcessing = !1),
      Ia && ((xf = !1), requestAnimationFrame(dS));
  },
  _z = () => {
    (Ia = !0), (xf = !0), Ne.isProcessing || requestAnimationFrame(dS);
  },
  ye = Hu.reduce((e, t) => {
    const n = Xo[t];
    return (e[t] = (r, o = !1, i = !1) => (Ia || _z(), n.schedule(r, o, i))), e;
  }, {});
function jn(e) {
  Hu.forEach((t) => Xo[t].cancel(e));
}
function yg(e, t) {
  const n = 'pointer' + (t ? 'enter' : 'leave'),
    r = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || cS()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive('whileHover', t),
        s[r] && ye.update(() => s[r](i, a));
    };
  return An(e.current, n, o, { passive: !e.getProps()[r] });
}
class Tz extends wr {
  mount() {
    this.unmount = fr(yg(this.node, !0), yg(this.node, !1));
  }
  unmount() {}
}
class Rz extends wr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = fr(
      _n(this.node.current, 'focus', () => this.onFocus()),
      _n(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
const fS = (e, t) => (t ? (e === t ? !0 : fS(e, t.parentElement)) : !1),
  Ie = (e) => e;
function Zc(e, t) {
  if (!t) return;
  const n = new PointerEvent('pointer' + e);
  t(n, Uu(n));
}
class Az extends wr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ie),
      (this.removeEndListeners = Ie),
      (this.removeAccessibleListeners = Ie),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = An(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ye.update(() => {
                fS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = An(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = fr(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return;
            const a = (s) => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Zc('up', (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ye.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = _n(this.node.current, 'keyup', a)),
              Zc('down', (s, l) => {
                this.startPress(s, l);
              });
          },
          n = _n(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && Zc('cancel', (i, a) => this.cancelPress(i, a));
          },
          o = _n(this.node.current, 'blur', r);
        this.removeAccessibleListeners = fr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      r && ye.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !cS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ye.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = An(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = _n(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = fr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const wf = new WeakMap(),
  Jc = new WeakMap(),
  $z = (e) => {
    const t = wf.get(e.target);
    t && t(e);
  },
  zz = (e) => {
    e.forEach($z);
  };
function Lz({ root: e, ...t }) {
  const n = e || document;
  Jc.has(n) || Jc.set(n, {});
  const r = Jc.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(zz, { root: e, ...t })), r[o];
}
function Mz(e, t, n) {
  const r = Lz(t);
  return (
    wf.set(e, n),
    r.observe(e),
    () => {
      wf.delete(e), r.unobserve(e);
    }
  );
}
const Iz = { some: 0, all: 1 };
class Bz extends wr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = 'some', once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == 'number' ? o : Iz[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Mz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(jz(t, n)) && this.startObserver();
  }
  unmount() {}
}
function jz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Dz = {
  inView: { Feature: Bz },
  tap: { Feature: Az },
  focus: { Feature: Rz },
  hover: { Feature: Tz },
};
function hS(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Nz(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Fz(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Gu(e, t, n) {
  const r = e.getProps();
  return dm(r, t, n !== void 0 ? n : r.custom, Nz(e), Fz(e));
}
const Oz = 'framerAppearId',
  Vz = 'data-' + um(Oz);
let Wz = Ie,
  fm = Ie;
const hr = (e) => e * 1e3,
  $n = (e) => e / 1e3,
  Uz = { current: !1 },
  mS = (e) => Array.isArray(e) && typeof e[0] == 'number';
function pS(e) {
  return !!(
    !e ||
    (typeof e == 'string' && gS[e]) ||
    mS(e) ||
    (Array.isArray(e) && e.every(pS))
  );
}
const Di = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  gS = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Di([0, 0.65, 0.55, 1]),
    circOut: Di([0.55, 0, 1, 0.45]),
    backIn: Di([0.31, 0.01, 0.66, -0.59]),
    backOut: Di([0.33, 1.53, 0.69, 0.99]),
  };
function vS(e) {
  if (e) return mS(e) ? Di(e) : Array.isArray(e) ? e.map(vS) : gS[e];
}
function Hz(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = 'loop',
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vS(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: i + 1,
      direction: a === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
const bg = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
  },
  ed = {},
  yS = {};
for (const e in bg)
  yS[e] = () => (ed[e] === void 0 && (ed[e] = bg[e]()), ed[e]);
function Gz(e, { repeat: t, repeatType: n = 'loop' }) {
  const r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const bS = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Kz = 1e-7,
  Yz = 12;
function Xz(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = bS(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > Kz && ++s < Yz);
  return a;
}
function Qa(e, t, n, r) {
  if (e === t && n === r) return Ie;
  const o = (i) => Xz(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : bS(o(i), t, r));
}
const Qz = Qa(0.42, 0, 1, 1),
  qz = Qa(0, 0, 0.58, 1),
  SS = Qa(0.42, 0, 0.58, 1),
  Zz = (e) => Array.isArray(e) && typeof e[0] != 'number',
  xS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  wS = (e) => (t) => 1 - e(1 - t),
  kS = (e) => 1 - Math.sin(Math.acos(e)),
  hm = wS(kS),
  Jz = xS(hm),
  CS = Qa(0.33, 1.53, 0.69, 0.99),
  mm = wS(CS),
  eL = xS(mm),
  tL = (e) =>
    (e *= 2) < 1 ? 0.5 * mm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  nL = {
    linear: Ie,
    easeIn: Qz,
    easeInOut: SS,
    easeOut: qz,
    circIn: kS,
    circInOut: Jz,
    circOut: hm,
    backIn: mm,
    backInOut: eL,
    backOut: CS,
    anticipate: tL,
  },
  Sg = (e) => {
    if (Array.isArray(e)) {
      fm(e.length === 4);
      const [t, n, r, o] = e;
      return Qa(t, n, r, o);
    } else if (typeof e == 'string') return nL[e];
    return e;
  },
  pm = (e, t) => (n) =>
    !!(
      (Ya(n) && ez.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ES = (e, t, n) => (r) => {
    if (!Ya(r)) return r;
    const [o, i, a, s] = r.match(Wu);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  rL = (e) => ro(0, 255, e),
  td = { ...ho, transform: (e) => Math.round(rL(e)) },
  Hr = {
    test: pm('rgb', 'red'),
    parse: ES('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      td.transform(e) +
      ', ' +
      td.transform(t) +
      ', ' +
      td.transform(n) +
      ', ' +
      ea(Ji.transform(r)) +
      ')',
  };
function oL(e) {
  let t = '',
    n = '',
    r = '',
    o = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const kf = { test: pm('#'), parse: oL, transform: Hr.transform },
  Bo = {
    test: pm('hsl', 'hue'),
    parse: ES('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      pn.transform(ea(t)) +
      ', ' +
      pn.transform(ea(n)) +
      ', ' +
      ea(Ji.transform(r)) +
      ')',
  },
  Je = {
    test: (e) => Hr.test(e) || kf.test(e) || Bo.test(e),
    parse: (e) =>
      Hr.test(e) ? Hr.parse(e) : Bo.test(e) ? Bo.parse(e) : kf.parse(e),
    transform: (e) =>
      Ya(e) ? e : e.hasOwnProperty('red') ? Hr.transform(e) : Bo.transform(e),
  },
  ke = (e, t, n) => -n * e + n * t + e;
function nd(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function iL({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = nd(l, s, e + 1 / 3)), (i = nd(l, s, e)), (a = nd(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const rd = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  aL = [kf, Hr, Bo],
  sL = (e) => aL.find((t) => t.test(e));
function xg(e) {
  const t = sL(e);
  let n = t.parse(e);
  return t === Bo && (n = iL(n)), n;
}
const PS = (e, t) => {
  const n = xg(e),
    r = xg(t),
    o = { ...n };
  return (i) => (
    (o.red = rd(n.red, r.red, i)),
    (o.green = rd(n.green, r.green, i)),
    (o.blue = rd(n.blue, r.blue, i)),
    (o.alpha = ke(n.alpha, r.alpha, i)),
    Hr.transform(o)
  );
};
function lL(e) {
  var t, n;
  return (
    isNaN(e) &&
    Ya(e) &&
    (((t = e.match(Wu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Qb)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const _S = { regex: Z$, countKey: 'Vars', token: '${v}', parse: Ie },
  TS = { regex: Qb, countKey: 'Colors', token: '${c}', parse: Je.parse },
  RS = { regex: Wu, countKey: 'Numbers', token: '${n}', parse: ho.parse };
function od(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e['num' + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function ql(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes('var(--') && od(n, _S), od(n, TS), od(n, RS), n;
}
function AS(e) {
  return ql(e).values;
}
function $S(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = ql(e),
    i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (s = s.replace(_S.token, a[l]))
        : l < r + n
        ? (s = s.replace(TS.token, Je.transform(a[l])))
        : (s = s.replace(RS.token, ea(a[l])));
    return s;
  };
}
const uL = (e) => (typeof e == 'number' ? 0 : e);
function cL(e) {
  const t = AS(e);
  return $S(e)(t.map(uL));
}
const vr = {
    test: lL,
    parse: AS,
    createTransformer: $S,
    getAnimatableNone: cL,
  },
  zS = (e, t) => (n) => `${n > 0 ? t : e}`;
function LS(e, t) {
  return typeof e == 'number'
    ? (n) => ke(e, t, n)
    : Je.test(e)
    ? PS(e, t)
    : e.startsWith('var(')
    ? zS(e, t)
    : IS(e, t);
}
const MS = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, a) => LS(i, t[a]));
    return (i) => {
      for (let a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  dL = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = LS(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  IS = (e, t) => {
    const n = vr.createTransformer(t),
      r = ql(e),
      o = ql(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? fr(MS(r.values, o.values), n)
      : zS(e, t);
  },
  Ba = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  wg = (e, t) => (n) => ke(e, t, n);
function fL(e) {
  return typeof e == 'number'
    ? wg
    : typeof e == 'string'
    ? Je.test(e)
      ? PS
      : IS
    : Array.isArray(e)
    ? MS
    : typeof e == 'object'
    ? dL
    : wg;
}
function hL(e, t, n) {
  const r = [],
    o = n || fL(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ie : t;
      s = fr(l, s);
    }
    r.push(s);
  }
  return r;
}
function BS(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((fm(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = hL(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Ba(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(ro(e[0], e[i - 1], u)) : l;
}
function mL(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Ba(0, t, r);
    e.push(ke(n, 1, o));
  }
}
function pL(e) {
  const t = [0];
  return mL(t, e.length - 1), t;
}
function gL(e, t) {
  return e.map((n) => n * t);
}
function vL(e, t) {
  return e.map(() => t || SS).splice(0, e.length - 1);
}
function Zl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  const o = Zz(r) ? r.map(Sg) : Sg(r),
    i = { done: !1, value: t[0] },
    a = gL(n && n.length === t.length ? n : pL(t), e),
    s = BS(a, t, { ease: Array.isArray(o) ? o : vL(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function jS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const yL = 5;
function DS(e, t, n) {
  const r = Math.max(t - yL, 0);
  return jS(n - e(r), t - r);
}
const id = 0.001,
  bL = 0.01,
  kg = 10,
  SL = 0.05,
  xL = 1;
function wL({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  Wz(e <= hr(kg));
  let a = 1 - t;
  (a = ro(SL, xL, a)),
    (e = ro(bL, kg, $n(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            m = Cf(u, a),
            y = Math.exp(-d);
          return id - (f / m) * y;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            m = Math.pow(a, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            b = Cf(Math.pow(u, 2), a);
          return ((-o(u) + id > 0 ? -1 : 1) * ((f - m) * y)) / b;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -id + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = CL(o, i, s);
  if (((e = hr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const kL = 12;
function CL(e, t, n) {
  let r = n;
  for (let o = 1; o < kL; o++) r = r - e(r) / t(r);
  return r;
}
function Cf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const EL = ['duration', 'bounce'],
  PL = ['stiffness', 'damping', 'mass'];
function Cg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function _L(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Cg(e, PL) && Cg(e, EL)) {
    const n = wL(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function NS({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = _L(r),
    m = c ? -$n(c) : 0,
    y = l / (2 * Math.sqrt(s * u)),
    b = i - o,
    E = $n(Math.sqrt(s / u)),
    p = Math.abs(b) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const g = Cf(E, y);
    h = (C) => {
      const _ = Math.exp(-y * E * C);
      return (
        i - _ * (((m + y * E * b) / g) * Math.sin(g * C) + b * Math.cos(g * C))
      );
    };
  } else if (y === 1) h = (g) => i - Math.exp(-E * g) * (b + (m + E * b) * g);
  else {
    const g = E * Math.sqrt(y * y - 1);
    h = (C) => {
      const _ = Math.exp(-y * E * C),
        A = Math.min(g * C, 300);
      return (
        i - (_ * ((m + y * E * b) * Math.sinh(A) + g * b * Math.cosh(A))) / g
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (g) => {
      const C = h(g);
      if (f) a.done = g >= d;
      else {
        let _ = m;
        g !== 0 && (y < 1 ? (_ = DS(h, g, C)) : (_ = 0));
        const A = Math.abs(_) <= n,
          T = Math.abs(i - C) <= t;
        a.done = A && T;
      }
      return (a.value = a.done ? i : C), a;
    },
  };
}
function Eg({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = ($) => (s !== void 0 && $ < s) || (l !== void 0 && $ > l),
    y = ($) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - $) < Math.abs(l - $)
        ? s
        : l;
  let b = n * t;
  const E = d + b,
    p = a === void 0 ? E : a(E);
  p !== E && (b = p - d);
  const h = ($) => -b * Math.exp(-$ / r),
    g = ($) => p + h($),
    C = ($) => {
      const j = h($),
        B = g($);
      (f.done = Math.abs(j) <= u), (f.value = f.done ? p : B);
    };
  let _, A;
  const T = ($) => {
    m(f.value) &&
      ((_ = $),
      (A = NS({
        keyframes: [f.value, y(f.value)],
        velocity: DS(g, $, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let j = !1;
        return (
          !A && _ === void 0 && ((j = !0), C($), T($)),
          _ !== void 0 && $ > _ ? A.next($ - _) : (!j && C($), f)
        );
      },
    }
  );
}
const TL = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ye.update(t, !0),
      stop: () => jn(t),
      now: () => (Ne.isProcessing ? Ne.timestamp : performance.now()),
    };
  },
  Pg = 2e4;
function _g(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Pg; ) (t += n), (r = e.next(t));
  return t >= Pg ? 1 / 0 : t;
}
const RL = { decay: Eg, inertia: Eg, tween: Zl, keyframes: Zl, spring: NS };
function Jl({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = TL,
  keyframes: r,
  type: o = 'keyframes',
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = 'loop',
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let m = 1,
    y = !1,
    b,
    E;
  const p = () => {
    b && b(),
      (E = new Promise((W) => {
        b = W;
      }));
  };
  p();
  let h;
  const g = RL[o] || Zl;
  let C;
  g !== Zl &&
    typeof r[0] != 'number' &&
    ((C = BS([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const _ = g({ ...f, keyframes: r });
  let A;
  s === 'mirror' &&
    (A = g({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let T = 'idle',
    $ = null,
    j = null,
    B = null;
  _.calculatedDuration === null && i && (_.calculatedDuration = _g(_));
  const { calculatedDuration: be } = _;
  let Ke = 1 / 0,
    st = 1 / 0;
  be !== null && ((Ke = be + a), (st = Ke * (i + 1) - a));
  let Se = 0;
  const xe = (W) => {
      if (j === null) return;
      m > 0 && (j = Math.min(j, W)), $ !== null ? (Se = $) : (Se = (W - j) * m);
      const ue = Se - t,
        Y = ue < 0;
      (Se = Math.max(ue, 0)), T === 'finished' && $ === null && (Se = st);
      let yt = Se,
        Nn = _;
      if (i) {
        const mo = Se / Ke;
        let Fn = Math.floor(mo),
          en = mo % 1;
        !en && mo >= 1 && (en = 1),
          en === 1 && Fn--,
          (Fn = Math.min(Fn, i + 1));
        const di = !!(Fn % 2);
        di &&
          (s === 'reverse'
            ? ((en = 1 - en), a && (en -= a / Ke))
            : s === 'mirror' && (Nn = A));
        let Za = ro(0, 1, en);
        Se > st && (Za = s === 'reverse' && di ? 1 : 0), (yt = Za * Ke);
      }
      const Le = Y ? { done: !1, value: r[0] } : Nn.next(yt);
      C && (Le.value = C(Le.value));
      let { done: Jt } = Le;
      !Y && be !== null && (Jt = Se >= st);
      const Cr =
        $ === null &&
        (T === 'finished' || (T === 'running' && Jt) || (m < 0 && Se <= 0));
      return d && d(Le.value), Cr && L(), Le;
    },
    lt = () => {
      h && h.stop(), (h = void 0);
    },
    zt = () => {
      (T = 'idle'), lt(), p(), (j = B = null);
    },
    L = () => {
      (T = 'finished'), c && c(), lt(), p();
    },
    V = () => {
      if (y) return;
      h || (h = n(xe));
      const W = h.now();
      l && l(),
        $ !== null ? (j = W - $) : (!j || T === 'finished') && (j = W),
        (B = j),
        ($ = null),
        (T = 'running'),
        h.start();
    };
  e && V();
  const U = {
    then(W, ue) {
      return E.then(W, ue);
    },
    get time() {
      return $n(Se);
    },
    set time(W) {
      (W = hr(W)),
        (Se = W),
        $ !== null || !h || m === 0 ? ($ = W) : (j = h.now() - W / m);
    },
    get duration() {
      const W = _.calculatedDuration === null ? _g(_) : _.calculatedDuration;
      return $n(W);
    },
    get speed() {
      return m;
    },
    set speed(W) {
      W === m || !h || ((m = W), (U.time = $n(Se)));
    },
    get state() {
      return T;
    },
    play: V,
    pause: () => {
      (T = 'paused'), ($ = Se);
    },
    stop: () => {
      (y = !0), T !== 'idle' && ((T = 'idle'), u && u(), zt());
    },
    cancel: () => {
      B !== null && xe(B), zt();
    },
    complete: () => {
      T = 'finished';
    },
    sample: (W) => ((j = 0), xe(W)),
  };
  return U;
}
const AL = new Set([
    'opacity',
    'clipPath',
    'filter',
    'transform',
    'backgroundColor',
  ]),
  Bs = 10,
  $L = 2e4,
  zL = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !pS(t.ease);
function LL(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      yS.waapi() &&
      AL.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== 'mirror' &&
      o.damping !== 0 &&
      o.type !== 'inertia'
    )
  )
    return !1;
  let a = !1,
    s,
    l;
  const u = () => {
    l = new Promise((p) => {
      s = p;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: m } = o;
  if (zL(t, o)) {
    const p = Jl({ ...o, repeat: 0, delay: 0 });
    let h = { done: !1, value: c[0] };
    const g = [];
    let C = 0;
    for (; !h.done && C < $L; ) (h = p.sample(C)), g.push(h.value), (C += Bs);
    (m = void 0), (c = g), (d = C - Bs), (f = 'linear');
  }
  const y = Hz(e.owner.current, t, c, { ...o, duration: d, ease: f, times: m }),
    b = () => y.cancel(),
    E = () => {
      ye.update(b), s(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(Gz(c, o)), r && r(), E();
    }),
    {
      then(p, h) {
        return l.then(p, h);
      },
      get time() {
        return $n(y.currentTime || 0);
      },
      set time(p) {
        y.currentTime = hr(p);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(p) {
        y.playbackRate = p;
      },
      get duration() {
        return $n(d);
      },
      play: () => {
        a || (y.play(), jn(b));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((a = !0), y.playState === 'idle')) return;
        const { currentTime: p } = y;
        if (p) {
          const h = Jl({ ...o, autoplay: !1 });
          e.setWithVelocity(h.sample(p - Bs).value, h.sample(p).value, Bs);
        }
        E();
      },
      complete: () => y.finish(),
      cancel: E,
    }
  );
}
function ML({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ie,
      pause: Ie,
      stop: Ie,
      then: (i) => (i(), Promise.resolve()),
      cancel: Ie,
      complete: Ie,
    }
  );
  return t
    ? Jl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const IL = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  BL = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jL = { type: 'keyframes', duration: 0.8 },
  DL = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  NL = (e, { keyframes: t }) =>
    t.length > 2
      ? jL
      : fo.has(e)
      ? e.startsWith('scale')
        ? BL(t[1])
        : IL
      : DL,
  Ef = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' &&
            (vr.test(t) || t === '0') &&
            !t.startsWith('url('))
        ),
  FL = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function OL(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(Wu) || [];
  if (!r) return e;
  const o = n.replace(r, '');
  let i = FL.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + '(' + i + o + ')';
}
const VL = /([a-z-]*)\(.*?\)/g,
  Pf = {
    ...vr,
    getAnimatableNone: (e) => {
      const t = e.match(VL);
      return t ? t.map(OL).join(' ') : e;
    },
  },
  WL = {
    ...qb,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: Pf,
    WebkitFilter: Pf,
  },
  gm = (e) => WL[e];
function FS(e, t) {
  let n = gm(e);
  return (
    n !== Pf && (n = vr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const OS = (e) => /^0[^.\s]+$/.test(e);
function UL(e) {
  if (typeof e == 'number') return e === 0;
  if (e !== null) return e === 'none' || e === '0' || OS(e);
}
function HL(e, t, n, r) {
  const o = Ef(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      UL(i[u]) ? l.push(u) : typeof i[u] == 'string' && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = FS(t, s);
    }
  return i;
}
function GL({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function VS(e, t) {
  return e[t] || e.default || e;
}
const vm =
  (e, t, n, r = {}) =>
  (o) => {
    const i = VS(r, e) || {},
      a = i.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - hr(a);
    const l = HL(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      d = Ef(e, u),
      f = Ef(e, c);
    let m = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: 'easeOut',
      ...i,
      delay: -s,
      onUpdate: (y) => {
        t.set(y), i.onUpdate && i.onUpdate(y);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (GL(i) || (m = { ...m, ...NL(e, m) }),
      m.duration && (m.duration = hr(m.duration)),
      m.repeatDelay && (m.repeatDelay = hr(m.repeatDelay)),
      !d || !f || Uz.current || i.type === !1)
    )
      return ML(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = LL(t, e, m);
      if (y) return y;
    }
    return Jl(m);
  };
function eu(e) {
  return !!(vt(e) && e.add);
}
const KL = (e) => /^\-?\d*\.?\d+$/.test(e);
function ym(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function bm(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Sm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ym(this.subscriptions, t), () => bm(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const YL = (e) => !isNaN(parseFloat(e));
class XL {
  constructor(t, n = {}) {
    (this.version = '10.12.11'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: a } = Ne;
        this.lastUpdated !== a &&
          ((this.timeDelta = i),
          (this.lastUpdated = a),
          ye.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ye.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = YL(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Sm());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            ye.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? jS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ii(e, t) {
  return new XL(e, t);
}
const WS = (e) => (t) => t.test(e),
  QL = { test: (e) => e === 'auto', parse: (e) => e },
  US = [ho, N, pn, Hn, nz, tz, QL],
  _i = (e) => US.find(WS(e)),
  qL = [...US, Je, vr],
  ZL = (e) => qL.find(WS(e));
function JL(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ii(n));
}
function eM(e, t) {
  const n = Gu(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = gz(i[a]);
    JL(e, a, s);
  }
}
function tM(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == 'string' && (KL(c) || OS(c))
            ? (c = parseFloat(c))
            : !ZL(c) && vr.test(u) && (c = FS(l, u)),
          e.addValue(l, ii(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function nM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function rM(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = nM(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function oM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function HS(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue('willChange');
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      m = s[d];
    if (!f || m === void 0 || (c && oM(c, d))) continue;
    const y = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const E = e.getProps()[Vz];
      E && (y.elapsed = window.HandoffAppearAnimations(E, d, f, ye));
    }
    f.start(vm(d, f, m, e.shouldReduceMotion && fo.has(d) ? { type: !1 } : y));
    const b = f.animation;
    eu(l) && (l.add(d), b.then(() => l.remove(d))), u.push(b);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && eM(e, a);
      }),
    u
  );
}
function _f(e, t, n = {}) {
  const r = Gu(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(HS(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return iM(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(n.delay)]);
}
function iM(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(aM)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(
            _f(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(a)
  );
}
function aM(e, t) {
  return e.sortNodePosition(t);
}
function sM(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => _f(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == 'string') r = _f(e, t, n);
  else {
    const o = typeof t == 'function' ? Gu(e, t, n.custom) : t;
    r = Promise.all(HS(e, o, n));
  }
  return r.then(() => e.notify('AnimationComplete', t));
}
const lM = [...tm].reverse(),
  uM = tm.length;
function cM(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => sM(e, n, r)));
}
function dM(e) {
  let t = cM(e);
  const n = hM();
  let r = !0;
  const o = (l, u) => {
    const c = Gu(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...m } = c;
      l = { ...l, ...m, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      m = new Set();
    let y = {},
      b = 1 / 0;
    for (let p = 0; p < uM; p++) {
      const h = lM[p],
        g = n[h],
        C = c[h] !== void 0 ? c[h] : d[h],
        _ = La(C),
        A = h === u ? g.isActive : null;
      A === !1 && (b = p);
      let T = C === d[h] && C !== c[h] && _;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (g.protectedKeys = { ...y }),
        (!g.isActive && A === null) ||
          (!C && !g.prevProp) ||
          Ou(C) ||
          typeof C == 'boolean')
      )
        continue;
      const $ = fM(g.prevProp, C);
      let j = $ || (h === u && g.isActive && !T && _) || (p > b && _);
      const B = Array.isArray(C) ? C : [C];
      let be = B.reduce(o, {});
      A === !1 && (be = {});
      const { prevResolvedValues: Ke = {} } = g,
        st = { ...Ke, ...be },
        Se = (xe) => {
          (j = !0), m.delete(xe), (g.needsAnimating[xe] = !0);
        };
      for (const xe in st) {
        const lt = be[xe],
          zt = Ke[xe];
        y.hasOwnProperty(xe) ||
          (lt !== zt
            ? Ql(lt) && Ql(zt)
              ? !hS(lt, zt) || $
                ? Se(xe)
                : (g.protectedKeys[xe] = !0)
              : lt !== void 0
              ? Se(xe)
              : m.add(xe)
            : lt !== void 0 && m.has(xe)
            ? Se(xe)
            : (g.protectedKeys[xe] = !0));
      }
      (g.prevProp = C),
        (g.prevResolvedValues = be),
        g.isActive && (y = { ...y, ...be }),
        r && e.blockInitialAnimation && (j = !1),
        j &&
          !T &&
          f.push(
            ...B.map((xe) => ({ animation: xe, options: { type: h, ...l } }))
          );
    }
    if (m.size) {
      const p = {};
      m.forEach((h) => {
        const g = e.getBaseTarget(h);
        g !== void 0 && (p[h] = g);
      }),
        f.push({ animation: p });
    }
    let E = !!f.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1),
      (r = !1),
      E ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const m in n) n[m].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function fM(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !hS(t, e) : !1;
}
function Tr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function hM() {
  return {
    animate: Tr(!0),
    whileInView: Tr(),
    whileHover: Tr(),
    whileTap: Tr(),
    whileDrag: Tr(),
    whileFocus: Tr(),
    exit: Tr(),
  };
}
class mM extends wr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ou(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let pM = 0;
class gM extends wr {
  constructor() {
    super(...arguments), (this.id = pM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive('exit', !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const vM = { animation: { Feature: mM }, exit: { Feature: gM } },
  Tg = (e, t) => Math.abs(e - t);
function yM(e, t) {
  const n = Tg(e.x, t.x),
    r = Tg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class GS {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = sd(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = yM(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: m } = Ne;
        this.history.push({ ...f, timestamp: m });
        const { onStart: y, onMove: b } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = ad(c, this.transformPagePoint)),
          ye.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          m = sd(
            u.type === 'pointercancel'
              ? this.lastMoveEventInfo
              : ad(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, m), f && f(u, m);
      }),
      !sS(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = Uu(t),
      i = ad(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = Ne;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = n;
    l && l(t, sd(i, this.history)),
      (this.removeListeners = fr(
        An(window, 'pointermove', this.handlePointerMove),
        An(window, 'pointerup', this.handlePointerUp),
        An(window, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), jn(this.updatePoint);
  }
}
function ad(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Rg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function sd({ point: e }, t) {
  return {
    point: e,
    delta: Rg(e, KS(t)),
    offset: Rg(e, bM(t)),
    velocity: SM(t, 0.1),
  };
}
function bM(e) {
  return e[0];
}
function KS(e) {
  return e[e.length - 1];
}
function SM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = KS(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > hr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = $n(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function _t(e) {
  return e.max - e.min;
}
function Tf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Ag(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ke(t.min, t.max, e.origin)),
    (e.scale = _t(n) / _t(t)),
    (Tf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ke(n.min, n.max, e.origin) - e.originPoint),
    (Tf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ta(e, t, n, r) {
  Ag(e.x, t.x, n.x, r ? r.originX : void 0),
    Ag(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $g(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + _t(t));
}
function xM(e, t, n) {
  $g(e.x, t.x, n.x), $g(e.y, t.y, n.y);
}
function zg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + _t(t));
}
function na(e, t, n) {
  zg(e.x, t.x, n.x), zg(e.y, t.y, n.y);
}
function wM(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ke(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ke(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Lg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function kM(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Lg(e.x, n, o), y: Lg(e.y, t, r) };
}
function Mg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function CM(e, t) {
  return { x: Mg(e.x, t.x), y: Mg(e.y, t.y) };
}
function EM(e, t) {
  let n = 0.5;
  const r = _t(e),
    o = _t(t);
  return (
    o > r
      ? (n = Ba(t.min, t.max - r, e.min))
      : r > o && (n = Ba(e.min, e.max - o, t.min)),
    ro(0, 1, n)
  );
}
function PM(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Rf = 0.35;
function _M(e = Rf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Rf),
    { x: Ig(e, 'left', 'right'), y: Ig(e, 'top', 'bottom') }
  );
}
function Ig(e, t, n) {
  return { min: Bg(e, t), max: Bg(e, n) };
}
function Bg(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const jg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ra = () => ({ x: jg(), y: jg() }),
  Dg = () => ({ min: 0, max: 0 }),
  Re = () => ({ x: Dg(), y: Dg() });
function on(e) {
  return [e('x'), e('y')];
}
function YS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function TM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function RM(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ld(e) {
  return e === void 0 || e === 1;
}
function Af({ scale: e, scaleX: t, scaleY: n }) {
  return !ld(e) || !ld(t) || !ld(n);
}
function jr(e) {
  return Af(e) || XS(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function XS(e) {
  return Ng(e.x) || Ng(e.y);
}
function Ng(e) {
  return e && e !== '0%';
}
function tu(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Fg(e, t, n, r, o) {
  return o !== void 0 && (e = tu(e, o, r)), tu(e, n, r) + t;
}
function $f(e, t = 0, n = 1, r, o) {
  (e.min = Fg(e.min, t, n, r, o)), (e.max = Fg(e.max, t, n, r, o));
}
function QS(e, { x: t, y: n }) {
  $f(e.x, t.translate, t.scale, t.originPoint),
    $f(e.y, n.translate, n.scale, n.originPoint);
}
function AM(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === 'contents') ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        jo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), QS(e, a)),
      r && jr(i.latestValues) && jo(e, i.latestValues));
  }
  (t.x = Og(t.x)), (t.y = Og(t.y));
}
function Og(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Xn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Vg(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = ke(e.min, e.max, i);
  $f(e, t[n], t[r], a, t.scale);
}
const $M = ['x', 'scaleX', 'originX'],
  zM = ['y', 'scaleY', 'originY'];
function jo(e, t) {
  Vg(e.x, t, $M), Vg(e.y, t, zM);
}
function qS(e, t) {
  return YS(RM(e.getBoundingClientRect(), t));
}
function LM(e, t, n) {
  const r = qS(e, n),
    { scroll: o } = t;
  return o && (Xn(r.x, o.offset.x), Xn(r.y, o.offset.y)), r;
}
const MM = new WeakMap();
class IM {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Re()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Uu(l, 'page').point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = uS(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          on((y) => {
            let b = this.getAxisMotionValue(y).get() || 0;
            if (pn.test(b)) {
              const { projection: E } = this.visualElement;
              if (E && E.layout) {
                const p = E.layout.layoutBox[y];
                p && (b = _t(p) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[y] = b;
          }),
          f && ye.update(() => f(l, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive('whileDrag', !0);
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = BM(y)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis('x', u.point, y),
          this.updateAxis('y', u.point, y),
          this.visualElement.render(),
          m && m(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new GS(
      t,
      { onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ye.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !js(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = wM(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && Io(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = kM(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = _M(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        on((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = PM(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Io(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = LM(r, o.root, this.visualElement.getTransformPagePoint());
    let a = CM(o.layout.layoutBox, i);
    if (n) {
      const s = n(TM(a));
      (this.hasMutatedConstraints = !!s), s && (a = YS(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = on((c) => {
        if (!js(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          y = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(vm(t, r, 0, n));
  }
  stopAnimation() {
    on((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = '_drag' + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    on((n) => {
      const { drag: r } = this.getProps();
      if (!js(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - ke(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Io(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    on((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = EM({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      on((a) => {
        if (!js(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(ke(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    MM.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = An(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Io(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = _n(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (on((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Rf,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function js(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function BM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class jM extends wr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new IM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Wg = (e) => (t, n) => {
  e && ye.update(() => e(t, n));
};
class DM extends wr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ie);
  }
  onPointerDown(t) {
    this.session = new GS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Wg(t),
      onStart: Wg(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && ye.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = An(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function NM() {
  const e = S.useContext(Ga);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = S.useId();
  return S.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function FM() {
  return OM(S.useContext(Ga));
}
function OM(e) {
  return e === null ? !0 : e.isPresent;
}
const dl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ug(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ti = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const n = Ug(e, t.target.x),
        r = Ug(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  VM = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = vr.parse(e);
      if (o.length > 5) return r;
      const i = vr.createTransformer(e),
        a = typeof o[0] != 'number' ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = ke(s, l, 0.5);
      return (
        typeof o[2 + a] == 'number' && (o[2 + a] /= u),
        typeof o[3 + a] == 'number' && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class WM extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    Y$(UM),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (dl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              ye.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ZS(e) {
  const [t, n] = NM(),
    r = S.useContext(rm);
  return w.createElement(WM, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Gb),
    isPresent: t,
    safeToRemove: n,
  });
}
const UM = {
    borderRadius: {
      ...Ti,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Ti,
    borderTopRightRadius: Ti,
    borderBottomLeftRadius: Ti,
    borderBottomRightRadius: Ti,
    boxShadow: VM,
  },
  JS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  HM = JS.length,
  Hg = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  Gg = (e) => typeof e == 'number' || N.test(e);
function GM(e, t, n, r, o, i) {
  o
    ? ((e.opacity = ke(0, n.opacity !== void 0 ? n.opacity : 1, KM(r))),
      (e.opacityExit = ke(t.opacity !== void 0 ? t.opacity : 1, 0, YM(r))))
    : i &&
      (e.opacity = ke(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < HM; a++) {
    const s = `border${JS[a]}Radius`;
    let l = Kg(t, s),
      u = Kg(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Gg(l) === Gg(u)
        ? ((e[s] = Math.max(ke(Hg(l), Hg(u), r), 0)),
          (pn.test(u) || pn.test(l)) && (e[s] += '%'))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ke(t.rotate || 0, n.rotate || 0, r));
}
function Kg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const KM = ex(0, 0.5, hm),
  YM = ex(0.5, 0.95, Ie);
function ex(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ba(e, t, r)));
}
function Yg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function It(e, t) {
  Yg(e.x, t.x), Yg(e.y, t.y);
}
function Xg(e, t, n, r, o) {
  return (
    (e -= t), (e = tu(e, 1 / n, r)), o !== void 0 && (e = tu(e, 1 / o, r)), e
  );
}
function XM(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (pn.test(t) &&
      ((t = parseFloat(t)), (t = ke(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return;
  let s = ke(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = Xg(e.min, t, n, s, o)),
    (e.max = Xg(e.max, t, n, s, o));
}
function Qg(e, t, [n, r, o], i, a) {
  XM(e, t[n], t[r], t[o], t.scale, i, a);
}
const QM = ['x', 'scaleX', 'originX'],
  qM = ['y', 'scaleY', 'originY'];
function qg(e, t, n, r) {
  Qg(e.x, t, QM, n ? n.x : void 0, r ? r.x : void 0),
    Qg(e.y, t, qM, n ? n.y : void 0, r ? r.y : void 0);
}
function Zg(e) {
  return e.translate === 0 && e.scale === 1;
}
function tx(e) {
  return Zg(e.x) && Zg(e.y);
}
function zf(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Jg(e) {
  return _t(e.x) / _t(e.y);
}
class ZM {
  constructor() {
    this.members = [];
  }
  add(t) {
    ym(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (bm(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ev(e, t, n) {
  let r = '';
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || 'none';
}
const JM = (e, t) => e.depth - t.depth;
class eI {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ym(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    bm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(JM),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function tI(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (jn(r), e(i - t));
    };
  return ye.read(r, !0), () => jn(r);
}
function nI(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function rI(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function oI(e, t, n) {
  const r = vt(e) ? e : ii(e);
  return r.start(vm('', r, t, n)), r.animation;
}
const tv = ['', 'X', 'Y', 'Z'],
  nv = 1e3;
let iI = 0;
const Dr = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function nx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = iI++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Dr.totalNodes =
            Dr.resolvedTargetDeltas =
            Dr.recalculatedProjection =
              0),
            this.nodes.forEach(lI),
            this.nodes.forEach(fI),
            this.nodes.forEach(hI),
            this.nodes.forEach(uI),
            nI(Dr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eI());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Sm()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = rI(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = tI(f, 250)),
            dl.hasAnimatedSinceResize &&
              ((dl.hasAnimatedSinceResize = !1), this.nodes.forEach(ov));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b =
                  this.options.transition || c.getDefaultTransition() || yI,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !zf(this.targetLayout, y) || m,
                g = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const C = { ...VS(b, 'layout'), onPlay: E, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || ov(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        jn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(mI),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rv);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.nodes.forEach(dI),
        this.nodes.forEach(aI),
        this.nodes.forEach(sI),
        this.clearAllSnapshots(),
        Xo.update.process(Ne),
        Xo.preRender.process(Ne),
        Xo.render.process(Ne));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cI), this.sharedNodes.forEach(pI);
    }
    scheduleUpdateProjection() {
      ye.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ye.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = 'measure') {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !tx(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || jr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        bI(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return Re();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Xn(s.x, l.offset.x), Xn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Re();
      It(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            It(s, a);
            const { scroll: f } = this.root;
            f && (Xn(s.x, -f.offset.x), Xn(s.y, -f.offset.y));
          }
          Xn(s.x, c.offset.x), Xn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Re();
      It(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          jo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          jr(c.latestValues) && jo(l, c.latestValues);
      }
      return jr(this.latestValues) && jo(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Re();
      It(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !jr(u.latestValues)) continue;
        Af(u.latestValues) && u.updateSnapshot();
        const c = Re(),
          d = u.measurePageBox();
        It(c, d),
          qg(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return jr(this.latestValues) && qg(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ne.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Re()),
              (this.relativeTargetOrigin = Re()),
              na(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              It(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Re()), (this.targetWithTransforms = Re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                xM(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : It(this.target, this.layout.layoutBox),
                QS(this.target, this.targetDelta))
              : It(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Re()),
                (this.relativeTargetOrigin = Re()),
                na(this.relativeTargetOrigin, this.target, m.target),
                It(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Dr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Af(this.parent.latestValues) ||
          XS(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ne.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      It(this.layoutCorrected, this.layout.layoutBox),
        AM(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: f } = s;
      if (!f) {
        this.projectionTransform &&
          ((this.projectionTransform = 'none'), this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ra()),
        (this.projectionDeltaWithTransform = ra()));
      const m = this.treeScale.x,
        y = this.treeScale.y,
        b = this.projectionTransform;
      ta(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = ev(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== b ||
          this.treeScale.x !== m ||
          this.treeScale.y !== y) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)),
        Dr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ra();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = Re(),
        m = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        b = m !== y,
        E = this.getStack(),
        p = !E || E.members.length <= 1,
        h = !!(b && !p && this.options.crossfade === !0 && !this.path.some(vI));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (C) => {
        const _ = C / 1e3;
        iv(d.x, a.x, _),
          iv(d.y, a.y, _),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (na(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            gI(this.relativeTarget, this.relativeTargetOrigin, f, _),
            g && zf(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Re()),
            It(g, this.relativeTarget)),
          b &&
            ((this.animationValues = c), GM(c, u, this.latestValues, _, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = _);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (jn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ye.update(() => {
          (dl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = oI(0, nv, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(nv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          rx(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Re();
          const d = _t(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = _t(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        It(s, l),
          jo(s, c),
          ta(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new ZM()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < tv.length; c++) {
        const d = 'rotate' + tv[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = '';
      else return { visibility: 'hidden' };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = cl(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const b = {};
        return (
          this.options.layoutId &&
            ((b.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (b.pointerEvents = cl(a.pointerEvents) || '')),
          this.hasProjected &&
            !jr(this.latestValues) &&
            ((b.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          b
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = ev(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: m, y } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const b in Yl) {
        if (f[b] === void 0) continue;
        const { correct: E, applyTo: p } = Yl[b],
          h = u.transform === 'none' ? f[b] : E(f[b], d);
        if (p) {
          const g = p.length;
          for (let C = 0; C < g; C++) u[p[C]] = h;
        } else u[b] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? cl(a.pointerEvents) || '' : 'none'),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(rv),
        this.root.sharedNodes.clear();
    }
  };
}
function aI(e) {
  e.updateLayout();
}
function sI(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === 'size'
      ? on((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            m = _t(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : rx(i, n.layoutBox, r) &&
        on((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            m = _t(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const s = ra();
    ta(s, r, n.layoutBox);
    const l = ra();
    a ? ta(l, e.applyTransform(o, !0), n.measuredBox) : ta(l, r, n.layoutBox);
    const u = !tx(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const y = Re();
          na(y, n.layoutBox, f.layoutBox);
          const b = Re();
          na(b, r, m.layoutBox),
            zf(y, b) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = b),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lI(e) {
  Dr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function uI(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cI(e) {
  e.clearSnapshot();
}
function rv(e) {
  e.clearMeasurements();
}
function dI(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function ov(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function fI(e) {
  e.resolveTargetDelta();
}
function hI(e) {
  e.calcProjection();
}
function mI(e) {
  e.resetRotation();
}
function pI(e) {
  e.removeLeadSnapshot();
}
function iv(e, t, n) {
  (e.translate = ke(t.translate, 0, n)),
    (e.scale = ke(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function av(e, t, n, r) {
  (e.min = ke(t.min, n.min, r)), (e.max = ke(t.max, n.max, r));
}
function gI(e, t, n, r) {
  av(e.x, t.x, n.x, r), av(e.y, t.y, n.y, r);
}
function vI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const yI = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function sv(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function bI(e) {
  sv(e.x), sv(e.y);
}
function rx(e, t, n) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Tf(Jg(t), Jg(n), 0.2))
  );
}
const SI = nx({
    attachResizeListener: (e, t) => _n(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ud = { current: void 0 },
  ox = nx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ud.current) {
        const e = new SI({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ud.current = e);
      }
      return ud.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  xI = {
    pan: { Feature: DM },
    drag: { Feature: jM, ProjectionNode: ox, MeasureLayout: ZS },
  },
  wI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function kI(e) {
  const t = wI.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Lf(e, t, n = 1) {
  const [r, o] = kI(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  return i ? i.trim() : Sf(o) ? Lf(o, t, n + 1) : o;
}
function CI(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!Sf(i)) return;
      const a = Lf(i, r);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!Sf(i)) continue;
    const a = Lf(i, r);
    a && ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const EI = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
  ]),
  ix = (e) => EI.has(e),
  PI = (e) => Object.keys(e).some(ix),
  lv = (e) => e === ho || e === N,
  uv = (e, t) => parseFloat(e.split(', ')[t]),
  cv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return uv(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? uv(i[1], e) : 0;
      }
    },
  _I = new Set(['x', 'y', 'z']),
  TI = Ka.filter((e) => !_I.has(e));
function RI(e) {
  const t = [];
  return (
    TI.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const dv = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: cv(4, 13),
    y: cv(5, 14),
  },
  AI = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      n.forEach((u) => {
        s[u] = dv[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = dv[u](l, i));
      }),
      e
    );
  },
  $I = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(ix);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = _i(c);
        const f = t[l];
        let m;
        if (Ql(f)) {
          const y = f.length,
            b = f[0] === null ? 1 : 0;
          (c = f[b]), (d = _i(c));
          for (let E = b; E < y && f[E] !== null; E++)
            m ? fm(_i(f[E]) === m) : (m = _i(f[E]));
        } else m = _i(f);
        if (d !== m)
          if (lv(d) && lv(m)) {
            const y = u.get();
            typeof y == 'string' && u.set(parseFloat(y)),
              typeof f == 'string'
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && m === N && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            m != null &&
            m.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = RI(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = AI(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Fu && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function zI(e, t, n, r) {
  return PI(t) ? $I(e, t, n, r) : { target: t, transitionEnd: r };
}
const LI = (e, t, n, r) => {
    const o = CI(e, t, r);
    return (t = o.target), (r = o.transitionEnd), zI(e, t, n, r);
  },
  Mf = { current: null },
  ax = { current: !1 };
function MI() {
  if (((ax.current = !0), !!Fu))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Mf.current = e.matches);
      e.addListener(t), t();
    } else Mf.current = !1;
}
function II(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      a = n[o];
    if (vt(i)) e.addValue(o, i), eu(r) && r.add(o);
    else if (vt(a)) e.addValue(o, ii(i, { owner: e })), eu(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ii(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const fv = new WeakMap(),
  sx = Object.keys(Ma),
  BI = sx.length,
  hv = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  jI = nm.length;
class DI {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ye.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = Vu(n)),
      (this.isVariantNode = Hb(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && vt(f) && (f.set(s[d], !1), eu(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      fv.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      ax.current || MI(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Mf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    fv.delete(this.current),
      this.projection && this.projection.unmount(),
      jn(this.notifyUpdate),
      jn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = fo.has(t),
      o = n.on('change', (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ye.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < BI; l++) {
      const u = sx[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: m,
        } = Ma[u];
      f && (a = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          m && (s = m));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Io(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == 'string' ? u : 'both',
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: m,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted
        ? n.update(this.props, this.prevProps)
        : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < hv.length; r++) {
      const o = hv[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t['on' + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = II(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < jI; r++) {
      const o = nm[r],
        i = this.props[o];
      (La(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ii(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == 'string' || typeof r == 'object'
          ? (n = dm(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !vt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Sm()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class lx extends DI {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let a = rM(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i)) {
      tM(this, r, a);
      const s = LI(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function NI(e) {
  return window.getComputedStyle(e);
}
class FI extends lx {
  readValueFromInstance(t, n) {
    if (fo.has(n)) {
      const r = gm(n);
      return (r && r.default) || 0;
    } else {
      const r = NI(t),
        o = (Xb(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return qS(t, n);
  }
  build(t, n, r, o) {
    im(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return cm(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    vt(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    tS(t, n, r, o);
  }
}
class OI extends lx {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (fo.has(n)) {
      const r = gm(n);
      return (r && r.default) || 0;
    }
    return (n = nS.has(n) ? n : um(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Re();
  }
  scrapeMotionValuesFromProps(t, n) {
    return oS(t, n);
  }
  build(t, n, r, o) {
    sm(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    rS(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = lm(t.tagName)), super.mount(t);
  }
}
const VI = (e, t) =>
    om(e)
      ? new OI(t, { enableHardwareAcceleration: !1 })
      : new FI(t, { enableHardwareAcceleration: !0 }),
  WI = { layout: { ProjectionNode: ox, MeasureLayout: ZS } },
  UI = { ...vM, ...Dz, ...xI, ...WI },
  HI = G$((e, t) => xz(e, t, UI, VI));
function ux() {
  const e = S.useRef(!1);
  return (
    Kl(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function GI() {
  const e = ux(),
    [t, n] = S.useState(0),
    r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [S.useCallback(() => ye.postRender(r), [r]), t];
}
class KI extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function YI({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    o = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    S.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current;
      if (t || !r.current || !i || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement('style');
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    S.createElement(
      KI,
      { isPresent: t, childRef: r, sizeRef: o },
      S.cloneElement(e, { ref: r })
    )
  );
}
const cd = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = iS(XI),
    l = S.useId(),
    u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [n]
    );
  return (
    S.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === 'popLayout' && (e = S.createElement(YI, { isPresent: n }, e)),
    S.createElement(Ga.Provider, { value: u }, e)
  );
};
function XI() {
  return new Map();
}
function QI(e) {
  return S.useEffect(() => () => e(), []);
}
const So = (e) => e.key || '';
function qI(e, t) {
  e.forEach((n) => {
    const r = So(n);
    t.set(r, n);
  });
}
function ZI(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const JI = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = 'sync',
}) => {
  const s = S.useContext(rm).forceRender || GI()[0],
    l = ux(),
    u = ZI(e);
  let c = u;
  const d = S.useRef(new Map()).current,
    f = S.useRef(c),
    m = S.useRef(new Map()).current,
    y = S.useRef(!0);
  if (
    (Kl(() => {
      (y.current = !1), qI(u, m), (f.current = c);
    }),
    QI(() => {
      (y.current = !0), m.clear(), d.clear();
    }),
    y.current)
  )
    return S.createElement(
      S.Fragment,
      null,
      c.map((h) =>
        S.createElement(
          cd,
          {
            key: So(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          h
        )
      )
    );
  c = [...c];
  const b = f.current.map(So),
    E = u.map(So),
    p = b.length;
  for (let h = 0; h < p; h++) {
    const g = b[h];
    E.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return (
    a === 'wait' && d.size && (c = []),
    d.forEach((h, g) => {
      if (E.indexOf(g) !== -1) return;
      const C = m.get(g);
      if (!C) return;
      const _ = b.indexOf(g);
      let A = h;
      if (!A) {
        const T = () => {
          m.delete(g), d.delete(g);
          const $ = f.current.findIndex((j) => j.key === g);
          if ((f.current.splice($, 1), !d.size)) {
            if (((f.current = u), l.current === !1)) return;
            s(), r && r();
          }
        };
        (A = S.createElement(
          cd,
          {
            key: So(C),
            isPresent: !1,
            onExitComplete: T,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          C
        )),
          d.set(g, A);
      }
      c.splice(_, 0, A);
    }),
    (c = c.map((h) => {
      const g = h.key;
      return d.has(g)
        ? h
        : S.createElement(
            cd,
            { key: So(h), isPresent: !0, presenceAffectsLayout: i, mode: a },
            h
          );
    })),
    S.createElement(
      S.Fragment,
      null,
      d.size ? c : c.map((h) => S.cloneElement(h))
    )
  );
};
var e6 = {
    initial: (e) => {
      const { position: t } = e,
        n = ['top', 'bottom'].includes(t) ? 'y' : 'x';
      let r = ['top-right', 'bottom-right'].includes(t) ? 1 : -1;
      return t === 'bottom' && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  cx = S.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = 'bottom',
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = e6,
        toastSpacing: c = '0.5rem',
      } = e,
      [d, f] = S.useState(s),
      m = FM();
    cg(() => {
      m || r == null || r();
    }, [m]),
      cg(() => {
        f(s);
      }, [s]);
    const y = () => f(null),
      b = () => f(s),
      E = () => {
        m && o();
      };
    S.useEffect(() => {
      m && i && o();
    }, [m, i, o]),
      j$(E, d);
    const p = S.useMemo(
        () => ({
          pointerEvents: 'auto',
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = S.useMemo(() => M$(a), [a]);
    return R.jsx(HI.div, {
      layout: !0,
      className: 'chakra-toast',
      variants: u,
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      onHoverStart: y,
      onHoverEnd: b,
      custom: { position: a },
      style: h,
      children: R.jsx(ne.div, {
        role: 'status',
        'aria-atomic': 'true',
        className: 'chakra-toast__inner',
        __css: p,
        children: nr(n, { id: t, onClose: E }),
      }),
    });
  });
cx.displayName = 'ToastComponent';
var mv = {
    path: R.jsxs('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        R.jsx('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        R.jsx('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        R.jsx('circle', {
          fill: 'none',
          strokeMiterlimit: '10',
          cx: '12',
          cy: '12',
          r: '11.25',
        }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  kr = he((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = 'currentColor',
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = $t('chakra-icon', s),
      d = co('Icon', e),
      f = {
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      m = { ref: t, focusable: i, className: c, __css: f },
      y = r ?? mv.viewBox;
    if (n && typeof n != 'string') return R.jsx(ne.svg, { as: n, ...m, ...u });
    const b = a ?? mv.path;
    return R.jsx(ne.svg, {
      verticalAlign: 'middle',
      viewBox: y,
      ...m,
      ...u,
      children: b,
    });
  });
kr.displayName = 'Icon';
function dx(e) {
  const {
      viewBox: t = '0 0 24 24',
      d: n,
      displayName: r,
      defaultProps: o = {},
    } = e,
    i = S.Children.toArray(e.path),
    a = he((s, l) =>
      R.jsx(kr, {
        ref: l,
        viewBox: t,
        ...o,
        ...s,
        children: i.length ? i : R.jsx('path', { fill: 'currentColor', d: n }),
      })
    );
  return (a.displayName = r), a;
}
function t6(e) {
  return R.jsx(kr, {
    viewBox: '0 0 24 24',
    ...e,
    children: R.jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  });
}
function n6(e) {
  return R.jsx(kr, {
    viewBox: '0 0 24 24',
    ...e,
    children: R.jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  });
}
function pv(e) {
  return R.jsx(kr, {
    viewBox: '0 0 24 24',
    ...e,
    children: R.jsx('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  });
}
var r6 = qE({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }),
  xm = he((e, t) => {
    const n = co('Spinner', e),
      {
        label: r = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: a = 'transparent',
        className: s,
        ...l
      } = xr(e),
      u = $t('chakra-spinner', s),
      c = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${r6} ${i} linear infinite`,
        ...n,
      };
    return R.jsx(ne.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && R.jsx(ne.span, { srOnly: !0, children: r }),
    });
  });
xm.displayName = 'Spinner';
var [o6, wm] = uo({
    name: 'AlertContext',
    hookName: 'useAlertContext',
    providerName: '<Alert />',
  }),
  [i6, km] = uo({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  fx = {
    info: { icon: n6, colorScheme: 'blue' },
    warning: { icon: pv, colorScheme: 'orange' },
    success: { icon: t6, colorScheme: 'green' },
    error: { icon: pv, colorScheme: 'red' },
    loading: { icon: xm, colorScheme: 'blue' },
  };
function a6(e) {
  return fx[e].colorScheme;
}
function s6(e) {
  return fx[e].icon;
}
var hx = he(function (t, n) {
  const r = km(),
    { status: o } = wm(),
    i = { display: 'inline', ...r.description };
  return R.jsx(ne.div, {
    ref: n,
    'data-status': o,
    ...t,
    className: $t('chakra-alert__desc', t.className),
    __css: i,
  });
});
hx.displayName = 'AlertDescription';
function mx(e) {
  const { status: t } = wm(),
    n = s6(t),
    r = km(),
    o = t === 'loading' ? r.spinner : r.icon;
  return R.jsx(ne.span, {
    display: 'inherit',
    'data-status': t,
    ...e,
    className: $t('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || R.jsx(n, { h: '100%', w: '100%' }),
  });
}
mx.displayName = 'AlertIcon';
var px = he(function (t, n) {
  const r = km(),
    { status: o } = wm();
  return R.jsx(ne.div, {
    ref: n,
    'data-status': o,
    ...t,
    className: $t('chakra-alert__title', t.className),
    __css: r.title,
  });
});
px.displayName = 'AlertTitle';
var gx = he(function (t, n) {
  var r;
  const { status: o = 'info', addRole: i = !0, ...a } = xr(t),
    s = (r = t.colorScheme) != null ? r : a6(o),
    l = Db('Alert', { ...t, colorScheme: s }),
    u = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...l.container,
    };
  return R.jsx(o6, {
    value: { status: o },
    children: R.jsx(i6, {
      value: l,
      children: R.jsx(ne.div, {
        'data-status': o,
        role: i ? 'alert' : void 0,
        ref: n,
        ...a,
        className: $t('chakra-alert', t.className),
        __css: u,
      }),
    }),
  });
});
gx.displayName = 'Alert';
function l6(e) {
  return R.jsx(kr, {
    focusable: 'false',
    'aria-hidden': !0,
    ...e,
    children: R.jsx('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  });
}
var vx = he(function (t, n) {
  const r = co('CloseButton', t),
    { children: o, isDisabled: i, __css: a, ...s } = xr(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    };
  return R.jsx(ne.button, {
    type: 'button',
    'aria-label': 'Close',
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...a },
    ...s,
    children: o || R.jsx(l6, { width: '1em', height: '1em' }),
  });
});
vx.displayName = 'CloseButton';
var u6 = {
    top: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    bottom: [],
    'bottom-right': [],
  },
  oa = c6(u6);
function c6(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
    },
    notify: (o, i) => {
      const a = d6(o, i),
        { position: s, id: l } = a;
      return (
        r((u) => {
          var c, d;
          const m = s.includes('top')
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: m };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((a) => {
          const s = { ...a },
            { position: l, index: u } = ug(s, o);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: h6(i) }), s
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (
          o ?? [
            'bottom',
            'bottom-right',
            'bottom-left',
            'top',
            'top-left',
            'top-right',
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const a = Vb(i, o);
        return a
          ? {
              ...i,
              [a]: i[a].map((s) =>
                s.id == o ? { ...s, requestClose: !0 } : s
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!ug(oa.getState(), o).position,
  };
}
var gv = 0;
function d6(e, t = {}) {
  var n, r;
  gv += 1;
  const o = (n = t.id) != null ? n : gv,
    i = (r = t.position) != null ? r : 'bottom';
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => oa.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var f6 = (e) => {
  const {
      status: t,
      variant: n = 'solid',
      id: r,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return R.jsxs(gx, {
    addRole: !1,
    status: t,
    variant: n,
    id: c == null ? void 0 : c.root,
    alignItems: 'start',
    borderRadius: 'md',
    boxShadow: 'lg',
    paddingEnd: 8,
    textAlign: 'start',
    width: 'auto',
    colorScheme: l,
    children: [
      R.jsx(mx, { children: u }),
      R.jsxs(ne.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && R.jsx(px, { id: c == null ? void 0 : c.title, children: o }),
          s &&
            R.jsx(hx, {
              id: c == null ? void 0 : c.description,
              display: 'block',
              children: s,
            }),
        ],
      }),
      i &&
        R.jsx(vx, {
          size: 'sm',
          onClick: a,
          position: 'absolute',
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function h6(e = {}) {
  const { render: t, toastComponent: n = f6 } = e;
  return (o) =>
    typeof t == 'function' ? t({ ...o, ...e }) : R.jsx(n, { ...o, ...e });
}
var [m6, hB] = uo({ name: 'ToastOptionsContext', strict: !1 }),
  p6 = (e) => {
    const t = S.useSyncExternalStore(oa.subscribe, oa.getState, oa.getState),
      { motionVariants: n, component: r = cx, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return R.jsx(
          'div',
          {
            role: 'region',
            'aria-live': 'polite',
            id: `chakra-toast-manager-${s}`,
            style: I$(s),
            children: R.jsx(JI, {
              initial: !1,
              children: l.map((u) =>
                R.jsx(r, { motionVariants: n, ...u }, u.id)
              ),
            }),
          },
          s
        );
      });
    return R.jsx(Mu, { ...o, children: a });
  },
  g6 = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return R.jsxs(z$, {
        theme: r,
        ...i,
        children: [
          R.jsx(m6, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n,
          }),
          R.jsx(p6, { ...o }),
        ],
      });
    },
  v6 = g6(e$);
function y6(e, t) {
  if (e != null) {
    if (typeof e == 'function') {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function b6(...e) {
  return (t) => {
    e.forEach((n) => {
      y6(n, t);
    });
  };
}
function S6(...e) {
  return S.useMemo(() => b6(...e), e);
}
var If = he(function (t, n) {
  const { htmlWidth: r, htmlHeight: o, alt: i, ...a } = t;
  return R.jsx('img', { width: r, height: o, ref: n, alt: i, ...a });
});
If.displayName = 'NativeImage';
function x6(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = S.useState('pending');
  S.useEffect(() => {
    c(n ? 'loading' : 'pending');
  }, [n]);
  const d = S.useRef(),
    f = S.useCallback(() => {
      if (!n) return;
      m();
      const y = new Image();
      (y.src = n),
        a && (y.crossOrigin = a),
        r && (y.srcset = r),
        s && (y.sizes = s),
        t && (y.loading = t),
        (y.onload = (b) => {
          m(), c('loaded'), o == null || o(b);
        }),
        (y.onerror = (b) => {
          m(), c('failed'), i == null || i(b);
        }),
        (d.current = y);
    }, [n, a, r, s, o, i, t]),
    m = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    Ra(() => {
      if (!l)
        return (
          u === 'loading' && f(),
          () => {
            m();
          }
        );
    }, [u, f, l]),
    l ? 'loaded' : u
  );
}
var w6 = (e, t) =>
  (e !== 'loaded' && t === 'beforeLoadOrError') ||
  (e === 'failed' && t === 'onError');
function k6(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var ai = he(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = 'beforeLoadOrError',
      referrerPolicy: m,
      ...y
    } = t,
    b = r !== void 0 || o !== void 0,
    E = u != null || c || !b,
    p = x6({ ...t, crossOrigin: d, ignoreFallback: E }),
    h = w6(p, f),
    g = {
      ref: n,
      objectFit: l,
      objectPosition: s,
      ...(E ? y : k6(y, ['onError', 'onLoad'])),
    };
  return h
    ? o ||
        R.jsx(ne.img, {
          as: If,
          className: 'chakra-image__placeholder',
          src: r,
          ...g,
        })
    : R.jsx(ne.img, {
        as: If,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: m,
        className: 'chakra-image',
        ...g,
      });
});
ai.displayName = 'Image';
var [mB, C6] = uo({ strict: !1, name: 'ButtonGroupContext' });
function E6(e) {
  const [t, n] = S.useState(!e);
  return {
    ref: S.useCallback((i) => {
      i && n(i.tagName === 'BUTTON');
    }, []),
    type: t ? 'button' : void 0,
  };
}
function Bf(e) {
  const { children: t, className: n, ...r } = e,
    o = S.isValidElement(t)
      ? S.cloneElement(t, { 'aria-hidden': !0, focusable: !1 })
      : t,
    i = $t('chakra-button__icon', n);
  return R.jsx(ne.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
Bf.displayName = 'ButtonIcon';
function jf(e) {
  const {
      label: t,
      placement: n,
      spacing: r = '0.5rem',
      children: o = R.jsx(xm, {
        color: 'currentColor',
        width: '1em',
        height: '1em',
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = $t('chakra-button__spinner', i),
    u = n === 'start' ? 'marginEnd' : 'marginStart',
    c = S.useMemo(
      () => ({
        display: 'flex',
        alignItems: 'center',
        position: t ? 'relative' : 'absolute',
        [u]: t ? r : 0,
        fontSize: '1em',
        lineHeight: 'normal',
        ...a,
      }),
      [a, t, u, r]
    );
  return R.jsx(ne.div, { className: l, ...s, __css: c, children: o });
}
jf.displayName = 'ButtonSpinner';
var tt = he((e, t) => {
  const n = C6(),
    r = co('Button', { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = '0.5rem',
      type: f,
      spinner: m,
      spinnerPlacement: y = 'start',
      className: b,
      as: E,
      ...p
    } = xr(e),
    h = S.useMemo(() => {
      const A = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...r,
        ...(!!n && { _focus: A }),
      };
    }, [r, n]),
    { ref: g, type: C } = E6(E),
    _ = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return R.jsxs(ne.button, {
    ref: S6(t, g),
    as: E,
    type: f ?? C,
    'data-active': g0(a),
    'data-loading': g0(i),
    __css: h,
    className: $t('chakra-button', b),
    ...p,
    disabled: o || i,
    children: [
      i &&
        y === 'start' &&
        R.jsx(jf, {
          className: 'chakra-button__spinner--start',
          label: c,
          placement: 'start',
          spacing: d,
          children: m,
        }),
      i
        ? c || R.jsx(ne.span, { opacity: 0, children: R.jsx(vv, { ..._ }) })
        : R.jsx(vv, { ..._ }),
      i &&
        y === 'end' &&
        R.jsx(jf, {
          className: 'chakra-button__spinner--end',
          label: c,
          placement: 'end',
          spacing: d,
          children: m,
        }),
    ],
  });
});
tt.displayName = 'Button';
function vv(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return R.jsxs(R.Fragment, {
    children: [
      t && R.jsx(Bf, { marginEnd: o, children: t }),
      r,
      n && R.jsx(Bf, { marginStart: o, children: n }),
    ],
  });
}
var P6 = n$ ? S.useLayoutEffect : S.useEffect;
function yv(e, t = []) {
  const n = S.useRef(e);
  return (
    P6(() => {
      n.current = e;
    }),
    S.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function _6(e, t) {
  const n = S.useId();
  return S.useMemo(() => e || [t, n].filter(Boolean).join('-'), [e, t, n]);
}
function T6(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < 'u' ? e : t];
}
function R6(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = yv(n),
    a = yv(t),
    [s, l] = S.useState(e.defaultIsOpen || !1),
    [u, c] = T6(r, s),
    d = _6(o, 'disclosure'),
    f = S.useCallback(() => {
      u || l(!1), a == null || a();
    }, [u, a]),
    m = S.useCallback(() => {
      u || l(!0), i == null || i();
    }, [u, i]),
    y = S.useCallback(() => {
      (c ? f : m)();
    }, [c, m, f]);
  return {
    isOpen: !!c,
    onOpen: m,
    onClose: f,
    onToggle: y,
    isControlled: u,
    getButtonProps: (b = {}) => ({
      ...b,
      'aria-expanded': c,
      'aria-controls': d,
      onClick: s$(b.onClick, y),
    }),
    getDisclosureProps: (b = {}) => ({ ...b, hidden: !c, id: d }),
  };
}
var Ku = he(function (t, n) {
  const {
      templateAreas: r,
      gap: o,
      rowGap: i,
      columnGap: a,
      column: s,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: m,
      ...y
    } = t,
    b = {
      display: 'grid',
      gridTemplateAreas: r,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: a,
      gridAutoColumns: f,
      gridColumn: s,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: m,
    };
  return R.jsx(ne.div, { ref: n, __css: b, ...y });
});
Ku.displayName = 'Grid';
function A6(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : qt(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
var ge = he(function (t, n) {
  const r = co('Text', t),
    { className: o, align: i, decoration: a, casing: s, ...l } = xr(t),
    u = Nb({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return R.jsx(ne.p, {
    ref: n,
    className: $t('chakra-text', t.className),
    ...u,
    ...l,
    __css: r,
  });
});
ge.displayName = 'Text';
function bv(e) {
  return A6(e, (t) => (t === 'auto' ? 'auto' : `span ${t}/span ${t}`));
}
var xt = he(function (t, n) {
  const {
      area: r,
      colSpan: o,
      colStart: i,
      colEnd: a,
      rowEnd: s,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = Nb({
      gridArea: r,
      gridColumn: bv(o),
      gridRow: bv(l),
      gridColumnStart: i,
      gridColumnEnd: a,
      gridRowStart: u,
      gridRowEnd: s,
    });
  return R.jsx(ne.div, { ref: n, __css: d, ...c });
});
xt.displayName = 'GridItem';
var F = ne('div');
F.displayName = 'Box';
var yx = he(function (t, n) {
  const { size: r, centerContent: o = !0, ...i } = t,
    a = o
      ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
      : {};
  return R.jsx(F, {
    ref: n,
    boxSize: r,
    __css: { ...a, flexShrink: 0, flexGrow: 0 },
    ...i,
  });
});
yx.displayName = 'Square';
var $6 = he(function (t, n) {
  const { size: r, ...o } = t;
  return R.jsx(yx, { size: r, ref: n, borderRadius: '9999px', ...o });
});
$6.displayName = 'Circle';
var z6 = (e) => e.replace(/[|\\{}()[\]^$+*?.-]/g, (t) => `\\${t}`);
function L6(e) {
  const t = e.filter((n) => n.length !== 0).map((n) => z6(n.trim()));
  return t.length ? new RegExp(`(${t.join('|')})`, 'ig') : null;
}
function M6({ text: e, query: t }) {
  const n = L6(Array.isArray(t) ? t : [t]);
  return n
    ? e
        .split(n)
        .filter(Boolean)
        .map((o) => ({ text: o, match: n.test(o) }))
    : [{ text: e, match: !1 }];
}
function I6(e) {
  const { text: t, query: n } = e;
  return S.useMemo(() => M6({ text: t, query: n }), [t, n]);
}
var B6 = he(function (t, n) {
  const r = co('Mark', t),
    o = xr(t);
  return R.jsx(F, {
    ref: n,
    ...o,
    as: 'mark',
    __css: { bg: 'transparent', whiteSpace: 'nowrap', ...r },
  });
});
function j6(e) {
  const { children: t, query: n, styles: r } = e;
  if (typeof t != 'string')
    throw new Error('The children prop of Highlight must be a string');
  const o = I6({ query: n, text: t });
  return R.jsx(R.Fragment, {
    children: o.map((i, a) =>
      i.match
        ? R.jsx(B6, { sx: r, children: i.text }, a)
        : R.jsx(S.Fragment, { children: i.text }, a)
    ),
  });
}
var Gr = he(function (t, n) {
  const r = co('Link', t),
    { className: o, isExternal: i, ...a } = xr(t);
  return R.jsx(ne.a, {
    target: i ? '_blank' : void 0,
    rel: i ? 'noopener' : void 0,
    ref: n,
    className: $t('chakra-link', o),
    ...a,
    __css: r,
  });
});
Gr.displayName = 'Link';
var ia = he(function (t, n) {
  const {
      direction: r,
      align: o,
      justify: i,
      wrap: a,
      basis: s,
      grow: l,
      shrink: u,
      ...c
    } = t,
    d = {
      display: 'flex',
      flexDirection: r,
      alignItems: o,
      justifyContent: i,
      flexWrap: a,
      flexBasis: s,
      flexGrow: l,
      flexShrink: u,
    };
  return R.jsx(ne.div, { ref: n, __css: d, ...c });
});
ia.displayName = 'Flex';
var [D6, qa] = uo({
    name: 'TableStylesContext',
    errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `,
  }),
  Gn = he((e, t) => {
    const n = Db('Table', e),
      { className: r, layout: o, ...i } = xr(e);
    return R.jsx(D6, {
      value: n,
      children: R.jsx(ne.table, {
        ref: t,
        __css: { tableLayout: o, ...n.table },
        className: $t('chakra-table', r),
        ...i,
      }),
    });
  });
Gn.displayName = 'Table';
var Rr = he((e, t) => {
    const n = qa();
    return R.jsx(ne.thead, { ...e, ref: t, __css: n.thead });
  }),
  ut = he((e, t) => {
    const n = qa();
    return R.jsx(ne.tr, { ...e, ref: t, __css: n.tr });
  }),
  Ar = he((e, t) => {
    var n;
    const { overflow: r, overflowX: o, className: i, ...a } = e;
    return R.jsx(ne.div, {
      ref: t,
      className: $t('chakra-table__container', i),
      ...a,
      __css: {
        display: 'block',
        whiteSpace: 'nowrap',
        WebkitOverflowScrolling: 'touch',
        overflowX: (n = r ?? o) != null ? n : 'auto',
        overflowY: 'hidden',
        maxWidth: '100%',
      },
    });
  }),
  $r = he((e, t) => {
    const n = qa();
    return R.jsx(ne.tbody, { ...e, ref: t, __css: n.tbody });
  }),
  re = he(({ isNumeric: e, ...t }, n) => {
    const r = qa();
    return R.jsx(ne.td, { ...t, ref: n, __css: r.td, 'data-is-numeric': e });
  }),
  zr = he(({ isNumeric: e, ...t }, n) => {
    const r = qa();
    return R.jsx(ne.th, { ...t, ref: n, __css: r.th, 'data-is-numeric': e });
  });
function bx() {
  return w.createElement(
    'div',
    null,
    w.createElement(
      F,
      {
        p: '4',
        mt: { sm: '3rem', md: '8rem' },
        mb: { sm: '3rem', md: '8rem' },
        maxW: '1200px',
        mx: 'auto',
      },
      w.createElement(
        ge,
        { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' }, mb: '4' },
        'ERIK T'
      ),
      w.createElement(
        ge,
        {
          as: 'h3',
          fontSize: { sm: '1.5xl', md: '1.8xl', lg: '2xl' },
          mb: '4',
        },
        'Science & Mathematics Specialist'
      ),
      w.createElement(
        'p',
        null,
        'Our chief science expert Erik T. (MPhil (Chemistry), HKU BSc, HKU) has long experience in coaching AP/SAT/ GCE-AL/ IB/ IGCSE courses and Summer school science workshop. In addition to teaching experience, he got three A*s in Edexcel IGCSE Science and Math, and brilliant results in A-Level Math and Science. He graduated from the University of Hong Kong with MPhil (major in Chemistry). In his teaching, Erik incorporates both theory and research experience.'
      )
    )
  );
}
function Sx() {
  return w.createElement(
    F,
    {
      p: '4',
      mt: { sm: '3rem', md: '8rem' },
      mb: { sm: '3rem', md: '8rem' },
      maxW: '1200px',
      mx: 'auto',
    },
    w.createElement(
      ge,
      { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' }, mb: '4' },
      'TEACHING SUBJECTS'
    ),
    w.createElement(
      ge,
      { as: 'h3', fontSize: { sm: '1.5xl', md: '1.8xl', lg: '2xl' }, mb: '4' },
      'AP, SAT , GCE-AL, (I)GCSE, GCSE'
    ),
    w.createElement(
      Ku,
      {
        templateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: '4',
        mt: '4',
      },
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Chemistry'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Biology'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Physics'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Mathematics'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Statistics'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Calculus AB'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Calculus BC'
      ),
      w.createElement(
        F,
        {
          bg: 'gray.100',
          height: '40px',
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          fontWeight: 'bold',
        },
        'Physics'
      )
    )
  );
}
function N6() {
  return w.createElement(
    'div',
    { className: 'table' },
    w.createElement(
      F,
      {
        p: '4',
        mt: { sm: '3rem', md: '0rem' },
        mb: { sm: '3rem', md: '0rem' },
        pt: { sm: '3rem', md: '5rem' },
        pb: { sm: '3rem', md: '5rem' },
        maxW: '1200px',
        mx: 'auto',
      },
      w.createElement(
        ge,
        { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' }, mb: '4' },
        'OUR STUDENTS COME FROM'
      ),
      w.createElement(
        Ku,
        {
          templateColumns: {
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: '4',
          mt: '4',
        },
        w.createElement(
          F,
          { width: '100%', padding: '0.5rem' },
          w.createElement(
            'ul',
            null,
            w.createElement(
              ge,
              { as: 'h5', fontWeight: '700' },
              'International School:'
            ),
            w.createElement('li', null, 'International Christian School'),
            w.createElement('li', null, 'Hong Kong International School'),
            w.createElement('li', null, 'Island School'),
            w.createElement('li', null, 'South Island School'),
            w.createElement('li', null, 'Shatin College'),
            w.createElement('li', null, 'Renaissance College'),
            w.createElement('li', null, 'German Swiss International School'),
            w.createElement(
              'li',
              null,
              'Kiangsu & Chekiang International School'
            )
          )
        ),
        w.createElement(
          F,
          { width: '100%', padding: '0.5rem' },
          w.createElement(
            'ul',
            null,
            w.createElement(
              ge,
              { as: 'h5', fontWeight: '700' },
              'Boarding School:'
            ),
            w.createElement('li', null, 'Tonbridge School'),
            w.createElement('li', null, 'Brighton College'),
            w.createElement('li', null, 'Badminton School'),
            w.createElement('li', null, 'Sherborne School'),
            w.createElement('li', null, 'Cheltenham Ladies College'),
            w.createElement('li', null, 'Headington'),
            w.createElement('li', null, 'Bede’s School'),
            w.createElement('li', null, 'Kent College'),
            w.createElement('li', null, 'Abingdon School')
          )
        ),
        w.createElement(
          F,
          { width: '100%', padding: '0.5rem' },
          w.createElement(
            'ul',
            null,
            w.createElement(
              ge,
              { as: 'h5', fontWeight: '700' },
              'Local School:'
            ),
            w.createElement('li', null, 'Lasalle College'),
            w.createElement('li', null, 'Mary Mount'),
            w.createElement('li', null, 'St. Paul Co-education'),
            w.createElement('li', null, 'St. Paul Convent')
          )
        )
      )
    )
  );
}
function F6() {
  return w.createElement(
    'div',
    { className: 'online-tutoring' },
    w.createElement(
      F,
      {
        p: '3',
        pt: { sm: '3rem', md: '8rem' },
        pb: { sm: '3rem', md: '8rem' },
        flexDirection: { base: 'column', md: 'row' },
        maxW: '1200px',
        mx: 'auto',
      },
      w.createElement(
        ge,
        { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' }, mb: '4' },
        'HOME & ONLINE TUTORING'
      ),
      w.createElement(
        'p',
        null,
        'We provide home & online tutoring services to students in outer areas. Our students from different location: Shatin, Fo Tan, Ma On Shan, Tai Po, Tai Wai, Kowloon Tong, Ho Man Tin, UK boarding school'
      ),
      w.createElement(
        'p',
        null,
        '無論你居住香港或甚至外國， 我們的導師可以上門或者透過視像和學生補習。我們的學生來自以下地區： 沙田、火炭、馬鞍山、大埔、大圍、九龍塘、何文田、海外升學'
      )
    )
  );
}
function O6() {
  return w.createElement(
    'div',
    { className: 'group-lesson' },
    w.createElement(
      F,
      {
        p: '4',
        pt: { sm: '3rem', md: '8rem' },
        pb: { sm: '3rem', md: '8rem' },
        flexDirection: { base: 'column', md: 'row' },
        alignItems: 'center',
        maxW: '1200px',
        mx: 'auto',
      },
      w.createElement(
        ge,
        { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' }, mb: '4' },
        '1:1 / GROUP LESSONS*'
      ),
      w.createElement(
        ge,
        {
          as: 'h3',
          fontSize: { sm: '1.5xl', md: '1.8xl', lg: '2xl' },
          mb: '4',
        },
        'Group lesson * (Max. 4 students) Group your peers and form a study group!'
      ),
      w.createElement(
        'p',
        null,
        'We provide quality tutoring service in private and small group formats. Tailored made approach are formed to our students come from leading international and independent schools in Hong Kong and abroad. You are welcome to contact with us for more course information.'
      ),
      w.createElement(
        'p',
        null,
        '我們提倡上門私人及小班教學。學生均來自香港頂尖國際學校及中小學。自成立以來， 我們的學生成績普遍顯著改善。 歡迎聯絡我們獲取更多課程資訊!'
      )
    )
  );
}
function V6() {
  return w.createElement(
    'div',
    { className: 'introduction' },
    w.createElement(
      F,
      {
        mt: { sm: '3rem', md: '8rem' },
        mb: { sm: '3rem', md: '8rem' },
        display: 'flex',
        flexDirection: { base: 'column', md: 'row' },
        alignItems: 'center',
        maxW: '1200px',
        mx: 'auto',
        p: '4',
      },
      w.createElement(
        F,
        { flex: '1', mr: { base: '0', md: '4' } },
        w.createElement(
          xt,
          { pl: '2', area: 'text' },
          w.createElement(
            ge,
            {
              as: 'h1',
              fontWeight: 'bold',
              mb: '4',
              fontSize: { sm: '1.8rem', md: '1.8rem', lg: '1.8rem' },
            },
            'Leading Expert in AP/IB Science & Mathematics'
          ),
          w.createElement(
            ge,
            { as: 'h3', fontSize: { sm: '1rem', md: '1.5rem', lg: '1.5rem' } },
            'AP, SAT , GCE AL, (I)GCSE, GCSE'
          ),
          w.createElement(
            'p',
            null,
            'Different kind of subjects of AP / SAT/ GCEAL/ IB / IGCSE / GCSE and other courses are now open for enrollment. Tailor made lecturing approach are formed to our students come from leading international and independent schools in Hong Kong and abroad in private and small group formats. 我們為國際、直資學校學生 (AP / SAT/ GCEAL/ IB / IGCSE / GCSE 課程等) 提供高質素補習課程，致力 專科上門及小班教學。'
          ),
          w.createElement(
            Gr,
            {
              className: 'btn',
              href: '/student',
              color: 'white',
              bg: 'teal.400',
              p: '1rem',
              borderRadius: '0.8rem',
            },
            'Click here for more students achievement →'
          )
        )
      ),
      w.createElement(
        F,
        { flex: '1', maxW: '400px' },
        w.createElement(
          xt,
          { pl: '0', area: 'img', m: '5' },
          w.createElement(ai, {
            src: '../../../public/img/erik_logo.png',
            alt: 'Erik-t-education.hk-logo',
            height: '200px',
          })
        )
      )
    )
  );
}
const xx = [
  {
    id: 1,
    name: 'AP Chemistry',
    year: 2019,
    feature: '100% students got Level 5 & 4',
    lv5student: 1,
    lv4student: 1,
    studentName: 'Chan,Leung',
  },
  {
    id: 2,
    name: 'AP Biology',
    year: 2019,
    feature: '100% students got Level 5 & 4',
    lv5student: 2,
    lv4student: 4,
    studentName: 'Guo,Lee,Leung,Lo,Mak,Ngai',
  },
  {
    id: 3,
    name: 'AP Statistics',
    year: 2019,
    feature: '100% students got Level 5 & 4',
    lv5student: 4,
    lv4student: 2,
    studentName: 'Chan,Chung,Lee,Kwan,Ma,Mak',
  },
  {
    id: 4,
    name: 'AP Calculus AB',
    year: 2019,
    feature: '100% students got Level 5',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Lo',
  },
  {
    id: 5,
    name: 'SAT Biology E',
    year: 2019,
    feature: 'ALL got 720 and above',
    lv5student: '2',
    lv4student: 0,
    studentName: 'Leung,Ngai(760: 1 student; 720:1)',
  },
  {
    id: 6,
    name: 'SAT Biology M',
    year: 2019,
    feature: '100% students full score',
    lv5student: '2 ',
    lv4student: 0,
    studentName: 'Mak(760: 1 student; 720:1 )',
  },
  {
    id: 7,
    name: 'SAT Chemistry',
    year: 2019,
    feature: 'ALL got 740 and above',
    lv5student: '740: 1',
    lv4student: 0,
    studentName: 'Leung',
  },
  {
    id: 8,
    name: 'AP Chemistry',
    year: 2020,
    feature: 'Over 70% students got Level 5',
    lv5student: 5,
    lv4student: 2,
    studentName: 'Guo,Kee,Kwan,Li,Mak,Sung,Yeung',
  },
  {
    id: 9,
    name: 'AP Biology',
    year: 2020,
    feature: '100% students got Level 5 & 4',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Chan',
  },
  {
    id: 10,
    name: 'AP Statistic',
    year: 2020,
    feature: 'Over 83% students got Level 5',
    lv5student: 3,
    lv4student: 1,
    studentName: 'Chan,Guo,Li,Tang,Tran,Yeung',
  },
  {
    id: 11,
    name: 'AP Physics',
    year: 2020,
    feature: '80% students got Level 5',
    lv5student: 4,
    lv4student: 1,
    studentName: 'Kwan,Ma,Sung,Wong,Yeung',
  },
  {
    id: 12,
    name: 'AP Calculus AB',
    year: 2020,
    feature: '100% students got Level 5',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Wu',
  },
  {
    id: 13,
    name: 'AP Calculus BC',
    year: 2020,
    feature: '100% students got Level 5',
    lv5student: 6,
    lv4student: 0,
    studentName: 'Chan,Kee,Kwan,Ma,Sung,Wong',
  },
  {
    id: 14,
    name: 'AP Biology',
    year: 2021,
    feature: 'Almost 90% students got Level 5',
    lv5student: 7,
    lv4student: 1,
    studentName: 'Chan,Cheung,Kee,Kwan,Leung,Yeung,Yeung',
  },
  {
    id: 15,
    name: 'AP Chemistry',
    year: 2021,
    feature: 'Over 80% students got Level 5 & 4',
    lv5student: 4,
    lv4student: 2,
    studentName: 'Chan,Chan,Cheung,Law,Liu,Poon',
  },
  {
    id: 16,
    name: 'AP Calculus BC',
    year: 2021,
    feature: '100% students got Level 5',
    lv5student: 3,
    lv4student: 0,
    studentName: 'Leung,Li,Yeung',
  },
  {
    id: 17,
    name: 'AP Physics 2',
    year: 2021,
    feature: '100% students got Level 5',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Kwan',
  },
  {
    id: 18,
    name: 'AP Statistics',
    year: 2021,
    feature: 'Over 80% students got Level 5',
    lv5student: 5,
    lv4student: 0,
    studentName: 'Chan,Kee,Law,Sung,Tong,Yeung',
  },
  {
    id: 19,
    name: 'AP Calculus AB',
    year: 2021,
    feature: '100% students got Level 5',
    lv5student: 2,
    lv4student: 0,
    studentName: 'Tang, Tran',
  },
  {
    id: 20,
    name: 'AP Physics 1',
    year: 2021,
    feature: '100% students got Level 5',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Chan',
  },
  {
    id: 21,
    name: 'AP Physics C',
    year: 2021,
    feature: '100% students got Level 5',
    lv5student: 3,
    lv4student: 0,
    studentName: 'Kwan,Ma,Sung',
  },
  {
    id: 21,
    name: 'AP Chemistry',
    year: 2022,
    feature: 'Almost 80% students got Level 5 & 4',
    lv5student: 4,
    lv4student: 2,
    studentName: 'Chan,Ngai,Ngai,Tam,Tam,Tong,Wong,Wu',
  },
  {
    id: 22,
    name: 'AP Biology',
    year: 2022,
    feature: '100% students got Level 5 & 4',
    lv5student: 2,
    lv4student: 2,
    studentName: 'Lai,Law,Poon',
  },
  {
    id: 23,
    name: 'AP Statistics',
    year: 2022,
    feature: 'Over 80% students got Level 5',
    lv5student: 4,
    lv4student: 1,
    studentName: 'Li,Liu,Ngai,Poon,Tsih,Wu',
  },
  {
    id: 24,
    name: 'AP Calculus BC',
    year: 2022,
    feature: '100% students got Level 5',
    lv5student: 2,
    lv4student: 0,
    studentName: 'Tong,Wong',
  },
  {
    id: 25,
    name: 'AP Physic 1',
    year: 2022,
    feature: '100% students got Level 5',
    lv5student: 2,
    lv4student: 0,
    studentName: 'Kan,Wong',
  },
  {
    id: 26,
    name: 'AP Biology',
    year: 2023,
    feature: '100% students got Level 5 & 4',
    lv5student: 5,
    lv4student: 3,
    studentName: 'Kan,Lau,Lee,Ngai,Ngan,Tsih,Wong,Wong',
  },
  {
    id: 27,
    name: 'AP Chemistry',
    year: 2023,
    feature: '100% students got Level 5',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Lau',
  },
  {
    id: 28,
    name: 'AP Physic 2',
    year: 2023,
    feature: '100% students got Level 5 & 4',
    lv5student: 1,
    lv4student: 1,
    studentName: 'Poon,Wong',
  },
  {
    id: 29,
    name: 'AP Physic C',
    year: 2023,
    feature: '100% students got Level 5',
    lv5student: 1,
    lv4student: 0,
    studentName: 'Ho',
  },
  {
    id: 30,
    name: 'AP Statistics',
    year: 2023,
    feature: '100% students got Level 5',
    lv5student: 3,
    lv4student: 0,
    studentName: 'Chan,Mok,Wong',
  },
  {
    id: 31,
    name: 'AP Calculus AB/BC',
    year: 2023,
    feature: '100% students got Level 5',
    lv5student: 6,
    lv4student: 0,
    studentName: 'Law, Kan, Wong, Lau, Ho, Too(Shanghai Concordia)',
  },
];
function W6() {
  return w.createElement(
    'div',
    null,
    w.createElement(
      F,
      {
        mt: { sm: '0rem', md: '0rem' },
        mb: { sm: '0rem', md: '0rem' },
        flexDirection: { sm: 'column', md: 'row' },
        alignItems: 'center',
        maxW: '1200px',
        mx: 'auto',
        p: '4',
      },
      w.createElement(
        ge,
        { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' } },
        'Students achievement'
      ),
      w.createElement(
        'p',
        null,
        'To protect clients personal privacy, all rankings are only sorted by alphet only'
      ),
      w.createElement(
        Gr,
        {
          className: 'btn',
          href: '/student',
          color: 'white',
          bg: 'teal.400',
          p: '1rem',
          borderRadius: '0.8rem',
        },
        'Click here for more students achievement →'
      )
    )
  );
}
function wx() {
  const [e, t] = S.useState('2023'),
    [n, r] = S.useState('2023'),
    [o, i] = S.useState([]);
  S.useEffect(() => {
    a('2023');
  }, []);
  const a = (s) => {
    t(s), i(xx.filter((l) => l.year === Number(s))), r(s);
  };
  return w.createElement(
    'div',
    null,
    w.createElement(
      F,
      { alignItems: 'center', maxW: '1200px', mx: 'auto', p: '4' },
      w.createElement(
        ge,
        {
          as: 'h4',
          fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
          mb: '4',
          fontWeight: '600',
          borderBottom: '1px',
          pt: { sm: '3rem', md: '4rem', lg: '5rem' },
        },
        'AP Examination'
      )
    ),
    w.createElement(
      F,
      {
        className: 'btn-group',
        flexDirection: { base: 'column', md: 'row' },
        mt: { sm: '0rem', md: '0rem' },
        mb: { sm: '0rem', md: '0rem' },
        alignItems: 'center',
        maxW: '1200px',
        mx: 'auto',
        p: '4',
      },
      w.createElement(
        tt,
        {
          className: 'btn',
          m: '0.1rem',
          style: {
            backgroundColor: n === '2023' ? '#5151f9' : '#edecfe',
            color: n === '2023' ? '#ffffff' : '#1A202C',
            fontSize: n === '2023' ? '1.5rem' : '1rem',
          },
          onClick: () => a('2023'),
        },
        '2023'
      ),
      w.createElement(
        tt,
        {
          className: 'btn',
          m: '0.1rem',
          style: {
            backgroundColor: n === '2022' ? '#5151f9' : '#edecfe',
            color: n === '2022' ? '#ffffff' : '#1A202C',
            fontSize: n === '2022' ? '1.5rem' : '1rem',
          },
          onClick: () => a('2022'),
        },
        '2022'
      ),
      w.createElement(
        tt,
        {
          className: 'btn',
          m: '0.1rem',
          style: {
            backgroundColor: n === '2021' ? '#5151f9' : '#edecfe',
            color: n === '2021' ? '#ffffff' : '#1A202C',
            fontSize: n === '2021' ? '1.5rem' : '1rem',
          },
          onClick: () => a('2021'),
        },
        '2021'
      ),
      w.createElement(
        tt,
        {
          className: 'btn',
          m: '0.1rem',
          style: {
            backgroundColor: n === '2020' ? '#5151f9' : '#edecfe',
            color: n === '2020' ? '#ffffff' : '#1A202C',
            fontSize: n === '2020' ? '1.5rem' : '1rem',
          },
          onClick: () => a('2020'),
        },
        '2020'
      ),
      w.createElement(
        tt,
        {
          className: 'btn',
          m: '0.1rem',
          style: {
            backgroundColor: n === '2019' ? '#5151f9' : '#edecfe',
            color: n === '2019' ? '#ffffff' : '#1A202C',
            fontSize: n === '2019' ? '1.5rem' : '1rem',
          },
          onClick: () => a('2019'),
        },
        '2019'
      )
    ),
    w.createElement(
      F,
      {
        mt: { sm: '0rem', md: '0rem' },
        mb: { sm: '1rem', md: '0rem' },
        flexDirection: { sm: 'column', md: 'row' },
        alignItems: 'center',
        maxW: '1200px',
        mx: 'auto',
        p: '4',
      },
      o.map((s) =>
        w.createElement(
          'div',
          { className: 'list', key: s.id },
          w.createElement(
            Ku,
            {
              mb: { sm: '0rem', md: '0.5rem', lg: '1rem' },
              templateColumns: {
                sm: '0.12fr 0.2fr 0.65fr',
                md: '0.5fr 1fr 0.15fr 0.4fr 1fr',
                lg: '0.7fr 1fr 0.15fr 0.4fr 1fr',
              },
              templateRows: {
                sm: '2.5fr 0.3fr 0.3fr',
                md: '1fr 1fr 1fr',
                lg: '1fr 1fr',
              },
              border: '1px',
              p: '0.5rem',
              borderColor: 'gray.400',
              gap: { sm: '0.1rem', md: '0.3rem', lg: '0.5rem' },
              flexDirection: { sm: 'column', md: 'row' },
              templateAreas: {
                sm: '"title title studentname" "lv5 lv5student feature" "lv4 lv4student feature" ',
                md: `"title feature lv5 lv5student studentname"
         "title feature lv4 lv4student studentname"`,
              },
            },
            w.createElement(
              xt,
              {
                fontWeight: 'bold',
                fontSize: { sm: '1.2rem', md: '1.35rem', lg: '1.5rem' },
                area: 'title',
                minWidth: '8rem',
              },
              s.name
            ),
            w.createElement(
              xt,
              {
                fontWeight: 'bold',
                area: 'feature',
                fontSize: { sm: '0.9rem', md: '1rem', lg: '1rem' },
              },
              w.createElement(ge, { as: 'h3', mb: '4' }, s.feature)
            ),
            w.createElement(
              xt,
              { area: 'lv5student', fontSize: '0.8rem' },
              s.lv5student,
              ' student(s)'
            ),
            w.createElement(
              xt,
              { area: 'lv4' },
              w.createElement(ai, {
                src: '../../../public/img/lv4.svg',
                alt: 'Erik-t-education.hk-level4-icon',
                height: '1.5rem',
              })
            ),
            w.createElement(
              xt,
              { area: 'lv5' },
              w.createElement(ai, {
                src: '../../../public/img/lv5.svg',
                alt: 'Erik-t-education.hk-level5-icon',
                height: '1.5rem',
              })
            ),
            w.createElement(
              xt,
              { area: 'lv4student', fontSize: '0.8rem' },
              s.lv4student,
              ' student(s)'
            ),
            w.createElement(
              xt,
              {
                area: 'studentname',
                fontSize: '14px',
                style: {
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                },
              },
              'ICS student:',
              s.studentName
            )
          )
        )
      )
    )
  );
}
const U6 = () => {
  const [e, t] = S.useState('2022'),
    [n, r] = S.useState('2022'),
    [o, i] = S.useState([]);
  S.useEffect(() => {
    a('2023');
  }, []);
  const a = (s) => {
    t(s), i(xx.filter((l) => l.year === Number(s))), r(s);
  };
  return w.createElement(
    'div',
    { className: 'achievement' },
    w.createElement(W6, null),
    w.createElement(wx, null)
  );
};
var kx = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Sv = w.createContext && w.createContext(kx),
  mr =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (mr =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        mr.apply(this, arguments)
      );
    },
  H6 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function Cx(e) {
  return (
    e &&
    e.map(function (t, n) {
      return w.createElement(t.tag, mr({ key: n }, t.attr), Cx(t.child));
    })
  );
}
function Ex(e) {
  return function (t) {
    return w.createElement(G6, mr({ attr: mr({}, e.attr) }, t), Cx(e.child));
  };
}
function G6(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      a = H6(e, ['attr', 'size', 'title']),
      s = o || n.size || '1em',
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      w.createElement(
        'svg',
        mr(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: l,
            style: mr(mr({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        i && w.createElement('title', null, i),
        e.children
      )
    );
  };
  return Sv !== void 0
    ? w.createElement(Sv.Consumer, null, function (n) {
        return t(n);
      })
    : t(kx);
}
function K6(e) {
  return Ex({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z',
        },
      },
    ],
  })(e);
}
const Y6 = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};
function Px() {
  return w.createElement(
    'div',
    null,
    w.createElement(
      tt,
      {
        onClick: Y6,
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        borderRadius: 'full',
        w: '5rem',
        h: '5rem',
        bg: 'gray.500',
        _hover: { bg: 'gray.600' },
        _active: { bg: 'gray.700' },
      },
      w.createElement(kr, { as: K6, color: 'white' })
    )
  );
}
function Ds() {
  return w.createElement(
    'div',
    { className: 'home' },
    w.createElement(V6, null),
    w.createElement(U6, null),
    w.createElement(bx, null),
    w.createElement(Sx, null),
    w.createElement(N6, null),
    w.createElement(F6, null),
    w.createElement(O6, null),
    w.createElement(Px, null)
  );
}
const X6 = [
    [
      {
        id: 1,
        students: 'Lo',
        result: 'Lv5',
        subjects: 'Chemistry',
        school: 'ICS',
        exam: 'AP',
      },
    ],
  ],
  Q6 = [
    [
      {
        id: 1,
        students: 'Chung',
        result: 'Lv6/IB SL',
        subjects: 'Mathematics',
        school: 'Island School',
      },
      {
        id: 2,
        students: 'Kotkar',
        result: 'Lv6/IB HL',
        subjects: 'Chemistry',
        school: 'Island School',
      },
      {
        id: 3,
        students: 'Cheung',
        result: 'Lv7/IB SL',
        subjects: 'Mathematics',
        school: 'German Swiss International School',
      },
      {
        id: 4,
        students: 'Wan',
        result: 'Lv6/IB SL',
        subjects: 'Mathematics',
        school: 'Island School',
      },
      {
        id: 5,
        students: 'Ho',
        result: 'Lv6/IB HL',
        subjects: 'Chemistry',
        school: 'South Island School',
      },
    ],
  ],
  q6 = [
    [
      {
        id: 1,
        students: 'Cheung',
        result: 'A*',
        subjects: 'Chemistry',
        school: 'German Swiss International School',
      },
      {
        id: 2,
        students: 'Anuj',
        result: '7A*',
        subjects: 'Science & Mathematics',
        school: 'German Swiss International School',
      },
      {
        id: 3,
        students: 'Sashill',
        result: 'A',
        subjects: 'All sciences',
        school: 'Korean International School',
      },
      {
        id: 4,
        students: 'Li',
        result: 'A',
        subjects: 'Physic, Chemistry & Biology',
        school: 'South Island School',
      },
      {
        id: 5,
        students: 'Kaczorowsa',
        result: 'A',
        subjects: 'Physic, Chemistry & Biology',
        school: 'South Island School',
      },
      {
        id: 6,
        students: 'Fong',
        result: 'A*',
        subjects: 'Physic, Chemistry & Mathematics',
        school: 'Island School',
      },
      {
        id: 7,
        students: 'Suen',
        result: 'A',
        subjects: 'Science double award',
        school: 'South Island School',
      },
      {
        id: 8,
        students: 'matteo',
        result: '10A*',
        subjects: 'Science triple award & Mathematics',
        school: 'South Island School',
      },
      {
        id: 9,
        students: 'Promboon',
        result: 'A',
        subjects: 'Physic, Chemistry, Biology',
        school: 'South Island School',
      },
      {
        id: 10,
        students: 'Pratel',
        result: 'A*',
        subjects: 'Chemistry',
        school: 'Island School',
      },
      {
        id: 11,
        students: 'Chung',
        result: 'A*',
        subjects: 'Chemistry & Biology',
        school: 'Island School',
      },
      {
        id: 12,
        students: 'Chung',
        result: 'A* & A',
        subjects: 'Physic, Chemistry, Biology',
        school: 'South Island School',
      },
      {
        id: 13,
        students: 'Sze',
        result: 'A*',
        subjects: 'Physic, Chemistry, Biology & Mathematics',
        school: 'South Island School',
      },
      {
        id: 14,
        students: 'Brandi',
        result: 'A*',
        subjects: 'Science double award',
        school: 'South Island School',
      },
      {
        id: 15,
        students: 'Tam',
        result: 'A*',
        subjects: 'Physic, Chemistry, Biology',
        school: 'Kiangsu & Chekiang International School',
      },
      {
        id: 16,
        students: 'Chloe',
        result: 'A*',
        subjects: 'Science double award & Mathematics',
        school: 'South Island School',
      },
      {
        id: 17,
        students: 'Ddibe',
        result: 'A*',
        subjects: 'Physic, Chemistry, Biology & Mathematics',
        school: 'South Island School',
      },
    ],
  ],
  Z6 = [
    [
      {
        id: 1,
        students: 'Cheung',
        result: 'A*',
        subjects: 'Chemistry',
        school: 'German Swiss International School',
      },
      {
        id: 2,
        students: 'Sashill',
        result: 'A',
        subjects: 'All sciences',
        school: 'Korean International School',
      },
      {
        id: 3,
        students: 'Anuj',
        result: '7A*',
        subjects: 'Science & Mathematics',
        school: 'German Swiss International School',
      },
    ],
  ],
  J6 = [
    [
      {
        id: 4,
        students: 'Giuliano',
        result: 'A*',
        subjects: 'Physic, Chemistry & Biology',
        school: 'Shatin College',
        exam: 'AP',
      },
    ],
  ],
  eB = [
    [
      {
        id: 1,
        students: 'Chow',
        result: 'A* (GCE edexcel)',
        subjects: 'Chemistry',
        school: 'Brighton College',
      },
      {
        id: 2,
        students: 'Jim',
        result: 'A (GCE)',
        subjects: 'Chemistry',
        school: 'Headington College',
      },
    ],
  ],
  tB = [
    [
      {
        id: 1,
        name: 'Wan',
        result: 'Lv 6',
        level: 'IB SL',
        subject: 'Mathematics',
        school: 'Environment science, University of Toronto',
      },
      {
        id: 2,
        name: 'Jim',
        result: 'A',
        level: 'AQA GCE',
        subject: 'Account & finance',
        school: 'University of Warwick',
      },
      {
        id: 3,
        name: 'Cheung',
        result: 'Lv 7',
        level: 'IB SL',
        subject: 'Mathematics',
        school: 'Law, University College London',
      },
      {
        id: 4,
        name: 'Kotar',
        result: 'Lv 6',
        level: 'IB HL',
        subject: 'Chemistry',
        school: 'Animal Science, University of Exeter',
      },
      {
        id: 5,
        name: 'Chung',
        result: 'Lv 6',
        level: 'IB SL',
        subject: 'Mathematics',
        school: 'Law, City University of Hong Kong',
      },
      {
        id: 6,
        name: 'Chow',
        result: 'A*',
        level: 'GCE edexcel',
        subject: 'Chemistry',
        school: 'Medicine, University of Hong Kong',
      },
      {
        id: 7,
        name: 'Ho',
        result: 'Lv 6',
        level: 'IB HL',
        subject: 'Chemistry',
        school: 'Biochemistry, New York University',
      },
      {
        id: 8,
        name: 'Wong',
        result: '3 subjects A*',
        level: '',
        subject: 'university chemistry exam',
        school: 'Dentistry, Swansea',
      },
    ],
  ],
  Lr = {
    apExam: X6,
    ibExam: Q6,
    igcseEExam: q6,
    igcseCExam: Z6,
    cieExam: J6,
    gceExam: eB,
    university: tB,
  },
  bo = ['Students', 'Result', 'Subjects', 'School'],
  nB = ['Students', 'Result', 'Level', 'Subjects', 'School'],
  Mr = (e) => {
    document.getElementById(e).scrollIntoView({ behavior: 'smooth' });
  };
function rB() {
  return React.createElement(
    'div',
    { className: 'student' },
    React.createElement(
      F,
      {
        mt: { sm: '0rem', md: '0rem' },
        mb: { sm: '0rem', md: '0rem' },
        flexDirection: { sm: 'column', md: 'row' },
        alignItems: 'center',
        maxW: '1200px',
        mx: 'auto',
        p: '4',
      },
      React.createElement(
        ge,
        { as: 'h2', fontSize: { sm: '2xl', md: '2.5xl', lg: '3xl' } },
        'All students achievement'
      ),
      React.createElement(
        'p',
        null,
        'To protect clients personal privacy, all rankings are only sorted by alphet only'
      )
    ),
    React.createElement(
      F,
      { maxW: '1200px', mx: 'auto', p: '4' },
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('ap') },
        'AP & SAT'
      ),
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('ib') },
        'IB'
      ),
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('igcsee') },
        'IGCSE (Edexcel)'
      ),
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('igcsec') },
        'IGCSE (Cambridge)'
      ),
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('cie') },
        'CIE'
      ),
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('gce') },
        'GCE'
      ),
      React.createElement(
        tt,
        { border: '1px', m: '1', onClick: () => Mr('u') },
        'University admission'
      )
    ),
    React.createElement(F, { id: 'ap' }, React.createElement(wx, null)),
    React.createElement(
      F,
      { maxW: '1200px', mx: 'auto', p: '4' },
      React.createElement(
        F,
        null,
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                bo.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.apExam.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.students),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.subjects),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        F,
        { id: 'ib', mt: '14' },
        React.createElement(
          ge,
          {
            as: 'h4',
            fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
            mb: '4',
            fontWeight: '600',
            borderBottom: '1px',
            pt: { sm: '3rem', md: '4rem', lg: '5rem' },
          },
          'IB Examination'
        ),
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                bo.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.ibExam.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.students),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.subjects),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        F,
        { id: 'igcsee', mt: '14' },
        React.createElement(
          ge,
          {
            as: 'h4',
            fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
            mb: '4',
            fontWeight: '600',
            borderBottom: '1px',
            pt: { sm: '3rem', md: '4rem', lg: '5rem' },
          },
          'IGCSE(Edexcel) Examination'
        ),
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                bo.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.igcseEExam.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.students),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.subjects),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        F,
        { id: 'igcsec', mt: '14' },
        React.createElement(
          ge,
          {
            as: 'h4',
            fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
            mb: '4',
            fontWeight: '600',
            borderBottom: '1px',
            pt: { sm: '3rem', md: '4rem', lg: '5rem' },
          },
          'IGCSE(Cambridge) Examination'
        ),
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                bo.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.igcseCExam.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.students),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.subjects),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        F,
        { id: 'cie', mt: '14' },
        React.createElement(
          ge,
          {
            as: 'h4',
            fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
            mb: '4',
            fontWeight: '600',
            borderBottom: '1px',
            pt: { sm: '3rem', md: '4rem', lg: '5rem' },
          },
          'CIE Examination'
        ),
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                bo.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.cieExam.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.students),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.subjects),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        F,
        { id: 'gce', mt: '14' },
        React.createElement(
          ge,
          {
            as: 'h4',
            fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
            mb: '4',
            fontWeight: '600',
            borderBottom: '1px',
            pt: { sm: '3rem', md: '4rem', lg: '5rem' },
          },
          'GCE Examination'
        ),
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                bo.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.gceExam.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.students),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.subjects),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        F,
        { id: 'u', mt: '14' },
        React.createElement(
          ge,
          {
            as: 'h4',
            fontSize: { sm: '1.5rem', md: '1.8rem', lg: '2rem' },
            mb: '4',
            fontWeight: '600',
            borderBottom: '1px',
            pt: { sm: '3rem', md: '4rem', lg: '5rem' },
          },
          'University Admission'
        ),
        React.createElement(
          Ar,
          null,
          React.createElement(
            Gn,
            { colorScheme: 'teal', mt: '4' },
            React.createElement(
              Rr,
              null,
              React.createElement(
                ut,
                null,
                nB.map((e) => React.createElement(zr, { key: e }, e))
              )
            ),
            React.createElement(
              $r,
              null,
              Lr.university.map((e) =>
                e.map((t) =>
                  React.createElement(
                    ut,
                    { key: t.id },
                    React.createElement(re, null, t.name),
                    React.createElement(re, null, t.result),
                    React.createElement(re, null, t.level),
                    React.createElement(re, null, t.subject),
                    React.createElement(re, null, t.school)
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(Px, null)
  );
}
function oB() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, '404 Error'),
    React.createElement(
      'p',
      null,
      React.createElement('a', { href: '/' }, 'back to homepage')
    )
  );
}
function iB(e) {
  return Ex({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
          {
            tag: 'path',
            attr: {
              fillRule: 'nonzero',
              d: 'M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z',
            },
          },
        ],
      },
    ],
  })(e);
}
function aB() {
  return w.createElement(
    'div',
    { className: 'sticky-paragraph' },
    'To avoid disturbing classes, you are welcome to Whatsapp us first before CALLING. Whatsapp:',
    w.createElement(kr, { as: iB, color: 'green.300' }),
    w.createElement(
      j6,
      {
        query: '+852-9629-1557',
        styles: { px: '2', py: '1', color: 'white', bg: 'blue.900' },
      },
      '+852-9629-1557'
    )
  );
}
var sB = dx({
    displayName: 'HamburgerIcon',
    viewBox: '0 0 24 24',
    d: 'M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z',
  }),
  lB = dx({
    displayName: 'CloseIcon',
    d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
  });
const uB = () => {
  const { isOpen: e, onToggle: t } = R6();
  return w.createElement(
    'div',
    null,
    w.createElement(aB, null),
    w.createElement(
      F,
      { border: '5px', bgColor: '#16273b' },
      w.createElement(
        F,
        { alignItems: 'center' },
        w.createElement(
          ia,
          {
            maxW: '1200px',
            mx: 'auto',
            className: 'nav',
            as: 'nav',
            align: 'center',
            justify: 'space-between',
            wrap: 'wrap',
            p: '1rem',
            minHeight: '8rem',
            color: 'white',
          },
          w.createElement(
            ia,
            { align: 'center', mr: 5 },
            w.createElement(
              tt,
              {
                display: { base: 'block', md: 'none' },
                onClick: t,
                variant: 'ghost',
                _focus: { outline: 'none' },
              },
              e
                ? w.createElement(lB, { w: 6, h: 6 })
                : w.createElement(sB, { w: 6, h: 6 })
            ),
            w.createElement(
              F,
              null,
              w.createElement(ai, {
                src: '../../../public/img/logo.svg',
                height: '2.5rem',
                alt: 'Description of the image',
              })
            )
          ),
          w.createElement(
            F,
            {
              display: { base: e ? 'block' : 'none', md: 'block' },
              flexBasis: { base: '100%', md: 'auto' },
            },
            w.createElement(
              ia,
              {
                align: 'center',
                justify: ['center', 'space-between', 'flex-end', 'flex-end'],
                direction: ['column', 'row', 'row', 'row'],
                pt: [4, 0, 0, 0],
                gap: '1rem',
              },
              w.createElement(
                Es,
                { to: '/', activeStyle: { fontWeight: 'bold' } },
                'Home'
              ),
              w.createElement(
                Es,
                { to: '/profile', activeStyle: { fontWeight: 'bold' } },
                'Profile'
              ),
              w.createElement(
                Es,
                { to: '/subject', activeStyle: { fontWeight: 'bold' } },
                'Subjects'
              ),
              w.createElement(
                Es,
                { to: '/student', activeStyle: { fontWeight: 'bold' } },
                'All students achievement'
              )
            )
          )
        )
      )
    )
  );
};
function cB() {
  return w.createElement(
    'footer',
    { className: 'footer' },
    w.createElement(
      F,
      {
        mt: { base: '8', md: '10' },
        mb: { base: '8', md: '10' },
        display: 'flex',
        flexDirection: { base: 'column', md: 'row' },
        maxW: '1200px',
        mx: 'auto',
      },
      w.createElement(
        F,
        { flex: '1', maxW: '200px' },
        w.createElement(
          xt,
          { pl: '2', mb: '4' },
          w.createElement(ai, {
            src: '../../../public/img/logo.svg',
            alt: 'Erik-t-education.hk-logo',
            height: '50px',
          })
        )
      ),
      w.createElement(
        ia,
        { flexDirection: 'column', flex: '1', mr: { base: '0', md: '4' } },
        w.createElement(
          xt,
          { pl: '2', textAlign: 'left', mb: '4' },
          w.createElement(
            F,
            { mb: '2' },
            w.createElement(Gr, { href: '/.' }, 'Home')
          ),
          w.createElement(
            F,
            { mb: '2' },
            w.createElement(Gr, { href: '/profile' }, 'About Erik')
          ),
          w.createElement(
            F,
            { mb: '2' },
            w.createElement(Gr, { href: '/subject' }, 'Subjects')
          ),
          w.createElement(
            F,
            { mb: '2' },
            w.createElement(Gr, { href: '/student' }, 'Students achievement')
          )
        )
      ),
      w.createElement(
        F,
        { flex: '1', mr: { base: '0', md: '4' } },
        w.createElement(
          xt,
          { pl: '2', textAlign: 'left' },
          w.createElement('p', null, '© 2022 Erik-t Education')
        )
      )
    )
  );
}
function dB() {
  return w.createElement(
    'div',
    { className: 'App' },
    w.createElement(uB, null),
    w.createElement(
      HC,
      null,
      w.createElement(bn, {
        exact: !0,
        path: '/',
        element: w.createElement(Ds, null),
      }),
      w.createElement(bn, {
        exact: !0,
        path: '/home',
        element: w.createElement(Ds, null),
      }),
      w.createElement(bn, {
        exact: !0,
        path: '/index',
        element: w.createElement(Ds, null),
      }),
      w.createElement(bn, {
        exact: !0,
        path: '/index.html',
        element: w.createElement(Ds, null),
      }),
      w.createElement(bn, {
        exact: !0,
        path: '/profile',
        element: w.createElement(bx, null),
      }),
      w.createElement(bn, {
        exact: !0,
        path: '/subject',
        element: w.createElement(Sx, null),
      }),
      w.createElement(bn, {
        exact: !0,
        path: '/student',
        element: w.createElement(rB, null),
      }),
      w.createElement(bn, { path: '*', element: w.createElement(oB, null) })
    ),
    w.createElement(cB, null)
  );
}
dd.createRoot(document.getElementById('root')).render(
  w.createElement(
    v6,
    null,
    w.createElement(QC, null, w.createElement(dB, null))
  )
);
