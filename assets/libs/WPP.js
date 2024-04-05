/*! For license information please see wppconnect-wa.js.LICENSE.txt */
;(() => {
  var __webpack_modules__ = {
      67526: (e, t) => {
        "use strict"
        ;(t.byteLength = function (e) {
          var t = a(e),
            r = t[0],
            n = t[1]
          return (3 * (r + n)) / 4 - n
        }),
          (t.toByteArray = function (e) {
            var t,
              r,
              i = a(e),
              s = i[0],
              u = i[1],
              c = new o(
                (function (e, t, r) {
                  return (3 * (t + r)) / 4 - r
                })(0, s, u)
              ),
              l = 0,
              d = u > 0 ? s - 4 : s
            for (r = 0; r < d; r += 4)
              (t =
                (n[e.charCodeAt(r)] << 18) |
                (n[e.charCodeAt(r + 1)] << 12) |
                (n[e.charCodeAt(r + 2)] << 6) |
                n[e.charCodeAt(r + 3)]),
                (c[l++] = (t >> 16) & 255),
                (c[l++] = (t >> 8) & 255),
                (c[l++] = 255 & t)
            return (
              2 === u &&
                ((t =
                  (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
                (c[l++] = 255 & t)),
              1 === u &&
                ((t =
                  (n[e.charCodeAt(r)] << 10) |
                  (n[e.charCodeAt(r + 1)] << 4) |
                  (n[e.charCodeAt(r + 2)] >> 2)),
                (c[l++] = (t >> 8) & 255),
                (c[l++] = 255 & t)),
              c
            )
          }),
          (t.fromByteArray = function (e) {
            for (
              var t,
                n = e.length,
                o = n % 3,
                i = [],
                s = 16383,
                a = 0,
                c = n - o;
              a < c;
              a += s
            )
              i.push(u(e, a, a + s > c ? c : a + s))
            return (
              1 === o
                ? ((t = e[n - 1]), i.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
                : 2 === o &&
                  ((t = (e[n - 2] << 8) + e[n - 1]),
                  i.push(
                    r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="
                  )),
              i.join("")
            )
          })
        for (
          var r = [],
            n = [],
            o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            i =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = 0;
          s < 64;
          ++s
        )
          (r[s] = i[s]), (n[i.charCodeAt(s)] = s)
        function a(e) {
          var t = e.length
          if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4")
          var r = e.indexOf("=")
          return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)]
        }
        function u(e, t, n) {
          for (var o, i, s = [], a = t; a < n; a += 3)
            (o =
              ((e[a] << 16) & 16711680) +
              ((e[a + 1] << 8) & 65280) +
              (255 & e[a + 2])),
              s.push(
                r[((i = o) >> 18) & 63] +
                  r[(i >> 12) & 63] +
                  r[(i >> 6) & 63] +
                  r[63 & i]
              )
          return s.join("")
        }
        ;(n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63)
      },
      48287: (e, t, r) => {
        "use strict"
        const n = r(67526),
          o = r(251),
          i =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null
        ;(t.hp = u), (t.IS = 50)
        const s = 2147483647
        function a(e) {
          if (e > s)
            throw new RangeError(
              'The value "' + e + '" is invalid for option "size"'
            )
          const t = new Uint8Array(e)
          return Object.setPrototypeOf(t, u.prototype), t
        }
        function u(e, t, r) {
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              )
            return d(e)
          }
          return c(e, t, r)
        }
        function c(e, t, r) {
          if ("string" == typeof e)
            return (function (e, t) {
              if (
                (("string" == typeof t && "" !== t) || (t = "utf8"),
                !u.isEncoding(t))
              )
                throw new TypeError("Unknown encoding: " + t)
              const r = 0 | m(e, t)
              let n = a(r)
              const o = n.write(e, t)
              return o !== r && (n = n.slice(0, o)), n
            })(e, t)
          if (ArrayBuffer.isView(e))
            return (function (e) {
              if (H(e, Uint8Array)) {
                const t = new Uint8Array(e)
                return p(t.buffer, t.byteOffset, t.byteLength)
              }
              return f(e)
            })(e)
          if (null == e)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e
            )
          if (H(e, ArrayBuffer) || (e && H(e.buffer, ArrayBuffer)))
            return p(e, t, r)
          if (
            "undefined" != typeof SharedArrayBuffer &&
            (H(e, SharedArrayBuffer) || (e && H(e.buffer, SharedArrayBuffer)))
          )
            return p(e, t, r)
          if ("number" == typeof e)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            )
          const n = e.valueOf && e.valueOf()
          if (null != n && n !== e) return u.from(n, t, r)
          const o = (function (e) {
            if (u.isBuffer(e)) {
              const t = 0 | g(e.length),
                r = a(t)
              return 0 === r.length || e.copy(r, 0, 0, t), r
            }
            return void 0 !== e.length
              ? "number" != typeof e.length || Q(e.length)
                ? a(0)
                : f(e)
              : "Buffer" === e.type && Array.isArray(e.data)
              ? f(e.data)
              : void 0
          })(e)
          if (o) return o
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof e[Symbol.toPrimitive]
          )
            return u.from(e[Symbol.toPrimitive]("string"), t, r)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          )
        }
        function l(e) {
          if ("number" != typeof e)
            throw new TypeError('"size" argument must be of type number')
          if (e < 0)
            throw new RangeError(
              'The value "' + e + '" is invalid for option "size"'
            )
        }
        function d(e) {
          return l(e), a(e < 0 ? 0 : 0 | g(e))
        }
        function f(e) {
          const t = e.length < 0 ? 0 : 0 | g(e.length),
            r = a(t)
          for (let n = 0; n < t; n += 1) r[n] = 255 & e[n]
          return r
        }
        function p(e, t, r) {
          if (t < 0 || e.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds')
          if (e.byteLength < t + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds')
          let n
          return (
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
            Object.setPrototypeOf(n, u.prototype),
            n
          )
        }
        function g(e) {
          if (e >= s)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s.toString(16) +
                " bytes"
            )
          return 0 | e
        }
        function m(e, t) {
          if (u.isBuffer(e)) return e.length
          if (ArrayBuffer.isView(e) || H(e, ArrayBuffer)) return e.byteLength
          if ("string" != typeof e)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof e
            )
          const r = e.length,
            n = arguments.length > 2 && !0 === arguments[2]
          if (!n && 0 === r) return 0
          let o = !1
          for (;;)
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r
              case "utf8":
              case "utf-8":
                return $(e).length
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r
              case "hex":
                return r >>> 1
              case "base64":
                return K(e).length
              default:
                if (o) return n ? -1 : $(e).length
                ;(t = ("" + t).toLowerCase()), (o = !0)
            }
        }
        function y(e, t, r) {
          let n = !1
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ""
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return ""
          if ((r >>>= 0) <= (t >>>= 0)) return ""
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return k(this, t, r)
              case "utf8":
              case "utf-8":
                return S(this, t, r)
              case "ascii":
                return C(this, t, r)
              case "latin1":
              case "binary":
                return I(this, t, r)
              case "base64":
                return j(this, t, r)
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return E(this, t, r)
              default:
                if (n) throw new TypeError("Unknown encoding: " + e)
                ;(e = (e + "").toLowerCase()), (n = !0)
            }
        }
        function b(e, t, r) {
          const n = e[t]
          ;(e[t] = e[r]), (e[r] = n)
        }
        function h(e, t, r, n, o) {
          if (0 === e.length) return -1
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            Q((r = +r)) && (r = o ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (o) return -1
            r = e.length - 1
          } else if (r < 0) {
            if (!o) return -1
            r = 0
          }
          if (("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)))
            return 0 === t.length ? -1 : v(e, t, r, n, o)
          if ("number" == typeof t)
            return (
              (t &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : v(e, [t], r, n, o)
            )
          throw new TypeError("val must be string, number or Buffer")
        }
        function v(e, t, r, n, o) {
          let i,
            s = 1,
            a = e.length,
            u = t.length
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1
            ;(s = 2), (a /= 2), (u /= 2), (r /= 2)
          }
          function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s)
          }
          if (o) {
            let n = -1
            for (i = r; i < a; i++)
              if (c(e, i) === c(t, -1 === n ? 0 : i - n)) {
                if ((-1 === n && (n = i), i - n + 1 === u)) return n * s
              } else -1 !== n && (i -= i - n), (n = -1)
          } else
            for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
              let r = !0
              for (let n = 0; n < u; n++)
                if (c(e, i + n) !== c(t, n)) {
                  r = !1
                  break
                }
              if (r) return i
            }
          return -1
        }
        function _(e, t, r, n) {
          r = Number(r) || 0
          const o = e.length - r
          n ? (n = Number(n)) > o && (n = o) : (n = o)
          const i = t.length
          let s
          for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
            const n = parseInt(t.substr(2 * s, 2), 16)
            if (Q(n)) return s
            e[r + s] = n
          }
          return s
        }
        function M(e, t, r, n) {
          return J($(t, e.length - r), e, r, n)
        }
        function P(e, t, r, n) {
          return J(
            (function (e) {
              const t = []
              for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))
              return t
            })(t),
            e,
            r,
            n
          )
        }
        function w(e, t, r, n) {
          return J(K(t), e, r, n)
        }
        function O(e, t, r, n) {
          return J(
            (function (e, t) {
              let r, n, o
              const i = []
              for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
                (r = e.charCodeAt(s)),
                  (n = r >> 8),
                  (o = r % 256),
                  i.push(o),
                  i.push(n)
              return i
            })(t, e.length - r),
            e,
            r,
            n
          )
        }
        function j(e, t, r) {
          return 0 === t && r === e.length
            ? n.fromByteArray(e)
            : n.fromByteArray(e.slice(t, r))
        }
        function S(e, t, r) {
          r = Math.min(e.length, r)
          const n = []
          let o = t
          for (; o < r; ) {
            const t = e[o]
            let i = null,
              s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1
            if (o + s <= r) {
              let r, n, a, u
              switch (s) {
                case 1:
                  t < 128 && (i = t)
                  break
                case 2:
                  ;(r = e[o + 1]),
                    128 == (192 & r) &&
                      ((u = ((31 & t) << 6) | (63 & r)), u > 127 && (i = u))
                  break
                case 3:
                  ;(r = e[o + 1]),
                    (n = e[o + 2]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      ((u = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                      u > 2047 && (u < 55296 || u > 57343) && (i = u))
                  break
                case 4:
                  ;(r = e[o + 1]),
                    (n = e[o + 2]),
                    (a = e[o + 3]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      128 == (192 & a) &&
                      ((u =
                        ((15 & t) << 18) |
                        ((63 & r) << 12) |
                        ((63 & n) << 6) |
                        (63 & a)),
                      u > 65535 && u < 1114112 && (i = u))
              }
            }
            null === i
              ? ((i = 65533), (s = 1))
              : i > 65535 &&
                ((i -= 65536),
                n.push(((i >>> 10) & 1023) | 55296),
                (i = 56320 | (1023 & i))),
              n.push(i),
              (o += s)
          }
          return (function (e) {
            const t = e.length
            if (t <= x) return String.fromCharCode.apply(String, e)
            let r = "",
              n = 0
            for (; n < t; )
              r += String.fromCharCode.apply(String, e.slice(n, (n += x)))
            return r
          })(n)
        }
        ;(u.TYPED_ARRAY_SUPPORT = (function () {
          try {
            const e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42
                },
              }
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            )
          } catch (e) {
            return !1
          }
        })()),
          u.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.buffer
            },
          }),
          Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.byteOffset
            },
          }),
          (u.poolSize = 8192),
          (u.from = function (e, t, r) {
            return c(e, t, r)
          }),
          Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(u, Uint8Array),
          (u.alloc = function (e, t, r) {
            return (function (e, t, r) {
              return (
                l(e),
                e <= 0
                  ? a(e)
                  : void 0 !== t
                  ? "string" == typeof r
                    ? a(e).fill(t, r)
                    : a(e).fill(t)
                  : a(e)
              )
            })(e, t, r)
          }),
          (u.allocUnsafe = function (e) {
            return d(e)
          }),
          (u.allocUnsafeSlow = function (e) {
            return d(e)
          }),
          (u.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== u.prototype
          }),
          (u.compare = function (e, t) {
            if (
              (H(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
              H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              !u.isBuffer(e) || !u.isBuffer(t))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              )
            if (e === t) return 0
            let r = e.length,
              n = t.length
            for (let o = 0, i = Math.min(r, n); o < i; ++o)
              if (e[o] !== t[o]) {
                ;(r = e[o]), (n = t[o])
                break
              }
            return r < n ? -1 : n < r ? 1 : 0
          }),
          (u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0
              default:
                return !1
            }
          }),
          (u.concat = function (e, t) {
            if (!Array.isArray(e))
              throw new TypeError('"list" argument must be an Array of Buffers')
            if (0 === e.length) return u.alloc(0)
            let r
            if (void 0 === t)
              for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
            const n = u.allocUnsafe(t)
            let o = 0
            for (r = 0; r < e.length; ++r) {
              let t = e[r]
              if (H(t, Uint8Array))
                o + t.length > n.length
                  ? (u.isBuffer(t) || (t = u.from(t)), t.copy(n, o))
                  : Uint8Array.prototype.set.call(n, t, o)
              else {
                if (!u.isBuffer(t))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  )
                t.copy(n, o)
              }
              o += t.length
            }
            return n
          }),
          (u.byteLength = m),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            const e = this.length
            if (e % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits")
            for (let t = 0; t < e; t += 2) b(this, t, t + 1)
            return this
          }),
          (u.prototype.swap32 = function () {
            const e = this.length
            if (e % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits")
            for (let t = 0; t < e; t += 4)
              b(this, t, t + 3), b(this, t + 1, t + 2)
            return this
          }),
          (u.prototype.swap64 = function () {
            const e = this.length
            if (e % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits")
            for (let t = 0; t < e; t += 8)
              b(this, t, t + 7),
                b(this, t + 1, t + 6),
                b(this, t + 2, t + 5),
                b(this, t + 3, t + 4)
            return this
          }),
          (u.prototype.toString = function () {
            const e = this.length
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? S(this, 0, e)
              : y.apply(this, arguments)
          }),
          (u.prototype.toLocaleString = u.prototype.toString),
          (u.prototype.equals = function (e) {
            if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer")
            return this === e || 0 === u.compare(this, e)
          }),
          (u.prototype.inspect = function () {
            let e = ""
            const r = t.IS
            return (
              (e = this.toString("hex", 0, r)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > r && (e += " ... "),
              "<Buffer " + e + ">"
            )
          }),
          i && (u.prototype[i] = u.prototype.inspect),
          (u.prototype.compare = function (e, t, r, n, o) {
            if (
              (H(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
              !u.isBuffer(e))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof e
              )
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = this.length),
              t < 0 || r > e.length || n < 0 || o > this.length)
            )
              throw new RangeError("out of range index")
            if (n >= o && t >= r) return 0
            if (n >= o) return -1
            if (t >= r) return 1
            if (this === e) return 0
            let i = (o >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (t >>>= 0)
            const a = Math.min(i, s),
              c = this.slice(n, o),
              l = e.slice(t, r)
            for (let e = 0; e < a; ++e)
              if (c[e] !== l[e]) {
                ;(i = c[e]), (s = l[e])
                break
              }
            return i < s ? -1 : s < i ? 1 : 0
          }),
          (u.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r)
          }),
          (u.prototype.indexOf = function (e, t, r) {
            return h(this, e, t, r, !0)
          }),
          (u.prototype.lastIndexOf = function (e, t, r) {
            return h(this, e, t, r, !1)
          }),
          (u.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0)
            else if (void 0 === r && "string" == typeof t)
              (n = t), (r = this.length), (t = 0)
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                )
              ;(t >>>= 0),
                isFinite(r)
                  ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0))
            }
            const o = this.length - t
            if (
              ((void 0 === r || r > o) && (r = o),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds")
            n || (n = "utf8")
            let i = !1
            for (;;)
              switch (n) {
                case "hex":
                  return _(this, e, t, r)
                case "utf8":
                case "utf-8":
                  return M(this, e, t, r)
                case "ascii":
                case "latin1":
                case "binary":
                  return P(this, e, t, r)
                case "base64":
                  return w(this, e, t, r)
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return O(this, e, t, r)
                default:
                  if (i) throw new TypeError("Unknown encoding: " + n)
                  ;(n = ("" + n).toLowerCase()), (i = !0)
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            }
          })
        const x = 4096
        function C(e, t, r) {
          let n = ""
          r = Math.min(e.length, r)
          for (let o = t; o < r; ++o) n += String.fromCharCode(127 & e[o])
          return n
        }
        function I(e, t, r) {
          let n = ""
          r = Math.min(e.length, r)
          for (let o = t; o < r; ++o) n += String.fromCharCode(e[o])
          return n
        }
        function k(e, t, r) {
          const n = e.length
          ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
          let o = ""
          for (let n = t; n < r; ++n) o += Y[e[n]]
          return o
        }
        function E(e, t, r) {
          const n = e.slice(t, r)
          let o = ""
          for (let e = 0; e < n.length - 1; e += 2)
            o += String.fromCharCode(n[e] + 256 * n[e + 1])
          return o
        }
        function A(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint")
          if (e + t > r)
            throw new RangeError("Trying to access beyond buffer length")
        }
        function T(e, t, r, n, o, i) {
          if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance')
          if (t > o || t < i)
            throw new RangeError('"value" argument is out of bounds')
          if (r + n > e.length) throw new RangeError("Index out of range")
        }
        function B(e, t, r, n, o) {
          W(t, n, o, e, r, 7)
          let i = Number(t & BigInt(4294967295))
          ;(e[r++] = i),
            (i >>= 8),
            (e[r++] = i),
            (i >>= 8),
            (e[r++] = i),
            (i >>= 8),
            (e[r++] = i)
          let s = Number((t >> BigInt(32)) & BigInt(4294967295))
          return (
            (e[r++] = s),
            (s >>= 8),
            (e[r++] = s),
            (s >>= 8),
            (e[r++] = s),
            (s >>= 8),
            (e[r++] = s),
            r
          )
        }
        function L(e, t, r, n, o) {
          W(t, n, o, e, r, 7)
          let i = Number(t & BigInt(4294967295))
          ;(e[r + 7] = i),
            (i >>= 8),
            (e[r + 6] = i),
            (i >>= 8),
            (e[r + 5] = i),
            (i >>= 8),
            (e[r + 4] = i)
          let s = Number((t >> BigInt(32)) & BigInt(4294967295))
          return (
            (e[r + 3] = s),
            (s >>= 8),
            (e[r + 2] = s),
            (s >>= 8),
            (e[r + 1] = s),
            (s >>= 8),
            (e[r] = s),
            r + 8
          )
        }
        function R(e, t, r, n, o, i) {
          if (r + n > e.length) throw new RangeError("Index out of range")
          if (r < 0) throw new RangeError("Index out of range")
        }
        function F(e, t, r, n, i) {
          return (
            (t = +t),
            (r >>>= 0),
            i || R(e, 0, r, 4),
            o.write(e, t, r, n, 23, 4),
            r + 4
          )
        }
        function U(e, t, r, n, i) {
          return (
            (t = +t),
            (r >>>= 0),
            i || R(e, 0, r, 8),
            o.write(e, t, r, n, 52, 8),
            r + 8
          )
        }
        ;(u.prototype.slice = function (e, t) {
          const r = this.length
          ;(e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0
              ? (t += r) < 0 && (t = 0)
              : t > r && (t = r),
            t < e && (t = e)
          const n = this.subarray(e, t)
          return Object.setPrototypeOf(n, u.prototype), n
        }),
          (u.prototype.readUintLE = u.prototype.readUIntLE =
            function (e, t, r) {
              ;(e >>>= 0), (t >>>= 0), r || A(e, t, this.length)
              let n = this[e],
                o = 1,
                i = 0
              for (; ++i < t && (o *= 256); ) n += this[e + i] * o
              return n
            }),
          (u.prototype.readUintBE = u.prototype.readUIntBE =
            function (e, t, r) {
              ;(e >>>= 0), (t >>>= 0), r || A(e, t, this.length)
              let n = this[e + --t],
                o = 1
              for (; t > 0 && (o *= 256); ) n += this[e + --t] * o
              return n
            }),
          (u.prototype.readUint8 = u.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || A(e, 1, this.length), this[e]
            }),
          (u.prototype.readUint16LE = u.prototype.readUInt16LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || A(e, 2, this.length),
                this[e] | (this[e + 1] << 8)
              )
            }),
          (u.prototype.readUint16BE = u.prototype.readUInt16BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || A(e, 2, this.length),
                (this[e] << 8) | this[e + 1]
              )
            }),
          (u.prototype.readUint32LE = u.prototype.readUInt32LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || A(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                  16777216 * this[e + 3]
              )
            }),
          (u.prototype.readUint32BE = u.prototype.readUInt32BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || A(e, 4, this.length),
                16777216 * this[e] +
                  ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              )
            }),
          (u.prototype.readBigUInt64LE = Z(function (e) {
            q((e >>>= 0), "offset")
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
            const n =
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              o = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24
            return BigInt(n) + (BigInt(o) << BigInt(32))
          })),
          (u.prototype.readBigUInt64BE = Z(function (e) {
            q((e >>>= 0), "offset")
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
            const n =
                t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              o = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
            return (BigInt(n) << BigInt(32)) + BigInt(o)
          })),
          (u.prototype.readIntLE = function (e, t, r) {
            ;(e >>>= 0), (t >>>= 0), r || A(e, t, this.length)
            let n = this[e],
              o = 1,
              i = 0
            for (; ++i < t && (o *= 256); ) n += this[e + i] * o
            return (o *= 128), n >= o && (n -= Math.pow(2, 8 * t)), n
          }),
          (u.prototype.readIntBE = function (e, t, r) {
            ;(e >>>= 0), (t >>>= 0), r || A(e, t, this.length)
            let n = t,
              o = 1,
              i = this[e + --n]
            for (; n > 0 && (o *= 256); ) i += this[e + --n] * o
            return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i
          }),
          (u.prototype.readInt8 = function (e, t) {
            return (
              (e >>>= 0),
              t || A(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            )
          }),
          (u.prototype.readInt16LE = function (e, t) {
            ;(e >>>= 0), t || A(e, 2, this.length)
            const r = this[e] | (this[e + 1] << 8)
            return 32768 & r ? 4294901760 | r : r
          }),
          (u.prototype.readInt16BE = function (e, t) {
            ;(e >>>= 0), t || A(e, 2, this.length)
            const r = this[e + 1] | (this[e] << 8)
            return 32768 & r ? 4294901760 | r : r
          }),
          (u.prototype.readInt32LE = function (e, t) {
            return (
              (e >>>= 0),
              t || A(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            )
          }),
          (u.prototype.readInt32BE = function (e, t) {
            return (
              (e >>>= 0),
              t || A(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            )
          }),
          (u.prototype.readBigInt64LE = Z(function (e) {
            q((e >>>= 0), "offset")
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
            const n =
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24
              )
            )
          })),
          (u.prototype.readBigInt64BE = Z(function (e) {
            q((e >>>= 0), "offset")
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
            const n =
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
              )
            )
          })),
          (u.prototype.readFloatLE = function (e, t) {
            return (
              (e >>>= 0), t || A(e, 4, this.length), o.read(this, e, !0, 23, 4)
            )
          }),
          (u.prototype.readFloatBE = function (e, t) {
            return (
              (e >>>= 0), t || A(e, 4, this.length), o.read(this, e, !1, 23, 4)
            )
          }),
          (u.prototype.readDoubleLE = function (e, t) {
            return (
              (e >>>= 0), t || A(e, 8, this.length), o.read(this, e, !0, 52, 8)
            )
          }),
          (u.prototype.readDoubleBE = function (e, t) {
            return (
              (e >>>= 0), t || A(e, 8, this.length), o.read(this, e, !1, 52, 8)
            )
          }),
          (u.prototype.writeUintLE = u.prototype.writeUIntLE =
            function (e, t, r, n) {
              ;(e = +e),
                (t >>>= 0),
                (r >>>= 0),
                n || T(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
              let o = 1,
                i = 0
              for (this[t] = 255 & e; ++i < r && (o *= 256); )
                this[t + i] = (e / o) & 255
              return t + r
            }),
          (u.prototype.writeUintBE = u.prototype.writeUIntBE =
            function (e, t, r, n) {
              ;(e = +e),
                (t >>>= 0),
                (r >>>= 0),
                n || T(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
              let o = r - 1,
                i = 1
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                this[t + o] = (e / i) & 255
              return t + r
            }),
          (u.prototype.writeUint8 = u.prototype.writeUInt8 =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || T(this, e, t, 1, 255, 0),
                (this[t] = 255 & e),
                t + 1
              )
            }),
          (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || T(this, e, t, 2, 65535, 0),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              )
            }),
          (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || T(this, e, t, 2, 65535, 0),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              )
            }),
          (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || T(this, e, t, 4, 4294967295, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              )
            }),
          (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || T(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              )
            }),
          (u.prototype.writeBigUInt64LE = Z(function (e, t = 0) {
            return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
          })),
          (u.prototype.writeBigUInt64BE = Z(function (e, t = 0) {
            return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
          })),
          (u.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1)
              T(this, e, t, r, n - 1, -n)
            }
            let o = 0,
              i = 1,
              s = 0
            for (this[t] = 255 & e; ++o < r && (i *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                (this[t + o] = (((e / i) >> 0) - s) & 255)
            return t + r
          }),
          (u.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1)
              T(this, e, t, r, n - 1, -n)
            }
            let o = r - 1,
              i = 1,
              s = 0
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                (this[t + o] = (((e / i) >> 0) - s) & 255)
            return t + r
          }),
          (u.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 1, 127, -128),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            )
          }),
          (u.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 2, 32767, -32768),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            )
          }),
          (u.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 2, 32767, -32768),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            )
          }),
          (u.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24),
              t + 4
            )
          }),
          (u.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            )
          }),
          (u.prototype.writeBigInt64LE = Z(function (e, t = 0) {
            return B(
              this,
              e,
              t,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            )
          })),
          (u.prototype.writeBigInt64BE = Z(function (e, t = 0) {
            return L(
              this,
              e,
              t,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            )
          })),
          (u.prototype.writeFloatLE = function (e, t, r) {
            return F(this, e, t, !0, r)
          }),
          (u.prototype.writeFloatBE = function (e, t, r) {
            return F(this, e, t, !1, r)
          }),
          (u.prototype.writeDoubleLE = function (e, t, r) {
            return U(this, e, t, !0, r)
          }),
          (u.prototype.writeDoubleBE = function (e, t, r) {
            return U(this, e, t, !1, r)
          }),
          (u.prototype.copy = function (e, t, r, n) {
            if (!u.isBuffer(e))
              throw new TypeError("argument should be a Buffer")
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0
            if (0 === e.length || 0 === this.length) return 0
            if (t < 0) throw new RangeError("targetStart out of bounds")
            if (r < 0 || r >= this.length)
              throw new RangeError("Index out of range")
            if (n < 0) throw new RangeError("sourceEnd out of bounds")
            n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r)
            const o = n - r
            return (
              this === e && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, r, n)
                : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
              o
            )
          }),
          (u.prototype.fill = function (e, t, r, n) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                void 0 !== n && "string" != typeof n)
              )
                throw new TypeError("encoding must be a string")
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n)
              if (1 === e.length) {
                const t = e.charCodeAt(0)
                ;(("utf8" === n && t < 128) || "latin1" === n) && (e = t)
              }
            } else
              "number" == typeof e
                ? (e &= 255)
                : "boolean" == typeof e && (e = Number(e))
            if (t < 0 || this.length < t || this.length < r)
              throw new RangeError("Out of range index")
            if (r <= t) return this
            let o
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (o = t; o < r; ++o) this[o] = e
            else {
              const i = u.isBuffer(e) ? e : u.from(e, n),
                s = i.length
              if (0 === s)
                throw new TypeError(
                  'The value "' + e + '" is invalid for argument "value"'
                )
              for (o = 0; o < r - t; ++o) this[o + t] = i[o % s]
            }
            return this
          })
        const D = {}
        function N(e, t, r) {
          D[e] = class extends r {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: t.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${e}]`),
                this.stack,
                delete this.name
            }
            get code() {
              return e
            }
            set code(e) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              })
            }
            toString() {
              return `${this.name} [${e}]: ${this.message}`
            }
          }
        }
        function G(e) {
          let t = "",
            r = e.length
          const n = "-" === e[0] ? 1 : 0
          for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`
          return `${e.slice(0, r)}${t}`
        }
        function W(e, t, r, n, o, i) {
          if (e > r || e < t) {
            const n = "bigint" == typeof t ? "n" : ""
            let o
            throw (
              ((o =
                i > 3
                  ? 0 === t || t === BigInt(0)
                    ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
                    : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${
                        8 * (i + 1) - 1
                      }${n}`
                  : `>= ${t}${n} and <= ${r}${n}`),
              new D.ERR_OUT_OF_RANGE("value", o, e))
            )
          }
          !(function (e, t, r) {
            q(t, "offset"),
              (void 0 !== e[t] && void 0 !== e[t + r]) ||
                z(t, e.length - (r + 1))
          })(n, o, i)
        }
        function q(e, t) {
          if ("number" != typeof e)
            throw new D.ERR_INVALID_ARG_TYPE(t, "number", e)
        }
        function z(e, t, r) {
          if (Math.floor(e) !== e)
            throw (
              (q(e, r), new D.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
            )
          if (t < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS()
          throw new D.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${t}`,
            e
          )
        }
        N(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (e) {
            return e
              ? `${e} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds"
          },
          RangeError
        ),
          N(
            "ERR_INVALID_ARG_TYPE",
            function (e, t) {
              return `The "${e}" argument must be of type number. Received type ${typeof t}`
            },
            TypeError
          ),
          N(
            "ERR_OUT_OF_RANGE",
            function (e, t, r) {
              let n = `The value of "${e}" is out of range.`,
                o = r
              return (
                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                  ? (o = G(String(r)))
                  : "bigint" == typeof r &&
                    ((o = String(r)),
                    (r > BigInt(2) ** BigInt(32) ||
                      r < -(BigInt(2) ** BigInt(32))) &&
                      (o = G(o)),
                    (o += "n")),
                (n += ` It must be ${t}. Received ${o}`),
                n
              )
            },
            RangeError
          )
        const V = /[^+/0-9A-Za-z-_]/g
        function $(e, t) {
          let r
          t = t || 1 / 0
          const n = e.length
          let o = null
          const i = []
          for (let s = 0; s < n; ++s) {
            if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
              if (!o) {
                if (r > 56319) {
                  ;(t -= 3) > -1 && i.push(239, 191, 189)
                  continue
                }
                if (s + 1 === n) {
                  ;(t -= 3) > -1 && i.push(239, 191, 189)
                  continue
                }
                o = r
                continue
              }
              if (r < 56320) {
                ;(t -= 3) > -1 && i.push(239, 191, 189), (o = r)
                continue
              }
              r = 65536 + (((o - 55296) << 10) | (r - 56320))
            } else o && (t -= 3) > -1 && i.push(239, 191, 189)
            if (((o = null), r < 128)) {
              if ((t -= 1) < 0) break
              i.push(r)
            } else if (r < 2048) {
              if ((t -= 2) < 0) break
              i.push((r >> 6) | 192, (63 & r) | 128)
            } else if (r < 65536) {
              if ((t -= 3) < 0) break
              i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point")
              if ((t -= 4) < 0) break
              i.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              )
            }
          }
          return i
        }
        function K(e) {
          return n.toByteArray(
            (function (e) {
              if ((e = (e = e.split("=")[0]).trim().replace(V, "")).length < 2)
                return ""
              for (; e.length % 4 != 0; ) e += "="
              return e
            })(e)
          )
        }
        function J(e, t, r, n) {
          let o
          for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
            t[o + r] = e[o]
          return o
        }
        function H(e, t) {
          return (
            e instanceof t ||
            (null != e &&
              null != e.constructor &&
              null != e.constructor.name &&
              e.constructor.name === t.name)
          )
        }
        function Q(e) {
          return e != e
        }
        const Y = (function () {
          const e = "0123456789abcdef",
            t = new Array(256)
          for (let r = 0; r < 16; ++r) {
            const n = 16 * r
            for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o]
          }
          return t
        })()
        function Z(e) {
          return "undefined" == typeof BigInt ? X : e
        }
        function X() {
          throw new Error("BigInt not supported")
        }
      },
      38385: (e, t, r) => {
        "use strict"
        r.r(t),
          r.d(t, {
            compare: () => l,
            compareVersions: () => c,
            satisfies: () => g,
            validate: () => m,
            validateStrict: () => y,
          })
        const n =
            /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
          o = (e) => {
            if ("string" != typeof e)
              throw new TypeError("Invalid argument expected string")
            const t = e.match(n)
            if (!t)
              throw new Error(
                `Invalid argument not valid semver ('${e}' received)`
              )
            return t.shift(), t
          },
          i = (e) => "*" === e || "x" === e || "X" === e,
          s = (e) => {
            const t = parseInt(e, 10)
            return isNaN(t) ? e : t
          },
          a = (e, t) => {
            if (i(e) || i(t)) return 0
            const [r, n] = ((e, t) =>
              typeof e != typeof t ? [String(e), String(t)] : [e, t])(
              s(e),
              s(t)
            )
            return r > n ? 1 : r < n ? -1 : 0
          },
          u = (e, t) => {
            for (let r = 0; r < Math.max(e.length, t.length); r++) {
              const n = a(e[r] || "0", t[r] || "0")
              if (0 !== n) return n
            }
            return 0
          },
          c = (e, t) => {
            const r = o(e),
              n = o(t),
              i = r.pop(),
              s = n.pop(),
              a = u(r, n)
            return 0 !== a
              ? a
              : i && s
              ? u(i.split("."), s.split("."))
              : i || s
              ? i
                ? -1
                : 1
              : 0
          },
          l = (e, t, r) => {
            p(r)
            const n = c(e, t)
            return d[r].includes(n)
          },
          d = {
            ">": [1],
            ">=": [0, 1],
            "=": [0],
            "<=": [-1, 0],
            "<": [-1],
            "!=": [-1, 1],
          },
          f = Object.keys(d),
          p = (e) => {
            if ("string" != typeof e)
              throw new TypeError(
                "Invalid operator type, expected string but got " + typeof e
              )
            if (-1 === f.indexOf(e))
              throw new Error(
                `Invalid operator, expected one of ${f.join("|")}`
              )
          },
          g = (e, t) => {
            if ((t = t.replace(/([><=]+)\s+/g, "$1")).includes("||"))
              return t.split("||").some((t) => g(e, t))
            if (t.includes(" - ")) {
              const [r, n] = t.split(" - ", 2)
              return g(e, `>=${r} <=${n}`)
            }
            if (t.includes(" "))
              return t
                .trim()
                .replace(/\s{2,}/g, " ")
                .split(" ")
                .every((t) => g(e, t))
            const r = t.match(/^([<>=~^]+)/),
              n = r ? r[1] : "="
            if ("^" !== n && "~" !== n) return l(e, t, n)
            const [i, s, a, , c] = o(e),
              [d, f, p, , m] = o(t),
              y = [i, s, a],
              b = [d, null != f ? f : "x", null != p ? p : "x"]
            if (m) {
              if (!c) return !1
              if (0 !== u(y, b)) return !1
              if (-1 === u(c.split("."), m.split("."))) return !1
            }
            const h = b.findIndex((e) => "0" !== e) + 1,
              v = "~" === n ? 2 : h > 1 ? h : 1
            return (
              0 === u(y.slice(0, v), b.slice(0, v)) &&
              -1 !== u(y.slice(v), b.slice(v))
            )
          },
          m = (e) => "string" == typeof e && /^[v\d]/.test(e) && n.test(e),
          y = (e) =>
            "string" == typeof e &&
            /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/.test(
              e
            )
      },
      23807: function (e) {
        e.exports = (function () {
          "use strict"
          function e(e, t) {
            var r = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e)
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
          }
          function t(t) {
            for (var r = 1; r < arguments.length; r++) {
              var o = null != arguments[r] ? arguments[r] : {}
              r % 2
                ? e(Object(o), !0).forEach(function (e) {
                    n(t, e, o[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(o)
                  )
                : e(Object(o)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(o, e)
                    )
                  })
            }
            return t
          }
          function r(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, i(n.key), n)
            }
          }
          function n(e, t, r) {
            return (
              (t = i(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            )
          }
          function o() {
            return (
              (o = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n])
                    }
                    return e
                  }),
              o.apply(this, arguments)
            )
          }
          function i(e) {
            var t = (function (e, t) {
              if ("object" != typeof e || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t || "default")
                if ("object" != typeof n) return n
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                )
              }
              return ("string" === t ? String : Number)(e)
            })(e, "string")
            return "symbol" == typeof t ? t : String(t)
          }
          var s = { exports: {} }
          !(function (e) {
            "undefined" != typeof window &&
              (function (t) {
                var r = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype,
                  n =
                    t.Blob &&
                    (function () {
                      try {
                        return Boolean(new Blob())
                      } catch (e) {
                        return !1
                      }
                    })(),
                  o =
                    n &&
                    t.Uint8Array &&
                    (function () {
                      try {
                        return 100 === new Blob([new Uint8Array(100)]).size
                      } catch (e) {
                        return !1
                      }
                    })(),
                  i =
                    t.BlobBuilder ||
                    t.WebKitBlobBuilder ||
                    t.MozBlobBuilder ||
                    t.MSBlobBuilder,
                  s = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
                  a =
                    (n || i) &&
                    t.atob &&
                    t.ArrayBuffer &&
                    t.Uint8Array &&
                    function (e) {
                      var t, r, a, u, c, l, d, f, p
                      if (!(t = e.match(s))) throw new Error("invalid data URI")
                      for (
                        r = t[2]
                          ? t[1]
                          : "text/plain" + (t[3] || ";charset=US-ASCII"),
                          a = !!t[4],
                          u = e.slice(t[0].length),
                          c = a ? atob(u) : decodeURIComponent(u),
                          l = new ArrayBuffer(c.length),
                          d = new Uint8Array(l),
                          f = 0;
                        f < c.length;
                        f += 1
                      )
                        d[f] = c.charCodeAt(f)
                      return n
                        ? new Blob([o ? d : l], { type: r })
                        : ((p = new i()).append(l), p.getBlob(r))
                    }
                t.HTMLCanvasElement &&
                  !r.toBlob &&
                  (r.mozGetAsFile
                    ? (r.toBlob = function (e, t, n) {
                        var o = this
                        setTimeout(function () {
                          n && r.toDataURL && a
                            ? e(a(o.toDataURL(t, n)))
                            : e(o.mozGetAsFile("blob", t))
                        })
                      })
                    : r.toDataURL &&
                      a &&
                      (r.msToBlob
                        ? (r.toBlob = function (e, t, n) {
                            var o = this
                            setTimeout(function () {
                              ;((t && "image/png" !== t) || n) &&
                              r.toDataURL &&
                              a
                                ? e(a(o.toDataURL(t, n)))
                                : e(o.msToBlob(t))
                            })
                          })
                        : (r.toBlob = function (e, t, r) {
                            var n = this
                            setTimeout(function () {
                              e(a(n.toDataURL(t, r)))
                            })
                          }))),
                  e.exports ? (e.exports = a) : (t.dataURLtoBlob = a)
              })(window)
          })(s)
          var a = s.exports,
            u = {
              strict: !0,
              checkOrientation: !0,
              retainExif: !1,
              maxWidth: 1 / 0,
              maxHeight: 1 / 0,
              minWidth: 0,
              minHeight: 0,
              width: void 0,
              height: void 0,
              resize: "none",
              quality: 0.8,
              mimeType: "auto",
              convertTypes: ["image/png"],
              convertSize: 5e6,
              beforeDraw: null,
              drew: null,
              success: null,
              error: null,
            },
            c =
              "undefined" != typeof window && void 0 !== window.document
                ? window
                : {},
            l = function (e) {
              return e > 0 && e < 1 / 0
            },
            d = Array.prototype.slice
          function f(e) {
            return Array.from ? Array.from(e) : d.call(e)
          }
          var p = /^image\/.+$/
          function g(e) {
            return p.test(e)
          }
          var m = String.fromCharCode
          var y = c.btoa
          function b(e, t) {
            for (var r = [], n = new Uint8Array(e); n.length > 0; )
              r.push(m.apply(null, f(n.subarray(0, 8192)))),
                (n = n.subarray(8192))
            return "data:".concat(t, ";base64,").concat(y(r.join("")))
          }
          function h(e) {
            var t,
              r = new DataView(e)
            try {
              var n, o, i
              if (255 === r.getUint8(0) && 216 === r.getUint8(1))
                for (var s = r.byteLength, a = 2; a + 1 < s; ) {
                  if (255 === r.getUint8(a) && 225 === r.getUint8(a + 1)) {
                    o = a
                    break
                  }
                  a += 1
                }
              if (o) {
                var u = o + 10
                if (
                  "Exif" ===
                  (function (e, t, r) {
                    var n,
                      o = ""
                    for (r += t, n = t; n < r; n += 1) o += m(e.getUint8(n))
                    return o
                  })(r, o + 4, 4)
                ) {
                  var c = r.getUint16(u)
                  if (
                    ((n = 18761 === c) || 19789 === c) &&
                    42 === r.getUint16(u + 2, n)
                  ) {
                    var l = r.getUint32(u + 4, n)
                    l >= 8 && (i = u + l)
                  }
                }
              }
              if (i) {
                var d,
                  f,
                  p = r.getUint16(i, n)
                for (f = 0; f < p; f += 1)
                  if (((d = i + 12 * f + 2), 274 === r.getUint16(d, n))) {
                    ;(d += 8), (t = r.getUint16(d, n)), r.setUint16(d, 1, n)
                    break
                  }
              }
            } catch (e) {
              t = 1
            }
            return t
          }
          var v = /\.\d*(?:0|9){12}\d*$/
          function _(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e11
            return v.test(e) ? Math.round(e * t) / t : e
          }
          function M(e) {
            var t = e.aspectRatio,
              r = e.height,
              n = e.width,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "none",
              i = l(n),
              s = l(r)
            if (i && s) {
              var a = r * t
              ;(("contain" === o || "none" === o) && a > n) ||
              ("cover" === o && a < n)
                ? (r = n / t)
                : (n = r * t)
            } else i ? (r = n / t) : s && (n = r * t)
            return { width: n, height: r }
          }
          var P = c.ArrayBuffer,
            w = c.FileReader,
            O = c.URL || c.webkitURL,
            j = /\.\w+$/,
            S = c.Compressor
          return (function () {
            function e(r, n) {
              ;(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              })(this, e),
                (this.file = r),
                (this.exif = []),
                (this.image = new Image()),
                (this.options = t(t({}, u), n)),
                (this.aborted = !1),
                (this.result = null),
                this.init()
            }
            return (
              (n = e),
              (s = [
                {
                  key: "noConflict",
                  value: function () {
                    return (window.Compressor = S), e
                  },
                },
                {
                  key: "setDefaults",
                  value: function (e) {
                    o(u, e)
                  },
                },
              ]),
              (i = [
                {
                  key: "init",
                  value: function () {
                    var e,
                      t = this,
                      r = this.file,
                      n = this.options
                    if (
                      ((e = r),
                      "undefined" != typeof Blob &&
                        (e instanceof Blob ||
                          "[object Blob]" ===
                            Object.prototype.toString.call(e)))
                    ) {
                      var i = r.type
                      if (g(i))
                        if (O && w) {
                          P || ((n.checkOrientation = !1), (n.retainExif = !1))
                          var s = "image/jpeg" === i,
                            a = s && n.checkOrientation,
                            u = s && n.retainExif
                          if (!O || a || u) {
                            var c = new w()
                            ;(this.reader = c),
                              (c.onload = function (e) {
                                var n = e.target.result,
                                  s = {},
                                  c = 1
                                a &&
                                  (c = h(n)) > 1 &&
                                  o(
                                    s,
                                    (function (e) {
                                      var t = 0,
                                        r = 1,
                                        n = 1
                                      switch (e) {
                                        case 2:
                                          r = -1
                                          break
                                        case 3:
                                          t = -180
                                          break
                                        case 4:
                                          n = -1
                                          break
                                        case 5:
                                          ;(t = 90), (n = -1)
                                          break
                                        case 6:
                                          t = 90
                                          break
                                        case 7:
                                          ;(t = 90), (r = -1)
                                          break
                                        case 8:
                                          t = -90
                                      }
                                      return { rotate: t, scaleX: r, scaleY: n }
                                    })(c)
                                  ),
                                  u &&
                                    (t.exif = (function (e) {
                                      for (
                                        var t = f(new Uint8Array(e)),
                                          r = t.length,
                                          n = [],
                                          o = 0;
                                        o + 3 < r;

                                      ) {
                                        var i = t[o],
                                          s = t[o + 1]
                                        if (255 === i && 218 === s) break
                                        if (255 === i && 216 === s) o += 2
                                        else {
                                          var a =
                                              o +
                                              (256 * t[o + 2] + t[o + 3]) +
                                              2,
                                            u = t.slice(o, a)
                                          n.push(u), (o = a)
                                        }
                                      }
                                      return n.reduce(function (e, t) {
                                        return 255 === t[0] && 225 === t[1]
                                          ? e.concat(t)
                                          : e
                                      }, [])
                                    })(n)),
                                  (s.url =
                                    a || u
                                      ? !O || c > 1
                                        ? b(n, i)
                                        : O.createObjectURL(r)
                                      : n),
                                  t.load(s)
                              }),
                              (c.onabort = function () {
                                t.fail(
                                  new Error(
                                    "Aborted to read the image with FileReader."
                                  )
                                )
                              }),
                              (c.onerror = function () {
                                t.fail(
                                  new Error(
                                    "Failed to read the image with FileReader."
                                  )
                                )
                              }),
                              (c.onloadend = function () {
                                t.reader = null
                              }),
                              a || u
                                ? c.readAsArrayBuffer(r)
                                : c.readAsDataURL(r)
                          } else this.load({ url: O.createObjectURL(r) })
                        } else
                          this.fail(
                            new Error(
                              "The current browser does not support image compression."
                            )
                          )
                      else
                        this.fail(
                          new Error(
                            "The first argument must be an image File or Blob object."
                          )
                        )
                    } else
                      this.fail(
                        new Error(
                          "The first argument must be a File or Blob object."
                        )
                      )
                  },
                },
                {
                  key: "load",
                  value: function (e) {
                    var r = this,
                      n = this.file,
                      o = this.image
                    ;(o.onload = function () {
                      r.draw(
                        t(
                          t({}, e),
                          {},
                          {
                            naturalWidth: o.naturalWidth,
                            naturalHeight: o.naturalHeight,
                          }
                        )
                      )
                    }),
                      (o.onabort = function () {
                        r.fail(new Error("Aborted to load the image."))
                      }),
                      (o.onerror = function () {
                        r.fail(new Error("Failed to load the image."))
                      }),
                      c.navigator &&
                        /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                          c.navigator.userAgent
                        ) &&
                        (o.crossOrigin = "anonymous"),
                      (o.alt = n.name),
                      (o.src = e.url)
                  },
                },
                {
                  key: "draw",
                  value: function (e) {
                    var t = this,
                      r = e.naturalWidth,
                      n = e.naturalHeight,
                      o = e.rotate,
                      i = void 0 === o ? 0 : o,
                      s = e.scaleX,
                      u = void 0 === s ? 1 : s,
                      c = e.scaleY,
                      d = void 0 === c ? 1 : c,
                      p = this.file,
                      m = this.image,
                      y = this.options,
                      h = document.createElement("canvas"),
                      v = h.getContext("2d"),
                      P = Math.abs(i) % 180 == 90,
                      O =
                        ("contain" === y.resize || "cover" === y.resize) &&
                        l(y.width) &&
                        l(y.height),
                      j = Math.max(y.maxWidth, 0) || 1 / 0,
                      S = Math.max(y.maxHeight, 0) || 1 / 0,
                      x = Math.max(y.minWidth, 0) || 0,
                      C = Math.max(y.minHeight, 0) || 0,
                      I = r / n,
                      k = y.width,
                      E = y.height
                    if (P) {
                      var A = [S, j]
                      ;(j = A[0]), (S = A[1])
                      var T = [C, x]
                      ;(x = T[0]), (C = T[1])
                      var B = [E, k]
                      ;(k = B[0]), (E = B[1])
                    }
                    O && (I = k / E)
                    var L = M(
                      { aspectRatio: I, width: j, height: S },
                      "contain"
                    )
                    ;(j = L.width), (S = L.height)
                    var R = M({ aspectRatio: I, width: x, height: C }, "cover")
                    if (((x = R.width), (C = R.height), O)) {
                      var F = M(
                        { aspectRatio: I, width: k, height: E },
                        y.resize
                      )
                      ;(k = F.width), (E = F.height)
                    } else {
                      var U = M({ aspectRatio: I, width: k, height: E }),
                        D = U.width
                      k = void 0 === D ? r : D
                      var N = U.height
                      E = void 0 === N ? n : N
                    }
                    var G =
                        -(k = Math.floor(_(Math.min(Math.max(k, x), j)))) / 2,
                      W = -(E = Math.floor(_(Math.min(Math.max(E, C), S)))) / 2,
                      q = k,
                      z = E,
                      V = []
                    if (O) {
                      var $,
                        K,
                        J,
                        H,
                        Q = M(
                          { aspectRatio: I, width: r, height: n },
                          { contain: "cover", cover: "contain" }[y.resize]
                        )
                      ;(J = Q.width),
                        (H = Q.height),
                        ($ = (r - J) / 2),
                        (K = (n - H) / 2),
                        V.push($, K, J, H)
                    }
                    if ((V.push(G, W, q, z), P)) {
                      var Y = [E, k]
                      ;(k = Y[0]), (E = Y[1])
                    }
                    ;(h.width = k),
                      (h.height = E),
                      g(y.mimeType) || (y.mimeType = p.type)
                    var Z = "transparent"
                    p.size > y.convertSize &&
                      y.convertTypes.indexOf(y.mimeType) >= 0 &&
                      (y.mimeType = "image/jpeg")
                    var X = "image/jpeg" === y.mimeType
                    if (
                      (X && (Z = "#fff"),
                      (v.fillStyle = Z),
                      v.fillRect(0, 0, k, E),
                      y.beforeDraw && y.beforeDraw.call(this, v, h),
                      !this.aborted &&
                        (v.save(),
                        v.translate(k / 2, E / 2),
                        v.rotate((i * Math.PI) / 180),
                        v.scale(u, d),
                        v.drawImage.apply(v, [m].concat(V)),
                        v.restore(),
                        y.drew && y.drew.call(this, v, h),
                        !this.aborted))
                    ) {
                      var ee = function (e) {
                        if (!t.aborted) {
                          var o = function (e) {
                            return t.done({
                              naturalWidth: r,
                              naturalHeight: n,
                              result: e,
                            })
                          }
                          if (
                            e &&
                            X &&
                            y.retainExif &&
                            t.exif &&
                            t.exif.length > 0
                          ) {
                            var i = function (e) {
                              return o(
                                a(
                                  b(
                                    (function (e, t) {
                                      var r = f(new Uint8Array(e))
                                      if (255 !== r[2] || 224 !== r[3]) return e
                                      var n = 256 * r[4] + r[5],
                                        o = [255, 216].concat(t, r.slice(4 + n))
                                      return new Uint8Array(o)
                                    })(e, t.exif),
                                    y.mimeType
                                  )
                                )
                              )
                            }
                            if (e.arrayBuffer)
                              e.arrayBuffer()
                                .then(i)
                                .catch(function () {
                                  t.fail(
                                    new Error(
                                      "Failed to read the compressed image with Blob.arrayBuffer()."
                                    )
                                  )
                                })
                            else {
                              var s = new w()
                              ;(t.reader = s),
                                (s.onload = function (e) {
                                  var t = e.target
                                  i(t.result)
                                }),
                                (s.onabort = function () {
                                  t.fail(
                                    new Error(
                                      "Aborted to read the compressed image with FileReader."
                                    )
                                  )
                                }),
                                (s.onerror = function () {
                                  t.fail(
                                    new Error(
                                      "Failed to read the compressed image with FileReader."
                                    )
                                  )
                                }),
                                (s.onloadend = function () {
                                  t.reader = null
                                }),
                                s.readAsArrayBuffer(e)
                            }
                          } else o(e)
                        }
                      }
                      h.toBlob
                        ? h.toBlob(ee, y.mimeType, y.quality)
                        : ee(a(h.toDataURL(y.mimeType, y.quality)))
                    }
                  },
                },
                {
                  key: "done",
                  value: function (e) {
                    var t,
                      r,
                      n = e.naturalWidth,
                      o = e.naturalHeight,
                      i = e.result,
                      s = this.file,
                      a = this.image,
                      u = this.options
                    if (
                      (O &&
                        0 === a.src.indexOf("blob:") &&
                        O.revokeObjectURL(a.src),
                      i)
                    )
                      if (
                        u.strict &&
                        !u.retainExif &&
                        i.size > s.size &&
                        u.mimeType === s.type &&
                        !(
                          u.width > n ||
                          u.height > o ||
                          u.minWidth > n ||
                          u.minHeight > o ||
                          u.maxWidth < n ||
                          u.maxHeight < o
                        )
                      )
                        i = s
                      else {
                        var c = new Date()
                        ;(i.lastModified = c.getTime()),
                          (i.lastModifiedDate = c),
                          (i.name = s.name),
                          i.name &&
                            i.type !== s.type &&
                            (i.name = i.name.replace(
                              j,
                              ((t = i.type),
                              "jpeg" === (r = g(t) ? t.substr(6) : "") &&
                                (r = "jpg"),
                              ".".concat(r))
                            ))
                      }
                    else i = s
                    ;(this.result = i), u.success && u.success.call(this, i)
                  },
                },
                {
                  key: "fail",
                  value: function (e) {
                    var t = this.options
                    if (!t.error) throw e
                    t.error.call(this, e)
                  },
                },
                {
                  key: "abort",
                  value: function () {
                    this.aborted ||
                      ((this.aborted = !0),
                      this.reader
                        ? this.reader.abort()
                        : this.image.complete
                        ? this.fail(
                            new Error(
                              "The compression process has been aborted."
                            )
                          )
                        : ((this.image.onload = null), this.image.onabort()))
                  },
                },
              ]) && r(n.prototype, i),
              s && r(n, s),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              e
            )
            var n, i, s
          })()
        })()
      },
      17833: (e, t, r) => {
        ;(t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return
          const r = "color: " + this.color
          t.splice(1, 0, r, "color: inherit")
          let n = 0,
            o = 0
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (o = n))
          }),
            t.splice(o, 0, r)
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {}
          }),
          (t.load = function () {
            let e
            try {
              e = t.storage.getItem("debug")
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            )
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            )
          }),
          (t.storage = (function () {
            try {
              return localStorage
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ))
            }
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = r(40736)(t))
        const { formatters: n } = e.exports
        n.j = function (e) {
          try {
            return JSON.stringify(e)
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
          }
        }
      },
      40736: (e, t, r) => {
        e.exports = function (e) {
          function t(e) {
            let r,
              o,
              i,
              s = null
            function a(...e) {
              if (!a.enabled) return
              const n = a,
                o = Number(new Date()),
                i = o - (r || o)
              ;(n.diff = i),
                (n.prev = r),
                (n.curr = o),
                (r = o),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O")
              let s = 0
              ;(e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, o) => {
                if ("%%" === r) return "%"
                s++
                const i = t.formatters[o]
                if ("function" == typeof i) {
                  const t = e[s]
                  ;(r = i.call(n, t)), e.splice(s, 1), s--
                }
                return r
              })),
                t.formatArgs.call(n, e),
                (n.log || t.log).apply(n, e)
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = n),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== s
                    ? s
                    : (o !== t.namespaces &&
                        ((o = t.namespaces), (i = t.enabled(e))),
                      i),
                set: (e) => {
                  s = e
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            )
          }
          function n(e, r) {
            const n = t(this.namespace + (void 0 === r ? ":" : r) + e)
            return (n.log = this.log), n
          }
          function o(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*")
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(o),
                ...t.skips.map(o).map((e) => "-" + e),
              ].join(",")
              return t.enable(""), e
            }),
            (t.enable = function (e) {
              let r
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = [])
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                o = n.length
              for (r = 0; r < o; r++)
                n[r] &&
                  ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")))
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0
              let r, n
              for (r = 0, n = t.skips.length; r < n; r++)
                if (t.skips[r].test(e)) return !1
              for (r = 0, n = t.names.length; r < n; r++)
                if (t.names[r].test(e)) return !0
              return !1
            }),
            (t.humanize = r(6585)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              )
            }),
            Object.keys(e).forEach((r) => {
              t[r] = e[r]
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let r = 0
              for (let t = 0; t < e.length; t++)
                (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0)
              return t.colors[Math.abs(r) % t.colors.length]
            }),
            t.enable(t.load()),
            t
          )
        }
      },
      53011: (e, t, r) => {
        var n
        !(function (o) {
          var i = Object.hasOwnProperty,
            s = Array.isArray
              ? Array.isArray
              : function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e)
                },
            a =
              "object" == typeof process &&
              "function" == typeof process.nextTick,
            u = "function" == typeof Symbol,
            c = "object" == typeof Reflect,
            l = "function" == typeof setImmediate ? setImmediate : setTimeout,
            d = u
              ? c && "function" == typeof Reflect.ownKeys
                ? Reflect.ownKeys
                : function (e) {
                    var t = Object.getOwnPropertyNames(e)
                    return t.push.apply(t, Object.getOwnPropertySymbols(e)), t
                  }
              : Object.keys
          function f() {
            ;(this._events = {}), this._conf && p.call(this, this._conf)
          }
          function p(e) {
            e &&
              ((this._conf = e),
              e.delimiter && (this.delimiter = e.delimiter),
              e.maxListeners !== o && (this._maxListeners = e.maxListeners),
              e.wildcard && (this.wildcard = e.wildcard),
              e.newListener && (this._newListener = e.newListener),
              e.removeListener && (this._removeListener = e.removeListener),
              e.verboseMemoryLeak &&
                (this.verboseMemoryLeak = e.verboseMemoryLeak),
              e.ignoreErrors && (this.ignoreErrors = e.ignoreErrors),
              this.wildcard && (this.listenerTree = {}))
          }
          function g(e, t) {
            var r =
              "(node) warning: possible EventEmitter memory leak detected. " +
              e +
              " listeners added. Use emitter.setMaxListeners() to increase limit."
            if (
              (this.verboseMemoryLeak && (r += " Event name: " + t + "."),
              "undefined" != typeof process && process.emitWarning)
            ) {
              var n = new Error(r)
              ;(n.name = "MaxListenersExceededWarning"),
                (n.emitter = this),
                (n.count = e),
                process.emitWarning(n)
            } else console.error(r), console.trace && console.trace()
          }
          var m = function (e, t, r) {
            var n = arguments.length
            switch (n) {
              case 0:
                return []
              case 1:
                return [e]
              case 2:
                return [e, t]
              case 3:
                return [e, t, r]
              default:
                for (var o = new Array(n); n--; ) o[n] = arguments[n]
                return o
            }
          }
          function y(e, t) {
            for (
              var r = {}, n = e.length, i = t ? t.length : 0, s = 0;
              s < n;
              s++
            )
              r[e[s]] = s < i ? t[s] : o
            return r
          }
          function b(e, t, r) {
            var n, o
            if (
              ((this._emitter = e),
              (this._target = t),
              (this._listeners = {}),
              (this._listenersCount = 0),
              (r.on || r.off) && ((n = r.on), (o = r.off)),
              t.addEventListener
                ? ((n = t.addEventListener), (o = t.removeEventListener))
                : t.addListener
                ? ((n = t.addListener), (o = t.removeListener))
                : t.on && ((n = t.on), (o = t.off)),
              !n && !o)
            )
              throw Error("target does not implement any known event API")
            if ("function" != typeof n)
              throw TypeError("on method must be a function")
            if ("function" != typeof o)
              throw TypeError("off method must be a function")
            ;(this._on = n), (this._off = o)
            var i = e._observers
            i ? i.push(this) : (e._observers = [this])
          }
          function h(e, t, r, n) {
            var s = Object.assign({}, t)
            if (!e) return s
            if ("object" != typeof e)
              throw TypeError("options must be an object")
            var a,
              u,
              c,
              l = Object.keys(e),
              d = l.length
            function f(e) {
              throw Error(
                'Invalid "' + a + '" option value' + (e ? ". Reason: " + e : "")
              )
            }
            for (var p = 0; p < d; p++) {
              if (((a = l[p]), !n && !i.call(t, a)))
                throw Error('Unknown "' + a + '" option')
              ;(u = e[a]) !== o && ((c = r[a]), (s[a] = c ? c(u, f) : u))
            }
            return s
          }
          function v(e, t) {
            return (
              ("function" == typeof e && e.hasOwnProperty("prototype")) ||
                t("value must be a constructor"),
              e
            )
          }
          function _(e) {
            var t = "value must be type of " + e.join("|"),
              r = e.length,
              n = e[0],
              o = e[1]
            return 1 === r
              ? function (e, r) {
                  if (typeof e === n) return e
                  r(t)
                }
              : 2 === r
              ? function (e, r) {
                  var i = typeof e
                  if (i === n || i === o) return e
                  r(t)
                }
              : function (n, o) {
                  for (var i = typeof n, s = r; s-- > 0; )
                    if (i === e[s]) return n
                  o(t)
                }
          }
          Object.assign(b.prototype, {
            subscribe: function (e, t, r) {
              var n = this,
                o = this._target,
                i = this._emitter,
                s = this._listeners,
                a = function () {
                  var n = m.apply(null, arguments),
                    s = { data: n, name: t, original: e }
                  r
                    ? !1 !== r.call(o, s) && i.emit.apply(i, [s.name].concat(n))
                    : i.emit.apply(i, [t].concat(n))
                }
              if (s[e]) throw Error("Event '" + e + "' is already listening")
              this._listenersCount++,
                i._newListener && i._removeListener && !n._onNewListener
                  ? ((this._onNewListener = function (r) {
                      r === t &&
                        null === s[e] &&
                        ((s[e] = a), n._on.call(o, e, a))
                    }),
                    i.on("newListener", this._onNewListener),
                    (this._onRemoveListener = function (r) {
                      r === t &&
                        !i.hasListeners(r) &&
                        s[e] &&
                        ((s[e] = null), n._off.call(o, e, a))
                    }),
                    (s[e] = null),
                    i.on("removeListener", this._onRemoveListener))
                  : ((s[e] = a), n._on.call(o, e, a))
            },
            unsubscribe: function (e) {
              var t,
                r,
                n,
                o = this,
                i = this._listeners,
                s = this._emitter,
                a = this._off,
                u = this._target
              if (e && "string" != typeof e)
                throw TypeError("event must be a string")
              function c() {
                o._onNewListener &&
                  (s.off("newListener", o._onNewListener),
                  s.off("removeListener", o._onRemoveListener),
                  (o._onNewListener = null),
                  (o._onRemoveListener = null))
                var e = O.call(s, o)
                s._observers.splice(e, 1)
              }
              if (e) {
                if (!(t = i[e])) return
                a.call(u, e, t), delete i[e], --this._listenersCount || c()
              } else {
                for (n = (r = d(i)).length; n-- > 0; )
                  (e = r[n]), a.call(u, e, i[e])
                ;(this._listeners = {}), (this._listenersCount = 0), c()
              }
            },
          })
          var M = _(["function"]),
            P = _(["object", "function"])
          function w(e, t, r) {
            var n,
              o,
              i,
              s = 0,
              a = new e(function (u, c, l) {
                function d() {
                  o && (o = null), s && (clearTimeout(s), (s = 0))
                }
                ;(r = h(
                  r,
                  { timeout: 0, overload: !1 },
                  {
                    timeout: function (e, t) {
                      return (
                        ("number" != typeof (e *= 1) ||
                          e < 0 ||
                          !Number.isFinite(e)) &&
                          t("timeout must be a positive number"),
                        e
                      )
                    },
                  }
                )),
                  (n =
                    !r.overload &&
                    "function" == typeof e.prototype.cancel &&
                    "function" == typeof l)
                var f = function (e) {
                    d(), u(e)
                  },
                  p = function (e) {
                    d(), c(e)
                  }
                n
                  ? t(f, p, l)
                  : ((o = [
                      function (e) {
                        p(e || Error("canceled"))
                      },
                    ]),
                    t(f, p, function (e) {
                      if (i)
                        throw Error(
                          "Unable to subscribe on cancel event asynchronously"
                        )
                      if ("function" != typeof e)
                        throw TypeError("onCancel callback must be a function")
                      o.push(e)
                    }),
                    (i = !0)),
                  r.timeout > 0 &&
                    (s = setTimeout(function () {
                      var e = Error("timeout")
                      ;(e.code = "ETIMEDOUT"), (s = 0), a.cancel(e), c(e)
                    }, r.timeout))
              })
            return (
              n ||
                (a.cancel = function (e) {
                  if (o) {
                    for (var t = o.length, r = 1; r < t; r++) o[r](e)
                    o[0](e), (o = null)
                  }
                }),
              a
            )
          }
          function O(e) {
            var t = this._observers
            if (!t) return -1
            for (var r = t.length, n = 0; n < r; n++)
              if (t[n]._target === e) return n
            return -1
          }
          function j(e, t, r, n, o) {
            if (!r) return null
            if (0 === n) {
              var i = typeof t
              if ("string" === i) {
                var s,
                  a,
                  u = 0,
                  c = 0,
                  l = this.delimiter,
                  f = l.length
                if (-1 !== (a = t.indexOf(l))) {
                  s = new Array(5)
                  do {
                    ;(s[u++] = t.slice(c, a)), (c = a + f)
                  } while (-1 !== (a = t.indexOf(l, c)))
                  ;(s[u++] = t.slice(c)), (t = s), (o = u)
                } else (t = [t]), (o = 1)
              } else "object" === i ? (o = t.length) : ((t = [t]), (o = 1))
            }
            var p,
              g,
              m,
              y,
              b,
              h,
              v,
              _ = null,
              M = t[n],
              P = t[n + 1]
            if (n === o)
              r._listeners &&
                ("function" == typeof r._listeners
                  ? (e && e.push(r._listeners), (_ = [r]))
                  : (e && e.push.apply(e, r._listeners), (_ = [r])))
            else {
              if ("*" === M) {
                for (a = (h = d(r)).length; a-- > 0; )
                  "_listeners" !== (p = h[a]) &&
                    (v = j(e, t, r[p], n + 1, o)) &&
                    (_ ? _.push.apply(_, v) : (_ = v))
                return _
              }
              if ("**" === M) {
                for (
                  (b = n + 1 === o || (n + 2 === o && "*" === P)) &&
                    r._listeners &&
                    (_ = j(e, t, r, o, o)),
                    a = (h = d(r)).length;
                  a-- > 0;

                )
                  "_listeners" !== (p = h[a]) &&
                    ("*" === p || "**" === p
                      ? (r[p]._listeners &&
                          !b &&
                          (v = j(e, t, r[p], o, o)) &&
                          (_ ? _.push.apply(_, v) : (_ = v)),
                        (v = j(e, t, r[p], n, o)))
                      : (v = j(e, t, r[p], p === P ? n + 2 : n, o)),
                    v && (_ ? _.push.apply(_, v) : (_ = v)))
                return _
              }
              r[M] && (_ = j(e, t, r[M], n + 1, o))
            }
            if (((g = r["*"]) && j(e, t, g, n + 1, o), (m = r["**"])))
              if (n < o)
                for (
                  m._listeners && j(e, t, m, o, o), a = (h = d(m)).length;
                  a-- > 0;

                )
                  "_listeners" !== (p = h[a]) &&
                    (p === P
                      ? j(e, t, m[p], n + 2, o)
                      : p === M
                      ? j(e, t, m[p], n + 1, o)
                      : (((y = {})[p] = m[p]), j(e, t, { "**": y }, n + 1, o)))
              else
                m._listeners
                  ? j(e, t, m, o, o)
                  : m["*"] && m["*"]._listeners && j(e, t, m["*"], o, o)
            return _
          }
          function S(e, t, r) {
            var n,
              o,
              i = 0,
              s = 0,
              a = this.delimiter,
              u = a.length
            if ("string" == typeof e)
              if (-1 !== (n = e.indexOf(a))) {
                o = new Array(5)
                do {
                  ;(o[i++] = e.slice(s, n)), (s = n + u)
                } while (-1 !== (n = e.indexOf(a, s)))
                o[i++] = e.slice(s)
              } else (o = [e]), (i = 1)
            else (o = e), (i = e.length)
            if (i > 1)
              for (n = 0; n + 1 < i; n++)
                if ("**" === o[n] && "**" === o[n + 1]) return
            var c,
              l = this.listenerTree
            for (n = 0; n < i; n++)
              if (((l = l[(c = o[n])] || (l[c] = {})), n === i - 1))
                return (
                  l._listeners
                    ? ("function" == typeof l._listeners &&
                        (l._listeners = [l._listeners]),
                      r ? l._listeners.unshift(t) : l._listeners.push(t),
                      !l._listeners.warned &&
                        this._maxListeners > 0 &&
                        l._listeners.length > this._maxListeners &&
                        ((l._listeners.warned = !0),
                        g.call(this, l._listeners.length, c)))
                    : (l._listeners = t),
                  !0
                )
            return !0
          }
          function x(e, t, r, n) {
            for (
              var o, i, s, a, u = d(e), c = u.length, l = e._listeners;
              c-- > 0;

            )
              (o = e[(i = u[c])]),
                (s = "_listeners" === i ? r : r ? r.concat(i) : [i]),
                (a = n || "symbol" == typeof i),
                l && t.push(a ? s : s.join(this.delimiter)),
                "object" == typeof o && x.call(this, o, t, s, a)
            return t
          }
          function C(e) {
            for (var t, r, n, o = d(e), i = o.length; i-- > 0; )
              (t = e[(r = o[i])]) &&
                ((n = !0), "_listeners" === r || C(t) || delete e[r])
            return n
          }
          function I(e, t, r) {
            ;(this.emitter = e), (this.event = t), (this.listener = r)
          }
          function k(e, t, r) {
            if (!0 === r) i = !0
            else if (!1 === r) n = !0
            else {
              if (!r || "object" != typeof r)
                throw TypeError("options should be an object or true")
              var n = r.async,
                i = r.promisify,
                s = r.nextTick,
                u = r.objectify
            }
            if (n || s || i) {
              var c = t,
                d = t._origin || t
              if (s && !a) throw Error("process.nextTick is not supported")
              i === o && (i = "AsyncFunction" === t.constructor.name),
                (t = function () {
                  var e = arguments,
                    t = this,
                    r = this.event
                  return i
                    ? s
                      ? Promise.resolve()
                      : new Promise(function (e) {
                          l(e)
                        }).then(function () {
                          return (t.event = r), c.apply(t, e)
                        })
                    : (s ? process.nextTick : l)(function () {
                        ;(t.event = r), c.apply(t, e)
                      })
                }),
                (t._async = !0),
                (t._origin = d)
            }
            return [t, u ? new I(this, e, t) : this]
          }
          function E(e) {
            ;(this._events = {}),
              (this._newListener = !1),
              (this._removeListener = !1),
              (this.verboseMemoryLeak = !1),
              p.call(this, e)
          }
          ;(I.prototype.off = function () {
            return this.emitter.off(this.event, this.listener), this
          }),
            (E.EventEmitter2 = E),
            (E.prototype.listenTo = function (e, t, r) {
              if ("object" != typeof e)
                throw TypeError("target musts be an object")
              var n = this
              function i(t) {
                if ("object" != typeof t)
                  throw TypeError("events must be an object")
                var o,
                  i = r.reducers,
                  s = O.call(n, e)
                o = -1 === s ? new b(n, e, r) : n._observers[s]
                for (
                  var a,
                    u = d(t),
                    c = u.length,
                    l = "function" == typeof i,
                    f = 0;
                  f < c;
                  f++
                )
                  (a = u[f]), o.subscribe(a, t[a] || a, l ? i : i && i[a])
              }
              return (
                (r = h(
                  r,
                  { on: o, off: o, reducers: o },
                  { on: M, off: M, reducers: P }
                )),
                s(t)
                  ? i(y(t))
                  : i("string" == typeof t ? y(t.split(/\s+/)) : t),
                this
              )
            }),
            (E.prototype.stopListeningTo = function (e, t) {
              var r = this._observers
              if (!r) return !1
              var n,
                o = r.length,
                i = !1
              if (e && "object" != typeof e)
                throw TypeError("target should be an object")
              for (; o-- > 0; )
                (n = r[o]),
                  (e && n._target !== e) || (n.unsubscribe(t), (i = !0))
              return i
            }),
            (E.prototype.delimiter = "."),
            (E.prototype.setMaxListeners = function (e) {
              e !== o &&
                ((this._maxListeners = e),
                this._conf || (this._conf = {}),
                (this._conf.maxListeners = e))
            }),
            (E.prototype.getMaxListeners = function () {
              return this._maxListeners
            }),
            (E.prototype.event = ""),
            (E.prototype.once = function (e, t, r) {
              return this._once(e, t, !1, r)
            }),
            (E.prototype.prependOnceListener = function (e, t, r) {
              return this._once(e, t, !0, r)
            }),
            (E.prototype._once = function (e, t, r, n) {
              return this._many(e, 1, t, r, n)
            }),
            (E.prototype.many = function (e, t, r, n) {
              return this._many(e, t, r, !1, n)
            }),
            (E.prototype.prependMany = function (e, t, r, n) {
              return this._many(e, t, r, !0, n)
            }),
            (E.prototype._many = function (e, t, r, n, o) {
              var i = this
              if ("function" != typeof r)
                throw new Error("many only accepts instances of Function")
              function s() {
                return 0 == --t && i.off(e, s), r.apply(this, arguments)
              }
              return (s._origin = r), this._on(e, s, n, o)
            }),
            (E.prototype.emit = function () {
              if (!this._events && !this._all) return !1
              this._events || f.call(this)
              var e,
                t,
                r,
                n,
                o,
                i,
                s = arguments[0],
                a = this.wildcard
              if (
                "newListener" === s &&
                !this._newListener &&
                !this._events.newListener
              )
                return !1
              if (
                a &&
                ((e = s),
                "newListener" !== s &&
                  "removeListener" !== s &&
                  "object" == typeof s)
              ) {
                if (((r = s.length), u))
                  for (n = 0; n < r; n++)
                    if ("symbol" == typeof s[n]) {
                      i = !0
                      break
                    }
                i || (s = s.join(this.delimiter))
              }
              var c,
                l = arguments.length
              if (this._all && this._all.length)
                for (n = 0, r = (c = this._all.slice()).length; n < r; n++)
                  switch (((this.event = s), l)) {
                    case 1:
                      c[n].call(this, s)
                      break
                    case 2:
                      c[n].call(this, s, arguments[1])
                      break
                    case 3:
                      c[n].call(this, s, arguments[1], arguments[2])
                      break
                    default:
                      c[n].apply(this, arguments)
                  }
              if (a) (c = []), j.call(this, c, e, this.listenerTree, 0, r)
              else {
                if ("function" == typeof (c = this._events[s])) {
                  switch (((this.event = s), l)) {
                    case 1:
                      c.call(this)
                      break
                    case 2:
                      c.call(this, arguments[1])
                      break
                    case 3:
                      c.call(this, arguments[1], arguments[2])
                      break
                    default:
                      for (t = new Array(l - 1), o = 1; o < l; o++)
                        t[o - 1] = arguments[o]
                      c.apply(this, t)
                  }
                  return !0
                }
                c && (c = c.slice())
              }
              if (c && c.length) {
                if (l > 3)
                  for (t = new Array(l - 1), o = 1; o < l; o++)
                    t[o - 1] = arguments[o]
                for (n = 0, r = c.length; n < r; n++)
                  switch (((this.event = s), l)) {
                    case 1:
                      c[n].call(this)
                      break
                    case 2:
                      c[n].call(this, arguments[1])
                      break
                    case 3:
                      c[n].call(this, arguments[1], arguments[2])
                      break
                    default:
                      c[n].apply(this, t)
                  }
                return !0
              }
              if (!this.ignoreErrors && !this._all && "error" === s)
                throw arguments[1] instanceof Error
                  ? arguments[1]
                  : new Error("Uncaught, unspecified 'error' event.")
              return !!this._all
            }),
            (E.prototype.emitAsync = function () {
              if (!this._events && !this._all) return !1
              this._events || f.call(this)
              var e,
                t,
                r,
                n,
                o,
                i,
                s = arguments[0],
                a = this.wildcard
              if (
                "newListener" === s &&
                !this._newListener &&
                !this._events.newListener
              )
                return Promise.resolve([!1])
              if (
                a &&
                ((e = s),
                "newListener" !== s &&
                  "removeListener" !== s &&
                  "object" == typeof s)
              ) {
                if (((n = s.length), u))
                  for (o = 0; o < n; o++)
                    if ("symbol" == typeof s[o]) {
                      t = !0
                      break
                    }
                t || (s = s.join(this.delimiter))
              }
              var c,
                l = [],
                d = arguments.length
              if (this._all)
                for (o = 0, n = this._all.length; o < n; o++)
                  switch (((this.event = s), d)) {
                    case 1:
                      l.push(this._all[o].call(this, s))
                      break
                    case 2:
                      l.push(this._all[o].call(this, s, arguments[1]))
                      break
                    case 3:
                      l.push(
                        this._all[o].call(this, s, arguments[1], arguments[2])
                      )
                      break
                    default:
                      l.push(this._all[o].apply(this, arguments))
                  }
              if (
                (a
                  ? ((c = []), j.call(this, c, e, this.listenerTree, 0))
                  : (c = this._events[s]),
                "function" == typeof c)
              )
                switch (((this.event = s), d)) {
                  case 1:
                    l.push(c.call(this))
                    break
                  case 2:
                    l.push(c.call(this, arguments[1]))
                    break
                  case 3:
                    l.push(c.call(this, arguments[1], arguments[2]))
                    break
                  default:
                    for (r = new Array(d - 1), i = 1; i < d; i++)
                      r[i - 1] = arguments[i]
                    l.push(c.apply(this, r))
                }
              else if (c && c.length) {
                if (((c = c.slice()), d > 3))
                  for (r = new Array(d - 1), i = 1; i < d; i++)
                    r[i - 1] = arguments[i]
                for (o = 0, n = c.length; o < n; o++)
                  switch (((this.event = s), d)) {
                    case 1:
                      l.push(c[o].call(this))
                      break
                    case 2:
                      l.push(c[o].call(this, arguments[1]))
                      break
                    case 3:
                      l.push(c[o].call(this, arguments[1], arguments[2]))
                      break
                    default:
                      l.push(c[o].apply(this, r))
                  }
              } else if (!this.ignoreErrors && !this._all && "error" === s)
                return arguments[1] instanceof Error
                  ? Promise.reject(arguments[1])
                  : Promise.reject("Uncaught, unspecified 'error' event.")
              return Promise.all(l)
            }),
            (E.prototype.on = function (e, t, r) {
              return this._on(e, t, !1, r)
            }),
            (E.prototype.prependListener = function (e, t, r) {
              return this._on(e, t, !0, r)
            }),
            (E.prototype.onAny = function (e) {
              return this._onAny(e, !1)
            }),
            (E.prototype.prependAny = function (e) {
              return this._onAny(e, !0)
            }),
            (E.prototype.addListener = E.prototype.on),
            (E.prototype._onAny = function (e, t) {
              if ("function" != typeof e)
                throw new Error("onAny only accepts instances of Function")
              return (
                this._all || (this._all = []),
                t ? this._all.unshift(e) : this._all.push(e),
                this
              )
            }),
            (E.prototype._on = function (e, t, r, n) {
              if ("function" == typeof e) return this._onAny(e, t), this
              if ("function" != typeof t)
                throw new Error("on only accepts instances of Function")
              this._events || f.call(this)
              var i,
                s = this
              return (
                n !== o && ((t = (i = k.call(this, e, t, n))[0]), (s = i[1])),
                this._newListener && this.emit("newListener", e, t),
                this.wildcard
                  ? (S.call(this, e, t, r), s)
                  : (this._events[e]
                      ? ("function" == typeof this._events[e] &&
                          (this._events[e] = [this._events[e]]),
                        r
                          ? this._events[e].unshift(t)
                          : this._events[e].push(t),
                        !this._events[e].warned &&
                          this._maxListeners > 0 &&
                          this._events[e].length > this._maxListeners &&
                          ((this._events[e].warned = !0),
                          g.call(this, this._events[e].length, e)))
                      : (this._events[e] = t),
                    s)
              )
            }),
            (E.prototype.off = function (e, t) {
              if ("function" != typeof t)
                throw new Error(
                  "removeListener only takes instances of Function"
                )
              var r,
                n = []
              if (this.wildcard) {
                var o =
                  "string" == typeof e ? e.split(this.delimiter) : e.slice()
                if (!(n = j.call(this, null, o, this.listenerTree, 0)))
                  return this
              } else {
                if (!this._events[e]) return this
                ;(r = this._events[e]), n.push({ _listeners: r })
              }
              for (var i = 0; i < n.length; i++) {
                var a = n[i]
                if (((r = a._listeners), s(r))) {
                  for (var u = -1, c = 0, l = r.length; c < l; c++)
                    if (
                      r[c] === t ||
                      (r[c].listener && r[c].listener === t) ||
                      (r[c]._origin && r[c]._origin === t)
                    ) {
                      u = c
                      break
                    }
                  if (u < 0) continue
                  return (
                    this.wildcard
                      ? a._listeners.splice(u, 1)
                      : this._events[e].splice(u, 1),
                    0 === r.length &&
                      (this.wildcard
                        ? delete a._listeners
                        : delete this._events[e]),
                    this._removeListener && this.emit("removeListener", e, t),
                    this
                  )
                }
                ;(r === t ||
                  (r.listener && r.listener === t) ||
                  (r._origin && r._origin === t)) &&
                  (this.wildcard ? delete a._listeners : delete this._events[e],
                  this._removeListener && this.emit("removeListener", e, t))
              }
              return this.listenerTree && C(this.listenerTree), this
            }),
            (E.prototype.offAny = function (e) {
              var t,
                r = 0,
                n = 0
              if (e && this._all && this._all.length > 0) {
                for (r = 0, n = (t = this._all).length; r < n; r++)
                  if (e === t[r])
                    return (
                      t.splice(r, 1),
                      this._removeListener && this.emit("removeListenerAny", e),
                      this
                    )
              } else {
                if (((t = this._all), this._removeListener))
                  for (r = 0, n = t.length; r < n; r++)
                    this.emit("removeListenerAny", t[r])
                this._all = []
              }
              return this
            }),
            (E.prototype.removeListener = E.prototype.off),
            (E.prototype.removeAllListeners = function (e) {
              if (e === o) return !this._events || f.call(this), this
              if (this.wildcard) {
                var t,
                  r = j.call(this, null, e, this.listenerTree, 0)
                if (!r) return this
                for (t = 0; t < r.length; t++) r[t]._listeners = null
                this.listenerTree && C(this.listenerTree)
              } else this._events && (this._events[e] = null)
              return this
            }),
            (E.prototype.listeners = function (e) {
              var t,
                r,
                n,
                i,
                s,
                a = this._events
              if (e === o) {
                if (this.wildcard)
                  throw Error("event name required for wildcard emitter")
                if (!a) return []
                for (i = (t = d(a)).length, n = []; i-- > 0; )
                  "function" == typeof (r = a[t[i]])
                    ? n.push(r)
                    : n.push.apply(n, r)
                return n
              }
              if (this.wildcard) {
                if (!(s = this.listenerTree)) return []
                var u = [],
                  c = "string" == typeof e ? e.split(this.delimiter) : e.slice()
                return j.call(this, u, c, s, 0), u
              }
              return a && (r = a[e]) ? ("function" == typeof r ? [r] : r) : []
            }),
            (E.prototype.eventNames = function (e) {
              var t = this._events
              return this.wildcard
                ? x.call(this, this.listenerTree, [], null, e)
                : t
                ? d(t)
                : []
            }),
            (E.prototype.listenerCount = function (e) {
              return this.listeners(e).length
            }),
            (E.prototype.hasListeners = function (e) {
              if (this.wildcard) {
                var t = [],
                  r = "string" == typeof e ? e.split(this.delimiter) : e.slice()
                return j.call(this, t, r, this.listenerTree, 0), t.length > 0
              }
              var n = this._events,
                i = this._all
              return !!(
                (i && i.length) ||
                (n && (e === o ? d(n).length : n[e]))
              )
            }),
            (E.prototype.listenersAny = function () {
              return this._all ? this._all : []
            }),
            (E.prototype.waitFor = function (e, t) {
              var r = this,
                n = typeof t
              return (
                "number" === n
                  ? (t = { timeout: t })
                  : "function" === n && (t = { filter: t }),
                w(
                  (t = h(
                    t,
                    {
                      timeout: 0,
                      filter: o,
                      handleError: !1,
                      Promise,
                      overload: !1,
                    },
                    { filter: M, Promise: v }
                  )).Promise,
                  function (n, o, i) {
                    function s() {
                      var i = t.filter
                      if (!i || i.apply(r, arguments))
                        if ((r.off(e, s), t.handleError)) {
                          var a = arguments[0]
                          a ? o(a) : n(m.apply(null, arguments).slice(1))
                        } else n(m.apply(null, arguments))
                    }
                    i(function () {
                      r.off(e, s)
                    }),
                      r._on(e, s, !1)
                  },
                  { timeout: t.timeout, overload: t.overload }
                )
              )
            })
          var A = E.prototype
          Object.defineProperties(E, {
            defaultMaxListeners: {
              get: function () {
                return A._maxListeners
              },
              set: function (e) {
                if ("number" != typeof e || e < 0 || Number.isNaN(e))
                  throw TypeError("n must be a non-negative number")
                A._maxListeners = e
              },
              enumerable: !0,
            },
            once: {
              value: function (e, t, r) {
                return w(
                  (r = h(
                    r,
                    { Promise, timeout: 0, overload: !1 },
                    { Promise: v }
                  )).Promise,
                  function (r, n, o) {
                    var i
                    if ("function" == typeof e.addEventListener)
                      return (
                        (i = function () {
                          r(m.apply(null, arguments))
                        }),
                        o(function () {
                          e.removeEventListener(t, i)
                        }),
                        void e.addEventListener(t, i, { once: !0 })
                      )
                    var s,
                      a = function () {
                        s && e.removeListener("error", s),
                          r(m.apply(null, arguments))
                      }
                    "error" !== t &&
                      ((s = function (r) {
                        e.removeListener(t, a), n(r)
                      }),
                      e.once("error", s)),
                      o(function () {
                        s && e.removeListener("error", s),
                          e.removeListener(t, a)
                      }),
                      e.once(t, a)
                  },
                  { timeout: r.timeout, overload: r.overload }
                )
              },
              writable: !0,
              configurable: !0,
            },
          }),
            Object.defineProperties(A, {
              _maxListeners: { value: 10, writable: !0, configurable: !0 },
              _observers: { value: null, writable: !0, configurable: !0 },
            }),
            (n = function () {
              return E
            }.call(t, r, t, e)) === o || (e.exports = n)
        })()
      },
      5707: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict"
        var Buffer = __webpack_require__(48287).hp
        const Token = __webpack_require__(44266),
          strtok3 = __webpack_require__(96452),
          { stringToBytes, tarHeaderChecksumMatches, uint32SyncSafeToken } =
            __webpack_require__(86760),
          supported = __webpack_require__(71664),
          minimumBytes = 4100
        async function fromStream(e) {
          const t = await strtok3.fromStream(e)
          try {
            return await fromTokenizer(t)
          } finally {
            await t.close()
          }
        }
        async function fromBuffer(e) {
          if (
            !(
              e instanceof Uint8Array ||
              e instanceof ArrayBuffer ||
              Buffer.isBuffer(e)
            )
          )
            throw new TypeError(
              `Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``
            )
          const t = e instanceof Buffer ? e : Buffer.from(e)
          if (t && t.length > 1) return fromTokenizer(strtok3.fromBuffer(t))
        }
        function _check(e, t, r) {
          r = { offset: 0, ...r }
          for (const [n, o] of t.entries())
            if (r.mask) {
              if (o !== (r.mask[n] & e[n + r.offset])) return !1
            } else if (o !== e[n + r.offset]) return !1
          return !0
        }
        async function fromTokenizer(e) {
          try {
            return _fromTokenizer(e)
          } catch (e) {
            if (!(e instanceof strtok3.EndOfStreamError)) throw e
          }
        }
        async function _fromTokenizer(e) {
          let t = Buffer.alloc(minimumBytes)
          const r = (e, r) => _check(t, e, r),
            n = (e, t) => r(stringToBytes(e), t)
          if (
            (e.fileInfo.size || (e.fileInfo.size = Number.MAX_SAFE_INTEGER),
            await e.peekBuffer(t, { length: 12, mayBeLess: !0 }),
            r([66, 77]))
          )
            return { ext: "bmp", mime: "image/bmp" }
          if (r([11, 119]))
            return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" }
          if (r([120, 1]))
            return { ext: "dmg", mime: "application/x-apple-diskimage" }
          if (r([77, 90]))
            return { ext: "exe", mime: "application/x-msdownload" }
          if (r([37, 33]))
            return (
              await e.peekBuffer(t, { length: 24, mayBeLess: !0 }),
              n("PS-Adobe-", { offset: 2 }) && n(" EPSF-", { offset: 14 })
                ? { ext: "eps", mime: "application/eps" }
                : { ext: "ps", mime: "application/postscript" }
            )
          if (r([31, 160]) || r([31, 157]))
            return { ext: "Z", mime: "application/x-compress" }
          if (r([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" }
          if (r([73, 73, 188]))
            return { ext: "jxr", mime: "image/vnd.ms-photo" }
          if (r([31, 139, 8])) return { ext: "gz", mime: "application/gzip" }
          if (r([66, 90, 104]))
            return { ext: "bz2", mime: "application/x-bzip2" }
          if (n("ID3")) {
            await e.ignore(6)
            const o = await e.readToken(uint32SyncSafeToken)
            return e.position + o > e.fileInfo.size
              ? { ext: "mp3", mime: "audio/mpeg" }
              : (await e.ignore(o), fromTokenizer(e))
          }
          if (n("MP+")) return { ext: "mpc", mime: "audio/x-musepack" }
          if ((67 === t[0] || 70 === t[0]) && r([87, 83], { offset: 1 }))
            return { ext: "swf", mime: "application/x-shockwave-flash" }
          if (r([71, 73, 70])) return { ext: "gif", mime: "image/gif" }
          if (n("FLIF")) return { ext: "flif", mime: "image/flif" }
          if (n("8BPS"))
            return { ext: "psd", mime: "image/vnd.adobe.photoshop" }
          if (n("WEBP", { offset: 8 }))
            return { ext: "webp", mime: "image/webp" }
          if (n("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" }
          if (n("FORM")) return { ext: "aif", mime: "audio/aiff" }
          if (n("icns", { offset: 0 }))
            return { ext: "icns", mime: "image/icns" }
          if (r([80, 75, 3, 4])) {
            try {
              for (; e.position + 30 < e.fileInfo.size; ) {
                await e.readBuffer(t, { length: 30 })
                const i = {
                  compressedSize: t.readUInt32LE(18),
                  uncompressedSize: t.readUInt32LE(22),
                  filenameLength: t.readUInt16LE(26),
                  extraFieldLength: t.readUInt16LE(28),
                }
                if (
                  ((i.filename = await e.readToken(
                    new Token.StringType(i.filenameLength, "utf-8")
                  )),
                  await e.ignore(i.extraFieldLength),
                  "META-INF/mozilla.rsa" === i.filename)
                )
                  return { ext: "xpi", mime: "application/x-xpinstall" }
                if (i.filename.endsWith(".rels") || i.filename.endsWith(".xml"))
                  switch (i.filename.split("/")[0]) {
                    case "_rels":
                    default:
                      break
                    case "word":
                      return {
                        ext: "docx",
                        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                      }
                    case "ppt":
                      return {
                        ext: "pptx",
                        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      }
                    case "xl":
                      return {
                        ext: "xlsx",
                        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                      }
                  }
                if (i.filename.startsWith("xl/"))
                  return {
                    ext: "xlsx",
                    mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  }
                if (
                  i.filename.startsWith("3D/") &&
                  i.filename.endsWith(".model")
                )
                  return { ext: "3mf", mime: "model/3mf" }
                if (
                  "mimetype" === i.filename &&
                  i.compressedSize === i.uncompressedSize
                )
                  switch (
                    await e.readToken(
                      new Token.StringType(i.compressedSize, "utf-8")
                    )
                  ) {
                    case "application/epub+zip":
                      return { ext: "epub", mime: "application/epub+zip" }
                    case "application/vnd.oasis.opendocument.text":
                      return {
                        ext: "odt",
                        mime: "application/vnd.oasis.opendocument.text",
                      }
                    case "application/vnd.oasis.opendocument.spreadsheet":
                      return {
                        ext: "ods",
                        mime: "application/vnd.oasis.opendocument.spreadsheet",
                      }
                    case "application/vnd.oasis.opendocument.presentation":
                      return {
                        ext: "odp",
                        mime: "application/vnd.oasis.opendocument.presentation",
                      }
                  }
                if (0 === i.compressedSize) {
                  let s = -1
                  for (; s < 0 && e.position < e.fileInfo.size; )
                    await e.peekBuffer(t, { mayBeLess: !0 }),
                      (s = t.indexOf("504B0304", 0, "hex")),
                      await e.ignore(s >= 0 ? s : t.length)
                } else await e.ignore(i.compressedSize)
              }
            } catch (a) {
              if (!(a instanceof strtok3.EndOfStreamError)) throw a
            }
            return { ext: "zip", mime: "application/zip" }
          }
          if (n("OggS")) {
            await e.ignore(28)
            const u = Buffer.alloc(8)
            return (
              await e.readBuffer(u),
              _check(u, [79, 112, 117, 115, 72, 101, 97, 100])
                ? { ext: "opus", mime: "audio/opus" }
                : _check(u, [128, 116, 104, 101, 111, 114, 97])
                ? { ext: "ogv", mime: "video/ogg" }
                : _check(u, [1, 118, 105, 100, 101, 111, 0])
                ? { ext: "ogm", mime: "video/ogg" }
                : _check(u, [127, 70, 76, 65, 67])
                ? { ext: "oga", mime: "audio/ogg" }
                : _check(u, [83, 112, 101, 101, 120, 32, 32])
                ? { ext: "spx", mime: "audio/ogg" }
                : _check(u, [1, 118, 111, 114, 98, 105, 115])
                ? { ext: "ogg", mime: "audio/ogg" }
                : { ext: "ogx", mime: "application/ogg" }
            )
          }
          if (
            r([80, 75]) &&
            (3 === t[2] || 5 === t[2] || 7 === t[2]) &&
            (4 === t[3] || 6 === t[3] || 8 === t[3])
          )
            return { ext: "zip", mime: "application/zip" }
          if (n("ftyp", { offset: 4 }) && 0 != (96 & t[8])) {
            const c = t.toString("binary", 8, 12).replace("\0", " ").trim()
            switch (c) {
              case "avif":
                return { ext: "avif", mime: "image/avif" }
              case "mif1":
                return { ext: "heic", mime: "image/heif" }
              case "msf1":
                return { ext: "heic", mime: "image/heif-sequence" }
              case "heic":
              case "heix":
                return { ext: "heic", mime: "image/heic" }
              case "hevc":
              case "hevx":
                return { ext: "heic", mime: "image/heic-sequence" }
              case "qt":
                return { ext: "mov", mime: "video/quicktime" }
              case "M4V":
              case "M4VH":
              case "M4VP":
                return { ext: "m4v", mime: "video/x-m4v" }
              case "M4P":
                return { ext: "m4p", mime: "video/mp4" }
              case "M4B":
                return { ext: "m4b", mime: "audio/mp4" }
              case "M4A":
                return { ext: "m4a", mime: "audio/x-m4a" }
              case "F4V":
                return { ext: "f4v", mime: "video/mp4" }
              case "F4P":
                return { ext: "f4p", mime: "video/mp4" }
              case "F4A":
                return { ext: "f4a", mime: "audio/mp4" }
              case "F4B":
                return { ext: "f4b", mime: "audio/mp4" }
              case "crx":
                return { ext: "cr3", mime: "image/x-canon-cr3" }
              default:
                return c.startsWith("3g")
                  ? c.startsWith("3g2")
                    ? { ext: "3g2", mime: "video/3gpp2" }
                    : { ext: "3gp", mime: "video/3gpp" }
                  : { ext: "mp4", mime: "video/mp4" }
            }
          }
          if (n("MThd")) return { ext: "mid", mime: "audio/midi" }
          if (
            n("wOFF") &&
            (r([0, 1, 0, 0], { offset: 4 }) || n("OTTO", { offset: 4 }))
          )
            return { ext: "woff", mime: "font/woff" }
          if (
            n("wOF2") &&
            (r([0, 1, 0, 0], { offset: 4 }) || n("OTTO", { offset: 4 }))
          )
            return { ext: "woff2", mime: "font/woff2" }
          if (r([212, 195, 178, 161]) || r([161, 178, 195, 212]))
            return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" }
          if (n("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" }
          if (n("LZIP")) return { ext: "lz", mime: "application/x-lzip" }
          if (n("fLaC")) return { ext: "flac", mime: "audio/x-flac" }
          if (r([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" }
          if (n("wvpk")) return { ext: "wv", mime: "audio/wavpack" }
          if (n("%PDF")) {
            await e.ignore(1350)
            const l = 10485760,
              d = Buffer.alloc(Math.min(l, e.fileInfo.size))
            return (
              await e.readBuffer(d, { mayBeLess: !0 }),
              d.includes(Buffer.from("AIPrivateData"))
                ? { ext: "ai", mime: "application/postscript" }
                : { ext: "pdf", mime: "application/pdf" }
            )
          }
          if (r([0, 97, 115, 109]))
            return { ext: "wasm", mime: "application/wasm" }
          if (r([73, 73, 42, 0]))
            return n("CR", { offset: 8 })
              ? { ext: "cr2", mime: "image/x-canon-cr2" }
              : r([28, 0, 254, 0], { offset: 8 }) ||
                r([31, 0, 11, 0], { offset: 8 })
              ? { ext: "nef", mime: "image/x-nikon-nef" }
              : r([8, 0, 0, 0], { offset: 4 }) &&
                (r([45, 0, 254, 0], { offset: 8 }) ||
                  r([39, 0, 254, 0], { offset: 8 }))
              ? { ext: "dng", mime: "image/x-adobe-dng" }
              : ((t = Buffer.alloc(24)),
                await e.peekBuffer(t),
                (r([16, 251, 134, 1], { offset: 4 }) ||
                  r([8, 0, 0, 0], { offset: 4 })) &&
                r([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], {
                  offset: 9,
                })
                  ? { ext: "arw", mime: "image/x-sony-arw" }
                  : { ext: "tif", mime: "image/tiff" })
          if (r([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" }
          if (n("MAC ")) return { ext: "ape", mime: "audio/ape" }
          if (r([26, 69, 223, 163])) {
            async function f() {
              const t = await e.peekNumber(Token.UINT8)
              let r = 128,
                n = 0
              for (; 0 == (t & r) && 0 !== r; ) ++n, (r >>= 1)
              const o = Buffer.alloc(n + 1)
              return await e.readBuffer(o), o
            }
            async function p() {
              const e = await f(),
                t = await f()
              t[0] ^= 128 >> (t.length - 1)
              const r = Math.min(6, t.length)
              return {
                id: e.readUIntBE(0, e.length),
                len: t.readUIntBE(t.length - r, r),
              }
            }
            async function g(t, r) {
              for (; r > 0; ) {
                const t = await p()
                if (17026 === t.id)
                  return e.readToken(new Token.StringType(t.len, "utf-8"))
                await e.ignore(t.len), --r
              }
            }
            const m = await p()
            switch (await g(0, m.len)) {
              case "webm":
                return { ext: "webm", mime: "video/webm" }
              case "matroska":
                return { ext: "mkv", mime: "video/x-matroska" }
              default:
                return
            }
          }
          if (r([82, 73, 70, 70])) {
            if (r([65, 86, 73], { offset: 8 }))
              return { ext: "avi", mime: "video/vnd.avi" }
            if (r([87, 65, 86, 69], { offset: 8 }))
              return { ext: "wav", mime: "audio/vnd.wave" }
            if (r([81, 76, 67, 77], { offset: 8 }))
              return { ext: "qcp", mime: "audio/qcelp" }
          }
          if (n("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" }
          if (r([78, 69, 83, 26]))
            return { ext: "nes", mime: "application/x-nintendo-nes-rom" }
          if (n("Cr24"))
            return { ext: "crx", mime: "application/x-google-chrome-extension" }
          if (n("MSCF") || n("ISc("))
            return { ext: "cab", mime: "application/vnd.ms-cab-compressed" }
          if (r([237, 171, 238, 219]))
            return { ext: "rpm", mime: "application/x-rpm" }
          if (r([197, 208, 211, 198]))
            return { ext: "eps", mime: "application/eps" }
          if (r([40, 181, 47, 253]))
            return { ext: "zst", mime: "application/zstd" }
          if (r([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" }
          if (n("#!AMR")) return { ext: "amr", mime: "audio/amr" }
          if (n("{\\rtf")) return { ext: "rtf", mime: "application/rtf" }
          if (r([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" }
          if (n("IMPM")) return { ext: "it", mime: "audio/x-it" }
          if (
            n("-lh0-", { offset: 2 }) ||
            n("-lh1-", { offset: 2 }) ||
            n("-lh2-", { offset: 2 }) ||
            n("-lh3-", { offset: 2 }) ||
            n("-lh4-", { offset: 2 }) ||
            n("-lh5-", { offset: 2 }) ||
            n("-lh6-", { offset: 2 }) ||
            n("-lh7-", { offset: 2 }) ||
            n("-lzs-", { offset: 2 }) ||
            n("-lz4-", { offset: 2 }) ||
            n("-lz5-", { offset: 2 }) ||
            n("-lhd-", { offset: 2 })
          )
            return { ext: "lzh", mime: "application/x-lzh-compressed" }
          if (r([0, 0, 1, 186])) {
            if (r([33], { offset: 4, mask: [241] }))
              return { ext: "mpg", mime: "video/MP1S" }
            if (r([68], { offset: 4, mask: [196] }))
              return { ext: "mpg", mime: "video/MP2P" }
          }
          if (n("ITSF"))
            return { ext: "chm", mime: "application/vnd.ms-htmlhelp" }
          if (r([253, 55, 122, 88, 90, 0]))
            return { ext: "xz", mime: "application/x-xz" }
          if (n("<?xml ")) return { ext: "xml", mime: "application/xml" }
          if (r([55, 122, 188, 175, 39, 28]))
            return { ext: "7z", mime: "application/x-7z-compressed" }
          if (r([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6]))
            return { ext: "rar", mime: "application/x-rar-compressed" }
          if (n("solid ")) return { ext: "stl", mime: "model/stl" }
          if (n("BLENDER"))
            return { ext: "blend", mime: "application/x-blender" }
          if (n("!<arch>"))
            return (
              await e.ignore(8),
              "debian-binary" ===
              (await e.readToken(new Token.StringType(13, "ascii")))
                ? { ext: "deb", mime: "application/x-deb" }
                : { ext: "ar", mime: "application/x-unix-archive" }
            )
          if (r([137, 80, 78, 71, 13, 10, 26, 10])) {
            async function y() {
              return {
                length: await e.readToken(Token.INT32_BE),
                type: await e.readToken(new Token.StringType(4, "binary")),
              }
            }
            await e.ignore(8)
            do {
              const b = await y()
              if (b.length < 0) return
              switch (b.type) {
                case "IDAT":
                  return { ext: "png", mime: "image/png" }
                case "acTL":
                  return { ext: "apng", mime: "image/apng" }
                default:
                  await e.ignore(b.length + 4)
              }
            } while (e.position + 8 < e.fileInfo.size)
            return { ext: "png", mime: "image/png" }
          }
          if (r([65, 82, 82, 79, 87, 49, 0, 0]))
            return { ext: "arrow", mime: "application/x-apache-arrow" }
          if (r([103, 108, 84, 70, 2, 0, 0, 0]))
            return { ext: "glb", mime: "model/gltf-binary" }
          if (
            r([102, 114, 101, 101], { offset: 4 }) ||
            r([109, 100, 97, 116], { offset: 4 }) ||
            r([109, 111, 111, 118], { offset: 4 }) ||
            r([119, 105, 100, 101], { offset: 4 })
          )
            return { ext: "mov", mime: "video/quicktime" }
          if (r([73, 73, 82, 79, 8, 0, 0, 0, 24]))
            return { ext: "orf", mime: "image/x-olympus-orf" }
          if (n("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" }
          if (r([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
            return { ext: "rw2", mime: "image/x-panasonic-rw2" }
          if (r([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
            async function h() {
              const t = Buffer.alloc(16)
              return (
                await e.readBuffer(t),
                { id: t, size: Number(await e.readToken(Token.UINT64_LE)) }
              )
            }
            for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
              const v = await h()
              let _ = v.size - 24
              if (
                _check(
                  v.id,
                  [
                    145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12,
                    32, 83, 101,
                  ]
                )
              ) {
                const M = Buffer.alloc(16)
                if (
                  ((_ -= await e.readBuffer(M)),
                  _check(
                    M,
                    [
                      64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95,
                      92, 68, 43,
                    ]
                  ))
                )
                  return { ext: "asf", mime: "audio/x-ms-asf" }
                if (
                  _check(
                    M,
                    [
                      192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95,
                      92, 68, 43,
                    ]
                  )
                )
                  return { ext: "asf", mime: "video/x-ms-asf" }
                break
              }
              await e.ignore(_)
            }
            return { ext: "asf", mime: "application/vnd.ms-asf" }
          }
          if (r([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]))
            return { ext: "ktx", mime: "image/ktx" }
          if (
            (r([126, 16, 4]) || r([126, 24, 4])) &&
            r([48, 77, 73, 69], { offset: 4 })
          )
            return { ext: "mie", mime: "application/x-mie" }
          if (r([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 }))
            return { ext: "shp", mime: "application/x-esri-shape" }
          if (r([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
            switch (
              (await e.ignore(20),
              await e.readToken(new Token.StringType(4, "ascii")))
            ) {
              case "jp2 ":
                return { ext: "jp2", mime: "image/jp2" }
              case "jpx ":
                return { ext: "jpx", mime: "image/jpx" }
              case "jpm ":
                return { ext: "jpm", mime: "image/jpm" }
              case "mjp2":
                return { ext: "mj2", mime: "image/mj2" }
              default:
                return
            }
          if (r([255, 10]) || r([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10]))
            return { ext: "jxl", mime: "image/jxl" }
          if (r([0, 0, 1, 186]) || r([0, 0, 1, 179]))
            return { ext: "mpg", mime: "video/mpeg" }
          if (r([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" }
          if (r([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" }
          if (r([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" }
          if (r([208, 207, 17, 224, 161, 177, 26, 225]))
            return { ext: "cfb", mime: "application/x-cfb" }
          if (
            (await e.peekBuffer(t, {
              length: Math.min(256, e.fileInfo.size),
              mayBeLess: !0,
            }),
            n("BEGIN:"))
          ) {
            if (n("VCARD", { offset: 6 }))
              return { ext: "vcf", mime: "text/vcard" }
            if (n("VCALENDAR", { offset: 6 }))
              return { ext: "ics", mime: "text/calendar" }
          }
          if (n("FUJIFILMCCD-RAW"))
            return { ext: "raf", mime: "image/x-fujifilm-raf" }
          if (n("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" }
          if (n("Creative Voice File"))
            return { ext: "voc", mime: "audio/x-voc" }
          if (r([4, 0, 0, 0]) && t.length >= 16) {
            const P = t.readUInt32LE(12)
            if (P > 12 && t.length >= P + 16)
              try {
                const w = t.slice(16, P + 16).toString()
                if (JSON.parse(w).files)
                  return { ext: "asar", mime: "application/x-asar" }
              } catch (O) {}
          }
          if (r([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
            return { ext: "mxf", mime: "application/mxf" }
          if (n("SCRM", { offset: 44 }))
            return { ext: "s3m", mime: "audio/x-s3m" }
          if (
            r([71], { offset: 4 }) &&
            (r([71], { offset: 192 }) || r([71], { offset: 196 }))
          )
            return { ext: "mts", mime: "video/mp2t" }
          if (r([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 }))
            return { ext: "mobi", mime: "application/x-mobipocket-ebook" }
          if (r([68, 73, 67, 77], { offset: 128 }))
            return { ext: "dcm", mime: "application/dicom" }
          if (
            r([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])
          )
            return { ext: "lnk", mime: "application/x.ms.shortcut" }
          if (r([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0]))
            return { ext: "alias", mime: "application/x.apple.alias" }
          if (
            r([76, 80], { offset: 34 }) &&
            (r([0, 0, 1], { offset: 8 }) ||
              r([1, 0, 2], { offset: 8 }) ||
              r([2, 0, 2], { offset: 8 }))
          )
            return { ext: "eot", mime: "application/vnd.ms-fontobject" }
          if (
            r([
              6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116,
              183, 29,
            ])
          )
            return { ext: "indd", mime: "application/x-indesign" }
          if (
            (await e.peekBuffer(t, {
              length: Math.min(512, e.fileInfo.size),
              mayBeLess: !0,
            }),
            tarHeaderChecksumMatches(t))
          )
            return { ext: "tar", mime: "application/x-tar" }
          if (
            r([
              255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0,
              85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0,
            ])
          )
            return { ext: "skp", mime: "application/vnd.sketchup.skp" }
          if (n("-----BEGIN PGP MESSAGE-----"))
            return { ext: "pgp", mime: "application/pgp-encrypted" }
          if (t.length >= 2 && r([255, 224], { offset: 0, mask: [255, 224] })) {
            if (r([16], { offset: 1, mask: [22] }))
              return (
                r([8], { offset: 1, mask: [8] }),
                { ext: "aac", mime: "audio/aac" }
              )
            if (r([2], { offset: 1, mask: [6] }))
              return { ext: "mp3", mime: "audio/mpeg" }
            if (r([4], { offset: 1, mask: [6] }))
              return { ext: "mp2", mime: "audio/mpeg" }
            if (r([6], { offset: 1, mask: [6] }))
              return { ext: "mp1", mime: "audio/mpeg" }
          }
        }
        const stream = (readableStream) =>
            new Promise((resolve, reject) => {
              const stream = eval("require")("stream")
              readableStream.on("error", reject),
                readableStream.once("readable", async () => {
                  const e = new stream.PassThrough()
                  let t
                  t = stream.pipeline
                    ? stream.pipeline(readableStream, e, () => {})
                    : readableStream.pipe(e)
                  const r =
                    readableStream.read(minimumBytes) ||
                    readableStream.read() ||
                    Buffer.alloc(0)
                  try {
                    const t = await fromBuffer(r)
                    e.fileType = t
                  } catch (e) {
                    reject(e)
                  }
                  resolve(t)
                })
            }),
          fileType = { fromStream, fromTokenizer, fromBuffer, stream }
        Object.defineProperty(fileType, "extensions", {
          get: () => new Set(supported.extensions),
        }),
          Object.defineProperty(fileType, "mimeTypes", {
            get: () => new Set(supported.mimeTypes),
          }),
          (module.exports = fileType)
      },
      53846: (e, t, r) => {
        "use strict"
        const n = r(80363),
          o = r(5707),
          i = {
            fromFile: async function (e) {
              const t = await n.fromFile(e)
              try {
                return await o.fromTokenizer(t)
              } finally {
                await t.close()
              }
            },
          }
        Object.assign(i, o),
          Object.defineProperty(i, "extensions", { get: () => o.extensions }),
          Object.defineProperty(i, "mimeTypes", { get: () => o.mimeTypes }),
          (e.exports = i)
      },
      71664: (e) => {
        "use strict"
        e.exports = {
          extensions: [
            "jpg",
            "png",
            "apng",
            "gif",
            "webp",
            "flif",
            "xcf",
            "cr2",
            "cr3",
            "orf",
            "arw",
            "dng",
            "nef",
            "rw2",
            "raf",
            "tif",
            "bmp",
            "icns",
            "jxr",
            "psd",
            "indd",
            "zip",
            "tar",
            "rar",
            "gz",
            "bz2",
            "7z",
            "dmg",
            "mp4",
            "mid",
            "mkv",
            "webm",
            "mov",
            "avi",
            "mpg",
            "mp2",
            "mp3",
            "m4a",
            "oga",
            "ogg",
            "ogv",
            "opus",
            "flac",
            "wav",
            "spx",
            "amr",
            "pdf",
            "epub",
            "exe",
            "swf",
            "rtf",
            "wasm",
            "woff",
            "woff2",
            "eot",
            "ttf",
            "otf",
            "ico",
            "flv",
            "ps",
            "xz",
            "sqlite",
            "nes",
            "crx",
            "xpi",
            "cab",
            "deb",
            "ar",
            "rpm",
            "Z",
            "lz",
            "cfb",
            "mxf",
            "mts",
            "blend",
            "bpg",
            "docx",
            "pptx",
            "xlsx",
            "3gp",
            "3g2",
            "jp2",
            "jpm",
            "jpx",
            "mj2",
            "aif",
            "qcp",
            "odt",
            "ods",
            "odp",
            "xml",
            "mobi",
            "heic",
            "cur",
            "ktx",
            "ape",
            "wv",
            "dcm",
            "ics",
            "glb",
            "pcap",
            "dsf",
            "lnk",
            "alias",
            "voc",
            "ac3",
            "m4v",
            "m4p",
            "m4b",
            "f4v",
            "f4p",
            "f4b",
            "f4a",
            "mie",
            "asf",
            "ogm",
            "ogx",
            "mpc",
            "arrow",
            "shp",
            "aac",
            "mp1",
            "it",
            "s3m",
            "xm",
            "ai",
            "skp",
            "avif",
            "eps",
            "lzh",
            "pgp",
            "asar",
            "stl",
            "chm",
            "3mf",
            "zst",
            "jxl",
            "vcf",
          ],
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "image/flif",
            "image/x-xcf",
            "image/x-canon-cr2",
            "image/x-canon-cr3",
            "image/tiff",
            "image/bmp",
            "image/vnd.ms-photo",
            "image/vnd.adobe.photoshop",
            "application/x-indesign",
            "application/epub+zip",
            "application/x-xpinstall",
            "application/vnd.oasis.opendocument.text",
            "application/vnd.oasis.opendocument.spreadsheet",
            "application/vnd.oasis.opendocument.presentation",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/zip",
            "application/x-tar",
            "application/x-rar-compressed",
            "application/gzip",
            "application/x-bzip2",
            "application/x-7z-compressed",
            "application/x-apple-diskimage",
            "application/x-apache-arrow",
            "video/mp4",
            "audio/midi",
            "video/x-matroska",
            "video/webm",
            "video/quicktime",
            "video/vnd.avi",
            "audio/vnd.wave",
            "audio/qcelp",
            "audio/x-ms-asf",
            "video/x-ms-asf",
            "application/vnd.ms-asf",
            "video/mpeg",
            "video/3gpp",
            "audio/mpeg",
            "audio/mp4",
            "audio/opus",
            "video/ogg",
            "audio/ogg",
            "application/ogg",
            "audio/x-flac",
            "audio/ape",
            "audio/wavpack",
            "audio/amr",
            "application/pdf",
            "application/x-msdownload",
            "application/x-shockwave-flash",
            "application/rtf",
            "application/wasm",
            "font/woff",
            "font/woff2",
            "application/vnd.ms-fontobject",
            "font/ttf",
            "font/otf",
            "image/x-icon",
            "video/x-flv",
            "application/postscript",
            "application/eps",
            "application/x-xz",
            "application/x-sqlite3",
            "application/x-nintendo-nes-rom",
            "application/x-google-chrome-extension",
            "application/vnd.ms-cab-compressed",
            "application/x-deb",
            "application/x-unix-archive",
            "application/x-rpm",
            "application/x-compress",
            "application/x-lzip",
            "application/x-cfb",
            "application/x-mie",
            "application/mxf",
            "video/mp2t",
            "application/x-blender",
            "image/bpg",
            "image/jp2",
            "image/jpx",
            "image/jpm",
            "image/mj2",
            "audio/aiff",
            "application/xml",
            "application/x-mobipocket-ebook",
            "image/heif",
            "image/heif-sequence",
            "image/heic",
            "image/heic-sequence",
            "image/icns",
            "image/ktx",
            "application/dicom",
            "audio/x-musepack",
            "text/calendar",
            "text/vcard",
            "model/gltf-binary",
            "application/vnd.tcpdump.pcap",
            "audio/x-dsf",
            "application/x.ms.shortcut",
            "application/x.apple.alias",
            "audio/x-voc",
            "audio/vnd.dolby.dd-raw",
            "audio/x-m4a",
            "image/apng",
            "image/x-olympus-orf",
            "image/x-sony-arw",
            "image/x-adobe-dng",
            "image/x-nikon-nef",
            "image/x-panasonic-rw2",
            "image/x-fujifilm-raf",
            "video/x-m4v",
            "video/3gpp2",
            "application/x-esri-shape",
            "audio/aac",
            "audio/x-it",
            "audio/x-s3m",
            "audio/x-xm",
            "video/MP1S",
            "video/MP2P",
            "application/vnd.sketchup.skp",
            "image/avif",
            "application/x-lzh-compressed",
            "application/pgp-encrypted",
            "application/x-asar",
            "model/stl",
            "application/vnd.ms-htmlhelp",
            "model/3mf",
            "image/jxl",
            "application/zstd",
          ],
        }
      },
      86760: (e, t) => {
        "use strict"
        ;(t.stringToBytes = (e) => [...e].map((e) => e.charCodeAt(0))),
          (t.tarHeaderChecksumMatches = (e, t = 0) => {
            const r = parseInt(
              e.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(),
              8
            )
            if (isNaN(r)) return !1
            let n = 256
            for (let r = t; r < t + 148; r++) n += e[r]
            for (let r = t + 156; r < t + 512; r++) n += e[r]
            return r === n
          }),
          (t.uint32SyncSafeToken = {
            get: (e, t) =>
              (127 & e[t + 3]) |
              (e[t + 2] << 7) |
              (e[t + 1] << 14) |
              (e[t] << 21),
            len: 4,
          })
      },
      251: (e, t) => {
        ;(t.read = function (e, t, r, n, o) {
          var i,
            s,
            a = 8 * o - n - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            d = r ? o - 1 : 0,
            f = r ? -1 : 1,
            p = e[t + d]
          for (
            d += f, i = p & ((1 << -l) - 1), p >>= -l, l += a;
            l > 0;
            i = 256 * i + e[t + d], d += f, l -= 8
          );
          for (
            s = i & ((1 << -l) - 1), i >>= -l, l += n;
            l > 0;
            s = 256 * s + e[t + d], d += f, l -= 8
          );
          if (0 === i) i = 1 - c
          else {
            if (i === u) return s ? NaN : (1 / 0) * (p ? -1 : 1)
            ;(s += Math.pow(2, n)), (i -= c)
          }
          return (p ? -1 : 1) * s * Math.pow(2, i - n)
        }),
          (t.write = function (e, t, r, n, o, i) {
            var s,
              a,
              u,
              c = 8 * i - o - 1,
              l = (1 << c) - 1,
              d = l >> 1,
              f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = n ? 0 : i - 1,
              g = n ? 1 : -1,
              m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((a = isNaN(t) ? 1 : 0), (s = l))
                  : ((s = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    (t += s + d >= 1 ? f / u : f * Math.pow(2, 1 - d)) * u >=
                      2 && (s++, (u /= 2)),
                    s + d >= l
                      ? ((a = 0), (s = l))
                      : s + d >= 1
                      ? ((a = (t * u - 1) * Math.pow(2, o)), (s += d))
                      : ((a = t * Math.pow(2, d - 1) * Math.pow(2, o)),
                        (s = 0)));
              o >= 8;
              e[r + p] = 255 & a, p += g, a /= 256, o -= 8
            );
            for (
              s = (s << o) | a, c += o;
              c > 0;
              e[r + p] = 255 & s, p += g, s /= 256, c -= 8
            );
            e[r + p - g] |= 128 * m
          })
      },
      6585: (e) => {
        var t = 1e3,
          r = 60 * t,
          n = 60 * r,
          o = 24 * n
        function i(e, t, r, n) {
          var o = t >= 1.5 * r
          return Math.round(e / r) + " " + n + (o ? "s" : "")
        }
        e.exports = function (e, s) {
          s = s || {}
          var a,
            u,
            c = typeof e
          if ("string" === c && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var i =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  )
                if (i) {
                  var s = parseFloat(i[1])
                  switch ((i[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s
                    case "days":
                    case "day":
                    case "d":
                      return s * o
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s * n
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s * r
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s * t
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s
                    default:
                      return
                  }
                }
              }
            })(e)
          if ("number" === c && isFinite(e))
            return s.long
              ? ((a = e),
                (u = Math.abs(a)) >= o
                  ? i(a, u, o, "day")
                  : u >= n
                  ? i(a, u, n, "hour")
                  : u >= r
                  ? i(a, u, r, "minute")
                  : u >= t
                  ? i(a, u, t, "second")
                  : a + " ms")
              : (function (e) {
                  var i = Math.abs(e)
                  return i >= o
                    ? Math.round(e / o) + "d"
                    : i >= n
                    ? Math.round(e / n) + "h"
                    : i >= r
                    ? Math.round(e / r) + "m"
                    : i >= t
                    ? Math.round(e / t) + "s"
                    : e + "ms"
                })(e)
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          )
        }
      },
      62759: (e, t, r) => {
        "use strict"
        var n = r(48287).hp
        const o = r(44276)
        e.exports = (e) => {
          if (!o(e)) return !1
          const t = e.trim().match(o.regex),
            r = {}
          if (t[1]) {
            r.mediaType = t[1].toLowerCase()
            const e = t[1].split(";").map((e) => e.toLowerCase())
            ;(r.contentType = e[0]),
              e.slice(1).forEach((e) => {
                const t = e.split("=")
                r[t[0]] = t[1]
              })
          }
          return (
            (r.base64 = !!t[t.length - 2]),
            (r.data = t[t.length - 1] || ""),
            (r.toBuffer = () => {
              const e = r.base64 ? "base64" : "utf8"
              return n.from(r.base64 ? r.data : decodeURIComponent(r.data), e)
            }),
            r
          )
        }
      },
      78122: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Deferred = void 0),
          (t.Deferred = class {
            constructor() {
              ;(this.resolve = () => null),
                (this.reject = () => null),
                (this.promise = new Promise((e, t) => {
                  ;(this.reject = t), (this.resolve = e)
                }))
            }
          })
      },
      75523: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EndOfStreamError = t.defaultMessages = void 0),
          (t.defaultMessages = "End-Of-Stream")
        class r extends Error {
          constructor() {
            super(t.defaultMessages)
          }
        }
        t.EndOfStreamError = r
      },
      51510: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StreamReader = t.EndOfStreamError = void 0)
        const n = r(75523),
          o = r(78122)
        var i = r(75523)
        Object.defineProperty(t, "EndOfStreamError", {
          enumerable: !0,
          get: function () {
            return i.EndOfStreamError
          },
        }),
          (t.StreamReader = class {
            constructor(e) {
              if (
                ((this.s = e),
                (this.deferred = null),
                (this.endOfStream = !1),
                (this.peekQueue = []),
                !e.read || !e.once)
              )
                throw new Error("Expected an instance of stream.Readable")
              this.s.once("end", () => this.reject(new n.EndOfStreamError())),
                this.s.once("error", (e) => this.reject(e)),
                this.s.once("close", () =>
                  this.reject(new Error("Stream closed"))
                )
            }
            async peek(e, t, r) {
              const n = await this.read(e, t, r)
              return this.peekQueue.push(e.subarray(t, t + n)), n
            }
            async read(e, t, r) {
              if (0 === r) return 0
              if (0 === this.peekQueue.length && this.endOfStream)
                throw new n.EndOfStreamError()
              let o = r,
                i = 0
              for (; this.peekQueue.length > 0 && o > 0; ) {
                const r = this.peekQueue.pop()
                if (!r) throw new Error("peekData should be defined")
                const n = Math.min(r.length, o)
                e.set(r.subarray(0, n), t + i),
                  (i += n),
                  (o -= n),
                  n < r.length && this.peekQueue.push(r.subarray(n))
              }
              for (; o > 0 && !this.endOfStream; ) {
                const r = Math.min(o, 1048576),
                  n = await this.readFromStream(e, t + i, r)
                if (((i += n), n < r)) break
                o -= n
              }
              return i
            }
            async readFromStream(e, t, r) {
              const n = this.s.read(r)
              if (n) return e.set(n, t), n.length
              {
                const n = {
                  buffer: e,
                  offset: t,
                  length: r,
                  deferred: new o.Deferred(),
                }
                return (
                  (this.deferred = n.deferred),
                  this.s.once("readable", () => {
                    this.readDeferred(n)
                  }),
                  n.deferred.promise
                )
              }
            }
            readDeferred(e) {
              const t = this.s.read(e.length)
              t
                ? (e.buffer.set(t, e.offset),
                  e.deferred.resolve(t.length),
                  (this.deferred = null))
                : this.s.once("readable", () => {
                    this.readDeferred(e)
                  })
            }
            reject(e) {
              ;(this.endOfStream = !0),
                this.deferred &&
                  (this.deferred.reject(e), (this.deferred = null))
            }
          })
      },
      48705: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StreamReader = t.EndOfStreamError = void 0)
        var n = r(75523)
        Object.defineProperty(t, "EndOfStreamError", {
          enumerable: !0,
          get: function () {
            return n.EndOfStreamError
          },
        })
        var o = r(51510)
        Object.defineProperty(t, "StreamReader", {
          enumerable: !0,
          get: function () {
            return o.StreamReader
          },
        })
      },
      98632: (e, t, r) => {
        "use strict"
        var n = r(48287).hp
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbstractTokenizer = void 0)
        const o = r(48705)
        t.AbstractTokenizer = class {
          constructor(e) {
            ;(this.position = 0),
              (this.numBuffer = new Uint8Array(8)),
              (this.fileInfo = e || {})
          }
          async readToken(e, t = this.position) {
            const r = n.alloc(e.len)
            if ((await this.readBuffer(r, { position: t })) < e.len)
              throw new o.EndOfStreamError()
            return e.get(r, 0)
          }
          async peekToken(e, t = this.position) {
            const r = n.alloc(e.len)
            if ((await this.peekBuffer(r, { position: t })) < e.len)
              throw new o.EndOfStreamError()
            return e.get(r, 0)
          }
          async readNumber(e) {
            if (
              (await this.readBuffer(this.numBuffer, { length: e.len })) < e.len
            )
              throw new o.EndOfStreamError()
            return e.get(this.numBuffer, 0)
          }
          async peekNumber(e) {
            if (
              (await this.peekBuffer(this.numBuffer, { length: e.len })) < e.len
            )
              throw new o.EndOfStreamError()
            return e.get(this.numBuffer, 0)
          }
          async ignore(e) {
            if (void 0 !== this.fileInfo.size) {
              const t = this.fileInfo.size - this.position
              if (e > t) return (this.position += t), t
            }
            return (this.position += e), e
          }
          async close() {}
          normalizeOptions(e, t) {
            if (t && void 0 !== t.position && t.position < this.position)
              throw new Error(
                "`options.position` must be equal or greater than `tokenizer.position`"
              )
            return t
              ? {
                  mayBeLess: !0 === t.mayBeLess,
                  offset: t.offset ? t.offset : 0,
                  length: t.length
                    ? t.length
                    : e.length - (t.offset ? t.offset : 0),
                  position: t.position ? t.position : this.position,
                }
              : {
                  mayBeLess: !1,
                  offset: 0,
                  length: e.length,
                  position: this.position,
                }
          }
        }
      },
      93492: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BufferTokenizer = void 0)
        const n = r(48705),
          o = r(98632)
        class i extends o.AbstractTokenizer {
          constructor(e, t) {
            super(t),
              (this.uint8Array = e),
              (this.fileInfo.size = this.fileInfo.size
                ? this.fileInfo.size
                : e.length)
          }
          async readBuffer(e, t) {
            if (t && t.position) {
              if (t.position < this.position)
                throw new Error(
                  "`options.position` must be equal or greater than `tokenizer.position`"
                )
              this.position = t.position
            }
            const r = await this.peekBuffer(e, t)
            return (this.position += r), r
          }
          async peekBuffer(e, t) {
            const r = this.normalizeOptions(e, t),
              o = Math.min(this.uint8Array.length - r.position, r.length)
            if (!r.mayBeLess && o < r.length) throw new n.EndOfStreamError()
            return (
              e.set(
                this.uint8Array.subarray(r.position, r.position + o),
                r.offset
              ),
              o
            )
          }
          async close() {}
        }
        t.BufferTokenizer = i
      },
      91456: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fromFile = t.FileTokenizer = void 0)
        const n = r(98632),
          o = r(48705),
          i = r(91343)
        class s extends n.AbstractTokenizer {
          constructor(e, t) {
            super(t), (this.fd = e)
          }
          async readBuffer(e, t) {
            const r = this.normalizeOptions(e, t)
            this.position = r.position
            const n = await i.read(this.fd, e, r.offset, r.length, r.position)
            if (
              ((this.position += n.bytesRead),
              n.bytesRead < r.length && (!t || !t.mayBeLess))
            )
              throw new o.EndOfStreamError()
            return n.bytesRead
          }
          async peekBuffer(e, t) {
            const r = this.normalizeOptions(e, t),
              n = await i.read(this.fd, e, r.offset, r.length, r.position)
            if (!r.mayBeLess && n.bytesRead < r.length)
              throw new o.EndOfStreamError()
            return n.bytesRead
          }
          async close() {
            return i.close(this.fd)
          }
        }
        ;(t.FileTokenizer = s),
          (t.fromFile = async function (e) {
            const t = await i.stat(e)
            if (!t.isFile) throw new Error(`File not a file: ${e}`)
            const r = await i.open(e, "r")
            return new s(r, { path: e, size: t.size })
          })
      },
      91343: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.readFile =
            t.writeFileSync =
            t.writeFile =
            t.read =
            t.open =
            t.close =
            t.stat =
            t.createReadStream =
            t.pathExists =
              void 0)
        const n = r(54428)
        ;(t.pathExists = n.existsSync),
          (t.createReadStream = n.createReadStream),
          (t.stat = async function (e) {
            return new Promise((t, r) => {
              n.stat(e, (e, n) => {
                e ? r(e) : t(n)
              })
            })
          }),
          (t.close = async function (e) {
            return new Promise((t, r) => {
              n.close(e, (e) => {
                e ? r(e) : t()
              })
            })
          }),
          (t.open = async function (e, t) {
            return new Promise((r, o) => {
              n.open(e, t, (e, t) => {
                e ? o(e) : r(t)
              })
            })
          }),
          (t.read = async function (e, t, r, o, i) {
            return new Promise((s, a) => {
              n.read(e, t, r, o, i, (e, t, r) => {
                e ? a(e) : s({ bytesRead: t, buffer: r })
              })
            })
          }),
          (t.writeFile = async function (e, t) {
            return new Promise((r, o) => {
              n.writeFile(e, t, (e) => {
                e ? o(e) : r()
              })
            })
          }),
          (t.writeFileSync = function (e, t) {
            n.writeFileSync(e, t)
          }),
          (t.readFile = async function (e) {
            return new Promise((t, r) => {
              n.readFile(e, (e, n) => {
                e ? r(e) : t(n)
              })
            })
          })
      },
      36066: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ReadStreamTokenizer = void 0)
        const n = r(98632),
          o = r(48705)
        class i extends n.AbstractTokenizer {
          constructor(e, t) {
            super(t), (this.streamReader = new o.StreamReader(e))
          }
          async getFileInfo() {
            return this.fileInfo
          }
          async readBuffer(e, t) {
            const r = this.normalizeOptions(e, t),
              n = r.position - this.position
            if (n > 0) return await this.ignore(n), this.readBuffer(e, t)
            if (n < 0)
              throw new Error(
                "`options.position` must be equal or greater than `tokenizer.position`"
              )
            if (0 === r.length) return 0
            const i = await this.streamReader.read(e, r.offset, r.length)
            if (((this.position += i), (!t || !t.mayBeLess) && i < r.length))
              throw new o.EndOfStreamError()
            return i
          }
          async peekBuffer(e, t) {
            const r = this.normalizeOptions(e, t)
            let n = 0
            if (r.position) {
              const t = r.position - this.position
              if (t > 0) {
                const o = new Uint8Array(r.length + t)
                return (
                  (n = await this.peekBuffer(o, { mayBeLess: r.mayBeLess })),
                  e.set(o.subarray(t), r.offset),
                  n - t
                )
              }
              if (t < 0)
                throw new Error(
                  "Cannot peek from a negative offset in a stream"
                )
            }
            if (r.length > 0) {
              try {
                n = await this.streamReader.peek(e, r.offset, r.length)
              } catch (e) {
                if (t && t.mayBeLess && e instanceof o.EndOfStreamError)
                  return 0
                throw e
              }
              if (!r.mayBeLess && n < r.length) throw new o.EndOfStreamError()
            }
            return n
          }
          async ignore(e) {
            const t = Math.min(256e3, e),
              r = new Uint8Array(t)
            let n = 0
            for (; n < e; ) {
              const o = e - n,
                i = await this.readBuffer(r, { length: Math.min(t, o) })
              if (i < 0) return i
              n += i
            }
            return n
          }
        }
        t.ReadStreamTokenizer = i
      },
      96452: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fromBuffer = t.fromStream = t.EndOfStreamError = void 0)
        const n = r(36066),
          o = r(93492)
        var i = r(48705)
        Object.defineProperty(t, "EndOfStreamError", {
          enumerable: !0,
          get: function () {
            return i.EndOfStreamError
          },
        }),
          (t.fromStream = function (e, t) {
            return (t = t || {}), new n.ReadStreamTokenizer(e, t)
          }),
          (t.fromBuffer = function (e, t) {
            return new o.BufferTokenizer(e, t)
          })
      },
      80363: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fromStream =
            t.fromBuffer =
            t.EndOfStreamError =
            t.fromFile =
              void 0)
        const n = r(91343),
          o = r(96452)
        var i = r(91456)
        Object.defineProperty(t, "fromFile", {
          enumerable: !0,
          get: function () {
            return i.fromFile
          },
        })
        var s = r(96452)
        Object.defineProperty(t, "EndOfStreamError", {
          enumerable: !0,
          get: function () {
            return s.EndOfStreamError
          },
        }),
          Object.defineProperty(t, "fromBuffer", {
            enumerable: !0,
            get: function () {
              return s.fromBuffer
            },
          }),
          (t.fromStream = async function (e, t) {
            if (((t = t || {}), e.path)) {
              const r = await n.stat(e.path)
              ;(t.path = e.path), (t.size = r.size)
            }
            return o.fromStream(e, t)
          })
      },
      44266: (e, t, r) => {
        "use strict"
        var n = r(48287).hp
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AnsiStringType =
            t.StringType =
            t.BufferType =
            t.Uint8ArrayType =
            t.IgnoreType =
            t.Float80_LE =
            t.Float80_BE =
            t.Float64_LE =
            t.Float64_BE =
            t.Float32_LE =
            t.Float32_BE =
            t.Float16_LE =
            t.Float16_BE =
            t.INT64_BE =
            t.UINT64_BE =
            t.INT64_LE =
            t.UINT64_LE =
            t.INT32_LE =
            t.INT32_BE =
            t.INT24_BE =
            t.INT24_LE =
            t.INT16_LE =
            t.INT16_BE =
            t.INT8 =
            t.UINT32_BE =
            t.UINT32_LE =
            t.UINT24_BE =
            t.UINT24_LE =
            t.UINT16_BE =
            t.UINT16_LE =
            t.UINT8 =
              void 0)
        const o = r(251)
        function i(e) {
          return new DataView(e.buffer, e.byteOffset)
        }
        ;(t.UINT8 = {
          len: 1,
          get: (e, t) => i(e).getUint8(t),
          put: (e, t, r) => (i(e).setUint8(t, r), t + 1),
        }),
          (t.UINT16_LE = {
            len: 2,
            get: (e, t) => i(e).getUint16(t, !0),
            put: (e, t, r) => (i(e).setUint16(t, r, !0), t + 2),
          }),
          (t.UINT16_BE = {
            len: 2,
            get: (e, t) => i(e).getUint16(t),
            put: (e, t, r) => (i(e).setUint16(t, r), t + 2),
          }),
          (t.UINT24_LE = {
            len: 3,
            get(e, t) {
              const r = i(e)
              return r.getUint8(t) + (r.getUint16(t + 1, !0) << 8)
            },
            put(e, t, r) {
              const n = i(e)
              return (
                n.setUint8(t, 255 & r), n.setUint16(t + 1, r >> 8, !0), t + 3
              )
            },
          }),
          (t.UINT24_BE = {
            len: 3,
            get(e, t) {
              const r = i(e)
              return (r.getUint16(t) << 8) + r.getUint8(t + 2)
            },
            put(e, t, r) {
              const n = i(e)
              return n.setUint16(t, r >> 8), n.setUint8(t + 2, 255 & r), t + 3
            },
          }),
          (t.UINT32_LE = {
            len: 4,
            get: (e, t) => i(e).getUint32(t, !0),
            put: (e, t, r) => (i(e).setUint32(t, r, !0), t + 4),
          }),
          (t.UINT32_BE = {
            len: 4,
            get: (e, t) => i(e).getUint32(t),
            put: (e, t, r) => (i(e).setUint32(t, r), t + 4),
          }),
          (t.INT8 = {
            len: 1,
            get: (e, t) => i(e).getInt8(t),
            put: (e, t, r) => (i(e).setInt8(t, r), t + 1),
          }),
          (t.INT16_BE = {
            len: 2,
            get: (e, t) => i(e).getInt16(t),
            put: (e, t, r) => (i(e).setInt16(t, r), t + 2),
          }),
          (t.INT16_LE = {
            len: 2,
            get: (e, t) => i(e).getInt16(t, !0),
            put: (e, t, r) => (i(e).setInt16(t, r, !0), t + 2),
          }),
          (t.INT24_LE = {
            len: 3,
            get(e, r) {
              const n = t.UINT24_LE.get(e, r)
              return n > 8388607 ? n - 16777216 : n
            },
            put(e, t, r) {
              const n = i(e)
              return (
                n.setUint8(t, 255 & r), n.setUint16(t + 1, r >> 8, !0), t + 3
              )
            },
          }),
          (t.INT24_BE = {
            len: 3,
            get(e, r) {
              const n = t.UINT24_BE.get(e, r)
              return n > 8388607 ? n - 16777216 : n
            },
            put(e, t, r) {
              const n = i(e)
              return n.setUint16(t, r >> 8), n.setUint8(t + 2, 255 & r), t + 3
            },
          }),
          (t.INT32_BE = {
            len: 4,
            get: (e, t) => i(e).getInt32(t),
            put: (e, t, r) => (i(e).setInt32(t, r), t + 4),
          }),
          (t.INT32_LE = {
            len: 4,
            get: (e, t) => i(e).getInt32(t, !0),
            put: (e, t, r) => (i(e).setInt32(t, r, !0), t + 4),
          }),
          (t.UINT64_LE = {
            len: 8,
            get: (e, t) => i(e).getBigUint64(t, !0),
            put: (e, t, r) => (i(e).setBigUint64(t, r, !0), t + 8),
          }),
          (t.INT64_LE = {
            len: 8,
            get: (e, t) => i(e).getBigInt64(t, !0),
            put: (e, t, r) => (i(e).setBigInt64(t, r, !0), t + 8),
          }),
          (t.UINT64_BE = {
            len: 8,
            get: (e, t) => i(e).getBigUint64(t),
            put: (e, t, r) => (i(e).setBigUint64(t, r), t + 8),
          }),
          (t.INT64_BE = {
            len: 8,
            get: (e, t) => i(e).getBigInt64(t),
            put: (e, t, r) => (i(e).setBigInt64(t, r), t + 8),
          }),
          (t.Float16_BE = {
            len: 2,
            get(e, t) {
              return o.read(e, t, !1, 10, this.len)
            },
            put(e, t, r) {
              return o.write(e, r, t, !1, 10, this.len), t + this.len
            },
          }),
          (t.Float16_LE = {
            len: 2,
            get(e, t) {
              return o.read(e, t, !0, 10, this.len)
            },
            put(e, t, r) {
              return o.write(e, r, t, !0, 10, this.len), t + this.len
            },
          }),
          (t.Float32_BE = {
            len: 4,
            get: (e, t) => i(e).getFloat32(t),
            put: (e, t, r) => (i(e).setFloat32(t, r), t + 4),
          }),
          (t.Float32_LE = {
            len: 4,
            get: (e, t) => i(e).getFloat32(t, !0),
            put: (e, t, r) => (i(e).setFloat32(t, r, !0), t + 4),
          }),
          (t.Float64_BE = {
            len: 8,
            get: (e, t) => i(e).getFloat64(t),
            put: (e, t, r) => (i(e).setFloat64(t, r), t + 8),
          }),
          (t.Float64_LE = {
            len: 8,
            get: (e, t) => i(e).getFloat64(t, !0),
            put: (e, t, r) => (i(e).setFloat64(t, r, !0), t + 8),
          }),
          (t.Float80_BE = {
            len: 10,
            get(e, t) {
              return o.read(e, t, !1, 63, this.len)
            },
            put(e, t, r) {
              return o.write(e, r, t, !1, 63, this.len), t + this.len
            },
          }),
          (t.Float80_LE = {
            len: 10,
            get(e, t) {
              return o.read(e, t, !0, 63, this.len)
            },
            put(e, t, r) {
              return o.write(e, r, t, !0, 63, this.len), t + this.len
            },
          }),
          (t.IgnoreType = class {
            constructor(e) {
              this.len = e
            }
            get(e, t) {}
          }),
          (t.Uint8ArrayType = class {
            constructor(e) {
              this.len = e
            }
            get(e, t) {
              return e.subarray(t, t + this.len)
            }
          }),
          (t.BufferType = class {
            constructor(e) {
              this.len = e
            }
            get(e, t) {
              return n.from(e.subarray(t, t + this.len))
            }
          }),
          (t.StringType = class {
            constructor(e, t) {
              ;(this.len = e), (this.encoding = t)
            }
            get(e, t) {
              return n.from(e).toString(this.encoding, t, t + this.len)
            }
          })
        class s {
          constructor(e) {
            this.len = e
          }
          static decode(e, t, r) {
            let n = ""
            for (let o = t; o < r; ++o)
              n += s.codePointToString(s.singleByteDecoder(e[o]))
            return n
          }
          static inRange(e, t, r) {
            return t <= e && e <= r
          }
          static codePointToString(e) {
            return e <= 65535
              ? String.fromCharCode(e)
              : ((e -= 65536),
                String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
          }
          static singleByteDecoder(e) {
            if (s.inRange(e, 0, 127)) return e
            const t = s.windows1252[e - 128]
            if (null === t) throw Error("invaliding encoding")
            return t
          }
          get(e, t = 0) {
            return s.decode(e, t, t + this.len)
          }
        }
        ;(t.AnsiStringType = s),
          (s.windows1252 = [
            8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249,
            338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212,
            732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164,
            165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177,
            178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
            191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
            204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
            217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229,
            230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
            243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255,
          ])
      },
      60015: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.assertGetChat = t.assertFindChat = t.InvalidChat = void 0)
        const n = r(28156),
          o = r(62857),
          i = r(14647)
        class s extends o.WPPError {
          constructor(e) {
            super("chat_not_found", `Chat not found for ${e}`), (this.id = e)
          }
        }
        ;(t.InvalidChat = s),
          (t.assertFindChat = async function (e) {
            const t = await n.chat.find(e)
            if (!t) throw new s(e)
            return t
          }),
          (t.assertGetChat = function (e) {
            let t = null
            if (
              ((t = e.toString().includes("newsletter")
                ? i.NewsletterStore.get(e)
                : n.chat.get(e)),
              !t)
            )
              throw new s(e)
            return t
          })
      },
      4526: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.assertColor = t.InvalidColor = void 0)
        const n = r(62857)
        class o extends n.WPPError {
          constructor(e) {
            super("invalid_color", `Invalid Color value for ${e}`),
              (this.color = e)
          }
        }
        ;(t.InvalidColor = o),
          (t.assertColor = function (e) {
            let t
            if ("number" == typeof e) t = e > 0 ? e : 4294967295 + Number(e) + 1
            else {
              if ("string" != typeof e) throw new o(e)
              {
                let r = e.trim().replace("#", "")
                r.length <= 6 && (r = "FF" + r.padStart(6, "0")),
                  (t = parseInt(r, 16))
              }
            }
            return t
          })
      },
      44763: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.assertIsBusiness = t.NotIsBusinessError = void 0)
        const n = r(62857),
          o = r(14647)
        class i extends n.WPPError {
          constructor() {
            super("is_not_business", "This account is not a business version")
          }
        }
        ;(t.NotIsBusinessError = i),
          (t.assertIsBusiness = function () {
            if (!o.Conn.isSMB) throw new i()
          })
      },
      63990: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.assertGetProduct = t.InvalidProduct = void 0)
        const n = r(62857),
          o = r(14647)
        class i extends n.WPPError {
          constructor(e) {
            super("product_not_found", `Product not found for ${e}`),
              (this.id = e)
          }
        }
        ;(t.InvalidProduct = i),
          (t.assertGetProduct = async function (e) {
            const t = (
              await o.CatalogStore.findProduct({
                catalogWid: o.UserPrefs.getMaybeMeUser(),
                productId: e,
              })
            )[0].msgProductCollection._index[e]
            if (!t) throw new i(e)
            return t
          })
      },
      63665: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.assertWid = t.InvalidWid = void 0)
        const n = r(62857)
        class o extends n.WPPError {
          constructor(e) {
            super("invalid_wid", `Invalid WID value for ${e}`), (this.id = e)
          }
        }
        ;(t.InvalidWid = o),
          (t.assertWid = function (e) {
            const t = (0, n.createWid)(e)
            if (!t) throw new o(e)
            return t
          })
      },
      41687: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(60015), t),
          o(r(4526), t),
          o(r(44763), t),
          o(r(63990), t),
          o(r(63665), t)
      },
      24846: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), r(63539)
      },
      63539: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(() => {
          u.BlocklistStore.on("sort", () => {
            s.internalEv.emit("blocklist.sync")
          })
        })
      },
      86671: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.all = void 0)
        const n = r(14647)
        t.all = function () {
          return n.BlocklistStore.getModelsArray().map((e) => e.id)
        }
      },
      7937: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.blockContact = void 0)
        const s = r(38385),
          a = r(41687),
          u = r(14647),
          c = r(19198),
          l = i(r(52757)),
          d = r(14944)
        t.blockContact = async function (e) {
          const t = (0, a.assertWid)(e),
            r = u.ContactStore.get(t) || new u.ContactModel({ id: t })
          return (
            (0, s.compare)(c.SANITIZED_VERSION_STR, "2.2323.4", ">=")
              ? await l.blockContact({
                  contact: r,
                  blockEntryPoint: "block_list",
                  bizOptOutArgs: null,
                })
              : await l.blockContact(r),
            { wid: t, isBlocked: (0, d.isBlocked)(t) }
          )
        }
      },
      54480: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.unblockContact = t.isBlocked = t.blockContact = t.all = void 0)
        var n = r(86671)
        Object.defineProperty(t, "all", {
          enumerable: !0,
          get: function () {
            return n.all
          },
        })
        var o = r(7937)
        Object.defineProperty(t, "blockContact", {
          enumerable: !0,
          get: function () {
            return o.blockContact
          },
        })
        var i = r(14944)
        Object.defineProperty(t, "isBlocked", {
          enumerable: !0,
          get: function () {
            return i.isBlocked
          },
        })
        var s = r(78306)
        Object.defineProperty(t, "unblockContact", {
          enumerable: !0,
          get: function () {
            return s.unblockContact
          },
        })
      },
      14944: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBlocked = void 0)
        const n = r(41687),
          o = r(14647)
        t.isBlocked = function (e) {
          const t = (0, n.assertWid)(e)
          return !!o.BlocklistStore.get(t)
        }
      },
      78306: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.unblockContact = void 0)
        const s = r(41687),
          a = r(14647),
          u = i(r(52757)),
          c = r(14944)
        t.unblockContact = async function (e) {
          const t = (0, s.assertWid)(e),
            r = a.ContactStore.get(t) || new a.ContactModel({ id: t })
          return (
            await u.unblockContact(r),
            { wid: t, isBlocked: (0, c.isBlocked)(t) }
          )
        }
      },
      61042: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(24846),
          o(r(54480), t)
      },
      75495: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), r(75848)
      },
      75848: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(20514)
        a.onInjected(
          () => (
            u.CallStore.on("add", (e) => {
              e.isGroup &&
                s.internalEv.emit("call.incoming_call", {
                  id: e.id,
                  isGroup: e.isGroup,
                  isVideo: e.isVideo,
                  offerTime: e.offerTime,
                  sender: u.WidFactory.toChatWid(e.peerJid),
                  peerJid: e.peerJid,
                })
            }),
            void u.CallStore.on("change:_state change:state", (e) => {
              e.getState() === c.CALL_STATES.INCOMING_RING &&
                s.internalEv.emit("call.incoming_call", {
                  id: e.id,
                  isGroup: e.isGroup,
                  isVideo: e.isVideo,
                  offerTime: e.offerTime,
                  sender: u.WidFactory.toChatWid(e.peerJid),
                  peerJid: e.peerJid,
                })
            })
          )
        )
      },
      21139: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.accept = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(20514)
        t.accept = async function (e) {
          let t
          if (
            ((t = e
              ? o.CallStore.get(e)
              : o.CallStore.findFirst(
                  (e) =>
                    e.getState() === i.CALL_STATES.INCOMING_RING || e.isGroup
                )),
            !t)
          )
            throw new n.WPPError(
              "call_not_found",
              `Call ${e || "<empty>"} not found`,
              { callId: e }
            )
          if ("INCOMING_RING" !== t.getState() && !t.isGroup)
            throw new n.WPPError(
              "call_is_not_incoming_ring",
              `Call ${e || "<empty>"} is not incoming ring`,
              { callId: e, state: t.getState() }
            )
          t.peerJid.isGroupCall() ||
            (await o.websocket.ensureE2ESessions([t.peerJid]))
          const r = [
            o.websocket.smax("audio", { enc: "opus", rate: "16000" }, null),
            o.websocket.smax("audio", { enc: "opus", rate: "8000" }, null),
          ]
          t.isVideo &&
            r.push(
              o.websocket.smax(
                "video",
                {
                  orientation: "0",
                  screen_width: "1920",
                  screen_height: "1080",
                  device_orientation: "0",
                  enc: "vp8",
                  dec: "vp8",
                },
                null
              )
            ),
            r.push(
              o.websocket.smax("net", { medium: "3" }, null),
              o.websocket.smax("encopt", { keygen: "2" }, null)
            )
          const s = o.websocket.smax(
            "call",
            {
              to: t.peerJid.toString({ legacy: !0 }),
              id: o.websocket.generateId(),
            },
            [
              o.websocket.smax(
                "accept",
                {
                  "call-id": t.id,
                  "call-creator": t.peerJid.toString({ legacy: !0 }),
                },
                r
              ),
            ]
          )
          return await o.websocket.sendSmaxStanza(s), !0
        }
      },
      86094: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.end = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(20514)
        t.end = async function (e) {
          const t = [
            i.CALL_STATES.ACTIVE,
            i.CALL_STATES.OUTGOING_CALLING,
            i.CALL_STATES.OUTGOING_RING,
          ]
          let r
          if (
            ((r = e
              ? o.CallStore.get(e)
              : o.CallStore.findFirst(
                  (e) => t.includes(e.getState()) || e.isGroup
                )),
            !r)
          )
            throw new n.WPPError(
              "call_not_found",
              `Call ${e || "<empty>"} not found`,
              { callId: e }
            )
          if (!t.includes(r.getState()) && !r.isGroup)
            throw new n.WPPError(
              "call_is_not_outcoming_calling",
              `Call ${e || "<empty>"} is not outcoming calling`,
              { callId: e, state: r.getState() }
            )
          r.peerJid.isGroupCall() ||
            (await o.websocket.ensureE2ESessions([r.peerJid]))
          const s = o.websocket.smax(
            "call",
            {
              to: r.peerJid.toString({ legacy: !0 }),
              id: o.websocket.generateId(),
            },
            [
              o.websocket.smax(
                "terminate",
                {
                  "call-id": r.id,
                  "call-creator": r.peerJid.toString({ legacy: !0 }),
                },
                null
              ),
            ]
          )
          return await o.websocket.sendSmaxStanza(s), !0
        }
      },
      96263: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.rejectCall = t.reject = t.offer = t.end = t.accept = void 0)
        var n = r(21139)
        Object.defineProperty(t, "accept", {
          enumerable: !0,
          get: function () {
            return n.accept
          },
        })
        var o = r(86094)
        Object.defineProperty(t, "end", {
          enumerable: !0,
          get: function () {
            return o.end
          },
        })
        var i = r(82349)
        Object.defineProperty(t, "offer", {
          enumerable: !0,
          get: function () {
            return i.offer
          },
        })
        var s = r(9144)
        Object.defineProperty(t, "reject", {
          enumerable: !0,
          get: function () {
            return s.reject
          },
        }),
          Object.defineProperty(t, "rejectCall", {
            enumerable: !0,
            get: function () {
              return s.reject
            },
          })
      },
      82349: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.offer = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647),
          s = r(20514),
          a = r(52757),
          u = r(45988),
          c = r(97362)
        t.offer = async function (e, t = {}) {
          t = Object.assign({ isVideo: !1 }, t)
          const r = (0, n.assertWid)(e)
          if (!r.isUser())
            throw new o.WPPError(
              "call_is_not_user",
              `The ${r} is not a user to call`,
              { to: e }
            )
          const l = i.functions.randomHex(16).substr(0, 64),
            d = i.UserPrefs.assertGetMe(),
            f = [
              i.websocket.smax("audio", { enc: "opus", rate: "16000" }, null),
              i.websocket.smax("audio", { enc: "opus", rate: "8000" }, null),
            ]
          t.isVideo &&
            f.push(
              i.websocket.smax(
                "video",
                {
                  orientation: "0",
                  screen_width: "1920",
                  screen_height: "1080",
                  device_orientation: "0",
                  enc: "vp8",
                  dec: "vp8",
                },
                null
              )
            ),
            f.push(
              i.websocket.smax("net", { medium: "3" }, null),
              i.websocket.smax(
                "capability",
                { ver: "1" },
                new Uint8Array([1, 4, 255, 131, 207, 4])
              ),
              i.websocket.smax("encopt", { keygen: "2" }, null)
            )
          const p = self.crypto.getRandomValues(new Uint8Array(32)).buffer
          f.push(...(await (0, c.prepareDestionation)([r], p)))
          const g = i.websocket.smax(
              "call",
              { to: r.toString({ legacy: !0 }), id: i.functions.randomHex(8) },
              [
                i.websocket.smax(
                  "offer",
                  { "call-id": l, "call-creator": d.toString({ legacy: !0 }) },
                  f
                ),
              ]
            ),
            m = new i.CallModel({
              id: l,
              peerJid: r,
              isVideo: t.isVideo,
              isGroup: !1,
              outgoing: !0,
              offerTime: (0, a.unixTime)(),
              webClientShouldHandle: !1,
              canHandleLocally: !0,
            })
          i.CallStore.add(m),
            i.CallStore.setActiveCall(i.CallStore.assertGet(l)),
            m.setState(s.CALL_STATES.OUTGOING_CALLING)
          const y = await i.websocket.sendSmaxStanza(g)
          return console.info(y), console.info((0, u.parseRelayResponse)(y)), m
        }
      },
      45988: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parseRelayResponse = void 0)
        const n = r(14647)
        function o(e) {
          const t = new Uint8Array(e)
          if (6 !== t.length) return null
          const r = new DataView(t.buffer)
          return {
            ip: [r.getUint8(0), r.getUint8(1), r.getUint8(2), r.getUint8(3)],
            port: r.getUint16(4),
          }
        }
        t.parseRelayResponse = function (e) {
          const t = o(e.content.find((e) => "rte" === e.tag).content),
            r = e.content.find((e) => "relay" === e.tag),
            i = r.content.find((e) => "key" === e.tag),
            s = new TextDecoder().decode(new Uint8Array(i.content)),
            a = {}
          r.content
            .filter((e) => "token" === e.tag)
            .forEach((e) => {
              const t = n.Base64.encodeB64(new Uint8Array(e.content))
              a[e.attrs.id || "0"] = t
            })
          const u = {}
          return (
            r.content
              .filter((e) => "te2" === e.tag)
              .forEach((e) => {
                const t = o(e.content)
                if (t) {
                  const r = e.attrs.relay_id || "0",
                    n = e.attrs.token_id || "0",
                    o = a[n]
                  u[r] = Object.assign(Object.assign({}, t), {
                    relay_id: r,
                    token: o,
                  })
                }
              }),
            { rte: t, key: s, relays: u }
          )
        }
      },
      97362: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareDestionation = void 0)
        const n = r(14647)
        t.prepareDestionation = async function (e, t) {
          const r = await n.functions.getFanOutList({ wids: e })
          await n.websocket.ensureE2ESessions(r)
          let o = !1
          const i = await Promise.all(
              r.map(async (e) => {
                const { type: r, ciphertext: i } =
                  await n.functions.encryptMsgProtobuf(e, 0, {
                    call: { callKey: new Uint8Array(t) },
                  })
                return (
                  (o = o || "pkmsg" === r),
                  n.websocket.smax("to", { jid: e.toString({ legacy: !0 }) }, [
                    n.websocket.smax("enc", { v: "2", type: r, count: "0" }, i),
                  ])
                )
              })
            ),
            s = []
          if ((s.push(n.websocket.smax("destination", {}, i)), o)) {
            const e = await n.multidevice.adv.getADVEncodedIdentity()
            s.push(n.websocket.smax("device-identity", void 0, e))
          }
          return s
        }
      },
      9144: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.reject = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(20514)
        t.reject = async function (e) {
          let t
          if (
            ((t = e
              ? o.CallStore.get(e)
              : o.CallStore.findFirst(
                  (e) =>
                    e.getState() === i.CALL_STATES.INCOMING_RING || e.isGroup
                )),
            !t)
          )
            throw new n.WPPError(
              "call_not_found",
              `Call ${e || "<empty>"} not found`,
              { callId: e }
            )
          if ("INCOMING_RING" !== t.getState() && !t.isGroup)
            throw new n.WPPError(
              "call_is_not_incoming_ring",
              `Call ${e || "<empty>"} is not incoming ring`,
              { callId: e, state: t.getState() }
            )
          t.peerJid.isGroupCall() ||
            (await o.websocket.ensureE2ESessions([t.peerJid]))
          const r = o.websocket.smax(
            "call",
            {
              from: o.UserPrefs.getMaybeMeUser().toString({ legacy: !0 }),
              to: t.peerJid.toString({ legacy: !0 }),
              id: o.websocket.generateId(),
            },
            [
              o.websocket.smax(
                "reject",
                {
                  "call-id": t.id,
                  "call-creator": t.peerJid.toString({ legacy: !0 }),
                  count: "0",
                },
                null
              ),
            ]
          )
          return await o.websocket.sendSmaxStanza(r), !0
        }
      },
      38893: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(75495),
          o(r(96263), t)
      },
      373: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addProductImage = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647),
          s = r(52757)
        t.addProductImage = async function (e, t) {
          const r = await (0, o.convertToFile)(t),
            a = await i.OpaqueData.createFromData(r, r.type),
            u = await (0, s.calculateFilehashFromBlob)(r),
            c = await (0, s.uploadProductImage)(a, u),
            l = await (0, n.assertGetProduct)(e)
          return l.additionalImageCdnUrl.push(c), (0, s.editProduct)(l)
        }
      },
      11532: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.changeProductImage = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647),
          s = r(52757)
        t.changeProductImage = async function (e, t) {
          const r = await (0, o.convertToFile)(t),
            a = await i.OpaqueData.createFromData(r, r.type),
            u = await (0, s.calculateFilehashFromBlob)(r),
            c = await (0, s.uploadProductImage)(a, u),
            l = await (0, n.assertGetProduct)(e)
          return (l.imageCdnUrl = c), (0, s.editProduct)(l)
        }
      },
      69092: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createCollection = void 0)
        const n = r(14647),
          o = r(52757)
        t.createCollection = async function (e, t) {
          const { sessionId: r } = new n.ProductCatalogSession(!0)
          return await (0, o.createCollection)(e, t, `${r}`)
        }
      },
      11561: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createProduct = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(52757)
        t.createProduct = async function (e) {
          const t = await (0, n.convertToFile)(e.image),
            r = await o.OpaqueData.createFromData(t, t.type),
            s = await (0, i.calculateFilehashFromBlob)(t),
            a = await (0, i.uploadProductImage)(r, s),
            u = new o.ProductModel()
          return (
            (u.name = e.name.toString()),
            (u.catalogWid = o.UserPrefs.getMeUser()),
            (u.imageCdnUrl = a),
            (u.productImageCollection = new o.ProductImageModel({
              mediaUrl: a,
            })),
            e.description && (u.description = e.description),
            e.price &&
              ((u.priceAmount1000 = 1e4 * e.price),
              (u.currency = e.currency || "BRL")),
            e.isHidden && (u.isHidden = e.isHidden),
            e.url && (u.url = e.url),
            e.retailerId && (u.retailerId = e.retailerId),
            await (0, i.addProduct)(u, 100, 100)
          )
        }
      },
      14639: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.deleteCollection = void 0)
        const n = r(14647),
          o = r(52757)
        t.deleteCollection = async function (e) {
          const { sessionId: t } = new n.ProductCatalogSession(!0)
          return (
            await (0, o.deleteCollection)(e, `${t}`),
            "Collection deleted sucessful"
          )
        }
      },
      61612: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.delProducts = void 0)
        const n = r(52757)
        t.delProducts = async function (e) {
          let t = 200
          try {
            Array.isArray(e)
              ? await (0, n.deleteProducts)(e)
              : await (0, n.deleteProducts)([e])
          } catch (e) {
            t = 500
          }
          return { productsIds: e, status: t }
        }
      },
      25312: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.editCollection = void 0)
        const n = r(14647),
          o = r(52757)
        t.editCollection = async function (e, t) {
          const { sessionId: r } = new n.ProductCatalogSession(!0)
          return await (0, o.editCollection)(
            e,
            t.name,
            !1,
            t.productsToAdd || [],
            t.productsToRemove || [],
            `${r}`
          )
        }
      },
      77893: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.editProduct = void 0)
        const n = r(41687),
          o = r(52757)
        t.editProduct = async function (e, t) {
          const r = await (0, n.assertGetProduct)(e)
          Object.keys(t).forEach((e) => void 0 === t[e] && delete t[e])
          const i = Object.assign(r, t)
          return await (0, o.editProduct)(i)
        }
      },
      11201: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getCollections = void 0)
        const n = r(62857),
          o = r(52757)
        t.getCollections = async function (e, t, r) {
          const { collections: i } = await (0, o.queryCollectionsIQ)({
            afterCursor: "",
            catalogWid: (0, n.createWid)(e),
            height: 100,
            width: 100,
            limit: t || 10,
            productsCount: r || 10,
          })
          return i
        }
      },
      6973: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMyCatalog = void 0)
        const n = r(14647)
        t.getMyCatalog = async function () {
          return n.CatalogStore.get(n.UserPrefs.getMeUser())
        }
      },
      64639: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getProductById = void 0)
        const n = r(62857),
          o = r(52757)
        t.getProductById = async function (e, t) {
          const r = (0, n.createWid)(e),
            { data: i } = await (0, o.queryProduct)(r, t)
          return i
        }
      },
      94970: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getProducts = void 0)
        const n = r(62857),
          o = r(52757)
        t.getProducts = async function (e, t) {
          const { data: r } = await (0, o.queryCatalog)(
            (0, n.createWid)(e),
            void 0,
            t || 10,
            100,
            100
          )
          return r
        }
      },
      98486: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.updateCartEnabled =
            t.setProductVisibility =
            t.removeProductImage =
            t.getProducts =
            t.getProductById =
            t.getMyCatalog =
            t.getCollections =
            t.editProduct =
            t.editCollection =
            t.delProducts =
            t.deleteCollection =
            t.createProduct =
            t.createCollection =
            t.changeProductImage =
            t.addProductImage =
              void 0)
        var n = r(373)
        Object.defineProperty(t, "addProductImage", {
          enumerable: !0,
          get: function () {
            return n.addProductImage
          },
        })
        var o = r(11532)
        Object.defineProperty(t, "changeProductImage", {
          enumerable: !0,
          get: function () {
            return o.changeProductImage
          },
        })
        var i = r(69092)
        Object.defineProperty(t, "createCollection", {
          enumerable: !0,
          get: function () {
            return i.createCollection
          },
        })
        var s = r(11561)
        Object.defineProperty(t, "createProduct", {
          enumerable: !0,
          get: function () {
            return s.createProduct
          },
        })
        var a = r(14639)
        Object.defineProperty(t, "deleteCollection", {
          enumerable: !0,
          get: function () {
            return a.deleteCollection
          },
        })
        var u = r(61612)
        Object.defineProperty(t, "delProducts", {
          enumerable: !0,
          get: function () {
            return u.delProducts
          },
        })
        var c = r(25312)
        Object.defineProperty(t, "editCollection", {
          enumerable: !0,
          get: function () {
            return c.editCollection
          },
        })
        var l = r(77893)
        Object.defineProperty(t, "editProduct", {
          enumerable: !0,
          get: function () {
            return l.editProduct
          },
        })
        var d = r(11201)
        Object.defineProperty(t, "getCollections", {
          enumerable: !0,
          get: function () {
            return d.getCollections
          },
        })
        var f = r(6973)
        Object.defineProperty(t, "getMyCatalog", {
          enumerable: !0,
          get: function () {
            return f.getMyCatalog
          },
        })
        var p = r(64639)
        Object.defineProperty(t, "getProductById", {
          enumerable: !0,
          get: function () {
            return p.getProductById
          },
        })
        var g = r(94970)
        Object.defineProperty(t, "getProducts", {
          enumerable: !0,
          get: function () {
            return g.getProducts
          },
        })
        var m = r(59196)
        Object.defineProperty(t, "removeProductImage", {
          enumerable: !0,
          get: function () {
            return m.removeProductImage
          },
        })
        var y = r(85719)
        Object.defineProperty(t, "setProductVisibility", {
          enumerable: !0,
          get: function () {
            return y.setProductVisibility
          },
        })
        var b = r(93114)
        Object.defineProperty(t, "updateCartEnabled", {
          enumerable: !0,
          get: function () {
            return b.updateCartEnabled
          },
        })
      },
      59196: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeProductImage = void 0)
        const n = r(41687),
          o = r(52757)
        t.removeProductImage = async function (e, t) {
          const r = await (0, n.assertGetProduct)(e)
          return r.additionalImageCdnUrl.splice(t, 1), (0, o.editProduct)(r)
        }
      },
      85719: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setProductVisibility = void 0)
        const n = r(41687),
          o = r(52757)
        t.setProductVisibility = async function (e, t) {
          return (
            await (0, o.productVisibilitySet)([{ isHidden: t, productId: e }]),
            await (0, n.assertGetProduct)(e)
          )
        }
      },
      93114: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.updateCartEnabled = void 0)
        const n = r(52757)
        t.updateCartEnabled = async function (e) {
          return await (0, n.updateCartEnabled)(e)
        }
      },
      40164: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }), o(r(98486), t)
      },
      50175: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultSendMessageOptions = void 0),
          (t.defaultSendMessageOptions = {
            createChat: !1,
            detectMentioned: !0,
            linkPreview: !0,
            markIsRead: !0,
            waitForAck: !0,
            delay: 0,
          })
      },
      31853: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(70510),
          r(16854),
          r(51118),
          r(16349),
          r(62557),
          r(61905),
          r(37740),
          r(67147),
          r(77810),
          r(56136)
      },
      70510: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(54993),
          l = r(52757)
        a.onFullReady(function () {
          function e(e) {
            if (e.ack < 2 || "sender" === e.ackString) return
            const t = e.from,
              r = e.participant || void 0,
              n = e.from,
              o = !e.recipient || u.UserPrefs.getMeUser().equals(e.recipient)
            if (!o) return
            const i = e.externalIds.map(
              (t) =>
                new u.MsgKey({
                  id: t,
                  remote: n,
                  fromMe: o,
                  participant: e.participant,
                })
            )
            s.internalEv.emit("chat.msg_ack_change", {
              ack: e.ack,
              chat: t,
              sender: r,
              ids: i,
            })
          }
          u.MsgStore.on("change:ack", (e) => {
            1 === e.ack &&
              queueMicrotask(() => {
                s.internalEv.emit("chat.msg_ack_change", {
                  ack: e.ack,
                  chat: e.to,
                  ids: [e.id],
                })
              })
          }),
            (0, c.wrapModuleFunction)(l.handleChatSimpleReceipt, (t, ...r) => {
              const [n] = r
              return (
                queueMicrotask(() => {
                  e(n)
                }),
                t(...r)
              )
            }),
            (0, c.wrapModuleFunction)(l.handleGroupSimpleReceipt, (t, ...r) => {
              const [n] = r
              return (
                queueMicrotask(() => {
                  e(n)
                }),
                t(...r)
              )
            }),
            (0, c.wrapModuleFunction)(
              l.handleStatusSimpleReceipt,
              (t, ...r) => {
                const [n] = r
                return (
                  queueMicrotask(() => {
                    e(n)
                  }),
                  t(...r)
                )
              }
            )
        })
      },
      16854: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(() => {
          u.ChatStore.on("change:active", (e, t) => {
            t &&
              queueMicrotask(() => {
                s.internalEv.emit("chat.active_chat", e)
              })
          })
        })
      },
      56136: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onFullReady(function () {
          u.MsgStore.on("change:latestEditMsgKey", (e) => {
            queueMicrotask(() => {
              s.internalEv.emit("chat.msg_edited", {
                chat: e.to,
                id: e.id.toString(),
                msg: e,
              })
            })
          })
        })
      },
      77810: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(72927),
          a = r(13691),
          u = r(26105),
          c = i(r(1132)),
          l = r(54993),
          d = r(52757),
          f = r(97829)
        c.onFullReady(function () {
          async function e(e, ...t) {
            const r = t[0],
              n = Array.isArray(r[1]) ? r[1] : [r[1]],
              o = r[0]
            if ((0, s.isMainReady)()) {
              const t = []
              for (const e of n) t.push(await (0, u.getLabelById)(e))
              a.internalEv.emit("chat.update_label", {
                chat: (0, f.get)(o),
                ids: n,
                labels: t,
                type: e,
              })
            }
          }
          ;(0, l.wrapModuleFunction)(
            d.addToLabelCollection,
            async (t, ...r) => (
              queueMicrotask(() => {
                e("add", r)
              }),
              t(...r)
            )
          ),
            (0, l.wrapModuleFunction)(
              d.removeLabelFromCollection,
              async (t, ...r) => (
                queueMicrotask(() => {
                  e("remove", r)
                }),
                t(...r)
              )
            )
        })
      },
      51118: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(() => {
          u.MsgStore.on("add", (e) => {
            e.isNewMsg &&
              e.isLive &&
              queueMicrotask(() => {
                s.internalEv.emit("chat.live_location_start", {
                  id: e.sender,
                  msgId: e.id,
                  chat: e.chat.id,
                  lat: e.lat,
                  lng: e.lng,
                  accuracy: e.accuracy,
                  speed: e.speed,
                  degrees: e.degrees,
                  shareDuration: e.shareDuration,
                })
              })
          })
        })
      },
      16349: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(97829)
        a.onInjected(
          () => (
            u.MsgStore.on("add", (e) => {
              e.isNewMsg &&
                queueMicrotask(async () => {
                  "ciphertext" ===
                    (e = await (async function (e) {
                      if (void 0 !== e.quotedStanzaID) {
                        const t = await (0, c.getQuotedMsg)(e.id)
                        Object.defineProperties(e, {
                          _quotedMsgObj: { value: t, writable: !1 },
                        })
                      }
                      return e
                    })(e)).type &&
                    e.once("change:type", () => {
                      queueMicrotask(() => {
                        s.internalEv.emit("chat.new_message", e)
                      })
                    }),
                    s.internalEv.emit("chat.new_message", e)
                })
            }),
            void 0 === u.MsgModel.prototype.chat &&
              Object.defineProperty(u.MsgModel.prototype, "chat", {
                get: function () {
                  return u.ChatStore.get(this.id.fromMe ? this.to : this.from)
                },
                configurable: !0,
              }),
            void 0 === u.MsgModel.prototype.isGroupMsg &&
              Object.defineProperty(u.MsgModel.prototype, "isGroupMsg", {
                get: function () {
                  var e
                  return null === (e = null == this ? void 0 : this.chat) ||
                    void 0 === e
                    ? void 0
                    : e.isGroup
                },
                configurable: !0,
              }),
            void (
              void 0 === u.MsgModel.prototype.quotedMsgId &&
              Object.defineProperty(u.MsgModel.prototype, "quotedMsgId", {
                get: function () {
                  return (0, c.getQuotedMsgKey)(this)
                },
                configurable: !0,
              })
            )
          )
        )
      },
      62557: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(54993),
          c = r(52757),
          l = r(97829)
        a.onFullReady(function () {
          ;(0, u.wrapModuleFunction)(c.upsertVotes, async (e, ...t) => {
            const [r] = t
            for (const e of r)
              try {
                if (e.senderTimestampMs < d) continue
                const t = await (0, l.getMessageById)(e.parentMsgKey),
                  r = []
                for (const n of e.selectedOptionLocalIds)
                  r[n] = t.pollOptions.filter((e) => e.localId == n)[0]
                s.internalEv
                  .emitAsync("chat.poll_response", {
                    msgId: e.parentMsgKey,
                    chatId: e.parentMsgKey.remote,
                    selectedOptions: r,
                    timestamp: e.senderTimestampMs,
                    sender: e.sender,
                  })
                  .catch(() => null)
              } catch (e) {}
            return e(...t)
          })
        })
        const d = Date.now()
      },
      61905: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(13691),
          o = r(14647)
        n.internalEv.on("conn.main_ready", async () => {
          const e = o.ChatStore.map((e) => e.presence.subscribe())
          await Promise.all(e),
            o.PresenceStore.on("change:chatstate.type", (e) => {
              var t
              const r = o.PresenceStore.getModelsArray().find(
                (t) => t.chatstate === e
              )
              r &&
                r.hasData &&
                (null === (t = r.chatstate) || void 0 === t
                  ? void 0
                  : t.type) &&
                queueMicrotask(() => {
                  var e, t
                  const i = o.ContactStore.get(r.id),
                    s = {
                      id: r.id,
                      isOnline: r.isOnline,
                      isGroup: r.isGroup,
                      isUser: r.isUser,
                      shortName: i ? i.formattedShortName : "",
                      state:
                        null === (e = r.chatstate) || void 0 === e
                          ? void 0
                          : e.type,
                      t: Date.now(),
                    }
                  r.isUser &&
                    (s.isContact = !(null === (t = r.chatstate) || void 0 === t
                      ? void 0
                      : t.deny)),
                    r.isGroup &&
                      (s.participants = r.chatstates
                        .getModelsArray()
                        .filter((e) => !!e.type)
                        .map((e) => {
                          const t = o.ContactStore.get(e.id)
                          return {
                            id: e.id.toString(),
                            state: e.type,
                            shortName: t ? t.formattedShortName : "",
                          }
                        })),
                    n.internalEv.emit("chat.presence_change", s)
                })
            })
        })
      },
      37740: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = r(62857),
          u = i(r(1132)),
          c = r(14647),
          l = r(54993),
          d = r(52757)
        u.onFullReady(function () {
          ;(0, l.wrapModuleFunction)(d.createOrUpdateReactions, (e, ...t) => {
            const [r] = t
            for (const e of r)
              try {
                if (e.timestamp < f) continue
                s.internalEv.emitAsync("chat.new_reaction", {
                  id: c.MsgKey.fromString(e.msgKey),
                  orphan: e.orphan,
                  orphanReason: e.orphanReason,
                  msgId: c.MsgKey.fromString(e.parentMsgKey),
                  reactionText: e.reactionText,
                  read: e.read,
                  sender: (0, a.createWid)(e.senderUserJid),
                  timestamp: e.timestamp,
                })
              } catch (e) {}
            return e(...t)
          })
        })
        const f = Date.now()
      },
      67147: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(() =>
          (function () {
            const e = u.MsgStore.processMultipleMessages,
              t = ["revoke", "sender_revoke", "admin_revoke"]
            u.MsgStore.processMultipleMessages = (r, n, ...o) =>
              new Promise((i, a) => {
                try {
                  for (const e of n)
                    e.isNewMsg &&
                      "protocol" === e.type &&
                      t.includes(e.subtype) &&
                      s.internalEv.emit("chat.msg_revoke", {
                        author: e.author,
                        from: e.from,
                        id: e.id,
                        refId: e.protocolMessageKey,
                        to: e.to,
                        type: e.subtype,
                      })
                } catch (e) {}
                e.call(u.MsgStore, r, n, ...o).then(i, a)
              })
          })()
        )
      },
      95071: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.unarchive = t.archive = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(52757)
        async function s(e, t = !0) {
          const r = (0, n.assertWid)(e),
            s = (0, n.assertGetChat)(r)
          if (s.archive === t)
            throw new o.WPPError(
              (t ? "archive" : "unarchive") + "_error",
              `The chat ${r.toString()} is already ${
                t ? "archived" : "unarchived"
              }`,
              { wid: r, archive: t }
            )
          return await (0, i.setArchive)(s, t), { wid: r, archive: t }
        }
        ;(t.archive = s),
          (t.unarchive = async function (e) {
            return s(e, !1)
          })
      },
      31777: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canMarkPlayed = void 0)
        const n = r(14647),
          o = r(52757),
          i = r(17530)
        t.canMarkPlayed = async function (e) {
          e instanceof n.MsgModel ||
            "string" == typeof e ||
            "function" != typeof e.toString ||
            (e = e.toString())
          const t =
            e instanceof n.MsgModel
              ? e
              : await (0, i.getMessageById)(e.toString())
          return (0, o.canMarkPlayed)(t)
        }
      },
      10802: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canMute = void 0)
        const n = r(41687)
        t.canMute = function (e) {
          const t = (0, n.assertWid)(e)
          return (0, n.assertGetChat)(t).mute.canMute()
        }
      },
      50271: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canReply = void 0)
        const n = r(14647),
          o = r(52757),
          i = r(17530)
        t.canReply = async function (e) {
          e instanceof n.MsgModel ||
            "string" == typeof e ||
            "function" != typeof e.toString ||
            (e = e.toString())
          const t =
            e instanceof n.MsgModel
              ? e
              : await (0, i.getMessageById)(e.toString())
          return (0, o.canReplyMsg)(t)
        }
      },
      1260: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.clear = void 0)
        const n = r(41687),
          o = r(52757)
        t.clear = async function (e, t = !0) {
          const r = (0, n.assertWid)(e),
            i = (0, n.assertGetChat)(r)
          ;(0, o.sendClear)(i, t)
          let s = 200
          return (
            i.promises.sendClear &&
              (s =
                (await i.promises.sendClear.catch(() => ({ status: 500 })))
                  .status || s),
            { wid: r, status: s, keepStarred: t }
          )
        }
      },
      84378: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.delete = void 0)
        const n = r(41687),
          o = r(52757)
        t.delete = async function (e) {
          const t = (0, n.assertWid)(e),
            r = (0, n.assertGetChat)(t)
          ;(0, o.sendDelete)(r)
          let i = 200
          return (
            r.promises.sendDelete &&
              (i =
                (await r.promises.sendDelete.catch(() => ({ status: 500 })))
                  .status || i),
            { wid: t, status: i }
          )
        }
      },
      74931: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.deleteMessage = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(20514),
          s = r(97829)
        t.deleteMessage = async function (e, t, r = !1, a = !1) {
          const u = (0, n.assertGetChat)(e)
          let c = !1
          Array.isArray(t) || ((c = !0), (t = [t]))
          const l = await (0, s.getMessageById)(t),
            d = []
          for (const e of l) {
            let t = i.SendMsgResult.ERROR_UNKNOWN,
              n = !1,
              s = !1
            const c = e.isSentByMe
            if (e.type === i.MSG_TYPE.REVOKED && a)
              (t = i.SendMsgResult.ERROR_UNKNOWN), (n = !0)
            else if (a) {
              if (
                ("list" === e.type && (e.__x_isUserCreatedType = !0),
                o.Cmd.sendRevokeMsgs(u, [e], { clearMedia: r }),
                u.promises.sendRevokeMsgs)
              ) {
                const e = await u.promises.sendRevokeMsgs
                Array.isArray(e) && (t = e[0])
              }
              n = e.isRevokedByMe
            } else {
              if (
                (o.Cmd.sendDeleteMsgs(u, [e], r), u.promises.sendDeleteMsgs)
              ) {
                const e = await u.promises.sendDeleteMsgs
                Array.isArray(e) && (t = e[0])
              }
              s = Boolean(u.msgs.get(e.id))
            }
            d.push({
              id: e.id.toString(),
              sendMsgResult: t,
              isRevoked: n,
              isDeleted: s,
              isSentByMe: c,
            })
          }
          return c ? d[0] : d
        }
      },
      48157: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.downloadMedia = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(97829)
        t.downloadMedia = async function e(t) {
          var r
          const s = await (0, i.getMessageById)(t)
          if (!s.mediaData)
            throw new n.WPPError(
              "message_not_contains_media",
              `Message ${t} not contains media`,
              { id: t }
            )
          await s.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: 1,
            isUserInitiated: !0,
          })
          let a = null
          if (
            (s.mediaData.filehash &&
              (a = o.MediaBlobCache.get(s.mediaData.filehash)),
            !a &&
              s.mediaData.mediaBlob &&
              (a = s.mediaData.mediaBlob.forceToBlob()),
            !a &&
              "VIDEO" ===
                (null === (r = s.mediaObject) || void 0 === r
                  ? void 0
                  : r.type))
          )
            try {
              return (
                (s.type = "document"),
                (s.mediaObject.type = "DOCUMENT"),
                await e(t)
              )
            } finally {
              ;(s.type = "video"), (s.mediaObject.type = "VIDEO")
            }
          if (!a)
            throw {
              error: !0,
              code: "media_not_found",
              message: "Media not found",
            }
          return a
        }
      },
      35090: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.editMessage = void 0)
        const n = r(62857),
          o = r(52757),
          i = r(74023),
          s = r(97829)
        t.editMessage = async function (e, t, r = {}) {
          var a
          r = Object.assign(Object.assign({}, i.defaultSendMessageOptions), r)
          const u = await (0, s.getMessageById)(e)
          if (!(0, o.canEditMsg)(u))
            throw new n.WPPError(
              "edit_message_error",
              "Cannot edit this message"
            )
          let c = {
            type: "protocol",
            subtype: "message_edit",
            protocolMessageKey: u.id,
            body: t.trim(),
            editMsgType: u.type,
          }
          return (
            (c = await (0, s.prepareRawMessage)(u.chat, c, r)),
            (c.latestEditMsgKey = c.id),
            (c.latestEditSenderTimestampMs = c.t),
            await (0, s.sendRawMessage)(
              null === (a = u.chat) || void 0 === a ? void 0 : a.id,
              c,
              r
            )
          )
        }
      },
      36618: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.find = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(52757)
        t.find = async function (e) {
          const t = (0, n.assertWid)(e),
            r = await (0, i.findChat)(t)
          return r.isGroup && (await o.GroupMetadataStore.find(r.id)), r
        }
      },
      74997: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.forwardMessage = void 0)
        const n = r(41687),
          o = r(52757),
          i = r(74023)
        t.forwardMessage = async function (e, t, r = {}) {
          const s = await (0, n.assertFindChat)(e),
            a = await (0, i.getMessageById)(t)
          return await (0, o.forwardMessagesToChats)(
            [a],
            [s],
            r.displayCaptionText
          )
        }
      },
      78626: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateMessageID = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(52757)
        t.generateMessageID = async function (e) {
          const t = o.UserPrefs.getMaybeMeUser()
          let r, s
          return (
            (r =
              e instanceof o.Wid
                ? e
                : e instanceof o.ChatModel
                ? e.id
                : (0, n.assertWid)(e)),
            r.isGroup() && (s = o.WidFactory.toUserWid(t)),
            new o.MsgKey({
              from: t,
              to: r,
              id: await Promise.resolve((0, i.randomMessageId)()),
              participant: s,
              selfDir: "out",
            })
          )
        }
      },
      63829: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.get = void 0)
        const n = r(41687),
          o = r(14647)
        t.get = function (e) {
          const t = (0, n.assertWid)(e)
          return "newsletter" === t.server
            ? o.NewsletterStore.get(t)
            : o.ChatStore.get(t)
        }
      },
      11513: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getActiveChat = void 0)
        const n = r(14647)
        t.getActiveChat = function () {
          return n.ChatStore.findFirst((e) => e.active)
        }
      },
      73546: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getLastSeen = void 0)
        const n = r(41687),
          o = r(14647)
        t.getLastSeen = async function (e) {
          const t = (0, n.assertWid)(e),
            r = await o.ChatStore.get(t)
          return (
            !!r &&
            (r.presence.hasData ||
              (await r.presence.subscribe(),
              await new Promise((e) => setTimeout(e, 100))),
            r.presence.chatstate.t || !1)
          )
        }
      },
      17181: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMessageACK = void 0)
        const n = r(14647),
          o = r(74023)
        t.getMessageACK = async function (e) {
          const t = await (0, o.getMessageById)(e),
            r = await n.MsgInfoStore.find(t.id),
            i = new Map(),
            s = (e, t) => {
              const r = e.id.toString(),
                n = i.get(r) || { id: r, wid: e.id }
              ;(n[t] = e.t), i.set(r, n)
            }
          return (
            null == r || r.delivery.forEach((e) => s(e, "deliveredAt")),
            null == r || r.read.forEach((e) => s(e, "readAt")),
            null == r || r.played.forEach((e) => s(e, "playedAt")),
            {
              ack: t.ack,
              fromMe: t.id.fromMe,
              deliveryRemaining:
                (null == r ? void 0 : r.deliveryRemaining) || 0,
              readRemaining: (null == r ? void 0 : r.readRemaining) || 0,
              playedRemaining: (null == r ? void 0 : r.playedRemaining) || 0,
              participants: Array.from(i.values()),
            }
          )
        }
      },
      17530: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMessageById = void 0)
        const o = n(r(17833)),
          i = r(41687),
          s = r(62857),
          a = r(14647),
          u = r(52757),
          c = (0, o.default)("WA-JS:message:getMessageById")
        t.getMessageById = async function (e) {
          let t = !1
          Array.isArray(e) || ((t = !0), (e = [e]))
          const r = e.map((e) => a.MsgKey.fromString(e.toString()))
          let n = []
          for (const e of r) {
            let t = a.MsgStore.get(e)
            if (!t)
              if (e.remote.isStatusV3())
                t = a.StatusV3Store.getMyStatus().msgs.get(e)
              else {
                const r = (0, i.assertGetChat)(e.remote)
                if (((t = r.msgs.get(e)), !t)) {
                  c(`searching remote message with id ${e.toString()}`)
                  const n = (0, u.getSearchContext)(r, e)
                  await n.collection.loadAroundPromise,
                    (t = r.msgs.get(e) || n.collection.get(e))
                }
              }
            if (!t)
              throw (
                (c(`message id ${e.toString()} not found`),
                new s.WPPError(
                  "msg_not_found",
                  `Message ${e.toString()} not found`,
                  { id: e.toString() }
                ))
              )
            n.push(t)
          }
          return (
            (n = n.map((e) =>
              e instanceof a.MsgModel
                ? e
                : a.MsgStore.get(e) || new a.MsgModel(e)
            )),
            t ? n[0] : n
          )
        }
      },
      48769: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMessages = void 0)
        const n = r(41687),
          o = r(72927),
          i = r(14647),
          s = r(52757)
        t.getMessages = async function (e, t = {}) {
          var r
          const a = (0, n.assertGetChat)(e)
          let u = t.count || 20
          const c = "after" === t.direction ? "after" : "before",
            l =
              t.id ||
              (null === (r = a.lastReceivedKey) || void 0 === r
                ? void 0
                : r.toString())
          if (t.onlyUnread) {
            if (!a.hasUnread) return []
            const e = a.unreadCount < 0 ? 2 : a.unreadCount
            u = u < 0 ? e : Math.min(u, e)
          }
          ;-1 === u && (0, o.isMultiDevice)() && (u = 1 / 0), !t.id && l && u--
          const d = l ? i.MsgKey.fromString(l) : { remote: a.id }
          ;(d.count = u), (d.direction = c)
          let f = []
          if ("all" === t.media) {
            const { messages: e } = await (0, s.msgFindQuery)("media", d)
            f = e
          } else if ("image" === t.media) {
            const { messages: e } = await (0, s.msgFindQuery)("media", d)
            for (const t of e) "image" === t.type && f.push(t)
          } else
            void 0 !== t.media
              ? ((d.media = t.media),
                (f = await (0, s.msgFindQuery)("media", d)))
              : (f = await (0, s.msgFindQuery)(c, d))
          if (!t.id && l) {
            const e = i.MsgStore.get(l)
            e && f.push(e.attributes)
          }
          return (
            (f = f.map(
              (e) => (
                (null == t ? void 0 : t.onlyUnread) && (e.isNewMsg = !0),
                e instanceof i.MsgModel
                  ? e
                  : i.MsgStore.get(e) || new i.MsgModel(e)
              )
            )),
            f
          )
        }
      },
      55595: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getPlatformFromMessage = void 0)
        const n = r(14647)
        t.getPlatformFromMessage = function (e) {
          e instanceof n.MsgModel ||
            "string" == typeof e ||
            "function" != typeof e.toString ||
            (e = e.toString()),
            e instanceof n.MsgModel && (e = e.id)
          const t = n.MsgKey.fromString(e.toString())
          return t.id.length > 21
            ? "android"
            : t.id.startsWith("3A")
            ? "iphone"
            : t.id.startsWith("3EB0")
            ? "web"
            : "unknown"
        }
      },
      38636: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getQuotedMsg = void 0)
        const n = r(62857),
          o = r(17530),
          i = r(95885)
        t.getQuotedMsg = async function (e) {
          const t = await (0, o.getMessageById)(e)
          if (!t.quotedStanzaID)
            throw new n.WPPError(
              "message_not_have_a_reply",
              `Message ${e} does not have a reply`,
              { id: e }
            )
          const r = (0, i.getQuotedMsgKey)(t)
          return await (0, o.getMessageById)(r)
        }
      },
      95885: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getQuotedMsgKey = void 0)
        const n = r(72927),
          o = r(62857),
          i = r(14647)
        t.getQuotedMsgKey = function (e) {
          var t
          if (!e.quotedStanzaID)
            throw new o.WPPError(
              "message_not_have_a_reply",
              `Message ${e.id} does not have a reply`,
              { id: e.id }
            )
          const r = e.quotedRemoteJid ? e.quotedRemoteJid : e.id.remote,
            s =
              (null === (t = (0, n.getMyUserId)()) || void 0 === t
                ? void 0
                : t.equals(e.quotedParticipant)) || !1
          return new i.MsgKey({
            id: e.quotedStanzaID,
            fromMe: s,
            remote: r,
            participant:
              i.Wid.isGroup(e.from) ||
              i.Wid.isGroup(e.to) ||
              i.Wid.isStatusV3(r)
                ? e.quotedParticipant
                : void 0,
          })
        }
      },
      20565: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getReactions = void 0)
        const n = r(62857),
          o = r(52757)
        t.getReactions = async function (e) {
          const t = await (0, o.getReactions)(e),
            r = []
          for (const e of t.reactions) {
            const t = {
              aggregateEmoji: e.aggregateEmoji,
              hasReactionByMe: e.hasReactionByMe,
              senders: [],
            }
            for (const r of e.senders)
              t.senders.push({
                id: r.msgKey,
                msgId: r.parentMsgKey,
                reactionText: r.reactionText,
                read: r.read,
                sender: (0, n.createWid)(r.senderUserJid),
                orphan: r.orphan,
                timestamp: r.timestamp,
              })
            r.push(t)
          }
          return {
            reactionByMe: t.reactionByMe
              ? {
                  id: t.reactionByMe.msgKey,
                  orphan: t.reactionByMe.orphan,
                  msgId: t.reactionByMe.parentMsgKey,
                  reactionText: t.reactionByMe.reactionText,
                  read: t.reactionByMe.read,
                  senderUserJid: (0, n.createWid)(t.reactionByMe.senderUserJid),
                  timestamp: t.reactionByMe.timestamp,
                }
              : void 0,
            reactions: r,
          }
        }
      },
      39128: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getVotes = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(52757),
          s = r(17530)
        t.getVotes = async function (e) {
          const t = o.MsgKey.fromString(e.toString()),
            r = await (0, s.getMessageById)(t)
          if ("poll_creation" != r.type)
            throw new n.WPPError(
              "msg_not_found",
              `Message ${t.toString()} not a poll`,
              { id: t.toString() }
            )
          const a = await (0, i.getVotes)([t]),
            u = { msgId: t, chatId: t.remote, votes: [] }
          for (const e of a) {
            const t = {
              selectedOptions: [],
              timestamp: e.senderTimestampMs,
              sender: e.sender,
            }
            for (const n of e.selectedOptionLocalIds)
              t.selectedOptions[n] = r.pollOptions.filter(
                (e) => e.localId == n
              )[0]
            u.votes.push(t)
          }
          return u
        }
      },
      97829: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendReactionToMessage =
            t.sendRawMessage =
            t.sendOrderMessage =
            t.sendLocationMessage =
            t.sendListMessage =
            t.sendGroupInviteMessage =
            t.sendFileMessage =
            t.sendCreatePollMessage =
            t.requestPhoneNumber =
            t.prepareRawMessage =
            t.prepareMessageButtons =
            t.prepareLinkPreview =
            t.unpin =
            t.pin =
            t.openChatFromUnread =
            t.openChatBottom =
            t.openChatAt =
            t.mute =
            t.markPlayed =
            t.markIsUnread =
            t.markIsRecording =
            t.markIsRead =
            t.markIsPaused =
            t.markIsComposing =
            t.list =
            t.keepMessage =
            t.getVotes =
            t.getReactions =
            t.getQuotedMsgKey =
            t.getQuotedMsg =
            t.getPlatformFromMessage =
            t.getMessages =
            t.getMessageById =
            t.getMessageACK =
            t.getLastSeen =
            t.getActiveChat =
            t.get =
            t.generateMessageID =
            t.forwardMessage =
            t.find =
            t.editMessage =
            t.downloadMedia =
            t.deleteMessage =
            t.delete =
            t.clear =
            t.canReply =
            t.canMute =
            t.canMarkPlayed =
            t.unarchive =
            t.archive =
              void 0),
          (t.unmute =
            t.starMessage =
            t.sendVCardContactMessage =
            t.sendTextMessage =
            t.sendScheduledCallMessage =
              void 0)
        var n = r(95071)
        Object.defineProperty(t, "archive", {
          enumerable: !0,
          get: function () {
            return n.archive
          },
        }),
          Object.defineProperty(t, "unarchive", {
            enumerable: !0,
            get: function () {
              return n.unarchive
            },
          })
        var o = r(31777)
        Object.defineProperty(t, "canMarkPlayed", {
          enumerable: !0,
          get: function () {
            return o.canMarkPlayed
          },
        })
        var i = r(10802)
        Object.defineProperty(t, "canMute", {
          enumerable: !0,
          get: function () {
            return i.canMute
          },
        })
        var s = r(50271)
        Object.defineProperty(t, "canReply", {
          enumerable: !0,
          get: function () {
            return s.canReply
          },
        })
        var a = r(1260)
        Object.defineProperty(t, "clear", {
          enumerable: !0,
          get: function () {
            return a.clear
          },
        })
        var u = r(84378)
        Object.defineProperty(t, "delete", {
          enumerable: !0,
          get: function () {
            return u.delete
          },
        })
        var c = r(74931)
        Object.defineProperty(t, "deleteMessage", {
          enumerable: !0,
          get: function () {
            return c.deleteMessage
          },
        })
        var l = r(48157)
        Object.defineProperty(t, "downloadMedia", {
          enumerable: !0,
          get: function () {
            return l.downloadMedia
          },
        })
        var d = r(35090)
        Object.defineProperty(t, "editMessage", {
          enumerable: !0,
          get: function () {
            return d.editMessage
          },
        })
        var f = r(36618)
        Object.defineProperty(t, "find", {
          enumerable: !0,
          get: function () {
            return f.find
          },
        })
        var p = r(74997)
        Object.defineProperty(t, "forwardMessage", {
          enumerable: !0,
          get: function () {
            return p.forwardMessage
          },
        })
        var g = r(78626)
        Object.defineProperty(t, "generateMessageID", {
          enumerable: !0,
          get: function () {
            return g.generateMessageID
          },
        })
        var m = r(63829)
        Object.defineProperty(t, "get", {
          enumerable: !0,
          get: function () {
            return m.get
          },
        })
        var y = r(11513)
        Object.defineProperty(t, "getActiveChat", {
          enumerable: !0,
          get: function () {
            return y.getActiveChat
          },
        })
        var b = r(73546)
        Object.defineProperty(t, "getLastSeen", {
          enumerable: !0,
          get: function () {
            return b.getLastSeen
          },
        })
        var h = r(17181)
        Object.defineProperty(t, "getMessageACK", {
          enumerable: !0,
          get: function () {
            return h.getMessageACK
          },
        })
        var v = r(17530)
        Object.defineProperty(t, "getMessageById", {
          enumerable: !0,
          get: function () {
            return v.getMessageById
          },
        })
        var _ = r(48769)
        Object.defineProperty(t, "getMessages", {
          enumerable: !0,
          get: function () {
            return _.getMessages
          },
        })
        var M = r(55595)
        Object.defineProperty(t, "getPlatformFromMessage", {
          enumerable: !0,
          get: function () {
            return M.getPlatformFromMessage
          },
        })
        var P = r(38636)
        Object.defineProperty(t, "getQuotedMsg", {
          enumerable: !0,
          get: function () {
            return P.getQuotedMsg
          },
        })
        var w = r(95885)
        Object.defineProperty(t, "getQuotedMsgKey", {
          enumerable: !0,
          get: function () {
            return w.getQuotedMsgKey
          },
        })
        var O = r(20565)
        Object.defineProperty(t, "getReactions", {
          enumerable: !0,
          get: function () {
            return O.getReactions
          },
        })
        var j = r(39128)
        Object.defineProperty(t, "getVotes", {
          enumerable: !0,
          get: function () {
            return j.getVotes
          },
        })
        var S = r(33985)
        Object.defineProperty(t, "keepMessage", {
          enumerable: !0,
          get: function () {
            return S.keepMessage
          },
        })
        var x = r(88241)
        Object.defineProperty(t, "list", {
          enumerable: !0,
          get: function () {
            return x.list
          },
        })
        var C = r(28921)
        Object.defineProperty(t, "markIsComposing", {
          enumerable: !0,
          get: function () {
            return C.markIsComposing
          },
        })
        var I = r(11598)
        Object.defineProperty(t, "markIsPaused", {
          enumerable: !0,
          get: function () {
            return I.markIsPaused
          },
        })
        var k = r(59680)
        Object.defineProperty(t, "markIsRead", {
          enumerable: !0,
          get: function () {
            return k.markIsRead
          },
        })
        var E = r(19345)
        Object.defineProperty(t, "markIsRecording", {
          enumerable: !0,
          get: function () {
            return E.markIsRecording
          },
        })
        var A = r(93119)
        Object.defineProperty(t, "markIsUnread", {
          enumerable: !0,
          get: function () {
            return A.markIsUnread
          },
        })
        var T = r(45351)
        Object.defineProperty(t, "markPlayed", {
          enumerable: !0,
          get: function () {
            return T.markPlayed
          },
        })
        var B = r(27112)
        Object.defineProperty(t, "mute", {
          enumerable: !0,
          get: function () {
            return B.mute
          },
        })
        var L = r(91082)
        Object.defineProperty(t, "openChatAt", {
          enumerable: !0,
          get: function () {
            return L.openChatAt
          },
        })
        var R = r(74212)
        Object.defineProperty(t, "openChatBottom", {
          enumerable: !0,
          get: function () {
            return R.openChatBottom
          },
        })
        var F = r(51464)
        Object.defineProperty(t, "openChatFromUnread", {
          enumerable: !0,
          get: function () {
            return F.openChatFromUnread
          },
        })
        var U = r(61278)
        Object.defineProperty(t, "pin", {
          enumerable: !0,
          get: function () {
            return U.pin
          },
        }),
          Object.defineProperty(t, "unpin", {
            enumerable: !0,
            get: function () {
              return U.unpin
            },
          })
        var D = r(15952)
        Object.defineProperty(t, "prepareLinkPreview", {
          enumerable: !0,
          get: function () {
            return D.prepareLinkPreview
          },
        })
        var N = r(43394)
        Object.defineProperty(t, "prepareMessageButtons", {
          enumerable: !0,
          get: function () {
            return N.prepareMessageButtons
          },
        })
        var G = r(19211)
        Object.defineProperty(t, "prepareRawMessage", {
          enumerable: !0,
          get: function () {
            return G.prepareRawMessage
          },
        })
        var W = r(58267)
        Object.defineProperty(t, "requestPhoneNumber", {
          enumerable: !0,
          get: function () {
            return W.requestPhoneNumber
          },
        })
        var q = r(68011)
        Object.defineProperty(t, "sendCreatePollMessage", {
          enumerable: !0,
          get: function () {
            return q.sendCreatePollMessage
          },
        })
        var z = r(24654)
        Object.defineProperty(t, "sendFileMessage", {
          enumerable: !0,
          get: function () {
            return z.sendFileMessage
          },
        })
        var V = r(40954)
        Object.defineProperty(t, "sendGroupInviteMessage", {
          enumerable: !0,
          get: function () {
            return V.sendGroupInviteMessage
          },
        })
        var $ = r(35184)
        Object.defineProperty(t, "sendListMessage", {
          enumerable: !0,
          get: function () {
            return $.sendListMessage
          },
        })
        var K = r(39453)
        Object.defineProperty(t, "sendLocationMessage", {
          enumerable: !0,
          get: function () {
            return K.sendLocationMessage
          },
        })
        var J = r(11300)
        Object.defineProperty(t, "sendOrderMessage", {
          enumerable: !0,
          get: function () {
            return J.sendOrderMessage
          },
        })
        var H = r(44190)
        Object.defineProperty(t, "sendRawMessage", {
          enumerable: !0,
          get: function () {
            return H.sendRawMessage
          },
        })
        var Q = r(92774)
        Object.defineProperty(t, "sendReactionToMessage", {
          enumerable: !0,
          get: function () {
            return Q.sendReactionToMessage
          },
        })
        var Y = r(59633)
        Object.defineProperty(t, "sendScheduledCallMessage", {
          enumerable: !0,
          get: function () {
            return Y.sendScheduledCallMessage
          },
        })
        var Z = r(68533)
        Object.defineProperty(t, "sendTextMessage", {
          enumerable: !0,
          get: function () {
            return Z.sendTextMessage
          },
        })
        var X = r(36356)
        Object.defineProperty(t, "sendVCardContactMessage", {
          enumerable: !0,
          get: function () {
            return X.sendVCardContactMessage
          },
        })
        var ee = r(37126)
        Object.defineProperty(t, "starMessage", {
          enumerable: !0,
          get: function () {
            return ee.starMessage
          },
        })
        var te = r(35291)
        Object.defineProperty(t, "unmute", {
          enumerable: !0,
          get: function () {
            return te.unmute
          },
        })
      },
      33985: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.keepMessage = void 0)
        const n = r(64456),
          o = r(62857),
          i = r(20514),
          s = r(52757),
          a = r(17530)
        t.keepMessage = async function (e, t = !0) {
          const r = await (0, a.getMessageById)(e)
          if (await (0, n.iAmAdmin)(r.id.remote)) {
            if (r.isExpired())
              throw new o.WPPError("msg_expired", "This message has expired")
            return t
              ? (await (0, s.keepMessage)(r, i.KIC_ENTRY_POINT_TYPE.CHAT),
                await (0, a.getMessageById)(e))
              : (await (0, s.undoKeepMessage)(
                  r,
                  { deleteExpired: !0 },
                  i.KIC_ENTRY_POINT_TYPE.CHAT
                ),
                await (0, a.getMessageById)(e))
          }
          throw new o.WPPError(
            "you_not_group_admin",
            "You is not a group admin"
          )
        }
      },
      88241: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.list = void 0)
        const n = r(14647),
          o = r(63829)
        t.list = async function (e = {}) {
          const t = null == e.count ? 1 / 0 : e.count,
            r = "before" === e.direction ? "before" : "after"
          let i = n.ChatStore.getModelsArray().slice()
          if (
            (e.onlyUsers && (i = i.filter((e) => e.isUser)),
            e.onlyGroups && (i = i.filter((e) => e.isGroup)),
            e.onlyCommunities &&
              (i = i.filter((e) => {
                var t
                return (
                  e.isGroup &&
                  "COMMUNITY" ===
                    (null === (t = e.groupMetadata) || void 0 === t
                      ? void 0
                      : t.groupType)
                )
              })),
            e.onlyWithUnreadMessage && (i = i.filter((e) => e.hasUnread)),
            e.withLabels)
          ) {
            const t = e.withLabels.map((e) => {
              const t = n.LabelStore.findFirst((t) => t.name === e)
              return t ? t.id : e
            })
            i = i.filter((e) => {
              var r
              return null === (r = e.labels) || void 0 === r
                ? void 0
                : r.some((e) => t.includes(e))
            })
          }
          const s = (null == e ? void 0 : e.id) ? (0, o.get)(e.id) : null,
            a = s ? i.indexOf(s) : 0
          if ("before" === r) {
            const e = a - t < 0 ? 0 : a - t,
              r = e + t >= a ? a : e + t
            i = i.slice(e, r)
          } else i = i.slice(a, a + t)
          for (const e of i)
            e.isGroup && (await n.GroupMetadataStore.find(e.id))
          return i
        }
      },
      28921: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markIsComposing = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(97829)
        t.markIsComposing = async function (e, t) {
          const r = (0, n.assertGetChat)(e)
          await r.presence.subscribe(),
            await o.ChatPresence.markComposing(r),
            r.pausedTimerId &&
              (clearTimeout(r.pausedTimerId), r.unset("pausedTimerId")),
            t &&
              (await new Promise((n) => {
                r.pausedTimerId = setTimeout(() => {
                  ;(0, i.markIsPaused)(e).then(n, n)
                }, t)
              }))
        }
      },
      11598: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markIsPaused = void 0)
        const n = r(41687),
          o = r(14647)
        t.markIsPaused = async function (e) {
          const t = (0, n.assertGetChat)(e)
          await t.presence.subscribe(), await o.ChatPresence.markPaused(t)
        }
      },
      59680: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markIsRead = void 0)
        const n = r(41687),
          o = r(52757)
        t.markIsRead = async function (e) {
          const t = (0, n.assertGetChat)(e),
            r = t.unreadCount
          return await (0, o.sendSeen)(t, !1), { wid: t.id, unreadCount: r }
        }
      },
      19345: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markIsRecording = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(97829)
        t.markIsRecording = async function (e, t) {
          const r = (0, n.assertGetChat)(e)
          await r.presence.subscribe(),
            await o.ChatPresence.markRecording(r),
            t &&
              (await new Promise((n) => {
                r.pausedTimerId = setTimeout(() => {
                  ;(0, i.markIsPaused)(e).then(n, n)
                }, t)
              }))
        }
      },
      93119: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markIsUnread = void 0)
        const n = r(41687),
          o = r(52757)
        t.markIsUnread = async function (e) {
          const t = (0, n.assertGetChat)(e)
          return await (0, o.markUnread)(t, !0), { wid: t.id }
        }
      },
      45351: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markPlayed = void 0)
        const n = r(14647),
          o = r(52757),
          i = r(17530)
        t.markPlayed = async function (e) {
          e instanceof n.MsgModel ||
            "string" == typeof e ||
            "function" != typeof e.toString ||
            (e = e.toString())
          const t =
            e instanceof n.MsgModel
              ? e
              : await (0, i.getMessageById)(e.toString())
          return (
            await (0, o.markPlayed)(t),
            await (0, i.getMessageById)(e.toString())
          )
        }
      },
      27112: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.mute = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(52757)
        t.mute = async function (e, t) {
          const r = (0, n.assertWid)(e),
            s = (0, n.assertGetChat)(r)
          let a = 0
          if ("expiration" in t)
            a =
              "number" == typeof t.expiration
                ? t.expiration
                : t.expiration.getTime() / 1e3
          else {
            if (!("duration" in t))
              throw new o.WPPError(
                "invalid_time_mute",
                "Invalid time for mute",
                { time: t }
              )
            a = (0, i.unixTime)() + t.duration
          }
          if (a < (0, i.unixTime)())
            throw new o.WPPError(
              "negative_time_mute",
              "Negative duration for mute",
              { time: t }
            )
          return (
            await s.mute.setMute(a),
            { wid: r, expiration: s.mute.expiration, isMuted: s.mute.isMuted }
          )
        }
      },
      91082: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.openChatAt = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(52757),
          s = r(97829)
        t.openChatAt = async function (e, t) {
          const r = (0, n.assertWid)(e),
            a = await (0, n.assertFindChat)(r),
            u = await (0, s.getMessageById)(t),
            c = (0, i.getSearchContext)(a, u)
          return await o.Cmd.openChatAt(a, c)
        }
      },
      74212: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.openChatBottom = void 0)
        const n = r(41687),
          o = r(14647)
        t.openChatBottom = async function (e) {
          const t = (0, n.assertWid)(e),
            r = await (0, n.assertFindChat)(t)
          return await o.Cmd.openChatBottom(r)
        }
      },
      51464: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.openChatFromUnread = void 0)
        const n = r(41687),
          o = r(14647)
        t.openChatFromUnread = async function (e) {
          const t = (0, n.assertWid)(e),
            r = await (0, n.assertFindChat)(t)
          return await o.Cmd.openChatFromUnread(r)
        }
      },
      61278: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.unpin = t.pin = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(52757)
        async function s(e, t = !0) {
          const r = (0, n.assertWid)(e),
            s = (0, n.assertGetChat)(r)
          if (s.pin === t)
            throw new o.WPPError(
              (t ? "pin" : "unpin") + "_error",
              `The chat ${r.toString()} is already ${
                t ? "pinned" : "unpinned"
              }`,
              { wid: r, pin: t }
            )
          return await (0, i.setPin)(s, t), { wid: r, pin: t }
        }
        ;(t.pin = s),
          (t.unpin = async function (e) {
            return s(e, !1)
          })
      },
      72185: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareAudioWaveform = void 0)
        const o = (0, n(r(17833)).default)("WA-JS:chat:sendFileMessage")
        t.prepareAudioWaveform = async function (e, t) {
          if (e.isPtt && e.waveform)
            try {
              const e = await t.arrayBuffer(),
                r = new AudioContext(),
                n = await r.decodeAudioData(e),
                o = n.getChannelData(0),
                i = 64,
                s = Math.floor(o.length / i),
                a = []
              for (let e = 0; e < i; e++) {
                const t = s * e
                let r = 0
                for (let e = 0; e < s; e++) r += Math.abs(o[t + e])
                a.push(r / s)
              }
              const u = Math.pow(Math.max(...a), -1),
                c = a.map((e) => e * u),
                l = new Uint8Array(c.map((e) => Math.floor(100 * e)))
              return { duration: Math.floor(n.duration), waveform: l }
            } catch (e) {
              o("Failed to generate waveform", e)
            }
        }
      },
      15952: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            },
          s =
            (this && this.__rest) ||
            function (e, t) {
              var r = {}
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (r[n] = e[n])
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var o = 0
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                  t.indexOf(n[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                    (r[n[o]] = e[n[o]])
              }
              return r
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareLinkPreview = void 0)
        const a = r(73113),
          u = i(r(1132)),
          c = r(54993),
          l = r(52757)
        ;(t.prepareLinkPreview = async function (e, t) {
          if (!t.linkPreview) return e
          if (t.linkPreview) {
            const r = "object" == typeof t.linkPreview ? t.linkPreview : {},
              n = "chat" === e.type ? e.body : ""
            if (n)
              try {
                const e = (0, l.findFirstWebLink)(n)
                if (e) {
                  const n = await (0, l.fetchLinkPreview)(e)
                  ;(null == n ? void 0 : n.data) &&
                    (t.linkPreview = Object.assign(
                      Object.assign({}, n.data),
                      r
                    ))
                }
              } catch (e) {}
          }
          return (
            "object" == typeof t.linkPreview &&
              ((e.subtype = "url"),
              (e = Object.assign(Object.assign({}, e), t.linkPreview))),
            e
          )
        }),
          u.onFullReady(() => {
            ;(0, c.wrapModuleFunction)(l.getABPropConfigValue, (e, ...t) => {
              const [r] = t
              switch (r) {
                case "high_quality_link_preview_enabled":
                  return !0
                case "link_preview_wait_time":
                  return 1
              }
              return e(...t)
            }),
              (0, c.wrapModuleFunction)(
                l.genMinimalLinkPreview,
                async (e, ...t) => {
                  const [r] = t,
                    n = "string" == typeof r ? r : r.url
                  return new Promise(async (r) => {
                    try {
                      const e = await (0, a.fetchRemoteLinkPreviewData)(n)
                      if (!e) throw new Error(`preview not found for ${n}`)
                      const { imageUrl: t } = e,
                        o = s(e, ["imageUrl"])
                      let i = {}
                      t &&
                        (i = await (0, a.generateThumbnailLinkPreviewData)(
                          t
                        ).catch(() => null)),
                        r({
                          url: n,
                          data: Object.assign(Object.assign({}, o), i),
                        })
                    } catch (n) {
                      r(e(...t))
                    }
                  })
                }
              )
          })
      },
      43394: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareMessageButtons = void 0)
        const s = i(r(1132)),
          a = r(14647),
          u = r(19198),
          c = r(54993),
          l = r(52757)
        ;(t.prepareMessageButtons = function (e, t) {
          if (!t.buttons) return e
          if (!Array.isArray(t.buttons)) throw "Buttons options is not a array"
          if (
            ((void 0 !== t.useTemplateButtons &&
              null !== t.useTemplateButtons) ||
              (t.useTemplateButtons = t.buttons.some(
                (e) => "phoneNumber" in e || "url" in e
              )),
            t.useTemplateButtons)
          ) {
            if (0 === t.buttons.length || t.buttons.length > 5)
              throw "Buttons options must have between 1 and 5 options"
          } else if (0 === t.buttons.length || t.buttons.length > 3)
            throw "Buttons options must have between 1 and 3 options"
          return (
            (e.title = t.title),
            (e.footer = t.footer),
            t.useTemplateButtons
              ? ((e.isFromTemplate = !0),
                (e.buttons = new a.TemplateButtonCollection()),
                (e.hydratedButtons = t.buttons.map((e, t) =>
                  "phoneNumber" in e
                    ? {
                        index: t,
                        callButton: {
                          displayText: e.text,
                          phoneNumber: e.phoneNumber,
                        },
                      }
                    : "url" in e
                    ? {
                        index: t,
                        urlButton: { displayText: e.text, url: e.url },
                      }
                    : {
                        index: t,
                        quickReplyButton: {
                          displayText: e.text,
                          id: e.id || `${t}`,
                        },
                      }
                )),
                e.buttons.add(
                  e.hydratedButtons.map((e, t) => {
                    var r, n, o, i
                    const s = `${null != e.index ? e.index : t}`
                    return e.urlButton
                      ? new a.TemplateButtonModel({
                          id: s,
                          displayText:
                            null === (r = e.urlButton) || void 0 === r
                              ? void 0
                              : r.displayText,
                          url:
                            null === (n = e.urlButton) || void 0 === n
                              ? void 0
                              : n.url,
                          subtype: "url",
                        })
                      : e.callButton
                      ? new a.TemplateButtonModel({
                          id: s,
                          displayText: e.callButton.displayText,
                          phoneNumber: e.callButton.phoneNumber,
                          subtype: "call",
                        })
                      : new a.TemplateButtonModel({
                          id: s,
                          displayText:
                            null === (o = e.quickReplyButton) || void 0 === o
                              ? void 0
                              : o.displayText,
                          selectionId:
                            null === (i = e.quickReplyButton) || void 0 === i
                              ? void 0
                              : i.id,
                          subtype: "quick_reply",
                        })
                  })
                ))
              : ((e.isDynamicReplyButtonsMsg = !0),
                (e.dynamicReplyButtons = t.buttons.map((e, t) => ({
                  buttonId: e.id || `${t}`,
                  buttonText: { displayText: e.text },
                  type: 1,
                }))),
                (e.replyButtons = new a.ButtonCollection()),
                e.replyButtons.add(
                  e.dynamicReplyButtons.map((e) => {
                    var t
                    return new a.ReplyButtonModel({
                      id: e.buttonId,
                      displayText:
                        (null === (t = e.buttonText) || void 0 === t
                          ? void 0
                          : t.displayText) || void 0,
                    })
                  })
                )),
            e
          )
        }),
          s.onFullReady(() => {
            ;(0, c.wrapModuleFunction)(l.createMsgProtobuf, (e, ...t) => {
              var r
              const [n] = t,
                o = e(...t)
              if (n.hydratedButtons) {
                const e = { hydratedButtons: n.hydratedButtons }
                if (
                  (n.footer && (e.hydratedFooterText = n.footer),
                  n.caption && (e.hydratedContentText = n.caption),
                  n.title && (e.hydratedTitleText = n.title),
                  o.conversation)
                )
                  (e.hydratedContentText = o.conversation),
                    delete o.conversation
                else if (
                  null === (r = o.extendedTextMessage) || void 0 === r
                    ? void 0
                    : r.text
                )
                  (e.hydratedContentText = o.extendedTextMessage.text),
                    delete o.extendedTextMessage
                else {
                  let t
                  const r = [
                    "documentMessage",
                    "imageMessage",
                    "locationMessage",
                    "videoMessage",
                  ]
                  for (const e of r)
                    if (e in o) {
                      t = e
                      break
                    }
                  if (!t) return o
                  ;(e[t] = o[t]),
                    e.hydratedTitleText &&
                      !e.hydratedContentText &&
                      (e.hydratedContentText = e.hydratedTitleText),
                    delete e.hydratedTitleText,
                    "locationMessage" === t &&
                      (e.hydratedContentText ||
                        (!o[t].name && !o[t].address) ||
                        (e.hydratedContentText =
                          o[t].name && o[t].address
                            ? `${o[t].name}\n${o[t].address}`
                            : o[t].name || o[t].address || "")),
                    (e.hydratedContentText = e.hydratedContentText || " "),
                    delete o[t]
                }
                o.templateMessage = { hydratedTemplate: e }
              }
              return o
            }),
              (0, c.wrapModuleFunction)(l.encodeMaybeMediaType, (e, ...t) => {
                const [r] = t
                return "button" === r ? u.DROP_ATTR : e(...t)
              }),
              (0, c.wrapModuleFunction)(l.mediaTypeFromProtobuf, (e, ...t) => {
                var r
                const [n] = t
                return (
                  null === (r = n.templateMessage) || void 0 === r
                    ? void 0
                    : r.hydratedTemplate
                )
                  ? e(n.templateMessage.hydratedTemplate)
                  : e(...t)
              }),
              (0, c.wrapModuleFunction)(
                l.typeAttributeFromProtobuf,
                (e, ...t) => {
                  var r, n, o, i
                  const [s] = t
                  if (
                    null === (r = s.templateMessage) || void 0 === r
                      ? void 0
                      : r.hydratedTemplate
                  ) {
                    const e = Object.keys(
                      null === (n = s.templateMessage) || void 0 === n
                        ? void 0
                        : n.hydratedTemplate
                    )
                    return [
                      "documentMessage",
                      "imageMessage",
                      "locationMessage",
                      "videoMessage",
                    ].some((t) => e.includes(t))
                      ? "media"
                      : "text"
                  }
                  return 1 ===
                    (null === (o = s.buttonsMessage) || void 0 === o
                      ? void 0
                      : o.headerType) ||
                    2 ===
                      (null === (i = s.buttonsMessage) || void 0 === i
                        ? void 0
                        : i.headerType)
                    ? "text"
                    : e(...t)
                }
              ),
              (0, c.wrapModuleFunction)(
                l.createFanoutMsgStanza,
                async (e, ...t) => {
                  const [, , r] = t
                  let n = null
                  if (r.buttonsMessage) n = a.websocket.smax("buttons")
                  else if (r.listMessage) {
                    const e = 2,
                      t = ["unknown", "single_select", "product_list"]
                    n = a.websocket.smax("list", { v: "2", type: t[e] })
                  }
                  const o = await e(...t)
                  if (!n) return o
                  const i = o.content
                  let s = i.find((e) => "biz" === e.tag)
                  s || ((s = a.websocket.smax("biz", {}, null)), i.push(s))
                  let u = !1
                  return (
                    Array.isArray(s.content)
                      ? (u = !!s.content.find(
                          (e) => e.tag === (null == n ? void 0 : n.tag)
                        ))
                      : (s.content = []),
                    u || s.content.push(n),
                    o
                  )
                }
              )
          })
      },
      19211: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareRawMessage = void 0)
        const n = r(41687),
          o = r(64456),
          i = r(62857),
          s = r(14647),
          a = r(20514),
          u = r(52757),
          c = r(74023),
          l = r(97829)
        t.prepareRawMessage = async function (e, t, r = {}) {
          var d
          if (
            ((r = Object.assign(
              Object.assign({}, c.defaultSendMessageOptions),
              r
            )),
            (t = Object.assign(
              {
                t: (0, u.unixTime)(),
                from: s.UserPrefs.getMaybeMeUser(),
                to: e.id,
                self: "out",
                isNewMsg: !0,
                local: !0,
                ack: a.ACK.CLOCK,
              },
              t
            )),
            r.delay &&
              "chat" === t.type &&
              (await (0, l.markIsComposing)(e.id),
              await new Promise((e) => setTimeout(() => e(!0), r.delay)),
              await (0, l.markIsPaused)(e.id)),
            "protocol" !== t.type)
          ) {
            const r = (0, u.getEphemeralFields)(e)
            t = Object.assign(Object.assign({}, r), t)
          }
          if (r.messageId) {
            if (
              ("string" == typeof r.messageId &&
                (r.messageId = s.MsgKey.fromString(r.messageId)),
              !r.messageId.fromMe)
            )
              throw new i.WPPError(
                "message_key_is_not_from_me",
                "Message key is not from me",
                { messageId: r.messageId.toString() }
              )
            if (!r.messageId.remote.equals(e.id))
              throw new i.WPPError(
                "message_key_remote_id_is_not_same_of_chat",
                "Message key remote ID is not same of chat",
                { messageId: r.messageId.toString() }
              )
            t.id = r.messageId
          }
          if (
            (t.id || (t.id = await (0, l.generateMessageID)(e)),
            r.mentionedList && !Array.isArray(r.mentionedList))
          )
            throw new i.WPPError(
              "mentioned_list_is_not_array",
              "The option mentionedList is not an array",
              { mentionedList: r.mentionedList }
            )
          if (
            r.detectMentioned &&
            e.isGroup &&
            (!r.mentionedList || !r.mentionedList.length)
          ) {
            const n = "chat" === t.type ? t.body : t.caption
            r.mentionedList = r.mentionedList || []
            const i = (null == n ? void 0 : n.match(/(?<=@)(\d+)\b/g)) || []
            if (i.length > 0) {
              const t = (await (0, o.getParticipants)(e.id)).map((e) =>
                e.id.toString()
              )
              for (const e of i) {
                const n = `${e}@c.us`
                t.includes(n) && r.mentionedList.push(n)
              }
            }
          }
          if (r.mentionedList) {
            const e = r.mentionedList.map((e) =>
              e instanceof s.Wid ? e : (0, n.assertWid)(e)
            )
            for (const t of e)
              if (!t.isUser())
                throw new i.WPPError(
                  "mentioned_is_not_user",
                  "Mentioned is not an user",
                  { mentionedId: t.toString() }
                )
            t.mentionedJidList = e
          }
          if (r.quotedMsg) {
            if (
              ("string" == typeof r.quotedMsg &&
                (r.quotedMsg = s.MsgKey.fromString(r.quotedMsg)),
              r.quotedMsg instanceof s.MsgKey &&
                (r.quotedMsg = await (0, l.getMessageById)(r.quotedMsg)),
              !(r.quotedMsg instanceof s.MsgModel))
            )
              throw new i.WPPError("invalid_quoted_msg", "Invalid quotedMsg", {
                quotedMsg: r.quotedMsg,
              })
            if (
              !(null === (d = r.quotedMsg) || void 0 === d
                ? void 0
                : d.isStatusV3) &&
              !(0, u.canReplyMsg)(r.quotedMsg)
            )
              throw new i.WPPError(
                "quoted_msg_can_not_reply",
                "QuotedMsg can not reply",
                { quotedMsg: r.quotedMsg }
              )
            t = Object.assign(
              Object.assign({}, t),
              r.quotedMsg.msgContextInfo(e.id)
            )
          }
          return t
        }
      },
      58267: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.requestPhoneNumber = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(74023),
          s = r(97829)
        t.requestPhoneNumber = async function (e, t = {}) {
          t = Object.assign(Object.assign({}, i.defaultSendMessageOptions), t)
          const r = (0, n.assertWid)(e)
          if (!r.isLid())
            throw new o.WPPError(
              "not_a_lid_chat",
              `requestPhoneNumber should not be called for non lid chat ${r.toString()}`
            )
          return await (0, s.sendRawMessage)(
            e,
            { type: "request_phone_number" },
            t
          )
        }
      },
      68011: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendCreatePollMessage = void 0)
        const n = r(74023),
          o = r(97829)
        t.sendCreatePollMessage = async function (e, t, r, i = {}) {
          i = Object.assign(Object.assign({}, n.defaultSendMessageOptions), i)
          const s = {
            type: "poll_creation",
            pollName: t,
            pollOptions: r.map((e, t) => ({ name: e, localId: t })),
            pollEncKey: self.crypto.getRandomValues(new Uint8Array(32)),
            pollSelectableOptionsCount: i.selectableCount || 0,
            messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
          }
          return await (0, o.sendRawMessage)(e, s, i)
        }
      },
      24654: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendFileMessage = void 0)
        const a = s(r(17833)),
          u = r(41687),
          c = r(62857),
          l = r(39681),
          d = i(r(1132)),
          f = r(14647),
          p = r(54993),
          g = r(52757),
          m = r(74023),
          y = r(97829),
          b = r(72185),
          h = (0, a.default)("WA-JS:message")
        ;(t.sendFileMessage = async function (e, t, r) {
          const n = (r = Object.assign(
              Object.assign(Object.assign({}, m.defaultSendMessageOptions), {
                type: "auto-detect",
                waveform: !0,
              }),
              r
            )).createChat
              ? await (0, u.assertFindChat)(e)
              : (0, u.assertGetChat)(e),
            o = await (0, l.convertToFile)(t, r.mimetype, r.filename),
            i = o.name,
            s = await f.OpaqueData.createFromData(o, o.type),
            a = {}
          let c
          "audio" === r.type
            ? ((a.isPtt = r.isPtt),
              (a.precomputedFields = await (0, b.prepareAudioWaveform)(r, o)))
            : "image" === r.type
            ? (c = r.isViewOnce)
            : "video" === r.type
            ? (a.asGif = r.isGif)
            : "document" === r.type
            ? (a.asDocument = !0)
            : "sticker" === r.type && (a.asSticker = !0)
          const d = f.MediaPrep.prepRawMedia(s, a)
          let p = await (0, y.prepareRawMessage)(
            n,
            { caption: r.caption || i, filename: i, footer: r.footer },
            r
          )
          ;(p = (0, y.prepareMessageButtons)(p, r)),
            r.markIsRead &&
              (h("marking chat is read before send file"),
              await (0, y.markIsRead)(n.id).catch(() => null)),
            await d.waitForPrep(),
            (null == r ? void 0 : r.isPtv) &&
              ((d._mediaData.type = "ptv"),
              (d._mediaData.fullHeight = 1128),
              (d._mediaData.fullWidth = 1128)),
            h(`sending message (${r.type}) with id ${p.id}`)
          const g = d.sendToChat(n, {
              caption: r.caption,
              footer: r.footer,
              isViewOnce: c,
              productMsgOptions: p,
            }),
            v = await new Promise((e) => {
              n.msgs.on("add", function t(r) {
                r.id === p.id && (n.msgs.off("add", t), e(r))
              })
            })
          function _(e, t) {
            h(`message file ${v.id} is ${t}`)
          }
          if (
            (h(`message file ${v.id} queued`),
            v.on("change:mediaData.mediaStage", _),
            g.finally(() => {
              v.off("change:mediaData.mediaStage", _)
            }),
            r.waitForAck)
          ) {
            h(`waiting ack for ${v.id}`)
            const e = await g
            h(`ack received for ${v.id} (ACK: ${v.ack}, SendResult: ${e})`)
          }
          return { id: v.id.toString(), ack: v.ack, sendMsgResult: g }
        }),
          d.onFullReady(() => {
            ;(0, p.wrapModuleFunction)(
              g.generateVideoThumbsAndDuration,
              async (e, ...t) => {
                const [r] = t
                try {
                  return await e(...t)
                } catch (e) {
                  if (
                    "string" == typeof e.message &&
                    e.message.includes("MEDIA_ERR_SRC_NOT_SUPPORTED")
                  )
                    try {
                      const e = await r.file.arrayBuffer(),
                        t = (0, c.getVideoInfoFromBuffer)(e)
                      return {
                        duration: t.duration,
                        thumbs: r.maxDimensions.map((e) =>
                          (function (e, t, r) {
                            let n = null != t ? t : r,
                              o = null != e ? e : r
                            n > o
                              ? n > r && ((o *= r / n), (n = r))
                              : o > r && ((n *= r / o), (o = r))
                            const i = {
                                width: Math.max(n, 1),
                                height: Math.max(o, 1),
                              },
                              s = document.createElement("canvas"),
                              a = s.getContext("2d")
                            return (
                              (s.width = i.width),
                              (s.height = i.height),
                              (a.fillStyle = "white"),
                              a.fillRect(0, 0, s.width, s.height),
                              {
                                url: s.toDataURL("image/jpeg"),
                                width: i.width,
                                height: i.height,
                                fullWidth: e,
                                fullHeight: t,
                              }
                            )
                          })(t.width, t.height, e)
                        ),
                      }
                    } catch (e) {
                      console.error(e)
                    }
                  throw e
                }
              }
            ),
              (0, p.wrapModuleFunction)(
                g.processRawSticker,
                async (e, ...t) => {
                  const [r] = t,
                    n = await e(...t)
                  if ("image/webp" === r.type()) {
                    const e = r.forceToBlob(),
                      t = await (0, c.blobToArrayBuffer)(e)
                    ;(0, g.isAnimatedWebp)(t) &&
                      (n.mediaBlob = await f.OpaqueData.createFromData(
                        e,
                        r.type()
                      ))
                  }
                  return n
                }
              ),
              (0, p.wrapModuleFunction)(g.uploadMedia, async (e, ...t) => {
                const [r] = t
                return "ptv" == r.mediaType
                  ? ((r.mediaType = "video"), await e(r))
                  : await e(...t)
              })
          })
      },
      40954: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendGroupInviteMessage = void 0)
        const n = r(56191),
          o = r(64456),
          i = r(62857),
          s = r(74023),
          a = r(97829)
        t.sendGroupInviteMessage = async function (e, t) {
          if (
            !(t = Object.assign(
              Object.assign({}, s.defaultSendMessageOptions),
              t
            )).groupName
          ) {
            const e = await (0, o.ensureGroup)(t.groupId)
            t.groupName = e.name
          }
          if (!t.jpegThumbnail) {
            const e = await (0, n.getProfilePictureUrl)(t.groupId, !1)
            if (e)
              try {
                const r = await (0, i.downloadImage)(e)
                t.jpegThumbnail = r.data.split(",", 2)[1]
              } catch (e) {}
          }
          const r = {
            type: "groups_v4_invite",
            inviteGrpJpegThum: t.jpegThumbnail,
            inviteCode: t.inviteCode,
            inviteCodeExp: t.inviteCodeExpiration,
            inviteGrp: t.groupId,
            inviteGrpName: t.groupName,
            comment: t.caption,
          }
          return await (0, a.sendRawMessage)(e, r, t)
        }
      },
      35184: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendListMessage = void 0)
        const s = r(62857),
          a = i(r(1132)),
          u = r(54993),
          c = r(52757),
          l = r(74023),
          d = r(97829)
        ;(t.sendListMessage = async function (e, t) {
          const r = (t = Object.assign(
            Object.assign({}, l.defaultSendMessageOptions),
            t
          )).sections
          if (!Array.isArray(r))
            throw new s.WPPError(
              "invalid_list_type",
              "Sections must be an array"
            )
          if (0 === r.length || r.length > 10)
            throw new s.WPPError(
              "invalid_list_size",
              "Sections options must have between 1 and 10 options"
            )
          const n = {
            type: "list",
            list: {
              buttonText: t.buttonText,
              description: t.description || " ",
              title: t.title,
              footerText: t.footer,
              listType: 1,
              sections: r,
            },
            footer: t.footer,
          }
          return await (0, d.sendRawMessage)(e, n, t)
        }),
          a.onFullReady(() => {
            ;(0, u.wrapModuleFunction)(
              c.typeAttributeFromProtobuf,
              (e, ...t) => {
                const [r] = t
                return r.listMessage ? "text" : e(...t)
              }
            )
          })
      },
      39453: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendLocationMessage = void 0)
        const s = i(r(1132)),
          a = r(54993),
          u = r(52757),
          c = r(74023),
          l = r(97829),
          d = r(43394)
        ;(t.sendLocationMessage = async function (e, t) {
          const r =
            (t = Object.assign(
              Object.assign({}, c.defaultSendMessageOptions),
              t
            )).name && t.address
              ? `${t.name}\n${t.address}`
              : t.name || t.address || ""
          "string" == typeof t.lat && (t.lat = parseFloat(t.lat)),
            "string" == typeof t.lng && (t.lng = parseFloat(t.lng))
          let n = {
            type: "location",
            lat: t.lat,
            lng: t.lng,
            loc: r,
            clientUrl: t.url,
          }
          return (
            (n = (0, d.prepareMessageButtons)(n, t)),
            await (0, l.sendRawMessage)(e, n, t)
          )
        }),
          s.onFullReady(() => {
            ;(0, a.wrapModuleFunction)(u.mediaTypeFromProtobuf, (e, ...t) => {
              const [r] = t
              return r.locationMessage ? null : e(...t)
            }),
              (0, a.wrapModuleFunction)(
                u.typeAttributeFromProtobuf,
                (e, ...t) => {
                  const [r] = t
                  return r.locationMessage ? "text" : e(...t)
                }
              )
          })
      },
      11300: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendOrderMessage = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(52757),
          s = r(74023),
          a = r(97829)
        t.sendOrderMessage = async function (e, t, r) {
          if (!t || !e)
            throw new n.WPPError(
              "parameter_not_fount",
              "Please, send all the required parameters"
            )
          r = Object.assign(Object.assign({}, s.defaultSendMessageOptions), r)
          const u = []
          let c = 0,
            l = null
          const d = o.CatalogStore.get(o.UserPrefs.getMaybeMeUser())
          for (const e of t)
            if ("product" == e.type) {
              const { data: t } = await (0, i.queryProduct)(
                o.UserPrefs.getMaybeMeUser(),
                e.id,
                100,
                100,
                void 0,
                !0
              )
              if (void 0 === t)
                throw new n.WPPError(
                  "product_not_found",
                  `The product id ${e.id} not found`
                )
              const s = (null == d ? void 0 : d.productCollection).get(e.id)
              l ||
                (l = s
                  .getProductImageCollectionHead()
                  .mediaData.preview.getBase64())
              const a = {
                retailer_id: t.id,
                name: t.name,
                amount: {
                  value: Number(t.price),
                  offset: Number(r.offset) || 1e3,
                },
                quantity: Number(e.qnt || 1),
                isCustomItem: !1,
                isQuantitySet: !0,
              }
              ;(c += Number(t.price) * Number(e.qnt || 1)), u.push(a)
            } else {
              const t = {
                retailer_id: `custom-item-${(0, n.generateOrderUniqueId)()}`,
                name: e.name,
                amount: {
                  value: Number(e.price),
                  offset: Number(r.offset) || 1e3,
                },
                quantity: Number(e.qnt || 1),
                isCustomItem: !0,
                isQuantitySet: !0,
              }
              ;(c += Number(e.price) * Number(e.qnt || 1)), u.push(t)
            }
          const f =
              c +
              Number((null == r ? void 0 : r.tax) || 0) +
              Number((null == r ? void 0 : r.shipping) || 0) -
              Number((null == r ? void 0 : r.discount) || 0),
            p = {
              reference_id: (0, n.generateOrderUniqueId)(),
              type: "physical-goods",
              payment_configuration: "merchant_categorization_code",
              currency: await (0, i.currencyForCountryShortcode)(
                await (0, i.getCountryShortcodeByPhone)(
                  o.UserPrefs.getMeUser().user
                )
              ),
              total_amount: { value: f, offset: Number(r.offset) || 1e3 },
              order: {
                status: "pending",
                items: u,
                subtotal: { value: Number(c), offset: Number(r.offset) || 1e3 },
                tax: (null == r ? void 0 : r.tax)
                  ? {
                      value: null == r ? void 0 : r.tax,
                      offset: Number(r.offset) || 1e3,
                    }
                  : null,
                shipping: (null == r ? void 0 : r.shipping)
                  ? {
                      value: null == r ? void 0 : r.shipping,
                      offset: Number(r.offset) || 1e3,
                    }
                  : null,
                discount: (null == r ? void 0 : r.discount)
                  ? {
                      value: null == r ? void 0 : r.discount,
                      offset: Number(r.offset) || 1e3,
                    }
                  : null,
              },
            },
            g = {
              type: "interactive",
              caption: null == r ? void 0 : r.notes,
              nativeFlowName: "order_details",
              interactiveType: "native_flow",
              interactiveHeader: {
                hasmediaAttachment: !1,
                mediaType: void 0,
                subtitle: void 0,
                thumbnail: l,
                title: null,
              },
              interactivePayload: {
                buttons: [
                  {
                    buttonParamsJson: JSON.stringify(p),
                    name: "review_and_pay",
                  },
                ],
                messageVersion: 1,
              },
            }
          return await (0, a.sendRawMessage)(e, g, r)
        }
      },
      44190: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendRawMessage = void 0)
        const o = n(r(17833)),
          i = r(41687),
          s = r(62857),
          a = r(14647),
          u = r(20514),
          c = r(52757),
          l = r(74023),
          d = r(97829),
          f = (0, o.default)("WA-JS:message")
        t.sendRawMessage = async function (e, t, r = {}) {
          const n = (r = Object.assign(
            Object.assign({}, l.defaultSendMessageOptions),
            r
          )).createChat
            ? await (0, i.assertFindChat)(e)
            : (0, i.assertGetChat)(e)
          ;(t = await (0, d.prepareRawMessage)(n, t, r)),
            r.markIsRead &&
              (f("marking chat is read before send message"),
              await (0, d.markIsRead)(n.id).catch(() => null)),
            f(`sending message (${t.type}) with id ${t.id}`)
          let o = null
          if (null == n ? void 0 : n.isNewsletter) {
            if ("chat" !== t.type)
              throw new s.WPPError(
                "type_not_valid_for_newsletter",
                'Please, send a valid type for send message to newsletter. Valdi types: "chat", "image", "video"'
              )
            const e = new a.MsgModel(t)
            await (0, c.addNewsletterMsgsRecords)([
              await (0, c.msgDataFromMsgModel)(e),
            ])
            const r = await (0, c.sendNewsletterMessageJob)({
              msgData: t,
              newsletterJid: n.id.toString(),
              type: "chat" == t.type ? "text" : "media",
            })
            n.msgs.add(e),
              r.success && ((e.t = r.ack.t), (e.serverId = r.serverId)),
              e.updateAck(u.ACK.SENT, !0),
              await (0, c.updateNewsletterMsgRecord)(e),
              (o = [e, "OK"])
          } else if ("protocol" === t.type && "message_edit" === t.subtype) {
            const e = await (0, d.getMessageById)(t.protocolMessageKey)
            await (0, c.addAndSendMessageEdit)(e, t),
              (o = [await (0, d.getMessageById)(t.protocolMessageKey), null])
          } else o = await (0, c.addAndSendMsgToChat)(n, t)
          f(`message ${t.id} queued`)
          const p = await o[0]
          if (r.waitForAck) {
            f(`waiting ack for ${t.id}`)
            const e = await o[1]
            f(`ack received for ${t.id} (ACK: ${p.ack}, SendResult: ${e})`)
          }
          return { id: p.id.toString(), ack: p.ack, sendMsgResult: o[1] }
        }
      },
      92774: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendReactionToMessage = void 0)
        const n = r(14647),
          o = r(52757),
          i = r(17530)
        t.sendReactionToMessage = async function (e, t) {
          e instanceof n.MsgModel ||
            "string" == typeof e ||
            "function" != typeof e.toString ||
            (e = e.toString())
          const r =
            e instanceof n.MsgModel
              ? e
              : await (0, i.getMessageById)(e.toString())
          return (
            t || (t = ""),
            { sendMsgResult: await (0, o.sendReactionToMsg)(r, t) }
          )
        }
      },
      59633: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendScheduledCallMessage = t.SCHEDULED_CALL_TYPE = void 0)
        const s = i(r(1132)),
          a = r(54993),
          u = r(52757),
          c = r(74023),
          l = r(97829)
        var d
        !(function (e) {
          ;(e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.VOICE = 1)] = "VOICE"),
            (e[(e.VIDEO = 2)] = "VIDEO")
        })(d || (t.SCHEDULED_CALL_TYPE = d = {})),
          (t.sendScheduledCallMessage = async function (e, t) {
            var r
            "string" ==
              typeof (t = Object.assign(
                Object.assign(
                  { callType: d.VOICE },
                  c.defaultSendMessageOptions
                ),
                t
              )).callType && (t.callType = "voice" == t.callType ? 1 : 2)
            const n = {
              type: "scheduled_call",
              title: t.title,
              callType: t.callType,
              scheduledTimestampMs: parseInt(
                null === (r = t.scheduledTimestampMs) || void 0 === r
                  ? void 0
                  : r.toString()
              ),
            }
            return await (0, l.sendRawMessage)(e, n, t)
          }),
          s.onFullReady(() => {
            ;(0, a.wrapModuleFunction)(u.createMsgProtobuf, (e, ...t) => {
              const [r] = t,
                n = e(...t)
              return (
                "scheduled_call" == (null == r ? void 0 : r.type) &&
                  (n.scheduledCallCreationMessage = {
                    title: r.title,
                    scheduledTimestampMs: r.scheduledTimestampMs,
                    callType: r.callType,
                  }),
                n
              )
            }),
              (0, a.wrapModuleFunction)(
                u.typeAttributeFromProtobuf,
                (e, ...t) => {
                  const [r] = t
                  return r.scheduledCallCreationMessage ? "text" : e(...t)
                }
              )
          })
      },
      68533: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendTextMessage = void 0)
        const n = r(74023),
          o = r(97829)
        t.sendTextMessage = async function (e, t, r = {}) {
          r = Object.assign(Object.assign({}, n.defaultSendMessageOptions), r)
          let i = {
            body: t,
            type: "chat",
            subtype: null,
            urlText: null,
            urlNumber: null,
          }
          return (
            (i = (0, o.prepareMessageButtons)(i, r)),
            (i = await (0, o.prepareLinkPreview)(i, r)),
            await (0, o.sendRawMessage)(e, i, r)
          )
        }
      },
      36356: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendVCardContactMessage = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(74023),
          s = r(97829)
        t.sendVCardContactMessage = async function (e, t, r = {}) {
          ;(r = Object.assign(
            Object.assign({}, i.defaultSendMessageOptions),
            r
          )),
            Array.isArray(t) || (t = [t])
          const a = []
          for (const e of t) {
            let t = "",
              r = ""
            "object" == typeof e && "name" in e
              ? ((t = e.id.toString()), (r = e.name))
              : (t = e.toString())
            let i = o.ContactStore.get(t)
            i || (i = new o.ContactModel({ id: (0, n.assertWid)(t), name: r })),
              !r &&
                i.id.equals(o.UserPrefs.getMaybeMeUser()) &&
                (r = i.displayName),
              r &&
                ((i = new o.ContactModel(i.attributes)),
                (i.name = r),
                Object.defineProperty(i, "formattedName", { value: r }),
                Object.defineProperty(i, "displayName", { value: r })),
              a.push(o.VCard.vcardFromContactModel(i))
          }
          const u = {}
          return (
            1 === a.length
              ? ((u.type = "vcard"),
                (u.body = a[0].vcard),
                (u.vcardFormattedName = a[0].displayName))
              : ((u.type = "multi_vcard"), (u.vcardList = a)),
            (0, s.sendRawMessage)(e, u, r)
          )
        }
      },
      37126: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.starMessage = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(97829)
        t.starMessage = async function (e, t = !0) {
          let r = !1
          Array.isArray(e) || ((r = !0), (e = [e]))
          const s = await (0, i.getMessageById)(e),
            a = s.reduce((e, t) => {
              const r = t.id.remote.toString()
              return (e[r] = e[r] || []), e[r].push(t), e
            }, {}),
            u = s.map((e) => ({ id: e.id.toString(), star: e.star || !1 }))
          for (const e in a) {
            const r = (0, n.assertGetChat)(e),
              i = a[e]
            t ? o.Cmd.sendStarMsgs(r, i) : o.Cmd.sendUnstarMsgs(r, i),
              r.promises.sendStarMsgs && (await r.promises.sendStarMsgs)
          }
          return r ? u[0] : u
        }
      },
      35291: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.unmute = void 0)
        const n = r(41687)
        t.unmute = async function (e) {
          const t = (0, n.assertWid)(e)
          return (0, n.assertGetChat)(t).mute.unmute(!0)
        }
      },
      74023: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(31853),
          r(72465),
          o(r(50175), t),
          o(r(97829), t),
          o(r(73298), t)
      },
      72465: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(54993),
          u = r(52757)
        s.onFullReady(function () {
          ;(0, a.wrapModuleFunction)(u.mediaTypeFromProtobuf, (e, ...t) => {
            const [r] = t
            if (r.deviceSentMessage) {
              const { message: e } = r.deviceSentMessage
              return e ? (0, u.mediaTypeFromProtobuf)(e) : null
            }
            if (r.ephemeralMessage) {
              const { message: e } = r.ephemeralMessage
              return e ? (0, u.mediaTypeFromProtobuf)(e) : null
            }
            if (r.viewOnceMessage) {
              const { message: e } = r.viewOnceMessage
              return e ? (0, u.mediaTypeFromProtobuf)(e) : null
            }
            return e(...t)
          }),
            (0, a.wrapModuleFunction)(
              u.typeAttributeFromProtobuf,
              (e, ...t) => {
                const [r] = t
                if (r.ephemeralMessage) {
                  const { message: e } = r.ephemeralMessage
                  return e ? (0, u.typeAttributeFromProtobuf)(e) : "text"
                }
                if (r.deviceSentMessage) {
                  const { message: e } = r.deviceSentMessage
                  return e ? (0, u.typeAttributeFromProtobuf)(e) : "text"
                }
                if (r.viewOnceMessage) {
                  const { message: e } = r.viewOnceMessage
                  return e ? (0, u.typeAttributeFromProtobuf)(e) : "text"
                }
                return e(...t)
              }
            ),
            (0, a.wrapModuleFunction)(u.isUnreadTypeMsg, (e, ...t) => {
              const [r] = t
              switch (r.type) {
                case "buttons_response":
                case "hsm":
                case "list":
                case "list_response":
                case "template_button_reply":
                  return !0
              }
              return e(...t)
            })
        }, 1e3)
      },
      73298: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
      },
      94605: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addSubgroups = void 0)
        const n = r(41687),
          o = r(52757)
        t.addSubgroups = async function (e, t) {
          Array.isArray(t) || (t = [t])
          const r = (0, n.assertWid)(e),
            i = t.map(n.assertWid)
          return await (0, o.sendLinkSubgroups)({
            parentGroupId: r,
            subgroupIds: i,
          })
        }
      },
      70378: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.create = void 0)
        const n = r(41687),
          o = r(52757)
        t.create = async function (e, t, r) {
          Array.isArray(r) || (r = [r])
          const i = r.map(n.assertWid),
            s = await (0, o.sendCreateCommunity)({
              name: e,
              desc: t,
              closed: !1,
            }),
            a = await (0, o.sendLinkSubgroups)({
              parentGroupId: s.wid,
              subgroupIds: i,
            })
          return { wid: s.wid, subGroups: a }
        }
      },
      64920: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.deactivate = void 0)
        const n = r(41687),
          o = r(52757)
        t.deactivate = async function (e) {
          const t = (0, n.assertWid)(e)
          return (0, o.sendDeactivateCommunity)({ parentGroupId: t })
        }
      },
      58092: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.demoteParticipants = void 0)
        const s = r(64456),
          a = i(r(52757))
        t.demoteParticipants = async function (e, t) {
          const { groupChat: r, participants: n } = await (0,
          s.ensureGroupAndParticipants)(e, t)
          try {
            return (
              await a.demoteCommunityParticipants(r, n),
              { participants: t, success: !0 }
            )
          } catch (e) {
            return { participants: t, success: !1, error: e }
          }
        }
      },
      33110: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getParticipants = void 0)
        const n = r(41687),
          o = r(52757)
        t.getParticipants = async function (e) {
          const t = (0, n.assertWid)(e)
          return (0, o.getCommunityParticipants)(t)
        }
      },
      5728: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeSubgroups =
            t.promoteParticipants =
            t.getParticipants =
            t.demoteParticipants =
            t.deactivate =
            t.create =
            t.addSubgroups =
              void 0)
        var n = r(94605)
        Object.defineProperty(t, "addSubgroups", {
          enumerable: !0,
          get: function () {
            return n.addSubgroups
          },
        })
        var o = r(70378)
        Object.defineProperty(t, "create", {
          enumerable: !0,
          get: function () {
            return o.create
          },
        })
        var i = r(64920)
        Object.defineProperty(t, "deactivate", {
          enumerable: !0,
          get: function () {
            return i.deactivate
          },
        })
        var s = r(58092)
        Object.defineProperty(t, "demoteParticipants", {
          enumerable: !0,
          get: function () {
            return s.demoteParticipants
          },
        })
        var a = r(33110)
        Object.defineProperty(t, "getParticipants", {
          enumerable: !0,
          get: function () {
            return a.getParticipants
          },
        })
        var u = r(84498)
        Object.defineProperty(t, "promoteParticipants", {
          enumerable: !0,
          get: function () {
            return u.promoteParticipants
          },
        })
        var c = r(53650)
        Object.defineProperty(t, "removeSubgroups", {
          enumerable: !0,
          get: function () {
            return c.removeSubgroups
          },
        })
      },
      84498: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.promoteParticipants = void 0)
        const s = r(64456),
          a = i(r(52757))
        t.promoteParticipants = async function (e, t) {
          const { groupChat: r, participants: n } = await (0,
          s.ensureGroupAndParticipants)(e, t)
          return a.promoteCommunityParticipants(r, n)
        }
      },
      53650: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeSubgroups = void 0)
        const n = r(41687),
          o = r(52757)
        t.removeSubgroups = async function (e, t) {
          Array.isArray(t) || (t = [t])
          const r = (0, n.assertWid)(e),
            i = t.map(n.assertWid)
          return await (0, o.sendUnlinkSubgroups)({
            parentGroupId: r,
            subgroupIds: i,
          })
        }
      },
      83874: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }), o(r(5728), t)
      },
      10896: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultConfig = void 0),
          (t.defaultConfig = {
            deviceName: !1,
            liveLocationLimit: 10,
            disableGoogleAnalytics: !1,
            googleAnalyticsId: null,
            googleAnalyticsUserProperty: {},
            linkPreviewApiServers: null,
            poweredBy: "WA-JS",
            sendStatusToDevice: !1,
            syncAllStatus: !0,
          })
      },
      91491: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.config = void 0)
        const n = r(13691),
          o = r(10896),
          i = window.WPPConfig || {},
          s = Object.assign(Object.assign({}, o.defaultConfig), i),
          a = (e = []) => ({
            get: (t, r) =>
              "isProxy" == r ||
              ("object" == typeof t[r] && null != t[r]
                ? new Proxy(t[r], a([...e, r]))
                : t[r]),
            set: (r, o, i) => {
              r[o] = i
              try {
                n.internalEv.emitAsync("config.update", {
                  config: t.config,
                  key: o,
                  path: [...e, o],
                  target: r,
                  value: i,
                })
              } catch (e) {}
              return !0
            },
          })
        ;(t.config = new Proxy(s, a())), (window.WPPConfig = t.config)
      },
      58293: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(21899),
          r(87589),
          r(75676),
          r(77679),
          r(26),
          r(28952),
          r(19516),
          r(80739),
          r(96498),
          r(17459)
      },
      21899: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(72927)
        a.onInjected(function () {
          const e = async () => {
            const e = await (0, c.getAuthCode)().catch(() => null)
            s.internalEv.emit("conn.auth_code_change", e)
          }
          e(), u.Conn.on("change:ref", e)
        })
      },
      87589: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(72927)
        a.onInjected(function () {
          let e = (0, c.isAuthenticated)()
          const t = async () => {
            e || (s.internalEv.emit("conn.authenticated"), (e = !1))
          }
          u.Cmd.isMainLoaded ? t() : u.Cmd.on("main_loaded", t),
            u.Cmd.on("logout", () => {
              e = !1
            })
        })
      },
      75676: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(function () {
          u.Cmd.on("logout", () => s.internalEv.emit("conn.logout"))
        })
      },
      77679: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(60397)
        a.onInjected(function () {
          const e = setInterval(() => {
            ;(0, u.isMainInit)() &&
              (clearInterval(e), s.internalEv.emit("conn.main_init"))
          }, 100)
        })
      },
      26: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(function () {
          const e = async () => {
            s.internalEv.emit("conn.main_loaded")
          }
          u.Cmd.isMainLoaded ? e() : u.Cmd.on("main_loaded", e)
        })
      },
      28952: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(function () {
          const e = async () => {
            s.internalEv.emit("conn.main_ready")
          }
          "MAIN" === u.Stream.mode
            ? e()
            : u.Cmd.on("main_stream_mode_ready_legacy", e)
        })
      },
      19516: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(function () {
          const e = async () => {
            s.internalEv.emit("conn.needs_update")
          }
          u.Stream.needsUpdate ? e() : u.Stream.on("change:needsUpdate", e)
        })
      },
      80739: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(function () {
          u.NetworkStatus.on("change:online", (e, t) => {
            s.internalEv.emit("conn.online", t)
          })
        })
      },
      96498: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(72927)
        a.onInjected(function () {
          const e = async () => {
            ;(0, c.isIdle)() && s.internalEv.emit("conn.qrcode_idle")
          }
          e(), u.Socket.on("change:state", e)
        })
      },
      17459: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647),
          c = r(89763),
          l = r(72927)
        a.onInjected(function () {
          let e = !1
          const t = async () => {
            ;(0, l.isAuthenticated)()
              ? (e = !1)
              : e ||
                (u.Socket.state !== c.SOCKET_STATE.UNPAIRED &&
                  u.Socket.state !== c.SOCKET_STATE.UNPAIRED_IDLE) ||
                ((e = !0), s.internalEv.emit("conn.require_auth"))
          }
          t(), u.Socket.on("change:state", t)
        })
      },
      28904: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.genLinkDeviceCodeForPhoneNumber = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(60397)
        t.genLinkDeviceCodeForPhoneNumber = async function (e, t = !0) {
          if ((0, i.isAuthenticated)())
            throw new n.WPPError(
              "cannot_get_code_for_already_authenticated",
              "Can't get code for already authenticated user"
            )
          return (
            await o.functions.initializeAltDeviceLinking(),
            await o.functions.genLinkDeviceCodeForPhoneNumber(e, t)
          )
        }
      },
      11102: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getAuthCode = void 0)
        const n = r(14647),
          o = r(83703),
          i = r(60397)
        t.getAuthCode = async function () {
          if (
            !n.Conn.ref ||
            n.Conn.connected ||
            (0, i.isAuthenticated)() ||
            (0, i.isRegistered)()
          )
            return null
          const e = n.Conn.ref
          if ((0, i.isMultiDevice)()) {
            const t = await o.waSignalStore.getRegistrationInfo(),
              r = await o.waNoiseInfo.get(),
              i = n.Base64.encodeB64(r.staticKeyPair.pubKey),
              s = n.Base64.encodeB64(t.identityKeyPair.pubKey),
              a = await Promise.resolve(o.adv.getADVSecretKey()),
              u = [e, i, s, a].join(",")
            return {
              type: "multidevice",
              ref: e,
              staticKeyPair: i,
              identityKeyPair: s,
              secretKey: a,
              fullCode: u,
            }
          }
          return null
        }
      },
      11057: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getHistorySyncProgress = void 0)
        const s = i(r(52757))
        t.getHistorySyncProgress = function () {
          const e = s.getHistorySyncProgress()
          return {
            progress: e.progress,
            paused: e.paused || !1,
            inProgress: e.inProgress || !1,
          }
        }
      },
      94452: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMyDeviceId = void 0)
        const n = r(14647)
        t.getMyDeviceId = function () {
          return n.UserPrefs.getMe()
        }
      },
      64149: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMyUserId = void 0)
        const n = r(14647)
        t.getMyUserId = function () {
          return n.UserPrefs.getMaybeMeUser()
        }
      },
      13158: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getPlatform = void 0)
        const n = r(14647)
        t.getPlatform = function () {
          return n.Conn.platform
        }
      },
      60397: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setMultiDevice =
            t.setLimit =
            t.setKeepAlive =
            t.refreshQR =
            t.needsUpdate =
            t.markUnavailable =
            t.markAvailable =
            t.logout =
            t.joinWebBeta =
            t.isRegistered =
            t.isOnline =
            t.isMultiDevice =
            t.isMainReady =
            t.isMainLoaded =
            t.isMainInit =
            t.isIdle =
            t.isAuthenticated =
            t.getPlatform =
            t.getMyUserId =
            t.getMyDeviceId =
            t.getHistorySyncProgress =
            t.getAuthCode =
            t.genLinkDeviceCodeForPhoneNumber =
              void 0)
        var n = r(28904)
        Object.defineProperty(t, "genLinkDeviceCodeForPhoneNumber", {
          enumerable: !0,
          get: function () {
            return n.genLinkDeviceCodeForPhoneNumber
          },
        })
        var o = r(11102)
        Object.defineProperty(t, "getAuthCode", {
          enumerable: !0,
          get: function () {
            return o.getAuthCode
          },
        })
        var i = r(11057)
        Object.defineProperty(t, "getHistorySyncProgress", {
          enumerable: !0,
          get: function () {
            return i.getHistorySyncProgress
          },
        })
        var s = r(94452)
        Object.defineProperty(t, "getMyDeviceId", {
          enumerable: !0,
          get: function () {
            return s.getMyDeviceId
          },
        })
        var a = r(64149)
        Object.defineProperty(t, "getMyUserId", {
          enumerable: !0,
          get: function () {
            return a.getMyUserId
          },
        })
        var u = r(13158)
        Object.defineProperty(t, "getPlatform", {
          enumerable: !0,
          get: function () {
            return u.getPlatform
          },
        })
        var c = r(41818)
        Object.defineProperty(t, "isAuthenticated", {
          enumerable: !0,
          get: function () {
            return c.isAuthenticated
          },
        })
        var l = r(76243)
        Object.defineProperty(t, "isIdle", {
          enumerable: !0,
          get: function () {
            return l.isIdle
          },
        })
        var d = r(89786)
        Object.defineProperty(t, "isMainInit", {
          enumerable: !0,
          get: function () {
            return d.isMainInit
          },
        })
        var f = r(50849)
        Object.defineProperty(t, "isMainLoaded", {
          enumerable: !0,
          get: function () {
            return f.isMainLoaded
          },
        })
        var p = r(65877)
        Object.defineProperty(t, "isMainReady", {
          enumerable: !0,
          get: function () {
            return p.isMainReady
          },
        })
        var g = r(63282)
        Object.defineProperty(t, "isMultiDevice", {
          enumerable: !0,
          get: function () {
            return g.isMultiDevice
          },
        })
        var m = r(51170)
        Object.defineProperty(t, "isOnline", {
          enumerable: !0,
          get: function () {
            return m.isOnline
          },
        })
        var y = r(35177)
        Object.defineProperty(t, "isRegistered", {
          enumerable: !0,
          get: function () {
            return y.isRegistered
          },
        })
        var b = r(75365)
        Object.defineProperty(t, "joinWebBeta", {
          enumerable: !0,
          get: function () {
            return b.joinWebBeta
          },
        })
        var h = r(9135)
        Object.defineProperty(t, "logout", {
          enumerable: !0,
          get: function () {
            return h.logout
          },
        })
        var v = r(62749)
        Object.defineProperty(t, "markAvailable", {
          enumerable: !0,
          get: function () {
            return v.markAvailable
          },
        }),
          Object.defineProperty(t, "markUnavailable", {
            enumerable: !0,
            get: function () {
              return v.markUnavailable
            },
          })
        var _ = r(12709)
        Object.defineProperty(t, "needsUpdate", {
          enumerable: !0,
          get: function () {
            return _.needsUpdate
          },
        })
        var M = r(27573)
        Object.defineProperty(t, "refreshQR", {
          enumerable: !0,
          get: function () {
            return M.refreshQR
          },
        })
        var P = r(22987)
        Object.defineProperty(t, "setKeepAlive", {
          enumerable: !0,
          get: function () {
            return P.setKeepAlive
          },
        })
        var w = r(52122)
        Object.defineProperty(t, "setLimit", {
          enumerable: !0,
          get: function () {
            return w.setLimit
          },
        })
        var O = r(15610)
        Object.defineProperty(t, "setMultiDevice", {
          enumerable: !0,
          get: function () {
            return O.setMultiDevice
          },
        })
      },
      41818: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isAuthenticated = void 0)
        const s = i(r(52757))
        t.isAuthenticated = function () {
          return s.isAuthenticated()
        }
      },
      76243: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isIdle = void 0)
        const n = r(14647),
          o = r(89763)
        t.isIdle = function () {
          return n.Socket.state === o.SOCKET_STATE.UNPAIRED_IDLE
        }
      },
      89786: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isMainInit = void 0),
          (t.isMainInit = function () {
            var e
            return Boolean(
              null === (e = window.Debug) || void 0 === e ? void 0 : e.VERSION
            )
          })
      },
      50849: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isMainLoaded = void 0)
        const n = r(14647)
        t.isMainLoaded = function () {
          return n.Cmd.isMainLoaded
        }
      },
      65877: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isMainReady = void 0)
        const n = r(13691)
        let o = !1
        n.internalEv.once("conn.main_ready", () => {
          o = !0
        }),
          (t.isMainReady = function () {
            return o
          })
      },
      63282: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isMultiDevice = void 0),
          (t.isMultiDevice = function () {
            return !0
          })
      },
      51170: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isOnline = void 0)
        const n = r(14647)
        t.isOnline = function () {
          return n.NetworkStatus.online
        }
      },
      35177: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isRegistered = void 0)
        const s = i(r(52757))
        t.isRegistered = function () {
          return s.isRegistered()
        }
      },
      75365: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.joinWebBeta = void 0)
        const n = r(62857),
          o = r(52757)
        t.joinWebBeta = async function (e) {
          const t = await (0, o.getWhatsAppWebExternalBetaJoinedIdb)()
          if (t === e) return t
          if ("boolean" != typeof e)
            throw new n.WPPError(
              "value_not_a_boolean",
              `Value ${e || "<empty>"} is not a boolean`,
              { value: e }
            )
          return (
            await (0, o.changeOptInStatusForExternalWebBeta)(e),
            await (0, o.getWhatsAppWebExternalBetaJoinedIdb)()
          )
        }
      },
      9135: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.logout = void 0)
        const n = r(14647)
        t.logout = async function () {
          return (
            n.Socket.logout(),
            await new Promise((e) => {
              n.Cmd.once("logout", e)
            }),
            !0
          )
        }
      },
      62749: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.markUnavailable = t.markAvailable = void 0)
        const n = r(14647)
        async function o(e = !0) {
          return (
            Object.defineProperty(n.Stream, "available", {
              get: () => e,
              set: (t) => {
                t == e && n.Stream.trigger("change:available")
              },
              configurable: !0,
            }),
            e ? n.Stream.markAvailable() : n.Stream.markUnavailable(),
            !0
          )
        }
        ;(t.markAvailable = o),
          (t.markUnavailable = async function () {
            return o(!1)
          })
      },
      12709: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.needsUpdate = void 0)
        const n = r(14647)
        t.needsUpdate = function () {
          return n.Stream.needsUpdate
        }
      },
      27573: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.refreshQR = void 0)
        const n = r(13691),
          o = r(14647),
          i = r(60397)
        t.refreshQR = async function () {
          return (0, i.isAuthenticated)()
            ? null
            : ((0, i.isMultiDevice)() ? o.Cmd.refreshQR() : o.Socket.poke(),
              await n.internalEv
                .waitFor("conn.auth_code_change")
                .then((e) => e[0]))
        }
      },
      22987: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setKeepAlive = void 0)
        const r = document.hasFocus
        let n
        t.setKeepAlive = function (e = !0) {
          return (
            e
              ? ((document.hasFocus = () => !0),
                (n = setInterval(
                  () => document.dispatchEvent(new Event("scroll")),
                  15e3
                )))
              : ((document.hasFocus = r), n && (clearInterval(n), (n = null))),
            !!n
          )
        }
      },
      52122: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setLimit = void 0)
        const s = r(62857),
          a = i(r(1132)),
          u = r(14647),
          c = r(54993),
          l = r(52757)
        let d
        a.onFullReady(() => {
          ;(0, c.wrapModuleFunction)(l.getNumChatsPinned, (e, ...t) => {
            const r = e(...t)
            return d ? 1 : r
          })
        }),
          (t.setLimit = function (e, t) {
            switch (e) {
              case "maxMediaSize":
                if ("number" != typeof t || t > 73400320)
                  throw new s.WPPError(
                    "maxMediaSize_error",
                    "number" != typeof t
                      ? "Value type invalid!"
                      : "Maximum value is 70MB"
                  )
                return (u.ServerProps.media = t), u.ServerProps.media
              case "maxFileSize":
                if ("number" != typeof t || t > 1073741824)
                  throw new s.WPPError(
                    "maxFileSize_error",
                    "number" != typeof t
                      ? "Value type invalid!"
                      : "Maximum value is 1GB"
                  )
                return (
                  (u.ServerProps.maxFileSize = t), u.ServerProps.maxFileSize
                )
              case "maxShare":
                if ("number" != typeof t)
                  throw new s.WPPError("maxShare_error", "Value type invalid!")
                return (
                  (u.ServerProps.multicastLimitGlobal = t),
                  (u.ServerProps.frequentlyForwardedMax = t),
                  (u.ServerProps.frequentlyForwardedThreshold = t),
                  u.ServerProps.multicastLimitGlobal
                )
              case "statusVideoMaxDuration":
                if ("number" != typeof t)
                  throw new s.WPPError(
                    "statusVideoMaxDuration_error",
                    "Value type invalid!"
                  )
                return (
                  (u.ServerProps.statusVideoMaxDuration = t),
                  u.ServerProps.statusVideoMaxDuration
                )
              case "unlimitedPin":
                if ("boolean" != typeof t)
                  throw new s.WPPError(
                    "unlimitedPin_error",
                    "Value type invalid!"
                  )
                return (d = t || void 0), t
              default:
                throw new s.WPPError("setLimit_error", "Key type invalid!")
            }
          })
      },
      15610: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setMultiDevice = void 0)
        const n = r(14647)
        t.setMultiDevice = function (e = !0) {
          return e ? n.Cmd.upgradeToMDProd() : n.Cmd.downgradeWebclient(), !0
        }
      },
      72927: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(58293),
          o(r(60397), t),
          o(r(14282), t)
      },
      14282: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
      },
      93037: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.get = void 0)
        const n = r(41687),
          o = r(14647)
        t.get = async function (e) {
          const t = (0, n.assertWid)(e)
          return o.ContactStore.get(t)
        }
      },
      49738: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getBusinessProfile = void 0)
        const n = r(41687),
          o = r(14647)
        t.getBusinessProfile = async function (e) {
          const t = (0, n.assertWid)(e)
          return await o.BusinessProfileStore.fetchBizProfile(t)
        }
      },
      81676: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getCommonGroups = void 0)
        const n = r(14647)
        t.getCommonGroups = async function (e) {
          const t = n.ContactStore.get(e)
          return t
            ? (await n.functions.findCommonGroups(t))
                .getModelsArray()
                .map((e) => e.id)
            : []
        }
      },
      73871: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getProfilePictureUrl = void 0)
        const n = r(41687),
          o = r(14647)
        t.getProfilePictureUrl = async function (e, t = !0) {
          const r = (0, n.assertWid)(e),
            i = await o.ProfilePicThumbStore.find(r)
          if (i) return t ? i.imgFull : i.img
        }
      },
      23199: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getStatus = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(53141)
        t.getStatus = async function (e) {
          const t = (0, n.assertWid)(e)
          return (
            ((await (0, i.queryExists)(t)) &&
              (await o.StatusStore.find(t)).status) ||
            null
          )
        }
      },
      20941: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.queryExists =
            t.list =
            t.getStatus =
            t.getProfilePictureUrl =
            t.getCommonGroups =
            t.getBusinessProfile =
            t.get =
              void 0)
        var n = r(93037)
        Object.defineProperty(t, "get", {
          enumerable: !0,
          get: function () {
            return n.get
          },
        })
        var o = r(49738)
        Object.defineProperty(t, "getBusinessProfile", {
          enumerable: !0,
          get: function () {
            return o.getBusinessProfile
          },
        })
        var i = r(81676)
        Object.defineProperty(t, "getCommonGroups", {
          enumerable: !0,
          get: function () {
            return i.getCommonGroups
          },
        })
        var s = r(73871)
        Object.defineProperty(t, "getProfilePictureUrl", {
          enumerable: !0,
          get: function () {
            return s.getProfilePictureUrl
          },
        })
        var a = r(23199)
        Object.defineProperty(t, "getStatus", {
          enumerable: !0,
          get: function () {
            return a.getStatus
          },
        })
        var u = r(62041)
        Object.defineProperty(t, "list", {
          enumerable: !0,
          get: function () {
            return u.list
          },
        })
        var c = r(53141)
        Object.defineProperty(t, "queryExists", {
          enumerable: !0,
          get: function () {
            return c.queryExists
          },
        })
      },
      62041: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.list = void 0)
        const n = r(14647)
        t.list = async function (e = {}) {
          let t = n.ContactStore.getModelsArray().slice()
          if (
            (e.onlyMyContacts && (t = t.filter((e) => e.isMyContact)),
            e.withLabels)
          ) {
            const r = e.withLabels.map((e) => {
              const t = n.LabelStore.findFirst((t) => t.name === e)
              return t ? t.id : e
            })
            t = t.filter((e) => {
              var t
              return null === (t = e.labels) || void 0 === t
                ? void 0
                : t.some((e) => r.includes(e))
            })
          }
          return t
        }
      },
      53141: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.queryExists = void 0)
        const n = r(41687),
          o = r(52757),
          i = new Map()
        let s = null
        t.queryExists = async function (e) {
          const t = (0, n.assertWid)(e),
            r = t.toString()
          if (i.has(r)) return i.get(r)
          if (null === s) {
            const e = o.sendQueryExists.toString()
            s = !/`\+\$\{\w+\.toString\(\)\}`/.test(e)
          }
          let a = null
          if (s) {
            const t = (0, n.assertWid)(e),
              r = t.toString
            Object.defineProperty(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: () => `+${t._serialized}`,
            }),
              (a = await (0, o.sendQueryExists)(t).catch(() => null)),
              Object.defineProperty(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r,
              })
          }
          return (
            a || (a = await (0, o.sendQueryExists)(t).catch(() => null)),
            i.set(r, a),
            setTimeout(
              () => {
                i.delete(r)
              },
              a ? 3e5 : 15e3
            ),
            a
          )
        }
      },
      56191: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(54409),
          o(r(20941), t)
      },
      54409: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(14647)
        s.onInjected(function () {
          const e = {
            isMyContact: a.functions.getIsMyContact,
            mentionName: a.functions.getMentionName,
            notifyName: a.functions.getNotifyName,
            pnForLid: a.functions.getPnForLid,
            displayNameOrPnForLid: a.functions.getDisplayNameOrPnForLid,
            formattedPhone: a.functions.getFormattedPhone,
            userid: a.functions.getUserid,
            userhash: a.functions.getUserhash,
            searchName: a.functions.getSearchName,
            searchVerifiedName: a.functions.getSearchVerifiedName,
            header: a.functions.getHeader,
            isMe: a.functions.getIsMe,
            isUser: a.functions.getIsUser,
            isGroup: a.functions.getIsGroup,
            isBroadcast: a.functions.getIsBroadcast,
            isPSA: a.functions.getIsPSA,
            isIAS: a.functions.getIsIAS,
            isSupportAccount: a.functions.getIsSupportAccount,
            formattedShortNameWithNonBreakingSpaces:
              a.functions.getFormattedShortNameWithNonBreakingSpaces,
            formattedShortName: a.functions.getFormattedShortName,
            formattedName: a.functions.getFormattedName,
            formattedUser: a.functions.getFormattedUser,
            isWAContact: a.functions.getIsWAContact,
            canRequestPhoneNumber: a.functions.getCanRequestPhoneNumber,
            showBusinessCheckmarkAsPrimary:
              a.functions.getShowBusinessCheckmarkAsPrimary,
            showBusinessCheckmarkAsSecondary:
              a.functions.getShowBusinessCheckmarkAsSecondary,
            showBusinessCheckmarkInChatlist:
              a.functions.getShowBusinessCheckmarkInChatlist,
            isDisplayNameApproved: a.functions.getIsDisplayNameApproved,
            shouldForceBusinessUpdate: a.functions.getShouldForceBusinessUpdate,
          }
          for (const t in e) {
            const r = e[t]
            void 0 === a.ContactModel.prototype[t] &&
              Object.defineProperty(a.ContactModel.prototype, t, {
                get: function () {
                  return r(this)
                },
                configurable: !0,
              })
          }
        })
      },
      80687: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(91491),
          a = i(r(1132))
        a.onInjected(() => {
          if (!s.config.deviceName) return
          const e = a.search((e) => e.default.info && e.default.hardRefresh)
          if (e) {
            const t = e.default.info()
            ;(t.os = s.config.deviceName),
              (t.version = void 0),
              (t.name = void 0),
              (t.ua = void 0),
              (e.default.info = () => t)
          }
        })
      },
      78601: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(53011)
        t.EventEmitter = n.EventEmitter2
      },
      11426: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
      },
      13691: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.waitFor =
            t.stopListeningTo =
            t.setMaxListeners =
            t.removeListener =
            t.removeAllListeners =
            t.prependOnceListener =
            t.prependMany =
            t.prependListener =
            t.prependAny =
            t.once =
            t.onAny =
            t.on =
            t.offAny =
            t.off =
            t.many =
            t.listenersAny =
            t.listeners =
            t.listenerCount =
            t.listenTo =
            t.hasListeners =
            t.getMaxListeners =
            t.eventNames =
            t.emitAsync =
            t.emit =
            t.addListener =
            t.EventEmitter =
            t.ev =
            t.internalEv =
              void 0)
        const s = i(r(17833)),
          a = r(78601)
        Object.defineProperty(t, "EventEmitter", {
          enumerable: !0,
          get: function () {
            return a.EventEmitter
          },
        }),
          o(r(11426), t)
        const u = (0, s.default)("WA-JS:event")
        ;(t.internalEv = new a.EventEmitter({ maxListeners: 1 / 0 })),
          (t.ev = new a.EventEmitter({ maxListeners: 1 / 0 })),
          t.internalEv.onAny((e, ...r) => {
            t.ev.emit(e, ...r), u.enabled && u(e, ...r)
          }),
          (t.addListener = t.ev.addListener.bind(t.ev)),
          (t.emit = t.ev.emit.bind(t.ev)),
          (t.emitAsync = t.ev.emitAsync.bind(t.ev)),
          (t.eventNames = t.ev.eventNames.bind(t.ev)),
          (t.getMaxListeners = t.ev.getMaxListeners.bind(t.ev)),
          (t.hasListeners = t.ev.hasListeners.bind(t.ev)),
          (t.listenTo = t.ev.listenTo.bind(t.ev)),
          (t.listenerCount = t.ev.listenerCount.bind(t.ev)),
          (t.listeners = t.ev.listeners.bind(t.ev)),
          (t.listenersAny = t.ev.listenersAny.bind(t.ev)),
          (t.many = t.ev.many.bind(t.ev)),
          (t.off = t.ev.off.bind(t.ev)),
          (t.offAny = t.ev.offAny.bind(t.ev)),
          (t.on = t.ev.on.bind(t.ev)),
          (t.onAny = t.ev.onAny.bind(t.ev)),
          (t.once = t.ev.once.bind(t.ev)),
          (t.prependAny = t.ev.prependAny.bind(t.ev)),
          (t.prependListener = t.ev.prependListener.bind(t.ev)),
          (t.prependMany = t.ev.prependMany.bind(t.ev)),
          (t.prependOnceListener = t.ev.prependOnceListener.bind(t.ev)),
          (t.removeAllListeners = t.ev.removeAllListeners.bind(t.ev)),
          (t.removeListener = t.ev.removeListener.bind(t.ev)),
          (t.setMaxListeners = t.ev.setMaxListeners.bind(t.ev)),
          (t.stopListeningTo = t.ev.stopListeningTo.bind(t.ev)),
          (t.waitFor = t.ev.waitFor.bind(t.ev))
      },
      86288: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), r(39893)
      },
      39893: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(54993),
          c = r(52757)
        a.onFullReady(function () {
          const e = ["add", "remove", "demote", "promote"]
          ;(0, u.wrapModuleFunction)(c.updateDBForGroupAction, (t, ...r) => {
            const [n, o] = r
            let i = o.actionType || o.action
            return (
              e.includes(i) &&
                queueMicrotask(() => {
                  var e
                  const t = o.participants.map((e) => ("id" in e ? e.id : e))
                  "add" !== i || (!o.isInvite && "invite" !== o.reason)
                    ? "remove" === i &&
                      t.some((e) => e.equals(n.author)) &&
                      (i = "leave")
                    : (i = "join"),
                    s.internalEv.emit("group.participant_changed", {
                      author:
                        null === (e = n.author) || void 0 === e
                          ? void 0
                          : e.toString(),
                      authorPushName: n.pushname,
                      groupId: n.chatId.toString(),
                      action: i,
                      operation: o.actionType || o.action,
                      participants: t.map((e) => e.toString()),
                    })
                }),
              t(...r)
            )
          })
        })
      },
      7103: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addParticipants = void 0)
        const n = r(38385),
          o = r(62857),
          i = r(14647),
          s = r(97944),
          a = {
            200: "OK",
            403: "Can't join this group because the number was restricted it.",
            409: "Can't join this group because the number is already a member of it.",
          }
        t.addParticipants = async function (e, t) {
          var r, u
          const { groupChat: c, participants: l } = await (0,
          s.ensureGroupAndParticipants)(e, t, !0)
          let d = []
          d = (0, n.compare)(self.Debug.VERSION, "2.2320.0", ">=")
            ? (
                null === (r = c.groupMetadata) || void 0 === r
                  ? void 0
                  : r.isLidAddressingMode
              )
              ? l.map((e) => ({
                  phoneNumber: e.id,
                  lid: i.functions.getCurrentLid(e.id),
                }))
              : l.map((e) => ({ phoneNumber: e.id }))
            : (
                null === (u = c.groupMetadata) || void 0 === u
                  ? void 0
                  : u.isLidAddressingMode
              )
            ? l.map((e) => i.functions.getCurrentLid(e.id))
            : l.map((e) => e.id)
          const f = await i.functions.sendAddParticipants(c.id, d)
          if (f.status >= 400)
            throw new o.WPPError(
              "group_add_participant_error",
              "Failed to add participants to the group",
              { groupId: e, participantsIds: t }
            )
          const p = {}
          for (const e of f.participants || []) {
            let t = null,
              r = null,
              n = null,
              s = null
            if ("userWid" in e)
              (t = e.userWid.toString()),
                (r = e.code),
                (n = e.invite_code),
                (s = e.invite_code_exp)
            else {
              t = Object.keys(e)[0]
              const o = e[t]
              ;(r = o.code), (n = o.invite_code), (s = o.invite_code_exp)
            }
            if ("403" !== r)
              try {
                i.ContactStore.gadd((0, o.createWid)(t), { silent: !0 })
              } catch (e) {}
            p[t] = {
              wid: t,
              code: Number(r),
              message: a[Number(r)] || "Can't Join., unknown error",
              invite_code: n,
              invite_code_exp: Number(s) || null,
            }
          }
          return p
        }
      },
      57139: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.approve = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(52757)
        t.approve = async function (e, t) {
          ;(e = (0, n.assertWid)(e)), Array.isArray(t) || (t = [t])
          const r = t.map(n.assertWid)
          try {
            return await (0, i.membershipApprovalRequestAction)(e, r, "Approve")
          } catch (t) {
            throw new o.WPPError(
              "error_on_accept_membership_request",
              `Error on accept member on group ${e.toString()}`
            )
          }
        }
      },
      71637: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canAdd = void 0)
        const n = r(2818)
        t.canAdd = async function (e) {
          return (
            await (0, n.ensureGroup)(e)
          ).groupMetadata.participants.canAdd()
        }
      },
      976: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canDemote = void 0)
        const n = r(2818)
        t.canDemote = async function (e, t) {
          const { groupChat: r, participants: o } = await (0,
          n.ensureGroupAndParticipants)(e, t)
          return o.every((e) => r.groupMetadata.participants.canDemote(e))
        }
      },
      88818: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canPromote = void 0)
        const n = r(2818)
        t.canPromote = async function (e, t) {
          const { groupChat: r, participants: o } = await (0,
          n.ensureGroupAndParticipants)(e, t)
          return o.every((e) => r.groupMetadata.participants.canPromote(e))
        }
      },
      8932: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canRemove = void 0)
        const n = r(2818)
        t.canRemove = async function (e, t) {
          const { groupChat: r, participants: o } = await (0,
          n.ensureGroupAndParticipants)(e, t)
          return o.every((e) => r.groupMetadata.participants.canRemove(e))
        }
      },
      20292: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.create = void 0)
        const s = r(41687),
          a = i(r(74023)),
          u = i(r(56191)),
          c = r(62857),
          l = r(14647),
          d = i(r(52757))
        t.create = async function (e, t, r) {
          var n
          Array.isArray(t) || (t = [t])
          const o = t.map(s.assertWid),
            i = l.UserPrefs.getMaybeMeUser(),
            f = []
          for (const e of o) {
            if (i.equals(e)) continue
            const t = l.ContactStore.get(e)
            if (t) {
              f.push(t.id)
              continue
            }
            const r = await u.queryExists(e)
            if (!r)
              throw new c.WPPError(
                "participant_not_exists",
                "Participant not exists",
                { id: e }
              )
            i.equals(r.wid) || f.push(r.wid)
          }
          const p = r ? (0, s.assertWid)(r) : void 0,
            g = await d.sendCreateGroup(e, f, void 0, p)
          if (g.gid) {
            const e = await a.find(g.gid)
            !1 !==
              (null === (n = e.groupMetadata) || void 0 === n
                ? void 0
                : n.stale) &&
              (await new Promise((t) => {
                e.on("change:groupMetadata.stale", function r() {
                  var n
                  !1 ===
                    (null === (n = e.groupMetadata) || void 0 === n
                      ? void 0
                      : n.stale) &&
                    (t(), e.off("change:groupMetadata.stale", r))
                })
              }))
          }
          const m = {}
          for (const e of g.participants || []) {
            let t = null,
              r = null,
              n = null,
              o = null
            if ("userWid" in e)
              (t = e.userWid.toString()),
                (r = e.code),
                (n = e.invite_code),
                (o = e.invite_code_exp)
            else {
              t = Object.keys(e)[0]
              const i = e[t]
              ;(r = i.code), (n = i.invite_code), (o = i.invite_code_exp)
            }
            m[t] = {
              wid: t,
              code: Number(r),
              invite_code: n,
              invite_code_exp: Number(o) || null,
            }
          }
          return { gid: g.gid, participants: m }
        }
      },
      42490: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.demoteParticipants = void 0)
        const s = r(62857),
          a = i(r(52757)),
          u = r(97944)
        t.demoteParticipants = async function (e, t) {
          const { groupChat: r, participants: n } = await (0,
          u.ensureGroupAndParticipants)(e, t)
          if (
            n.some((e) => {
              var t
              return !(null === (t = r.groupMetadata) || void 0 === t
                ? void 0
                : t.participants.canDemote(e))
            })
          )
            throw new s.WPPError(
              "group_participant_is_already_not_a_group_admin",
              `Group ${r.id._serialized}: Group participant is already not a group admin`
            )
          return a.demoteParticipants(r, n)
        }
      },
      23527: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ensureGroup = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647),
          s = r(2818)
        t.ensureGroup = async function (e, t = !1) {
          const r = (0, n.assertGetChat)(e)
          if (!r.isGroup)
            throw new o.WPPError(
              "not_a_group",
              `Chat ${r.id._serialized} is not a group`
            )
          if (
            (await i.GroupMetadataStore.find(r.id),
            t && !(await (0, s.iAmAdmin)(e)))
          )
            throw new o.WPPError(
              "group_you_are_not_admin",
              `You are not admin in ${r.id._serialized}`
            )
          return r
        }
      },
      97944: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ensureGroupAndParticipants = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647),
          s = r(2818)
        t.ensureGroupAndParticipants = async function (e, t, r = !1) {
          const a = await (0, s.ensureGroup)(e, !0)
          Array.isArray(t) || (t = [t])
          const u = t.map(n.assertWid).map((e) => {
            var t
            let n =
              null === (t = a.groupMetadata) || void 0 === t
                ? void 0
                : t.participants.get(e)
            if ((!n && r && (n = new i.ParticipantModel({ id: e })), !n))
              throw new o.WPPError(
                "group_participant_not_found",
                `Group ${a.id._serialized}: Participant '${n}' not found`
              )
            return n
          })
          return { groupChat: a, participants: u }
        }
      },
      26219: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getAllGroups = void 0)
        const n = r(74023),
          o = r(52757)
        t.getAllGroups = async function () {
          const e = [],
            t = await (0, o.queryAllGroups)()
          for (const r of t) e.push((0, n.get)(r.id))
          return e
        }
      },
      45195: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getGroupInfoFromInviteCode = void 0)
        const n = r(62857),
          o = r(52757)
        t.getGroupInfoFromInviteCode = async function (e) {
          var t, r, i
          e = (e = (e = (e = e.replace("chat.whatsapp.com/", "")).replace(
            "invite/",
            ""
          )).replace("https://", "")).replace("http://", "")
          const s = await (0, o.sendQueryGroupInvite)(e).catch(() => null)
          if (!s)
            throw new n.WPPError("invalid_invite_code", "Invalid Invite Code", {
              inviteCode: e,
            })
          return Object.assign(Object.assign({}, s), {
            descOwner:
              null === (t = s.descOwner) || void 0 === t
                ? void 0
                : t.toString(),
            id: s.id.toString(),
            owner:
              null === (r = s.owner) || void 0 === r ? void 0 : r.toString(),
            participants: s.participants.map((e) =>
              Object.assign(Object.assign({}, e), { id: e.id.toString() })
            ),
            subjectOwner:
              null === (i = s.subjectOwner) || void 0 === i
                ? void 0
                : i.toString(),
          })
        }
      },
      98083: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getGroupSizeLimit = void 0)
        const n = r(14647)
        t.getGroupSizeLimit = async function () {
          return n.functions.getGroupSizeLimit()
        }
      },
      55062: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getInviteCode = void 0)
        const n = r(52757),
          o = r(2818)
        t.getInviteCode = async function (e) {
          const t = await (0, o.ensureGroup)(e, !0)
          return await (0, n.sendQueryGroupInviteCode)(t.id)
        }
      },
      4752: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMembershipRequests = void 0)
        const n = r(41687),
          o = r(14647),
          i = r(52757)
        t.getMembershipRequests = async function (e) {
          return (
            (e = (0, n.assertWid)(e)),
            await o.GroupMetadataStore.find(e),
            await (0, i.getMembershipApprovalRequests)(e)
          )
        }
      },
      35528: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getParticipants = void 0)
        const n = r(2818)
        t.getParticipants = async function (e) {
          return (
            await (0, n.ensureGroup)(e)
          ).groupMetadata.participants.getModelsArray()
        }
      },
      68780: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.iAmAdmin = void 0)
        const n = r(2818)
        t.iAmAdmin = async function (e) {
          return (
            await (0, n.ensureGroup)(e)
          ).groupMetadata.participants.iAmAdmin()
        }
      },
      60641: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.iAmMember = void 0)
        const n = r(2818)
        t.iAmMember = async function (e) {
          return (
            await (0, n.ensureGroup)(e)
          ).groupMetadata.participants.iAmMember()
        }
      },
      81484: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.iAmRestrictedMember = void 0)
        const n = r(2818)
        t.iAmRestrictedMember = async function (e) {
          return (
            await (0, n.ensureGroup)(e)
          ).groupMetadata.participants.iAmRestrictedMember()
        }
      },
      94173: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.iAmSuperAdmin = void 0)
        const n = r(2818)
        t.iAmSuperAdmin = async function (e) {
          return (
            await (0, n.ensureGroup)(e)
          ).groupMetadata.participants.iAmMember()
        }
      },
      2818: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setSubject =
            t.setProperty =
            t.GroupProperty =
            t.setIcon =
            t.setDescription =
            t.revokeInviteCode =
            t.removeParticipants =
            t.removeIcon =
            t.reject =
            t.promoteParticipants =
            t.leave =
            t.join =
            t.iAmSuperAdmin =
            t.iAmRestrictedMember =
            t.iAmMember =
            t.iAmAdmin =
            t.getParticipants =
            t.getMembershipRequests =
            t.getInviteCode =
            t.getGroupSizeLimit =
            t.getGroupInfoFromInviteCode =
            t.getAllGroups =
            t.ensureGroupAndParticipants =
            t.ensureGroup =
            t.demoteParticipants =
            t.create =
            t.canRemove =
            t.canPromote =
            t.canDemote =
            t.canAdd =
            t.approve =
            t.addParticipants =
              void 0)
        var n = r(7103)
        Object.defineProperty(t, "addParticipants", {
          enumerable: !0,
          get: function () {
            return n.addParticipants
          },
        })
        var o = r(57139)
        Object.defineProperty(t, "approve", {
          enumerable: !0,
          get: function () {
            return o.approve
          },
        })
        var i = r(71637)
        Object.defineProperty(t, "canAdd", {
          enumerable: !0,
          get: function () {
            return i.canAdd
          },
        })
        var s = r(976)
        Object.defineProperty(t, "canDemote", {
          enumerable: !0,
          get: function () {
            return s.canDemote
          },
        })
        var a = r(88818)
        Object.defineProperty(t, "canPromote", {
          enumerable: !0,
          get: function () {
            return a.canPromote
          },
        })
        var u = r(8932)
        Object.defineProperty(t, "canRemove", {
          enumerable: !0,
          get: function () {
            return u.canRemove
          },
        })
        var c = r(20292)
        Object.defineProperty(t, "create", {
          enumerable: !0,
          get: function () {
            return c.create
          },
        })
        var l = r(42490)
        Object.defineProperty(t, "demoteParticipants", {
          enumerable: !0,
          get: function () {
            return l.demoteParticipants
          },
        })
        var d = r(23527)
        Object.defineProperty(t, "ensureGroup", {
          enumerable: !0,
          get: function () {
            return d.ensureGroup
          },
        })
        var f = r(97944)
        Object.defineProperty(t, "ensureGroupAndParticipants", {
          enumerable: !0,
          get: function () {
            return f.ensureGroupAndParticipants
          },
        })
        var p = r(26219)
        Object.defineProperty(t, "getAllGroups", {
          enumerable: !0,
          get: function () {
            return p.getAllGroups
          },
        })
        var g = r(45195)
        Object.defineProperty(t, "getGroupInfoFromInviteCode", {
          enumerable: !0,
          get: function () {
            return g.getGroupInfoFromInviteCode
          },
        })
        var m = r(98083)
        Object.defineProperty(t, "getGroupSizeLimit", {
          enumerable: !0,
          get: function () {
            return m.getGroupSizeLimit
          },
        })
        var y = r(55062)
        Object.defineProperty(t, "getInviteCode", {
          enumerable: !0,
          get: function () {
            return y.getInviteCode
          },
        })
        var b = r(4752)
        Object.defineProperty(t, "getMembershipRequests", {
          enumerable: !0,
          get: function () {
            return b.getMembershipRequests
          },
        })
        var h = r(35528)
        Object.defineProperty(t, "getParticipants", {
          enumerable: !0,
          get: function () {
            return h.getParticipants
          },
        })
        var v = r(68780)
        Object.defineProperty(t, "iAmAdmin", {
          enumerable: !0,
          get: function () {
            return v.iAmAdmin
          },
        })
        var _ = r(60641)
        Object.defineProperty(t, "iAmMember", {
          enumerable: !0,
          get: function () {
            return _.iAmMember
          },
        })
        var M = r(81484)
        Object.defineProperty(t, "iAmRestrictedMember", {
          enumerable: !0,
          get: function () {
            return M.iAmRestrictedMember
          },
        })
        var P = r(94173)
        Object.defineProperty(t, "iAmSuperAdmin", {
          enumerable: !0,
          get: function () {
            return P.iAmSuperAdmin
          },
        })
        var w = r(84784)
        Object.defineProperty(t, "join", {
          enumerable: !0,
          get: function () {
            return w.join
          },
        })
        var O = r(3329)
        Object.defineProperty(t, "leave", {
          enumerable: !0,
          get: function () {
            return O.leave
          },
        })
        var j = r(10964)
        Object.defineProperty(t, "promoteParticipants", {
          enumerable: !0,
          get: function () {
            return j.promoteParticipants
          },
        })
        var S = r(28703)
        Object.defineProperty(t, "reject", {
          enumerable: !0,
          get: function () {
            return S.reject
          },
        })
        var x = r(34697)
        Object.defineProperty(t, "removeIcon", {
          enumerable: !0,
          get: function () {
            return x.removeIcon
          },
        })
        var C = r(84054)
        Object.defineProperty(t, "removeParticipants", {
          enumerable: !0,
          get: function () {
            return C.removeParticipants
          },
        })
        var I = r(43930)
        Object.defineProperty(t, "revokeInviteCode", {
          enumerable: !0,
          get: function () {
            return I.revokeInviteCode
          },
        })
        var k = r(29166)
        Object.defineProperty(t, "setDescription", {
          enumerable: !0,
          get: function () {
            return k.setDescription
          },
        })
        var E = r(99403)
        Object.defineProperty(t, "setIcon", {
          enumerable: !0,
          get: function () {
            return E.setIcon
          },
        })
        var A = r(76131)
        Object.defineProperty(t, "GroupProperty", {
          enumerable: !0,
          get: function () {
            return A.GroupProperty
          },
        }),
          Object.defineProperty(t, "setProperty", {
            enumerable: !0,
            get: function () {
              return A.setProperty
            },
          })
        var T = r(36520)
        Object.defineProperty(t, "setSubject", {
          enumerable: !0,
          get: function () {
            return T.setSubject
          },
        })
      },
      84784: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.join = void 0)
        const n = r(52757)
        t.join = async function (e) {
          return (
            (e = (e = (e = (e = e.replace("chat.whatsapp.com/", "")).replace(
              "invite/",
              ""
            )).replace("https://", "")).replace("http://", "")),
            { id: (await (0, n.sendJoinGroupViaInvite)(e)).toString() }
          )
        }
      },
      3329: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.leave = void 0)
        const n = r(52757),
          o = r(2818)
        t.leave = async function (e) {
          const t = await (0, o.ensureGroup)(e)
          return await (0, n.sendExitGroup)(t)
        }
      },
      10964: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.promoteParticipants = void 0)
        const s = r(62857),
          a = i(r(52757)),
          u = r(97944)
        t.promoteParticipants = async function (e, t) {
          const { groupChat: r, participants: n } = await (0,
          u.ensureGroupAndParticipants)(e, t)
          if (
            n.some((e) => {
              var t
              return !(null === (t = r.groupMetadata) || void 0 === t
                ? void 0
                : t.participants.canPromote(e))
            })
          )
            throw new s.WPPError(
              "group_participant_is_already_a_group_admin",
              `Group ${r.id._serialized}: Group participant is already a group admin`
            )
          return a.promoteParticipants(r, n)
        }
      },
      28703: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.reject = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(52757)
        t.reject = async function (e, t) {
          ;(e = (0, n.assertWid)(e)), Array.isArray(t) || (t = [t])
          const r = t.map(n.assertWid)
          try {
            return await (0, i.membershipApprovalRequestAction)(e, r, "Reject")
          } catch (t) {
            throw new o.WPPError(
              "error_on_reject_membership_request",
              `Error on reject member on group ${e.toString()}`
            )
          }
        }
      },
      34697: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeIcon = void 0)
        const n = r(14647),
          o = r(2818)
        t.removeIcon = async function (e) {
          const t = await (0, o.ensureGroup)(e)
          return 200 === (await n.functions.requestDeletePicture(t.id)).status
        }
      },
      84054: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeParticipants = void 0)
        const s = r(62857),
          a = i(r(52757)),
          u = r(97944)
        t.removeParticipants = async function (e, t) {
          const { groupChat: r, participants: n } = await (0,
          u.ensureGroupAndParticipants)(e, t)
          if (
            n.some((e) => {
              var t
              return !(null === (t = r.groupMetadata) || void 0 === t
                ? void 0
                : t.participants.canRemove(e))
            })
          )
            throw new s.WPPError(
              "group_participant_is_not_a_group_member",
              `Group ${r.id._serialized}: Group participant is not a group member`
            )
          return a.removeParticipants(r, n)
        }
      },
      43930: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.revokeInviteCode = void 0)
        const n = r(52757),
          o = r(2818)
        t.revokeInviteCode = async function (e) {
          const t = await (0, o.ensureGroup)(e, !0)
          return await (0, n.sendRevokeGroupInviteCode)(t.id)
        }
      },
      29166: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setDescription = void 0)
        const n = r(62857),
          o = r(52757),
          i = r(2818)
        t.setDescription = async function (e, t) {
          var r, s
          const a = await (0, i.ensureGroup)(e)
          if (
            !(null === (r = a.groupMetadata) || void 0 === r
              ? void 0
              : r.canSetDescription())
          )
            throw new n.WPPError(
              "you_are_not_allowed_set_group_description",
              `You are not allowed to set group description in ${a.id._serialized}`,
              { groupId: a.id.toString() }
            )
          const u = await Promise.resolve((0, o.randomMessageId)())
          return (
            await (0, o.sendSetGroupDescription)(
              a.id,
              t,
              u,
              null === (s = a.groupMetadata) || void 0 === s ? void 0 : s.descId
            ),
            (a.groupMetadata.descId = u),
            (a.groupMetadata.desc = t),
            !0
          )
        }
      },
      99403: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setIcon = void 0)
        const n = r(62857),
          o = r(52757),
          i = r(2818)
        t.setIcon = async function (e, t) {
          const r = await (0, i.ensureGroup)(e)
          if (await (0, i.iAmRestrictedMember)(e))
            throw new n.WPPError(
              "group_you_are_restricted_member",
              `You are a restricted member in ${r.id._serialized}`
            )
          const s = await (0, n.convertToFile)(t),
            a = await (0, n.resizeImage)(s, {
              width: 96,
              height: 96,
              mimeType: "image/jpeg",
              resize: "cover",
            }),
            u = await (0, n.resizeImage)(s, {
              width: 640,
              height: 640,
              mimeType: "image/jpeg",
              resize: "cover",
            }),
            c = await (0, n.blobToBase64)(a),
            l = await (0, n.blobToBase64)(u)
          return (0, o.sendSetPicture)(r.id, c, l)
        }
      },
      76131: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setProperty = t.GroupProperty = void 0)
        const n = r(62857),
          o = r(52757),
          i = r(2818)
        var s
        !(function (e) {
          ;(e.ANNOUNCEMENT = "announcement"),
            (e.EPHEMERAL = "ephemeral"),
            (e.RESTRICT = "restrict")
        })(s || (t.GroupProperty = s = {})),
          (t.setProperty = async function (e, t, r) {
            var a, u
            const c = await (0, i.ensureGroup)(e)
            if (
              t !== s.ANNOUNCEMENT &&
              !(null === (a = c.groupMetadata) || void 0 === a
                ? void 0
                : a.canSetGroupProperty())
            )
              throw new n.WPPError(
                "you_are_not_allowed_set_group_property",
                `You are not allowed to set property in ${c.id._serialized}`,
                { groupId: c.id.toString() }
              )
            if (
              t == s.ANNOUNCEMENT &&
              !(null === (u = c.groupMetadata) || void 0 === u
                ? void 0
                : u.canSetEphemeralSetting())
            )
              throw new n.WPPError(
                "you_are_not_allowed_set_ephemeral_setting",
                `You are not allowed to set ephemeral setting in ${c.id._serialized}`,
                { groupId: c.id.toString() }
              )
            if (t === s.EPHEMERAL) {
              if (
                (("boolean" != typeof r && 1 !== r) || (r = 604800),
                ![0, 86400, 604800, 7776e3].includes(r))
              )
                throw new n.WPPError(
                  "invalid_ephemeral_duration",
                  "Invalid ephemeral duration",
                  { value: r }
                )
            } else r = r ? 1 : 0
            return await (0, o.sendSetGroupProperty)(c.id, t, r), !0
          })
      },
      36520: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setSubject = void 0)
        const n = r(62857),
          o = r(52757),
          i = r(2818)
        t.setSubject = async function (e, t) {
          var r
          const s = await (0, i.ensureGroup)(e)
          if (
            !(null === (r = s.groupMetadata) || void 0 === r
              ? void 0
              : r.canSetSubject())
          )
            throw new n.WPPError(
              "you_are_not_allowed_set_group_subject",
              `You are not allowed to set group subject in ${s.id._serialized}`,
              { groupId: s.id.toString() }
            )
          return (
            await (0, o.sendSetGroupSubject)(s.id, t),
            (s.name = t),
            (s.formattedTitle = t),
            !0
          )
        }
      },
      64456: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(86288),
          o(r(2818), t)
      },
      26738: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var o,
              i = arguments.length,
              s =
                i < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, r))
                  : n
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(e, t, r, n)
            else
              for (var a = e.length - 1; a >= 0; a--)
                (o = e[a]) &&
                  (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s)
            return i > 3 && s && Object.defineProperty(t, r, s), s
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Tracker = void 0)
        const o = r(20748)
        function i(e = 0, t = 2147483647) {
          return Math.floor(Math.random() * (t - e + 1) + e)
        }
        class s {
          static get clientState() {
            const e = !localStorage.cid,
              t =
                localStorage.cid ||
                sessionStorage.cid ||
                i(1e9) + "." + Math.floor(Date.now() / 1e3)
            return (
              (localStorage.cid = sessionStorage.cid = t),
              { firstVisit: e, cid: t }
            )
          }
          constructor(e) {
            ;(this.trackingId = e),
              (this.events = []),
              (this.userProperties = {}),
              (this.lastTime = Date.now()),
              (this.hitsCount = 1),
              (this.documentTitle = "")
          }
          get sid() {
            const e = `${this.trackingId}_sid`,
              t = sessionStorage[e] || Math.floor(Date.now() / 1e3)
            return (sessionStorage[e] = t), t
          }
          get sct() {
            const e = `${this.trackingId}_sct`
            let t = parseInt(localStorage[e])
            return (
              isNaN(t) && (t = 0), (localStorage[e] = t + 1), localStorage[e]
            )
          }
          getHeader() {
            const { cid: e, firstVisit: t } = s.clientState
            return {
              v: 2,
              tid: this.trackingId,
              _p: s.pageLoadHash,
              cid: e,
              _fv: t ? 1 : void 0,
              ul: (navigator.language || "").toLowerCase() || void 0,
              sr: `${screen.width}x${screen.height}`,
              _s: this.hitsCount++,
              sid: this.sid,
              sct: this.sct,
              seg: 1,
              dl: location.href,
              dr: document.referrer,
              dt: this.documentTitle || document.title,
            }
          }
          getUserProperties() {
            const e = this.userProperties
            return (
              (this.userProperties = {}),
              Object.entries(e)
                .filter(([, e]) => void 0 !== e)
                .map(([e, t]) =>
                  "number" == typeof t
                    ? [`upn.${e}`, String(t)]
                    : [`up.${e}`, String(t)]
                )
            )
          }
          processEvents() {
            const e = this.events
            if (((this.events = []), !e.length)) return
            const t = e.map(([e, t, r]) => {
                const n = []
                if ((n.push(["en", e]), n.push(["_ee", "1"]), t))
                  for (const e in t) {
                    const r = t[e]
                    void 0 !== r &&
                      ("number" == typeof r
                        ? n.push([`epn.${e}`, String(r)])
                        : n.push([`ep.${e}`, String(r)]))
                  }
                return n.push(["_et", String(r)]), n
              }),
              r = Object.entries(this.getHeader())
                .filter(([, e]) => void 0 !== e)
                .map(([e, t]) => [e, String(t)])
            r.push(...this.getUserProperties())
            const n = new URLSearchParams(r)
            if (1 === t.length) {
              for (const [e, r] of t[0]) n.append(e, r)
              navigator.sendBeacon(`${s.collectURL}?${n.toString()}`)
            } else {
              const e = t.map((e) => new URLSearchParams(e).toString())
              navigator.sendBeacon(
                `${s.collectURL}?${n.toString()}`,
                e.join("\n")
              )
            }
          }
          processUserEngagement() {
            this.trackEvent("user_engagement")
          }
          trackEvent(e, t) {
            const r = Date.now(),
              n = r - this.lastTime
            ;(this.lastTime = r),
              this.events.push([e, t, n]),
              this.processEvents(),
              this.processUserEngagement()
          }
          setUserProperty(e, t) {
            ;(this.userProperties[e] = t), this.trackEvent("user_engagement")
          }
        }
        ;(t.Tracker = s),
          (s.collectURL = "https://www.google-analytics.com/g/collect"),
          (s.pageLoadHash = i()),
          n([(0, o.debounce)(1e3)], s.prototype, "processEvents", null),
          n([(0, o.debounce)(3e5)], s.prototype, "processUserEngagement", null)
      },
      22418: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            },
          s =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.trackException = t.waVersion = void 0)
        const a = r(91491),
          u = i(r(72927)),
          c = r(13691),
          l = r(26738)
        s(r(26738), t), (t.waVersion = "3.0.0")
        const d = ["W: ", "-", ", WA-JS: ", t.waVersion],
          f = new l.Tracker("G-MTQ4KY110F"),
          p = a.config.googleAnalyticsId
            ? new l.Tracker(a.config.googleAnalyticsId)
            : null
        c.internalEv.on("webpack.injected", () => {
          f.documentTitle = d.join("")
          const e = u.isAuthenticated(),
            r = u.isMultiDevice() ? "multidevice" : "legacy"
          if (
            (f.setUserProperty("method", r),
            f.setUserProperty("wa_js", t.waVersion),
            f.setUserProperty("powered_by", a.config.poweredBy || "-"),
            c.internalEv.on("conn.main_init", () => {
              var e
              ;(d[1] =
                (null === (e = window.Debug) || void 0 === e
                  ? void 0
                  : e.VERSION) || "-"),
                (f.documentTitle = d.join("")),
                f.setUserProperty("whatsapp", d[1])
            }),
            f.trackEvent("page_view", { authenticated: e, method: r }),
            p)
          ) {
            if (
              ((p.documentTitle = d.join("-")),
              p.setUserProperty("method", r),
              p.setUserProperty("wa_js", t.waVersion),
              p.setUserProperty("powered_by", a.config.poweredBy || "-"),
              c.internalEv.on("conn.main_init", () => {
                var e
                ;(d[1] =
                  (null === (e = window.Debug) || void 0 === e
                    ? void 0
                    : e.VERSION) || "-"),
                  (p.documentTitle = d.join("")),
                  p.setUserProperty("whatsapp", d[1])
              }),
              "object" == typeof a.config.googleAnalyticsUserProperty)
            )
              for (const e in a.config.googleAnalyticsUserProperty) {
                const t = a.config.googleAnalyticsUserProperty[e]
                p.setUserProperty(e, t)
              }
            p.trackEvent("page_view", { authenticated: e, method: r })
          }
          c.internalEv.on("config.update", (e) => {
            if ("poweredBy" === e.path[0])
              f.setUserProperty("powered_by", e.value || "-"),
                p && p.setUserProperty("powered_by", e.value || "-")
            else if (
              "googleAnalyticsUserProperty" === e.path[0] &&
              p &&
              "object" == typeof a.config.googleAnalyticsUserProperty
            )
              for (const e in a.config.googleAnalyticsUserProperty) {
                const t = a.config.googleAnalyticsUserProperty[e]
                p.setUserProperty(e, t)
              }
          })
        }),
          a.config.disableGoogleAnalytics ||
            (c.internalEv.on("conn.authenticated", () => {
              const e = u.isMultiDevice() ? "multidevice" : "legacy"
              f.trackEvent("login", { method: e }),
                p && f.trackEvent("login", { method: e })
            }),
            c.internalEv.on("conn.logout", () => {
              const e = u.isMultiDevice() ? "multidevice" : "legacy"
              f.trackEvent("logout", { method: e }),
                p && p.trackEvent("logout", { method: e })
            })),
          (t.trackException = function (e, t = !1) {
            a.config.disableGoogleAnalytics ||
              (f.trackEvent("exception", { description: e, fatal: t }),
              p && p.trackEvent("exception", { description: e, fatal: t }))
          })
      },
      28156: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.license =
            t.supportedWhatsappWeb =
            t.version =
            t.waitFor =
            t.stopListeningTo =
            t.setMaxListeners =
            t.removeListener =
            t.removeAllListeners =
            t.prependOnceListener =
            t.prependMany =
            t.prependListener =
            t.prependAny =
            t.once =
            t.onAny =
            t.on =
            t.offAny =
            t.off =
            t.many =
            t.listenersAny =
            t.listeners =
            t.listenerCount =
            t.listenTo =
            t.hasListeners =
            t.getMaxListeners =
            t.eventNames =
            t.emitAsync =
            t.emit =
            t.order =
            t.whatsapp =
            t.newsletter =
            t.util =
            t.status =
            t.profile =
            t.labels =
            t.group =
            t.community =
            t.ev =
            t.contact =
            t.conn =
            t.chat =
            t.catalog =
            t.call =
            t.blocklist =
            t.config =
            t.isFullReady =
            t.isReady =
            t.isInjected =
            t.webpack =
              void 0),
          r(91491),
          r(80687),
          r(22418)
        const s = i(r(1132))
        t.webpack = s
        var a = r(1132)
        Object.defineProperty(t, "isInjected", {
          enumerable: !0,
          get: function () {
            return a.isInjected
          },
        }),
          Object.defineProperty(t, "isReady", {
            enumerable: !0,
            get: function () {
              return a.isReady
            },
          }),
          Object.defineProperty(t, "isFullReady", {
            enumerable: !0,
            get: function () {
              return a.isFullReady
            },
          })
        var u = r(91491)
        Object.defineProperty(t, "config", {
          enumerable: !0,
          get: function () {
            return u.config
          },
        }),
          (t.blocklist = i(r(61042))),
          (t.call = i(r(38893))),
          (t.catalog = i(r(40164))),
          (t.chat = i(r(74023))),
          (t.conn = i(r(72927))),
          (t.contact = i(r(56191))),
          (t.ev = i(r(13691))),
          (t.community = i(r(83874))),
          (t.group = i(r(64456))),
          (t.labels = i(r(26105))),
          (t.profile = i(r(5882))),
          (t.status = i(r(31167))),
          (t.util = i(r(62857))),
          (t.newsletter = i(r(74310))),
          (t.whatsapp = i(r(14647))),
          (t.order = i(r(37783)))
        var c = r(13691)
        Object.defineProperty(t, "emit", {
          enumerable: !0,
          get: function () {
            return c.emit
          },
        }),
          Object.defineProperty(t, "emitAsync", {
            enumerable: !0,
            get: function () {
              return c.emitAsync
            },
          }),
          Object.defineProperty(t, "eventNames", {
            enumerable: !0,
            get: function () {
              return c.eventNames
            },
          }),
          Object.defineProperty(t, "getMaxListeners", {
            enumerable: !0,
            get: function () {
              return c.getMaxListeners
            },
          }),
          Object.defineProperty(t, "hasListeners", {
            enumerable: !0,
            get: function () {
              return c.hasListeners
            },
          }),
          Object.defineProperty(t, "listenTo", {
            enumerable: !0,
            get: function () {
              return c.listenTo
            },
          }),
          Object.defineProperty(t, "listenerCount", {
            enumerable: !0,
            get: function () {
              return c.listenerCount
            },
          }),
          Object.defineProperty(t, "listeners", {
            enumerable: !0,
            get: function () {
              return c.listeners
            },
          }),
          Object.defineProperty(t, "listenersAny", {
            enumerable: !0,
            get: function () {
              return c.listenersAny
            },
          }),
          Object.defineProperty(t, "many", {
            enumerable: !0,
            get: function () {
              return c.many
            },
          }),
          Object.defineProperty(t, "off", {
            enumerable: !0,
            get: function () {
              return c.off
            },
          }),
          Object.defineProperty(t, "offAny", {
            enumerable: !0,
            get: function () {
              return c.offAny
            },
          }),
          Object.defineProperty(t, "on", {
            enumerable: !0,
            get: function () {
              return c.on
            },
          }),
          Object.defineProperty(t, "onAny", {
            enumerable: !0,
            get: function () {
              return c.onAny
            },
          }),
          Object.defineProperty(t, "once", {
            enumerable: !0,
            get: function () {
              return c.once
            },
          }),
          Object.defineProperty(t, "prependAny", {
            enumerable: !0,
            get: function () {
              return c.prependAny
            },
          }),
          Object.defineProperty(t, "prependListener", {
            enumerable: !0,
            get: function () {
              return c.prependListener
            },
          }),
          Object.defineProperty(t, "prependMany", {
            enumerable: !0,
            get: function () {
              return c.prependMany
            },
          }),
          Object.defineProperty(t, "prependOnceListener", {
            enumerable: !0,
            get: function () {
              return c.prependOnceListener
            },
          }),
          Object.defineProperty(t, "removeAllListeners", {
            enumerable: !0,
            get: function () {
              return c.removeAllListeners
            },
          }),
          Object.defineProperty(t, "removeListener", {
            enumerable: !0,
            get: function () {
              return c.removeListener
            },
          }),
          Object.defineProperty(t, "setMaxListeners", {
            enumerable: !0,
            get: function () {
              return c.setMaxListeners
            },
          }),
          Object.defineProperty(t, "stopListeningTo", {
            enumerable: !0,
            get: function () {
              return c.stopListeningTo
            },
          }),
          Object.defineProperty(t, "waitFor", {
            enumerable: !0,
            get: function () {
              return c.waitFor
            },
          }),
          (t.version = "3.0.0"),
          (t.supportedWhatsappWeb = ">=2.2326.10-beta"),
          (t.license = "Apache-2.0"),
          s.injectLoader()
      },
      4475: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addNewLabel = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647),
          s = r(62540)
        t.addNewLabel = async function (e, t = {}) {
          let r
          if (
            ((0, n.assertIsBusiness)(),
            (r = ["number", "string"].includes(typeof t.labelColor)
              ? (0, n.assertColor)(t.labelColor)
              : await (0, s.getNewLabelColor)()),
            !(await (0, s.colorIsInLabelPalette)(r)))
          )
            throw new o.WPPError("color_not_in_pallet", "Color not in pallet")
          return await i.LabelStore.addNewLabel(e, r.toString())
        }
      },
      3105: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addOrRemoveLabels = void 0)
        const n = r(41687),
          o = r(14647)
        t.addOrRemoveLabels = async function (e, t) {
          ;(0, n.assertIsBusiness)(),
            Array.isArray(e) || (e = [e]),
            Array.isArray(t) || (t = [t])
          const r = e.map((e) => (0, n.assertGetChat)(e)),
            i = t.map((e) => ({ id: e.labelId, type: e.type }))
          return await o.LabelStore.addOrRemoveLabels(i, r)
        }
      },
      9793: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.colorIsInLabelPalette = void 0)
        const n = r(41687),
          o = r(62540)
        t.colorIsInLabelPalette = async function (e) {
          ;(0, n.assertIsBusiness)()
          const t = await (0, o.getLabelColorPalette)()
          return t && t.includes((0, n.assertColor)(e))
        }
      },
      90805: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.deleteAllLabels = void 0)
        const n = r(41687),
          o = r(62540)
        t.deleteAllLabels = async function () {
          ;(0, n.assertIsBusiness)()
          const e = await (0, o.getAllLabels)()
          return (0, o.deleteLabel)(e.map((e) => e.id))
        }
      },
      50451: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.deleteLabel = void 0)
        const n = r(41687),
          o = r(14647)
        t.deleteLabel = async function (e) {
          ;(0, n.assertIsBusiness)()
          let t = !1
          Array.isArray(e) || ((t = !0), (e = [e]))
          const r = []
          for (const t of e)
            r.push({
              id: t,
              deleteLabelResult: await o.LabelStore.deleteLabel(t),
            })
          return t ? r[0] : r
        }
      },
      90846: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getAllLabels = void 0)
        const n = r(41687),
          o = r(14647)
        t.getAllLabels = async function () {
          return o.LabelStore.getModelsArray().map((e) => ({
            id: e.id,
            name: e.name,
            color: e.hexColor ? (0, n.assertColor)(e.hexColor) : null,
            count: e.count || 0,
            hexColor: e.hexColor,
          }))
        }
      },
      28068: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getLabelById = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647)
        t.getLabelById = async function (e) {
          const t = i.LabelStore.get(e)
          if (!t)
            throw new o.WPPError(
              "canot_get_label_error",
              "Can't get label by id"
            )
          return {
            id: t.id,
            name: t.name,
            color: (0, n.assertColor)(t.hexColor),
            count: t.count || 0,
            hexColor: t.hexColor,
          }
        }
      },
      5978: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getLabelColorPalette = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647)
        t.getLabelColorPalette = async function () {
          ;(0, n.assertIsBusiness)()
          const e = await i.LabelStore.getLabelColorPalette()
          if (!e)
            throw new o.WPPError(
              "canot_get_color_palette",
              "Can't get color palette"
            )
          return e.map((e) => (0, n.assertColor)(Number(e)))
        }
      },
      34753: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getNewLabelColor = void 0)
        const n = r(41687),
          o = r(62857),
          i = r(14647)
        t.getNewLabelColor = async function () {
          ;(0, n.assertIsBusiness)()
          const e = await i.LabelStore.getNewLabelColor()
          if (!e)
            throw new o.WPPError(
              "cannot_get_color",
              "Can't get new label color"
            )
          return (0, n.assertColor)(Number(e))
        }
      },
      62540: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getNewLabelColor =
            t.getLabelColorPalette =
            t.getLabelById =
            t.getAllLabels =
            t.deleteLabel =
            t.deleteAllLabels =
            t.colorIsInLabelPalette =
            t.addOrRemoveLabels =
            t.addNewLabel =
              void 0)
        var n = r(4475)
        Object.defineProperty(t, "addNewLabel", {
          enumerable: !0,
          get: function () {
            return n.addNewLabel
          },
        })
        var o = r(3105)
        Object.defineProperty(t, "addOrRemoveLabels", {
          enumerable: !0,
          get: function () {
            return o.addOrRemoveLabels
          },
        })
        var i = r(9793)
        Object.defineProperty(t, "colorIsInLabelPalette", {
          enumerable: !0,
          get: function () {
            return i.colorIsInLabelPalette
          },
        })
        var s = r(90805)
        Object.defineProperty(t, "deleteAllLabels", {
          enumerable: !0,
          get: function () {
            return s.deleteAllLabels
          },
        })
        var a = r(50451)
        Object.defineProperty(t, "deleteLabel", {
          enumerable: !0,
          get: function () {
            return a.deleteLabel
          },
        })
        var u = r(90846)
        Object.defineProperty(t, "getAllLabels", {
          enumerable: !0,
          get: function () {
            return u.getAllLabels
          },
        })
        var c = r(28068)
        Object.defineProperty(t, "getLabelById", {
          enumerable: !0,
          get: function () {
            return c.getLabelById
          },
        })
        var l = r(5978)
        Object.defineProperty(t, "getLabelColorPalette", {
          enumerable: !0,
          get: function () {
            return l.getLabelColorPalette
          },
        })
        var d = r(34753)
        Object.defineProperty(t, "getNewLabelColor", {
          enumerable: !0,
          get: function () {
            return d.getNewLabelColor
          },
        })
      },
      26105: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(62540), t),
          o(r(27055), t)
      },
      27055: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
      },
      8686: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.create = void 0)
        const n = r(62857),
          o = r(52757)
        t.create = async function (e, t) {
          var r, i, s
          let a
          if (null == t ? void 0 : t.picture) {
            const e = await (0, n.convertToFile)(t.picture)
            ;(a = await (0, n.blobToBase64)(e)),
              ({ data: a } = await (0, n.downloadImage)(a, "image/jpeg"))
          }
          const u = await (0, o.createNewsletterQuery)({
            name: e,
            description: (null == t ? void 0 : t.description) || null,
            picture: a || null,
          })
          return {
            idJid: null == u ? void 0 : u.idJid,
            inviteCode:
              null == u
                ? void 0
                : u.newsletterInviteLinkMetadataMixin.inviteCode,
            inviteLink: `https://whatsapp.com/channel/${
              null == u
                ? void 0
                : u.newsletterInviteLinkMetadataMixin.inviteCode
            }`,
            name:
              null ===
                (r = null == u ? void 0 : u.newsletterNameMetadataMixin) ||
              void 0 === r
                ? void 0
                : r.nameElementValue,
            state:
              null ===
                (i = null == u ? void 0 : u.newsletterStateMetadataMixin) ||
              void 0 === i
                ? void 0
                : i.stateType,
            subscribersCount:
              null == u
                ? void 0
                : u.newsletterSubscribersMetadataMixin.subscribersCount,
            description: (null == t ? void 0 : t.description) || null,
            timestamp:
              null ===
                (s =
                  null == u ? void 0 : u.newsletterCreationTimeMetadataMixin) ||
              void 0 === s
                ? void 0
                : s.creationTimeValue,
          }
        }
      },
      1158: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.destroy = void 0)
        const n = r(62857),
          o = r(52757)
        t.destroy = async function (e) {
          if (!e || !e.includes("newsletter"))
            throw new n.WPPError(
              "send_correctly_newsletter_id",
              "Please, send the correct newsletter ID."
            )
          try {
            return await (0, o.deleteNewsletter)(e)
          } catch (e) {
            return !1
          }
        }
      },
      25578: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.edit = void 0)
        const n = r(62857),
          o = r(52757),
          i = r(16211)
        t.edit = async function (e, t) {
          var r, s, a, u, c
          let l
          if (null == t ? void 0 : t.picture) {
            const e = await (0, n.convertToFile)(t.picture)
            ;(l = await (0, n.blobToBase64)(e)),
              ({ data: l } = await (0, n.downloadImage)(l, "image/jpeg"))
          }
          await (0, o.editNewsletterMetadataAction)(
            await (0, i.ensureNewsletter)(e),
            {
              editDescription: !!t.description,
              editName: !!t.name,
              editPicture: !(!l && null != t.picture),
            },
            {
              name: t.name,
              description: t.description,
              picture: null == t.picture ? null : l,
            }
          )
          const d = await (0, o.queryNewsletterMetadataByJid)(e, {
            picture: !0,
            description: !0,
            name: !0,
            state: !0,
            creationTime: !0,
          })
          return {
            idJid: null == d ? void 0 : d.idJid,
            inviteCode:
              null == d
                ? void 0
                : d.newsletterInviteLinkMetadataMixin.inviteCode,
            inviteLink: `https://whatsapp.com/channel/${
              null == d
                ? void 0
                : d.newsletterInviteLinkMetadataMixin.inviteCode
            }`,
            name:
              null ===
                (r = null == d ? void 0 : d.newsletterNameMetadataMixin) ||
              void 0 === r
                ? void 0
                : r.nameElementValue,
            state:
              null ===
                (s = null == d ? void 0 : d.newsletterStateMetadataMixin) ||
              void 0 === s
                ? void 0
                : s.stateType,
            subscribersCount:
              null == d
                ? void 0
                : d.newsletterSubscribersMetadataMixin.subscribersCount,
            description:
              null ===
                (u =
                  null ===
                    (a =
                      null == d
                        ? void 0
                        : d.newsletterDescriptionMetadataMixin) || void 0 === a
                    ? void 0
                    : a.descriptionQueryDescriptionResponseMixin) ||
              void 0 === u
                ? void 0
                : u.elementValue,
            timestamp:
              null ===
                (c =
                  null == d ? void 0 : d.newsletterCreationTimeMetadataMixin) ||
              void 0 === c
                ? void 0
                : c.creationTimeValue,
          }
        }
      },
      16211: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ensureNewsletter = void 0)
        const n = r(41687),
          o = r(62857)
        t.ensureNewsletter = async function (e) {
          const t = (0, n.assertGetChat)(e)
          if (!t.isNewsletter)
            throw new o.WPPError(
              "not_a_newsletter",
              `Chat ${t.id._serialized} is not a newsletter`
            )
          return t
        }
      },
      48812: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.mute = t.edit = t.destroy = t.create = void 0)
        var n = r(8686)
        Object.defineProperty(t, "create", {
          enumerable: !0,
          get: function () {
            return n.create
          },
        })
        var o = r(1158)
        Object.defineProperty(t, "destroy", {
          enumerable: !0,
          get: function () {
            return o.destroy
          },
        })
        var i = r(25578)
        Object.defineProperty(t, "edit", {
          enumerable: !0,
          get: function () {
            return i.edit
          },
        })
        var s = r(7071)
        Object.defineProperty(t, "mute", {
          enumerable: !0,
          get: function () {
            return s.mute
          },
        })
      },
      7071: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.mute = void 0)
        const n = r(14647),
          o = r(52757),
          i = r(16211)
        t.mute = async function (e, t) {
          return (
            await (0, i.ensureNewsletter)(e),
            !1 === t
              ? (await (0, o.unmuteNewsletter)([e]), n.NewsletterStore.get(e))
              : (await (0, o.muteNewsletter)([e]), n.NewsletterStore.get(e))
          )
        }
      },
      74310: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }), o(r(48812), t)
      },
      3421: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), r(55497)
      },
      55497: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(() => {
          u.MsgStore.on("add", (e) => {
            var t, r
            if (
              "interactive" !== e.type ||
              "payment_method" !==
                (null === (t = e.interactivePayload) || void 0 === t
                  ? void 0
                  : t.buttons[0].name) ||
              !e.isNewMsg
            )
              return
            const n = JSON.parse(
              null === (r = e.interactivePayload) || void 0 === r
                ? void 0
                : r.buttons[0].buttonParamsJson
            )
            queueMicrotask(() => {
              s.internalEv.emit("order.payment_status", {
                method: n.payment_method,
                timestamp: n.payment_timestamp,
                reference_id: n.reference_id,
                msgId: e.id,
              })
            })
          })
        })
      },
      34949: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.get = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(52757)
        t.get = async function (e) {
          const t = o.MsgStore.get(e)
          if (!t) throw new n.WPPError("msg_not_found", "Message not found")
          return await (0, i.getOrderInfo)(t)
        }
      },
      18165: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.get = void 0)
        var n = r(34949)
        Object.defineProperty(t, "get", {
          enumerable: !0,
          get: function () {
            return n.get
          },
        })
      },
      37783: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(3421), t),
          o(r(18165), t)
      },
      40923: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.editBusinessProfile = void 0)
        const n = r(14647),
          o = r(52757)
        t.editBusinessProfile = async function (e) {
          if (n.Conn.isSMB)
            return (
              await (0, o.editBusinessProfile)(e),
              await n.BusinessProfileStore.fetchBizProfile(
                n.UserPrefs.getMaybeMeUser()
              )
            )
        }
      },
      42670: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMyProfileName = void 0)
        const n = r(14647)
        t.getMyProfileName = function () {
          return n.functions.getPushname()
        }
      },
      29116: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMyStatus = void 0)
        const n = r(14647)
        t.getMyStatus = async function () {
          return (await n.StatusStore.find(n.UserPrefs.getMaybeMeUser())).status
        }
      },
      23144: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setMyStatus =
            t.setMyProfilePicture =
            t.setMyProfileName =
            t.removeMyProfilePicture =
            t.isBusiness =
            t.getMyStatus =
            t.getMyProfileName =
            t.editBusinessProfile =
              void 0)
        var n = r(40923)
        Object.defineProperty(t, "editBusinessProfile", {
          enumerable: !0,
          get: function () {
            return n.editBusinessProfile
          },
        })
        var o = r(42670)
        Object.defineProperty(t, "getMyProfileName", {
          enumerable: !0,
          get: function () {
            return o.getMyProfileName
          },
        })
        var i = r(29116)
        Object.defineProperty(t, "getMyStatus", {
          enumerable: !0,
          get: function () {
            return i.getMyStatus
          },
        })
        var s = r(17616)
        Object.defineProperty(t, "isBusiness", {
          enumerable: !0,
          get: function () {
            return s.isBusiness
          },
        })
        var a = r(95333)
        Object.defineProperty(t, "removeMyProfilePicture", {
          enumerable: !0,
          get: function () {
            return a.removeMyProfilePicture
          },
        })
        var u = r(35098)
        Object.defineProperty(t, "setMyProfileName", {
          enumerable: !0,
          get: function () {
            return u.setMyProfileName
          },
        })
        var c = r(20059)
        Object.defineProperty(t, "setMyProfilePicture", {
          enumerable: !0,
          get: function () {
            return c.setMyProfilePicture
          },
        })
        var l = r(48736)
        Object.defineProperty(t, "setMyStatus", {
          enumerable: !0,
          get: function () {
            return l.setMyStatus
          },
        })
      },
      17616: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBusiness = void 0)
        const n = r(14647)
        t.isBusiness = function () {
          return n.Conn.isSMB
        }
      },
      95333: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeMyProfilePicture = void 0)
        const n = r(14647)
        t.removeMyProfilePicture = async function () {
          const e = n.UserPrefs.getMaybeMeUser()
          return 200 === (await n.functions.requestDeletePicture(e)).status
        }
      },
      35098: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setMyProfileName = void 0)
        const n = r(14647)
        t.setMyProfileName = async function (e) {
          return await n.functions.setPushname(e), !0
        }
      },
      20059: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setMyProfilePicture = void 0)
        const n = r(62857),
          o = r(14647),
          i = r(52757)
        t.setMyProfilePicture = async function (e) {
          const t = await (0, n.convertToFile)(e),
            r = await (0, n.resizeImage)(t, {
              width: 96,
              height: 96,
              mimeType: "image/jpeg",
              resize: "cover",
            }),
            s = await (0, n.resizeImage)(t, {
              width: 640,
              height: 640,
              mimeType: "image/jpeg",
              resize: "cover",
            }),
            a = await (0, n.blobToBase64)(r),
            u = await (0, n.blobToBase64)(s),
            c = o.UserPrefs.getMaybeMeUser()
          return (0, i.sendSetPicture)(c, a, u)
        }
      },
      48736: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setMyStatus = void 0)
        const s = r(14647),
          a = i(r(52757))
        t.setMyStatus = async function (e) {
          await a.setMyStatus(e)
          const t = await s.StatusStore.find(s.UserPrefs.getMaybeMeUser())
          return t && (t.status = e), !0
        }
      },
      5882: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }), o(r(23144), t)
      },
      47494: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultSendStatusOptions = void 0),
          (t.defaultSendStatusOptions = { waitForAck: !0 })
      },
      4213: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), r(9364)
      },
      9364: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(13691),
          a = i(r(1132)),
          u = r(14647)
        a.onInjected(() => {
          u.StatusV3Store.on("sync", () => {
            s.internalEv.emit("status.sync")
          })
        })
      },
      16973: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.get = void 0)
        const n = r(41687),
          o = r(14647)
        t.get = function (e) {
          const t = (0, n.assertWid)(e)
          return o.StatusV3Store.get(t)
        }
      },
      93809: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMyStatus = void 0)
        const n = r(14647)
        t.getMyStatus = async function () {
          let e = n.StatusV3Store.getMyStatus()
          return (
            e || (e = await n.StatusV3Store.find(n.UserPrefs.getMaybeMeUser())),
            e
          )
        }
      },
      99341: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.updateParticipants =
            t.sendVideoStatus =
            t.sendTextStatus =
            t.sendReadStatus =
            t.sendRawStatus =
            t.sendImageStatus =
            t.getMyStatus =
            t.get =
              void 0)
        var n = r(16973)
        Object.defineProperty(t, "get", {
          enumerable: !0,
          get: function () {
            return n.get
          },
        })
        var o = r(93809)
        Object.defineProperty(t, "getMyStatus", {
          enumerable: !0,
          get: function () {
            return o.getMyStatus
          },
        })
        var i = r(2700)
        Object.defineProperty(t, "sendImageStatus", {
          enumerable: !0,
          get: function () {
            return i.sendImageStatus
          },
        })
        var s = r(71459)
        Object.defineProperty(t, "sendRawStatus", {
          enumerable: !0,
          get: function () {
            return s.sendRawStatus
          },
        })
        var a = r(34809)
        Object.defineProperty(t, "sendReadStatus", {
          enumerable: !0,
          get: function () {
            return a.sendReadStatus
          },
        })
        var u = r(72686)
        Object.defineProperty(t, "sendTextStatus", {
          enumerable: !0,
          get: function () {
            return u.sendTextStatus
          },
        })
        var c = r(53390)
        Object.defineProperty(t, "sendVideoStatus", {
          enumerable: !0,
          get: function () {
            return c.sendVideoStatus
          },
        })
        var l = r(45218)
        Object.defineProperty(t, "updateParticipants", {
          enumerable: !0,
          get: function () {
            return l.updateParticipants
          },
        })
      },
      28227: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.postSendStatus = void 0)
        const n = r(14647)
        t.postSendStatus = function (e) {
          e.sendMsgResult.then(() => {
            const t = n.MsgStore.get(e.id)
            if (!t) return
            n.StatusV3Store.handleUpdate(t.attributes, null, !1)
            const r = n.StatusV3Store.getMyStatus()
            r && r.msgs.add(t)
          })
        }
      },
      2700: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendImageStatus = void 0)
        const n = r(41687),
          o = r(74023),
          i = r(14647),
          s = r(52757),
          a = r(31167),
          u = r(28227)
        t.sendImageStatus = async function (e, t = {}) {
          const r = new i.MsgKey({
            fromMe: !0,
            id: (0, s.randomHex)(16),
            participant: i.UserPrefs.getMaybeMeUser(),
            remote: (0, n.assertWid)("status@broadcast"),
          })
          t = Object.assign(
            Object.assign(Object.assign({}, a.defaultSendStatusOptions), {
              messageId: r,
            }),
            t
          )
          const c = await (0, o.sendFileMessage)(
            "status@broadcast",
            e,
            Object.assign(Object.assign({}, t), {
              createChat: !0,
              type: "image",
            })
          )
          return (0, u.postSendStatus)(c), c
        }
      },
      71459: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendRawStatus = void 0)
        const s = r(41687),
          a = i(r(74023)),
          u = i(r(1132)),
          c = r(14647),
          l = r(54993),
          d = r(52757),
          f = r(31167),
          p = r(28227)
        ;(t.sendRawStatus = async function (e, t = {}) {
          const r = new c.MsgKey({
            fromMe: !0,
            id: (0, d.randomHex)(16),
            participant: c.UserPrefs.getMaybeMeUser(),
            remote: (0, s.assertWid)("status@broadcast"),
          })
          ;(t = Object.assign(
            Object.assign(Object.assign({}, f.defaultSendStatusOptions), {
              messageId: r,
            }),
            t
          )),
            (e.ctwaContext = e.ctwaContext || {}),
            (e.author = c.UserPrefs.getMaybeMeUser())
          const n = await a.sendRawMessage(
            "status@broadcast",
            e,
            Object.assign(Object.assign({}, t), { createChat: !0 })
          )
          return (0, p.postSendStatus)(n), n
        }),
          u.onInjected(() => {
            ;(0, l.wrapModuleFunction)(d.createMsgProtobuf, (e, ...t) => {
              const [r] = t,
                n = e(...t)
              return (
                n.extendedTextMessage &&
                  ("number" == typeof r.backgroundColor &&
                    (n.extendedTextMessage.backgroundArgb = r.backgroundColor),
                  "number" == typeof r.textColor &&
                    (n.extendedTextMessage.textArgb = r.textColor),
                  "number" == typeof r.font &&
                    (n.extendedTextMessage.font = r.font),
                  (n.extendedTextMessage.inviteLinkGroupTypeV2 = 0),
                  (n.extendedTextMessage.previewType = 0)),
                n
              )
            }),
              (0, l.wrapModuleFunction)(
                d.encryptAndSendMsg,
                async (e, ...t) => {
                  const [, r] = t
                  try {
                    return await e(...t)
                  } catch (n) {
                    const o = r.to
                    if (
                      !(null == o ? void 0 : o.isStatusV3()) ||
                      "[messaging] unsupported remote jid type" !== n.message
                    )
                      throw n
                    "custom" !==
                      localStorage.getItem("wpp-status-participants") &&
                      (await (0, f.updateParticipants)())
                    const i = await c.functions.getParticipants(o)
                    if (!i || 0 === i.participants.length)
                      throw new Error("empty participants for status@broadcast")
                    return (
                      await c.functions.markForgetSenderKey(
                        o,
                        i.participants.map(s.assertWid)
                      ),
                      (t[1].to.server = "g.us"),
                      await e(...t)
                    )
                  }
                }
              ),
              (0, l.wrapModuleFunction)(
                d.encryptAndSendSenderKeyMsg,
                async (e, ...t) => {
                  try {
                    "status" === t[1].to.user && (t[1].to.server = "broadcast")
                  } catch (e) {}
                  return await e(...t)
                }
              ),
              (0, l.wrapModuleFunction)(d.GROUP_JID, (e, ...t) =>
                t[0].toString().includes("broadcast")
                  ? (0, d.CHAT_JID)(...t)
                  : e(...t)
              )
          })
      },
      34809: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendReadStatus = void 0)
        const n = r(41687),
          o = r(14647)
        t.sendReadStatus = async function (e, t) {
          var r
          const i = (0, n.assertWid)(e),
            s = o.StatusV3Store.get(i),
            a = null == s ? void 0 : s.msgs.get(t)
          await (null == s
            ? void 0
            : s.sendReadStatus(a, null == a ? void 0 : a.mediaKeyTimestamp))
          const u = o.StatusV3Store.get(i)
          return (
            (null === (r = null == u ? void 0 : u.msgs.get(t)) || void 0 === r
              ? void 0
              : r.serialize()) || []
          )
        }
      },
      72686: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendTextStatus = void 0)
        const n = r(41687),
          o = r(31167),
          i = r(99341)
        t.sendTextStatus = async function (e, t = {}) {
          t = Object.assign(Object.assign({}, o.defaultSendStatusOptions), t)
          let r = (0, n.assertColor)("#000000"),
            s = (0, n.assertColor)("#FFFFFF"),
            a = 0
          ;["number", "string"].includes(typeof t.backgroundColor) &&
            (r = (0, n.assertColor)(t.backgroundColor)),
            ["number", "string"].includes(typeof t.textColor) &&
              (s = (0, n.assertColor)(t.textColor)),
            t.font && t.font >= 0 && t.font <= 5 && (a = t.font)
          const u = {
            body: e,
            type: "chat",
            ctwaContext: {},
            richPreviewType: 0,
            inviteGrpType: 0,
            font: a,
            backgroundColor: r,
            textColor: s,
          }
          return await (0, i.sendRawStatus)(u, t)
        }
      },
      53390: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendVideoStatus = void 0)
        const n = r(41687),
          o = r(74023),
          i = r(14647),
          s = r(52757),
          a = r(31167),
          u = r(28227)
        t.sendVideoStatus = async function (e, t = {}) {
          const r = new i.MsgKey({
            fromMe: !0,
            id: (0, s.randomHex)(16),
            participant: i.UserPrefs.getMaybeMeUser(),
            remote: (0, n.assertWid)("status@broadcast"),
          })
          t = Object.assign(
            Object.assign(Object.assign({}, a.defaultSendStatusOptions), {
              messageId: r,
            }),
            t
          )
          const c = await (0, o.sendFileMessage)(
            "status@broadcast",
            e,
            Object.assign(Object.assign({}, t), {
              createChat: !0,
              type: "video",
            })
          )
          return (0, u.postSendStatus)(c), c
        }
      },
      45218: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.updateParticipants = void 0)
        const n = r(41687),
          o = r(91491),
          i = r(14647)
        t.updateParticipants = async function (e) {
          let t = "custom"
          ;(e && 0 !== e.length) ||
            ((e = i.ContactStore.getModelsArray()
              .filter((e) => e.isMyContact && !e.isContactBlocked)
              .filter((e) => e.notifyName && !e.isMe)
              .filter((e) => !e.id.equals(i.UserPrefs.getMaybeMeUser()))
              .map((e) => e.id)),
            (t = "contacts"))
          const r = e
            .map(n.assertWid)
            .filter((e) => !e.equals(i.UserPrefs.getMaybeMeUser()))
          o.config.sendStatusToDevice && r.push(i.UserPrefs.getMaybeMeUser())
          const s = r.map(
              (e) =>
                new i.ParticipantModel({ id: e, isAdmin: !1, isSuperAdmin: !1 })
            ),
            a = i.WidFactory.createWid("status@broadcast")
          await i.functions.updateParticipants({
            group: a,
            participants: s,
            version: Date.now(),
            isOffline: !1,
          }),
            localStorage.setItem("wpp-status-participants", t)
        }
      },
      31167: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(4213),
          r(98281),
          o(r(47494), t),
          o(r(99341), t)
      },
      98281: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = r(28156),
          a = i(r(1132)),
          u = r(14647),
          c = r(54993),
          l = r(52757)
        a.onFullReady(function () {
          ;(0, c.wrapModuleFunction)(l.handleSingleMsg, async (e, ...t) => {
            const [r, n] = t
            if (!s.config.syncAllStatus && r.isStatusV3()) {
              const e = u.UserPrefs.getMaybeMeUser()
              if (n.author && !e.equals(n.author)) return
            }
            return e(...t)
          })
        })
      },
      10632: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.blobToArrayBuffer = void 0),
          (t.blobToArrayBuffer = function (e) {
            return new Promise((t, r) => {
              const n = new FileReader()
              ;(n.onloadend = function () {
                t(n.result)
              }),
                (n.onabort = r),
                (n.onerror = r),
                n.readAsArrayBuffer(e)
            })
          })
      },
      66604: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.blobToBase64 = void 0),
          (t.blobToBase64 = function (e) {
            return new Promise((t, r) => {
              const n = new FileReader()
              ;(n.onloadend = function () {
                t(n.result)
              }),
                (n.onabort = r),
                (n.onerror = r),
                n.readAsDataURL(e)
            })
          })
      },
      39681: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.convertToFile = void 0)
        const o = n(r(53846)),
          i = n(r(62759)),
          s = r(62857)
        t.convertToFile = async function (e, t, r) {
          if (e instanceof File) return e
          let n = null
          if ("string" == typeof e) {
            let r = (0, i.default)(e)
            if (
              (!r &&
                (0, s.isBase64)(e) &&
                (r = (0, i.default)("data:;base64," + e)),
              !r)
            )
              throw "invalid_data_url"
            t || (t = r.contentType)
            const o = r.toBuffer()
            n = new Blob([new Uint8Array(o, o.byteOffset, o.length)], {
              type: t,
            })
          } else n = e
          if (!r || !t) {
            const e = await o.default.fromBuffer(await n.arrayBuffer())
            if (e) {
              const n = e.mime.split("/")[0]
              ;(r = r || `${n}.${e.ext}`), (t = t || e.mime)
            }
            ;(r = r || "unknown"), (t = t || "application/octet-stream")
          }
          return new File([n], r, { type: t, lastModified: Date.now() })
        }
      },
      13257: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createWid = void 0)
        const n = r(14647)
        t.createWid = function (e) {
          if (e) {
            if (n.WidFactory.isWidlike(e))
              return n.WidFactory.createWidFromWidLike(e)
            if (
              (e &&
                "object" == typeof e &&
                "object" == typeof e._serialized &&
                (e = e._serialized),
              "string" == typeof e)
            )
              return /^\d+$/.test(e)
                ? n.WidFactory.createUserWid(e, "c.us")
                : /^\d+-\d+$/.test(e)
                ? n.WidFactory.createUserWid(e, "g.us")
                : /status$/.test(e)
                ? n.WidFactory.createUserWid(e, "broadcast")
                : n.WidFactory.createWid(e)
          }
        }
      },
      97016: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.downloadImage = void 0),
          (t.downloadImage = function (e, t = "image/jpeg", r = 0.85) {
            return new Promise((n, o) => {
              const i = new Image()
              ;(i.crossOrigin = "anonymous"),
                (i.src = e),
                (i.onerror = o),
                (i.onload = () => {
                  const e = document.createElement("canvas"),
                    o = e.getContext("2d")
                  ;(e.height = i.naturalHeight),
                    (e.width = i.naturalWidth),
                    o.drawImage(i, 0, 0)
                  const s = e.toDataURL(t, r)
                  n({ data: s, height: i.naturalHeight, width: i.naturalWidth })
                })
            })
          })
      },
      55026: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WPPError = void 0)
        class r extends Error {
          constructor(e, t, r = {}) {
            if ((super(t), (this.code = e), r)) {
              const e = Object.keys(r)
              for (const t of e) this[t] = r[t]
            }
          }
        }
        t.WPPError = r
      },
      24298: (e, t, r) => {
        "use strict"
        var n = r(48287).hp
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fetchDataFromPNG = void 0),
          (t.fetchDataFromPNG = function (e) {
            return new Promise((t, r) => {
              const o = new Image()
              ;(o.crossOrigin = "anonymous"),
                (o.src = e),
                (o.onerror = r),
                (o.onload = function () {
                  const e = document.createElement("canvas"),
                    r = e.getContext("2d")
                  ;(e.height = o.naturalHeight),
                    (e.width = o.naturalWidth),
                    r.drawImage(o, 0, 0)
                  const i = r.getImageData(0, 0, e.width, e.height).data,
                    s = n.from(i.filter((e, t) => t % 4 < 3)),
                    a =
                      (s[1] << 56) +
                      (s[2] << 48) +
                      (s[3] << 40) +
                      (s[4] << 32) +
                      (s[5] << 24) +
                      (s[6] << 16) +
                      (s[7] << 8) +
                      s[8]
                  t(new Uint8Array(s.subarray(9, a + 9)))
                })
            })
          })
      },
      25274: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateOrderUniqueId = void 0),
          (t.generateOrderUniqueId = function () {
            const e = String(Date.now()) + Math.random().toFixed(4).slice(-4)
            return ("function" == typeof BigInt ? BigInt(e) : Number(e))
              .toString(36)
              .toUpperCase()
          })
      },
      82368: (e, t, r) => {
        "use strict"
        var n = r(48287).hp
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getVideoInfoFromBuffer = void 0),
          (t.getVideoInfoFromBuffer = function (e) {
            const t = n.from(e),
              r = n.from("mvhd"),
              o = t.indexOf(r) + 17,
              i = t.readUInt32BE(o),
              s = t.readUInt32BE(o + 4),
              a = t.indexOf(n.from("moov")),
              u = t.indexOf(n.from("trak"), a + 4),
              c = t.indexOf(n.from("stbl"), u + 4),
              l = t.indexOf(n.from("avc1"), c + 4),
              d = t.readUInt16BE(l + 4 + 24),
              f = t.readUInt16BE(l + 4 + 26),
              p = Math.floor((s / i) * 1e3) / 1e3
            return { duration: Math.floor(p), width: d, height: f }
          })
      },
      62857: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(10632), t),
          o(r(66604), t),
          o(r(39681), t),
          o(r(13257), t),
          o(r(97016), t),
          o(r(55026), t),
          o(r(24298), t),
          o(r(25274), t),
          o(r(82368), t),
          o(r(7418), t),
          o(r(12040), t),
          o(r(59036), t),
          o(r(16817), t)
      },
      7418: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBase64 = void 0)
        const r =
          /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
        t.isBase64 = function (e) {
          return r.test(e)
        }
      },
      73113: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateThumbnailLinkPreviewData = t.fetchRemoteLinkPreviewData =
            void 0)
        const o = n(r(17833)),
          i = r(91491),
          s = r(14647),
          a = r(52757),
          u = r(97016),
          c = r(24298),
          l = (0, o.default)("WA-JS:link-preview"),
          d = i.config.linkPreviewApiServers || [
            "https://wajs-server.calixto.shop",
            "https://wajsapi.titanchat.com.br",
            "https://wppc-linkpreview.cloudtrix.com.br",
          ],
          f = 140,
          p = {}
        !(function (e) {
          for (let t = e.length - 1; t > 0; t--) {
            const r = Math.floor(Math.random() * (t + 1))
            ;[e[t], e[r]] = [e[r], e[t]]
          }
        })(d),
          (t.fetchRemoteLinkPreviewData = async function (e) {
            if (p[e]) return void l("Link preview found in the cache", e)
            const t = new TextDecoder()
            for (let r = d.length - 1; r >= 0; r--) {
              const n = d[r]
              l(`Fetching link preview using ${n}`, e)
              const o =
                  `${n}/v1/link-preview/fetch-data.png?url=` + encodeURI(e),
                i = await (0, c.fetchDataFromPNG)(o)
                  .then((e) => t.decode(e))
                  .then((e) => JSON.parse(e))
                  .catch(() => null)
              if (null === i || (!("title" in i) && !("status" in i))) {
                l(`The server ${n} is unavailable for link preview`),
                  d.splice(r, 1)
                continue
              }
              if (!i.title && 200 !== i.status) continue
              const s = /^video/.test(i.mediaType),
                a = {
                  title: i.title,
                  description: i.description,
                  canonicalUrl: i.url,
                  matchedText: e,
                  richPreviewType: s ? 1 : 0,
                  doNotPlayInline: !s,
                  imageUrl: i.image,
                }
              return (
                (p[e] = a),
                setTimeout(() => {
                  delete p[e]
                }, 3e5),
                a
              )
            }
            return null
          }),
          (t.generateThumbnailLinkPreviewData = async function (e) {
            if (!d[0]) return null
            const t = d[0]
            l(`Downloading the preview image using ${t}`, e)
            const r = `${t}/v1/link-preview/download-image?url=` + encodeURI(e),
              n = await (0, u.downloadImage)(r).catch(() => null)
            if (!n) return null
            if (n.width < f || n.height < 100) return null
            const o = await (function (e) {
                return new Promise((t, r) => {
                  const n = new Image()
                  ;(n.crossOrigin = "anonymous"),
                    (n.src = e),
                    (n.onerror = r),
                    (n.onload = () => {
                      try {
                        const e = document.createElement("canvas"),
                          r = e.getContext("2d")
                        ;(e.width = f), (e.height = f)
                        const o = Math.min(n.width, n.height),
                          i = (n.width - o) / 2,
                          s = (n.height - o) / 2
                        r.drawImage(n, i, s, o, o, 0, 0, f, f),
                          t(
                            e
                              .toDataURL("image/jpeg")
                              .replace(/^data:image\/jpeg;base64,/, "")
                          )
                      } catch (e) {
                        r()
                      }
                    })
                })
              })(n.data),
              i = n.data.replace("data:image/jpeg;base64,", ""),
              c = await s.OpaqueData.createFromBase64Jpeg(i),
              p = new Uint8Array(32),
              g =
                (window.crypto.getRandomValues(p),
                { key: s.Base64.encodeB64(p), timestamp: (0, a.unixTime)() }),
              m = new AbortController(),
              y = await (0, a.uploadThumbnail)({
                thumbnail: c,
                mediaType: "thumbnail-link",
                mediaKeyInfo: g,
                uploadOrigin: 1,
                forwardedFromWeb: !1,
                signal: m.signal,
                timeout: 3e3,
                isViewOnce: !1,
              }),
              b = y.mediaEntry
            return {
              thumbnail: o,
              thumbnailHQ: i,
              mediaKey: b.mediaKey,
              mediaKeyTimestamp: b.mediaKeyTimestamp,
              thumbnailDirectPath: b.directPath,
              thumbnailSha256: y.filehash,
              thumbnailEncSha256: b.encFilehash,
              thumbnailWidth: n.width,
              thumbnailHeight: n.height,
            }
          })
      },
      12040: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resizeImage = void 0)
        const o = n(r(23807))
        t.resizeImage = function (e, t = {}) {
          return new Promise((r, n) => {
            new o.default(
              e,
              Object.assign(Object.assign({}, t), { success: r, error: n })
            )
          })
        }
      },
      59036: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
      },
      16817: (e, t) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.wrapFunction = void 0),
          (t.wrapFunction = function (e, t) {
            return (...r) => t(e, ...r)
          })
      },
      1132: function (e, t, r) {
        "use strict"
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.injectFallbackModule =
            t.loadModule =
            t.modules =
            t.search =
            t.searchId =
            t.isReactComponent =
            t.moduleSource =
            t.injectLoader =
            t.fallbackModules =
            t.webpackRequire =
            t.__debug =
            t.onFullReady =
            t.onReady =
            t.onInjected =
            t.isFullReady =
            t.isReady =
            t.isInjected =
            t.loaderType =
              void 0)
        const o = n(r(17833)),
          i = r(13691),
          s = (0, o.default)("WA-JS:webpack")
        ;(t.loaderType = "unknown"),
          (t.isInjected = !1),
          (t.isReady = !1),
          (t.isFullReady = !1),
          (t.onInjected = function (e, t = 0) {
            i.internalEv.on("webpack.injected", () => {
              setTimeout(e, t)
            })
          }),
          (t.onReady = function (e, t = 0) {
            i.internalEv.on("webpack.ready", () => {
              setTimeout(e, t)
            })
          }),
          (t.onFullReady = function (e, t = 0) {
            i.internalEv.on("webpack.full_ready", () => {
              setTimeout(e, t)
            })
          }),
          (t.__debug = () => (self || window).require("__debug")),
          (t.fallbackModules = {})
        const a = i.internalEv.waitFor("conn.main_init"),
          u = i.internalEv.waitFor("conn.main_ready")
        t.injectLoader = function () {
          if (t.isInjected) return
          const e = self || window,
            r = setInterval(async () => {
              "unknown" === t.loaderType
                ? e.require &&
                  e.__d &&
                  ((t.loaderType = "meta"),
                  (t.webpackRequire = function (t) {
                    try {
                      return (
                        e.ErrorGuard.skipGuardGlobal(!0), e.importNamespace(t)
                      )
                    } catch (e) {}
                    return null
                  }),
                  Object.defineProperty(t.webpackRequire, "m", {
                    get: () => {
                      var e
                      const r = (0, t.__debug)().modulesMap,
                        n = Object.keys(r).filter((e) => /^(?:use)?WA/.test(e)),
                        o = {}
                      for (const t of n)
                        o[t] =
                          null === (e = r[t]) || void 0 === e
                            ? void 0
                            : e.factory
                      return o
                    },
                  }),
                  (t.isInjected = !0),
                  s("injected"),
                  await i.internalEv
                    .emitAsync("webpack.injected")
                    .catch(() => null),
                  await a,
                  await new Promise((e) => setTimeout(e, 1e3)),
                  (t.isReady = !0),
                  s("ready to use"),
                  await i.internalEv
                    .emitAsync("webpack.ready")
                    .catch(() => null),
                  window.wppForceMainLoad
                    ? await new Promise((e) => setTimeout(e, 5e3))
                    : await u,
                  (t.isFullReady = !0),
                  s("full ready to use"),
                  await i.internalEv
                    .emitAsync("webpack.full_ready")
                    .catch(() => null))
                : clearInterval(r)
            }, 1e3),
            n = "webpackChunkwhatsapp_web_client",
            o = e[n] || []
          void 0 === e[n] ? (e[n] = o) : (t.loaderType = "webpack")
          const c = Date.now()
          o.push([
            [c],
            {},
            (e) => {
              ;(t.webpackRequire = e),
                queueMicrotask(() =>
                  (async (e) => {
                    ;(t.loaderType = "webpack"),
                      (t.webpackRequire = e),
                      (t.isInjected = !0),
                      s("injected"),
                      await i.internalEv
                        .emitAsync("webpack.injected")
                        .catch(() => null),
                      await new Promise((e) => setTimeout(e, 500))
                    const r = new Array(1e4)
                        .fill(1)
                        .map((e, t) => e + t)
                        .filter((e) => {
                          const r = t.webpackRequire.u(e)
                          return r.includes("locales")
                            ? navigator.languages.some((e) =>
                                r.includes(`locales/${e}`)
                              )
                            : !r.includes("undefined")
                        }),
                      n = r.filter((e) => {
                        const r = t.webpackRequire.u(e)
                        return r.includes("main") && !r.includes("locales")
                      })
                    for (const e of n)
                      try {
                        await t.webpackRequire.e(e)
                      } catch (r) {
                        s("load file error", t.webpackRequire.u(e))
                      }
                    ;(t.isReady = !0),
                      s("ready to use"),
                      await i.internalEv
                        .emitAsync("webpack.ready")
                        .catch(() => null),
                      window.wppForceMainLoad
                        ? await new Promise((e) => setTimeout(e, 5e3))
                        : await u
                    for (const e of r)
                      try {
                        await t.webpackRequire.e(e)
                      } catch (r) {
                        s("load file error", t.webpackRequire.u(e))
                      }
                    ;(t.isFullReady = !0),
                      s("full ready to use"),
                      await i.internalEv
                        .emitAsync("webpack.full_ready")
                        .catch(() => null)
                  })(e)
                )
            },
          ])
        }
        const c = new Map()
        function l(e) {
          if ("webpack" !== t.loaderType) return ""
          if (!t.webpackRequire.m[e]) return ""
          if (c.has(e)) return c.get(e)
          const r = t.webpackRequire.m[e].toString()
          return c.set(e, r), r
        }
        t.moduleSource = l
        const d = new Map()
        function f(e) {
          if (d.has(e)) return d.get(e)
          const t = l(e),
            r = /\w+\.(Pure)?Component\s*\{/.test(t)
          return d.set(e, r), r
        }
        function p(e, r = !1) {
          let n = Object.keys(t.webpackRequire.m)
          r && (n = n.reverse())
          const o = setTimeout(() => {
            s(`Searching for: ${e.toString()}`)
          }, 500)
          for (const r of n)
            if (!f(r))
              try {
                const n = (0, t.webpackRequire)(r)
                if (e(n, r))
                  return (
                    s(`Module found: ${r} - ${e.toString()}`),
                    clearTimeout(o),
                    r
                  )
              } catch (e) {
                continue
              }
          n = Object.keys(t.fallbackModules)
          for (const r of n)
            try {
              const n = t.fallbackModules[r]
              if (e(n, r))
                return (
                  s(`Fallback Module found: ${r} - ${e.toString()}`),
                  clearTimeout(o),
                  r
                )
            } catch (e) {
              continue
            }
          return s(`Module not found: ${e.toString()}`), null
        }
        function g(e) {
          return /^fallback_/.test(e)
            ? t.fallbackModules[e]
            : (0, t.webpackRequire)(e)
        }
        ;(t.isReactComponent = f),
          (t.searchId = p),
          (t.search = function (e, t = !1) {
            const r = p(e, t)
            return r ? g(r) : null
          }),
          (t.modules = function (e, r = !1) {
            const n = {}
            let o = Object.keys(t.webpackRequire.m)
            r && (o = o.reverse())
            for (const t of o)
              if (!f(t))
                try {
                  const r = g(t)
                  ;(e && !e(r, t)) || (n[t] = r)
                } catch (e) {
                  continue
                }
            return (
              s(
                `${Object.keys(n).length} modules found with: ${
                  null == e ? void 0 : e.toString()
                }`
              ),
              n
            )
          }),
          (t.loadModule = g),
          (t.injectFallbackModule = function (e, r) {
            if (/^fallback_/.test((e += "")))
              throw new Error("Invalid fallback ID")
            t.fallbackModules[`fallback_${e}`] = r
          })
      },
      28922: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { AggReactionsCollection: "AggReactionsCollection" },
            (e) => e.AggReactionsCollection
          )
      },
      93316: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { BaseCollection: "BaseCollection" },
            (e) => e.BaseCollection
          )
      },
      924: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { BlocklistCollection: "BlocklistCollectionImpl" },
            (e) => e.BlocklistCollectionImpl
          )
      },
      51150: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              BusinessCategoriesResultCollection:
                "BusinessCategoriesResultCollectionImpl",
            },
            (e) => e.BusinessCategoriesResultCollectionImpl
          )
      },
      21330: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { BusinessProfileCollection: "BusinessProfileCollectionImpl" },
            (e) => e.BusinessProfileCollectionImpl
          )
      },
      83573: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { ButtonCollection: ["ButtonCollectionImpl", "ButtonCollection"] },
            (e) => e.ButtonCollectionImpl || e.ButtonCollection
          )
      },
      96993: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { CallCollection: ["CallCollectionImpl", "default.constructor"] },
            (e) => e.CallCollectionImpl || e.default.processIncomingCall
          )
      },
      22523: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { CartCollection: "CartCollectionImpl" },
            (e) => e.CartCollectionImpl
          )
      },
      25716: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              CartItemCollection: [
                "CartItemCollectionImpl",
                "CartItemCollection",
              ],
            },
            (e) => e.CartItemCollectionImpl || e.CartItemCollection
          )
      },
      10674: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { CatalogCollection: "CatalogCollectionImpl" },
            (e) => e.CatalogCollectionImpl || e.CatalogCollection
          )
      },
      29683: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { ChatCollection: "ChatCollectionImpl" },
            (e) => e.ChatCollectionImpl
          )
      },
      27462: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              ChatstateCollection: [
                "ChatstateCollectionImpl",
                "ChatstateCollection",
              ],
            },
            (e) => e.ChatstateCollectionImpl || e.ChatstateCollection
          )
      },
      60193: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(45588),
          (0, n.exportModule)(t, { Collection: "default" }, (e) =>
            e.default
              .toString()
              .includes("Collection initialized without model")
          )
      },
      54477: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { ContactCollection: "ContactCollectionImpl" },
            (e) => e.ContactCollectionImpl
          )
      },
      16794: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { EmojiVariantCollection: "EmojiVariantCollectionImpl" },
            (e) => e.EmojiVariantCollectionImpl
          )
      },
      58699: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(12105),
          (0, n.exportModule)(
            t,
            { GroupMetadataCollection: "default.constructor" },
            (e) =>
              "function" == typeof e.default.onParentGroupChange ||
              "function" == typeof e.default._handleParentGroupChange
          )
      },
      86451: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { LabelCollection: "LabelCollectionImpl" },
            (e) => e.LabelCollectionImpl
          )
      },
      35052: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              LabelItemCollection: [
                "LabelItemCollectionImpl",
                "LabelItemCollection",
              ],
            },
            (e) => e.LabelItemCollectionImpl || e.LabelItemCollection
          )
      },
      67880: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { MsgCollection: "MsgCollectionImpl" },
            (e) => e.MsgCollectionImpl
          )
      },
      1160: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { MsgInfoCollection: "MsgInfoCollectionImpl" },
            (e) => e.MsgInfoCollectionImpl
          )
      },
      58383: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { ParticipantCollection: ["ParticipantCollection"] },
            (e) => e.ParticipantCollection
          )
      },
      22712: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { MuteCollection: "MuteCollectionImpl" },
            (e) => e.MuteCollectionImpl
          )
      },
      21865: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { OrderCollection: "OrderCollectionImpl" },
            (e) => e.OrderCollectionImpl
          )
      },
      27082: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              OrderItemCollection: [
                "OrderItemCollectionImpl",
                "OrderItemCollection",
              ],
            },
            (e) => e.OrderItemCollectionImpl || e.OrderItemCollection
          )
      },
      2100: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { ParticipantCollection: ["default"] },
            (e) => e.default.prototype.iAmMember
          )
      },
      74308: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { PresenceCollection: "PresenceCollectionImpl" },
            (e) => e.PresenceCollectionImpl || e.PresenceCollection
          )
      },
      6384: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              ProductCollCollection: [
                "ProductCollCollectionImpl",
                "ProductCollCollection",
              ],
            },
            (e) => e.ProductCollCollectionImpl || e.ProductCollCollection
          )
      },
      88354: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              ProductCollection: ["ProductCollectionImpl", "ProductCollection"],
            },
            (e) => e.ProductCollectionImpl || e.ProductCollection
          )
      },
      99013: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              ProductImageCollection: [
                "ProductImageCollectionImpl",
                "ProductImageCollection",
              ],
            },
            (e) => e.ProductImageCollectionImpl || e.ProductImageCollection
          )
      },
      9239: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              ProductMessageListCollection: "ProductMessageListCollectionImpl",
            },
            (e) => e.ProductMessageListCollectionImpl
          )
      },
      39240: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { ProfilePicThumbCollection: "ProfilePicThumbCollectionImpl" },
            (e) => e.ProfilePicThumbCollectionImpl
          )
      },
      79320: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { QuickReplyCollection: "QuickReplyCollectionImpl" },
            (e) => e.QuickReplyCollectionImpl
          )
      },
      9601: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(93316),
          (0, n.exportModule)(
            t,
            { ReactionsCollection: "ReactionsCollectionImpl" },
            (e) => e.ReactionsCollectionImpl
          )
      },
      76363: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { ReactionsSendersCollection: "ReactionsSendersCollection" },
            (e) => e.ReactionsSendersCollection
          )
      },
      37354: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { RecentEmojiCollection: "RecentEmojiCollectionImpl" },
            (e) => e.RecentEmojiCollectionImpl
          )
      },
      17987: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { RecentStickerCollection: "RecentStickerCollectionImpl" },
            (e) => e.RecentStickerCollectionImpl
          )
      },
      18393: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            {
              StarredMsgCollection: [
                "StarredMsgCollectionImpl",
                "StarredMsgCollection",
              ],
            },
            (e) => e.StarredMsgCollectionImpl || e.StarredMsgCollection
          )
      },
      85959: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(12105),
          (0, n.exportModule)(
            t,
            { StatusCollection: "StatusCollectionImpl" },
            (e) => e.StatusCollectionImpl
          )
      },
      23572: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(12105),
          (0, n.exportModule)(
            t,
            { StatusV3Collection: "StatusV3CollectionImpl" },
            (e) => e.StatusV3CollectionImpl || e.StatusV3Collection
          )
      },
      87210: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { StickerCollection: "StickerCollectionImpl" },
            (e) => e.StickerCollectionImpl || e.StickerCollection
          )
      },
      84471: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { StickerPackCollection: "StickerPackCollectionImpl" },
            (e) => e.StickerPackCollectionImpl
          )
      },
      69634: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { StickerSearchCollection: "StickerSearchCollectionImpl" },
            (e) => e.StickerSearchCollectionImpl
          )
      },
      40999: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(60193),
          (0, n.exportModule)(
            t,
            { TemplateButtonCollection: "TemplateButtonCollection" },
            (e) => e.TemplateButtonCollectionImpl || e.TemplateButtonCollection
          )
      },
      12105: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(28922), t),
          o(r(93316), t),
          o(r(924), t),
          o(r(51150), t),
          o(r(21330), t),
          o(r(83573), t),
          o(r(96993), t),
          o(r(22523), t),
          o(r(25716), t),
          o(r(10674), t),
          o(r(29683), t),
          o(r(27462), t),
          o(r(60193), t),
          o(r(54477), t),
          o(r(54477), t),
          o(r(54477), t),
          o(r(16794), t),
          o(r(58699), t),
          o(r(86451), t),
          o(r(35052), t),
          o(r(67880), t),
          o(r(1160), t),
          o(r(58383), t),
          o(r(22712), t),
          o(r(21865), t),
          o(r(27082), t),
          o(r(2100), t),
          o(r(74308), t),
          o(r(6384), t),
          o(r(88354), t),
          o(r(99013), t),
          o(r(9239), t),
          o(r(39240), t),
          o(r(79320), t),
          o(r(9601), t),
          o(r(76363), t),
          o(r(37354), t),
          o(r(17987), t),
          o(r(18393), t),
          o(r(85959), t),
          o(r(23572), t),
          o(r(87210), t),
          o(r(84471), t),
          o(r(69634), t),
          o(r(40999), t)
      },
      34491: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { DROP_ATTR: ["DROP_ATTR"] },
            (e) => e.DROP_ATTR
          )
      },
      40504: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { SANITIZED_VERSION_STR: ["SANITIZED_VERSION_STR"] },
            (e) => e.SANITIZED_VERSION_STR
          )
      },
      19198: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(34491), t),
          o(r(40504), t)
      },
      91979: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              ACK: ["ACK", "default.ACK"],
              EDIT_ATTR: ["EDIT_ATTR", "default.EDIT_ATTR"],
              ACK_STRING: ["ACK_STRING", "default.ACK_STRING"],
            },
            (e) =>
              (e.ACK && e.ACK_STRING) || (e.default.ACK && e.default.ACK_STRING)
          )
      },
      48077: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { CALL_STATES: "CALL_STATES" },
            (e) => e.CALL_STATES
          )
      },
      49193: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              GROUP_SETTING_TYPE: [
                "GROUP_SETTING_TYPE",
                "default.GROUP_SETTING_TYPE",
              ],
            },
            (e) => e.GROUP_SETTING_TYPE || e.default.GROUP_SETTING_TYPE
          )
      },
      10611: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { KIC_ENTRY_POINT_TYPE: "KIC_ENTRY_POINT_TYPE" },
            (e) => e.KIC_ENTRY_POINT_TYPE
          )
      },
      14774: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { LogoutReason: "LogoutReason" },
            (e) => e.LogoutReason
          )
      },
      48486: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              MSG_TYPE: ["MSG_TYPE", "default.MSG_TYPE"],
              SYSTEM_MESSAGE_TYPES: [
                "SYSTEM_MESSAGE_TYPES",
                "default.SYSTEM_MESSAGE_TYPES",
              ],
            },
            (e) => e.MSG_TYPE || e.default.MSG_TYPE
          )
      },
      63718: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { OUTWARD_TYPES: "OUTWARD_TYPES" },
            (e) => e.OUTWARD_TYPES
          )
      },
      89763: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              SOCKET_STATE: ["SOCKET_STATE", "default.SOCKET_STATE"],
              SOCKET_STREAM: ["SOCKET_STREAM", "default.SOCKET_STREAM"],
              WATCHED_SOCKET_STATE: [
                "WATCHED_SOCKET_STATE",
                "default.WATCHED_SOCKET_STATE",
              ],
            },
            (e) => e.SOCKET_STATE || e.default.SOCKET_STATE
          )
      },
      40936: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { SendMsgResult: "SendMsgResult" },
            (e) => e.SendMsgResult
          )
      },
      20514: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(91979), t),
          o(r(48077), t),
          o(r(49193), t),
          o(r(10611), t),
          o(r(14774), t),
          o(r(48486), t),
          o(r(63718), t),
          o(r(40936), t)
      },
      54993: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.wrapModuleFunction =
            t.exportProxyModel =
            t.exportModule =
            t._moduleIdMap =
              void 0)
        const a = s(r(17833)),
          u = r(22418),
          c = r(62857),
          l = i(r(1132)),
          d = (0, a.default)("WA-JS:export")
        class f extends WeakMap {
          constructor() {
            super(...arguments), (this.stringMap = new Map())
          }
          delete(e) {
            return "string" == typeof e
              ? this.stringMap.delete(e)
              : super.delete(e)
          }
          get(e) {
            return "string" == typeof e ? this.stringMap.get(e) : super.get(e)
          }
          has(e) {
            return "string" == typeof e ? this.stringMap.has(e) : super.has(e)
          }
          set(e, t) {
            return "string" == typeof e
              ? (this.stringMap.set(e, t), this)
              : (super.set(e, t), this)
          }
        }
        const p = new f(),
          g = new f()
        function m(e, t, r) {
          "string" == typeof t && (t = { [t]: null })
          for (const n of Object.keys(t)) {
            const o = t[n]
            Object.defineProperty(e, n, {
              enumerable: !0,
              configurable: !0,
              get() {
                let e, t
                const i = l.searchId(r)
                if (!i) {
                  const e = `Module ${n} was not found with ${r.toString()}`
                  return (
                    console.error(e),
                    (0, u.trackException)(e),
                    void Object.defineProperty(this, n, { get: () => {} })
                  )
                }
                const s = l.loadModule(i)
                if (Array.isArray(o)) {
                  for (const r of o)
                    if (
                      ((e = () =>
                        r
                          .split(".")
                          .reduce((e, t) => (null == e ? void 0 : e[t]), s)),
                      e())
                    ) {
                      t = r
                      break
                    }
                  if (!e()) {
                    const e = `Property ${o.join(
                      " or "
                    )} was not found for ${n} in module ${i}`
                    return (
                      console.error(e),
                      (0, u.trackException)(e),
                      void Object.defineProperty(this, n, { get: () => {} })
                    )
                  }
                } else if ("string" == typeof o) {
                  if (
                    ((e = () =>
                      o
                        .split(".")
                        .reduce((e, t) => (null == e ? void 0 : e[t]), s)),
                    !e())
                  ) {
                    const e = `Property ${o} was not found for ${n} in module ${i}`
                    return (
                      console.error(e),
                      (0, u.trackException)(e),
                      void Object.defineProperty(this, n, { get: () => {} })
                    )
                  }
                  t = o
                } else e = () => s
                if (e) {
                  Object.defineProperty(this, n, { get: e })
                  try {
                    const r = e()
                    p.set(r, i), t && g.set(r, t)
                  } catch (e) {}
                  return e()
                }
                Object.defineProperty(this, n, { get: () => {} })
              },
            })
          }
        }
        ;(t._moduleIdMap = p),
          (t.exportModule = m),
          (t.exportProxyModel = function (e, t) {
            const r = t.replace(/Model$/, ""),
              n = [r]
            n.push(r.replace(/^(\w)/, (e) => e.toLowerCase()))
            const o = r.split(/(?=[A-Z])/)
            n.push(o.join("-").toLowerCase()),
              n.push(o.join("_").toLowerCase()),
              m(e, { [t]: ["default", t, r] }, (e) => {
                var o, i, s, a, u, c
                return n.includes(
                  (null ===
                    (i =
                      null === (o = e.default) || void 0 === o
                        ? void 0
                        : o.prototype) || void 0 === i
                    ? void 0
                    : i.proxyName) ||
                    (null ===
                      (a =
                        null === (s = e[t]) || void 0 === s
                          ? void 0
                          : s.prototype) || void 0 === a
                      ? void 0
                      : a.proxyName) ||
                    (null ===
                      (c =
                        null === (u = e[r]) || void 0 === u
                          ? void 0
                          : u.prototype) || void 0 === c
                      ? void 0
                      : c.proxyName)
                )
              })
          }),
          (t.wrapModuleFunction = function (e, r) {
            if ("function" != typeof e)
              return void console.error("func is not a function")
            const n = t._moduleIdMap.get(e)
            if (!n)
              return void console.error("func is not an exported function")
            const o = l.loadModule(n),
              i = g.get(e)
            if (!i) return void console.error("function path was not found")
            d.extend("wrap")(`Wrapping '${i} for module ${n}'`)
            const s = i.split("."),
              a = s.pop()
            if (!a) {
              const e = `function was not found in the module ${n}`
              return console.error(e), void (0, u.trackException)(e)
            }
            const f = s.reduce((e, t) => (null == e ? void 0 : e[t]), o)
            ;(f[a] = (0, c.wrapFunction)(e.bind(f), r)),
              p.set(f[a], n),
              g.set(f[a], i)
          })
      },
      11782: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { GROUP_JID: "GROUP_JID", CHAT_JID: "CHAT_JID" },
            (e) => e.GROUP_JID && e.CHAT_JID && e.wapNodeToVoipXml
          )
      },
      72116: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { addAndSendMessageEdit: "addAndSendMessageEdit" },
            (e) => e.addAndSendMessageEdit
          )
      },
      19885: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { addAndSendMsgToChat: "addAndSendMsgToChat" },
            (e) => e.addAndSendMsgToChat
          )
      },
      55889: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              addToLabelCollection: "addToLabelCollection",
              createLabelItemId: "createLabelItemId",
              getParentCollection: "getParentCollection",
              initializeLabels: "initializeLabels",
              removeLabelFromCollection: "removeLabelFromCollection",
            },
            (e) => e.addToLabelCollection
          )
      },
      50854: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { blockContact: "blockContact", unblockContact: "unblockContact" },
            (e) => e.blockContact && e.unblockContact
          )
      },
      22328: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { calculateFilehashFromBlob: "calculateFilehashFromBlob" },
            (e) => e.calculateFilehashFromBlob
          )
      },
      77082: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { canEditMsg: ["canEditText", "canEditMsg"] },
            (e) => e.canEditMsg || e.canEditText
          )
      },
      71274: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { canReplyMsg: "canReplyMsg" },
            (e) => e.canReplyMsg
          )
      },
      4525: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(1132),
          o = r(54993),
          i = r(57411),
          s = r(43593),
          a = r(41968),
          u = r(80214)
        ;(0, o.exportModule)(
          t,
          {
            changeOptInStatusForExternalWebBeta:
              "changeOptInStatusForExternalWebBeta",
          },
          (e) => e.changeOptInStatusForExternalWebBeta
        ),
          (0, n.injectFallbackModule)("changeOptInStatusForExternalWebBeta", {
            changeOptInStatusForExternalWebBeta: async (e) => {
              await Promise.all([
                (0, a.setWhatsAppWebExternalBetaDirtyBitIdb)(!0),
                (0, a.setWhatsAppWebExternalBetaJoinedIdb)(e),
              ]),
                await (0, i.stopComms)(),
                await (0, i.startWebComms)(),
                await (0, i.startHandlingRequests)(),
                await (0, u.syncABPropsTask)(),
                await (0, s.frontendFireAndForget)(
                  "changeOptInStatusForExternalWebBeta",
                  {}
                ),
                await (0, a.setWhatsAppWebExternalBetaDirtyBitIdb)(!1)
            },
          })
      },
      58652: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              createCollection: "createCollection",
              deleteCollection: "deleteCollection",
              editCollection: "editCollection",
              queryCollectionsIQ: "queryCollectionsIQ",
            },
            (e) => e.createCollection
          )
      },
      37300: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(1132),
          o = r(54993)
        ;(0, o.exportModule)(
          t,
          {
            getNotifyName: "getNotifyName",
            getMentionName: "getMentionName",
            getPremiumMessageName: "getPremiumMessageName",
            getUserid: "getUserid",
            getUserhash: "getUserhash",
            getSearchVerifiedName: "getSearchVerifiedName",
            getHeader: "getHeader",
            getIsMe: "getIsMe",
            getIsUser: "getIsUser",
            getIsGroup: "getIsGroup",
            getIsBroadcast: "getIsBroadcast",
            getIsPSA: "getIsPSA",
            getIsIAS: "getIsIAS",
            getIsSupportAccount: "getIsSupportAccount",
            getIsWAContact: "getIsWAContact",
            getIsMyContact: "getIsMyContact",
            getCanRequestPhoneNumber: "getCanRequestPhoneNumber",
            getShowBusinessCheckmarkAsPrimary:
              "getShowBusinessCheckmarkAsPrimary",
            getShowBusinessCheckmarkAsSecondary:
              "getShowBusinessCheckmarkAsSecondary",
            getShowBusinessCheckmarkInChatlist:
              "getShowBusinessCheckmarkInChatlist",
            getIsDisplayNameApproved: "getIsDisplayNameApproved",
            getShouldForceBusinessUpdate: "getShouldForceBusinessUpdate",
          },
          (e) => e.getIsMyContact
        ),
          (0, n.injectFallbackModule)("getIsMyContact", {
            getNotifyName: (e) => e.notifyName,
            getMentionName: (e) => e.mentionName,
            getPremiumMessageName: (e) => e.premiumMessageName,
            getUserid: (e) => e.userid,
            getUserhash: (e) => e.userhash,
            getSearchVerifiedName: (e) => e.searchVerifiedName,
            getHeader: (e) => e.header,
            getIsMe: (e) => e.isMe,
            getIsUser: (e) => e.isUser,
            getIsGroup: (e) => e.isGroup,
            getIsBroadcast: (e) => e.isBroadcast,
            getIsPSA: (e) => e.isPSA,
            getIsIAS: (e) => e.isIAS,
            getIsSupportAccount: (e) => e.isSupportAccount,
            getIsWAContact: (e) => e.isWAContact,
            getIsMyContact: (e) => e.isMyContact,
            getCanRequestPhoneNumber: (e) => e.canRequestPhoneNumber,
            getShowBusinessCheckmarkAsPrimary: (e) =>
              e.showBusinessCheckmarkAsPrimary,
            getShowBusinessCheckmarkAsSecondary: (e) =>
              e.showBusinessCheckmarkAsSecondary,
            getShowBusinessCheckmarkInChatlist: (e) =>
              e.showBusinessCheckmarkInChatlist,
            getIsDisplayNameApproved: (e) => e.isDisplayNameApproved,
            getShouldForceBusinessUpdate: (e) => e.shouldForceBusinessUpdate,
          }),
          (0, o.exportModule)(
            t,
            {
              getDisplayName: "getDisplayName",
              getPnForLid: "getPnForLid",
              getDisplayNameOrPnForLid: [
                "getUserDisplayNameForLid",
                "getDisplayNameOrPnForLid",
              ],
              getFormattedPhone: "getFormattedPhone",
              getSearchName: "getSearchName",
              getFormattedShortNameWithNonBreakingSpaces:
                "getFormattedShortNameWithNonBreakingSpaces",
              getFormattedShortName: "getFormattedShortName",
              getFormattedName: "getFormattedName",
              getFormattedUser: "getFormattedUser",
            },
            (e) => e.getDisplayName && e.getFormattedName
          ),
          (0, n.injectFallbackModule)("getDisplayName", {
            getDisplayName: (e) => e.displayName,
            getPnForLid: (e) => e.pnForLid,
            getDisplayNameOrPnForLid: (e) => e.displayNameOrPnForLid,
            getFormattedPhone: (e) => e.formattedPhone,
            getSearchName: (e) => e.searchName,
            getFormattedShortNameWithNonBreakingSpaces: (e) =>
              e.formattedShortNameWithNonBreakingSpaces,
            getFormattedShortName: (e) => e.formattedShortName,
            getFormattedName: (e) => e.formattedName,
            getFormattedUser: (e) => e.formattedUser,
          })
      },
      95612: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { createFanoutMsgStanza: "createFanoutMsgStanza" },
            (e) => e.createFanoutMsgStanza
          )
      },
      97718: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { createGroup: "createGroup" },
            (e) => e.createGroup && !e.sendForNeededAddRequest
          )
      },
      7967: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { createMsgProtobuf: "createMsgProtobuf" },
            (e) => e.createMsgProtobuf
          )
      },
      28940: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { createNewsletterQuery: "createNewsletterQuery" },
            (e) => e.createNewsletterQuery
          )
      },
      48441: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { createOrUpdateReactions: "createOrUpdateReactions" },
            (e) => e.createOrUpdateReactions
          )
      },
      25882: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { currencyForCountryShortcode: ["currencyForCountryShortcode"] },
            (e) => e.currencyForCountryShortcode
          )
      },
      51137: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { deleteNewsletter: "deleteNewsletter" },
            (e) => e.deleteNewsletter
          )
      },
      85882: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { editBusinessProfile: "editBusinessProfile" },
            (e) => e.editBusinessProfile
          )
      },
      82641: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { editNewsletterMetadataAction: "editNewsletterMetadataAction" },
            (e) => e.editNewsletterMetadataAction
          )
      },
      4375: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { encodeMaybeMediaType: "encodeMaybeMediaType" },
            (e) => e.encodeMaybeMediaType
          )
      },
      16877: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { encryptAndSendGroupMsg: "encryptAndSendGroupMsg" },
            (e) => e.encryptAndSendGroupMsg
          )
      },
      53008: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { encryptAndSendMsg: "encryptAndSendMsg" },
            (e) => e.encryptAndSendMsg
          )
      },
      32: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { encryptAndSendSenderKeyMsg: "encryptAndSendSenderKeyMsg" },
            (e) => e.encryptAndSendSenderKeyMsg
          )
      },
      34040: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { encryptMsgProtobuf: "encryptMsgProtobuf" },
            (e) => e.encryptMsgProtobuf
          )
      },
      6357: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132))
        ;(0, r(54993).exportModule)(
          t,
          { fetchLinkPreview: ["getLinkPreview", "default"] },
          (e, t) => {
            if (e.getLinkPreview && !e.getAck) return !0
            const r = s.moduleSource(t)
            return (
              r.includes(".genMinimalLinkPreview") &&
              r.includes(".getProductOrCatalogLinkPreview")
            )
          }
        )
      },
      34324: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { findChat: "findChat" },
            (e) => e.findChat
          )
      },
      49035: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { findCommonGroups: "findCommonGroups" },
            (e) => e.findCommonGroups
          )
      },
      95554: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { findFirstWebLink: "findFirstWebLink" },
            (e) => e.findFirstWebLink
          )
      },
      64538: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(1132),
          o = r(54993),
          i = r(40649)
        ;(0, o.exportModule)(
          t,
          { forwardMessagesToChats: "forwardMessagesToChats" },
          (e) => e.forwardMessagesToChats
        ),
          (0, n.injectFallbackModule)("forwardMessagesToChats", {
            forwardMessagesToChats: (e, t, r) =>
              i.ChatStore.forwardMessagesToChats(e, t, r),
          })
      },
      43593: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { frontendFireAndForget: "frontendFireAndForget" },
            (e) => e.frontendFireAndForget
          )
      },
      47440: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              genLinkDeviceCodeForPhoneNumber:
                "genLinkDeviceCodeForPhoneNumber",
            },
            (e) => e.genLinkDeviceCodeForPhoneNumber
          )
      },
      25602: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { genMinimalLinkPreview: "genMinimalLinkPreview" },
            (e) => e.genMinimalLinkPreview
          )
      },
      85541: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              generateVideoThumbsAndDuration: "generateVideoThumbsAndDuration",
            },
            (e) => e.generateVideoThumbsAndDuration
          )
      },
      95524: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getABPropConfigValue: "getABPropConfigValue" },
            (e) => e.getABPropConfigValue
          )
      },
      92538: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getAsMms: "getAsMms" },
            (e) => e.getAsMms
          )
      },
      42930: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getCommunityParticipants: "getCommunityParticipants" },
            (e) => e.getCommunityParticipants
          )
      },
      19553: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getCountryShortcodeByPhone: ["getCountryShortcodeByPhone"] },
            (e) => e.getCountryShortcodeByPhone
          )
      },
      79731: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getCurrentLid: "getCurrentLid" },
            (e) => e.getCurrentLid
          )
      },
      92787: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getEphemeralFields: "getEphemeralFields" },
            (e) => e.getEphemeralFields
          )
      },
      86362: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getFanOutList: "getFanOutList" },
            (e) => e.getFanOutList
          )
      },
      58084: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              getGroupSenderKeyList: "getGroupSenderKeyList",
              markForgetSenderKey: "markForgetSenderKey",
            },
            (e) => e.getGroupSenderKeyList
          )
      },
      66852: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getGroupSizeLimit: "getGroupSizeLimit" },
            (e) => e.getGroupSizeLimit
          )
      },
      6281: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              getHistorySyncProgress: [
                "getHistorySyncProgressModel",
                "getHistorySyncProgress",
              ],
            },
            (e) =>
              e.getHistorySyncProgressModel ||
              (e.getHistorySyncProgress && !e.getHistorySyncLogDetailsString)
          )
      },
      54616: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getMembershipApprovalRequests: "getMembershipApprovalRequests" },
            (e) => e.getMembershipApprovalRequests
          )
      },
      21236: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getNumChatsPinned: "getNumChatsPinned" },
            (e) => e.getNumChatsPinned
          )
      },
      29473: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getOrderInfo: "getOrderInfo" },
            (e) => e.getOrderInfo
          )
      },
      55631: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getParticipants: "getParticipants" },
            (e) => e.getParticipants && e.addParticipants
          )
      },
      65130: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getPushname: "getPushname" },
            (e) => e.getPushname && e.setBrowserId
          )
      },
      21427: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getQuotedMsgObj: "getQuotedMsgObj" },
            (e) => e.getQuotedMsgObj
          )
      },
      23749: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getReactions: "getReactions" },
            (e) => e.getReactions
          )
      },
      73890: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getSearchContext: "getSearchContext" },
            (e) => e.getSearchContext
          )
      },
      22696: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getVotes: "getVotes", getVote: "getVote" },
            (e) => e.getVotes && e.getVote
          )
      },
      41968: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              getWhatsAppWebExternalBetaJoinedIdb: [
                "getWhatsAppWebExternalBetaJoinedIdb",
                "getWhatsAppWebBetaJoined",
              ],
              setWhatsAppWebExternalBetaDirtyBitIdb: [
                "setWhatsAppWebExternalBetaDirtyBitIdb",
                "setWhatsAppWebBetaDirtyBit",
              ],
              setWhatsAppWebExternalBetaJoinedIdb: [
                "setWhatsAppWebExternalBetaJoinedIdb",
                "setWhatsAppWebBetaJoined",
              ],
            },
            (e) =>
              (e.getWhatsAppWebExternalBetaJoinedIdb &&
                e.setWhatsAppWebExternalBetaDirtyBitIdb &&
                e.setWhatsAppWebExternalBetaJoinedIdb) ||
              (e.getWhatsAppWebBetaJoined &&
                e.setWhatsAppWebBetaDirtyBit &&
                e.setWhatsAppWebBetaJoined)
          )
      },
      70772: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              addParticipants: "addParticipants",
              removeParticipants: "removeParticipants",
              promoteCommunityParticipants: "promoteCommunityParticipants",
              promoteParticipants: "promoteParticipants",
              demoteCommunityParticipants: "demoteCommunityParticipants",
              demoteParticipants: "demoteParticipants",
            },
            (e) =>
              e.addParticipants &&
              e.removeParticipants &&
              e.promoteCommunityParticipants &&
              e.promoteParticipants &&
              e.demoteCommunityParticipants &&
              e.demoteParticipants &&
              !e.updateParticipants
          )
      },
      2058: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        ;(0, n.exportModule)(
          t,
          {
            handleStatusSimpleAck: ["handleStatusSimpleReceipt"],
            handleStatusSimpleReceipt: ["handleStatusSimpleReceipt"],
          },
          (e) => e.handleStatusSimpleReceipt
        ),
          (0, n.exportModule)(
            t,
            {
              handleChatSimpleAck: ["handleChatSimpleReceipt"],
              handleChatSimpleReceipt: ["handleChatSimpleReceipt"],
            },
            (e) => e.handleChatSimpleReceipt
          ),
          (0, n.exportModule)(
            t,
            {
              handleGroupSimpleAck: ["handleGroupSimpleReceipt"],
              handleGroupSimpleReceipt: ["handleGroupSimpleReceipt"],
            },
            (e) => e.handleGroupSimpleReceipt
          )
      },
      96954: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { handleSingleMsg: ["handleSingleMsg"] },
            (e) => e.handleSingleMsg
          )
      },
      52757: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(72116), t),
          o(r(19885), t),
          o(r(55889), t),
          o(r(50854), t),
          o(r(22328), t),
          o(r(77082), t),
          o(r(71274), t),
          o(r(4525), t),
          o(r(58652), t),
          o(r(37300), t),
          o(r(95612), t),
          o(r(97718), t),
          o(r(7967), t),
          o(r(28940), t),
          o(r(48441), t),
          o(r(25882), t),
          o(r(51137), t),
          o(r(85882), t),
          o(r(82641), t),
          o(r(4375), t),
          o(r(16877), t),
          o(r(53008), t),
          o(r(32), t),
          o(r(34040), t),
          o(r(6357), t),
          o(r(34324), t),
          o(r(49035), t),
          o(r(95554), t),
          o(r(64538), t),
          o(r(43593), t),
          o(r(85541), t),
          o(r(47440), t),
          o(r(25602), t),
          o(r(95524), t),
          o(r(92538), t),
          o(r(42930), t),
          o(r(19553), t),
          o(r(79731), t),
          o(r(92787), t),
          o(r(86362), t),
          o(r(58084), t),
          o(r(66852), t),
          o(r(6281), t),
          o(r(54616), t),
          o(r(21236), t),
          o(r(29473), t),
          o(r(55631), t),
          o(r(65130), t),
          o(r(21427), t),
          o(r(23749), t),
          o(r(73890), t),
          o(r(22696), t),
          o(r(41968), t),
          o(r(11782), t),
          o(r(70772), t),
          o(r(2058), t),
          o(r(96954), t),
          o(r(89336), t),
          o(r(35454), t),
          o(r(28690), t),
          o(r(1009), t),
          o(r(34601), t),
          o(r(27981), t),
          o(r(24369), t),
          o(r(87071), t),
          o(r(946), t),
          o(r(64119), t),
          o(r(43002), t),
          o(r(74323), t),
          o(r(92111), t),
          o(r(14877), t),
          o(r(6678), t),
          o(r(58625), t),
          o(r(65005), t),
          o(r(65512), t),
          o(r(35154), t),
          o(r(51262), t),
          o(r(9534), t),
          o(r(90087), t),
          o(r(33433), t),
          o(r(18827), t),
          o(r(1703), t),
          o(r(76030), t),
          o(r(72110), t),
          o(r(42556), t),
          o(r(99544), t),
          o(r(10200), t),
          o(r(11370), t),
          o(r(67047), t),
          o(r(7882), t),
          o(r(2571), t),
          o(r(54649), t),
          o(r(63028), t),
          o(r(17472), t),
          o(r(40502), t),
          o(r(97920), t),
          o(r(98927), t),
          o(r(43410), t),
          o(r(59502), t),
          o(r(34910), t),
          o(r(35603), t),
          o(r(80214), t),
          o(r(958), t),
          o(r(54530), t),
          o(r(84236), t),
          o(r(50481), t),
          o(r(69758), t),
          o(r(21475), t),
          o(r(88570), t),
          o(r(26206), t),
          o(r(43068), t),
          o(r(76418), t),
          o(r(99481), t)
      },
      89336: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { initializeAltDeviceLinking: "initializeAltDeviceLinking" },
            (e) => e.initializeAltDeviceLinking
          )
      },
      35454: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { isAnimatedWebp: "isAnimatedWebp" },
            (e) => e.isAnimatedWebp
          )
      },
      28690: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              isAuthenticated: ["isLoggedIn", "Z"],
              isLoggedIn: ["isLoggedIn", "Z"],
            },
            (e) => {
              var t, r
              return (
                ((null === (t = e.Z) || void 0 === t
                  ? void 0
                  : t.toString().includes("isRegistered")) &&
                  (null === (r = e.Z) || void 0 === r
                    ? void 0
                    : r.toString().includes("getLoginTokens"))) ||
                e.isLoggedIn
              )
            }
          )
      },
      1009: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { isRegistered: ["isRegistered"] },
            (e) => e.isRegistered
          )
      },
      34601: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              isUnreadTypeMsg: [
                "isUnreadTypeMsg",
                "isUnreadType",
                "getIsUnreadType",
              ],
            },
            (e) => e.isUnreadTypeMsg || e.isUnreadType || e.getIsUnreadType
          )
      },
      27981: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { joinGroupViaInvite: "joinGroupViaInvite" },
            (e) => e.joinGroupViaInvite && e.resetGroupInviteCode
          )
      },
      24369: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { keepMessage: "keepMessage", undoKeepMessage: "undoKeepMessage" },
            (e) => e.keepMessage
          )
      },
      87071: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        ;(0, n.exportModule)(
          t,
          { markUnread: "markUnread", sendSeen: "sendSeen" },
          (e) => e.markUnread && e.sendSeen
        ),
          (0, n.exportModule)(
            t,
            { markPlayed: "markPlayed", canMarkPlayed: "canMarkPlayed" },
            (e) => e.markPlayed
          )
      },
      946: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { mediaTypeFromProtobuf: "mediaTypeFromProtobuf" },
            (e) => e.mediaTypeFromProtobuf
          )
      },
      64119: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              membershipApprovalRequestAction:
                "membershipApprovalRequestAction",
            },
            (e) => e.membershipApprovalRequestAction
          )
      },
      43002: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { msgDataFromMsgModel: "msgDataFromMsgModel" },
            (e) => e.msgDataFromMsgModel
          )
      },
      74323: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { msgFindQuery: "msgFindQuery" },
            (e) =>
              (e.msgFindQuery && e.msgFindByIds) ||
              (e.msgFindQuery && e.getMsgsByMsgKey)
          )
      },
      92111: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { muteNewsletter: "muteNewsletter" },
            (e) => e.muteNewsletter
          )
      },
      14877: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { processRawAudioVideo: "processRawAudioVideo" },
            (e) => e.processRawAudioVideo
          )
      },
      6678: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { processRawMedia: ["processRawMedia", "default"] },
            (e) => {
              var t, r
              return (
                e.processRawMedia ||
                (null ===
                  (r =
                    null === (t = e.default) || void 0 === t
                      ? void 0
                      : t.toString) || void 0 === r
                  ? void 0
                  : r.call(t).includes("Received unsupported mediaType"))
              )
            }
          )
      },
      58625: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { processRawSticker: "processRawSticker" },
            (e) => e.processRawSticker
          )
      },
      65512: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { productVisibilitySet: "productVisibilitySet" },
            (e) => e.productVisibilitySet
          )
      },
      65005: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              addProduct: "addProduct",
              editProduct: "editProduct",
              deleteProducts: "deleteProducts",
              sendProductToChat: "sendProductToChat",
              queryCatalog: "queryCatalog",
              queryProduct: "queryProduct",
              queryProductList: "queryProductList",
            },
            (e) => e.sendProductToChat
          )
      },
      35154: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              sendSetPicture: "sendSetPicture",
              requestDeletePicture: "requestDeletePicture",
            },
            (e) => e.sendSetPicture && e.requestDeletePicture
          )
      },
      51262: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { queryAllGroups: "queryAllGroups" },
            (e) => e.queryAllGroups
          )
      },
      9534: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { queryGroupInviteCode: "queryGroupInviteCode" },
            (e) => e.queryGroupInviteCode && e.resetGroupInviteCode
          )
      },
      90087: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { queryNewsletterMetadataByJid: "queryNewsletterMetadataByJid" },
            (e) => e.queryNewsletterMetadataByJid
          )
      },
      33433: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { randomHex: "randomHex" },
            (e) => e.randomHex
          )
      },
      18827: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { randomMessageId: ["default.newId"] },
            (e) => e.default.newId
          )
      },
      1703: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { resetGroupInviteCode: "resetGroupInviteCode" },
            (e) => e.resetGroupInviteCode
          )
      },
      76030: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendClear: "sendClear" },
            (e) => e.sendClear && !e.clearStorage
          )
      },
      72110: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              sendCreateCommunity: "sendCreateCommunity",
              sendDeactivateCommunity: "sendDeactivateCommunity",
              sendLinkSubgroups: "sendLinkSubgroups",
              sendUnlinkSubgroups: "sendUnlinkSubgroups",
            },
            (e) => e.sendCreateCommunity
          )
      },
      42556: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(54993),
          u = r(97718)
        ;(0, a.exportModule)(
          t,
          { sendCreateGroup: "sendCreateGroup" },
          (e) => e.sendCreateGroup
        ),
          s.injectFallbackModule("sendCreateGroup", {
            sendCreateGroup: async (e, t, r, n) =>
              await (0, u.createGroup)(e, t, r, n).then((e) => ({
                gid: e.wid,
                participants: e.participants.map((e) => ({
                  userWid: e.wid,
                  code: null != e.error ? e.error.toString() : "200",
                  invite_code: e.invite_code,
                  invite_code_exp: e.invite_code_exp,
                })),
              })),
          })
      },
      99544: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendDelete: "sendDelete" },
            (e) => e.sendDelete
          )
      },
      10200: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendExitGroup: "sendExitGroup" },
            (e) => e.sendExitGroup && e.localExitGroup
          )
      },
      11370: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              sendAddParticipants: [
                "sendAddParticipants",
                "addGroupParticipants",
              ],
              sendRemoveParticipants: [
                "sendRemoveParticipants",
                "removeGroupParticipants",
              ],
              sendPromoteParticipants: [
                "sendPromoteParticipants",
                "promoteGroupParticipants",
              ],
              sendDemoteParticipants: [
                "sendDemoteParticipants",
                "demoteGroupParticipants",
              ],
            },
            (e) =>
              (e.sendAddParticipants &&
                e.sendRemoveParticipants &&
                e.sendPromoteParticipants &&
                e.sendDemoteParticipants) ||
              (e.addGroupParticipants &&
                e.removeGroupParticipants &&
                e.promoteGroupParticipants &&
                e.demoteGroupParticipants)
          )
      },
      67047: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(54993),
          u = r(27981)
        ;(0, a.exportModule)(
          t,
          { sendJoinGroupViaInvite: "sendJoinGroupViaInvite" },
          (e) => e.sendJoinGroupViaInvite
        ),
          s.injectFallbackModule("sendJoinGroupViaInvite", {
            sendJoinGroupViaInvite: async (e) =>
              await (0, u.joinGroupViaInvite)(e).then((e) => e.gid),
          })
      },
      7882: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              sendNewsletterMessageJob: [
                "sendNewsletterMessageJob",
                "sendNewsletterMessage",
              ],
            },
            (e) => e.sendNewsletterMessageJob || e.sendNewsletterMessage
          )
      },
      2571: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendQueryExists: ["queryExists", "queryWidExists"] },
            (e) =>
              (e.queryExists && e.queryPhoneExists) ||
              (e.queryWidExists && e.queryPhoneExists)
          )
      },
      54649: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendQueryGroupInvite: "sendQueryGroupInvite" },
            (e) => e.sendQueryGroupInvite
          )
      },
      63028: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(54993),
          u = r(52757)
        ;(0, a.exportModule)(
          t,
          { sendQueryGroupInviteCode: "sendQueryGroupInviteCode" },
          (e) => e.sendQueryGroupInviteCode
        ),
          s.injectFallbackModule("sendQueryGroupInviteCode", {
            sendQueryGroupInviteCode: async (e) =>
              await (0, u.queryGroupInviteCode)(e).then((e) => e.code),
          })
      },
      17472: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendReactionToMsg: "sendReactionToMsg" },
            (e) => e.sendReactionToMsg
          )
      },
      40502: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(54993),
          u = r(1703)
        ;(0, a.exportModule)(
          t,
          { sendRevokeGroupInviteCode: "sendRevokeGroupInviteCode" },
          (e) => e.sendRevokeGroupInviteCode
        ),
          s.injectFallbackModule("sendRevokeGroupInviteCode", {
            sendRevokeGroupInviteCode: async (e) =>
              await (0, u.resetGroupInviteCode)(e).then((e) => e.code),
          })
      },
      97920: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendTextMsgToChat: "sendTextMsgToChat" },
            (e) => e.sendTextMsgToChat
          )
      },
      98927: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { setArchive: "setArchive" },
            (e) => e.setArchive
          )
      },
      43410: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              sendSetGroupSubject: ["sendSetGroupSubject", "setGroupSubject"],
              sendSetGroupDescription: [
                "sendSetGroupDescription",
                "setGroupDescription",
              ],
              sendSetGroupProperty: [
                "sendSetGroupProperty",
                "setGroupProperty",
              ],
            },
            (e) =>
              (e.sendSetGroupSubject &&
                e.sendSetGroupDescription &&
                e.sendSetGroupProperty) ||
              (e.setGroupSubject && e.setGroupDescription && e.setGroupProperty)
          )
      },
      59502: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { setPin: "setPin" },
            (e) => e.setPin && !e.unpinAll
          )
      },
      34910: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { setPushname: "setPushname" },
            (e) => e.setPushname && !e.setBrowserId
          )
      },
      35603: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { getStatus: "getStatus", setMyStatus: "setMyStatus" },
            (e) => e.getStatus && e.setMyStatus && e.queryStatusAll
          )
      },
      80214: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { syncABPropsTask: "syncABPropsTask" },
            (e) => e.syncABPropsTask
          )
      },
      958: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { typeAttributeFromProtobuf: "typeAttributeFromProtobuf" },
            (e) => e.typeAttributeFromProtobuf
          )
      },
      54530: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        let o = !1
        ;(0, n.exportModule)(
          t,
          {
            unixTime: ["unixTime", "Clock.globalUnixTime"],
            unixTimeMs: ["unixTimeMs", "Clock.globalUnixTimeMilliseconds"],
          },
          (e) => {
            var t, r
            return (
              !!e.unixTime ||
              (!o &&
                (null === (t = e.Clock) || void 0 === t
                  ? void 0
                  : t.globalUnixTime) &&
                ((o = !0),
                (e.Clock.globalUnixTime = e.Clock.globalUnixTime.bind(e.Clock)),
                (e.Clock.globalUnixTimeMilliseconds =
                  e.Clock.globalUnixTimeMilliseconds.bind(e.Clock))),
              null === (r = e.Clock) || void 0 === r
                ? void 0
                : r.globalUnixTime)
            )
          }
        )
      },
      84236: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { unmuteNewsletter: "unmuteNewsletter" },
            (e) => e.unmuteNewsletter
          )
      },
      50481: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { updateCartEnabled: "updateCartEnabled" },
            (e) => e.updateCartEnabled
          )
      },
      69758: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              updateDBForGroupAction: [
                "updateDBForGroupAction",
                "handleGroupActionMD",
              ],
            },
            (e) => e.updateDBForGroupAction || e.handleGroupActionMD
          )
      },
      21475: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              updateNewsletterMsgRecord: "updateNewsletterMsgRecord",
              addNewsletterMsgsRecords: "addNewsletterMsgsRecords",
            },
            (e) => e.updateNewsletterMsgRecord
          )
      },
      88570: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { updateParticipants: "updateParticipants" },
            (e) => e.updateParticipants && e.addParticipants
          )
      },
      26206: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { uploadMedia: "uploadMedia" },
            (e) => e.uploadMedia
          )
      },
      43068: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { uploadProductImage: "uploadProductImage" },
            (e) => e.uploadProductImage && e.MediaPrep
          )
      },
      76418: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132))
        ;(0, r(54993).exportModule)(
          t,
          { uploadThumbnail: "default" },
          (e, t) => {
            if ("WAWebMediaUploadMmsThumbnail" === t) return !0
            const r = s.moduleSource(t)
            return (
              r.includes("thumbnail") &&
              r.includes(".cancelUploadMedia") &&
              r.includes(".calculateFilehashFromBlob")
            )
          }
        )
      },
      99481: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { upsertVotes: ["upsertVotesDb", "upsertVotes"] },
            (e) => e.upsertVotesDb || e.upsertVotes
          )
      },
      14647: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            },
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.websocket =
            t.multidevice =
            t.functions =
            t._moduleIdMap =
            t.enums =
            t.contants =
              void 0),
          i(r(12105), t),
          (t.contants = s(r(19198))),
          (t.enums = s(r(20514)))
        var a = r(54993)
        Object.defineProperty(t, "_moduleIdMap", {
          enumerable: !0,
          get: function () {
            return a._moduleIdMap
          },
        }),
          (t.functions = s(r(52757))),
          i(r(45588), t),
          i(r(51990), t),
          (t.multidevice = s(r(83703))),
          i(r(40649), t),
          (t.websocket = s(r(57411)))
      },
      84513: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            "Base64",
            (e) => e.encodeB64 && e.decodeB64
          )
      },
      48212: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { Browser: "default" },
            (e) => e.default.id && e.default.startDownloading
          )
      },
      91033: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, "ChatPresence", (e) => e.markComposing)
      },
      35276: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(45588),
          (0, n.exportModule)(
            t,
            { CmdClass: "CmdImpl", Cmd: "Cmd" },
            (e) => e.Cmd && e.CmdImpl
          )
      },
      19336: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { Conn: "Conn" },
            (e) => e.Conn && e.ConnImpl
          )
      },
      42865: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { Constants: "default" },
            (e) => e.default.IMG_THUMB_MAX_EDGE
          )
      },
      26740: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { EventEmitter: "default" },
            (e, t) =>
              "WAWebEventEmitter" === t ||
              e.default
                .toString()
                .includes("Callback parameter passed is not a function")
          )
      },
      33216: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, "ImageUtils", (e) => e.rotateAndResize)
      },
      4749: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              MediaBlobCacheImpl: [
                "InMemoryMediaBlobCacheImpl",
                "MediaBlobCacheImpl",
              ],
              MediaBlobCache: ["InMemoryMediaBlobCache", "MediaBlobCache"],
            },
            (e) => e.InMemoryMediaBlobCacheImpl || e.MediaBlobCache
          )
      },
      32974: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { MediaEntry: ["EncryptedMediaEntry", "MediaEntry"] },
            (e) => e.EncryptedMediaEntry || e.MediaEntry
          )
      },
      78959: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { MediaObject: "MediaObject" },
            (e) => e.webMediaTypeToWamMediaType
          )
      },
      69675: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            "MediaObjectUtil",
            (e) => e.getOrCreateMediaObject
          )
      },
      91911: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            "MediaPrep",
            (e) => e.uploadProductImage && e.MediaPrep
          )
      },
      33115: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            "MediaUtils",
            (e) => e.getImageWidthHeight
          )
      },
      18358: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, { MsgKey: "default" }, (e) =>
            e.default.toString().includes("MsgKey error: obj is null/undefined")
          )
      },
      66680: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }), r(12105)
        const n = r(54993)
        r(51990),
          (0, n.exportModule)(
            t,
            { MsgLoadState: "MsgLoadState", MsgLoad: "ChatMsgsCollection" },
            (e) => e.MsgLoadState
          )
      },
      19424: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { NetworkStatus: "default" },
            (e) => e.default.checkOnline
          )
      },
      84229: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        ;(0, n.exportModule)(
          t,
          { OpaqueDataBase: "default" },
          (e) => e.default.prototype.throwIfReleased
        ),
          (0, n.exportModule)(
            t,
            { OpaqueData: "default" },
            (e) => e.default.createFromData
          )
      },
      74070: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { ProductCatalogSession: "ProductCatalogSession" },
            (e) => e.ProductCatalogSession
          )
      },
      65931: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { ServerProps: "ServerProps" },
            (e) => e.getMaxFilesSizeServerProp && e.ServerProps
          )
      },
      82183: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, { Socket: "Socket" }, (e) => e.Socket)
      },
      40302: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, { Stream: "Stream" }, (e) => e.Stream)
      },
      43871: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, "UserPrefs", (e) => e.getMaybeMeUser)
      },
      70924: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, "VCard", (e) => e.vcardFromContactModel)
      },
      94484: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { Wid: "default" },
            (e) => e.default.isXWid
          )
      },
      43996: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, "WidFactory", (e) => e.createWid)
      },
      45588: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(84513), t),
          o(r(48212), t),
          o(r(91033), t),
          o(r(35276), t),
          o(r(19336), t),
          o(r(42865), t),
          o(r(26740), t),
          o(r(33216), t),
          o(r(4749), t),
          o(r(32974), t),
          o(r(78959), t),
          o(r(69675), t),
          o(r(91911), t),
          o(r(33115), t),
          o(r(18358), t),
          o(r(66680), t),
          o(r(19424), t),
          o(r(84229), t),
          o(r(74070), t),
          o(r(65931), t),
          o(r(82183), t),
          o(r(40302), t),
          o(r(43871), t),
          o(r(70924), t),
          o(r(94484), t),
          o(r(43996), t)
      },
      10298: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "AggReactionsModel")
      },
      38656: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "AttachMediaModel")
      },
      27502: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "BlocklistModel")
      },
      51478: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "BusinessCategoriesResultModel")
      },
      33436: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "BusinessProfileModel")
      },
      98651: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "CallModel")
      },
      78490: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "CallParticipantModel")
      },
      5424: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "CartItemModel")
      },
      55001: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "CartModel")
      },
      84424: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "CatalogModel")
      },
      19717: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(29836), (0, n.exportProxyModel)(t, "ChatModel")
      },
      28702: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ChatPreferenceModel")
      },
      57516: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { ChatstateModel: "Chatstate" },
            (e) => e.Chatstate && e.ChatstateCollection
          )
      },
      27961: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(t, { ConnModel: "ConnImpl" }, (e) => e.ConnImpl)
      },
      89853: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ContactModel")
      },
      39467: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ConversionTupleModel")
      },
      52710: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "EmojiVariantModel")
      },
      84291: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "GroupMetadataModel")
      },
      43669: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(1132)),
          a = r(54993),
          u = r(52757)
        r(8375),
          (0, a.exportModule)(
            t,
            { HistorySyncProgressModel: "HistorySyncProgressModel" },
            (e) => e.HistorySyncProgressModel
          )
        const c = {}
        Object.defineProperty(c, "HistorySyncProgressModel", {
          configurable: !0,
          enumerable: !0,
          get: () => (0, u.getHistorySyncProgress)().constructor,
        }),
          s.injectFallbackModule("HistorySyncProgressModel", c)
      },
      74910: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "LabelItemModel")
      },
      30207: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "LabelModel")
      },
      67437: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "MediaDataModel")
      },
      8375: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(45588),
          (0, n.exportModule)(t, { Model: "BaseModel" }, (e) => e.defineModel)
      },
      29836: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { ModelChatBase: "default" },
            (e, t) =>
              "WAWebSuperChatMsgs" === t ||
              e.default.toString().includes("onEmptyMRM not implemented")
          )
      },
      35717: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "MsgButtonReplyMsgModel")
      },
      41202: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "MsgInfoModel")
      },
      88753: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "MsgInfoParticipantModel")
      },
      99090: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "MsgModel")
      },
      51868: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "MuteModel")
      },
      17993: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { NetworkStatusModel: "default.constructor" },
            (e) => e.default.checkOnline
          )
      },
      40688: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "OrderItemModel")
      },
      55961: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "OrderModel")
      },
      88758: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ParticipantModel")
      },
      53356: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { PresenceModel: "Presence" },
            (e) => e.Presence && e.ChatstateCollection
          )
      },
      62078: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ProductCollModel")
      },
      60771: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ProductImageModel")
      },
      11685: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { ProductMessageListModel: "ProductMessageList" },
            (e) => e.ProductMessageList
          )
      },
      68364: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ProductModel")
      },
      18486: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ProfilePicThumbModel")
      },
      76520: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "QuickReplyModel")
      },
      37285: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ReactionsModel")
      },
      83497: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ReactionsSendersModel")
      },
      49040: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "RecentEmojiModel")
      },
      56875: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "RecentStickerModel")
      },
      42217: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "ReplyButtonModel")
      },
      23752: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { ServerPropsModel: "ServerProps" },
            (e) => e.getMaxFilesSizeServerProp && e.ServerProps
          )
      },
      38428: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(t, { Socket: "Socket.constructor" }, (e) => {
            var t
            return null === (t = e.Socket) || void 0 === t ? void 0 : t.initConn
          })
      },
      8489: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "StatusModel")
      },
      77104: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(29836), (0, n.exportProxyModel)(t, "StatusV3Model")
      },
      4268: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "StickerModel")
      },
      45287: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "StickerPackModel")
      },
      15567: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375),
          (0, n.exportModule)(
            t,
            { StreamModel: "Stream.constructor" },
            (e) => e.Stream
          )
      },
      30781: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "TemplateButtonModel")
      },
      25468: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(54993)
        r(8375), (0, n.exportProxyModel)(t, "UnreadMentionModel")
      },
      51990: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(10298), t),
          o(r(38656), t),
          o(r(27502), t),
          o(r(51478), t),
          o(r(33436), t),
          o(r(98651), t),
          o(r(78490), t),
          o(r(5424), t),
          o(r(55001), t),
          o(r(84424), t),
          o(r(19717), t),
          o(r(28702), t),
          o(r(57516), t),
          o(r(27961), t),
          o(r(89853), t),
          o(r(39467), t),
          o(r(52710), t),
          o(r(84291), t),
          o(r(43669), t),
          o(r(74910), t),
          o(r(30207), t),
          o(r(67437), t),
          o(r(8375), t),
          o(r(29836), t),
          o(r(35717), t),
          o(r(41202), t),
          o(r(88753), t),
          o(r(99090), t),
          o(r(51868), t),
          o(r(17993), t),
          o(r(40688), t),
          o(r(55961), t),
          o(r(88758), t),
          o(r(88758), t),
          o(r(53356), t),
          o(r(62078), t),
          o(r(60771), t),
          o(r(11685), t),
          o(r(68364), t),
          o(r(18486), t),
          o(r(76520), t),
          o(r(37285), t),
          o(r(83497), t),
          o(r(49040), t),
          o(r(56875), t),
          o(r(42217), t),
          o(r(23752), t),
          o(r(38428), t),
          o(r(8489), t),
          o(r(77104), t),
          o(r(4268), t),
          o(r(45287), t),
          o(r(15567), t),
          o(r(30781), t),
          o(r(25468), t)
      },
      1570: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            "adv",
            (e) => e.getADVSecretKey && e.setADVSignedIdentity
          )
      },
      83703: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(1570), t),
          o(r(91921), t),
          o(r(60154), t)
      },
      91921: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { waNoiseInfo: "waNoiseInfo" },
            (e) => e.waNoiseInfo
          )
      },
      60154: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { waSignalStore: "waSignalStore" },
            (e) => e.waSignalStore
          )
      },
      40649: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r)
              return o(t, e), t
            }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const s = i(r(12105)),
          a = r(54993),
          u = [
            "BlocklistStore",
            "BusinessCategoriesResultStore",
            "BusinessProfileStore",
            "CallStore",
            "CartStore",
            "CatalogStore",
            "ChatStore",
            "NewsletterStore",
            "ContactStore",
            "EmojiVariantStore",
            "GroupMetadataStore",
            "LabelStore",
            "MsgStore",
            "MsgInfoStore",
            "MuteStore",
            "OrderStore",
            "PresenceStore",
            "ProductMessageListStore",
            "ProfilePicThumbStore",
            "QuickReplyStore",
            "ReactionsStore",
            "RecentEmojiStore",
            "StatusStore",
            "StatusV3Store",
            "StickerStore",
            "StickerSearchStore",
          ]
        for (const e of u) {
          const r = e.replace("Store", "Collection")
          ;(0, a.exportModule)(
            t,
            { [e]: ["default", r] },
            (e) => (e.default || e[r]) instanceof s[r]
          )
        }
        ;(0, a.exportModule)(
          t,
          {
            RecentStickerStore: [
              "default",
              "RecentStickerCollectionMd",
              "RecentStickerCollection",
            ],
          },
          (e) => e.RecentStickerCollection
        ),
          (0, a.exportModule)(
            t,
            { StarredMsgStore: ["default", "AllStarredMsgsCollection"] },
            (e) => e.StarredMsgCollection
          ),
          (0, a.exportModule)(
            t,
            {
              StickerPackStore: [
                "default",
                "StickerPackCollectionMd",
                "StickerPackCollection",
              ],
            },
            (e) => e.StickerPackCollection
          ),
          (0, a.exportModule)(
            t,
            { NewsletterStore: "default.NewsletterCollection" },
            (e) => e.default.NewsletterCollection
          )
      },
      34439: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { WapNode: "WapNode" },
            (e) => e.WapNode
          )
      },
      57346: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { ensureE2ESessions: "ensureE2ESessions" },
            (e) => e.ensureE2ESessions
          )
      },
      12045: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { generateId: "generateId" },
            (e) => e.generateId
          )
      },
      57411: function (e, t, r) {
        "use strict"
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r)
                  var o = Object.getOwnPropertyDescriptor(t, r)
                  ;(o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[r]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r)
            }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(57346), t),
          o(r(12045), t),
          o(r(82257), t),
          o(r(82590), t),
          o(r(49440), t),
          o(r(81894), t),
          o(r(6123), t),
          o(r(34439), t)
      },
      82257: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { sendSmaxStanza: "sendSmaxStanza" },
            (e) => e.sendSmaxStanza
          )
      },
      82590: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, { smax: "smax" }, (e) => e.smax)
      },
      49440: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            { startWebComms: "startWebComms" },
            (e) => e.startWebComms
          )
      },
      81894: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(
            t,
            {
              stopComms: "stopComms",
              startHandlingRequests: "startHandlingRequests",
            },
            (e) => e.stopComms
          )
      },
      6123: (e, t, r) => {
        "use strict"
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, r(54993).exportModule)(t, { wap: "wap" }, (e) => e.wap)
      },
      20748: (e, t) => {
        "use strict"
        function r(e, t, r, n) {
          var o = { timer: void 0, lastArgs: [] },
            i = function () {
              for (var n = this, i = [], s = 0; s < arguments.length; s++)
                i[s] = arguments[s]
              ;(o.lastArgs = i),
                o.timer
                  ? clearTimeout(o.timer)
                  : t && r.apply(this, o.lastArgs),
                (o.timer = setTimeout(function () {
                  t || r.apply(n, o.lastArgs), (o.timer = void 0)
                }, e))
            }
          return n && (i = i.bind(n)), (i.options = o), i
        }
        function n(e, t) {
          for (var n = [], o = 2; o < arguments.length; o++)
            n[o - 2] = arguments[o]
          if (0 === n.length)
            throw new Error(
              "function applied debounce decorator should be a method"
            )
          if (1 === n.length)
            throw new Error(
              "method applied debounce decorator should have valid name"
            )
          var i = n[0],
            s = n[1],
            a =
              3 === n.length && n[2]
                ? n[2]
                : Object.getOwnPropertyDescriptor(i, s)
          if (a)
            return (function (e, t, n) {
              var o = n.value
              return (n.value = r(e, t, o)), n
            })(e, t, a)
          !(function (e, t, n, o) {
            var i
            Object.defineProperty(n, o, {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return i
              },
              set: function (n) {
                i = r(e, t, n, this)
              },
            })
          })(e, t, i, s)
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cancel = function (e) {
            e && e.options && clearTimeout(e.options.timer)
          }),
          (t.debounce = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var r = 500,
              o = !1
            if (
              e.length &&
              ("number" == typeof e[0] ||
                ("object" == typeof e[0] && void 0 !== e[0].leading))
            ) {
              "number" == typeof e[0] && (r = e[0])
              var i = void 0
              return (
                "object" == typeof e[0] &&
                  void 0 !== e[0].leading &&
                  (i = e[0]),
                1 < e.length &&
                  "object" == typeof e[1] &&
                  void 0 !== e[1].leading &&
                  (i = e[1]),
                i && (o = i.leading),
                function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                  return n.apply(void 0, [r, o].concat(e))
                }
              )
            }
            return n.apply(void 0, [r, o].concat(e))
          })
      },
      44276: function (e, t) {
        var r, n
        void 0 ===
          (n =
            "function" ==
            typeof (r = function () {
              "use strict"
              function e(t) {
                return e.regex.test((t || "").trim())
              }
              return (
                (e.regex =
                  /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i),
                e
              )
            })
              ? r.apply(t, [])
              : r) || (e.exports = n)
      },
      54428: () => {},
    },
    __webpack_module_cache__ = {}
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e]
    if (void 0 !== t) return t.exports
    var r = (__webpack_module_cache__[e] = { exports: {} })
    return (
      __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__),
      r.exports
    )
  }
  ;(__webpack_require__.d = (e, t) => {
    for (var r in t)
      __webpack_require__.o(t, r) &&
        !__webpack_require__.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
  }),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    })
  var __webpack_exports__ = __webpack_require__(28156)
  self.WPP = __webpack_exports__
})()
