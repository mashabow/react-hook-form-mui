import {_ as wt} from './iframe-a5f0bdc1.js'
import {g as Cn, r as b, R as a, c as aa} from './index-f1f2c4b1.js'
import {
  s as ms,
  t as H0,
  v as gs,
  w as Z0,
  i as kn,
  x as V0,
  y as z0,
  z as q0,
  d as hs,
  A as bs,
  B as U0,
  C as ys,
  D as W0,
  E as G0,
  F as Y0,
  G as K0,
  H as X0,
  I as J0,
  J as vs,
  K as Q0,
  L as e1,
  M as Es,
  _ as t1,
  N as r1,
  O as n1,
  P as bo,
  e as xs,
  Q as ws,
  R as As,
  U as a1,
  V as o1,
  W as l1,
  f as i1,
  S as Ol,
  X as Ia,
  l as oa,
  r as s1,
  u as u1,
} from './_getPrototype-6a30002d.js'
import {
  u as Tl,
  a as yo,
  _ as Ss,
  b as c1,
  c as d1,
  d as _n,
} from './assertThisInitialized-4401020c.js'
import {r as Cs, R as p1} from './index-c74c9f7f.js'
import {_ as f1, a as m1} from './isNativeReflectConstruct-e378569d.js'
import {d as xe} from './index-356e4a49.js'
var He = (e) => `control-${e.replace(/\s+/g, '-')}`,
  On = (e) => `set-${e.replace(/\s+/g, '-')}`
const {global: g1} = __STORYBOOK_MODULE_GLOBAL__,
  {logger: h1} = __STORYBOOK_MODULE_CLIENT_LOGGER__
var b1 = Object.create,
  ks = Object.defineProperty,
  y1 = Object.getOwnPropertyDescriptor,
  _s = Object.getOwnPropertyNames,
  v1 = Object.getPrototypeOf,
  E1 = Object.prototype.hasOwnProperty,
  vo = (e, t) =>
    function () {
      return t || (0, e[_s(e)[0]])((t = {exports: {}}).exports, t), t.exports
    },
  x1 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of _s(t))
        !E1.call(e, o) &&
          o !== r &&
          ks(e, o, {
            get: () => t[o],
            enumerable: !(n = y1(t, o)) || n.enumerable,
          })
    return e
  },
  Os = (e, t, r) => (
    (r = e != null ? b1(v1(e)) : {}),
    x1(
      t || !e || !e.__esModule
        ? ks(r, 'default', {value: e, enumerable: !0})
        : r,
      e
    )
  )
function At() {
  return (
    (At = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    At.apply(this, arguments)
  )
}
function w1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function Sr(e, t) {
  return (
    (Sr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r
        }),
    Sr(e, t)
  )
}
function A1(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Sr(e, t)
}
function Pa(e) {
  return (
    (Pa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    Pa(e)
  )
}
function S1(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1
}
function C1() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1
  if (typeof Proxy == 'function') return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    )
  } catch {
    return !1
  }
}
function nn(e, t, r) {
  return (
    C1()
      ? (nn = Reflect.construct.bind())
      : (nn = function (n, o, l) {
          var i = [null]
          i.push.apply(i, o)
          var u = Function.bind.apply(n, i),
            s = new u()
          return l && Sr(s, l.prototype), s
        }),
    nn.apply(null, arguments)
  )
}
function Na(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (Na = function (r) {
      if (r === null || !S1(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r)
        t.set(r, n)
      }
      function n() {
        return nn(r, arguments, Pa(this).constructor)
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Sr(n, r)
      )
    }),
    Na(e)
  )
}
var k1 = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
}
function _1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r]
  var n = t[0],
    o = [],
    l
  for (l = 1; l < t.length; l += 1) o.push(t[l])
  return (
    o.forEach(function (i) {
      n = n.replace(/%[a-z]/, i)
    }),
    n
  )
}
var et = (function (e) {
  A1(t, e)
  function t(r) {
    for (
      var n, o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1;
      i < o;
      i++
    )
      l[i - 1] = arguments[i]
    return (
      (n = e.call(this, _1.apply(void 0, [k1[r]].concat(l))) || this), w1(n)
    )
  }
  return t
})(Na(Error))
function la(e) {
  return Math.round(e * 255)
}
function O1(e, t, r) {
  return la(e) + ',' + la(t) + ',' + la(r)
}
function Cr(e, t, r, n) {
  if ((n === void 0 && (n = O1), t === 0)) return n(r, r, r)
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i))
  var d = r - l / 2,
    m = u + d,
    f = s + d,
    p = c + d
  return n(m, f, p)
}
var Rl = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
}
function T1(e) {
  if (typeof e != 'string') return e
  var t = e.toLowerCase()
  return Rl[t] ? '#' + Rl[t] : e
}
var R1 = /^#[a-fA-F0-9]{6}$/,
  F1 = /^#[a-fA-F0-9]{8}$/,
  $1 = /^#[a-fA-F0-9]{3}$/,
  D1 = /^#[a-fA-F0-9]{4}$/,
  ia = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  L1 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  M1 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  B1 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function Tn(e) {
  if (typeof e != 'string') throw new et(3)
  var t = T1(e)
  if (t.match(R1))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    }
  if (t.match(F1)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    }
  }
  if (t.match($1))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    }
  if (t.match(D1)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    }
  }
  var o = ia.exec(t)
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
    }
  var l = L1.exec(t.substring(0, 50))
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha:
        parseFloat('' + l[4]) > 1
          ? parseFloat('' + l[4]) / 100
          : parseFloat('' + l[4]),
    }
  var i = M1.exec(t)
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Cr(u, s, c) + ')',
      m = ia.exec(d)
    if (!m) throw new et(4, t, d)
    return {
      red: parseInt('' + m[1], 10),
      green: parseInt('' + m[2], 10),
      blue: parseInt('' + m[3], 10),
    }
  }
  var f = B1.exec(t.substring(0, 50))
  if (f) {
    var p = parseInt('' + f[1], 10),
      h = parseInt('' + f[2], 10) / 100,
      g = parseInt('' + f[3], 10) / 100,
      x = 'rgb(' + Cr(p, h, g) + ')',
      y = ia.exec(x)
    if (!y) throw new et(4, t, x)
    return {
      red: parseInt('' + y[1], 10),
      green: parseInt('' + y[2], 10),
      blue: parseInt('' + y[3], 10),
      alpha:
        parseFloat('' + f[4]) > 1
          ? parseFloat('' + f[4]) / 100
          : parseFloat('' + f[4]),
    }
  }
  throw new et(5)
}
function I1(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2
  if (o === l)
    return e.alpha !== void 0
      ? {hue: 0, saturation: 0, lightness: i, alpha: e.alpha}
      : {hue: 0, saturation: 0, lightness: i}
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l)
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0)
      break
    case r:
      u = (n - t) / s + 2
      break
    default:
      u = (t - r) / s + 4
      break
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? {hue: u, saturation: c, lightness: i, alpha: e.alpha}
      : {hue: u, saturation: c, lightness: i}
  )
}
function Ts(e) {
  return I1(Tn(e))
}
var P1 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? '#' + e[1] + e[3] + e[5]
      : e
  },
  ja = P1
function Rt(e) {
  var t = e.toString(16)
  return t.length === 1 ? '0' + t : t
}
function sa(e) {
  return Rt(Math.round(e * 255))
}
function N1(e, t, r) {
  return ja('#' + sa(e) + sa(t) + sa(r))
}
function hn(e, t, r) {
  return Cr(e, t, r, N1)
}
function j1(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return hn(e, t, r)
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return hn(e.hue, e.saturation, e.lightness)
  throw new et(1)
}
function H1(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? hn(e, t, r) : 'rgba(' + Cr(e, t, r) + ',' + n + ')'
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? hn(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Cr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
  throw new et(2)
}
function Ha(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return ja('#' + Rt(e) + Rt(t) + Rt(r))
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return ja('#' + Rt(e.red) + Rt(e.green) + Rt(e.blue))
  throw new et(6)
}
function kr(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var o = Tn(e)
    return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? Ha(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Ha(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
  }
  throw new et(7)
}
var Z1 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    )
  },
  V1 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      typeof e.alpha == 'number'
    )
  },
  z1 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    )
  },
  q1 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    )
  }
function Rs(e) {
  if (typeof e != 'object') throw new et(8)
  if (V1(e)) return kr(e)
  if (Z1(e)) return Ha(e)
  if (q1(e)) return H1(e)
  if (z1(e)) return j1(e)
  throw new et(8)
}
function Fs(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments))
    return n.length >= t ? e.apply(this, n) : Fs(e, t, n)
  }
}
function Rn(e) {
  return Fs(e, e.length, [])
}
function Fn(e, t, r) {
  return Math.max(e, Math.min(t, r))
}
function U1(e, t) {
  if (t === 'transparent') return t
  var r = Ts(t)
  return Rs(At({}, r, {lightness: Fn(0, 1, r.lightness - parseFloat(e))}))
}
var W1 = Rn(U1),
  G1 = W1
function Y1(e, t) {
  if (t === 'transparent') return t
  var r = Ts(t)
  return Rs(At({}, r, {lightness: Fn(0, 1, r.lightness + parseFloat(e))}))
}
var K1 = Rn(Y1),
  X1 = K1
function J1(e, t) {
  if (t === 'transparent') return t
  var r = Tn(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = At({}, r, {alpha: Fn(0, 1, (n * 100 + parseFloat(e) * 100) / 100)})
  return kr(o)
}
var Q1 = Rn(J1),
  ed = Q1
function td(e, t) {
  if (t === 'transparent') return t
  var r = Tn(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = At({}, r, {
      alpha: Fn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    })
  return kr(o)
}
var rd = Rn(td),
  nd = rd,
  j = {
    primary: '#FF4785',
    secondary: '#029CFD',
    tertiary: '#FAFBFC',
    ancillary: '#22a699',
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    lightest: '#FFFFFF',
    lighter: '#F7FAFC',
    light: '#EEF3F6',
    mediumlight: '#ECF4F9',
    medium: '#D9E8F2',
    mediumdark: '#73828C',
    dark: '#5C6870',
    darker: '#454E54',
    darkest: '#2E3438',
    border: 'hsla(203, 50%, 30%, 0.15)',
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
    critical: '#FFFFFF',
    defaultText: '#2E3438',
    inverseText: '#FFFFFF',
    positiveText: '#448028',
    negativeText: '#D43900',
    warningText: '#A15C20',
  },
  vt = {
    app: '#F6F9FC',
    bar: j.lightest,
    content: j.lightest,
    gridCellSize: 10,
    hoverable: nd(0.9, j.secondary),
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    critical: '#FF4400',
  },
  tt = {
    fonts: {
      base: [
        '"Nunito Sans"',
        '-apple-system',
        '".SFNSText-Regular"',
        '"San Francisco"',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(', '),
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        'monospace',
      ].join(', '),
    },
    weight: {regular: 400, bold: 700},
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90,
    },
  },
  ad = {
    base: 'light',
    colorPrimary: '#FF4785',
    colorSecondary: '#029CFD',
    appBg: vt.app,
    appContentBg: j.lightest,
    appBorderColor: j.border,
    appBorderRadius: 4,
    fontBase: tt.fonts.base,
    fontCode: tt.fonts.mono,
    textColor: j.darkest,
    textInverseColor: j.lightest,
    textMutedColor: j.dark,
    barTextColor: j.mediumdark,
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: j.lightest,
    buttonBg: vt.app,
    buttonBorder: j.medium,
    booleanBg: j.mediumlight,
    booleanSelectedBg: j.lightest,
    inputBg: j.lightest,
    inputBorder: j.border,
    inputTextColor: j.darkest,
    inputBorderRadius: 4,
  },
  bn = ad,
  od = {
    base: 'dark',
    colorPrimary: '#FF4785',
    colorSecondary: '#029CFD',
    appBg: '#222425',
    appContentBg: '#1B1C1D',
    appBorderColor: 'rgba(255,255,255,.1)',
    appBorderRadius: 4,
    fontBase: tt.fonts.base,
    fontCode: tt.fonts.mono,
    textColor: '#C9CDCF',
    textInverseColor: '#222425',
    textMutedColor: '#798186',
    barTextColor: '#798186',
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: '#292C2E',
    buttonBg: '#222425',
    buttonBorder: 'rgba(255,255,255,.1)',
    booleanBg: '#222425',
    booleanSelectedBg: '#2E3438',
    inputBg: '#1B1C1D',
    inputBorder: 'rgba(255,255,255,.1)',
    inputTextColor: j.lightest,
    inputBorderRadius: 4,
  },
  ld = od,
  {window: ua} = g1,
  id = (e) => ({color: e}),
  sd = (e) =>
    typeof e != 'string'
      ? (h1.warn(
          `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
        ),
        !1)
      : !0,
  ud = (e) => !/(gradient|var|calc)/.test(e),
  cd = (e, t) =>
    e === 'darken'
      ? kr(`${G1(1, t)}`, 0.95)
      : e === 'lighten'
      ? kr(`${X1(1, t)}`, 0.95)
      : t,
  dd = (e) => (t) => {
    if (!sd(t) || !ud(t)) return t
    try {
      return cd(e, t)
    } catch {
      return t
    }
  },
  xr = dd('lighten'),
  $s = () =>
    !ua || !ua.matchMedia
      ? 'light'
      : ua.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  Za = {light: bn, dark: ld, normal: bn}
$s()
function Gr(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  )
}
var Ds = {exports: {}}
;(function (e, t) {
  ;(function (r) {
    e.exports = r()
  })(function () {
    return (function r(n, o, l) {
      function i(c, d) {
        if (!o[c]) {
          if (!n[c]) {
            var m = typeof Gr == 'function' && Gr
            if (!d && m) return m(c, !0)
            if (u) return u(c, !0)
            var f = new Error("Cannot find module '" + c + "'")
            throw ((f.code = 'MODULE_NOT_FOUND'), f)
          }
          var p = (o[c] = {exports: {}})
          n[c][0].call(
            p.exports,
            function (h) {
              var g = n[c][1][h]
              return i(g || h)
            },
            p,
            p.exports,
            r,
            n,
            o,
            l
          )
        }
        return o[c].exports
      }
      for (var u = typeof Gr == 'function' && Gr, s = 0; s < l.length; s++)
        i(l[s])
      return i
    })(
      {
        1: [
          function (r, n, o) {
            n.exports = function (l) {
              if (typeof Map != 'function' || l) {
                var i = r('./similar')
                return new i()
              } else return new Map()
            }
          },
          {'./similar': 2},
        ],
        2: [
          function (r, n, o) {
            function l() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              )
            }
            ;(l.prototype.get = function (i) {
              var u
              if (this.lastItem && this.isEqual(this.lastItem.key, i))
                return this.lastItem.val
              if (((u = this.indexOf(i)), u >= 0))
                return (this.lastItem = this.list[u]), this.list[u].val
            }),
              (l.prototype.set = function (i, u) {
                var s
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = u), this)
                  : ((s = this.indexOf(i)),
                    s >= 0
                      ? ((this.lastItem = this.list[s]),
                        (this.list[s].val = u),
                        this)
                      : ((this.lastItem = {key: i, val: u}),
                        this.list.push(this.lastItem),
                        this.size++,
                        this))
              }),
              (l.prototype.delete = function (i) {
                var u
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, i) &&
                    (this.lastItem = void 0),
                  (u = this.indexOf(i)),
                  u >= 0)
                )
                  return this.size--, this.list.splice(u, 1)[0]
              }),
              (l.prototype.has = function (i) {
                var u
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((u = this.indexOf(i)),
                    u >= 0 ? ((this.lastItem = this.list[u]), !0) : !1)
              }),
              (l.prototype.forEach = function (i, u) {
                var s
                for (s = 0; s < this.size; s++)
                  i.call(u || this, this.list[s].val, this.list[s].key, this)
              }),
              (l.prototype.indexOf = function (i) {
                var u
                for (u = 0; u < this.size; u++)
                  if (this.isEqual(this.list[u].key, i)) return u
                return -1
              }),
              (l.prototype.isEqual = function (i, u) {
                return i === u || (i !== i && u !== u)
              }),
              (n.exports = l)
          },
          {},
        ],
        3: [
          function (r, n, o) {
            var l = r('map-or-similar')
            n.exports = function (c) {
              var d = new l(!1),
                m = []
              return function (f) {
                var p = function () {
                  var h = d,
                    g,
                    x,
                    y = arguments.length - 1,
                    w = Array(y + 1),
                    v = !0,
                    E
                  if ((p.numArgs || p.numArgs === 0) && p.numArgs !== y + 1)
                    throw new Error(
                      'Memoizerific functions should always be called with the same number of arguments'
                    )
                  for (E = 0; E < y; E++) {
                    if (
                      ((w[E] = {cacheItem: h, arg: arguments[E]}),
                      h.has(arguments[E]))
                    ) {
                      h = h.get(arguments[E])
                      continue
                    }
                    ;(v = !1), (g = new l(!1)), h.set(arguments[E], g), (h = g)
                  }
                  return (
                    v &&
                      (h.has(arguments[y])
                        ? (x = h.get(arguments[y]))
                        : (v = !1)),
                    v ||
                      ((x = f.apply(null, arguments)), h.set(arguments[y], x)),
                    c > 0 &&
                      ((w[y] = {cacheItem: h, arg: arguments[y]}),
                      v ? i(m, w) : m.push(w),
                      m.length > c && u(m.shift())),
                    (p.wasMemoized = v),
                    (p.numArgs = y + 1),
                    x
                  )
                }
                return (
                  (p.limit = c),
                  (p.wasMemoized = !1),
                  (p.cache = d),
                  (p.lru = m),
                  p
                )
              }
            }
            function i(c, d) {
              var m = c.length,
                f = d.length,
                p,
                h,
                g
              for (h = 0; h < m; h++) {
                for (p = !0, g = 0; g < f; g++)
                  if (!s(c[h][g].arg, d[g].arg)) {
                    p = !1
                    break
                  }
                if (p) break
              }
              c.push(c.splice(h, 1)[0])
            }
            function u(c) {
              var d = c.length,
                m = c[d - 1],
                f,
                p
              for (
                m.cacheItem.delete(m.arg), p = d - 2;
                p >= 0 &&
                ((m = c[p]), (f = m.cacheItem.get(m.arg)), !f || !f.size);
                p--
              )
                m.cacheItem.delete(m.arg)
            }
            function s(c, d) {
              return c === d || (c !== c && d !== d)
            }
          },
          {'map-or-similar': 1},
        ],
      },
      {},
      [3]
    )(3)
  })
})(Ds)
var pd = Ds.exports
const Ht = Cn(pd),
  {logger: fd} = __STORYBOOK_MODULE_CLIENT_LOGGER__
var md = vo({
    '../../node_modules/react-is/cjs/react-is.development.js'(e) {
      ;(function () {
        var t = typeof Symbol == 'function' && Symbol.for,
          r = t ? Symbol.for('react.element') : 60103,
          n = t ? Symbol.for('react.portal') : 60106,
          o = t ? Symbol.for('react.fragment') : 60107,
          l = t ? Symbol.for('react.strict_mode') : 60108,
          i = t ? Symbol.for('react.profiler') : 60114,
          u = t ? Symbol.for('react.provider') : 60109,
          s = t ? Symbol.for('react.context') : 60110,
          c = t ? Symbol.for('react.async_mode') : 60111,
          d = t ? Symbol.for('react.concurrent_mode') : 60111,
          m = t ? Symbol.for('react.forward_ref') : 60112,
          f = t ? Symbol.for('react.suspense') : 60113,
          p = t ? Symbol.for('react.suspense_list') : 60120,
          h = t ? Symbol.for('react.memo') : 60115,
          g = t ? Symbol.for('react.lazy') : 60116,
          x = t ? Symbol.for('react.block') : 60121,
          y = t ? Symbol.for('react.fundamental') : 60117,
          w = t ? Symbol.for('react.responder') : 60118,
          v = t ? Symbol.for('react.scope') : 60119
        function E(M) {
          return (
            typeof M == 'string' ||
            typeof M == 'function' ||
            M === o ||
            M === d ||
            M === i ||
            M === l ||
            M === f ||
            M === p ||
            (typeof M == 'object' &&
              M !== null &&
              (M.$$typeof === g ||
                M.$$typeof === h ||
                M.$$typeof === u ||
                M.$$typeof === s ||
                M.$$typeof === m ||
                M.$$typeof === y ||
                M.$$typeof === w ||
                M.$$typeof === v ||
                M.$$typeof === x))
          )
        }
        function A(M) {
          if (typeof M == 'object' && M !== null) {
            var Pe = M.$$typeof
            switch (Pe) {
              case r:
                var Ve = M.type
                switch (Ve) {
                  case c:
                  case d:
                  case o:
                  case i:
                  case l:
                  case f:
                    return Ve
                  default:
                    var kt = Ve && Ve.$$typeof
                    switch (kt) {
                      case s:
                      case m:
                      case g:
                      case h:
                      case u:
                        return kt
                      default:
                        return Pe
                    }
                }
              case n:
                return Pe
            }
          }
        }
        var S = c,
          k = d,
          C = s,
          O = u,
          T = r,
          R = m,
          $ = o,
          F = g,
          P = h,
          D = n,
          L = i,
          N = l,
          V = f,
          B = !1
        function H(M) {
          return (
            B ||
              ((B = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            X(M) || A(M) === c
          )
        }
        function X(M) {
          return A(M) === d
        }
        function ne(M) {
          return A(M) === s
        }
        function K(M) {
          return A(M) === u
        }
        function J(M) {
          return typeof M == 'object' && M !== null && M.$$typeof === r
        }
        function I(M) {
          return A(M) === m
        }
        function z(M) {
          return A(M) === o
        }
        function W(M) {
          return A(M) === g
        }
        function se(M) {
          return A(M) === h
        }
        function be(M) {
          return A(M) === n
        }
        function it(M) {
          return A(M) === i
        }
        function Re(M) {
          return A(M) === l
        }
        function Ze(M) {
          return A(M) === f
        }
        ;(e.AsyncMode = S),
          (e.ConcurrentMode = k),
          (e.ContextConsumer = C),
          (e.ContextProvider = O),
          (e.Element = T),
          (e.ForwardRef = R),
          (e.Fragment = $),
          (e.Lazy = F),
          (e.Memo = P),
          (e.Portal = D),
          (e.Profiler = L),
          (e.StrictMode = N),
          (e.Suspense = V),
          (e.isAsyncMode = H),
          (e.isConcurrentMode = X),
          (e.isContextConsumer = ne),
          (e.isContextProvider = K),
          (e.isElement = J),
          (e.isForwardRef = I),
          (e.isFragment = z),
          (e.isLazy = W),
          (e.isMemo = se),
          (e.isPortal = be),
          (e.isProfiler = it),
          (e.isStrictMode = Re),
          (e.isSuspense = Ze),
          (e.isValidElementType = E),
          (e.typeOf = A)
      })()
    },
  }),
  gd = vo({
    '../../node_modules/react-is/index.js'(e, t) {
      t.exports = md()
    },
  }),
  Ls = vo({
    '../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(
      e,
      t
    ) {
      var r = gd(),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        l = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {}
      ;(u[r.ForwardRef] = l), (u[r.Memo] = i)
      function s(x) {
        return r.isMemo(x) ? i : u[x.$$typeof] || n
      }
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        m = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype
      function g(x, y, w) {
        if (typeof y != 'string') {
          if (h) {
            var v = p(y)
            v && v !== h && g(x, v, w)
          }
          var E = d(y)
          m && (E = E.concat(m(y)))
          for (var A = s(x), S = s(y), k = 0; k < E.length; ++k) {
            var C = E[k]
            if (!o[C] && !(w && w[C]) && !(S && S[C]) && !(A && A[C])) {
              var O = f(y, C)
              try {
                c(x, C, O)
              } catch {}
            }
          }
        }
        return x
      }
      t.exports = g
    },
  })
function Ms(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var hd =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Eo = Ms(function (e) {
    return (
      hd.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    )
  })
function bd(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function yd(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var vd = (function () {
    function e(r) {
      var n = this
      ;(this._insertTag = function (o) {
        var l
        n.tags.length === 0
          ? n.insertionPoint
            ? (l = n.insertionPoint.nextSibling)
            : n.prepend
            ? (l = n.container.firstChild)
            : (l = n.before)
          : (l = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, l),
          n.tags.push(o)
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(yd(this))
        var n = this.tags[this.tags.length - 1],
          o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105
        if (
          (o &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !o),
          this.isSpeedy)
        ) {
          var l = bd(n)
          try {
            l.insertRule(r, l.cssRules.length)
          } catch (i) {
            ;/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + r + '"',
                i
              )
          }
        } else n.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1)
      }),
      e
    )
  })(),
  he = '-ms-',
  yn = '-moz-',
  G = '-webkit-',
  xo = 'comm',
  wo = 'rule',
  Ao = 'decl',
  Ed = '@import',
  Bs = '@keyframes',
  xd = '@layer',
  wd = Math.abs,
  $n = String.fromCharCode,
  Ad = Object.assign
function Sd(e, t) {
  return de(e, 0) ^ 45
    ? (((((((t << 2) ^ de(e, 0)) << 2) ^ de(e, 1)) << 2) ^ de(e, 2)) << 2) ^
        de(e, 3)
    : 0
}
function Is(e) {
  return e.trim()
}
function Cd(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function Y(e, t, r) {
  return e.replace(t, r)
}
function Va(e, t) {
  return e.indexOf(t)
}
function de(e, t) {
  return e.charCodeAt(t) | 0
}
function _r(e, t, r) {
  return e.slice(t, r)
}
function Xe(e) {
  return e.length
}
function So(e) {
  return e.length
}
function Yr(e, t) {
  return t.push(e), e
}
function kd(e, t) {
  return e.map(t).join('')
}
var Dn = 1,
  Jt = 1,
  Ps = 0,
  Se = 0,
  oe = 0,
  ir = ''
function Ln(e, t, r, n, o, l, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: l,
    line: Dn,
    column: Jt,
    length: i,
    return: '',
  }
}
function hr(e, t) {
  return Ad(Ln('', null, null, '', null, null, 0), e, {length: -e.length}, t)
}
function _d() {
  return oe
}
function Od() {
  return (
    (oe = Se > 0 ? de(ir, --Se) : 0), Jt--, oe === 10 && ((Jt = 1), Dn--), oe
  )
}
function Ce() {
  return (
    (oe = Se < Ps ? de(ir, Se++) : 0), Jt++, oe === 10 && ((Jt = 1), Dn++), oe
  )
}
function at() {
  return de(ir, Se)
}
function an() {
  return Se
}
function Pr(e, t) {
  return _r(ir, e, t)
}
function Or(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
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
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function Ns(e) {
  return (Dn = Jt = 1), (Ps = Xe((ir = e))), (Se = 0), []
}
function js(e) {
  return (ir = ''), e
}
function on(e) {
  return Is(Pr(Se - 1, za(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Td(e) {
  for (; (oe = at()) && oe < 33; ) Ce()
  return Or(e) > 2 || Or(oe) > 3 ? '' : ' '
}
function Rd(e, t) {
  for (
    ;
    --t &&
    Ce() &&
    !(oe < 48 || oe > 102 || (oe > 57 && oe < 65) || (oe > 70 && oe < 97));

  );
  return Pr(e, an() + (t < 6 && at() == 32 && Ce() == 32))
}
function za(e) {
  for (; Ce(); )
    switch (oe) {
      case e:
        return Se
      case 34:
      case 39:
        e !== 34 && e !== 39 && za(oe)
        break
      case 40:
        e === 41 && za(e)
        break
      case 92:
        Ce()
        break
    }
  return Se
}
function Fd(e, t) {
  for (; Ce() && e + oe !== 47 + 10 && !(e + oe === 42 + 42 && at() === 47); );
  return '/*' + Pr(t, Se - 1) + '*' + $n(e === 47 ? e : Ce())
}
function $d(e) {
  for (; !Or(at()); ) Ce()
  return Pr(e, Se)
}
function Dd(e) {
  return js(ln('', null, null, null, [''], (e = Ns(e)), 0, [0], e))
}
function ln(e, t, r, n, o, l, i, u, s) {
  for (
    var c = 0,
      d = 0,
      m = i,
      f = 0,
      p = 0,
      h = 0,
      g = 1,
      x = 1,
      y = 1,
      w = 0,
      v = '',
      E = o,
      A = l,
      S = n,
      k = v;
    x;

  )
    switch (((h = w), (w = Ce()))) {
      case 40:
        if (h != 108 && de(k, m - 1) == 58) {
          Va((k += Y(on(w), '&', '&\f')), '&\f') != -1 && (y = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        k += on(w)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        k += Td(h)
        break
      case 92:
        k += Rd(an() - 1, 7)
        continue
      case 47:
        switch (at()) {
          case 42:
          case 47:
            Yr(Ld(Fd(Ce(), an()), t, r), s)
            break
          default:
            k += '/'
        }
        break
      case 123 * g:
        u[c++] = Xe(k) * y
      case 125 * g:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            x = 0
          case 59 + d:
            y == -1 && (k = Y(k, /\f/g, '')),
              p > 0 &&
                Xe(k) - m &&
                Yr(
                  p > 32
                    ? $l(k + ';', n, r, m - 1)
                    : $l(Y(k, ' ', '') + ';', n, r, m - 2),
                  s
                )
            break
          case 59:
            k += ';'
          default:
            if (
              (Yr((S = Fl(k, t, r, c, d, o, u, v, (E = []), (A = []), m)), l),
              w === 123)
            )
              if (d === 0) ln(k, t, S, S, E, l, m, u, A)
              else
                switch (f === 99 && de(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ln(
                      e,
                      S,
                      S,
                      n && Yr(Fl(e, S, S, 0, 0, o, u, v, o, (E = []), m), A),
                      o,
                      A,
                      m,
                      u,
                      n ? E : A
                    )
                    break
                  default:
                    ln(k, S, S, S, [''], A, 0, u, A)
                }
        }
        ;(c = d = p = 0), (g = y = 1), (v = k = ''), (m = i)
        break
      case 58:
        ;(m = 1 + Xe(k)), (p = h)
      default:
        if (g < 1) {
          if (w == 123) --g
          else if (w == 125 && g++ == 0 && Od() == 125) continue
        }
        switch (((k += $n(w)), w * g)) {
          case 38:
            y = d > 0 ? 1 : ((k += '\f'), -1)
            break
          case 44:
            ;(u[c++] = (Xe(k) - 1) * y), (y = 1)
            break
          case 64:
            at() === 45 && (k += on(Ce())),
              (f = at()),
              (d = m = Xe((v = k += $d(an())))),
              w++
            break
          case 45:
            h === 45 && Xe(k) == 2 && (g = 0)
        }
    }
  return l
}
function Fl(e, t, r, n, o, l, i, u, s, c, d) {
  for (
    var m = o - 1, f = o === 0 ? l : [''], p = So(f), h = 0, g = 0, x = 0;
    h < n;
    ++h
  )
    for (var y = 0, w = _r(e, m + 1, (m = wd((g = i[h])))), v = e; y < p; ++y)
      (v = Is(g > 0 ? f[y] + ' ' + w : Y(w, /&\f/g, f[y]))) && (s[x++] = v)
  return Ln(e, t, r, o === 0 ? wo : u, s, c, d)
}
function Ld(e, t, r) {
  return Ln(e, t, r, xo, $n(_d()), _r(e, 2, -2), 0)
}
function $l(e, t, r, n) {
  return Ln(e, t, r, Ao, _r(e, 0, n), _r(e, n + 1, -1), n)
}
function Xt(e, t) {
  for (var r = '', n = So(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function Md(e, t, r, n) {
  switch (e.type) {
    case xd:
      if (e.children.length) break
    case Ed:
    case Ao:
      return (e.return = e.return || e.value)
    case xo:
      return ''
    case Bs:
      return (e.return = e.value + '{' + Xt(e.children, n) + '}')
    case wo:
      e.value = e.props.join(',')
  }
  return Xe((r = Xt(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function Bd(e) {
  var t = So(e)
  return function (r, n, o, l) {
    for (var i = '', u = 0; u < t; u++) i += e[u](r, n, o, l) || ''
    return i
  }
}
var Dl = function (e) {
    var t = new WeakMap()
    return function (r) {
      if (t.has(r)) return t.get(r)
      var n = e(r)
      return t.set(r, n), n
    }
  },
  Id = function (e, t, r) {
    for (
      var n = 0, o = 0;
      (n = o), (o = at()), n === 38 && o === 12 && (t[r] = 1), !Or(o);

    )
      Ce()
    return Pr(e, Se)
  },
  Pd = function (e, t) {
    var r = -1,
      n = 44
    do
      switch (Or(n)) {
        case 0:
          n === 38 && at() === 12 && (t[r] = 1), (e[r] += Id(Se - 1, t, r))
          break
        case 2:
          e[r] += on(n)
          break
        case 4:
          if (n === 44) {
            ;(e[++r] = at() === 58 ? '&\f' : ''), (t[r] = e[r].length)
            break
          }
        default:
          e[r] += $n(n)
      }
    while ((n = Ce()))
    return e
  },
  Nd = function (e, t) {
    return js(Pd(Ns(e), t))
  },
  Ll = new WeakMap(),
  jd = function (e) {
    if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          r = e.parent,
          n = e.column === r.column && e.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ll.get(r)) &&
        !n
      ) {
        Ll.set(e, !0)
        for (
          var o = [], l = Nd(t, o), i = r.props, u = 0, s = 0;
          u < l.length;
          u++
        )
          for (var c = 0; c < i.length; c++, s++)
            e.props[s] = o[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + ' ' + l[u]
      }
    }
  },
  Hd = function (e) {
    if (e.type === 'decl') {
      var t = e.value
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ''), (e.value = ''))
    }
  },
  Zd =
    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
  Vd = function (e) {
    return e.type === 'comm' && e.children.indexOf(Zd) > -1
  },
  zd = function (e) {
    return function (t, r, n) {
      if (!(t.type !== 'rule' || e.compat)) {
        var o = t.value.match(/(:first|:nth|:nth-last)-child/g)
        if (o) {
          for (
            var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1;
            u >= 0;
            u--
          ) {
            var s = i[u]
            if (s.line < t.line) break
            if (s.column < t.column) {
              if (Vd(s)) return
              break
            }
          }
          o.forEach(function (c) {
            console.error(
              'The pseudo class "' +
                c +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                c.split('-child')[0] +
                '-of-type".'
            )
          })
        }
      }
    }
  },
  Hs = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64
  },
  qd = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!Hs(t[r])) return !0
    return !1
  },
  Ml = function (e) {
    ;(e.type = ''),
      (e.value = ''),
      (e.return = ''),
      (e.children = ''),
      (e.props = '')
  },
  Ud = function (e, t, r) {
    Hs(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          Ml(e))
        : qd(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          Ml(e)))
  }
function Zs(e, t) {
  switch (Sd(e, t)) {
    case 5103:
      return G + 'print-' + e + e
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
      return G + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + yn + e + he + e + e
    case 6828:
    case 4268:
      return G + e + he + e + e
    case 6165:
      return G + e + he + 'flex-' + e + e
    case 5187:
      return (
        G + e + Y(e, /(\w+).+(:[^]+)/, G + 'box-$1$2' + he + 'flex-$1$2') + e
      )
    case 5443:
      return G + e + he + 'flex-item-' + Y(e, /flex-|-self/, '') + e
    case 4675:
      return (
        G +
        e +
        he +
        'flex-line-pack' +
        Y(e, /align-content|flex-|-self/, '') +
        e
      )
    case 5548:
      return G + e + he + Y(e, 'shrink', 'negative') + e
    case 5292:
      return G + e + he + Y(e, 'basis', 'preferred-size') + e
    case 6060:
      return (
        G +
        'box-' +
        Y(e, '-grow', '') +
        G +
        e +
        he +
        Y(e, 'grow', 'positive') +
        e
      )
    case 4554:
      return G + Y(e, /([^-])(transform)/g, '$1' + G + '$2') + e
    case 6187:
      return (
        Y(Y(Y(e, /(zoom-|grab)/, G + '$1'), /(image-set)/, G + '$1'), e, '') + e
      )
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, G + '$1$`$1')
    case 4968:
      return (
        Y(
          Y(e, /(.+:)(flex-)?(.*)/, G + 'box-pack:$3' + he + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        G +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, G + '$1$2') + e
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
      if (Xe(e) - 1 - t > 6)
        switch (de(e, t + 1)) {
          case 109:
            if (de(e, t + 4) !== 45) break
          case 102:
            return (
              Y(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  G +
                  '$2-$3$1' +
                  yn +
                  (de(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Va(e, 'stretch')
              ? Zs(Y(e, 'stretch', 'fill-available'), t) + e
              : e
        }
      break
    case 4949:
      if (de(e, t + 1) !== 115) break
    case 6444:
      switch (de(e, Xe(e) - 3 - (~Va(e, '!important') && 10))) {
        case 107:
          return Y(e, ':', ':' + G) + e
        case 101:
          return (
            Y(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                G +
                (de(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                G +
                '$2$3$1' +
                he +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (de(e, t + 11)) {
        case 114:
          return G + e + he + Y(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return G + e + he + Y(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return G + e + he + Y(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return G + e + he + e + e
  }
  return e
}
var Wd = function (e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Ao:
          e.return = Zs(e.value, e.length)
          break
        case Bs:
          return Xt([hr(e, {value: Y(e.value, '@', '@' + G)})], n)
        case wo:
          if (e.length)
            return kd(e.props, function (o) {
              switch (Cd(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Xt(
                    [hr(e, {props: [Y(o, /:(read-\w+)/, ':' + yn + '$1')]})],
                    n
                  )
                case '::placeholder':
                  return Xt(
                    [
                      hr(e, {
                        props: [Y(o, /:(plac\w+)/, ':' + G + 'input-$1')],
                      }),
                      hr(e, {props: [Y(o, /:(plac\w+)/, ':' + yn + '$1')]}),
                      hr(e, {props: [Y(o, /:(plac\w+)/, he + 'input-$1')]}),
                    ],
                    n
                  )
              }
              return ''
            })
      }
  },
  Gd = [Wd],
  Yd = function (e) {
    var t = e.key
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`)
    if (t === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (h) {
        var g = h.getAttribute('data-emotion')
        g.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''))
      })
    }
    var n = e.stylisPlugins || Gd
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed'
      )
    var o = {},
      l,
      i = []
    ;(l = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (h) {
          for (
            var g = h.getAttribute('data-emotion').split(' '), x = 1;
            x < g.length;
            x++
          )
            o[g[x]] = !0
          i.push(h)
        }
      )
    var u,
      s = [jd, Hd]
    s.push(
      zd({
        get compat() {
          return p.compat
        },
      }),
      Ud
    )
    {
      var c,
        d = [
          Md,
          function (h) {
            h.root ||
              (h.return
                ? c.insert(h.return)
                : h.value && h.type !== xo && c.insert(h.value + '{}'))
          },
        ],
        m = Bd(s.concat(n, d)),
        f = function (h) {
          return Xt(Dd(h), m)
        }
      u = function (h, g, x, y) {
        ;(c = x),
          g.map !== void 0 &&
            (c = {
              insert: function (w) {
                x.insert(w + g.map)
              },
            }),
          f(h ? h + '{' + g.styles + '}' : g.styles),
          y && (p.inserted[g.name] = !0)
      }
    }
    var p = {
      key: t,
      sheet: new vd({
        key: t,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: u,
    }
    return p.sheet.hydrate(i), p
  }
Os(Ls())
var Kd = !0
function Co(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var Mn = function (e, t, r) {
    var n = e.key + '-' + t.name
    ;(r === !1 || Kd === !1) &&
      e.registered[n] === void 0 &&
      (e.registered[n] = t.styles)
  },
  Bn = function (e, t, r) {
    Mn(e, t, r)
    var n = e.key + '-' + t.name
    if (e.inserted[t.name] === void 0) {
      var o = t
      do e.insert(t === o ? '.' + n : '', o, e.sheet, !0), (o = o.next)
      while (o !== void 0)
    }
  }
function Xd(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var Jd = {
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
  Bl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  Qd =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  ep = /[A-Z]|^ms/g,
  Vs = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ko = function (e) {
    return e.charCodeAt(1) === 45
  },
  Il = function (e) {
    return e != null && typeof e != 'boolean'
  },
  ca = Ms(function (e) {
    return ko(e) ? e : e.replace(ep, '-$&').toLowerCase()
  }),
  vn = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(Vs, function (r, n, o) {
            return (Je = {name: n, styles: o, next: Je}), n
          })
    }
    return Jd[e] !== 1 && !ko(e) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t
  }
;(Pl =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (Nl = ['normal', 'none', 'initial', 'inherit', 'unset']),
  (jl = vn),
  (Hl = /^-ms-/),
  (Zl = /-(.)/g),
  (da = {}),
  (vn = function (e, t) {
    if (
      e === 'content' &&
      (typeof t != 'string' ||
        (Nl.indexOf(t) === -1 &&
          !Pl.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          '"\'`'
      )
    var r = jl(e, t)
    return (
      r !== '' &&
        !ko(e) &&
        e.indexOf('-') !== -1 &&
        da[e] === void 0 &&
        ((da[e] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            e.replace(Hl, 'ms-').replace(Zl, function (n, o) {
              return o.toUpperCase()
            }) +
            '?'
        )),
      r
    )
  })
var Pl,
  Nl,
  jl,
  Hl,
  Zl,
  da,
  zs =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.'
function Tr(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === 'NO_COMPONENT_SELECTOR') throw new Error(zs)
    return r
  }
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1)
        return (Je = {name: r.name, styles: r.styles, next: Je}), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0)
          for (; n !== void 0; )
            (Je = {name: n.name, styles: n.styles, next: Je}), (n = n.next)
        var o = r.styles + ';'
        return r.map !== void 0 && (o += r.map), o
      }
      return tp(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var l = Je,
          i = r(e)
        return (Je = l), Tr(e, t, i)
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        )
      break
    }
    case 'string':
      var u = [],
        s = r.replace(Vs, function (d, m, f) {
          var p = 'animation' + u.length
          return (
            u.push(
              'const ' +
                p +
                ' = keyframes`' +
                f.replace(/^@keyframes animation-\w+/, '') +
                '`'
            ),
            '${' + p + '}'
          )
        })
      u.length &&
        console.error(
          '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
            [].concat(u, ['`' + s + '`']).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ('css`' + s + '`')
        )
      break
  }
  if (t == null) return r
  var c = t[r]
  return c !== void 0 ? c : r
}
function tp(e, t, r) {
  var n = ''
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Tr(e, t, r[o]) + ';'
  else
    for (var l in r) {
      var i = r[l]
      if (typeof i != 'object')
        t != null && t[i] !== void 0
          ? (n += l + '{' + t[i] + '}')
          : Il(i) && (n += ca(l) + ':' + vn(l, i) + ';')
      else {
        if (l === 'NO_COMPONENT_SELECTOR') throw new Error(zs)
        if (
          Array.isArray(i) &&
          typeof i[0] == 'string' &&
          (t == null || t[i[0]] === void 0)
        )
          for (var u = 0; u < i.length; u++)
            Il(i[u]) && (n += ca(l) + ':' + vn(l, i[u]) + ';')
        else {
          var s = Tr(e, t, i)
          switch (l) {
            case 'animation':
            case 'animationName': {
              n += ca(l) + ':' + s + ';'
              break
            }
            default:
              l === 'undefined' && console.error(Qd), (n += l + '{' + s + '}')
          }
        }
      }
    }
  return n
}
var Vl = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  qs
qs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g
var Je,
  Qt = function (e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == 'object' &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0]
    var n = !0,
      o = ''
    Je = void 0
    var l = e[0]
    l == null || l.raw === void 0
      ? ((n = !1), (o += Tr(r, t, l)))
      : (l[0] === void 0 && console.error(Bl), (o += l[0]))
    for (var i = 1; i < e.length; i++)
      (o += Tr(r, t, e[i])),
        n && (l[i] === void 0 && console.error(Bl), (o += l[i]))
    var u
    ;(o = o.replace(qs, function (m) {
      return (u = m), ''
    })),
      (Vl.lastIndex = 0)
    for (var s = '', c; (c = Vl.exec(o)) !== null; ) s += '-' + c[1]
    var d = Xd(o) + s
    return {
      name: d,
      styles: o,
      map: u,
      next: Je,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."
      },
    }
  },
  rp = {}.hasOwnProperty,
  _o = b.createContext(typeof HTMLElement < 'u' ? Yd({key: 'css'}) : null)
_o.displayName = 'EmotionCacheContext'
_o.Provider
var In = function (e) {
    return b.forwardRef(function (t, r) {
      var n = b.useContext(_o)
      return e(t, n, r)
    })
  },
  St = b.createContext({})
St.displayName = 'EmotionThemeContext'
var np = function () {
    return b.useContext(St)
  },
  ap = function (e, t) {
    if (typeof t == 'function') {
      var r = t(e)
      if (r == null || typeof r != 'object' || Array.isArray(r))
        throw new Error(
          '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!'
        )
      return r
    }
    if (t == null || typeof t != 'object' || Array.isArray(t))
      throw new Error(
        '[ThemeProvider] Please make your theme prop a plain object'
      )
    return At({}, e, t)
  },
  op = Dl(function (e) {
    return Dl(function (t) {
      return ap(e, t)
    })
  }),
  Us = function (e) {
    var t = b.useContext(St)
    return (
      e.theme !== t && (t = op(t)(e.theme)),
      b.createElement(St.Provider, {value: t}, e.children)
    )
  },
  zl = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ql = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  lp = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag
    return (
      Mn(t, r, n),
      yo(function () {
        return Bn(t, r, n)
      }),
      null
    )
  },
  ip = In(function (e, t, r) {
    var n = e.css
    typeof n == 'string' && t.registered[n] !== void 0 && (n = t.registered[n])
    var o = e[zl],
      l = [n],
      i = ''
    typeof e.className == 'string'
      ? (i = Co(t.registered, l, e.className))
      : e.className != null && (i = e.className + ' ')
    var u = Qt(l, void 0, b.useContext(St))
    if (u.name.indexOf('-') === -1) {
      var s = e[ql]
      s && (u = Qt([u, 'label:' + s + ';']))
    }
    i += t.key + '-' + u.name
    var c = {}
    for (var d in e)
      rp.call(e, d) && d !== 'css' && d !== zl && d !== ql && (c[d] = e[d])
    return (
      (c.ref = r),
      (c.className = i),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(lp, {
          cache: t,
          serialized: u,
          isStringTag: typeof o == 'string',
        }),
        b.createElement(o, c)
      )
    )
  })
ip.displayName = 'EmotionCssPropInternal'
Os(Ls())
var sp = {
    name: '@emotion/react',
    version: '11.11.1',
    main: 'dist/emotion-react.cjs.js',
    module: 'dist/emotion-react.esm.js',
    browser: {
      './dist/emotion-react.esm.js': './dist/emotion-react.browser.esm.js',
    },
    exports: {
      '.': {
        module: {
          worker: './dist/emotion-react.worker.esm.js',
          browser: './dist/emotion-react.browser.esm.js',
          default: './dist/emotion-react.esm.js',
        },
        import: './dist/emotion-react.cjs.mjs',
        default: './dist/emotion-react.cjs.js',
      },
      './jsx-runtime': {
        module: {
          worker: './jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js',
          browser:
            './jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js',
          default: './jsx-runtime/dist/emotion-react-jsx-runtime.esm.js',
        },
        import: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs',
        default: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js',
      },
      './_isolated-hnrs': {
        module: {
          worker:
            './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js',
          browser:
            './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js',
          default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js',
        },
        import: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs',
        default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js',
      },
      './jsx-dev-runtime': {
        module: {
          worker:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js',
          browser:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js',
          default:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js',
        },
        import: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs',
        default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js',
      },
      './package.json': './package.json',
      './types/css-prop': './types/css-prop.d.ts',
      './macro': {
        types: {import: './macro.d.mts', default: './macro.d.ts'},
        default: './macro.js',
      },
    },
    types: 'types/index.d.ts',
    files: [
      'src',
      'dist',
      'jsx-runtime',
      'jsx-dev-runtime',
      '_isolated-hnrs',
      'types/*.d.ts',
      'macro.*',
    ],
    sideEffects: !1,
    author: 'Emotion Contributors',
    license: 'MIT',
    scripts: {'test:typescript': 'dtslint types'},
    dependencies: {
      '@babel/runtime': '^7.18.3',
      '@emotion/babel-plugin': '^11.11.0',
      '@emotion/cache': '^11.11.0',
      '@emotion/serialize': '^1.1.2',
      '@emotion/use-insertion-effect-with-fallbacks': '^1.0.1',
      '@emotion/utils': '^1.2.1',
      '@emotion/weak-memoize': '^0.3.1',
      'hoist-non-react-statics': '^3.3.1',
    },
    peerDependencies: {react: '>=16.8.0'},
    peerDependenciesMeta: {'@types/react': {optional: !0}},
    devDependencies: {
      '@definitelytyped/dtslint': '0.0.112',
      '@emotion/css': '11.11.0',
      '@emotion/css-prettifier': '1.1.3',
      '@emotion/server': '11.11.0',
      '@emotion/styled': '11.11.0',
      'html-tag-names': '^1.1.2',
      react: '16.14.0',
      'svg-tag-names': '^1.1.1',
      typescript: '^4.5.5',
    },
    repository:
      'https://github.com/emotion-js/emotion/tree/main/packages/react',
    publishConfig: {access: 'public'},
    'umd:main': 'dist/emotion-react.umd.min.js',
    preconstruct: {
      entrypoints: [
        './index.js',
        './jsx-runtime.js',
        './jsx-dev-runtime.js',
        './_isolated-hnrs.js',
      ],
      umdName: 'emotionReact',
      exports: {
        envConditions: ['browser', 'worker'],
        extra: {
          './types/css-prop': './types/css-prop.d.ts',
          './macro': {
            types: {import: './macro.d.mts', default: './macro.d.ts'},
            default: './macro.js',
          },
        },
      },
    },
  },
  Ul = !1,
  up = In(function (e, t) {
    !Ul &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
      ),
      (Ul = !0))
    var r = e.styles,
      n = Qt([r], void 0, b.useContext(St)),
      o = b.useRef()
    return (
      Tl(
        function () {
          var l = t.key + '-global',
            i = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            u = !1,
            s = document.querySelector(
              'style[data-emotion="' + l + ' ' + n.name + '"]'
            )
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null &&
              ((u = !0), s.setAttribute('data-emotion', l), i.hydrate([s])),
            (o.current = [i, u]),
            function () {
              i.flush()
            }
          )
        },
        [t]
      ),
      Tl(
        function () {
          var l = o.current,
            i = l[0],
            u = l[1]
          if (u) {
            l[1] = !1
            return
          }
          if ((n.next !== void 0 && Bn(t, n.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling
            ;(i.before = s), i.flush()
          }
          t.insert('', n, i, !1)
        },
        [t, n.name]
      ),
      null
    )
  })
up.displayName = 'EmotionGlobal'
function Oo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r]
  return Qt(t)
}
var sr = function () {
    var e = Oo.apply(void 0, arguments),
      t = 'animation-' + e.name
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
      },
    }
  },
  cp = function e(t) {
    for (var r = t.length, n = 0, o = ''; n < r; n++) {
      var l = t[n]
      if (l != null) {
        var i = void 0
        switch (typeof l) {
          case 'boolean':
            break
          case 'object': {
            if (Array.isArray(l)) i = e(l)
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.'
                ),
                (i = '')
              for (var u in l) l[u] && u && (i && (i += ' '), (i += u))
            }
            break
          }
          default:
            i = l
        }
        i && (o && (o += ' '), (o += i))
      }
    }
    return o
  }
function dp(e, t, r) {
  var n = [],
    o = Co(e, n, r)
  return n.length < 2 ? r : o + t(n)
}
var pp = function (e) {
    var t = e.cache,
      r = e.serializedArr
    return (
      yo(function () {
        for (var n = 0; n < r.length; n++) Bn(t, r[n], !1)
      }),
      null
    )
  },
  fp = In(function (e, t) {
    var r = !1,
      n = [],
      o = function () {
        if (r) throw new Error('css can only be used during render')
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
          c[d] = arguments[d]
        var m = Qt(c, t.registered)
        return n.push(m), Mn(t, m, !1), t.key + '-' + m.name
      },
      l = function () {
        if (r) throw new Error('cx can only be used during render')
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
          c[d] = arguments[d]
        return dp(t.registered, o, cp(c))
      },
      i = {css: o, cx: l, theme: b.useContext(St)},
      u = e.children(i)
    return (
      (r = !0),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(pp, {cache: t, serializedArr: n}),
        u
      )
    )
  })
fp.displayName = 'EmotionClassNames'
;(pa = !0),
  (Wl = typeof jest < 'u' || typeof vi < 'u'),
  pa &&
    !Wl &&
    ((fa = typeof globalThis < 'u' ? globalThis : pa ? window : global),
    (ma = '__EMOTION_REACT_' + sp.version.split('.')[0] + '__'),
    fa[ma] &&
      console.warn(
        'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.'
      ),
    (fa[ma] = !0))
var pa,
  Wl,
  fa,
  ma,
  mp = Eo,
  gp = function (e) {
    return e !== 'theme'
  },
  Gl = function (e) {
    return typeof e == 'string' && e.charCodeAt(0) > 96 ? mp : gp
  },
  Yl = function (e, t, r) {
    var n
    if (t) {
      var o = t.shouldForwardProp
      n =
        e.__emotion_forwardProp && o
          ? function (l) {
              return e.__emotion_forwardProp(l) && o(l)
            }
          : o
    }
    return typeof n != 'function' && r && (n = e.__emotion_forwardProp), n
  },
  Kl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  hp = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag
    return (
      Mn(t, r, n),
      yo(function () {
        return Bn(t, r, n)
      }),
      null
    )
  },
  bp = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`)
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      l,
      i
    r !== void 0 && ((l = r.label), (i = r.target))
    var u = Yl(t, r, n),
      s = u || Gl(o),
      c = !s('as')
    return function () {
      var d = arguments,
        m =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if (
        (l !== void 0 && m.push('label:' + l + ';'),
        d[0] == null || d[0].raw === void 0)
      )
        m.push.apply(m, d)
      else {
        d[0][0] === void 0 && console.error(Kl), m.push(d[0][0])
        for (var f = d.length, p = 1; p < f; p++)
          d[0][p] === void 0 && console.error(Kl), m.push(d[p], d[0][p])
      }
      var h = In(function (g, x, y) {
        var w = (c && g.as) || o,
          v = '',
          E = [],
          A = g
        if (g.theme == null) {
          A = {}
          for (var S in g) A[S] = g[S]
          A.theme = b.useContext(St)
        }
        typeof g.className == 'string'
          ? (v = Co(x.registered, E, g.className))
          : g.className != null && (v = g.className + ' ')
        var k = Qt(m.concat(E), x.registered, A)
        ;(v += x.key + '-' + k.name), i !== void 0 && (v += ' ' + i)
        var C = c && u === void 0 ? Gl(w) : s,
          O = {}
        for (var T in g) (c && T === 'as') || (C(T) && (O[T] = g[T]))
        return (
          (O.className = v),
          (O.ref = y),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(hp, {
              cache: x,
              serialized: k,
              isStringTag: typeof w == 'string',
            }),
            b.createElement(w, O)
          )
        )
      })
      return (
        (h.displayName =
          l !== void 0
            ? l
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = o),
        (h.__emotion_styles = m),
        (h.__emotion_forwardProp = u),
        Object.defineProperty(h, 'toString', {
          value: function () {
            return i === void 0 ? 'NO_COMPONENT_SELECTOR' : '.' + i
          },
        }),
        (h.withComponent = function (g, x) {
          return e(g, At({}, r, x, {shouldForwardProp: Yl(h, x, !0)})).apply(
            void 0,
            m
          )
        }),
        h
      )
    }
  },
  yp = [
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
  _ = bp.bind()
yp.forEach(function (e) {
  _[e] = _(e)
})
var vp = Ht(1)(({typography: e}) => ({
  body: {
    fontFamily: e.fonts.base,
    fontSize: e.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
  },
  '*': {boxSizing: 'border-box'},
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: e.weight.regular,
    margin: 0,
    padding: 0,
  },
  'button, input, textarea, select': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    boxSizing: 'border-box',
  },
  sub: {fontSize: '0.8em', bottom: '-0.2em'},
  sup: {fontSize: '0.8em', top: '-0.2em'},
  'b, strong': {fontWeight: e.weight.bold},
  hr: {
    border: 'none',
    borderTop: '1px solid silver',
    clear: 'both',
    marginBottom: '1.25rem',
  },
  code: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'inline-block',
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: 'baseline',
    color: 'inherit',
  },
  pre: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0',
  },
}))
Ht(1)(({color: e, background: t, typography: r}) => {
  let n = vp({typography: r})
  return {
    ...n,
    body: {
      ...n.body,
      color: e.defaultText,
      background: t.app,
      overflow: 'hidden',
    },
    hr: {...n.hr, borderTop: `1px solid ${e.border}`},
  }
})
var Ep = {rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'},
  xp = sr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  Ws = sr`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  wp = sr`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  Ap = sr`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  Sp = Oo`
  animation: ${Ws} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  Cp = Oo`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  kp = {
    rotate360: xp,
    glow: Ws,
    float: wp,
    jiggle: Ap,
    inlineGlow: Sp,
    hoverable: Cp,
  },
  _p = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  Op = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'white',
    BASE_COLOR: 'black',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
    HTML_TAG_COLOR: 'rgb(168, 148, 166)',
    HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
    HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: '#6e6e6e',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: '#aaa',
    TABLE_TH_BACKGROUND_COLOR: '#eee',
    TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
    TABLE_SORT_ICON_COLOR: '#6e6e6e',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  Tp = (e) => Object.entries(e).reduce((t, [r, n]) => ({...t, [r]: id(n)}), {}),
  Rp = ({colors: e, mono: t}) => {
    let r = Tp(e)
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: 'antialiased',
        '&.tag': r.red3,
        '&.comment': {...r.green1, fontStyle: 'italic'},
        '&.prolog': {...r.green1, fontStyle: 'italic'},
        '&.doctype': {...r.green1, fontStyle: 'italic'},
        '&.cdata': {...r.green1, fontStyle: 'italic'},
        '&.string': r.red1,
        '&.url': r.cyan1,
        '&.symbol': r.cyan1,
        '&.number': r.cyan1,
        '&.boolean': r.cyan1,
        '&.variable': r.cyan1,
        '&.constant': r.cyan1,
        '&.inserted': r.cyan1,
        '&.atrule': r.blue1,
        '&.keyword': r.blue1,
        '&.attr-value': r.blue1,
        '&.punctuation': r.gray1,
        '&.operator': r.gray1,
        '&.function': r.gray1,
        '&.deleted': r.red2,
        '&.important': {fontWeight: 'bold'},
        '&.bold': {fontWeight: 'bold'},
        '&.italic': {fontStyle: 'italic'},
        '&.class-name': r.cyan2,
        '&.selector': r.red3,
        '&.attr-name': r.red4,
        '&.property': r.red4,
        '&.regex': r.red4,
        '&.entity': r.red4,
        '&.directive.tag .tag': {background: '#ffff00', ...r.gray1},
      },
      'language-json .token.boolean': r.blue1,
      'language-json .token.number': r.blue1,
      'language-json .token.property': r.cyan2,
      namespace: {opacity: 0.7},
    }
  },
  Fp = {
    green1: '#008000',
    red1: '#A31515',
    red2: '#9a050f',
    red3: '#800000',
    red4: '#ff0000',
    gray1: '#393A34',
    cyan1: '#36acaa',
    cyan2: '#2B91AF',
    blue1: '#0000ff',
    blue2: '#00009f',
  },
  $p = {
    green1: '#7C7C7C',
    red1: '#92C379',
    red2: '#9a050f',
    red3: '#A8FF60',
    red4: '#96CBFE',
    gray1: '#EDEDED',
    cyan1: '#C6C5FE',
    cyan2: '#FFFFB6',
    blue1: '#B474DD',
    blue2: '#00009f',
  },
  Dp = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: j.tertiary,
    ancillary: j.ancillary,
    orange: j.orange,
    gold: j.gold,
    green: j.green,
    seafoam: j.seafoam,
    purple: j.purple,
    ultraviolet: j.ultraviolet,
    lightest: j.lightest,
    lighter: j.lighter,
    light: j.light,
    mediumlight: j.mediumlight,
    medium: j.medium,
    mediumdark: j.mediumdark,
    dark: j.dark,
    darker: j.darker,
    darkest: j.darkest,
    border: j.border,
    positive: j.positive,
    negative: j.negative,
    warning: j.warning,
    critical: j.critical,
    defaultText: e.textColor || j.darkest,
    inverseText: e.textInverseColor || j.lightest,
    positiveText: j.positiveText,
    negativeText: j.negativeText,
    warningText: j.warningText,
  }),
  qa = (e = Za[$s()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: n,
      appBg: o,
      appContentBg: l,
      appBorderColor: i,
      appBorderRadius: u,
      fontBase: s,
      fontCode: c,
      textColor: d,
      textInverseColor: m,
      barTextColor: f,
      barHoverColor: p,
      barSelectedColor: h,
      barBg: g,
      buttonBg: x,
      buttonBorder: y,
      booleanBg: w,
      booleanSelectedBg: v,
      inputBg: E,
      inputBorder: A,
      inputTextColor: S,
      inputBorderRadius: k,
      brandTitle: C,
      brandUrl: O,
      brandImage: T,
      brandTarget: R,
      gridCellSize: $,
      ...F
    } = e
    return {
      ...F,
      base: t,
      color: Dp(e),
      background: {
        app: o,
        bar: g,
        content: l,
        gridCellSize: $ || vt.gridCellSize,
        hoverable: vt.hoverable,
        positive: vt.positive,
        negative: vt.negative,
        warning: vt.warning,
        critical: vt.critical,
      },
      typography: {fonts: {base: s, mono: c}, weight: tt.weight, size: tt.size},
      animation: kp,
      easing: Ep,
      input: {background: E, border: A, borderRadius: k, color: S},
      button: {background: x || E, border: y || A},
      boolean: {background: w || A, selectedBackground: v || E},
      layoutMargin: 10,
      appBorderColor: i,
      appBorderRadius: u,
      barTextColor: f,
      barHoverColor: p || n,
      barSelectedColor: h || n,
      barBg: g,
      brand: {title: C, url: O, image: T || (C ? null : void 0), target: R},
      code: Rp({colors: t === 'light' ? Fp : $p, mono: c}),
      addonActionsTheme: {
        ...(t === 'light' ? Op : _p),
        BASE_FONT_FAMILY: c,
        BASE_FONT_SIZE: tt.size.s2 - 1,
        BASE_LINE_HEIGHT: '18px',
        BASE_BACKGROUND_COLOR: 'transparent',
        BASE_COLOR: d,
        ARROW_COLOR: ed(0.2, i),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: c,
        TREENODE_FONT_SIZE: tt.size.s2 - 1,
        TREENODE_LINE_HEIGHT: '18px',
        TREENODE_PADDING_LEFT: 12,
      },
    }
  },
  Lp = (e) => Object.keys(e).length === 0,
  ga = (e) => e != null && typeof e == 'object',
  Mp = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  Bp = () => Object.create(null),
  Gs = (e, t) =>
    e === t || !ga(e) || !ga(t)
      ? {}
      : Object.keys(e).reduce((r, n) => {
          if (Mp(t, n)) {
            let o = Gs(e[n], t[n])
            return (ga(o) && Lp(o)) || (r[n] = o), r
          }
          return (r[n] = void 0), r
        }, Bp()),
  Ip = Gs
function Pp(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
  var n = Array.from(typeof e == 'string' ? [e] : e)
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
  var o = n.reduce(function (u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g)
    return c
      ? u.concat(
          c.map(function (d) {
            var m, f
            return (f =
              (m = d.match(/[\t ]/g)) === null || m === void 0
                ? void 0
                : m.length) !== null && f !== void 0
              ? f
              : 0
          })
        )
      : u
  }, [])
  if (o.length) {
    var l = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        '}',
      'g'
    )
    n = n.map(function (u) {
      return u.replace(
        l,
        `
`
      )
    })
  }
  n[0] = n[0].replace(/^\r?\n/, '')
  var i = n[0]
  return (
    t.forEach(function (u, s) {
      var c = i.match(/(?:^|\n)( *)$/),
        d = c ? c[1] : '',
        m = u
      typeof u == 'string' &&
        u.includes(`
`) &&
        (m = String(u)
          .split(
            `
`
          )
          .map(function (f, p) {
            return p === 0 ? f : '' + d + f
          }).join(`
`)),
        (i += m + n[s + 1])
    }),
    i
  )
}
var Np = (e) => {
    if (!e) return qa(bn)
    let t = Ip(bn, e)
    return (
      Object.keys(t).length &&
        fd.warn(
          Pp`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      qa(e)
    )
  },
  Ua =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */'
function U() {
  return (
    (U = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    U.apply(this, arguments)
  )
}
function To(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    l
  for (l = 0; l < n.length; l++)
    (o = n[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
var jp = Object.create,
  Ys = Object.defineProperty,
  Hp = Object.getOwnPropertyDescriptor,
  Ks = Object.getOwnPropertyNames,
  Zp = Object.getPrototypeOf,
  Vp = Object.prototype.hasOwnProperty,
  Z = (e, t) =>
    function () {
      return t || (0, e[Ks(e)[0]])((t = {exports: {}}).exports, t), t.exports
    },
  zp = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of Ks(t))
        !Vp.call(e, o) &&
          o !== r &&
          Ys(e, o, {
            get: () => t[o],
            enumerable: !(n = Hp(t, o)) || n.enumerable,
          })
    return e
  },
  _e = (e, t, r) => (
    (r = e != null ? jp(Zp(e)) : {}),
    zp(
      t || !e || !e.__esModule
        ? Ys(r, 'default', {value: e, enumerable: !0})
        : r,
      e
    )
  ),
  qp = Z({
    '../../node_modules/refractor/lang/markdown.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'markdown'), (r.aliases = ['md'])
      function r(n) {
        ;(function (o) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source
          function i(h) {
            return (
              (h = h.replace(/<inner>/g, function () {
                return l
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + h + ')')
            )
          }
          var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return u
              }
            ),
            c =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source
          ;(o.languages.markdown = o.languages.extend('markup', {})),
            o.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'front-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: o.languages.yaml,
                  },
                },
              },
              blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation'},
              table: {
                pattern: RegExp('^' + s + c + '(?:' + s + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + s + c + ')(?:' + s + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(u),
                        inside: o.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + s + ')' + c + '$'),
                    lookbehind: !0,
                    inside: {punctuation: /\||:?-{3,}:?/},
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + s + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(u),
                        alias: 'important',
                        inside: o.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': {pattern: /^(```).+/, lookbehind: !0},
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: {punctuation: /==+$|--+$/},
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: {punctuation: /^#+|#+$/},
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: i(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: i(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              'code-snippet': {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword'],
              },
              url: {
                pattern: i(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: {pattern: /(^\]\()[^\s)]+/, lookbehind: !0},
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (h) {
              ;['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(
                function (g) {
                  h !== g &&
                    (o.languages.markdown[h].inside.content.inside[g] =
                      o.languages.markdown[g])
                }
              )
            }),
            o.hooks.add('after-tokenize', function (h) {
              if (h.language !== 'markdown' && h.language !== 'md') return
              function g(x) {
                if (!(!x || typeof x == 'string'))
                  for (var y = 0, w = x.length; y < w; y++) {
                    var v = x[y]
                    if (v.type !== 'code') {
                      g(v.content)
                      continue
                    }
                    var E = v.content[1],
                      A = v.content[3]
                    if (
                      E &&
                      A &&
                      E.type === 'code-language' &&
                      A.type === 'code-block' &&
                      typeof E.content == 'string'
                    ) {
                      var S = E.content
                        .replace(/\b#/g, 'sharp')
                        .replace(/\b\+\+/g, 'pp')
                      S = (/[a-z][\w-]*/i.exec(S) || [''])[0].toLowerCase()
                      var k = 'language-' + S
                      A.alias
                        ? typeof A.alias == 'string'
                          ? (A.alias = [A.alias, k])
                          : A.alias.push(k)
                        : (A.alias = [k])
                    }
                  }
              }
              g(h.tokens)
            }),
            o.hooks.add('wrap', function (h) {
              if (h.type === 'code-block') {
                for (var g = '', x = 0, y = h.classes.length; x < y; x++) {
                  var w = h.classes[x],
                    v = /language-(.+)/.exec(w)
                  if (v) {
                    g = v[1]
                    break
                  }
                }
                var E = o.languages[g]
                if (E) h.content = o.highlight(p(h.content.value), E, g)
                else if (g && g !== 'none' && o.plugins.autoloader) {
                  var A =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(Math.random() * 1e16)
                  ;(h.attributes.id = A),
                    o.plugins.autoloader.loadLanguages(g, function () {
                      var S = document.getElementById(A)
                      S &&
                        (S.innerHTML = o.highlight(
                          S.textContent,
                          o.languages[g],
                          g
                        ))
                    })
                }
              }
            })
          var d = RegExp(o.languages.markup.tag.pattern.source, 'gi'),
            m = {amp: '&', lt: '<', gt: '>', quot: '"'},
            f = String.fromCodePoint || String.fromCharCode
          function p(h) {
            var g = h.replace(d, '')
            return (
              (g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (x, y) {
                if (((y = y.toLowerCase()), y[0] === '#')) {
                  var w
                  return (
                    y[1] === 'x'
                      ? (w = parseInt(y.slice(2), 16))
                      : (w = Number(y.slice(1))),
                    f(w)
                  )
                } else {
                  var v = m[y]
                  return v || x
                }
              })),
              g
            )
          }
          o.languages.md = o.languages.markdown
        })(n)
      }
    },
  }),
  Up = Z({
    '../../node_modules/refractor/lang/yaml.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'yaml'), (r.aliases = ['yml'])
      function r(n) {
        ;(function (o) {
          var l = /[*&][^\s[\]{},]+/,
            i =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            u =
              '(?:' +
              i.source +
              '(?:[ 	]+' +
              l.source +
              ')?|' +
              l.source +
              '(?:[ 	]+' +
              i.source +
              ')?)',
            s =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source
                }
              ),
            c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source
          function d(m, f) {
            f = (f || '').replace(/m/g, '') + 'm'
            var p =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return u
                })
                .replace(/<<value>>/g, function () {
                  return m
                })
            return RegExp(p, f)
          }
          ;(o.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return u
                  }
                )
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return u
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + s + '|' + c + ')'
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: d(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: d(/false|true/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: d(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: {pattern: d(c), lookbehind: !0, greedy: !0},
            number: {
              pattern: d(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i'
              ),
              lookbehind: !0,
            },
            tag: i,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (o.languages.yml = o.languages.yaml)
        })(n)
      }
    },
  }),
  Xs = Z({
    '../../node_modules/refractor/lang/typescript.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'typescript'), (r.aliases = ['ts'])
      function r(n) {
        ;(function (o) {
          ;(o.languages.typescript = o.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            o.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete o.languages.typescript.parameter,
            delete o.languages.typescript['literal-property']
          var l = o.languages.extend('typescript', {})
          delete l['class-name'],
            (o.languages.typescript['class-name'].inside = l),
            o.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: {pattern: /^@/, alias: 'operator'},
                  function: /^[\s\S]+/,
                },
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: l,
                  },
                },
              },
            }),
            (o.languages.ts = o.languages.typescript)
        })(n)
      }
    },
  }),
  Js = Z({
    '../../node_modules/refractor/lang/jsx.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'jsx'), (r.aliases = [])
      function r(n) {
        ;(function (o) {
          var l = o.util.clone(o.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source
          function c(f, p) {
            return (
              (f = f
                .replace(/<S>/g, function () {
                  return i
                })
                .replace(/<BRACES>/g, function () {
                  return u
                })
                .replace(/<SPREAD>/g, function () {
                  return s
                })),
              RegExp(f, p)
            )
          }
          ;(s = c(s).source),
            (o.languages.jsx = o.languages.extend('markup', l)),
            (o.languages.jsx.tag.pattern = c(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (o.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (o.languages.jsx.tag.inside.tag.inside['class-name'] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (o.languages.jsx.tag.inside.comment = l.comment),
            o.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: c(/<SPREAD>/.source),
                  inside: o.languages.jsx,
                },
              },
              o.languages.jsx.tag
            ),
            o.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: c(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?=\{)/,
                      alias: 'punctuation',
                    },
                    rest: o.languages.jsx,
                  },
                },
              },
              o.languages.jsx.tag
            )
          var d = function (f) {
              return f
                ? typeof f == 'string'
                  ? f
                  : typeof f.content == 'string'
                  ? f.content
                  : f.content.map(d).join('')
                : ''
            },
            m = function (f) {
              for (var p = [], h = 0; h < f.length; h++) {
                var g = f[h],
                  x = !1
                if (
                  (typeof g != 'string' &&
                    (g.type === 'tag' &&
                    g.content[0] &&
                    g.content[0].type === 'tag'
                      ? g.content[0].content[0].content === '</'
                        ? p.length > 0 &&
                          p[p.length - 1].tagName ===
                            d(g.content[0].content[1]) &&
                          p.pop()
                        : g.content[g.content.length - 1].content === '/>' ||
                          p.push({
                            tagName: d(g.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : p.length > 0 &&
                        g.type === 'punctuation' &&
                        g.content === '{'
                      ? p[p.length - 1].openedBraces++
                      : p.length > 0 &&
                        p[p.length - 1].openedBraces > 0 &&
                        g.type === 'punctuation' &&
                        g.content === '}'
                      ? p[p.length - 1].openedBraces--
                      : (x = !0)),
                  (x || typeof g == 'string') &&
                    p.length > 0 &&
                    p[p.length - 1].openedBraces === 0)
                ) {
                  var y = d(g)
                  h < f.length - 1 &&
                    (typeof f[h + 1] == 'string' ||
                      f[h + 1].type === 'plain-text') &&
                    ((y += d(f[h + 1])), f.splice(h + 1, 1)),
                    h > 0 &&
                      (typeof f[h - 1] == 'string' ||
                        f[h - 1].type === 'plain-text') &&
                      ((y = d(f[h - 1]) + y), f.splice(h - 1, 1), h--),
                    (f[h] = new o.Token('plain-text', y, null, y))
                }
                g.content && typeof g.content != 'string' && m(g.content)
              }
            }
          o.hooks.add('after-tokenize', function (f) {
            ;(f.language !== 'jsx' && f.language !== 'tsx') || m(f.tokens)
          })
        })(n)
      }
    },
  }),
  Wp = Z({
    '../../node_modules/refractor/lang/tsx.js'(e, t) {
      var r = Js(),
        n = Xs()
      ;(t.exports = o), (o.displayName = 'tsx'), (o.aliases = [])
      function o(l) {
        l.register(r),
          l.register(n),
          (function (i) {
            var u = i.util.clone(i.languages.typescript)
            ;(i.languages.tsx = i.languages.extend('jsx', u)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx['literal-property']
            var s = i.languages.tsx.tag
            ;(s.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + '(?:' + s.pattern.source + ')',
              s.pattern.flags
            )),
              (s.lookbehind = !0)
          })(l)
      }
    },
  }),
  Gp = Z({
    '../../node_modules/refractor/lang/clike.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'clike'), (r.aliases = [])
      function r(n) {
        n.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0},
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {punctuation: /[.\\]/},
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }
      }
    },
  }),
  Yp = Z({
    '../../node_modules/refractor/lang/javascript.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'javascript'), (r.aliases = ['js'])
      function r(n) {
        ;(n.languages.javascript = n.languages.extend('clike', {
          'class-name': [
            n.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            {pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0},
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                (/NaN|Infinity/.source +
                  '|' +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  '|' +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  '|' +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  '|' +
                  /\d+(?:_\d+)*n/.source +
                  '|' +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ')' +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (n.languages.javascript['class-name'][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          n.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'regex-source': {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: 'language-regex',
                  inside: n.languages.regex,
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/,
              },
            },
            'function-variable': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: 'function',
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          n.languages.insertBefore('javascript', 'string', {
            hashbang: {pattern: /^#!.*/, greedy: !0, alias: 'comment'},
            'template-string': {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                'template-punctuation': {pattern: /^`|`$/, alias: 'string'},
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    'interpolation-punctuation': {
                      pattern: /^\$\{|\}$/,
                      alias: 'punctuation',
                    },
                    rest: n.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            'string-property': {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: 'property',
            },
          }),
          n.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: 'property',
            },
          }),
          n.languages.markup &&
            (n.languages.markup.tag.addInlined('script', 'javascript'),
            n.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              'javascript'
            )),
          (n.languages.js = n.languages.javascript)
      }
    },
  }),
  Qs = Z({
    '../../node_modules/refractor/lang/css.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'css'), (r.aliases = [])
      function r(n) {
        ;(function (o) {
          var l =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
          ;(o.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  l.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i'
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {pattern: RegExp('^' + l.source + '$'), alias: 'url'},
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  l.source +
                  ')*(?=\\s*\\{)'
              ),
              lookbehind: !0,
            },
            string: {pattern: l, greedy: !0},
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (o.languages.css.atrule.inside.rest = o.languages.css)
          var i = o.languages.markup
          i &&
            (i.tag.addInlined('style', 'css'),
            i.tag.addAttribute('style', 'css'))
        })(n)
      }
    },
  }),
  eu = Z({
    '../../node_modules/refractor/lang/markup.js'(e, t) {
      ;(t.exports = r),
        (r.displayName = 'markup'),
        (r.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'])
      function r(n) {
        ;(n.languages.markup = {
          comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
          prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/},
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{pattern: /^=/, alias: 'attr-equals'}, /"|'/],
                },
              },
              punctuation: /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {namespace: /^[^\s>\/:]+:/},
              },
            },
          },
          entity: [
            {pattern: /&[\da-z]{1,8};/i, alias: 'named-entity'},
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (n.languages.markup.tag.inside['attr-value'].inside.entity =
            n.languages.markup.entity),
          (n.languages.markup.doctype.inside['internal-subset'].inside =
            n.languages.markup),
          n.hooks.add('wrap', function (o) {
            o.type === 'entity' &&
              (o.attributes.title = o.content.value.replace(/&amp;/, '&'))
          }),
          Object.defineProperty(n.languages.markup.tag, 'addInlined', {
            value: function (o, l) {
              var i = {}
              ;(i['language-' + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[l],
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i)
              var u = {
                'included-cdata': {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: i,
                },
              }
              u['language-' + l] = {pattern: /[\s\S]+/, inside: n.languages[l]}
              var s = {}
              ;(s[o] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return o
                    }
                  ),
                  'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: u,
              }),
                n.languages.insertBefore('markup', 'cdata', s)
            },
          }),
          Object.defineProperty(n.languages.markup.tag, 'addAttribute', {
            value: function (o, l) {
              n.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    '(?:' +
                    o +
                    ')' +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  'i'
                ),
                lookbehind: !0,
                inside: {
                  'attr-name': /^[^\s=]+/,
                  'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [l, 'language-' + l],
                        inside: n.languages[l],
                      },
                      punctuation: [
                        {pattern: /^=/, alias: 'attr-equals'},
                        /"|'/,
                      ],
                    },
                  },
                },
              })
            },
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend('markup', {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml)
      }
    },
  }),
  Kp = Z({
    '../../node_modules/xtend/immutable.js'(e, t) {
      t.exports = n
      var r = Object.prototype.hasOwnProperty
      function n() {
        for (var o = {}, l = 0; l < arguments.length; l++) {
          var i = arguments[l]
          for (var u in i) r.call(i, u) && (o[u] = i[u])
        }
        return o
      }
    },
  }),
  tu = Z({
    '../../node_modules/property-information/lib/util/schema.js'(e, t) {
      t.exports = n
      var r = n.prototype
      ;(r.space = null), (r.normal = {}), (r.property = {})
      function n(o, l, i) {
        ;(this.property = o), (this.normal = l), i && (this.space = i)
      }
    },
  }),
  Xp = Z({
    '../../node_modules/property-information/lib/util/merge.js'(e, t) {
      var r = Kp(),
        n = tu()
      t.exports = o
      function o(l) {
        for (var i = l.length, u = [], s = [], c = -1, d, m; ++c < i; )
          (d = l[c]), u.push(d.property), s.push(d.normal), (m = d.space)
        return new n(r.apply(null, u), r.apply(null, s), m)
      }
    },
  }),
  Ro = Z({
    '../../node_modules/property-information/normalize.js'(e, t) {
      t.exports = r
      function r(n) {
        return n.toLowerCase()
      }
    },
  }),
  ru = Z({
    '../../node_modules/property-information/lib/util/info.js'(e, t) {
      t.exports = n
      var r = n.prototype
      ;(r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1)
      function n(o, l) {
        ;(this.property = o), (this.attribute = l)
      }
    },
  }),
  Fo = Z({
    '../../node_modules/property-information/lib/util/types.js'(e) {
      var t = 0
      ;(e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r())
      function r() {
        return Math.pow(2, ++t)
      }
    },
  }),
  nu = Z({
    '../../node_modules/property-information/lib/util/defined-info.js'(e, t) {
      var r = ru(),
        n = Fo()
      ;(t.exports = i), (i.prototype = new r()), (i.prototype.defined = !0)
      var o = [
          'boolean',
          'booleanish',
          'overloadedBoolean',
          'number',
          'commaSeparated',
          'spaceSeparated',
          'commaOrSpaceSeparated',
        ],
        l = o.length
      function i(s, c, d, m) {
        var f = -1,
          p
        for (u(this, 'space', m), r.call(this, s, c); ++f < l; )
          (p = o[f]), u(this, p, (d & n[p]) === n[p])
      }
      function u(s, c, d) {
        d && (s[c] = d)
      }
    },
  }),
  Nr = Z({
    '../../node_modules/property-information/lib/util/create.js'(e, t) {
      var r = Ro(),
        n = tu(),
        o = nu()
      t.exports = l
      function l(i) {
        var u = i.space,
          s = i.mustUseProperty || [],
          c = i.attributes || {},
          d = i.properties,
          m = i.transform,
          f = {},
          p = {},
          h,
          g
        for (h in d)
          (g = new o(h, m(c, h), d[h], u)),
            s.indexOf(h) !== -1 && (g.mustUseProperty = !0),
            (f[h] = g),
            (p[r(h)] = h),
            (p[r(g.attribute)] = h)
        return new n(f, p, u)
      }
    },
  }),
  Jp = Z({
    '../../node_modules/property-information/lib/xlink.js'(e, t) {
      var r = Nr()
      t.exports = r({
        space: 'xlink',
        transform: n,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      })
      function n(o, l) {
        return 'xlink:' + l.slice(5).toLowerCase()
      }
    },
  }),
  Qp = Z({
    '../../node_modules/property-information/lib/xml.js'(e, t) {
      var r = Nr()
      t.exports = r({
        space: 'xml',
        transform: n,
        properties: {xmlLang: null, xmlBase: null, xmlSpace: null},
      })
      function n(o, l) {
        return 'xml:' + l.slice(3).toLowerCase()
      }
    },
  }),
  e2 = Z({
    '../../node_modules/property-information/lib/util/case-sensitive-transform.js'(
      e,
      t
    ) {
      t.exports = r
      function r(n, o) {
        return o in n ? n[o] : o
      }
    },
  }),
  au = Z({
    '../../node_modules/property-information/lib/util/case-insensitive-transform.js'(
      e,
      t
    ) {
      var r = e2()
      t.exports = n
      function n(o, l) {
        return r(o, l.toLowerCase())
      }
    },
  }),
  t2 = Z({
    '../../node_modules/property-information/lib/xmlns.js'(e, t) {
      var r = Nr(),
        n = au()
      t.exports = r({
        space: 'xmlns',
        attributes: {xmlnsxlink: 'xmlns:xlink'},
        transform: n,
        properties: {xmlns: null, xmlnsXLink: null},
      })
    },
  }),
  r2 = Z({
    '../../node_modules/property-information/lib/aria.js'(e, t) {
      var r = Fo(),
        n = Nr(),
        o = r.booleanish,
        l = r.number,
        i = r.spaceSeparated
      t.exports = n({
        transform: u,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: o,
          ariaAutoComplete: null,
          ariaBusy: o,
          ariaChecked: o,
          ariaColCount: l,
          ariaColIndex: l,
          ariaColSpan: l,
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: o,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: o,
          ariaFlowTo: i,
          ariaGrabbed: o,
          ariaHasPopup: null,
          ariaHidden: o,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: o,
          ariaMultiLine: o,
          ariaMultiSelectable: o,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: o,
          ariaReadOnly: o,
          ariaRelevant: null,
          ariaRequired: o,
          ariaRoleDescription: i,
          ariaRowCount: l,
          ariaRowIndex: l,
          ariaRowSpan: l,
          ariaSelected: o,
          ariaSetSize: l,
          ariaSort: null,
          ariaValueMax: l,
          ariaValueMin: l,
          ariaValueNow: l,
          ariaValueText: null,
          role: null,
        },
      })
      function u(s, c) {
        return c === 'role' ? c : 'aria-' + c.slice(4).toLowerCase()
      }
    },
  }),
  n2 = Z({
    '../../node_modules/property-information/lib/html.js'(e, t) {
      var r = Fo(),
        n = Nr(),
        o = au(),
        l = r.boolean,
        i = r.overloadedBoolean,
        u = r.booleanish,
        s = r.number,
        c = r.spaceSeparated,
        d = r.commaSeparated
      t.exports = n({
        space: 'html',
        attributes: {
          acceptcharset: 'accept-charset',
          classname: 'class',
          htmlfor: 'for',
          httpequiv: 'http-equiv',
        },
        transform: o,
        mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
        properties: {
          abbr: null,
          accept: d,
          acceptCharset: c,
          accessKey: c,
          action: null,
          allow: null,
          allowFullScreen: l,
          allowPaymentRequest: l,
          allowUserMedia: l,
          alt: null,
          as: null,
          async: l,
          autoCapitalize: null,
          autoComplete: c,
          autoFocus: l,
          autoPlay: l,
          capture: l,
          charSet: null,
          checked: l,
          cite: null,
          className: c,
          cols: s,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: l,
          controlsList: c,
          coords: s | d,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: i,
          draggable: u,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: l,
          formTarget: null,
          headers: c,
          height: s,
          hidden: l,
          high: s,
          href: null,
          hrefLang: null,
          htmlFor: c,
          httpEquiv: c,
          id: null,
          imageSizes: null,
          imageSrcSet: d,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: l,
          itemId: null,
          itemProp: c,
          itemRef: c,
          itemScope: l,
          itemType: c,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: l,
          low: s,
          manifest: null,
          max: null,
          maxLength: s,
          media: null,
          method: null,
          min: null,
          minLength: s,
          multiple: l,
          muted: l,
          name: null,
          nonce: null,
          noModule: l,
          noValidate: l,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: l,
          optimum: s,
          pattern: null,
          ping: c,
          placeholder: null,
          playsInline: l,
          poster: null,
          preload: null,
          readOnly: l,
          referrerPolicy: null,
          rel: c,
          required: l,
          reversed: l,
          rows: s,
          rowSpan: s,
          sandbox: c,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: s,
          sizes: null,
          slot: null,
          span: s,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: d,
          start: s,
          step: null,
          style: null,
          tabIndex: s,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: u,
          width: s,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: s,
          borderColor: null,
          bottomMargin: s,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: l,
          declare: l,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: s,
          leftMargin: s,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: s,
          marginWidth: s,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: s,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: s,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: s,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: s,
          security: null,
          unselectable: null,
        },
      })
    },
  }),
  a2 = Z({
    '../../node_modules/property-information/html.js'(e, t) {
      var r = Xp(),
        n = Jp(),
        o = Qp(),
        l = t2(),
        i = r2(),
        u = n2()
      t.exports = r([o, n, l, i, u])
    },
  }),
  o2 = Z({
    '../../node_modules/property-information/find.js'(e, t) {
      var r = Ro(),
        n = nu(),
        o = ru(),
        l = 'data'
      t.exports = c
      var i = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        s = /[A-Z]/g
      function c(h, g) {
        var x = r(g),
          y = g,
          w = o
        return x in h.normal
          ? h.property[h.normal[x]]
          : (x.length > 4 &&
              x.slice(0, 4) === l &&
              i.test(g) &&
              (g.charAt(4) === '-' ? (y = d(g)) : (g = m(g)), (w = n)),
            new w(y, g))
      }
      function d(h) {
        var g = h.slice(5).replace(u, p)
        return l + g.charAt(0).toUpperCase() + g.slice(1)
      }
      function m(h) {
        var g = h.slice(4)
        return u.test(g)
          ? h
          : ((g = g.replace(s, f)), g.charAt(0) !== '-' && (g = '-' + g), l + g)
      }
      function f(h) {
        return '-' + h.toLowerCase()
      }
      function p(h) {
        return h.charAt(1).toUpperCase()
      }
    },
  }),
  l2 = Z({
    '../../node_modules/hast-util-parse-selector/index.js'(e, t) {
      t.exports = n
      var r = /[#.]/g
      function n(o, l) {
        for (
          var i = o || '', u = l || 'div', s = {}, c = 0, d, m, f;
          c < i.length;

        )
          (r.lastIndex = c),
            (f = r.exec(i)),
            (d = i.slice(c, f ? f.index : i.length)),
            d &&
              (m
                ? m === '#'
                  ? (s.id = d)
                  : s.className
                  ? s.className.push(d)
                  : (s.className = [d])
                : (u = d),
              (c += d.length)),
            f && ((m = f[0]), c++)
        return {type: 'element', tagName: u, properties: s, children: []}
      }
    },
  }),
  i2 = Z({
    '../../node_modules/space-separated-tokens/index.js'(e) {
      ;(e.parse = o), (e.stringify = l)
      var t = '',
        r = ' ',
        n = /[ \t\n\r\f]+/g
      function o(i) {
        var u = String(i || t).trim()
        return u === t ? [] : u.split(n)
      }
      function l(i) {
        return i.join(r).trim()
      }
    },
  }),
  s2 = Z({
    '../../node_modules/comma-separated-tokens/index.js'(e) {
      ;(e.parse = o), (e.stringify = l)
      var t = ',',
        r = ' ',
        n = ''
      function o(i) {
        for (
          var u = [], s = String(i || n), c = s.indexOf(t), d = 0, m = !1, f;
          !m;

        )
          c === -1 && ((c = s.length), (m = !0)),
            (f = s.slice(d, c).trim()),
            (f || !m) && u.push(f),
            (d = c + 1),
            (c = s.indexOf(t, d))
        return u
      }
      function l(i, u) {
        var s = u || {},
          c = s.padLeft === !1 ? n : r,
          d = s.padRight ? r : n
        return (
          i[i.length - 1] === n && (i = i.concat(n)), i.join(d + t + c).trim()
        )
      }
    },
  }),
  u2 = Z({
    '../../node_modules/hastscript/factory.js'(e, t) {
      var r = o2(),
        n = Ro(),
        o = l2(),
        l = i2().parse,
        i = s2().parse
      t.exports = s
      var u = {}.hasOwnProperty
      function s(x, y, w) {
        var v = w ? g(w) : null
        return E
        function E(S, k) {
          var C = o(S, y),
            O = Array.prototype.slice.call(arguments, 2),
            T = C.tagName.toLowerCase(),
            R
          if (
            ((C.tagName = v && u.call(v, T) ? v[T] : T),
            k && c(k, C) && (O.unshift(k), (k = null)),
            k)
          )
            for (R in k) A(C.properties, R, k[R])
          return (
            m(C.children, O),
            C.tagName === 'template' &&
              ((C.content = {type: 'root', children: C.children}),
              (C.children = [])),
            C
          )
        }
        function A(S, k, C) {
          var O, T, R
          C == null ||
            C !== C ||
            ((O = r(x, k)),
            (T = O.property),
            (R = C),
            typeof R == 'string' &&
              (O.spaceSeparated
                ? (R = l(R))
                : O.commaSeparated
                ? (R = i(R))
                : O.commaOrSpaceSeparated && (R = l(i(R).join(' ')))),
            T === 'style' && typeof C != 'string' && (R = h(R)),
            T === 'className' && S.className && (R = S.className.concat(R)),
            (S[T] = f(O, T, R)))
        }
      }
      function c(x, y) {
        return typeof x == 'string' || 'length' in x || d(y.tagName, x)
      }
      function d(x, y) {
        var w = y.type
        return x === 'input' || !w || typeof w != 'string'
          ? !1
          : typeof y.children == 'object' && 'length' in y.children
          ? !0
          : ((w = w.toLowerCase()),
            x === 'button'
              ? w !== 'menu' &&
                w !== 'submit' &&
                w !== 'reset' &&
                w !== 'button'
              : 'value' in y)
      }
      function m(x, y) {
        var w, v
        if (typeof y == 'string' || typeof y == 'number') {
          x.push({type: 'text', value: String(y)})
          return
        }
        if (typeof y == 'object' && 'length' in y) {
          for (w = -1, v = y.length; ++w < v; ) m(x, y[w])
          return
        }
        if (typeof y != 'object' || !('type' in y))
          throw new Error('Expected node, nodes, or string, got `' + y + '`')
        x.push(y)
      }
      function f(x, y, w) {
        var v, E, A
        if (typeof w != 'object' || !('length' in w)) return p(x, y, w)
        for (E = w.length, v = -1, A = []; ++v < E; ) A[v] = p(x, y, w[v])
        return A
      }
      function p(x, y, w) {
        var v = w
        return (
          x.number || x.positiveNumber
            ? !isNaN(v) && v !== '' && (v = Number(v))
            : (x.boolean || x.overloadedBoolean) &&
              typeof v == 'string' &&
              (v === '' || n(w) === n(y)) &&
              (v = !0),
          v
        )
      }
      function h(x) {
        var y = [],
          w
        for (w in x) y.push([w, x[w]].join(': '))
        return y.join('; ')
      }
      function g(x) {
        for (var y = x.length, w = -1, v = {}, E; ++w < y; )
          (E = x[w]), (v[E.toLowerCase()] = E)
        return v
      }
    },
  }),
  c2 = Z({
    '../../node_modules/hastscript/html.js'(e, t) {
      var r = a2(),
        n = u2(),
        o = n(r, 'div')
      ;(o.displayName = 'html'), (t.exports = o)
    },
  }),
  d2 = Z({
    '../../node_modules/hastscript/index.js'(e, t) {
      t.exports = c2()
    },
  }),
  p2 = Z({
    '../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json'(
      e,
      t
    ) {
      t.exports = {
        AElig: 'Æ',
        AMP: '&',
        Aacute: 'Á',
        Acirc: 'Â',
        Agrave: 'À',
        Aring: 'Å',
        Atilde: 'Ã',
        Auml: 'Ä',
        COPY: '©',
        Ccedil: 'Ç',
        ETH: 'Ð',
        Eacute: 'É',
        Ecirc: 'Ê',
        Egrave: 'È',
        Euml: 'Ë',
        GT: '>',
        Iacute: 'Í',
        Icirc: 'Î',
        Igrave: 'Ì',
        Iuml: 'Ï',
        LT: '<',
        Ntilde: 'Ñ',
        Oacute: 'Ó',
        Ocirc: 'Ô',
        Ograve: 'Ò',
        Oslash: 'Ø',
        Otilde: 'Õ',
        Ouml: 'Ö',
        QUOT: '"',
        REG: '®',
        THORN: 'Þ',
        Uacute: 'Ú',
        Ucirc: 'Û',
        Ugrave: 'Ù',
        Uuml: 'Ü',
        Yacute: 'Ý',
        aacute: 'á',
        acirc: 'â',
        acute: '´',
        aelig: 'æ',
        agrave: 'à',
        amp: '&',
        aring: 'å',
        atilde: 'ã',
        auml: 'ä',
        brvbar: '¦',
        ccedil: 'ç',
        cedil: '¸',
        cent: '¢',
        copy: '©',
        curren: '¤',
        deg: '°',
        divide: '÷',
        eacute: 'é',
        ecirc: 'ê',
        egrave: 'è',
        eth: 'ð',
        euml: 'ë',
        frac12: '½',
        frac14: '¼',
        frac34: '¾',
        gt: '>',
        iacute: 'í',
        icirc: 'î',
        iexcl: '¡',
        igrave: 'ì',
        iquest: '¿',
        iuml: 'ï',
        laquo: '«',
        lt: '<',
        macr: '¯',
        micro: 'µ',
        middot: '·',
        nbsp: ' ',
        not: '¬',
        ntilde: 'ñ',
        oacute: 'ó',
        ocirc: 'ô',
        ograve: 'ò',
        ordf: 'ª',
        ordm: 'º',
        oslash: 'ø',
        otilde: 'õ',
        ouml: 'ö',
        para: '¶',
        plusmn: '±',
        pound: '£',
        quot: '"',
        raquo: '»',
        reg: '®',
        sect: '§',
        shy: '­',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        szlig: 'ß',
        thorn: 'þ',
        times: '×',
        uacute: 'ú',
        ucirc: 'û',
        ugrave: 'ù',
        uml: '¨',
        uuml: 'ü',
        yacute: 'ý',
        yen: '¥',
        yuml: 'ÿ',
      }
    },
  }),
  f2 = Z({
    '../../node_modules/character-reference-invalid/index.json'(e, t) {
      t.exports = {
        0: '�',
        128: '€',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        142: 'Ž',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        158: 'ž',
        159: 'Ÿ',
      }
    },
  }),
  ou = Z({
    '../../node_modules/is-decimal/index.js'(e, t) {
      t.exports = r
      function r(n) {
        var o = typeof n == 'string' ? n.charCodeAt(0) : n
        return o >= 48 && o <= 57
      }
    },
  }),
  m2 = Z({
    '../../node_modules/is-hexadecimal/index.js'(e, t) {
      t.exports = r
      function r(n) {
        var o = typeof n == 'string' ? n.charCodeAt(0) : n
        return (
          (o >= 97 && o <= 102) || (o >= 65 && o <= 70) || (o >= 48 && o <= 57)
        )
      }
    },
  }),
  g2 = Z({
    '../../node_modules/is-alphabetical/index.js'(e, t) {
      t.exports = r
      function r(n) {
        var o = typeof n == 'string' ? n.charCodeAt(0) : n
        return (o >= 97 && o <= 122) || (o >= 65 && o <= 90)
      }
    },
  }),
  h2 = Z({
    '../../node_modules/is-alphanumerical/index.js'(e, t) {
      var r = g2(),
        n = ou()
      t.exports = o
      function o(l) {
        return r(l) || n(l)
      }
    },
  }),
  b2 = Z({
    '../../node_modules/parse-entities/node_modules/character-entities/index.json'(
      e,
      t
    ) {
      t.exports = {
        AEli: 'Æ',
        AElig: 'Æ',
        AM: '&',
        AMP: '&',
        Aacut: 'Á',
        Aacute: 'Á',
        Abreve: 'Ă',
        Acir: 'Â',
        Acirc: 'Â',
        Acy: 'А',
        Afr: '𝔄',
        Agrav: 'À',
        Agrave: 'À',
        Alpha: 'Α',
        Amacr: 'Ā',
        And: '⩓',
        Aogon: 'Ą',
        Aopf: '𝔸',
        ApplyFunction: '⁡',
        Arin: 'Å',
        Aring: 'Å',
        Ascr: '𝒜',
        Assign: '≔',
        Atild: 'Ã',
        Atilde: 'Ã',
        Aum: 'Ä',
        Auml: 'Ä',
        Backslash: '∖',
        Barv: '⫧',
        Barwed: '⌆',
        Bcy: 'Б',
        Because: '∵',
        Bernoullis: 'ℬ',
        Beta: 'Β',
        Bfr: '𝔅',
        Bopf: '𝔹',
        Breve: '˘',
        Bscr: 'ℬ',
        Bumpeq: '≎',
        CHcy: 'Ч',
        COP: '©',
        COPY: '©',
        Cacute: 'Ć',
        Cap: '⋒',
        CapitalDifferentialD: 'ⅅ',
        Cayleys: 'ℭ',
        Ccaron: 'Č',
        Ccedi: 'Ç',
        Ccedil: 'Ç',
        Ccirc: 'Ĉ',
        Cconint: '∰',
        Cdot: 'Ċ',
        Cedilla: '¸',
        CenterDot: '·',
        Cfr: 'ℭ',
        Chi: 'Χ',
        CircleDot: '⊙',
        CircleMinus: '⊖',
        CirclePlus: '⊕',
        CircleTimes: '⊗',
        ClockwiseContourIntegral: '∲',
        CloseCurlyDoubleQuote: '”',
        CloseCurlyQuote: '’',
        Colon: '∷',
        Colone: '⩴',
        Congruent: '≡',
        Conint: '∯',
        ContourIntegral: '∮',
        Copf: 'ℂ',
        Coproduct: '∐',
        CounterClockwiseContourIntegral: '∳',
        Cross: '⨯',
        Cscr: '𝒞',
        Cup: '⋓',
        CupCap: '≍',
        DD: 'ⅅ',
        DDotrahd: '⤑',
        DJcy: 'Ђ',
        DScy: 'Ѕ',
        DZcy: 'Џ',
        Dagger: '‡',
        Darr: '↡',
        Dashv: '⫤',
        Dcaron: 'Ď',
        Dcy: 'Д',
        Del: '∇',
        Delta: 'Δ',
        Dfr: '𝔇',
        DiacriticalAcute: '´',
        DiacriticalDot: '˙',
        DiacriticalDoubleAcute: '˝',
        DiacriticalGrave: '`',
        DiacriticalTilde: '˜',
        Diamond: '⋄',
        DifferentialD: 'ⅆ',
        Dopf: '𝔻',
        Dot: '¨',
        DotDot: '⃜',
        DotEqual: '≐',
        DoubleContourIntegral: '∯',
        DoubleDot: '¨',
        DoubleDownArrow: '⇓',
        DoubleLeftArrow: '⇐',
        DoubleLeftRightArrow: '⇔',
        DoubleLeftTee: '⫤',
        DoubleLongLeftArrow: '⟸',
        DoubleLongLeftRightArrow: '⟺',
        DoubleLongRightArrow: '⟹',
        DoubleRightArrow: '⇒',
        DoubleRightTee: '⊨',
        DoubleUpArrow: '⇑',
        DoubleUpDownArrow: '⇕',
        DoubleVerticalBar: '∥',
        DownArrow: '↓',
        DownArrowBar: '⤓',
        DownArrowUpArrow: '⇵',
        DownBreve: '̑',
        DownLeftRightVector: '⥐',
        DownLeftTeeVector: '⥞',
        DownLeftVector: '↽',
        DownLeftVectorBar: '⥖',
        DownRightTeeVector: '⥟',
        DownRightVector: '⇁',
        DownRightVectorBar: '⥗',
        DownTee: '⊤',
        DownTeeArrow: '↧',
        Downarrow: '⇓',
        Dscr: '𝒟',
        Dstrok: 'Đ',
        ENG: 'Ŋ',
        ET: 'Ð',
        ETH: 'Ð',
        Eacut: 'É',
        Eacute: 'É',
        Ecaron: 'Ě',
        Ecir: 'Ê',
        Ecirc: 'Ê',
        Ecy: 'Э',
        Edot: 'Ė',
        Efr: '𝔈',
        Egrav: 'È',
        Egrave: 'È',
        Element: '∈',
        Emacr: 'Ē',
        EmptySmallSquare: '◻',
        EmptyVerySmallSquare: '▫',
        Eogon: 'Ę',
        Eopf: '𝔼',
        Epsilon: 'Ε',
        Equal: '⩵',
        EqualTilde: '≂',
        Equilibrium: '⇌',
        Escr: 'ℰ',
        Esim: '⩳',
        Eta: 'Η',
        Eum: 'Ë',
        Euml: 'Ë',
        Exists: '∃',
        ExponentialE: 'ⅇ',
        Fcy: 'Ф',
        Ffr: '𝔉',
        FilledSmallSquare: '◼',
        FilledVerySmallSquare: '▪',
        Fopf: '𝔽',
        ForAll: '∀',
        Fouriertrf: 'ℱ',
        Fscr: 'ℱ',
        GJcy: 'Ѓ',
        G: '>',
        GT: '>',
        Gamma: 'Γ',
        Gammad: 'Ϝ',
        Gbreve: 'Ğ',
        Gcedil: 'Ģ',
        Gcirc: 'Ĝ',
        Gcy: 'Г',
        Gdot: 'Ġ',
        Gfr: '𝔊',
        Gg: '⋙',
        Gopf: '𝔾',
        GreaterEqual: '≥',
        GreaterEqualLess: '⋛',
        GreaterFullEqual: '≧',
        GreaterGreater: '⪢',
        GreaterLess: '≷',
        GreaterSlantEqual: '⩾',
        GreaterTilde: '≳',
        Gscr: '𝒢',
        Gt: '≫',
        HARDcy: 'Ъ',
        Hacek: 'ˇ',
        Hat: '^',
        Hcirc: 'Ĥ',
        Hfr: 'ℌ',
        HilbertSpace: 'ℋ',
        Hopf: 'ℍ',
        HorizontalLine: '─',
        Hscr: 'ℋ',
        Hstrok: 'Ħ',
        HumpDownHump: '≎',
        HumpEqual: '≏',
        IEcy: 'Е',
        IJlig: 'Ĳ',
        IOcy: 'Ё',
        Iacut: 'Í',
        Iacute: 'Í',
        Icir: 'Î',
        Icirc: 'Î',
        Icy: 'И',
        Idot: 'İ',
        Ifr: 'ℑ',
        Igrav: 'Ì',
        Igrave: 'Ì',
        Im: 'ℑ',
        Imacr: 'Ī',
        ImaginaryI: 'ⅈ',
        Implies: '⇒',
        Int: '∬',
        Integral: '∫',
        Intersection: '⋂',
        InvisibleComma: '⁣',
        InvisibleTimes: '⁢',
        Iogon: 'Į',
        Iopf: '𝕀',
        Iota: 'Ι',
        Iscr: 'ℐ',
        Itilde: 'Ĩ',
        Iukcy: 'І',
        Ium: 'Ï',
        Iuml: 'Ï',
        Jcirc: 'Ĵ',
        Jcy: 'Й',
        Jfr: '𝔍',
        Jopf: '𝕁',
        Jscr: '𝒥',
        Jsercy: 'Ј',
        Jukcy: 'Є',
        KHcy: 'Х',
        KJcy: 'Ќ',
        Kappa: 'Κ',
        Kcedil: 'Ķ',
        Kcy: 'К',
        Kfr: '𝔎',
        Kopf: '𝕂',
        Kscr: '𝒦',
        LJcy: 'Љ',
        L: '<',
        LT: '<',
        Lacute: 'Ĺ',
        Lambda: 'Λ',
        Lang: '⟪',
        Laplacetrf: 'ℒ',
        Larr: '↞',
        Lcaron: 'Ľ',
        Lcedil: 'Ļ',
        Lcy: 'Л',
        LeftAngleBracket: '⟨',
        LeftArrow: '←',
        LeftArrowBar: '⇤',
        LeftArrowRightArrow: '⇆',
        LeftCeiling: '⌈',
        LeftDoubleBracket: '⟦',
        LeftDownTeeVector: '⥡',
        LeftDownVector: '⇃',
        LeftDownVectorBar: '⥙',
        LeftFloor: '⌊',
        LeftRightArrow: '↔',
        LeftRightVector: '⥎',
        LeftTee: '⊣',
        LeftTeeArrow: '↤',
        LeftTeeVector: '⥚',
        LeftTriangle: '⊲',
        LeftTriangleBar: '⧏',
        LeftTriangleEqual: '⊴',
        LeftUpDownVector: '⥑',
        LeftUpTeeVector: '⥠',
        LeftUpVector: '↿',
        LeftUpVectorBar: '⥘',
        LeftVector: '↼',
        LeftVectorBar: '⥒',
        Leftarrow: '⇐',
        Leftrightarrow: '⇔',
        LessEqualGreater: '⋚',
        LessFullEqual: '≦',
        LessGreater: '≶',
        LessLess: '⪡',
        LessSlantEqual: '⩽',
        LessTilde: '≲',
        Lfr: '𝔏',
        Ll: '⋘',
        Lleftarrow: '⇚',
        Lmidot: 'Ŀ',
        LongLeftArrow: '⟵',
        LongLeftRightArrow: '⟷',
        LongRightArrow: '⟶',
        Longleftarrow: '⟸',
        Longleftrightarrow: '⟺',
        Longrightarrow: '⟹',
        Lopf: '𝕃',
        LowerLeftArrow: '↙',
        LowerRightArrow: '↘',
        Lscr: 'ℒ',
        Lsh: '↰',
        Lstrok: 'Ł',
        Lt: '≪',
        Map: '⤅',
        Mcy: 'М',
        MediumSpace: ' ',
        Mellintrf: 'ℳ',
        Mfr: '𝔐',
        MinusPlus: '∓',
        Mopf: '𝕄',
        Mscr: 'ℳ',
        Mu: 'Μ',
        NJcy: 'Њ',
        Nacute: 'Ń',
        Ncaron: 'Ň',
        Ncedil: 'Ņ',
        Ncy: 'Н',
        NegativeMediumSpace: '​',
        NegativeThickSpace: '​',
        NegativeThinSpace: '​',
        NegativeVeryThinSpace: '​',
        NestedGreaterGreater: '≫',
        NestedLessLess: '≪',
        NewLine: `
`,
        Nfr: '𝔑',
        NoBreak: '⁠',
        NonBreakingSpace: ' ',
        Nopf: 'ℕ',
        Not: '⫬',
        NotCongruent: '≢',
        NotCupCap: '≭',
        NotDoubleVerticalBar: '∦',
        NotElement: '∉',
        NotEqual: '≠',
        NotEqualTilde: '≂̸',
        NotExists: '∄',
        NotGreater: '≯',
        NotGreaterEqual: '≱',
        NotGreaterFullEqual: '≧̸',
        NotGreaterGreater: '≫̸',
        NotGreaterLess: '≹',
        NotGreaterSlantEqual: '⩾̸',
        NotGreaterTilde: '≵',
        NotHumpDownHump: '≎̸',
        NotHumpEqual: '≏̸',
        NotLeftTriangle: '⋪',
        NotLeftTriangleBar: '⧏̸',
        NotLeftTriangleEqual: '⋬',
        NotLess: '≮',
        NotLessEqual: '≰',
        NotLessGreater: '≸',
        NotLessLess: '≪̸',
        NotLessSlantEqual: '⩽̸',
        NotLessTilde: '≴',
        NotNestedGreaterGreater: '⪢̸',
        NotNestedLessLess: '⪡̸',
        NotPrecedes: '⊀',
        NotPrecedesEqual: '⪯̸',
        NotPrecedesSlantEqual: '⋠',
        NotReverseElement: '∌',
        NotRightTriangle: '⋫',
        NotRightTriangleBar: '⧐̸',
        NotRightTriangleEqual: '⋭',
        NotSquareSubset: '⊏̸',
        NotSquareSubsetEqual: '⋢',
        NotSquareSuperset: '⊐̸',
        NotSquareSupersetEqual: '⋣',
        NotSubset: '⊂⃒',
        NotSubsetEqual: '⊈',
        NotSucceeds: '⊁',
        NotSucceedsEqual: '⪰̸',
        NotSucceedsSlantEqual: '⋡',
        NotSucceedsTilde: '≿̸',
        NotSuperset: '⊃⃒',
        NotSupersetEqual: '⊉',
        NotTilde: '≁',
        NotTildeEqual: '≄',
        NotTildeFullEqual: '≇',
        NotTildeTilde: '≉',
        NotVerticalBar: '∤',
        Nscr: '𝒩',
        Ntild: 'Ñ',
        Ntilde: 'Ñ',
        Nu: 'Ν',
        OElig: 'Œ',
        Oacut: 'Ó',
        Oacute: 'Ó',
        Ocir: 'Ô',
        Ocirc: 'Ô',
        Ocy: 'О',
        Odblac: 'Ő',
        Ofr: '𝔒',
        Ograv: 'Ò',
        Ograve: 'Ò',
        Omacr: 'Ō',
        Omega: 'Ω',
        Omicron: 'Ο',
        Oopf: '𝕆',
        OpenCurlyDoubleQuote: '“',
        OpenCurlyQuote: '‘',
        Or: '⩔',
        Oscr: '𝒪',
        Oslas: 'Ø',
        Oslash: 'Ø',
        Otild: 'Õ',
        Otilde: 'Õ',
        Otimes: '⨷',
        Oum: 'Ö',
        Ouml: 'Ö',
        OverBar: '‾',
        OverBrace: '⏞',
        OverBracket: '⎴',
        OverParenthesis: '⏜',
        PartialD: '∂',
        Pcy: 'П',
        Pfr: '𝔓',
        Phi: 'Φ',
        Pi: 'Π',
        PlusMinus: '±',
        Poincareplane: 'ℌ',
        Popf: 'ℙ',
        Pr: '⪻',
        Precedes: '≺',
        PrecedesEqual: '⪯',
        PrecedesSlantEqual: '≼',
        PrecedesTilde: '≾',
        Prime: '″',
        Product: '∏',
        Proportion: '∷',
        Proportional: '∝',
        Pscr: '𝒫',
        Psi: 'Ψ',
        QUO: '"',
        QUOT: '"',
        Qfr: '𝔔',
        Qopf: 'ℚ',
        Qscr: '𝒬',
        RBarr: '⤐',
        RE: '®',
        REG: '®',
        Racute: 'Ŕ',
        Rang: '⟫',
        Rarr: '↠',
        Rarrtl: '⤖',
        Rcaron: 'Ř',
        Rcedil: 'Ŗ',
        Rcy: 'Р',
        Re: 'ℜ',
        ReverseElement: '∋',
        ReverseEquilibrium: '⇋',
        ReverseUpEquilibrium: '⥯',
        Rfr: 'ℜ',
        Rho: 'Ρ',
        RightAngleBracket: '⟩',
        RightArrow: '→',
        RightArrowBar: '⇥',
        RightArrowLeftArrow: '⇄',
        RightCeiling: '⌉',
        RightDoubleBracket: '⟧',
        RightDownTeeVector: '⥝',
        RightDownVector: '⇂',
        RightDownVectorBar: '⥕',
        RightFloor: '⌋',
        RightTee: '⊢',
        RightTeeArrow: '↦',
        RightTeeVector: '⥛',
        RightTriangle: '⊳',
        RightTriangleBar: '⧐',
        RightTriangleEqual: '⊵',
        RightUpDownVector: '⥏',
        RightUpTeeVector: '⥜',
        RightUpVector: '↾',
        RightUpVectorBar: '⥔',
        RightVector: '⇀',
        RightVectorBar: '⥓',
        Rightarrow: '⇒',
        Ropf: 'ℝ',
        RoundImplies: '⥰',
        Rrightarrow: '⇛',
        Rscr: 'ℛ',
        Rsh: '↱',
        RuleDelayed: '⧴',
        SHCHcy: 'Щ',
        SHcy: 'Ш',
        SOFTcy: 'Ь',
        Sacute: 'Ś',
        Sc: '⪼',
        Scaron: 'Š',
        Scedil: 'Ş',
        Scirc: 'Ŝ',
        Scy: 'С',
        Sfr: '𝔖',
        ShortDownArrow: '↓',
        ShortLeftArrow: '←',
        ShortRightArrow: '→',
        ShortUpArrow: '↑',
        Sigma: 'Σ',
        SmallCircle: '∘',
        Sopf: '𝕊',
        Sqrt: '√',
        Square: '□',
        SquareIntersection: '⊓',
        SquareSubset: '⊏',
        SquareSubsetEqual: '⊑',
        SquareSuperset: '⊐',
        SquareSupersetEqual: '⊒',
        SquareUnion: '⊔',
        Sscr: '𝒮',
        Star: '⋆',
        Sub: '⋐',
        Subset: '⋐',
        SubsetEqual: '⊆',
        Succeeds: '≻',
        SucceedsEqual: '⪰',
        SucceedsSlantEqual: '≽',
        SucceedsTilde: '≿',
        SuchThat: '∋',
        Sum: '∑',
        Sup: '⋑',
        Superset: '⊃',
        SupersetEqual: '⊇',
        Supset: '⋑',
        THOR: 'Þ',
        THORN: 'Þ',
        TRADE: '™',
        TSHcy: 'Ћ',
        TScy: 'Ц',
        Tab: '	',
        Tau: 'Τ',
        Tcaron: 'Ť',
        Tcedil: 'Ţ',
        Tcy: 'Т',
        Tfr: '𝔗',
        Therefore: '∴',
        Theta: 'Θ',
        ThickSpace: '  ',
        ThinSpace: ' ',
        Tilde: '∼',
        TildeEqual: '≃',
        TildeFullEqual: '≅',
        TildeTilde: '≈',
        Topf: '𝕋',
        TripleDot: '⃛',
        Tscr: '𝒯',
        Tstrok: 'Ŧ',
        Uacut: 'Ú',
        Uacute: 'Ú',
        Uarr: '↟',
        Uarrocir: '⥉',
        Ubrcy: 'Ў',
        Ubreve: 'Ŭ',
        Ucir: 'Û',
        Ucirc: 'Û',
        Ucy: 'У',
        Udblac: 'Ű',
        Ufr: '𝔘',
        Ugrav: 'Ù',
        Ugrave: 'Ù',
        Umacr: 'Ū',
        UnderBar: '_',
        UnderBrace: '⏟',
        UnderBracket: '⎵',
        UnderParenthesis: '⏝',
        Union: '⋃',
        UnionPlus: '⊎',
        Uogon: 'Ų',
        Uopf: '𝕌',
        UpArrow: '↑',
        UpArrowBar: '⤒',
        UpArrowDownArrow: '⇅',
        UpDownArrow: '↕',
        UpEquilibrium: '⥮',
        UpTee: '⊥',
        UpTeeArrow: '↥',
        Uparrow: '⇑',
        Updownarrow: '⇕',
        UpperLeftArrow: '↖',
        UpperRightArrow: '↗',
        Upsi: 'ϒ',
        Upsilon: 'Υ',
        Uring: 'Ů',
        Uscr: '𝒰',
        Utilde: 'Ũ',
        Uum: 'Ü',
        Uuml: 'Ü',
        VDash: '⊫',
        Vbar: '⫫',
        Vcy: 'В',
        Vdash: '⊩',
        Vdashl: '⫦',
        Vee: '⋁',
        Verbar: '‖',
        Vert: '‖',
        VerticalBar: '∣',
        VerticalLine: '|',
        VerticalSeparator: '❘',
        VerticalTilde: '≀',
        VeryThinSpace: ' ',
        Vfr: '𝔙',
        Vopf: '𝕍',
        Vscr: '𝒱',
        Vvdash: '⊪',
        Wcirc: 'Ŵ',
        Wedge: '⋀',
        Wfr: '𝔚',
        Wopf: '𝕎',
        Wscr: '𝒲',
        Xfr: '𝔛',
        Xi: 'Ξ',
        Xopf: '𝕏',
        Xscr: '𝒳',
        YAcy: 'Я',
        YIcy: 'Ї',
        YUcy: 'Ю',
        Yacut: 'Ý',
        Yacute: 'Ý',
        Ycirc: 'Ŷ',
        Ycy: 'Ы',
        Yfr: '𝔜',
        Yopf: '𝕐',
        Yscr: '𝒴',
        Yuml: 'Ÿ',
        ZHcy: 'Ж',
        Zacute: 'Ź',
        Zcaron: 'Ž',
        Zcy: 'З',
        Zdot: 'Ż',
        ZeroWidthSpace: '​',
        Zeta: 'Ζ',
        Zfr: 'ℨ',
        Zopf: 'ℤ',
        Zscr: '𝒵',
        aacut: 'á',
        aacute: 'á',
        abreve: 'ă',
        ac: '∾',
        acE: '∾̳',
        acd: '∿',
        acir: 'â',
        acirc: 'â',
        acut: '´',
        acute: '´',
        acy: 'а',
        aeli: 'æ',
        aelig: 'æ',
        af: '⁡',
        afr: '𝔞',
        agrav: 'à',
        agrave: 'à',
        alefsym: 'ℵ',
        aleph: 'ℵ',
        alpha: 'α',
        amacr: 'ā',
        amalg: '⨿',
        am: '&',
        amp: '&',
        and: '∧',
        andand: '⩕',
        andd: '⩜',
        andslope: '⩘',
        andv: '⩚',
        ang: '∠',
        ange: '⦤',
        angle: '∠',
        angmsd: '∡',
        angmsdaa: '⦨',
        angmsdab: '⦩',
        angmsdac: '⦪',
        angmsdad: '⦫',
        angmsdae: '⦬',
        angmsdaf: '⦭',
        angmsdag: '⦮',
        angmsdah: '⦯',
        angrt: '∟',
        angrtvb: '⊾',
        angrtvbd: '⦝',
        angsph: '∢',
        angst: 'Å',
        angzarr: '⍼',
        aogon: 'ą',
        aopf: '𝕒',
        ap: '≈',
        apE: '⩰',
        apacir: '⩯',
        ape: '≊',
        apid: '≋',
        apos: "'",
        approx: '≈',
        approxeq: '≊',
        arin: 'å',
        aring: 'å',
        ascr: '𝒶',
        ast: '*',
        asymp: '≈',
        asympeq: '≍',
        atild: 'ã',
        atilde: 'ã',
        aum: 'ä',
        auml: 'ä',
        awconint: '∳',
        awint: '⨑',
        bNot: '⫭',
        backcong: '≌',
        backepsilon: '϶',
        backprime: '‵',
        backsim: '∽',
        backsimeq: '⋍',
        barvee: '⊽',
        barwed: '⌅',
        barwedge: '⌅',
        bbrk: '⎵',
        bbrktbrk: '⎶',
        bcong: '≌',
        bcy: 'б',
        bdquo: '„',
        becaus: '∵',
        because: '∵',
        bemptyv: '⦰',
        bepsi: '϶',
        bernou: 'ℬ',
        beta: 'β',
        beth: 'ℶ',
        between: '≬',
        bfr: '𝔟',
        bigcap: '⋂',
        bigcirc: '◯',
        bigcup: '⋃',
        bigodot: '⨀',
        bigoplus: '⨁',
        bigotimes: '⨂',
        bigsqcup: '⨆',
        bigstar: '★',
        bigtriangledown: '▽',
        bigtriangleup: '△',
        biguplus: '⨄',
        bigvee: '⋁',
        bigwedge: '⋀',
        bkarow: '⤍',
        blacklozenge: '⧫',
        blacksquare: '▪',
        blacktriangle: '▴',
        blacktriangledown: '▾',
        blacktriangleleft: '◂',
        blacktriangleright: '▸',
        blank: '␣',
        blk12: '▒',
        blk14: '░',
        blk34: '▓',
        block: '█',
        bne: '=⃥',
        bnequiv: '≡⃥',
        bnot: '⌐',
        bopf: '𝕓',
        bot: '⊥',
        bottom: '⊥',
        bowtie: '⋈',
        boxDL: '╗',
        boxDR: '╔',
        boxDl: '╖',
        boxDr: '╓',
        boxH: '═',
        boxHD: '╦',
        boxHU: '╩',
        boxHd: '╤',
        boxHu: '╧',
        boxUL: '╝',
        boxUR: '╚',
        boxUl: '╜',
        boxUr: '╙',
        boxV: '║',
        boxVH: '╬',
        boxVL: '╣',
        boxVR: '╠',
        boxVh: '╫',
        boxVl: '╢',
        boxVr: '╟',
        boxbox: '⧉',
        boxdL: '╕',
        boxdR: '╒',
        boxdl: '┐',
        boxdr: '┌',
        boxh: '─',
        boxhD: '╥',
        boxhU: '╨',
        boxhd: '┬',
        boxhu: '┴',
        boxminus: '⊟',
        boxplus: '⊞',
        boxtimes: '⊠',
        boxuL: '╛',
        boxuR: '╘',
        boxul: '┘',
        boxur: '└',
        boxv: '│',
        boxvH: '╪',
        boxvL: '╡',
        boxvR: '╞',
        boxvh: '┼',
        boxvl: '┤',
        boxvr: '├',
        bprime: '‵',
        breve: '˘',
        brvba: '¦',
        brvbar: '¦',
        bscr: '𝒷',
        bsemi: '⁏',
        bsim: '∽',
        bsime: '⋍',
        bsol: '\\',
        bsolb: '⧅',
        bsolhsub: '⟈',
        bull: '•',
        bullet: '•',
        bump: '≎',
        bumpE: '⪮',
        bumpe: '≏',
        bumpeq: '≏',
        cacute: 'ć',
        cap: '∩',
        capand: '⩄',
        capbrcup: '⩉',
        capcap: '⩋',
        capcup: '⩇',
        capdot: '⩀',
        caps: '∩︀',
        caret: '⁁',
        caron: 'ˇ',
        ccaps: '⩍',
        ccaron: 'č',
        ccedi: 'ç',
        ccedil: 'ç',
        ccirc: 'ĉ',
        ccups: '⩌',
        ccupssm: '⩐',
        cdot: 'ċ',
        cedi: '¸',
        cedil: '¸',
        cemptyv: '⦲',
        cen: '¢',
        cent: '¢',
        centerdot: '·',
        cfr: '𝔠',
        chcy: 'ч',
        check: '✓',
        checkmark: '✓',
        chi: 'χ',
        cir: '○',
        cirE: '⧃',
        circ: 'ˆ',
        circeq: '≗',
        circlearrowleft: '↺',
        circlearrowright: '↻',
        circledR: '®',
        circledS: 'Ⓢ',
        circledast: '⊛',
        circledcirc: '⊚',
        circleddash: '⊝',
        cire: '≗',
        cirfnint: '⨐',
        cirmid: '⫯',
        cirscir: '⧂',
        clubs: '♣',
        clubsuit: '♣',
        colon: ':',
        colone: '≔',
        coloneq: '≔',
        comma: ',',
        commat: '@',
        comp: '∁',
        compfn: '∘',
        complement: '∁',
        complexes: 'ℂ',
        cong: '≅',
        congdot: '⩭',
        conint: '∮',
        copf: '𝕔',
        coprod: '∐',
        cop: '©',
        copy: '©',
        copysr: '℗',
        crarr: '↵',
        cross: '✗',
        cscr: '𝒸',
        csub: '⫏',
        csube: '⫑',
        csup: '⫐',
        csupe: '⫒',
        ctdot: '⋯',
        cudarrl: '⤸',
        cudarrr: '⤵',
        cuepr: '⋞',
        cuesc: '⋟',
        cularr: '↶',
        cularrp: '⤽',
        cup: '∪',
        cupbrcap: '⩈',
        cupcap: '⩆',
        cupcup: '⩊',
        cupdot: '⊍',
        cupor: '⩅',
        cups: '∪︀',
        curarr: '↷',
        curarrm: '⤼',
        curlyeqprec: '⋞',
        curlyeqsucc: '⋟',
        curlyvee: '⋎',
        curlywedge: '⋏',
        curre: '¤',
        curren: '¤',
        curvearrowleft: '↶',
        curvearrowright: '↷',
        cuvee: '⋎',
        cuwed: '⋏',
        cwconint: '∲',
        cwint: '∱',
        cylcty: '⌭',
        dArr: '⇓',
        dHar: '⥥',
        dagger: '†',
        daleth: 'ℸ',
        darr: '↓',
        dash: '‐',
        dashv: '⊣',
        dbkarow: '⤏',
        dblac: '˝',
        dcaron: 'ď',
        dcy: 'д',
        dd: 'ⅆ',
        ddagger: '‡',
        ddarr: '⇊',
        ddotseq: '⩷',
        de: '°',
        deg: '°',
        delta: 'δ',
        demptyv: '⦱',
        dfisht: '⥿',
        dfr: '𝔡',
        dharl: '⇃',
        dharr: '⇂',
        diam: '⋄',
        diamond: '⋄',
        diamondsuit: '♦',
        diams: '♦',
        die: '¨',
        digamma: 'ϝ',
        disin: '⋲',
        div: '÷',
        divid: '÷',
        divide: '÷',
        divideontimes: '⋇',
        divonx: '⋇',
        djcy: 'ђ',
        dlcorn: '⌞',
        dlcrop: '⌍',
        dollar: '$',
        dopf: '𝕕',
        dot: '˙',
        doteq: '≐',
        doteqdot: '≑',
        dotminus: '∸',
        dotplus: '∔',
        dotsquare: '⊡',
        doublebarwedge: '⌆',
        downarrow: '↓',
        downdownarrows: '⇊',
        downharpoonleft: '⇃',
        downharpoonright: '⇂',
        drbkarow: '⤐',
        drcorn: '⌟',
        drcrop: '⌌',
        dscr: '𝒹',
        dscy: 'ѕ',
        dsol: '⧶',
        dstrok: 'đ',
        dtdot: '⋱',
        dtri: '▿',
        dtrif: '▾',
        duarr: '⇵',
        duhar: '⥯',
        dwangle: '⦦',
        dzcy: 'џ',
        dzigrarr: '⟿',
        eDDot: '⩷',
        eDot: '≑',
        eacut: 'é',
        eacute: 'é',
        easter: '⩮',
        ecaron: 'ě',
        ecir: 'ê',
        ecirc: 'ê',
        ecolon: '≕',
        ecy: 'э',
        edot: 'ė',
        ee: 'ⅇ',
        efDot: '≒',
        efr: '𝔢',
        eg: '⪚',
        egrav: 'è',
        egrave: 'è',
        egs: '⪖',
        egsdot: '⪘',
        el: '⪙',
        elinters: '⏧',
        ell: 'ℓ',
        els: '⪕',
        elsdot: '⪗',
        emacr: 'ē',
        empty: '∅',
        emptyset: '∅',
        emptyv: '∅',
        emsp13: ' ',
        emsp14: ' ',
        emsp: ' ',
        eng: 'ŋ',
        ensp: ' ',
        eogon: 'ę',
        eopf: '𝕖',
        epar: '⋕',
        eparsl: '⧣',
        eplus: '⩱',
        epsi: 'ε',
        epsilon: 'ε',
        epsiv: 'ϵ',
        eqcirc: '≖',
        eqcolon: '≕',
        eqsim: '≂',
        eqslantgtr: '⪖',
        eqslantless: '⪕',
        equals: '=',
        equest: '≟',
        equiv: '≡',
        equivDD: '⩸',
        eqvparsl: '⧥',
        erDot: '≓',
        erarr: '⥱',
        escr: 'ℯ',
        esdot: '≐',
        esim: '≂',
        eta: 'η',
        et: 'ð',
        eth: 'ð',
        eum: 'ë',
        euml: 'ë',
        euro: '€',
        excl: '!',
        exist: '∃',
        expectation: 'ℰ',
        exponentiale: 'ⅇ',
        fallingdotseq: '≒',
        fcy: 'ф',
        female: '♀',
        ffilig: 'ﬃ',
        fflig: 'ﬀ',
        ffllig: 'ﬄ',
        ffr: '𝔣',
        filig: 'ﬁ',
        fjlig: 'fj',
        flat: '♭',
        fllig: 'ﬂ',
        fltns: '▱',
        fnof: 'ƒ',
        fopf: '𝕗',
        forall: '∀',
        fork: '⋔',
        forkv: '⫙',
        fpartint: '⨍',
        frac1: '¼',
        frac12: '½',
        frac13: '⅓',
        frac14: '¼',
        frac15: '⅕',
        frac16: '⅙',
        frac18: '⅛',
        frac23: '⅔',
        frac25: '⅖',
        frac3: '¾',
        frac34: '¾',
        frac35: '⅗',
        frac38: '⅜',
        frac45: '⅘',
        frac56: '⅚',
        frac58: '⅝',
        frac78: '⅞',
        frasl: '⁄',
        frown: '⌢',
        fscr: '𝒻',
        gE: '≧',
        gEl: '⪌',
        gacute: 'ǵ',
        gamma: 'γ',
        gammad: 'ϝ',
        gap: '⪆',
        gbreve: 'ğ',
        gcirc: 'ĝ',
        gcy: 'г',
        gdot: 'ġ',
        ge: '≥',
        gel: '⋛',
        geq: '≥',
        geqq: '≧',
        geqslant: '⩾',
        ges: '⩾',
        gescc: '⪩',
        gesdot: '⪀',
        gesdoto: '⪂',
        gesdotol: '⪄',
        gesl: '⋛︀',
        gesles: '⪔',
        gfr: '𝔤',
        gg: '≫',
        ggg: '⋙',
        gimel: 'ℷ',
        gjcy: 'ѓ',
        gl: '≷',
        glE: '⪒',
        gla: '⪥',
        glj: '⪤',
        gnE: '≩',
        gnap: '⪊',
        gnapprox: '⪊',
        gne: '⪈',
        gneq: '⪈',
        gneqq: '≩',
        gnsim: '⋧',
        gopf: '𝕘',
        grave: '`',
        gscr: 'ℊ',
        gsim: '≳',
        gsime: '⪎',
        gsiml: '⪐',
        g: '>',
        gt: '>',
        gtcc: '⪧',
        gtcir: '⩺',
        gtdot: '⋗',
        gtlPar: '⦕',
        gtquest: '⩼',
        gtrapprox: '⪆',
        gtrarr: '⥸',
        gtrdot: '⋗',
        gtreqless: '⋛',
        gtreqqless: '⪌',
        gtrless: '≷',
        gtrsim: '≳',
        gvertneqq: '≩︀',
        gvnE: '≩︀',
        hArr: '⇔',
        hairsp: ' ',
        half: '½',
        hamilt: 'ℋ',
        hardcy: 'ъ',
        harr: '↔',
        harrcir: '⥈',
        harrw: '↭',
        hbar: 'ℏ',
        hcirc: 'ĥ',
        hearts: '♥',
        heartsuit: '♥',
        hellip: '…',
        hercon: '⊹',
        hfr: '𝔥',
        hksearow: '⤥',
        hkswarow: '⤦',
        hoarr: '⇿',
        homtht: '∻',
        hookleftarrow: '↩',
        hookrightarrow: '↪',
        hopf: '𝕙',
        horbar: '―',
        hscr: '𝒽',
        hslash: 'ℏ',
        hstrok: 'ħ',
        hybull: '⁃',
        hyphen: '‐',
        iacut: 'í',
        iacute: 'í',
        ic: '⁣',
        icir: 'î',
        icirc: 'î',
        icy: 'и',
        iecy: 'е',
        iexc: '¡',
        iexcl: '¡',
        iff: '⇔',
        ifr: '𝔦',
        igrav: 'ì',
        igrave: 'ì',
        ii: 'ⅈ',
        iiiint: '⨌',
        iiint: '∭',
        iinfin: '⧜',
        iiota: '℩',
        ijlig: 'ĳ',
        imacr: 'ī',
        image: 'ℑ',
        imagline: 'ℐ',
        imagpart: 'ℑ',
        imath: 'ı',
        imof: '⊷',
        imped: 'Ƶ',
        in: '∈',
        incare: '℅',
        infin: '∞',
        infintie: '⧝',
        inodot: 'ı',
        int: '∫',
        intcal: '⊺',
        integers: 'ℤ',
        intercal: '⊺',
        intlarhk: '⨗',
        intprod: '⨼',
        iocy: 'ё',
        iogon: 'į',
        iopf: '𝕚',
        iota: 'ι',
        iprod: '⨼',
        iques: '¿',
        iquest: '¿',
        iscr: '𝒾',
        isin: '∈',
        isinE: '⋹',
        isindot: '⋵',
        isins: '⋴',
        isinsv: '⋳',
        isinv: '∈',
        it: '⁢',
        itilde: 'ĩ',
        iukcy: 'і',
        ium: 'ï',
        iuml: 'ï',
        jcirc: 'ĵ',
        jcy: 'й',
        jfr: '𝔧',
        jmath: 'ȷ',
        jopf: '𝕛',
        jscr: '𝒿',
        jsercy: 'ј',
        jukcy: 'є',
        kappa: 'κ',
        kappav: 'ϰ',
        kcedil: 'ķ',
        kcy: 'к',
        kfr: '𝔨',
        kgreen: 'ĸ',
        khcy: 'х',
        kjcy: 'ќ',
        kopf: '𝕜',
        kscr: '𝓀',
        lAarr: '⇚',
        lArr: '⇐',
        lAtail: '⤛',
        lBarr: '⤎',
        lE: '≦',
        lEg: '⪋',
        lHar: '⥢',
        lacute: 'ĺ',
        laemptyv: '⦴',
        lagran: 'ℒ',
        lambda: 'λ',
        lang: '⟨',
        langd: '⦑',
        langle: '⟨',
        lap: '⪅',
        laqu: '«',
        laquo: '«',
        larr: '←',
        larrb: '⇤',
        larrbfs: '⤟',
        larrfs: '⤝',
        larrhk: '↩',
        larrlp: '↫',
        larrpl: '⤹',
        larrsim: '⥳',
        larrtl: '↢',
        lat: '⪫',
        latail: '⤙',
        late: '⪭',
        lates: '⪭︀',
        lbarr: '⤌',
        lbbrk: '❲',
        lbrace: '{',
        lbrack: '[',
        lbrke: '⦋',
        lbrksld: '⦏',
        lbrkslu: '⦍',
        lcaron: 'ľ',
        lcedil: 'ļ',
        lceil: '⌈',
        lcub: '{',
        lcy: 'л',
        ldca: '⤶',
        ldquo: '“',
        ldquor: '„',
        ldrdhar: '⥧',
        ldrushar: '⥋',
        ldsh: '↲',
        le: '≤',
        leftarrow: '←',
        leftarrowtail: '↢',
        leftharpoondown: '↽',
        leftharpoonup: '↼',
        leftleftarrows: '⇇',
        leftrightarrow: '↔',
        leftrightarrows: '⇆',
        leftrightharpoons: '⇋',
        leftrightsquigarrow: '↭',
        leftthreetimes: '⋋',
        leg: '⋚',
        leq: '≤',
        leqq: '≦',
        leqslant: '⩽',
        les: '⩽',
        lescc: '⪨',
        lesdot: '⩿',
        lesdoto: '⪁',
        lesdotor: '⪃',
        lesg: '⋚︀',
        lesges: '⪓',
        lessapprox: '⪅',
        lessdot: '⋖',
        lesseqgtr: '⋚',
        lesseqqgtr: '⪋',
        lessgtr: '≶',
        lesssim: '≲',
        lfisht: '⥼',
        lfloor: '⌊',
        lfr: '𝔩',
        lg: '≶',
        lgE: '⪑',
        lhard: '↽',
        lharu: '↼',
        lharul: '⥪',
        lhblk: '▄',
        ljcy: 'љ',
        ll: '≪',
        llarr: '⇇',
        llcorner: '⌞',
        llhard: '⥫',
        lltri: '◺',
        lmidot: 'ŀ',
        lmoust: '⎰',
        lmoustache: '⎰',
        lnE: '≨',
        lnap: '⪉',
        lnapprox: '⪉',
        lne: '⪇',
        lneq: '⪇',
        lneqq: '≨',
        lnsim: '⋦',
        loang: '⟬',
        loarr: '⇽',
        lobrk: '⟦',
        longleftarrow: '⟵',
        longleftrightarrow: '⟷',
        longmapsto: '⟼',
        longrightarrow: '⟶',
        looparrowleft: '↫',
        looparrowright: '↬',
        lopar: '⦅',
        lopf: '𝕝',
        loplus: '⨭',
        lotimes: '⨴',
        lowast: '∗',
        lowbar: '_',
        loz: '◊',
        lozenge: '◊',
        lozf: '⧫',
        lpar: '(',
        lparlt: '⦓',
        lrarr: '⇆',
        lrcorner: '⌟',
        lrhar: '⇋',
        lrhard: '⥭',
        lrm: '‎',
        lrtri: '⊿',
        lsaquo: '‹',
        lscr: '𝓁',
        lsh: '↰',
        lsim: '≲',
        lsime: '⪍',
        lsimg: '⪏',
        lsqb: '[',
        lsquo: '‘',
        lsquor: '‚',
        lstrok: 'ł',
        l: '<',
        lt: '<',
        ltcc: '⪦',
        ltcir: '⩹',
        ltdot: '⋖',
        lthree: '⋋',
        ltimes: '⋉',
        ltlarr: '⥶',
        ltquest: '⩻',
        ltrPar: '⦖',
        ltri: '◃',
        ltrie: '⊴',
        ltrif: '◂',
        lurdshar: '⥊',
        luruhar: '⥦',
        lvertneqq: '≨︀',
        lvnE: '≨︀',
        mDDot: '∺',
        mac: '¯',
        macr: '¯',
        male: '♂',
        malt: '✠',
        maltese: '✠',
        map: '↦',
        mapsto: '↦',
        mapstodown: '↧',
        mapstoleft: '↤',
        mapstoup: '↥',
        marker: '▮',
        mcomma: '⨩',
        mcy: 'м',
        mdash: '—',
        measuredangle: '∡',
        mfr: '𝔪',
        mho: '℧',
        micr: 'µ',
        micro: 'µ',
        mid: '∣',
        midast: '*',
        midcir: '⫰',
        middo: '·',
        middot: '·',
        minus: '−',
        minusb: '⊟',
        minusd: '∸',
        minusdu: '⨪',
        mlcp: '⫛',
        mldr: '…',
        mnplus: '∓',
        models: '⊧',
        mopf: '𝕞',
        mp: '∓',
        mscr: '𝓂',
        mstpos: '∾',
        mu: 'μ',
        multimap: '⊸',
        mumap: '⊸',
        nGg: '⋙̸',
        nGt: '≫⃒',
        nGtv: '≫̸',
        nLeftarrow: '⇍',
        nLeftrightarrow: '⇎',
        nLl: '⋘̸',
        nLt: '≪⃒',
        nLtv: '≪̸',
        nRightarrow: '⇏',
        nVDash: '⊯',
        nVdash: '⊮',
        nabla: '∇',
        nacute: 'ń',
        nang: '∠⃒',
        nap: '≉',
        napE: '⩰̸',
        napid: '≋̸',
        napos: 'ŉ',
        napprox: '≉',
        natur: '♮',
        natural: '♮',
        naturals: 'ℕ',
        nbs: ' ',
        nbsp: ' ',
        nbump: '≎̸',
        nbumpe: '≏̸',
        ncap: '⩃',
        ncaron: 'ň',
        ncedil: 'ņ',
        ncong: '≇',
        ncongdot: '⩭̸',
        ncup: '⩂',
        ncy: 'н',
        ndash: '–',
        ne: '≠',
        neArr: '⇗',
        nearhk: '⤤',
        nearr: '↗',
        nearrow: '↗',
        nedot: '≐̸',
        nequiv: '≢',
        nesear: '⤨',
        nesim: '≂̸',
        nexist: '∄',
        nexists: '∄',
        nfr: '𝔫',
        ngE: '≧̸',
        nge: '≱',
        ngeq: '≱',
        ngeqq: '≧̸',
        ngeqslant: '⩾̸',
        nges: '⩾̸',
        ngsim: '≵',
        ngt: '≯',
        ngtr: '≯',
        nhArr: '⇎',
        nharr: '↮',
        nhpar: '⫲',
        ni: '∋',
        nis: '⋼',
        nisd: '⋺',
        niv: '∋',
        njcy: 'њ',
        nlArr: '⇍',
        nlE: '≦̸',
        nlarr: '↚',
        nldr: '‥',
        nle: '≰',
        nleftarrow: '↚',
        nleftrightarrow: '↮',
        nleq: '≰',
        nleqq: '≦̸',
        nleqslant: '⩽̸',
        nles: '⩽̸',
        nless: '≮',
        nlsim: '≴',
        nlt: '≮',
        nltri: '⋪',
        nltrie: '⋬',
        nmid: '∤',
        nopf: '𝕟',
        no: '¬',
        not: '¬',
        notin: '∉',
        notinE: '⋹̸',
        notindot: '⋵̸',
        notinva: '∉',
        notinvb: '⋷',
        notinvc: '⋶',
        notni: '∌',
        notniva: '∌',
        notnivb: '⋾',
        notnivc: '⋽',
        npar: '∦',
        nparallel: '∦',
        nparsl: '⫽⃥',
        npart: '∂̸',
        npolint: '⨔',
        npr: '⊀',
        nprcue: '⋠',
        npre: '⪯̸',
        nprec: '⊀',
        npreceq: '⪯̸',
        nrArr: '⇏',
        nrarr: '↛',
        nrarrc: '⤳̸',
        nrarrw: '↝̸',
        nrightarrow: '↛',
        nrtri: '⋫',
        nrtrie: '⋭',
        nsc: '⊁',
        nsccue: '⋡',
        nsce: '⪰̸',
        nscr: '𝓃',
        nshortmid: '∤',
        nshortparallel: '∦',
        nsim: '≁',
        nsime: '≄',
        nsimeq: '≄',
        nsmid: '∤',
        nspar: '∦',
        nsqsube: '⋢',
        nsqsupe: '⋣',
        nsub: '⊄',
        nsubE: '⫅̸',
        nsube: '⊈',
        nsubset: '⊂⃒',
        nsubseteq: '⊈',
        nsubseteqq: '⫅̸',
        nsucc: '⊁',
        nsucceq: '⪰̸',
        nsup: '⊅',
        nsupE: '⫆̸',
        nsupe: '⊉',
        nsupset: '⊃⃒',
        nsupseteq: '⊉',
        nsupseteqq: '⫆̸',
        ntgl: '≹',
        ntild: 'ñ',
        ntilde: 'ñ',
        ntlg: '≸',
        ntriangleleft: '⋪',
        ntrianglelefteq: '⋬',
        ntriangleright: '⋫',
        ntrianglerighteq: '⋭',
        nu: 'ν',
        num: '#',
        numero: '№',
        numsp: ' ',
        nvDash: '⊭',
        nvHarr: '⤄',
        nvap: '≍⃒',
        nvdash: '⊬',
        nvge: '≥⃒',
        nvgt: '>⃒',
        nvinfin: '⧞',
        nvlArr: '⤂',
        nvle: '≤⃒',
        nvlt: '<⃒',
        nvltrie: '⊴⃒',
        nvrArr: '⤃',
        nvrtrie: '⊵⃒',
        nvsim: '∼⃒',
        nwArr: '⇖',
        nwarhk: '⤣',
        nwarr: '↖',
        nwarrow: '↖',
        nwnear: '⤧',
        oS: 'Ⓢ',
        oacut: 'ó',
        oacute: 'ó',
        oast: '⊛',
        ocir: 'ô',
        ocirc: 'ô',
        ocy: 'о',
        odash: '⊝',
        odblac: 'ő',
        odiv: '⨸',
        odot: '⊙',
        odsold: '⦼',
        oelig: 'œ',
        ofcir: '⦿',
        ofr: '𝔬',
        ogon: '˛',
        ograv: 'ò',
        ograve: 'ò',
        ogt: '⧁',
        ohbar: '⦵',
        ohm: 'Ω',
        oint: '∮',
        olarr: '↺',
        olcir: '⦾',
        olcross: '⦻',
        oline: '‾',
        olt: '⧀',
        omacr: 'ō',
        omega: 'ω',
        omicron: 'ο',
        omid: '⦶',
        ominus: '⊖',
        oopf: '𝕠',
        opar: '⦷',
        operp: '⦹',
        oplus: '⊕',
        or: '∨',
        orarr: '↻',
        ord: 'º',
        order: 'ℴ',
        orderof: 'ℴ',
        ordf: 'ª',
        ordm: 'º',
        origof: '⊶',
        oror: '⩖',
        orslope: '⩗',
        orv: '⩛',
        oscr: 'ℴ',
        oslas: 'ø',
        oslash: 'ø',
        osol: '⊘',
        otild: 'õ',
        otilde: 'õ',
        otimes: '⊗',
        otimesas: '⨶',
        oum: 'ö',
        ouml: 'ö',
        ovbar: '⌽',
        par: '¶',
        para: '¶',
        parallel: '∥',
        parsim: '⫳',
        parsl: '⫽',
        part: '∂',
        pcy: 'п',
        percnt: '%',
        period: '.',
        permil: '‰',
        perp: '⊥',
        pertenk: '‱',
        pfr: '𝔭',
        phi: 'φ',
        phiv: 'ϕ',
        phmmat: 'ℳ',
        phone: '☎',
        pi: 'π',
        pitchfork: '⋔',
        piv: 'ϖ',
        planck: 'ℏ',
        planckh: 'ℎ',
        plankv: 'ℏ',
        plus: '+',
        plusacir: '⨣',
        plusb: '⊞',
        pluscir: '⨢',
        plusdo: '∔',
        plusdu: '⨥',
        pluse: '⩲',
        plusm: '±',
        plusmn: '±',
        plussim: '⨦',
        plustwo: '⨧',
        pm: '±',
        pointint: '⨕',
        popf: '𝕡',
        poun: '£',
        pound: '£',
        pr: '≺',
        prE: '⪳',
        prap: '⪷',
        prcue: '≼',
        pre: '⪯',
        prec: '≺',
        precapprox: '⪷',
        preccurlyeq: '≼',
        preceq: '⪯',
        precnapprox: '⪹',
        precneqq: '⪵',
        precnsim: '⋨',
        precsim: '≾',
        prime: '′',
        primes: 'ℙ',
        prnE: '⪵',
        prnap: '⪹',
        prnsim: '⋨',
        prod: '∏',
        profalar: '⌮',
        profline: '⌒',
        profsurf: '⌓',
        prop: '∝',
        propto: '∝',
        prsim: '≾',
        prurel: '⊰',
        pscr: '𝓅',
        psi: 'ψ',
        puncsp: ' ',
        qfr: '𝔮',
        qint: '⨌',
        qopf: '𝕢',
        qprime: '⁗',
        qscr: '𝓆',
        quaternions: 'ℍ',
        quatint: '⨖',
        quest: '?',
        questeq: '≟',
        quo: '"',
        quot: '"',
        rAarr: '⇛',
        rArr: '⇒',
        rAtail: '⤜',
        rBarr: '⤏',
        rHar: '⥤',
        race: '∽̱',
        racute: 'ŕ',
        radic: '√',
        raemptyv: '⦳',
        rang: '⟩',
        rangd: '⦒',
        range: '⦥',
        rangle: '⟩',
        raqu: '»',
        raquo: '»',
        rarr: '→',
        rarrap: '⥵',
        rarrb: '⇥',
        rarrbfs: '⤠',
        rarrc: '⤳',
        rarrfs: '⤞',
        rarrhk: '↪',
        rarrlp: '↬',
        rarrpl: '⥅',
        rarrsim: '⥴',
        rarrtl: '↣',
        rarrw: '↝',
        ratail: '⤚',
        ratio: '∶',
        rationals: 'ℚ',
        rbarr: '⤍',
        rbbrk: '❳',
        rbrace: '}',
        rbrack: ']',
        rbrke: '⦌',
        rbrksld: '⦎',
        rbrkslu: '⦐',
        rcaron: 'ř',
        rcedil: 'ŗ',
        rceil: '⌉',
        rcub: '}',
        rcy: 'р',
        rdca: '⤷',
        rdldhar: '⥩',
        rdquo: '”',
        rdquor: '”',
        rdsh: '↳',
        real: 'ℜ',
        realine: 'ℛ',
        realpart: 'ℜ',
        reals: 'ℝ',
        rect: '▭',
        re: '®',
        reg: '®',
        rfisht: '⥽',
        rfloor: '⌋',
        rfr: '𝔯',
        rhard: '⇁',
        rharu: '⇀',
        rharul: '⥬',
        rho: 'ρ',
        rhov: 'ϱ',
        rightarrow: '→',
        rightarrowtail: '↣',
        rightharpoondown: '⇁',
        rightharpoonup: '⇀',
        rightleftarrows: '⇄',
        rightleftharpoons: '⇌',
        rightrightarrows: '⇉',
        rightsquigarrow: '↝',
        rightthreetimes: '⋌',
        ring: '˚',
        risingdotseq: '≓',
        rlarr: '⇄',
        rlhar: '⇌',
        rlm: '‏',
        rmoust: '⎱',
        rmoustache: '⎱',
        rnmid: '⫮',
        roang: '⟭',
        roarr: '⇾',
        robrk: '⟧',
        ropar: '⦆',
        ropf: '𝕣',
        roplus: '⨮',
        rotimes: '⨵',
        rpar: ')',
        rpargt: '⦔',
        rppolint: '⨒',
        rrarr: '⇉',
        rsaquo: '›',
        rscr: '𝓇',
        rsh: '↱',
        rsqb: ']',
        rsquo: '’',
        rsquor: '’',
        rthree: '⋌',
        rtimes: '⋊',
        rtri: '▹',
        rtrie: '⊵',
        rtrif: '▸',
        rtriltri: '⧎',
        ruluhar: '⥨',
        rx: '℞',
        sacute: 'ś',
        sbquo: '‚',
        sc: '≻',
        scE: '⪴',
        scap: '⪸',
        scaron: 'š',
        sccue: '≽',
        sce: '⪰',
        scedil: 'ş',
        scirc: 'ŝ',
        scnE: '⪶',
        scnap: '⪺',
        scnsim: '⋩',
        scpolint: '⨓',
        scsim: '≿',
        scy: 'с',
        sdot: '⋅',
        sdotb: '⊡',
        sdote: '⩦',
        seArr: '⇘',
        searhk: '⤥',
        searr: '↘',
        searrow: '↘',
        sec: '§',
        sect: '§',
        semi: ';',
        seswar: '⤩',
        setminus: '∖',
        setmn: '∖',
        sext: '✶',
        sfr: '𝔰',
        sfrown: '⌢',
        sharp: '♯',
        shchcy: 'щ',
        shcy: 'ш',
        shortmid: '∣',
        shortparallel: '∥',
        sh: '­',
        shy: '­',
        sigma: 'σ',
        sigmaf: 'ς',
        sigmav: 'ς',
        sim: '∼',
        simdot: '⩪',
        sime: '≃',
        simeq: '≃',
        simg: '⪞',
        simgE: '⪠',
        siml: '⪝',
        simlE: '⪟',
        simne: '≆',
        simplus: '⨤',
        simrarr: '⥲',
        slarr: '←',
        smallsetminus: '∖',
        smashp: '⨳',
        smeparsl: '⧤',
        smid: '∣',
        smile: '⌣',
        smt: '⪪',
        smte: '⪬',
        smtes: '⪬︀',
        softcy: 'ь',
        sol: '/',
        solb: '⧄',
        solbar: '⌿',
        sopf: '𝕤',
        spades: '♠',
        spadesuit: '♠',
        spar: '∥',
        sqcap: '⊓',
        sqcaps: '⊓︀',
        sqcup: '⊔',
        sqcups: '⊔︀',
        sqsub: '⊏',
        sqsube: '⊑',
        sqsubset: '⊏',
        sqsubseteq: '⊑',
        sqsup: '⊐',
        sqsupe: '⊒',
        sqsupset: '⊐',
        sqsupseteq: '⊒',
        squ: '□',
        square: '□',
        squarf: '▪',
        squf: '▪',
        srarr: '→',
        sscr: '𝓈',
        ssetmn: '∖',
        ssmile: '⌣',
        sstarf: '⋆',
        star: '☆',
        starf: '★',
        straightepsilon: 'ϵ',
        straightphi: 'ϕ',
        strns: '¯',
        sub: '⊂',
        subE: '⫅',
        subdot: '⪽',
        sube: '⊆',
        subedot: '⫃',
        submult: '⫁',
        subnE: '⫋',
        subne: '⊊',
        subplus: '⪿',
        subrarr: '⥹',
        subset: '⊂',
        subseteq: '⊆',
        subseteqq: '⫅',
        subsetneq: '⊊',
        subsetneqq: '⫋',
        subsim: '⫇',
        subsub: '⫕',
        subsup: '⫓',
        succ: '≻',
        succapprox: '⪸',
        succcurlyeq: '≽',
        succeq: '⪰',
        succnapprox: '⪺',
        succneqq: '⪶',
        succnsim: '⋩',
        succsim: '≿',
        sum: '∑',
        sung: '♪',
        sup: '⊃',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        supE: '⫆',
        supdot: '⪾',
        supdsub: '⫘',
        supe: '⊇',
        supedot: '⫄',
        suphsol: '⟉',
        suphsub: '⫗',
        suplarr: '⥻',
        supmult: '⫂',
        supnE: '⫌',
        supne: '⊋',
        supplus: '⫀',
        supset: '⊃',
        supseteq: '⊇',
        supseteqq: '⫆',
        supsetneq: '⊋',
        supsetneqq: '⫌',
        supsim: '⫈',
        supsub: '⫔',
        supsup: '⫖',
        swArr: '⇙',
        swarhk: '⤦',
        swarr: '↙',
        swarrow: '↙',
        swnwar: '⤪',
        szli: 'ß',
        szlig: 'ß',
        target: '⌖',
        tau: 'τ',
        tbrk: '⎴',
        tcaron: 'ť',
        tcedil: 'ţ',
        tcy: 'т',
        tdot: '⃛',
        telrec: '⌕',
        tfr: '𝔱',
        there4: '∴',
        therefore: '∴',
        theta: 'θ',
        thetasym: 'ϑ',
        thetav: 'ϑ',
        thickapprox: '≈',
        thicksim: '∼',
        thinsp: ' ',
        thkap: '≈',
        thksim: '∼',
        thor: 'þ',
        thorn: 'þ',
        tilde: '˜',
        time: '×',
        times: '×',
        timesb: '⊠',
        timesbar: '⨱',
        timesd: '⨰',
        tint: '∭',
        toea: '⤨',
        top: '⊤',
        topbot: '⌶',
        topcir: '⫱',
        topf: '𝕥',
        topfork: '⫚',
        tosa: '⤩',
        tprime: '‴',
        trade: '™',
        triangle: '▵',
        triangledown: '▿',
        triangleleft: '◃',
        trianglelefteq: '⊴',
        triangleq: '≜',
        triangleright: '▹',
        trianglerighteq: '⊵',
        tridot: '◬',
        trie: '≜',
        triminus: '⨺',
        triplus: '⨹',
        trisb: '⧍',
        tritime: '⨻',
        trpezium: '⏢',
        tscr: '𝓉',
        tscy: 'ц',
        tshcy: 'ћ',
        tstrok: 'ŧ',
        twixt: '≬',
        twoheadleftarrow: '↞',
        twoheadrightarrow: '↠',
        uArr: '⇑',
        uHar: '⥣',
        uacut: 'ú',
        uacute: 'ú',
        uarr: '↑',
        ubrcy: 'ў',
        ubreve: 'ŭ',
        ucir: 'û',
        ucirc: 'û',
        ucy: 'у',
        udarr: '⇅',
        udblac: 'ű',
        udhar: '⥮',
        ufisht: '⥾',
        ufr: '𝔲',
        ugrav: 'ù',
        ugrave: 'ù',
        uharl: '↿',
        uharr: '↾',
        uhblk: '▀',
        ulcorn: '⌜',
        ulcorner: '⌜',
        ulcrop: '⌏',
        ultri: '◸',
        umacr: 'ū',
        um: '¨',
        uml: '¨',
        uogon: 'ų',
        uopf: '𝕦',
        uparrow: '↑',
        updownarrow: '↕',
        upharpoonleft: '↿',
        upharpoonright: '↾',
        uplus: '⊎',
        upsi: 'υ',
        upsih: 'ϒ',
        upsilon: 'υ',
        upuparrows: '⇈',
        urcorn: '⌝',
        urcorner: '⌝',
        urcrop: '⌎',
        uring: 'ů',
        urtri: '◹',
        uscr: '𝓊',
        utdot: '⋰',
        utilde: 'ũ',
        utri: '▵',
        utrif: '▴',
        uuarr: '⇈',
        uum: 'ü',
        uuml: 'ü',
        uwangle: '⦧',
        vArr: '⇕',
        vBar: '⫨',
        vBarv: '⫩',
        vDash: '⊨',
        vangrt: '⦜',
        varepsilon: 'ϵ',
        varkappa: 'ϰ',
        varnothing: '∅',
        varphi: 'ϕ',
        varpi: 'ϖ',
        varpropto: '∝',
        varr: '↕',
        varrho: 'ϱ',
        varsigma: 'ς',
        varsubsetneq: '⊊︀',
        varsubsetneqq: '⫋︀',
        varsupsetneq: '⊋︀',
        varsupsetneqq: '⫌︀',
        vartheta: 'ϑ',
        vartriangleleft: '⊲',
        vartriangleright: '⊳',
        vcy: 'в',
        vdash: '⊢',
        vee: '∨',
        veebar: '⊻',
        veeeq: '≚',
        vellip: '⋮',
        verbar: '|',
        vert: '|',
        vfr: '𝔳',
        vltri: '⊲',
        vnsub: '⊂⃒',
        vnsup: '⊃⃒',
        vopf: '𝕧',
        vprop: '∝',
        vrtri: '⊳',
        vscr: '𝓋',
        vsubnE: '⫋︀',
        vsubne: '⊊︀',
        vsupnE: '⫌︀',
        vsupne: '⊋︀',
        vzigzag: '⦚',
        wcirc: 'ŵ',
        wedbar: '⩟',
        wedge: '∧',
        wedgeq: '≙',
        weierp: '℘',
        wfr: '𝔴',
        wopf: '𝕨',
        wp: '℘',
        wr: '≀',
        wreath: '≀',
        wscr: '𝓌',
        xcap: '⋂',
        xcirc: '◯',
        xcup: '⋃',
        xdtri: '▽',
        xfr: '𝔵',
        xhArr: '⟺',
        xharr: '⟷',
        xi: 'ξ',
        xlArr: '⟸',
        xlarr: '⟵',
        xmap: '⟼',
        xnis: '⋻',
        xodot: '⨀',
        xopf: '𝕩',
        xoplus: '⨁',
        xotime: '⨂',
        xrArr: '⟹',
        xrarr: '⟶',
        xscr: '𝓍',
        xsqcup: '⨆',
        xuplus: '⨄',
        xutri: '△',
        xvee: '⋁',
        xwedge: '⋀',
        yacut: 'ý',
        yacute: 'ý',
        yacy: 'я',
        ycirc: 'ŷ',
        ycy: 'ы',
        ye: '¥',
        yen: '¥',
        yfr: '𝔶',
        yicy: 'ї',
        yopf: '𝕪',
        yscr: '𝓎',
        yucy: 'ю',
        yum: 'ÿ',
        yuml: 'ÿ',
        zacute: 'ź',
        zcaron: 'ž',
        zcy: 'з',
        zdot: 'ż',
        zeetrf: 'ℨ',
        zeta: 'ζ',
        zfr: '𝔷',
        zhcy: 'ж',
        zigrarr: '⇝',
        zopf: '𝕫',
        zscr: '𝓏',
        zwj: '‍',
        zwnj: '‌',
      }
    },
  }),
  y2 = Z({
    '../../node_modules/parse-entities/decode-entity.js'(e, t) {
      var r = b2()
      t.exports = o
      var n = {}.hasOwnProperty
      function o(l) {
        return n.call(r, l) ? r[l] : !1
      }
    },
  }),
  v2 = Z({
    '../../node_modules/parse-entities/index.js'(e, t) {
      var r = p2(),
        n = f2(),
        o = ou(),
        l = m2(),
        i = h2(),
        u = y2()
      t.exports = X
      var s = {}.hasOwnProperty,
        c = String.fromCharCode,
        d = Function.prototype,
        m = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        f = 9,
        p = 10,
        h = 12,
        g = 32,
        x = 38,
        y = 59,
        w = 60,
        v = 61,
        E = 35,
        A = 88,
        S = 120,
        k = 65533,
        C = 'named',
        O = 'hexadecimal',
        T = 'decimal',
        R = {}
      ;(R[O] = 16), (R[T] = 10)
      var $ = {}
      ;($[C] = i), ($[T] = o), ($[O] = l)
      var F = 1,
        P = 2,
        D = 3,
        L = 4,
        N = 5,
        V = 6,
        B = 7,
        H = {}
      ;(H[F] = 'Named character references must be terminated by a semicolon'),
        (H[P] =
          'Numeric character references must be terminated by a semicolon'),
        (H[D] = 'Named character references cannot be empty'),
        (H[L] = 'Numeric character references cannot be empty'),
        (H[N] = 'Named character references must be known'),
        (H[V] = 'Numeric character references cannot be disallowed'),
        (H[B] =
          'Numeric character references cannot be outside the permissible Unicode range')
      function X(I, z) {
        var W = {},
          se,
          be
        z || (z = {})
        for (be in m) (se = z[be]), (W[be] = se ?? m[be])
        return (
          (W.position.indent || W.position.start) &&
            ((W.indent = W.position.indent || []),
            (W.position = W.position.start)),
          ne(I, W)
        )
      }
      function ne(I, z) {
        var W = z.additional,
          se = z.nonTerminated,
          be = z.text,
          it = z.reference,
          Re = z.warning,
          Ze = z.textContext,
          M = z.referenceContext,
          Pe = z.warningContext,
          Ve = z.position,
          kt = z.indent || [],
          zt = I.length,
          ze = 0,
          qr = -1,
          ye = Ve.column || 1,
          _t = Ve.line || 1,
          qe = '',
          qt = [],
          Ue,
          Ut,
          We,
          fe,
          Ne,
          ue,
          ae,
          Ge,
          Ur,
          ra,
          Ot,
          fr,
          Tt,
          st,
          Sl,
          mr,
          Wr,
          Ye,
          ce
        for (
          typeof W == 'string' && (W = W.charCodeAt(0)),
            mr = gr(),
            Ge = Re ? j0 : d,
            ze--,
            zt++;
          ++ze < zt;

        )
          if (
            (Ne === p && (ye = kt[qr] || 1), (Ne = I.charCodeAt(ze)), Ne === x)
          ) {
            if (
              ((ae = I.charCodeAt(ze + 1)),
              ae === f ||
                ae === p ||
                ae === h ||
                ae === g ||
                ae === x ||
                ae === w ||
                ae !== ae ||
                (W && ae === W))
            ) {
              ;(qe += c(Ne)), ye++
              continue
            }
            for (
              Tt = ze + 1,
                fr = Tt,
                ce = Tt,
                ae === E
                  ? ((ce = ++fr),
                    (ae = I.charCodeAt(ce)),
                    ae === A || ae === S ? ((st = O), (ce = ++fr)) : (st = T))
                  : (st = C),
                Ue = '',
                Ot = '',
                fe = '',
                Sl = $[st],
                ce--;
              ++ce < zt && ((ae = I.charCodeAt(ce)), !!Sl(ae));

            )
              (fe += c(ae)),
                st === C && s.call(r, fe) && ((Ue = fe), (Ot = r[fe]))
            ;(We = I.charCodeAt(ce) === y),
              We &&
                (ce++,
                (Ut = st === C ? u(fe) : !1),
                Ut && ((Ue = fe), (Ot = Ut))),
              (Ye = 1 + ce - Tt),
              (!We && !se) ||
                (fe
                  ? st === C
                    ? (We && !Ot
                        ? Ge(N, 1)
                        : (Ue !== fe &&
                            ((ce = fr + Ue.length),
                            (Ye = 1 + ce - fr),
                            (We = !1)),
                          We ||
                            ((Ur = Ue ? F : D),
                            z.attribute
                              ? ((ae = I.charCodeAt(ce)),
                                ae === v
                                  ? (Ge(Ur, Ye), (Ot = null))
                                  : i(ae)
                                  ? (Ot = null)
                                  : Ge(Ur, Ye))
                              : Ge(Ur, Ye))),
                      (ue = Ot))
                    : (We || Ge(P, Ye),
                      (ue = parseInt(fe, R[st])),
                      K(ue)
                        ? (Ge(B, Ye), (ue = c(k)))
                        : ue in n
                        ? (Ge(V, Ye), (ue = n[ue]))
                        : ((ra = ''),
                          J(ue) && Ge(V, Ye),
                          ue > 65535 &&
                            ((ue -= 65536),
                            (ra += c((ue >>> 10) | 55296)),
                            (ue = 56320 | (ue & 1023))),
                          (ue = ra + c(ue))))
                  : st !== C && Ge(L, Ye)),
              ue
                ? (Cl(),
                  (mr = gr()),
                  (ze = ce - 1),
                  (ye += ce - Tt + 1),
                  qt.push(ue),
                  (Wr = gr()),
                  Wr.offset++,
                  it &&
                    it.call(M, ue, {start: mr, end: Wr}, I.slice(Tt - 1, ce)),
                  (mr = Wr))
                : ((fe = I.slice(Tt - 1, ce)),
                  (qe += fe),
                  (ye += fe.length),
                  (ze = ce - 1))
          } else
            Ne === 10 && (_t++, qr++, (ye = 0)),
              Ne === Ne ? ((qe += c(Ne)), ye++) : Cl()
        return qt.join('')
        function gr() {
          return {line: _t, column: ye, offset: ze + (Ve.offset || 0)}
        }
        function j0(kl, _l) {
          var na = gr()
          ;(na.column += _l), (na.offset += _l), Re.call(Pe, H[kl], na, kl)
        }
        function Cl() {
          qe &&
            (qt.push(qe),
            be && be.call(Ze, qe, {start: mr, end: gr()}),
            (qe = ''))
        }
      }
      function K(I) {
        return (I >= 55296 && I <= 57343) || I > 1114111
      }
      function J(I) {
        return (
          (I >= 1 && I <= 8) ||
          I === 11 ||
          (I >= 13 && I <= 31) ||
          (I >= 127 && I <= 159) ||
          (I >= 64976 && I <= 65007) ||
          (I & 65535) === 65535 ||
          (I & 65535) === 65534
        )
      }
    },
  }),
  E2 = Z({
    '../../node_modules/refractor/node_modules/prismjs/components/prism-core.js'(
      e,
      t
    ) {
      var r =
          typeof window < 'u'
            ? window
            : typeof WorkerGlobalScope < 'u' &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
        n = (function (o) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            u = {},
            s = {
              manual: o.Prism && o.Prism.manual,
              disableWorkerMessageHandler:
                o.Prism && o.Prism.disableWorkerMessageHandler,
              util: {
                encode: function v(E) {
                  return E instanceof c
                    ? new c(E.type, v(E.content), E.alias)
                    : Array.isArray(E)
                    ? E.map(v)
                    : E.replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ')
                },
                type: function (v) {
                  return Object.prototype.toString.call(v).slice(8, -1)
                },
                objId: function (v) {
                  return (
                    v.__id || Object.defineProperty(v, '__id', {value: ++i}),
                    v.__id
                  )
                },
                clone: function v(E, A) {
                  A = A || {}
                  var S, k
                  switch (s.util.type(E)) {
                    case 'Object':
                      if (((k = s.util.objId(E)), A[k])) return A[k]
                      ;(S = {}), (A[k] = S)
                      for (var C in E)
                        E.hasOwnProperty(C) && (S[C] = v(E[C], A))
                      return S
                    case 'Array':
                      return (
                        (k = s.util.objId(E)),
                        A[k]
                          ? A[k]
                          : ((S = []),
                            (A[k] = S),
                            E.forEach(function (O, T) {
                              S[T] = v(O, A)
                            }),
                            S)
                      )
                    default:
                      return E
                  }
                },
                getLanguage: function (v) {
                  for (; v; ) {
                    var E = l.exec(v.className)
                    if (E) return E[1].toLowerCase()
                    v = v.parentElement
                  }
                  return 'none'
                },
                setLanguage: function (v, E) {
                  ;(v.className = v.className.replace(RegExp(l, 'gi'), '')),
                    v.classList.add('language-' + E)
                },
                currentScript: function () {
                  if (typeof document > 'u') return null
                  if ('currentScript' in document && 1 < 2)
                    return document.currentScript
                  try {
                    throw new Error()
                  } catch (S) {
                    var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      S.stack
                    ) || [])[1]
                    if (v) {
                      var E = document.getElementsByTagName('script')
                      for (var A in E) if (E[A].src == v) return E[A]
                    }
                    return null
                  }
                },
                isActive: function (v, E, A) {
                  for (var S = 'no-' + E; v; ) {
                    var k = v.classList
                    if (k.contains(E)) return !0
                    if (k.contains(S)) return !1
                    v = v.parentElement
                  }
                  return !!A
                },
              },
              languages: {
                plain: u,
                plaintext: u,
                text: u,
                txt: u,
                extend: function (v, E) {
                  var A = s.util.clone(s.languages[v])
                  for (var S in E) A[S] = E[S]
                  return A
                },
                insertBefore: function (v, E, A, S) {
                  S = S || s.languages
                  var k = S[v],
                    C = {}
                  for (var O in k)
                    if (k.hasOwnProperty(O)) {
                      if (O == E)
                        for (var T in A) A.hasOwnProperty(T) && (C[T] = A[T])
                      A.hasOwnProperty(O) || (C[O] = k[O])
                    }
                  var R = S[v]
                  return (
                    (S[v] = C),
                    s.languages.DFS(s.languages, function ($, F) {
                      F === R && $ != v && (this[$] = C)
                    }),
                    C
                  )
                },
                DFS: function v(E, A, S, k) {
                  k = k || {}
                  var C = s.util.objId
                  for (var O in E)
                    if (E.hasOwnProperty(O)) {
                      A.call(E, O, E[O], S || O)
                      var T = E[O],
                        R = s.util.type(T)
                      R === 'Object' && !k[C(T)]
                        ? ((k[C(T)] = !0), v(T, A, null, k))
                        : R === 'Array' &&
                          !k[C(T)] &&
                          ((k[C(T)] = !0), v(T, A, O, k))
                    }
                },
              },
              plugins: {},
              highlightAll: function (v, E) {
                s.highlightAllUnder(document, v, E)
              },
              highlightAllUnder: function (v, E, A) {
                var S = {
                  callback: A,
                  container: v,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                }
                s.hooks.run('before-highlightall', S),
                  (S.elements = Array.prototype.slice.apply(
                    S.container.querySelectorAll(S.selector)
                  )),
                  s.hooks.run('before-all-elements-highlight', S)
                for (var k = 0, C; (C = S.elements[k++]); )
                  s.highlightElement(C, E === !0, S.callback)
              },
              highlightElement: function (v, E, A) {
                var S = s.util.getLanguage(v),
                  k = s.languages[S]
                s.util.setLanguage(v, S)
                var C = v.parentElement
                C &&
                  C.nodeName.toLowerCase() === 'pre' &&
                  s.util.setLanguage(C, S)
                var O = v.textContent,
                  T = {element: v, language: S, grammar: k, code: O}
                function R(F) {
                  ;(T.highlightedCode = F),
                    s.hooks.run('before-insert', T),
                    (T.element.innerHTML = T.highlightedCode),
                    s.hooks.run('after-highlight', T),
                    s.hooks.run('complete', T),
                    A && A.call(T.element)
                }
                if (
                  (s.hooks.run('before-sanity-check', T),
                  (C = T.element.parentElement),
                  C &&
                    C.nodeName.toLowerCase() === 'pre' &&
                    !C.hasAttribute('tabindex') &&
                    C.setAttribute('tabindex', '0'),
                  !T.code)
                ) {
                  s.hooks.run('complete', T), A && A.call(T.element)
                  return
                }
                if ((s.hooks.run('before-highlight', T), !T.grammar)) {
                  R(s.util.encode(T.code))
                  return
                }
                if (E && o.Worker) {
                  var $ = new Worker(s.filename)
                  ;($.onmessage = function (F) {
                    R(F.data)
                  }),
                    $.postMessage(
                      JSON.stringify({
                        language: T.language,
                        code: T.code,
                        immediateClose: !0,
                      })
                    )
                } else R(s.highlight(T.code, T.grammar, T.language))
              },
              highlight: function (v, E, A) {
                var S = {code: v, grammar: E, language: A}
                if ((s.hooks.run('before-tokenize', S), !S.grammar))
                  throw new Error(
                    'The language "' + S.language + '" has no grammar.'
                  )
                return (
                  (S.tokens = s.tokenize(S.code, S.grammar)),
                  s.hooks.run('after-tokenize', S),
                  c.stringify(s.util.encode(S.tokens), S.language)
                )
              },
              tokenize: function (v, E) {
                var A = E.rest
                if (A) {
                  for (var S in A) E[S] = A[S]
                  delete E.rest
                }
                var k = new f()
                return p(k, k.head, v), m(v, k, E, k.head, 0), g(k)
              },
              hooks: {
                all: {},
                add: function (v, E) {
                  var A = s.hooks.all
                  ;(A[v] = A[v] || []), A[v].push(E)
                },
                run: function (v, E) {
                  var A = s.hooks.all[v]
                  if (!(!A || !A.length))
                    for (var S = 0, k; (k = A[S++]); ) k(E)
                },
              },
              Token: c,
            }
          o.Prism = s
          function c(v, E, A, S) {
            ;(this.type = v),
              (this.content = E),
              (this.alias = A),
              (this.length = (S || '').length | 0)
          }
          c.stringify = function v(E, A) {
            if (typeof E == 'string') return E
            if (Array.isArray(E)) {
              var S = ''
              return (
                E.forEach(function (R) {
                  S += v(R, A)
                }),
                S
              )
            }
            var k = {
                type: E.type,
                content: v(E.content, A),
                tag: 'span',
                classes: ['token', E.type],
                attributes: {},
                language: A,
              },
              C = E.alias
            C &&
              (Array.isArray(C)
                ? Array.prototype.push.apply(k.classes, C)
                : k.classes.push(C)),
              s.hooks.run('wrap', k)
            var O = ''
            for (var T in k.attributes)
              O +=
                ' ' +
                T +
                '="' +
                (k.attributes[T] || '').replace(/"/g, '&quot;') +
                '"'
            return (
              '<' +
              k.tag +
              ' class="' +
              k.classes.join(' ') +
              '"' +
              O +
              '>' +
              k.content +
              '</' +
              k.tag +
              '>'
            )
          }
          function d(v, E, A, S) {
            v.lastIndex = E
            var k = v.exec(A)
            if (k && S && k[1]) {
              var C = k[1].length
              ;(k.index += C), (k[0] = k[0].slice(C))
            }
            return k
          }
          function m(v, E, A, S, k, C) {
            for (var O in A)
              if (!(!A.hasOwnProperty(O) || !A[O])) {
                var T = A[O]
                T = Array.isArray(T) ? T : [T]
                for (var R = 0; R < T.length; ++R) {
                  if (C && C.cause == O + ',' + R) return
                  var $ = T[R],
                    F = $.inside,
                    P = !!$.lookbehind,
                    D = !!$.greedy,
                    L = $.alias
                  if (D && !$.pattern.global) {
                    var N = $.pattern.toString().match(/[imsuy]*$/)[0]
                    $.pattern = RegExp($.pattern.source, N + 'g')
                  }
                  for (
                    var V = $.pattern || $, B = S.next, H = k;
                    B !== E.tail && !(C && H >= C.reach);
                    H += B.value.length, B = B.next
                  ) {
                    var X = B.value
                    if (E.length > v.length) return
                    if (!(X instanceof c)) {
                      var ne = 1,
                        K
                      if (D) {
                        if (((K = d(V, H, v, P)), !K || K.index >= v.length))
                          break
                        var W = K.index,
                          J = K.index + K[0].length,
                          I = H
                        for (I += B.value.length; W >= I; )
                          (B = B.next), (I += B.value.length)
                        if (
                          ((I -= B.value.length), (H = I), B.value instanceof c)
                        )
                          continue
                        for (
                          var z = B;
                          z !== E.tail && (I < J || typeof z.value == 'string');
                          z = z.next
                        )
                          ne++, (I += z.value.length)
                        ne--, (X = v.slice(H, I)), (K.index -= H)
                      } else if (((K = d(V, 0, X, P)), !K)) continue
                      var W = K.index,
                        se = K[0],
                        be = X.slice(0, W),
                        it = X.slice(W + se.length),
                        Re = H + X.length
                      C && Re > C.reach && (C.reach = Re)
                      var Ze = B.prev
                      be && ((Ze = p(E, Ze, be)), (H += be.length)),
                        h(E, Ze, ne)
                      var M = new c(O, F ? s.tokenize(se, F) : se, L, se)
                      if (((B = p(E, Ze, M)), it && p(E, B, it), ne > 1)) {
                        var Pe = {cause: O + ',' + R, reach: Re}
                        m(v, E, A, B.prev, H, Pe),
                          C && Pe.reach > C.reach && (C.reach = Pe.reach)
                      }
                    }
                  }
                }
              }
          }
          function f() {
            var v = {value: null, prev: null, next: null},
              E = {value: null, prev: v, next: null}
            ;(v.next = E), (this.head = v), (this.tail = E), (this.length = 0)
          }
          function p(v, E, A) {
            var S = E.next,
              k = {value: A, prev: E, next: S}
            return (E.next = k), (S.prev = k), v.length++, k
          }
          function h(v, E, A) {
            for (var S = E.next, k = 0; k < A && S !== v.tail; k++) S = S.next
            ;(E.next = S), (S.prev = E), (v.length -= k)
          }
          function g(v) {
            for (var E = [], A = v.head.next; A !== v.tail; )
              E.push(A.value), (A = A.next)
            return E
          }
          if (!o.document)
            return (
              o.addEventListener &&
                (s.disableWorkerMessageHandler ||
                  o.addEventListener(
                    'message',
                    function (v) {
                      var E = JSON.parse(v.data),
                        A = E.language,
                        S = E.code,
                        k = E.immediateClose
                      o.postMessage(s.highlight(S, s.languages[A], A)),
                        k && o.close()
                    },
                    !1
                  )),
              s
            )
          var x = s.util.currentScript()
          x &&
            ((s.filename = x.src),
            x.hasAttribute('data-manual') && (s.manual = !0))
          function y() {
            s.manual || s.highlightAll()
          }
          if (!s.manual) {
            var w = document.readyState
            w === 'loading' || (w === 'interactive' && x && x.defer)
              ? document.addEventListener('DOMContentLoaded', y)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(y)
              : window.setTimeout(y, 16)
          }
          return s
        })(r)
      typeof t < 'u' && t.exports && (t.exports = n),
        typeof global < 'u' && (global.Prism = n)
    },
  }),
  x2 = Z({
    '../../node_modules/refractor/core.js'(e, t) {
      var r =
          typeof globalThis == 'object'
            ? globalThis
            : typeof self == 'object'
            ? self
            : typeof window == 'object'
            ? window
            : typeof global == 'object'
            ? global
            : {},
        n = k()
      r.Prism = {manual: !0, disableWorkerMessageHandler: !0}
      var o = d2(),
        l = v2(),
        i = E2(),
        u = eu(),
        s = Qs(),
        c = Gp(),
        d = Yp()
      n()
      var m = {}.hasOwnProperty
      function f() {}
      f.prototype = i
      var p = new f()
      ;(t.exports = p),
        (p.highlight = x),
        (p.register = h),
        (p.alias = g),
        (p.registered = y),
        (p.listLanguages = w),
        h(u),
        h(s),
        h(c),
        h(d),
        (p.util.encode = A),
        (p.Token.stringify = v)
      function h(C) {
        if (typeof C != 'function' || !C.displayName)
          throw new Error('Expected `function` for `grammar`, got `' + C + '`')
        p.languages[C.displayName] === void 0 && C(p)
      }
      function g(C, O) {
        var T = p.languages,
          R = C,
          $,
          F,
          P,
          D
        O && ((R = {}), (R[C] = O))
        for ($ in R)
          for (
            F = R[$], F = typeof F == 'string' ? [F] : F, P = F.length, D = -1;
            ++D < P;

          )
            T[F[D]] = T[$]
      }
      function x(C, O) {
        var T = i.highlight,
          R
        if (typeof C != 'string')
          throw new Error('Expected `string` for `value`, got `' + C + '`')
        if (p.util.type(O) === 'Object') (R = O), (O = null)
        else {
          if (typeof O != 'string')
            throw new Error('Expected `string` for `name`, got `' + O + '`')
          if (m.call(p.languages, O)) R = p.languages[O]
          else
            throw new Error('Unknown language: `' + O + '` is not registered')
        }
        return T.call(this, C, R, O)
      }
      function y(C) {
        if (typeof C != 'string')
          throw new Error('Expected `string` for `language`, got `' + C + '`')
        return m.call(p.languages, C)
      }
      function w() {
        var C = p.languages,
          O = [],
          T
        for (T in C) m.call(C, T) && typeof C[T] == 'object' && O.push(T)
        return O
      }
      function v(C, O, T) {
        var R
        return typeof C == 'string'
          ? {type: 'text', value: C}
          : p.util.type(C) === 'Array'
          ? E(C, O)
          : ((R = {
              type: C.type,
              content: p.Token.stringify(C.content, O, T),
              tag: 'span',
              classes: ['token', C.type],
              attributes: {},
              language: O,
              parent: T,
            }),
            C.alias && (R.classes = R.classes.concat(C.alias)),
            p.hooks.run('wrap', R),
            o(R.tag + '.' + R.classes.join('.'), S(R.attributes), R.content))
      }
      function E(C, O) {
        for (var T = [], R = C.length, $ = -1, F; ++$ < R; )
          (F = C[$]), F !== '' && F !== null && F !== void 0 && T.push(F)
        for ($ = -1, R = T.length; ++$ < R; )
          (F = T[$]), (T[$] = p.Token.stringify(F, O, T))
        return T
      }
      function A(C) {
        return C
      }
      function S(C) {
        var O
        for (O in C) C[O] = l(C[O])
        return C
      }
      function k() {
        var C = 'Prism' in r,
          O = C ? r.Prism : void 0
        return T
        function T() {
          C ? (r.Prism = O) : delete r.Prism, (C = void 0), (O = void 0)
        }
      }
    },
  }),
  w2 = Z({
    '../../node_modules/refractor/lang/bash.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'bash'), (r.aliases = ['shell'])
      function r(n) {
        ;(function (o) {
          var l =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            i = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            u = {
              bash: i,
              environment: {pattern: RegExp('\\$' + l), alias: 'constant'},
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      {pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0},
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: {variable: /^\$\(|^`|\)$|`$/},
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + l),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            }
          ;(o.languages.bash = {
            shebang: {pattern: /^#!\s*\/.*/, alias: 'important'},
            comment: {pattern: /(^|[^"{\\$])#.*/, lookbehind: !0},
            'function-name': [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              {pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function'},
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + l),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: {bash: i},
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              {pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0},
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: {entity: u.entity},
              },
            ],
            environment: {pattern: RegExp('\\$?' + l), alias: 'constant'},
            variable: u.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': {pattern: /\B&\d\b/, alias: 'important'},
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {'file-descriptor': {pattern: /^\d/, alias: 'important'}},
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (i.inside = o.languages.bash)
          for (
            var s = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              c = u.variable[1].inside,
              d = 0;
            d < s.length;
            d++
          )
            c[s[d]] = o.languages.bash[s[d]]
          o.languages.shell = o.languages.bash
        })(n)
      }
    },
  }),
  A2 = Z({
    '../../node_modules/refractor/lang/js-extras.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'jsExtras'), (r.aliases = [])
      function r(n) {
        ;(function (o) {
          o.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  o.languages.javascript['function-variable'].pattern.source
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            o.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + o.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            o.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name',
                },
                {pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name'},
              ],
            })
          function l(m, f) {
            return RegExp(
              m.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source
              }),
              f
            )
          }
          o.languages.insertBefore('javascript', 'keyword', {
            imports: {
              pattern: l(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: o.languages.javascript,
            },
            exports: {
              pattern: l(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source
              ),
              lookbehind: !0,
              inside: o.languages.javascript,
            },
          }),
            o.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              {pattern: /\bnull\b/, alias: ['null', 'nil']},
              {pattern: /\bundefined\b/, alias: 'nil'}
            ),
            o.languages.insertBefore('javascript', 'operator', {
              spread: {pattern: /\.{3}/, alias: 'operator'},
              arrow: {pattern: /=>/, alias: 'operator'},
            }),
            o.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: l(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable',
              },
              console: {pattern: /\bconsole(?=\s*\.)/, alias: 'class-name'},
            })
          for (
            var i = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              u = 0;
            u < i.length;
            u++
          ) {
            var s = i[u],
              c = o.languages.javascript[s]
            o.util.type(c) === 'RegExp' &&
              (c = o.languages.javascript[s] = {pattern: c})
            var d = c.inside || {}
            ;(c.inside = d), (d['maybe-class-name'] = /^[A-Z][\s\S]*/)
          }
        })(n)
      }
    },
  }),
  S2 = Z({
    '../../node_modules/refractor/lang/json.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'json'), (r.aliases = ['webmanifest'])
      function r(n) {
        ;(n.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: {pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0},
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: {pattern: /\bnull\b/, alias: 'keyword'},
        }),
          (n.languages.webmanifest = n.languages.json)
      }
    },
  }),
  C2 = Z({
    '../../node_modules/refractor/lang/graphql.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'graphql'), (r.aliases = [])
      function r(n) {
        ;(n.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: n.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: {pattern: /@[a-z_]\w*/i, alias: 'function'},
          'attr-name': {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'atom-input': {pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name'},
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-mutation': {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-query': {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          n.hooks.add('after-tokenize', function (o) {
            if (o.language !== 'graphql') return
            var l = o.tokens.filter(function (w) {
                return (
                  typeof w != 'string' &&
                  w.type !== 'comment' &&
                  w.type !== 'scalar'
                )
              }),
              i = 0
            function u(w) {
              return l[i + w]
            }
            function s(w, v) {
              v = v || 0
              for (var E = 0; E < w.length; E++) {
                var A = u(E + v)
                if (!A || A.type !== w[E]) return !1
              }
              return !0
            }
            function c(w, v) {
              for (var E = 1, A = i; A < l.length; A++) {
                var S = l[A],
                  k = S.content
                if (S.type === 'punctuation' && typeof k == 'string') {
                  if (w.test(k)) E++
                  else if (v.test(k) && (E--, E === 0)) return A
                }
              }
              return -1
            }
            function d(w, v) {
              var E = w.alias
              E ? Array.isArray(E) || (w.alias = E = [E]) : (w.alias = E = []),
                E.push(v)
            }
            for (; i < l.length; ) {
              var m = l[i++]
              if (m.type === 'keyword' && m.content === 'mutation') {
                var f = []
                if (
                  s(['definition-mutation', 'punctuation']) &&
                  u(1).content === '('
                ) {
                  i += 2
                  var p = c(/^\($/, /^\)$/)
                  if (p === -1) continue
                  for (; i < p; i++) {
                    var h = u(0)
                    h.type === 'variable' &&
                      (d(h, 'variable-input'), f.push(h.content))
                  }
                  i = p + 1
                }
                if (
                  s(['punctuation', 'property-query']) &&
                  u(0).content === '{' &&
                  (i++, d(u(0), 'property-mutation'), f.length > 0)
                ) {
                  var g = c(/^\{$/, /^\}$/)
                  if (g === -1) continue
                  for (var x = i; x < g; x++) {
                    var y = l[x]
                    y.type === 'variable' &&
                      f.indexOf(y.content) >= 0 &&
                      d(y, 'variable-input')
                  }
                }
              }
            }
          })
      }
    },
  })
const {logger: k2} = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {global: _2} = __STORYBOOK_MODULE_GLOBAL__
var O2 = _e(Js()),
  T2 = O2.default,
  R2 = _e(w2()),
  F2 = R2.default,
  $2 = _e(Qs()),
  D2 = $2.default,
  L2 = _e(A2()),
  M2 = L2.default,
  B2 = _e(S2()),
  I2 = B2.default,
  P2 = _e(C2()),
  N2 = P2.default,
  j2 = _e(eu()),
  H2 = j2.default,
  Z2 = _e(qp()),
  V2 = Z2.default,
  z2 = _e(Up()),
  q2 = z2.default,
  U2 = _e(Wp()),
  W2 = U2.default,
  G2 = _e(Xs()),
  Y2 = G2.default
function K2(e, t) {
  if (e == null) return {}
  var r = To(e, t),
    n,
    o
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e)
    for (o = 0; o < l.length; o++)
      (n = l[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n])
  }
  return r
}
function Wa(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function X2(e) {
  if (Array.isArray(e)) return Wa(e)
}
function J2(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function Q2(e, t) {
  if (e) {
    if (typeof e == 'string') return Wa(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wa(e, t)
  }
}
function e5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function t5(e) {
  return X2(e) || J2(e) || Q2(e) || e5()
}
function Rr(e) {
  '@babel/helpers - typeof'
  return (
    (Rr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Rr(e)
  )
}
function r5(e, t) {
  if (Rr(e) !== 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Rr(n) !== 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function n5(e) {
  var t = r5(e, 'string')
  return Rr(t) === 'symbol' ? t : String(t)
}
function lu(e, t, r) {
  return (
    (t = n5(t)),
    t in e
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
function Xl(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Xl(Object(r), !0).forEach(function (n) {
          lu(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Xl(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
  }
  return e
}
function a5(e) {
  var t = e.length
  if (t === 0 || t === 1) return e
  if (t === 2)
    return [
      e[0],
      e[1],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0]),
    ]
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
    ]
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3]),
      ''.concat(e[3], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1], '.').concat(e[0]),
    ]
}
var ha = {}
function o5(e) {
  if (e.length === 0 || e.length === 1) return e
  var t = e.join('.')
  return ha[t] || (ha[t] = a5(e)), ha[t]
}
function l5(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = e.filter(function (l) {
      return l !== 'token'
    }),
    o = o5(n)
  return o.reduce(function (l, i) {
    return Yt(Yt({}, l), r[i])
  }, t)
}
function Jl(e) {
  return e.join(' ')
}
function i5(e, t) {
  var r = 0
  return function (n) {
    return (
      (r += 1),
      n.map(function (o, l) {
        return $o({
          node: o,
          stylesheet: e,
          useInlineStyles: t,
          key: 'code-segment-'.concat(r, '-').concat(l),
        })
      })
    )
  }
}
function $o(e) {
  var t = e.node,
    r = e.stylesheet,
    n = e.style,
    o = n === void 0 ? {} : n,
    l = e.useInlineStyles,
    i = e.key,
    u = t.properties,
    s = t.type,
    c = t.tagName,
    d = t.value
  if (s === 'text') return d
  if (c) {
    var m = i5(r, l),
      f
    if (!l) f = Yt(Yt({}, u), {}, {className: Jl(u.className)})
    else {
      var p = Object.keys(r).reduce(function (y, w) {
          return (
            w.split('.').forEach(function (v) {
              y.includes(v) || y.push(v)
            }),
            y
          )
        }, []),
        h = u.className && u.className.includes('token') ? ['token'] : [],
        g =
          u.className &&
          h.concat(
            u.className.filter(function (y) {
              return !p.includes(y)
            })
          )
      f = Yt(
        Yt({}, u),
        {},
        {
          className: Jl(g) || void 0,
          style: l5(u.className, Object.assign({}, u.style, o), r),
        }
      )
    }
    var x = m(t.children)
    return a.createElement(c, U({key: i}, f), x)
  }
}
var s5 = function (e, t) {
    var r = e.listLanguages()
    return r.indexOf(t) !== -1
  },
  u5 = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator',
  ]
function Ql(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ql(Object(r), !0).forEach(function (n) {
          lu(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ql(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
  }
  return e
}
var c5 = /\n/g
function d5(e) {
  return e.match(c5)
}
function p5(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    n = e.style
  return t.map(function (o, l) {
    var i = l + r
    return a.createElement(
      'span',
      {
        key: 'line-'.concat(l),
        className: 'react-syntax-highlighter-line-number',
        style: typeof n == 'function' ? n(i) : n,
      },
      ''.concat(
        i,
        `
`
      )
    )
  })
}
function f5(e) {
  var t = e.codeString,
    r = e.codeStyle,
    n = e.containerStyle,
    o = n === void 0 ? {float: 'left', paddingRight: '10px'} : n,
    l = e.numberStyle,
    i = l === void 0 ? {} : l,
    u = e.startingLineNumber
  return a.createElement(
    'code',
    {style: Object.assign({}, r, o)},
    p5({
      lines: t.replace(/\n$/, '').split(`
`),
      style: i,
      startingLineNumber: u,
    })
  )
}
function m5(e) {
  return ''.concat(e.toString().length, '.25em')
}
function iu(e, t) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number',
      ],
      style: t,
    },
    children: [{type: 'text', value: e}],
  }
}
function su(e, t, r) {
  var n = {
      display: 'inline-block',
      minWidth: m5(r),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    o = typeof e == 'function' ? e(t) : e,
    l = Qe(Qe({}, n), o)
  return l
}
function sn(e) {
  var t = e.children,
    r = e.lineNumber,
    n = e.lineNumberStyle,
    o = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    i = e.lineProps,
    u = i === void 0 ? {} : i,
    s = e.className,
    c = s === void 0 ? [] : s,
    d = e.showLineNumbers,
    m = e.wrapLongLines,
    f = typeof u == 'function' ? u(r) : u
  if (((f.className = c), r && l)) {
    var p = su(n, r, o)
    t.unshift(iu(r, p))
  }
  return (
    m & d && (f.style = Qe(Qe({}, f.style), {}, {display: 'flex'})),
    {type: 'element', tagName: 'span', properties: f, children: t}
  )
}
function uu(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      n = 0;
    n < e.length;
    n++
  ) {
    var o = e[n]
    if (o.type === 'text')
      r.push(sn({children: [o], className: t5(new Set(t))}))
    else if (o.children) {
      var l = t.concat(o.properties.className)
      uu(o.children, l).forEach(function (i) {
        return r.push(i)
      })
    }
  }
  return r
}
function g5(e, t, r, n, o, l, i, u, s) {
  var c,
    d = uu(e.value),
    m = [],
    f = -1,
    p = 0
  function h(A, S) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
    return sn({
      children: A,
      lineNumber: S,
      lineNumberStyle: u,
      largestLineNumber: i,
      showInlineLineNumbers: o,
      lineProps: r,
      className: k,
      showLineNumbers: n,
      wrapLongLines: s,
    })
  }
  function g(A, S) {
    if (n && S && o) {
      var k = su(u, S, i)
      A.unshift(iu(S, k))
    }
    return A
  }
  function x(A, S) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
    return t || k.length > 0 ? h(A, S, k) : g(A, S)
  }
  for (
    var y = function () {
      var A = d[p],
        S = A.children[0].value,
        k = d5(S)
      if (k) {
        var C = S.split(`
`)
        C.forEach(function (O, T) {
          var R = n && m.length + l,
            $ = {
              type: 'text',
              value: ''.concat(
                O,
                `
`
              ),
            }
          if (T === 0) {
            var F = d
                .slice(f + 1, p)
                .concat(sn({children: [$], className: A.properties.className})),
              P = x(F, R)
            m.push(P)
          } else if (T === C.length - 1) {
            var D = d[p + 1] && d[p + 1].children && d[p + 1].children[0],
              L = {type: 'text', value: ''.concat(O)}
            if (D) {
              var N = sn({children: [L], className: A.properties.className})
              d.splice(p + 1, 0, N)
            } else {
              var V = [L],
                B = x(V, R, A.properties.className)
              m.push(B)
            }
          } else {
            var H = [$],
              X = x(H, R, A.properties.className)
            m.push(X)
          }
        }),
          (f = p)
      }
      p++
    };
    p < d.length;

  )
    y()
  if (f !== d.length - 1) {
    var w = d.slice(f + 1, d.length)
    if (w && w.length) {
      var v = n && m.length + l,
        E = x(w, v)
      m.push(E)
    }
  }
  return t ? m : (c = []).concat.apply(c, m)
}
function h5(e) {
  var t = e.rows,
    r = e.stylesheet,
    n = e.useInlineStyles
  return t.map(function (o, l) {
    return $o({
      node: o,
      stylesheet: r,
      useInlineStyles: n,
      key: 'code-segement'.concat(l),
    })
  })
}
function cu(e) {
  return e && typeof e.highlightAuto < 'u'
}
function b5(e) {
  var t = e.astGenerator,
    r = e.language,
    n = e.code,
    o = e.defaultCodeValue
  if (cu(t)) {
    var l = s5(t, r)
    return r === 'text'
      ? {value: o, language: 'text'}
      : l
      ? t.highlight(r, n)
      : t.highlightAuto(n)
  }
  try {
    return r && r !== 'text' ? {value: t.highlight(n, r)} : {value: o}
  } catch {
    return {value: o}
  }
}
function y5(e, t) {
  return function (r) {
    var n = r.language,
      o = r.children,
      l = r.style,
      i = l === void 0 ? t : l,
      u = r.customStyle,
      s = u === void 0 ? {} : u,
      c = r.codeTagProps,
      d =
        c === void 0
          ? {
              className: n ? 'language-'.concat(n) : void 0,
              style: Qe(
                Qe({}, i['code[class*="language-"]']),
                i['code[class*="language-'.concat(n, '"]')]
              ),
            }
          : c,
      m = r.useInlineStyles,
      f = m === void 0 ? !0 : m,
      p = r.showLineNumbers,
      h = p === void 0 ? !1 : p,
      g = r.showInlineLineNumbers,
      x = g === void 0 ? !0 : g,
      y = r.startingLineNumber,
      w = y === void 0 ? 1 : y,
      v = r.lineNumberContainerStyle,
      E = r.lineNumberStyle,
      A = E === void 0 ? {} : E,
      S = r.wrapLines,
      k = r.wrapLongLines,
      C = k === void 0 ? !1 : k,
      O = r.lineProps,
      T = O === void 0 ? {} : O,
      R = r.renderer,
      $ = r.PreTag,
      F = $ === void 0 ? 'pre' : $,
      P = r.CodeTag,
      D = P === void 0 ? 'code' : P,
      L = r.code,
      N = L === void 0 ? (Array.isArray(o) ? o[0] : o) || '' : L,
      V = r.astGenerator,
      B = K2(r, u5)
    V = V || e
    var H = h
        ? a.createElement(f5, {
            containerStyle: v,
            codeStyle: d.style || {},
            numberStyle: A,
            startingLineNumber: w,
            codeString: N,
          })
        : null,
      X = i.hljs || i['pre[class*="language-"]'] || {backgroundColor: '#fff'},
      ne = cu(V) ? 'hljs' : 'prismjs',
      K = f
        ? Object.assign({}, B, {style: Object.assign({}, X, s)})
        : Object.assign({}, B, {
            className: B.className
              ? ''.concat(ne, ' ').concat(B.className)
              : ne,
            style: Object.assign({}, s),
          })
    if (
      (C
        ? (d.style = Qe(Qe({}, d.style), {}, {whiteSpace: 'pre-wrap'}))
        : (d.style = Qe(Qe({}, d.style), {}, {whiteSpace: 'pre'})),
      !V)
    )
      return a.createElement(F, K, H, a.createElement(D, d, N))
    ;((S === void 0 && R) || C) && (S = !0), (R = R || h5)
    var J = [{type: 'text', value: N}],
      I = b5({astGenerator: V, language: n, code: N, defaultCodeValue: J})
    I.language === null && (I.value = J)
    var z = I.value.length + w,
      W = g5(I, S, T, h, x, w, z, A, C)
    return a.createElement(
      F,
      K,
      a.createElement(
        D,
        d,
        !x && H,
        R({rows: W, stylesheet: i, useInlineStyles: f})
      )
    )
  }
}
var Do = _e(x2()),
  Lo = y5(Do.default, {})
Lo.registerLanguage = function (e, t) {
  return Do.default.register(t)
}
Lo.alias = function (e, t) {
  return Do.default.alias(e, t)
}
var Oe = Lo,
  v5 = _.div(({theme: e}) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    maxWidth: '100%',
    display: 'flex',
    background: e.background.content,
    zIndex: 1,
  })),
  du = _.button(
    ({theme: e}) => ({
      margin: 0,
      border: '0 none',
      padding: '4px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: '4px 0 0 0',
      '&:not(:last-child)': {borderRight: `1px solid ${e.appBorderColor}`},
      '& + *': {borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0},
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: '0 none',
      },
    }),
    ({disabled: e}) => e && {cursor: 'not-allowed', opacity: 0.5}
  )
du.displayName = 'ActionButton'
var Mo = ({actionItems: e, ...t}) =>
  a.createElement(
    v5,
    {...t},
    e.map(({title: r, className: n, onClick: o, disabled: l}, i) =>
      a.createElement(du, {key: i, className: n, onClick: o, disabled: l}, r)
    )
  )
function E5(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function pu(...e) {
  return (t) => e.forEach((r) => E5(r, t))
}
function Zt(...e) {
  return b.useCallback(pu(...e), e)
}
var fu = b.forwardRef((e, t) => {
  let {children: r, ...n} = e,
    o = b.Children.toArray(r),
    l = o.find(w5)
  if (l) {
    let i = l.props.children,
      u = o.map((s) =>
        s === l
          ? b.Children.count(i) > 1
            ? b.Children.only(null)
            : b.isValidElement(i)
            ? i.props.children
            : null
          : s
      )
    return b.createElement(
      Ga,
      U({}, n, {ref: t}),
      b.isValidElement(i) ? b.cloneElement(i, void 0, u) : null
    )
  }
  return b.createElement(Ga, U({}, n, {ref: t}), r)
})
fu.displayName = 'Slot'
var Ga = b.forwardRef((e, t) => {
  let {children: r, ...n} = e
  return b.isValidElement(r)
    ? b.cloneElement(r, {...A5(n, r.props), ref: t ? pu(t, r.ref) : r.ref})
    : b.Children.count(r) > 1
    ? b.Children.only(null)
    : null
})
Ga.displayName = 'SlotClone'
var x5 = ({children: e}) => b.createElement(b.Fragment, null, e)
function w5(e) {
  return b.isValidElement(e) && e.type === x5
}
function A5(e, t) {
  let r = {...t}
  for (let n in t) {
    let o = e[n],
      l = t[n]
    ;/^on[A-Z]/.test(n)
      ? o && l
        ? (r[n] = (...i) => {
            l(...i), o(...i)
          })
        : o && (r[n] = o)
      : n === 'style'
      ? (r[n] = {...o, ...l})
      : n === 'className' && (r[n] = [o, l].filter(Boolean).join(' '))
  }
  return {...e, ...r}
}
var S5 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  jr = S5.reduce((e, t) => {
    let r = b.forwardRef((n, o) => {
      let {asChild: l, ...i} = n,
        u = l ? fu : t
      return (
        b.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0
        }, []),
        b.createElement(u, U({}, i, {ref: o}))
      )
    })
    return (r.displayName = `Primitive.${t}`), {...e, [t]: r}
  }, {}),
  Ya = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
function C5(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e)
}
var Hr = (e) => {
  let {present: t, children: r} = e,
    n = k5(t),
    o = typeof r == 'function' ? r({present: n.isPresent}) : b.Children.only(r),
    l = Zt(n.ref, o.ref)
  return typeof r == 'function' || n.isPresent
    ? b.cloneElement(o, {ref: l})
    : null
}
Hr.displayName = 'Presence'
function k5(e) {
  let [t, r] = b.useState(),
    n = b.useRef({}),
    o = b.useRef(e),
    l = b.useRef('none'),
    i = e ? 'mounted' : 'unmounted',
    [u, s] = C5(i, {
      mounted: {UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended'},
      unmountSuspended: {MOUNT: 'mounted', ANIMATION_END: 'unmounted'},
      unmounted: {MOUNT: 'mounted'},
    })
  return (
    b.useEffect(() => {
      let c = Kr(n.current)
      l.current = u === 'mounted' ? c : 'none'
    }, [u]),
    Ya(() => {
      let c = n.current,
        d = o.current
      if (d !== e) {
        let m = l.current,
          f = Kr(c)
        e
          ? s('MOUNT')
          : f === 'none' || (c == null ? void 0 : c.display) === 'none'
          ? s('UNMOUNT')
          : s(d && m !== f ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e)
      }
    }, [e, s]),
    Ya(() => {
      if (t) {
        let c = (m) => {
            let f = Kr(n.current).includes(m.animationName)
            m.target === t && f && Cs.flushSync(() => s('ANIMATION_END'))
          },
          d = (m) => {
            m.target === t && (l.current = Kr(n.current))
          }
        return (
          t.addEventListener('animationstart', d),
          t.addEventListener('animationcancel', c),
          t.addEventListener('animationend', c),
          () => {
            t.removeEventListener('animationstart', d),
              t.removeEventListener('animationcancel', c),
              t.removeEventListener('animationend', c)
          }
        )
      } else s('ANIMATION_END')
    }, [t, s]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(u),
      ref: b.useCallback((c) => {
        c && (n.current = getComputedStyle(c)), r(c)
      }, []),
    }
  )
}
function Kr(e) {
  return (e == null ? void 0 : e.animationName) || 'none'
}
function _5(e, t = []) {
  let r = []
  function n(l, i) {
    let u = b.createContext(i),
      s = r.length
    r = [...r, i]
    function c(m) {
      let {scope: f, children: p, ...h} = m,
        g = (f == null ? void 0 : f[e][s]) || u,
        x = b.useMemo(() => h, Object.values(h))
      return b.createElement(g.Provider, {value: x}, p)
    }
    function d(m, f) {
      let p = (f == null ? void 0 : f[e][s]) || u,
        h = b.useContext(p)
      if (h) return h
      if (i !== void 0) return i
      throw new Error(`\`${m}\` must be used within \`${l}\``)
    }
    return (c.displayName = l + 'Provider'), [c, d]
  }
  let o = () => {
    let l = r.map((i) => b.createContext(i))
    return function (i) {
      let u = (i == null ? void 0 : i[e]) || l
      return b.useMemo(() => ({[`__scope${e}`]: {...i, [e]: u}}), [i, u])
    }
  }
  return (o.scopeName = e), [n, O5(o, ...t)]
}
function O5(...e) {
  let t = e[0]
  if (e.length === 1) return t
  let r = () => {
    let n = e.map((o) => ({useScope: o(), scopeName: o.scopeName}))
    return function (o) {
      let l = n.reduce((i, {useScope: u, scopeName: s}) => {
        let c = u(o)[`__scope${s}`]
        return {...i, ...c}
      }, {})
      return b.useMemo(() => ({[`__scope${t.scopeName}`]: l}), [l])
    }
  }
  return (r.scopeName = t.scopeName), r
}
function Lt(e) {
  let t = b.useRef(e)
  return (
    b.useEffect(() => {
      t.current = e
    }),
    b.useMemo(
      () =>
        (...r) => {
          var n
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...r)
        },
      []
    )
  )
}
var T5 = b.createContext(void 0)
function R5(e) {
  let t = b.useContext(T5)
  return e || t || 'ltr'
}
function F5(e, [t, r]) {
  return Math.min(r, Math.max(t, e))
}
function Bt(e, t, {checkForDefaultPrevented: r = !0} = {}) {
  return function (n) {
    if ((e == null || e(n), r === !1 || !n.defaultPrevented))
      return t == null ? void 0 : t(n)
  }
}
function $5(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e)
}
var mu = 'ScrollArea',
  [gu, qw] = _5(mu),
  [D5, Be] = gu(mu),
  L5 = b.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        type: n = 'hover',
        dir: o,
        scrollHideDelay: l = 600,
        ...i
      } = e,
      [u, s] = b.useState(null),
      [c, d] = b.useState(null),
      [m, f] = b.useState(null),
      [p, h] = b.useState(null),
      [g, x] = b.useState(null),
      [y, w] = b.useState(0),
      [v, E] = b.useState(0),
      [A, S] = b.useState(!1),
      [k, C] = b.useState(!1),
      O = Zt(t, (R) => s(R)),
      T = R5(o)
    return b.createElement(
      D5,
      {
        scope: r,
        type: n,
        dir: T,
        scrollHideDelay: l,
        scrollArea: u,
        viewport: c,
        onViewportChange: d,
        content: m,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: h,
        scrollbarXEnabled: A,
        onScrollbarXEnabledChange: S,
        scrollbarY: g,
        onScrollbarYChange: x,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: C,
        onCornerWidthChange: w,
        onCornerHeightChange: E,
      },
      b.createElement(
        jr.div,
        U({dir: T}, i, {
          ref: O,
          style: {
            position: 'relative',
            '--radix-scroll-area-corner-width': y + 'px',
            '--radix-scroll-area-corner-height': v + 'px',
            ...e.style,
          },
        })
      )
    )
  }),
  M5 = 'ScrollAreaViewport',
  B5 = b.forwardRef((e, t) => {
    let {__scopeScrollArea: r, children: n, ...o} = e,
      l = Be(M5, r),
      i = b.useRef(null),
      u = Zt(t, i, l.onViewportChange)
    return b.createElement(
      b.Fragment,
      null,
      b.createElement('style', {
        dangerouslySetInnerHTML: {
          __html:
            '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
        },
      }),
      b.createElement(
        jr.div,
        U({'data-radix-scroll-area-viewport': ''}, o, {
          ref: u,
          style: {
            overflowX: l.scrollbarXEnabled ? 'scroll' : 'hidden',
            overflowY: l.scrollbarYEnabled ? 'scroll' : 'hidden',
            ...e.style,
          },
        }),
        b.createElement(
          'div',
          {ref: l.onContentChange, style: {minWidth: '100%', display: 'table'}},
          n
        )
      )
    )
  }),
  ft = 'ScrollAreaScrollbar',
  I5 = b.forwardRef((e, t) => {
    let {forceMount: r, ...n} = e,
      o = Be(ft, e.__scopeScrollArea),
      {onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i} = o,
      u = e.orientation === 'horizontal'
    return (
      b.useEffect(
        () => (
          u ? l(!0) : i(!0),
          () => {
            u ? l(!1) : i(!1)
          }
        ),
        [u, l, i]
      ),
      o.type === 'hover'
        ? b.createElement(P5, U({}, n, {ref: t, forceMount: r}))
        : o.type === 'scroll'
        ? b.createElement(N5, U({}, n, {ref: t, forceMount: r}))
        : o.type === 'auto'
        ? b.createElement(hu, U({}, n, {ref: t, forceMount: r}))
        : o.type === 'always'
        ? b.createElement(Bo, U({}, n, {ref: t}))
        : null
    )
  }),
  P5 = b.forwardRef((e, t) => {
    let {forceMount: r, ...n} = e,
      o = Be(ft, e.__scopeScrollArea),
      [l, i] = b.useState(!1)
    return (
      b.useEffect(() => {
        let u = o.scrollArea,
          s = 0
        if (u) {
          let c = () => {
              window.clearTimeout(s), i(!0)
            },
            d = () => {
              s = window.setTimeout(() => i(!1), o.scrollHideDelay)
            }
          return (
            u.addEventListener('pointerenter', c),
            u.addEventListener('pointerleave', d),
            () => {
              window.clearTimeout(s),
                u.removeEventListener('pointerenter', c),
                u.removeEventListener('pointerleave', d)
            }
          )
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      b.createElement(
        Hr,
        {present: r || l},
        b.createElement(
          hu,
          U({'data-state': l ? 'visible' : 'hidden'}, n, {ref: t})
        )
      )
    )
  }),
  N5 = b.forwardRef((e, t) => {
    let {forceMount: r, ...n} = e,
      o = Be(ft, e.__scopeScrollArea),
      l = e.orientation === 'horizontal',
      i = Nn(() => s('SCROLL_END'), 100),
      [u, s] = $5('hidden', {
        hidden: {SCROLL: 'scrolling'},
        scrolling: {SCROLL_END: 'idle', POINTER_ENTER: 'interacting'},
        interacting: {SCROLL: 'interacting', POINTER_LEAVE: 'idle'},
        idle: {
          HIDE: 'hidden',
          SCROLL: 'scrolling',
          POINTER_ENTER: 'interacting',
        },
      })
    return (
      b.useEffect(() => {
        if (u === 'idle') {
          let c = window.setTimeout(() => s('HIDE'), o.scrollHideDelay)
          return () => window.clearTimeout(c)
        }
      }, [u, o.scrollHideDelay, s]),
      b.useEffect(() => {
        let c = o.viewport,
          d = l ? 'scrollLeft' : 'scrollTop'
        if (c) {
          let m = c[d],
            f = () => {
              let p = c[d]
              m !== p && (s('SCROLL'), i()), (m = p)
            }
          return (
            c.addEventListener('scroll', f),
            () => c.removeEventListener('scroll', f)
          )
        }
      }, [o.viewport, l, s, i]),
      b.createElement(
        Hr,
        {present: r || u !== 'hidden'},
        b.createElement(
          Bo,
          U({'data-state': u === 'hidden' ? 'hidden' : 'visible'}, n, {
            ref: t,
            onPointerEnter: Bt(e.onPointerEnter, () => s('POINTER_ENTER')),
            onPointerLeave: Bt(e.onPointerLeave, () => s('POINTER_LEAVE')),
          })
        )
      )
    )
  }),
  hu = b.forwardRef((e, t) => {
    let r = Be(ft, e.__scopeScrollArea),
      {forceMount: n, ...o} = e,
      [l, i] = b.useState(!1),
      u = e.orientation === 'horizontal',
      s = Nn(() => {
        if (r.viewport) {
          let c = r.viewport.offsetWidth < r.viewport.scrollWidth,
            d = r.viewport.offsetHeight < r.viewport.scrollHeight
          i(u ? c : d)
        }
      }, 10)
    return (
      er(r.viewport, s),
      er(r.content, s),
      b.createElement(
        Hr,
        {present: n || l},
        b.createElement(
          Bo,
          U({'data-state': l ? 'visible' : 'hidden'}, o, {ref: t})
        )
      )
    )
  }),
  Bo = b.forwardRef((e, t) => {
    let {orientation: r = 'vertical', ...n} = e,
      o = Be(ft, e.__scopeScrollArea),
      l = b.useRef(null),
      i = b.useRef(0),
      [u, s] = b.useState({
        content: 0,
        viewport: 0,
        scrollbar: {size: 0, paddingStart: 0, paddingEnd: 0},
      }),
      c = Eu(u.viewport, u.content),
      d = {
        ...n,
        sizes: u,
        onSizesChange: s,
        hasThumb: c > 0 && c < 1,
        onThumbChange: (f) => (l.current = f),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (f) => (i.current = f),
      }
    function m(f, p) {
      return W5(f, i.current, u, p)
    }
    return r === 'horizontal'
      ? b.createElement(
          j5,
          U({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                let f = o.viewport.scrollLeft,
                  p = ei(f, u, o.dir)
                l.current.style.transform = `translate3d(${p}px, 0, 0)`
              }
            },
            onWheelScroll: (f) => {
              o.viewport && (o.viewport.scrollLeft = f)
            },
            onDragScroll: (f) => {
              o.viewport && (o.viewport.scrollLeft = m(f, o.dir))
            },
          })
        )
      : r === 'vertical'
      ? b.createElement(
          H5,
          U({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                let f = o.viewport.scrollTop,
                  p = ei(f, u)
                l.current.style.transform = `translate3d(0, ${p}px, 0)`
              }
            },
            onWheelScroll: (f) => {
              o.viewport && (o.viewport.scrollTop = f)
            },
            onDragScroll: (f) => {
              o.viewport && (o.viewport.scrollTop = m(f))
            },
          })
        )
      : null
  }),
  j5 = b.forwardRef((e, t) => {
    let {sizes: r, onSizesChange: n, ...o} = e,
      l = Be(ft, e.__scopeScrollArea),
      [i, u] = b.useState(),
      s = b.useRef(null),
      c = Zt(t, s, l.onScrollbarXChange)
    return (
      b.useEffect(() => {
        s.current && u(getComputedStyle(s.current))
      }, [s]),
      b.createElement(
        yu,
        U({'data-orientation': 'horizontal'}, o, {
          ref: c,
          sizes: r,
          style: {
            bottom: 0,
            left: l.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
            right:
              l.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
            '--radix-scroll-area-thumb-width': Pn(r) + 'px',
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
          onDragScroll: (d) => e.onDragScroll(d.x),
          onWheelScroll: (d, m) => {
            if (l.viewport) {
              let f = l.viewport.scrollLeft + d.deltaX
              e.onWheelScroll(f), wu(f, m) && d.preventDefault()
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              n({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: En(i.paddingLeft),
                  paddingEnd: En(i.paddingRight),
                },
              })
          },
        })
      )
    )
  }),
  H5 = b.forwardRef((e, t) => {
    let {sizes: r, onSizesChange: n, ...o} = e,
      l = Be(ft, e.__scopeScrollArea),
      [i, u] = b.useState(),
      s = b.useRef(null),
      c = Zt(t, s, l.onScrollbarYChange)
    return (
      b.useEffect(() => {
        s.current && u(getComputedStyle(s.current))
      }, [s]),
      b.createElement(
        yu,
        U({'data-orientation': 'vertical'}, o, {
          ref: c,
          sizes: r,
          style: {
            top: 0,
            right: l.dir === 'ltr' ? 0 : void 0,
            left: l.dir === 'rtl' ? 0 : void 0,
            bottom: 'var(--radix-scroll-area-corner-height)',
            '--radix-scroll-area-thumb-height': Pn(r) + 'px',
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
          onDragScroll: (d) => e.onDragScroll(d.y),
          onWheelScroll: (d, m) => {
            if (l.viewport) {
              let f = l.viewport.scrollTop + d.deltaY
              e.onWheelScroll(f), wu(f, m) && d.preventDefault()
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              n({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: En(i.paddingTop),
                  paddingEnd: En(i.paddingBottom),
                },
              })
          },
        })
      )
    )
  }),
  [Z5, bu] = gu(ft),
  yu = b.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        sizes: n,
        hasThumb: o,
        onThumbChange: l,
        onThumbPointerUp: i,
        onThumbPointerDown: u,
        onThumbPositionChange: s,
        onDragScroll: c,
        onWheelScroll: d,
        onResize: m,
        ...f
      } = e,
      p = Be(ft, r),
      [h, g] = b.useState(null),
      x = Zt(t, (O) => g(O)),
      y = b.useRef(null),
      w = b.useRef(''),
      v = p.viewport,
      E = n.content - n.viewport,
      A = Lt(d),
      S = Lt(s),
      k = Nn(m, 10)
    function C(O) {
      if (y.current) {
        let T = O.clientX - y.current.left,
          R = O.clientY - y.current.top
        c({x: T, y: R})
      }
    }
    return (
      b.useEffect(() => {
        let O = (T) => {
          let R = T.target
          h != null && h.contains(R) && A(T, E)
        }
        return (
          document.addEventListener('wheel', O, {passive: !1}),
          () => document.removeEventListener('wheel', O, {passive: !1})
        )
      }, [v, h, E, A]),
      b.useEffect(S, [n, S]),
      er(h, k),
      er(p.content, k),
      b.createElement(
        Z5,
        {
          scope: r,
          scrollbar: h,
          hasThumb: o,
          onThumbChange: Lt(l),
          onThumbPointerUp: Lt(i),
          onThumbPositionChange: S,
          onThumbPointerDown: Lt(u),
        },
        b.createElement(
          jr.div,
          U({}, f, {
            ref: x,
            style: {position: 'absolute', ...f.style},
            onPointerDown: Bt(e.onPointerDown, (O) => {
              O.button === 0 &&
                (O.target.setPointerCapture(O.pointerId),
                (y.current = h.getBoundingClientRect()),
                (w.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = 'none'),
                p.viewport && (p.viewport.style.scrollBehavior = 'auto'),
                C(O))
            }),
            onPointerMove: Bt(e.onPointerMove, C),
            onPointerUp: Bt(e.onPointerUp, (O) => {
              let T = O.target
              T.hasPointerCapture(O.pointerId) &&
                T.releasePointerCapture(O.pointerId),
                (document.body.style.webkitUserSelect = w.current),
                p.viewport && (p.viewport.style.scrollBehavior = ''),
                (y.current = null)
            }),
          })
        )
      )
    )
  }),
  Ka = 'ScrollAreaThumb',
  V5 = b.forwardRef((e, t) => {
    let {forceMount: r, ...n} = e,
      o = bu(Ka, e.__scopeScrollArea)
    return b.createElement(
      Hr,
      {present: r || o.hasThumb},
      b.createElement(z5, U({ref: t}, n))
    )
  }),
  z5 = b.forwardRef((e, t) => {
    let {__scopeScrollArea: r, style: n, ...o} = e,
      l = Be(Ka, r),
      i = bu(Ka, r),
      {onThumbPositionChange: u} = i,
      s = Zt(t, (m) => i.onThumbChange(m)),
      c = b.useRef(),
      d = Nn(() => {
        c.current && (c.current(), (c.current = void 0))
      }, 100)
    return (
      b.useEffect(() => {
        let m = l.viewport
        if (m) {
          let f = () => {
            if ((d(), !c.current)) {
              let p = G5(m, u)
              ;(c.current = p), u()
            }
          }
          return (
            u(),
            m.addEventListener('scroll', f),
            () => m.removeEventListener('scroll', f)
          )
        }
      }, [l.viewport, d, u]),
      b.createElement(
        jr.div,
        U({'data-state': i.hasThumb ? 'visible' : 'hidden'}, o, {
          ref: s,
          style: {
            width: 'var(--radix-scroll-area-thumb-width)',
            height: 'var(--radix-scroll-area-thumb-height)',
            ...n,
          },
          onPointerDownCapture: Bt(e.onPointerDownCapture, (m) => {
            let f = m.target.getBoundingClientRect(),
              p = m.clientX - f.left,
              h = m.clientY - f.top
            i.onThumbPointerDown({x: p, y: h})
          }),
          onPointerUp: Bt(e.onPointerUp, i.onThumbPointerUp),
        })
      )
    )
  }),
  vu = 'ScrollAreaCorner',
  q5 = b.forwardRef((e, t) => {
    let r = Be(vu, e.__scopeScrollArea),
      n = !!(r.scrollbarX && r.scrollbarY)
    return r.type !== 'scroll' && n
      ? b.createElement(U5, U({}, e, {ref: t}))
      : null
  }),
  U5 = b.forwardRef((e, t) => {
    let {__scopeScrollArea: r, ...n} = e,
      o = Be(vu, r),
      [l, i] = b.useState(0),
      [u, s] = b.useState(0),
      c = !!(l && u)
    return (
      er(o.scrollbarX, () => {
        var d
        let m =
          ((d = o.scrollbarX) === null || d === void 0
            ? void 0
            : d.offsetHeight) || 0
        o.onCornerHeightChange(m), s(m)
      }),
      er(o.scrollbarY, () => {
        var d
        let m =
          ((d = o.scrollbarY) === null || d === void 0
            ? void 0
            : d.offsetWidth) || 0
        o.onCornerWidthChange(m), i(m)
      }),
      c
        ? b.createElement(
            jr.div,
            U({}, n, {
              ref: t,
              style: {
                width: l,
                height: u,
                position: 'absolute',
                right: o.dir === 'ltr' ? 0 : void 0,
                left: o.dir === 'rtl' ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          )
        : null
    )
  })
function En(e) {
  return e ? parseInt(e, 10) : 0
}
function Eu(e, t) {
  let r = e / t
  return isNaN(r) ? 0 : r
}
function Pn(e) {
  let t = Eu(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    n = (e.scrollbar.size - r) * t
  return Math.max(n, 18)
}
function W5(e, t, r, n = 'ltr') {
  let o = Pn(r),
    l = o / 2,
    i = t || l,
    u = o - i,
    s = r.scrollbar.paddingStart + i,
    c = r.scrollbar.size - r.scrollbar.paddingEnd - u,
    d = r.content - r.viewport,
    m = n === 'ltr' ? [0, d] : [d * -1, 0]
  return xu([s, c], m)(e)
}
function ei(e, t, r = 'ltr') {
  let n = Pn(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - o,
    i = t.content - t.viewport,
    u = l - n,
    s = r === 'ltr' ? [0, i] : [i * -1, 0],
    c = F5(e, s)
  return xu([0, i], [0, u])(c)
}
function xu(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0]
    let n = (t[1] - t[0]) / (e[1] - e[0])
    return t[0] + n * (r - e[0])
  }
}
function wu(e, t) {
  return e > 0 && e < t
}
var G5 = (e, t = () => {}) => {
  let r = {left: e.scrollLeft, top: e.scrollTop},
    n = 0
  return (
    (function o() {
      let l = {left: e.scrollLeft, top: e.scrollTop},
        i = r.left !== l.left,
        u = r.top !== l.top
      ;(i || u) && t(), (r = l), (n = window.requestAnimationFrame(o))
    })(),
    () => window.cancelAnimationFrame(n)
  )
}
function Nn(e, t) {
  let r = Lt(e),
    n = b.useRef(0)
  return (
    b.useEffect(() => () => window.clearTimeout(n.current), []),
    b.useCallback(() => {
      window.clearTimeout(n.current), (n.current = window.setTimeout(r, t))
    }, [r, t])
  )
}
function er(e, t) {
  let r = Lt(t)
  Ya(() => {
    let n = 0
    if (e) {
      let o = new ResizeObserver(() => {
        cancelAnimationFrame(n), (n = window.requestAnimationFrame(r))
      })
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(n), o.unobserve(e)
        }
      )
    }
  }, [e, r])
}
var Y5 = L5,
  K5 = B5,
  X5 = I5,
  J5 = V5,
  Q5 = q5,
  ef = _(Y5)(({scrollbarsize: e, offset: t}) => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '--scrollbar-size': `${e + t}px`,
    '--radix-scroll-area-thumb-width': `${e}px`,
  })),
  tf = _(K5)({width: '100%', height: '100%'}),
  ti = _(X5)(({offset: e, horizontal: t, vertical: r}) => ({
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    background: 'transparent',
    transition: 'all 0.2s ease-out',
    borderRadius: 'var(--scrollbar-size)',
    '&[data-orientation="vertical"]': {
      width: 'var(--scrollbar-size)',
      paddingRight: e,
      marginTop: e,
      marginBottom: t === 'true' && r === 'true' ? 0 : e,
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: 'var(--scrollbar-size)',
      paddingBottom: e,
      marginLeft: e,
      marginRight: t === 'true' && r === 'true' ? 0 : e,
    },
  })),
  ri = _(J5)(({theme: e}) => ({
    flex: 1,
    background: e.textMutedColor,
    opacity: 0.5,
    borderRadius: 'var(--scrollbar-size)',
    position: 'relative',
    transition: 'opacity 0.2s ease-out',
    '&:hover': {opacity: 0.8},
    '::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '100%',
      height: '100%',
      minWidth: 44,
      minHeight: 44,
    },
  })),
  Io = ({
    children: e,
    horizontal: t = !1,
    vertical: r = !1,
    offset: n = 2,
    scrollbarSize: o = 6,
    className: l,
  }) =>
    a.createElement(
      ef,
      {scrollbarsize: o, offset: n, className: l},
      a.createElement(tf, null, e),
      t &&
        a.createElement(
          ti,
          {
            orientation: 'horizontal',
            offset: n,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          a.createElement(ri, null)
        ),
      r &&
        a.createElement(
          ti,
          {
            orientation: 'vertical',
            offset: n,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          a.createElement(ri, null)
        ),
      t && r && a.createElement(Q5, null)
    ),
  {navigator: Xr, document: br, window: rf} = _2
Oe.registerLanguage('jsextra', M2)
Oe.registerLanguage('jsx', T2)
Oe.registerLanguage('json', I2)
Oe.registerLanguage('yml', q2)
Oe.registerLanguage('md', V2)
Oe.registerLanguage('bash', F2)
Oe.registerLanguage('css', D2)
Oe.registerLanguage('html', H2)
Oe.registerLanguage('tsx', W2)
Oe.registerLanguage('typescript', Y2)
Oe.registerLanguage('graphql', N2)
var nf = Ht(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [r, n]) => ({...t, [`* .${r}`]: n}),
      {}
    )
  ),
  af = Au()
function Au() {
  return Xr != null && Xr.clipboard
    ? (e) => Xr.clipboard.writeText(e)
    : async (e) => {
        let t = br.createElement('TEXTAREA'),
          r = br.activeElement
        ;(t.value = e),
          br.body.appendChild(t),
          t.select(),
          br.execCommand('copy'),
          br.body.removeChild(t),
          r.focus()
      }
}
var of = _.div(
    ({theme: e}) => ({
      position: 'relative',
      overflow: 'hidden',
      color: e.color.defaultText,
    }),
    ({theme: e, bordered: t}) =>
      t
        ? {
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.borderRadius,
            background: e.background.content,
          }
        : {},
    ({showLineNumbers: e}) =>
      e
        ? {
            '.react-syntax-highlighter-line-number::before': {
              content: 'attr(data-line-number)',
            },
          }
        : {}
  ),
  lf = ({children: e, className: t}) =>
    a.createElement(Io, {horizontal: !0, vertical: !0, className: t}, e),
  sf = _(lf)({position: 'relative'}, ({theme: e}) => nf(e)),
  uf = _.pre(({theme: e, padded: t}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  cf = _.div(({theme: e}) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1,
  })),
  Su = (e) => {
    let t = [...e.children],
      r = t[0],
      n = r.children[0].value,
      o = {
        ...r,
        children: [],
        properties: {
          ...r.properties,
          'data-line-number': n,
          style: {...r.properties.style, userSelect: 'auto'},
        },
      }
    return (t[0] = o), {...e, children: t}
  },
  df = ({rows: e, stylesheet: t, useInlineStyles: r}) =>
    e.map((n, o) =>
      $o({
        node: Su(n),
        stylesheet: t,
        useInlineStyles: r,
        key: `code-segement${o}`,
      })
    ),
  pf = (e, t) =>
    t
      ? e
        ? ({rows: r, ...n}) => e({rows: r.map((o) => Su(o)), ...n})
        : df
      : e,
  Po = ({
    children: e,
    language: t = 'jsx',
    copyable: r = !1,
    bordered: n = !1,
    padded: o = !1,
    format: l = !0,
    formatter: i = null,
    className: u = null,
    showLineNumbers: s = !1,
    ...c
  }) => {
    if (typeof e != 'string' || !e.trim()) return null
    let d = i ? i(l, e) : e.trim(),
      [m, f] = b.useState(!1),
      p = b.useCallback(
        (g) => {
          g.preventDefault(),
            af(d)
              .then(() => {
                f(!0), rf.setTimeout(() => f(!1), 1500)
              })
              .catch(k2.error)
        },
        [d]
      ),
      h = pf(c.renderer, s)
    return a.createElement(
      of,
      {bordered: n, padded: o, showLineNumbers: s, className: u},
      a.createElement(
        sf,
        null,
        a.createElement(
          Oe,
          {
            padded: o || n,
            language: t,
            showLineNumbers: s,
            showInlineLineNumbers: s,
            useInlineStyles: !1,
            PreTag: uf,
            CodeTag: cf,
            lineNumberContainerStyle: {},
            ...c,
            renderer: h,
          },
          d
        )
      ),
      r
        ? a.createElement(Mo, {
            actionItems: [{title: m ? 'Copied' : 'Copy', onClick: p}],
          })
        : null
    )
  }
Po.registerLanguage = (...e) => Oe.registerLanguage(...e)
var Uw = Po
const {global: ff} = __STORYBOOK_MODULE_GLOBAL__
var mf = Z({
    '../../node_modules/react-fast-compare/index.js'(e, t) {
      var r = typeof Element < 'u',
        n = typeof Map == 'function',
        o = typeof Set == 'function',
        l = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
      function i(u, s) {
        if (u === s) return !0
        if (u && s && typeof u == 'object' && typeof s == 'object') {
          if (u.constructor !== s.constructor) return !1
          var c, d, m
          if (Array.isArray(u)) {
            if (((c = u.length), c != s.length)) return !1
            for (d = c; d-- !== 0; ) if (!i(u[d], s[d])) return !1
            return !0
          }
          var f
          if (n && u instanceof Map && s instanceof Map) {
            if (u.size !== s.size) return !1
            for (f = u.entries(); !(d = f.next()).done; )
              if (!s.has(d.value[0])) return !1
            for (f = u.entries(); !(d = f.next()).done; )
              if (!i(d.value[1], s.get(d.value[0]))) return !1
            return !0
          }
          if (o && u instanceof Set && s instanceof Set) {
            if (u.size !== s.size) return !1
            for (f = u.entries(); !(d = f.next()).done; )
              if (!s.has(d.value[0])) return !1
            return !0
          }
          if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
            if (((c = u.length), c != s.length)) return !1
            for (d = c; d-- !== 0; ) if (u[d] !== s[d]) return !1
            return !0
          }
          if (u.constructor === RegExp)
            return u.source === s.source && u.flags === s.flags
          if (
            u.valueOf !== Object.prototype.valueOf &&
            typeof u.valueOf == 'function' &&
            typeof s.valueOf == 'function'
          )
            return u.valueOf() === s.valueOf()
          if (
            u.toString !== Object.prototype.toString &&
            typeof u.toString == 'function' &&
            typeof s.toString == 'function'
          )
            return u.toString() === s.toString()
          if (
            ((m = Object.keys(u)), (c = m.length), c !== Object.keys(s).length)
          )
            return !1
          for (d = c; d-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(s, m[d])) return !1
          if (r && u instanceof Element) return !1
          for (d = c; d-- !== 0; )
            if (
              !(
                (m[d] === '_owner' || m[d] === '__v' || m[d] === '__o') &&
                u.$$typeof
              ) &&
              !i(u[m[d]], s[m[d]])
            )
              return !1
          return !0
        }
        return u !== u && s !== s
      }
      t.exports = function (u, s) {
        try {
          return i(u, s)
        } catch (c) {
          if ((c.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw c
        }
      }
    },
  }),
  ni = function (e) {
    return e.reduce(function (t, r) {
      var n = r[0],
        o = r[1]
      return (t[n] = o), t
    }, {})
  },
  ai =
    typeof window < 'u' && window.document && window.document.createElement
      ? b.useLayoutEffect
      : b.useEffect,
  we = 'top',
  Le = 'bottom',
  Me = 'right',
  Ae = 'left',
  jn = 'auto',
  Zr = [we, Le, Me, Ae],
  tr = 'start',
  Fr = 'end',
  gf = 'clippingParents',
  Cu = 'viewport',
  yr = 'popper',
  hf = 'reference',
  oi = Zr.reduce(function (e, t) {
    return e.concat([t + '-' + tr, t + '-' + Fr])
  }, []),
  ku = [].concat(Zr, [jn]).reduce(function (e, t) {
    return e.concat([t, t + '-' + tr, t + '-' + Fr])
  }, []),
  bf = 'beforeRead',
  yf = 'read',
  vf = 'afterRead',
  Ef = 'beforeMain',
  xf = 'main',
  wf = 'afterMain',
  Af = 'beforeWrite',
  Sf = 'write',
  Cf = 'afterWrite',
  kf = [bf, yf, vf, Ef, xf, wf, Af, Sf, Cf]
function lt(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function ke(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function jt(e) {
  var t = ke(e).Element
  return e instanceof t || e instanceof Element
}
function De(e) {
  var t = ke(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function No(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = ke(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function _f(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      l = t.elements[r]
    !De(l) ||
      !lt(l) ||
      (Object.assign(l.style, n),
      Object.keys(o).forEach(function (i) {
        var u = o[i]
        u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? '' : u)
      }))
  })
}
function Of(e) {
  var t = e.state,
    r = {
      popper: {position: t.options.strategy, left: '0', top: '0', margin: '0'},
      arrow: {position: 'absolute'},
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var o = t.elements[n],
          l = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = i.reduce(function (s, c) {
            return (s[c] = ''), s
          }, {})
        !De(o) ||
          !lt(o) ||
          (Object.assign(o.style, u),
          Object.keys(l).forEach(function (s) {
            o.removeAttribute(s)
          }))
      })
    }
  )
}
var Tf = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: _f,
  effect: Of,
  requires: ['computeStyles'],
}
function ot(e) {
  return e.split('-')[0]
}
var It = Math.max,
  xn = Math.min,
  rr = Math.round
function Xa() {
  var e = navigator.userAgentData
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function _u() {
  return !/^((?!chrome|android).)*safari/i.test(Xa())
}
function nr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    l = 1
  t &&
    De(e) &&
    ((o = (e.offsetWidth > 0 && rr(n.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && rr(n.height) / e.offsetHeight) || 1))
  var i = jt(e) ? ke(e) : window,
    u = i.visualViewport,
    s = !_u() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / o,
    d = (n.top + (s && u ? u.offsetTop : 0)) / l,
    m = n.width / o,
    f = n.height / l
  return {
    width: m,
    height: f,
    top: d,
    right: c + m,
    bottom: d + f,
    left: c,
    x: c,
    y: d,
  }
}
function jo(e) {
  var t = nr(e),
    r = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    {x: e.offsetLeft, y: e.offsetTop, width: r, height: n}
  )
}
function Ou(e, t) {
  var r = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (r && No(r)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function pt(e) {
  return ke(e).getComputedStyle(e)
}
function Rf(e) {
  return ['table', 'td', 'th'].indexOf(lt(e)) >= 0
}
function Ct(e) {
  return ((jt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function Hn(e) {
  return lt(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (No(e) ? e.host : null) || Ct(e)
}
function li(e) {
  return !De(e) || pt(e).position === 'fixed' ? null : e.offsetParent
}
function Ff(e) {
  var t = /firefox/i.test(Xa()),
    r = /Trident/i.test(Xa())
  if (r && De(e)) {
    var n = pt(e)
    if (n.position === 'fixed') return null
  }
  var o = Hn(e)
  for (No(o) && (o = o.host); De(o) && ['html', 'body'].indexOf(lt(o)) < 0; ) {
    var l = pt(o)
    if (
      l.transform !== 'none' ||
      l.perspective !== 'none' ||
      l.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === 'filter') ||
      (t && l.filter && l.filter !== 'none')
    )
      return o
    o = o.parentNode
  }
  return null
}
function Vr(e) {
  for (var t = ke(e), r = li(e); r && Rf(r) && pt(r).position === 'static'; )
    r = li(r)
  return r &&
    (lt(r) === 'html' || (lt(r) === 'body' && pt(r).position === 'static'))
    ? t
    : r || Ff(e) || t
}
function Ho(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function wr(e, t, r) {
  return It(e, xn(t, r))
}
function $f(e, t, r) {
  var n = wr(e, t, r)
  return n > r ? r : n
}
function Tu() {
  return {top: 0, right: 0, bottom: 0, left: 0}
}
function Ru(e) {
  return Object.assign({}, Tu(), e)
}
function Fu(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r
  }, {})
}
var Df = function (e, t) {
  return (
    (e =
      typeof e == 'function'
        ? e(Object.assign({}, t.rects, {placement: t.placement}))
        : e),
    Ru(typeof e != 'number' ? e : Fu(e, Zr))
  )
}
function Lf(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    l = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    u = ot(r.placement),
    s = Ho(u),
    c = [Ae, Me].indexOf(u) >= 0,
    d = c ? 'height' : 'width'
  if (!(!l || !i)) {
    var m = Df(o.padding, r),
      f = jo(l),
      p = s === 'y' ? we : Ae,
      h = s === 'y' ? Le : Me,
      g =
        r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d],
      x = i[s] - r.rects.reference[s],
      y = Vr(l),
      w = y ? (s === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      v = g / 2 - x / 2,
      E = m[p],
      A = w - f[d] - m[h],
      S = w / 2 - f[d] / 2 + v,
      k = wr(E, S, A),
      C = s
    r.modifiersData[n] = ((t = {}), (t[C] = k), (t.centerOffset = k - S), t)
  }
}
function Mf(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Ou(t.elements.popper, o) && (t.elements.arrow = o)))
}
var Bf = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Lf,
  effect: Mf,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function ar(e) {
  return e.split('-')[1]
}
var If = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'}
function Pf(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1
  return {x: rr(r * o) / o || 0, y: rr(n * o) / o || 0}
}
function ii(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    l = e.variation,
    i = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    m = e.isFixed,
    f = i.x,
    p = f === void 0 ? 0 : f,
    h = i.y,
    g = h === void 0 ? 0 : h,
    x = typeof d == 'function' ? d({x: p, y: g}) : {x: p, y: g}
  ;(p = x.x), (g = x.y)
  var y = i.hasOwnProperty('x'),
    w = i.hasOwnProperty('y'),
    v = Ae,
    E = we,
    A = window
  if (c) {
    var S = Vr(r),
      k = 'clientHeight',
      C = 'clientWidth'
    if (
      (S === ke(r) &&
        ((S = Ct(r)),
        pt(S).position !== 'static' &&
          u === 'absolute' &&
          ((k = 'scrollHeight'), (C = 'scrollWidth'))),
      (S = S),
      o === we || ((o === Ae || o === Me) && l === Fr))
    ) {
      E = Le
      var O = m && S === A && A.visualViewport ? A.visualViewport.height : S[k]
      ;(g -= O - n.height), (g *= s ? 1 : -1)
    }
    if (o === Ae || ((o === we || o === Le) && l === Fr)) {
      v = Me
      var T = m && S === A && A.visualViewport ? A.visualViewport.width : S[C]
      ;(p -= T - n.width), (p *= s ? 1 : -1)
    }
  }
  var R = Object.assign({position: u}, c && If),
    $ = d === !0 ? Pf({x: p, y: g}, ke(r)) : {x: p, y: g}
  if (((p = $.x), (g = $.y), s)) {
    var F
    return Object.assign(
      {},
      R,
      ((F = {}),
      (F[E] = w ? '0' : ''),
      (F[v] = y ? '0' : ''),
      (F.transform =
        (A.devicePixelRatio || 1) <= 1
          ? 'translate(' + p + 'px, ' + g + 'px)'
          : 'translate3d(' + p + 'px, ' + g + 'px, 0)'),
      F)
    )
  }
  return Object.assign(
    {},
    R,
    ((t = {}),
    (t[E] = w ? g + 'px' : ''),
    (t[v] = y ? p + 'px' : ''),
    (t.transform = ''),
    t)
  )
}
function Nf(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    l = r.adaptive,
    i = l === void 0 ? !0 : l,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: ot(t.placement),
      variation: ar(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ii(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ii(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: s,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
var jf = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: Nf,
    data: {},
  },
  Jr = {passive: !0}
function Hf(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    l = o === void 0 ? !0 : o,
    i = n.resize,
    u = i === void 0 ? !0 : i,
    s = ke(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    l &&
      c.forEach(function (d) {
        d.addEventListener('scroll', r.update, Jr)
      }),
    u && s.addEventListener('resize', r.update, Jr),
    function () {
      l &&
        c.forEach(function (d) {
          d.removeEventListener('scroll', r.update, Jr)
        }),
        u && s.removeEventListener('resize', r.update, Jr)
    }
  )
}
var Zf = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: Hf,
    data: {},
  },
  Vf = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'}
function un(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Vf[t]
  })
}
var zf = {start: 'end', end: 'start'}
function si(e) {
  return e.replace(/start|end/g, function (t) {
    return zf[t]
  })
}
function Zo(e) {
  var t = ke(e),
    r = t.pageXOffset,
    n = t.pageYOffset
  return {scrollLeft: r, scrollTop: n}
}
function Vo(e) {
  return nr(Ct(e)).left + Zo(e).scrollLeft
}
function qf(e, t) {
  var r = ke(e),
    n = Ct(e),
    o = r.visualViewport,
    l = n.clientWidth,
    i = n.clientHeight,
    u = 0,
    s = 0
  if (o) {
    ;(l = o.width), (i = o.height)
    var c = _u()
    ;(c || (!c && t === 'fixed')) && ((u = o.offsetLeft), (s = o.offsetTop))
  }
  return {width: l, height: i, x: u + Vo(e), y: s}
}
function Uf(e) {
  var t,
    r = Ct(e),
    n = Zo(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = It(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    i = It(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    u = -n.scrollLeft + Vo(e),
    s = -n.scrollTop
  return (
    pt(o || r).direction === 'rtl' &&
      (u += It(r.clientWidth, o ? o.clientWidth : 0) - l),
    {width: l, height: i, x: u, y: s}
  )
}
function zo(e) {
  var t = pt(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY
  return /auto|scroll|overlay|hidden/.test(r + o + n)
}
function $u(e) {
  return ['html', 'body', '#document'].indexOf(lt(e)) >= 0
    ? e.ownerDocument.body
    : De(e) && zo(e)
    ? e
    : $u(Hn(e))
}
function Ar(e, t) {
  var r
  t === void 0 && (t = [])
  var n = $u(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = ke(n),
    i = o ? [l].concat(l.visualViewport || [], zo(n) ? n : []) : n,
    u = t.concat(i)
  return o ? u : u.concat(Ar(Hn(i)))
}
function Ja(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function Wf(e, t) {
  var r = nr(e, !1, t === 'fixed')
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  )
}
function ui(e, t, r) {
  return t === Cu ? Ja(qf(e, r)) : jt(t) ? Wf(t, r) : Ja(Uf(Ct(e)))
}
function Gf(e) {
  var t = Ar(Hn(e)),
    r = ['absolute', 'fixed'].indexOf(pt(e).position) >= 0,
    n = r && De(e) ? Vr(e) : e
  return jt(n)
    ? t.filter(function (o) {
        return jt(o) && Ou(o, n) && lt(o) !== 'body'
      })
    : []
}
function Yf(e, t, r, n) {
  var o = t === 'clippingParents' ? Gf(e) : [].concat(t),
    l = [].concat(o, [r]),
    i = l[0],
    u = l.reduce(function (s, c) {
      var d = ui(e, c, n)
      return (
        (s.top = It(d.top, s.top)),
        (s.right = xn(d.right, s.right)),
        (s.bottom = xn(d.bottom, s.bottom)),
        (s.left = It(d.left, s.left)),
        s
      )
    }, ui(e, i, n))
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  )
}
function Du(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? ot(n) : null,
    l = n ? ar(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s
  switch (o) {
    case we:
      s = {x: i, y: t.y - r.height}
      break
    case Le:
      s = {x: i, y: t.y + t.height}
      break
    case Me:
      s = {x: t.x + t.width, y: u}
      break
    case Ae:
      s = {x: t.x - r.width, y: u}
      break
    default:
      s = {x: t.x, y: t.y}
  }
  var c = o ? Ho(o) : null
  if (c != null) {
    var d = c === 'y' ? 'height' : 'width'
    switch (l) {
      case tr:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2)
        break
      case Fr:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2)
        break
    }
  }
  return s
}
function $r(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    l = r.strategy,
    i = l === void 0 ? e.strategy : l,
    u = r.boundary,
    s = u === void 0 ? gf : u,
    c = r.rootBoundary,
    d = c === void 0 ? Cu : c,
    m = r.elementContext,
    f = m === void 0 ? yr : m,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    g = r.padding,
    x = g === void 0 ? 0 : g,
    y = Ru(typeof x != 'number' ? x : Fu(x, Zr)),
    w = f === yr ? hf : yr,
    v = e.rects.popper,
    E = e.elements[h ? w : f],
    A = Yf(jt(E) ? E : E.contextElement || Ct(e.elements.popper), s, d, i),
    S = nr(e.elements.reference),
    k = Du({reference: S, element: v, strategy: 'absolute', placement: o}),
    C = Ja(Object.assign({}, v, k)),
    O = f === yr ? C : S,
    T = {
      top: A.top - O.top + y.top,
      bottom: O.bottom - A.bottom + y.bottom,
      left: A.left - O.left + y.left,
      right: O.right - A.right + y.right,
    },
    R = e.modifiersData.offset
  if (f === yr && R) {
    var $ = R[o]
    Object.keys(T).forEach(function (F) {
      var P = [Me, Le].indexOf(F) >= 0 ? 1 : -1,
        D = [we, Le].indexOf(F) >= 0 ? 'y' : 'x'
      T[F] += $[D] * P
    })
  }
  return T
}
function Kf(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = r.boundary,
    l = r.rootBoundary,
    i = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? ku : s,
    d = ar(n),
    m = d
      ? u
        ? oi
        : oi.filter(function (h) {
            return ar(h) === d
          })
      : Zr,
    f = m.filter(function (h) {
      return c.indexOf(h) >= 0
    })
  f.length === 0 && (f = m)
  var p = f.reduce(function (h, g) {
    return (
      (h[g] = $r(e, {placement: g, boundary: o, rootBoundary: l, padding: i})[
        ot(g)
      ]),
      h
    )
  }, {})
  return Object.keys(p).sort(function (h, g) {
    return p[h] - p[g]
  })
}
function Xf(e) {
  if (ot(e) === jn) return []
  var t = un(e)
  return [si(e), t, si(t)]
}
function Jf(e) {
  var t = e.state,
    r = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        l = o === void 0 ? !0 : o,
        i = r.altAxis,
        u = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        c = r.padding,
        d = r.boundary,
        m = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        g = r.allowedAutoPlacements,
        x = t.options.placement,
        y = ot(x),
        w = y === x,
        v = s || (w || !h ? [un(x)] : Xf(x)),
        E = [x].concat(v).reduce(function (J, I) {
          return J.concat(
            ot(I) === jn
              ? Kf(t, {
                  placement: I,
                  boundary: d,
                  rootBoundary: m,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: g,
                })
              : I
          )
        }, []),
        A = t.rects.reference,
        S = t.rects.popper,
        k = new Map(),
        C = !0,
        O = E[0],
        T = 0;
      T < E.length;
      T++
    ) {
      var R = E[T],
        $ = ot(R),
        F = ar(R) === tr,
        P = [we, Le].indexOf($) >= 0,
        D = P ? 'width' : 'height',
        L = $r(t, {
          placement: R,
          boundary: d,
          rootBoundary: m,
          altBoundary: f,
          padding: c,
        }),
        N = P ? (F ? Me : Ae) : F ? Le : we
      A[D] > S[D] && (N = un(N))
      var V = un(N),
        B = []
      if (
        (l && B.push(L[$] <= 0),
        u && B.push(L[N] <= 0, L[V] <= 0),
        B.every(function (J) {
          return J
        }))
      ) {
        ;(O = R), (C = !1)
        break
      }
      k.set(R, B)
    }
    if (C)
      for (
        var H = h ? 3 : 1,
          X = function (J) {
            var I = E.find(function (z) {
              var W = k.get(z)
              if (W)
                return W.slice(0, J).every(function (se) {
                  return se
                })
            })
            if (I) return (O = I), 'break'
          },
          ne = H;
        ne > 0;
        ne--
      ) {
        var K = X(ne)
        if (K === 'break') break
      }
    t.placement !== O &&
      ((t.modifiersData[n]._skip = !0), (t.placement = O), (t.reset = !0))
  }
}
var Qf = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: Jf,
  requiresIfExists: ['offset'],
  data: {_skip: !1},
}
function ci(e, t, r) {
  return (
    r === void 0 && (r = {x: 0, y: 0}),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  )
}
function di(e) {
  return [we, Me, Le, Ae].some(function (t) {
    return e[t] >= 0
  })
}
function em(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = $r(t, {elementContext: 'reference'}),
    u = $r(t, {altBoundary: !0}),
    s = ci(i, n),
    c = ci(u, o, l),
    d = di(s),
    m = di(c)
  ;(t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: m,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': d,
      'data-popper-escaped': m,
    }))
}
var tm = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: em,
}
function rm(e, t, r) {
  var n = ot(e),
    o = [Ae, we].indexOf(n) >= 0 ? -1 : 1,
    l = typeof r == 'function' ? r(Object.assign({}, t, {placement: e})) : r,
    i = l[0],
    u = l[1]
  return (
    (i = i || 0),
    (u = (u || 0) * o),
    [Ae, Me].indexOf(n) >= 0 ? {x: u, y: i} : {x: i, y: u}
  )
}
function nm(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    l = o === void 0 ? [0, 0] : o,
    i = ku.reduce(function (d, m) {
      return (d[m] = rm(m, t.rects, l)), d
    }, {}),
    u = i[t.placement],
    s = u.x,
    c = u.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = i)
}
var am = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: nm,
}
function om(e) {
  var t = e.state,
    r = e.name
  t.modifiersData[r] = Du({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
var lm = {name: 'popperOffsets', enabled: !0, phase: 'read', fn: om, data: {}}
function im(e) {
  return e === 'x' ? 'y' : 'x'
}
function sm(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    l = o === void 0 ? !0 : o,
    i = r.altAxis,
    u = i === void 0 ? !1 : i,
    s = r.boundary,
    c = r.rootBoundary,
    d = r.altBoundary,
    m = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    g = h === void 0 ? 0 : h,
    x = $r(t, {boundary: s, rootBoundary: c, padding: m, altBoundary: d}),
    y = ot(t.placement),
    w = ar(t.placement),
    v = !w,
    E = Ho(y),
    A = im(E),
    S = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    C = t.rects.popper,
    O =
      typeof g == 'function'
        ? g(Object.assign({}, t.rects, {placement: t.placement}))
        : g,
    T =
      typeof O == 'number'
        ? {mainAxis: O, altAxis: O}
        : Object.assign({mainAxis: 0, altAxis: 0}, O),
    R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    $ = {x: 0, y: 0}
  if (S) {
    if (l) {
      var F,
        P = E === 'y' ? we : Ae,
        D = E === 'y' ? Le : Me,
        L = E === 'y' ? 'height' : 'width',
        N = S[E],
        V = N + x[P],
        B = N - x[D],
        H = p ? -C[L] / 2 : 0,
        X = w === tr ? k[L] : C[L],
        ne = w === tr ? -C[L] : -k[L],
        K = t.elements.arrow,
        J = p && K ? jo(K) : {width: 0, height: 0},
        I = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Tu(),
        z = I[P],
        W = I[D],
        se = wr(0, k[L], J[L]),
        be = v ? k[L] / 2 - H - se - z - T.mainAxis : X - se - z - T.mainAxis,
        it = v ? -k[L] / 2 + H + se + W + T.mainAxis : ne + se + W + T.mainAxis,
        Re = t.elements.arrow && Vr(t.elements.arrow),
        Ze = Re ? (E === 'y' ? Re.clientTop || 0 : Re.clientLeft || 0) : 0,
        M = (F = R == null ? void 0 : R[E]) != null ? F : 0,
        Pe = N + be - M - Ze,
        Ve = N + it - M,
        kt = wr(p ? xn(V, Pe) : V, N, p ? It(B, Ve) : B)
      ;(S[E] = kt), ($[E] = kt - N)
    }
    if (u) {
      var zt,
        ze = E === 'x' ? we : Ae,
        qr = E === 'x' ? Le : Me,
        ye = S[A],
        _t = A === 'y' ? 'height' : 'width',
        qe = ye + x[ze],
        qt = ye - x[qr],
        Ue = [we, Ae].indexOf(y) !== -1,
        Ut = (zt = R == null ? void 0 : R[A]) != null ? zt : 0,
        We = Ue ? qe : ye - k[_t] - C[_t] - Ut + T.altAxis,
        fe = Ue ? ye + k[_t] + C[_t] - Ut - T.altAxis : qt,
        Ne = p && Ue ? $f(We, ye, fe) : wr(p ? We : qe, ye, p ? fe : qt)
      ;(S[A] = Ne), ($[A] = Ne - ye)
    }
    t.modifiersData[n] = $
  }
}
var um = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: sm,
  requiresIfExists: ['offset'],
}
function cm(e) {
  return {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
}
function dm(e) {
  return e === ke(e) || !De(e) ? Zo(e) : cm(e)
}
function pm(e) {
  var t = e.getBoundingClientRect(),
    r = rr(t.width) / e.offsetWidth || 1,
    n = rr(t.height) / e.offsetHeight || 1
  return r !== 1 || n !== 1
}
function fm(e, t, r) {
  r === void 0 && (r = !1)
  var n = De(t),
    o = De(t) && pm(t),
    l = Ct(t),
    i = nr(e, o, r),
    u = {scrollLeft: 0, scrollTop: 0},
    s = {x: 0, y: 0}
  return (
    (n || (!n && !r)) &&
      ((lt(t) !== 'body' || zo(l)) && (u = dm(t)),
      De(t)
        ? ((s = nr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : l && (s.x = Vo(l))),
    {
      x: i.left + u.scrollLeft - s.x,
      y: i.top + u.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  )
}
function mm(e) {
  var t = new Map(),
    r = new Set(),
    n = []
  e.forEach(function (l) {
    t.set(l.name, l)
  })
  function o(l) {
    r.add(l.name)
    var i = [].concat(l.requires || [], l.requiresIfExists || [])
    i.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u)
        s && o(s)
      }
    }),
      n.push(l)
  }
  return (
    e.forEach(function (l) {
      r.has(l.name) || o(l)
    }),
    n
  )
}
function gm(e) {
  var t = mm(e)
  return kf.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n
      })
    )
  }, [])
}
function hm(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ;(t = void 0), r(e())
          })
        })),
      t
    )
  }
}
function bm(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name]
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    )
  }, {})
  return Object.keys(t).map(function (r) {
    return t[r]
  })
}
var pi = {placement: 'bottom', modifiers: [], strategy: 'absolute'}
function fi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function ym(e) {
  e === void 0 && (e = {})
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    l = o === void 0 ? pi : o
  return function (i, u, s) {
    s === void 0 && (s = l)
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, pi, l),
        modifiersData: {},
        elements: {reference: i, popper: u},
        attributes: {},
        styles: {},
      },
      d = [],
      m = !1,
      f = {
        state: c,
        setOptions: function (g) {
          var x = typeof g == 'function' ? g(c.options) : g
          h(),
            (c.options = Object.assign({}, l, c.options, x)),
            (c.scrollParents = {
              reference: jt(i)
                ? Ar(i)
                : i.contextElement
                ? Ar(i.contextElement)
                : [],
              popper: Ar(u),
            })
          var y = gm(bm([].concat(n, c.options.modifiers)))
          return (
            (c.orderedModifiers = y.filter(function (w) {
              return w.enabled
            })),
            p(),
            f.update()
          )
        },
        forceUpdate: function () {
          if (!m) {
            var g = c.elements,
              x = g.reference,
              y = g.popper
            if (fi(x, y)) {
              ;(c.rects = {
                reference: fm(x, Vr(y), c.options.strategy === 'fixed'),
                popper: jo(y),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (C) {
                  return (c.modifiersData[C.name] = Object.assign({}, C.data))
                })
              for (var w = 0; w < c.orderedModifiers.length; w++) {
                if (c.reset === !0) {
                  ;(c.reset = !1), (w = -1)
                  continue
                }
                var v = c.orderedModifiers[w],
                  E = v.fn,
                  A = v.options,
                  S = A === void 0 ? {} : A,
                  k = v.name
                typeof E == 'function' &&
                  (c = E({state: c, options: S, name: k, instance: f}) || c)
              }
            }
          }
        },
        update: hm(function () {
          return new Promise(function (g) {
            f.forceUpdate(), g(c)
          })
        }),
        destroy: function () {
          h(), (m = !0)
        },
      }
    if (!fi(i, u)) return f
    f.setOptions(s).then(function (g) {
      !m && s.onFirstUpdate && s.onFirstUpdate(g)
    })
    function p() {
      c.orderedModifiers.forEach(function (g) {
        var x = g.name,
          y = g.options,
          w = y === void 0 ? {} : y,
          v = g.effect
        if (typeof v == 'function') {
          var E = v({state: c, name: x, instance: f, options: w}),
            A = function () {}
          d.push(E || A)
        }
      })
    }
    function h() {
      d.forEach(function (g) {
        return g()
      }),
        (d = [])
    }
    return f
  }
}
var vm = [Zf, lm, jf, Tf, am, Qf, um, Bf, tm],
  Em = ym({defaultModifiers: vm}),
  xm = _e(mf()),
  wm = [],
  Am = function (e, t, r) {
    r === void 0 && (r = {})
    var n = b.useRef(null),
      o = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || 'bottom',
        strategy: r.strategy || 'absolute',
        modifiers: r.modifiers || wm,
      },
      l = b.useState({
        styles: {
          popper: {position: o.strategy, left: '0', top: '0'},
          arrow: {position: 'absolute'},
        },
        attributes: {},
      }),
      i = l[0],
      u = l[1],
      s = b.useMemo(function () {
        return {
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: function (m) {
            var f = m.state,
              p = Object.keys(f.elements)
            Cs.flushSync(function () {
              u({
                styles: ni(
                  p.map(function (h) {
                    return [h, f.styles[h] || {}]
                  })
                ),
                attributes: ni(
                  p.map(function (h) {
                    return [h, f.attributes[h]]
                  })
                ),
              })
            })
          },
          requires: ['computeStyles'],
        }
      }, []),
      c = b.useMemo(
        function () {
          var m = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [
              s,
              {name: 'applyStyles', enabled: !1},
            ]),
          }
          return (0, xm.default)(n.current, m)
            ? n.current || m
            : ((n.current = m), m)
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]
      ),
      d = b.useRef()
    return (
      ai(
        function () {
          d.current && d.current.setOptions(c)
        },
        [c]
      ),
      ai(
        function () {
          if (!(e == null || t == null)) {
            var m = r.createPopper || Em,
              f = m(e, t, c)
            return (
              (d.current = f),
              function () {
                f.destroy(), (d.current = null)
              }
            )
          }
        },
        [e, t, r.createPopper]
      ),
      {
        state: d.current ? d.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    )
  }
function Lu(e) {
  var t = b.useRef(e)
  return (
    (t.current = e),
    b.useCallback(function () {
      return t.current
    }, [])
  )
}
var Sm = function () {}
function Cm(e) {
  var t = e.initial,
    r = e.value,
    n = e.onChange,
    o = n === void 0 ? Sm : n
  if (t === void 0 && r === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    )
  var l = b.useState(t),
    i = l[0],
    u = l[1],
    s = Lu(i),
    c = b.useCallback(
      function (m) {
        var f = s(),
          p = typeof m == 'function' ? m(f) : m
        typeof p.persist == 'function' && p.persist(),
          u(p),
          typeof o == 'function' && o(p)
      },
      [s, o]
    ),
    d = r !== void 0
  return [d ? r : i, d ? o : c]
}
function Mu(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null
        },
      }
    }
  )
}
var km = ['styles', 'attributes'],
  mi = {getBoundingClientRect: Mu()},
  gi = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: {attributes: !0, childList: !0, subtree: !0},
    offset: [0, 6],
    trigger: 'hover',
  }
function _m(e, t) {
  var r, n, o
  e === void 0 && (e = {}), t === void 0 && (t = {})
  var l = Object.keys(gi).reduce(function (D, L) {
      var N
      return U({}, D, ((N = {}), (N[L] = D[L] !== void 0 ? D[L] : gi[L]), N))
    }, e),
    i = b.useMemo(
      function () {
        return [{name: 'offset', options: {offset: l.offset}}]
      },
      Array.isArray(l.offset) ? l.offset : []
    ),
    u = U({}, t, {
      placement: t.placement || l.placement,
      modifiers: t.modifiers || i,
    }),
    s = b.useState(null),
    c = s[0],
    d = s[1],
    m = b.useState(null),
    f = m[0],
    p = m[1],
    h = Cm({
      initial: l.defaultVisible,
      value: l.visible,
      onChange: l.onVisibleChange,
    }),
    g = h[0],
    x = h[1],
    y = b.useRef()
  b.useEffect(function () {
    return function () {
      return clearTimeout(y.current)
    }
  }, [])
  var w = Am(l.followCursor ? mi : c, f, u),
    v = w.styles,
    E = w.attributes,
    A = To(w, km),
    S = A.update,
    k = Lu({visible: g, triggerRef: c, tooltipRef: f, finalConfig: l}),
    C = b.useCallback(
      function (D) {
        return Array.isArray(l.trigger)
          ? l.trigger.includes(D)
          : l.trigger === D
      },
      Array.isArray(l.trigger) ? l.trigger : [l.trigger]
    ),
    O = b.useCallback(
      function () {
        clearTimeout(y.current),
          (y.current = window.setTimeout(function () {
            return x(!1)
          }, l.delayHide))
      },
      [l.delayHide, x]
    ),
    T = b.useCallback(
      function () {
        clearTimeout(y.current),
          (y.current = window.setTimeout(function () {
            return x(!0)
          }, l.delayShow))
      },
      [l.delayShow, x]
    ),
    R = b.useCallback(
      function () {
        k().visible ? O() : T()
      },
      [k, O, T]
    )
  b.useEffect(
    function () {
      if (k().finalConfig.closeOnOutsideClick) {
        var D = function (L) {
          var N,
            V = k(),
            B = V.tooltipRef,
            H = V.triggerRef,
            X =
              (L.composedPath == null || (N = L.composedPath()) == null
                ? void 0
                : N[0]) || L.target
          X instanceof Node &&
            B != null &&
            H != null &&
            !B.contains(X) &&
            !H.contains(X) &&
            O()
        }
        return (
          document.addEventListener('mousedown', D),
          function () {
            return document.removeEventListener('mousedown', D)
          }
        )
      }
    },
    [k, O]
  ),
    b.useEffect(
      function () {
        if (!(c == null || !C('click')))
          return (
            c.addEventListener('click', R),
            function () {
              return c.removeEventListener('click', R)
            }
          )
      },
      [c, C, R]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !C('double-click')))
          return (
            c.addEventListener('dblclick', R),
            function () {
              return c.removeEventListener('dblclick', R)
            }
          )
      },
      [c, C, R]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !C('right-click'))) {
          var D = function (L) {
            L.preventDefault(), R()
          }
          return (
            c.addEventListener('contextmenu', D),
            function () {
              return c.removeEventListener('contextmenu', D)
            }
          )
        }
      },
      [c, C, R]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !C('focus')))
          return (
            c.addEventListener('focus', T),
            c.addEventListener('blur', O),
            function () {
              c.removeEventListener('focus', T),
                c.removeEventListener('blur', O)
            }
          )
      },
      [c, C, T, O]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !C('hover')))
          return (
            c.addEventListener('mouseenter', T),
            c.addEventListener('mouseleave', O),
            function () {
              c.removeEventListener('mouseenter', T),
                c.removeEventListener('mouseleave', O)
            }
          )
      },
      [c, C, T, O]
    ),
    b.useEffect(
      function () {
        if (!(f == null || !C('hover') || !k().finalConfig.interactive))
          return (
            f.addEventListener('mouseenter', T),
            f.addEventListener('mouseleave', O),
            function () {
              f.removeEventListener('mouseenter', T),
                f.removeEventListener('mouseleave', O)
            }
          )
      },
      [f, C, T, O, k]
    )
  var $ =
    A == null ||
    (r = A.state) == null ||
    (n = r.modifiersData) == null ||
    (o = n.hide) == null
      ? void 0
      : o.isReferenceHidden
  b.useEffect(
    function () {
      l.closeOnTriggerHidden && $ && O()
    },
    [l.closeOnTriggerHidden, O, $]
  ),
    b.useEffect(
      function () {
        if (!l.followCursor || c == null) return
        function D(L) {
          var N = L.clientX,
            V = L.clientY
          ;(mi.getBoundingClientRect = Mu(N, V)), S == null || S()
        }
        return (
          c.addEventListener('mousemove', D),
          function () {
            return c.removeEventListener('mousemove', D)
          }
        )
      },
      [l.followCursor, c, S]
    ),
    b.useEffect(
      function () {
        if (!(f == null || S == null || l.mutationObserverOptions == null)) {
          var D = new MutationObserver(S)
          return (
            D.observe(f, l.mutationObserverOptions),
            function () {
              return D.disconnect()
            }
          )
        }
      },
      [l.mutationObserverOptions, f, S]
    )
  var F = function (D) {
      return (
        D === void 0 && (D = {}),
        U({}, D, {style: U({}, D.style, v.popper)}, E.popper, {
          'data-popper-interactive': l.interactive,
        })
      )
    },
    P = function (D) {
      return (
        D === void 0 && (D = {}),
        U({}, D, E.arrow, {
          style: U({}, D.style, v.arrow),
          'data-popper-arrow': !0,
        })
      )
    }
  return U(
    {
      getArrowProps: P,
      getTooltipProps: F,
      setTooltipRef: p,
      setTriggerRef: d,
      tooltipRef: f,
      triggerRef: c,
      visible: g,
    },
    A
  )
}
var Fe = Ht(1e3)((e, t, r, n = 0) => (t.split('-')[0] === e ? r : n)),
  gt = 8,
  Om = _.div(
    {position: 'absolute', borderStyle: 'solid'},
    ({placement: e}) => {
      let t = 0,
        r = 0
      switch (!0) {
        case e.startsWith('left') || e.startsWith('right'): {
          r = 8
          break
        }
        case e.startsWith('top') || e.startsWith('bottom'): {
          t = 8
          break
        }
      }
      return {transform: `translate3d(${t}px, ${r}px, 0px)`}
    },
    ({theme: e, color: t, placement: r}) => ({
      bottom: `${Fe('top', r, `${gt * -1}px`, 'auto')}`,
      top: `${Fe('bottom', r, `${gt * -1}px`, 'auto')}`,
      right: `${Fe('left', r, `${gt * -1}px`, 'auto')}`,
      left: `${Fe('right', r, `${gt * -1}px`, 'auto')}`,
      borderBottomWidth: `${Fe('top', r, '0', gt)}px`,
      borderTopWidth: `${Fe('bottom', r, '0', gt)}px`,
      borderRightWidth: `${Fe('left', r, '0', gt)}px`,
      borderLeftWidth: `${Fe('right', r, '0', gt)}px`,
      borderTopColor: Fe(
        'top',
        r,
        e.color[t] || t || e.base === 'light'
          ? xr(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderBottomColor: Fe(
        'bottom',
        r,
        e.color[t] || t || e.base === 'light'
          ? xr(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderLeftColor: Fe(
        'left',
        r,
        e.color[t] || t || e.base === 'light'
          ? xr(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderRightColor: Fe(
        'right',
        r,
        e.color[t] || t || e.base === 'light'
          ? xr(e.background.app)
          : e.background.app,
        'transparent'
      ),
    })
  ),
  Tm = _.div(
    ({hidden: e}) => ({
      display: e ? 'none' : 'inline-block',
      zIndex: 2147483647,
    }),
    ({theme: e, color: t, hasChrome: r}) =>
      r
        ? {
            background:
              e.color[t] || t || e.base === 'light'
                ? xr(e.background.app)
                : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1,
          }
        : {}
  ),
  qo = a.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: r,
        arrowProps: n,
        tooltipRef: o,
        color: l,
        withArrows: i,
        ...u
      },
      s
    ) =>
      a.createElement(
        Tm,
        {'data-testid': 'tooltip', hasChrome: t, ref: s, ...u, color: l},
        t && i && a.createElement(Om, {placement: e, ...n, color: l}),
        r
      )
  )
qo.displayName = 'Tooltip'
qo.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: 'top',
  arrowProps: {},
}
var {document: cn} = ff,
  Rm = _.div`
  display: inline-block;
  cursor: ${(e) =>
    e.trigger === 'hover' || e.trigger.includes('hover')
      ? 'default'
      : 'pointer'};
`,
  Fm = _.g`
  cursor: ${(e) =>
    e.trigger === 'hover' || e.trigger.includes('hover')
      ? 'default'
      : 'pointer'};
`,
  Bu = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: n,
    hasChrome: o,
    withArrows: l,
    offset: i,
    tooltip: u,
    children: s,
    closeOnTriggerHidden: c,
    mutationObserverOptions: d,
    closeOnClick: m,
    tooltipShown: f,
    onVisibilityChange: p,
    defaultVisible: h,
    delayHide: g,
    visible: x,
    interactive: y,
    delayShow: w,
    modifiers: v,
    strategy: E,
    followCursor: A,
    onVisibleChange: S,
    ...k
  }) => {
    let C = e ? Fm : Rm,
      {
        getArrowProps: O,
        getTooltipProps: T,
        setTooltipRef: R,
        setTriggerRef: $,
        visible: F,
        state: P,
      } = _m(
        {
          trigger: t,
          placement: n,
          defaultVisible: h ?? f,
          delayHide: g,
          interactive: y,
          closeOnOutsideClick: r ?? m,
          closeOnTriggerHidden: c,
          onVisibleChange: (L) => {
            p == null || p(L), S == null || S(L)
          },
          delayShow: w,
          followCursor: A,
          mutationObserverOptions: d,
          visible: x,
          offset: i,
        },
        {modifiers: v, strategy: E}
      ),
      D = a.createElement(
        qo,
        {
          placement: P == null ? void 0 : P.placement,
          ref: R,
          hasChrome: o,
          arrowProps: O(),
          withArrows: l,
          ...T(),
        },
        typeof u == 'function' ? u({onHide: () => S(!1)}) : u
      )
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(C, {trigger: t, ref: $, ...k}, s),
      F && p1.createPortal(D, cn.body)
    )
  }
Bu.defaultProps = {
  svg: !1,
  trigger: 'click',
  closeOnOutsideClick: !1,
  placement: 'top',
  modifiers: [
    {name: 'preventOverflow', options: {padding: 8}},
    {name: 'offset', options: {offset: [8, 8]}},
    {name: 'arrow', options: {padding: 8}},
  ],
  hasChrome: !0,
  defaultVisible: !1,
}
var $m = ({startOpen: e = !1, onVisibleChange: t, ...r}) => {
  let [n, o] = b.useState(e),
    l = b.useCallback(
      (i) => {
        ;(t && t(i) === !1) || o(i)
      },
      [t]
    )
  return (
    b.useEffect(() => {
      let i = () => l(!1)
      cn.addEventListener('keydown', i, !1)
      let u = Array.from(cn.getElementsByTagName('iframe')),
        s = []
      return (
        u.forEach((c) => {
          let d = () => {
            try {
              c.contentWindow.document &&
                (c.contentWindow.document.addEventListener('click', i),
                s.push(() => {
                  try {
                    c.contentWindow.document.removeEventListener('click', i)
                  } catch {}
                }))
            } catch {}
          }
          d(),
            c.addEventListener('load', d),
            s.push(() => {
              c.removeEventListener('load', d)
            })
        }),
        () => {
          cn.removeEventListener('keydown', i),
            s.forEach((c) => {
              c()
            })
        }
      )
    }),
    a.createElement(Bu, {...r, visible: n, onVisibleChange: l})
  )
}
function Dm(e, t) {
  var r = b.useRef(null),
    n = b.useRef(null)
  n.current = t
  var o = b.useRef(null)
  b.useEffect(function () {
    l()
  })
  var l = b.useCallback(
    function () {
      var i = o.current,
        u = n.current,
        s = i || (u ? (u instanceof Element ? u : u.current) : null)
      ;(r.current && r.current.element === s && r.current.subscriber === e) ||
        (r.current && r.current.cleanup && r.current.cleanup(),
        (r.current = {element: s, subscriber: e, cleanup: s ? e(s) : void 0}))
    },
    [e]
  )
  return (
    b.useEffect(function () {
      return function () {
        r.current &&
          r.current.cleanup &&
          (r.current.cleanup(), (r.current = null))
      }
    }, []),
    b.useCallback(
      function (i) {
        ;(o.current = i), l()
      },
      [l]
    )
  )
}
function hi(e, t, r) {
  return e[t]
    ? e[t][0]
      ? e[t][0][r]
      : e[t][r]
    : t === 'contentBoxSize'
    ? e.contentRect[r === 'inlineSize' ? 'width' : 'height']
    : void 0
}
function Iu(e) {
  e === void 0 && (e = {})
  var t = e.onResize,
    r = b.useRef(void 0)
  r.current = t
  var n = e.round || Math.round,
    o = b.useRef(),
    l = b.useState({width: void 0, height: void 0}),
    i = l[0],
    u = l[1],
    s = b.useRef(!1)
  b.useEffect(function () {
    return (
      (s.current = !1),
      function () {
        s.current = !0
      }
    )
  }, [])
  var c = b.useRef({width: void 0, height: void 0}),
    d = Dm(
      b.useCallback(
        function (m) {
          return (
            (!o.current || o.current.box !== e.box || o.current.round !== n) &&
              (o.current = {
                box: e.box,
                round: n,
                instance: new ResizeObserver(function (f) {
                  var p = f[0],
                    h =
                      e.box === 'border-box'
                        ? 'borderBoxSize'
                        : e.box === 'device-pixel-content-box'
                        ? 'devicePixelContentBoxSize'
                        : 'contentBoxSize',
                    g = hi(p, h, 'inlineSize'),
                    x = hi(p, h, 'blockSize'),
                    y = g ? n(g) : void 0,
                    w = x ? n(x) : void 0
                  if (c.current.width !== y || c.current.height !== w) {
                    var v = {width: y, height: w}
                    ;(c.current.width = y),
                      (c.current.height = w),
                      r.current ? r.current(v) : s.current || u(v)
                  }
                }),
              }),
            o.current.instance.observe(m, {box: e.box}),
            function () {
              o.current && o.current.instance.unobserve(m)
            }
          )
        },
        [e.box, n]
      ),
      e.ref
    )
  return b.useMemo(
    function () {
      return {ref: d, width: i.width, height: i.height}
    },
    [d, i.width, i.height]
  )
}
var Lm = Object.create,
  Pu = Object.defineProperty,
  Mm = Object.getOwnPropertyDescriptor,
  Bm = Object.getOwnPropertyNames,
  Im = Object.getPrototypeOf,
  Pm = Object.prototype.hasOwnProperty,
  Nm = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
  jm = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of Bm(t))
        !Pm.call(e, o) &&
          o !== r &&
          Pu(e, o, {
            get: () => t[o],
            enumerable: !(n = Mm(t, o)) || n.enumerable,
          })
    return e
  },
  Hm = (e, t, r) => (
    (r = e != null ? Lm(Im(e)) : {}),
    jm(
      t || !e || !e.__esModule
        ? Pu(r, 'default', {value: e, enumerable: !0})
        : r,
      e
    )
  ),
  Zm = Nm((e) => {
    Object.defineProperty(e, '__esModule', {value: !0}),
      (e.isEqual = (function () {
        var t = Object.prototype.toString,
          r = Object.getPrototypeOf,
          n = Object.getOwnPropertySymbols
            ? function (o) {
                return Object.keys(o).concat(Object.getOwnPropertySymbols(o))
              }
            : Object.keys
        return function (o, l) {
          return (function i(u, s, c) {
            var d,
              m,
              f,
              p = t.call(u),
              h = t.call(s)
            if (u === s) return !0
            if (u == null || s == null) return !1
            if (c.indexOf(u) > -1 && c.indexOf(s) > -1) return !0
            if (
              (c.push(u, s),
              p != h ||
                ((d = n(u)),
                (m = n(s)),
                d.length != m.length ||
                  d.some(function (g) {
                    return !i(u[g], s[g], c)
                  })))
            )
              return !1
            switch (p.slice(8, -1)) {
              case 'Symbol':
                return u.valueOf() == s.valueOf()
              case 'Date':
              case 'Number':
                return +u == +s || (+u != +u && +s != +s)
              case 'RegExp':
              case 'Function':
              case 'String':
              case 'Boolean':
                return '' + u == '' + s
              case 'Set':
              case 'Map':
                ;(d = u.entries()), (m = s.entries())
                do if (!i((f = d.next()).value, m.next().value, c)) return !1
                while (!f.done)
                return !0
              case 'ArrayBuffer':
                ;(u = new Uint8Array(u)), (s = new Uint8Array(s))
              case 'DataView':
                ;(u = new Uint8Array(u.buffer)), (s = new Uint8Array(s.buffer))
              case 'Float32Array':
              case 'Float64Array':
              case 'Int8Array':
              case 'Int16Array':
              case 'Int32Array':
              case 'Uint8Array':
              case 'Uint16Array':
              case 'Uint32Array':
              case 'Uint8ClampedArray':
              case 'Arguments':
              case 'Array':
                if (u.length != s.length) return !1
                for (f = 0; f < u.length; f++)
                  if (
                    (f in u || f in s) &&
                    (f in u != f in s || !i(u[f], s[f], c))
                  )
                    return !1
                return !0
              case 'Object':
                return i(r(u), r(s), c)
              default:
                return !1
            }
          })(o, l, [])
        }
      })())
  }),
  bi = Hm(Zm()),
  Nu = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
  Vm = (e, t) => {
    let {exists: r, eq: n, neq: o, truthy: l} = e
    if (Nu([r, n, o, l]) > 1)
      throw new Error(
        `Invalid conditional test ${JSON.stringify({exists: r, eq: n, neq: o})}`
      )
    if (typeof n < 'u') return (0, bi.isEqual)(t, n)
    if (typeof o < 'u') return !(0, bi.isEqual)(t, o)
    if (typeof r < 'u') {
      let i = typeof t < 'u'
      return r ? i : !i
    }
    return typeof l > 'u' || l ? !!t : !t
  },
  zm = (e, t, r) => {
    if (!e.if) return !0
    let {arg: n, global: o} = e.if
    if (Nu([n, o]) !== 1)
      throw new Error(
        `Invalid conditional value ${JSON.stringify({arg: n, global: o})}`
      )
    let l = n ? t[n] : r[o]
    return Vm(e.if, l)
  },
  ju = (e) =>
    e
      .toLowerCase()
      .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
const {global: qm} = __STORYBOOK_MODULE_GLOBAL__
var ee = ({...e}, t) => {
  let r = [e.class, e.className]
  return (
    delete e.class,
    (e.className = ['sbdocs', `sbdocs-${t}`, ...r].filter(Boolean).join(' ')),
    e
  )
}
function Um(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function Dr(e, t) {
  return (
    (Dr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r
        }),
    Dr(e, t)
  )
}
function Wm(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Dr(e, t)
}
function Qa(e) {
  return (
    (Qa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    Qa(e)
  )
}
function Gm(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1
}
function Ym() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1
  if (typeof Proxy == 'function') return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    )
  } catch {
    return !1
  }
}
function dn(e, t, r) {
  return (
    Ym()
      ? (dn = Reflect.construct.bind())
      : (dn = function (n, o, l) {
          var i = [null]
          i.push.apply(i, o)
          var u = Function.bind.apply(n, i),
            s = new u()
          return l && Dr(s, l.prototype), s
        }),
    dn.apply(null, arguments)
  )
}
function eo(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (eo = function (r) {
      if (r === null || !Gm(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r)
        t.set(r, n)
      }
      function n() {
        return dn(r, arguments, Qa(this).constructor)
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Dr(n, r)
      )
    }),
    eo(e)
  )
}
var rt = (function (e) {
  Wm(t, e)
  function t(r) {
    var n
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this),
      Um(n)
    )
  }
  return t
})(eo(Error))
function ba(e) {
  return Math.round(e * 255)
}
function Km(e, t, r) {
  return ba(e) + ',' + ba(t) + ',' + ba(r)
}
function Lr(e, t, r, n) {
  if ((n === void 0 && (n = Km), t === 0)) return n(r, r, r)
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i))
  var d = r - l / 2,
    m = u + d,
    f = s + d,
    p = c + d
  return n(m, f, p)
}
var yi = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
}
function Xm(e) {
  if (typeof e != 'string') return e
  var t = e.toLowerCase()
  return yi[t] ? '#' + yi[t] : e
}
var Jm = /^#[a-fA-F0-9]{6}$/,
  Qm = /^#[a-fA-F0-9]{8}$/,
  eg = /^#[a-fA-F0-9]{3}$/,
  tg = /^#[a-fA-F0-9]{4}$/,
  ya = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  rg =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  ng =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  ag =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function Uo(e) {
  if (typeof e != 'string') throw new rt(3)
  var t = Xm(e)
  if (t.match(Jm))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    }
  if (t.match(Qm)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    }
  }
  if (t.match(eg))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    }
  if (t.match(tg)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    }
  }
  var o = ya.exec(t)
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
    }
  var l = rg.exec(t.substring(0, 50))
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha:
        parseFloat('' + l[4]) > 1
          ? parseFloat('' + l[4]) / 100
          : parseFloat('' + l[4]),
    }
  var i = ng.exec(t)
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Lr(u, s, c) + ')',
      m = ya.exec(d)
    if (!m) throw new rt(4, t, d)
    return {
      red: parseInt('' + m[1], 10),
      green: parseInt('' + m[2], 10),
      blue: parseInt('' + m[3], 10),
    }
  }
  var f = ag.exec(t.substring(0, 50))
  if (f) {
    var p = parseInt('' + f[1], 10),
      h = parseInt('' + f[2], 10) / 100,
      g = parseInt('' + f[3], 10) / 100,
      x = 'rgb(' + Lr(p, h, g) + ')',
      y = ya.exec(x)
    if (!y) throw new rt(4, t, x)
    return {
      red: parseInt('' + y[1], 10),
      green: parseInt('' + y[2], 10),
      blue: parseInt('' + y[3], 10),
      alpha:
        parseFloat('' + f[4]) > 1
          ? parseFloat('' + f[4]) / 100
          : parseFloat('' + f[4]),
    }
  }
  throw new rt(5)
}
function og(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2
  if (o === l)
    return e.alpha !== void 0
      ? {hue: 0, saturation: 0, lightness: i, alpha: e.alpha}
      : {hue: 0, saturation: 0, lightness: i}
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l)
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0)
      break
    case r:
      u = (n - t) / s + 2
      break
    default:
      u = (t - r) / s + 4
      break
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? {hue: u, saturation: c, lightness: i, alpha: e.alpha}
      : {hue: u, saturation: c, lightness: i}
  )
}
function Hu(e) {
  return og(Uo(e))
}
var lg = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? '#' + e[1] + e[3] + e[5]
      : e
  },
  to = lg
function Ft(e) {
  var t = e.toString(16)
  return t.length === 1 ? '0' + t : t
}
function va(e) {
  return Ft(Math.round(e * 255))
}
function ig(e, t, r) {
  return to('#' + va(e) + va(t) + va(r))
}
function wn(e, t, r) {
  return Lr(e, t, r, ig)
}
function sg(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return wn(e, t, r)
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return wn(e.hue, e.saturation, e.lightness)
  throw new rt(1)
}
function ug(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? wn(e, t, r) : 'rgba(' + Lr(e, t, r) + ',' + n + ')'
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? wn(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Lr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
  throw new rt(2)
}
function ro(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return to('#' + Ft(e) + Ft(t) + Ft(r))
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return to('#' + Ft(e.red) + Ft(e.green) + Ft(e.blue))
  throw new rt(6)
}
function ct(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var o = Uo(e)
    return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? ro(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? ro(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
  }
  throw new rt(7)
}
var cg = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    )
  },
  dg = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      typeof e.alpha == 'number'
    )
  },
  pg = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    )
  },
  fg = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    )
  }
function Zu(e) {
  if (typeof e != 'object') throw new rt(8)
  if (dg(e)) return ct(e)
  if (cg(e)) return ro(e)
  if (fg(e)) return ug(e)
  if (pg(e)) return sg(e)
  throw new rt(8)
}
function Vu(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments))
    return n.length >= t ? e.apply(this, n) : Vu(e, t, n)
  }
}
function Wo(e) {
  return Vu(e, e.length, [])
}
function Go(e, t, r) {
  return Math.max(e, Math.min(t, r))
}
function mg(e, t) {
  if (t === 'transparent') return t
  var r = Hu(t)
  return Zu(U({}, r, {lightness: Go(0, 1, r.lightness - parseFloat(e))}))
}
var gg = Wo(mg),
  Kt = gg
function hg(e, t) {
  if (t === 'transparent') return t
  var r = Hu(t)
  return Zu(U({}, r, {lightness: Go(0, 1, r.lightness + parseFloat(e))}))
}
var bg = Wo(hg),
  yg = bg
function vg(e, t) {
  if (t === 'transparent') return t
  var r = Uo(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = U({}, r, {
      alpha: Go(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    })
  return ct(o)
}
var Eg = Wo(vg),
  Ee = Eg,
  ur = ({theme: e}) => ({
    margin: '20px 0 8px',
    padding: 0,
    cursor: 'text',
    position: 'relative',
    color: e.color.defaultText,
    '&:first-of-type': {marginTop: 0, paddingTop: 0},
    '&:hover a.anchor': {textDecoration: 'none'},
    '& tt, & code': {fontSize: 'inherit'},
  }),
  mt = ({theme: e}) => ({
    lineHeight: 1,
    margin: '0 2px',
    padding: '3px 5px',
    whiteSpace: 'nowrap',
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border:
      e.base === 'light'
        ? `1px solid ${e.color.mediumlight}`
        : `1px solid ${e.color.darker}`,
    color:
      e.base === 'light'
        ? Ee(0.1, e.color.defaultText)
        : Ee(0.3, e.color.defaultText),
    backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border,
  }),
  re = ({theme: e}) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
  }),
  Vt = {margin: '16px 0'},
  xg = ({href: e, children: t, ...r}) => {
    let n = /^\//.test(e),
      o = /^#.*/.test(e),
      l = n ? `./?path=${e}` : e
    return a.createElement(
      'a',
      {href: l, target: o ? '_self' : '_top', ...r},
      t
    )
  },
  zu = _(xg)(re, ({theme: e}) => ({
    fontSize: 'inherit',
    lineHeight: '24px',
    color: e.color.secondary,
    textDecoration: 'none',
    '&.absent': {color: '#cc0000'},
    '&.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    },
  })),
  qu = _.blockquote(re, Vt, ({theme: e}) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: '0 15px',
    color: e.color.dark,
    '& > :first-of-type': {marginTop: 0},
    '& > :last-child': {marginBottom: 0},
  })),
  wg = (e) => typeof e == 'string',
  Ag = /[\n\r]/g,
  Sg = _.code(
    ({theme: e}) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit',
    }),
    mt
  ),
  Cg = _(Po)(({theme: e}) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': {padding: 20, background: 'inherit'},
  })),
  Yo = ({className: e, children: t, ...r}) => {
    let n = (e || '').match(/lang-(\S+)/),
      o = b.Children.toArray(t)
    return o.filter(wg).some((l) => l.match(Ag))
      ? a.createElement(
          Cg,
          {
            bordered: !0,
            copyable: !0,
            language: (n == null ? void 0 : n[1]) ?? 'plaintext',
            format: !1,
            ...r,
          },
          t
        )
      : a.createElement(Sg, {...r, className: e}, o)
  },
  Uu = _.div(re),
  Wu = _.dl(re, {
    ...Vt,
    padding: 0,
    '& dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: 0,
      margin: '16px 0 4px',
    },
    '& dt:first-of-type': {padding: 0},
    '& dt > :first-of-type': {marginTop: 0},
    '& dt > :last-child': {marginBottom: 0},
    '& dd': {margin: '0 0 16px', padding: '0 15px'},
    '& dd > :first-of-type': {marginTop: 0},
    '& dd > :last-child': {marginBottom: 0},
  }),
  Gu = _.h1(re, ur, ({theme: e}) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  Ko = _.h2(re, ur, ({theme: e}) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  Xo = _.h3(re, ur, ({theme: e}) => ({fontSize: `${e.typography.size.m1}px`})),
  Yu = _.h4(re, ur, ({theme: e}) => ({fontSize: `${e.typography.size.s3}px`})),
  Ku = _.h5(re, ur, ({theme: e}) => ({fontSize: `${e.typography.size.s2}px`})),
  Xu = _.h6(re, ur, ({theme: e}) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark,
  })),
  Ju = _.hr(({theme: e}) => ({
    border: '0 none',
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  Qu = _.img({maxWidth: '100%'}),
  ec = _.li(re, ({theme: e}) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: '24px',
    '& + li': {marginTop: '.25em'},
    '& ul, & ol': {marginTop: '.25em', marginBottom: 0},
    '& code': mt({theme: e}),
  })),
  kg = {
    paddingLeft: 30,
    '& :first-of-type': {marginTop: 0},
    '& :last-child': {marginBottom: 0},
  },
  tc = _.ol(re, Vt, {...kg, listStyle: 'decimal'}),
  rc = _.p(re, Vt, ({theme: e}) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    color: e.color.defaultText,
    '& code': mt({theme: e}),
  })),
  nc = _.pre(re, Vt, ({theme: e}) => ({
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0',
    '&:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    '& pre, &.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
      code: {color: 'inherit', fontSize: 'inherit'},
    },
    '& code': {whiteSpace: 'pre'},
    '& code, & tt': {border: 'none'},
  })),
  ac = _.span(re, ({theme: e}) => ({
    '&.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto',
      },
      '& span img': {display: 'block', float: 'left'},
      '& span span': {
        clear: 'both',
        color: e.color.darkest,
        display: 'block',
        padding: '5px 0 0',
      },
    },
    '&.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center',
      },
      '& span img': {margin: '0 auto', textAlign: 'center'},
    },
    '&.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px 0 0',
        textAlign: 'right',
      },
      '& span img': {margin: 0, textAlign: 'right'},
    },
    '&.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': {margin: '13px 0 0'},
    },
    '&.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right',
      },
    },
  })),
  oc = _.table(re, Vt, ({theme: e}) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    padding: 0,
    borderCollapse: 'collapse',
    '& tr': {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: e.appContentBg,
      margin: 0,
      padding: 0,
    },
    '& tr:nth-of-type(2n)': {
      backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter,
    },
    '& tr th': {
      fontWeight: 'bold',
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: '6px 13px',
    },
    '& tr td': {
      border: `1px solid ${e.appBorderColor}`,
      color: e.color.defaultText,
      margin: 0,
      padding: '6px 13px',
    },
    '& tr th :first-of-type, & tr td :first-of-type': {marginTop: 0},
    '& tr th :last-child, & tr td :last-child': {marginBottom: 0},
  })),
  lc = _.title(mt),
  _g = {
    paddingLeft: 30,
    '& :first-of-type': {marginTop: 0},
    '& :last-child': {marginBottom: 0},
  },
  ic = _.ul(re, Vt, {..._g, listStyle: 'disc'}),
  Jo = _.div(re),
  sc = {
    h1: (e) => a.createElement(Gu, {...ee(e, 'h1')}),
    h2: (e) => a.createElement(Ko, {...ee(e, 'h2')}),
    h3: (e) => a.createElement(Xo, {...ee(e, 'h3')}),
    h4: (e) => a.createElement(Yu, {...ee(e, 'h4')}),
    h5: (e) => a.createElement(Ku, {...ee(e, 'h5')}),
    h6: (e) => a.createElement(Xu, {...ee(e, 'h6')}),
    pre: (e) => a.createElement(nc, {...ee(e, 'pre')}),
    a: (e) => a.createElement(zu, {...ee(e, 'a')}),
    hr: (e) => a.createElement(Ju, {...ee(e, 'hr')}),
    dl: (e) => a.createElement(Wu, {...ee(e, 'dl')}),
    blockquote: (e) => a.createElement(qu, {...ee(e, 'blockquote')}),
    table: (e) => a.createElement(oc, {...ee(e, 'table')}),
    img: (e) => a.createElement(Qu, {...ee(e, 'img')}),
    div: (e) => a.createElement(Uu, {...ee(e, 'div')}),
    span: (e) => a.createElement(ac, {...ee(e, 'span')}),
    li: (e) => a.createElement(ec, {...ee(e, 'li')}),
    ul: (e) => a.createElement(ic, {...ee(e, 'ul')}),
    ol: (e) => a.createElement(tc, {...ee(e, 'ol')}),
    p: (e) => a.createElement(rc, {...ee(e, 'p')}),
    code: (e) => a.createElement(Yo, {...ee(e, 'code')}),
    tt: (e) => a.createElement(lc, {...ee(e, 'tt')}),
    resetwrapper: (e) => a.createElement(Jo, {...ee(e, 'resetwrapper')}),
  },
  Og = _.div(
    ({theme: e}) => ({
      display: 'inline-block',
      fontSize: 11,
      lineHeight: '12px',
      alignSelf: 'center',
      padding: '4px 12px',
      borderRadius: '3em',
      fontWeight: e.typography.weight.bold,
    }),
    {
      svg: {
        height: 12,
        width: 12,
        marginRight: 4,
        marginTop: -2,
        path: {fill: 'currentColor'},
      },
    },
    ({theme: e, status: t}) => {
      switch (t) {
        case 'critical':
          return {color: e.color.critical, background: e.background.critical}
        case 'negative':
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ee(0.9, e.color.negativeText)}`
                : 'none',
          }
        case 'warning':
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ee(0.9, e.color.warningText)}`
                : 'none',
          }
        case 'neutral':
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ee(0.9, e.color.dark)}`
                : 'none',
          }
        case 'positive':
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ee(0.9, e.color.positiveText)}`
                : 'none',
          }
        default:
          return {}
      }
    }
  ),
  Tg = ({...e}) => a.createElement(Og, {...e}),
  Mr = {
    user: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z',
      })
    ),
    useralt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z',
      })
    ),
    useradd: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z',
      })
    ),
    users: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z',
      }),
      a.createElement('path', {
        d: 'M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z',
      })
    ),
    profile: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z',
      })
    ),
    facehappy: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    faceneutral: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    facesad: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    accessibility: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
      }),
      a.createElement('path', {d: 'M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'}),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    accessibilityalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
      })
    ),
    arrowup: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z',
      })
    ),
    arrowdown: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z',
      })
    ),
    arrowleft: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z',
      })
    ),
    arrowright: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z',
      })
    ),
    arrowupalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z',
      })
    ),
    arrowdownalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z',
      })
    ),
    arrowleftalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z',
      })
    ),
    arrowrightalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z',
      })
    ),
    expandalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z',
      })
    ),
    collapse: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z',
      })
    ),
    expand: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z',
      })
    ),
    unfold: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z',
      }),
      a.createElement('path', {
        d: 'M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z',
      }),
      a.createElement('path', {
        d: 'M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z',
      })
    ),
    transfer: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z',
      })
    ),
    redirect: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z',
      })
    ),
    undo: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z',
      })
    ),
    reply: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z',
      })
    ),
    sync: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z',
      })
    ),
    upload: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    download: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z',
      })
    ),
    back: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z',
      })
    ),
    proceed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z',
      })
    ),
    refresh: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z',
      })
    ),
    globe: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z',
      })
    ),
    compass: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    location: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z',
      })
    ),
    pin: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z',
      })
    ),
    time: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    dashboard: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z',
      })
    ),
    timer: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z',
      })
    ),
    home: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z',
      })
    ),
    admin: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z',
      }),
      a.createElement('path', {
        d: 'M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z',
      })
    ),
    info: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    question: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    support: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
      })
    ),
    alert: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z',
      })
    ),
    email: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z',
      })
    ),
    phone: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z',
      })
    ),
    link: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z',
      }),
      a.createElement('path', {
        d: 'M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z',
      })
    ),
    unlink: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
      })
    ),
    bell: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z',
      })
    ),
    rss: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        d: 'M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
      })
    ),
    sharealt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z',
      }),
      a.createElement('path', {
        d: 'M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z',
      })
    ),
    share: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z',
      }),
      a.createElement('path', {
        d: 'M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z',
      })
    ),
    circlehollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z',
      })
    ),
    circle: a.createElement('path', {d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z'}),
    bookmarkhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z',
      })
    ),
    bookmark: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z',
      })
    ),
    hearthollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2',
      })
    ),
    heart: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z',
      })
    ),
    starhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z',
      })
    ),
    star: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z',
      })
    ),
    certificate: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z',
      })
    ),
    verified: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
      })
    ),
    thumbsup: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
      })
    ),
    shield: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z',
      })
    ),
    basket: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z',
      }),
      a.createElement('path', {
        d: 'M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z',
      }),
      a.createElement('path', {
        d: 'M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z',
      })
    ),
    beaker: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z',
      })
    ),
    hourglass: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {d: 'M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'}),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z',
      })
    ),
    flag: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z',
      })
    ),
    cloudhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z',
      })
    ),
    cloud: a.createElement('path', {
      d: 'M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z',
    }),
    edit: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z',
      })
    ),
    cog: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z',
        fill: '#333',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z',
      })
    ),
    nut: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z',
      })
    ),
    wrench: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
      })
    ),
    ellipsis: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
      })
    ),
    check: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z',
      })
    ),
    form: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z',
      }),
      a.createElement('path', {
        d: 'm6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z',
      })
    ),
    batchdeny: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
      })
    ),
    batchaccept: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
      })
    ),
    controls: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z',
      })
    ),
    plus: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z',
      })
    ),
    closeAlt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z',
      })
    ),
    cross: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z',
      })
    ),
    trash: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z',
      })
    ),
    pinalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z',
      })
    ),
    unpin: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
      })
    ),
    add: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    subtract: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    close: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    delete: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z',
      })
    ),
    passed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
      })
    ),
    changed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
      })
    ),
    failed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
      })
    ),
    clear: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z',
      })
    ),
    comment: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z',
      })
    ),
    commentadd: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
      })
    ),
    requestchange: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
      })
    ),
    comments: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z',
      })
    ),
    lock: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z',
      })
    ),
    unlock: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z',
      })
    ),
    key: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {d: 'M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'}),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z',
      })
    ),
    outbox: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z',
      }),
      a.createElement('path', {
        d: 'M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z',
      })
    ),
    credit: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z',
      })
    ),
    button: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z',
      }),
      a.createElement('path', {
        d: 'M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z',
      })
    ),
    type: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        d: 'M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z',
      })
    ),
    pointerdefault: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z',
      })
    ),
    pointerhand: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z',
      })
    ),
    browser: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      })
    ),
    tablet: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z',
      })
    ),
    mobile: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z',
      })
    ),
    watch: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        key: 'watch',
        fillRule: 'evenodd',
        d: 'M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
      })
    ),
    sidebar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z',
      })
    ),
    sidebaralt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z',
      })
    ),
    sidebaralttoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z',
      })
    ),
    sidebartoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z',
      })
    ),
    bottombar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z',
      })
    ),
    bottombartoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z',
      })
    ),
    cpu: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z',
      })
    ),
    database: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z',
      })
    ),
    memory: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z',
      })
    ),
    structure: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z',
      })
    ),
    box: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z',
      })
    ),
    power: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z',
      }),
      a.createElement('path', {
        d: 'M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z',
      })
    ),
    photo: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z',
      })
    ),
    component: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z',
      })
    ),
    grid: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z',
      })
    ),
    outline: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      })
    ),
    photodrag: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z',
      }),
      a.createElement('path', {
        d: 'M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z',
      })
    ),
    search: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
      })
    ),
    zoom: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
      })
    ),
    zoomout: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {d: 'M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z'}),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z',
      })
    ),
    zoomreset: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z',
      })
    ),
    eye: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z',
      })
    ),
    eyeclose: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z',
      }),
      a.createElement('path', {
        d: 'M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z',
      })
    ),
    lightning: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z',
      })
    ),
    lightningoff: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
      })
    ),
    contrast: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z',
      })
    ),
    switchalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z',
      })
    ),
    mirror: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z',
      })
    ),
    grow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z',
      }),
      a.createElement('path', {
        d: 'M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z',
      })
    ),
    paintbrush: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z',
      })
    ),
    ruler: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z',
      })
    ),
    stop: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    camera: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z',
      })
    ),
    video: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {d: 'M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'}),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z',
      })
    ),
    speaker: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z',
      }),
      a.createElement('path', {
        d: 'M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z',
      }),
      a.createElement('path', {
        d: 'M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z',
      })
    ),
    play: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z',
      })
    ),
    playback: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z',
      })
    ),
    playnext: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z',
      })
    ),
    rewind: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z',
      })
    ),
    fastforward: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z',
      })
    ),
    stopalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z',
      })
    ),
    sidebyside: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z',
      })
    ),
    stacked: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z',
      })
    ),
    sun: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
      }),
      a.createElement('path', {
        d: 'M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z',
      })
    ),
    moon: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z',
      })
    ),
    book: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z',
      })
    ),
    document: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z',
      })
    ),
    copy: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z',
      })
    ),
    category: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z',
      })
    ),
    folder: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z',
      })
    ),
    print: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z',
      })
    ),
    graphline: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z',
      })
    ),
    calendar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z',
      })
    ),
    graphbar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z',
      })
    ),
    menu: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z',
      })
    ),
    menualt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z',
      })
    ),
    filter: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
      })
    ),
    docchart: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z',
      })
    ),
    doclist: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z',
      })
    ),
    markup: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z',
      })
    ),
    bold: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z',
      })
    ),
    italic: a.createElement('path', {
      d: 'M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z',
    }),
    paperclip: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z',
      })
    ),
    listordered: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z',
      })
    ),
    listunordered: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z',
      })
    ),
    paragraph: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z',
      })
    ),
    markdown: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z',
      })
    ),
    repository: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z',
      }),
      a.createElement('path', {
        d: 'M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z',
      }),
      a.createElement('path', {
        d: 'M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z',
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z',
      })
    ),
    commit: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
      })
    ),
    branch: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      })
    ),
    pullrequest: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
      })
    ),
    merge: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      })
    ),
    apple: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z',
      })
    ),
    linux: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z',
      })
    ),
    ubuntu: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z',
      })
    ),
    windows: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z',
      })
    ),
    storybook: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z',
      })
    ),
    azuredevops: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z',
      })
    ),
    bitbucket: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z',
      })
    ),
    chrome: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z',
      })
    ),
    chromatic: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z',
      })
    ),
    componentdriven: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z',
      })
    ),
    discord: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z',
      })
    ),
    facebook: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z',
      })
    ),
    figma: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z',
      })
    ),
    gdrive: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z',
      })
    ),
    github: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z',
      })
    ),
    gitlab: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z',
      })
    ),
    google: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z',
      })
    ),
    graphql: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z',
      })
    ),
    medium: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z',
      })
    ),
    redux: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z',
      })
    ),
    twitter: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z',
      })
    ),
    youtube: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z',
      })
    ),
    vscode: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z',
      })
    ),
  },
  uc = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  ve = ({icon: e, useSymbol: t, ...r}) =>
    a.createElement(
      uc,
      {viewBox: '0 0 14 14', width: '14px', height: '14px', ...r},
      t ? a.createElement('use', {xlinkHref: `#icon--${e}`}) : Mr[e]
    ),
  Rg = b.memo(function ({icons: e = Object.keys(Mr)}) {
    return a.createElement(
      uc,
      {
        viewBox: '0 0 14 14',
        style: {position: 'absolute', width: 0, height: 0},
        'data-chromatic': 'ignore',
      },
      e.map((t) => a.createElement('symbol', {id: `icon--${t}`, key: t}, Mr[t]))
    )
  }),
  Fg = 0,
  $g = (e) =>
    e.button === Fg && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  Dg = (e, t) => {
    $g(e) && (e.preventDefault(), t(e))
  },
  Lg = _.span(
    ({withArrow: e}) =>
      e
        ? {
            '> svg:last-of-type': {
              height: '0.7em',
              width: '0.7em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit',
            },
          }
        : {},
    ({containsIcon: e}) =>
      e
        ? {
            svg: {
              height: '1em',
              width: '1em',
              verticalAlign: 'middle',
              position: 'relative',
              bottom: 0,
              marginRight: 0,
            },
          }
        : {}
  ),
  Mg = _.a(
    ({theme: e}) => ({
      display: 'inline-block',
      transition: 'all 150ms ease-out',
      textDecoration: 'none',
      color: e.color.secondary,
      '&:hover, &:focus': {
        cursor: 'pointer',
        color: Kt(0.07, e.color.secondary),
        'svg path:not([fill])': {fill: Kt(0.07, e.color.secondary)},
      },
      '&:active': {
        color: Kt(0.1, e.color.secondary),
        'svg path:not([fill])': {fill: Kt(0.1, e.color.secondary)},
      },
      svg: {
        display: 'inline-block',
        height: '1em',
        width: '1em',
        verticalAlign: 'text-top',
        position: 'relative',
        bottom: '-0.125em',
        marginRight: '0.4em',
        '& path': {fill: e.color.secondary},
      },
    }),
    ({theme: e, secondary: t, tertiary: r}) => {
      let n
      return (
        t && (n = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]),
        n
          ? {
              color: n[0],
              'svg path:not([fill])': {fill: n[0]},
              '&:hover': {color: n[1], 'svg path:not([fill])': {fill: n[1]}},
              '&:active': {color: n[2], 'svg path:not([fill])': {fill: n[2]}},
            }
          : {}
      )
    },
    ({nochrome: e}) =>
      e
        ? {
            color: 'inherit',
            '&:hover, &:active': {
              color: 'inherit',
              textDecoration: 'underline',
            },
          }
        : {},
    ({theme: e, inverse: t}) =>
      t
        ? {
            color: e.color.lightest,
            ':not([fill])': {fill: e.color.lightest},
            '&:hover': {
              color: e.color.lighter,
              'svg path:not([fill])': {fill: e.color.lighter},
            },
            '&:active': {
              color: e.color.light,
              'svg path:not([fill])': {fill: e.color.light},
            },
          }
        : {},
    ({isButton: e}) =>
      e
        ? {
            border: 0,
            borderRadius: 0,
            background: 'none',
            padding: 0,
            fontSize: 'inherit',
          }
        : {}
  ),
  xt = ({
    cancel: e,
    children: t,
    onClick: r,
    withArrow: n,
    containsIcon: o,
    className: l,
    ...i
  }) =>
    a.createElement(
      Mg,
      {...i, onClick: r && e ? (u) => Dg(u, r) : r, className: l},
      a.createElement(
        Lg,
        {withArrow: n, containsIcon: o},
        t,
        n && a.createElement(ve, {icon: 'arrowright'})
      )
    )
xt.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1,
}
var Bg = _.div(({theme: e}) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: '1.6',
    h1: {
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold,
    },
    h2: {
      fontSize: `${e.typography.size.m2}px`,
      borderBottom: `1px solid ${e.appBorderColor}`,
    },
    h3: {fontSize: `${e.typography.size.m1}px`},
    h4: {fontSize: `${e.typography.size.s3}px`},
    h5: {fontSize: `${e.typography.size.s2}px`},
    h6: {fontSize: `${e.typography.size.s2}px`, color: e.color.dark},
    'pre:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    'pre pre, pre.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
    },
    'pre pre code, pre.prismjs code': {color: 'inherit', fontSize: 'inherit'},
    'pre code': {
      margin: 0,
      padding: 0,
      whiteSpace: 'pre',
      border: 'none',
      background: 'transparent',
    },
    'pre code, pre tt': {backgroundColor: 'transparent', border: 'none'},
    'body > *:first-of-type': {marginTop: '0 !important'},
    'body > *:last-child': {marginBottom: '0 !important'},
    a: {color: e.color.secondary, textDecoration: 'none'},
    'a.absent': {color: '#cc0000'},
    'a.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: '20px 0 10px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      '&:first-of-type': {marginTop: 0, paddingTop: 0},
      '&:hover a.anchor': {textDecoration: 'none'},
      '& tt, & code': {fontSize: 'inherit'},
    },
    'h1:first-of-type + h2': {marginTop: 0, paddingTop: 0},
    'p, blockquote, ul, ol, dl, li, table, pre': {margin: '15px 0'},
    hr: {
      border: '0 none',
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0,
    },
    'body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type':
      {marginTop: 0, paddingTop: 0},
    'body > h1:first-of-type + h2': {marginTop: 0, paddingTop: 0},
    'a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6':
      {marginTop: 0, paddingTop: 0},
    'h1 p, h2 p, h3 p, h4 p, h5 p, h6 p': {marginTop: 0},
    'li p.first': {display: 'inline-block'},
    'ul, ol': {
      paddingLeft: 30,
      '& :first-of-type': {marginTop: 0},
      '& :last-child': {marginBottom: 0},
    },
    dl: {padding: 0},
    'dl dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      margin: '0 0 15px',
      padding: '0 15px',
      '&:first-of-type': {padding: 0},
      '& > :first-of-type': {marginTop: 0},
      '& > :last-child': {marginBottom: 0},
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: '0 15px',
      color: e.color.dark,
      '& > :first-of-type': {marginTop: 0},
      '& > :last-child': {marginBottom: 0},
    },
    table: {
      padding: 0,
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        '& th': {
          fontWeight: 'bold',
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px',
        },
        '& td': {
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px',
        },
        '&:nth-of-type(2n)': {backgroundColor: e.color.lighter},
        '& th :first-of-type, & td :first-of-type': {marginTop: 0},
        '& th :last-child, & td :last-child': {marginBottom: 0},
      },
    },
    img: {maxWidth: '100%'},
    'span.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto',
      },
      '& span img': {display: 'block', float: 'left'},
      '& span span': {
        clear: 'both',
        color: e.color.darkest,
        display: 'block',
        padding: '5px 0 0',
      },
    },
    'span.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center',
      },
      '& span img': {margin: '0 auto', textAlign: 'center'},
    },
    'span.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px 0 0',
        textAlign: 'right',
      },
      '& span img': {margin: 0, textAlign: 'right'},
    },
    'span.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': {margin: '13px 0 0'},
    },
    'span.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right',
      },
    },
    'code, tt': {
      margin: '0 2px',
      padding: '0 5px',
      whiteSpace: 'nowrap',
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === 'dark' && e.color.darkest,
    },
  })),
  Pt = [],
  or = null,
  Ig = b.lazy(async () => {
    let {SyntaxHighlighter: e} = await wt(
      () => import('./syntaxhighlighter-NMPM6SWI-7fc4df5e.js'),
      [
        './syntaxhighlighter-NMPM6SWI-7fc4df5e.js',
        './iframe-a5f0bdc1.js',
        './index-f1f2c4b1.js',
        './_getPrototype-6a30002d.js',
        './index-c74c9f7f.js',
        './assertThisInitialized-4401020c.js',
        './isNativeReflectConstruct-e378569d.js',
        './index-356e4a49.js',
      ],
      import.meta.url
    )
    return (
      Pt.length > 0 &&
        (Pt.forEach((t) => {
          e.registerLanguage(...t)
        }),
        (Pt = [])),
      or === null && (or = e),
      {default: (t) => a.createElement(e, {...t})}
    )
  }),
  Pg = b.lazy(async () => {
    let [{SyntaxHighlighter: e}, {formatter: t}] = await Promise.all([
      wt(
        () => import('./syntaxhighlighter-NMPM6SWI-7fc4df5e.js'),
        [
          './syntaxhighlighter-NMPM6SWI-7fc4df5e.js',
          './iframe-a5f0bdc1.js',
          './index-f1f2c4b1.js',
          './_getPrototype-6a30002d.js',
          './index-c74c9f7f.js',
          './assertThisInitialized-4401020c.js',
          './isNativeReflectConstruct-e378569d.js',
          './index-356e4a49.js',
        ],
        import.meta.url
      ),
      wt(
        () => import('./formatter-SWP5E3XI-5ff6e4ab.js'),
        [
          './formatter-SWP5E3XI-5ff6e4ab.js',
          './iframe-a5f0bdc1.js',
          './index-f1f2c4b1.js',
          './_getPrototype-6a30002d.js',
          './index-c74c9f7f.js',
          './assertThisInitialized-4401020c.js',
          './isNativeReflectConstruct-e378569d.js',
          './index-356e4a49.js',
        ],
        import.meta.url
      ),
    ])
    return (
      Pt.length > 0 &&
        (Pt.forEach((r) => {
          e.registerLanguage(...r)
        }),
        (Pt = [])),
      or === null && (or = e),
      {default: (r) => a.createElement(e, {...r, formatter: t})}
    )
  }),
  Zn = (e) =>
    a.createElement(
      b.Suspense,
      {fallback: a.createElement('div', null)},
      e.format !== !1
        ? a.createElement(Pg, {...e})
        : a.createElement(Ig, {...e})
    )
Zn.registerLanguage = (...e) => {
  if (or !== null) {
    or.registerLanguage(...e)
    return
  }
  Pt.push(e)
}
var Ng = (e) => (typeof e == 'number' ? e : Number(e)),
  jg = _.div(
    ({theme: e, col: t, row: r = 1}) =>
      t
        ? {
            display: 'inline-block',
            verticalAlign: 'inherit',
            '& > *': {marginLeft: t * e.layoutMargin, verticalAlign: 'inherit'},
            [`& > *:first-child${Ua}`]: {marginLeft: 0},
          }
        : {
            '& > *': {marginTop: r * e.layoutMargin},
            [`& > *:first-child${Ua}`]: {marginTop: 0},
          },
    ({theme: e, outer: t, col: r, row: n}) => {
      switch (!0) {
        case !!(t && r):
          return {
            marginLeft: t * e.layoutMargin,
            marginRight: t * e.layoutMargin,
          }
        case !!(t && n):
          return {
            marginTop: t * e.layoutMargin,
            marginBottom: t * e.layoutMargin,
          }
        default:
          return {}
      }
    }
  ),
  Hg = ({col: e, row: t, outer: r, children: n, ...o}) => {
    let l = Ng(typeof r == 'number' || !r ? r : e || t)
    return a.createElement(jg, {col: e, row: t, outer: l, ...o}, n)
  },
  Zg = _.div(({theme: e}) => ({fontWeight: e.typography.weight.bold})),
  Vg = _.div(),
  zg = _.div(({theme: e}) => ({
    padding: 30,
    textAlign: 'center',
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  cc = ({children: e, ...t}) => {
    let [r, n] = b.Children.toArray(e)
    return a.createElement(
      zg,
      {...t},
      a.createElement(Zg, null, r),
      n && a.createElement(Vg, null, n)
    )
  },
  qg = _.div(({scale: e = 1, elementHeight: t}) => ({
    height: t || 'auto',
    transformOrigin: 'top left',
    transform: `scale(${1 / e})`,
  }))
function Ug({scale: e, children: t}) {
  let r = b.useRef(null),
    [n, o] = b.useState(0),
    l = b.useCallback(
      ({height: i}) => {
        i && o(i / e)
      },
      [e]
    )
  return (
    b.useEffect(() => {
      r.current && o(r.current.getBoundingClientRect().height)
    }, [e]),
    Iu({ref: r, onResize: l}),
    a.createElement(
      qg,
      {scale: e, elementHeight: n},
      a.createElement('div', {ref: r, className: 'innerZoomElementWrapper'}, t)
    )
  )
}
var Wg = class extends b.Component {
    constructor() {
      super(...arguments), (this.iframe = null)
    }
    componentDidMount() {
      let {iFrameRef: e} = this.props
      this.iframe = e.current
    }
    shouldComponentUpdate(e) {
      let {scale: t, active: r} = this.props
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active &&
          this.iframe.setAttribute(
            'data-is-storybook',
            e.active ? 'true' : 'false'
          ),
        e.children.props.src !== this.props.children.props.src
      )
    }
    setIframeInnerZoom(e) {
      try {
        Object.assign(this.iframe.contentDocument.body.style, {
          width: `${e * 100}%`,
          height: `${e * 100}%`,
          transform: `scale(${1 / e})`,
          transformOrigin: 'top left',
        })
      } catch {
        this.setIframeZoom(e)
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: 'top left',
      })
    }
    render() {
      let {children: e} = this.props
      return a.createElement(a.Fragment, null, e)
    }
  },
  dc = {Element: Ug, IFrame: Wg},
  {document: Gg} = qm,
  Yg = _.strong(({theme: e}) => ({color: e.color.orange})),
  Kg = _.strong(({theme: e}) => ({
    color: e.color.ancillary,
    textDecoration: 'underline',
  })),
  Ei = _.em(({theme: e}) => ({color: e.textMutedColor})),
  Xg = /(Error): (.*)\n/,
  Jg = /at (?:(.*) )?\(?(.+)\)?/,
  Qg = /([^@]+)?(?:\/<)?@(.+)?/,
  eh = /([^@]+)?@(.+)?/,
  pc = ({error: e}) => {
    if (!e)
      return a.createElement(
        b.Fragment,
        null,
        'This error has no stack or message'
      )
    if (!e.stack)
      return a.createElement(
        b.Fragment,
        null,
        e.message || 'This error has no stack or message'
      )
    let t = e.stack.toString()
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`)
    let r = t.match(Xg)
    if (!r) return a.createElement(b.Fragment, null, t)
    let [, n, o] = r,
      l = t.split(/\n/).slice(1),
      [, ...i] = l
        .map((u) => {
          let s = u.match(Jg) || u.match(Qg) || u.match(eh)
          return s
            ? {
                name: (s[1] || '').replace('/<', ''),
                location: s[2].replace(Gg.location.origin, ''),
              }
            : null
        })
        .filter(Boolean)
    return a.createElement(
      b.Fragment,
      null,
      a.createElement('span', null, n),
      ': ',
      a.createElement(Yg, null, o),
      a.createElement('br', null),
      i.map((u, s) =>
        u.name
          ? a.createElement(
              b.Fragment,
              {key: s},
              '  ',
              'at ',
              a.createElement(Kg, null, u.name),
              ' (',
              a.createElement(Ei, null, u.location),
              ')',
              a.createElement('br', null)
            )
          : a.createElement(
              b.Fragment,
              {key: s},
              '  ',
              'at ',
              a.createElement(Ei, null, u.location),
              a.createElement('br', null)
            )
      )
    )
  },
  fc = _.button(
    ({small: e, theme: t}) => ({
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: e ? '8px 16px' : '13px 20px',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      transitionProperty: 'background, box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-out',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      opacity: 1,
      margin: 0,
      background: 'transparent',
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: '1',
      svg: {
        display: 'inline-block',
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: 'top',
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: 'none',
        path: {fill: 'currentColor'},
      },
    }),
    ({disabled: e}) =>
      e
        ? {
            cursor: 'not-allowed !important',
            opacity: 0.5,
            '&:hover': {transform: 'none'},
          }
        : {},
    ({containsIcon: e, small: t}) =>
      e
        ? {
            svg: {display: 'block', margin: 0},
            ...(t ? {padding: 10} : {padding: 13}),
          }
        : {},
    ({theme: e, primary: t, secondary: r, gray: n}) => {
      let o
      return (
        n
          ? (o = e.color.mediumlight)
          : r
          ? (o = e.color.secondary)
          : t && (o = e.color.primary),
        o
          ? {
              background: o,
              color: n ? e.color.darkest : e.color.lightest,
              '&:hover': {background: Kt(0.05, o)},
              '&:active': {boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 3em inset'},
              '&:focus': {
                boxShadow: `${ct(o, 1)} 0 1px 9px 2px`,
                outline: 'none',
              },
              '&:focus:hover': {boxShadow: `${ct(o, 0.2)} 0 8px 18px 0px`},
            }
          : {}
      )
    },
    ({theme: e, tertiary: t, inForm: r, small: n}) =>
      t
        ? {
            background: e.button.background,
            color: e.input.color,
            boxShadow: `${e.button.border} 0 0 0 1px inset`,
            borderRadius: e.input.borderRadius,
            ...(r && n ? {padding: '10px 16px'} : {}),
            '&:hover': {
              background:
                e.base === 'light'
                  ? Kt(0.02, e.button.background)
                  : yg(0.03, e.button.background),
              ...(r
                ? {}
                : {
                    boxShadow:
                      'rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset',
                  }),
            },
            '&:active': {background: e.button.background},
            '&:focus': {
              boxShadow: `${ct(e.color.secondary, 1)} 0 0 0 1px inset`,
              outline: 'none',
            },
          }
        : {},
    ({theme: e, outline: t}) =>
      t
        ? {
            boxShadow: `${Ee(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: Ee(0.3, e.color.defaultText),
            background: 'transparent',
            '&:hover, &:focus': {
              boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 1px inset`,
              outline: 'none',
            },
            '&:active': {
              boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: Ee(0, e.color.defaultText),
            },
          }
        : {},
    ({theme: e, outline: t, primary: r}) => {
      let n = e.color.primary
      return t && r
        ? {
            boxShadow: `${n} 0 0 0 1px inset`,
            color: n,
            'svg path:not([fill])': {fill: n},
            '&:hover': {
              boxShadow: `${n} 0 0 0 1px inset`,
              background: 'transparent',
            },
            '&:active': {
              background: n,
              boxShadow: `${n} 0 0 0 1px inset`,
              color: e.color.tertiary,
            },
            '&:focus': {
              boxShadow: `${n} 0 0 0 1px inset, ${ct(n, 0.4)} 0 1px 9px 2px`,
              outline: 'none',
            },
            '&:focus:hover': {
              boxShadow: `${n} 0 0 0 1px inset, ${ct(n, 0.2)} 0 8px 18px 0px`,
            },
          }
        : {}
    },
    ({theme: e, outline: t, primary: r, secondary: n}) => {
      let o
      return (
        n ? (o = e.color.secondary) : r && (o = e.color.primary),
        t && o
          ? {
              boxShadow: `${o} 0 0 0 1px inset`,
              color: o,
              'svg path:not([fill])': {fill: o},
              '&:hover': {
                boxShadow: `${o} 0 0 0 1px inset`,
                background: 'transparent',
              },
              '&:active': {
                background: o,
                boxShadow: `${o} 0 0 0 1px inset`,
                color: e.color.tertiary,
              },
              '&:focus': {
                boxShadow: `${o} 0 0 0 1px inset, ${ct(o, 0.4)} 0 1px 9px 2px`,
                outline: 'none',
              },
              '&:focus:hover': {
                boxShadow: `${o} 0 0 0 1px inset, ${ct(o, 0.2)} 0 8px 18px 0px`,
              },
            }
          : {}
      )
    }
  ),
  th = fc.withComponent('a'),
  mc = Object.assign(
    b.forwardRef(function ({isLink: e, children: t, ...r}, n) {
      return e
        ? a.createElement(th, {...r, ref: n}, t)
        : a.createElement(fc, {...r, ref: n}, t)
    }),
    {defaultProps: {isLink: !1}}
  ),
  rh = _.label(({theme: e}) => ({
    display: 'flex',
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: '0 15px',
    padding: '8px 0',
    '&:last-child': {marginBottom: '3rem'},
  })),
  nh = _.span(({theme: e}) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    lineHeight: '16px',
  })),
  gc = ({label: e, children: t, ...r}) =>
    a.createElement(
      rh,
      {...r},
      e ? a.createElement(nh, null, a.createElement('span', null, e)) : null,
      t
    )
gc.defaultProps = {label: void 0}
var xi = function (e, t) {
    if (typeof e == 'function') {
      e(t)
      return
    }
    e.current = t
  },
  ah = function (e, t) {
    var r = b.useRef()
    return b.useCallback(
      function (n) {
        ;(e.current = n),
          r.current && xi(r.current, null),
          (r.current = t),
          t && xi(t, n)
      },
      [t]
    )
  },
  oh = ah,
  lh = function () {},
  ih = [
    'cacheMeasurements',
    'maxRows',
    'minRows',
    'onChange',
    'onHeightChange',
  ],
  sh = function (e, t) {
    e.cacheMeasurements, e.maxRows, e.minRows
    var r = e.onChange,
      n = r === void 0 ? lh : r
    e.onHeightChange
    var o = To(e, ih)
    o.value
    var l = b.useRef(null),
      i = oh(l, t)
    return (
      b.useRef(0),
      b.useRef(),
      b.createElement('textarea', U({}, o, {onChange: n, ref: i}))
    )
  },
  uh = b.forwardRef(sh),
  ch = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  },
  Qo = ({theme: e}) => ({
    ...ch,
    transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
    color: e.input.color || 'inherit',
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    padding: '6px 10px',
    boxSizing: 'border-box',
    height: 32,
    '&[type="file"]': {height: 'auto'},
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
    '&[disabled]': {cursor: 'not-allowed', opacity: 0.5},
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
    '&::placeholder': {color: e.textMutedColor, opacity: 1},
  }),
  Vn = ({size: e}) => {
    switch (e) {
      case '100%':
        return {width: '100%'}
      case 'flex':
        return {flex: 1}
      case 'auto':
      default:
        return {display: 'inline'}
    }
  },
  hc = ({align: e}) => {
    switch (e) {
      case 'end':
        return {textAlign: 'right'}
      case 'center':
        return {textAlign: 'center'}
      case 'start':
      default:
        return {textAlign: 'left'}
    }
  },
  zn = ({valid: e, theme: t}) => {
    switch (e) {
      case 'valid':
        return {boxShadow: `${t.color.positive} 0 0 0 1px inset !important`}
      case 'error':
        return {boxShadow: `${t.color.negative} 0 0 0 1px inset !important`}
      case 'warn':
        return {boxShadow: `${t.color.warning} 0 0 0 1px inset`}
      case void 0:
      case null:
      default:
        return {}
    }
  },
  dh = Object.assign(
    _(
      b.forwardRef(function ({size: e, valid: t, align: r, ...n}, o) {
        return a.createElement('input', {...n, ref: o})
      })
    )(Qo, Vn, hc, zn, {minHeight: 32}),
    {displayName: 'Input'}
  ),
  ph = Object.assign(
    _(
      b.forwardRef(function ({size: e, valid: t, align: r, ...n}, o) {
        return a.createElement('select', {...n, ref: o})
      })
    )(Qo, Vn, zn, {
      height: 32,
      userSelect: 'none',
      paddingRight: 20,
      appearance: 'menulist',
    }),
    {displayName: 'Select'}
  ),
  fh = Object.assign(
    _(
      b.forwardRef(function ({size: e, valid: t, align: r, ...n}, o) {
        return a.createElement(uh, {...n, ref: o})
      })
    )(Qo, Vn, hc, zn, ({height: e = 400}) => ({
      overflow: 'visible',
      maxHeight: e,
    })),
    {displayName: 'Textarea'}
  ),
  mh = _(
    b.forwardRef(function ({size: e, valid: t, align: r, ...n}, o) {
      return a.createElement(mc, {...n, ref: o})
    })
  )(Vn, zn, {
    userSelect: 'none',
    overflow: 'visible',
    zIndex: 2,
    '&:hover': {transform: 'none'},
  }),
  gh = Object.assign(
    b.forwardRef(function (e, t) {
      return a.createElement(mh, {
        ...e,
        tertiary: !0,
        small: !0,
        inForm: !0,
        ref: t,
      })
    }),
    {displayName: 'Button'}
  ),
  je = Object.assign(_.form({boxSizing: 'border-box', width: '100%'}), {
    Field: gc,
    Input: dh,
    Select: ph,
    Textarea: fh,
    Button: gh,
  }),
  hh = b.lazy(() =>
    wt(
      () => import('./WithTooltip-4HIR6TLV-2564cee4.js'),
      [
        './WithTooltip-4HIR6TLV-2564cee4.js',
        './iframe-a5f0bdc1.js',
        './index-f1f2c4b1.js',
        './_getPrototype-6a30002d.js',
        './index-c74c9f7f.js',
        './assertThisInitialized-4401020c.js',
        './isNativeReflectConstruct-e378569d.js',
        './index-356e4a49.js',
      ],
      import.meta.url
    ).then((e) => ({default: e.WithTooltip}))
  ),
  bh = (e) =>
    a.createElement(
      b.Suspense,
      {fallback: a.createElement('div', null)},
      a.createElement(hh, {...e})
    ),
  yh = b.lazy(() =>
    wt(
      () => import('./WithTooltip-4HIR6TLV-2564cee4.js'),
      [
        './WithTooltip-4HIR6TLV-2564cee4.js',
        './iframe-a5f0bdc1.js',
        './index-f1f2c4b1.js',
        './_getPrototype-6a30002d.js',
        './index-c74c9f7f.js',
        './assertThisInitialized-4401020c.js',
        './isNativeReflectConstruct-e378569d.js',
        './index-356e4a49.js',
      ],
      import.meta.url
    ).then((e) => ({default: e.WithTooltipPure}))
  ),
  bc = (e) =>
    a.createElement(
      b.Suspense,
      {fallback: a.createElement('div', null)},
      a.createElement(yh, {...e})
    ),
  vh = _.div(({theme: e}) => ({fontWeight: e.typography.weight.bold})),
  Eh = _.span(),
  xh = _.div(({theme: e}) => ({
    marginTop: 8,
    textAlign: 'center',
    '> *': {margin: '0 8px', fontWeight: e.typography.weight.bold},
  })),
  wh = _.div(({theme: e}) => ({
    color: e.color.defaultText,
    lineHeight: '18px',
  })),
  Ah = _.div({padding: 15, width: 280, boxSizing: 'border-box'}),
  yc = ({title: e, desc: t, links: r}) =>
    a.createElement(
      Ah,
      null,
      a.createElement(
        wh,
        null,
        e && a.createElement(vh, null, e),
        t && a.createElement(Eh, null, t)
      ),
      r &&
        a.createElement(
          xh,
          null,
          r.map(({title: n, ...o}) => a.createElement(xt, {...o, key: n}, n))
        )
    )
yc.defaultProps = {title: null, desc: null, links: null}
var Sh = _.div(({theme: e}) => ({
    padding: '2px 6px',
    lineHeight: '16px',
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: -1,
    background:
      e.base === 'light' ? 'rgba(60, 60, 60, 0.9)' : 'rgba(0, 0, 0, 0.95)',
    margin: 6,
  })),
  Ch = ({note: e, ...t}) => a.createElement(Sh, {...t}, e),
  kh = _(({active: e, loading: t, disabled: r, ...n}) =>
    a.createElement('span', {...n})
  )(
    ({theme: e}) => ({
      color: e.color.defaultText,
      fontWeight: e.typography.weight.regular,
    }),
    ({active: e, theme: t}) =>
      e ? {color: t.color.secondary, fontWeight: t.typography.weight.bold} : {},
    ({loading: e, theme: t}) =>
      e
        ? {display: 'inline-block', flex: 'none', ...t.animation.inlineGlow}
        : {},
    ({disabled: e, theme: t}) =>
      e ? {color: Ee(0.7, t.color.defaultText)} : {}
  ),
  _h = _.span({
    display: 'flex',
    '& svg': {height: 12, width: 12, margin: '3px 0', verticalAlign: 'top'},
    '& path': {fill: 'inherit'},
  }),
  Oh = _.span(
    {flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column'},
    ({isIndented: e}) => (e ? {marginLeft: 24} : {})
  ),
  Th = _.span(
    ({theme: e}) => ({fontSize: '11px', lineHeight: '14px'}),
    ({active: e, theme: t}) => (e ? {color: t.color.secondary} : {}),
    ({theme: e, disabled: t}) => (t ? {color: e.textMutedColor} : {})
  ),
  wi = _.span(
    ({active: e, theme: t}) =>
      e
        ? {
            '& svg': {opacity: 1},
            '& svg path:not([fill])': {fill: t.color.secondary},
          }
        : {},
    () => ({display: 'flex', maxWidth: 14})
  ),
  Rh = _.a(
    ({theme: e}) => ({
      fontSize: e.typography.size.s1,
      transition: 'all 150ms ease-out',
      color: e.color.dark,
      textDecoration: 'none',
      cursor: 'pointer',
      justifyContent: 'space-between',
      lineHeight: '18px',
      padding: '7px 10px',
      display: 'flex',
      alignItems: 'center',
      '& > * + *': {paddingLeft: 10},
      '&:hover': {background: e.background.hoverable},
      '&:hover svg': {opacity: 1},
    }),
    ({disabled: e}) => (e ? {cursor: 'not-allowed'} : {})
  ),
  Fh = Ht(100)((e, t, r) => {
    let n = {}
    return (
      e && Object.assign(n, {onClick: e}),
      t && Object.assign(n, {href: t}),
      r && t && Object.assign(n, {to: t, as: r}),
      n
    )
  }),
  vc = ({
    loading: e,
    left: t,
    title: r,
    center: n,
    right: o,
    icon: l,
    active: i,
    disabled: u,
    isIndented: s,
    href: c,
    onClick: d,
    LinkWrapper: m,
    ...f
  }) => {
    let p = Fh(d, c, m),
      h = {active: i, disabled: u},
      g = typeof l == 'string' && Mr[l]
    return a.createElement(
      Rh,
      {...h, ...f, ...p},
      l
        ? a.createElement(wi, {...h}, g ? a.createElement(ve, {icon: l}) : l)
        : t && a.createElement(wi, {...h}, t),
      r || n
        ? a.createElement(
            Oh,
            {isIndented: !t && !l && s},
            r && a.createElement(kh, {...h, loading: e}, r),
            n && a.createElement(Th, {...h}, n)
          )
        : null,
      o && a.createElement(_h, {...h}, o)
    )
  }
vc.defaultProps = {
  loading: !1,
  left: null,
  title: a.createElement('span', null, 'Loading state'),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
}
var el = vc,
  $h = _.div(
    {
      minWidth: 180,
      overflow: 'hidden',
      overflowY: 'auto',
      maxHeight: 15.5 * 32,
    },
    ({theme: e}) => ({borderRadius: e.appBorderRadius})
  ),
  Dh = (e) => {
    let {LinkWrapper: t, onClick: r, id: n, isIndented: o, ...l} = e,
      {title: i, href: u, active: s} = l,
      c = b.useCallback(
        (m) => {
          r(m, l)
        },
        [r]
      ),
      d = !!r
    return a.createElement(el, {
      title: i,
      active: s,
      href: u,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: o,
      ...l,
      ...(d ? {onClick: c} : {}),
    })
  },
  tl = ({links: e, LinkWrapper: t}) => {
    let r = e.some((n) => n.left || n.icon)
    return a.createElement(
      $h,
      null,
      e.map(({isGatsby: n, ...o}) =>
        a.createElement(Dh, {
          key: o.id,
          LinkWrapper: n ? t : null,
          isIndented: r,
          ...o,
        })
      )
    )
  }
tl.defaultProps = {LinkWrapper: el.defaultProps.LinkWrapper}
var rl = a.forwardRef(({children: e, ...t}, r) =>
  t.href != null
    ? a.createElement('a', {ref: r, ...t}, e)
    : a.createElement('button', {ref: r, type: 'button', ...t}, e)
)
rl.displayName = 'ButtonOrLink'
var zr = _(rl, {shouldForwardProp: Eo})(
  {
    whiteSpace: 'normal',
    display: 'inline-flex',
    overflow: 'hidden',
    verticalAlign: 'top',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    '&:empty': {display: 'none'},
  },
  ({theme: e}) => ({
    padding: '0 15px',
    transition: 'color 0.2s linear, border-bottom-color 0.2s linear',
    height: 40,
    lineHeight: '12px',
    cursor: 'pointer',
    background: 'transparent',
    border: '0 solid transparent',
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    fontWeight: 'bold',
    fontSize: 13,
    '&:focus': {outline: '0 none', borderBottomColor: e.color.secondary},
  }),
  ({active: e, textColor: t, theme: r}) =>
    e
      ? {color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor}
      : {color: t || r.barTextColor, borderBottomColor: 'transparent'}
)
zr.displayName = 'TabButton'
var Nt = _(rl, {shouldForwardProp: Eo})(
  () => ({
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: 4,
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 13,
    fontWeight: 'bold',
    height: 28,
    justifyContent: 'center',
    marginTop: 6,
    padding: '8px 7px',
    '& > svg': {width: 14},
  }),
  ({active: e, theme: t}) =>
    e
      ? {backgroundColor: t.background.hoverable, color: t.barSelectedColor}
      : {},
  ({disabled: e, theme: t}) =>
    e
      ? {opacity: 0.5, cursor: 'not-allowed'}
      : {
          '&:hover, &:focus-visible': {
            background: Ee(0.88, t.color.secondary),
            color: t.barHoverColor,
          },
          '&:focus-visible': {outline: jn},
          '&:focus:not(:focus-visible)': {outline: 'none'},
        }
)
Nt.displayName = 'IconButton'
var Lh = _.div(({theme: e}) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  Mh = _.div(() => ({marginTop: 6, padding: 7, height: 28})),
  Ec = () => a.createElement(Mh, null, a.createElement(Lh, null)),
  no = _.div(
    {
      display: 'flex',
      whiteSpace: 'nowrap',
      flexBasis: 'auto',
      marginLeft: 3,
      marginRight: 3,
    },
    ({scrollable: e}) => (e ? {flexShrink: 0} : {}),
    ({left: e}) => (e ? {'& > *': {marginLeft: 4}} : {}),
    ({right: e}) => (e ? {marginLeft: 30, '& > *': {marginRight: 4}} : {})
  )
no.displayName = 'Side'
var Bh = ({children: e, className: t, scrollable: r}) =>
    r
      ? a.createElement(Io, {vertical: !1, className: t}, e)
      : a.createElement('div', {className: t}, e),
  nl = _(Bh)(
    ({theme: e, scrollable: t = !0}) => ({
      color: e.barTextColor,
      width: '100%',
      height: 40,
      flexShrink: 0,
      overflow: t ? 'auto' : 'hidden',
      overflowY: 'hidden',
    }),
    ({theme: e, border: t = !1}) =>
      t
        ? {
            boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
            background: e.barBg,
          }
        : {}
  )
nl.displayName = 'Bar'
var Ih = _.div(({bgColor: e}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    flexWrap: 'nowrap',
    flexShrink: 0,
    height: 40,
    backgroundColor: e || '',
  })),
  qn = ({children: e, backgroundColor: t, ...r}) => {
    let [n, o] = b.Children.toArray(e)
    return a.createElement(
      nl,
      {...r},
      a.createElement(
        Ih,
        {bgColor: t},
        a.createElement(no, {scrollable: r.scrollable, left: !0}, n),
        o ? a.createElement(no, {right: !0}, o) : null
      )
    )
  }
qn.displayName = 'FlexBar'
var xc = _.div(({active: e}) => (e ? {display: 'block'} : {display: 'none'})),
  Ai = (e) =>
    b.Children.toArray(e).map(
      ({props: {title: t, id: r, color: n, children: o}}) => {
        let l = Array.isArray(o) ? o[0] : o
        return {
          title: t,
          id: r,
          ...(n ? {color: n} : {}),
          render:
            typeof l == 'function'
              ? l
              : ({active: i}) =>
                  a.createElement(xc, {active: i, role: 'tabpanel'}, l),
        }
      }
    ),
  Ph = _.span(({theme: e, isActive: t}) => ({
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: '3px solid transparent',
    borderLeft: '3px solid transparent',
    borderTop: '3px solid',
    transition: 'transform .1s ease-out',
  })),
  Nh = _(zr)(
    ({active: e, theme: t, preActive: r}) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  )
function jh(e) {
  let t = b.useRef(),
    r = b.useRef(),
    n = b.useRef(new Map()),
    {width: o = 1} = Iu({ref: t}),
    [l, i] = b.useState(e),
    [u, s] = b.useState([]),
    c = b.useRef(e),
    d = b.useCallback(
      ({menuName: f, actions: p}) => {
        let h = u.some(({active: y}) => y),
          [g, x] = b.useState(!1)
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            $m,
            {
              interactive: !0,
              visible: g,
              onVisibleChange: x,
              placement: 'bottom',
              delayHide: 100,
              tooltip: a.createElement(tl, {
                links: u.map(({title: y, id: w, color: v, active: E}) => ({
                  id: w,
                  title: y,
                  color: v,
                  active: E,
                  onClick: (A) => {
                    A.preventDefault(), p.onSelect(w)
                  },
                })),
              }),
            },
            a.createElement(
              Nh,
              {
                ref: r,
                active: h,
                preActive: g,
                style: {visibility: u.length ? 'visible' : 'hidden'},
                'aria-hidden': !u.length,
                className: 'tabbutton',
                type: 'button',
                role: 'tab',
              },
              f,
              a.createElement(Ph, {
                className: 'addon-collapsible-icon',
                isActive: h || g,
              })
            )
          ),
          u.map(({title: y, id: w, color: v}, E) => {
            let A = `index-${E}`
            return a.createElement(
              zr,
              {
                id: `tabbutton-${ju(w) ?? A}`,
                style: {visibility: 'hidden'},
                'aria-hidden': !0,
                tabIndex: -1,
                ref: (S) => {
                  n.current.set(w, S)
                },
                className: 'tabbutton',
                type: 'button',
                key: w,
                textColor: v,
                role: 'tab',
              },
              y
            )
          })
        )
      },
      [u]
    ),
    m = b.useCallback(() => {
      if (!t.current || !r.current) return
      let {x: f, width: p} = t.current.getBoundingClientRect(),
        {width: h} = r.current.getBoundingClientRect(),
        g = u.length ? f + p - h : f + p,
        x = [],
        y = 0,
        w = e.filter((v) => {
          let {id: E} = v,
            A = n.current.get(E),
            {width: S = 0} =
              (A == null ? void 0 : A.getBoundingClientRect()) || {},
            k = f + y + S > g
          return (!k || !A) && x.push(v), (y += S), k
        })
      ;(x.length !== l.length || c.current !== e) &&
        (i(x), s(w), (c.current = e))
    }, [u.length, e, l])
  return (
    b.useLayoutEffect(m, [m, o]),
    {
      tabRefs: n,
      addonsRef: r,
      tabBarRef: t,
      visibleList: l,
      invisibleList: u,
      AddonTab: d,
    }
  )
}
var Hh =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */',
  Zh = _.div(
    ({theme: e, bordered: t}) =>
      t
        ? {
            backgroundClip: 'padding-box',
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: 'hidden',
            boxSizing: 'border-box',
          }
        : {},
    ({absolute: e}) =>
      e
        ? {
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }
        : {display: 'block'}
  ),
  al = _.div({
    overflow: 'hidden',
    '&:first-of-type': {marginLeft: -3},
    whiteSpace: 'nowrap',
    flexGrow: 1,
  })
al.displayName = 'TabBar'
var Vh = _.div(
    {display: 'block', position: 'relative'},
    ({theme: e}) => ({
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content,
    }),
    ({bordered: e, theme: t}) =>
      e
        ? {
            borderRadius: `0 0 ${t.appBorderRadius - 1}px ${
              t.appBorderRadius - 1
            }px`,
          }
        : {},
    ({absolute: e, bordered: t}) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: 'absolute',
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: 'auto',
            [`& > *:first-child${Hh}`]: {
              position: 'absolute',
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: 'auto',
            },
          }
        : {}
  ),
  zh = ({active: e, render: t, children: r}) =>
    a.createElement(xc, {active: e}, t ? t() : r),
  Un = b.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: n,
      bordered: o,
      tools: l,
      backgroundColor: i,
      id: u,
      menuName: s,
    }) => {
      let c = Ai(e).map((g) => g.id),
        d = b.useMemo(
          () => Ai(e).map((g, x) => ({...g, active: t ? g.id === t : x === 0})),
          [t, ...c]
        ),
        {visibleList: m, tabBarRef: f, tabRefs: p, AddonTab: h} = jh(d)
      return d.length
        ? a.createElement(
            Zh,
            {absolute: n, bordered: o, id: u},
            a.createElement(
              qn,
              {scrollable: !1, border: !0, backgroundColor: i},
              a.createElement(
                al,
                {style: {whiteSpace: 'normal'}, ref: f, role: 'tablist'},
                m.map(({title: g, id: x, active: y, color: w}, v) => {
                  let E = `index-${v}`
                  return a.createElement(
                    zr,
                    {
                      id: `tabbutton-${ju(x) ?? E}`,
                      ref: (A) => {
                        p.current.set(x, A)
                      },
                      className: `tabbutton ${y ? 'tabbutton-active' : ''}`,
                      type: 'button',
                      key: x,
                      active: y,
                      textColor: w,
                      onClick: (A) => {
                        A.preventDefault(), r.onSelect(x)
                      },
                      role: 'tab',
                    },
                    typeof g == 'function' ? a.createElement('title', null) : g
                  )
                }),
                a.createElement(h, {menuName: s, actions: r})
              ),
              l
            ),
            a.createElement(
              Vh,
              {id: 'panel-tab-content', bordered: o, absolute: n},
              d.map(({id: g, active: x, render: y}) =>
                a.createElement(y, {key: g, active: x}, null)
              )
            )
          )
        : a.createElement(
            cc,
            null,
            a.createElement(b.Fragment, {key: 'title'}, 'Nothing found')
          )
    }
  )
Un.displayName = 'Tabs'
Un.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: 'Tabs',
}
var wc = class extends b.Component {
  constructor(e) {
    super(e),
      (this.handlers = {onSelect: (t) => this.setState({selected: t})}),
      (this.state = {selected: e.initial})
  }
  render() {
    let {
        bordered: e = !1,
        absolute: t = !1,
        children: r,
        backgroundColor: n,
        menuName: o,
      } = this.props,
      {selected: l} = this.state
    return a.createElement(
      Un,
      {
        bordered: e,
        absolute: t,
        selected: l,
        backgroundColor: n,
        menuName: o,
        actions: this.handlers,
      },
      r
    )
  }
}
wc.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: '',
  menuName: void 0,
}
var ol = _.span(
  ({theme: e}) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2,
  }),
  ({force: e}) => (e ? {} : {'& + &': {display: 'none'}})
)
ol.displayName = 'Separator'
var qh = (e) =>
    e.reduce(
      (t, r, n) =>
        r
          ? a.createElement(
              b.Fragment,
              {key: r.id || r.key || `f-${n}`},
              t,
              n > 0 ? a.createElement(ol, {key: `s-${n}`}) : null,
              r.render() || r
            )
          : t,
      null
    ),
  Uh = (e) => {
    let t = b.useRef()
    return (
      b.useEffect(() => {
        t.current = e
      }, [e]),
      t.current
    )
  },
  Wh = (e, t) => {
    let r = Uh(t)
    return e ? t : r
  },
  Gh = ({active: e, children: t}) =>
    a.createElement('div', {hidden: !e}, Wh(e, t)),
  Yh = ({alt: e, ...t}) =>
    a.createElement(
      'svg',
      {
        width: '200px',
        height: '40px',
        viewBox: '0 0 200 40',
        ...t,
        role: 'img',
      },
      e ? a.createElement('title', null, e) : null,
      a.createElement(
        'defs',
        null,
        a.createElement('path', {
          d: 'M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z',
          id: 'a',
        })
      ),
      a.createElement(
        'g',
        {fill: 'none', fillRule: 'evenodd'},
        a.createElement('path', {
          d: 'M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z',
          fill: 'currentColor',
        }),
        a.createElement(
          'mask',
          {id: 'b', fill: '#fff'},
          a.createElement('use', {xlinkHref: '#a'})
        ),
        a.createElement('use', {
          fill: '#FF4785',
          fillRule: 'nonzero',
          xlinkHref: '#a',
        }),
        a.createElement('path', {
          d: 'M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z',
          fill: '#FFF',
          fillRule: 'nonzero',
          mask: 'url(#b)',
        })
      )
    ),
  Kh = ({...e}) =>
    a.createElement(
      'svg',
      {viewBox: '0 0 64 64', ...e},
      a.createElement('title', null, 'Storybook icon'),
      a.createElement(
        'g',
        {
          id: 'Artboard',
          stroke: 'none',
          strokeWidth: '1',
          fill: 'none',
          fillRule: 'evenodd',
        },
        a.createElement('path', {
          d: 'M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z',
          id: 'path-1',
          fill: '#FF4785',
          fillRule: 'nonzero',
        }),
        a.createElement('path', {
          d: 'M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z',
          id: 'path9_fill-path',
          fill: '#FFFFFF',
          fillRule: 'nonzero',
        }),
        a.createElement('path', {
          d: 'M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z',
          id: 'Path',
          fill: '#FFFFFF',
        })
      )
    ),
  Xh = sr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  Jh = _.div(({size: e = 32}) => ({
    borderRadius: '50%',
    cursor: 'progress',
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 200ms ease-out',
    verticalAlign: 'top',
    top: '50%',
    left: '50%',
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(97, 97, 97, 0.29)',
    borderTopColor: 'rgb(100,100,100)',
    animation: `${Xh} 0.7s linear infinite`,
    mixBlendMode: 'difference',
  })),
  Si = _.div({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }),
  Qh = _.div(({theme: e}) => ({
    position: 'relative',
    width: '80%',
    marginBottom: '0.75rem',
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: Ee(0.8, e.color.secondary),
    overflow: 'hidden',
    cursor: 'progress',
  })),
  eb = _.div(({theme: e}) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: e.color.secondary,
  })),
  Ci = _.div(({theme: e}) => ({
    minHeight: '2em',
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor,
  })),
  tb = _(ve)(({theme: e}) => ({
    width: 20,
    height: 20,
    marginBottom: '0.5rem',
    color: e.textMutedColor,
  })),
  rb = sr`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  nb = _.span({
    '&::after': {
      content: "'...'",
      animation: `${rb} 1s linear infinite`,
      animationDelay: '1s',
      display: 'inline-block',
      width: '1em',
      height: 'auto',
    },
  }),
  Ac = ({progress: e, error: t, size: r, ...n}) => {
    if (t)
      return a.createElement(
        Si,
        {
          'aria-label': t.toString(),
          'aria-live': 'polite',
          role: 'status',
          ...n,
        },
        a.createElement(tb, {icon: 'lightningoff'}),
        a.createElement(Ci, null, t.message)
      )
    if (e) {
      let {value: o, modules: l} = e,
        {message: i} = e
      return (
        l && (i += ` ${l.complete} / ${l.total} modules`),
        a.createElement(
          Si,
          {
            'aria-label': 'Content is loading...',
            'aria-live': 'polite',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': o * 100,
            'aria-valuetext': i,
            role: 'progressbar',
            ...n,
          },
          a.createElement(
            Qh,
            null,
            a.createElement(eb, {style: {width: `${o * 100}%`}})
          ),
          a.createElement(Ci, null, i, o < 1 && a.createElement(nb, {key: i}))
        )
      )
    }
    return a.createElement(Jh, {
      'aria-label': 'Content is loading...',
      'aria-live': 'polite',
      role: 'status',
      size: r,
      ...n,
    })
  }
function ab(e) {
  let t = {},
    r = e.split('&')
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split('=')
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || '')
  }
  return t
}
var Sc = (e, t, r = {}) => {
    let [n, o] = e.split('?'),
      l = o ? {...ab(o), ...r, id: t} : {...r, id: t}
    return `${n}?${Object.entries(l)
      .map((i) => `${i[0]}=${i[1]}`)
      .join('&')}`
  },
  ob = _.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${j.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${tt.fonts.mono};
  font-size: ${tt.size.s2 - 1}px;
`,
  lb = ({code: e, ...t}) =>
    a.createElement(ob, {id: 'clipboard-code', ...t}, e),
  Cc = sc,
  kc = {}
Object.keys(sc).forEach((e) => {
  kc[e] = b.forwardRef((t, r) => b.createElement(e, {...t, ref: r}))
})
const ib = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: zu,
      ActionBar: Mo,
      AddonPanel: Gh,
      Badge: Tg,
      Bar: nl,
      Blockquote: qu,
      Button: mc,
      ClipboardCode: lb,
      Code: Yo,
      DL: Wu,
      Div: Uu,
      DocumentWrapper: Bg,
      ErrorFormatter: pc,
      FlexBar: qn,
      Form: je,
      H1: Gu,
      H2: Ko,
      H3: Xo,
      H4: Yu,
      H5: Ku,
      H6: Xu,
      HR: Ju,
      IconButton: Nt,
      IconButtonSkeleton: Ec,
      Icons: ve,
      Img: Qu,
      LI: ec,
      Link: xt,
      ListItem: el,
      Loader: Ac,
      OL: tc,
      P: rc,
      Placeholder: cc,
      Pre: nc,
      ResetWrapper: Jo,
      ScrollArea: Io,
      Separator: ol,
      Spaced: Hg,
      Span: ac,
      StorybookIcon: Kh,
      StorybookLogo: Yh,
      Symbols: Rg,
      SyntaxHighlighter: Zn,
      TT: lc,
      TabBar: al,
      TabButton: zr,
      TabWrapper: zh,
      Table: oc,
      Tabs: Un,
      TabsState: wc,
      TooltipLinkList: tl,
      TooltipMessage: yc,
      TooltipNote: Ch,
      UL: ic,
      WithTooltip: bh,
      WithTooltipPure: bc,
      Zoom: dc,
      codeCommon: mt,
      components: Cc,
      createCopyToClipboardFunction: Au,
      getStoryHref: Sc,
      icons: Mr,
      interleaveSeparators: qh,
      nameSpaceClassNames: ee,
      resetComponents: kc,
      withReset: re,
    },
    Symbol.toStringTag,
    {value: 'Module'}
  )
)
function sb(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1
}
function pn(e, t, r) {
  return (
    f1()
      ? (pn = Reflect.construct.bind())
      : (pn = function (o, l, i) {
          var u = [null]
          u.push.apply(u, l)
          var s = Function.bind.apply(o, u),
            c = new s()
          return i && Ss(c, i.prototype), c
        }),
    pn.apply(null, arguments)
  )
}
function ao(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (ao = function (n) {
      if (n === null || !sb(n)) return n
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (typeof t < 'u') {
        if (t.has(n)) return t.get(n)
        t.set(n, o)
      }
      function o() {
        return pn(n, arguments, m1(this).constructor)
      }
      return (
        (o.prototype = Object.create(n.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ss(o, n)
      )
    }),
    ao(e)
  )
}
var nt = (function (e) {
  c1(t, e)
  function t(r) {
    var n
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this),
      d1(n)
    )
  }
  return t
})(ao(Error))
function Ea(e) {
  return Math.round(e * 255)
}
function ub(e, t, r) {
  return Ea(e) + ',' + Ea(t) + ',' + Ea(r)
}
function Br(e, t, r, n) {
  if ((n === void 0 && (n = ub), t === 0)) return n(r, r, r)
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i))
  var d = r - l / 2,
    m = u + d,
    f = s + d,
    p = c + d
  return n(m, f, p)
}
var ki = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
}
function cb(e) {
  if (typeof e != 'string') return e
  var t = e.toLowerCase()
  return ki[t] ? '#' + ki[t] : e
}
var db = /^#[a-fA-F0-9]{6}$/,
  pb = /^#[a-fA-F0-9]{8}$/,
  fb = /^#[a-fA-F0-9]{3}$/,
  mb = /^#[a-fA-F0-9]{4}$/,
  xa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  gb =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  hb =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  bb =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function Wn(e) {
  if (typeof e != 'string') throw new nt(3)
  var t = cb(e)
  if (t.match(db))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    }
  if (t.match(pb)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    }
  }
  if (t.match(fb))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    }
  if (t.match(mb)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    }
  }
  var o = xa.exec(t)
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
    }
  var l = gb.exec(t.substring(0, 50))
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha:
        parseFloat('' + l[4]) > 1
          ? parseFloat('' + l[4]) / 100
          : parseFloat('' + l[4]),
    }
  var i = hb.exec(t)
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Br(u, s, c) + ')',
      m = xa.exec(d)
    if (!m) throw new nt(4, t, d)
    return {
      red: parseInt('' + m[1], 10),
      green: parseInt('' + m[2], 10),
      blue: parseInt('' + m[3], 10),
    }
  }
  var f = bb.exec(t.substring(0, 50))
  if (f) {
    var p = parseInt('' + f[1], 10),
      h = parseInt('' + f[2], 10) / 100,
      g = parseInt('' + f[3], 10) / 100,
      x = 'rgb(' + Br(p, h, g) + ')',
      y = xa.exec(x)
    if (!y) throw new nt(4, t, x)
    return {
      red: parseInt('' + y[1], 10),
      green: parseInt('' + y[2], 10),
      blue: parseInt('' + y[3], 10),
      alpha:
        parseFloat('' + f[4]) > 1
          ? parseFloat('' + f[4]) / 100
          : parseFloat('' + f[4]),
    }
  }
  throw new nt(5)
}
function yb(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2
  if (o === l)
    return e.alpha !== void 0
      ? {hue: 0, saturation: 0, lightness: i, alpha: e.alpha}
      : {hue: 0, saturation: 0, lightness: i}
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l)
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0)
      break
    case r:
      u = (n - t) / s + 2
      break
    default:
      u = (t - r) / s + 4
      break
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? {hue: u, saturation: c, lightness: i, alpha: e.alpha}
      : {hue: u, saturation: c, lightness: i}
  )
}
function _c(e) {
  return yb(Wn(e))
}
var vb = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? '#' + t[1] + t[3] + t[5]
      : t
  },
  oo = vb
function $t(e) {
  var t = e.toString(16)
  return t.length === 1 ? '0' + t : t
}
function wa(e) {
  return $t(Math.round(e * 255))
}
function Eb(e, t, r) {
  return oo('#' + wa(e) + wa(t) + wa(r))
}
function An(e, t, r) {
  return Br(e, t, r, Eb)
}
function xb(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return An(e, t, r)
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return An(e.hue, e.saturation, e.lightness)
  throw new nt(1)
}
function wb(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? An(e, t, r) : 'rgba(' + Br(e, t, r) + ',' + n + ')'
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? An(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Br(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
  throw new nt(2)
}
function lo(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return oo('#' + $t(e) + $t(t) + $t(r))
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return oo('#' + $t(e.red) + $t(e.green) + $t(e.blue))
  throw new nt(6)
}
function dt(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var o = Wn(e)
    return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? lo(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? lo(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
  }
  throw new nt(7)
}
var Ab = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    )
  },
  Sb = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      typeof t.alpha == 'number'
    )
  },
  Cb = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    )
  },
  kb = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      typeof t.alpha == 'number'
    )
  }
function Oc(e) {
  if (typeof e != 'object') throw new nt(8)
  if (Sb(e)) return dt(e)
  if (Ab(e)) return lo(e)
  if (kb(e)) return wb(e)
  if (Cb(e)) return xb(e)
  throw new nt(8)
}
function Tc(e, t, r) {
  return function () {
    var o = r.concat(Array.prototype.slice.call(arguments))
    return o.length >= t ? e.apply(this, o) : Tc(e, t, o)
  }
}
function Gn(e) {
  return Tc(e, e.length, [])
}
function Yn(e, t, r) {
  return Math.max(e, Math.min(t, r))
}
function _b(e, t) {
  if (t === 'transparent') return t
  var r = _c(t)
  return Oc(_n({}, r, {lightness: Yn(0, 1, r.lightness - parseFloat(e))}))
}
var Ob = Gn(_b),
  Ke = Ob
function Tb(e, t) {
  if (t === 'transparent') return t
  var r = _c(t)
  return Oc(_n({}, r, {lightness: Yn(0, 1, r.lightness + parseFloat(e))}))
}
var Rb = Gn(Tb),
  Dt = Rb
function Fb(e, t) {
  if (t === 'transparent') return t
  var r = Wn(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = _n({}, r, {alpha: Yn(0, 1, (n * 100 + parseFloat(e) * 100) / 100)})
  return dt(o)
}
var $b = Gn(Fb),
  Qr = $b
function Db(e, t) {
  if (t === 'transparent') return t
  var r = Wn(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = _n({}, r, {
      alpha: Yn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    })
  return dt(o)
}
var Lb = Gn(Db),
  te = Lb,
  Mb = ms,
  Bb = H0,
  Ib = Object.prototype,
  Pb = Ib.hasOwnProperty
function Nb(e, t, r) {
  var n = e[t]
  ;(!(Pb.call(e, t) && Bb(n, r)) || (r === void 0 && !(t in e))) && Mb(e, t, r)
}
var ll = Nb,
  jb = ll,
  Hb = gs,
  Zb = Z0,
  _i = kn,
  Vb = V0
function zb(e, t, r, n) {
  if (!_i(e)) return e
  t = Hb(t, e)
  for (var o = -1, l = t.length, i = l - 1, u = e; u != null && ++o < l; ) {
    var s = Vb(t[o]),
      c = r
    if (s === '__proto__' || s === 'constructor' || s === 'prototype') return e
    if (o != i) {
      var d = u[s]
      ;(c = n ? n(d, s, u) : void 0),
        c === void 0 && (c = _i(d) ? d : Zb(t[o + 1]) ? [] : {})
    }
    jb(u, s, c), (u = u[s])
  }
  return e
}
var qb = zb,
  Ub = z0,
  Wb = qb,
  Gb = gs
function Yb(e, t, r) {
  for (var n = -1, o = t.length, l = {}; ++n < o; ) {
    var i = t[n],
      u = Ub(e, i)
    r(u, i) && Wb(l, Gb(i, e), u)
  }
  return l
}
var Kb = Yb,
  Xb = q0,
  Jb = hs,
  Qb = bs,
  ey = U0,
  ty = Object.getOwnPropertySymbols,
  ry = ty
    ? function (e) {
        for (var t = []; e; ) Xb(t, Qb(e)), (e = Jb(e))
        return t
      }
    : ey,
  Rc = ry
function ny(e) {
  var t = []
  if (e != null) for (var r in Object(e)) t.push(r)
  return t
}
var ay = ny,
  oy = kn,
  ly = ys,
  iy = ay,
  sy = Object.prototype,
  uy = sy.hasOwnProperty
function cy(e) {
  if (!oy(e)) return iy(e)
  var t = ly(e),
    r = []
  for (var n in e) (n == 'constructor' && (t || !uy.call(e, n))) || r.push(n)
  return r
}
var dy = cy,
  py = W0,
  fy = dy,
  my = G0
function gy(e) {
  return my(e) ? py(e, !0) : fy(e)
}
var il = gy,
  hy = Y0,
  by = Rc,
  yy = il
function vy(e) {
  return hy(e, yy, by)
}
var Fc = vy,
  Ey = K0,
  xy = X0,
  wy = Kb,
  Ay = Fc
function Sy(e, t) {
  if (e == null) return {}
  var r = Ey(Ay(e), function (n) {
    return [n]
  })
  return (
    (t = xy(t)),
    wy(e, r, function (n, o) {
      return t(n, o[0])
    })
  )
}
var Cy = Sy
const ky = Cn(Cy)
function Mt() {
  return (
    (Mt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Mt.apply(this, arguments)
  )
}
const _y = ['children', 'options'],
  Oi = [
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'className',
    'classId',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hrefLang',
    'inputMode',
    'keyParams',
    'keyType',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'radioGroup',
    'readOnly',
    'rowSpan',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'tabIndex',
    'useMap',
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), {for: 'htmlFor'}),
  Ti = {amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '“'},
  Oy = ['style', 'script'],
  Ty =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  Ry = /mailto:/i,
  Fy = /\n{2,}$/,
  $c = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  $y = /^ *> ?/gm,
  Dy = /^ {2,}\n/,
  Ly = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  Dc = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  Lc = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  My = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  By = /^(?:\n *)*\n/,
  Iy = /\r\n?/g,
  Py = /^\[\^([^\]]+)](:.*)\n/,
  Ny = /^\[\^([^\]]+)]/,
  jy = /\f/g,
  Hy = /^\s*?\[(x|\s)\]/,
  Mc = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Bc = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Ic = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  io =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  Zy = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  Pc = /^<!--[\s\S]*?(?:-->)/,
  Vy = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  so = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  zy = /^\{.*\}$/,
  qy = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  Uy = /^<([^ >]+@[^ >]+)>/,
  Wy = /^<([^ >]+:\/[^ >]+)>/,
  Gy = /-([a-z])?/gi,
  Nc = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  Yy = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  Ky = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  Xy = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  Jy = /(\[|\])/g,
  Qy = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  e3 = /\t/g,
  t3 = /^ *\| */,
  r3 = /(^ *\||\| *$)/g,
  n3 = / *$/,
  a3 = /^ *:-+: *$/,
  o3 = /^ *:-+ *$/,
  l3 = /^ *-+: *$/,
  i3 =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  s3 =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  u3 = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  c3 = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  d3 = /^\\([^0-9A-Za-z\s])/,
  p3 =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  f3 = /^\n+/,
  m3 = /^([ \t]*)/,
  g3 = /\\([^\\])/g,
  Ri = / *\n+$/,
  h3 = /(?:^|\n)( *)$/,
  sl = '(?:\\d+\\.)',
  ul = '(?:[*+-])'
function jc(e) {
  return '( *)(' + (e === 1 ? sl : ul) + ') +'
}
const Hc = jc(1),
  Zc = jc(2)
function Vc(e) {
  return new RegExp('^' + (e === 1 ? Hc : Zc))
}
const b3 = Vc(1),
  y3 = Vc(2)
function zc(e) {
  return new RegExp(
    '^' +
      (e === 1 ? Hc : Zc) +
      '[^\\n]*(?:\\n(?!\\1' +
      (e === 1 ? sl : ul) +
      ' )[^\\n]*)*(\\n|$)',
    'gm'
  )
}
const qc = zc(1),
  Uc = zc(2)
function Wc(e) {
  const t = e === 1 ? sl : ul
  return new RegExp(
    '^( *)(' +
      t +
      ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
      t +
      ' (?!' +
      t +
      ' ))\\n*|\\s*\\n*$)'
  )
}
const Gc = Wc(1),
  Yc = Wc(2)
function Fi(e, t) {
  const r = t === 1,
    n = r ? Gc : Yc,
    o = r ? qc : Uc,
    l = r ? b3 : y3
  return {
    t(i, u, s) {
      const c = h3.exec(s)
      return c && (u.o || (!u._ && !u.u)) ? n.exec((i = c[1] + i)) : null
    },
    i: q.HIGH,
    l(i, u, s) {
      const c = r ? +i[2] : void 0,
        d = i[0]
          .replace(
            Fy,
            `
`
          )
          .match(o)
      let m = !1
      return {
        p: d.map(function (f, p) {
          const h = l.exec(f)[0].length,
            g = new RegExp('^ {1,' + h + '}', 'gm'),
            x = f.replace(g, '').replace(l, ''),
            y = p === d.length - 1,
            w =
              x.indexOf(`

`) !== -1 ||
              (y && m)
          m = w
          const v = s._,
            E = s.o
          let A
          ;(s.o = !0),
            w
              ? ((s._ = !1),
                (A = x.replace(
                  Ri,
                  `

`
                )))
              : ((s._ = !0), (A = x.replace(Ri, '')))
          const S = u(A, s)
          return (s._ = v), (s.o = E), S
        }),
        m: r,
        g: c,
      }
    },
    h: (i, u, s) =>
      e(
        i.m ? 'ol' : 'ul',
        {key: s.k, start: i.g},
        i.p.map(function (c, d) {
          return e('li', {key: d}, u(c, s))
        })
      ),
  }
}
const v3 = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  E3 = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Kc = [$c, Dc, Lc, Mc, Ic, Bc, Pc, Nc, qc, Gc, Uc, Yc],
  x3 = [...Kc, /^[^\n]+(?:  \n|\n{2,})/, io, so]
function w3(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase()
}
function A3(e) {
  return l3.test(e)
    ? 'right'
    : a3.test(e)
    ? 'center'
    : o3.test(e)
    ? 'left'
    : null
}
function $i(e, t, r) {
  const n = r.$
  r.$ = !0
  const o = t(e.trim(), r)
  r.$ = n
  let l = [[]]
  return (
    o.forEach(function (i, u) {
      i.type === 'tableSeparator'
        ? u !== 0 && u !== o.length - 1 && l.push([])
        : (i.type !== 'text' ||
            (o[u + 1] != null && o[u + 1].type !== 'tableSeparator') ||
            (i.v = i.v.replace(n3, '')),
          l[l.length - 1].push(i))
    }),
    l
  )
}
function S3(e, t, r) {
  r._ = !0
  const n = $i(e[1], t, r),
    o = e[2].replace(r3, '').split('|').map(A3),
    l = (function (i, u, s) {
      return i
        .trim()
        .split(
          `
`
        )
        .map(function (c) {
          return $i(c, u, s)
        })
    })(e[3], t, r)
  return (r._ = !1), {S: o, A: l, L: n, type: 'table'}
}
function Di(e, t) {
  return e.S[t] == null ? {} : {textAlign: e.S[t]}
}
function ht(e) {
  return function (t, r) {
    return r._ ? e.exec(t) : null
  }
}
function bt(e) {
  return function (t, r) {
    return r._ || r.u ? e.exec(t) : null
  }
}
function ut(e) {
  return function (t, r) {
    return r._ || r.u ? null : e.exec(t)
  }
}
function vr(e) {
  return function (t) {
    return e.exec(t)
  }
}
function C3(e, t, r) {
  if (
    t._ ||
    t.u ||
    (r &&
      !r.endsWith(`
`))
  )
    return null
  let n = ''
  e.split(
    `
`
  ).every(
    (l) =>
      !Kc.some((i) => i.test(l)) &&
      ((n +=
        l +
        `
`),
      l.trim())
  )
  const o = n.trimEnd()
  return o == '' ? null : [n, o]
}
function Wt(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, '')
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return
  } catch {
    return null
  }
  return e
}
function Li(e) {
  return e.replace(g3, '$1')
}
function fn(e, t, r) {
  const n = r._ || !1,
    o = r.u || !1
  ;(r._ = !0), (r.u = !0)
  const l = e(t, r)
  return (r._ = n), (r.u = o), l
}
function k3(e, t, r) {
  const n = r._ || !1,
    o = r.u || !1
  ;(r._ = !1), (r.u = !0)
  const l = e(t, r)
  return (r._ = n), (r.u = o), l
}
function _3(e, t, r) {
  return (r._ = !1), e(t, r)
}
const Aa = (e, t, r) => ({v: fn(t, e[1], r)})
function Sa() {
  return {}
}
function Ca() {
  return null
}
function O3(...e) {
  return e.filter(Boolean).join(' ')
}
function ka(e, t, r) {
  let n = e
  const o = t.split('.')
  for (; o.length && ((n = n[o[0]]), n !== void 0); ) o.shift()
  return n || r
}
var q
function T3(e, t = {}) {
  ;(t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || w3),
    (t.namedCodesToUnicode = t.namedCodesToUnicode
      ? Mt({}, Ti, t.namedCodesToUnicode)
      : Ti)
  const r = t.createElement || b.createElement
  function n(p, h, ...g) {
    const x = ka(t.overrides, `${p}.props`, {})
    return r(
      (function (y, w) {
        const v = ka(w, y)
        return v
          ? typeof v == 'function' || (typeof v == 'object' && 'render' in v)
            ? v
            : ka(w, `${y}.component`, y)
          : y
      })(p, t.overrides),
      Mt({}, h, x, {
        className: O3(h == null ? void 0 : h.className, x.className) || void 0,
      }),
      ...g
    )
  }
  function o(p) {
    let h = !1
    t.forceInline ? (h = !0) : t.forceBlock || (h = Qy.test(p) === !1)
    const g = d(
      c(
        h
          ? p
          : `${p.trimEnd().replace(f3, '')}

`,
        {_: h}
      )
    )
    for (; typeof g[g.length - 1] == 'string' && !g[g.length - 1].trim(); )
      g.pop()
    if (t.wrapper === null) return g
    const x = t.wrapper || (h ? 'span' : 'div')
    let y
    if (g.length > 1 || t.forceWrapper) y = g
    else {
      if (g.length === 1)
        return (
          (y = g[0]), typeof y == 'string' ? n('span', {key: 'outer'}, y) : y
        )
      y = null
    }
    return b.createElement(x, {key: 'outer'}, y)
  }
  function l(p) {
    const h = p.match(Ty)
    return h
      ? h.reduce(function (g, x, y) {
          const w = x.indexOf('=')
          if (w !== -1) {
            const v = (function (k) {
                return (
                  k.indexOf('-') !== -1 &&
                    k.match(Vy) === null &&
                    (k = k.replace(Gy, function (C, O) {
                      return O.toUpperCase()
                    })),
                  k
                )
              })(x.slice(0, w)).trim(),
              E = (function (k) {
                const C = k[0]
                return (C === '"' || C === "'") &&
                  k.length >= 2 &&
                  k[k.length - 1] === C
                  ? k.slice(1, -1)
                  : k
              })(x.slice(w + 1).trim()),
              A = Oi[v] || v,
              S = (g[A] = (function (k, C) {
                return k === 'style'
                  ? C.split(/;\s?/).reduce(function (O, T) {
                      const R = T.slice(0, T.indexOf(':'))
                      return (
                        (O[R.replace(/(-[a-z])/g, ($) => $[1].toUpperCase())] =
                          T.slice(R.length + 1).trim()),
                        O
                      )
                    }, {})
                  : k === 'href'
                  ? Wt(C)
                  : (C.match(zy) && (C = C.slice(1, C.length - 1)),
                    C === 'true' || (C !== 'false' && C))
              })(v, E))
            typeof S == 'string' &&
              (io.test(S) || so.test(S)) &&
              (g[A] = b.cloneElement(o(S.trim()), {key: y}))
          } else x !== 'style' && (g[Oi[x] || x] = !0)
          return g
        }, {})
      : null
  }
  const i = [],
    u = {},
    s = {
      blockQuote: {
        t: ut($c),
        i: q.HIGH,
        l: (p, h, g) => ({v: h(p[0].replace($y, ''), g)}),
        h: (p, h, g) => n('blockquote', {key: g.k}, h(p.v, g)),
      },
      breakLine: {
        t: vr(Dy),
        i: q.HIGH,
        l: Sa,
        h: (p, h, g) => n('br', {key: g.k}),
      },
      breakThematic: {
        t: ut(Ly),
        i: q.HIGH,
        l: Sa,
        h: (p, h, g) => n('hr', {key: g.k}),
      },
      codeBlock: {
        t: ut(Lc),
        i: q.MAX,
        l: (p) => ({
          v: p[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
          M: void 0,
        }),
        h: (p, h, g) =>
          n(
            'pre',
            {key: g.k},
            n('code', Mt({}, p.O, {className: p.M ? `lang-${p.M}` : ''}), p.v)
          ),
      },
      codeFenced: {
        t: ut(Dc),
        i: q.MAX,
        l: (p) => ({
          O: l(p[3] || ''),
          v: p[4],
          M: p[2] || void 0,
          type: 'codeBlock',
        }),
      },
      codeInline: {
        t: bt(My),
        i: q.LOW,
        l: (p) => ({v: p[2]}),
        h: (p, h, g) => n('code', {key: g.k}, p.v),
      },
      footnote: {
        t: ut(Py),
        i: q.MAX,
        l: (p) => (i.push({I: p[2], j: p[1]}), {}),
        h: Ca,
      },
      footnoteReference: {
        t: ht(Ny),
        i: q.HIGH,
        l: (p) => ({v: p[1], B: `#${t.slugify(p[1])}`}),
        h: (p, h, g) =>
          n('a', {key: g.k, href: Wt(p.B)}, n('sup', {key: g.k}, p.v)),
      },
      gfmTask: {
        t: ht(Hy),
        i: q.HIGH,
        l: (p) => ({R: p[1].toLowerCase() === 'x'}),
        h: (p, h, g) =>
          n('input', {checked: p.R, key: g.k, readOnly: !0, type: 'checkbox'}),
      },
      heading: {
        t: ut(t.enforceAtxHeadings ? Bc : Mc),
        i: q.HIGH,
        l: (p, h, g) => ({
          v: fn(h, p[2], g),
          T: t.slugify(p[2]),
          C: p[1].length,
        }),
        h: (p, h, g) => n(`h${p.C}`, {id: p.T, key: g.k}, h(p.v, g)),
      },
      headingSetext: {
        t: ut(Ic),
        i: q.MAX,
        l: (p, h, g) => ({
          v: fn(h, p[1], g),
          C: p[2] === '=' ? 1 : 2,
          type: 'heading',
        }),
      },
      htmlComment: {t: vr(Pc), i: q.HIGH, l: () => ({}), h: Ca},
      image: {
        t: bt(E3),
        i: q.HIGH,
        l: (p) => ({D: p[1], B: Li(p[2]), F: p[3]}),
        h: (p, h, g) =>
          n('img', {
            key: g.k,
            alt: p.D || void 0,
            title: p.F || void 0,
            src: Wt(p.B),
          }),
      },
      link: {
        t: ht(v3),
        i: q.LOW,
        l: (p, h, g) => ({v: k3(h, p[1], g), B: Li(p[2]), F: p[3]}),
        h: (p, h, g) =>
          n('a', {key: g.k, href: Wt(p.B), title: p.F}, h(p.v, g)),
      },
      linkAngleBraceStyleDetector: {
        t: ht(Wy),
        i: q.MAX,
        l: (p) => ({v: [{v: p[1], type: 'text'}], B: p[1], type: 'link'}),
      },
      linkBareUrlDetector: {
        t: (p, h) => (h.N ? null : ht(qy)(p, h)),
        i: q.MAX,
        l: (p) => ({
          v: [{v: p[1], type: 'text'}],
          B: p[1],
          F: void 0,
          type: 'link',
        }),
      },
      linkMailtoDetector: {
        t: ht(Uy),
        i: q.MAX,
        l(p) {
          let h = p[1],
            g = p[1]
          return (
            Ry.test(g) || (g = 'mailto:' + g),
            {
              v: [{v: h.replace('mailto:', ''), type: 'text'}],
              B: g,
              type: 'link',
            }
          )
        },
      },
      orderedList: Fi(n, 1),
      unorderedList: Fi(n, 2),
      newlineCoalescer: {
        t: ut(By),
        i: q.LOW,
        l: Sa,
        h: () => `
`,
      },
      paragraph: {
        t: C3,
        i: q.LOW,
        l: Aa,
        h: (p, h, g) => n('p', {key: g.k}, h(p.v, g)),
      },
      ref: {
        t: ht(Yy),
        i: q.MAX,
        l: (p) => ((u[p[1]] = {B: p[2], F: p[4]}), {}),
        h: Ca,
      },
      refImage: {
        t: bt(Ky),
        i: q.MAX,
        l: (p) => ({D: p[1] || void 0, P: p[2]}),
        h: (p, h, g) =>
          n('img', {key: g.k, alt: p.D, src: Wt(u[p.P].B), title: u[p.P].F}),
      },
      refLink: {
        t: ht(Xy),
        i: q.MAX,
        l: (p, h, g) => ({
          v: h(p[1], g),
          Z: h(p[0].replace(Jy, '\\$1'), g),
          P: p[2],
        }),
        h: (p, h, g) =>
          u[p.P]
            ? n('a', {key: g.k, href: Wt(u[p.P].B), title: u[p.P].F}, h(p.v, g))
            : n('span', {key: g.k}, h(p.Z, g)),
      },
      table: {
        t: ut(Nc),
        i: q.HIGH,
        l: S3,
        h: (p, h, g) =>
          n(
            'table',
            {key: g.k},
            n(
              'thead',
              null,
              n(
                'tr',
                null,
                p.L.map(function (x, y) {
                  return n('th', {key: y, style: Di(p, y)}, h(x, g))
                })
              )
            ),
            n(
              'tbody',
              null,
              p.A.map(function (x, y) {
                return n(
                  'tr',
                  {key: y},
                  x.map(function (w, v) {
                    return n('td', {key: v, style: Di(p, v)}, h(w, g))
                  })
                )
              })
            )
          ),
      },
      tableSeparator: {
        t: function (p, h) {
          return h.$ ? ((h._ = !0), t3.exec(p)) : null
        },
        i: q.HIGH,
        l: function () {
          return {type: 'tableSeparator'}
        },
        h: () => ' | ',
      },
      text: {
        t: vr(p3),
        i: q.MIN,
        l: (p) => ({
          v: p[0].replace(Zy, (h, g) =>
            t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : h
          ),
        }),
        h: (p) => p.v,
      },
      textBolded: {
        t: bt(i3),
        i: q.MED,
        l: (p, h, g) => ({v: h(p[2], g)}),
        h: (p, h, g) => n('strong', {key: g.k}, h(p.v, g)),
      },
      textEmphasized: {
        t: bt(s3),
        i: q.LOW,
        l: (p, h, g) => ({v: h(p[2], g)}),
        h: (p, h, g) => n('em', {key: g.k}, h(p.v, g)),
      },
      textEscaped: {t: bt(d3), i: q.HIGH, l: (p) => ({v: p[1], type: 'text'})},
      textMarked: {
        t: bt(u3),
        i: q.LOW,
        l: Aa,
        h: (p, h, g) => n('mark', {key: g.k}, h(p.v, g)),
      },
      textStrikethroughed: {
        t: bt(c3),
        i: q.LOW,
        l: Aa,
        h: (p, h, g) => n('del', {key: g.k}, h(p.v, g)),
      },
    }
  t.disableParsingRawHTML !== !0 &&
    ((s.htmlBlock = {
      t: vr(io),
      i: q.HIGH,
      l(p, h, g) {
        const [, x] = p[3].match(m3),
          y = new RegExp(`^${x}`, 'gm'),
          w = p[3].replace(y, ''),
          v = ((E = w), x3.some((C) => C.test(E)) ? _3 : fn)
        var E
        const A = p[1].toLowerCase(),
          S = Oy.indexOf(A) !== -1
        g.N = g.N || A === 'a'
        const k = S ? p[3] : v(h, w, g)
        return (g.N = !1), {O: l(p[2]), v: k, G: S, H: S ? A : p[1]}
      },
      h: (p, h, g) => n(p.H, Mt({key: g.k}, p.O), p.G ? p.v : h(p.v, g)),
    }),
    (s.htmlSelfClosing = {
      t: vr(so),
      i: q.HIGH,
      l: (p) => ({O: l(p[2] || ''), H: p[1]}),
      h: (p, h, g) => n(p.H, Mt({}, p.O, {key: g.k})),
    }))
  const c = (function (p) {
      let h = Object.keys(p)
      function g(x, y) {
        let w = [],
          v = ''
        for (; x; ) {
          let E = 0
          for (; E < h.length; ) {
            const A = h[E],
              S = p[A],
              k = S.t(x, y, v)
            if (k) {
              const C = k[0]
              x = x.substring(C.length)
              const O = S.l(k, g, y)
              O.type == null && (O.type = A), w.push(O), (v = C)
              break
            }
            E++
          }
        }
        return w
      }
      return (
        h.sort(function (x, y) {
          let w = p[x].i,
            v = p[y].i
          return w !== v ? w - v : x < y ? -1 : 1
        }),
        function (x, y) {
          return g(
            (function (w) {
              return w
                .replace(
                  Iy,
                  `
`
                )
                .replace(jy, '')
                .replace(e3, '    ')
            })(x),
            y
          )
        }
      )
    })(s),
    d =
      ((m = (function (p) {
        return function (h, g, x) {
          return p[h.type].h(h, g, x)
        }
      })(s)),
      function p(h, g = {}) {
        if (Array.isArray(h)) {
          const x = g.k,
            y = []
          let w = !1
          for (let v = 0; v < h.length; v++) {
            g.k = v
            const E = p(h[v], g),
              A = typeof E == 'string'
            A && w ? (y[y.length - 1] += E) : E !== null && y.push(E), (w = A)
          }
          return (g.k = x), y
        }
        return m(h, p, g)
      })
  var m
  const f = o(e)
  return i.length
    ? n(
        'div',
        null,
        f,
        n(
          'footer',
          {key: 'footer'},
          i.map(function (p) {
            return n(
              'div',
              {id: t.slugify(p.j), key: p.j},
              p.j,
              d(c(p.I, {_: !0}))
            )
          })
        )
      )
    : f
}
;(function (e) {
  ;(e[(e.MAX = 0)] = 'MAX'),
    (e[(e.HIGH = 1)] = 'HIGH'),
    (e[(e.MED = 2)] = 'MED'),
    (e[(e.LOW = 3)] = 'LOW'),
    (e[(e.MIN = 4)] = 'MIN')
})(q || (q = {}))
const Xc = (e) => {
  let {children: t, options: r} = e,
    n = (function (o, l) {
      if (o == null) return {}
      var i,
        u,
        s = {},
        c = Object.keys(o)
      for (u = 0; u < c.length; u++) l.indexOf((i = c[u])) >= 0 || (s[i] = o[i])
      return s
    })(e, _y)
  return b.cloneElement(T3(t, r), n)
}
function R3(e, t, r, n) {
  for (var o = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < o; )
    if (t(e[l], l, e)) return l
  return -1
}
var F3 = R3
function $3(e) {
  return e !== e
}
var D3 = $3
function L3(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n
  return -1
}
var M3 = L3,
  B3 = F3,
  I3 = D3,
  P3 = M3
function N3(e, t, r) {
  return t === t ? P3(e, t, r) : B3(e, I3, r)
}
var j3 = N3,
  H3 = j3
function Z3(e, t) {
  var r = e == null ? 0 : e.length
  return !!r && H3(e, t, 0) > -1
}
var V3 = Z3
function z3(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (r(t, e[n])) return !0
  return !1
}
var q3 = z3
function U3() {}
var W3 = U3,
  _a = J0,
  G3 = W3,
  Y3 = vs,
  K3 = 1 / 0,
  X3 =
    _a && 1 / Y3(new _a([, -0]))[1] == K3
      ? function (e) {
          return new _a(e)
        }
      : G3,
  J3 = X3,
  Q3 = Q0,
  ev = V3,
  tv = q3,
  rv = e1,
  nv = J3,
  av = vs,
  ov = 200
function lv(e, t, r) {
  var n = -1,
    o = ev,
    l = e.length,
    i = !0,
    u = [],
    s = u
  if (r) (i = !1), (o = tv)
  else if (l >= ov) {
    var c = t ? null : nv(e)
    if (c) return av(c)
    ;(i = !1), (o = rv), (s = new Q3())
  } else s = t ? [] : u
  e: for (; ++n < l; ) {
    var d = e[n],
      m = t ? t(d) : d
    if (((d = r || d !== 0 ? d : 0), i && m === m)) {
      for (var f = s.length; f--; ) if (s[f] === m) continue e
      t && s.push(m), u.push(d)
    } else o(s, m, r) || (s !== u && s.push(m), u.push(d))
  }
  return u
}
var iv = lv,
  sv = iv
function uv(e) {
  return e && e.length ? sv(e) : []
}
var cv = uv
const dv = Cn(cv)
function pv(e, t) {
  for (
    var r = -1, n = e == null ? 0 : e.length;
    ++r < n && t(e[r], r, e) !== !1;

  );
  return e
}
var fv = pv,
  mv = ll,
  gv = ms
function hv(e, t, r, n) {
  var o = !r
  r || (r = {})
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l],
      s = n ? n(r[u], e[u], u, r, e) : void 0
    s === void 0 && (s = e[u]), o ? gv(r, u, s) : mv(r, u, s)
  }
  return r
}
var Kn = hv,
  bv = Kn,
  yv = Es
function vv(e, t) {
  return e && bv(t, yv(t), e)
}
var Ev = vv,
  xv = Kn,
  wv = il
function Av(e, t) {
  return e && xv(t, wv(t), e)
}
var Sv = Av,
  Sn = {exports: {}}
Sn.exports
;(function (e, t) {
  var r = t1,
    n = t && !t.nodeType && t,
    o = n && !0 && e && !e.nodeType && e,
    l = o && o.exports === n,
    i = l ? r.Buffer : void 0,
    u = i ? i.allocUnsafe : void 0
  function s(c, d) {
    if (d) return c.slice()
    var m = c.length,
      f = u ? u(m) : new c.constructor(m)
    return c.copy(f), f
  }
  e.exports = s
})(Sn, Sn.exports)
var Cv = Sn.exports
function kv(e, t) {
  var r = -1,
    n = e.length
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
  return t
}
var _v = kv,
  Ov = Kn,
  Tv = bs
function Rv(e, t) {
  return Ov(e, Tv(e), t)
}
var Fv = Rv,
  $v = Kn,
  Dv = Rc
function Lv(e, t) {
  return $v(e, Dv(e), t)
}
var Mv = Lv,
  Bv = Object.prototype,
  Iv = Bv.hasOwnProperty
function Pv(e) {
  var t = e.length,
    r = new e.constructor(t)
  return (
    t &&
      typeof e[0] == 'string' &&
      Iv.call(e, 'index') &&
      ((r.index = e.index), (r.input = e.input)),
    r
  )
}
var Nv = Pv,
  Mi = r1
function jv(e) {
  var t = new e.constructor(e.byteLength)
  return new Mi(t).set(new Mi(e)), t
}
var cl = jv,
  Hv = cl
function Zv(e, t) {
  var r = t ? Hv(e.buffer) : e.buffer
  return new e.constructor(r, e.byteOffset, e.byteLength)
}
var Vv = Zv,
  zv = /\w*$/
function qv(e) {
  var t = new e.constructor(e.source, zv.exec(e))
  return (t.lastIndex = e.lastIndex), t
}
var Uv = qv,
  Bi = n1,
  Ii = Bi ? Bi.prototype : void 0,
  Pi = Ii ? Ii.valueOf : void 0
function Wv(e) {
  return Pi ? Object(Pi.call(e)) : {}
}
var Gv = Wv,
  Yv = cl
function Kv(e, t) {
  var r = t ? Yv(e.buffer) : e.buffer
  return new e.constructor(r, e.byteOffset, e.length)
}
var Xv = Kv,
  Jv = cl,
  Qv = Vv,
  e4 = Uv,
  t4 = Gv,
  r4 = Xv,
  n4 = '[object Boolean]',
  a4 = '[object Date]',
  o4 = '[object Map]',
  l4 = '[object Number]',
  i4 = '[object RegExp]',
  s4 = '[object Set]',
  u4 = '[object String]',
  c4 = '[object Symbol]',
  d4 = '[object ArrayBuffer]',
  p4 = '[object DataView]',
  f4 = '[object Float32Array]',
  m4 = '[object Float64Array]',
  g4 = '[object Int8Array]',
  h4 = '[object Int16Array]',
  b4 = '[object Int32Array]',
  y4 = '[object Uint8Array]',
  v4 = '[object Uint8ClampedArray]',
  E4 = '[object Uint16Array]',
  x4 = '[object Uint32Array]'
function w4(e, t, r) {
  var n = e.constructor
  switch (t) {
    case d4:
      return Jv(e)
    case n4:
    case a4:
      return new n(+e)
    case p4:
      return Qv(e, r)
    case f4:
    case m4:
    case g4:
    case h4:
    case b4:
    case y4:
    case v4:
    case E4:
    case x4:
      return r4(e, r)
    case o4:
      return new n()
    case l4:
    case u4:
      return new n(e)
    case i4:
      return e4(e)
    case s4:
      return new n()
    case c4:
      return t4(e)
  }
}
var A4 = w4,
  S4 = kn,
  Ni = Object.create,
  C4 = (function () {
    function e() {}
    return function (t) {
      if (!S4(t)) return {}
      if (Ni) return Ni(t)
      e.prototype = t
      var r = new e()
      return (e.prototype = void 0), r
    }
  })(),
  k4 = C4,
  _4 = k4,
  O4 = hs,
  T4 = ys
function R4(e) {
  return typeof e.constructor == 'function' && !T4(e) ? _4(O4(e)) : {}
}
var F4 = R4,
  $4 = bo,
  D4 = xs,
  L4 = '[object Map]'
function M4(e) {
  return D4(e) && $4(e) == L4
}
var B4 = M4,
  I4 = B4,
  P4 = As,
  ji = ws,
  Hi = ji && ji.isMap,
  N4 = Hi ? P4(Hi) : I4,
  j4 = N4,
  H4 = bo,
  Z4 = xs,
  V4 = '[object Set]'
function z4(e) {
  return Z4(e) && H4(e) == V4
}
var q4 = z4,
  U4 = q4,
  W4 = As,
  Zi = ws,
  Vi = Zi && Zi.isSet,
  G4 = Vi ? W4(Vi) : U4,
  Y4 = G4,
  K4 = a1,
  X4 = fv,
  J4 = ll,
  Q4 = Ev,
  e7 = Sv,
  t7 = Cv,
  r7 = _v,
  n7 = Fv,
  a7 = Mv,
  o7 = l1,
  l7 = Fc,
  i7 = bo,
  s7 = Nv,
  u7 = A4,
  c7 = F4,
  d7 = i1,
  p7 = o1,
  f7 = j4,
  m7 = kn,
  g7 = Y4,
  h7 = Es,
  b7 = il,
  y7 = 1,
  v7 = 2,
  E7 = 4,
  Jc = '[object Arguments]',
  x7 = '[object Array]',
  w7 = '[object Boolean]',
  A7 = '[object Date]',
  S7 = '[object Error]',
  Qc = '[object Function]',
  C7 = '[object GeneratorFunction]',
  k7 = '[object Map]',
  _7 = '[object Number]',
  e0 = '[object Object]',
  O7 = '[object RegExp]',
  T7 = '[object Set]',
  R7 = '[object String]',
  F7 = '[object Symbol]',
  $7 = '[object WeakMap]',
  D7 = '[object ArrayBuffer]',
  L7 = '[object DataView]',
  M7 = '[object Float32Array]',
  B7 = '[object Float64Array]',
  I7 = '[object Int8Array]',
  P7 = '[object Int16Array]',
  N7 = '[object Int32Array]',
  j7 = '[object Uint8Array]',
  H7 = '[object Uint8ClampedArray]',
  Z7 = '[object Uint16Array]',
  V7 = '[object Uint32Array]',
  Q = {}
Q[Jc] =
  Q[x7] =
  Q[D7] =
  Q[L7] =
  Q[w7] =
  Q[A7] =
  Q[M7] =
  Q[B7] =
  Q[I7] =
  Q[P7] =
  Q[N7] =
  Q[k7] =
  Q[_7] =
  Q[e0] =
  Q[O7] =
  Q[T7] =
  Q[R7] =
  Q[F7] =
  Q[j7] =
  Q[H7] =
  Q[Z7] =
  Q[V7] =
    !0
Q[S7] = Q[Qc] = Q[$7] = !1
function mn(e, t, r, n, o, l) {
  var i,
    u = t & y7,
    s = t & v7,
    c = t & E7
  if ((r && (i = o ? r(e, n, o, l) : r(e)), i !== void 0)) return i
  if (!m7(e)) return e
  var d = d7(e)
  if (d) {
    if (((i = s7(e)), !u)) return r7(e, i)
  } else {
    var m = i7(e),
      f = m == Qc || m == C7
    if (p7(e)) return t7(e, u)
    if (m == e0 || m == Jc || (f && !o)) {
      if (((i = s || f ? {} : c7(e)), !u))
        return s ? a7(e, e7(i, e)) : n7(e, Q4(i, e))
    } else {
      if (!Q[m]) return o ? e : {}
      i = u7(e, m, u)
    }
  }
  l || (l = new K4())
  var p = l.get(e)
  if (p) return p
  l.set(e, i),
    g7(e)
      ? e.forEach(function (x) {
          i.add(mn(x, t, r, x, e, l))
        })
      : f7(e) &&
        e.forEach(function (x, y) {
          i.set(y, mn(x, t, r, y, e, l))
        })
  var h = c ? (s ? l7 : o7) : s ? b7 : h7,
    g = d ? void 0 : h(e)
  return (
    X4(g || e, function (x, y) {
      g && ((y = x), (x = e[y])), J4(i, y, mn(x, t, r, y, e, l))
    }),
    i
  )
}
var z7 = mn,
  q7 = z7,
  U7 = 1,
  W7 = 4
function G7(e) {
  return q7(e, U7 | W7)
}
var Y7 = G7
const K7 = Cn(Y7)
var X7 = Object.create,
  t0 = Object.defineProperty,
  J7 = Object.getOwnPropertyDescriptor,
  r0 = Object.getOwnPropertyNames,
  Q7 = Object.getPrototypeOf,
  e6 = Object.prototype.hasOwnProperty,
  Ie = (e, t) =>
    function () {
      return t || (0, e[r0(e)[0]])((t = {exports: {}}).exports, t), t.exports
    },
  t6 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of r0(t))
        !e6.call(e, o) &&
          o !== r &&
          t0(e, o, {
            get: () => t[o],
            enumerable: !(n = J7(t, o)) || n.enumerable,
          })
    return e
  },
  dl = (e, t, r) => (
    (r = e != null ? X7(Q7(e)) : {}),
    t6(
      t || !e || !e.__esModule
        ? t0(r, 'default', {value: e, enumerable: !0})
        : r,
      e
    )
  ),
  r6 = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type',
  ],
  n6 = ['detail']
function a6(e) {
  const t = r6
    .filter((r) => e[r] !== void 0)
    .reduce((r, n) => ({...r, [n]: e[n]}), {})
  return (
    e instanceof CustomEvent &&
      n6
        .filter((r) => e[r] !== void 0)
        .forEach((r) => {
          t[r] = e[r]
        }),
    t
  )
}
var n0 = Ie({
    'node_modules/has-symbols/shams.js'(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1
        if (typeof Symbol.iterator == 'symbol') return !0
        var n = {},
          o = Symbol('test'),
          l = Object(o)
        if (
          typeof o == 'string' ||
          Object.prototype.toString.call(o) !== '[object Symbol]' ||
          Object.prototype.toString.call(l) !== '[object Symbol]'
        )
          return !1
        var i = 42
        n[o] = i
        for (o in n) return !1
        if (
          (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1
        var u = Object.getOwnPropertySymbols(n)
        if (
          u.length !== 1 ||
          u[0] !== o ||
          !Object.prototype.propertyIsEnumerable.call(n, o)
        )
          return !1
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var s = Object.getOwnPropertyDescriptor(n, o)
          if (s.value !== i || s.enumerable !== !0) return !1
        }
        return !0
      }
    },
  }),
  a0 = Ie({
    'node_modules/has-symbols/index.js'(e, t) {
      var r = typeof Symbol < 'u' && Symbol,
        n = n0()
      t.exports = function () {
        return typeof r != 'function' ||
          typeof Symbol != 'function' ||
          typeof r('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : n()
      }
    },
  }),
  o6 = Ie({
    'node_modules/function-bind/implementation.js'(e, t) {
      var r = 'Function.prototype.bind called on incompatible ',
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        l = '[object Function]'
      t.exports = function (u) {
        var s = this
        if (typeof s != 'function' || o.call(s) !== l)
          throw new TypeError(r + s)
        for (
          var c = n.call(arguments, 1),
            d,
            m = function () {
              if (this instanceof d) {
                var x = s.apply(this, c.concat(n.call(arguments)))
                return Object(x) === x ? x : this
              } else return s.apply(u, c.concat(n.call(arguments)))
            },
            f = Math.max(0, s.length - c.length),
            p = [],
            h = 0;
          h < f;
          h++
        )
          p.push('$' + h)
        if (
          ((d = Function(
            'binder',
            'return function (' +
              p.join(',') +
              '){ return binder.apply(this,arguments); }'
          )(m)),
          s.prototype)
        ) {
          var g = function () {}
          ;(g.prototype = s.prototype),
            (d.prototype = new g()),
            (g.prototype = null)
        }
        return d
      }
    },
  }),
  pl = Ie({
    'node_modules/function-bind/index.js'(e, t) {
      var r = o6()
      t.exports = Function.prototype.bind || r
    },
  }),
  l6 = Ie({
    'node_modules/has/src/index.js'(e, t) {
      var r = pl()
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
    },
  }),
  o0 = Ie({
    'node_modules/get-intrinsic/index.js'(e, t) {
      var r,
        n = SyntaxError,
        o = Function,
        l = TypeError,
        i = function ($) {
          try {
            return o('"use strict"; return (' + $ + ').constructor;')()
          } catch {}
        },
        u = Object.getOwnPropertyDescriptor
      if (u)
        try {
          u({}, '')
        } catch {
          u = null
        }
      var s = function () {
          throw new l()
        },
        c = u
          ? (function () {
              try {
                return arguments.callee, s
              } catch {
                try {
                  return u(arguments, 'callee').get
                } catch {
                  return s
                }
              }
            })()
          : s,
        d = a0()(),
        m =
          Object.getPrototypeOf ||
          function ($) {
            return $.__proto__
          },
        f = {},
        p = typeof Uint8Array > 'u' ? r : m(Uint8Array),
        h = {
          '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
          '%ArrayIteratorPrototype%': d ? m([][Symbol.iterator]()) : r,
          '%AsyncFromSyncIteratorPrototype%': r,
          '%AsyncFunction%': f,
          '%AsyncGenerator%': f,
          '%AsyncGeneratorFunction%': f,
          '%AsyncIteratorPrototype%': f,
          '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? r : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
          '%FinalizationRegistry%':
            typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
          '%Function%': o,
          '%GeneratorFunction%': f,
          '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': d ? m(m([][Symbol.iterator]())) : r,
          '%JSON%': typeof JSON == 'object' ? JSON : r,
          '%Map%': typeof Map > 'u' ? r : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !d ? r : m(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? r : Promise,
          '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? r : Set,
          '%SetIteratorPrototype%':
            typeof Set > 'u' || !d ? r : m(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': d ? m(''[Symbol.iterator]()) : r,
          '%Symbol%': d ? Symbol : r,
          '%SyntaxError%': n,
          '%ThrowTypeError%': c,
          '%TypedArray%': p,
          '%TypeError%': l,
          '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
        },
        g = function $(F) {
          var P
          if (F === '%AsyncFunction%') P = i('async function () {}')
          else if (F === '%GeneratorFunction%') P = i('function* () {}')
          else if (F === '%AsyncGeneratorFunction%')
            P = i('async function* () {}')
          else if (F === '%AsyncGenerator%') {
            var D = $('%AsyncGeneratorFunction%')
            D && (P = D.prototype)
          } else if (F === '%AsyncIteratorPrototype%') {
            var L = $('%AsyncGenerator%')
            L && (P = m(L.prototype))
          }
          return (h[F] = P), P
        },
        x = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        },
        y = pl(),
        w = l6(),
        v = y.call(Function.call, Array.prototype.concat),
        E = y.call(Function.apply, Array.prototype.splice),
        A = y.call(Function.call, String.prototype.replace),
        S = y.call(Function.call, String.prototype.slice),
        k = y.call(Function.call, RegExp.prototype.exec),
        C =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        T = function (F) {
          var P = S(F, 0, 1),
            D = S(F, -1)
          if (P === '%' && D !== '%')
            throw new n('invalid intrinsic syntax, expected closing `%`')
          if (D === '%' && P !== '%')
            throw new n('invalid intrinsic syntax, expected opening `%`')
          var L = []
          return (
            A(F, C, function (N, V, B, H) {
              L[L.length] = B ? A(H, O, '$1') : V || N
            }),
            L
          )
        },
        R = function (F, P) {
          var D = F,
            L
          if ((w(x, D) && ((L = x[D]), (D = '%' + L[0] + '%')), w(h, D))) {
            var N = h[D]
            if ((N === f && (N = g(D)), typeof N > 'u' && !P))
              throw new l(
                'intrinsic ' +
                  F +
                  ' exists, but is not available. Please file an issue!'
              )
            return {alias: L, name: D, value: N}
          }
          throw new n('intrinsic ' + F + ' does not exist!')
        }
      t.exports = function (F, P) {
        if (typeof F != 'string' || F.length === 0)
          throw new l('intrinsic name must be a non-empty string')
        if (arguments.length > 1 && typeof P != 'boolean')
          throw new l('"allowMissing" argument must be a boolean')
        if (k(/^%?[^%]*%?$/, F) === null)
          throw new n(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          )
        var D = T(F),
          L = D.length > 0 ? D[0] : '',
          N = R('%' + L + '%', P),
          V = N.name,
          B = N.value,
          H = !1,
          X = N.alias
        X && ((L = X[0]), E(D, v([0, 1], X)))
        for (var ne = 1, K = !0; ne < D.length; ne += 1) {
          var J = D[ne],
            I = S(J, 0, 1),
            z = S(J, -1)
          if (
            (I === '"' ||
              I === "'" ||
              I === '`' ||
              z === '"' ||
              z === "'" ||
              z === '`') &&
            I !== z
          )
            throw new n('property names with quotes must have matching quotes')
          if (
            ((J === 'constructor' || !K) && (H = !0),
            (L += '.' + J),
            (V = '%' + L + '%'),
            w(h, V))
          )
            B = h[V]
          else if (B != null) {
            if (!(J in B)) {
              if (!P)
                throw new l(
                  'base intrinsic for ' +
                    F +
                    ' exists, but the property is not available.'
                )
              return
            }
            if (u && ne + 1 >= D.length) {
              var W = u(B, J)
              ;(K = !!W),
                K && 'get' in W && !('originalValue' in W.get)
                  ? (B = W.get)
                  : (B = B[J])
            } else (K = w(B, J)), (B = B[J])
            K && !H && (h[V] = B)
          }
        }
        return B
      }
    },
  }),
  i6 = Ie({
    'node_modules/call-bind/index.js'(e, t) {
      var r = pl(),
        n = o0(),
        o = n('%Function.prototype.apply%'),
        l = n('%Function.prototype.call%'),
        i = n('%Reflect.apply%', !0) || r.call(l, o),
        u = n('%Object.getOwnPropertyDescriptor%', !0),
        s = n('%Object.defineProperty%', !0),
        c = n('%Math.max%')
      if (s)
        try {
          s({}, 'a', {value: 1})
        } catch {
          s = null
        }
      t.exports = function (f) {
        var p = i(r, l, arguments)
        if (u && s) {
          var h = u(p, 'length')
          h.configurable &&
            s(p, 'length', {value: 1 + c(0, f.length - (arguments.length - 1))})
        }
        return p
      }
      var d = function () {
        return i(r, o, arguments)
      }
      s ? s(t.exports, 'apply', {value: d}) : (t.exports.apply = d)
    },
  }),
  s6 = Ie({
    'node_modules/call-bind/callBound.js'(e, t) {
      var r = o0(),
        n = i6(),
        o = n(r('String.prototype.indexOf'))
      t.exports = function (i, u) {
        var s = r(i, !!u)
        return typeof s == 'function' && o(i, '.prototype.') > -1 ? n(s) : s
      }
    },
  }),
  u6 = Ie({
    'node_modules/has-tostringtag/shams.js'(e, t) {
      var r = n0()
      t.exports = function () {
        return r() && !!Symbol.toStringTag
      }
    },
  }),
  c6 = Ie({
    'node_modules/is-regex/index.js'(e, t) {
      var r = s6(),
        n = u6()(),
        o,
        l,
        i,
        u
      n &&
        ((o = r('Object.prototype.hasOwnProperty')),
        (l = r('RegExp.prototype.exec')),
        (i = {}),
        (s = function () {
          throw i
        }),
        (u = {toString: s, valueOf: s}),
        typeof Symbol.toPrimitive == 'symbol' && (u[Symbol.toPrimitive] = s))
      var s,
        c = r('Object.prototype.toString'),
        d = Object.getOwnPropertyDescriptor,
        m = '[object RegExp]'
      t.exports = n
        ? function (p) {
            if (!p || typeof p != 'object') return !1
            var h = d(p, 'lastIndex'),
              g = h && o(h, 'value')
            if (!g) return !1
            try {
              l(p, u)
            } catch (x) {
              return x === i
            }
          }
        : function (p) {
            return !p || (typeof p != 'object' && typeof p != 'function')
              ? !1
              : c(p) === m
          }
    },
  }),
  d6 = Ie({
    'node_modules/is-function/index.js'(e, t) {
      t.exports = n
      var r = Object.prototype.toString
      function n(o) {
        if (!o) return !1
        var l = r.call(o)
        return (
          l === '[object Function]' ||
          (typeof o == 'function' && l !== '[object RegExp]') ||
          (typeof window < 'u' &&
            (o === window.setTimeout ||
              o === window.alert ||
              o === window.confirm ||
              o === window.prompt))
        )
      }
    },
  }),
  p6 = Ie({
    'node_modules/is-symbol/index.js'(e, t) {
      var r = Object.prototype.toString,
        n = a0()()
      n
        ? ((o = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() != 'symbol' ? !1 : l.test(o.call(s))
          }),
          (t.exports = function (s) {
            if (typeof s == 'symbol') return !0
            if (r.call(s) !== '[object Symbol]') return !1
            try {
              return i(s)
            } catch {
              return !1
            }
          }))
        : (t.exports = function (s) {
            return !1
          })
      var o, l, i
    },
  }),
  f6 = dl(c6()),
  m6 = dl(d6()),
  g6 = dl(p6())
function h6(e) {
  return e != null && typeof e == 'object' && Array.isArray(e) === !1
}
var b6 =
    typeof global == 'object' && global && global.Object === Object && global,
  y6 = b6,
  v6 = typeof self == 'object' && self && self.Object === Object && self,
  E6 = y6 || v6 || Function('return this')(),
  fl = E6,
  x6 = fl.Symbol,
  lr = x6,
  l0 = Object.prototype,
  w6 = l0.hasOwnProperty,
  A6 = l0.toString,
  Er = lr ? lr.toStringTag : void 0
function S6(e) {
  var t = w6.call(e, Er),
    r = e[Er]
  try {
    e[Er] = void 0
    var n = !0
  } catch {}
  var o = A6.call(e)
  return n && (t ? (e[Er] = r) : delete e[Er]), o
}
var C6 = S6,
  k6 = Object.prototype,
  _6 = k6.toString
function O6(e) {
  return _6.call(e)
}
var T6 = O6,
  R6 = '[object Null]',
  F6 = '[object Undefined]',
  zi = lr ? lr.toStringTag : void 0
function $6(e) {
  return e == null
    ? e === void 0
      ? F6
      : R6
    : zi && zi in Object(e)
    ? C6(e)
    : T6(e)
}
var D6 = $6,
  qi = lr ? lr.prototype : void 0
qi && qi.toString
function L6(e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var i0 = L6,
  M6 = '[object AsyncFunction]',
  B6 = '[object Function]',
  I6 = '[object GeneratorFunction]',
  P6 = '[object Proxy]'
function N6(e) {
  if (!i0(e)) return !1
  var t = D6(e)
  return t == B6 || t == I6 || t == M6 || t == P6
}
var j6 = N6,
  H6 = fl['__core-js_shared__'],
  Oa = H6,
  Ui = (function () {
    var e = /[^.]+$/.exec((Oa && Oa.keys && Oa.keys.IE_PROTO) || '')
    return e ? 'Symbol(src)_1.' + e : ''
  })()
function Z6(e) {
  return !!Ui && Ui in e
}
var V6 = Z6,
  z6 = Function.prototype,
  q6 = z6.toString
function U6(e) {
  if (e != null) {
    try {
      return q6.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var W6 = U6,
  G6 = /[\\^$.*+?()[\]{}|]/g,
  Y6 = /^\[object .+?Constructor\]$/,
  K6 = Function.prototype,
  X6 = Object.prototype,
  J6 = K6.toString,
  Q6 = X6.hasOwnProperty,
  eE = RegExp(
    '^' +
      J6.call(Q6)
        .replace(G6, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  )
function tE(e) {
  if (!i0(e) || V6(e)) return !1
  var t = j6(e) ? eE : Y6
  return t.test(W6(e))
}
var rE = tE
function nE(e, t) {
  return e == null ? void 0 : e[t]
}
var aE = nE
function oE(e, t) {
  var r = aE(e, t)
  return rE(r) ? r : void 0
}
var s0 = oE
function lE(e, t) {
  return e === t || (e !== e && t !== t)
}
var iE = lE,
  sE = s0(Object, 'create'),
  Ir = sE
function uE() {
  ;(this.__data__ = Ir ? Ir(null) : {}), (this.size = 0)
}
var cE = uE
function dE(e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var pE = dE,
  fE = '__lodash_hash_undefined__',
  mE = Object.prototype,
  gE = mE.hasOwnProperty
function hE(e) {
  var t = this.__data__
  if (Ir) {
    var r = t[e]
    return r === fE ? void 0 : r
  }
  return gE.call(t, e) ? t[e] : void 0
}
var bE = hE,
  yE = Object.prototype,
  vE = yE.hasOwnProperty
function EE(e) {
  var t = this.__data__
  return Ir ? t[e] !== void 0 : vE.call(t, e)
}
var xE = EE,
  wE = '__lodash_hash_undefined__'
function AE(e, t) {
  var r = this.__data__
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = Ir && t === void 0 ? wE : t),
    this
  )
}
var SE = AE
function cr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
cr.prototype.clear = cE
cr.prototype.delete = pE
cr.prototype.get = bE
cr.prototype.has = xE
cr.prototype.set = SE
var Wi = cr
function CE() {
  ;(this.__data__ = []), (this.size = 0)
}
var kE = CE
function _E(e, t) {
  for (var r = e.length; r--; ) if (iE(e[r][0], t)) return r
  return -1
}
var Xn = _E,
  OE = Array.prototype,
  TE = OE.splice
function RE(e) {
  var t = this.__data__,
    r = Xn(t, e)
  if (r < 0) return !1
  var n = t.length - 1
  return r == n ? t.pop() : TE.call(t, r, 1), --this.size, !0
}
var FE = RE
function $E(e) {
  var t = this.__data__,
    r = Xn(t, e)
  return r < 0 ? void 0 : t[r][1]
}
var DE = $E
function LE(e) {
  return Xn(this.__data__, e) > -1
}
var ME = LE
function BE(e, t) {
  var r = this.__data__,
    n = Xn(r, e)
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
}
var IE = BE
function dr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
dr.prototype.clear = kE
dr.prototype.delete = FE
dr.prototype.get = DE
dr.prototype.has = ME
dr.prototype.set = IE
var PE = dr,
  NE = s0(fl, 'Map'),
  jE = NE
function HE() {
  ;(this.size = 0),
    (this.__data__ = {hash: new Wi(), map: new (jE || PE)(), string: new Wi()})
}
var ZE = HE
function VE(e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null
}
var zE = VE
function qE(e, t) {
  var r = e.__data__
  return zE(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
}
var Jn = qE
function UE(e) {
  var t = Jn(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
var WE = UE
function GE(e) {
  return Jn(this, e).get(e)
}
var YE = GE
function KE(e) {
  return Jn(this, e).has(e)
}
var XE = KE
function JE(e, t) {
  var r = Jn(this, e),
    n = r.size
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
}
var QE = JE
function pr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
pr.prototype.clear = ZE
pr.prototype.delete = WE
pr.prototype.get = YE
pr.prototype.has = XE
pr.prototype.set = QE
var u0 = pr,
  e8 = 'Expected a function'
function ml(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(e8)
  var r = function () {
    var n = arguments,
      o = t ? t.apply(this, n) : n[0],
      l = r.cache
    if (l.has(o)) return l.get(o)
    var i = e.apply(this, n)
    return (r.cache = l.set(o, i) || l), i
  }
  return (r.cache = new (ml.Cache || u0)()), r
}
ml.Cache = u0
var t8 = ml,
  r8 = 500
function n8(e) {
  var t = t8(e, function (n) {
      return r.size === r8 && r.clear(), n
    }),
    r = t.cache
  return t
}
var a8 = n8,
  o8 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  l8 = /\\(\\)?/g
a8(function (e) {
  var t = []
  return (
    e.charCodeAt(0) === 46 && t.push(''),
    e.replace(o8, function (r, n, o, l) {
      t.push(o ? l.replace(l8, '$1') : n || r)
    }),
    t
  )
})
var i8 = h6,
  s8 = (e) => {
    let t = null,
      r = !1,
      n = !1,
      o = !1,
      l = ''
    if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !n && !o
          ? e[i] === '"' || e[i] === "'" || e[i] === '`'
            ? (t = e[i])
            : e[i] === '/' && e[i + 1] === '*'
            ? (r = !0)
            : e[i] === '/' && e[i + 1] === '/'
            ? (n = !0)
            : e[i] === '/' && e[i + 1] !== '/' && (o = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== '\\') ||
                (e[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            o &&
              ((e[i] === '/' && e[i - 1] !== '\\') ||
                e[i] ===
                  `
`) &&
              (o = !1),
            r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
            n &&
              e[i] ===
                `
` &&
              (n = !1)),
          !r && !n && (l += e[i])
    else l = e
    return l
  },
  u8 = Ht(1e4)((e) => s8(e).replace(/\n\s*/g, '').trim()),
  c8 = function (t, r) {
    const n = r.slice(0, r.indexOf('{')),
      o = r.slice(r.indexOf('{'))
    if (n.includes('=>') || n.includes('function')) return r
    let l = n
    return (l = l.replace(t, 'function')), l + o
  },
  d8 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
function c0(e) {
  if (!i8(e)) return e
  let t = e,
    r = !1
  return (
    typeof Event < 'u' && e instanceof Event && ((t = a6(t)), (r = !0)),
    (t = Object.keys(t).reduce((n, o) => {
      try {
        t[o] && t[o].toJSON, (n[o] = t[o])
      } catch {
        r = !0
      }
      return n
    }, {})),
    r ? t : e
  )
}
var p8 = function (t) {
    let r, n, o, l
    return function (u, s) {
      try {
        if (u === '')
          return (
            (l = []), (r = new Map([[s, '[]']])), (n = new Map()), (o = []), s
          )
        const c = n.get(this) || this
        for (; o.length && c !== o[0]; ) o.shift(), l.pop()
        if (typeof s == 'boolean') return s
        if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0
        if (s === null) return null
        if (typeof s == 'number')
          return s === -1 / 0
            ? '_-Infinity_'
            : s === 1 / 0
            ? '_Infinity_'
            : Number.isNaN(s)
            ? '_NaN_'
            : s
        if (typeof s == 'bigint') return `_bigint_${s.toString()}`
        if (typeof s == 'string')
          return d8.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s
        if ((0, f6.default)(s))
          return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0
        if ((0, m6.default)(s)) {
          if (!t.allowFunction) return
          const {name: m} = s,
            f = s.toString()
          return f.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${m}|${(() => {}).toString()}`
            : `_function_${m}|${u8(c8(u, f))}`
        }
        if ((0, g6.default)(s)) {
          if (!t.allowSymbol) return
          const m = Symbol.keyFor(s)
          return m !== void 0
            ? `_gsymbol_${m}`
            : `_symbol_${s.toString().slice(7, -1)}`
        }
        if (o.length >= t.maxDepth)
          return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]'
        if (s === this) return `_duplicate_${JSON.stringify(l)}`
        if (s instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(s.cause ? {cause: s.cause} : {}),
              ...s,
              name: s.name,
              message: s.message,
              stack: s.stack,
              '_constructor-name_': s.constructor.name,
            },
          }
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== 'Object' &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return
        const d = r.get(s)
        if (!d) {
          const m = Array.isArray(s) ? s : c0(s)
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(m, {'_constructor-name_': s.constructor.name})
            } catch {}
          return (
            l.push(u),
            o.unshift(m),
            r.set(s, JSON.stringify(l)),
            s !== m && n.set(s, m),
            m
          )
        }
        return `_duplicate_${d}`
      } catch {
        return
      }
    }
  },
  f8 = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowError: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  },
  m8 = (e, t = {}) => {
    const r = {...f8, ...t}
    return JSON.stringify(c0(e), p8(r), t.space)
  }
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ /**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var d0 = {exports: {}},
  Ta,
  Gi
function g8() {
  return (
    Gi ||
      ((Gi = 1),
      (Ta = {
        tocSelector: '.js-toc',
        contentSelector: '.js-toc-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '.js-toc-ignore',
        hasInnerContainers: !1,
        linkClass: 'toc-link',
        extraLinkClasses: '',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        extraListClasses: '',
        isCollapsedClass: 'is-collapsed',
        collapsibleClass: 'is-collapsible',
        listItemClass: 'toc-list-item',
        activeListItemClass: 'is-active-li',
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: 'is-position-fixed',
        fixedSidebarOffset: 'auto',
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: '',
        disableTocScrollSync: !1,
        tocScrollOffset: 0,
      })),
    Ta
  )
}
var Ra, Yi
function h8() {
  return (
    Yi ||
      ((Yi = 1),
      (Ra = function (e) {
        var t = [].forEach,
          r = [].some,
          n = document.body,
          o,
          l = !0,
          i = ' '
        function u(y, w) {
          var v = w.appendChild(c(y))
          if (y.children.length) {
            var E = d(y.isCollapsed)
            y.children.forEach(function (A) {
              u(A, E)
            }),
              v.appendChild(E)
          }
        }
        function s(y, w) {
          var v = !1,
            E = d(v)
          if (
            (w.forEach(function (A) {
              u(A, E)
            }),
            (o = y || o),
            o !== null)
          )
            return (
              o.firstChild && o.removeChild(o.firstChild),
              w.length === 0 ? o : o.appendChild(E)
            )
        }
        function c(y) {
          var w = document.createElement('li'),
            v = document.createElement('a')
          return (
            e.listItemClass && w.setAttribute('class', e.listItemClass),
            e.onClick && (v.onclick = e.onClick),
            e.includeTitleTags && v.setAttribute('title', y.textContent),
            e.includeHtml && y.childNodes.length
              ? t.call(y.childNodes, function (E) {
                  v.appendChild(E.cloneNode(!0))
                })
              : (v.textContent = y.textContent),
            v.setAttribute('href', e.basePath + '#' + y.id),
            v.setAttribute(
              'class',
              e.linkClass +
                i +
                'node-name--' +
                y.nodeName +
                i +
                e.extraLinkClasses
            ),
            w.appendChild(v),
            w
          )
        }
        function d(y) {
          var w = e.orderedList ? 'ol' : 'ul',
            v = document.createElement(w),
            E = e.listClass + i + e.extraListClasses
          return (
            y &&
              ((E = E + i + e.collapsibleClass),
              (E = E + i + e.isCollapsedClass)),
            v.setAttribute('class', E),
            v
          )
        }
        function m() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var y
            y = document.querySelector(e.scrollContainer).scrollTop
          } else y = document.documentElement.scrollTop || n.scrollTop
          var w = document.querySelector(e.positionFixedSelector)
          e.fixedSidebarOffset === 'auto' &&
            (e.fixedSidebarOffset = o.offsetTop),
            y > e.fixedSidebarOffset
              ? w.className.indexOf(e.positionFixedClass) === -1 &&
                (w.className += i + e.positionFixedClass)
              : (w.className = w.className
                  .split(i + e.positionFixedClass)
                  .join(''))
        }
        function f(y) {
          var w = 0
          return (
            y !== null &&
              ((w = y.offsetTop),
              e.hasInnerContainers && (w += f(y.offsetParent))),
            w
          )
        }
        function p(y) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var w
            w = document.querySelector(e.scrollContainer).scrollTop
          } else w = document.documentElement.scrollTop || n.scrollTop
          e.positionFixedSelector && m()
          var v = y,
            E
          if (l && o !== null && v.length > 0) {
            r.call(v, function (R, $) {
              if (f(R) > w + e.headingsOffset + 10) {
                var F = $ === 0 ? $ : $ - 1
                return (E = v[F]), !0
              } else if ($ === v.length - 1) return (E = v[v.length - 1]), !0
            })
            var A = o.querySelector('.' + e.activeLinkClass),
              S = o.querySelector(
                '.' +
                  e.linkClass +
                  '.node-name--' +
                  E.nodeName +
                  '[href="' +
                  e.basePath +
                  '#' +
                  E.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                  '"]'
              )
            if (A === S) return
            var k = o.querySelectorAll('.' + e.linkClass)
            t.call(k, function (R) {
              R.className = R.className.split(i + e.activeLinkClass).join('')
            })
            var C = o.querySelectorAll('.' + e.listItemClass)
            t.call(C, function (R) {
              R.className = R.className
                .split(i + e.activeListItemClass)
                .join('')
            }),
              S &&
                S.className.indexOf(e.activeLinkClass) === -1 &&
                (S.className += i + e.activeLinkClass)
            var O = S && S.parentNode
            O &&
              O.className.indexOf(e.activeListItemClass) === -1 &&
              (O.className += i + e.activeListItemClass)
            var T = o.querySelectorAll(
              '.' + e.listClass + '.' + e.collapsibleClass
            )
            t.call(T, function (R) {
              R.className.indexOf(e.isCollapsedClass) === -1 &&
                (R.className += i + e.isCollapsedClass)
            }),
              S &&
                S.nextSibling &&
                S.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                (S.nextSibling.className = S.nextSibling.className
                  .split(i + e.isCollapsedClass)
                  .join('')),
              h(S && S.parentNode.parentNode)
          }
        }
        function h(y) {
          return y &&
            y.className.indexOf(e.collapsibleClass) !== -1 &&
            y.className.indexOf(e.isCollapsedClass) !== -1
            ? ((y.className = y.className
                .split(i + e.isCollapsedClass)
                .join('')),
              h(y.parentNode.parentNode))
            : y
        }
        function g(y) {
          var w = y.target || y.srcElement
          typeof w.className != 'string' ||
            w.className.indexOf(e.linkClass) === -1 ||
            (l = !1)
        }
        function x() {
          l = !0
        }
        return {
          enableTocAnimation: x,
          disableTocAnimation: g,
          render: s,
          updateToc: p,
        }
      })),
    Ra
  )
}
var Fa, Ki
function b8() {
  return (
    Ki ||
      ((Ki = 1),
      (Fa = function (t) {
        var r = [].reduce
        function n(d) {
          return d[d.length - 1]
        }
        function o(d) {
          return +d.nodeName.toUpperCase().replace('H', '')
        }
        function l(d) {
          try {
            return (
              d instanceof window.HTMLElement ||
              d instanceof window.parent.HTMLElement
            )
          } catch {
            return d instanceof window.HTMLElement
          }
        }
        function i(d) {
          if (!l(d)) return d
          if (t.ignoreHiddenElements && (!d.offsetHeight || !d.offsetParent))
            return null
          const m =
            d.getAttribute('data-heading-label') ||
            (t.headingLabelCallback
              ? String(t.headingLabelCallback(d.textContent))
              : d.textContent.trim())
          var f = {
            id: d.id,
            children: [],
            nodeName: d.nodeName,
            headingLevel: o(d),
            textContent: m,
          }
          return (
            t.includeHtml && (f.childNodes = d.childNodes),
            t.headingObjectCallback ? t.headingObjectCallback(f, d) : f
          )
        }
        function u(d, m) {
          for (
            var f = i(d),
              p = f.headingLevel,
              h = m,
              g = n(h),
              x = g ? g.headingLevel : 0,
              y = p - x;
            y > 0 && ((g = n(h)), !(g && p === g.headingLevel));

          )
            g && g.children !== void 0 && (h = g.children), y--
          return p >= t.collapseDepth && (f.isCollapsed = !0), h.push(f), h
        }
        function s(d, m) {
          var f = m
          t.ignoreSelector &&
            (f = m.split(',').map(function (h) {
              return h.trim() + ':not(' + t.ignoreSelector + ')'
            }))
          try {
            return d.querySelectorAll(f)
          } catch {
            return console.warn('Headers not found with selector: ' + f), null
          }
        }
        function c(d) {
          return r.call(
            d,
            function (f, p) {
              var h = i(p)
              return h && u(h, f.nest), f
            },
            {nest: []}
          )
        }
        return {nestHeadingsArray: c, selectHeadings: s}
      })),
    Fa
  )
}
var $a, Xi
function y8() {
  return (
    Xi ||
      ((Xi = 1),
      ($a = function (t) {
        var r = t.tocElement || document.querySelector(t.tocSelector)
        if (r && r.scrollHeight > r.clientHeight) {
          var n = r.querySelector('.' + t.activeListItemClass)
          n && (r.scrollTop = n.offsetTop - t.tocScrollOffset)
        }
      })),
    $a
  )
}
var Da = {},
  Ji
function v8() {
  if (Ji) return Da
  ;(Ji = 1), (Da.initSmoothScrolling = e)
  function e(r) {
    var n = r.duration,
      o = r.offset,
      l = location.hash ? s(location.href) : location.href
    i()
    function i() {
      document.body.addEventListener('click', d, !1)
      function d(m) {
        !u(m.target) ||
          m.target.className.indexOf('no-smooth-scroll') > -1 ||
          (m.target.href.charAt(m.target.href.length - 2) === '#' &&
            m.target.href.charAt(m.target.href.length - 1) === '!') ||
          m.target.className.indexOf(r.linkClass) === -1 ||
          t(m.target.hash, {
            duration: n,
            offset: o,
            callback: function () {
              c(m.target.hash)
            },
          })
      }
    }
    function u(d) {
      return (
        d.tagName.toLowerCase() === 'a' &&
        (d.hash.length > 0 || d.href.charAt(d.href.length - 1) === '#') &&
        (s(d.href) === l || s(d.href) + '#' === l)
      )
    }
    function s(d) {
      return d.slice(0, d.lastIndexOf('#'))
    }
    function c(d) {
      var m = document.getElementById(d.substring(1))
      m &&
        (/^(?:a|select|input|button|textarea)$/i.test(m.tagName) ||
          (m.tabIndex = -1),
        m.focus())
    }
  }
  function t(r, n) {
    var o = window.pageYOffset,
      l = {
        duration: n.duration,
        offset: n.offset || 0,
        callback: n.callback,
        easing: n.easing || p,
      },
      i =
        document.querySelector(
          '[id="' + decodeURI(r).split('#').join('') + '"]'
        ) || document.querySelector('[id="' + r.split('#').join('') + '"]'),
      u =
        typeof r == 'string'
          ? l.offset +
            (r
              ? (i && i.getBoundingClientRect().top) || 0
              : -(
                  document.documentElement.scrollTop || document.body.scrollTop
                ))
          : r,
      s = typeof l.duration == 'function' ? l.duration(u) : l.duration,
      c,
      d
    requestAnimationFrame(function (h) {
      ;(c = h), m(h)
    })
    function m(h) {
      ;(d = h - c),
        window.scrollTo(0, l.easing(d, o, u, s)),
        d < s ? requestAnimationFrame(m) : f()
    }
    function f() {
      window.scrollTo(0, o + u), typeof l.callback == 'function' && l.callback()
    }
    function p(h, g, x, y) {
      return (
        (h /= y / 2),
        h < 1 ? (x / 2) * h * h + g : (h--, (-x / 2) * (h * (h - 2) - 1) + g)
      )
    }
  }
  return Da
}
;(function (e, t) {
  ;(function (r, n) {
    e.exports = n(r)
  })(typeof aa < 'u' ? aa : window || aa, function (r) {
    var n = g8(),
      o = {},
      l = {},
      i = h8(),
      u = b8(),
      s = y8(),
      c,
      d,
      m =
        !!r &&
        !!r.document &&
        !!r.document.querySelector &&
        !!r.addEventListener
    if (typeof window > 'u' && !m) return
    var f,
      p = Object.prototype.hasOwnProperty
    function h() {
      for (var w = {}, v = 0; v < arguments.length; v++) {
        var E = arguments[v]
        for (var A in E) p.call(E, A) && (w[A] = E[A])
      }
      return w
    }
    function g(w, v, E) {
      v || (v = 250)
      var A, S
      return function () {
        var k = E || this,
          C = +new Date(),
          O = arguments
        A && C < A + v
          ? (clearTimeout(S),
            (S = setTimeout(function () {
              ;(A = C), w.apply(k, O)
            }, v)))
          : ((A = C), w.apply(k, O))
      }
    }
    function x(w) {
      try {
        return w.contentElement || document.querySelector(w.contentSelector)
      } catch {
        return (
          console.warn('Contents element not found: ' + w.contentSelector), null
        )
      }
    }
    function y(w) {
      try {
        return w.tocElement || document.querySelector(w.tocSelector)
      } catch {
        return console.warn('TOC element not found: ' + w.tocSelector), null
      }
    }
    return (
      (l.destroy = function () {
        var w = y(o)
        w !== null &&
          (o.skipRendering || (w && (w.innerHTML = '')),
          o.scrollContainer && document.querySelector(o.scrollContainer)
            ? (document
                .querySelector(o.scrollContainer)
                .removeEventListener('scroll', this._scrollListener, !1),
              document
                .querySelector(o.scrollContainer)
                .removeEventListener('resize', this._scrollListener, !1),
              c &&
                document
                  .querySelector(o.scrollContainer)
                  .removeEventListener('click', this._clickListener, !1))
            : (document.removeEventListener('scroll', this._scrollListener, !1),
              document.removeEventListener('resize', this._scrollListener, !1),
              c &&
                document.removeEventListener('click', this._clickListener, !1)))
      }),
      (l.init = function (w) {
        if (m) {
          ;(o = h(n, w || {})),
            (this.options = o),
            (this.state = {}),
            o.scrollSmooth &&
              ((o.duration = o.scrollSmoothDuration),
              (o.offset = o.scrollSmoothOffset),
              (l.scrollSmooth = v8().initSmoothScrolling(o))),
            (c = i(o)),
            (d = u(o)),
            (this._buildHtml = c),
            (this._parseContent = d),
            (this._headingsArray = f),
            l.destroy()
          var v = x(o)
          if (v !== null) {
            var E = y(o)
            if (
              E !== null &&
              ((f = d.selectHeadings(v, o.headingSelector)), f !== null)
            ) {
              var A = d.nestHeadingsArray(f),
                S = A.nest
              o.skipRendering || c.render(E, S),
                (this._scrollListener = g(function (C) {
                  c.updateToc(f), !o.disableTocScrollSync && s(o)
                  var O =
                    C &&
                    C.target &&
                    C.target.scrollingElement &&
                    C.target.scrollingElement.scrollTop === 0
                  ;((C && (C.eventPhase === 0 || C.currentTarget === null)) ||
                    O) &&
                    (c.updateToc(f),
                    o.scrollEndCallback && o.scrollEndCallback(C))
                }, o.throttleTimeout)),
                this._scrollListener(),
                o.scrollContainer && document.querySelector(o.scrollContainer)
                  ? (document
                      .querySelector(o.scrollContainer)
                      .addEventListener('scroll', this._scrollListener, !1),
                    document
                      .querySelector(o.scrollContainer)
                      .addEventListener('resize', this._scrollListener, !1))
                  : (document.addEventListener(
                      'scroll',
                      this._scrollListener,
                      !1
                    ),
                    document.addEventListener(
                      'resize',
                      this._scrollListener,
                      !1
                    ))
              var k = null
              return (
                (this._clickListener = g(function (C) {
                  o.scrollSmooth && c.disableTocAnimation(C),
                    c.updateToc(f),
                    k && clearTimeout(k),
                    (k = setTimeout(function () {
                      c.enableTocAnimation()
                    }, o.scrollSmoothDuration))
                }, o.throttleTimeout)),
                o.scrollContainer && document.querySelector(o.scrollContainer)
                  ? document
                      .querySelector(o.scrollContainer)
                      .addEventListener('click', this._clickListener, !1)
                  : document.addEventListener('click', this._clickListener, !1),
                this
              )
            }
          }
        }
      }),
      (l.refresh = function (w) {
        l.destroy(), l.init(w || this.options)
      }),
      (r.tocbot = l),
      l
    )
  })
})(d0)
var Qi = d0.exports
const {global: $e} = __STORYBOOK_MODULE_GLOBAL__,
  {deprecate: pe, once: E8, logger: gl} = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    filterArgTypes: x8,
    composeConfigs: Ww,
    Preview: Gw,
    DocsContext: Yw,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: es,
    UPDATE_STORY_ARGS: w8,
    RESET_STORY_ARGS: A8,
    GLOBALS_UPDATED: ts,
    NAVIGATE_URL: S8,
  } = __STORYBOOK_MODULE_CORE_EVENTS__
__STORYBOOK_MODULE_CHANNELS__
var C8 = _.div(re, ({theme: e}) => ({
    backgroundColor:
      e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '25px 0 40px',
    color: te(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  })),
  p0 = (e) =>
    a.createElement(C8, {...e, className: 'docblock-emptyblock sb-unstyled'}),
  k8 = _(Zn)(({theme: e}) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': {padding: 20, background: 'inherit'},
  })),
  _8 = _.div(({theme: e}) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    margin: '25px 0 40px',
    padding: '20px 20px 20px 22px',
  })),
  en = _.div(({theme: e}) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: '60%',
    [`&:first-child${Ua}`]: {margin: 0},
  })),
  O8 = () =>
    a.createElement(
      _8,
      null,
      a.createElement(en, null),
      a.createElement(en, {style: {width: '80%'}}),
      a.createElement(en, {style: {width: '30%'}}),
      a.createElement(en, {style: {width: '80%'}})
    ),
  hl = ({
    isLoading: e,
    error: t,
    language: r,
    code: n,
    dark: o,
    format: l,
    ...i
  }) => {
    if (e) return a.createElement(O8, null)
    if (t) return a.createElement(p0, null, t)
    let u = a.createElement(
      k8,
      {
        bordered: !0,
        copyable: !0,
        format: l,
        language: r,
        className: 'docblock-source sb-unstyled',
        ...i,
      },
      n
    )
    if (typeof o > 'u') return u
    let s = o ? Za.dark : Za.light
    return a.createElement(Us, {theme: qa(s)}, u)
  }
hl.defaultProps = {format: !1}
var le = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  bl = 600,
  T8 = _.h1(re, ({theme: e}) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: '32px',
    [`@media (min-width: ${bl}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: '36px',
      marginBottom: '16px',
    },
  })),
  R8 = _.h2(re, ({theme: e}) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: '20px',
    borderBottom: 'none',
    marginBottom: 15,
    [`@media (min-width: ${bl}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: '28px',
      marginBottom: 24,
    },
    color: te(0.25, e.color.defaultText),
  })),
  F8 = _.div(({theme: e}) => {
    let t = {
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s3,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch',
      },
      r = {
        margin: '20px 0 8px',
        padding: 0,
        cursor: 'text',
        position: 'relative',
        color: e.color.defaultText,
        '&:first-of-type': {marginTop: 0, paddingTop: 0},
        '&:hover a.anchor': {textDecoration: 'none'},
        '& code': {fontSize: 'inherit'},
      },
      n = {
        lineHeight: 1,
        margin: '0 2px',
        padding: '3px 5px',
        whiteSpace: 'nowrap',
        borderRadius: 3,
        fontSize: e.typography.size.s2 - 1,
        border:
          e.base === 'light'
            ? `1px solid ${e.color.mediumlight}`
            : `1px solid ${e.color.darker}`,
        color:
          e.base === 'light'
            ? te(0.1, e.color.defaultText)
            : te(0.3, e.color.defaultText),
        backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border,
      }
    return {
      maxWidth: 1e3,
      width: '100%',
      [le('a')]: {
        ...t,
        fontSize: 'inherit',
        lineHeight: '24px',
        color: e.color.secondary,
        textDecoration: 'none',
        '&.absent': {color: '#cc0000'},
        '&.anchor': {
          display: 'block',
          paddingLeft: 30,
          marginLeft: -30,
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      [le('blockquote')]: {
        ...t,
        margin: '16px 0',
        borderLeft: `4px solid ${e.color.medium}`,
        padding: '0 15px',
        color: e.color.dark,
        '& > :first-of-type': {marginTop: 0},
        '& > :last-child': {marginBottom: 0},
      },
      [le('div')]: t,
      [le('dl')]: {
        ...t,
        margin: '16px 0',
        padding: 0,
        '& dt': {
          fontSize: '14px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          padding: 0,
          margin: '16px 0 4px',
        },
        '& dt:first-of-type': {padding: 0},
        '& dt > :first-of-type': {marginTop: 0},
        '& dt > :last-child': {marginBottom: 0},
        '& dd': {margin: '0 0 16px', padding: '0 15px'},
        '& dd > :first-of-type': {marginTop: 0},
        '& dd > :last-child': {marginBottom: 0},
      },
      [le('h1')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.l1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [le('h2')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`,
      },
      [le('h3')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [le('h4')]: {...t, ...r, fontSize: `${e.typography.size.s3}px`},
      [le('h5')]: {...t, ...r, fontSize: `${e.typography.size.s2}px`},
      [le('h6')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.s2}px`,
        color: e.color.dark,
      },
      [le('hr')]: {
        border: '0 none',
        borderTop: `1px solid ${e.appBorderColor}`,
        height: 4,
        padding: 0,
      },
      [le('img')]: {maxWidth: '100%'},
      [le('li')]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: '24px',
        '& + li': {marginTop: '.25em'},
        '& ul, & ol': {marginTop: '.25em', marginBottom: 0},
        '& code': n,
      },
      [le('ol')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': {marginTop: 0},
        '& :last-child': {marginBottom: 0},
      },
      [le('p')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        color: e.color.defaultText,
        '& code': n,
      },
      [le('pre')]: {
        ...t,
        fontFamily: e.typography.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
        '&:not(.prismjs)': {
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          padding: 0,
          margin: 0,
        },
        '& pre, &.prismjs': {
          padding: 15,
          margin: 0,
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          fontSize: '13px',
          lineHeight: '19px',
          code: {color: 'inherit', fontSize: 'inherit'},
        },
        '& code': {whiteSpace: 'pre'},
        '& code, & tt': {border: 'none'},
      },
      [le('span')]: {
        ...t,
        '&.frame': {
          display: 'block',
          overflow: 'hidden',
          '& > span': {
            border: `1px solid ${e.color.medium}`,
            display: 'block',
            float: 'left',
            overflow: 'hidden',
            margin: '13px 0 0',
            padding: 7,
            width: 'auto',
          },
          '& span img': {display: 'block', float: 'left'},
          '& span span': {
            clear: 'both',
            color: e.color.darkest,
            display: 'block',
            padding: '5px 0 0',
          },
        },
        '&.align-center': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'center',
          },
          '& span img': {margin: '0 auto', textAlign: 'center'},
        },
        '&.align-right': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px 0 0',
            textAlign: 'right',
          },
          '& span img': {margin: 0, textAlign: 'right'},
        },
        '&.float-left': {
          display: 'block',
          marginRight: 13,
          overflow: 'hidden',
          float: 'left',
          '& span': {margin: '13px 0 0'},
        },
        '&.float-right': {
          display: 'block',
          marginLeft: 13,
          overflow: 'hidden',
          float: 'right',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'right',
          },
        },
      },
      [le('table')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        padding: 0,
        borderCollapse: 'collapse',
        '& tr': {
          borderTop: `1px solid ${e.appBorderColor}`,
          backgroundColor: e.appContentBg,
          margin: 0,
          padding: 0,
        },
        '& tr:nth-of-type(2n)': {
          backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter,
        },
        '& tr th': {
          fontWeight: 'bold',
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: '6px 13px',
        },
        '& tr td': {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: '6px 13px',
        },
        '& tr th :first-of-type, & tr td :first-of-type': {marginTop: 0},
        '& tr th :last-child, & tr td :last-child': {marginBottom: 0},
      },
      [le('ul')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': {marginTop: 0},
        '& :last-child': {marginBottom: 0},
        listStyle: 'disc',
      },
    }
  }),
  $8 = _.div(({theme: e}) => ({
    background: e.background.content,
    display: 'flex',
    justifyContent: 'center',
    padding: '4rem 20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
    gap: '3rem',
    [`@media (min-width: ${bl}px)`]: {},
  })),
  D8 = ({children: e, toc: t}) =>
    a.createElement(
      $8,
      {className: 'sbdocs sbdocs-wrapper'},
      a.createElement(F8, {className: 'sbdocs sbdocs-content'}, e),
      t
    ),
  Qn = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    border: `1px solid ${e.appBorderColor}`,
  }),
  L8 = ({zoom: e, resetZoom: t}) =>
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        Nt,
        {
          key: 'zoomin',
          onClick: (r) => {
            r.preventDefault(), e(0.8)
          },
          title: 'Zoom in',
        },
        a.createElement(ve, {icon: 'zoom'})
      ),
      a.createElement(
        Nt,
        {
          key: 'zoomout',
          onClick: (r) => {
            r.preventDefault(), e(1.25)
          },
          title: 'Zoom out',
        },
        a.createElement(ve, {icon: 'zoomout'})
      ),
      a.createElement(
        Nt,
        {
          key: 'zoomreset',
          onClick: (r) => {
            r.preventDefault(), t()
          },
          title: 'Reset zoom',
        },
        a.createElement(ve, {icon: 'zoomreset'})
      )
    ),
  M8 = _(qn)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    transition: 'transform .2s linear',
  }),
  B8 = ({isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...l}) =>
    a.createElement(
      M8,
      {...l},
      a.createElement(
        b.Fragment,
        {key: 'left'},
        e
          ? [1, 2, 3].map((i) => a.createElement(Ec, {key: i}))
          : a.createElement(L8, {zoom: n, resetZoom: o})
      )
    ),
  f0 = b.createContext({scale: 1}),
  {window: I8} = $e,
  P8 = class extends b.Component {
    constructor() {
      super(...arguments), (this.iframe = null)
    }
    componentDidMount() {
      let {id: e} = this.props
      this.iframe = I8.document.getElementById(e)
    }
    shouldComponentUpdate(e) {
      let {scale: t} = e
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: 'top left',
          }),
        !1
      )
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e)
    }
    render() {
      let {
        id: e,
        title: t,
        src: r,
        allowFullScreen: n,
        scale: o,
        ...l
      } = this.props
      return a.createElement('iframe', {
        id: e,
        title: t,
        src: r,
        ...(n ? {allow: 'fullscreen'} : {}),
        loading: 'lazy',
        ...l,
      })
    }
  },
  {PREVIEW_URL: N8} = $e,
  j8 = N8 || 'iframe.html',
  uo = ({story: e, primary: t}) => `story--${e.id}${t ? '--primary' : ''}`,
  H8 = (e) => {
    let t = b.useRef(),
      [r, n] = b.useState(!0),
      [o, l] = b.useState(),
      {
        story: i,
        height: u,
        autoplay: s,
        forceInitialArgs: c,
        renderStoryToElement: d,
      } = e
    return (
      b.useEffect(() => {
        if (!(i && t.current)) return () => {}
        let m = t.current,
          f = d(
            i,
            m,
            {
              showMain: () => {},
              showError: ({title: p, description: h}) =>
                l(new Error(`${p} - ${h}`)),
              showException: (p) => l(p),
            },
            {autoplay: s, forceInitialArgs: c}
          )
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => f())
          }
        )
      }, [s, d, i]),
      o
        ? a.createElement('pre', null, a.createElement(pc, {error: o}))
        : a.createElement(
            a.Fragment,
            null,
            u
              ? a.createElement(
                  'style',
                  null,
                  `#${uo(
                    e
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && a.createElement(yl, null),
            a.createElement('div', {
              ref: t,
              id: `${uo(e)}-inner`,
              'data-name': i.name,
            })
          )
    )
  },
  Z8 = ({story: e, height: t = '500px'}) =>
    a.createElement(
      'div',
      {style: {width: '100%', height: t}},
      a.createElement(f0.Consumer, null, ({scale: r}) =>
        a.createElement(P8, {
          key: 'iframe',
          id: `iframe--${e.id}`,
          title: e.name,
          src: Sc(j8, e.id, {viewMode: 'story'}),
          allowFullScreen: !0,
          scale: r,
          style: {width: '100%', height: '100%', border: '0 none'},
        })
      )
    ),
  V8 = (e) => {
    let {inline: t} = e
    return a.createElement(
      'div',
      {
        id: uo(e),
        className: 'sb-story sb-unstyled',
        'data-story-block': 'true',
      },
      t ? a.createElement(H8, {...e}) : a.createElement(Z8, {...e})
    )
  },
  yl = () => a.createElement(Ac, null),
  z8 = _.div(
    ({isColumn: e, columns: t, layout: r}) => ({
      display: e || !t ? 'block' : 'flex',
      position: 'relative',
      flexWrap: 'wrap',
      overflow: 'auto',
      flexDirection: e ? 'column' : 'row',
      '& .innerZoomElementWrapper > *': e
        ? {
            width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'block',
          }
        : {
            maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'inline-block',
          },
    }),
    ({layout: e = 'padded'}) =>
      e === 'centered' || e === 'padded'
        ? {
            padding: '30px 20px',
            margin: -10,
            '& .innerZoomElementWrapper > *': {
              width: 'auto',
              border: '10px solid transparent!important',
            },
          }
        : {},
    ({layout: e = 'padded'}) =>
      e === 'centered'
        ? {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }
        : {},
    ({columns: e}) =>
      e && e > 1
        ? {
            '.innerZoomElementWrapper > *': {
              minWidth: `calc(100% / ${e} - 20px)`,
            },
          }
        : {}
  ),
  rs = _(hl)(({theme: e}) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: 'none',
    background:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.85)'
        : Ke(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : Ke(0.05, e.background.content),
    },
  })),
  q8 = _.div(
    ({theme: e, withSource: t, isExpanded: r}) => ({
      position: 'relative',
      overflow: 'hidden',
      margin: '25px 0 40px',
      ...Qn(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      'h3 + &': {marginTop: '16px'},
    }),
    ({withToolbar: e}) => e && {paddingTop: 40}
  ),
  U8 = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: !0,
            onClick: () => r(!1),
          },
        }
      case t:
        return {
          source: a.createElement(rs, {...e, dark: !0}),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: () => r(!1),
          },
        }
      default:
        return {
          source: a.createElement(rs, {...e, dark: !0}),
          actionItem: {
            title: 'Show code',
            className: 'docblock-code-toggle',
            onClick: () => r(!0),
          },
        }
    }
  }
function W8(e) {
  if (b.Children.count(e) === 1) {
    let t = e
    if (t.props) return t.props.id
  }
  return null
}
var G8 = _(B8)({position: 'absolute', top: 0, left: 0, right: 0, height: 40}),
  Y8 = _.div({overflow: 'hidden', position: 'relative'}),
  co = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: o,
    withToolbar: l = !1,
    isExpanded: i = !1,
    additionalActions: u,
    className: s,
    layout: c = 'padded',
    ...d
  }) => {
    let [m, f] = b.useState(i),
      {source: p, actionItem: h} = U8(o, m, f),
      [g, x] = b.useState(1),
      y = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
      w = o ? [h] : [],
      [v, E] = b.useState(u ? [...u] : []),
      A = [...w, ...v],
      {window: S} = $e,
      k = b.useCallback(async (O) => {
        let {createCopyToClipboardFunction: T} = await wt(
          () => Promise.resolve().then(() => ib),
          void 0,
          import.meta.url
        )
        T()
      }, []),
      C = (O) => {
        let T = S.getSelection()
        ;(T && T.type === 'Range') ||
          (O.preventDefault(),
          v.filter((R) => R.title === 'Copied').length === 0 &&
            k(p.props.code).then(() => {
              E([...v, {title: 'Copied', onClick: () => {}}]),
                S.setTimeout(
                  () => E(v.filter((R) => R.title !== 'Copied')),
                  1500
                )
            }))
      }
    return a.createElement(
      q8,
      {withSource: o, withToolbar: l, ...d, className: y.join(' ')},
      l &&
        a.createElement(G8, {
          isLoading: e,
          border: !0,
          zoom: (O) => x(g * O),
          resetZoom: () => x(1),
          storyId: W8(n),
          baseUrl: './iframe.html',
        }),
      a.createElement(
        f0.Provider,
        {value: {scale: g}},
        a.createElement(
          Y8,
          {className: 'docs-story', onCopyCapture: o && C},
          a.createElement(
            z8,
            {isColumn: t || !Array.isArray(n), columns: r, layout: c},
            a.createElement(
              dc.Element,
              {scale: g},
              Array.isArray(n)
                ? n.map((O, T) => a.createElement('div', {key: T}, O))
                : a.createElement('div', null, n)
            )
          ),
          a.createElement(Mo, {actionItems: A})
        )
      ),
      o && m && p
    )
  },
  K8 = _(co)(() => ({'.docs-story': {paddingTop: 32, paddingBottom: 40}})),
  X8 = () =>
    a.createElement(
      K8,
      {isLoading: !0, withToolbar: !0},
      a.createElement(yl, null)
    ),
  J8 = _.table(({theme: e}) => ({
    '&&': {
      borderCollapse: 'collapse',
      borderSpacing: 0,
      border: 'none',
      tr: {border: 'none !important', background: 'none'},
      'td, th': {padding: 0, border: 'none', width: 'auto!important'},
      marginTop: 0,
      marginBottom: 0,
      'th:first-of-type, td:first-of-type': {paddingLeft: 0},
      'th:last-of-type, td:last-of-type': {paddingRight: 0},
      td: {
        paddingTop: 0,
        paddingBottom: 4,
        '&:not(:first-of-type)': {paddingLeft: 10, paddingRight: 0},
      },
      tbody: {boxShadow: 'none', border: 'none'},
      code: mt({theme: e}),
      div: {span: {fontWeight: 'bold'}},
      '& code': {
        margin: 0,
        display: 'inline-block',
        fontSize: e.typography.size.s1,
      },
    },
  })),
  Q8 = ({tags: e}) => {
    let t = (e.params || []).filter((l) => l.description),
      r = t.length !== 0,
      n = e.deprecated != null,
      o = e.returns != null && e.returns.description != null
    return !r && !o && !n
      ? null
      : a.createElement(
          a.Fragment,
          null,
          a.createElement(
            J8,
            null,
            a.createElement(
              'tbody',
              null,
              n &&
                a.createElement(
                  'tr',
                  {key: 'deprecated'},
                  a.createElement(
                    'td',
                    {colSpan: 2},
                    a.createElement('strong', null, 'Deprecated'),
                    ': ',
                    e.deprecated
                  )
                ),
              r &&
                t.map((l) =>
                  a.createElement(
                    'tr',
                    {key: l.name},
                    a.createElement(
                      'td',
                      null,
                      a.createElement('code', null, l.name)
                    ),
                    a.createElement('td', null, l.description)
                  )
                ),
              o &&
                a.createElement(
                  'tr',
                  {key: 'returns'},
                  a.createElement(
                    'td',
                    null,
                    a.createElement('code', null, 'Returns')
                  ),
                  a.createElement('td', null, e.returns.description)
                )
            )
          )
        )
  },
  po = 8,
  ns = _.div(({isExpanded: e}) => ({
    display: 'flex',
    flexDirection: e ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '-4px',
    minWidth: 100,
  })),
  ex = _.span(mt, ({theme: e, simple: t = !1}) => ({
    flex: '0 0 auto',
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    margin: 0,
    marginRight: '4px',
    marginBottom: '4px',
    paddingTop: '2px',
    paddingBottom: '2px',
    lineHeight: '13px',
    ...(t && {background: 'transparent', border: '0 none', paddingLeft: 0}),
  })),
  tx = _.button(({theme: e}) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: '4px',
    background: 'none',
    border: 'none',
  })),
  rx = _.div(mt, ({theme: e}) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  })),
  nx = _.div(({theme: e, width: t}) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: 'content-box',
    '& code': {padding: '0 !important'},
  })),
  ax = _(ve)({height: 10, width: 10, minWidth: 10, marginLeft: 4}),
  ox = () => a.createElement('span', null, '-'),
  m0 = ({text: e, simple: t}) => a.createElement(ex, {simple: t}, e),
  lx = Ht(1e3)((e) => {
    let t = e.split(/\r?\n/)
    return `${Math.max(...t.map((r) => r.length))}ch`
  }),
  ix = (e) => {
    if (!e) return [e]
    let t = e.split('|').map((r) => r.trim())
    return dv(t)
  },
  as = (e, t = !0) => {
    let r = e
    return (
      t || (r = e.slice(0, po)),
      r.map((n) => a.createElement(m0, {key: n, text: n === '' ? '""' : n}))
    )
  },
  sx = ({value: e, initialExpandedArgs: t}) => {
    let {summary: r, detail: n} = e,
      [o, l] = b.useState(!1),
      [i, u] = b.useState(t || !1)
    if (r == null) return null
    let s = typeof r.toString == 'function' ? r.toString() : r
    if (n == null) {
      if (/[(){}[\]<>]/.test(s)) return a.createElement(m0, {text: s})
      let c = ix(s),
        d = c.length
      return d > po
        ? a.createElement(
            ns,
            {isExpanded: i},
            as(c, i),
            a.createElement(
              tx,
              {onClick: () => u(!i)},
              i ? 'Show less...' : `Show ${d - po} more...`
            )
          )
        : a.createElement(ns, null, as(c))
    }
    return a.createElement(
      bc,
      {
        closeOnOutsideClick: !0,
        placement: 'bottom',
        visible: o,
        onVisibleChange: (c) => {
          l(c)
        },
        tooltip: a.createElement(
          nx,
          {width: lx(n)},
          a.createElement(Zn, {language: 'jsx', format: !1}, n)
        ),
      },
      a.createElement(
        rx,
        {className: 'sbdocs-expandable'},
        a.createElement('span', null, s),
        a.createElement(ax, {icon: o ? 'arrowup' : 'arrowdown'})
      )
    )
  },
  La = ({value: e, initialExpandedArgs: t}) =>
    e == null
      ? a.createElement(ox, null)
      : a.createElement(sx, {value: e, initialExpandedArgs: t}),
  ux = _.label(({theme: e}) => ({
    lineHeight: '18px',
    alignItems: 'center',
    marginBottom: 8,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    background: e.boolean.background,
    borderRadius: '3em',
    padding: 1,
    input: {
      appearance: 'none',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: '3em',
      '&:focus': {
        outline: 'none',
        boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
      },
    },
    span: {
      textAlign: 'center',
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: '1',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '7px 15px',
      transition: 'all 100ms ease-out',
      userSelect: 'none',
      borderRadius: '3em',
      color: te(0.5, e.color.defaultText),
      background: 'transparent',
      '&:hover': {boxShadow: `${Qr(0.3, e.appBorderColor)} 0 0 0 1px inset`},
      '&:active': {
        boxShadow: `${Qr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: Qr(1, e.appBorderColor),
      },
      '&:first-of-type': {paddingRight: 8},
      '&:last-of-type': {paddingLeft: 8},
    },
    'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === 'light'
            ? `${Qr(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: '7px 15px',
      },
  })),
  cx = (e) => e === 'true',
  dx = ({name: e, value: t, onChange: r, onBlur: n, onFocus: o}) => {
    let l = b.useCallback(() => r(!1), [r])
    if (t === void 0)
      return a.createElement(je.Button, {id: On(e), onClick: l}, 'Set boolean')
    let i = He(e),
      u = typeof t == 'string' ? cx(t) : t
    return a.createElement(
      ux,
      {htmlFor: i, title: u ? 'Change to false' : 'Change to true'},
      a.createElement('input', {
        id: i,
        type: 'checkbox',
        onChange: (s) => r(s.target.checked),
        checked: u,
        name: e,
        onBlur: n,
        onFocus: o,
      }),
      a.createElement('span', null, 'False'),
      a.createElement('span', null, 'True')
    )
  },
  px = (e) => {
    let [t, r, n] = e.split('-'),
      o = new Date()
    return (
      o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o
    )
  },
  fx = (e) => {
    let [t, r] = e.split(':'),
      n = new Date()
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n
  },
  mx = (e) => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      n = `0${t.getMonth() + 1}`.slice(-2),
      o = `0${t.getDate()}`.slice(-2)
    return `${r}-${n}-${o}`
  },
  gx = (e) => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      n = `0${t.getMinutes()}`.slice(-2)
    return `${r}:${n}`
  },
  hx = _.div(({theme: e}) => ({
    flex: 1,
    display: 'flex',
    input: {
      marginLeft: 10,
      flex: 1,
      height: 32,
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0.5,
        height: 12,
        filter: e.base === 'light' ? void 0 : 'invert(1)',
      },
    },
    'input:first-of-type': {marginLeft: 0, flexGrow: 4},
    'input:last-of-type': {flexGrow: 3},
  })),
  bx = ({name: e, value: t, onChange: r, onFocus: n, onBlur: o}) => {
    let [l, i] = b.useState(!0),
      u = b.useRef(),
      s = b.useRef()
    b.useEffect(() => {
      l !== !1 &&
        (u && u.current && (u.current.value = mx(t)),
        s && s.current && (s.current.value = gx(t)))
    }, [t])
    let c = (f) => {
        let p = px(f.target.value),
          h = new Date(t)
        h.setFullYear(p.getFullYear(), p.getMonth(), p.getDate())
        let g = h.getTime()
        g && r(g), i(!!g)
      },
      d = (f) => {
        let p = fx(f.target.value),
          h = new Date(t)
        h.setHours(p.getHours()), h.setMinutes(p.getMinutes())
        let g = h.getTime()
        g && r(g), i(!!g)
      },
      m = He(e)
    return a.createElement(
      hx,
      null,
      a.createElement(je.Input, {
        type: 'date',
        max: '9999-12-31',
        ref: u,
        id: `${m}-date`,
        name: `${m}-date`,
        onChange: c,
        onFocus: n,
        onBlur: o,
      }),
      a.createElement(je.Input, {
        type: 'time',
        id: `${m}-time`,
        name: `${m}-time`,
        ref: s,
        onChange: d,
        onFocus: n,
        onBlur: o,
      }),
      l ? null : a.createElement('div', null, 'invalid')
    )
  },
  yx = _.label({display: 'flex'}),
  vx = (e) => {
    let t = parseFloat(e)
    return Number.isNaN(t) ? void 0 : t
  },
  Ex = ({
    name: e,
    value: t,
    onChange: r,
    min: n,
    max: o,
    step: l,
    onBlur: i,
    onFocus: u,
  }) => {
    let [s, c] = b.useState(typeof t == 'number' ? t : ''),
      [d, m] = b.useState(!1),
      [f, p] = b.useState(null),
      h = b.useCallback(
        (y) => {
          c(y.target.value)
          let w = parseFloat(y.target.value)
          Number.isNaN(w)
            ? p(new Error(`'${y.target.value}' is not a number`))
            : (r(w), p(null))
        },
        [r, p]
      ),
      g = b.useCallback(() => {
        c('0'), r(0), m(!0)
      }, [m]),
      x = b.useRef(null)
    return (
      b.useEffect(() => {
        d && x.current && x.current.select()
      }, [d]),
      b.useEffect(() => {
        s !== (typeof t == 'number' ? t : '') && c(t)
      }, [t]),
      !d && t === void 0
        ? a.createElement(je.Button, {id: On(e), onClick: g}, 'Set number')
        : a.createElement(
            yx,
            null,
            a.createElement(je.Input, {
              ref: x,
              id: He(e),
              type: 'number',
              onChange: h,
              size: 'flex',
              placeholder: 'Edit number...',
              value: s,
              valid: f ? 'error' : null,
              autoFocus: d,
              name: e,
              min: n,
              max: o,
              step: l,
              onFocus: u,
              onBlur: i,
            })
          )
    )
  },
  g0 = (e, t) => {
    let r = t && Object.entries(t).find(([n, o]) => o === e)
    return r ? r[0] : void 0
  },
  fo = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [],
  h0 = (e, t) => e && t && e.map((r) => t[r]),
  xx = _.div(({isInline: e}) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: {display: 'inline-flex', marginRight: 15},
        }
      : {label: {display: 'flex'}}
  ),
  wx = _.span({}),
  Ax = _.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': {marginBottom: 0},
    input: {margin: 0, marginRight: 6},
  }),
  os = ({name: e, options: t, value: r, onChange: n, isInline: o}) => {
    if (!t)
      return (
        gl.warn(`Checkbox with no options: ${e}`),
        a.createElement(a.Fragment, null, '-')
      )
    let l = fo(r, t),
      [i, u] = b.useState(l),
      s = (d) => {
        let m = d.target.value,
          f = [...i]
        f.includes(m) ? f.splice(f.indexOf(m), 1) : f.push(m), n(h0(f, t)), u(f)
      }
    b.useEffect(() => {
      u(fo(r, t))
    }, [r])
    let c = He(e)
    return a.createElement(
      xx,
      {isInline: o},
      Object.keys(t).map((d, m) => {
        let f = `${c}-${m}`
        return a.createElement(
          Ax,
          {key: f, htmlFor: f},
          a.createElement('input', {
            type: 'checkbox',
            id: f,
            name: f,
            value: d,
            onChange: s,
            checked: i == null ? void 0 : i.includes(d),
          }),
          a.createElement(wx, null, d)
        )
      })
    )
  },
  Sx = _.div(({isInline: e}) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: {display: 'inline-flex', marginRight: 15},
        }
      : {label: {display: 'flex'}}
  ),
  Cx = _.span({}),
  kx = _.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': {marginBottom: 0},
    input: {margin: 0, marginRight: 6},
  }),
  ls = ({name: e, options: t, value: r, onChange: n, isInline: o}) => {
    if (!t)
      return (
        gl.warn(`Radio with no options: ${e}`),
        a.createElement(a.Fragment, null, '-')
      )
    let l = g0(r, t),
      i = He(e)
    return a.createElement(
      Sx,
      {isInline: o},
      Object.keys(t).map((u, s) => {
        let c = `${i}-${s}`
        return a.createElement(
          kx,
          {key: c, htmlFor: c},
          a.createElement('input', {
            type: 'radio',
            id: c,
            name: c,
            value: u,
            onChange: (d) => n(t[d.currentTarget.value]),
            checked: u === l,
          }),
          a.createElement(Cx, null, u)
        )
      })
    )
  },
  _x = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  },
  b0 = _.select(({theme: e}) => ({
    ..._x,
    boxSizing: 'border-box',
    position: 'relative',
    padding: '6px 10px',
    width: '100%',
    color: e.input.color || 'inherit',
    background: e.input.background,
    borderRadius: e.input.borderRadius,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
    '&[disabled]': {cursor: 'not-allowed', opacity: 0.5},
    '::placeholder': {color: e.textMutedColor},
    '&[multiple]': {
      overflow: 'auto',
      padding: 0,
      option: {
        display: 'block',
        padding: '6px 10px',
        marginLeft: 1,
        marginRight: 1,
      },
    },
  })),
  y0 = _.span(({theme: e}) => ({
    display: 'inline-block',
    lineHeight: 'normal',
    overflow: 'hidden',
    position: 'relative',
    verticalAlign: 'top',
    width: '100%',
    svg: {
      position: 'absolute',
      zIndex: 1,
      pointerEvents: 'none',
      height: '12px',
      marginTop: '-6px',
      right: '12px',
      top: '50%',
      fill: e.textMutedColor,
      path: {fill: e.textMutedColor},
    },
  })),
  is = 'Choose option...',
  Ox = ({name: e, value: t, options: r, onChange: n}) => {
    let o = (u) => {
        n(r[u.currentTarget.value])
      },
      l = g0(t, r) || is,
      i = He(e)
    return a.createElement(
      y0,
      null,
      a.createElement(ve, {icon: 'arrowdown'}),
      a.createElement(
        b0,
        {id: i, value: l, onChange: o},
        a.createElement('option', {key: 'no-selection', disabled: !0}, is),
        Object.keys(r).map((u) =>
          a.createElement('option', {key: u, value: u}, u)
        )
      )
    )
  },
  Tx = ({name: e, value: t, options: r, onChange: n}) => {
    let o = (u) => {
        let s = Array.from(u.currentTarget.options)
          .filter((c) => c.selected)
          .map((c) => c.value)
        n(h0(s, r))
      },
      l = fo(t, r),
      i = He(e)
    return a.createElement(
      y0,
      null,
      a.createElement(
        b0,
        {id: i, multiple: !0, value: l, onChange: o},
        Object.keys(r).map((u) =>
          a.createElement('option', {key: u, value: u}, u)
        )
      )
    )
  },
  ss = (e) => {
    let {name: t, options: r} = e
    return r
      ? e.isMulti
        ? a.createElement(Tx, {...e})
        : a.createElement(Ox, {...e})
      : (gl.warn(`Select with no options: ${t}`),
        a.createElement(a.Fragment, null, '-'))
  },
  Rx = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, n) => ((r[(t == null ? void 0 : t[n]) || String(n)] = n), r),
          {}
        )
      : e,
  Fx = {
    check: os,
    'inline-check': os,
    radio: ls,
    'inline-radio': ls,
    select: ss,
    'multi-select': ss,
  },
  Gt = (e) => {
    let {type: t = 'select', labels: r, argType: n} = e,
      o = {
        ...e,
        options: n ? Rx(n.options, r) : {},
        isInline: t.includes('inline'),
        isMulti: t.includes('multi'),
      },
      l = Fx[t]
    if (l) return a.createElement(l, {...o})
    throw new Error(`Unknown options type: ${t}`)
  },
  vl = 'value',
  $x = 'key',
  Dx = 'Error',
  Lx = 'Object',
  Mx = 'Array',
  Bx = 'String',
  Ix = 'Number',
  Px = 'Boolean',
  Nx = 'Date',
  jx = 'Null',
  Hx = 'Undefined',
  Zx = 'Function',
  Vx = 'Symbol',
  v0 = 'ADD_DELTA_TYPE',
  E0 = 'REMOVE_DELTA_TYPE',
  x0 = 'UPDATE_DELTA_TYPE'
function Et(e) {
  return e !== null &&
    typeof e == 'object' &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == 'function'
    ? 'Iterable'
    : Object.prototype.toString.call(e).slice(8, -1)
}
function w0(e, t) {
  let r = Et(e),
    n = Et(t)
  return (r === 'Function' || n === 'Function') && n !== r
}
var El = class extends b.Component {
  constructor(e) {
    super(e),
      (this.state = {inputRefKey: null, inputRefValue: null}),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this))
  }
  componentDidMount() {
    let {inputRefKey: e, inputRefValue: t} = this.state,
      {onlyValue: r} = this.props
    e && typeof e.focus == 'function' && e.focus(),
      r && t && typeof t.focus == 'function' && t.focus(),
      document.addEventListener('keydown', this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.onSubmit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.props.handleCancel()))
  }
  onSubmit() {
    let {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: r,
        keyPath: n,
        deep: o,
      } = this.props,
      {inputRefKey: l, inputRefValue: i} = this.state,
      u = {}
    if (!t) {
      if (!l.value) return
      u.key = l.value
    }
    ;(u.newValue = r(!1, n, o, u.key, i.value)), e(u)
  }
  refInputKey(e) {
    this.state.inputRefKey = e
  }
  refInputValue(e) {
    this.state.inputRefValue = e
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: n,
        inputElementGenerator: o,
        keyPath: l,
        deep: i,
      } = this.props,
      u = b.cloneElement(r, {onClick: this.onSubmit}),
      s = b.cloneElement(n, {onClick: e}),
      c = o(vl, l, i),
      d = b.cloneElement(c, {placeholder: 'Value', ref: this.refInputValue}),
      m = null
    if (!t) {
      let f = o($x, l, i)
      m = b.cloneElement(f, {placeholder: 'Key', ref: this.refInputKey})
    }
    return a.createElement(
      'span',
      {className: 'rejt-add-value-node'},
      m,
      d,
      s,
      u
    )
  }
}
El.defaultProps = {
  onlyValue: !1,
  addButtonElement: a.createElement('button', null, '+'),
  cancelButtonElement: a.createElement('button', null, 'c'),
}
var A0 = class extends b.Component {
  constructor(e) {
    super(e)
    let t = [...e.keyPath, e.name]
    ;(this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? {data: e.data} : null
  }
  onChildUpdate(e, t) {
    let {data: r, keyPath: n} = this.state
    ;(r[e] = t), this.setState({data: r})
    let {onUpdate: o} = this.props,
      l = n.length
    o(n[l - 1], r)
  }
  handleAddMode() {
    this.setState({addFormVisible: !0})
  }
  handleCollapseMode() {
    this.setState((e) => ({collapsed: !e.collapsed}))
  }
  handleRemoveItem(e) {
    return () => {
      let {beforeRemoveAction: t, logger: r} = this.props,
        {data: n, keyPath: o, nextDeep: l} = this.state,
        i = n[e]
      t(e, o, l, i)
        .then(() => {
          let u = {keyPath: o, deep: l, key: e, oldValue: i, type: E0}
          n.splice(e, 1), this.setState({data: n})
          let {onUpdate: s, onDeltaUpdate: c} = this.props
          s(o[o.length - 1], n), c(u)
        })
        .catch(r.error)
    }
  }
  handleAddValueAdd({newValue: e}) {
    let {data: t, keyPath: r, nextDeep: n} = this.state,
      {beforeAddAction: o, logger: l} = this.props
    o(t.length, r, n, e)
      .then(() => {
        let i = [...t, e]
        this.setState({data: i}), this.handleAddValueCancel()
        let {onUpdate: u, onDeltaUpdate: s} = this.props
        u(r[r.length - 1], i),
          s({type: v0, keyPath: r, deep: n, key: i.length - 1, newValue: e})
      })
      .catch(l.error)
  }
  handleAddValueCancel() {
    this.setState({addFormVisible: !1})
  }
  handleEditValue({key: e, value: t}) {
    return new Promise((r, n) => {
      let {beforeUpdateAction: o} = this.props,
        {data: l, keyPath: i, nextDeep: u} = this.state,
        s = l[e]
      o(e, i, u, s, t)
        .then(() => {
          ;(l[e] = t), this.setState({data: l})
          let {onUpdate: c, onDeltaUpdate: d} = this.props
          c(i[i.length - 1], l),
            d({
              type: x0,
              keyPath: i,
              deep: u,
              key: e,
              newValue: t,
              oldValue: s,
            }),
            r(void 0)
        })
        .catch(n)
    })
  }
  renderCollapsed() {
    let {name: e, data: t, keyPath: r, deep: n} = this.state,
      {
        handleRemove: o,
        readOnly: l,
        getStyle: i,
        dataType: u,
        minusMenuElement: s,
      } = this.props,
      {minus: c, collapsed: d} = i(e, t, r, n, u),
      m = l(e, t, r, n, u),
      f = b.cloneElement(s, {
        onClick: o,
        className: 'rejt-minus-menu',
        style: c,
      })
    return a.createElement(
      'span',
      {className: 'rejt-collapsed'},
      a.createElement(
        'span',
        {
          className: 'rejt-collapsed-text',
          style: d,
          onClick: this.handleCollapseMode,
        },
        '[...] ',
        t.length,
        ' ',
        t.length === 1 ? 'item' : 'items'
      ),
      !m && f
    )
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        addFormVisible: o,
        nextDeep: l,
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: m,
        addButtonElement: f,
        cancelButtonElement: p,
        editButtonElement: h,
        inputElementGenerator: g,
        textareaElementGenerator: x,
        minusMenuElement: y,
        plusMenuElement: w,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: A,
        logger: S,
        onSubmitValueParser: k,
      } = this.props,
      {minus: C, plus: O, delimiter: T, ul: R, addForm: $} = d(e, t, r, n, m),
      F = c(e, t, r, n, m),
      P = b.cloneElement(w, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: O,
      }),
      D = b.cloneElement(y, {
        onClick: u,
        className: 'rejt-minus-menu',
        style: C,
      }),
      L = !0,
      N = '[',
      V = ']'
    return a.createElement(
      'span',
      {className: 'rejt-not-collapsed'},
      a.createElement(
        'span',
        {className: 'rejt-not-collapsed-delimiter', style: T},
        N
      ),
      !o && P,
      a.createElement(
        'ul',
        {className: 'rejt-not-collapsed-list', style: R},
        t.map((B, H) =>
          a.createElement(ea, {
            key: H,
            name: H.toString(),
            data: B,
            keyPath: r,
            deep: l,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem(H),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: c,
            getStyle: d,
            addButtonElement: f,
            cancelButtonElement: p,
            editButtonElement: h,
            inputElementGenerator: g,
            textareaElementGenerator: x,
            minusMenuElement: y,
            plusMenuElement: w,
            beforeRemoveAction: v,
            beforeAddAction: E,
            beforeUpdateAction: A,
            logger: S,
            onSubmitValueParser: k,
          })
        )
      ),
      !F &&
        o &&
        a.createElement(
          'div',
          {className: 'rejt-add-form', style: $},
          a.createElement(El, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: L,
            addButtonElement: f,
            cancelButtonElement: p,
            inputElementGenerator: g,
            keyPath: r,
            deep: n,
            onSubmitValueParser: k,
          })
        ),
      a.createElement(
        'span',
        {className: 'rejt-not-collapsed-delimiter', style: T},
        V
      ),
      !F && D
    )
  }
  render() {
    let {name: e, collapsed: t, data: r, keyPath: n, deep: o} = this.state,
      {dataType: l, getStyle: i} = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = i(e, r, n, o, l)
    return a.createElement(
      'div',
      {className: 'rejt-array-node'},
      a.createElement(
        'span',
        {onClick: this.handleCollapseMode},
        a.createElement(
          'span',
          {className: 'rejt-name', style: s.name},
          e,
          ' :',
          ' '
        )
      ),
      u
    )
  }
}
A0.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: a.createElement('span', null, ' - '),
  plusMenuElement: a.createElement('span', null, ' + '),
}
var S0 = class extends b.Component {
  constructor(e) {
    super(e)
    let t = [...e.keyPath, e.name]
    ;(this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? {value: e.value} : null
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: o,
        deep: l,
      } = this.state,
      {readOnly: i, dataType: u} = this.props,
      s = i(r, n, o, l, u)
    e && !s && typeof t.focus == 'function' && t.focus()
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.handleCancelEdit()))
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: o,
      } = this.props,
      {inputRef: l, name: i, deep: u} = this.state
    if (!l) return
    let s = n(!0, o, u, i, l.value)
    e({value: s, key: i})
      .then(() => {
        w0(t, s) || this.handleCancelEdit()
      })
      .catch(r.error)
  }
  handleEditMode() {
    this.setState({editEnabled: !0})
  }
  refInput(e) {
    this.state.inputRef = e
  }
  handleCancelEdit() {
    this.setState({editEnabled: !1})
  }
  render() {
    let {name: e, value: t, editEnabled: r, keyPath: n, deep: o} = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: m,
        textareaElementGenerator: f,
        minusMenuElement: p,
        keyPath: h,
      } = this.props,
      g = c(e, i, n, o, s),
      x = null,
      y = null,
      w = u(e, i, n, o, s)
    if (r && !w) {
      let v = f(vl, h, o, e, i, s),
        E = b.cloneElement(d, {onClick: this.handleEdit}),
        A = b.cloneElement(m, {onClick: this.handleCancelEdit}),
        S = b.cloneElement(v, {ref: this.refInput, defaultValue: i})
      ;(x = a.createElement(
        'span',
        {className: 'rejt-edit-form', style: g.editForm},
        S,
        ' ',
        A,
        E
      )),
        (y = null)
    } else {
      x = a.createElement(
        'span',
        {
          className: 'rejt-value',
          style: g.value,
          onClick: w ? null : this.handleEditMode,
        },
        t
      )
      let v = b.cloneElement(p, {
        onClick: l,
        className: 'rejt-minus-menu',
        style: g.minus,
      })
      y = w ? null : v
    }
    return a.createElement(
      'li',
      {className: 'rejt-function-value-node', style: g.li},
      a.createElement(
        'span',
        {className: 'rejt-name', style: g.name},
        e,
        ' :',
        ' '
      ),
      x,
      y
    )
  }
}
S0.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: a.createElement('button', null, 'e'),
  cancelButtonElement: a.createElement('button', null, 'c'),
  minusMenuElement: a.createElement('span', null, ' - '),
}
var ea = class extends b.Component {
  constructor(e) {
    super(e),
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: e.keyPath,
        deep: e.deep,
      })
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? {data: e.data} : null
  }
  render() {
    let {data: e, name: t, keyPath: r, deep: n} = this.state,
      {
        isCollapsed: o,
        handleRemove: l,
        handleUpdateValue: i,
        onUpdate: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        addButtonElement: m,
        cancelButtonElement: f,
        editButtonElement: p,
        inputElementGenerator: h,
        textareaElementGenerator: g,
        minusMenuElement: x,
        plusMenuElement: y,
        beforeRemoveAction: w,
        beforeAddAction: v,
        beforeUpdateAction: E,
        logger: A,
        onSubmitValueParser: S,
      } = this.props,
      k = () => !0,
      C = Et(e)
    switch (C) {
      case Dx:
        return a.createElement(mo, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: k,
          dataType: C,
          getStyle: d,
          addButtonElement: m,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: g,
          minusMenuElement: x,
          plusMenuElement: y,
          beforeRemoveAction: w,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: A,
          onSubmitValueParser: S,
        })
      case Lx:
        return a.createElement(mo, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: C,
          getStyle: d,
          addButtonElement: m,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: g,
          minusMenuElement: x,
          plusMenuElement: y,
          beforeRemoveAction: w,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: A,
          onSubmitValueParser: S,
        })
      case Mx:
        return a.createElement(A0, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: C,
          getStyle: d,
          addButtonElement: m,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: g,
          minusMenuElement: x,
          plusMenuElement: y,
          beforeRemoveAction: w,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: A,
          onSubmitValueParser: S,
        })
      case Bx:
        return a.createElement(yt, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case Ix:
        return a.createElement(yt, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case Px:
        return a.createElement(yt, {
          name: t,
          value: e ? 'true' : 'false',
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case Nx:
        return a.createElement(yt, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case jx:
        return a.createElement(yt, {
          name: t,
          value: 'null',
          originalValue: 'null',
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case Hx:
        return a.createElement(yt, {
          name: t,
          value: 'undefined',
          originalValue: 'undefined',
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case Zx:
        return a.createElement(S0, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          textareaElementGenerator: g,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      case Vx:
        return a.createElement(yt, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: A,
          onSubmitValueParser: S,
        })
      default:
        return null
    }
  }
}
ea.defaultProps = {keyPath: [], deep: 0}
var mo = class extends b.Component {
  constructor(e) {
    super(e)
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name]
    ;(this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? {data: e.data} : null
  }
  onChildUpdate(e, t) {
    let {data: r, keyPath: n} = this.state
    ;(r[e] = t), this.setState({data: r})
    let {onUpdate: o} = this.props,
      l = n.length
    o(n[l - 1], r)
  }
  handleAddMode() {
    this.setState({addFormVisible: !0})
  }
  handleAddValueCancel() {
    this.setState({addFormVisible: !1})
  }
  handleAddValueAdd({key: e, newValue: t}) {
    let {data: r, keyPath: n, nextDeep: o} = this.state,
      {beforeAddAction: l, logger: i} = this.props
    l(e, n, o, t)
      .then(() => {
        ;(r[e] = t), this.setState({data: r}), this.handleAddValueCancel()
        let {onUpdate: u, onDeltaUpdate: s} = this.props
        u(n[n.length - 1], r),
          s({type: v0, keyPath: n, deep: o, key: e, newValue: t})
      })
      .catch(i.error)
  }
  handleRemoveValue(e) {
    return () => {
      let {beforeRemoveAction: t, logger: r} = this.props,
        {data: n, keyPath: o, nextDeep: l} = this.state,
        i = n[e]
      t(e, o, l, i)
        .then(() => {
          let u = {keyPath: o, deep: l, key: e, oldValue: i, type: E0}
          delete n[e], this.setState({data: n})
          let {onUpdate: s, onDeltaUpdate: c} = this.props
          s(o[o.length - 1], n), c(u)
        })
        .catch(r.error)
    }
  }
  handleCollapseMode() {
    this.setState((e) => ({collapsed: !e.collapsed}))
  }
  handleEditValue({key: e, value: t}) {
    return new Promise((r, n) => {
      let {beforeUpdateAction: o} = this.props,
        {data: l, keyPath: i, nextDeep: u} = this.state,
        s = l[e]
      o(e, i, u, s, t)
        .then(() => {
          ;(l[e] = t), this.setState({data: l})
          let {onUpdate: c, onDeltaUpdate: d} = this.props
          c(i[i.length - 1], l),
            d({
              type: x0,
              keyPath: i,
              deep: u,
              key: e,
              newValue: t,
              oldValue: s,
            }),
            r()
        })
        .catch(n)
    })
  }
  renderCollapsed() {
    let {name: e, keyPath: t, deep: r, data: n} = this.state,
      {
        handleRemove: o,
        readOnly: l,
        dataType: i,
        getStyle: u,
        minusMenuElement: s,
      } = this.props,
      {minus: c, collapsed: d} = u(e, n, t, r, i),
      m = Object.getOwnPropertyNames(n),
      f = l(e, n, t, r, i),
      p = b.cloneElement(s, {
        onClick: o,
        className: 'rejt-minus-menu',
        style: c,
      })
    return a.createElement(
      'span',
      {className: 'rejt-collapsed'},
      a.createElement(
        'span',
        {
          className: 'rejt-collapsed-text',
          style: d,
          onClick: this.handleCollapseMode,
        },
        '{...}',
        ' ',
        m.length,
        ' ',
        m.length === 1 ? 'key' : 'keys'
      ),
      !f && p
    )
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        nextDeep: o,
        addFormVisible: l,
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: m,
        addButtonElement: f,
        cancelButtonElement: p,
        editButtonElement: h,
        inputElementGenerator: g,
        textareaElementGenerator: x,
        minusMenuElement: y,
        plusMenuElement: w,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: A,
        logger: S,
        onSubmitValueParser: k,
      } = this.props,
      {minus: C, plus: O, addForm: T, ul: R, delimiter: $} = d(e, t, r, n, m),
      F = Object.getOwnPropertyNames(t),
      P = c(e, t, r, n, m),
      D = b.cloneElement(w, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: O,
      }),
      L = b.cloneElement(y, {
        onClick: u,
        className: 'rejt-minus-menu',
        style: C,
      }),
      N = F.map((H) =>
        a.createElement(ea, {
          key: H,
          name: H,
          data: t[H],
          keyPath: r,
          deep: o,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(H),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: c,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: h,
          inputElementGenerator: g,
          textareaElementGenerator: x,
          minusMenuElement: y,
          plusMenuElement: w,
          beforeRemoveAction: v,
          beforeAddAction: E,
          beforeUpdateAction: A,
          logger: S,
          onSubmitValueParser: k,
        })
      ),
      V = '{',
      B = '}'
    return a.createElement(
      'span',
      {className: 'rejt-not-collapsed'},
      a.createElement(
        'span',
        {className: 'rejt-not-collapsed-delimiter', style: $},
        V
      ),
      !P && D,
      a.createElement(
        'ul',
        {className: 'rejt-not-collapsed-list', style: R},
        N
      ),
      !P &&
        l &&
        a.createElement(
          'div',
          {className: 'rejt-add-form', style: T},
          a.createElement(El, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: f,
            cancelButtonElement: p,
            inputElementGenerator: g,
            keyPath: r,
            deep: n,
            onSubmitValueParser: k,
          })
        ),
      a.createElement(
        'span',
        {className: 'rejt-not-collapsed-delimiter', style: $},
        B
      ),
      !P && L
    )
  }
  render() {
    let {name: e, collapsed: t, data: r, keyPath: n, deep: o} = this.state,
      {getStyle: l, dataType: i} = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = l(e, r, n, o, i)
    return a.createElement(
      'div',
      {className: 'rejt-object-node'},
      a.createElement(
        'span',
        {onClick: this.handleCollapseMode},
        a.createElement(
          'span',
          {className: 'rejt-name', style: s.name},
          e,
          ' :',
          ' '
        )
      ),
      u
    )
  }
}
mo.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: a.createElement('span', null, ' - '),
  plusMenuElement: a.createElement('span', null, ' + '),
}
var yt = class extends b.Component {
  constructor(e) {
    super(e)
    let t = [...e.keyPath, e.name]
    ;(this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? {value: e.value} : null
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: o,
        deep: l,
      } = this.state,
      {readOnly: i, dataType: u} = this.props,
      s = i(r, n, o, l, u)
    e && !s && typeof t.focus == 'function' && t.focus()
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.handleCancelEdit()))
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: o,
      } = this.props,
      {inputRef: l, name: i, deep: u} = this.state
    if (!l) return
    let s = n(!0, o, u, i, l.value)
    e({value: s, key: i})
      .then(() => {
        w0(t, s) || this.handleCancelEdit()
      })
      .catch(r.error)
  }
  handleEditMode() {
    this.setState({editEnabled: !0})
  }
  refInput(e) {
    this.state.inputRef = e
  }
  handleCancelEdit() {
    this.setState({editEnabled: !1})
  }
  render() {
    let {name: e, value: t, editEnabled: r, keyPath: n, deep: o} = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: m,
        inputElementGenerator: f,
        minusMenuElement: p,
        keyPath: h,
      } = this.props,
      g = c(e, i, n, o, s),
      x = u(e, i, n, o, s),
      y = r && !x,
      w = f(vl, h, o, e, i, s),
      v = b.cloneElement(d, {onClick: this.handleEdit}),
      E = b.cloneElement(m, {onClick: this.handleCancelEdit}),
      A = b.cloneElement(w, {
        ref: this.refInput,
        defaultValue: JSON.stringify(i),
      }),
      S = b.cloneElement(p, {
        onClick: l,
        className: 'rejt-minus-menu',
        style: g.minus,
      })
    return a.createElement(
      'li',
      {className: 'rejt-value-node', style: g.li},
      a.createElement(
        'span',
        {className: 'rejt-name', style: g.name},
        e,
        ' : '
      ),
      y
        ? a.createElement(
            'span',
            {className: 'rejt-edit-form', style: g.editForm},
            A,
            ' ',
            E,
            v
          )
        : a.createElement(
            'span',
            {
              className: 'rejt-value',
              style: g.value,
              onClick: x ? null : this.handleEditMode,
            },
            String(t)
          ),
      !x && !y && S
    )
  }
}
yt.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: a.createElement('button', null, 'e'),
  cancelButtonElement: a.createElement('button', null, 'c'),
  minusMenuElement: a.createElement('span', null, ' - '),
}
var zx = {
    minus: {color: 'red'},
    plus: {color: 'green'},
    collapsed: {color: 'grey'},
    delimiter: {},
    ul: {padding: '0px', margin: '0 0 0 25px', listStyle: 'none'},
    name: {color: '#2287CD'},
    addForm: {},
  },
  qx = {
    minus: {color: 'red'},
    plus: {color: 'green'},
    collapsed: {color: 'grey'},
    delimiter: {},
    ul: {padding: '0px', margin: '0 0 0 25px', listStyle: 'none'},
    name: {color: '#2287CD'},
    addForm: {},
  },
  Ux = {
    minus: {color: 'red'},
    editForm: {},
    value: {color: '#7bba3d'},
    li: {minHeight: '22px', lineHeight: '22px', outline: '0px'},
    name: {color: '#2287CD'},
  }
function Wx(e) {
  let t = e
  if (t.indexOf('function') === 0) return (0, eval)(`(${t})`)
  try {
    t = JSON.parse(e)
  } catch {}
  return t
}
var C0 = class extends b.Component {
  constructor(e) {
    super(e),
      (this.state = {data: e.data, rootName: e.rootName}),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName
      ? {data: e.data, rootName: e.rootName}
      : null
  }
  onUpdate(e, t) {
    this.setState({data: t}), this.props.onFullyUpdate(t)
  }
  removeRoot() {
    this.onUpdate(null, null)
  }
  render() {
    let {data: e, rootName: t} = this.state,
      {
        isCollapsed: r,
        onDeltaUpdate: n,
        readOnly: o,
        getStyle: l,
        addButtonElement: i,
        cancelButtonElement: u,
        editButtonElement: s,
        inputElement: c,
        textareaElement: d,
        minusMenuElement: m,
        plusMenuElement: f,
        beforeRemoveAction: p,
        beforeAddAction: h,
        beforeUpdateAction: g,
        logger: x,
        onSubmitValueParser: y,
        fallback: w = null,
      } = this.props,
      v = Et(e),
      E = o
    Et(o) === 'Boolean' && (E = () => o)
    let A = c
    c && Et(c) !== 'Function' && (A = () => c)
    let S = d
    return (
      d && Et(d) !== 'Function' && (S = () => d),
      v === 'Object' || v === 'Array'
        ? a.createElement(
            'div',
            {className: 'rejt-tree'},
            a.createElement(ea, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: n,
              readOnly: E,
              getStyle: l,
              addButtonElement: i,
              cancelButtonElement: u,
              editButtonElement: s,
              inputElementGenerator: A,
              textareaElementGenerator: S,
              minusMenuElement: m,
              plusMenuElement: f,
              handleRemove: this.removeRoot,
              beforeRemoveAction: p,
              beforeAddAction: h,
              beforeUpdateAction: g,
              logger: x,
              onSubmitValueParser: y,
            })
          )
        : w
    )
  }
}
C0.defaultProps = {
  rootName: 'root',
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, n, o) => {
    switch (o) {
      case 'Object':
      case 'Error':
        return zx
      case 'Array':
        return qx
      default:
        return Ux
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: {error: () => {}},
  onSubmitValueParser: (e, t, r, n, o) => Wx(o),
  inputElement: () => a.createElement('input', null),
  textareaElement: () => a.createElement('textarea', null),
  fallback: null,
}
var {window: Gx} = $e,
  Yx = _.div(({theme: e}) => ({
    position: 'relative',
    display: 'flex',
    '.rejt-tree': {marginLeft: '1rem', fontSize: '13px'},
    '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
      {'& > svg': {opacity: 0, transition: 'opacity 0.2s'}},
    '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
      {'& > svg': {opacity: 1}},
    '.rejt-edit-form button': {display: 'none'},
    '.rejt-add-form': {marginLeft: 10},
    '.rejt-add-value-node': {display: 'inline-flex', alignItems: 'center'},
    '.rejt-name': {lineHeight: '22px'},
    '.rejt-not-collapsed-delimiter': {lineHeight: '22px'},
    '.rejt-plus-menu': {marginLeft: 5},
    '.rejt-object-node > span > *, .rejt-array-node > span > *': {
      position: 'relative',
      zIndex: 2,
    },
    '.rejt-object-node, .rejt-array-node': {position: 'relative'},
    '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
      {
        content: '""',
        position: 'absolute',
        top: 0,
        display: 'block',
        width: '100%',
        marginLeft: '-1rem',
        padding: '0 4px 0 1rem',
        height: 22,
      },
    '.rejt-collapsed::before, .rejt-not-collapsed::before': {
      zIndex: 1,
      background: 'transparent',
      borderRadius: 4,
      transition: 'background 0.2s',
      pointerEvents: 'none',
      opacity: 0.1,
    },
    '.rejt-object-node:hover, .rejt-array-node:hover': {
      '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
        background: e.color.secondary,
      },
    },
    '.rejt-collapsed::after, .rejt-not-collapsed::after': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      pointerEvents: 'none',
      width: 0,
      height: 0,
    },
    '.rejt-collapsed::after': {
      left: -8,
      top: 8,
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      borderLeft: '3px solid rgba(153,153,153,0.6)',
    },
    '.rejt-not-collapsed::after': {
      left: -10,
      top: 10,
      borderTop: '3px solid rgba(153,153,153,0.6)',
      borderLeft: '3px solid transparent',
      borderRight: '3px solid transparent',
    },
    '.rejt-value': {
      display: 'inline-block',
      border: '1px solid transparent',
      borderRadius: 4,
      margin: '1px 0',
      padding: '0 4px',
      cursor: 'text',
      color: e.color.defaultText,
    },
    '.rejt-value-node:hover > .rejt-value': {
      background: e.color.lighter,
      borderColor: e.appBorderColor,
    },
  })),
  Ma = _.button(({theme: e, primary: t}) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : 'transparent',
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? 'bold' : 'normal',
    cursor: 'pointer',
    order: t ? 'initial' : 9,
  })),
  us = _(ve)(({theme: e, icon: t, disabled: r}) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: r ? 'not-allowed' : 'pointer',
    color: e.textMutedColor,
    '&:hover': r
      ? {}
      : {color: t === 'subtract' ? e.color.negative : e.color.ancillary},
    'svg + &': {marginLeft: 0},
  })),
  cs = _.input(({theme: e, placeholder: t}) => ({
    outline: 0,
    margin: t ? 1 : '1px 0',
    padding: '3px 4px',
    color: e.color.defaultText,
    background: e.background.app,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 4,
    lineHeight: '14px',
    width: t === 'Key' ? 80 : 120,
    '&:focus': {border: `1px solid ${e.color.secondary}`},
  })),
  Kx = _(Nt)(({theme: e}) => ({
    position: 'absolute',
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: '0 3px',
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: '9px',
    fontWeight: 'bold',
    textDecoration: 'none',
    span: {marginLeft: 3, marginTop: 1},
  })),
  Xx = _(je.Textarea)(({theme: e}) => ({
    flex: 1,
    padding: '7px 6px',
    fontFamily: e.typography.fonts.mono,
    fontSize: '12px',
    lineHeight: '18px',
    '&::placeholder': {fontFamily: e.typography.fonts.base, fontSize: '13px'},
    '&:placeholder-shown': {padding: '7px 10px'},
  })),
  Jx = {bubbles: !0, cancelable: !0, key: 'Enter', code: 'Enter', keyCode: 13},
  Qx = (e) => {
    e.currentTarget.dispatchEvent(new Gx.KeyboardEvent('keydown', Jx))
  },
  e9 = (e) => {
    e.currentTarget.select()
  },
  t9 = (e) => () => ({
    name: {color: e.color.secondary},
    collapsed: {color: e.color.dark},
    ul: {listStyle: 'none', margin: '0 0 0 1rem', padding: 0},
    li: {outline: 0},
  }),
  ds = ({name: e, value: t, onChange: r}) => {
    let n = np(),
      o = b.useMemo(() => t && K7(t), [t]),
      l = o != null,
      [i, u] = b.useState(!l),
      [s, c] = b.useState(null),
      d = b.useCallback(
        (x) => {
          try {
            x && r(JSON.parse(x)), c(void 0)
          } catch (y) {
            c(y)
          }
        },
        [r]
      ),
      [m, f] = b.useState(!1),
      p = b.useCallback(() => {
        r({}), f(!0)
      }, [f]),
      h = b.useRef(null)
    if (
      (b.useEffect(() => {
        m && h.current && h.current.select()
      }, [m]),
      !l)
    )
      return a.createElement(je.Button, {id: On(e), onClick: p}, 'Set object')
    let g = a.createElement(Xx, {
      ref: h,
      id: He(e),
      name: e,
      defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
      onBlur: (x) => d(x.target.value),
      placeholder: 'Edit JSON string...',
      autoFocus: m,
      valid: s ? 'error' : null,
    })
    return a.createElement(
      Yx,
      null,
      ['Object', 'Array'].includes(Et(o)) &&
        a.createElement(
          Kx,
          {
            href: '#',
            onClick: (x) => {
              x.preventDefault(), u((y) => !y)
            },
          },
          a.createElement(ve, {icon: i ? 'eyeclose' : 'eye'}),
          a.createElement('span', null, 'RAW')
        ),
      i
        ? g
        : a.createElement(C0, {
            data: o,
            rootName: e,
            onFullyUpdate: r,
            getStyle: t9(n),
            cancelButtonElement: a.createElement(
              Ma,
              {type: 'button'},
              'Cancel'
            ),
            editButtonElement: a.createElement(Ma, {type: 'submit'}, 'Save'),
            addButtonElement: a.createElement(
              Ma,
              {type: 'submit', primary: !0},
              'Save'
            ),
            plusMenuElement: a.createElement(us, {icon: 'add'}),
            minusMenuElement: a.createElement(us, {icon: 'subtract'}),
            inputElement: (x, y, w, v) =>
              v
                ? a.createElement(cs, {onFocus: e9, onBlur: Qx})
                : a.createElement(cs, null),
            fallback: g,
          })
    )
  },
  r9 = _.input(({theme: e, min: t, max: r, value: n}) => ({
    '&': {width: '100%', backgroundColor: 'transparent', appearance: 'none'},
    '&::-webkit-slider-runnable-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Ke(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Dt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Dt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
    },
    '&::-webkit-slider-thumb': {
      marginTop: '-6px',
      width: 16,
      height: 16,
      border: `1px solid ${dt(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${dt(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      appearance: 'none',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Ke(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out',
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing',
      },
    },
    '&:focus': {
      outline: 'none',
      '&::-webkit-slider-runnable-track': {
        borderColor: dt(e.color.secondary, 0.4),
      },
      '&::-webkit-slider-thumb': {
        borderColor: e.color.secondary,
        boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
      },
    },
    '&::-moz-range-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Ke(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Dt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Dt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
      outline: 'none',
    },
    '&::-moz-range-thumb': {
      width: 16,
      height: 16,
      border: `1px solid ${dt(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${dt(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Ke(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out',
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing',
      },
    },
    '&::-ms-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Ke(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Dt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Dt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: 'transparent',
      width: '100%',
      height: '6px',
      cursor: 'pointer',
    },
    '&::-ms-fill-lower': {borderRadius: 6},
    '&::-ms-fill-upper': {borderRadius: 6},
    '&::-ms-thumb': {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${dt(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: 'grab',
      marginTop: 0,
    },
    '@supports (-ms-ime-align:auto)': {'input[type=range]': {margin: '0'}},
  })),
  k0 = _.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: 'nowrap',
    fontFeatureSettings: 'tnum',
    fontVariantNumeric: 'tabular-nums',
  }),
  n9 = _(k0)(({numberOFDecimalsPlaces: e, max: t}) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: 'right',
    flexShrink: 0,
  })),
  a9 = _.div({display: 'flex', alignItems: 'center', width: '100%'})
function o9(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
}
var l9 = ({
    name: e,
    value: t,
    onChange: r,
    min: n = 0,
    max: o = 100,
    step: l = 1,
    onBlur: i,
    onFocus: u,
  }) => {
    let s = (m) => {
        r(vx(m.target.value))
      },
      c = t !== void 0,
      d = b.useMemo(() => o9(l), [l])
    return a.createElement(
      a9,
      null,
      a.createElement(k0, null, n),
      a.createElement(r9, {
        id: He(e),
        type: 'range',
        onChange: s,
        name: e,
        value: t,
        min: n,
        max: o,
        step: l,
        onFocus: u,
        onBlur: i,
      }),
      a.createElement(
        n9,
        {numberOFDecimalsPlaces: d, max: o},
        c ? t.toFixed(d) : '--',
        ' / ',
        o
      )
    )
  },
  i9 = _.label({display: 'flex'}),
  s9 = _.div(({isMaxed: e}) => ({
    marginLeft: '0.75rem',
    paddingTop: '0.35rem',
    color: e ? 'red' : void 0,
  })),
  u9 = ({
    name: e,
    value: t,
    onChange: r,
    onFocus: n,
    onBlur: o,
    maxLength: l,
  }) => {
    let i = (m) => {
        r(m.target.value)
      },
      [u, s] = b.useState(!1),
      c = b.useCallback(() => {
        r(''), s(!0)
      }, [s])
    if (t === void 0)
      return a.createElement(je.Button, {id: On(e), onClick: c}, 'Set string')
    let d = typeof t == 'string'
    return a.createElement(
      i9,
      null,
      a.createElement(je.Textarea, {
        id: He(e),
        maxLength: l,
        onChange: i,
        size: 'flex',
        placeholder: 'Edit string...',
        autoFocus: u,
        valid: d ? null : 'error',
        name: e,
        value: d ? t : '',
        onFocus: n,
        onBlur: o,
      }),
      l &&
        a.createElement(
          s9,
          {isMaxed: (t == null ? void 0 : t.length) === l},
          (t == null ? void 0 : t.length) ?? 0,
          ' / ',
          l
        )
    )
  },
  c9 = _(je.Input)({padding: 10})
function d9(e) {
  e.forEach((t) => {
    t.startsWith('blob:') && URL.revokeObjectURL(t)
  })
}
var p9 = ({onChange: e, name: t, accept: r = 'image/*', value: n}) => {
    let o = b.useRef(null)
    function l(i) {
      if (!i.target.files) return
      let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s))
      e(u), d9(n)
    }
    return (
      b.useEffect(() => {
        n == null && o.current && (o.current.value = null)
      }, [n, t]),
      a.createElement(c9, {
        ref: o,
        id: He(t),
        type: 'file',
        name: t,
        multiple: !0,
        onChange: l,
        accept: r,
        size: 'flex',
      })
    )
  },
  f9 = b.lazy(() =>
    wt(
      () => import('./Color-6VNJS4EI-7a1d3928.js'),
      [
        './Color-6VNJS4EI-7a1d3928.js',
        './index-f1f2c4b1.js',
        './_getPrototype-6a30002d.js',
        './index-c74c9f7f.js',
        './iframe-a5f0bdc1.js',
        './assertThisInitialized-4401020c.js',
        './isNativeReflectConstruct-e378569d.js',
        './index-356e4a49.js',
      ],
      import.meta.url
    )
  ),
  m9 = (e) =>
    a.createElement(
      b.Suspense,
      {fallback: a.createElement('div', null)},
      a.createElement(f9, {...e})
    ),
  g9 = {
    array: ds,
    object: ds,
    boolean: dx,
    color: m9,
    date: bx,
    number: Ex,
    check: Gt,
    'inline-check': Gt,
    radio: Gt,
    'inline-radio': Gt,
    select: Gt,
    'multi-select': Gt,
    range: l9,
    text: u9,
    file: p9,
  },
  ps = () => a.createElement(a.Fragment, null, '-'),
  h9 = ({row: e, arg: t, updateArgs: r, isHovered: n}) => {
    let {key: o, control: l} = e,
      [i, u] = b.useState(!1),
      [s, c] = b.useState({value: t})
    b.useEffect(() => {
      i || c({value: t})
    }, [i, t])
    let d = b.useCallback((g) => (c({value: g}), r({[o]: g}), g), [r, o]),
      m = b.useCallback(() => u(!1), []),
      f = b.useCallback(() => u(!0), [])
    if (!l || l.disable)
      return n
        ? a.createElement(
            xt,
            {
              href: 'https://storybook.js.org/docs/react/essentials/controls',
              target: '_blank',
              withArrow: !0,
            },
            'Setup controls'
          )
        : a.createElement(ps, null)
    let p = {
        name: o,
        argType: e,
        value: s.value,
        onChange: d,
        onBlur: m,
        onFocus: f,
      },
      h = g9[l.type] || ps
    return a.createElement(h, {...p, ...l, controlType: l.type})
  },
  b9 = _.span({fontWeight: 'bold'}),
  y9 = _.span(({theme: e}) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: 'help',
  })),
  v9 = _.div(({theme: e}) => ({
    '&&': {p: {margin: '0 0 10px 0'}, a: {color: e.color.secondary}},
    code: {
      ...mt({theme: e}),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono,
    },
    '& code': {margin: 0, display: 'inline-block'},
    '& pre > code': {whiteSpace: 'pre-wrap'},
  })),
  E9 = _.div(({theme: e, hasDescription: t}) => ({
    color:
      e.base === 'light'
        ? te(0.1, e.color.defaultText)
        : te(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  })),
  x9 = _.div(({theme: e, hasDescription: t}) => ({
    color:
      e.base === 'light'
        ? te(0.1, e.color.defaultText)
        : te(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  })),
  w9 = _.td(({theme: e, expandable: t}) => ({
    paddingLeft: t ? '40px !important' : '20px !important',
  })),
  tn = (e) => {
    var g
    let [t, r] = b.useState(!1),
      {
        row: n,
        updateArgs: o,
        compact: l,
        expandable: i,
        initialExpandedArgs: u,
      } = e,
      {name: s, description: c} = n,
      d = n.table || {},
      m = d.type || n.type,
      f = d.defaultValue || n.defaultValue,
      p = (g = n.type) == null ? void 0 : g.required,
      h = c != null && c !== ''
    return a.createElement(
      'tr',
      {onMouseEnter: () => r(!0), onMouseLeave: () => r(!1)},
      a.createElement(
        w9,
        {expandable: i},
        a.createElement(b9, null, s),
        p ? a.createElement(y9, {title: 'Required'}, '*') : null
      ),
      l
        ? null
        : a.createElement(
            'td',
            null,
            h && a.createElement(v9, null, a.createElement(Xc, null, c)),
            d.jsDocTags != null
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    x9,
                    {hasDescription: h},
                    a.createElement(La, {value: m, initialExpandedArgs: u})
                  ),
                  a.createElement(Q8, {tags: d.jsDocTags})
                )
              : a.createElement(
                  E9,
                  {hasDescription: h},
                  a.createElement(La, {value: m, initialExpandedArgs: u})
                )
          ),
      l
        ? null
        : a.createElement(
            'td',
            null,
            a.createElement(La, {value: f, initialExpandedArgs: u})
          ),
      o
        ? a.createElement('td', null, a.createElement(h9, {...e, isHovered: t}))
        : null
    )
  },
  A9 = _(ve)(({theme: e}) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === 'light'
        ? te(0.25, e.color.defaultText)
        : te(0.3, e.color.defaultText),
    border: 'none',
    display: 'inline-block',
  })),
  S9 = _.span(({theme: e}) => ({
    display: 'flex',
    lineHeight: '20px',
    alignItems: 'center',
  })),
  C9 = _.td(({theme: e}) => ({
    position: 'relative',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color:
      e.base === 'light'
        ? te(0.4, e.color.defaultText)
        : te(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    '& ~ td': {background: `${e.background.app} !important`},
  })),
  k9 = _.td(({theme: e}) => ({
    position: 'relative',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  })),
  _9 = _.td(() => ({position: 'relative'})),
  O9 = _.tr(({theme: e}) => ({
    '&:hover > td': {
      backgroundColor: `${Dt(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: 'row-resize',
    },
  })),
  fs = _.button(() => ({
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    color: 'transparent',
    cursor: 'row-resize !important',
  })),
  Ba = ({
    level: e = 'section',
    label: t,
    children: r,
    initialExpanded: n = !0,
    colSpan: o = 3,
  }) => {
    let [l, i] = b.useState(n),
      u = e === 'subsection' ? k9 : C9,
      s = (r == null ? void 0 : r.length) || 0,
      c = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
      d = l ? 'arrowdown' : 'arrowright',
      m = `${l ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${
        s !== 1 ? 's' : ''
      }`
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(
        O9,
        {title: m},
        a.createElement(
          u,
          {colSpan: 1},
          a.createElement(fs, {onClick: (f) => i(!l), tabIndex: 0}, m),
          a.createElement(S9, null, a.createElement(A9, {icon: d}), t)
        ),
        a.createElement(
          _9,
          {colSpan: o - 1},
          a.createElement(
            fs,
            {onClick: (f) => i(!l), tabIndex: -1, style: {outline: 'none'}},
            m
          ),
          l ? null : c
        )
      ),
      l ? r : null
    )
  },
  rn = _.div(({theme: e}) => ({
    display: 'flex',
    gap: 16,
    borderBottom: `1px solid ${e.appBorderColor}`,
    '&:last-child': {borderBottom: 0},
  })),
  me = _.div(({numColumn: e}) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: e || 1,
    gap: 5,
    padding: '12px 20px',
  })),
  ie = _.div(({theme: e, width: t, height: r}) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || '100%',
    height: r || 16,
    borderRadius: 3,
  })),
  ge = [2, 4, 2, 2],
  T9 = () =>
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        rn,
        null,
        a.createElement(
          me,
          {numColumn: ge[0]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[1]},
          a.createElement(ie, {width: '30%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[2]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[3]},
          a.createElement(ie, {width: '60%'})
        )
      ),
      a.createElement(
        rn,
        null,
        a.createElement(
          me,
          {numColumn: ge[0]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[1]},
          a.createElement(ie, {width: '80%'}),
          a.createElement(ie, {width: '30%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[2]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[3]},
          a.createElement(ie, {width: '60%'})
        )
      ),
      a.createElement(
        rn,
        null,
        a.createElement(
          me,
          {numColumn: ge[0]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[1]},
          a.createElement(ie, {width: '80%'}),
          a.createElement(ie, {width: '30%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[2]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[3]},
          a.createElement(ie, {width: '60%'})
        )
      ),
      a.createElement(
        rn,
        null,
        a.createElement(
          me,
          {numColumn: ge[0]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[1]},
          a.createElement(ie, {width: '80%'}),
          a.createElement(ie, {width: '30%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[2]},
          a.createElement(ie, {width: '60%'})
        ),
        a.createElement(
          me,
          {numColumn: ge[3]},
          a.createElement(ie, {width: '60%'})
        )
      )
    ),
  R9 = _.div(({inAddonPanel: e, theme: t}) => ({
    height: e ? '100%' : 'auto',
    display: 'flex',
    border: e ? 'none' : `1px solid ${t.appBorderColor}`,
    borderRadius: e ? 0 : t.appBorderRadius,
    padding: e ? 0 : 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15,
    background: t.background.content,
    boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
  })),
  F9 = _.div({display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 415}),
  $9 = _.div(({theme: e}) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textColor,
  })),
  D9 = _.div(({theme: e}) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textMutedColor,
  })),
  L9 = _.div(({theme: e}) => ({
    display: 'flex',
    fontSize: e.typography.size.s2 - 1,
    gap: 25,
  })),
  M9 = _.div(({theme: e}) => ({
    width: 1,
    height: 16,
    backgroundColor: e.appBorderColor,
  })),
  B9 = ({inAddonPanel: e}) => {
    let [t, r] = b.useState(!0)
    return (
      b.useEffect(() => {
        let n = setTimeout(() => {
          r(!1)
        }, 100)
        return () => clearTimeout(n)
      }, []),
      t
        ? null
        : a.createElement(
            R9,
            {inAddonPanel: e},
            a.createElement(
              F9,
              null,
              a.createElement(
                $9,
                null,
                e
                  ? 'Interactive story playground'
                  : "Args table with interactive controls couldn't be auto-generated"
              ),
              a.createElement(
                D9,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
              )
            ),
            a.createElement(
              L9,
              null,
              e &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    xt,
                    {
                      href: 'https://youtu.be/0gOfS6K0x0E',
                      target: '_blank',
                      withArrow: !0,
                    },
                    a.createElement(ve, {icon: 'video'}),
                    ' Watch 5m video'
                  ),
                  a.createElement(M9, null),
                  a.createElement(
                    xt,
                    {
                      href: 'https://storybook.js.org/docs/react/essentials/controls',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Read docs'
                  )
                ),
              !e &&
                a.createElement(
                  xt,
                  {
                    href: 'https://storybook.js.org/docs/react/essentials/controls',
                    target: '_blank',
                    withArrow: !0,
                  },
                  'Learn how to set that up'
                )
            )
          )
    )
  },
  I9 = _.table(({theme: e, compact: t, inAddonPanel: r}) => ({
    '&&': {
      borderSpacing: 0,
      color: e.color.defaultText,
      'td, th': {
        padding: 0,
        border: 'none',
        verticalAlign: 'top',
        textOverflow: 'ellipsis',
      },
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      textAlign: 'left',
      width: '100%',
      marginTop: r ? 0 : 25,
      marginBottom: r ? 0 : 40,
      'thead th:first-of-type, td:first-of-type': {width: '25%'},
      'th:first-of-type, td:first-of-type': {paddingLeft: 20},
      'th:nth-of-type(2), td:nth-of-type(2)': {...(t ? null : {width: '35%'})},
      'td:nth-of-type(3)': {...(t ? null : {width: '15%'})},
      'th:last-of-type, td:last-of-type': {
        paddingRight: 20,
        ...(t ? null : {width: '25%'}),
      },
      th: {
        color:
          e.base === 'light'
            ? te(0.25, e.color.defaultText)
            : te(0.45, e.color.defaultText),
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      },
      td: {
        paddingTop: '10px',
        paddingBottom: '10px',
        '&:not(:first-of-type)': {paddingLeft: 15, paddingRight: 15},
        '&:last-of-type': {paddingRight: 20},
      },
      marginLeft: r ? 0 : 1,
      marginRight: r ? 0 : 1,
      tbody: {
        ...(r
          ? null
          : {
              filter:
                e.base === 'light'
                  ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                  : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
            }),
        '> tr > *': {
          background: e.background.content,
          borderTop: `1px solid ${e.appBorderColor}`,
        },
        ...(r
          ? null
          : {
              '> tr:first-of-type > *': {
                borderBlockStart: `1px solid ${e.appBorderColor}`,
              },
              '> tr:last-of-type > *': {
                borderBlockEnd: `1px solid ${e.appBorderColor}`,
              },
              '> tr > *:first-of-type': {
                borderInlineStart: `1px solid ${e.appBorderColor}`,
              },
              '> tr > *:last-of-type': {
                borderInlineEnd: `1px solid ${e.appBorderColor}`,
              },
              '> tr:first-of-type > td:first-of-type': {
                borderTopLeftRadius: e.appBorderRadius,
              },
              '> tr:first-of-type > td:last-of-type': {
                borderTopRightRadius: e.appBorderRadius,
              },
              '> tr:last-of-type > td:first-of-type': {
                borderBottomLeftRadius: e.appBorderRadius,
              },
              '> tr:last-of-type > td:last-of-type': {
                borderBottomRightRadius: e.appBorderRadius,
              },
            }),
      },
    },
  })),
  P9 = _(Nt)(({theme: e}) => ({
    color: e.barTextColor,
    margin: '-4px -12px -4px 0',
  })),
  N9 = _.span({display: 'flex', justifyContent: 'space-between'}),
  j9 = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, n
      return (
        +!!((r = t.type) != null && r.required) -
          +!!((n = e.type) != null && n.required) ||
        e.name.localeCompare(t.name)
      )
    },
    none: void 0,
  },
  H9 = (e, t) => {
    let r = {ungrouped: [], ungroupedSubsections: {}, sections: {}}
    if (!e) return r
    Object.entries(e).forEach(([l, i]) => {
      let {category: u, subcategory: s} = (i == null ? void 0 : i.table) || {}
      if (u) {
        let c = r.sections[u] || {ungrouped: [], subsections: {}}
        if (!s) c.ungrouped.push({key: l, ...i})
        else {
          let d = c.subsections[s] || []
          d.push({key: l, ...i}), (c.subsections[s] = d)
        }
        r.sections[u] = c
      } else if (s) {
        let c = r.ungroupedSubsections[s] || []
        c.push({key: l, ...i}), (r.ungroupedSubsections[s] = c)
      } else r.ungrouped.push({key: l, ...i})
    })
    let n = j9[t],
      o = (l) =>
        n ? Object.keys(l).reduce((i, u) => ({...i, [u]: l[u].sort(n)}), {}) : l
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: o(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (l, i) => ({
          ...l,
          [i]: {
            ungrouped: r.sections[i].ungrouped.sort(n),
            subsections: o(r.sections[i].subsections),
          },
        }),
        {}
      ),
    }
  },
  Z9 = (e, t, r) => {
    try {
      return zm(e, t, r)
    } catch (n) {
      return E8.warn(n.message), !1
    }
  },
  V9 = (e) => {
    let {
      updateArgs: t,
      resetArgs: r,
      compact: n,
      inAddonPanel: o,
      initialExpandedArgs: l,
      sort: i = 'none',
      isLoading: u,
    } = e
    if ('error' in e) {
      let {error: w} = e
      return a.createElement(
        p0,
        null,
        w,
        ' ',
        a.createElement(
          xt,
          {
            href: 'http://storybook.js.org/docs/',
            target: '_blank',
            withArrow: !0,
          },
          'Read the docs'
        )
      )
    }
    if (u) return a.createElement(T9, null)
    let {rows: s, args: c, globals: d} = 'rows' in e && e,
      m = H9(
        ky(s, (w) => {
          var v
          return (
            !((v = w == null ? void 0 : w.table) != null && v.disable) &&
            Z9(w, c || {}, d || {})
          )
        }),
        i
      ),
      f = m.ungrouped.length === 0,
      p = Object.entries(m.sections).length === 0,
      h = Object.entries(m.ungroupedSubsections).length === 0
    if (f && p && h) return a.createElement(B9, {inAddonPanel: o})
    let g = 1
    t && (g += 1), n || (g += 2)
    let x = Object.keys(m.sections).length > 0,
      y = {updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: l}
    return a.createElement(
      Jo,
      null,
      a.createElement(
        I9,
        {
          compact: n,
          inAddonPanel: o,
          className: 'docblock-argstable sb-unstyled',
        },
        a.createElement(
          'thead',
          {className: 'docblock-argstable-head'},
          a.createElement(
            'tr',
            null,
            a.createElement('th', null, a.createElement('span', null, 'Name')),
            n
              ? null
              : a.createElement(
                  'th',
                  null,
                  a.createElement('span', null, 'Description')
                ),
            n
              ? null
              : a.createElement(
                  'th',
                  null,
                  a.createElement('span', null, 'Default')
                ),
            t
              ? a.createElement(
                  'th',
                  null,
                  a.createElement(
                    N9,
                    null,
                    'Control',
                    ' ',
                    !u &&
                      r &&
                      a.createElement(
                        P9,
                        {onClick: () => r(), title: 'Reset controls'},
                        a.createElement(ve, {icon: 'undo', 'aria-hidden': !0})
                      )
                  )
                )
              : null
          )
        ),
        a.createElement(
          'tbody',
          {className: 'docblock-argstable-body'},
          m.ungrouped.map((w) =>
            a.createElement(tn, {key: w.key, row: w, arg: c && c[w.key], ...y})
          ),
          Object.entries(m.ungroupedSubsections).map(([w, v]) =>
            a.createElement(
              Ba,
              {key: w, label: w, level: 'subsection', colSpan: g},
              v.map((E) =>
                a.createElement(tn, {
                  key: E.key,
                  row: E,
                  arg: c && c[E.key],
                  expandable: x,
                  ...y,
                })
              )
            )
          ),
          Object.entries(m.sections).map(([w, v]) =>
            a.createElement(
              Ba,
              {key: w, label: w, level: 'section', colSpan: g},
              v.ungrouped.map((E) =>
                a.createElement(tn, {
                  key: E.key,
                  row: E,
                  arg: c && c[E.key],
                  ...y,
                })
              ),
              Object.entries(v.subsections).map(([E, A]) =>
                a.createElement(
                  Ba,
                  {key: E, label: E, level: 'subsection', colSpan: g},
                  A.map((S) =>
                    a.createElement(tn, {
                      key: S.key,
                      row: S,
                      arg: c && c[S.key],
                      expandable: x,
                      ...y,
                    })
                  )
                )
              )
            )
          )
        )
      )
    )
  }
_.div(({theme: e}) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color:
    e.base === 'light'
      ? te(0.4, e.color.defaultText)
      : te(0.6, e.color.defaultText),
}))
_.div({overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'})
_.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  '&:not(:last-child)': {marginBottom: '1rem'},
})
_.div(re, ({theme: e}) => ({
  ...Qn(e),
  margin: '25px 0 40px',
  padding: '30px 20px',
}))
_.div(({theme: e}) => ({
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
}))
_.div(({theme: e}) => ({
  color:
    e.base === 'light'
      ? te(0.2, e.color.defaultText)
      : te(0.6, e.color.defaultText),
}))
_.div({flex: '0 0 30%', lineHeight: '20px', marginTop: 5})
_.div(({theme: e}) => ({
  flex: 1,
  textAlign: 'center',
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: 'hidden',
  color:
    e.base === 'light'
      ? te(0.4, e.color.defaultText)
      : te(0.6, e.color.defaultText),
  '> div': {
    display: 'inline-block',
    overflow: 'hidden',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
  },
  span: {display: 'block', marginTop: 2},
}))
_.div({display: 'flex', flexDirection: 'row'})
_.div(({background: e}) => ({
  position: 'relative',
  flex: 1,
  '&::before': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: e,
    content: '""',
  },
}))
_.div(({theme: e}) => ({
  ...Qn(e),
  display: 'flex',
  flexDirection: 'row',
  height: 50,
  marginBottom: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  backgroundImage:
    'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
  backgroundClip: 'padding-box',
}))
_.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  marginBottom: 30,
})
_.div({flex: 1, display: 'flex', flexDirection: 'row'})
_.div({display: 'flex', alignItems: 'flex-start'})
_.div({flex: '0 0 30%'})
_.div({flex: 1})
_.div(({theme: e}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color:
    e.base === 'light'
      ? te(0.4, e.color.defaultText)
      : te(0.6, e.color.defaultText),
}))
_.div(({theme: e}) => ({
  fontSize: e.typography.size.s2,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'column',
}))
_.div(({theme: e}) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}))
_.div(({theme: e}) => ({
  ...Qn(e),
  overflow: 'hidden',
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',
  '> img, > svg': {width: 20, height: 20},
}))
_.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,
  margin: '0px 10px 30px 0',
})
_.div({display: 'flex', flexFlow: 'row wrap'})
var z9 = (e) => `anchor--${e}`,
  q9 = ({storyId: e, children: t}) =>
    a.createElement('div', {id: z9(e), className: 'sb-anchor'}, t)
$e &&
  $e.__DOCS_CONTEXT__ === void 0 &&
  (($e.__DOCS_CONTEXT__ = b.createContext(null)),
  ($e.__DOCS_CONTEXT__.displayName = 'DocsContext'))
var Te = $e ? $e.__DOCS_CONTEXT__ : b.createContext(null),
  ta = (e, t) => b.useContext(Te).resolveOf(e, t)
function U9(e, t = 'start') {
  e.scrollIntoView({behavior: 'smooth', block: t, inline: 'nearest'})
}
function W9(e, t) {
  let r = xl([e], t)
  return r && r[0]
}
function xl(e, t) {
  let [r, n] = b.useState({})
  return (
    b.useEffect(() => {
      Promise.all(
        e.map(async (o) => {
          let l = await t.loadStory(o)
          n((i) => (i[o] === l ? i : {...i, [o]: l}))
        })
      )
    }),
    e.map((o) => {
      if (r[o]) return r[o]
      try {
        return t.storyById(o)
      } catch {
        return null
      }
    })
  )
}
function _0(e) {
  return m8(e)
}
var O0 = b.createContext({sources: {}}),
  T0 = '--unknown--',
  G9 = ({children: e, channel: t}) => {
    let [r, n] = b.useState({})
    return (
      b.useEffect(() => {
        let o = (l, i = null, u = !1) => {
          let {
              id: s,
              args: c = void 0,
              source: d,
              format: m,
            } = typeof l == 'string' ? {id: l, source: i, format: u} : l,
            f = c ? _0(c) : T0
          n((p) => ({...p, [s]: {...p[s], [f]: {code: d, format: m}}}))
        }
        return t.on(Ol, o), () => t.off(Ol, o)
      }, []),
      a.createElement(O0.Provider, {value: {sources: r}}, e)
    )
  },
  Y9 = ((e) => (
    (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
  ))(Y9 || {}),
  K9 = (e) => {
    let t = e
      .map((r) => {
        var n, o
        return (o = (n = r.parameters.docs) == null ? void 0 : n.source) == null
          ? void 0
          : o.state
      })
      .filter(Boolean)
    return t.length === 0 ? 'closed' : t[0]
  },
  X9 = (e, t, r) => {
    let {sources: n} = r,
      o = n == null ? void 0 : n[e]
    return (
      (o == null ? void 0 : o[_0(t)]) ||
      (o == null ? void 0 : o[T0]) || {code: ''}
    )
  },
  J9 = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: n,
  }) => {
    var s, c, d, m, f, p
    let {__isArgsStory: o} = t.parameters,
      l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {},
      i = r || l.type || oa.AUTO
    if (l.code !== void 0) return l.code
    let u =
      i === oa.DYNAMIC || (i === oa.AUTO && e && o) ? e : l.originalSource || ''
    return (
      l.transformSource &&
        pe(xe`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        pe(xe`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.jsx) != null &&
        d.transformSource &&
        pe(xe`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((p =
        n ??
        l.transform ??
        l.transformSource ??
        ((m = t.parameters.docs) == null ? void 0 : m.transformSource) ??
        ((f = t.parameters.jsx) == null ? void 0 : f.transformSource)) == null
        ? void 0
        : p(u, t)) || u
    )
  },
  R0 = (e, t, r) => {
    var p, h, g
    let n = e.ids || (e.id ? [e.id] : []),
      o = xl(n, t),
      l = o,
      {of: i} = e
    if ('of' in e && i === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      )
    if (i) l = [t.resolveOf(i, ['story']).story]
    else if (l.length === 0)
      try {
        l = [t.storyById()]
      } catch {}
    if (!o.every(Boolean))
      return {error: 'Oh no! The source is not available.', state: 'none'}
    let u =
        ((g =
          (h = (p = l[0]) == null ? void 0 : p.parameters) == null
            ? void 0
            : h.docs) == null
          ? void 0
          : g.source) || {},
      {code: s} = e,
      c = e.format ?? u.format,
      d = e.language ?? u.language ?? 'jsx',
      m = e.dark ?? u.dark ?? !1
    s ||
      (s = l.map((x, y) => {
        var A, S
        if (!x) return ''
        let w = t.getStoryContext(x),
          v = e.__forceInitialArgs ? w.initialArgs : w.unmappedArgs,
          E = X9(x.id, v, r)
        return (
          y === 0 &&
            (c =
              E.format ??
              ((S = (A = x.parameters.docs) == null ? void 0 : A.source) == null
                ? void 0
                : S.format) ??
              !1),
          J9({
            snippet: E.code,
            storyContext: {...w, args: v},
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        )
      }).join(`

`))
    let f = K9(l)
    return s
      ? {code: s, format: c, language: d, dark: m, state: f}
      : {error: 'Oh no! The source is not available.', state: f}
  },
  F0 = (e, t) => {
    let {id: r, of: n, meta: o, story: l} = e
    if ('of' in e && n === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      )
    if (r)
      return (
        pe(xe`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      )
    let {name: i} = e
    return i
      ? (pe(xe`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (l &&
          pe(xe`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        o && t.referenceMeta(o, !1),
        t.resolveOf(n || l || 'story', ['story']).story.id)
  },
  Q9 = (e, t, r) => {
    let {parameters: n = {}} = t || {},
      {docs: o = {}} = n,
      l = o.story || {}
    if (o.disable) return null
    let {inlineStories: i, iframeHeight: u} = o
    typeof i < 'u' &&
      pe(xe`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `)
    let s = e.inline ?? l.inline ?? i ?? !1
    if (
      (typeof u < 'u' &&
        pe(xe`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      s)
    ) {
      let d = e.height ?? l.height,
        m = e.autoplay ?? l.autoplay ?? !1
      return {
        story: t,
        inline: !0,
        height: d,
        autoplay: m,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      }
    }
    let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? '100px'
    return {story: t, inline: !1, height: c, primary: !!e.__primary}
  },
  ew = (e = {__forceInitialArgs: !1, __primary: !1}) => {
    let t = b.useContext(Te),
      r = F0(e, t),
      n = W9(r, t)
    if (!n) return a.createElement(yl, null)
    let o = Q9(e, n, t)
    return o ? a.createElement(V8, {...o}) : null
  },
  tw = ({withSource: e, mdxSource: t, children: r, layout: n, ...o}, l, i) => {
    let u = b.Children.toArray(r)
        .filter((f) => f.props && (f.props.id || f.props.name || f.props.of))
        .map((f) => F0(f.props, l)),
      s = xl(u, l),
      c = s.some((f) => !f),
      d = R0(
        {...(t ? {code: decodeURI(t)} : {ids: u}), ...(o.of && {of: o.of})},
        l,
        i
      )
    if (e === 'none') return {isLoading: c, previewProps: o}
    let m = n
    return (
      b.Children.forEach(r, (f) => {
        var p, h
        m ||
          (m =
            (h =
              (p = f == null ? void 0 : f.props) == null
                ? void 0
                : p.parameters) == null
              ? void 0
              : h.layout)
      }),
      s.forEach((f) => {
        var p, h
        m ||
          !f ||
          (m =
            (f == null ? void 0 : f.parameters.layout) ??
            ((h = (p = f.parameters.docs) == null ? void 0 : p.canvas) == null
              ? void 0
              : h.layout))
      }),
      {
        isLoading: c,
        previewProps: {
          ...o,
          layout: m ?? 'padded',
          withSource: d,
          isExpanded: (e || d.state) === 'open',
        },
      }
    )
  },
  rw = (e) => {
    var x, y, w, v, E, A, S, k, C, O
    let t = b.useContext(Te),
      r = b.useContext(O0),
      {children: n, of: o, source: l} = e
    if ('of' in e && o === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      )
    let {isLoading: i, previewProps: u} = tw(e, t, r),
      s,
      c,
      d
    try {
      ;({story: s} = ta(o || 'story', ['story']))
    } catch (T) {
      n || (d = T)
    }
    try {
      c = R0({...l, ...(o && {of: o})}, t, r)
    } catch (T) {
      n || (d = T)
    }
    if (d) throw d
    if (
      (e.withSource &&
        pe(xe`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        pe(xe`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        pe(xe`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      n)
    )
      return (
        pe(xe`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? a.createElement(X8, null) : a.createElement(co, {...u}, n)
      )
    let m =
        e.layout ??
        s.parameters.layout ??
        ((y = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null
          ? void 0
          : y.layout) ??
        'padded',
      f =
        e.withToolbar ??
        ((v = (w = s.parameters.docs) == null ? void 0 : w.canvas) == null
          ? void 0
          : v.withToolbar) ??
        !1,
      p =
        e.additionalActions ??
        ((A = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : A.additionalActions),
      h =
        e.sourceState ??
        ((k = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null
          ? void 0
          : k.sourceState) ??
        'hidden',
      g =
        e.className ??
        ((O = (C = s.parameters.docs) == null ? void 0 : C.canvas) == null
          ? void 0
          : O.className)
    return a.createElement(
      co,
      {
        withSource: h === 'none' ? void 0 : c,
        isExpanded: h === 'shown',
        withToolbar: f,
        additionalActions: p,
        className: g,
        layout: m,
      },
      a.createElement(ew, {of: o || s.moduleExport, meta: e.meta, ...e.story})
    )
  },
  nw = (e, t) => {
    let r = t.getStoryContext(e),
      [n, o] = b.useState(r.globals)
    return (
      b.useEffect(() => {
        let l = (i) => {
          o(i.globals)
        }
        return t.channel.on(ts, l), () => t.channel.off(ts, l)
      }, [t.channel]),
      [n]
    )
  },
  aw = (e, t) => {
    let r = ow(e, t)
    if (!r) throw new Error('No result when story was defined')
    return r
  },
  ow = (e, t) => {
    let r = e ? t.getStoryContext(e) : {args: {}},
      {id: n} = e || {id: 'none'},
      [o, l] = b.useState(r.args)
    b.useEffect(() => {
      let s = (c) => {
        c.storyId === n && l(c.args)
      }
      return t.channel.on(es, s), () => t.channel.off(es, s)
    }, [n, t.channel])
    let i = b.useCallback(
        (s) => t.channel.emit(w8, {storyId: n, updatedArgs: s}),
        [n, t.channel]
      ),
      u = b.useCallback(
        (s) => t.channel.emit(A8, {storyId: n, argNames: s}),
        [n, t.channel]
      )
    return e && [o, i, u]
  },
  lw = (e) => {
    var g
    let {of: t} = e
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      )
    let r = b.useContext(Te),
      {story: n} = r.resolveOf(t || 'story', ['story']),
      {parameters: o, argTypes: l} = n,
      i = ((g = o.docs) == null ? void 0 : g.controls) || {},
      u = e.include ?? i.include,
      s = e.exclude ?? i.exclude,
      c = e.sort ?? i.sort,
      [d, m, f] = aw(n, r),
      [p] = nw(n, r),
      h = x8(l, u, s)
    return a.createElement(V9, {
      rows: h,
      args: d,
      globals: p,
      updateArgs: m,
      resetArgs: f,
      sort: c,
    })
  },
  {document: $0} = $e,
  D0 = ({className: e, children: t, ...r}) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return a.createElement(Yo, null, t)
    let n = e && e.split('-')
    return a.createElement(hl, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    })
  }
function wl(e, t) {
  e.channel.emit(S8, t)
}
var go = Cc.a,
  iw = ({hash: e, children: t}) => {
    let r = b.useContext(Te)
    return a.createElement(
      go,
      {
        href: e,
        target: '_self',
        onClick: (n) => {
          let o = e.substring(1)
          $0.getElementById(o) && wl(r, e)
        },
      },
      t
    )
  },
  L0 = (e) => {
    let {href: t, target: r, children: n, ...o} = e,
      l = b.useContext(Te)
    if (t) {
      if (t.startsWith('#')) return a.createElement(iw, {hash: t}, n)
      if (r !== '_blank' && !t.startsWith('https://'))
        return a.createElement(
          go,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(),
                wl(l, i.currentTarget.getAttribute('href')))
            },
            target: r,
            ...o,
          },
          n
        )
    }
    return a.createElement(go, {...e})
  },
  M0 = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  sw = M0.reduce(
    (e, t) => ({
      ...e,
      [t]: _(t)({
        '& svg': {position: 'relative', top: '-0.1em', visibility: 'hidden'},
        '&:hover svg': {visibility: 'visible'},
      }),
    }),
    {}
  ),
  uw = _.a(() => ({
    float: 'left',
    lineHeight: 'inherit',
    paddingRight: '10px',
    marginLeft: '-24px',
    color: 'inherit',
  })),
  cw = ({as: e, id: t, children: r, ...n}) => {
    let o = b.useContext(Te),
      l = sw[e],
      i = `#${t}`
    return a.createElement(
      l,
      {id: t, ...n},
      a.createElement(
        uw,
        {
          'aria-hidden': 'true',
          href: i,
          tabIndex: -1,
          target: '_self',
          onClick: (u) => {
            $0.getElementById(t) && wl(o, i)
          },
        },
        a.createElement(ve, {icon: 'link'})
      ),
      r
    )
  },
  Al = (e) => {
    let {as: t, id: r, children: n, ...o} = e
    if (r) return a.createElement(cw, {as: t, id: r, ...o}, n)
    let l = t,
      {as: i, ...u} = e
    return a.createElement(l, {...ee(u, t)})
  },
  B0 = M0.reduce(
    (e, t) => ({...e, [t]: (r) => a.createElement(Al, {as: t, ...r})}),
    {}
  ),
  dw = (e) => {
    var t
    if (!e.children) return null
    if (typeof e.children != 'string')
      throw new Error(xe`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `)
    return a.createElement(Xc, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: {
          code: D0,
          a: L0,
          ...B0,
          ...((t = e == null ? void 0 : e.options) == null
            ? void 0
            : t.overrides),
        },
        ...(e == null ? void 0 : e.options),
      },
    })
  },
  pw = ((e) => (
    (e.INFO = 'info'),
    (e.NOTES = 'notes'),
    (e.DOCGEN = 'docgen'),
    (e.AUTO = 'auto'),
    e
  ))(pw || {}),
  gn =
    'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
  fw = (e) => e && (typeof e == 'string' ? e : Ia(e.markdown) || Ia(e.text)),
  mw = (e) => e && (typeof e == 'string' ? e : Ia(e.text)),
  gw = (e) => null,
  hw = (e) => {
    var t, r, n, o, l, i, u, s
    switch (e.type) {
      case 'story':
        return (
          ((r =
            (t = e.story.parameters.docs) == null ? void 0 : t.description) ==
          null
            ? void 0
            : r.story) || null
        )
      case 'meta': {
        let {parameters: c, component: d} = e.preparedMeta
        return (
          ((o = (n = c.docs) == null ? void 0 : n.description) == null
            ? void 0
            : o.component) ||
          ((i =
            (l = c.docs) == null ? void 0 : l.extractComponentDescription) ==
          null
            ? void 0
            : i.call(l, d, {component: d, parameters: c})) ||
          null
        )
      }
      case 'component': {
        let {
          component: c,
          projectAnnotations: {parameters: d},
        } = e
        return (
          ((s =
            (u = d.docs) == null ? void 0 : u.extractComponentDescription) ==
          null
            ? void 0
            : s.call(u, c, {component: c, parameters: d})) || null
        )
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`
        )
    }
  },
  bw = ({type: e, markdown: t, children: r}, {storyById: n}) => {
    let {component: o, parameters: l} = n()
    if (r || t) return r || t
    let {notes: i, info: u, docs: s} = l
    ;(i || u) &&
      pe(
        `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${gn}`
      )
    let {extractComponentDescription: c = gw, description: d} = s || {},
      m = d == null ? void 0 : d.component
    if (m) return m
    switch (e) {
      case 'info':
        return mw(u)
      case 'notes':
        return fw(i)
      case 'docgen':
      case 'auto':
      default:
        return c(o, {component: o, ...l})
    }
  },
  ho = (e) => {
    let {of: t, type: r, markdown: n, children: o} = e
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      )
    let l = b.useContext(Te),
      i = ta(t || 'meta'),
      u
    return (
      r || n || o ? (u = bw(e, l)) : (u = hw(i)),
      r && pe(`Manually specifying description type is deprecated. See ${gn}`),
      n &&
        pe(
          `The 'markdown' prop on the Description block is deprecated. See ${gn}`
        ),
      o &&
        pe(
          `The 'children' prop on the Description block is deprecated. See ${gn}`
        ),
      u ? a.createElement(dw, null, u) : null
    )
  },
  yw = _.div(({theme: e}) => ({
    width: '10rem',
    '@media (max-width: 768px)': {display: 'none'},
  })),
  vw = _.div(({theme: e}) => ({
    position: 'fixed',
    bottom: 0,
    top: 0,
    width: '10rem',
    paddingTop: '4rem',
    paddingBottom: '2rem',
    overflowY: 'auto',
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s2,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
    '& *': {boxSizing: 'border-box'},
    '& > .toc-wrapper > .toc-list': {
      paddingLeft: 0,
      borderLeft: `solid 2px ${e.color.mediumlight}`,
      '.toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
        },
      },
    },
    '& .toc-list-item': {
      position: 'relative',
      listStyleType: 'none',
      marginLeft: 20,
      paddingTop: 3,
      paddingBottom: 3,
    },
    '& .toc-list-item::before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      transform: 'translateX(calc(-2px - 20px))',
      borderLeft: `solid 2px ${e.color.mediumdark}`,
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    '& .toc-list-item.is-active-li::before': {opacity: 1},
    '& .toc-list-item > a': {
      color: e.color.defaultText,
      textDecoration: 'none',
    },
    '& .toc-list-item.is-active-li > a': {
      fontWeight: 600,
      color: e.color.secondary,
      textDecoration: 'none',
    },
  })),
  Ew = _.p(({theme: e}) => ({
    fontWeight: 600,
    fontSize: '0.875em',
    color: e.textColor,
    textTransform: 'uppercase',
    marginBottom: 10,
  })),
  xw = ({title: e}) =>
    e === null ? null : typeof e == 'string' ? a.createElement(Ew, null, e) : e,
  ww = ({
    title: e,
    disable: t,
    headingSelector: r,
    contentsSelector: n,
    ignoreSelector: o,
    unsafeTocbotOptions: l,
  }) => (
    b.useEffect(() => {
      let i = {
          tocSelector: '.toc-wrapper',
          contentSelector: n ?? '.sbdocs-content',
          headingSelector: r ?? 'h3',
          ignoreSelector: o ?? '.skip-toc',
          headingsOffset: 40,
          scrollSmoothOffset: -40,
          orderedList: !1,
          onClick: () => !1,
          ...l,
        },
        u = setTimeout(() => Qi.init(i), 100)
      return () => {
        clearTimeout(u), Qi.destroy()
      }
    }, [t]),
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        yw,
        null,
        t
          ? null
          : a.createElement(
              vw,
              null,
              a.createElement(xw, {title: e || null}),
              a.createElement('div', {className: 'toc-wrapper'})
            )
      )
    )
  ),
  {document: Aw, window: Sw} = $e,
  Cw = ({context: e, theme: t, children: r}) => {
    var o, l, i, u, s
    let n
    try {
      n =
        (l =
          (o = e.resolveOf('meta', ['meta']).preparedMeta.parameters) == null
            ? void 0
            : o.docs) == null
          ? void 0
          : l.toc
    } catch {
      n =
        (s =
          (u =
            (i = e == null ? void 0 : e.projectAnnotations) == null
              ? void 0
              : i.parameters) == null
            ? void 0
            : u.docs) == null
          ? void 0
          : s.toc
    }
    return (
      b.useEffect(() => {
        let c
        try {
          if (((c = new URL(Sw.parent.location.toString())), c.hash)) {
            let d = Aw.getElementById(c.hash.substring(1))
            d &&
              setTimeout(() => {
                U9(d)
              }, 200)
          }
        } catch {}
      }),
      a.createElement(
        Te.Provider,
        {value: e},
        a.createElement(
          G9,
          {channel: e.channel},
          a.createElement(
            Us,
            {theme: Np(t)},
            a.createElement(
              D8,
              {
                toc: n
                  ? a.createElement(ww, {
                      className: 'sbdocs sbdocs-toc--custom',
                      ...n,
                    })
                  : null,
              },
              r
            )
          )
        )
      )
    )
  },
  kw = /\s*\/\s*/,
  _w = (e) => {
    let t = e.trim().split(kw)
    return (t && t[t.length - 1]) || e
  },
  Ow = ({children: e}) => {
    let t = b.useContext(Te),
      r = e || _w(t.storyById().title)
    return r
      ? a.createElement(T8, {className: 'sbdocs-title sb-unstyled'}, r)
      : null
  },
  Tw = ({children: e}) => {
    let t = b.useContext(Te),
      {parameters: r} = t.storyById(),
      n = e || (r == null ? void 0 : r.componentSubtitle)
    return n
      ? a.createElement(R8, {className: 'sbdocs-subtitle sb-unstyled'}, n)
      : null
  },
  Rw = ({children: e, disableAnchor: t}) => {
    if (t || typeof e != 'string') return a.createElement(Xo, null, e)
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
    return a.createElement(Al, {as: 'h3', id: r}, e)
  },
  I0 = ({
    of: e,
    expanded: t = !0,
    withToolbar: r = !1,
    __forceInitialArgs: n = !1,
    __primary: o = !1,
  }) => {
    var u, s
    let {story: l} = ta(e || 'story', ['story']),
      i =
        ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null
          ? void 0
          : s.withToolbar) ?? r
    return a.createElement(
      q9,
      {storyId: l.id},
      t &&
        a.createElement(
          a.Fragment,
          null,
          a.createElement(Rw, null, l.name),
          a.createElement(ho, {of: e})
        ),
      a.createElement(rw, {
        of: e,
        withToolbar: i,
        story: {__forceInitialArgs: n, __primary: o},
        source: {__forceInitialArgs: n},
      })
    )
  },
  Fw = ({name: e}) => {
    let t = b.useContext(Te)
    e &&
      pe(xe`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `)
    let r = e && t.storyIdByName(e),
      n = t.storyById(r)
    return n
      ? a.createElement(I0, {
          of: n.moduleExport,
          expanded: !1,
          __primary: !0,
          withToolbar: !0,
        })
      : null
  },
  $w = ({children: e, disableAnchor: t, ...r}) => {
    if (t || typeof e != 'string') return a.createElement(Ko, null, e)
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
    return a.createElement(Al, {as: 'h2', id: n, ...r}, e)
  },
  Dw = _($w)(({theme: e}) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: '16px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: e.textMutedColor,
    border: 0,
    marginBottom: '12px',
    '&:first-of-type': {marginTop: '56px'},
  })),
  P0 = ({title: e, includePrimary: t = !0}) => {
    let {componentStories: r} = b.useContext(Te),
      n = r().filter((o) => {
        var l, i
        return !(
          (i = (l = o.parameters) == null ? void 0 : l.docs) != null &&
          i.disable
        )
      })
    return (
      t || (n = n.slice(1)),
      !n || n.length === 0
        ? null
        : a.createElement(
            a.Fragment,
            null,
            a.createElement(Dw, null, e),
            n.map(
              (o) =>
                o &&
                a.createElement(I0, {
                  key: o.id,
                  of: o.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0,
                })
            )
          )
    )
  }
P0.defaultProps = {title: 'Stories'}
var Lw = () => {
  let e = ta('meta', ['meta']),
    {stories: t} = e.csfFile,
    r = Object.keys(t).length === 1
  return a.createElement(
    a.Fragment,
    null,
    a.createElement(Ow, null),
    a.createElement(Tw, null),
    a.createElement(ho, {of: 'meta'}),
    r ? a.createElement(ho, {of: 'story'}) : null,
    a.createElement(Fw, null),
    a.createElement(lw, null),
    r ? null : a.createElement(P0, null)
  )
}
function Mw({context: e, docsParameter: t}) {
  let r = t.container || Cw,
    n = t.page || Lw
  return a.createElement(
    r,
    {context: e, theme: t.theme},
    a.createElement(n, null)
  )
}
var N0 = {code: D0, a: L0, ...B0},
  Bw = class extends b.Component {
    constructor() {
      super(...arguments), (this.state = {hasError: !1})
    }
    static getDerivedStateFromError() {
      return {hasError: !0}
    }
    componentDidCatch(e) {
      let {showException: t} = this.props
      t(e)
    }
    render() {
      let {hasError: e} = this.state,
        {children: t} = this.props
      return e ? null : a.createElement(a.Fragment, null, t)
    }
  },
  Iw = class {
    constructor() {
      ;(this.render = async (e, t, r) => {
        let n = {...N0, ...(t == null ? void 0 : t.components)},
          o = Mw
        return new Promise((l, i) => {
          wt(
            () => import('./index-2f8820ab.js'),
            ['./index-2f8820ab.js', './index-f1f2c4b1.js'],
            import.meta.url
          )
            .then(({MDXProvider: u}) =>
              s1(
                a.createElement(
                  Bw,
                  {showException: i, key: Math.random()},
                  a.createElement(
                    u,
                    {components: n},
                    a.createElement(o, {context: e, docsParameter: t})
                  )
                ),
                r
              )
            )
            .then(() => l())
        })
      }),
        (this.unmount = (e) => {
          u1(e)
        })
    }
  }
const Kw = Object.freeze(
  Object.defineProperty(
    {__proto__: null, DocsRenderer: Iw, defaultComponents: N0},
    Symbol.toStringTag,
    {value: 'Module'}
  )
)
export {
  Kw as D,
  je as F,
  ve as I,
  Po as S,
  Ch as T,
  $m as W,
  _e as _,
  Bu as a,
  Z as b,
  Au as c,
  bh as d,
  He as g,
  Ht as m,
  _ as n,
  Uw as s,
}
//# sourceMappingURL=DocsRenderer-NNNQARDV-7ecc56cc.js.map
