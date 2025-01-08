import B from "react";
import vr from "react-dom";
var J = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function hr() {
  if (Se) return W;
  Se = 1;
  var n = B, i = Symbol.for("react.element"), d = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(h, u, E) {
    var v, R = {}, O = null, j = null;
    E !== void 0 && (O = "" + E), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (v in u) g.call(u, v) && !C.hasOwnProperty(v) && (R[v] = u[v]);
    if (h && h.defaultProps) for (v in u = h.defaultProps, u) R[v] === void 0 && (R[v] = u[v]);
    return { $$typeof: i, type: h, key: O, ref: j, props: R, _owner: T.current };
  }
  return W.Fragment = d, W.jsx = P, W.jsxs = P, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function yr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = B, i = Symbol.for("react.element"), d = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), h = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), k = Symbol.iterator, K = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = k && e[k] || e[K];
      return typeof r == "function" ? r : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var a = A.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Fe = !1, $e = !1, Ie = !1, We = !1, Ye = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === C || Ye || e === T || e === E || e === v || We || e === j || Fe || $e || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === P || e.$$typeof === h || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case d:
          return "Portal";
        case C:
          return "Profiler";
        case T:
          return "StrictMode";
        case E:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ae(r) + ".Consumer";
          case P:
            var t = e;
            return ae(t._context) + ".Provider";
          case u:
            return Ne(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case O: {
            var c = e, f = c._payload, s = c._init;
            try {
              return w(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, $ = 0, oe, ie, se, ue, ce, fe, le;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Me() {
      {
        if ($ === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Ue() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: ie
            }),
            warn: S({}, e, {
              value: se
            }),
            error: S({}, e, {
              value: ue
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        $ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = A.ReactCurrentDispatcher, z;
    function N(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            z = a && a[1] || "";
          }
        return `
` + z + e;
      }
    }
    var H = !1, M;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ve();
    }
    function pe(e, r) {
      if (!e || H)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = G.current, G.current = null, Me();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (_) {
              a = _;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var o = _.stack.split(`
`), b = a.stack.split(`
`), l = o.length - 1, p = b.length - 1; l >= 1 && p >= 0 && o[l] !== b[p]; )
            p--;
          for (; l >= 1 && p >= 0; l--, p--)
            if (o[l] !== b[p]) {
              if (l !== 1 || p !== 1)
                do
                  if (l--, p--, p < 0 || o[l] !== b[p]) {
                    var m = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, m), m;
                  }
                while (l >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = f, Ue(), Error.prepareStackTrace = c;
      }
      var F = e ? e.displayName || e.name : "", x = F ? N(F) : "";
      return typeof e == "function" && M.set(e, x), x;
    }
    function Je(e, r, t) {
      return pe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, qe(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case E:
          return N("Suspense");
        case v:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Je(e.render);
          case R:
            return U(e.type, r, t);
          case O: {
            var a = e, c = a._payload, f = a._init;
            try {
              return U(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, he = A.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, c) {
      {
        var f = Function.call.bind(I);
        for (var s in e)
          if (f(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var b = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (V(c), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), V(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, V(c), y("Failed %s type: %s", t, o.message), V(null));
          }
      }
    }
    var Ke = Array.isArray;
    function X(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (ze(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ye(e);
    }
    var ge = A.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, me;
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, c, f, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, a, c) {
      {
        var f, s = {}, o = null, b = null;
        t !== void 0 && (be(t), o = "" + t), Ze(r) && (be(r.key), o = "" + r.key), Xe(r) && (b = r.ref, Qe(r, c));
        for (f in r)
          I.call(r, f) && !He.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (f in l)
            s[f] === void 0 && (s[f] = l[f]);
        }
        if (o || b) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(s, p), b && rr(s, p);
        }
        return tr(e, o, b, c, a, ge.current, s);
      }
    }
    var Z = A.ReactCurrentOwner, Ee = A.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Re() {
      {
        if (Z.current) {
          var e = w(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Oe = {};
    function or(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Z.current && (a = " It was passed a child from " + w(e._owner.type) + "."), D(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ee(a) && Te(a, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ae(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), s; !(s = f.next()).done; )
              ee(s.value) && Te(s.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = w(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Ce = {};
    function Pe(e, r, t, a, c, f) {
      {
        var s = Le(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar();
          b ? o += b : o += Re();
          var l;
          e === null ? l = "null" : X(e) ? l = "array" : e !== void 0 && e.$$typeof === i ? (l = "<" + (w(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var p = nr(e, r, t, c, f);
        if (p == null)
          return p;
        if (s) {
          var m = r.children;
          if (m !== void 0)
            if (a)
              if (X(m)) {
                for (var F = 0; F < m.length; F++)
                  we(m[F], e);
                Object.freeze && Object.freeze(m);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(m, e);
        }
        if (I.call(r, "key")) {
          var x = w(e), _ = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), re = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[x + re]) {
            var dr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, x, dr, x), Ce[x + re] = !0;
          }
        }
        return e === g ? sr(p) : ir(p), p;
      }
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var fr = cr, lr = ur;
    Y.Fragment = g, Y.jsx = fr, Y.jsxs = lr;
  }()), Y;
}
var je;
function br() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? J.exports = hr() : J.exports = yr()), J.exports;
}
var gr = br();
const _r = ({ userName: n }) => /* @__PURE__ */ gr.jsxs("div", { children: [
  "Hello, ",
  n,
  "!"
] });
var mr = Object.defineProperty, Er = (n, i, d) => i in n ? mr(n, i, { enumerable: !0, configurable: !0, writable: !0, value: d }) : n[i] = d, L = (n, i, d) => (Er(n, typeof i != "symbol" ? i + "" : i, d), d), te, q = vr;
if (process.env.NODE_ENV === "production")
  te = q.createRoot, q.hydrateRoot;
else {
  var ke = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  te = function(n, i) {
    ke.usingClientEntryPoint = !0;
    try {
      return q.createRoot(n, i);
    } finally {
      ke.usingClientEntryPoint = !1;
    }
  };
}
const Rr = {
  stringify: (n) => n,
  parse: (n) => n
}, Or = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, Tr = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, wr = {
  stringify: (n) => n.name,
  parse: (n, i) => {
    const d = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof d == "function" ? d.bind(i) : void 0;
  }
}, Cr = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => typeof n == "string" ? JSON.parse(n) : n
}, Pr = {
  string: Rr,
  number: Or,
  boolean: Tr,
  function: wr,
  json: Cr
}, Sr = "__reactProps";
function xr(n, i, d) {
  i.props || (i.props = n.propTypes ? Object.keys(n.propTypes) : []);
  const g = (Array.isArray(i.props) ? i.props.slice() : Object.keys(i.props)).filter((h) => h !== "container"), T = {}, C = {};
  for (const h of g) {
    T[h] = Array.isArray(i.props) ? "string" : i.props[h];
    const u = jr(h);
    C[h] = u;
  }
  class P extends HTMLElement {
    constructor() {
      super(), L(this, "connected", !1), L(this, "context"), L(this, "_props", {}), L(this, "container"), L(this, "observer"), this.observer = new MutationObserver(
        (u) => this.attributesChanged(u)
      ), this.observer.observe(this, { attributes: !0 }), i.shadow ? this.container = this.attachShadow({
        mode: i.shadow
      }) : this.container = this, this._props.container = this.container;
    }
    set props(u) {
      this._props = {
        ...this._props,
        ...u
      }, this.update();
    }
    get props() {
      return this._props;
    }
    connectedCallback() {
      this.connected = !0;
      for (const u of g)
        this.setProps(u);
      this.mount();
    }
    disconnectedCallback() {
      this.connected = !1, this.observer.disconnect(), this.unmount();
    }
    attributesChanged(u) {
      u.forEach(({ attributeName: E }) => {
        this.setProps(E);
      }), this.update();
    }
    setProps(u) {
      const E = Object.keys(this).find((K) => K.includes(Sr)), v = E ? this[E] : {}, R = C[u], O = v[u] ?? this.getAttribute(R), j = T[u], k = Pr[j];
      u in v ? this._props[u] = O : O && k != null && k.parse && (this._props[u] = k.parse(O, this));
    }
    update() {
      this.connected && this.context && d.update(this.context, this.props);
    }
    mount() {
      if (!this.connected)
        throw new Error(`${n} is not in a DOM`);
      if (this.context)
        throw new Error(`${n} is already mounted`);
      this.context = d.mount(this.container, n, this.props);
    }
    unmount() {
      this.context && d.unmount(this.context);
    }
  }
  return P;
}
function jr(n = "") {
  return n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
const kr = (n, i, d) => {
  const g = te(n), T = B.createElement(i, d);
  return g.render(T), {
    root: g,
    ReactComponent: i
  };
}, Ar = ({ root: n, ReactComponent: i }, d) => {
  const g = B.createElement(i, d);
  n.render(g);
}, Dr = ({ root: n }) => {
  n.unmount();
}, Fr = (n, i = {}) => xr(n, i, { mount: kr, update: Ar, unmount: Dr });
customElements.define("wc-test-component", Fr(_r, { shadow: "closed", props: { userName: "string" } }));
