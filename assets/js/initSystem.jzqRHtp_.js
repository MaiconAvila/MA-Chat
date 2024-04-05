var He =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {}
function L(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
function Ke(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments)
    }
    r.prototype = t.prototype
  } else r = {}
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (o) {
      var n = Object.getOwnPropertyDescriptor(e, o)
      Object.defineProperty(
        r,
        o,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return e[o]
              },
            }
      )
    }),
    r
  )
}
var U = { exports: {} },
  u = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h = Symbol.for("react.element"),
  ee = Symbol.for("react.portal"),
  te = Symbol.for("react.fragment"),
  re = Symbol.for("react.strict_mode"),
  ne = Symbol.for("react.profiler"),
  oe = Symbol.for("react.provider"),
  ue = Symbol.for("react.context"),
  ce = Symbol.for("react.forward_ref"),
  ie = Symbol.for("react.suspense"),
  ae = Symbol.for("react.memo"),
  se = Symbol.for("react.lazy"),
  C = Symbol.iterator
function le(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (C && e[C]) || e["@@iterator"]), typeof e == "function" ? e : null)
}
var F = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  W = Object.assign,
  B = {}
function S(e, t, r) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = B),
    (this.updater = r || F)
}
S.prototype.isReactComponent = {}
S.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    )
  this.updater.enqueueSetState(this, e, t, "setState")
}
S.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function N() {}
N.prototype = S.prototype
function E(e, t, r) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = B),
    (this.updater = r || F)
}
var k = (E.prototype = new N())
k.constructor = E
W(k, S.prototype)
k.isPureReactComponent = !0
var D = Array.isArray,
  H = Object.prototype.hasOwnProperty,
  O = { current: null },
  K = { key: !0, ref: !0, __self: !0, __source: !0 }
function Q(e, t, r) {
  var o,
    n = {},
    c = null,
    i = null
  if (t != null)
    for (o in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (c = "" + t.key),
    t))
      H.call(t, o) && !K.hasOwnProperty(o) && (n[o] = t[o])
  var s = arguments.length - 2
  if (s === 1) n.children = r
  else if (1 < s) {
    for (var a = Array(s), l = 0; l < s; l++) a[l] = arguments[l + 2]
    n.children = a
  }
  if (e && e.defaultProps)
    for (o in ((s = e.defaultProps), s)) n[o] === void 0 && (n[o] = s[o])
  return { $$typeof: h, type: e, key: c, ref: i, props: n, _owner: O.current }
}
function fe(e, t) {
  return {
    $$typeof: h,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function R(e) {
  return typeof e == "object" && e !== null && e.$$typeof === h
}
function de(e) {
  var t = { "=": "=0", ":": "=2" }
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var I = /\/+/g
function w(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? de("" + e.key)
    : t.toString(36)
}
function g(e, t, r, o, n) {
  var c = typeof e
  ;(c === "undefined" || c === "boolean") && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (c) {
      case "string":
      case "number":
        i = !0
        break
      case "object":
        switch (e.$$typeof) {
          case h:
          case ee:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (n = n(i)),
      (e = o === "" ? "." + w(i, 0) : o),
      D(n)
        ? ((r = ""),
          e != null && (r = e.replace(I, "$&/") + "/"),
          g(n, t, r, "", function (l) {
            return l
          }))
        : n != null &&
          (R(n) &&
            (n = fe(
              n,
              r +
                (!n.key || (i && i.key === n.key)
                  ? ""
                  : ("" + n.key).replace(I, "$&/") + "/") +
                e
            )),
          t.push(n)),
      1
    )
  if (((i = 0), (o = o === "" ? "." : o + ":"), D(e)))
    for (var s = 0; s < e.length; s++) {
      c = e[s]
      var a = o + w(c, s)
      i += g(c, t, r, a, n)
    }
  else if (((a = le(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(c = e.next()).done; )
      (c = c.value), (a = o + w(c, s++)), (i += g(c, t, r, a, n))
  else if (c === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    )
  return i
}
function x(e, t, r) {
  if (e == null) return e
  var o = [],
    n = 0
  return (
    g(e, o, "", "", function (c) {
      return t.call(r, c, n++)
    }),
    o
  )
}
function pe(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (r) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r))
        },
        function (r) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var f = { current: null },
  q = { transition: null },
  ye = {
    ReactCurrentDispatcher: f,
    ReactCurrentBatchConfig: q,
    ReactCurrentOwner: O,
  }
u.Children = {
  map: x,
  forEach: function (e, t, r) {
    x(
      e,
      function () {
        t.apply(this, arguments)
      },
      r
    )
  },
  count: function (e) {
    var t = 0
    return (
      x(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      x(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!R(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      )
    return e
  },
}
u.Component = S
u.Fragment = te
u.Profiler = ne
u.PureComponent = E
u.StrictMode = re
u.Suspense = ie
u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ye
u.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    )
  var o = W({}, e.props),
    n = e.key,
    c = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((c = t.ref), (i = O.current)),
      t.key !== void 0 && (n = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (a in t)
      H.call(t, a) &&
        !K.hasOwnProperty(a) &&
        (o[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) o.children = r
  else if (1 < a) {
    s = Array(a)
    for (var l = 0; l < a; l++) s[l] = arguments[l + 2]
    o.children = s
  }
  return { $$typeof: h, type: e.type, key: n, ref: c, props: o, _owner: i }
}
u.createContext = function (e) {
  return (
    (e = {
      $$typeof: ue,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: oe, _context: e }),
    (e.Consumer = e)
  )
}
u.createElement = Q
u.createFactory = function (e) {
  var t = Q.bind(null, e)
  return (t.type = e), t
}
u.createRef = function () {
  return { current: null }
}
u.forwardRef = function (e) {
  return { $$typeof: ce, render: e }
}
u.isValidElement = R
u.lazy = function (e) {
  return { $$typeof: se, _payload: { _status: -1, _result: e }, _init: pe }
}
u.memo = function (e, t) {
  return { $$typeof: ae, type: e, compare: t === void 0 ? null : t }
}
u.startTransition = function (e) {
  var t = q.transition
  q.transition = {}
  try {
    e()
  } finally {
    q.transition = t
  }
}
u.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.")
}
u.useCallback = function (e, t) {
  return f.current.useCallback(e, t)
}
u.useContext = function (e) {
  return f.current.useContext(e)
}
u.useDebugValue = function () {}
u.useDeferredValue = function (e) {
  return f.current.useDeferredValue(e)
}
u.useEffect = function (e, t) {
  return f.current.useEffect(e, t)
}
u.useId = function () {
  return f.current.useId()
}
u.useImperativeHandle = function (e, t, r) {
  return f.current.useImperativeHandle(e, t, r)
}
u.useInsertionEffect = function (e, t) {
  return f.current.useInsertionEffect(e, t)
}
u.useLayoutEffect = function (e, t) {
  return f.current.useLayoutEffect(e, t)
}
u.useMemo = function (e, t) {
  return f.current.useMemo(e, t)
}
u.useReducer = function (e, t, r) {
  return f.current.useReducer(e, t, r)
}
u.useRef = function (e) {
  return f.current.useRef(e)
}
u.useState = function (e) {
  return f.current.useState(e)
}
u.useSyncExternalStore = function (e, t, r) {
  return f.current.useSyncExternalStore(e, t, r)
}
u.useTransition = function () {
  return f.current.useTransition()
}
u.version = "18.2.0"
U.exports = u
var $ = U.exports
const me = L($)
var ve = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }
const V = (e) => {
    let t
    const r = new Set(),
      o = (d, v) => {
        const y = typeof d == "function" ? d(t) : d
        if (!Object.is(y, t)) {
          const p = t
          ;(t =
            v ?? (typeof y != "object" || y === null)
              ? y
              : Object.assign({}, t, y)),
            r.forEach((m) => m(t, p))
        }
      },
      n = () => t,
      a = {
        setState: o,
        getState: n,
        getInitialState: () => l,
        subscribe: (d) => (r.add(d), () => r.delete(d)),
        destroy: () => {
          ;(ve ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            r.clear()
        },
      },
      l = (t = e(o, n, a))
    return a
  },
  _e = (e) => (e ? V(e) : V)
var X = { exports: {} },
  Z = {},
  G = { exports: {} },
  J = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _ = $
function Se(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var he = typeof Object.is == "function" ? Object.is : Se,
  xe = _.useState,
  ge = _.useEffect,
  qe = _.useLayoutEffect,
  be = _.useDebugValue
function we(e, t) {
  var r = t(),
    o = xe({ inst: { value: r, getSnapshot: t } }),
    n = o[0].inst,
    c = o[1]
  return (
    qe(
      function () {
        ;(n.value = r), (n.getSnapshot = t), j(n) && c({ inst: n })
      },
      [e, r, t]
    ),
    ge(
      function () {
        return (
          j(n) && c({ inst: n }),
          e(function () {
            j(n) && c({ inst: n })
          })
        )
      },
      [e]
    ),
    be(r),
    r
  )
}
function j(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !he(e, r)
  } catch {
    return !0
  }
}
function je(e, t) {
  return t()
}
var Ee =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? je
    : we
J.useSyncExternalStore =
  _.useSyncExternalStore !== void 0 ? _.useSyncExternalStore : Ee
G.exports = J
var ke = G.exports
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = $,
  Oe = ke
function Re(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var $e = typeof Object.is == "function" ? Object.is : Re,
  Ae = Oe.useSyncExternalStore,
  Ce = b.useRef,
  De = b.useEffect,
  Ie = b.useMemo,
  Ve = b.useDebugValue
Z.useSyncExternalStoreWithSelector = function (e, t, r, o, n) {
  var c = Ce(null)
  if (c.current === null) {
    var i = { hasValue: !1, value: null }
    c.current = i
  } else i = c.current
  c = Ie(
    function () {
      function a(p) {
        if (!l) {
          if (((l = !0), (d = p), (p = o(p)), n !== void 0 && i.hasValue)) {
            var m = i.value
            if (n(m, p)) return (v = m)
          }
          return (v = p)
        }
        if (((m = v), $e(d, p))) return m
        var A = o(p)
        return n !== void 0 && n(m, A) ? m : ((d = p), (v = A))
      }
      var l = !1,
        d,
        v,
        y = r === void 0 ? null : r
      return [
        function () {
          return a(t())
        },
        y === null
          ? void 0
          : function () {
              return a(y())
            },
      ]
    },
    [t, r, o, n]
  )
  var s = Ae(e, c[0], c[1])
  return (
    De(
      function () {
        ;(i.hasValue = !0), (i.value = s)
      },
      [s]
    ),
    Ve(s),
    s
  )
}
X.exports = Z
var ze = X.exports
const Pe = L(ze)
var Y = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }
const { useDebugValue: Me } = me,
  { useSyncExternalStoreWithSelector: Te } = Pe
let z = !1
const Le = (e) => e
function Ue(e, t = Le, r) {
  ;(Y ? "production" : void 0) !== "production" &&
    r &&
    !z &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (z = !0))
  const o = Te(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  )
  return Me(o), o
}
const P = (e) => {
    ;(Y ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      )
    const t = typeof e == "function" ? _e(e) : e,
      r = (o, n) => Ue(t, o, n)
    return Object.assign(r, t), r
  },
  Fe = (e) => (e ? P(e) : P),
  M = {
    aba: "x1rg5ohu x173ssrc x1xaadd7 x682dto x1e01kqd x12j7j87 x9bpaai x1pg5gke x1s688f xo5v014 x1u28eo4 x2b8uid x16dsc37 x1sbl2l xy9co9w x5r174s x7h3shv ",
    confgIcone: "_ajv7 ",
    iconeStyle: "_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha ",
    modalOptions: {
      content1: "_ak4w _al02 ",
      content2: "_ak5b ",
      content3: "xyqdw3p xg8j3zb ",
      animFather: "_ajv9",
      animExe: "x11t6m9b",
      animChildren: "x11xpdln x1d8287x x1h4ghdb ",
    },
    listagem: {
      content1: "x1i64zmx x1emribx ",
      content2: "_aj-r _aj-q _aj-_ _ak_v ",
      content3:
        "x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 x1ypdohk x1vqgdyp x1i64zmx x1gja9t ",
      content4:
        "x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x2lwn1j xl56j7k x1q0g3np x1cy8zhl xt4ypqs xq8finb ",
      content5: "xdod15v xzwifym x6ikm8r x10wlt62 xlyipyv xuxw1ft ",
    },
    footerIco: "_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha ",
    textarea: "_ak1l ",
  },
  We = {
    aba: "l7jjieqr cfzgl7ar ei5e7seu h0viaqh7 tpmajp1w c0uhu3dl riy2oczp dsh4tgtl sy6s5v3r gz7w46tb lyutrhe2 qfejxiq4 fewfhwl7 ap18qm3b ikwl5qvt j90th5db aumms1qt ",
    confgIcone: "_3OtEr ",
    iconeStyle: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1 ",
    modalOptions: {
      content1: "_2sDI2 _1b6oD ",
      content2: "_3bcLp ",
      content3: "ocd2b0bc aa0kojfi ",
      animFather: "_2Qn52",
      animExe: "b4a78re4",
      animChildren: "bo8jc6qi p4t1lx4y brjalhku ",
    },
    listagem: {
      content1: "bugiwsl0 fooq7fky ",
      content2: "jScby Iaqxu FCS6Q _2UNQo ",
      content3:
        "tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 fhf7t426 sap93d0t gndfcl4n ajgl1lbb lniyxyh2 fooq7fky bcfko8ch ",
      content4:
        "tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l tw2komxm nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 ac2vgrno sap93d0t r15c9g6i oz083wsx ",
      content5: "erpdyial tviruh8d gfz4du6o r7fjleex lhj4utae le5p0ye3 ",
    },
    footerIco: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1 ",
    textarea: "_3Uu1_ ",
  },
  T = {
    app: () => document.querySelector("#app"),
    afiliadoMain: () => document.querySelector("body > div"),
    paneSide: () => document.querySelector("#pane-side"),
    two: () => document.querySelector("#app > div > ._aigs"),
    menuLateral: () => document.querySelector(".two._aigs > ._aigv._aigz"),
    chatListDiv: () => document.querySelector(".lexical-rich-text-input > div"),
    chatListSpan: () => document.querySelector('[data-icon="search"]'),
    downAba: () => document.querySelector("header > div._ak0w"),
    downAbaUserPicture: () => document.querySelector("header ._3WByx > div"),
    chatListHeader: () =>
      document.querySelector(
        "div._aigv._aigw > header > div._ak0z > div > span"
      ),
    searchCamp: () => document.querySelector("#side > div._ak9t > div"),
    // chatOpen: () => document.querySelector("#main > header > div._amie > div._amif > div"),
    chatOpen: () => document.querySelector("#main > header > div._ami8 > div"),
    menuVertical: () => document.querySelector("#main ._amm9"),
    menuHorizontal: () =>
      document.querySelector("#main > header > div._ami8 > div"),
    menuFooter: () => document.querySelector("footer ._ak1o"),
    textarea: () => document.querySelector("footer ._ak1r"),
    respostaRapida: () => document.querySelector("._ak1p"),
    footerIcons: () => document.querySelector("footer ._ak1o"),
    footerMensagens: () => document.querySelector("footer ._ak1r"),
    footerTextAreaOriginal: () =>
      document.querySelector("footer ._ak1r > ._ak1l"),
    footerChatOriginal: () =>
      document.querySelector(
        "footer div._ak1l > .lexical-rich-text-input > div[contenteditable=true]"
      ),
    targetAudio: () => document.querySelectorAll("#main > span")[1],
    mainAudio: () => document.querySelector("footer._ak1i span"),
    eventPaste: () =>
      document.querySelector("footer ._1VZX7 > ._3Uu1_ > div >div"),
    replayMensage: () => document.querySelector("footer ._aju2"),
    allMensagens: () => document.querySelectorAll('div[role="row"]'),
    listMensages: () => document.querySelector("._ajyl"),
  },
  Be = {
    app: () => document.querySelector("#app"),
    afiliadoMain: () => document.querySelector("#app"),
    paneSide: () => document.querySelector("#pane-side"),
    two: () => document.querySelector("#app > div > ._1jJ70"),
    menuLateral: () => document.querySelector(".two._1jJ70 > ._2Ts6i._2xAQV"),
    chatListDiv: () => document.querySelector(".lexical-rich-text-input > div"),
    chatListSpan: () => document.querySelector('[data-icon="search"]'),
    downAba: () => document.querySelector("._2Ts6i._3RGKj header ._3WByx"),
    downAbaUserPicture: () => document.querySelector("header ._3WByx > div"),
    chatListHeader: () =>
      document.querySelector("._2Ts6i._3RGKj header ._604FD > div > span"),
    searchCamp: () => document.querySelector("#side ._3gYev > div"),
    chatOpen: () => document.querySelector("#main ._6u0RM ._3W2ap"),
    menuVertical: () => document.querySelector("#main ._3B19s"),
    menuHorizontal: () => document.querySelector("header ._1VwoK div"),
    menuFooter: () => document.querySelector("footer ._1OT67"),
    textarea: () => document.querySelector("footer ._1VZX7"),
    respostaRapida: () => document.querySelector("._4r9rJ"),
    footerIcons: () => document.querySelector("footer ._1OT67"),
    footerMensagens: () => document.querySelector("footer ._1VZX7"),
    footerTextAreaOriginal: () =>
      document.querySelector("footer ._1VZX7 > ._3Uu1_"),
    footerChatOriginal: () =>
      document.querySelector("._3Uu1_ .lexical-rich-text-input div"),
    targetAudio: () => document.querySelectorAll("#main > span")[1],
    mainAudio: () => document.querySelector("footer._3E8Fg span"),
    eventPaste: () =>
      document.querySelector("footer ._1VZX7 > ._3Uu1_ > div >div"),
    replayMensage: () => document.querySelector("footer .HLjg0"),
    allMensagens: () => document.querySelectorAll('div[role="row"]'),
    listMensages: () => document.querySelector("._5kRIK"),
  },
  Ne = Fe()((e) => ({
    version: "new",
    variaveisWA: M,
    querySelector: T,
    setVersion: (t) =>
      e((r) => ({
        ...r,
        version: t,
        variaveisWA: t === "new" ? M : We,
        querySelector: t === "new" ? T : Be,
      })),
  })),
  Qe = () => {
    const e = document.querySelector("#app .app-wrapper-web")
    let t = "new"
    e.classList.contains("_aiwn") || (t = "old"), Ne.getState().setVersion(t)
  }
export { me as R, Ke as a, He as c, L as g, Qe as i, $ as r, Ne as u }
