var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.634fcf15b242a883d407.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 448: function (e, t, n) { var r = n(294), a = n(840); function l(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var o = new Set, i = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (i[e] = t, e = 0; e < t.length; e++)
            o.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {}; function m(e, t, n, r, a, l, o) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function y(e) { return e[1].toUpperCase(); } function b(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), T = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var D = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var M = Symbol.iterator; function O(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = M && e[M] || e["@@iterator"]) ? e : null; } var U, F = Object.assign; function j(e) { if (void 0 === U)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                U = t && t[1] || "";
            } return "\n" + U + e; } var I = !1; function A(e, t) { if (!e || I)
            return ""; I = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i];)
                    i--;
                for (; 1 <= o && 0 <= i; o--, i--)
                    if (a[o] !== l[i]) {
                        if (1 !== o || 1 !== i)
                            do {
                                if (o--, 0 > --i || a[o] !== l[i]) {
                                    var u = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= o && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            I = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? j(e) : ""; } function B(e) { switch (e.tag) {
            case 5: return j(e.type);
            case 16: return j("Lazy");
            case 13: return j("Suspense");
            case 19: return j("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function $(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case x: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case E: return "StrictMode";
            case L: return "Suspense";
            case N: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case P: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case R:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case z: return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
                case T:
                    t = e._payload, e = e._init;
                    try {
                        return $(e(t));
                    }
                    catch (e) { }
            } return null; } function W(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return $(t);
            case 8: return t === E ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function H(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function V(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function Q(e) { e._valueTracker || (e._valueTracker = function (e) { var t = V(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, l = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, l.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function q(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function K(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function Y(e, t) { var n = t.checked; return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = H(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function G(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); } function J(e, t) { G(e, t); var n = H(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function Z(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(l(91)); return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(l(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(l(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: H(n) }; } function le(e, t) { var n = H(t.value), r = H(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function oe(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function ie(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce, fe = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce); function de(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"]; function me(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; } function ve(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(pe).forEach((function (e) { he.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); })); var ge = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function ye(e, t) { if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(l(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(l(62));
        } } function be(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var we = null; function ke(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Se = null, xe = null, Ee = null; function Ce(e) { if (e = ba(e)) {
            if ("function" != typeof Se)
                throw Error(l(280));
            var t = e.stateNode;
            t && (t = ka(t), Se(e.stateNode, e.type, t));
        } } function _e(e) { xe ? Ee ? Ee.push(e) : Ee = [e] : xe = e; } function Pe() { if (xe) {
            var e = xe, t = Ee;
            if (Ee = xe = null, Ce(e), t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e]);
        } } function Re(e, t) { return e(t); } function Le() { } var Ne = !1; function ze(e, t, n) { if (Ne)
            return e(t, n); Ne = !0; try {
            return Re(e, t, n);
        }
        finally {
            Ne = !1, (null !== xe || null !== Ee) && (Le(), Pe());
        } } function Te(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ka(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(l(231, t, typeof n)); return n; } var De = !1; if (c)
            try {
                var Me = {};
                Object.defineProperty(Me, "passive", { get: function () { De = !0; } }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me);
            }
            catch (ce) {
                De = !1;
            } function Oe(e, t, n, r, a, l, o, i, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var Ue = !1, Fe = null, je = !1, Ie = null, Ae = { onError: function (e) { Ue = !0, Fe = e; } }; function Be(e, t, n, r, a, l, o, i, u) { Ue = !1, Fe = null, Oe.apply(Ae, arguments); } function $e(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 != (4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function We(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function He(e) { if ($e(e) !== e)
            throw Error(l(188)); } function Ve(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = $e(e)))
                throw Error(l(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var o = a.alternate;
            if (null === o) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === o.child) {
                for (o = a.child; o;) {
                    if (o === n)
                        return He(a), e;
                    if (o === r)
                        return He(a), t;
                    o = o.sibling;
                }
                throw Error(l(188));
            }
            if (n.return !== r.return)
                n = a, r = o;
            else {
                for (var i = !1, u = a.child; u;) {
                    if (u === n) {
                        i = !0, n = a, r = o;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = a, n = o;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            i = !0, n = o, r = a;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = o, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i)
                        throw Error(l(189));
                }
            }
            if (n.alternate !== r)
                throw Error(l(190));
        } if (3 !== n.tag)
            throw Error(l(188)); return n.stateNode.current === n ? e : t; }(e)) ? Qe(e) : null; } function Qe(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = Qe(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var qe = a.unstable_scheduleCallback, Ke = a.unstable_cancelCallback, Ye = a.unstable_shouldYield, Xe = a.unstable_requestPaint, Ge = a.unstable_now, Je = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority, nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, lt = null, ot = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (it(e) / ut | 0) | 0; }, it = Math.log, ut = Math.LN2, st = 64, ct = 4194304; function ft(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
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
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function dt(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, l = e.pingedLanes, o = 268435455 & n; if (0 !== o) {
            var i = o & ~a;
            0 !== i ? r = ft(i) : 0 != (l &= o) && (r = ft(l));
        }
        else
            0 != (o = n & ~a) ? r = ft(o) : 0 !== l && (r = ft(l)); if (0 === r)
            return 0; if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 != (4194240 & l)))
            return t; if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a; return r; } function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
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
            case 2097152: return t + 5e3;
            default: return -1;
        } } function ht(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function mt() { var e = st; return 0 == (4194240 & (st <<= 1)) && (st = 64), e; } function vt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n; } function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - ot(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var bt = 0; function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1; } var kt, St, xt, Et, Ct, _t = !1, Pt = [], Rt = null, Lt = null, Nt = null, zt = new Map, Tt = new Map, Dt = [], Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Ot(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Rt = null;
                break;
            case "dragenter":
            case "dragleave":
                Lt = null;
                break;
            case "mouseover":
            case "mouseout":
                Nt = null;
                break;
            case "pointerover":
            case "pointerout":
                zt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": Tt.delete(t.pointerId);
        } } function Ut(e, t, n, r, a, l) { return null === e || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, null !== t && null !== (t = ba(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ft(e) { var t = ya(e.target); if (null !== t) {
            var n = $e(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = We(n)))
                        return e.blockedOn = t, void Ct(e.priority, (function () { xt(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function jt(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; } function It(e, t, n) { jt(e) && n.delete(t); } function At() { _t = !1, null !== Rt && jt(Rt) && (Rt = null), null !== Lt && jt(Lt) && (Lt = null), null !== Nt && jt(Nt) && (Nt = null), zt.forEach(It), Tt.forEach(It); } function Bt(e, t) { e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, At))); } function $t(e) { function t(t) { return Bt(t, e); } if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
                var r = Pt[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Rt && Bt(Rt, e), null !== Lt && Bt(Lt, e), null !== Nt && Bt(Nt, e), zt.forEach(t), Tt.forEach(t), n = 0; n < Dt.length; n++)
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;)
            Ft(n), null === n.blockedOn && Dt.shift(); } var Wt = w.ReactCurrentBatchConfig, Ht = !0; function Vt(e, t, n, r) { var a = bt, l = Wt.transition; Wt.transition = null; try {
            bt = 1, qt(e, t, n, r);
        }
        finally {
            bt = a, Wt.transition = l;
        } } function Qt(e, t, n, r) { var a = bt, l = Wt.transition; Wt.transition = null; try {
            bt = 4, qt(e, t, n, r);
        }
        finally {
            bt = a, Wt.transition = l;
        } } function qt(e, t, n, r) { if (Ht) {
            var a = Yt(e, t, n, r);
            if (null === a)
                Hr(e, t, r, Kt, n), Ot(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Rt = Ut(Rt, e, t, n, r, a), !0;
                case "dragenter": return Lt = Ut(Lt, e, t, n, r, a), !0;
                case "mouseover": return Nt = Ut(Nt, e, t, n, r, a), !0;
                case "pointerover":
                    var l = a.pointerId;
                    return zt.set(l, Ut(zt.get(l) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return l = a.pointerId, Tt.set(l, Ut(Tt.get(l) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (Ot(e, r), 4 & t && -1 < Mt.indexOf(e)) {
                for (; null !== a;) {
                    var l = ba(a);
                    if (null !== l && kt(l), null === (l = Yt(e, t, n, r)) && Hr(e, t, r, Kt, n), l === a)
                        break;
                    a = l;
                }
                null !== a && r.stopPropagation();
            }
            else
                Hr(e, t, r, null, n);
        } } var Kt = null; function Yt(e, t, n, r) { if (Kt = null, null !== (e = ya(e = ke(r))))
            if (null === (t = $e(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = We(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Kt = e, null; } function Xt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Je()) {
                case Ze: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Gt = null, Jt = null, Zt = null; function en() { if (Zt)
            return Zt; var e, t, n = Jt, r = n.length, a = "value" in Gt ? Gt.value : Gt.textContent, l = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === a[l - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function nn() { return !0; } function rn() { return !1; } function an(e) { function t(t, n, r, a, l) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return F(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; } var ln, on, un, sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = an(sn), fn = F({}, sn, { view: 0, detail: 0 }), dn = an(fn), pn = F({}, fn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (ln = e.screenX - un.screenX, on = e.screenY - un.screenY) : on = ln = 0, un = e), ln); }, movementY: function (e) { return "movementY" in e ? e.movementY : on; } }), hn = an(pn), mn = an(F({}, pn, { dataTransfer: 0 })), vn = an(F({}, fn, { relatedTarget: 0 })), gn = an(F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yn = F({}, sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bn = an(yn), wn = an(F({}, sn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, xn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function En(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e]; } function Cn() { return En; } var _n = F({}, fn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Pn = an(_n), Rn = an(F({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Ln = an(F({}, fn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })), Nn = an(F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), zn = F({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Tn = an(zn), Dn = [9, 13, 27, 32], Mn = c && "CompositionEvent" in window, On = null; c && "documentMode" in document && (On = document.documentMode); var Un = c && "TextEvent" in window && !On, Fn = c && (!Mn || On && 8 < On && 11 >= On), jn = String.fromCharCode(32), In = !1; function An(e, t) { switch (e) {
            case "keyup": return -1 !== Dn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function Bn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var $n = !1, Wn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Hn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Wn[e.type] : "textarea" === t; } function Vn(e, t, n, r) { _e(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Qn = null, qn = null; function Kn(e) { jr(e, 0); } function Yn(e) { if (q(wa(e)))
            return e; } function Xn(e, t) { if ("change" === e)
            return t; } var Gn = !1; if (c) {
            var Jn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput;
                }
                Jn = Zn;
            }
            else
                Jn = !1;
            Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        } function tr() { Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null); } function nr(e) { if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Vn(t, qn, e, ke(e)), ze(Kn, t);
        } } function rr(e, t, n) { "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); } function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn); } function lr(e, t) { if ("click" === e)
            return Yn(t); } function or(e, t) { if ("input" === e || "change" === e)
            return Yn(t); } var ir = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ur(e, t) { if (ir(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a]))
                return !1;
        } return !0; } function sr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function cr(e, t) { var n, r = sr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = sr(r);
        } } function fr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function dr() { for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = K((e = t.contentWindow).document);
        } return t; } function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function hr(e) { var t = dr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, l = Math.min(r.start, a);
                    r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = cr(n, l);
                    var o = cr(n, r);
                    a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null, br = !1; function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; br || null == vr || vr !== K(r) || (r = "selectionStart" in (r = vr) && pr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && ur(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr))); } function kr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var Sr = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, xr = {}, Er = {}; function Cr(e) { if (xr[e])
            return xr[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in Er)
                return xr[e] = n[t]; return e; } c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition); var _r = Cr("animationend"), Pr = Cr("animationiteration"), Rr = Cr("animationstart"), Lr = Cr("transitionend"), Nr = new Map, zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function Tr(e, t) { Nr.set(e, t), u(t, [e]); } for (var Dr = 0; Dr < zr.length; Dr++) {
            var Mr = zr[Dr];
            Tr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        } Tr(_r, "onAnimationEnd"), Tr(Pr, "onAnimationIteration"), Tr(Rr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(Lr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ur = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or)); function Fr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, o, i, u, s) { if (Be.apply(this, arguments), Ue) {
            if (!Ue)
                throw Error(l(198));
            var c = Fe;
            Ue = !1, Fe = null, je || (je = !0, Ie = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function jr(e, t) { t = 0 != (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), l = u;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), l = u;
                    }
            }
        } if (je)
            throw e = Ie, je = !1, Ie = null, e; } function Ir(e, t) { var n = t[ma]; void 0 === n && (n = t[ma] = new Set); var r = e + "__bubble"; n.has(r) || (Wr(t, e, 2, !1), n.add(r)); } function Ar(e, t, n) { var r = 0; t && (r |= 4), Wr(n, e, r, t); } var Br = "_reactListening" + Math.random().toString(36).slice(2); function $r(e) { if (!e[Br]) {
            e[Br] = !0, o.forEach((function (t) { "selectionchange" !== t && (Ur.has(t) || Ar(t, !1, e), Ar(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || (t[Br] = !0, Ar("selectionchange", !1, t));
        } } function Wr(e, t, n, r) { switch (Xt(t)) {
            case 1:
                var a = Vt;
                break;
            case 4:
                a = Qt;
                break;
            default: a = qt;
        } n = a.bind(null, t, n, e), a = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Hr(e, t, n, r, a) { var l = r; if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var i = r.stateNode.containerInfo;
                    if (i === a || 8 === i.nodeType && i.parentNode === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var u = o.tag;
                            if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            o = o.return;
                        }
                    for (; null !== i;) {
                        if (null === (o = ya(i)))
                            return;
                        if (5 === (u = o.tag) || 6 === u) {
                            r = l = o;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            } ze((function () { var r = l, a = ke(n), o = []; e: {
            var i = Nr.get(e);
            if (void 0 !== i) {
                var u = cn, s = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = Pn;
                        break;
                    case "focusin":
                        s = "focus", u = vn;
                        break;
                    case "focusout":
                        s = "blur", u = vn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = vn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = hn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = Ln;
                        break;
                    case _r:
                    case Pr:
                    case Rr:
                        u = gn;
                        break;
                    case Lr:
                        u = Nn;
                        break;
                    case "scroll":
                        u = dn;
                        break;
                    case "wheel":
                        u = Tn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = bn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Rn;
                }
                var c = 0 != (4 & t), f = !c && "scroll" === e, d = c ? null !== i ? i + "Capture" : null : i;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== d && null != (m = Te(h, d)) && c.push(Vr(h, m, p))), f)
                        break;
                    h = h.return;
                }
                0 < c.length && (i = new u(i, s, null, n, a), o.push({ event: i, listeners: c }));
            }
        } if (0 == (7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ha]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (f = $e(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = hn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Rn, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? i : wa(u), p = null == s ? i : wa(s), (i = new c(m, h + "leave", u, n, a)).target = f, i.relatedTarget = p, m = null, ya(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, m = c), f = m, u && s)
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = qr(p))
                            h++;
                        for (p = 0, m = d; m; m = qr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = qr(c), h--;
                        for (; 0 < p - h;)
                            d = qr(d), p--;
                        for (; h--;) {
                            if (c === d || null !== d && c === d.alternate)
                                break e;
                            c = qr(c), d = qr(d);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Kr(o, i, u, c, !1), null !== s && null !== f && Kr(o, f, s, c, !0);
            }
            if ("select" === (u = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                var v = Xn;
            else if (Hn(i))
                if (Gn)
                    v = or;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = lr);
            switch (v && (v = v(e, r)) ? Vn(o, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Hn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                    break;
                case "focusout":
                    yr = gr = vr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(o, n, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(o, n, a);
            }
            var y;
            if (Mn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                $n ? An(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Fn && "ko" !== n.locale && ($n || "onCompositionStart" !== b ? "onCompositionEnd" === b && $n && (y = en()) : (Jt = "value" in (Gt = a) ? Gt.value : Gt.textContent, $n = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({ event: b, listeners: g }), (y || null !== (y = Bn(n))) && (b.data = y))), (y = Un ? function (e, t) { switch (e) {
                case "compositionend": return Bn(t);
                case "keypress": return 32 !== t.which ? null : (In = !0, jn);
                case "textInput": return (e = t.data) === jn && In ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if ($n)
                return "compositionend" === e || !Mn && An(e, t) ? (e = en(), Zt = Jt = Gt = null, $n = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Fn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({ event: a, listeners: r }), a.data = y);
        } jr(o, t); })); } function Vr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Qr(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, l = a.stateNode;
            5 === a.tag && null !== l && (a = l, null != (l = Te(e, n)) && r.unshift(Vr(e, l, a)), null != (l = Te(e, t)) && r.push(Vr(e, l, a))), e = e.return;
        } return r; } function qr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Kr(e, t, n, r, a) { for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (null !== u && u === r)
                break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = Te(n, l)) && o.unshift(Vr(n, u, i)) : a || null != (u = Te(n, l)) && o.push(Vr(n, u, i))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g; function Gr(e) { return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, ""); } function Jr(e, t, n) { if (t = Gr(t), Gr(e) !== t && n)
            throw Error(l(425)); } function Zr() { } var ea = null, ta = null; function na(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var ra = "function" == typeof setTimeout ? setTimeout : void 0, aa = "function" == typeof clearTimeout ? clearTimeout : void 0, la = "function" == typeof Promise ? Promise : void 0, oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== la ? function (e) { return la.resolve(null).then(e).catch(ia); } : ra; function ia(e) { setTimeout((function () { throw e; })); } function ua(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void $t(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); $t(t); } function sa(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function ca(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var fa = Math.random().toString(36).slice(2), da = "__reactFiber$" + fa, pa = "__reactProps$" + fa, ha = "__reactContainer$" + fa, ma = "__reactEvents$" + fa, va = "__reactListeners$" + fa, ga = "__reactHandles$" + fa; function ya(e) { var t = e[da]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[ha] || n[da]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = ca(e); null !== e;) {
                        if (n = e[da])
                            return n;
                        e = ca(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ba(e) { return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(l(33)); } function ka(e) { return e[pa] || null; } var Sa = [], xa = -1; function Ea(e) { return { current: e }; } function Ca(e) { 0 > xa || (e.current = Sa[xa], Sa[xa] = null, xa--); } function _a(e, t) { xa++, Sa[xa] = e.current, e.current = t; } var Pa = {}, Ra = Ea(Pa), La = Ea(!1), Na = Pa; function za(e, t) { var n = e.type.contextTypes; if (!n)
            return Pa; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, l = {}; for (a in n)
            l[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l; } function Ta(e) { return null != e.childContextTypes; } function Da() { Ca(La), Ca(Ra); } function Ma(e, t, n) { if (Ra.current !== Pa)
            throw Error(l(168)); _a(Ra, t), _a(La, n); } function Oa(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(l(108, W(e) || "Unknown", a)); return F({}, n, r); } function Ua(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Na = Ra.current, _a(Ra, e), _a(La, La.current), !0; } function Fa(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(l(169)); n ? (e = Oa(e, t, Na), r.__reactInternalMemoizedMergedChildContext = e, Ca(La), Ca(Ra), _a(Ra, e)) : Ca(La), _a(La, n); } var ja = null, Ia = !1, Aa = !1; function Ba(e) { null === ja ? ja = [e] : ja.push(e); } function $a() { if (!Aa && null !== ja) {
            Aa = !0;
            var e = 0, t = bt;
            try {
                var n = ja;
                for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                ja = null, Ia = !1;
            }
            catch (t) {
                throw null !== ja && (ja = ja.slice(e + 1)), qe(Ze, $a), t;
            }
            finally {
                bt = t, Aa = !1;
            }
        } return null; } var Wa = [], Ha = 0, Va = null, Qa = 0, qa = [], Ka = 0, Ya = null, Xa = 1, Ga = ""; function Ja(e, t) { Wa[Ha++] = Qa, Wa[Ha++] = Va, Va = e, Qa = t; } function Za(e, t, n) { qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Ya = e; var r = Xa; e = Ga; var a = 32 - ot(r) - 1; r &= ~(1 << a), n += 1; var l = 32 - ot(t) + a; if (30 < l) {
            var o = a - a % 5;
            l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Xa = 1 << 32 - ot(t) + a | n << a | r, Ga = l + e;
        }
        else
            Xa = 1 << l | n << a | r, Ga = e; } function el(e) { null !== e.return && (Ja(e, 1), Za(e, 1, 0)); } function tl(e) { for (; e === Va;)
            Va = Wa[--Ha], Wa[Ha] = null, Qa = Wa[--Ha], Wa[Ha] = null; for (; e === Ya;)
            Ya = qa[--Ka], qa[Ka] = null, Ga = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null; } var nl = null, rl = null, al = !1, ll = null; function ol(e, t) { var n = Ts(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function il(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = sa(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? { id: Xa, overflow: Ga } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Ts(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
            default: return !1;
        } } function ul(e) { return 0 != (1 & e.mode) && 0 == (128 & e.flags); } function sl(e) { if (al) {
            var t = rl;
            if (t) {
                var n = t;
                if (!il(e, t)) {
                    if (ul(e))
                        throw Error(l(418));
                    t = sa(n.nextSibling);
                    var r = nl;
                    t && il(e, t) ? ol(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e);
                }
            }
            else {
                if (ul(e))
                    throw Error(l(418));
                e.flags = -4097 & e.flags | 2, al = !1, nl = e;
            }
        } } function cl(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; nl = e; } function fl(e) { if (e !== nl)
            return !1; if (!al)
            return cl(e), al = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
            if (ul(e))
                throw dl(), Error(l(418));
            for (; t;)
                ol(e, t), t = sa(t.nextSibling);
        } if (cl(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(l(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                rl = sa(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                rl = null;
            }
        }
        else
            rl = nl ? sa(e.stateNode.nextSibling) : null; return !0; } function dl() { for (var e = rl; e;)
            e = sa(e.nextSibling); } function pl() { rl = nl = null, al = !1; } function hl(e) { null === ll ? ll = [e] : ll.push(e); } var ml = w.ReactCurrentBatchConfig; function vl(e, t) { if (e && e.defaultProps) {
            for (var n in t = F({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } var gl = Ea(null), yl = null, bl = null, wl = null; function kl() { wl = bl = yl = null; } function Sl(e) { var t = gl.current; Ca(gl), e._currentValue = t; } function xl(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function El(e, t) { yl = e, wl = bl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wi = !0), e.firstContext = null); } function Cl(e) { var t = e._currentValue; if (wl !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === bl) {
                if (null === yl)
                    throw Error(l(308));
                bl = e, yl.dependencies = { lanes: 0, firstContext: e };
            }
            else
                bl = bl.next = e; return t; } var _l = null; function Pl(e) { null === _l ? _l = [e] : _l.push(e); } function Rl(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, Pl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ll(e, r); } function Ll(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var Nl = !1; function zl(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function Tl(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function Dl(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function Ml(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 != (2 & Lu)) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ll(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, Pl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ll(e, n); } function Ol(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } function Ul(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === l ? a = l = o : l = l.next = o, n = n.next;
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t;
            }
            else
                a = l = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function Fl(e, t, n, r) { var a = e.updateQueue; Nl = !1; var l = a.firstBaseUpdate, o = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === o ? l = s : o.next = s, o = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l;;) {
                var d = i.lane, p = i.eventTime;
                if ((r & d) === d) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                    e: {
                        var h = e, m = i;
                        switch (d = t, p = n, m.tag) {
                            case 1:
                                if ("function" == typeof (h = m.payload)) {
                                    f = h.call(p, f, d);
                                    break e;
                                }
                                f = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null == (d = "function" == typeof (h = m.payload) ? h.call(p, f, d) : h))
                                    break e;
                                f = F({}, f, d);
                                break e;
                            case 2: Nl = !0;
                        }
                    }
                    null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [i] : d.push(i));
                }
                else
                    p = { eventTime: p, lane: d, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = p, u = f) : c = c.next = p, o |= d;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (d = i).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
                }
            }
            if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    o |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === l && (a.shared.lanes = 0);
            Fu |= o, e.lanes = o, e.memoizedState = f;
        } } function jl(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(l(191, a));
                    a.call(r);
                }
            } } var Il = (new r.Component).refs; function Al(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var Bl = { isMounted: function (e) { return !!(e = e._reactInternals) && $e(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = Dl(r, a); l.payload = t, null != n && (l.callback = n), null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Ol(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = Dl(r, a); l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Ol(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ts(), r = ns(e), a = Dl(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = Ml(e, a, r)) && (rs(t, e, r, n), Ol(t, e, r)); } }; function $l(e, t, n, r, a, l, o) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(a, l)); } function Wl(e, t, n) { var r = !1, a = Pa, l = t.contextType; return "object" == typeof l && null !== l ? l = Cl(l) : (a = Ta(t) ? Na : Ra.current, l = (r = null != (r = t.contextTypes)) ? za(e, a) : Pa), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t; } function Hl(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null); } function Vl(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = Il, zl(e); var l = t.contextType; "object" == typeof l && null !== l ? a.context = Cl(l) : (l = Ta(t) ? Na : Ra.current, a.context = za(e, l)), a.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (Al(e, t, l, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bl.enqueueReplaceState(a, a.state, null), Fl(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function Ql(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(l(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(l(147, e));
                var a = r, o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) { var t = a.refs; t === Il && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e; }, t._stringRef = o, t);
            }
            if ("string" != typeof e)
                throw Error(l(284));
            if (!n._owner)
                throw Error(l(290, e));
        } return e; } function ql(e, t) { throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Kl(e) { return (0, e._init)(e._payload); } function Yl(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = Ms(e, t)).index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = js(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var l = n.type; return l === x ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === T && Kl(l) === t.type) ? ((r = a(t, n.props)).ref = Ql(e, t, n), r.return = e, r) : ((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function f(e, t, n, r, l) { return null === t || 7 !== t.tag ? ((t = Us(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t); } function d(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = js("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(e, null, t), n.return = e, n;
                case S: return (t = Is(t, e.mode, n)).return = e, t;
                case T: return d(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || O(t))
                return (t = Us(t, e.mode, n, null)).return = e, t;
            ql(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case T: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || O(n))
                return null !== a ? null : f(e, t, n, r, null);
            ql(e, n);
        } return null; } function h(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case T: return h(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || O(r))
                return f(t, e = e.get(n) || null, r, a, null);
            ql(t, r);
        } return null; } function m(a, l, i, u) { for (var s = null, c = null, f = l, m = l = 0, v = null; null !== f && m < i.length; m++) {
            f.index > m ? (v = f, f = null) : v = f.sibling;
            var g = p(a, f, i[m], u);
            if (null === g) {
                null === f && (f = v);
                break;
            }
            e && f && null === g.alternate && t(a, f), l = o(g, l, m), null === c ? s = g : c.sibling = g, c = g, f = v;
        } if (m === i.length)
            return n(a, f), al && Ja(a, m), s; if (null === f) {
            for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) && (l = o(f, l, m), null === c ? s = f : c.sibling = f, c = f);
            return al && Ja(a, m), s;
        } for (f = r(a, f); m < i.length; m++)
            null !== (v = h(f, a, m, i[m], u)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), l = o(v, l, m), null === c ? s = v : c.sibling = v, c = v); return e && f.forEach((function (e) { return t(a, e); })), al && Ja(a, m), s; } function v(a, i, u, s) { var c = O(u); if ("function" != typeof c)
            throw Error(l(150)); if (null == (u = c.call(u)))
            throw Error(l(151)); for (var f = c = null, m = i, v = i = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
            m.index > v ? (g = m, m = null) : g = m.sibling;
            var b = p(a, m, y.value, s);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && t(a, m), i = o(b, i, v), null === f ? c = b : f.sibling = b, f = b, m = g;
        } if (y.done)
            return n(a, m), al && Ja(a, v), c; if (null === m) {
            for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) && (i = o(y, i, v), null === f ? c = y : f.sibling = y, f = y);
            return al && Ja(a, v), c;
        } for (m = r(a, m); !y.done; v++, y = u.next())
            null !== (y = h(m, a, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), i = o(y, i, v), null === f ? c = y : f.sibling = y, f = y); return e && m.forEach((function (e) { return t(a, e); })), al && Ja(a, v), c; } return function e(r, l, o, u) { if ("object" == typeof o && null !== o && o.type === x && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
            switch (o.$$typeof) {
                case k:
                    e: {
                        for (var s = o.key, c = l; null !== c;) {
                            if (c.key === s) {
                                if ((s = o.type) === x) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (l = a(c, o.props.children)).return = r, r = l;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === T && Kl(s) === c.type) {
                                    n(r, c.sibling), (l = a(c, o.props)).ref = Ql(r, c, o), l.return = r, r = l;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        o.type === x ? ((l = Us(o.props.children, r.mode, u, o.key)).return = r, r = l) : ((u = Os(o.type, o.key, o.props, null, r.mode, u)).ref = Ql(r, l, o), u.return = r, r = u);
                    }
                    return i(r);
                case S:
                    e: {
                        for (c = o.key; null !== l;) {
                            if (l.key === c) {
                                if (4 === l.tag && l.stateNode.containerInfo === o.containerInfo && l.stateNode.implementation === o.implementation) {
                                    n(r, l.sibling), (l = a(l, o.children || [])).return = r, r = l;
                                    break e;
                                }
                                n(r, l);
                                break;
                            }
                            t(r, l), l = l.sibling;
                        }
                        (l = Is(o, r.mode, u)).return = r, r = l;
                    }
                    return i(r);
                case T: return e(r, l, (c = o._init)(o._payload), u);
            }
            if (te(o))
                return m(r, l, o, u);
            if (O(o))
                return v(r, l, o, u);
            ql(r, o);
        } return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, o)).return = r, r = l) : (n(r, l), (l = js(o, r.mode, u)).return = r, r = l), i(r)) : n(r, l); }; } var Xl = Yl(!0), Gl = Yl(!1), Jl = {}, Zl = Ea(Jl), eo = Ea(Jl), to = Ea(Jl); function no(e) { if (e === Jl)
            throw Error(l(174)); return e; } function ro(e, t) { switch (_a(to, t), _a(eo, e), _a(Zl, Jl), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } Ca(Zl), _a(Zl, t); } function ao() { Ca(Zl), Ca(eo), Ca(to); } function lo(e) { no(to.current); var t = no(Zl.current), n = ue(t, e.type); t !== n && (_a(eo, e), _a(Zl, n)); } function oo(e) { eo.current === e && (Ca(Zl), Ca(eo)); } var io = Ea(0); function uo(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var so = []; function co() { for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null; so.length = 0; } var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, ho = 0, mo = null, vo = null, go = null, yo = !1, bo = !1, wo = 0, ko = 0; function So() { throw Error(l(321)); } function xo(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n]))
                return !1; return !0; } function Eo(e, t, n, r, a, o) { if (ho = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ii : ui, e = n(r, a), bo) {
            o = 0;
            do {
                if (bo = !1, wo = 0, 25 <= o)
                    throw Error(l(301));
                o += 1, go = vo = null, t.updateQueue = null, fo.current = si, e = n(r, a);
            } while (bo);
        } if (fo.current = oi, t = null !== vo && null !== vo.next, ho = 0, go = vo = mo = null, yo = !1, t)
            throw Error(l(300)); return e; } function Co() { var e = 0 !== wo; return wo = 0, e; } function _o() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === go ? mo.memoizedState = go = e : go = go.next = e, go; } function Po() { if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vo.next; var t = null === go ? mo.memoizedState : go.next; if (null !== t)
            go = t, vo = e;
        else {
            if (null === e)
                throw Error(l(310));
            e = { memoizedState: (vo = e).memoizedState, baseState: vo.baseState, baseQueue: vo.baseQueue, queue: vo.queue, next: null }, null === go ? mo.memoizedState = go = e : go = go.next = e;
        } return go; } function Ro(e, t) { return "function" == typeof t ? t(e) : t; } function Lo(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = vo, a = r.baseQueue, o = n.pending; if (null !== o) {
            if (null !== a) {
                var i = a.next;
                a.next = o.next, o.next = i;
            }
            r.baseQueue = a = o, n.pending = null;
        } if (null !== a) {
            o = a.next, r = r.baseState;
            var u = i = null, s = null, c = o;
            do {
                var f = c.lane;
                if ((ho & f) === f)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = d, i = r) : s = s.next = d, mo.lanes |= f, Fu |= f;
                }
                c = c.next;
            } while (null !== c && c !== o);
            null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (wi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                o = a.lane, mo.lanes |= o, Fu |= o, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function No(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, o = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                o = e(o, i.action), i = i.next;
            } while (i !== a);
            ir(o, t.memoizedState) || (wi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o;
        } return [o, r]; } function zo() { } function To(e, t) { var n = mo, r = Po(), a = t(), o = !ir(r.memoizedState, a); if (o && (r.memoizedState = a, wi = !0), r = r.queue, Ho(Oo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== go && 1 & go.memoizedState.tag) {
            if (n.flags |= 2048, Io(9, Mo.bind(null, n, r, a, t), void 0, null), null === Nu)
                throw Error(l(349));
            0 != (30 & ho) || Do(n, t, a);
        } return a; } function Do(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Mo(e, t, n, r) { t.value = n, t.getSnapshot = r, Uo(t) && Fo(e); } function Oo(e, t, n) { return n((function () { Uo(t) && Fo(e); })); } function Uo(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !ir(e, n);
        }
        catch (e) {
            return !0;
        } } function Fo(e) { var t = Ll(e, 1); null !== t && rs(t, e, 1, -1); } function jo(e) { var t = _o(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ro, lastRenderedState: e }, t.queue = e, e = e.dispatch = ni.bind(null, mo, e), [t.memoizedState, e]; } function Io(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Ao() { return Po().memoizedState; } function Bo(e, t, n, r) { var a = _o(); mo.flags |= e, a.memoizedState = Io(1 | t, n, void 0, void 0 === r ? null : r); } function $o(e, t, n, r) { var a = Po(); r = void 0 === r ? null : r; var l = void 0; if (null !== vo) {
            var o = vo.memoizedState;
            if (l = o.destroy, null !== r && xo(r, o.deps))
                return void (a.memoizedState = Io(t, n, l, r));
        } mo.flags |= e, a.memoizedState = Io(1 | t, n, l, r); } function Wo(e, t) { return Bo(8390656, 8, e, t); } function Ho(e, t) { return $o(2048, 8, e, t); } function Vo(e, t) { return $o(4, 2, e, t); } function Qo(e, t) { return $o(4, 4, e, t); } function qo(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Ko(e, t, n) { return n = null != n ? n.concat([e]) : null, $o(4, 4, qo.bind(null, t, e), n); } function Yo() { } function Xo(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function Go(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Jo(e, t, n) { return 0 == (21 & ho) ? (e.baseState && (e.baseState = !1, wi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), mo.lanes |= n, Fu |= n, e.baseState = !0), t); } function Zo(e, t) { var n = bt; bt = 0 !== n && 4 > n ? n : 4, e(!0); var r = po.transition; po.transition = {}; try {
            e(!1), t();
        }
        finally {
            bt = n, po.transition = r;
        } } function ei() { return Po().memoizedState; } function ti(e, t, n) { var r = ns(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ri(e) ? ai(t, n) : null !== (n = Rl(e, t, n, r)) && (rs(n, e, r, ts()), li(n, t, r)); } function ni(e, t, n) { var r = ns(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (ri(e))
            ai(t, a);
        else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, i = l(o, n);
                    if (a.hasEagerState = !0, a.eagerState = i, ir(i, o)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, Pl(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Rl(e, t, a, r)) && (rs(n, e, r, a = ts()), li(n, t, r));
        } } function ri(e) { var t = e.alternate; return e === mo || null !== t && t === mo; } function ai(e, t) { bo = yo = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function li(e, t, n) { if (0 != (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } var oi = { readContext: Cl, useCallback: So, useContext: So, useEffect: So, useImperativeHandle: So, useInsertionEffect: So, useLayoutEffect: So, useMemo: So, useReducer: So, useRef: So, useState: So, useDebugValue: So, useDeferredValue: So, useTransition: So, useMutableSource: So, useSyncExternalStore: So, useId: So, unstable_isNewReconciler: !1 }, ii = { readContext: Cl, useCallback: function (e, t) { return _o().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: Cl, useEffect: Wo, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, Bo(4194308, 4, qo.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Bo(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Bo(4, 2, e, t); }, useMemo: function (e, t) { var n = _o(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = _o(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ti.bind(null, mo, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, _o().memoizedState = e; }, useState: jo, useDebugValue: Yo, useDeferredValue: function (e) { return _o().memoizedState = e; }, useTransition: function () { var e = jo(!1), t = e[0]; return e = Zo.bind(null, e[1]), _o().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = mo, a = _o(); if (al) {
                if (void 0 === n)
                    throw Error(l(407));
                n = n();
            }
            else {
                if (n = t(), null === Nu)
                    throw Error(l(349));
                0 != (30 & ho) || Do(r, t, n);
            } a.memoizedState = n; var o = { value: n, getSnapshot: t }; return a.queue = o, Wo(Oo.bind(null, r, o, e), [e]), r.flags |= 2048, Io(9, Mo.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = _o(), t = Nu.identifierPrefix; if (al) {
                var n = Ga;
                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - ot(Xa) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = ko++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, ui = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Ho, useImperativeHandle: Ko, useInsertionEffect: Vo, useLayoutEffect: Qo, useMemo: Go, useReducer: Lo, useRef: Ao, useState: function () { return Lo(Ro); }, useDebugValue: Yo, useDeferredValue: function (e) { return Jo(Po(), vo.memoizedState, e); }, useTransition: function () { return [Lo(Ro)[0], Po().memoizedState]; }, useMutableSource: zo, useSyncExternalStore: To, useId: ei, unstable_isNewReconciler: !1 }, si = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Ho, useImperativeHandle: Ko, useInsertionEffect: Vo, useLayoutEffect: Qo, useMemo: Go, useReducer: No, useRef: Ao, useState: function () { return No(Ro); }, useDebugValue: Yo, useDeferredValue: function (e) { var t = Po(); return null === vo ? t.memoizedState = e : Jo(t, vo.memoizedState, e); }, useTransition: function () { return [No(Ro)[0], Po().memoizedState]; }, useMutableSource: zo, useSyncExternalStore: To, useId: ei, unstable_isNewReconciler: !1 }; function ci(e, t) { try {
            var n = "", r = t;
            do {
                n += B(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function fi(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function di(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var pi = "function" == typeof WeakMap ? WeakMap : Map; function hi(e, t, n) { (n = Dl(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Vu || (Vu = !0, Qu = r), di(0, t); }, n; } function mi(e, t, n) { (n = Dl(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { di(0, t); };
        } var l = e.stateNode; return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () { di(0, t), "function" != typeof r && (null === qu ? qu = new Set([this]) : qu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function vi(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pi;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = _s.bind(null, e, t, n), t.then(e, e)); } function gi(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function yi(e, t, n, r, a) { return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Dl(-1, 1)).tag = 2, Ml(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e); } var bi = w.ReactCurrentOwner, wi = !1; function ki(e, t, n, r) { t.child = null === e ? Gl(t, null, n, r) : Xl(t, e.child, n, r); } function Si(e, t, n, r, a) { n = n.render; var l = t.ref; return El(t, a), r = Eo(e, t, n, r, l, a), n = Co(), null === e || wi ? (al && n && el(t), t.flags |= 1, ki(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vi(e, t, a)); } function xi(e, t, n, r, a) { if (null === e) {
            var l = n.type;
            return "function" != typeof l || Ds(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Os(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Ei(e, t, l, r, a));
        } if (l = e.child, 0 == (e.lanes & a)) {
            var o = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
                return Vi(e, t, a);
        } return t.flags |= 1, (e = Ms(l, r)).ref = t.ref, e.return = t, t.child = e; } function Ei(e, t, n, r, a) { if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
                if (wi = !1, t.pendingProps = r = l, 0 == (e.lanes & a))
                    return t.lanes = e.lanes, Vi(e, t, a);
                0 != (131072 & e.flags) && (wi = !0);
            }
        } return Pi(e, t, n, r, a); } function Ci(e, t, n) { var r = t.pendingProps, a = r.children, l = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _a(Mu, Du), Du |= n;
            else {
                if (0 == (1073741824 & n))
                    return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _a(Mu, Du), Du |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== l ? l.baseLanes : n, _a(Mu, Du), Du |= r;
            }
        else
            null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, _a(Mu, Du), Du |= r; return ki(e, t, a, n), t.child; } function _i(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function Pi(e, t, n, r, a) { var l = Ta(n) ? Na : Ra.current; return l = za(t, l), El(t, a), n = Eo(e, t, n, r, l, a), r = Co(), null === e || wi ? (al && r && el(t), t.flags |= 1, ki(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vi(e, t, a)); } function Ri(e, t, n, r, a) { if (Ta(n)) {
            var l = !0;
            Ua(t);
        }
        else
            l = !1; if (El(t, a), null === t.stateNode)
            Hi(e, t), Wl(t, n, r), Vl(t, n, r, a), r = !0;
        else if (null === e) {
            var o = t.stateNode, i = t.memoizedProps;
            o.props = i;
            var u = o.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? Cl(s) : za(t, s = Ta(n) ? Na : Ra.current);
            var c = n.getDerivedStateFromProps, f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            f || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && Hl(t, o, r, s), Nl = !1;
            var d = t.memoizedState;
            o.state = d, Fl(t, r, o, a), u = t.memoizedState, i !== r || d !== u || La.current || Nl ? ("function" == typeof c && (Al(t, n, c, r), u = t.memoizedState), (i = Nl || $l(t, n, i, r, d, u, s)) ? (f || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            o = t.stateNode, Tl(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : vl(t.type, i), o.props = s, f = t.pendingProps, d = o.context, u = "object" == typeof (u = n.contextType) && null !== u ? Cl(u) : za(t, u = Ta(n) ? Na : Ra.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== f || d !== u) && Hl(t, o, r, u), Nl = !1, d = t.memoizedState, o.state = d, Fl(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || La.current || Nl ? ("function" == typeof p && (Al(t, n, p, r), h = t.memoizedState), (s = Nl || $l(t, n, s, r, d, h, u) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Li(e, t, n, r, l, a); } function Li(e, t, n, r, a, l) { _i(e, t); var o = 0 != (128 & t.flags); if (!r && !o)
            return a && Fa(t, n, !1), Vi(e, t, l); r = t.stateNode, bi.current = t; var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && o ? (t.child = Xl(t, e.child, null, l), t.child = Xl(t, null, i, l)) : ki(e, t, i, l), t.memoizedState = r.state, a && Fa(t, n, !0), t.child; } function Ni(e) { var t = e.stateNode; t.pendingContext ? Ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(0, t.context, !1), ro(e, t.containerInfo); } function zi(e, t, n, r, a) { return pl(), hl(a), t.flags |= 256, ki(e, t, n, r), t.child; } var Ti, Di, Mi, Oi, Ui = { dehydrated: null, treeContext: null, retryLane: 0 }; function Fi(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function ji(e, t, n) { var r, a = t.pendingProps, o = io.current, i = !1, u = 0 != (128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), _a(io, 1 & o), null === e)
            return sl(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = { mode: "hidden", children: u }, 0 == (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = u) : i = Fs(u, a, 0, null), e = Us(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fi(n), t.memoizedState = Ui, e) : Ii(t, u)); if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return function (e, t, n, r, a, o, i) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Ai(e, t, i, r = fi(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Fs({ mode: "visible", children: r.children }, a, 0, null), (o = Us(o, a, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 != (1 & t.mode) && Xl(t, e.child, null, i), t.child.memoizedState = Fi(i), t.memoizedState = Ui, o); if (0 == (1 & t.mode))
                return Ai(e, t, i, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, Ai(e, t, i, r = fi(o = Error(l(419)), r, void 0));
            } if (u = 0 != (i & e.childLanes), wi || u) {
                if (null !== (r = Nu)) {
                    switch (i & -i) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
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
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Ll(e, a), rs(r, e, a, -1));
                }
                return vs(), Ai(e, t, i, r = fi(Error(l(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Rs.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, rl = sa(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Xa = e.id, Ga = e.overflow, Ya = t), (t = Ii(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, o, n); if (i) {
            i = a.fallback, u = t.mode, r = (o = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 0 == (1 & u) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = Ms(o, s)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? i = Ms(r, i) : (i = Us(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Fi(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Ui, a;
        } return e = (i = e.child).sibling, a = Ms(i, { mode: "visible", children: a.children }), 0 == (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function Ii(e, t) { return (t = Fs({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function Ai(e, t, n, r) { return null !== r && hl(r), Xl(t, e.child, null, n), (e = Ii(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Bi(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), xl(e.return, t, n); } function $i(e, t, n, r, a) { var l = e.memoizedState; null === l ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a); } function Wi(e, t, n) { var r = t.pendingProps, a = r.revealOrder, l = r.tail; if (ki(e, t, r.children, n), 0 != (2 & (r = io.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Bi(e, n, t);
                    else if (19 === e.tag)
                        Bi(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (_a(io, r), 0 == (1 & t.mode))
            t.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === uo(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $i(t, !1, a, n, l);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === uo(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    $i(t, !0, n, null, l);
                    break;
                case "together":
                    $i(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            } return t.child; } function Hi(e, t) { 0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Vi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Fu |= t.lanes, 0 == (n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(l(153)); if (null !== t.child) {
            for (n = Ms(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Ms(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Qi(e, t) { if (!al)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function qi(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Ki(e, t, n) { var r = t.pendingProps; switch (tl(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return qi(t), null;
            case 1:
            case 17: return Ta(t.type) && Da(), qi(t), null;
            case 3: return r = t.stateNode, ao(), Ca(La), Ca(Ra), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ll && (is(ll), ll = null))), Di(e, t), qi(t), null;
            case 5:
                oo(t);
                var a = no(to.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    Mi(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(l(166));
                        return qi(t), null;
                    }
                    if (e = no(Zl.current), fl(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[da] = t, r[pa] = o, e = 0 != (1 & t.mode), n) {
                            case "dialog":
                                Ir("cancel", r), Ir("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ir("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Or.length; a++)
                                    Ir(Or[a], r);
                                break;
                            case "source":
                                Ir("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ir("error", r), Ir("load", r);
                                break;
                            case "details":
                                Ir("toggle", r);
                                break;
                            case "input":
                                X(r, o), Ir("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!o.multiple }, Ir("invalid", r);
                                break;
                            case "textarea": ae(r, o), Ir("invalid", r);
                        }
                        for (var u in ye(n, o), a = null, o)
                            if (o.hasOwnProperty(u)) {
                                var s = o[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Ir("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Q(r), Z(r, o, !0);
                                break;
                            case "textarea":
                                Q(r), oe(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof o.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[da] = t, e[pa] = r, Ti(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = be(n, r), n) {
                                case "dialog":
                                    Ir("cancel", e), Ir("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ir("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Or.length; a++)
                                        Ir(Or[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Ir("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ir("error", e), Ir("load", e), a = r;
                                    break;
                                case "details":
                                    Ir("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = Y(e, r), Ir("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = F({}, r, { value: void 0 }), Ir("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), Ir("invalid", e);
                            }
                            for (o in ye(n, a), s = a)
                                if (s.hasOwnProperty(o)) {
                                    var c = s[o];
                                    "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" == typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != c && "onScroll" === o && Ir("scroll", e) : null != c && b(e, o, c, u));
                                }
                            switch (n) {
                                case "input":
                                    Q(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e), oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + H(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return qi(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Oi(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(l(166));
                    if (n = no(to.current), no(Zl.current), fl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (o = r.nodeValue !== n) && null !== (e = nl))
                            switch (e.tag) {
                                case 3:
                                    Jr(r.nodeValue, n, 0 != (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 != (1 & e.mode));
                            }
                        o && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r;
                }
                return qi(t), null;
            case 13:
                if (Ca(io), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (al && null !== rl && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                        dl(), pl(), t.flags |= 98560, o = !1;
                    else if (o = fl(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!o)
                                throw Error(l(318));
                            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                                throw Error(l(317));
                            o[da] = t;
                        }
                        else
                            pl(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        qi(t), o = !1;
                    }
                    else
                        null !== ll && (is(ll), ll = null), o = !0;
                    if (!o)
                        return 65536 & t.flags ? t : null;
                }
                return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & io.current) ? 0 === Ou && (Ou = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), qi(t), null);
            case 4: return ao(), Di(e, t), null === e && $r(t.stateNode.containerInfo), qi(t), null;
            case 10: return Sl(t.type._context), qi(t), null;
            case 19:
                if (Ca(io), null === (o = t.memoizedState))
                    return qi(t), null;
                if (r = 0 != (128 & t.flags), null === (u = o.rendering))
                    if (r)
                        Qi(o, !1);
                    else {
                        if (0 !== Ou || null !== e && 0 != (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (u = uo(e))) {
                                    for (t.flags |= 128, Qi(o, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (o = n).flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return _a(io, 1 & io.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== o.tail && Ge() > Wu && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = uo(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(o, !0), null === o.tail && "hidden" === o.tailMode && !u.alternate && !al)
                                return qi(t), null;
                        }
                        else
                            2 * Ge() - o.renderingStartTime > Wu && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u, o.last = u);
                }
                return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ge(), t.sibling = null, n = io.current, _a(io, r ? 1 & n | 2 : 1 & n), t) : (qi(t), null);
            case 22:
            case 23: return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Du) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qi(t), null;
            case 24:
            case 25: return null;
        } throw Error(l(156, t.tag)); } function Yi(e, t) { switch (tl(t), t.tag) {
            case 1: return Ta(t.type) && Da(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ao(), Ca(La), Ca(Ra), co(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return oo(t), null;
            case 13:
                if (Ca(io), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(l(340));
                    pl();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return Ca(io), null;
            case 4: return ao(), null;
            case 10: return Sl(t.type._context), null;
            case 22:
            case 23: return ds(), null;
            default: return null;
        } } Ti = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Di = function () { }, Mi = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, no(Zl.current);
            var l, o = null;
            switch (n) {
                case "input":
                    a = Y(e, a), r = Y(e, r), o = [];
                    break;
                case "select":
                    a = F({}, a, { value: void 0 }), r = F({}, r, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), o = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ye(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (l in u)
                            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (l in u)
                                !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                            for (l in s)
                                s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
                        }
                        else
                            n || (o || (o = []), o.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ir("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
            }
            n && (o = o || []).push("style", n);
            var c = o;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Oi = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Xi = !1, Gi = !1, Ji = "function" == typeof WeakSet ? WeakSet : Set, Zi = null; function eu(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    Cs(e, t, n);
                }
            else
                n.current = null; } function tu(e, t, n) { try {
            n();
        }
        catch (n) {
            Cs(e, t, n);
        } } var nu = !1; function ru(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var l = a.destroy;
                    a.destroy = void 0, void 0 !== l && tu(t, n, l);
                }
                a = a.next;
            } while (a !== r);
        } } function au(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function lu(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function ou(e) { var t = e.alternate; null !== t && (e.alternate = null, ou(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[ma], delete t[va], delete t[ga]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function iu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function uu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || iu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function su(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;)
                su(e, t, n), e = e.sibling; } function cu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e;)
                cu(e, t, n), e = e.sibling; } var fu = null, du = !1; function pu(e, t, n) { for (n = n.child; null !== n;)
            hu(e, t, n), n = n.sibling; } function hu(e, t, n) { if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
                lt.onCommitFiberUnmount(at, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Gi || eu(n, t);
            case 6:
                var r = fu, a = du;
                fu = null, pu(e, t, n), du = a, null !== (fu = r) && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
                break;
            case 18:
                null !== fu && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), $t(e)) : ua(fu, n.stateNode));
                break;
            case 4:
                r = fu, a = du, fu = n.stateNode.containerInfo, du = !0, pu(e, t, n), fu = r, du = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Gi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var l = a, o = l.destroy;
                        l = l.tag, void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && tu(n, t, o), a = a.next;
                    } while (a !== r);
                }
                pu(e, t, n);
                break;
            case 1:
                if (!Gi && (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        Cs(n, t, e);
                    }
                pu(e, t, n);
                break;
            case 21:
                pu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Gi = (r = Gi) || null !== n.memoizedState, pu(e, t, n), Gi = r) : pu(e, t, n);
                break;
            default: pu(e, t, n);
        } } function mu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ji), t.forEach((function (t) { var r = Ls.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function vu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var o = e, i = t, u = i;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                fu = u.stateNode, du = !1;
                                break e;
                            case 3:
                            case 4:
                                fu = u.stateNode.containerInfo, du = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === fu)
                        throw Error(l(160));
                    hu(o, i, a), fu = null, du = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    Cs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                gu(t, e), t = t.sibling; } function gu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (vu(t, e), yu(e), 4 & r) {
                    try {
                        ru(3, e, e.return), au(3, e);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                    try {
                        ru(5, e, e.return);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 1:
                vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
                break;
            case 5:
                if (vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        de(a, "");
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var o = e.memoizedProps, i = null !== n ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === o.type && null != o.name && G(a, o), be(u, i);
                            var c = be(u, o);
                            for (i = 0; i < s.length; i += 2) {
                                var f = s[i], d = s[i + 1];
                                "style" === f ? ve(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c);
                            }
                            switch (u) {
                                case "input":
                                    J(a, o);
                                    break;
                                case "textarea":
                                    le(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var h = o.value;
                                    null != h ? ne(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                            }
                            a[pa] = o;
                        }
                        catch (t) {
                            Cs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (vu(t, e), yu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(l(162));
                    a = e.stateNode, o = e.memoizedProps;
                    try {
                        a.nodeValue = o;
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        $t(t.containerInfo);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                vu(t, e), yu(e);
                break;
            case 13:
                vu(t, e), yu(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || ($u = Ge())), 4 & r && mu(e);
                break;
            case 22:
                if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gi = (c = Gi) || f, vu(t, e), Gi = c) : vu(t, e), yu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode))
                        for (Zi = e, f = e.child; null !== f;) {
                            for (d = Zi = f; null !== Zi;) {
                                switch (h = (p = Zi).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ru(4, p, p.return);
                                        break;
                                    case 1:
                                        eu(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" == typeof m.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (e) {
                                                Cs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        eu(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Su(d);
                                        continue;
                                    }
                                }
                                null !== h ? (h.return = p, Zi = h) : Su(d);
                            }
                            f = f.sibling;
                        }
                    e: for (f = null, d = e;;) {
                        if (5 === d.tag) {
                            if (null === f) {
                                f = d;
                                try {
                                    a = d.stateNode, c ? "function" == typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", i));
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === d.tag) {
                            if (null === f)
                                try {
                                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                        }
                        else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e)
                            break e;
                        for (; null === d.sibling;) {
                            if (null === d.return || d.return === e)
                                break e;
                            f === d && (f = null), d = d.return;
                        }
                        f === d && (f = null), d.sibling.return = d.return, d = d.sibling;
                    }
                }
                break;
            case 19: vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
        } } function yu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (iu(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(l(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (de(a, ""), r.flags &= -33), cu(e, uu(e), a);
                        break;
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo;
                        su(e, uu(e), o);
                        break;
                    default: throw Error(l(161));
                }
            }
            catch (t) {
                Cs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function bu(e, t, n) { Zi = e, wu(e, t, n); } function wu(e, t, n) { for (var r = 0 != (1 & e.mode); null !== Zi;) {
            var a = Zi, l = a.child;
            if (22 === a.tag && r) {
                var o = null !== a.memoizedState || Xi;
                if (!o) {
                    var i = a.alternate, u = null !== i && null !== i.memoizedState || Gi;
                    i = Xi;
                    var s = Gi;
                    if (Xi = o, (Gi = u) && !s)
                        for (Zi = a; null !== Zi;)
                            u = (o = Zi).child, 22 === o.tag && null !== o.memoizedState ? xu(a) : null !== u ? (u.return = o, Zi = u) : xu(a);
                    for (; null !== l;)
                        Zi = l, wu(l, t, n), l = l.sibling;
                    Zi = a, Xi = i, Gi = s;
                }
                ku(e);
            }
            else
                0 != (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Zi = l) : ku(e);
        } } function ku(e) { for (; null !== Zi;) {
            var t = Zi;
            if (0 != (8772 & t.flags)) {
                var n = t.alternate;
                try {
                    if (0 != (8772 & t.flags))
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gi || au(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Gi)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : vl(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var o = t.updateQueue;
                                null !== o && jl(t, o, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (null !== i) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    jl(t, i, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var f = c.memoizedState;
                                        if (null !== f) {
                                            var d = f.dehydrated;
                                            null !== d && $t(d);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(l(163));
                        }
                    Gi || 512 & t.flags && lu(t);
                }
                catch (e) {
                    Cs(t, t.return, e);
                }
            }
            if (t === e) {
                Zi = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Su(e) { for (; null !== Zi;) {
            var t = Zi;
            if (t === e) {
                Zi = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function xu(e) { for (; null !== Zi;) {
            var t = Zi;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            au(4, t);
                        }
                        catch (e) {
                            Cs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                Cs(t, a, e);
                            }
                        }
                        var l = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, l, e);
                        }
                        break;
                    case 5:
                        var o = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, o, e);
                        }
                }
            }
            catch (e) {
                Cs(t, t.return, e);
            }
            if (t === e) {
                Zi = null;
                break;
            }
            var i = t.sibling;
            if (null !== i) {
                i.return = t.return, Zi = i;
                break;
            }
            Zi = t.return;
        } } var Eu, Cu = Math.ceil, _u = w.ReactCurrentDispatcher, Pu = w.ReactCurrentOwner, Ru = w.ReactCurrentBatchConfig, Lu = 0, Nu = null, zu = null, Tu = 0, Du = 0, Mu = Ea(0), Ou = 0, Uu = null, Fu = 0, ju = 0, Iu = 0, Au = null, Bu = null, $u = 0, Wu = 1 / 0, Hu = null, Vu = !1, Qu = null, qu = null, Ku = !1, Yu = null, Xu = 0, Gu = 0, Ju = null, Zu = -1, es = 0; function ts() { return 0 != (6 & Lu) ? Ge() : -1 !== Zu ? Zu : Zu = Ge(); } function ns(e) { return 0 == (1 & e.mode) ? 1 : 0 != (2 & Lu) && 0 !== Tu ? Tu & -Tu : null !== ml.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type); } function rs(e, t, n, r) { if (50 < Gu)
            throw Gu = 0, Ju = null, Error(l(185)); gt(e, n, r), 0 != (2 & Lu) && e === Nu || (e === Nu && (0 == (2 & Lu) && (ju |= n), 4 === Ou && us(e, Tu)), as(e, r), 1 === n && 0 === Lu && 0 == (1 & t.mode) && (Wu = Ge() + 500, Ia && $a())); } function as(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
            var o = 31 - ot(l), i = 1 << o, u = a[o];
            -1 === u ? 0 != (i & n) && 0 == (i & r) || (a[o] = pt(i, t)) : u <= t && (e.expiredLanes |= i), l &= ~i;
        } }(e, t); var r = dt(e, e === Nu ? Tu : 0); if (0 === r)
            null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Ke(n), 1 === t)
                0 === e.tag ? function (e) { Ia = !0, Ba(e); }(ss.bind(null, e)) : Ba(ss.bind(null, e)), oa((function () { 0 == (6 & Lu) && $a(); })), n = null;
            else {
                switch (wt(r)) {
                    case 1:
                        n = Ze;
                        break;
                    case 4:
                        n = et;
                        break;
                    case 16:
                    default:
                        n = tt;
                        break;
                    case 536870912: n = rt;
                }
                n = Ns(n, ls.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function ls(e, t) { if (Zu = -1, es = 0, 0 != (6 & Lu))
            throw Error(l(327)); var n = e.callbackNode; if (xs() && e.callbackNode !== n)
            return null; var r = dt(e, e === Nu ? Tu : 0); if (0 === r)
            return null; if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
            t = gs(e, r);
        else {
            t = r;
            var a = Lu;
            Lu |= 2;
            var o = ms();
            for (Nu === e && Tu === t || (Hu = null, Wu = Ge() + 500, ps(e, t));;)
                try {
                    bs();
                    break;
                }
                catch (t) {
                    hs(e, t);
                }
            kl(), _u.current = o, Lu = a, null !== zu ? t = 0 : (Nu = null, Tu = 0, t = Ou);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = ht(e)) && (r = a, t = os(e, a)), 1 === t)
                throw n = Uu, ps(e, 0), us(e, r), as(e, Ge()), n;
            if (6 === t)
                us(e, r);
            else {
                if (a = e.current.alternate, 0 == (30 & r) && !function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], l = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!ir(l(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) && (2 === (t = gs(e, r)) && 0 !== (o = ht(e)) && (r = o, t = os(e, o)), 1 === t))
                    throw n = Uu, ps(e, 0), us(e, r), as(e, Ge()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(l(345));
                    case 2:
                    case 5:
                        Ss(e, Bu, Hu);
                        break;
                    case 3:
                        if (us(e, r), (130023424 & r) === r && 10 < (t = $u + 500 - Ge())) {
                            if (0 !== dt(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                ts(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Hu), t);
                            break;
                        }
                        Ss(e, Bu, Hu);
                        break;
                    case 4:
                        if (us(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var i = 31 - ot(r);
                            o = 1 << i, (i = t[i]) > a && (a = i), r &= ~o;
                        }
                        if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Hu), r);
                            break;
                        }
                        Ss(e, Bu, Hu);
                        break;
                    default: throw Error(l(329));
                }
            }
        } return as(e, Ge()), e.callbackNode === n ? ls.bind(null, e) : null; } function os(e, t) { var n = Au; return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Bu, Bu = n, null !== t && is(t)), e; } function is(e) { null === Bu ? Bu = e : Bu.push.apply(Bu, e); } function us(e, t) { for (t &= ~Iu, t &= ~ju, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function ss(e) { if (0 != (6 & Lu))
            throw Error(l(327)); xs(); var t = dt(e, 0); if (0 == (1 & t))
            return as(e, Ge()), null; var n = gs(e, t); if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = os(e, r));
        } if (1 === n)
            throw n = Uu, ps(e, 0), us(e, t), as(e, Ge()), n; if (6 === n)
            throw Error(l(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Bu, Hu), as(e, Ge()), null; } function cs(e, t) { var n = Lu; Lu |= 1; try {
            return e(t);
        }
        finally {
            0 === (Lu = n) && (Wu = Ge() + 500, Ia && $a());
        } } function fs(e) { null !== Yu && 0 === Yu.tag && 0 == (6 & Lu) && xs(); var t = Lu; Lu |= 1; var n = Ru.transition, r = bt; try {
            if (Ru.transition = null, bt = 1, e)
                return e();
        }
        finally {
            bt = r, Ru.transition = n, 0 == (6 & (Lu = t)) && $a();
        } } function ds() { Du = Mu.current, Ca(Mu); } function ps(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== zu)
            for (n = zu.return; null !== n;) {
                var r = n;
                switch (tl(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Da();
                        break;
                    case 3:
                        ao(), Ca(La), Ca(Ra), co();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ao();
                        break;
                    case 13:
                    case 19:
                        Ca(io);
                        break;
                    case 10:
                        Sl(r.type._context);
                        break;
                    case 22:
                    case 23: ds();
                }
                n = n.return;
            } if (Nu = e, zu = e = Ms(e.current, null), Tu = Du = t, Ou = 0, Uu = null, Iu = ju = Fu = 0, Bu = Au = null, null !== _l) {
            for (t = 0; t < _l.length; t++)
                if (null !== (r = (n = _l[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, l = n.pending;
                    if (null !== l) {
                        var o = l.next;
                        l.next = a, r.next = o;
                    }
                    n.pending = r;
                }
            _l = null;
        } return e; } function hs(e, t) { for (;;) {
            var n = zu;
            try {
                if (kl(), fo.current = oi, yo) {
                    for (var r = mo.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    yo = !1;
                }
                if (ho = 0, go = vo = mo = null, bo = !1, wo = 0, Pu.current = null, null === n || null === n.return) {
                    Ou = 1, Uu = t, zu = null;
                    break;
                }
                e: {
                    var o = e, i = n.return, u = n, s = t;
                    if (t = Tu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, f = u, d = f.tag;
                        if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                            var p = f.alternate;
                            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
                        }
                        var h = gi(i);
                        if (null !== h) {
                            h.flags &= -257, yi(h, i, u, 0, t), 1 & h.mode && vi(o, c, t), s = c;
                            var m = (t = h).updateQueue;
                            if (null === m) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                m.add(s);
                            break e;
                        }
                        if (0 == (1 & t)) {
                            vi(o, c, t), vs();
                            break e;
                        }
                        s = Error(l(426));
                    }
                    else if (al && 1 & u.mode) {
                        var g = gi(i);
                        if (null !== g) {
                            0 == (65536 & g.flags) && (g.flags |= 256), yi(g, i, u, 0, t), hl(ci(s, u));
                            break e;
                        }
                    }
                    o = s = ci(s, u), 4 !== Ou && (Ou = 2), null === Au ? Au = [o] : Au.push(o), o = i;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t, Ul(o, hi(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var y = o.type, b = o.stateNode;
                                if (0 == (128 & o.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t, Ul(o, mi(o, u, t));
                                    break e;
                                }
                        }
                        o = o.return;
                    } while (null !== o);
                }
                ks(n);
            }
            catch (e) {
                t = e, zu === n && null !== n && (zu = n = n.return);
                continue;
            }
            break;
        } } function ms() { var e = _u.current; return _u.current = oi, null === e ? oi : e; } function vs() { 0 !== Ou && 3 !== Ou && 2 !== Ou || (Ou = 4), null === Nu || 0 == (268435455 & Fu) && 0 == (268435455 & ju) || us(Nu, Tu); } function gs(e, t) { var n = Lu; Lu |= 2; var r = ms(); for (Nu === e && Tu === t || (Hu = null, ps(e, t));;)
            try {
                ys();
                break;
            }
            catch (t) {
                hs(e, t);
            } if (kl(), Lu = n, _u.current = r, null !== zu)
            throw Error(l(261)); return Nu = null, Tu = 0, Ou; } function ys() { for (; null !== zu;)
            ws(zu); } function bs() { for (; null !== zu && !Ye();)
            ws(zu); } function ws(e) { var t = Eu(e.alternate, e, Du); e.memoizedProps = e.pendingProps, null === t ? ks(e) : zu = t, Pu.current = null; } function ks(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 0 == (32768 & t.flags)) {
                if (null !== (n = Ki(n, t, Du)))
                    return void (zu = n);
            }
            else {
                if (null !== (n = Yi(n, t)))
                    return n.flags &= 32767, void (zu = n);
                if (null === e)
                    return Ou = 6, void (zu = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (t = t.sibling))
                return void (zu = t);
            zu = t = e;
        } while (null !== t); 0 === Ou && (Ou = 5); } function Ss(e, t, n) { var r = bt, a = Ru.transition; try {
            Ru.transition = null, bt = 1, function (e, t, n, r) { do {
                xs();
            } while (null !== Yu); if (0 != (6 & Lu))
                throw Error(l(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(l(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - ot(n), l = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l;
            } }(e, o), e === Nu && (zu = Nu = null, Tu = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Ku || (Ku = !0, Ns(tt, (function () { return xs(), null; }))), o = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || o) {
                o = Ru.transition, Ru.transition = null;
                var i = bt;
                bt = 1;
                var u = Lu;
                Lu |= 4, Pu.current = null, function (e, t) { if (ea = Ht, pr(e = dr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, o.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var i = 0, u = -1, s = -1, c = 0, f = 0, d = e, p = null;
                                t: for (;;) {
                                    for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== o || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (h = d.firstChild);)
                                        p = d, d = h;
                                    for (;;) {
                                        if (d === e)
                                            break t;
                                        if (p === n && ++c === a && (u = i), p === o && ++f === r && (s = i), null !== (h = d.nextSibling))
                                            break;
                                        p = (d = p).parentNode;
                                    }
                                    d = h;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ta = { focusedElem: e, selectionRange: n }, Ht = !1, Zi = t; null !== Zi;)
                    if (e = (t = Zi).child, 0 != (1028 & t.subtreeFlags) && null !== e)
                        e.return = t, Zi = e;
                    else
                        for (; null !== Zi;) {
                            t = Zi;
                            try {
                                var m = t.alternate;
                                if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var v = m.memoizedProps, g = m.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vl(t.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(l(163));
                                    }
                            }
                            catch (e) {
                                Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Zi = e;
                                break;
                            }
                            Zi = t.return;
                        } m = nu, nu = !1; }(e, n), gu(n, e), hr(ta), Ht = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Xe(), Lu = u, bt = i, Ru.transition = o;
            }
            else
                e.current = n; if (Ku && (Ku = !1, Yu = e, Xu = a), 0 === (o = e.pendingLanes) && (qu = null), function (e) { if (lt && "function" == typeof lt.onCommitFiberRoot)
                try {
                    lt.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags));
                }
                catch (e) { } }(n.stateNode), as(e, Ge()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Vu)
                throw Vu = !1, e = Qu, Qu = null, e; 0 != (1 & Xu) && 0 !== e.tag && xs(), 0 != (1 & (o = e.pendingLanes)) ? e === Ju ? Gu++ : (Gu = 0, Ju = e) : Gu = 0, $a(); }(e, t, n, r);
        }
        finally {
            Ru.transition = a, bt = r;
        } return null; } function xs() { if (null !== Yu) {
            var e = wt(Xu), t = Ru.transition, n = bt;
            try {
                if (Ru.transition = null, bt = 16 > e ? 16 : e, null === Yu)
                    var r = !1;
                else {
                    if (e = Yu, Yu = null, Xu = 0, 0 != (6 & Lu))
                        throw Error(l(331));
                    var a = Lu;
                    for (Lu |= 4, Zi = e.current; null !== Zi;) {
                        var o = Zi, i = o.child;
                        if (0 != (16 & Zi.flags)) {
                            var u = o.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Zi = c; null !== Zi;) {
                                        var f = Zi;
                                        switch (f.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ru(8, f, o);
                                        }
                                        var d = f.child;
                                        if (null !== d)
                                            d.return = f, Zi = d;
                                        else
                                            for (; null !== Zi;) {
                                                var p = (f = Zi).sibling, h = f.return;
                                                if (ou(f), f === c) {
                                                    Zi = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = h, Zi = p;
                                                    break;
                                                }
                                                Zi = h;
                                            }
                                    }
                                }
                                var m = o.alternate;
                                if (null !== m) {
                                    var v = m.child;
                                    if (null !== v) {
                                        m.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Zi = o;
                            }
                        }
                        if (0 != (2064 & o.subtreeFlags) && null !== i)
                            i.return = o, Zi = i;
                        else
                            e: for (; null !== Zi;) {
                                if (0 != (2048 & (o = Zi).flags))
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ru(9, o, o.return);
                                    }
                                var y = o.sibling;
                                if (null !== y) {
                                    y.return = o.return, Zi = y;
                                    break e;
                                }
                                Zi = o.return;
                            }
                    }
                    var b = e.current;
                    for (Zi = b; null !== Zi;) {
                        var w = (i = Zi).child;
                        if (0 != (2064 & i.subtreeFlags) && null !== w)
                            w.return = i, Zi = w;
                        else
                            e: for (i = b; null !== Zi;) {
                                if (0 != (2048 & (u = Zi).flags))
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: au(9, u);
                                        }
                                    }
                                    catch (e) {
                                        Cs(u, u.return, e);
                                    }
                                if (u === i) {
                                    Zi = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Zi = k;
                                    break e;
                                }
                                Zi = u.return;
                            }
                    }
                    if (Lu = a, $a(), lt && "function" == typeof lt.onPostCommitFiberRoot)
                        try {
                            lt.onPostCommitFiberRoot(at, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                bt = n, Ru.transition = t;
            }
        } return !1; } function Es(e, t, n) { e = Ml(e, t = hi(0, t = ci(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t)); } function Cs(e, t, n) { if (3 === e.tag)
            Es(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    Es(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                        t = Ml(t, e = mi(t, e = ci(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function _s(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Nu === e && (Tu & n) === n && (4 === Ou || 3 === Ou && (130023424 & Tu) === Tu && 500 > Ge() - $u ? ps(e, 0) : Iu |= n), as(e, t); } function Ps(e, t) { 0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = ts(); null !== (e = Ll(e, t)) && (gt(e, t, n), as(e, n)); } function Rs(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Ps(e, n); } function Ls(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(l(314));
        } null !== r && r.delete(t), Ps(e, n); } function Ns(e, t) { return qe(e, t); } function zs(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function Ts(e, t, n, r) { return new zs(e, t, n, r); } function Ds(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Ms(e, t) { var n = e.alternate; return null === n ? ((n = Ts(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Os(e, t, n, r, a, o) { var i = 2; if (r = e, "function" == typeof e)
            Ds(e) && (i = 1);
        else if ("string" == typeof e)
            i = 5;
        else
            e: switch (e) {
                case x: return Us(n.children, a, o, t);
                case E:
                    i = 8, a |= 8;
                    break;
                case C: return (e = Ts(12, n, t, 2 | a)).elementType = C, e.lanes = o, e;
                case L: return (e = Ts(13, n, t, a)).elementType = L, e.lanes = o, e;
                case N: return (e = Ts(19, n, t, a)).elementType = N, e.lanes = o, e;
                case D: return Fs(n, a, o, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                i = 10;
                                break e;
                            case P:
                                i = 9;
                                break e;
                            case R:
                                i = 11;
                                break e;
                            case z:
                                i = 14;
                                break e;
                            case T:
                                i = 16, r = null;
                                break e;
                        }
                    throw Error(l(130, null == e ? e : typeof e, ""));
            } return (t = Ts(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t; } function Us(e, t, n, r) { return (e = Ts(7, e, r, t)).lanes = n, e; } function Fs(e, t, n, r) { return (e = Ts(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function js(e, t, n) { return (e = Ts(6, e, null, t)).lanes = n, e; } function Is(e, t, n) { return (t = Ts(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function As(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function Bs(e, t, n, r, a, l, o, i, u) { return e = new As(e, t, n, i, u), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = Ts(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zl(l), e; } function $s(e) { if (!e)
            return Pa; e: {
            if ($e(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(l(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (Ta(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(l(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (Ta(n))
                return Oa(e, n, t);
        } return t; } function Ws(e, t, n, r, a, l, o, i, u) { return (e = Bs(n, r, !0, e, 0, l, 0, i, u)).context = $s(null), n = e.current, (l = Dl(r = ts(), a = ns(n))).callback = null != t ? t : null, Ml(n, l, a), e.current.lanes = a, gt(e, a, r), as(e, r), e; } function Hs(e, t, n, r) { var a = t.current, l = ts(), o = ns(a); return n = $s(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Dl(l, o)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ml(a, t, o)) && (rs(e, a, o, l), Ol(e, a, o)), o; } function Vs(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Qs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function qs(e, t) { Qs(e, t), (e = e.alternate) && Qs(e, t); } Eu = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || La.current)
                wi = !0;
            else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return wi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Ni(t), pl();
                            break;
                        case 5:
                            lo(t);
                            break;
                        case 1:
                            Ta(t.type) && Ua(t);
                            break;
                        case 4:
                            ro(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            _a(gl, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (_a(io, 1 & io.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? ji(e, t, n) : (_a(io, 1 & io.current), null !== (e = Vi(e, t, n)) ? e.sibling : null);
                            _a(io, 1 & io.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                if (r)
                                    return Wi(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(io, io.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Ci(e, t, n);
                    } return Vi(e, t, n); }(e, t, n);
                wi = 0 != (131072 & e.flags);
            }
        else
            wi = !1, al && 0 != (1048576 & t.flags) && Za(t, Qa, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Hi(e, t), e = t.pendingProps;
                var a = za(t, Ra.current);
                El(t, n), a = Eo(null, t, r, e, a, n);
                var o = Co();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ta(r) ? (o = !0, Ua(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, zl(t), a.updater = Bl, t.stateNode = a, a._reactInternals = t, Vl(t, r, e, n), t = Li(null, t, r, !0, o, n)) : (t.tag = 0, al && o && el(t), ki(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Hi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return Ds(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === R)
                            return 11;
                        if (e === z)
                            return 14;
                    } return 2; }(r), e = vl(r, e), a) {
                        case 0:
                            t = Pi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ri(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Si(null, t, r, e, n);
                            break e;
                        case 14:
                            t = xi(null, t, r, vl(r.type, e), n);
                            break e;
                    }
                    throw Error(l(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, Pi(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, Ri(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 3:
                e: {
                    if (Ni(t), null === e)
                        throw Error(l(387));
                    r = t.pendingProps, a = (o = t.memoizedState).element, Tl(e, t), Fl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated) {
                        if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = zi(e, t, r, n, a = ci(Error(l(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = zi(e, t, r, n, a = ci(Error(l(424)), t));
                            break e;
                        }
                        for (rl = sa(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Gl(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (pl(), r === a) {
                            t = Vi(e, t, n);
                            break e;
                        }
                        ki(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return lo(t), null === e && sl(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== o && na(r, o) && (t.flags |= 32), _i(e, t), ki(e, t, i, n), t.child;
            case 6: return null === e && sl(t), null;
            case 13: return ji(e, t, n);
            case 4: return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xl(t, null, r, n) : ki(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, Si(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 7: return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, _a(gl, r._currentValue), r._currentValue = i, null !== o)
                        if (ir(o.value, i)) {
                            if (o.children === a.children && !La.current) {
                                t = Vi(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                var u = o.dependencies;
                                if (null !== u) {
                                    i = o.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === o.tag) {
                                                (s = Dl(-1, n & -n)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var f = (c = c.shared).pending;
                                                    null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s;
                                                }
                                            }
                                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), xl(o.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === o.tag)
                                    i = o.type === t.type ? null : o.child;
                                else if (18 === o.tag) {
                                    if (null === (i = o.return))
                                        throw Error(l(341));
                                    i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), xl(i, n, t), i = o.sibling;
                                }
                                else
                                    i = o.child;
                                if (null !== i)
                                    i.return = o;
                                else
                                    for (i = o; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (null !== (o = i.sibling)) {
                                            o.return = i.return, i = o;
                                            break;
                                        }
                                        i = i.return;
                                    }
                                o = i;
                            }
                    ki(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, El(t, n), r = r(a = Cl(a)), t.flags |= 1, ki(e, t, r, n), t.child;
            case 14: return a = vl(r = t.type, t.pendingProps), xi(e, t, r, a = vl(r.type, a), n);
            case 15: return Ei(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vl(r, a), Hi(e, t), t.tag = 1, Ta(r) ? (e = !0, Ua(t)) : e = !1, El(t, n), Wl(t, r, a), Vl(t, r, a, n), Li(null, t, r, !0, e, n);
            case 19: return Wi(e, t, n);
            case 22: return Ci(e, t, n);
        } throw Error(l(156, t.tag)); }; var Ks = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Ys(e) { this._internalRoot = e; } function Xs(e) { this._internalRoot = e; } function Gs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Js(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Zs() { } function ec(e, t, n, r, a) { var l = n._reactRootContainer; if (l) {
            var o = l;
            if ("function" == typeof a) {
                var i = a;
                a = function () { var e = Vs(o); i.call(e); };
            }
            Hs(t, o, e, a);
        }
        else
            o = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var l = r;
                    r = function () { var e = Vs(o); l.call(e); };
                }
                var o = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                return e._reactRootContainer = o, e[ha] = o.current, $r(8 === e.nodeType ? e.parentNode : e), fs(), o;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var i = r;
                r = function () { var e = Vs(u); i.call(e); };
            } var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs); return e._reactRootContainer = u, e[ha] = u.current, $r(8 === e.nodeType ? e.parentNode : e), fs((function () { Hs(t, u, n, r); })), u; }(n, t, e, a, r); return Vs(o); } Xs.prototype.render = Ys.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(l(409)); Hs(e, t, null, null); }, Xs.prototype.unmount = Ys.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            fs((function () { Hs(null, e, null, null); })), t[ha] = null;
        } }, Xs.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = Et();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++)
                ;
            Dt.splice(n, 0, e), 0 === n && Ft(e);
        } }, kt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ft(t.pendingLanes);
                    0 !== n && (yt(t, 1 | n), as(t, Ge()), 0 == (6 & Lu) && (Wu = Ge() + 500, $a()));
                }
                break;
            case 13: fs((function () { var t = Ll(e, 1); if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
            } })), qs(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = Ll(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), qs(e, 134217728);
        } }, xt = function (e) { if (13 === e.tag) {
            var t = ns(e), n = Ll(e, t);
            null !== n && rs(n, e, t, ts()), qs(e, t);
        } }, Et = function () { return bt; }, Ct = function (e, t) { var n = bt; try {
            return bt = e, t();
        }
        finally {
            bt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ka(r);
                            if (!a)
                                throw Error(l(90));
                            q(r), J(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                le(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Re = cs, Le = fs; var tc = { usingClientEntryPoint: !1, Events: [ba, wa, ka, _e, Pe, cs] }, nc = { findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = Ve(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    at = ac.inject(rc), lt = ac;
                }
                catch (ce) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Gs(t))
            throw Error(l(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Gs(e))
            throw Error(l(299)); var n = !1, r = "", a = Ks; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bs(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, $r(8 === e.nodeType ? e.parentNode : e), new Ys(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(l(188));
            throw e = Object.keys(e).join(","), Error(l(268, e));
        } return null === (e = Ve(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return fs(e); }, t.hydrate = function (e, t, n) { if (!Js(t))
            throw Error(l(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Gs(e))
            throw Error(l(405)); var r = null != n && n.hydratedSources || null, a = !1, o = "", i = Ks; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Ws(t, null, e, 1, null != n ? n : null, a, 0, o, i), e[ha] = t.current, $r(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Xs(t); }, t.render = function (e, t, n) { if (!Js(t))
            throw Error(l(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Js(e))
            throw Error(l(40)); return !!e._reactRootContainer && (fs((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ha] = null; })); })), !0); }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Js(n))
            throw Error(l(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(l(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608"; }, 745: function (e, t, n) { var r = n(935); t.s = r.createRoot, r.hydrateRoot; }, 935: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(448); }, 251: function (e, t, n) { var r = n(294), a = Symbol.for("react.element"), l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty), o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 }; function u(e, t, n) { var r, u = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            l.call(t, r) && !i.hasOwnProperty(r) && (u[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === u[r] && (u[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: u, _owner: o.current }; } t.jsx = u, t.jsxs = u; }, 408: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.iterator, h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } function y() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype; var w = b.prototype = new y; w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, x = { current: null }, E = { key: !0, ref: !0, __self: !0, __source: !0 }; function C(e, t, r) { var a, l = {}, o = null, i = null; if (null != t)
            for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t)
                S.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            l.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            l.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === l[a] && (l[a] = u[a]); return { $$typeof: n, type: e, key: o, ref: i, props: l, _owner: x.current }; } function _(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function R(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function L(e, t, a, l, o) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (i) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return o = o(u = e), e = "" === l ? "." + R(u, 0) : l, k(o) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), L(o, t, a, "", (function (e) { return e; }))) : null != o && (_(o) && (o = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(o, a + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + e)), t.push(o)), 1; if (u = 0, l = "" === l ? "." : l + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = l + R(i = e[s], s);
                u += L(i, t, a, c, o);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(i = e.next()).done;)
                u += L(i = i.value, t, a, c = l + R(i, s++), o);
        else if ("object" === i)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function N(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return L(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function z(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var T = { current: null }, D = { transition: null }, M = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: D, ReactCurrentOwner: x }; t.Children = { map: N, forEach: function (e, t, n) { N(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return N(e, (function () { t++; })), t; }, toArray: function (e) { return N(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = m({}, e.props), l = e.key, o = e.ref, i = e._owner; if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, i = x.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: l, ref: o, props: a, _owner: i }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: z }; }, t.memo = function (e, t) { return { $$typeof: f, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = D.transition; D.transition = {}; try {
            e();
        }
        finally {
            D.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return T.current.useCallback(e, t); }, t.useContext = function (e) { return T.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return T.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return T.current.useEffect(e, t); }, t.useId = function () { return T.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return T.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return T.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return T.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return T.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return T.current.useReducer(e, t, n); }, t.useRef = function (e) { return T.current.useRef(e); }, t.useState = function (e) { return T.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return T.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return T.current.useTransition(); }, t.version = "18.2.0"; }, 294: function (e, t, n) { e.exports = n(408); }, 893: function (e, t, n) { e.exports = n(251); }, 53: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < l(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > l(u, n))
                    s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > l(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function l(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], f = 1, d = null, p = 3, h = !1, m = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, b = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !m)
            if (null !== r(s))
                m = !0, D(S);
            else {
                var t = r(c);
                null !== t && M(k, t.startTime - e);
            } } function S(e, n) { m = !1, v && (v = !1, y(_), _ = -1), h = !0; var l = p; try {
            for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !L());) {
                var o = d.callback;
                if ("function" == typeof o) {
                    d.callback = null, p = d.priorityLevel;
                    var i = o(d.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? d.callback = i : d === r(s) && a(s), w(n);
                }
                else
                    a(s);
                d = r(s);
            }
            if (null !== d)
                var u = !0;
            else {
                var f = r(c);
                null !== f && M(k, f.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            d = null, p = l, h = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var x, E = !1, C = null, _ = -1, P = 5, R = -1; function L() { return !(t.unstable_now() - R < P); } function N() { if (null !== C) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? x() : (E = !1, C = null);
            }
        }
        else
            E = !1; } if ("function" == typeof b)
            x = function () { b(N); };
        else if ("undefined" != typeof MessageChannel) {
            var z = new MessageChannel, T = z.port2;
            z.port1.onmessage = N, x = function () { T.postMessage(null); };
        }
        else
            x = function () { g(N, 0); }; function D(e) { C = e, E || (E = !0, x()); } function M(e, n) { _ = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || h || (m = !0, D(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, l) { var o = t.unstable_now(); switch (l = "object" == typeof l && null !== l && "number" == typeof (l = l.delay) && 0 < l ? o + l : o, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: f++, callback: a, priorityLevel: e, startTime: l, expirationTime: i = l + i, sortIndex: -1 }, l > o ? (e.sortIndex = l, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, M(k, l - o))) : (e.sortIndex = i, n(s, e), m || h || (m = !0, D(S))), e; }, t.unstable_shouldYield = L, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 840: function (e, t, n) { e.exports = n(53); } }, l = {};
    function o(e) { var t = l[e]; if (void 0 !== t)
        return t.exports; var n = l[e] = { exports: {} }; return a[e](n, n.exports, o), n.exports; }
    o.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, o.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); o.r(a); var l = {}; e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((function (e) { return l[e] = function () { return n[e]; }; })); return l.default = function () { return n; }, o.d(a, l), a; }, o.d = function (e, t) { for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, o.f = {}, o.e = function (e) { return Promise.all(Object.keys(o.f).reduce((function (t, n) { return (o.f[n](e, t), t); }), [])); }, o.u = function (e) { return e + "." + { 314: "b8ecb7fc22f3438e75f7", 490: "ff44d032a2bd5b03913c" }[e] + ".js"; }, o.miniCssF = function (e) { }, o.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "about-webpack:", o.l = function (e, t, a, l) { if (n[e])
        n[e].push(t);
    else {
        var i, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == r + a) {
                    i = f;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", r + a), i.src = e), n[e] = [t];
        var d = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(d.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i);
    } }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && !e;)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e; })(), (function () { var e = { 179: 0 }; o.f.j = function (t, n) { var r = o.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = a);
            var l = o.p + o.u(t), i = new Error;
            o.l(l, (function (n) { if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), l = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")", i.name = "ChunkLoadError", i.type = a, i.request = l, r[1](i);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, l = n[0], i = n[1], u = n[2], s = 0; if (l.some((function (t) { return 0 !== e[t]; }))) {
        for (r in i)
            o.o(i, r) && (o.m[r] = i[r]);
        u && u(o);
    } for (t && t(n); s < l.length; s++)
        a = l[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunkabout_webpack = self.webpackChunkabout_webpack || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), (function () { var e = o(893), t = o(745), n = o(294), r = o.t(n, 2); var a = "j_hXvOGO"; function l() { return l = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, l.apply(this, arguments); } var i; !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(i || (i = {})); var u = "popstate"; function s(e, t) { if (!1 === e || null == e)
        throw new Error(t); } function c(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } } function f(e, t) { return { usr: e.state, key: e.key, idx: t }; } function d(e, t, n, r) { return void 0 === n && (n = null), l({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? h(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); } function p(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _c = e.search, n = _c === void 0 ? "" : _c, _d = e.hash, r = _d === void 0 ? "" : _d; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; } function h(e) { var t = {}; if (e) {
        var n_1 = e.indexOf("#");
        n_1 >= 0 && (t.hash = e.substr(n_1), e = e.substr(0, n_1));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; } var m; !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(m || (m = {})); var v = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]); function g(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map((function (e, a) { var o = __spreadArray(__spreadArray([], n, true), [a], false), i = "string" == typeof e.id ? e.id : o.join("-"); if (s(!0 !== e.index || !e.children, "Cannot specify children on an index route"), s(!r[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_2 = l({}, e, t(e), { id: i });
        return r[i] = n_2, n_2;
    } {
        var n_3 = l({}, e, t(e), { id: i, children: void 0 });
        return r[i] = n_3, e.children && (n_3.children = g(e.children, t, o, r)), n_3;
    } })); } function y(e, t, n) { void 0 === n && (n = "/"); var r = T(("string" == typeof t ? h(t) : t).pathname || "/", n); if (null == r)
        return null; var a = b(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); var l = null; for (var e_1 = 0; null == l && e_1 < a.length; ++e_1)
        l = L(a[e_1], z(r)); return l; } function b(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, l) { var o = { relativePath: void 0 === l ? e.path || "" : l, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; o.relativePath.startsWith("/") && (s(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); var i = U([r, o.relativePath]), u = n.concat(o); e.children && e.children.length > 0 && (s(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), b(e.children, t, u, i)), (null != e.path || e.index) && t.push({ path: i, score: R(i, e.index), routesMeta: u }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _c = w(e.path); _b < _c.length; _b++) {
            var n_4 = _c[_b];
            a(e, t, n_4);
        }
    else
        a(e, t); })), t; } function w(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), l = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [l, ""] : [l]; var o = w(r.join("/")), i = []; return i.push.apply(i, o.map((function (e) { return "" === e ? l : [l, e].join("/"); }))), a && i.push.apply(i, o), i.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); } var k = /^:\w+$/, S = 3, x = 2, E = 1, C = 10, _ = -2, P = function (e) { return "*" === e; }; function R(e, t) { var n = e.split("/"), r = n.length; return n.some(P) && (r += _), t && (r += x), n.filter((function (e) { return !P(e); })).reduce((function (e, t) { return e + (k.test(t) ? S : "" === t ? E : C); }), r); } function L(e, t) { var n = e.routesMeta, r = {}, a = "/", l = []; for (var e_2 = 0; e_2 < n.length; ++e_2) {
        var o_1 = n[e_2], i_1 = e_2 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = N({ path: o_1.relativePath, caseSensitive: o_1.caseSensitive, end: i_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = o_1.route;
        l.push({ params: r, pathname: U([a, s_1.pathname]), pathnameBase: F(U([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = U([a, s_1.pathnameBase]));
    } return l; } function N(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function (e, t) { return (r.push(t), "/([^\\/]+)"); })); return e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var l = a[0], o = l.replace(/(.)\/+$/, "$1"), i = a.slice(1); return { params: r.reduce((function (e, t, n) { if ("*" === t) {
            var e_3 = i[n] || "";
            o = l.slice(0, l.length - e_3.length).replace(/(.)\/+$/, "$1");
        } return e[t] = function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(i[n] || "", t), e; }), {}), pathname: l, pathnameBase: o, pattern: e }; } function z(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } } function T(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; } function D(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; } function M(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); } function O(e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = h(e) : (a = l({}, e), s(!a.pathname || !a.pathname.includes("?"), D("?", "pathname", "search", a)), s(!a.pathname || !a.pathname.includes("#"), D("#", "pathname", "hash", a)), s(!a.search || !a.search.includes("#"), D("#", "search", "hash", a))); var o, i = "" === e || "" === a.pathname, u = i ? "/" : a.pathname; if (r || null == u)
        o = n;
    else {
        var e_4 = t.length - 1;
        if (u.startsWith("..")) {
            var t_1 = u.split("/");
            for (; ".." === t_1[0];)
                t_1.shift(), e_4 -= 1;
            a.pathname = t_1.join("/");
        }
        o = e_4 >= 0 ? t[e_4] : "/";
    } var c = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? h(e) : e, n = _b.pathname, _c = _b.search, r = _c === void 0 ? "" : _c, _d = _b.hash, a = _d === void 0 ? "" : _d, l = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: l, search: j(r), hash: I(a) }; }(a, o), f = u && "/" !== u && u.endsWith("/"), d = (i || "." === u) && n.endsWith("/"); return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"), c; } var U = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, F = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, j = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, I = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }; Error;
        var A = /** @class */ (function () {
            function A(e, t, n, r) {
                void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
            }
            return A;
        }()); function B(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; } var $ = ["post", "put", "patch", "delete"], W = new Set($), H = __spreadArray(["get"], $, true), V = new Set(H), Q = new Set([301, 302, 303, 307, 308]), q = new Set([307, 308]), K = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Y = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, X = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, G = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, J = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); }; function Z(e, t, n, r, a, l, o) { var i, u; if (null != l && "path" !== o) {
        i = [];
        for (var _b = 0, t_2 = t; _b < t_2.length; _b++) {
            var e_5 = t_2[_b];
            if (i.push(e_5), e_5.route.id === l) {
                u = e_5;
                break;
            }
        }
    }
    else
        i = t, u = t[t.length - 1]; var s = O(a || ".", M(i).map((function (e) { return e.pathnameBase; })), T(e.pathname, n) || e.pathname, "path" === o); return null == a && (s.search = e.search, s.hash = e.hash), null != a && "" !== a && "." !== a || !u || !u.route.index || Se(s.search) || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (s.pathname = "/" === s.pathname ? n : U([n, s.pathname])), p(s); } function ee(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !V.has(a.toLowerCase())))
        return { path: n, error: pe(405, { method: r.formMethod }) }; var a; var l, o, i = function () { return ({ path: n, error: pe(400, { type: "invalid-body" }) }); }, u = r.formMethod || "get", c = e ? u.toUpperCase() : u.toLowerCase(), f = me(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!be(c))
                return i();
            var e_6 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }), "") : String(r.body);
            return { path: n, submission: { formMethod: c, formAction: f, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_6 } };
        }
        if ("application/json" === r.formEncType) {
            if (!be(c))
                return i();
            try {
                var e_7 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: c, formAction: f, formEncType: r.formEncType, formData: void 0, json: e_7, text: void 0 } };
            }
            catch (e) {
                return i();
            }
        }
    } if (s("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        l = ie(r.formData), o = r.formData;
    else if (r.body instanceof FormData)
        l = ie(r.body), o = r.body;
    else if (r.body instanceof URLSearchParams)
        l = r.body, o = ue(l);
    else if (null == r.body)
        l = new URLSearchParams, o = new FormData;
    else
        try {
            l = new URLSearchParams(r.body), o = ue(l);
        }
        catch (e) {
            return i();
        } var d = { formMethod: c, formAction: f, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 }; if (be(d.formMethod))
        return { path: n, submission: d }; var m = h(n); return t && m.search && Se(m.search) && l.append("index", ""), m.search = "?" + l, { path: p(m), submission: d }; } function te(e, t, n, r, a, o, i, u, s, c, f, d, p, h) { var m = h ? Object.values(h)[0] : p ? Object.values(p)[0] : void 0, v = e.createURL(t.location), g = e.createURL(a), b = h ? Object.keys(h)[0] : void 0, w = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex((function (e) { return e.route.id === t; }));
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, b).filter((function (e, n) { if (e.route.lazy)
        return !0; if (null == e.route.loader)
        return !1; if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || i.some((function (t) { return t === e.route.id; })))
        return !0; var a = t.matches[n], u = e; return re(e, l({ currentUrl: v, currentParams: a.params, nextUrl: g, nextParams: u.params }, r, { actionResult: m, defaultShouldRevalidate: o || v.pathname + v.search === g.pathname + g.search || v.search !== g.search || ne(a, u) })); })), k = []; return s.forEach((function (e, a) { if (!n.some((function (t) { return t.route.id === e.routeId; })))
        return; var i = y(f, e.path, d); if (!i)
        return void k.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var s = t.fetchers.get(a), p = xe(i, e.path), h = !1; h = !c.has(a) && (!!u.includes(a) || (s && "idle" !== s.state && void 0 === s.data ? o : re(p, l({ currentUrl: v, currentParams: t.matches[t.matches.length - 1].params, nextUrl: g, nextParams: n[n.length - 1].params }, r, { actionResult: m, defaultShouldRevalidate: o })))), h && k.push({ key: a, routeId: e.routeId, path: e.path, matches: i, match: p, controller: new AbortController }); })), [w, k]; } function ne(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; } function re(e, t) { if (e.route.shouldRevalidate) {
        var n_5 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_5)
            return n_5;
    } return t.defaultShouldRevalidate; } function ae(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, o, e_8, t_3; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    s(a, "No route found in manifest");
                    o = {};
                    for (e_8 in r) {
                        t_3 = void 0 !== a[e_8] && "hasErrorBoundary" !== e_8;
                        c(!t_3, 'Route "' + a.id + '" has a static property "' + e_8 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_8 + '" will be ignored.'), t_3 || v.has(e_8) || (o[e_8] = r[e_8]);
                    }
                    Object.assign(a, o), Object.assign(a, l({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    } function le(e, t, n, r, a, l, o, i) {
        return __awaiter(this, void 0, void 0, function () { var u, c, f, d, r_3, e_10, t_4, e_11, r_4, e_12, e_9, e_13, a_1, e_14, n_6, r_5, a_2, l_1, _b, p, h, v; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    void 0 === i && (i = {});
                    d = function (e) { var r, a = new Promise((function (e, t) { return r = t; })); return f = function () { return r(); }, t.signal.addEventListener("abort", f), Promise.race([e({ request: t, params: n.params, context: i.requestContext }), a]); };
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([d(r_3).catch((function (t) { e_10 = t; })), ae(n.route, l, a)])];
                case 2:
                    t_4 = _c.sent();
                    if (e_10)
                        throw e_10;
                    c = t_4[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, ae(n.route, l, a)];
                case 4:
                    if (_c.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_11 = new URL(t.url), r_4 = e_11.pathname + e_11.search;
                            throw pe(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: m.data, data: void 0 }];
                    }
                    return [4 /*yield*/, d(r_3)];
                case 5:
                    c = _c.sent();
                    _c.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_12 = new URL(t.url);
                        throw pe(404, { pathname: e_12.pathname + e_12.search });
                    }
                    return [4 /*yield*/, d(r_3)];
                case 8:
                    c = _c.sent();
                    _c.label = 9;
                case 9:
                    s(void 0 !== c, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_9 = _c.sent();
                    u = m.error, c = e_9;
                    return [3 /*break*/, 12];
                case 11:
                    f && t.signal.removeEventListener("abort", f);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (p = c) && "number" == typeof p.status && "string" == typeof p.statusText && "object" == typeof p.headers && void 0 !== p.body)) return [3 /*break*/, 17];
                    a_1 = c.status;
                    if (Q.has(a_1)) {
                        e_14 = c.headers.get("Location");
                        if (s(e_14, "Redirects returned/thrown from loaders/actions must have a Location header"), G.test(e_14)) {
                            if (!i.isStaticRequest) {
                                n_6 = new URL(t.url), r_5 = e_14.startsWith("//") ? new URL(n_6.protocol + e_14) : new URL(e_14), a_2 = null != T(r_5.pathname, o);
                                r_5.origin === n_6.origin && a_2 && (e_14 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_14 = Z(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, e_14);
                        if (i.isStaticRequest)
                            throw c.headers.set("Location", e_14), c;
                        return [2 /*return*/, { type: m.redirect, status: a_1, location: e_14, revalidate: null !== c.headers.get("X-Remix-Revalidate"), reloadDocument: null !== c.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (i.isRouteRequest)
                        throw { type: u === m.error ? m.error : m.data, response: c };
                    l_1 = c.headers.get("Content-Type");
                    if (!(l_1 && /\bapplication\/json\b/.test(l_1))) return [3 /*break*/, 14];
                    return [4 /*yield*/, c.json()];
                case 13:
                    _b = _c.sent();
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, c.text()];
                case 15:
                    _b = _c.sent();
                    _c.label = 16;
                case 16: return [2 /*return*/, (e_13 = _b, u === m.error ? { type: u, error: new A(a_1, c.statusText, e_13), headers: c.headers } : { type: m.data, data: e_13, statusCode: c.status, headers: c.headers })];
                case 17: return [2 /*return*/, u === m.error ? { type: u, error: c } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(c) ? { type: m.deferred, deferredData: c, statusCode: null == (h = c.init) ? void 0 : h.status, headers: (null == (v = c.init) ? void 0 : v.headers) && new Headers(c.init.headers) } : { type: m.data, data: c }];
            }
        }); });
    } function oe(e, t, n, r) { var a = e.createURL(me(t)).toString(), l = { signal: n }; if (r && be(r.formMethod)) {
        var e_15 = r.formMethod, t_5 = r.formEncType;
        l.method = e_15.toUpperCase(), "application/json" === t_5 ? (l.headers = new Headers({ "Content-Type": t_5 }), l.body = JSON.stringify(r.json)) : "text/plain" === t_5 ? l.body = r.text : "application/x-www-form-urlencoded" === t_5 && r.formData ? l.body = ie(r.formData) : l.body = r.formData;
    } return new Request(a, l); } function ie(e) { var t = new URLSearchParams; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_7 = _d[0], r_6 = _d[1];
        t.append(n_7, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; } function ue(e) { var t = new FormData; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_8 = _d[0], r_7 = _d[1];
        t.append(n_8, r_7);
    } return t; } function se(e, t, n, r, a, o, i, u) {
        var _b;
        var _c = function (e, t, n, r, a) { var l, o = {}, i = null, u = !1, c = {}; return n.forEach((function (n, f) { var d = t[f].route.id; if (s(!ye(n), "Cannot handle redirect results in processLoaderData"), ge(n)) {
            var t_6 = fe(e, d), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), i = i || {}, null == i[t_6.route.id] && (i[t_6.route.id] = a_3), o[d] = void 0, u || (u = !0, l = B(n.error) ? n.error.status : 500), n.headers && (c[d] = n.headers);
        }
        else
            ve(n) ? (a.set(d, n.deferredData), o[d] = n.deferredData.data) : o[d] = n.data, null == n.statusCode || 200 === n.statusCode || u || (l = n.statusCode), n.headers && (c[d] = n.headers); })), r && (i = r, o[Object.keys(r)[0]] = void 0), { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: c }; }(t, n, r, a, u), c = _c.loaderData, f = _c.errors;
        for (var t_7 = 0; t_7 < o.length; t_7++) {
            var _d = o[t_7], n_9 = _d.key, r_8 = _d.match, a_4 = _d.controller;
            s(void 0 !== i && void 0 !== i[t_7], "Did not find corresponding fetcher result");
            var u_2 = i[t_7];
            if (!a_4 || !a_4.signal.aborted)
                if (ge(u_2)) {
                    var t_8 = fe(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    f && f[t_8.route.id] || (f = l({}, f, (_b = {}, _b[t_8.route.id] = u_2.error, _b))), e.fetchers.delete(n_9);
                }
                else if (ye(u_2))
                    s(!1, "Unhandled fetcher revalidation redirect");
                else if (ve(u_2))
                    s(!1, "Unhandled fetcher deferred data");
                else {
                    var t_9 = Pe(u_2.data);
                    e.fetchers.set(n_9, t_9);
                }
        }
        return { loaderData: c, errors: f };
    } function ce(e, t, n, r) { var a = l({}, t); for (var _b = 0, n_10 = n; _b < n_10.length; _b++) {
        var l_2 = n_10[_b];
        var n_11 = l_2.route.id;
        if (t.hasOwnProperty(n_11) ? void 0 !== t[n_11] && (a[n_11] = t[n_11]) : void 0 !== e[n_11] && l_2.route.loader && (a[n_11] = e[n_11]), r && r.hasOwnProperty(n_11))
            break;
    } return a; } function fe(e, t) { return (t ? e.slice(0, e.findIndex((function (e) { return e.route.id === t; })) + 1) : __spreadArray([], e, true)).reverse().find((function (e) { return !0 === e.route.hasErrorBoundary; })) || e[0]; } function de(e) { var t = e.find((function (e) { return e.index || !e.path || "/" === e.path; })) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; } function pe(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, l = _b.type, o = "Unknown Server Error", i = "Unknown @remix-run/router error"; return 400 === e ? (o = "Bad Request", a && n && r ? i = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === l ? i = "defer() is not supported in actions" : "invalid-body" === l && (i = "Unable to encode submission body")) : 403 === e ? (o = "Forbidden", i = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (o = "Not Found", i = 'No route matches URL "' + n + '"') : 405 === e && (o = "Method Not Allowed", a && n && r ? i = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new A(e || 500, o, new Error(i), !0); } function he(e) { for (var t_10 = e.length - 1; t_10 >= 0; t_10--) {
        var n_12 = e[t_10];
        if (ye(n_12))
            return { result: n_12, idx: t_10 };
    } } function me(e) { return p(l({}, "string" == typeof e ? h(e) : e, { hash: "" })); } function ve(e) { return e.type === m.deferred; } function ge(e) { return e.type === m.error; } function ye(e) { return (e && e.type) === m.redirect; } function be(e) { return W.has(e.toLowerCase()); } function we(e, t, n, r, a, l) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, o_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (o_2) {
                        var i_2, u_3, c_2, f_1, e_16;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    i_2 = n[o_2], u_3 = t[o_2];
                                    if (!u_3)
                                        return [2 /*return*/, "continue"];
                                    c_2 = e.find((function (e) { return e.route.id === u_3.route.id; })), f_1 = null != c_2 && !ne(c_2, u_3) && void 0 !== (l && l[u_3.route.id]);
                                    if (!(ve(i_2) && (a || f_1))) return [3 /*break*/, 2];
                                    e_16 = r[o_2];
                                    s(e_16, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, ke(i_2, e_16, a).then((function (e) { e && (n[o_2] = e || n[o_2]); }))];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    o_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(o_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(o_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    o_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    } function ke(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: m.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: m.error, error: e }];
                            }
                        return [2 /*return*/, { type: m.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    } function Se(e) { return new URLSearchParams(e).getAll("index").some((function (e) { return "" === e; })); } function xe(e, t) { var n = "string" == typeof t ? h(t).search : t.search; if (e[e.length - 1].route.index && Se(n || ""))
        return e[e.length - 1]; var r = M(e); return r[r.length - 1]; } function Ee(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, l = e.formData, o = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != l ? { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 } : void 0 !== o ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 } : void 0; } function Ce(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; } function _e(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; } function Pe(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; } function Re() { return Re = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Re.apply(this, arguments); } Symbol("deferred"); var Le = n.createContext(null), Ne = n.createContext(null), ze = n.createContext(null), Te = n.createContext(null), De = n.createContext({ outlet: null, matches: [], isDataRoute: !1 }), Me = n.createContext(null); function Oe() { return null != n.useContext(Te); } function Ue() { return Oe() || s(!1), n.useContext(Te).location; } function Fe(e) { n.useContext(ze).static || n.useLayoutEffect(e); } function je() { var e = n.useContext(De).isDataRoute; return e ? function () { var e = function (e) { var t = n.useContext(Le); return t || s(!1), t; }(Qe.UseNavigateStable).router, t = Ke(qe.UseNavigateStable), r = n.useRef(!1); Fe((function () { r.current = !0; })); var a = n.useCallback((function (n, a) { void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, Re({ fromRouteId: t }, a))); }), [e, t]); return a; }() : function () { Oe() || s(!1); var e = n.useContext(Le), _b = n.useContext(ze), t = _b.basename, r = _b.navigator, a = n.useContext(De).matches, l = Ue().pathname, o = JSON.stringify(M(a).map((function (e) { return e.pathnameBase; }))), i = n.useRef(!1); return Fe((function () { i.current = !0; })), n.useCallback((function (n, a) { if (void 0 === a && (a = {}), !i.current)
        return; if ("number" == typeof n)
        return void r.go(n); var u = O(n, JSON.parse(o), l, "path" === a.relative); null == e && "/" !== t && (u.pathname = "/" === u.pathname ? t : U([t, u.pathname])), (a.replace ? r.replace : r.push)(u, a.state, a); }), [t, r, o, l, e]); }(); } var Ie = n.createContext(null); function Ae(e, t) { var r = (void 0 === t ? {} : t).relative, a = n.useContext(De).matches, l = Ue().pathname, o = JSON.stringify(M(a).map((function (e) { return e.pathnameBase; }))); return n.useMemo((function () { return O(e, JSON.parse(o), l, "path" === r); }), [e, o, l, r]); } function Be(e, t, r) { Oe() || s(!1); var a = n.useContext(ze).navigator, l = n.useContext(De).matches, o = l[l.length - 1], u = o ? o.params : {}, c = (o && o.pathname, o ? o.pathnameBase : "/"); o && o.route; var f, d = Ue(); if (t) {
        var p;
        var e_17 = "string" == typeof t ? h(t) : t;
        "/" === c || (null == (p = e_17.pathname) ? void 0 : p.startsWith(c)) || s(!1), f = e_17;
    }
    else
        f = d; var m = f.pathname || "/", v = y(e, { pathname: "/" === c ? m : m.slice(c.length) || "/" }), g = function (e, t, r) { var a; if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
        var l;
        if (null == (l = r) || !l.errors)
            return null;
        e = r.matches;
    } var o = e, i = null == (a = r) ? void 0 : a.errors; if (null != i) {
        var e_18 = o.findIndex((function (e) { return e.route.id && (null == i ? void 0 : i[e.route.id]); }));
        e_18 >= 0 || s(!1), o = o.slice(0, Math.min(o.length, e_18 + 1));
    } return o.reduceRight((function (e, a, l) { var u = a.route.id ? null == i ? void 0 : i[a.route.id] : null, s = null; r && (s = a.route.errorElement || We); var c = t.concat(o.slice(0, l + 1)), f = function () { var t; return t = u ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(Ve, { match: a, routeContext: { outlet: e, matches: c, isDataRoute: null != r }, children: t }); }; return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l) ? n.createElement(He, { location: r.location, revalidation: r.revalidation, component: s, error: u, children: f(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : f(); }), null); }(v && v.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, u, e.params), pathname: U([c, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? c : U([c, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), l, r); return t && g ? n.createElement(Te.Provider, { value: { location: Re({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: i.Pop } }, g) : g; } function $e() { var e = function () { var e; var t = n.useContext(Me), r = function (e) { var t = n.useContext(Ne); return t || s(!1), t; }(qe.UseRouteError), a = Ke(qe.UseRouteError); return t || (null == (e = r.errors) ? void 0 : e[a]); }(), t = B(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? n.createElement("pre", { style: a }, r) : null, null); } var We = n.createElement($e, null);
        var He = /** @class */ (function (_super) {
            __extends(He, _super);
            function He(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
                return _this;
            }
            He.getDerivedStateFromError = function (e) { return { error: e }; };
            He.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
            He.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
            He.prototype.render = function () { return this.state.error ? n.createElement(De.Provider, { value: this.props.routeContext }, n.createElement(Me.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
            return He;
        }(n.Component)); function Ve(e) { var t = e.routeContext, r = e.match, a = e.children, l = n.useContext(Le); return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(De.Provider, { value: t }, a); } var Qe = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(Qe || {}), qe = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(qe || {}); function Ke(e) { var t = function (e) { var t = n.useContext(De); return t || s(!1), t; }(), r = t.matches[t.matches.length - 1]; return r.route.id || s(!1), r.route.id; } var Ye = r.startTransition; function Xe(e) { var t = e.routes, n = e.state; return Be(t, void 0, n); } function Ge(e) { return function (e) { var t = n.useContext(De).outlet; return t ? n.createElement(Ie.Provider, { value: e }, t) : t; }(e.context); } function Je(e) { var _b = e.basename, t = _b === void 0 ? "/" : _b, _c = e.children, r = _c === void 0 ? null : _c, a = e.location, _d = e.navigationType, l = _d === void 0 ? i.Pop : _d, o = e.navigator, _f = e.static, u = _f === void 0 ? !1 : _f; Oe() && s(!1); var c = t.replace(/^\/*/, "/"), f = n.useMemo((function () { return ({ basename: c, navigator: o, static: u }); }), [c, o, u]); "string" == typeof a && (a = h(a)); var _g = a.pathname, d = _g === void 0 ? "/" : _g, _h = a.search, p = _h === void 0 ? "" : _h, _j = a.hash, m = _j === void 0 ? "" : _j, _k = a.state, v = _k === void 0 ? null : _k, _m = a.key, g = _m === void 0 ? "default" : _m, y = n.useMemo((function () { var e = T(d, c); return null == e ? null : { location: { pathname: e, search: p, hash: m, state: v, key: g }, navigationType: l }; }), [c, d, p, m, v, g, l]); return null == y ? null : n.createElement(ze.Provider, { value: f }, n.createElement(Te.Provider, { children: r, value: y })); } function Ze() { return Ze = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Ze.apply(this, arguments); } new Promise((function () { })), n.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); var et = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"]; function tt(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_11 = t; _b < t_11.length; _b++) {
        var _c = t_11[_b], e_19 = _c[0], r_9 = _c[1];
        if (r_9 && "RouteErrorResponse" === r_9.__type)
            n[e_19] = new A(r_9.status, r_9.statusText, r_9.data, !0 === r_9.internal);
        else if (r_9 && "Error" === r_9.__type) {
            if (r_9.__subType) {
                var t_12 = window[r_9.__subType];
                if ("function" == typeof t_12)
                    try {
                        var a_5 = new t_12(r_9.message);
                        a_5.stack = "", n[e_19] = a_5;
                    }
                    catch (e) { }
            }
            if (null == n[e_19]) {
                var t_13 = new Error(r_9.message);
                t_13.stack = "", n[e_19] = t_13;
            }
        }
        else
            n[e_19] = r_9;
    } return n; } r.startTransition; var nt = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, rt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, at = n.forwardRef((function (e, t) { var r, a = e.onClick, l = e.relative, o = e.reloadDocument, i = e.replace, u = e.state, c = e.target, f = e.to, d = e.preventScrollReset, h = function (e, t) { if (null == e)
        return {}; var n, r, a = {}, l = Object.keys(e); for (r = 0; r < l.length; r++)
        n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]); return a; }(e, et), m = n.useContext(ze).basename, v = !1; if ("string" == typeof f && rt.test(f) && (r = f, nt))
        try {
            var e_20 = new URL(window.location.href), t_14 = f.startsWith("//") ? new URL(e_20.protocol + f) : new URL(f), n_13 = T(t_14.pathname, m);
            t_14.origin === e_20.origin && null != n_13 ? f = n_13 + t_14.search + t_14.hash : v = !0;
        }
        catch (e) { } var g = function (e, t) { var r = (void 0 === t ? {} : t).relative; Oe() || s(!1); var _b = n.useContext(ze), a = _b.basename, l = _b.navigator, _c = Ae(e, { relative: r }), o = _c.hash, i = _c.pathname, u = _c.search, c = i; return "/" !== a && (c = "/" === i ? a : U([a, i])), l.createHref({ pathname: c, search: u, hash: o }); }(f, { relative: l }), y = function (e, t) { var _b = void 0 === t ? {} : t, r = _b.target, a = _b.replace, l = _b.state, o = _b.preventScrollReset, i = _b.relative, u = je(), s = Ue(), c = Ae(e, { relative: i }); return n.useCallback((function (t) { if (function (e, t) { return !(0 !== e.button || t && "_self" !== t || function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e)); }(t, r)) {
        t.preventDefault();
        var n_14 = void 0 !== a ? a : p(s) === p(c);
        u(e, { replace: n_14, state: l, preventScrollReset: o, relative: i });
    } }), [s, u, c, a, l, r, e, o, i]); }(f, { replace: i, state: u, target: c, preventScrollReset: d, relative: l }); return n.createElement("a", Ze({}, h, { href: r || g, onClick: v || o ? a : function (e) { a && a(e), e.defaultPrevented || y(e); }, ref: t, target: c })); })); var lt, ot; (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"; })(lt || (lt = {})), function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(ot || (ot = {})); var it = o.p + "0b9e93289b077299c74e.png", ut = o.p + "2bb1c80adc60f9108235.jpg"; var st; function ct() { return ct = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, ct.apply(this, arguments); } var ft = function (e) { return n.createElement("svg", ct({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 512.000000 512.000000", preserveAspectRatio: "xMidYMid meet" }, e), st || (st = n.createElement("g", { transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)", fill: "currentColor", stroke: "none" }, n.createElement("path", { d: "M395 4759 c-138 -28 -288 -146 -344 -271 -37 -81 -55 -173 -49 -246 3 -31 99 -423 212 -869 l207 -813 -207 -812 c-113 -447 -209 -839 -212 -870 -21 -238 164 -474 408 -518 77 -14 167 -7 241 19 126 44 4189 1735 4238 1764 136 81 231 253 231 417 0 164 -95 336 -231 417 -49 29 -4110 1719 -4239 1765 -66 23 -186 31 -255 17z m187 -313 c122 -46 4123 -1708 4150 -1724 65 -38 100 -131 80 -208 -17 -63 -48 -101 -107 -129 -91 -44 -4129 -1716 -4171 -1727 -122 -33 -250 87 -230 215 4 22 92 374 196 782 105 409 190 746 190 749 0 3 343 6 763 6 705 0 765 1 797 18 107 53 107 211 0 264 -32 17 -92 18 -797 18 -420 0 -763 3 -763 6 0 3 -85 340 -190 749 -104 408 -192 760 -196 782 -17 110 73 218 188 222 15 1 56 -10 90 -23z" })))); }; var dt = (0, n.lazy)((function () { return o.e(314).then(o.bind(o, 314)); })), pt = (0, n.lazy)((function () { return o.e(490).then(o.bind(o, 490)); })), ht = document.getElementById("root"); if (!ht)
        throw new Error("Root element not found"); var mt, vt, gt = (mt = [{ path: "/", element: (0, e.jsx)((function () { var t = (0, n.useState)(0), r = t[0], l = t[1]; return (0, e.jsxs)("div", { className: "CFWaGIWI", children: [(0, e.jsxs)("h1", { children: ["PLATFORM=", "desktop"] }), (0, e.jsxs)("div", { children: [(0, e.jsx)("img", { height: 100, src: it, alt: "", style: { backgroundColor: "#000000" } }), (0, e.jsx)("img", { height: 100, src: ut, alt: "" }), (0, e.jsx)("div", { children: (0, e.jsx)(ft, { height: 100, width: 100, style: { color: "red" }, fill: "red" }) })] }), (0, e.jsxs)("div", { className: "mWhhGg3G", children: [(0, e.jsx)(at, { to: "/about", children: "about" }), (0, e.jsx)(at, { to: "/shop", children: "shop" })] }), (0, e.jsx)("div", { children: r }), (0, e.jsxs)("div", { children: [(0, e.jsx)("button", { className: a, onClick: function () { return l(r + 1); }, children: "+" }), (0, e.jsx)("button", { className: a, onClick: function () { return l(r - 1); }, children: "-" })] }), (0, e.jsx)(Ge, {})] }); }), {}), children: [{ path: "/about", element: (0, e.jsx)(n.Suspense, { fallback: (0, e.jsx)("p", { children: "Loading..." }), children: (0, e.jsx)(dt, {}) }) }, { path: "/shop", element: (0, e.jsx)(n.Suspense, { fallback: (0, e.jsx)("p", { children: "Loading..." }), children: (0, e.jsx)(pt, {}) }) }] }], function (e) {
        var _b;
        var t = e.window ? e.window : "undefined" != typeof window ? window : void 0, n = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement, r = !n;
        var a;
        if (s(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties)
            a = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
            var t_15 = e.detectErrorBoundary;
            a = function (e) { return ({ hasErrorBoundary: t_15(e) }); };
        }
        else
            a = J;
        var o, u = {}, f = g(e.routes, a, void 0, u), p = e.basename || "/", h = l({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future), v = null, b = new Set, w = null, k = null, S = null, x = null != e.hydrationData, E = y(f, e.history.location, p), C = null;
        if (null == E) {
            var t_16 = pe(404, { pathname: e.history.location.pathname }), _c = de(f), n_15 = _c.matches, r_10 = _c.route;
            E = n_15, C = (_b = {}, _b[r_10.id] = t_16, _b);
        }
        var _, P, R = !(E.some((function (e) { return e.route.lazy; })) || E.some((function (e) { return e.route.loader; })) && null == e.hydrationData), L = { historyAction: e.history.action, location: e.history.location, matches: E, initialized: R, navigation: K, restoreScrollPosition: null == e.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: e.hydrationData && e.hydrationData.loaderData || {}, actionData: e.hydrationData && e.hydrationData.actionData || null, errors: e.hydrationData && e.hydrationData.errors || C, fetchers: new Map, blockers: new Map }, N = i.Pop, z = !1, D = !1, M = !1, O = [], U = [], F = new Map, j = 0, I = -1, A = new Map, B = new Set, $ = new Map, W = new Map, H = new Map, V = !1;
        function Q(e) { L = l({}, L, e), b.forEach((function (e) { return e(L); })); }
        function ne(t, n) { var r, a; var u, s = null != L.actionData && null != L.navigation.formMethod && be(L.navigation.formMethod) && "loading" === L.navigation.state && !0 !== (null == (r = t.state) ? void 0 : r._isRedirect); u = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : s ? L.actionData : null; var c = n.loaderData ? ce(L.loaderData, n.loaderData, n.matches || [], n.errors) : L.loaderData, d = L.blockers; d.size > 0 && (d = new Map(d), d.forEach((function (e, t) { return d.set(t, X); }))); var p = !0 === z || null != L.navigation.formMethod && be(L.navigation.formMethod) && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect); o && (f = o, o = void 0), D || N === i.Pop || (N === i.Push ? e.history.push(t, t.state) : N === i.Replace && e.history.replace(t, t.state)), Q(l({}, n, { actionData: u, loaderData: c, historyAction: N, location: t, initialized: !0, navigation: K, revalidation: "idle", restoreScrollPosition: je(t, n.matches || L.matches), preventScrollReset: p, blockers: d })), N = i.Pop, z = !1, D = !1, M = !1, O = [], U = []; }
        function re(t, n, r) {
            return __awaiter(this, void 0, void 0, function () {
                var s, c, d, e_21, _b, t_17, r_11, h, v, g, b, k, e_22, _c, x, E, C;
                var _d, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            P && P.abort(), P = null, N = t, D = !0 === (r && r.startUninterruptedRevalidation), function (e, t) { if (w && S) {
                                var n_16 = Fe(e, t);
                                w[n_16] = S();
                            } }(L.location, L.matches), z = !0 === (r && r.preventScrollReset);
                            s = o || f, c = r && r.overrideNavigation, d = y(s, n, p);
                            if (!d) {
                                e_21 = pe(404, { pathname: n.pathname }), _b = de(s), t_17 = _b.matches, r_11 = _b.route;
                                return [2 /*return*/, (Ue(), void ne(n, { matches: t_17, loaderData: {}, errors: (_d = {}, _d[r_11.id] = e_21, _d) }))];
                            }
                            if (L.initialized && !M && (h = L.location, v = n, h.pathname === v.pathname && h.search === v.search && ("" === h.hash ? "" !== v.hash : h.hash === v.hash || "" !== v.hash)) && !(r && r.submission && be(r.submission.formMethod)))
                                return [2 /*return*/, void ne(n, { matches: d })];
                            P = new AbortController;
                            k = oe(e.history, n, P.signal, r && r.submission);
                            if (!(r && r.pendingError)) return [3 /*break*/, 1];
                            b = (_f = {}, _f[fe(d).route.id] = r.pendingError, _f);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(r && r.submission && be(r.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (e, t, n, r, l) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var o, s, c, e_23, e_24;
                                        var _b, _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    void 0 === l && (l = {}), me();
                                                    s = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(t, n);
                                                    Q({ navigation: s });
                                                    c = xe(r, t);
                                                    if (!(c.route.action || c.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, le("action", e, c, r, u, a, p)];
                                                case 1:
                                                    if (o = _d.sent(), e.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    o = { type: m.error, error: pe(405, { method: e.method, pathname: t.pathname, routeId: c.route.id }) };
                                                    _d.label = 3;
                                                case 3:
                                                    if (!ye(o)) return [3 /*break*/, 5];
                                                    e_23 = l && null != l.replace ? l.replace : o.location === L.location.pathname + L.location.search;
                                                    return [4 /*yield*/, ie(L, o, { submission: n, replace: e_23 })];
                                                case 4: return [2 /*return*/, (_d.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (ge(o)) {
                                                        e_24 = fe(r, c.route.id);
                                                        return [2 /*return*/, (!0 !== (l && l.replace) && (N = i.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[e_24.route.id] = o.error, _b) })];
                                                    }
                                                    if (ve(o))
                                                        throw pe(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_c = {}, _c[c.route.id] = o.data, _c) }];
                                            }
                                        });
                                    });
                                }(k, n, r.submission, d, { replace: r.replace })];
                        case 2:
                            e_22 = _g.sent();
                            if (e_22.shortCircuited)
                                return [2 /*return*/];
                            g = e_22.pendingActionData, b = e_22.pendingActionError, c = Ce(n, r.submission), k = new Request(k.url, { signal: k.signal });
                            _g.label = 3;
                        case 3: return [4 /*yield*/, function (t, n, r, a, i, u, s, c, d) {
                                return __awaiter(this, void 0, void 0, function () { var h, m, v, _b, g, y, e_25, e_26, b, _c, w, k, S, x, e_27, _d, E, C, _, R; return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            h = a || Ce(n, i), m = i || u || Ee(h), v = o || f, _b = te(e.history, L, r, m, n, M, O, U, $, B, v, p, c, d), g = _b[0], y = _b[1];
                                            if (Ue((function (e) { return !(r && r.some((function (t) { return t.route.id === e; }))) || g && g.some((function (t) { return t.route.id === e; })); })), I = ++j, 0 === g.length && 0 === y.length) {
                                                e_25 = ze();
                                                return [2 /*return*/, (ne(n, l({ matches: r, loaderData: {}, errors: d || null }, c ? { actionData: c } : {}, e_25 ? { fetchers: new Map(L.fetchers) } : {})), { shortCircuited: !0 })];
                                            }
                                            if (!D) {
                                                y.forEach((function (e) { var t = L.fetchers.get(e.key), n = _e(void 0, t ? t.data : void 0); L.fetchers.set(e.key, n); }));
                                                e_26 = c || L.actionData;
                                                Q(l({ navigation: h }, e_26 ? 0 === Object.keys(e_26).length ? { actionData: null } : { actionData: e_26 } : {}, y.length > 0 ? { fetchers: new Map(L.fetchers) } : {}));
                                            }
                                            y.forEach((function (e) { F.has(e.key) && Le(e.key), e.controller && F.set(e.key, e.controller); }));
                                            b = function () { return y.forEach((function (e) { return Le(e.key); })); };
                                            P && P.signal.addEventListener("abort", b);
                                            return [4 /*yield*/, ue(L.matches, r, g, y, t)];
                                        case 1:
                                            _c = _f.sent(), w = _c.results, k = _c.loaderResults, S = _c.fetcherResults;
                                            if (t.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            P && P.signal.removeEventListener("abort", b), y.forEach((function (e) { return F.delete(e.key); }));
                                            x = he(w);
                                            if (!x) return [3 /*break*/, 3];
                                            if (x.idx >= g.length) {
                                                e_27 = y[x.idx - g.length].key;
                                                B.add(e_27);
                                            }
                                            return [4 /*yield*/, ie(L, x.result, { replace: s })];
                                        case 2: return [2 /*return*/, (_f.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _d = se(L, r, g, k, d, y, S, W), E = _d.loaderData, C = _d.errors;
                                            W.forEach((function (e, t) { e.subscribe((function (n) { (n || e.done) && W.delete(t); })); }));
                                            _ = ze(), R = Te(I);
                                            return [2 /*return*/, l({ loaderData: E, errors: C }, _ || R || y.length > 0 ? { fetchers: new Map(L.fetchers) } : {})];
                                    }
                                }); });
                            }(k, n, d, c, r && r.submission, r && r.fetcherSubmission, r && r.replace, g, b)];
                        case 4:
                            _c = _g.sent(), x = _c.shortCircuited, E = _c.loaderData, C = _c.errors;
                            x || (P = null, ne(n, l({ matches: d }, g ? { actionData: g } : {}, { loaderData: E, errors: C })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function ae(e) { return L.fetchers.get(e) || Y; }
        function ie(r, a, o) {
            return __awaiter(this, void 0, void 0, function () { var _b, u, c, f, h, n_17, r_12, m, _c, v, g, y, b, e_28; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = void 0 === o ? {} : o, u = _b.submission, c = _b.fetcherSubmission, f = _b.replace;
                        a.revalidate && (M = !0);
                        h = d(r.location, a.location, { _isRedirect: !0 });
                        if (s(h, "Expected a location on the redirect navigation"), n) {
                            n_17 = !1;
                            if (a.reloadDocument)
                                n_17 = !0;
                            else if (G.test(a.location)) {
                                r_12 = e.history.createURL(a.location);
                                n_17 = r_12.origin !== t.location.origin || null == T(r_12.pathname, p);
                            }
                            if (n_17)
                                return [2 /*return*/, void (f ? t.location.replace(a.location) : t.location.assign(a.location))];
                        }
                        P = null;
                        m = !0 === f ? i.Replace : i.Push, _c = r.navigation, v = _c.formMethod, g = _c.formAction, y = _c.formEncType;
                        !u && !c && v && g && y && (u = Ee(r.navigation));
                        b = u || c;
                        if (!(q.has(a.status) && b && be(b.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, re(m, h, { submission: l({}, b, { formAction: a.location }), preventScrollReset: z })];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_28 = Ce(h, u);
                        return [4 /*yield*/, re(m, h, { overrideNavigation: e_28, fetcherSubmission: c, preventScrollReset: z })];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function ue(t, n, r, l, o) {
            return __awaiter(this, void 0, void 0, function () { var i, s, c; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map((function (e) { return le("loader", o, e, n, u, a, p); })), true), l.map((function (t) { return t.matches && t.match && t.controller ? le("loader", oe(e.history, t.path, t.controller.signal), t.match, t.matches, u, a, p) : { type: m.error, error: pe(404, { pathname: t.path }) }; })), true))];
                    case 1:
                        i = _b.sent(), s = i.slice(0, r.length), c = i.slice(r.length);
                        return [4 /*yield*/, Promise.all([we(t, r, s, s.map((function () { return o.signal; })), !1, L.loaderData), we(t, l.map((function (e) { return e.match; })), c, l.map((function (e) { return e.controller ? e.controller.signal : null; })), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: i, loaderResults: s, fetcherResults: c })];
                }
            }); });
        }
        function me() { M = !0, O.push.apply(O, Ue()), $.forEach((function (e, t) { F.has(t) && (U.push(t), Le(t)); })); }
        function Se(e, t, n) {
            var _b;
            var r = fe(L.matches, t);
            Re(e), Q({ errors: (_b = {}, _b[r.route.id] = n, _b), fetchers: new Map(L.fetchers) });
        }
        function Re(e) { var t = L.fetchers.get(e); !F.has(e) || t && "loading" === t.state && A.has(e) || Le(e), $.delete(e), A.delete(e), B.delete(e), L.fetchers.delete(e); }
        function Le(e) { var t = F.get(e); s(t, "Expected fetch controller: " + e), t.abort(), F.delete(e); }
        function Ne(e) { for (var _b = 0, e_29 = e; _b < e_29.length; _b++) {
            var t_18 = e_29[_b];
            var e_30 = Pe(ae(t_18).data);
            L.fetchers.set(t_18, e_30);
        } }
        function ze() { var e = [], t = !1; for (var _b = 0, B_1 = B; _b < B_1.length; _b++) {
            var n_18 = B_1[_b];
            var r_13 = L.fetchers.get(n_18);
            s(r_13, "Expected fetcher: " + n_18), "loading" === r_13.state && (B.delete(n_18), e.push(n_18), t = !0);
        } return Ne(e), t; }
        function Te(e) { var t = []; for (var _b = 0, A_1 = A; _b < A_1.length; _b++) {
            var _c = A_1[_b], n_19 = _c[0], r_14 = _c[1];
            if (r_14 < e) {
                var e_31 = L.fetchers.get(n_19);
                s(e_31, "Expected fetcher: " + n_19), "loading" === e_31.state && (Le(n_19), A.delete(n_19), t.push(n_19));
            }
        } return Ne(t), t.length > 0; }
        function De(e) { L.blockers.delete(e), H.delete(e); }
        function Me(e, t) { var n = L.blockers.get(e) || X; s("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(L.blockers); r.set(e, t), Q({ blockers: r }); }
        function Oe(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === H.size)
            return; H.size > 1 && c(!1, "A router only supports one blocker at a time"); var a = Array.from(H.entries()), _b = a[a.length - 1], l = _b[0], o = _b[1], i = L.blockers.get(l); return i && "proceeding" === i.state ? void 0 : o({ currentLocation: t, nextLocation: n, historyAction: r }) ? l : void 0; }
        function Ue(e) { var t = []; return W.forEach((function (n, r) { e && !e(r) || (n.cancel(), t.push(r), W.delete(r)); })), t; }
        function Fe(e, t) { return k && k(e, t.map((function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, L.loaderData); }))) || e.key; }
        function je(e, t) { if (w) {
            var n_20 = Fe(e, t), r_15 = w[n_20];
            if ("number" == typeof r_15)
                return r_15;
        } return null; }
        return _ = { get basename() { return p; }, get state() { return L; }, get routes() { return f; }, initialize: function () { return v = e.history.listen((function (t) { var n = t.action, r = t.location, a = t.delta; if (V)
                return void (V = !1); c(0 === H.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var l = Oe({ currentLocation: L.location, nextLocation: r, historyAction: n }); return l && null != a ? (V = !0, e.history.go(-1 * a), void Me(l, { state: "blocked", location: r, proceed: function () { Me(l, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), e.history.go(a); }, reset: function () { var e = new Map(L.blockers); e.set(l, X), Q({ blockers: e }); } })) : re(n, r); })), L.initialized || re(i.Pop, L.location), _; }, subscribe: function (e) { return b.add(e), function () { return b.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (w = e, S = t, k = n || null, !x && L.navigation === K) {
                x = !0;
                var e_32 = je(L.location, L.matches);
                null != e_32 && Q({ restoreScrollPosition: e_32 });
            } return function () { w = null, S = null, k = null; }; }, navigate: function t(n, r) {
                return __awaiter(this, void 0, void 0, function () { var a, _b, o, u, s, c, f, m, v, g, y; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if ("number" == typeof n)
                                return [2 /*return*/, void e.history.go(n)];
                            a = Z(L.location, L.matches, p, h.v7_prependBasename, n, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative), _b = ee(h.v7_normalizeFormMethod, !1, a, r), o = _b.path, u = _b.submission, s = _b.error, c = L.location, f = d(L.location, o, r && r.state);
                            f = l({}, f, e.history.encodeLocation(f));
                            m = r && null != r.replace ? r.replace : void 0, v = i.Push;
                            !0 === m ? v = i.Replace : !1 === m || null != u && be(u.formMethod) && u.formAction === L.location.pathname + L.location.search && (v = i.Replace);
                            g = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0, y = Oe({ currentLocation: c, nextLocation: f, historyAction: v });
                            if (!!y) return [3 /*break*/, 2];
                            return [4 /*yield*/, re(v, f, { submission: u, pendingError: s, preventScrollReset: g, replace: r && r.replace })];
                        case 1: return [2 /*return*/, _c.sent()];
                        case 2:
                            Me(y, { state: "blocked", location: f, proceed: function () { Me(y, { state: "proceeding", proceed: void 0, reset: void 0, location: f }), t(n, r); }, reset: function () { var e = new Map(L.blockers); e.set(y, X), Q({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (t, n, i, c) { if (r)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); F.has(t) && Le(t); var d = o || f, m = Z(L.location, L.matches, p, h.v7_prependBasename, i, n, null == c ? void 0 : c.relative), v = y(d, m, p); if (!v)
                return void Se(t, n, pe(404, { pathname: m })); var _b = ee(h.v7_normalizeFormMethod, !0, m, c), g = _b.path, b = _b.submission, w = _b.error; if (w)
                return void Se(t, n, w); var k = xe(v, g); z = !0 === (c && c.preventScrollReset), b && be(b.formMethod) ? function (t, n, r, i, c, d) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_33, h, m, v, g, b, e_34, e_35, w, k, S, x, E, C, _b, _, R, z, _c, T, D, H, V, e_36, _d, q, K, e_37, Y;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (me(), $.delete(t), !i.route.action && !i.route.lazy) {
                                    e_33 = pe(405, { method: d.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void Se(t, n, e_33)];
                                }
                                h = function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(d, L.fetchers.get(t));
                                L.fetchers.set(t, h), Q({ fetchers: new Map(L.fetchers) });
                                m = new AbortController, v = oe(e.history, r, m.signal, d);
                                F.set(t, m);
                                g = j;
                                return [4 /*yield*/, le("action", v, i, c, u, a, p)];
                            case 1:
                                b = _g.sent();
                                if (v.signal.aborted)
                                    return [2 /*return*/, void (F.get(t) === m && F.delete(t))];
                                if (ye(b)) {
                                    if (F.delete(t), I > g) {
                                        e_34 = Pe(void 0);
                                        return [2 /*return*/, (L.fetchers.set(t, e_34), void Q({ fetchers: new Map(L.fetchers) }))];
                                    }
                                    {
                                        B.add(t);
                                        e_35 = _e(d);
                                        return [2 /*return*/, (L.fetchers.set(t, e_35), Q({ fetchers: new Map(L.fetchers) }), ie(L, b, { fetcherSubmission: d }))];
                                    }
                                }
                                if (ge(b))
                                    return [2 /*return*/, void Se(t, n, b.error)];
                                if (ve(b))
                                    throw pe(400, { type: "defer-action" });
                                w = L.navigation.location || L.location, k = oe(e.history, w, m.signal), S = o || f, x = "idle" !== L.navigation.state ? y(S, L.navigation.location, p) : L.matches;
                                s(x, "Didn't find any matches after fetcher action");
                                E = ++j;
                                A.set(t, E);
                                C = _e(d, b.data);
                                L.fetchers.set(t, C);
                                _b = te(e.history, L, x, d, w, M, O, U, $, B, S, p, (_f = {}, _f[i.route.id] = b.data, _f), void 0), _ = _b[0], R = _b[1];
                                R.filter((function (e) { return e.key !== t; })).forEach((function (e) { var t = e.key, n = L.fetchers.get(t), r = _e(void 0, n ? n.data : void 0); L.fetchers.set(t, r), F.has(t) && Le(t), e.controller && F.set(t, e.controller); })), Q({ fetchers: new Map(L.fetchers) });
                                z = function () { return R.forEach((function (e) { return Le(e.key); })); };
                                m.signal.addEventListener("abort", z);
                                return [4 /*yield*/, ue(L.matches, x, _, R, k)];
                            case 2:
                                _c = _g.sent(), T = _c.results, D = _c.loaderResults, H = _c.fetcherResults;
                                if (m.signal.aborted)
                                    return [2 /*return*/];
                                m.signal.removeEventListener("abort", z), A.delete(t), F.delete(t), R.forEach((function (e) { return F.delete(e.key); }));
                                V = he(T);
                                if (V) {
                                    if (V.idx >= _.length) {
                                        e_36 = R[V.idx - _.length].key;
                                        B.add(e_36);
                                    }
                                    return [2 /*return*/, ie(L, V.result)];
                                }
                                _d = se(L, L.matches, _, D, void 0, R, H, W), q = _d.loaderData, K = _d.errors;
                                if (L.fetchers.has(t)) {
                                    e_37 = Pe(b.data);
                                    L.fetchers.set(t, e_37);
                                }
                                Y = Te(E);
                                "loading" === L.navigation.state && E > I ? (s(N, "Expected pending action"), P && P.abort(), ne(L.navigation.location, { matches: x, loaderData: q, errors: K, fetchers: new Map(L.fetchers) })) : (Q(l({ errors: K, loaderData: ce(L.loaderData, q, x, K) }, Y || R.length > 0 ? { fetchers: new Map(L.fetchers) } : {})), M = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(t, n, g, k, v, b) : ($.set(t, { routeId: n, path: g }), function (t, n, r, l, o, i) {
                return __awaiter(this, void 0, void 0, function () {
                    var c, f, d, h, m, v, _b, e_38, e_39, g;
                    var _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                c = L.fetchers.get(t), f = _e(i, c ? c.data : void 0);
                                L.fetchers.set(t, f), Q({ fetchers: new Map(L.fetchers) });
                                d = new AbortController, h = oe(e.history, r, d.signal);
                                F.set(t, d);
                                m = j;
                                return [4 /*yield*/, le("loader", h, l, o, u, a, p)];
                            case 1:
                                v = _d.sent();
                                _b = ve(v);
                                if (!_b) return [3 /*break*/, 3];
                                return [4 /*yield*/, ke(v, h.signal, !0)];
                            case 2:
                                _b = (v = (_d.sent()) || v);
                                _d.label = 3;
                            case 3:
                                if (_b, F.get(t) === d && F.delete(t), h.signal.aborted)
                                    return [2 /*return*/];
                                if (!ye(v)) return [3 /*break*/, 5];
                                if (I > m) {
                                    e_38 = Pe(void 0);
                                    return [2 /*return*/, (L.fetchers.set(t, e_38), void Q({ fetchers: new Map(L.fetchers) }))];
                                }
                                B.add(t);
                                return [4 /*yield*/, ie(L, v)];
                            case 4: return [2 /*return*/, void (_d.sent())];
                            case 5:
                                if (ge(v)) {
                                    e_39 = fe(L.matches, n);
                                    return [2 /*return*/, (L.fetchers.delete(t), void Q({ fetchers: new Map(L.fetchers), errors: (_c = {}, _c[e_39.route.id] = v.error, _c) }))];
                                }
                                s(!ve(v), "Unhandled fetcher deferred data");
                                g = Pe(v.data);
                                L.fetchers.set(t, g), Q({ fetchers: new Map(L.fetchers) });
                                return [2 /*return*/];
                        }
                    });
                });
            }(t, n, g, k, v, b)); }, revalidate: function () { me(), Q({ revalidation: "loading" }), "submitting" !== L.navigation.state && ("idle" !== L.navigation.state ? re(N || L.historyAction, L.navigation.location, { overrideNavigation: L.navigation }) : re(L.historyAction, L.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (t) { return e.history.createHref(t); }, encodeLocation: function (t) { return e.history.encodeLocation(t); }, getFetcher: ae, deleteFetcher: Re, dispose: function () { v && v(), b.clear(), P && P.abort(), L.fetchers.forEach((function (e, t) { return Re(t); })), L.blockers.forEach((function (e, t) { return De(t); })); }, getBlocker: function (e, t) { var n = L.blockers.get(e) || X; return H.get(e) !== t && H.set(e, t), n; }, deleteBlocker: De, _internalFetchControllers: F, _internalActiveDeferreds: W, _internalSetRoutes: function (e) { u = {}, o = g(e, a, void 0, u); } }, _;
    }({ basename: void 0, future: Ze({}, void 0, { v7_prependBasename: !0 }), history: (vt = { window: void 0 }, void 0 === vt && (vt = {}), function (e, t, n, r) { void 0 === r && (r = {}); var _b = r.window, a = _b === void 0 ? document.defaultView : _b, _c = r.v5Compat, o = _c === void 0 ? !1 : _c, c = a.history, h = i.Pop, m = null, v = g(); function g() { return (c.state || { idx: null }).idx; } function y() { h = i.Pop; var e = g(), t = null == e ? null : e - v; v = e, m && m({ action: h, location: w.location, delta: t }); } function b(e) { var t = "null" !== a.location.origin ? a.location.origin : a.location.href, n = "string" == typeof e ? e : p(e); return s(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == v && (v = 0, c.replaceState(l({}, c.state, { idx: v }), "")); var w = { get action() { return h; }, get location() { return e(a, c); }, listen: function (e) { if (m)
                throw new Error("A history only accepts one active listener"); return a.addEventListener(u, y), m = e, function () { a.removeEventListener(u, y), m = null; }; }, createHref: function (e) { return t(a, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (e, t) { h = i.Push; var r = d(w.location, e, t); n && n(r, e), v = g() + 1; var l = f(r, v), u = w.createHref(r); try {
                c.pushState(l, "", u);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                a.location.assign(u);
            } o && m && m({ action: h, location: w.location, delta: 1 }); }, replace: function (e, t) { h = i.Replace; var r = d(w.location, e, t); n && n(r, e), v = g(); var a = f(r, v), l = w.createHref(r); c.replaceState(a, "", l), o && m && m({ action: h, location: w.location, delta: 0 }); }, go: function (e) { return c.go(e); } }; return w; }((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return d("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" == typeof t ? t : p(t); }), null, vt)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = Ze({}, t, { errors: tt(t.errors) })), t; }(), routes: mt, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: n.createElement(e.Component), Component: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: n.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; } }).initialize()); (0, t.s)(ht).render((0, e.jsx)((function (e) { var t = e.fallbackElement, r = e.router, a = e.future, _b = n.useState(r.state), l = _b[0], o = _b[1], i = (a || {}).v7_startTransition, u = n.useCallback((function (e) { i && Ye ? Ye((function () { return o(e); })) : o(e); }), [o, i]); n.useLayoutEffect((function () { return r.subscribe(u); }), [r, u]); var s = n.useMemo((function () { return ({ createHref: r.createHref, encodeLocation: r.encodeLocation, go: function (e) { return r.navigate(e); }, push: function (e, t, n) { return r.navigate(e, { state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); }, replace: function (e, t, n) { return r.navigate(e, { replace: !0, state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); } }); }), [r]), c = r.basename || "/", f = n.useMemo((function () { return ({ router: r, navigator: s, static: !1, basename: c }); }), [r, s, c]); return n.createElement(n.Fragment, null, n.createElement(Le.Provider, { value: f }, n.createElement(Ne.Provider, { value: l }, n.createElement(Je, { basename: c, location: l.location, navigationType: l.historyAction, navigator: s }, l.initialized ? n.createElement(Xe, { routes: r.routes, state: l }) : t))), null); }), { router: gt })); })();
})();
