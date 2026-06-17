import {U as wi} from "./utility.DG0jHL-4.js";
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ia = "183"
  , Mc = 0
  , co = 1
  , Sc = 2
  , Dr = 1
  , yc = 2
  , Bi = 3
  , Ln = 0
  , Rt = 1
  , pn = 2
  , _n = 0
  , pi = 1
  , ho = 2
  , uo = 3
  , fo = 4
  , bc = 5
  , Wn = 100
  , Ec = 101
  , Tc = 102
  , Ac = 103
  , wc = 104
  , Rc = 200
  , Cc = 201
  , Pc = 202
  , Dc = 203
  , Bs = 204
  , zs = 205
  , Lc = 206
  , Ic = 207
  , Uc = 208
  , Nc = 209
  , Fc = 210
  , Oc = 211
  , Bc = 212
  , zc = 213
  , Vc = 214
  , Vs = 0
  , ks = 1
  , Gs = 2
  , gi = 3
  , Hs = 4
  , Ws = 5
  , Xs = 6
  , qs = 7
  , Pl = 0
  , kc = 1
  , Gc = 2
  , nn = 0
  , Dl = 1
  , Ll = 2
  , Il = 3
  , Ul = 4
  , Nl = 5
  , Fl = 6
  , Ol = 7
  , po = "attached"
  , Hc = "detached"
  , Bl = 300
  , Kn = 301
  , _i = 302
  , jr = 303
  , Jr = 304
  , Xr = 306
  , Ys = 1e3
  , mn = 1001
  , Ks = 1002
  , Mt = 1003
  , Wc = 1004
  , er = 1005
  , lt = 1006
  , Qr = 1007
  , qn = 1008
  , Ut = 1009
  , zl = 1010
  , Vl = 1011
  , Gi = 1012
  , Ua = 1013
  , rn = 1014
  , zt = 1015
  , vn = 1016
  , Na = 1017
  , Fa = 1018
  , Hi = 1020
  , kl = 35902
  , Gl = 35899
  , Hl = 1021
  , Wl = 1022
  , Vt = 1023
  , Mn = 1026
  , Yn = 1027
  , Oa = 1028
  , Ba = 1029
  , xi = 1030
  , za = 1031
  , Va = 1033
  , Lr = 33776
  , Ir = 33777
  , Ur = 33778
  , Nr = 33779
  , $s = 35840
  , Zs = 35841
  , js = 35842
  , Js = 35843
  , Qs = 36196
  , ea = 37492
  , ta = 37496
  , na = 37488
  , ia = 37489
  , ra = 37490
  , sa = 37491
  , aa = 37808
  , oa = 37809
  , la = 37810
  , ca = 37811
  , ha = 37812
  , ua = 37813
  , da = 37814
  , fa = 37815
  , pa = 37816
  , ma = 37817
  , ga = 37818
  , _a = 37819
  , xa = 37820
  , va = 37821
  , Ma = 36492
  , Sa = 36494
  , ya = 36495
  , ba = 36283
  , Ea = 36284
  , Ta = 36285
  , Aa = 36286
  , Or = 2300
  , wa = 2301
  , es = 2302
  , mo = 2303
  , go = 2400
  , _o = 2401
  , xo = 2402
  , Xc = 2500
  , Dg = 0
  , Lg = 1
  , Ig = 2
  , qc = 3200
  , ka = 0
  , Yc = 1
  , Pn = ""
  , Bt = "srgb"
  , vi = "srgb-linear"
  , Br = "linear"
  , $e = "srgb"
  , Jn = 7680
  , vo = 519
  , Kc = 512
  , $c = 513
  , Zc = 514
  , Ga = 515
  , jc = 516
  , Jc = 517
  , Ha = 518
  , Qc = 519
  , Ra = 35044
  , Ug = 35048
  , Mo = "300 es"
  , tn = 2e3
  , Wi = 2001;
function eh(i) {
    for (let e = i.length - 1; e >= 0; --e)
        if (i[e] >= 65535)
            return !0;
    return !1
}
function th(i) {
    return ArrayBuffer.isView(i) && !(i instanceof DataView)
}
function Xi(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i)
}
function nh() {
    const i = Xi("canvas");
    return i.style.display = "block",
    i
}
const So = {};
function zr(...i) {
    const e = "THREE." + i.shift();
    console.log(e, ...i)
}
function Xl(i) {
    const e = i[0];
    if (typeof e == "string" && e.startsWith("TSL:")) {
        const t = i[1];
        t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'
    }
    return i
}
function be(...i) {
    i = Xl(i);
    const e = "THREE." + i.shift();
    {
        const t = i[0];
        t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i)
    }
}
function we(...i) {
    i = Xl(i);
    const e = "THREE." + i.shift();
    {
        const t = i[0];
        t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i)
    }
}
function Vr(...i) {
    const e = i.join(" ");
    e in So || (So[e] = !0,
    be(...i))
}
function ih(i, e, t) {
    return new Promise(function(n, r) {
        function s() {
            switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
            case i.WAIT_FAILED:
                r();
                break;
            case i.TIMEOUT_EXPIRED:
                setTimeout(s, t);
                break;
            default:
                n()
            }
        }
        setTimeout(s, t)
    }
    )
}
const rh = {
    [Vs]: ks,
    [Gs]: Xs,
    [Hs]: qs,
    [gi]: Ws,
    [ks]: Vs,
    [Xs]: Gs,
    [qs]: Hs,
    [Ws]: gi
};
class bi {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []),
        n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        const n = this._listeners;
        return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        const n = this._listeners;
        if (n === void 0)
            return;
        const r = n[e];
        if (r !== void 0) {
            const s = r.indexOf(t);
            s !== -1 && r.splice(s, 1)
        }
    }
    dispatchEvent(e) {
        const t = this._listeners;
        if (t === void 0)
            return;
        const n = t[e.type];
        if (n !== void 0) {
            e.target = this;
            const r = n.slice(0);
            for (let s = 0, a = r.length; s < a; s++)
                r[s].call(this, e);
            e.target = null
        }
    }
}
const bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let yo = 1234567;
const Vi = Math.PI / 180
  , Mi = 180 / Math.PI;
function $t() {
    const i = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (bt[i & 255] + bt[i >> 8 & 255] + bt[i >> 16 & 255] + bt[i >> 24 & 255] + "-" + bt[e & 255] + bt[e >> 8 & 255] + "-" + bt[e >> 16 & 15 | 64] + bt[e >> 24 & 255] + "-" + bt[t & 63 | 128] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 255] + bt[t >> 24 & 255] + bt[n & 255] + bt[n >> 8 & 255] + bt[n >> 16 & 255] + bt[n >> 24 & 255]).toLowerCase()
}
function ze(i, e, t) {
    return Math.max(e, Math.min(t, i))
}
function Wa(i, e) {
    return (i % e + e) % e
}
function sh(i, e, t, n, r) {
    return n + (i - e) * (r - n) / (t - e)
}
function ah(i, e, t) {
    return i !== e ? (t - i) / (e - i) : 0
}
function ki(i, e, t) {
    return (1 - t) * i + t * e
}
function oh(i, e, t, n) {
    return ki(i, e, 1 - Math.exp(-t * n))
}
function lh(i, e=1) {
    return e - Math.abs(Wa(i, e * 2) - e)
}
function ch(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e),
    i * i * (3 - 2 * i))
}
function hh(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e),
    i * i * i * (i * (i * 6 - 15) + 10))
}
function uh(i, e) {
    return i + Math.floor(Math.random() * (e - i + 1))
}
function dh(i, e) {
    return i + Math.random() * (e - i)
}
function fh(i) {
    return i * (.5 - Math.random())
}
function ph(i) {
    i !== void 0 && (yo = i);
    let e = yo += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1),
    e ^= e + Math.imul(e ^ e >>> 7, e | 61),
    ((e ^ e >>> 14) >>> 0) / 4294967296
}
function mh(i) {
    return i * Vi
}
function gh(i) {
    return i * Mi
}
function _h(i) {
    return (i & i - 1) === 0 && i !== 0
}
function xh(i) {
    return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2))
}
function vh(i) {
    return Math.pow(2, Math.floor(Math.log(i) / Math.LN2))
}
function Mh(i, e, t, n, r) {
    const s = Math.cos
      , a = Math.sin
      , o = s(t / 2)
      , c = a(t / 2)
      , l = s((e + n) / 2)
      , u = a((e + n) / 2)
      , f = s((e - n) / 2)
      , h = a((e - n) / 2)
      , d = s((n - e) / 2)
      , g = a((n - e) / 2);
    switch (r) {
    case "XYX":
        i.set(o * u, c * f, c * h, o * l);
        break;
    case "YZY":
        i.set(c * h, o * u, c * f, o * l);
        break;
    case "ZXZ":
        i.set(c * f, c * h, o * u, o * l);
        break;
    case "XZX":
        i.set(o * u, c * g, c * d, o * l);
        break;
    case "YXY":
        i.set(c * d, o * u, c * g, o * l);
        break;
    case "ZYZ":
        i.set(c * g, c * d, o * u, o * l);
        break;
    default:
        be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
    }
}
function Yt(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return i / 4294967295;
    case Uint16Array:
        return i / 65535;
    case Uint8Array:
        return i / 255;
    case Int32Array:
        return Math.max(i / 2147483647, -1);
    case Int16Array:
        return Math.max(i / 32767, -1);
    case Int8Array:
        return Math.max(i / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function Ze(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return Math.round(i * 4294967295);
    case Uint16Array:
        return Math.round(i * 65535);
    case Uint8Array:
        return Math.round(i * 255);
    case Int32Array:
        return Math.round(i * 2147483647);
    case Int16Array:
        return Math.round(i * 32767);
    case Int8Array:
        return Math.round(i * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
const Ng = {
    DEG2RAD: Vi,
    RAD2DEG: Mi,
    generateUUID: $t,
    clamp: ze,
    euclideanModulo: Wa,
    mapLinear: sh,
    inverseLerp: ah,
    lerp: ki,
    damp: oh,
    pingpong: lh,
    smoothstep: ch,
    smootherstep: hh,
    randInt: uh,
    randFloat: dh,
    randFloatSpread: fh,
    seededRandom: ph,
    degToRad: mh,
    radToDeg: gh,
    isPowerOfTwo: _h,
    ceilPowerOfTwo: xh,
    floorPowerOfTwo: vh,
    setQuaternionFromProperEuler: Mh,
    normalize: Ze,
    denormalize: Yt
};
class Ge {
    constructor(e=0, t=0) {
        Ge.prototype.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6],
        this.y = r[1] * t + r[4] * n + r[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = ze(this.x, e.x, t.x),
        this.y = ze(this.y, e.y, t.y),
        this
    }
    clampScalar(e, t) {
        return this.x = ze(this.x, e, t),
        this.y = ze(this.y, e, t),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(ze(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const n = Math.cos(t)
          , r = Math.sin(t)
          , s = this.x - e.x
          , a = this.y - e.y;
        return this.x = s * n - a * r + e.x,
        this.y = s * r + a * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class $n {
    constructor(e=0, t=0, n=0, r=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = r
    }
    static slerpFlat(e, t, n, r, s, a, o) {
        let c = n[r + 0]
          , l = n[r + 1]
          , u = n[r + 2]
          , f = n[r + 3]
          , h = s[a + 0]
          , d = s[a + 1]
          , g = s[a + 2]
          , M = s[a + 3];
        if (f !== M || c !== h || l !== d || u !== g) {
            let m = c * h + l * d + u * g + f * M;
            m < 0 && (h = -h,
            d = -d,
            g = -g,
            M = -M,
            m = -m);
            let p = 1 - o;
            if (m < .9995) {
                const S = Math.acos(m)
                  , T = Math.sin(S);
                p = Math.sin(p * S) / T,
                o = Math.sin(o * S) / T,
                c = c * p + h * o,
                l = l * p + d * o,
                u = u * p + g * o,
                f = f * p + M * o
            } else {
                c = c * p + h * o,
                l = l * p + d * o,
                u = u * p + g * o,
                f = f * p + M * o;
                const S = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
                c *= S,
                l *= S,
                u *= S,
                f *= S
            }
        }
        e[t] = c,
        e[t + 1] = l,
        e[t + 2] = u,
        e[t + 3] = f
    }
    static multiplyQuaternionsFlat(e, t, n, r, s, a) {
        const o = n[r]
          , c = n[r + 1]
          , l = n[r + 2]
          , u = n[r + 3]
          , f = s[a]
          , h = s[a + 1]
          , d = s[a + 2]
          , g = s[a + 3];
        return e[t] = o * g + u * f + c * d - l * h,
        e[t + 1] = c * g + u * h + l * f - o * d,
        e[t + 2] = l * g + u * d + o * h - c * f,
        e[t + 3] = u * g - o * f - c * h - l * d,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, r) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t=!0) {
        const n = e._x
          , r = e._y
          , s = e._z
          , a = e._order
          , o = Math.cos
          , c = Math.sin
          , l = o(n / 2)
          , u = o(r / 2)
          , f = o(s / 2)
          , h = c(n / 2)
          , d = c(r / 2)
          , g = c(s / 2);
        switch (a) {
        case "XYZ":
            this._x = h * u * f + l * d * g,
            this._y = l * d * f - h * u * g,
            this._z = l * u * g + h * d * f,
            this._w = l * u * f - h * d * g;
            break;
        case "YXZ":
            this._x = h * u * f + l * d * g,
            this._y = l * d * f - h * u * g,
            this._z = l * u * g - h * d * f,
            this._w = l * u * f + h * d * g;
            break;
        case "ZXY":
            this._x = h * u * f - l * d * g,
            this._y = l * d * f + h * u * g,
            this._z = l * u * g + h * d * f,
            this._w = l * u * f - h * d * g;
            break;
        case "ZYX":
            this._x = h * u * f - l * d * g,
            this._y = l * d * f + h * u * g,
            this._z = l * u * g - h * d * f,
            this._w = l * u * f + h * d * g;
            break;
        case "YZX":
            this._x = h * u * f + l * d * g,
            this._y = l * d * f + h * u * g,
            this._z = l * u * g - h * d * f,
            this._w = l * u * f - h * d * g;
            break;
        case "XZY":
            this._x = h * u * f - l * d * g,
            this._y = l * d * f - h * u * g,
            this._z = l * u * g + h * d * f,
            this._w = l * u * f + h * d * g;
            break;
        default:
            be("Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return t === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2
          , r = Math.sin(n);
        return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , n = t[0]
          , r = t[4]
          , s = t[8]
          , a = t[1]
          , o = t[5]
          , c = t[9]
          , l = t[2]
          , u = t[6]
          , f = t[10]
          , h = n + o + f;
        if (h > 0) {
            const d = .5 / Math.sqrt(h + 1);
            this._w = .25 / d,
            this._x = (u - c) * d,
            this._y = (s - l) * d,
            this._z = (a - r) * d
        } else if (n > o && n > f) {
            const d = 2 * Math.sqrt(1 + n - o - f);
            this._w = (u - c) / d,
            this._x = .25 * d,
            this._y = (r + a) / d,
            this._z = (s + l) / d
        } else if (o > f) {
            const d = 2 * Math.sqrt(1 + o - n - f);
            this._w = (s - l) / d,
            this._x = (r + a) / d,
            this._y = .25 * d,
            this._z = (c + u) / d
        } else {
            const d = 2 * Math.sqrt(1 + f - n - o);
            this._w = (a - r) / d,
            this._x = (s + l) / d,
            this._y = (c + u) / d,
            this._z = .25 * d
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < 1e-8 ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0)
            return this;
        const r = Math.min(1, t / n);
        return this.slerp(e, r),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x
          , r = e._y
          , s = e._z
          , a = e._w
          , o = t._x
          , c = t._y
          , l = t._z
          , u = t._w;
        return this._x = n * u + a * o + r * l - s * c,
        this._y = r * u + a * c + s * o - n * l,
        this._z = s * u + a * l + n * c - r * o,
        this._w = a * u - n * o - r * c - s * l,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        let n = e._x
          , r = e._y
          , s = e._z
          , a = e._w
          , o = this.dot(e);
        o < 0 && (n = -n,
        r = -r,
        s = -s,
        a = -a,
        o = -o);
        let c = 1 - t;
        if (o < .9995) {
            const l = Math.acos(o)
              , u = Math.sin(l);
            c = Math.sin(c * l) / u,
            t = Math.sin(t * l) / u,
            this._x = this._x * c + n * t,
            this._y = this._y * c + r * t,
            this._z = this._z * c + s * t,
            this._w = this._w * c + a * t,
            this._onChangeCallback()
        } else
            this._x = this._x * c + n * t,
            this._y = this._y * c + r * t,
            this._z = this._z * c + s * t,
            this._w = this._w * c + a * t,
            this.normalize();
        return this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        const e = 2 * Math.PI * Math.random()
          , t = 2 * Math.PI * Math.random()
          , n = Math.random()
          , r = Math.sqrt(1 - n)
          , s = Math.sqrt(n);
        return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class U {
    constructor(e=0, t=0, n=0) {
        U.prototype.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(bo.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(bo.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6] * r,
        this.y = s[1] * t + s[4] * n + s[7] * r,
        this.z = s[2] * t + s[5] * n + s[8] * r,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.elements
          , a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
        return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a,
        this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a,
        this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.x
          , a = e.y
          , o = e.z
          , c = e.w
          , l = 2 * (a * r - o * n)
          , u = 2 * (o * t - s * r)
          , f = 2 * (s * n - a * t);
        return this.x = t + c * l + a * f - o * u,
        this.y = n + c * u + o * l - s * f,
        this.z = r + c * f + s * u - a * l,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * r,
        this.y = s[1] * t + s[5] * n + s[9] * r,
        this.z = s[2] * t + s[6] * n + s[10] * r,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = ze(this.x, e.x, t.x),
        this.y = ze(this.y, e.y, t.y),
        this.z = ze(this.z, e.z, t.z),
        this
    }
    clampScalar(e, t) {
        return this.x = ze(this.x, e, t),
        this.y = ze(this.y, e, t),
        this.z = ze(this.z, e, t),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x
          , r = e.y
          , s = e.z
          , a = t.x
          , o = t.y
          , c = t.z;
        return this.x = r * c - s * o,
        this.y = s * a - n * c,
        this.z = n * o - r * a,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return ts.copy(this).projectOnVector(e),
        this.sub(ts)
    }
    reflect(e) {
        return this.sub(ts.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(ze(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y
          , r = this.z - e.z;
        return t * t + n * n + r * r
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const r = Math.sin(t) * e;
        return this.x = r * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = r * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = r,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    setFromColor(e) {
        return this.x = e.r,
        this.y = e.g,
        this.z = e.b,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const e = Math.random() * Math.PI * 2
          , t = Math.random() * 2 - 1
          , n = Math.sqrt(1 - t * t);
        return this.x = n * Math.cos(e),
        this.y = t,
        this.z = n * Math.sin(e),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const ts = new U
  , bo = new $n;
class Ie {
    constructor(e, t, n, r, s, a, o, c, l) {
        Ie.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, r, s, a, o, c, l)
    }
    set(e, t, n, r, s, a, o, c, l) {
        const u = this.elements;
        return u[0] = e,
        u[1] = r,
        u[2] = o,
        u[3] = t,
        u[4] = s,
        u[5] = c,
        u[6] = n,
        u[7] = a,
        u[8] = l,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , r = t.elements
          , s = this.elements
          , a = n[0]
          , o = n[3]
          , c = n[6]
          , l = n[1]
          , u = n[4]
          , f = n[7]
          , h = n[2]
          , d = n[5]
          , g = n[8]
          , M = r[0]
          , m = r[3]
          , p = r[6]
          , S = r[1]
          , T = r[4]
          , E = r[7]
          , R = r[2]
          , A = r[5]
          , P = r[8];
        return s[0] = a * M + o * S + c * R,
        s[3] = a * m + o * T + c * A,
        s[6] = a * p + o * E + c * P,
        s[1] = l * M + u * S + f * R,
        s[4] = l * m + u * T + f * A,
        s[7] = l * p + u * E + f * P,
        s[2] = h * M + d * S + g * R,
        s[5] = h * m + d * T + g * A,
        s[8] = h * p + d * E + g * P,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , u = e[8];
        return t * a * u - t * o * l - n * s * u + n * o * c + r * s * l - r * a * c
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , u = e[8]
          , f = u * a - o * l
          , h = o * c - u * s
          , d = l * s - a * c
          , g = t * f + n * h + r * d;
        if (g === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const M = 1 / g;
        return e[0] = f * M,
        e[1] = (r * l - u * n) * M,
        e[2] = (o * n - r * a) * M,
        e[3] = h * M,
        e[4] = (u * t - r * c) * M,
        e[5] = (r * s - o * t) * M,
        e[6] = d * M,
        e[7] = (n * c - l * t) * M,
        e[8] = (a * t - n * s) * M,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, r, s, a, o) {
        const c = Math.cos(s)
          , l = Math.sin(s);
        return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -r * l, r * c, -r * (-l * a + c * o) + o + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(ns.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(ns.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(ns.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let r = 0; r < 9; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const ns = new Ie
  , Eo = new Ie().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
  , To = new Ie().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Sh() {
    const i = {
        enabled: !0,
        workingColorSpace: vi,
        spaces: {},
        convert: function(r, s, a) {
            return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === $e && (r.r = xn(r.r),
            r.g = xn(r.g),
            r.b = xn(r.b)),
            this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ),
            r.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === $e && (r.r = mi(r.r),
            r.g = mi(r.g),
            r.b = mi(r.b))),
            r
        },
        workingToColorSpace: function(r, s) {
            return this.convert(r, this.workingColorSpace, s)
        },
        colorSpaceToWorking: function(r, s) {
            return this.convert(r, s, this.workingColorSpace)
        },
        getPrimaries: function(r) {
            return this.spaces[r].primaries
        },
        getTransfer: function(r) {
            return r === Pn ? Br : this.spaces[r].transfer
        },
        getToneMappingMode: function(r) {
            return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard"
        },
        getLuminanceCoefficients: function(r, s=this.workingColorSpace) {
            return r.fromArray(this.spaces[s].luminanceCoefficients)
        },
        define: function(r) {
            Object.assign(this.spaces, r)
        },
        _getMatrix: function(r, s, a) {
            return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)
        },
        _getDrawingBufferColorSpace: function(r) {
            return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace
        },
        _getUnpackColorSpace: function(r=this.workingColorSpace) {
            return this.spaces[r].workingColorSpaceConfig.unpackColorSpace
        },
        fromWorkingColorSpace: function(r, s) {
            return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),
            i.workingToColorSpace(r, s)
        },
        toWorkingColorSpace: function(r, s) {
            return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),
            i.colorSpaceToWorking(r, s)
        }
    }
      , e = [.64, .33, .3, .6, .15, .06]
      , t = [.2126, .7152, .0722]
      , n = [.3127, .329];
    return i.define({
        [vi]: {
            primaries: e,
            whitePoint: n,
            transfer: Br,
            toXYZ: Eo,
            fromXYZ: To,
            luminanceCoefficients: t,
            workingColorSpaceConfig: {
                unpackColorSpace: Bt
            },
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Bt
            }
        },
        [Bt]: {
            primaries: e,
            whitePoint: n,
            transfer: $e,
            toXYZ: Eo,
            fromXYZ: To,
            luminanceCoefficients: t,
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Bt
            }
        }
    }),
    i
}
const We = Sh();
function xn(i) {
    return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
}
function mi(i) {
    return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
}
let Qn;
class yh {
    static getDataURL(e, t="image/png") {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
            return e.src;
        let n;
        if (e instanceof HTMLCanvasElement)
            n = e;
        else {
            Qn === void 0 && (Qn = Xi("canvas")),
            Qn.width = e.width,
            Qn.height = e.height;
            const r = Qn.getContext("2d");
            e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height),
            n = Qn
        }
        return n.toDataURL(t)
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            const t = Xi("canvas");
            t.width = e.width,
            t.height = e.height;
            const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            const r = n.getImageData(0, 0, e.width, e.height)
              , s = r.data;
            for (let a = 0; a < s.length; a++)
                s[a] = xn(s[a] / 255) * 255;
            return n.putImageData(r, 0, 0),
            t
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let n = 0; n < t.length; n++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(xn(t[n] / 255) * 255) : t[n] = xn(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            e
    }
}
let bh = 0;
class Xa {
    constructor(e=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: bh++
        }),
        this.uuid = $t(),
        this.data = e,
        this.dataReady = !0,
        this.version = 0
    }
    getSize(e) {
        const t = this.data;
        return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0),
        e
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , r = this.data;
        if (r !== null) {
            let s;
            if (Array.isArray(r)) {
                s = [];
                for (let a = 0, o = r.length; a < o; a++)
                    r[a].isDataTexture ? s.push(is(r[a].image)) : s.push(is(r[a]))
            } else
                s = is(r);
            n.url = s
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
function is(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? yh.getDataURL(i) : i.data ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name
    } : (be("Texture: Unable to serialize Texture."),
    {})
}
let Eh = 0;
const rs = new U;
class St extends bi {
    constructor(e=St.DEFAULT_IMAGE, t=St.DEFAULT_MAPPING, n=mn, r=mn, s=lt, a=qn, o=Vt, c=Ut, l=St.DEFAULT_ANISOTROPY, u=Pn) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: Eh++
        }),
        this.uuid = $t(),
        this.name = "",
        this.source = new Xa(e),
        this.mipmaps = [],
        this.mapping = t,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = r,
        this.magFilter = s,
        this.minFilter = a,
        this.anisotropy = l,
        this.format = o,
        this.internalFormat = null,
        this.type = c,
        this.offset = new Ge(0,0),
        this.repeat = new Ge(1,1),
        this.center = new Ge(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new Ie,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = u,
        this.userData = {},
        this.updateRanges = [],
        this.version = 0,
        this.onUpdate = null,
        this.renderTarget = null,
        this.isRenderTargetTexture = !1,
        this.isArrayTexture = !!(e && e.depth && e.depth > 1),
        this.pmremVersion = 0
    }
    get width() {
        return this.source.getSize(rs).x
    }
    get height() {
        return this.source.getSize(rs).y
    }
    get depth() {
        return this.source.getSize(rs).z
    }
    get image() {
        return this.source.data
    }
    set image(e=null) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.channel = e.channel,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.colorSpace = e.colorSpace,
        this.renderTarget = e.renderTarget,
        this.isRenderTargetTexture = e.isRenderTargetTexture,
        this.isArrayTexture = e.isArrayTexture,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    setValues(e) {
        for (const t in e) {
            const n = e[t];
            if (n === void 0) {
                be(`Texture.setValues(): parameter '${t}' has value of undefined.`);
                continue
            }
            const r = this[t];
            if (r === void 0) {
                be(`Texture.setValues(): property '${t}' does not exist.`);
                continue
            }
            r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.7,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== Bl)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case Ys:
                e.x = e.x - Math.floor(e.x);
                break;
            case mn:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case Ks:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case Ys:
                e.y = e.y - Math.floor(e.y);
                break;
            case mn:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case Ks:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(e) {
        e === !0 && this.pmremVersion++
    }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = Bl;
St.DEFAULT_ANISOTROPY = 1;
class st {
    constructor(e=0, t=0, n=0, r=1) {
        st.prototype.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = r
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, r) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = r,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s,
        this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s,
        this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s,
        this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this.w /= e.w,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, r, s;
        const c = e.elements
          , l = c[0]
          , u = c[4]
          , f = c[8]
          , h = c[1]
          , d = c[5]
          , g = c[9]
          , M = c[2]
          , m = c[6]
          , p = c[10];
        if (Math.abs(u - h) < .01 && Math.abs(f - M) < .01 && Math.abs(g - m) < .01) {
            if (Math.abs(u + h) < .1 && Math.abs(f + M) < .1 && Math.abs(g + m) < .1 && Math.abs(l + d + p - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const T = (l + 1) / 2
              , E = (d + 1) / 2
              , R = (p + 1) / 2
              , A = (u + h) / 4
              , P = (f + M) / 4
              , x = (g + m) / 4;
            return T > E && T > R ? T < .01 ? (n = 0,
            r = .707106781,
            s = .707106781) : (n = Math.sqrt(T),
            r = A / n,
            s = P / n) : E > R ? E < .01 ? (n = .707106781,
            r = 0,
            s = .707106781) : (r = Math.sqrt(E),
            n = A / r,
            s = x / r) : R < .01 ? (n = .707106781,
            r = .707106781,
            s = 0) : (s = Math.sqrt(R),
            n = P / s,
            r = x / s),
            this.set(n, r, s, t),
            this
        }
        let S = Math.sqrt((m - g) * (m - g) + (f - M) * (f - M) + (h - u) * (h - u));
        return Math.abs(S) < .001 && (S = 1),
        this.x = (m - g) / S,
        this.y = (f - M) / S,
        this.z = (h - u) / S,
        this.w = Math.acos((l + d + p - 1) / 2),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this.w = t[15],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = ze(this.x, e.x, t.x),
        this.y = ze(this.y, e.y, t.y),
        this.z = ze(this.z, e.z, t.z),
        this.w = ze(this.w, e.w, t.w),
        this
    }
    clampScalar(e, t) {
        return this.x = ze(this.x, e, t),
        this.y = ze(this.y, e, t),
        this.z = ze(this.z, e, t),
        this.w = ze(this.w, e, t),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class Th extends bi {
    constructor(e=1, t=1, n={}) {
        super(),
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: lt,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1
        }, n),
        this.isRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = n.depth,
        this.scissor = new st(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new st(0,0,e,t),
        this.textures = [];
        const r = {
            width: e,
            height: t,
            depth: n.depth
        }
          , s = new St(r)
          , a = n.count;
        for (let o = 0; o < a; o++)
            this.textures[o] = s.clone(),
            this.textures[o].isRenderTargetTexture = !0,
            this.textures[o].renderTarget = this;
        this._setTextureOptions(n),
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this._depthTexture = null,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples,
        this.multiview = n.multiview
    }
    _setTextureOptions(e={}) {
        const t = {
            minFilter: lt,
            generateMipmaps: !1,
            flipY: !1,
            internalFormat: null
        };
        e.mapping !== void 0 && (t.mapping = e.mapping),
        e.wrapS !== void 0 && (t.wrapS = e.wrapS),
        e.wrapT !== void 0 && (t.wrapT = e.wrapT),
        e.wrapR !== void 0 && (t.wrapR = e.wrapR),
        e.magFilter !== void 0 && (t.magFilter = e.magFilter),
        e.minFilter !== void 0 && (t.minFilter = e.minFilter),
        e.format !== void 0 && (t.format = e.format),
        e.type !== void 0 && (t.type = e.type),
        e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
        e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
        e.flipY !== void 0 && (t.flipY = e.flipY),
        e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
        e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
        for (let n = 0; n < this.textures.length; n++)
            this.textures[n].setValues(t)
    }
    get texture() {
        return this.textures[0]
    }
    set texture(e) {
        this.textures[0] = e
    }
    set depthTexture(e) {
        this._depthTexture !== null && (this._depthTexture.renderTarget = null),
        e !== null && (e.renderTarget = this),
        this._depthTexture = e
    }
    get depthTexture() {
        return this._depthTexture
    }
    setSize(e, t, n=1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e,
            this.height = t,
            this.depth = n;
            for (let r = 0, s = this.textures.length; r < s; r++)
                this.textures[r].image.width = e,
                this.textures[r].image.height = t,
                this.textures[r].image.depth = n,
                this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
            this.dispose()
        }
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.scissor.copy(e.scissor),
        this.scissorTest = e.scissorTest,
        this.viewport.copy(e.viewport),
        this.textures.length = 0;
        for (let t = 0, n = e.textures.length; t < n; t++) {
            this.textures[t] = e.textures[t].clone(),
            this.textures[t].isRenderTargetTexture = !0,
            this.textures[t].renderTarget = this;
            const r = Object.assign({}, e.textures[t].image);
            this.textures[t].source = new Xa(r)
        }
        return this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.resolveDepthBuffer = e.resolveDepthBuffer,
        this.resolveStencilBuffer = e.resolveStencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Nt extends Th {
    constructor(e=1, t=1, n={}) {
        super(e, t, n),
        this.isWebGLRenderTarget = !0
    }
}
class ql extends St {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = Mt,
        this.minFilter = Mt,
        this.wrapR = mn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.layerUpdates = new Set
    }
    addLayerUpdate(e) {
        this.layerUpdates.add(e)
    }
    clearLayerUpdates() {
        this.layerUpdates.clear()
    }
}
class Ah extends St {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = Mt,
        this.minFilter = Mt,
        this.wrapR = mn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Ve {
    constructor(e, t, n, r, s, a, o, c, l, u, f, h, d, g, M, m) {
        Ve.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, u, f, h, d, g, M, m)
    }
    set(e, t, n, r, s, a, o, c, l, u, f, h, d, g, M, m) {
        const p = this.elements;
        return p[0] = e,
        p[4] = t,
        p[8] = n,
        p[12] = r,
        p[1] = s,
        p[5] = a,
        p[9] = o,
        p[13] = c,
        p[2] = l,
        p[6] = u,
        p[10] = f,
        p[14] = h,
        p[3] = d,
        p[7] = g,
        p[11] = M,
        p[15] = m,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new Ve().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return this.determinant() === 0 ? (e.set(1, 0, 0),
        t.set(0, 1, 0),
        n.set(0, 0, 1),
        this) : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this)
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        if (e.determinant() === 0)
            return this.identity();
        const t = this.elements
          , n = e.elements
          , r = 1 / ei.setFromMatrixColumn(e, 0).length()
          , s = 1 / ei.setFromMatrixColumn(e, 1).length()
          , a = 1 / ei.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * r,
        t[1] = n[1] * r,
        t[2] = n[2] * r,
        t[3] = 0,
        t[4] = n[4] * s,
        t[5] = n[5] * s,
        t[6] = n[6] * s,
        t[7] = 0,
        t[8] = n[8] * a,
        t[9] = n[9] * a,
        t[10] = n[10] * a,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        const t = this.elements
          , n = e.x
          , r = e.y
          , s = e.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , c = Math.cos(r)
          , l = Math.sin(r)
          , u = Math.cos(s)
          , f = Math.sin(s);
        if (e.order === "XYZ") {
            const h = a * u
              , d = a * f
              , g = o * u
              , M = o * f;
            t[0] = c * u,
            t[4] = -c * f,
            t[8] = l,
            t[1] = d + g * l,
            t[5] = h - M * l,
            t[9] = -o * c,
            t[2] = M - h * l,
            t[6] = g + d * l,
            t[10] = a * c
        } else if (e.order === "YXZ") {
            const h = c * u
              , d = c * f
              , g = l * u
              , M = l * f;
            t[0] = h + M * o,
            t[4] = g * o - d,
            t[8] = a * l,
            t[1] = a * f,
            t[5] = a * u,
            t[9] = -o,
            t[2] = d * o - g,
            t[6] = M + h * o,
            t[10] = a * c
        } else if (e.order === "ZXY") {
            const h = c * u
              , d = c * f
              , g = l * u
              , M = l * f;
            t[0] = h - M * o,
            t[4] = -a * f,
            t[8] = g + d * o,
            t[1] = d + g * o,
            t[5] = a * u,
            t[9] = M - h * o,
            t[2] = -a * l,
            t[6] = o,
            t[10] = a * c
        } else if (e.order === "ZYX") {
            const h = a * u
              , d = a * f
              , g = o * u
              , M = o * f;
            t[0] = c * u,
            t[4] = g * l - d,
            t[8] = h * l + M,
            t[1] = c * f,
            t[5] = M * l + h,
            t[9] = d * l - g,
            t[2] = -l,
            t[6] = o * c,
            t[10] = a * c
        } else if (e.order === "YZX") {
            const h = a * c
              , d = a * l
              , g = o * c
              , M = o * l;
            t[0] = c * u,
            t[4] = M - h * f,
            t[8] = g * f + d,
            t[1] = f,
            t[5] = a * u,
            t[9] = -o * u,
            t[2] = -l * u,
            t[6] = d * f + g,
            t[10] = h - M * f
        } else if (e.order === "XZY") {
            const h = a * c
              , d = a * l
              , g = o * c
              , M = o * l;
            t[0] = c * u,
            t[4] = -f,
            t[8] = l * u,
            t[1] = h * f + M,
            t[5] = a * u,
            t[9] = d * f - g,
            t[2] = g * f - d,
            t[6] = o * u,
            t[10] = M * f + h
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(wh, e, Rh)
    }
    lookAt(e, t, n) {
        const r = this.elements;
        return Lt.subVectors(e, t),
        Lt.lengthSq() === 0 && (Lt.z = 1),
        Lt.normalize(),
        En.crossVectors(n, Lt),
        En.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Lt.x += 1e-4 : Lt.z += 1e-4,
        Lt.normalize(),
        En.crossVectors(n, Lt)),
        En.normalize(),
        tr.crossVectors(Lt, En),
        r[0] = En.x,
        r[4] = tr.x,
        r[8] = Lt.x,
        r[1] = En.y,
        r[5] = tr.y,
        r[9] = Lt.y,
        r[2] = En.z,
        r[6] = tr.z,
        r[10] = Lt.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , r = t.elements
          , s = this.elements
          , a = n[0]
          , o = n[4]
          , c = n[8]
          , l = n[12]
          , u = n[1]
          , f = n[5]
          , h = n[9]
          , d = n[13]
          , g = n[2]
          , M = n[6]
          , m = n[10]
          , p = n[14]
          , S = n[3]
          , T = n[7]
          , E = n[11]
          , R = n[15]
          , A = r[0]
          , P = r[4]
          , x = r[8]
          , y = r[12]
          , W = r[1]
          , w = r[5]
          , N = r[9]
          , F = r[13]
          , k = r[2]
          , G = r[6]
          , B = r[10]
          , V = r[14]
          , Q = r[3]
          , Z = r[7]
          , ce = r[11]
          , pe = r[15];
        return s[0] = a * A + o * W + c * k + l * Q,
        s[4] = a * P + o * w + c * G + l * Z,
        s[8] = a * x + o * N + c * B + l * ce,
        s[12] = a * y + o * F + c * V + l * pe,
        s[1] = u * A + f * W + h * k + d * Q,
        s[5] = u * P + f * w + h * G + d * Z,
        s[9] = u * x + f * N + h * B + d * ce,
        s[13] = u * y + f * F + h * V + d * pe,
        s[2] = g * A + M * W + m * k + p * Q,
        s[6] = g * P + M * w + m * G + p * Z,
        s[10] = g * x + M * N + m * B + p * ce,
        s[14] = g * y + M * F + m * V + p * pe,
        s[3] = S * A + T * W + E * k + R * Q,
        s[7] = S * P + T * w + E * G + R * Z,
        s[11] = S * x + T * N + E * B + R * ce,
        s[15] = S * y + T * F + E * V + R * pe,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[4]
          , r = e[8]
          , s = e[12]
          , a = e[1]
          , o = e[5]
          , c = e[9]
          , l = e[13]
          , u = e[2]
          , f = e[6]
          , h = e[10]
          , d = e[14]
          , g = e[3]
          , M = e[7]
          , m = e[11]
          , p = e[15]
          , S = c * d - l * h
          , T = o * d - l * f
          , E = o * h - c * f
          , R = a * d - l * u
          , A = a * h - c * u
          , P = a * f - o * u;
        return t * (M * S - m * T + p * E) - n * (g * S - m * R + p * A) + r * (g * T - M * R + p * P) - s * (g * E - M * A + m * P)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        const r = this.elements;
        return e.isVector3 ? (r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z) : (r[12] = e,
        r[13] = t,
        r[14] = n),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , u = e[8]
          , f = e[9]
          , h = e[10]
          , d = e[11]
          , g = e[12]
          , M = e[13]
          , m = e[14]
          , p = e[15]
          , S = t * o - n * a
          , T = t * c - r * a
          , E = t * l - s * a
          , R = n * c - r * o
          , A = n * l - s * o
          , P = r * l - s * c
          , x = u * M - f * g
          , y = u * m - h * g
          , W = u * p - d * g
          , w = f * m - h * M
          , N = f * p - d * M
          , F = h * p - d * m
          , k = S * F - T * N + E * w + R * W - A * y + P * x;
        if (k === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const G = 1 / k;
        return e[0] = (o * F - c * N + l * w) * G,
        e[1] = (r * N - n * F - s * w) * G,
        e[2] = (M * P - m * A + p * R) * G,
        e[3] = (h * A - f * P - d * R) * G,
        e[4] = (c * W - a * F - l * y) * G,
        e[5] = (t * F - r * W + s * y) * G,
        e[6] = (m * E - g * P - p * T) * G,
        e[7] = (u * P - h * E + d * T) * G,
        e[8] = (a * N - o * W + l * x) * G,
        e[9] = (n * W - t * N - s * x) * G,
        e[10] = (g * A - M * E + p * S) * G,
        e[11] = (f * E - u * A - d * S) * G,
        e[12] = (o * y - a * w - c * x) * G,
        e[13] = (t * w - n * y + r * x) * G,
        e[14] = (M * T - g * R - m * S) * G,
        e[15] = (u * R - f * T + h * S) * G,
        this
    }
    scale(e) {
        const t = this.elements
          , n = e.x
          , r = e.y
          , s = e.z;
        return t[0] *= n,
        t[4] *= r,
        t[8] *= s,
        t[1] *= n,
        t[5] *= r,
        t[9] *= s,
        t[2] *= n,
        t[6] *= r,
        t[10] *= s,
        t[3] *= n,
        t[7] *= r,
        t[11] *= s,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r))
    }
    makeTranslation(e, t, n) {
        return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t)
          , r = Math.sin(t)
          , s = 1 - n
          , a = e.x
          , o = e.y
          , c = e.z
          , l = s * a
          , u = s * o;
        return this.set(l * a + n, l * o - r * c, l * c + r * o, 0, l * o + r * c, u * o + n, u * c - r * a, 0, l * c - r * o, u * c + r * a, s * c * c + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, r, s, a) {
        return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        const r = this.elements
          , s = t._x
          , a = t._y
          , o = t._z
          , c = t._w
          , l = s + s
          , u = a + a
          , f = o + o
          , h = s * l
          , d = s * u
          , g = s * f
          , M = a * u
          , m = a * f
          , p = o * f
          , S = c * l
          , T = c * u
          , E = c * f
          , R = n.x
          , A = n.y
          , P = n.z;
        return r[0] = (1 - (M + p)) * R,
        r[1] = (d + E) * R,
        r[2] = (g - T) * R,
        r[3] = 0,
        r[4] = (d - E) * A,
        r[5] = (1 - (h + p)) * A,
        r[6] = (m + S) * A,
        r[7] = 0,
        r[8] = (g + T) * P,
        r[9] = (m - S) * P,
        r[10] = (1 - (h + M)) * P,
        r[11] = 0,
        r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z,
        r[15] = 1,
        this
    }
    decompose(e, t, n) {
        const r = this.elements;
        e.x = r[12],
        e.y = r[13],
        e.z = r[14];
        const s = this.determinant();
        if (s === 0)
            return n.set(1, 1, 1),
            t.identity(),
            this;
        let a = ei.set(r[0], r[1], r[2]).length();
        const o = ei.set(r[4], r[5], r[6]).length()
          , c = ei.set(r[8], r[9], r[10]).length();
        s < 0 && (a = -a),
        Wt.copy(this);
        const l = 1 / a
          , u = 1 / o
          , f = 1 / c;
        return Wt.elements[0] *= l,
        Wt.elements[1] *= l,
        Wt.elements[2] *= l,
        Wt.elements[4] *= u,
        Wt.elements[5] *= u,
        Wt.elements[6] *= u,
        Wt.elements[8] *= f,
        Wt.elements[9] *= f,
        Wt.elements[10] *= f,
        t.setFromRotationMatrix(Wt),
        n.x = a,
        n.y = o,
        n.z = c,
        this
    }
    makePerspective(e, t, n, r, s, a, o=tn, c=!1) {
        const l = this.elements
          , u = 2 * s / (t - e)
          , f = 2 * s / (n - r)
          , h = (t + e) / (t - e)
          , d = (n + r) / (n - r);
        let g, M;
        if (c)
            g = s / (a - s),
            M = a * s / (a - s);
        else if (o === tn)
            g = -(a + s) / (a - s),
            M = -2 * a * s / (a - s);
        else if (o === Wi)
            g = -a / (a - s),
            M = -a * s / (a - s);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
        return l[0] = u,
        l[4] = 0,
        l[8] = h,
        l[12] = 0,
        l[1] = 0,
        l[5] = f,
        l[9] = d,
        l[13] = 0,
        l[2] = 0,
        l[6] = 0,
        l[10] = g,
        l[14] = M,
        l[3] = 0,
        l[7] = 0,
        l[11] = -1,
        l[15] = 0,
        this
    }
    makeOrthographic(e, t, n, r, s, a, o=tn, c=!1) {
        const l = this.elements
          , u = 2 / (t - e)
          , f = 2 / (n - r)
          , h = -(t + e) / (t - e)
          , d = -(n + r) / (n - r);
        let g, M;
        if (c)
            g = 1 / (a - s),
            M = a / (a - s);
        else if (o === tn)
            g = -2 / (a - s),
            M = -(a + s) / (a - s);
        else if (o === Wi)
            g = -1 / (a - s),
            M = -s / (a - s);
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
        return l[0] = u,
        l[4] = 0,
        l[8] = 0,
        l[12] = h,
        l[1] = 0,
        l[5] = f,
        l[9] = 0,
        l[13] = d,
        l[2] = 0,
        l[6] = 0,
        l[10] = g,
        l[14] = M,
        l[3] = 0,
        l[7] = 0,
        l[11] = 0,
        l[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let r = 0; r < 16; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
const ei = new U
  , Wt = new Ve
  , wh = new U(0,0,0)
  , Rh = new U(1,1,1)
  , En = new U
  , tr = new U
  , Lt = new U
  , Ao = new Ve
  , wo = new $n;
class sn {
    constructor(e=0, t=0, n=0, r=sn.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = r
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, r=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        const r = e.elements
          , s = r[0]
          , a = r[4]
          , o = r[8]
          , c = r[1]
          , l = r[5]
          , u = r[9]
          , f = r[2]
          , h = r[6]
          , d = r[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(ze(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-u, d),
            this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(h, l),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-ze(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._y = Math.atan2(o, d),
            this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-f, s),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(ze(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._y = Math.atan2(-f, d),
            this._z = Math.atan2(-a, l)) : (this._y = 0,
            this._z = Math.atan2(c, s));
            break;
        case "ZYX":
            this._y = Math.asin(-ze(f, -1, 1)),
            Math.abs(f) < .9999999 ? (this._x = Math.atan2(h, d),
            this._z = Math.atan2(c, s)) : (this._x = 0,
            this._z = Math.atan2(-a, l));
            break;
        case "YZX":
            this._z = Math.asin(ze(c, -1, 1)),
            Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l),
            this._y = Math.atan2(-f, s)) : (this._x = 0,
            this._y = Math.atan2(o, d));
            break;
        case "XZY":
            this._z = Math.asin(-ze(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l),
            this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, d),
            this._y = 0);
            break;
        default:
            be("Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return Ao.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(Ao, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return wo.setFromEuler(this),
        this.setFromQuaternion(wo, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
sn.DEFAULT_ORDER = "XYZ";
class qa {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
let Ch = 0;
const Ro = new U
  , ti = new $n
  , ln = new Ve
  , nr = new U
  , Ri = new U
  , Ph = new U
  , Dh = new $n
  , Co = new U(1,0,0)
  , Po = new U(0,1,0)
  , Do = new U(0,0,1)
  , Lo = {
    type: "added"
}
  , Lh = {
    type: "removed"
}
  , ni = {
    type: "childadded",
    child: null
}
  , ss = {
    type: "childremoved",
    child: null
};
class ut extends bi {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: Ch++
        }),
        this.uuid = $t(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = ut.DEFAULT_UP.clone();
        const e = new U
          , t = new sn
          , n = new $n
          , r = new U(1,1,1);
        function s() {
            n.setFromEuler(t, !1)
        }
        function a() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(s),
        n._onChange(a),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new Ve
            },
            normalMatrix: {
                value: new Ie
            }
        }),
        this.matrix = new Ve,
        this.matrixWorld = new Ve,
        this.matrixAutoUpdate = ut.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new qa,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.customDepthMaterial = void 0,
        this.customDistanceMaterial = void 0,
        this.static = !1,
        this.userData = {},
        this.pivot = null
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return ti.setFromAxisAngle(e, t),
        this.quaternion.multiply(ti),
        this
    }
    rotateOnWorldAxis(e, t) {
        return ti.setFromAxisAngle(e, t),
        this.quaternion.premultiply(ti),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(Co, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(Po, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Do, e)
    }
    translateOnAxis(e, t) {
        return Ro.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Ro.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(Co, e)
    }
    translateY(e) {
        return this.translateOnAxis(Po, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Do, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(ln.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? nr.copy(e) : nr.set(e, t, n);
        const r = this.parent;
        this.updateWorldMatrix(!0, !1),
        Ri.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? ln.lookAt(Ri, nr, this.up) : ln.lookAt(nr, Ri, this.up),
        this.quaternion.setFromRotationMatrix(ln),
        r && (ln.extractRotation(r.matrixWorld),
        ti.setFromRotationMatrix(ln),
        this.quaternion.premultiply(ti.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (we("Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(Lo),
        ni.child = e,
        this.dispatchEvent(ni),
        ni.child = null) : we("Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(Lh),
        ss.child = e,
        this.dispatchEvent(ss),
        ss.child = null),
        this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        ln.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        ln.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(ln),
        e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(Lo),
        ni.child = e,
        this.dispatchEvent(ni),
        ni.child = null,
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, r = this.children.length; n < r; n++) {
            const a = this.children[n].getObjectByProperty(e, t);
            if (a !== void 0)
                return a
        }
    }
    getObjectsByProperty(e, t, n=[]) {
        this[e] === t && n.push(this);
        const r = this.children;
        for (let s = 0, a = r.length; s < a; s++)
            r[s].getObjectsByProperty(e, t, n);
        return n
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Ri, e, Ph),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Ri, Dh, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        const e = this.pivot;
        if (e !== null) {
            const t = e.x
              , n = e.y
              , r = e.z
              , s = this.matrix.elements;
            s[12] += t - s[0] * t - s[4] * n - s[8] * r,
            s[13] += n - s[1] * t - s[5] * n - s[9] * r,
            s[14] += r - s[2] * t - s[6] * n - s[10] * r
        }
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        t === !0) {
            const r = this.children;
            for (let s = 0, a = r.length; s < a; s++)
                r[s].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string"
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.7,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const r = {};
        r.uuid = this.uuid,
        r.type = this.type,
        this.name !== "" && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        this.static !== !1 && (r.static = this.static),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        r.layers = this.layers.mask,
        r.matrix = this.matrix.toArray(),
        r.up = this.up.toArray(),
        this.pivot !== null && (r.pivot = this.pivot.toArray()),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)),
        this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
        this.isInstancedMesh && (r.type = "InstancedMesh",
        r.count = this.count,
        r.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (r.type = "BatchedMesh",
        r.perObjectFrustumCulled = this.perObjectFrustumCulled,
        r.sortObjects = this.sortObjects,
        r.drawRanges = this._drawRanges,
        r.reservedRanges = this._reservedRanges,
        r.geometryInfo = this._geometryInfo.map(o => ({
            ...o,
            boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
            boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
        })),
        r.instanceInfo = this._instanceInfo.map(o => ({
            ...o
        })),
        r.availableInstanceIds = this._availableInstanceIds.slice(),
        r.availableGeometryIds = this._availableGeometryIds.slice(),
        r.nextIndexStart = this._nextIndexStart,
        r.nextVertexStart = this._nextVertexStart,
        r.geometryCount = this._geometryCount,
        r.maxInstanceCount = this._maxInstanceCount,
        r.maxVertexCount = this._maxVertexCount,
        r.maxIndexCount = this._maxIndexCount,
        r.geometryInitialized = this._geometryInitialized,
        r.matricesTexture = this._matricesTexture.toJSON(e),
        r.indirectTexture = this._indirectTexture.toJSON(e),
        this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
        function s(o, c) {
            return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)),
            c.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = s(e.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                const c = o.shapes;
                if (Array.isArray(c))
                    for (let l = 0, u = c.length; l < u; l++) {
                        const f = c[l];
                        s(e.shapes, f)
                    }
                else
                    s(e.shapes, c)
            }
        }
        if (this.isSkinnedMesh && (r.bindMode = this.bindMode,
        r.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (s(e.skeletons, this.skeleton),
        r.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const o = [];
                for (let c = 0, l = this.material.length; c < l; c++)
                    o.push(s(e.materials, this.material[c]));
                r.material = o
            } else
                r.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let o = 0; o < this.children.length; o++)
                r.children.push(this.children[o].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                const c = this.animations[o];
                r.animations.push(s(e.animations, c))
            }
        }
        if (t) {
            const o = a(e.geometries)
              , c = a(e.materials)
              , l = a(e.textures)
              , u = a(e.images)
              , f = a(e.shapes)
              , h = a(e.skeletons)
              , d = a(e.animations)
              , g = a(e.nodes);
            o.length > 0 && (n.geometries = o),
            c.length > 0 && (n.materials = c),
            l.length > 0 && (n.textures = l),
            u.length > 0 && (n.images = u),
            f.length > 0 && (n.shapes = f),
            h.length > 0 && (n.skeletons = h),
            d.length > 0 && (n.animations = d),
            g.length > 0 && (n.nodes = g)
        }
        return n.object = r,
        n;
        function a(o) {
            const c = [];
            for (const l in o) {
                const u = o[l];
                delete u.metadata,
                c.push(u)
            }
            return c
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        e.pivot !== null && (this.pivot = e.pivot.clone()),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.static = e.static,
        this.animations = e.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let n = 0; n < e.children.length; n++) {
                const r = e.children[n];
                this.add(r.clone())
            }
        return this
    }
}
ut.DEFAULT_UP = new U(0,1,0);
ut.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class ir extends ut {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const Ih = {
    type: "move"
};
class as {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new ir,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new ir,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new U,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new U),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new ir,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new U,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new U),
        this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
    }
    connect(e) {
        if (e && e.hand) {
            const t = this._hand;
            if (t)
                for (const n of e.hand.values())
                    this._getHandJoint(t, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: e
        }),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let r = null
          , s = null
          , a = null;
        const o = this._targetRay
          , c = this._grip
          , l = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") {
            if (l && e.hand) {
                a = !0;
                for (const M of e.hand.values()) {
                    const m = t.getJointPose(M, n)
                      , p = this._getHandJoint(l, M);
                    m !== null && (p.matrix.fromArray(m.transform.matrix),
                    p.matrix.decompose(p.position, p.rotation, p.scale),
                    p.matrixWorldNeedsUpdate = !0,
                    p.jointRadius = m.radius),
                    p.visible = m !== null
                }
                const u = l.joints["index-finger-tip"]
                  , f = l.joints["thumb-tip"]
                  , h = u.position.distanceTo(f.position)
                  , d = .02
                  , g = .005;
                l.inputState.pinching && h > d + g ? (l.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !l.inputState.pinching && h <= d - g && (l.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n),
                s !== null && (c.matrix.fromArray(s.transform.matrix),
                c.matrix.decompose(c.position, c.rotation, c.scale),
                c.matrixWorldNeedsUpdate = !0,
                s.linearVelocity ? (c.hasLinearVelocity = !0,
                c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1,
                s.angularVelocity ? (c.hasAngularVelocity = !0,
                c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
            o !== null && (r = t.getPose(e.targetRaySpace, n),
            r === null && s !== null && (r = s),
            r !== null && (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            o.matrixWorldNeedsUpdate = !0,
            r.linearVelocity ? (o.hasLinearVelocity = !0,
            o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
            r.angularVelocity ? (o.hasAngularVelocity = !0,
            o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1,
            this.dispatchEvent(Ih)))
        }
        return o !== null && (o.visible = r !== null),
        c !== null && (c.visible = s !== null),
        l !== null && (l.visible = a !== null),
        this
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            const n = new ir;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            e.joints[t.jointName] = n,
            e.add(n)
        }
        return e.joints[t.jointName]
    }
}
const Yl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Tn = {
    h: 0,
    s: 0,
    l: 0
}
  , rr = {
    h: 0,
    s: 0,
    l: 0
};
function os(i, e, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i
}
class ke {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(e, t, n)
    }
    set(e, t, n) {
        if (t === void 0 && n === void 0) {
            const r = e;
            r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r)
        } else
            this.setRGB(e, t, n);
        return this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=Bt) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        We.colorSpaceToWorking(this, t),
        this
    }
    setRGB(e, t, n, r=We.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = n,
        We.colorSpaceToWorking(this, r),
        this
    }
    setHSL(e, t, n, r=We.workingColorSpace) {
        if (e = Wa(e, 1),
        t = ze(t, 0, 1),
        n = ze(n, 0, 1),
        t === 0)
            this.r = this.g = this.b = n;
        else {
            const s = n <= .5 ? n * (1 + t) : n + t - n * t
              , a = 2 * n - s;
            this.r = os(a, s, e + 1 / 3),
            this.g = os(a, s, e),
            this.b = os(a, s, e - 1 / 3)
        }
        return We.colorSpaceToWorking(this, r),
        this
    }
    setStyle(e, t=Bt) {
        function n(s) {
            s !== void 0 && parseFloat(s) < 1 && be("Color: Alpha component of " + e + " will be ignored.")
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let s;
            const a = r[1]
              , o = r[2];
            switch (a) {
            case "rgb":
            case "rgba":
                if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
                if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
                break;
            case "hsl":
            case "hsla":
                if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
                break;
            default:
                be("Color: Unknown color model " + e)
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const s = r[1]
              , a = s.length;
            if (a === 3)
                return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
            if (a === 6)
                return this.setHex(parseInt(s, 16), t);
            be("Color: Invalid hex color " + e)
        } else if (e && e.length > 0)
            return this.setColorName(e, t);
        return this
    }
    setColorName(e, t=Bt) {
        const n = Yl[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : be("Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = xn(e.r),
        this.g = xn(e.g),
        this.b = xn(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = mi(e.r),
        this.g = mi(e.g),
        this.b = mi(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=Bt) {
        return We.workingToColorSpace(Et.copy(this), e),
        Math.round(ze(Et.r * 255, 0, 255)) * 65536 + Math.round(ze(Et.g * 255, 0, 255)) * 256 + Math.round(ze(Et.b * 255, 0, 255))
    }
    getHexString(e=Bt) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=We.workingColorSpace) {
        We.workingToColorSpace(Et.copy(this), t);
        const n = Et.r
          , r = Et.g
          , s = Et.b
          , a = Math.max(n, r, s)
          , o = Math.min(n, r, s);
        let c, l;
        const u = (o + a) / 2;
        if (o === a)
            c = 0,
            l = 0;
        else {
            const f = a - o;
            switch (l = u <= .5 ? f / (a + o) : f / (2 - a - o),
            a) {
            case n:
                c = (r - s) / f + (r < s ? 6 : 0);
                break;
            case r:
                c = (s - n) / f + 2;
                break;
            case s:
                c = (n - r) / f + 4;
                break
            }
            c /= 6
        }
        return e.h = c,
        e.s = l,
        e.l = u,
        e
    }
    getRGB(e, t=We.workingColorSpace) {
        return We.workingToColorSpace(Et.copy(this), t),
        e.r = Et.r,
        e.g = Et.g,
        e.b = Et.b,
        e
    }
    getStyle(e=Bt) {
        We.workingToColorSpace(Et.copy(this), e);
        const t = Et.r
          , n = Et.g
          , r = Et.b;
        return e !== Bt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(Tn),
        this.setHSL(Tn.h + e, Tn.s + t, Tn.l + n)
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(Tn),
        e.getHSL(rr);
        const n = ki(Tn.h, rr.h, t)
          , r = ki(Tn.s, rr.s, t)
          , s = ki(Tn.l, rr.l, t);
        return this.setHSL(n, r, s),
        this
    }
    setFromVector3(e) {
        return this.r = e.x,
        this.g = e.y,
        this.b = e.z,
        this
    }
    applyMatrix3(e) {
        const t = this.r
          , n = this.g
          , r = this.b
          , s = e.elements;
        return this.r = s[0] * t + s[3] * n + s[6] * r,
        this.g = s[1] * t + s[4] * n + s[7] * r,
        this.b = s[2] * t + s[5] * n + s[8] * r,
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const Et = new ke;
ke.NAMES = Yl;
class Ci extends ut {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new sn,
        this.environmentIntensity = 1,
        this.environmentRotation = new sn,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        this.backgroundBlurriness = e.backgroundBlurriness,
        this.backgroundIntensity = e.backgroundIntensity,
        this.backgroundRotation.copy(e.backgroundRotation),
        this.environmentIntensity = e.environmentIntensity,
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
        t.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity),
        t.object.environmentRotation = this.environmentRotation.toArray(),
        t
    }
}
const Xt = new U
  , cn = new U
  , ls = new U
  , hn = new U
  , ii = new U
  , ri = new U
  , Io = new U
  , cs = new U
  , hs = new U
  , us = new U
  , ds = new st
  , fs = new st
  , ps = new st;
class Kt {
    constructor(e=new U, t=new U, n=new U) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, r) {
        r.subVectors(n, t),
        Xt.subVectors(e, t),
        r.cross(Xt);
        const s = r.lengthSq();
        return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, r, s) {
        Xt.subVectors(r, t),
        cn.subVectors(n, t),
        ls.subVectors(e, t);
        const a = Xt.dot(Xt)
          , o = Xt.dot(cn)
          , c = Xt.dot(ls)
          , l = cn.dot(cn)
          , u = cn.dot(ls)
          , f = a * l - o * o;
        if (f === 0)
            return s.set(0, 0, 0),
            null;
        const h = 1 / f
          , d = (l * c - o * u) * h
          , g = (a * u - o * c) * h;
        return s.set(1 - d - g, g, d)
    }
    static containsPoint(e, t, n, r) {
        return this.getBarycoord(e, t, n, r, hn) === null ? !1 : hn.x >= 0 && hn.y >= 0 && hn.x + hn.y <= 1
    }
    static getInterpolation(e, t, n, r, s, a, o, c) {
        return this.getBarycoord(e, t, n, r, hn) === null ? (c.x = 0,
        c.y = 0,
        "z"in c && (c.z = 0),
        "w"in c && (c.w = 0),
        null) : (c.setScalar(0),
        c.addScaledVector(s, hn.x),
        c.addScaledVector(a, hn.y),
        c.addScaledVector(o, hn.z),
        c)
    }
    static getInterpolatedAttribute(e, t, n, r, s, a) {
        return ds.setScalar(0),
        fs.setScalar(0),
        ps.setScalar(0),
        ds.fromBufferAttribute(e, t),
        fs.fromBufferAttribute(e, n),
        ps.fromBufferAttribute(e, r),
        a.setScalar(0),
        a.addScaledVector(ds, s.x),
        a.addScaledVector(fs, s.y),
        a.addScaledVector(ps, s.z),
        a
    }
    static isFrontFacing(e, t, n, r) {
        return Xt.subVectors(n, t),
        cn.subVectors(e, t),
        Xt.cross(cn).dot(r) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, r) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[r]),
        this
    }
    setFromAttributeAndIndices(e, t, n, r) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Xt.subVectors(this.c, this.b),
        cn.subVectors(this.a, this.b),
        Xt.cross(cn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return Kt.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return Kt.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getInterpolation(e, t, n, r, s) {
        return Kt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
    }
    containsPoint(e) {
        return Kt.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return Kt.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a
          , r = this.b
          , s = this.c;
        let a, o;
        ii.subVectors(r, n),
        ri.subVectors(s, n),
        cs.subVectors(e, n);
        const c = ii.dot(cs)
          , l = ri.dot(cs);
        if (c <= 0 && l <= 0)
            return t.copy(n);
        hs.subVectors(e, r);
        const u = ii.dot(hs)
          , f = ri.dot(hs);
        if (u >= 0 && f <= u)
            return t.copy(r);
        const h = c * f - u * l;
        if (h <= 0 && c >= 0 && u <= 0)
            return a = c / (c - u),
            t.copy(n).addScaledVector(ii, a);
        us.subVectors(e, s);
        const d = ii.dot(us)
          , g = ri.dot(us);
        if (g >= 0 && d <= g)
            return t.copy(s);
        const M = d * l - c * g;
        if (M <= 0 && l >= 0 && g <= 0)
            return o = l / (l - g),
            t.copy(n).addScaledVector(ri, o);
        const m = u * g - d * f;
        if (m <= 0 && f - u >= 0 && d - g >= 0)
            return Io.subVectors(s, r),
            o = (f - u) / (f - u + (d - g)),
            t.copy(r).addScaledVector(Io, o);
        const p = 1 / (m + M + h);
        return a = M * p,
        o = h * p,
        t.copy(n).addScaledVector(ii, a).addScaledVector(ri, o)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
class In {
    constructor(e=new U(1 / 0,1 / 0,1 / 0), t=new U(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3)
            this.expandByPoint(qt.fromArray(e, t));
        return this
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++)
            this.expandByPoint(qt.fromBufferAttribute(e, t));
        return this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = qt.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        const n = e.geometry;
        if (n !== void 0) {
            const s = n.getAttribute("position");
            if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
                for (let a = 0, o = s.count; a < o; a++)
                    e.isMesh === !0 ? e.getVertexPosition(a, qt) : qt.fromBufferAttribute(s, a),
                    qt.applyMatrix4(e.matrixWorld),
                    this.expandByPoint(qt);
            else
                e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(),
                sr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                sr.copy(n.boundingBox)),
                sr.applyMatrix4(e.matrixWorld),
                this.union(sr)
        }
        const r = e.children;
        for (let s = 0, a = r.length; s < a; s++)
            this.expandByObject(r[s], t);
        return this
    }
    containsPoint(e) {
        return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, qt),
        qt.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(Pi),
        ar.subVectors(this.max, Pi),
        si.subVectors(e.a, Pi),
        ai.subVectors(e.b, Pi),
        oi.subVectors(e.c, Pi),
        An.subVectors(ai, si),
        wn.subVectors(oi, ai),
        On.subVectors(si, oi);
        let t = [0, -An.z, An.y, 0, -wn.z, wn.y, 0, -On.z, On.y, An.z, 0, -An.x, wn.z, 0, -wn.x, On.z, 0, -On.x, -An.y, An.x, 0, -wn.y, wn.x, 0, -On.y, On.x, 0];
        return !ms(t, si, ai, oi, ar) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !ms(t, si, ai, oi, ar)) ? !1 : (or.crossVectors(An, wn),
        t = [or.x, or.y, or.z],
        ms(t, si, ai, oi, ar))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return this.clampPoint(e, qt).distanceTo(e)
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
        e.radius = this.getSize(qt).length() * .5),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(un),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
    toJSON() {
        return {
            min: this.min.toArray(),
            max: this.max.toArray()
        }
    }
    fromJSON(e) {
        return this.min.fromArray(e.min),
        this.max.fromArray(e.max),
        this
    }
}
const un = [new U, new U, new U, new U, new U, new U, new U, new U]
  , qt = new U
  , sr = new In
  , si = new U
  , ai = new U
  , oi = new U
  , An = new U
  , wn = new U
  , On = new U
  , Pi = new U
  , ar = new U
  , or = new U
  , Bn = new U;
function ms(i, e, t, n, r) {
    for (let s = 0, a = i.length - 3; s <= a; s += 3) {
        Bn.fromArray(i, s);
        const o = r.x * Math.abs(Bn.x) + r.y * Math.abs(Bn.y) + r.z * Math.abs(Bn.z)
          , c = e.dot(Bn)
          , l = t.dot(Bn)
          , u = n.dot(Bn);
        if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o)
            return !1
    }
    return !0
}
const ft = new U
  , lr = new Ge;
let Uh = 0;
class kt {
    constructor(e, t, n=!1) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        Object.defineProperty(this, "id", {
            value: Uh++
        }),
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.normalized = n,
        this.usage = Ra,
        this.updateRanges = [],
        this.gpuType = zt,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this.gpuType = e.gpuType,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let r = 0, s = this.itemSize; r < s; r++)
            this.array[e + r] = t.array[n + r];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++)
                lr.fromBufferAttribute(this, t),
                lr.applyMatrix3(e),
                this.setXY(t, lr.x, lr.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++)
                ft.fromBufferAttribute(this, t),
                ft.applyMatrix3(e),
                this.setXYZ(t, ft.x, ft.y, ft.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ft.fromBufferAttribute(this, t),
            ft.applyMatrix4(e),
            this.setXYZ(t, ft.x, ft.y, ft.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ft.fromBufferAttribute(this, t),
            ft.applyNormalMatrix(e),
            this.setXYZ(t, ft.x, ft.y, ft.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ft.fromBufferAttribute(this, t),
            ft.transformDirection(e),
            this.setXYZ(t, ft.x, ft.y, ft.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        return this.normalized && (n = Yt(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = Ze(n, this.array)),
        this.array[e * this.itemSize + t] = n,
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.normalized && (t = Ze(t, this.array),
        n = Ze(n, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, r) {
        return e *= this.itemSize,
        this.normalized && (t = Ze(t, this.array),
        n = Ze(n, this.array),
        r = Ze(r, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this
    }
    setXYZW(e, t, n, r, s) {
        return e *= this.itemSize,
        this.normalized && (t = Ze(t, this.array),
        n = Ze(n, this.array),
        r = Ze(r, this.array),
        s = Ze(s, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this.array[e + 3] = s,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name),
        this.usage !== Ra && (e.usage = this.usage),
        e
    }
}
class Kl extends kt {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class $l extends kt {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class Ct extends kt {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
const Nh = new In
  , Di = new U
  , gs = new U;
class Sn {
    constructor(e=new U, t=-1) {
        this.isSphere = !0,
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : Nh.setFromPoints(e).getCenter(n);
        let r = 0;
        for (let s = 0, a = e.length; s < a; s++)
            r = Math.max(r, n.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(r),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        Di.subVectors(e, this.center);
        const t = Di.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t)
              , r = (n - this.radius) * .5;
            this.center.addScaledVector(Di, r / n),
            this.radius += r
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (gs.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(Di.copy(e.center).add(gs)),
        this.expandByPoint(Di.copy(e.center).sub(gs))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        return {
            radius: this.radius,
            center: this.center.toArray()
        }
    }
    fromJSON(e) {
        return this.radius = e.radius,
        this.center.fromArray(e.center),
        this
    }
}
let Fh = 0;
const Ot = new Ve
  , _s = new ut
  , li = new U
  , It = new In
  , Li = new In
  , xt = new U;
class Gt extends bi {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: Fh++
        }),
        this.uuid = $t(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.indirect = null,
        this.indirectOffset = 0,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (eh(e) ? $l : Kl)(e,1) : this.index = e,
        this
    }
    setIndirect(e, t=0) {
        return this.indirect = e,
        this.indirectOffset = t,
        this
    }
    getIndirect() {
        return this.indirect
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const s = new Ie().getNormalMatrix(e);
            n.applyNormalMatrix(s),
            n.needsUpdate = !0
        }
        const r = this.attributes.tangent;
        return r !== void 0 && (r.transformDirection(e),
        r.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return Ot.makeRotationFromQuaternion(e),
        this.applyMatrix4(Ot),
        this
    }
    rotateX(e) {
        return Ot.makeRotationX(e),
        this.applyMatrix4(Ot),
        this
    }
    rotateY(e) {
        return Ot.makeRotationY(e),
        this.applyMatrix4(Ot),
        this
    }
    rotateZ(e) {
        return Ot.makeRotationZ(e),
        this.applyMatrix4(Ot),
        this
    }
    translate(e, t, n) {
        return Ot.makeTranslation(e, t, n),
        this.applyMatrix4(Ot),
        this
    }
    scale(e, t, n) {
        return Ot.makeScale(e, t, n),
        this.applyMatrix4(Ot),
        this
    }
    lookAt(e) {
        return _s.lookAt(e),
        _s.updateMatrix(),
        this.applyMatrix4(_s.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(li).negate(),
        this.translate(li.x, li.y, li.z),
        this
    }
    setFromPoints(e) {
        const t = this.getAttribute("position");
        if (t === void 0) {
            const n = [];
            for (let r = 0, s = e.length; r < s; r++) {
                const a = e[r];
                n.push(a.x, a.y, a.z || 0)
            }
            this.setAttribute("position", new Ct(n,3))
        } else {
            const n = Math.min(e.length, t.count);
            for (let r = 0; r < n; r++) {
                const s = e[r];
                t.setXYZ(r, s.x, s.y, s.z || 0)
            }
            e.length > t.count && be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
            t.needsUpdate = !0
        }
        return this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new In);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new U(-1 / 0,-1 / 0,-1 / 0), new U(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let n = 0, r = t.length; n < r; n++) {
                    const s = t[n];
                    It.setFromBufferAttribute(s),
                    this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, It.min),
                    this.boundingBox.expandByPoint(xt),
                    xt.addVectors(this.boundingBox.max, It.max),
                    this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(It.min),
                    this.boundingBox.expandByPoint(It.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new Sn);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new U, 1 / 0);
            return
        }
        if (e) {
            const n = this.boundingSphere.center;
            if (It.setFromBufferAttribute(e),
            t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s];
                    Li.setFromBufferAttribute(o),
                    this.morphTargetsRelative ? (xt.addVectors(It.min, Li.min),
                    It.expandByPoint(xt),
                    xt.addVectors(It.max, Li.max),
                    It.expandByPoint(xt)) : (It.expandByPoint(Li.min),
                    It.expandByPoint(Li.max))
                }
            It.getCenter(n);
            let r = 0;
            for (let s = 0, a = e.count; s < a; s++)
                xt.fromBufferAttribute(e, s),
                r = Math.max(r, n.distanceToSquared(xt));
            if (t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s]
                      , c = this.morphTargetsRelative;
                    for (let l = 0, u = o.count; l < u; l++)
                        xt.fromBufferAttribute(o, l),
                        c && (li.fromBufferAttribute(e, l),
                        xt.add(li)),
                        r = Math.max(r, n.distanceToSquared(xt))
                }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = t.position
          , r = t.normal
          , s = t.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new kt(new Float32Array(4 * n.count),4));
        const a = this.getAttribute("tangent")
          , o = []
          , c = [];
        for (let x = 0; x < n.count; x++)
            o[x] = new U,
            c[x] = new U;
        const l = new U
          , u = new U
          , f = new U
          , h = new Ge
          , d = new Ge
          , g = new Ge
          , M = new U
          , m = new U;
        function p(x, y, W) {
            l.fromBufferAttribute(n, x),
            u.fromBufferAttribute(n, y),
            f.fromBufferAttribute(n, W),
            h.fromBufferAttribute(s, x),
            d.fromBufferAttribute(s, y),
            g.fromBufferAttribute(s, W),
            u.sub(l),
            f.sub(l),
            d.sub(h),
            g.sub(h);
            const w = 1 / (d.x * g.y - g.x * d.y);
            isFinite(w) && (M.copy(u).multiplyScalar(g.y).addScaledVector(f, -d.y).multiplyScalar(w),
            m.copy(f).multiplyScalar(d.x).addScaledVector(u, -g.x).multiplyScalar(w),
            o[x].add(M),
            o[y].add(M),
            o[W].add(M),
            c[x].add(m),
            c[y].add(m),
            c[W].add(m))
        }
        let S = this.groups;
        S.length === 0 && (S = [{
            start: 0,
            count: e.count
        }]);
        for (let x = 0, y = S.length; x < y; ++x) {
            const W = S[x]
              , w = W.start
              , N = W.count;
            for (let F = w, k = w + N; F < k; F += 3)
                p(e.getX(F + 0), e.getX(F + 1), e.getX(F + 2))
        }
        const T = new U
          , E = new U
          , R = new U
          , A = new U;
        function P(x) {
            R.fromBufferAttribute(r, x),
            A.copy(R);
            const y = o[x];
            T.copy(y),
            T.sub(R.multiplyScalar(R.dot(y))).normalize(),
            E.crossVectors(A, y);
            const w = E.dot(c[x]) < 0 ? -1 : 1;
            a.setXYZW(x, T.x, T.y, T.z, w)
        }
        for (let x = 0, y = S.length; x < y; ++x) {
            const W = S[x]
              , w = W.start
              , N = W.count;
            for (let F = w, k = w + N; F < k; F += 3)
                P(e.getX(F + 0)),
                P(e.getX(F + 1)),
                P(e.getX(F + 2))
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new kt(new Float32Array(t.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let h = 0, d = n.count; h < d; h++)
                    n.setXYZ(h, 0, 0, 0);
            const r = new U
              , s = new U
              , a = new U
              , o = new U
              , c = new U
              , l = new U
              , u = new U
              , f = new U;
            if (e)
                for (let h = 0, d = e.count; h < d; h += 3) {
                    const g = e.getX(h + 0)
                      , M = e.getX(h + 1)
                      , m = e.getX(h + 2);
                    r.fromBufferAttribute(t, g),
                    s.fromBufferAttribute(t, M),
                    a.fromBufferAttribute(t, m),
                    u.subVectors(a, s),
                    f.subVectors(r, s),
                    u.cross(f),
                    o.fromBufferAttribute(n, g),
                    c.fromBufferAttribute(n, M),
                    l.fromBufferAttribute(n, m),
                    o.add(u),
                    c.add(u),
                    l.add(u),
                    n.setXYZ(g, o.x, o.y, o.z),
                    n.setXYZ(M, c.x, c.y, c.z),
                    n.setXYZ(m, l.x, l.y, l.z)
                }
            else
                for (let h = 0, d = t.count; h < d; h += 3)
                    r.fromBufferAttribute(t, h + 0),
                    s.fromBufferAttribute(t, h + 1),
                    a.fromBufferAttribute(t, h + 2),
                    u.subVectors(a, s),
                    f.subVectors(r, s),
                    u.cross(f),
                    n.setXYZ(h + 0, u.x, u.y, u.z),
                    n.setXYZ(h + 1, u.x, u.y, u.z),
                    n.setXYZ(h + 2, u.x, u.y, u.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            xt.fromBufferAttribute(e, t),
            xt.normalize(),
            e.setXYZ(t, xt.x, xt.y, xt.z)
    }
    toNonIndexed() {
        function e(o, c) {
            const l = o.array
              , u = o.itemSize
              , f = o.normalized
              , h = new l.constructor(c.length * u);
            let d = 0
              , g = 0;
            for (let M = 0, m = c.length; M < m; M++) {
                o.isInterleavedBufferAttribute ? d = c[M] * o.data.stride + o.offset : d = c[M] * u;
                for (let p = 0; p < u; p++)
                    h[g++] = l[d++]
            }
            return new kt(h,u,f)
        }
        if (this.index === null)
            return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new Gt
          , n = this.index.array
          , r = this.attributes;
        for (const o in r) {
            const c = r[o]
              , l = e(c, n);
            t.setAttribute(o, l)
        }
        const s = this.morphAttributes;
        for (const o in s) {
            const c = []
              , l = s[o];
            for (let u = 0, f = l.length; u < f; u++) {
                const h = l[u]
                  , d = e(h, n);
                c.push(d)
            }
            t.morphAttributes[o] = c
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let o = 0, c = a.length; o < c; o++) {
            const l = a[o];
            t.addGroup(l.start, l.count, l.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.7,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            const c = this.parameters;
            for (const l in c)
                c[l] !== void 0 && (e[l] = c[l]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const c in n) {
            const l = n[c];
            e.data.attributes[c] = l.toJSON(e.data)
        }
        const r = {};
        let s = !1;
        for (const c in this.morphAttributes) {
            const l = this.morphAttributes[c]
              , u = [];
            for (let f = 0, h = l.length; f < h; f++) {
                const d = l[f];
                u.push(d.toJSON(e.data))
            }
            u.length > 0 && (r[c] = u,
            s = !0)
        }
        s && (e.data.morphAttributes = r,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = o.toJSON()),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone());
        const r = e.attributes;
        for (const l in r) {
            const u = r[l];
            this.setAttribute(l, u.clone(t))
        }
        const s = e.morphAttributes;
        for (const l in s) {
            const u = []
              , f = s[l];
            for (let h = 0, d = f.length; h < d; h++)
                u.push(f[h].clone(t));
            this.morphAttributes[l] = u
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let l = 0, u = a.length; l < u; l++) {
            const f = a[l];
            this.addGroup(f.start, f.count, f.materialIndex)
        }
        const o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        const c = e.boundingSphere;
        return c !== null && (this.boundingSphere = c.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Fg {
    constructor(e, t) {
        this.isInterleavedBuffer = !0,
        this.array = e,
        this.stride = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.usage = Ra,
        this.updateRanges = [],
        this.version = 0,
        this.uuid = $t()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array),
        this.count = e.count,
        this.stride = e.stride,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.stride,
        n *= t.stride;
        for (let r = 0, s = this.stride; r < s; r++)
            this.array[e + r] = t.array[n + r];
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = $t()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid])
          , n = new this.constructor(t,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = $t()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
const Tt = new U;
class Zl {
    constructor(e, t, n, r=!1) {
        this.isInterleavedBufferAttribute = !0,
        this.name = "",
        this.data = e,
        this.itemSize = t,
        this.offset = n,
        this.normalized = r
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++)
            Tt.fromBufferAttribute(this, t),
            Tt.applyMatrix4(e),
            this.setXYZ(t, Tt.x, Tt.y, Tt.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Tt.fromBufferAttribute(this, t),
            Tt.applyNormalMatrix(e),
            this.setXYZ(t, Tt.x, Tt.y, Tt.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Tt.fromBufferAttribute(this, t),
            Tt.transformDirection(e),
            this.setXYZ(t, Tt.x, Tt.y, Tt.z);
        return this
    }
    getComponent(e, t) {
        let n = this.array[e * this.data.stride + this.offset + t];
        return this.normalized && (n = Yt(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = Ze(n, this.array)),
        this.data.array[e * this.data.stride + this.offset + t] = n,
        this
    }
    setX(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.data.array[e * this.data.stride + this.offset] = t,
        this
    }
    setY(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    }
    setZ(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    }
    setW(e, t) {
        return this.normalized && (t = Ze(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    }
    getX(e) {
        let t = this.data.array[e * this.data.stride + this.offset];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    getY(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 1];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    getZ(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 2];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    getW(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 3];
        return this.normalized && (t = Yt(t, this.array)),
        t
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = Ze(t, this.array),
        n = Ze(n, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, r) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = Ze(t, this.array),
        n = Ze(n, this.array),
        r = Ze(r, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = r,
        this
    }
    setXYZW(e, t, n, r, s) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = Ze(t, this.array),
        n = Ze(n, this.array),
        r = Ze(r, this.array),
        s = Ze(s, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = r,
        this.data.array[e + 3] = s,
        this
    }
    clone(e) {
        if (e === void 0) {
            zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const r = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++)
                    t.push(this.data.array[r + s])
            }
            return new kt(new this.array.constructor(t),this.itemSize,this.normalized)
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
            new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(e) {
        if (e === void 0) {
            zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const r = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++)
                    t.push(this.data.array[r + s])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
    }
}
let Oh = 0;
class Un extends bi {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: Oh++
        }),
        this.uuid = $t(),
        this.name = "",
        this.type = "Material",
        this.blending = pi,
        this.side = Ln,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = Bs,
        this.blendDst = zs,
        this.blendEquation = Wn,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new ke(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = gi,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = vo,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = Jn,
        this.stencilZFail = Jn,
        this.stencilZPass = Jn,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.allowOverride = !0,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    be(`Material: parameter '${t}' has value of undefined.`);
                    continue
                }
                const r = this[t];
                if (r === void 0) {
                    be(`Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue
                }
                r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.7,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
        this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== pi && (n.blending = this.blending),
        this.side !== Ln && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== Bs && (n.blendSrc = this.blendSrc),
        this.blendDst !== zs && (n.blendDst = this.blendDst),
        this.blendEquation !== Wn && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== gi && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== vo && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== Jn && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== Jn && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== Jn && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.allowOverride === !1 && (n.allowOverride = !1),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function r(s) {
            const a = [];
            for (const o in s) {
                const c = s[o];
                delete c.metadata,
                a.push(c)
            }
            return a
        }
        if (t) {
            const s = r(e.textures)
              , a = r(e.images);
            s.length > 0 && (n.textures = s),
            a.length > 0 && (n.images = a)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.blendColor.copy(e.blendColor),
        this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const r = t.length;
            n = new Array(r);
            for (let s = 0; s !== r; ++s)
                n[s] = t[s].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaHash = e.alphaHash,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.allowOverride = e.allowOverride,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
const dn = new U
  , xs = new U
  , cr = new U
  , Rn = new U
  , vs = new U
  , hr = new U
  , Ms = new U;
class Ki {
    constructor(e=new U, t=new U(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, dn)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = dn.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (dn.copy(this.origin).addScaledVector(this.direction, t),
        dn.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, r) {
        xs.copy(e).add(t).multiplyScalar(.5),
        cr.copy(t).sub(e).normalize(),
        Rn.copy(this.origin).sub(xs);
        const s = e.distanceTo(t) * .5
          , a = -this.direction.dot(cr)
          , o = Rn.dot(this.direction)
          , c = -Rn.dot(cr)
          , l = Rn.lengthSq()
          , u = Math.abs(1 - a * a);
        let f, h, d, g;
        if (u > 0)
            if (f = a * c - o,
            h = a * o - c,
            g = s * u,
            f >= 0)
                if (h >= -g)
                    if (h <= g) {
                        const M = 1 / u;
                        f *= M,
                        h *= M,
                        d = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * c) + l
                    } else
                        h = s,
                        f = Math.max(0, -(a * h + o)),
                        d = -f * f + h * (h + 2 * c) + l;
                else
                    h = -s,
                    f = Math.max(0, -(a * h + o)),
                    d = -f * f + h * (h + 2 * c) + l;
            else
                h <= -g ? (f = Math.max(0, -(-a * s + o)),
                h = f > 0 ? -s : Math.min(Math.max(-s, -c), s),
                d = -f * f + h * (h + 2 * c) + l) : h <= g ? (f = 0,
                h = Math.min(Math.max(-s, -c), s),
                d = h * (h + 2 * c) + l) : (f = Math.max(0, -(a * s + o)),
                h = f > 0 ? s : Math.min(Math.max(-s, -c), s),
                d = -f * f + h * (h + 2 * c) + l);
        else
            h = a > 0 ? -s : s,
            f = Math.max(0, -(a * h + o)),
            d = -f * f + h * (h + 2 * c) + l;
        return n && n.copy(this.origin).addScaledVector(this.direction, f),
        r && r.copy(xs).addScaledVector(cr, h),
        d
    }
    intersectSphere(e, t) {
        dn.subVectors(e.center, this.origin);
        const n = dn.dot(this.direction)
          , r = dn.dot(dn) - n * n
          , s = e.radius * e.radius;
        if (r > s)
            return null;
        const a = Math.sqrt(s - r)
          , o = n - a
          , c = n + a;
        return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t)
    }
    intersectsSphere(e) {
        return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, r, s, a, o, c;
        const l = 1 / this.direction.x
          , u = 1 / this.direction.y
          , f = 1 / this.direction.z
          , h = this.origin;
        return l >= 0 ? (n = (e.min.x - h.x) * l,
        r = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l,
        r = (e.min.x - h.x) * l),
        u >= 0 ? (s = (e.min.y - h.y) * u,
        a = (e.max.y - h.y) * u) : (s = (e.max.y - h.y) * u,
        a = (e.min.y - h.y) * u),
        n > a || s > r || ((s > n || isNaN(n)) && (n = s),
        (a < r || isNaN(r)) && (r = a),
        f >= 0 ? (o = (e.min.z - h.z) * f,
        c = (e.max.z - h.z) * f) : (o = (e.max.z - h.z) * f,
        c = (e.min.z - h.z) * f),
        n > c || o > r) || ((o > n || n !== n) && (n = o),
        (c < r || r !== r) && (r = c),
        r < 0) ? null : this.at(n >= 0 ? n : r, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, dn) !== null
    }
    intersectTriangle(e, t, n, r, s) {
        vs.subVectors(t, e),
        hr.subVectors(n, e),
        Ms.crossVectors(vs, hr);
        let a = this.direction.dot(Ms), o;
        if (a > 0) {
            if (r)
                return null;
            o = 1
        } else if (a < 0)
            o = -1,
            a = -a;
        else
            return null;
        Rn.subVectors(this.origin, e);
        const c = o * this.direction.dot(hr.crossVectors(Rn, hr));
        if (c < 0)
            return null;
        const l = o * this.direction.dot(vs.cross(Rn));
        if (l < 0 || c + l > a)
            return null;
        const u = -o * Rn.dot(Ms);
        return u < 0 ? null : this.at(u / a, s)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class jl extends Un {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new ke(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new sn,
        this.combine = Pl,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
const Uo = new Ve
  , zn = new Ki
  , ur = new Sn
  , No = new U
  , dr = new U
  , fr = new U
  , pr = new U
  , Ss = new U
  , mr = new U
  , Fo = new U
  , gr = new U;
class Pt extends ut {
    constructor(e=new Gt, t=new jl) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.count = 1,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = r.length; s < a; s++) {
                    const o = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
    getVertexPosition(e, t) {
        const n = this.geometry
          , r = n.attributes.position
          , s = n.morphAttributes.position
          , a = n.morphTargetsRelative;
        t.fromBufferAttribute(r, e);
        const o = this.morphTargetInfluences;
        if (s && o) {
            mr.set(0, 0, 0);
            for (let c = 0, l = s.length; c < l; c++) {
                const u = o[c]
                  , f = s[c];
                u !== 0 && (Ss.fromBufferAttribute(f, e),
                a ? mr.addScaledVector(Ss, u) : mr.addScaledVector(Ss.sub(t), u))
            }
            t.add(mr)
        }
        return t
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.material
          , s = this.matrixWorld;
        r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        ur.copy(n.boundingSphere),
        ur.applyMatrix4(s),
        zn.copy(e.ray).recast(e.near),
        !(ur.containsPoint(zn.origin) === !1 && (zn.intersectSphere(ur, No) === null || zn.origin.distanceToSquared(No) > (e.far - e.near) ** 2)) && (Uo.copy(s).invert(),
        zn.copy(e.ray).applyMatrix4(Uo),
        !(n.boundingBox !== null && zn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, zn)))
    }
    _computeIntersections(e, t, n) {
        let r;
        const s = this.geometry
          , a = this.material
          , o = s.index
          , c = s.attributes.position
          , l = s.attributes.uv
          , u = s.attributes.uv1
          , f = s.attributes.normal
          , h = s.groups
          , d = s.drawRange;
        if (o !== null)
            if (Array.isArray(a))
                for (let g = 0, M = h.length; g < M; g++) {
                    const m = h[g]
                      , p = a[m.materialIndex]
                      , S = Math.max(m.start, d.start)
                      , T = Math.min(o.count, Math.min(m.start + m.count, d.start + d.count));
                    for (let E = S, R = T; E < R; E += 3) {
                        const A = o.getX(E)
                          , P = o.getX(E + 1)
                          , x = o.getX(E + 2);
                        r = _r(this, p, e, n, l, u, f, A, P, x),
                        r && (r.faceIndex = Math.floor(E / 3),
                        r.face.materialIndex = m.materialIndex,
                        t.push(r))
                    }
                }
            else {
                const g = Math.max(0, d.start)
                  , M = Math.min(o.count, d.start + d.count);
                for (let m = g, p = M; m < p; m += 3) {
                    const S = o.getX(m)
                      , T = o.getX(m + 1)
                      , E = o.getX(m + 2);
                    r = _r(this, a, e, n, l, u, f, S, T, E),
                    r && (r.faceIndex = Math.floor(m / 3),
                    t.push(r))
                }
            }
        else if (c !== void 0)
            if (Array.isArray(a))
                for (let g = 0, M = h.length; g < M; g++) {
                    const m = h[g]
                      , p = a[m.materialIndex]
                      , S = Math.max(m.start, d.start)
                      , T = Math.min(c.count, Math.min(m.start + m.count, d.start + d.count));
                    for (let E = S, R = T; E < R; E += 3) {
                        const A = E
                          , P = E + 1
                          , x = E + 2;
                        r = _r(this, p, e, n, l, u, f, A, P, x),
                        r && (r.faceIndex = Math.floor(E / 3),
                        r.face.materialIndex = m.materialIndex,
                        t.push(r))
                    }
                }
            else {
                const g = Math.max(0, d.start)
                  , M = Math.min(c.count, d.start + d.count);
                for (let m = g, p = M; m < p; m += 3) {
                    const S = m
                      , T = m + 1
                      , E = m + 2;
                    r = _r(this, a, e, n, l, u, f, S, T, E),
                    r && (r.faceIndex = Math.floor(m / 3),
                    t.push(r))
                }
            }
    }
}
function Bh(i, e, t, n, r, s, a, o) {
    let c;
    if (e.side === Rt ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, e.side === Ln, o),
    c === null)
        return null;
    gr.copy(o),
    gr.applyMatrix4(i.matrixWorld);
    const l = t.ray.origin.distanceTo(gr);
    return l < t.near || l > t.far ? null : {
        distance: l,
        point: gr.clone(),
        object: i
    }
}
function _r(i, e, t, n, r, s, a, o, c, l) {
    i.getVertexPosition(o, dr),
    i.getVertexPosition(c, fr),
    i.getVertexPosition(l, pr);
    const u = Bh(i, e, t, n, dr, fr, pr, Fo);
    if (u) {
        const f = new U;
        Kt.getBarycoord(Fo, dr, fr, pr, f),
        r && (u.uv = Kt.getInterpolatedAttribute(r, o, c, l, f, new Ge)),
        s && (u.uv1 = Kt.getInterpolatedAttribute(s, o, c, l, f, new Ge)),
        a && (u.normal = Kt.getInterpolatedAttribute(a, o, c, l, f, new U),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
        const h = {
            a: o,
            b: c,
            c: l,
            normal: new U,
            materialIndex: 0
        };
        Kt.getNormal(dr, fr, pr, h.normal),
        u.face = h,
        u.barycoord = f
    }
    return u
}
const Oo = new U
  , Bo = new st
  , zo = new st
  , zh = new U
  , Vo = new Ve
  , xr = new U
  , ys = new Sn
  , ko = new Ve
  , bs = new Ki;
class Og extends Pt {
    constructor(e, t) {
        super(e, t),
        this.isSkinnedMesh = !0,
        this.type = "SkinnedMesh",
        this.bindMode = po,
        this.bindMatrix = new Ve,
        this.bindMatrixInverse = new Ve,
        this.boundingBox = null,
        this.boundingSphere = null
    }
    computeBoundingBox() {
        const e = this.geometry;
        this.boundingBox === null && (this.boundingBox = new In),
        this.boundingBox.makeEmpty();
        const t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, xr),
            this.boundingBox.expandByPoint(xr)
    }
    computeBoundingSphere() {
        const e = this.geometry;
        this.boundingSphere === null && (this.boundingSphere = new Sn),
        this.boundingSphere.makeEmpty();
        const t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, xr),
            this.boundingSphere.expandByPoint(xr)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.bindMode = e.bindMode,
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        this.skeleton = e.skeleton,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    raycast(e, t) {
        const n = this.material
          , r = this.matrixWorld;
        n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        ys.copy(this.boundingSphere),
        ys.applyMatrix4(r),
        e.ray.intersectsSphere(ys) !== !1 && (ko.copy(r).invert(),
        bs.copy(e.ray).applyMatrix4(ko),
        !(this.boundingBox !== null && bs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, bs)))
    }
    getVertexPosition(e, t) {
        return super.getVertexPosition(e, t),
        this.applyBoneTransform(e, t),
        t
    }
    bind(e, t) {
        this.skeleton = e,
        t === void 0 && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new st
          , t = this.geometry.attributes.skinWeight;
        for (let n = 0, r = t.count; n < r; n++) {
            e.fromBufferAttribute(t, n);
            const s = 1 / e.manhattanLength();
            s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
            t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.bindMode === po ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Hc ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : be("SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    applyBoneTransform(e, t) {
        const n = this.skeleton
          , r = this.geometry;
        Bo.fromBufferAttribute(r.attributes.skinIndex, e),
        zo.fromBufferAttribute(r.attributes.skinWeight, e),
        Oo.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
        for (let s = 0; s < 4; s++) {
            const a = zo.getComponent(s);
            if (a !== 0) {
                const o = Bo.getComponent(s);
                Vo.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
                t.addScaledVector(zh.copy(Oo).applyMatrix4(Vo), a)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
class Vh extends ut {
    constructor() {
        super(),
        this.isBone = !0,
        this.type = "Bone"
    }
}
class Ya extends St {
    constructor(e=null, t=1, n=1, r, s, a, o, c, l=Mt, u=Mt, f, h) {
        super(null, a, o, c, l, u, r, s, f, h),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
const Go = new Ve
  , kh = new Ve;
class Jl {
    constructor(e=[], t=[]) {
        this.uuid = $t(),
        this.bones = e.slice(0),
        this.boneInverses = t,
        this.boneMatrices = null,
        this.previousBoneMatrices = null,
        this.boneTexture = null,
        this.init()
    }
    init() {
        const e = this.bones
          , t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16),
        t.length === 0)
            this.calculateInverses();
        else if (e.length !== t.length) {
            be("Skeleton: Number of inverse bone matrices does not match amount of bones."),
            this.boneInverses = [];
            for (let n = 0, r = this.bones.length; n < r; n++)
                this.boneInverses.push(new Ve)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = new Ve;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
            this.boneInverses.push(n)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld),
            n.matrix.decompose(n.position, n.quaternion, n.scale))
        }
    }
    update() {
        const e = this.bones
          , t = this.boneInverses
          , n = this.boneMatrices
          , r = this.boneTexture;
        for (let s = 0, a = e.length; s < a; s++) {
            const o = e[s] ? e[s].matrixWorld : kh;
            Go.multiplyMatrices(o, t[s]),
            Go.toArray(n, s * 16)
        }
        r !== null && (r.needsUpdate = !0)
    }
    clone() {
        return new Jl(this.bones,this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = Math.ceil(e / 4) * 4,
        e = Math.max(e, 4);
        const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        const n = new Ya(t,e,e,Vt,zt);
        return n.needsUpdate = !0,
        this.boneMatrices = t,
        this.boneTexture = n,
        this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const r = this.bones[t];
            if (r.name === e)
                return r
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(),
        this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, r = e.bones.length; n < r; n++) {
            const s = e.bones[n];
            let a = t[s];
            a === void 0 && (be("Skeleton: No bone found with UUID:", s),
            a = new Vh),
            this.bones.push(a),
            this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))
        }
        return this.init(),
        this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.7,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones
          , n = this.boneInverses;
        for (let r = 0, s = t.length; r < s; r++) {
            const a = t[r];
            e.bones.push(a.uuid);
            const o = n[r];
            e.boneInverses.push(o.toArray())
        }
        return e
    }
}
class Ho extends kt {
    constructor(e, t, n, r=1) {
        super(e, t, n),
        this.isInstancedBufferAttribute = !0,
        this.meshPerAttribute = r
    }
    copy(e) {
        return super.copy(e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    toJSON() {
        const e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute,
        e.isInstancedBufferAttribute = !0,
        e
    }
}
const ci = new Ve
  , Wo = new Ve
  , vr = []
  , Xo = new In
  , Gh = new Ve
  , Ii = new Pt
  , Ui = new Sn;
class Bg extends Pt {
    constructor(e, t, n) {
        super(e, t),
        this.isInstancedMesh = !0,
        this.instanceMatrix = new Ho(new Float32Array(n * 16),16),
        this.previousInstanceMatrix = null,
        this.instanceColor = null,
        this.morphTexture = null,
        this.count = n,
        this.boundingBox = null,
        this.boundingSphere = null;
        for (let r = 0; r < n; r++)
            this.setMatrixAt(r, Gh)
    }
    computeBoundingBox() {
        const e = this.geometry
          , t = this.count;
        this.boundingBox === null && (this.boundingBox = new In),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, ci),
            Xo.copy(e.boundingBox).applyMatrix4(ci),
            this.boundingBox.union(Xo)
    }
    computeBoundingSphere() {
        const e = this.geometry
          , t = this.count;
        this.boundingSphere === null && (this.boundingSphere = new Sn),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, ci),
            Ui.copy(e.boundingSphere).applyMatrix4(ci),
            this.boundingSphere.union(Ui)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.previousInstanceMatrix !== null && (this.previousInstanceMatrix = e.previousInstanceMatrix.clone()),
        e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
        e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()),
        this.count = e.count,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16)
    }
    getMorphAt(e, t) {
        const n = t.morphTargetInfluences
          , r = this.morphTexture.source.data.data
          , s = n.length + 1
          , a = e * s + 1;
        for (let o = 0; o < n.length; o++)
            n[o] = r[a + o]
    }
    raycast(e, t) {
        const n = this.matrixWorld
          , r = this.count;
        if (Ii.geometry = this.geometry,
        Ii.material = this.material,
        Ii.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        Ui.copy(this.boundingSphere),
        Ui.applyMatrix4(n),
        e.ray.intersectsSphere(Ui) !== !1))
            for (let s = 0; s < r; s++) {
                this.getMatrixAt(s, ci),
                Wo.multiplyMatrices(n, ci),
                Ii.matrixWorld = Wo,
                Ii.raycast(e, vr);
                for (let a = 0, o = vr.length; a < o; a++) {
                    const c = vr[a];
                    c.instanceId = s,
                    c.object = this,
                    t.push(c)
                }
                vr.length = 0
            }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new Ho(new Float32Array(this.instanceMatrix.count * 3).fill(1),3)),
        t.toArray(this.instanceColor.array, e * 3)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16)
    }
    setMorphAt(e, t) {
        const n = t.morphTargetInfluences
          , r = n.length + 1;
        this.morphTexture === null && (this.morphTexture = new Ya(new Float32Array(r * this.count),r,this.count,Oa,zt));
        const s = this.morphTexture.source.data.data;
        let a = 0;
        for (let l = 0; l < n.length; l++)
            a += n[l];
        const o = this.geometry.morphTargetsRelative ? 1 : 1 - a
          , c = r * e;
        s[c] = o,
        s.set(n, c + 1)
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        }),
        this.morphTexture !== null && (this.morphTexture.dispose(),
        this.morphTexture = null)
    }
}
const Es = new U
  , Hh = new U
  , Wh = new Ie;
class Hn {
    constructor(e=new U(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, r) {
        return this.normal.set(e, t, n),
        this.constant = r,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        const r = Es.subVectors(n, t).cross(Hh.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
    }
    intersectLine(e, t) {
        const n = e.delta(Es)
          , r = this.normal.dot(n);
        if (r === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / r;
        return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || Wh.getNormalMatrix(e)
          , r = this.coplanarPoint(Es).applyMatrix4(e)
          , s = this.normal.applyMatrix3(n).normalize();
        return this.constant = -r.dot(s),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Vn = new Sn
  , Xh = new Ge(.5,.5)
  , Mr = new U;
class Ka {
    constructor(e=new Hn, t=new Hn, n=new Hn, r=new Hn, s=new Hn, a=new Hn) {
        this.planes = [e, t, n, r, s, a]
    }
    set(e, t, n, r, s, a) {
        const o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(s),
        o[5].copy(a),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e, t=tn, n=!1) {
        const r = this.planes
          , s = e.elements
          , a = s[0]
          , o = s[1]
          , c = s[2]
          , l = s[3]
          , u = s[4]
          , f = s[5]
          , h = s[6]
          , d = s[7]
          , g = s[8]
          , M = s[9]
          , m = s[10]
          , p = s[11]
          , S = s[12]
          , T = s[13]
          , E = s[14]
          , R = s[15];
        if (r[0].setComponents(l - a, d - u, p - g, R - S).normalize(),
        r[1].setComponents(l + a, d + u, p + g, R + S).normalize(),
        r[2].setComponents(l + o, d + f, p + M, R + T).normalize(),
        r[3].setComponents(l - o, d - f, p - M, R - T).normalize(),
        n)
            r[4].setComponents(c, h, m, E).normalize(),
            r[5].setComponents(l - c, d - h, p - m, R - E).normalize();
        else if (r[4].setComponents(l - c, d - h, p - m, R - E).normalize(),
        t === tn)
            r[5].setComponents(l + c, d + h, p + m, R + E).normalize();
        else if (t === Wi)
            r[5].setComponents(c, h, m, E).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
        return this
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0)
            e.boundingSphere === null && e.computeBoundingSphere(),
            Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            const t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(),
            Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
        }
        return this.intersectsSphere(Vn)
    }
    intersectsSprite(e) {
        Vn.center.set(0, 0, 0);
        const t = Xh.distanceTo(e.center);
        return Vn.radius = .7071067811865476 + t,
        Vn.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Vn)
    }
    intersectsSphere(e) {
        const t = this.planes
          , n = e.center
          , r = -e.radius;
        for (let s = 0; s < 6; s++)
            if (t[s].distanceToPoint(n) < r)
                return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const r = t[n];
            if (Mr.x = r.normal.x > 0 ? e.max.x : e.min.x,
            Mr.y = r.normal.y > 0 ? e.max.y : e.min.y,
            Mr.z = r.normal.z > 0 ? e.max.z : e.min.z,
            r.distanceToPoint(Mr) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class qh extends Un {
    constructor(e) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = "LineBasicMaterial",
        this.color = new ke(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this.fog = e.fog,
        this
    }
}
const kr = new U
  , Gr = new U
  , qo = new Ve
  , Ni = new Ki
  , Sr = new Sn
  , Ts = new U
  , Yo = new U;
class Ql extends ut {
    constructor(e=new Gt, t=new qh) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.index === null) {
            const t = e.attributes.position
              , n = [0];
            for (let r = 1, s = t.count; r < s; r++)
                kr.fromBufferAttribute(t, r - 1),
                Gr.fromBufferAttribute(t, r),
                n[r] = n[r - 1],
                n[r] += kr.distanceTo(Gr);
            e.setAttribute("lineDistance", new Ct(n,1))
        } else
            be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.matrixWorld
          , s = e.params.Line.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        Sr.copy(n.boundingSphere),
        Sr.applyMatrix4(r),
        Sr.radius += s,
        e.ray.intersectsSphere(Sr) === !1)
            return;
        qo.copy(r).invert(),
        Ni.copy(e.ray).applyMatrix4(qo);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , c = o * o
          , l = this.isLineSegments ? 2 : 1
          , u = n.index
          , h = n.attributes.position;
        if (u !== null) {
            const d = Math.max(0, a.start)
              , g = Math.min(u.count, a.start + a.count);
            for (let M = d, m = g - 1; M < m; M += l) {
                const p = u.getX(M)
                  , S = u.getX(M + 1)
                  , T = yr(this, e, Ni, c, p, S, M);
                T && t.push(T)
            }
            if (this.isLineLoop) {
                const M = u.getX(g - 1)
                  , m = u.getX(d)
                  , p = yr(this, e, Ni, c, M, m, g - 1);
                p && t.push(p)
            }
        } else {
            const d = Math.max(0, a.start)
              , g = Math.min(h.count, a.start + a.count);
            for (let M = d, m = g - 1; M < m; M += l) {
                const p = yr(this, e, Ni, c, M, M + 1, M);
                p && t.push(p)
            }
            if (this.isLineLoop) {
                const M = yr(this, e, Ni, c, g - 1, d, g - 1);
                M && t.push(M)
            }
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = r.length; s < a; s++) {
                    const o = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
}
function yr(i, e, t, n, r, s, a) {
    const o = i.geometry.attributes.position;
    if (kr.fromBufferAttribute(o, r),
    Gr.fromBufferAttribute(o, s),
    t.distanceSqToSegment(kr, Gr, Ts, Yo) > n)
        return;
    Ts.applyMatrix4(i.matrixWorld);
    const l = e.ray.origin.distanceTo(Ts);
    if (!(l < e.near || l > e.far))
        return {
            distance: l,
            point: Yo.clone().applyMatrix4(i.matrixWorld),
            index: a,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: i
        }
}
const Ko = new U
  , $o = new U;
class zg extends Ql {
    constructor(e, t) {
        super(e, t),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.index === null) {
            const t = e.attributes.position
              , n = [];
            for (let r = 0, s = t.count; r < s; r += 2)
                Ko.fromBufferAttribute(t, r),
                $o.fromBufferAttribute(t, r + 1),
                n[r] = r === 0 ? 0 : n[r - 1],
                n[r + 1] = n[r] + Ko.distanceTo($o);
            e.setAttribute("lineDistance", new Ct(n,1))
        } else
            be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
class Vg extends Ql {
    constructor(e, t) {
        super(e, t),
        this.isLineLoop = !0,
        this.type = "LineLoop"
    }
}
class Yh extends Un {
    constructor(e) {
        super(),
        this.isPointsMaterial = !0,
        this.type = "PointsMaterial",
        this.color = new ke(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
const Zo = new Ve
  , Ca = new Ki
  , br = new Sn
  , Er = new U;
class kg extends ut {
    constructor(e=new Gt, t=new Yh) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.matrixWorld
          , s = e.params.Points.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        br.copy(n.boundingSphere),
        br.applyMatrix4(r),
        br.radius += s,
        e.ray.intersectsSphere(br) === !1)
            return;
        Zo.copy(r).invert(),
        Ca.copy(e.ray).applyMatrix4(Zo);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , c = o * o
          , l = n.index
          , f = n.attributes.position;
        if (l !== null) {
            const h = Math.max(0, a.start)
              , d = Math.min(l.count, a.start + a.count);
            for (let g = h, M = d; g < M; g++) {
                const m = l.getX(g);
                Er.fromBufferAttribute(f, m),
                jo(Er, m, c, r, e, t, this)
            }
        } else {
            const h = Math.max(0, a.start)
              , d = Math.min(f.count, a.start + a.count);
            for (let g = h, M = d; g < M; g++)
                Er.fromBufferAttribute(f, g),
                jo(Er, g, c, r, e, t, this)
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = r.length; s < a; s++) {
                    const o = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
}
function jo(i, e, t, n, r, s, a) {
    const o = Ca.distanceSqToPoint(i);
    if (o < t) {
        const c = new U;
        Ca.closestPointToPoint(i, c),
        c.applyMatrix4(n);
        const l = r.ray.origin.distanceTo(c);
        if (l < r.near || l > r.far)
            return;
        s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: c,
            index: e,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: a
        })
    }
}
class ec extends St {
    constructor(e=[], t=Kn, n, r, s, a, o, c, l, u) {
        super(e, t, n, r, s, a, o, c, l, u),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class Gg extends St {
    constructor(e, t, n, r, s, a, o, c, l) {
        super(e, t, n, r, s, a, o, c, l),
        this.isCanvasTexture = !0,
        this.needsUpdate = !0
    }
}
class qi extends St {
    constructor(e, t, n=rn, r, s, a, o=Mt, c=Mt, l, u=Mn, f=1) {
        if (u !== Mn && u !== Yn)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        const h = {
            width: e,
            height: t,
            depth: f
        };
        super(h, r, s, a, o, c, u, n, l),
        this.isDepthTexture = !0,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(e) {
        return super.copy(e),
        this.source = new Xa(Object.assign({}, e.image)),
        this.compareFunction = e.compareFunction,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.compareFunction !== null && (t.compareFunction = this.compareFunction),
        t
    }
}
class Kh extends qi {
    constructor(e, t=rn, n=Kn, r, s, a=Mt, o=Mt, c, l=Mn) {
        const u = {
            width: e,
            height: e,
            depth: 1
        }
          , f = [u, u, u, u, u, u];
        super(e, e, t, n, r, s, a, o, c, l),
        this.image = f,
        this.isCubeDepthTexture = !0,
        this.isCubeTexture = !0
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class tc extends St {
    constructor(e=null) {
        super(),
        this.sourceTexture = e,
        this.isExternalTexture = !0
    }
    copy(e) {
        return super.copy(e),
        this.sourceTexture = e.sourceTexture,
        this
    }
}
class $i extends Gt {
    constructor(e=1, t=1, n=1, r=1, s=1, a=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: s,
            depthSegments: a
        };
        const o = this;
        r = Math.floor(r),
        s = Math.floor(s),
        a = Math.floor(a);
        const c = []
          , l = []
          , u = []
          , f = [];
        let h = 0
          , d = 0;
        g("z", "y", "x", -1, -1, n, t, e, a, s, 0),
        g("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
        g("x", "z", "y", 1, 1, e, n, t, r, a, 2),
        g("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
        g("x", "y", "z", 1, -1, e, t, n, r, s, 4),
        g("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
        this.setIndex(c),
        this.setAttribute("position", new Ct(l,3)),
        this.setAttribute("normal", new Ct(u,3)),
        this.setAttribute("uv", new Ct(f,2));
        function g(M, m, p, S, T, E, R, A, P, x, y) {
            const W = E / P
              , w = R / x
              , N = E / 2
              , F = R / 2
              , k = A / 2
              , G = P + 1
              , B = x + 1;
            let V = 0
              , Q = 0;
            const Z = new U;
            for (let ce = 0; ce < B; ce++) {
                const pe = ce * w - F;
                for (let ue = 0; ue < G; ue++) {
                    const Ue = ue * W - N;
                    Z[M] = Ue * S,
                    Z[m] = pe * T,
                    Z[p] = k,
                    l.push(Z.x, Z.y, Z.z),
                    Z[M] = 0,
                    Z[m] = 0,
                    Z[p] = A > 0 ? 1 : -1,
                    u.push(Z.x, Z.y, Z.z),
                    f.push(ue / P),
                    f.push(1 - ce / x),
                    V += 1
                }
            }
            for (let ce = 0; ce < x; ce++)
                for (let pe = 0; pe < P; pe++) {
                    const ue = h + pe + G * ce
                      , Ue = h + pe + G * (ce + 1)
                      , at = h + (pe + 1) + G * (ce + 1)
                      , rt = h + (pe + 1) + G * ce;
                    c.push(ue, Ue, rt),
                    c.push(Ue, at, rt),
                    Q += 6
                }
            o.addGroup(d, Q, y),
            d += Q,
            h += V
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
class nc extends Gt {
    constructor(e=1, t=1, n=1, r=32, s=1, a=!1, o=0, c=Math.PI * 2) {
        super(),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: r,
            heightSegments: s,
            openEnded: a,
            thetaStart: o,
            thetaLength: c
        };
        const l = this;
        r = Math.floor(r),
        s = Math.floor(s);
        const u = []
          , f = []
          , h = []
          , d = [];
        let g = 0;
        const M = []
          , m = n / 2;
        let p = 0;
        S(),
        a === !1 && (e > 0 && T(!0),
        t > 0 && T(!1)),
        this.setIndex(u),
        this.setAttribute("position", new Ct(f,3)),
        this.setAttribute("normal", new Ct(h,3)),
        this.setAttribute("uv", new Ct(d,2));
        function S() {
            const E = new U
              , R = new U;
            let A = 0;
            const P = (t - e) / n;
            for (let x = 0; x <= s; x++) {
                const y = []
                  , W = x / s
                  , w = W * (t - e) + e;
                for (let N = 0; N <= r; N++) {
                    const F = N / r
                      , k = F * c + o
                      , G = Math.sin(k)
                      , B = Math.cos(k);
                    R.x = w * G,
                    R.y = -W * n + m,
                    R.z = w * B,
                    f.push(R.x, R.y, R.z),
                    E.set(G, P, B).normalize(),
                    h.push(E.x, E.y, E.z),
                    d.push(F, 1 - W),
                    y.push(g++)
                }
                M.push(y)
            }
            for (let x = 0; x < r; x++)
                for (let y = 0; y < s; y++) {
                    const W = M[y][x]
                      , w = M[y + 1][x]
                      , N = M[y + 1][x + 1]
                      , F = M[y][x + 1];
                    (e > 0 || y !== 0) && (u.push(W, w, F),
                    A += 3),
                    (t > 0 || y !== s - 1) && (u.push(w, N, F),
                    A += 3)
                }
            l.addGroup(p, A, 0),
            p += A
        }
        function T(E) {
            const R = g
              , A = new Ge
              , P = new U;
            let x = 0;
            const y = E === !0 ? e : t
              , W = E === !0 ? 1 : -1;
            for (let N = 1; N <= r; N++)
                f.push(0, m * W, 0),
                h.push(0, W, 0),
                d.push(.5, .5),
                g++;
            const w = g;
            for (let N = 0; N <= r; N++) {
                const k = N / r * c + o
                  , G = Math.cos(k)
                  , B = Math.sin(k);
                P.x = y * B,
                P.y = m * W,
                P.z = y * G,
                f.push(P.x, P.y, P.z),
                h.push(0, W, 0),
                A.x = G * .5 + .5,
                A.y = B * .5 * W + .5,
                d.push(A.x, A.y),
                g++
            }
            for (let N = 0; N < r; N++) {
                const F = R + N
                  , k = w + N;
                E === !0 ? u.push(k, k + 1, F) : u.push(k + 1, k, F),
                x += 3
            }
            l.addGroup(p, x, E === !0 ? 1 : 2),
            p += x
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new nc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)
    }
}
class $h {
    constructor() {
        this.type = "Curve",
        this.arcLengthDivisions = 200,
        this.needsUpdate = !1,
        this.cacheArcLengths = null
    }
    getPoint() {
        be("Curve: .getPoint() not implemented.")
    }
    getPointAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e=5) {
        const t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e=5) {
        const t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        const e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e=this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        const t = [];
        let n, r = this.getPoint(0), s = 0;
        t.push(0);
        for (let a = 1; a <= e; a++)
            n = this.getPoint(a / e),
            s += n.distanceTo(r),
            t.push(s),
            r = n;
        return this.cacheArcLengths = t,
        t
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.getLengths()
    }
    getUtoTmapping(e, t=null) {
        const n = this.getLengths();
        let r = 0;
        const s = n.length;
        let a;
        t ? a = t : a = e * n[s - 1];
        let o = 0, c = s - 1, l;
        for (; o <= c; )
            if (r = Math.floor(o + (c - o) / 2),
            l = n[r] - a,
            l < 0)
                o = r + 1;
            else if (l > 0)
                c = r - 1;
            else {
                c = r;
                break
            }
        if (r = c,
        n[r] === a)
            return r / (s - 1);
        const u = n[r]
          , h = n[r + 1] - u
          , d = (a - u) / h;
        return (r + d) / (s - 1)
    }
    getTangent(e, t) {
        let r = e - 1e-4
          , s = e + 1e-4;
        r < 0 && (r = 0),
        s > 1 && (s = 1);
        const a = this.getPoint(r)
          , o = this.getPoint(s)
          , c = t || (a.isVector2 ? new Ge : new U);
        return c.copy(o).sub(a).normalize(),
        c
    }
    getTangentAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t=!1) {
        const n = new U
          , r = []
          , s = []
          , a = []
          , o = new U
          , c = new Ve;
        for (let d = 0; d <= e; d++) {
            const g = d / e;
            r[d] = this.getTangentAt(g, new U)
        }
        s[0] = new U,
        a[0] = new U;
        let l = Number.MAX_VALUE;
        const u = Math.abs(r[0].x)
          , f = Math.abs(r[0].y)
          , h = Math.abs(r[0].z);
        u <= l && (l = u,
        n.set(1, 0, 0)),
        f <= l && (l = f,
        n.set(0, 1, 0)),
        h <= l && n.set(0, 0, 1),
        o.crossVectors(r[0], n).normalize(),
        s[0].crossVectors(r[0], o),
        a[0].crossVectors(r[0], s[0]);
        for (let d = 1; d <= e; d++) {
            if (s[d] = s[d - 1].clone(),
            a[d] = a[d - 1].clone(),
            o.crossVectors(r[d - 1], r[d]),
            o.length() > Number.EPSILON) {
                o.normalize();
                const g = Math.acos(ze(r[d - 1].dot(r[d]), -1, 1));
                s[d].applyMatrix4(c.makeRotationAxis(o, g))
            }
            a[d].crossVectors(r[d], s[d])
        }
        if (t === !0) {
            let d = Math.acos(ze(s[0].dot(s[e]), -1, 1));
            d /= e,
            r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
            for (let g = 1; g <= e; g++)
                s[g].applyMatrix4(c.makeRotationAxis(r[g], d * g)),
                a[g].crossVectors(r[g], s[g])
        }
        return {
            tangents: r,
            normals: s,
            binormals: a
        }
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.7,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions,
        e.type = this.type,
        e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
}
function $a() {
    let i = 0
      , e = 0
      , t = 0
      , n = 0;
    function r(s, a, o, c) {
        i = s,
        e = o,
        t = -3 * s + 3 * a - 2 * o - c,
        n = 2 * s - 2 * a + o + c
    }
    return {
        initCatmullRom: function(s, a, o, c, l) {
            r(a, o, l * (o - s), l * (c - a))
        },
        initNonuniformCatmullRom: function(s, a, o, c, l, u, f) {
            let h = (a - s) / l - (o - s) / (l + u) + (o - a) / u
              , d = (o - a) / u - (c - a) / (u + f) + (c - o) / f;
            h *= u,
            d *= u,
            r(a, o, h, d)
        },
        calc: function(s) {
            const a = s * s
              , o = a * s;
            return i + e * s + t * a + n * o
        }
    }
}
const Tr = new U
  , As = new $a
  , ws = new $a
  , Rs = new $a;
class Hg extends $h {
    constructor(e=[], t=!1, n="centripetal", r=.5) {
        super(),
        this.isCatmullRomCurve3 = !0,
        this.type = "CatmullRomCurve3",
        this.points = e,
        this.closed = t,
        this.curveType = n,
        this.tension = r
    }
    getPoint(e, t=new U) {
        const n = t
          , r = this.points
          , s = r.length
          , a = (s - (this.closed ? 0 : 1)) * e;
        let o = Math.floor(a)
          , c = a - o;
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : c === 0 && o === s - 1 && (o = s - 2,
        c = 1);
        let l, u;
        this.closed || o > 0 ? l = r[(o - 1) % s] : (Tr.subVectors(r[0], r[1]).add(r[0]),
        l = Tr);
        const f = r[o % s]
          , h = r[(o + 1) % s];
        if (this.closed || o + 2 < s ? u = r[(o + 2) % s] : (Tr.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]),
        u = Tr),
        this.curveType === "centripetal" || this.curveType === "chordal") {
            const d = this.curveType === "chordal" ? .5 : .25;
            let g = Math.pow(l.distanceToSquared(f), d)
              , M = Math.pow(f.distanceToSquared(h), d)
              , m = Math.pow(h.distanceToSquared(u), d);
            M < 1e-4 && (M = 1),
            g < 1e-4 && (g = M),
            m < 1e-4 && (m = M),
            As.initNonuniformCatmullRom(l.x, f.x, h.x, u.x, g, M, m),
            ws.initNonuniformCatmullRom(l.y, f.y, h.y, u.y, g, M, m),
            Rs.initNonuniformCatmullRom(l.z, f.z, h.z, u.z, g, M, m)
        } else
            this.curveType === "catmullrom" && (As.initCatmullRom(l.x, f.x, h.x, u.x, this.tension),
            ws.initCatmullRom(l.y, f.y, h.y, u.y, this.tension),
            Rs.initCatmullRom(l.z, f.z, h.z, u.z, this.tension));
        return n.set(As.calc(c), ws.calc(c), Rs.calc(c)),
        n
    }
    copy(e) {
        super.copy(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const r = e.points[t];
            this.points.push(r.clone())
        }
        return this.closed = e.closed,
        this.curveType = e.curveType,
        this.tension = e.tension,
        this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const r = this.points[t];
            e.points.push(r.toArray())
        }
        return e.closed = this.closed,
        e.curveType = this.curveType,
        e.tension = this.tension,
        e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const r = e.points[t];
            this.points.push(new U().fromArray(r))
        }
        return this.closed = e.closed,
        this.curveType = e.curveType,
        this.tension = e.tension,
        this
    }
}
class Si extends Gt {
    constructor(e=1, t=1, n=1, r=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        };
        const s = e / 2
          , a = t / 2
          , o = Math.floor(n)
          , c = Math.floor(r)
          , l = o + 1
          , u = c + 1
          , f = e / o
          , h = t / c
          , d = []
          , g = []
          , M = []
          , m = [];
        for (let p = 0; p < u; p++) {
            const S = p * h - a;
            for (let T = 0; T < l; T++) {
                const E = T * f - s;
                g.push(E, -S, 0),
                M.push(0, 0, 1),
                m.push(T / o),
                m.push(1 - p / c)
            }
        }
        for (let p = 0; p < c; p++)
            for (let S = 0; S < o; S++) {
                const T = S + l * p
                  , E = S + l * (p + 1)
                  , R = S + 1 + l * (p + 1)
                  , A = S + 1 + l * p;
                d.push(T, E, A),
                d.push(E, R, A)
            }
        this.setIndex(d),
        this.setAttribute("position", new Ct(g,3)),
        this.setAttribute("normal", new Ct(M,3)),
        this.setAttribute("uv", new Ct(m,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new Si(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
function yi(i) {
    const e = {};
    for (const t in i) {
        e[t] = {};
        for (const n in i[t]) {
            const r = i[t][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r
        }
    }
    return e
}
function At(i) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
        const n = yi(i[t]);
        for (const r in n)
            e[r] = n[r]
    }
    return e
}
function Zh(i) {
    const e = [];
    for (let t = 0; t < i.length; t++)
        e.push(i[t].clone());
    return e
}
function ic(i) {
    const e = i.getRenderTarget();
    return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace
}
const jh = {
    clone: yi,
    merge: At
};
var Jh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , Qh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ft extends Un {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = Jh,
        this.fragmentShader = Qh,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = yi(e.uniforms),
        this.uniformsGroups = Zh(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues),
        this.index0AttributeName = e.index0AttributeName,
        this.uniformsNeedUpdate = e.uniformsNeedUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const r in this.uniforms) {
            const a = this.uniforms[r].value;
            a && a.isTexture ? t.uniforms[r] = {
                type: "t",
                value: a.toJSON(e).uuid
            } : a && a.isColor ? t.uniforms[r] = {
                type: "c",
                value: a.getHex()
            } : a && a.isVector2 ? t.uniforms[r] = {
                type: "v2",
                value: a.toArray()
            } : a && a.isVector3 ? t.uniforms[r] = {
                type: "v3",
                value: a.toArray()
            } : a && a.isVector4 ? t.uniforms[r] = {
                type: "v4",
                value: a.toArray()
            } : a && a.isMatrix3 ? t.uniforms[r] = {
                type: "m3",
                value: a.toArray()
            } : a && a.isMatrix4 ? t.uniforms[r] = {
                type: "m4",
                value: a.toArray()
            } : t.uniforms[r] = {
                value: a
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t.lights = this.lights,
        t.clipping = this.clipping;
        const n = {};
        for (const r in this.extensions)
            this.extensions[r] === !0 && (n[r] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
class eu extends Ft {
    constructor(e) {
        super(e),
        this.isRawShaderMaterial = !0,
        this.type = "RawShaderMaterial"
    }
}
class tu extends Un {
    constructor(e) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.type = "MeshStandardMaterial",
        this.defines = {
            STANDARD: ""
        },
        this.color = new ke(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new ke(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = ka,
        this.normalScale = new Ge(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new sn,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.envMapIntensity = e.envMapIntensity,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
class Wg extends tu {
    constructor(e) {
        super(),
        this.isMeshPhysicalMaterial = !0,
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.anisotropyRotation = 0,
        this.anisotropyMap = null,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new Ge(1,1),
        this.clearcoatNormalMap = null,
        this.ior = 1.5,
        Object.defineProperty(this, "reflectivity", {
            get: function() {
                return ze(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }),
        this.iridescenceMap = null,
        this.iridescenceIOR = 1.3,
        this.iridescenceThicknessRange = [100, 400],
        this.iridescenceThicknessMap = null,
        this.sheenColor = new ke(0),
        this.sheenColorMap = null,
        this.sheenRoughness = 1,
        this.sheenRoughnessMap = null,
        this.transmissionMap = null,
        this.thickness = 0,
        this.thicknessMap = null,
        this.attenuationDistance = 1 / 0,
        this.attenuationColor = new ke(1,1,1),
        this.specularIntensity = 1,
        this.specularIntensityMap = null,
        this.specularColor = new ke(1,1,1),
        this.specularColorMap = null,
        this._anisotropy = 0,
        this._clearcoat = 0,
        this._dispersion = 0,
        this._iridescence = 0,
        this._sheen = 0,
        this._transmission = 0,
        this.setValues(e)
    }
    get anisotropy() {
        return this._anisotropy
    }
    set anisotropy(e) {
        this._anisotropy > 0 != e > 0 && this.version++,
        this._anisotropy = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++,
        this._clearcoat = e
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(e) {
        this._iridescence > 0 != e > 0 && this.version++,
        this._iridescence = e
    }
    get dispersion() {
        return this._dispersion
    }
    set dispersion(e) {
        this._dispersion > 0 != e > 0 && this.version++,
        this._dispersion = e
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++,
        this._sheen = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++,
        this._transmission = e
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.anisotropy = e.anisotropy,
        this.anisotropyRotation = e.anisotropyRotation,
        this.anisotropyMap = e.anisotropyMap,
        this.clearcoat = e.clearcoat,
        this.clearcoatMap = e.clearcoatMap,
        this.clearcoatRoughness = e.clearcoatRoughness,
        this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
        this.clearcoatNormalMap = e.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        this.dispersion = e.dispersion,
        this.ior = e.ior,
        this.iridescence = e.iridescence,
        this.iridescenceMap = e.iridescenceMap,
        this.iridescenceIOR = e.iridescenceIOR,
        this.iridescenceThicknessRange = [...e.iridescenceThicknessRange],
        this.iridescenceThicknessMap = e.iridescenceThicknessMap,
        this.sheen = e.sheen,
        this.sheenColor.copy(e.sheenColor),
        this.sheenColorMap = e.sheenColorMap,
        this.sheenRoughness = e.sheenRoughness,
        this.sheenRoughnessMap = e.sheenRoughnessMap,
        this.transmission = e.transmission,
        this.transmissionMap = e.transmissionMap,
        this.thickness = e.thickness,
        this.thicknessMap = e.thicknessMap,
        this.attenuationDistance = e.attenuationDistance,
        this.attenuationColor.copy(e.attenuationColor),
        this.specularIntensity = e.specularIntensity,
        this.specularIntensityMap = e.specularIntensityMap,
        this.specularColor.copy(e.specularColor),
        this.specularColorMap = e.specularColorMap,
        this
    }
}
class nu extends Un {
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = qc,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
class iu extends Un {
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
class Xg extends Un {
    constructor(e) {
        super(),
        this.isMeshMatcapMaterial = !0,
        this.defines = {
            MATCAP: ""
        },
        this.type = "MeshMatcapMaterial",
        this.color = new ke(16777215),
        this.matcap = null,
        this.map = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = ka,
        this.normalScale = new Ge(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.alphaMap = null,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            MATCAP: ""
        },
        this.color.copy(e.color),
        this.matcap = e.matcap,
        this.map = e.map,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.alphaMap = e.alphaMap,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
function Ar(i, e) {
    return !i || i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i)
}
function ru(i) {
    function e(r, s) {
        return i[r] - i[s]
    }
    const t = i.length
      , n = new Array(t);
    for (let r = 0; r !== t; ++r)
        n[r] = r;
    return n.sort(e),
    n
}
function Jo(i, e, t) {
    const n = i.length
      , r = new i.constructor(n);
    for (let s = 0, a = 0; a !== n; ++s) {
        const o = t[s] * e;
        for (let c = 0; c !== e; ++c)
            r[a++] = i[o + c]
    }
    return r
}
function rc(i, e, t, n) {
    let r = 1
      , s = i[0];
    for (; s !== void 0 && s[n] === void 0; )
        s = i[r++];
    if (s === void 0)
        return;
    let a = s[n];
    if (a !== void 0)
        if (Array.isArray(a))
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                t.push(...a)),
                s = i[r++];
            while (s !== void 0);
        else if (a.toArray !== void 0)
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                a.toArray(t, t.length)),
                s = i[r++];
            while (s !== void 0);
        else
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                t.push(a)),
                s = i[r++];
            while (s !== void 0)
}
class Zi {
    constructor(e, t, n, r) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = r !== void 0 ? r : new t.constructor(n),
        this.sampleValues = t,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex
          , r = t[n]
          , s = t[n - 1];
        n: {
            e: {
                let a;
                t: {
                    i: if (!(e < r)) {
                        for (let o = n + 2; ; ) {
                            if (r === void 0) {
                                if (e < s)
                                    break i;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.copySampleValue_(n - 1)
                            }
                            if (n === o)
                                break;
                            if (s = r,
                            r = t[++n],
                            e < r)
                                break e
                        }
                        a = t.length;
                        break t
                    }
                    if (!(e >= s)) {
                        const o = t[1];
                        e < o && (n = 2,
                        s = o);
                        for (let c = n - 2; ; ) {
                            if (s === void 0)
                                return this._cachedIndex = 0,
                                this.copySampleValue_(0);
                            if (n === c)
                                break;
                            if (r = s,
                            s = t[--n - 1],
                            e >= s)
                                break e
                        }
                        a = n,
                        n = 0;
                        break t
                    }
                    break n
                }
                for (; n < a; ) {
                    const o = n + a >>> 1;
                    e < t[o] ? a = o : n = o + 1
                }
                if (r = t[n],
                s = t[n - 1],
                s === void 0)
                    return this._cachedIndex = 0,
                    this.copySampleValue_(0);
                if (r === void 0)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, s, r)
        }
        return this.interpolate_(n, s, e, r)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , n = this.sampleValues
          , r = this.valueSize
          , s = e * r;
        for (let a = 0; a !== r; ++a)
            t[a] = n[s + a];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
class su extends Zi {
    constructor(e, t, n, r) {
        super(e, t, n, r),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: go,
            endingEnd: go
        }
    }
    intervalChanged_(e, t, n) {
        const r = this.parameterPositions;
        let s = e - 2
          , a = e + 1
          , o = r[s]
          , c = r[a];
        if (o === void 0)
            switch (this.getSettings_().endingStart) {
            case _o:
                s = e,
                o = 2 * t - n;
                break;
            case xo:
                s = r.length - 2,
                o = t + r[s] - r[s + 1];
                break;
            default:
                s = e,
                o = n
            }
        if (c === void 0)
            switch (this.getSettings_().endingEnd) {
            case _o:
                a = e,
                c = 2 * n - t;
                break;
            case xo:
                a = 1,
                c = n + r[1] - r[0];
                break;
            default:
                a = e - 1,
                c = t
            }
        const l = (n - t) * .5
          , u = this.valueSize;
        this._weightPrev = l / (t - o),
        this._weightNext = l / (c - n),
        this._offsetPrev = s * u,
        this._offsetNext = a * u
    }
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , u = this._offsetPrev
          , f = this._offsetNext
          , h = this._weightPrev
          , d = this._weightNext
          , g = (n - t) / (r - t)
          , M = g * g
          , m = M * g
          , p = -h * m + 2 * h * M - h * g
          , S = (1 + h) * m + (-1.5 - 2 * h) * M + (-.5 + h) * g + 1
          , T = (-1 - d) * m + (1.5 + d) * M + .5 * g
          , E = d * m - d * M;
        for (let R = 0; R !== o; ++R)
            s[R] = p * a[u + R] + S * a[l + R] + T * a[c + R] + E * a[f + R];
        return s
    }
}
class au extends Zi {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , u = (n - t) / (r - t)
          , f = 1 - u;
        for (let h = 0; h !== o; ++h)
            s[h] = a[l + h] * f + a[c + h] * u;
        return s
    }
}
class ou extends Zi {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class lu extends Zi {
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , u = this.settings || this.DefaultSettings_
          , f = u.inTangents
          , h = u.outTangents;
        if (!f || !h) {
            const M = (n - t) / (r - t)
              , m = 1 - M;
            for (let p = 0; p !== o; ++p)
                s[p] = a[l + p] * m + a[c + p] * M;
            return s
        }
        const d = o * 2
          , g = e - 1;
        for (let M = 0; M !== o; ++M) {
            const m = a[l + M]
              , p = a[c + M]
              , S = g * d + M * 2
              , T = h[S]
              , E = h[S + 1]
              , R = e * d + M * 2
              , A = f[R]
              , P = f[R + 1];
            let x = (n - t) / (r - t), y, W, w, N, F;
            for (let k = 0; k < 8; k++) {
                y = x * x,
                W = y * x,
                w = 1 - x,
                N = w * w,
                F = N * w;
                const B = F * t + 3 * N * x * T + 3 * w * y * A + W * r - n;
                if (Math.abs(B) < 1e-10)
                    break;
                const V = 3 * N * (T - t) + 6 * w * x * (A - T) + 3 * y * (r - A);
                if (Math.abs(V) < 1e-10)
                    break;
                x = x - B / V,
                x = Math.max(0, Math.min(1, x))
            }
            s[M] = F * m + 3 * N * x * E + 3 * w * y * P + W * p
        }
        return s
    }
}
class Zt {
    constructor(e, t, n, r) {
        if (e === void 0)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e,
        this.times = Ar(t, this.TimeBufferType),
        this.values = Ar(n, this.ValueBufferType),
        this.setInterpolation(r || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON)
            n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: Ar(e.times, Array),
                values: Ar(e.values, Array)
            };
            const r = e.getInterpolation();
            r !== e.DefaultInterpolation && (n.interpolation = r)
        }
        return n.type = e.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new ou(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new au(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new su(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodBezier(e) {
        const t = new lu(this.times,this.values,this.getValueSize(),e);
        return this.settings && (t.settings = this.settings),
        t
    }
    setInterpolation(e) {
        let t;
        switch (e) {
        case Or:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case wa:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case es:
            t = this.InterpolantFactoryMethodSmooth;
            break;
        case mo:
            t = this.InterpolantFactoryMethodBezier;
            break
        }
        if (t === void 0) {
            const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation)
                    this.setInterpolation(this.DefaultInterpolation);
                else
                    throw new Error(n);
            return be("KeyframeTrack:", n),
            this
        }
        return this.createInterpolant = t,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return Or;
        case this.InterpolantFactoryMethodLinear:
            return wa;
        case this.InterpolantFactoryMethodSmooth:
            return es;
        case this.InterpolantFactoryMethodBezier:
            return mo
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            const t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n)
                t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            const t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n)
                t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times
          , r = n.length;
        let s = 0
          , a = r - 1;
        for (; s !== r && n[s] < e; )
            ++s;
        for (; a !== -1 && n[a] > t; )
            --a;
        if (++a,
        s !== 0 || a !== r) {
            s >= a && (a = Math.max(a, 1),
            s = a - 1);
            const o = this.getValueSize();
            this.times = n.slice(s, a),
            this.values = this.values.slice(s * o, a * o)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) !== 0 && (we("KeyframeTrack: Invalid value size in track.", this),
        e = !1);
        const n = this.times
          , r = this.values
          , s = n.length;
        s === 0 && (we("KeyframeTrack: Track is empty.", this),
        e = !1);
        let a = null;
        for (let o = 0; o !== s; o++) {
            const c = n[o];
            if (typeof c == "number" && isNaN(c)) {
                we("KeyframeTrack: Time is not a valid number.", this, o, c),
                e = !1;
                break
            }
            if (a !== null && a > c) {
                we("KeyframeTrack: Out of order keys.", this, o, c, a),
                e = !1;
                break
            }
            a = c
        }
        if (r !== void 0 && th(r))
            for (let o = 0, c = r.length; o !== c; ++o) {
                const l = r[o];
                if (isNaN(l)) {
                    we("KeyframeTrack: Value is not a valid number.", this, o, l),
                    e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        const e = this.times.slice()
          , t = this.values.slice()
          , n = this.getValueSize()
          , r = this.getInterpolation() === es
          , s = e.length - 1;
        let a = 1;
        for (let o = 1; o < s; ++o) {
            let c = !1;
            const l = e[o]
              , u = e[o + 1];
            if (l !== u && (o !== 1 || l !== e[0]))
                if (r)
                    c = !0;
                else {
                    const f = o * n
                      , h = f - n
                      , d = f + n;
                    for (let g = 0; g !== n; ++g) {
                        const M = t[f + g];
                        if (M !== t[h + g] || M !== t[d + g]) {
                            c = !0;
                            break
                        }
                    }
                }
            if (c) {
                if (o !== a) {
                    e[a] = e[o];
                    const f = o * n
                      , h = a * n;
                    for (let d = 0; d !== n; ++d)
                        t[h + d] = t[f + d]
                }
                ++a
            }
        }
        if (s > 0) {
            e[a] = e[s];
            for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
                t[c + l] = t[o + l];
            ++a
        }
        return a !== e.length ? (this.times = e.slice(0, a),
        this.values = t.slice(0, a * n)) : (this.times = e,
        this.values = t),
        this
    }
    clone() {
        const e = this.times.slice()
          , t = this.values.slice()
          , n = this.constructor
          , r = new n(this.name,e,t);
        return r.createInterpolant = this.createInterpolant,
        r
    }
}
Zt.prototype.ValueTypeName = "";
Zt.prototype.TimeBufferType = Float32Array;
Zt.prototype.ValueBufferType = Float32Array;
Zt.prototype.DefaultInterpolation = wa;
class Ei extends Zt {
    constructor(e, t, n) {
        super(e, t, n)
    }
}
Ei.prototype.ValueTypeName = "bool";
Ei.prototype.ValueBufferType = Array;
Ei.prototype.DefaultInterpolation = Or;
Ei.prototype.InterpolantFactoryMethodLinear = void 0;
Ei.prototype.InterpolantFactoryMethodSmooth = void 0;
class sc extends Zt {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
}
sc.prototype.ValueTypeName = "color";
class Hr extends Zt {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
}
Hr.prototype.ValueTypeName = "number";
class cu extends Zi {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = (n - t) / (r - t);
        let l = e * o;
        for (let u = l + o; l !== u; l += 4)
            $n.slerpFlat(s, 0, a, l - o, a, l, c);
        return s
    }
}
class qr extends Zt {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    InterpolantFactoryMethodLinear(e) {
        return new cu(this.times,this.values,this.getValueSize(),e)
    }
}
qr.prototype.ValueTypeName = "quaternion";
qr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ti extends Zt {
    constructor(e, t, n) {
        super(e, t, n)
    }
}
Ti.prototype.ValueTypeName = "string";
Ti.prototype.ValueBufferType = Array;
Ti.prototype.DefaultInterpolation = Or;
Ti.prototype.InterpolantFactoryMethodLinear = void 0;
Ti.prototype.InterpolantFactoryMethodSmooth = void 0;
class Wr extends Zt {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
}
Wr.prototype.ValueTypeName = "vector";
class qg {
    constructor(e="", t=-1, n=[], r=Xc) {
        this.name = e,
        this.tracks = n,
        this.duration = t,
        this.blendMode = r,
        this.uuid = $t(),
        this.userData = {},
        this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        const t = []
          , n = e.tracks
          , r = 1 / (e.fps || 1);
        for (let a = 0, o = n.length; a !== o; ++a)
            t.push(uu(n[a]).scale(r));
        const s = new this(e.name,e.duration,t,e.blendMode);
        return s.uuid = e.uuid,
        s.userData = JSON.parse(e.userData || "{}"),
        s
    }
    static toJSON(e) {
        const t = []
          , n = e.tracks
          , r = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode,
            userData: JSON.stringify(e.userData)
        };
        for (let s = 0, a = n.length; s !== a; ++s)
            t.push(Zt.toJSON(n[s]));
        return r
    }
    static CreateFromMorphTargetSequence(e, t, n, r) {
        const s = t.length
          , a = [];
        for (let o = 0; o < s; o++) {
            let c = []
              , l = [];
            c.push((o + s - 1) % s, o, (o + 1) % s),
            l.push(0, 1, 0);
            const u = ru(c);
            c = Jo(c, 1, u),
            l = Jo(l, 1, u),
            !r && c[0] === 0 && (c.push(s),
            l.push(l[0])),
            a.push(new Hr(".morphTargetInfluences[" + t[o].name + "]",c,l).scale(1 / n))
        }
        return new this(e,-1,a)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const r = e;
            n = r.geometry && r.geometry.animations || r.animations
        }
        for (let r = 0; r < n.length; r++)
            if (n[r].name === t)
                return n[r];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const r = {}
          , s = /^([\w-]*?)([\d]+)$/;
        for (let o = 0, c = e.length; o < c; o++) {
            const l = e[o]
              , u = l.name.match(s);
            if (u && u.length > 1) {
                const f = u[1];
                let h = r[f];
                h || (r[f] = h = []),
                h.push(l)
            }
        }
        const a = [];
        for (const o in r)
            a.push(this.CreateFromMorphTargetSequence(o, r[o], t, n));
        return a
    }
    static parseAnimation(e, t) {
        if (be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),
        !e)
            return we("AnimationClip: No animation in JSONLoader data."),
            null;
        const n = function(f, h, d, g, M) {
            if (d.length !== 0) {
                const m = []
                  , p = [];
                rc(d, m, p, g),
                m.length !== 0 && M.push(new f(h,m,p))
            }
        }
          , r = []
          , s = e.name || "default"
          , a = e.fps || 30
          , o = e.blendMode;
        let c = e.length || -1;
        const l = e.hierarchy || [];
        for (let f = 0; f < l.length; f++) {
            const h = l[f].keys;
            if (!(!h || h.length === 0))
                if (h[0].morphTargets) {
                    const d = {};
                    let g;
                    for (g = 0; g < h.length; g++)
                        if (h[g].morphTargets)
                            for (let M = 0; M < h[g].morphTargets.length; M++)
                                d[h[g].morphTargets[M]] = -1;
                    for (const M in d) {
                        const m = []
                          , p = [];
                        for (let S = 0; S !== h[g].morphTargets.length; ++S) {
                            const T = h[g];
                            m.push(T.time),
                            p.push(T.morphTarget === M ? 1 : 0)
                        }
                        r.push(new Hr(".morphTargetInfluence[" + M + "]",m,p))
                    }
                    c = d.length * a
                } else {
                    const d = ".bones[" + t[f].name + "]";
                    n(Wr, d + ".position", h, "pos", r),
                    n(qr, d + ".quaternion", h, "rot", r),
                    n(Wr, d + ".scale", h, "scl", r)
                }
        }
        return r.length === 0 ? null : new this(s,c,r,o)
    }
    resetDuration() {
        const e = this.tracks;
        let t = 0;
        for (let n = 0, r = e.length; n !== r; ++n) {
            const s = this.tracks[n];
            t = Math.max(t, s.times[s.times.length - 1])
        }
        return this.duration = t,
        this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++)
            e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let n = 0; n < this.tracks.length; n++)
            e.push(this.tracks[n].clone());
        const t = new this.constructor(this.name,this.duration,e,this.blendMode);
        return t.userData = JSON.parse(JSON.stringify(this.userData)),
        t
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
function hu(i) {
    switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
        return Hr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
        return Wr;
    case "color":
        return sc;
    case "quaternion":
        return qr;
    case "bool":
    case "boolean":
        return Ei;
    case "string":
        return Ti
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i)
}
function uu(i) {
    if (i.type === void 0)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = hu(i.type);
    if (i.times === void 0) {
        const t = []
          , n = [];
        rc(i.keys, t, n, "value"),
        i.times = t,
        i.values = n
    }
    return e.parse !== void 0 ? e.parse(i) : new e(i.name,i.times,i.values,i.interpolation)
}
const gn = {
    enabled: !1,
    files: {},
    add: function(i, e) {
        this.enabled !== !1 && (Qo(i) || (this.files[i] = e))
    },
    get: function(i) {
        if (this.enabled !== !1 && !Qo(i))
            return this.files[i]
    },
    remove: function(i) {
        delete this.files[i]
    },
    clear: function() {
        this.files = {}
    }
};
function Qo(i) {
    try {
        const e = i.slice(i.indexOf(":") + 1);
        return new URL(e).protocol === "blob:"
    } catch {
        return !1
    }
}
class du {
    constructor(e, t, n) {
        const r = this;
        let s = !1, a = 0, o = 0, c;
        const l = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this._abortController = null,
        this.itemStart = function(u) {
            o++,
            s === !1 && r.onStart !== void 0 && r.onStart(u, a, o),
            s = !0
        }
        ,
        this.itemEnd = function(u) {
            a++,
            r.onProgress !== void 0 && r.onProgress(u, a, o),
            a === o && (s = !1,
            r.onLoad !== void 0 && r.onLoad())
        }
        ,
        this.itemError = function(u) {
            r.onError !== void 0 && r.onError(u)
        }
        ,
        this.resolveURL = function(u) {
            return c ? c(u) : u
        }
        ,
        this.setURLModifier = function(u) {
            return c = u,
            this
        }
        ,
        this.addHandler = function(u, f) {
            return l.push(u, f),
            this
        }
        ,
        this.removeHandler = function(u) {
            const f = l.indexOf(u);
            return f !== -1 && l.splice(f, 2),
            this
        }
        ,
        this.getHandler = function(u) {
            for (let f = 0, h = l.length; f < h; f += 2) {
                const d = l[f]
                  , g = l[f + 1];
                if (d.global && (d.lastIndex = 0),
                d.test(u))
                    return g
            }
            return null
        }
        ,
        this.abort = function() {
            return this.abortController.abort(),
            this._abortController = null,
            this
        }
    }
    get abortController() {
        return this._abortController || (this._abortController = new AbortController),
        this._abortController
    }
}
const fu = new du;
class ji {
    constructor(e) {
        this.manager = e !== void 0 ? e : fu,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {},
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise(function(r, s) {
            n.load(e, r, t, s)
        }
        )
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
    abort() {
        return this
    }
}
ji.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const fn = {};
class pu extends Error {
    constructor(e, t) {
        super(e),
        this.response = t
    }
}
class Yg extends ji {
    constructor(e) {
        super(e),
        this.mimeType = "",
        this.responseType = "",
        this._abortController = new AbortController
    }
    load(e, t, n, r) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = gn.get(`file:${e}`);
        if (s !== void 0)
            return this.manager.itemStart(e),
            setTimeout( () => {
                t && t(s),
                this.manager.itemEnd(e)
            }
            , 0),
            s;
        if (fn[e] !== void 0) {
            fn[e].push({
                onLoad: t,
                onProgress: n,
                onError: r
            });
            return
        }
        fn[e] = [],
        fn[e].push({
            onLoad: t,
            onProgress: n,
            onError: r
        });
        const a = new Request(e,{
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin",
            signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
        })
          , o = this.mimeType
          , c = this.responseType;
        fetch(a).then(l => {
            if (l.status === 200 || l.status === 0) {
                if (l.status === 0 && be("FileLoader: HTTP Status 0 received."),
                typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
                    return l;
                const u = fn[e]
                  , f = l.body.getReader()
                  , h = l.headers.get("X-File-Size") || l.headers.get("Content-Length")
                  , d = h ? parseInt(h) : 0
                  , g = d !== 0;
                let M = 0;
                const m = new ReadableStream({
                    start(p) {
                        S();
                        function S() {
                            f.read().then( ({done: T, value: E}) => {
                                if (T)
                                    p.close();
                                else {
                                    M += E.byteLength;
                                    const R = new ProgressEvent("progress",{
                                        lengthComputable: g,
                                        loaded: M,
                                        total: d
                                    });
                                    for (let A = 0, P = u.length; A < P; A++) {
                                        const x = u[A];
                                        x.onProgress && x.onProgress(R)
                                    }
                                    p.enqueue(E),
                                    S()
                                }
                            }
                            , T => {
                                p.error(T)
                            }
                            )
                        }
                    }
                });
                return new Response(m)
            } else
                throw new pu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)
        }
        ).then(l => {
            switch (c) {
            case "arraybuffer":
                return l.arrayBuffer();
            case "blob":
                return l.blob();
            case "document":
                return l.text().then(u => new DOMParser().parseFromString(u, o));
            case "json":
                return l.json();
            default:
                if (o === "")
                    return l.text();
                {
                    const f = /charset="?([^;"\s]*)"?/i.exec(o)
                      , h = f && f[1] ? f[1].toLowerCase() : void 0
                      , d = new TextDecoder(h);
                    return l.arrayBuffer().then(g => d.decode(g))
                }
            }
        }
        ).then(l => {
            gn.add(`file:${e}`, l);
            const u = fn[e];
            delete fn[e];
            for (let f = 0, h = u.length; f < h; f++) {
                const d = u[f];
                d.onLoad && d.onLoad(l)
            }
        }
        ).catch(l => {
            const u = fn[e];
            if (u === void 0)
                throw this.manager.itemError(e),
                l;
            delete fn[e];
            for (let f = 0, h = u.length; f < h; f++) {
                const d = u[f];
                d.onError && d.onError(l)
            }
            this.manager.itemError(e)
        }
        ).finally( () => {
            this.manager.itemEnd(e)
        }
        ),
        this.manager.itemStart(e)
    }
    setResponseType(e) {
        return this.responseType = e,
        this
    }
    setMimeType(e) {
        return this.mimeType = e,
        this
    }
    abort() {
        return this._abortController.abort(),
        this._abortController = new AbortController,
        this
    }
}
const hi = new WeakMap;
class mu extends ji {
    constructor(e) {
        super(e)
    }
    load(e, t, n, r) {
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = this
          , a = gn.get(`image:${e}`);
        if (a !== void 0) {
            if (a.complete === !0)
                s.manager.itemStart(e),
                setTimeout(function() {
                    t && t(a),
                    s.manager.itemEnd(e)
                }, 0);
            else {
                let f = hi.get(a);
                f === void 0 && (f = [],
                hi.set(a, f)),
                f.push({
                    onLoad: t,
                    onError: r
                })
            }
            return a
        }
        const o = Xi("img");
        function c() {
            u(),
            t && t(this);
            const f = hi.get(this) || [];
            for (let h = 0; h < f.length; h++) {
                const d = f[h];
                d.onLoad && d.onLoad(this)
            }
            hi.delete(this),
            s.manager.itemEnd(e)
        }
        function l(f) {
            u(),
            r && r(f),
            gn.remove(`image:${e}`);
            const h = hi.get(this) || [];
            for (let d = 0; d < h.length; d++) {
                const g = h[d];
                g.onError && g.onError(f)
            }
            hi.delete(this),
            s.manager.itemError(e),
            s.manager.itemEnd(e)
        }
        function u() {
            o.removeEventListener("load", c, !1),
            o.removeEventListener("error", l, !1)
        }
        return o.addEventListener("load", c, !1),
        o.addEventListener("error", l, !1),
        e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
        gn.add(`image:${e}`, o),
        s.manager.itemStart(e),
        o.src = e,
        o
    }
}
class Kg extends ji {
    constructor(e) {
        super(e)
    }
    load(e, t, n, r) {
        const s = new St
          , a = new mu(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, function(o) {
            s.image = o,
            s.needsUpdate = !0,
            t !== void 0 && t(s)
        }, n, r),
        s
    }
}
class Za extends ut {
    constructor(e, t=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new ke(e),
        this.intensity = t
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    copy(e, t) {
        return super.copy(e, t),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        t
    }
}
const Cs = new Ve
  , el = new U
  , tl = new U;
class ja {
    constructor(e) {
        this.camera = e,
        this.intensity = 1,
        this.bias = 0,
        this.biasNode = null,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new Ge(512,512),
        this.mapType = Ut,
        this.map = null,
        this.mapPass = null,
        this.matrix = new Ve,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new Ka,
        this._frameExtents = new Ge(1,1),
        this._viewportCount = 1,
        this._viewports = [new st(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera
          , n = this.matrix;
        el.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(el),
        tl.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(tl),
        t.updateMatrixWorld(),
        Cs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Cs, t.coordinateSystem, t.reversedDepth),
        t.coordinateSystem === Wi || t.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(Cs)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.intensity = e.intensity,
        this.bias = e.bias,
        this.radius = e.radius,
        this.autoUpdate = e.autoUpdate,
        this.needsUpdate = e.needsUpdate,
        this.normalBias = e.normalBias,
        this.blurSamples = e.blurSamples,
        this.mapSize.copy(e.mapSize),
        this.biasNode = e.biasNode,
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = {};
        return this.intensity !== 1 && (e.intensity = this.intensity),
        this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
const wr = new U
  , Rr = new $n
  , Jt = new U;
class ac extends ut {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new Ve,
        this.projectionMatrix = new Ve,
        this.projectionMatrixInverse = new Ve,
        this.coordinateSystem = tn,
        this._reversedDepth = !1
    }
    get reversedDepth() {
        return this._reversedDepth
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this.coordinateSystem = e.coordinateSystem,
        this
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorld.decompose(wr, Rr, Jt),
        Jt.x === 1 && Jt.y === 1 && Jt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(wr, Rr, Jt.set(1, 1, 1)).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorld.decompose(wr, Rr, Jt),
        Jt.x === 1 && Jt.y === 1 && Jt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(wr, Rr, Jt.set(1, 1, 1)).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Cn = new U
  , nl = new Ge
  , il = new Ge;
class wt extends ac {
    constructor(e=50, t=1, n=.1, r=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = r,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Mi * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(Vi * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Mi * 2 * Math.atan(Math.tan(Vi * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
        Cn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        t.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z),
        Cn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z)
    }
    getViewSize(e, t) {
        return this.getViewBounds(e, nl, il),
        t.subVectors(il, nl)
    }
    setViewOffset(e, t, n, r, s, a) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(Vi * .5 * this.fov) / this.zoom
          , n = 2 * t
          , r = this.aspect * n
          , s = -.5 * r;
        const a = this.view;
        if (this.view !== null && this.view.enabled) {
            const c = a.fullWidth
              , l = a.fullHeight;
            s += a.offsetX * r / c,
            t -= a.offsetY * n / l,
            r *= a.width / c,
            n *= a.height / l
        }
        const o = this.filmOffset;
        o !== 0 && (s += e * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
class gu extends ja {
    constructor() {
        super(new wt(50,1,.5,500)),
        this.isSpotLightShadow = !0,
        this.focus = 1,
        this.aspect = 1
    }
    updateMatrices(e) {
        const t = this.camera
          , n = Mi * 2 * e.angle * this.focus
          , r = this.mapSize.width / this.mapSize.height * this.aspect
          , s = e.distance || t.far;
        (n !== t.fov || r !== t.aspect || s !== t.far) && (t.fov = n,
        t.aspect = r,
        t.far = s,
        t.updateProjectionMatrix()),
        super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e),
        this.focus = e.focus,
        this
    }
}
class $g extends Za {
    constructor(e, t, n=0, r=Math.PI / 3, s=0, a=2) {
        super(e, t),
        this.isSpotLight = !0,
        this.type = "SpotLight",
        this.position.copy(ut.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new ut,
        this.distance = n,
        this.angle = r,
        this.penumbra = s,
        this.decay = a,
        this.map = null,
        this.shadow = new gu
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        super.dispose(),
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.angle = e.angle,
        this.penumbra = e.penumbra,
        this.decay = e.decay,
        this.target = e.target.clone(),
        this.map = e.map,
        this.shadow = e.shadow.clone(),
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.distance = this.distance,
        t.object.angle = this.angle,
        t.object.decay = this.decay,
        t.object.penumbra = this.penumbra,
        t.object.target = this.target.uuid,
        this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid),
        t.object.shadow = this.shadow.toJSON(),
        t
    }
}
class _u extends ja {
    constructor() {
        super(new wt(90,1,.5,500)),
        this.isPointLightShadow = !0
    }
}
class Zg extends Za {
    constructor(e, t, n=0, r=2) {
        super(e, t),
        this.isPointLight = !0,
        this.type = "PointLight",
        this.distance = n,
        this.decay = r,
        this.shadow = new _u
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        super.dispose(),
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.distance = this.distance,
        t.object.decay = this.decay,
        t.object.shadow = this.shadow.toJSON(),
        t
    }
}
class Yi extends ac {
    constructor(e=-1, t=1, n=1, r=-1, s=.1, a=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = r,
        this.near = s,
        this.far = a,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, r, s, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , r = (this.top + this.bottom) / 2;
        let s = n - e
          , a = n + e
          , o = r + t
          , c = r - t;
        if (this.view !== null && this.view.enabled) {
            const l = (this.right - this.left) / this.view.fullWidth / this.zoom
              , u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += l * this.view.offsetX,
            a = s + l * this.view.width,
            o -= u * this.view.offsetY,
            c = o - u * this.view.height
        }
        this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
class xu extends ja {
    constructor() {
        super(new Yi(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
class jg extends Za {
    constructor(e, t) {
        super(e, t),
        this.isDirectionalLight = !0,
        this.type = "DirectionalLight",
        this.position.copy(ut.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new ut,
        this.shadow = new xu
    }
    dispose() {
        super.dispose(),
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.shadow = this.shadow.toJSON(),
        t.object.target = this.target.uuid,
        t
    }
}
class Jg {
    static extractUrlBase(e) {
        const t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
        return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
}
const Ps = new WeakMap;
class Qg extends ji {
    constructor(e) {
        super(e),
        this.isImageBitmapLoader = !0,
        typeof createImageBitmap > "u" && be("ImageBitmapLoader: createImageBitmap() not supported."),
        typeof fetch > "u" && be("ImageBitmapLoader: fetch() not supported."),
        this.options = {
            premultiplyAlpha: "none"
        },
        this._abortController = new AbortController
    }
    setOptions(e) {
        return this.options = e,
        this
    }
    load(e, t, n, r) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = this
          , a = gn.get(`image-bitmap:${e}`);
        if (a !== void 0) {
            if (s.manager.itemStart(e),
            a.then) {
                a.then(l => {
                    if (Ps.has(a) === !0)
                        r && r(Ps.get(a)),
                        s.manager.itemError(e),
                        s.manager.itemEnd(e);
                    else
                        return t && t(l),
                        s.manager.itemEnd(e),
                        l
                }
                );
                return
            }
            return setTimeout(function() {
                t && t(a),
                s.manager.itemEnd(e)
            }, 0),
            a
        }
        const o = {};
        o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include",
        o.headers = this.requestHeader,
        o.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
        const c = fetch(e, o).then(function(l) {
            return l.blob()
        }).then(function(l) {
            return createImageBitmap(l, Object.assign(s.options, {
                colorSpaceConversion: "none"
            }))
        }).then(function(l) {
            return gn.add(`image-bitmap:${e}`, l),
            t && t(l),
            s.manager.itemEnd(e),
            l
        }).catch(function(l) {
            r && r(l),
            Ps.set(c, l),
            gn.remove(`image-bitmap:${e}`),
            s.manager.itemError(e),
            s.manager.itemEnd(e)
        });
        gn.add(`image-bitmap:${e}`, c),
        s.manager.itemStart(e)
    }
    abort() {
        return this._abortController.abort(),
        this._abortController = new AbortController,
        this
    }
}
const ui = -90
  , di = 1;
class vu extends ut {
    constructor(e, t, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const r = new wt(ui,di,e,t);
        r.layers = this.layers,
        this.add(r);
        const s = new wt(ui,di,e,t);
        s.layers = this.layers,
        this.add(s);
        const a = new wt(ui,di,e,t);
        a.layers = this.layers,
        this.add(a);
        const o = new wt(ui,di,e,t);
        o.layers = this.layers,
        this.add(o);
        const c = new wt(ui,di,e,t);
        c.layers = this.layers,
        this.add(c);
        const l = new wt(ui,di,e,t);
        l.layers = this.layers,
        this.add(l)
    }
    updateCoordinateSystem() {
        const e = this.coordinateSystem
          , t = this.children.concat()
          , [n,r,s,a,o,c] = t;
        for (const l of t)
            this.remove(l);
        if (e === tn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            r.up.set(0, 1, 0),
            r.lookAt(-1, 0, 0),
            s.up.set(0, 0, -1),
            s.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            c.up.set(0, 1, 0),
            c.lookAt(0, 0, -1);
        else if (e === Wi)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            r.up.set(0, -1, 0),
            r.lookAt(1, 0, 0),
            s.up.set(0, 0, 1),
            s.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            c.up.set(0, -1, 0),
            c.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
        for (const l of t)
            this.add(l),
            l.updateMatrixWorld()
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: n, activeMipmapLevel: r} = this;
        this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
        this.updateCoordinateSystem());
        const [s,a,o,c,l,u] = this.children
          , f = e.getRenderTarget()
          , h = e.getActiveCubeFace()
          , d = e.getActiveMipmapLevel()
          , g = e.xr.enabled;
        e.xr.enabled = !1;
        const M = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1;
        let m = !1;
        e.isWebGLRenderer === !0 ? m = e.state.buffers.depth.getReversed() : m = e.reversedDepthBuffer,
        e.setRenderTarget(n, 0, r),
        m && e.autoClear === !1 && e.clearDepth(),
        e.render(t, s),
        e.setRenderTarget(n, 1, r),
        m && e.autoClear === !1 && e.clearDepth(),
        e.render(t, a),
        e.setRenderTarget(n, 2, r),
        m && e.autoClear === !1 && e.clearDepth(),
        e.render(t, o),
        e.setRenderTarget(n, 3, r),
        m && e.autoClear === !1 && e.clearDepth(),
        e.render(t, c),
        e.setRenderTarget(n, 4, r),
        m && e.autoClear === !1 && e.clearDepth(),
        e.render(t, l),
        n.texture.generateMipmaps = M,
        e.setRenderTarget(n, 5, r),
        m && e.autoClear === !1 && e.clearDepth(),
        e.render(t, u),
        e.setRenderTarget(f, h, d),
        e.xr.enabled = g,
        n.texture.needsPMREMUpdate = !0
    }
}
class Mu extends wt {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.isMultiViewCamera = !1,
        this.cameras = e
    }
}
class e_ {
    constructor() {
        this._previousTime = 0,
        this._currentTime = 0,
        this._startTime = performance.now(),
        this._delta = 0,
        this._elapsed = 0,
        this._timescale = 1,
        this._document = null,
        this._pageVisibilityHandler = null
    }
    connect(e) {
        this._document = e,
        e.hidden !== void 0 && (this._pageVisibilityHandler = Su.bind(this),
        e.addEventListener("visibilitychange", this._pageVisibilityHandler, !1))
    }
    disconnect() {
        this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler),
        this._pageVisibilityHandler = null),
        this._document = null
    }
    getDelta() {
        return this._delta / 1e3
    }
    getElapsed() {
        return this._elapsed / 1e3
    }
    getTimescale() {
        return this._timescale
    }
    setTimescale(e) {
        return this._timescale = e,
        this
    }
    reset() {
        return this._currentTime = performance.now() - this._startTime,
        this
    }
    dispose() {
        this.disconnect()
    }
    update(e) {
        return this._pageVisibilityHandler !== null && this._document.hidden === !0 ? this._delta = 0 : (this._previousTime = this._currentTime,
        this._currentTime = (e !== void 0 ? e : performance.now()) - this._startTime,
        this._delta = (this._currentTime - this._previousTime) * this._timescale,
        this._elapsed += this._delta),
        this
    }
}
function Su() {
    this._document.hidden === !1 && this.reset()
}
const Ja = "\\[\\]\\.:\\/"
  , yu = new RegExp("[" + Ja + "]","g")
  , Qa = "[^" + Ja + "]"
  , bu = "[^" + Ja.replace("\\.", "") + "]"
  , Eu = /((?:WC+[\/:])*)/.source.replace("WC", Qa)
  , Tu = /(WCOD+)?/.source.replace("WCOD", bu)
  , Au = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qa)
  , wu = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qa)
  , Ru = new RegExp("^" + Eu + Tu + Au + wu + "$")
  , Cu = ["material", "materials", "bones", "map"];
class Pu {
    constructor(e, t, n) {
        const r = n || Qe.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, r)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_
          , r = this._bindings[n];
        r !== void 0 && r.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let r = this._targetGroup.nCachedObjects_, s = n.length; r !== s; ++r)
            n[r].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
}
class Qe {
    constructor(e, t, n) {
        this.path = t,
        this.parsedPath = n || Qe.parseTrackName(t),
        this.node = Qe.findNode(e, this.parsedPath.nodeName),
        this.rootNode = e,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Qe.Composite(e,t,n) : new Qe(e,t,n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(yu, "")
    }
    static parseTrackName(e) {
        const t = Ru.exec(e);
        if (t === null)
            throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        const n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }
          , r = n.nodeName && n.nodeName.lastIndexOf(".");
        if (r !== void 0 && r !== -1) {
            const s = n.nodeName.substring(r + 1);
            Cu.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, r),
            n.objectName = s)
        }
        if (n.propertyName === null || n.propertyName.length === 0)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (n !== void 0)
                return n
        }
        if (e.children) {
            const n = function(s) {
                for (let a = 0; a < s.length; a++) {
                    const o = s[a];
                    if (o.name === t || o.uuid === t)
                        return o;
                    const c = n(o.children);
                    if (c)
                        return c
                }
                return null
            }
              , r = n(e.children);
            if (r)
                return r
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            e[t++] = n[r]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            n[r] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            n[r] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            n[r] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
        this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
        this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath
          , n = t.objectName
          , r = t.propertyName;
        let s = t.propertyIndex;
        if (e || (e = Qe.findNode(this.rootNode, t.nodeName),
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !e) {
            be("PropertyBinding: No target node found for track: " + this.path + ".");
            return
        }
        if (n) {
            let l = t.objectIndex;
            switch (n) {
            case "materials":
                if (!e.material) {
                    we("PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.materials) {
                    we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    return
                }
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton) {
                    we("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    return
                }
                e = e.skeleton.bones;
                for (let u = 0; u < e.length; u++)
                    if (e[u].name === l) {
                        l = u;
                        break
                    }
                break;
            case "map":
                if ("map"in e) {
                    e = e.map;
                    break
                }
                if (!e.material) {
                    we("PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.map) {
                    we("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                    return
                }
                e = e.material.map;
                break;
            default:
                if (e[n] === void 0) {
                    we("PropertyBinding: Can not bind to objectName of node undefined.", this);
                    return
                }
                e = e[n]
            }
            if (l !== void 0) {
                if (e[l] === void 0) {
                    we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return
                }
                e = e[l]
            }
        }
        const a = e[r];
        if (a === void 0) {
            const l = t.nodeName;
            we("PropertyBinding: Trying to update property for track: " + l + "." + r + " but it wasn't found.", e);
            return
        }
        let o = this.Versioning.None;
        this.targetObject = e,
        e.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : e.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
        let c = this.BindingType.Direct;
        if (s !== void 0) {
            if (r === "morphTargetInfluences") {
                if (!e.geometry) {
                    we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return
                }
                if (!e.geometry.morphAttributes) {
                    we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    return
                }
                e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s])
            }
            c = this.BindingType.ArrayElement,
            this.resolvedProperty = a,
            this.propertyIndex = s
        } else
            a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray,
            this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray,
            this.resolvedProperty = a) : this.propertyName = r;
        this.getValue = this.GetterByBindingType[c],
        this.setValue = this.SetterByBindingTypeAndVersioning[c][o]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
Qe.Composite = Pu;
Qe.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Qe.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Qe.prototype.GetterByBindingType = [Qe.prototype._getValue_direct, Qe.prototype._getValue_array, Qe.prototype._getValue_arrayElement, Qe.prototype._getValue_toArray];
Qe.prototype.SetterByBindingTypeAndVersioning = [[Qe.prototype._setValue_direct, Qe.prototype._setValue_direct_setNeedsUpdate, Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Qe.prototype._setValue_array, Qe.prototype._setValue_array_setNeedsUpdate, Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Qe.prototype._setValue_arrayElement, Qe.prototype._setValue_arrayElement_setNeedsUpdate, Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Qe.prototype._setValue_fromArray, Qe.prototype._setValue_fromArray_setNeedsUpdate, Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
const rl = new Ve;
class t_ {
    constructor(e, t, n=0, r=1 / 0) {
        this.ray = new Ki(e,t),
        this.near = n,
        this.far = r,
        this.camera = null,
        this.layers = new qa,
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }
    }
    set(e, t) {
        this.ray.set(e, t)
    }
    setFromCamera(e, t) {
        t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(),
        this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        this.camera = t) : we("Raycaster: Unsupported camera type: " + t.type)
    }
    setFromXRController(e) {
        return rl.identity().extractRotation(e.matrixWorld),
        this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(rl),
        this
    }
    intersectObject(e, t=!0, n=[]) {
        return Pa(e, this, n, t),
        n.sort(sl),
        n
    }
    intersectObjects(e, t=!0, n=[]) {
        for (let r = 0, s = e.length; r < s; r++)
            Pa(e[r], this, n, t);
        return n.sort(sl),
        n
    }
}
function sl(i, e) {
    return i.distance - e.distance
}
function Pa(i, e, t, n) {
    let r = !0;
    if (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (r = !1),
    r === !0 && n === !0) {
        const s = i.children;
        for (let a = 0, o = s.length; a < o; a++)
            Pa(s[a], e, t, !0)
    }
}
function al(i, e, t, n) {
    const r = Du(n);
    switch (t) {
    case Hl:
        return i * e;
    case Oa:
        return i * e / r.components * r.byteLength;
    case Ba:
        return i * e / r.components * r.byteLength;
    case xi:
        return i * e * 2 / r.components * r.byteLength;
    case za:
        return i * e * 2 / r.components * r.byteLength;
    case Wl:
        return i * e * 3 / r.components * r.byteLength;
    case Vt:
        return i * e * 4 / r.components * r.byteLength;
    case Va:
        return i * e * 4 / r.components * r.byteLength;
    case Lr:
    case Ir:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ur:
    case Nr:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Zs:
    case Js:
        return Math.max(i, 16) * Math.max(e, 8) / 4;
    case $s:
    case js:
        return Math.max(i, 8) * Math.max(e, 8) / 2;
    case Qs:
    case ea:
    case na:
    case ia:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ta:
    case ra:
    case sa:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case aa:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case oa:
        return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case la:
        return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case ca:
        return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ha:
        return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case ua:
        return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case da:
        return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case fa:
        return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case pa:
        return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ma:
        return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ga:
        return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case _a:
        return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case xa:
        return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case va:
        return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Ma:
    case Sa:
    case ya:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case ba:
    case Ea:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Ta:
    case Aa:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16
    }
    throw new Error(`Unable to determine texture byte length for ${t} format.`)
}
function Du(i) {
    switch (i) {
    case Ut:
    case zl:
        return {
            byteLength: 1,
            components: 1
        };
    case Gi:
    case Vl:
    case vn:
        return {
            byteLength: 2,
            components: 1
        };
    case Na:
    case Fa:
        return {
            byteLength: 2,
            components: 4
        };
    case rn:
    case Ua:
    case zt:
        return {
            byteLength: 4,
            components: 1
        };
    case kl:
    case Gl:
        return {
            byteLength: 4,
            components: 3
        }
    }
    throw new Error(`Unknown texture type ${i}.`)
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: Ia
    }
}));
typeof window < "u" && (window.__THREE__ ? be("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ia);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function oc() {
    let i = null
      , e = !1
      , t = null
      , n = null;
    function r(s, a) {
        t(s, a),
        n = i.requestAnimationFrame(r)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = i.requestAnimationFrame(r),
            e = !0)
        },
        stop: function() {
            i.cancelAnimationFrame(n),
            e = !1
        },
        setAnimationLoop: function(s) {
            t = s
        },
        setContext: function(s) {
            i = s
        }
    }
}
function Lu(i) {
    const e = new WeakMap;
    function t(o, c) {
        const l = o.array
          , u = o.usage
          , f = l.byteLength
          , h = i.createBuffer();
        i.bindBuffer(c, h),
        i.bufferData(c, l, u),
        o.onUploadCallback();
        let d;
        if (l instanceof Float32Array)
            d = i.FLOAT;
        else if (typeof Float16Array < "u" && l instanceof Float16Array)
            d = i.HALF_FLOAT;
        else if (l instanceof Uint16Array)
            o.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
        else if (l instanceof Int16Array)
            d = i.SHORT;
        else if (l instanceof Uint32Array)
            d = i.UNSIGNED_INT;
        else if (l instanceof Int32Array)
            d = i.INT;
        else if (l instanceof Int8Array)
            d = i.BYTE;
        else if (l instanceof Uint8Array)
            d = i.UNSIGNED_BYTE;
        else if (l instanceof Uint8ClampedArray)
            d = i.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
        return {
            buffer: h,
            type: d,
            bytesPerElement: l.BYTES_PER_ELEMENT,
            version: o.version,
            size: f
        }
    }
    function n(o, c, l) {
        const u = c.array
          , f = c.updateRanges;
        if (i.bindBuffer(l, o),
        f.length === 0)
            i.bufferSubData(l, 0, u);
        else {
            f.sort( (d, g) => d.start - g.start);
            let h = 0;
            for (let d = 1; d < f.length; d++) {
                const g = f[h]
                  , M = f[d];
                M.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, M.start + M.count - g.start) : (++h,
                f[h] = M)
            }
            f.length = h + 1;
            for (let d = 0, g = f.length; d < g; d++) {
                const M = f[d];
                i.bufferSubData(l, M.start * u.BYTES_PER_ELEMENT, u, M.start, M.count)
            }
            c.clearUpdateRanges()
        }
        c.onUploadCallback()
    }
    function r(o) {
        return o.isInterleavedBufferAttribute && (o = o.data),
        e.get(o)
    }
    function s(o) {
        o.isInterleavedBufferAttribute && (o = o.data);
        const c = e.get(o);
        c && (i.deleteBuffer(c.buffer),
        e.delete(o))
    }
    function a(o, c) {
        if (o.isInterleavedBufferAttribute && (o = o.data),
        o.isGLBufferAttribute) {
            const u = e.get(o);
            (!u || u.version < o.version) && e.set(o, {
                buffer: o.buffer,
                type: o.type,
                bytesPerElement: o.elementSize,
                version: o.version
            });
            return
        }
        const l = e.get(o);
        if (l === void 0)
            e.set(o, t(o, c));
        else if (l.version < o.version) {
            if (l.size !== o.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            n(l.buffer, o, c),
            l.version = o.version
        }
    }
    return {
        get: r,
        remove: s,
        update: a
    }
}
var Iu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , Uu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , Nu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , Fu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Ou = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , Bu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , zu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , Vu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , ku = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`
  , Gu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`
  , Hu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , Wu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , Xu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , qu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , Yu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , Ku = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , $u = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , Zu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , ju = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , Ju = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`
  , Qu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`
  , ed = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`
  , td = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`
  , nd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , id = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , rd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , sd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , ad = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , od = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , ld = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , cd = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , hd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , ud = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`
  , dd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`
  , fd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , pd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , md = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , gd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , _d = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , xd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , vd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , Md = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , Sd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , yd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , bd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , Ed = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , Td = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , Ad = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , wd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , Rd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , Cd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , Pd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , Dd = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , Ld = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , Id = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , Ud = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , Nd = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , Fd = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Od = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Bd = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , zd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , Vd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , kd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , Gd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Hd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , Wd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , Xd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , qd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , Yd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , Kd = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`
  , $d = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , Zd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , jd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , Jd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Qd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , ef = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , tf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , nf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , rf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , sf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , af = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , of = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , lf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`
  , cf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , hf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , uf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , df = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , ff = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , pf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , mf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`
  , gf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , _f = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , xf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , vf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Mf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Sf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , yf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , bf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Ef = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , Tf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , Af = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , wf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , Rf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , Cf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Pf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Df = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , Lf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const If = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , Uf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Nf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Ff = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Of = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Bf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , zf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , Vf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`
  , kf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , Gf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`
  , Hf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , Wf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Xf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , qf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Yf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , Kf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , $f = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Zf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , jf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , Jf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Qf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , ep = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , tp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , np = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , ip = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , rp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , sp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , ap = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , op = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , lp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , cp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , hp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , up = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , dp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Ne = {
    alphahash_fragment: Iu,
    alphahash_pars_fragment: Uu,
    alphamap_fragment: Nu,
    alphamap_pars_fragment: Fu,
    alphatest_fragment: Ou,
    alphatest_pars_fragment: Bu,
    aomap_fragment: zu,
    aomap_pars_fragment: Vu,
    batching_pars_vertex: ku,
    batching_vertex: Gu,
    begin_vertex: Hu,
    beginnormal_vertex: Wu,
    bsdfs: Xu,
    iridescence_fragment: qu,
    bumpmap_pars_fragment: Yu,
    clipping_planes_fragment: Ku,
    clipping_planes_pars_fragment: $u,
    clipping_planes_pars_vertex: Zu,
    clipping_planes_vertex: ju,
    color_fragment: Ju,
    color_pars_fragment: Qu,
    color_pars_vertex: ed,
    color_vertex: td,
    common: nd,
    cube_uv_reflection_fragment: id,
    defaultnormal_vertex: rd,
    displacementmap_pars_vertex: sd,
    displacementmap_vertex: ad,
    emissivemap_fragment: od,
    emissivemap_pars_fragment: ld,
    colorspace_fragment: cd,
    colorspace_pars_fragment: hd,
    envmap_fragment: ud,
    envmap_common_pars_fragment: dd,
    envmap_pars_fragment: fd,
    envmap_pars_vertex: pd,
    envmap_physical_pars_fragment: Td,
    envmap_vertex: md,
    fog_vertex: gd,
    fog_pars_vertex: _d,
    fog_fragment: xd,
    fog_pars_fragment: vd,
    gradientmap_pars_fragment: Md,
    lightmap_pars_fragment: Sd,
    lights_lambert_fragment: yd,
    lights_lambert_pars_fragment: bd,
    lights_pars_begin: Ed,
    lights_toon_fragment: Ad,
    lights_toon_pars_fragment: wd,
    lights_phong_fragment: Rd,
    lights_phong_pars_fragment: Cd,
    lights_physical_fragment: Pd,
    lights_physical_pars_fragment: Dd,
    lights_fragment_begin: Ld,
    lights_fragment_maps: Id,
    lights_fragment_end: Ud,
    logdepthbuf_fragment: Nd,
    logdepthbuf_pars_fragment: Fd,
    logdepthbuf_pars_vertex: Od,
    logdepthbuf_vertex: Bd,
    map_fragment: zd,
    map_pars_fragment: Vd,
    map_particle_fragment: kd,
    map_particle_pars_fragment: Gd,
    metalnessmap_fragment: Hd,
    metalnessmap_pars_fragment: Wd,
    morphinstance_vertex: Xd,
    morphcolor_vertex: qd,
    morphnormal_vertex: Yd,
    morphtarget_pars_vertex: Kd,
    morphtarget_vertex: $d,
    normal_fragment_begin: Zd,
    normal_fragment_maps: jd,
    normal_pars_fragment: Jd,
    normal_pars_vertex: Qd,
    normal_vertex: ef,
    normalmap_pars_fragment: tf,
    clearcoat_normal_fragment_begin: nf,
    clearcoat_normal_fragment_maps: rf,
    clearcoat_pars_fragment: sf,
    iridescence_pars_fragment: af,
    opaque_fragment: of,
    packing: lf,
    premultiplied_alpha_fragment: cf,
    project_vertex: hf,
    dithering_fragment: uf,
    dithering_pars_fragment: df,
    roughnessmap_fragment: ff,
    roughnessmap_pars_fragment: pf,
    shadowmap_pars_fragment: mf,
    shadowmap_pars_vertex: gf,
    shadowmap_vertex: _f,
    shadowmask_pars_fragment: xf,
    skinbase_vertex: vf,
    skinning_pars_vertex: Mf,
    skinning_vertex: Sf,
    skinnormal_vertex: yf,
    specularmap_fragment: bf,
    specularmap_pars_fragment: Ef,
    tonemapping_fragment: Tf,
    tonemapping_pars_fragment: Af,
    transmission_fragment: wf,
    transmission_pars_fragment: Rf,
    uv_pars_fragment: Cf,
    uv_pars_vertex: Pf,
    uv_vertex: Df,
    worldpos_vertex: Lf,
    background_vert: If,
    background_frag: Uf,
    backgroundCube_vert: Nf,
    backgroundCube_frag: Ff,
    cube_vert: Of,
    cube_frag: Bf,
    depth_vert: zf,
    depth_frag: Vf,
    distance_vert: kf,
    distance_frag: Gf,
    equirect_vert: Hf,
    equirect_frag: Wf,
    linedashed_vert: Xf,
    linedashed_frag: qf,
    meshbasic_vert: Yf,
    meshbasic_frag: Kf,
    meshlambert_vert: $f,
    meshlambert_frag: Zf,
    meshmatcap_vert: jf,
    meshmatcap_frag: Jf,
    meshnormal_vert: Qf,
    meshnormal_frag: ep,
    meshphong_vert: tp,
    meshphong_frag: np,
    meshphysical_vert: ip,
    meshphysical_frag: rp,
    meshtoon_vert: sp,
    meshtoon_frag: ap,
    points_vert: op,
    points_frag: lp,
    shadow_vert: cp,
    shadow_frag: hp,
    sprite_vert: up,
    sprite_frag: dp
}
  , ae = {
    common: {
        diffuse: {
            value: new ke(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Ie
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Ie
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new Ie
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new Ie
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        },
        dfgLUT: {
            value: null
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new Ie
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new Ie
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new Ie
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new Ie
        },
        normalScale: {
            value: new Ge(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new Ie
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new Ie
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new Ie
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new Ie
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new ke(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new ke(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Ie
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new Ie
        }
    },
    sprite: {
        diffuse: {
            value: new ke(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Ge(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Ie
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Ie
        },
        alphaTest: {
            value: 0
        }
    }
}
  , en = {
    basic: {
        uniforms: At([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.fog]),
        vertexShader: Ne.meshbasic_vert,
        fragmentShader: Ne.meshbasic_frag
    },
    lambert: {
        uniforms: At([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, {
            emissive: {
                value: new ke(0)
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Ne.meshlambert_vert,
        fragmentShader: Ne.meshlambert_frag
    },
    phong: {
        uniforms: At([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, {
            emissive: {
                value: new ke(0)
            },
            specular: {
                value: new ke(1118481)
            },
            shininess: {
                value: 30
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Ne.meshphong_vert,
        fragmentShader: Ne.meshphong_frag
    },
    standard: {
        uniforms: At([ae.common, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.roughnessmap, ae.metalnessmap, ae.fog, ae.lights, {
            emissive: {
                value: new ke(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Ne.meshphysical_vert,
        fragmentShader: Ne.meshphysical_frag
    },
    toon: {
        uniforms: At([ae.common, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.gradientmap, ae.fog, ae.lights, {
            emissive: {
                value: new ke(0)
            }
        }]),
        vertexShader: Ne.meshtoon_vert,
        fragmentShader: Ne.meshtoon_frag
    },
    matcap: {
        uniforms: At([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: Ne.meshmatcap_vert,
        fragmentShader: Ne.meshmatcap_frag
    },
    points: {
        uniforms: At([ae.points, ae.fog]),
        vertexShader: Ne.points_vert,
        fragmentShader: Ne.points_frag
    },
    dashed: {
        uniforms: At([ae.common, ae.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: Ne.linedashed_vert,
        fragmentShader: Ne.linedashed_frag
    },
    depth: {
        uniforms: At([ae.common, ae.displacementmap]),
        vertexShader: Ne.depth_vert,
        fragmentShader: Ne.depth_frag
    },
    normal: {
        uniforms: At([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Ne.meshnormal_vert,
        fragmentShader: Ne.meshnormal_frag
    },
    sprite: {
        uniforms: At([ae.sprite, ae.fog]),
        vertexShader: Ne.sprite_vert,
        fragmentShader: Ne.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new Ie
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: Ne.background_vert,
        fragmentShader: Ne.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new Ie
            }
        },
        vertexShader: Ne.backgroundCube_vert,
        fragmentShader: Ne.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: Ne.cube_vert,
        fragmentShader: Ne.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Ne.equirect_vert,
        fragmentShader: Ne.equirect_frag
    },
    distance: {
        uniforms: At([ae.common, ae.displacementmap, {
            referencePosition: {
                value: new U
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: Ne.distance_vert,
        fragmentShader: Ne.distance_frag
    },
    shadow: {
        uniforms: At([ae.lights, ae.fog, {
            color: {
                value: new ke(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Ne.shadow_vert,
        fragmentShader: Ne.shadow_frag
    }
};
en.physical = {
    uniforms: At([en.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new Ie
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new Ie
        },
        clearcoatNormalScale: {
            value: new Ge(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new Ie
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new Ie
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new Ie
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new ke(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new Ie
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new Ie
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new Ie
        },
        transmissionSamplerSize: {
            value: new Ge
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new Ie
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new ke(0)
        },
        specularColor: {
            value: new ke(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new Ie
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new Ie
        },
        anisotropyVector: {
            value: new Ge
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new Ie
        }
    }]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
};
const Cr = {
    r: 0,
    b: 0,
    g: 0
}
  , kn = new sn
  , fp = new Ve;
function pp(i, e, t, n, r, s) {
    const a = new ke(0);
    let o = r === !0 ? 0 : 1, c, l, u = null, f = 0, h = null;
    function d(S) {
        let T = S.isScene === !0 ? S.background : null;
        if (T && T.isTexture) {
            const E = S.backgroundBlurriness > 0;
            T = e.get(T, E)
        }
        return T
    }
    function g(S) {
        let T = !1;
        const E = d(S);
        E === null ? m(a, o) : E && E.isColor && (m(E, 1),
        T = !0);
        const R = i.xr.getEnvironmentBlendMode();
        R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s),
        (i.autoClear || T) && (t.buffers.depth.setTest(!0),
        t.buffers.depth.setMask(!0),
        t.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil))
    }
    function M(S, T) {
        const E = d(T);
        E && (E.isCubeTexture || E.mapping === Xr) ? (l === void 0 && (l = new Pt(new $i(1,1,1),new Ft({
            name: "BackgroundCubeMaterial",
            uniforms: yi(en.backgroundCube.uniforms),
            vertexShader: en.backgroundCube.vertexShader,
            fragmentShader: en.backgroundCube.fragmentShader,
            side: Rt,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        l.geometry.deleteAttribute("normal"),
        l.geometry.deleteAttribute("uv"),
        l.onBeforeRender = function(R, A, P) {
            this.matrixWorld.copyPosition(P.matrixWorld)
        }
        ,
        Object.defineProperty(l.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        n.update(l)),
        kn.copy(T.backgroundRotation),
        kn.x *= -1,
        kn.y *= -1,
        kn.z *= -1,
        E.isCubeTexture && E.isRenderTargetTexture === !1 && (kn.y *= -1,
        kn.z *= -1),
        l.material.uniforms.envMap.value = E,
        l.material.uniforms.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1,
        l.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness,
        l.material.uniforms.backgroundIntensity.value = T.backgroundIntensity,
        l.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(kn)),
        l.material.toneMapped = We.getTransfer(E.colorSpace) !== $e,
        (u !== E || f !== E.version || h !== i.toneMapping) && (l.material.needsUpdate = !0,
        u = E,
        f = E.version,
        h = i.toneMapping),
        l.layers.enableAll(),
        S.unshift(l, l.geometry, l.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new Pt(new Si(2,2),new Ft({
            name: "BackgroundMaterial",
            uniforms: yi(en.background.uniforms),
            vertexShader: en.background.vertexShader,
            fragmentShader: en.background.fragmentShader,
            side: Ln,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        c.geometry.deleteAttribute("normal"),
        Object.defineProperty(c.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        n.update(c)),
        c.material.uniforms.t2D.value = E,
        c.material.uniforms.backgroundIntensity.value = T.backgroundIntensity,
        c.material.toneMapped = We.getTransfer(E.colorSpace) !== $e,
        E.matrixAutoUpdate === !0 && E.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(E.matrix),
        (u !== E || f !== E.version || h !== i.toneMapping) && (c.material.needsUpdate = !0,
        u = E,
        f = E.version,
        h = i.toneMapping),
        c.layers.enableAll(),
        S.unshift(c, c.geometry, c.material, 0, 0, null))
    }
    function m(S, T) {
        S.getRGB(Cr, ic(i)),
        t.buffers.color.setClear(Cr.r, Cr.g, Cr.b, T, s)
    }
    function p() {
        l !== void 0 && (l.geometry.dispose(),
        l.material.dispose(),
        l = void 0),
        c !== void 0 && (c.geometry.dispose(),
        c.material.dispose(),
        c = void 0)
    }
    return {
        getClearColor: function() {
            return a
        },
        setClearColor: function(S, T=1) {
            a.set(S),
            o = T,
            m(a, o)
        },
        getClearAlpha: function() {
            return o
        },
        setClearAlpha: function(S) {
            o = S,
            m(a, o)
        },
        render: g,
        addToRenderList: M,
        dispose: p
    }
}
function mp(i, e) {
    const t = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , n = {}
      , r = h(null);
    let s = r
      , a = !1;
    function o(w, N, F, k, G) {
        let B = !1;
        const V = f(w, k, F, N);
        s !== V && (s = V,
        l(s.object)),
        B = d(w, k, F, G),
        B && g(w, k, F, G),
        G !== null && e.update(G, i.ELEMENT_ARRAY_BUFFER),
        (B || a) && (a = !1,
        E(w, N, F, k),
        G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(G).buffer))
    }
    function c() {
        return i.createVertexArray()
    }
    function l(w) {
        return i.bindVertexArray(w)
    }
    function u(w) {
        return i.deleteVertexArray(w)
    }
    function f(w, N, F, k) {
        const G = k.wireframe === !0;
        let B = n[N.id];
        B === void 0 && (B = {},
        n[N.id] = B);
        const V = w.isInstancedMesh === !0 ? w.id : 0;
        let Q = B[V];
        Q === void 0 && (Q = {},
        B[V] = Q);
        let Z = Q[F.id];
        Z === void 0 && (Z = {},
        Q[F.id] = Z);
        let ce = Z[G];
        return ce === void 0 && (ce = h(c()),
        Z[G] = ce),
        ce
    }
    function h(w) {
        const N = []
          , F = []
          , k = [];
        for (let G = 0; G < t; G++)
            N[G] = 0,
            F[G] = 0,
            k[G] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: N,
            enabledAttributes: F,
            attributeDivisors: k,
            object: w,
            attributes: {},
            index: null
        }
    }
    function d(w, N, F, k) {
        const G = s.attributes
          , B = N.attributes;
        let V = 0;
        const Q = F.getAttributes();
        for (const Z in Q)
            if (Q[Z].location >= 0) {
                const pe = G[Z];
                let ue = B[Z];
                if (ue === void 0 && (Z === "instanceMatrix" && w.instanceMatrix && (ue = w.instanceMatrix),
                Z === "instanceColor" && w.instanceColor && (ue = w.instanceColor)),
                pe === void 0 || pe.attribute !== ue || ue && pe.data !== ue.data)
                    return !0;
                V++
            }
        return s.attributesNum !== V || s.index !== k
    }
    function g(w, N, F, k) {
        const G = {}
          , B = N.attributes;
        let V = 0;
        const Q = F.getAttributes();
        for (const Z in Q)
            if (Q[Z].location >= 0) {
                let pe = B[Z];
                pe === void 0 && (Z === "instanceMatrix" && w.instanceMatrix && (pe = w.instanceMatrix),
                Z === "instanceColor" && w.instanceColor && (pe = w.instanceColor));
                const ue = {};
                ue.attribute = pe,
                pe && pe.data && (ue.data = pe.data),
                G[Z] = ue,
                V++
            }
        s.attributes = G,
        s.attributesNum = V,
        s.index = k
    }
    function M() {
        const w = s.newAttributes;
        for (let N = 0, F = w.length; N < F; N++)
            w[N] = 0
    }
    function m(w) {
        p(w, 0)
    }
    function p(w, N) {
        const F = s.newAttributes
          , k = s.enabledAttributes
          , G = s.attributeDivisors;
        F[w] = 1,
        k[w] === 0 && (i.enableVertexAttribArray(w),
        k[w] = 1),
        G[w] !== N && (i.vertexAttribDivisor(w, N),
        G[w] = N)
    }
    function S() {
        const w = s.newAttributes
          , N = s.enabledAttributes;
        for (let F = 0, k = N.length; F < k; F++)
            N[F] !== w[F] && (i.disableVertexAttribArray(F),
            N[F] = 0)
    }
    function T(w, N, F, k, G, B, V) {
        V === !0 ? i.vertexAttribIPointer(w, N, F, G, B) : i.vertexAttribPointer(w, N, F, k, G, B)
    }
    function E(w, N, F, k) {
        M();
        const G = k.attributes
          , B = F.getAttributes()
          , V = N.defaultAttributeValues;
        for (const Q in B) {
            const Z = B[Q];
            if (Z.location >= 0) {
                let ce = G[Q];
                if (ce === void 0 && (Q === "instanceMatrix" && w.instanceMatrix && (ce = w.instanceMatrix),
                Q === "instanceColor" && w.instanceColor && (ce = w.instanceColor)),
                ce !== void 0) {
                    const pe = ce.normalized
                      , ue = ce.itemSize
                      , Ue = e.get(ce);
                    if (Ue === void 0)
                        continue;
                    const at = Ue.buffer
                      , rt = Ue.type
                      , K = Ue.bytesPerElement
                      , ne = rt === i.INT || rt === i.UNSIGNED_INT || ce.gpuType === Ua;
                    if (ce.isInterleavedBufferAttribute) {
                        const se = ce.data
                          , Le = se.stride
                          , Ae = ce.offset;
                        if (se.isInstancedInterleavedBuffer) {
                            for (let Ce = 0; Ce < Z.locationSize; Ce++)
                                p(Z.location + Ce, se.meshPerAttribute);
                            w.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = se.meshPerAttribute * se.count)
                        } else
                            for (let Ce = 0; Ce < Z.locationSize; Ce++)
                                m(Z.location + Ce);
                        i.bindBuffer(i.ARRAY_BUFFER, at);
                        for (let Ce = 0; Ce < Z.locationSize; Ce++)
                            T(Z.location + Ce, ue / Z.locationSize, rt, pe, Le * K, (Ae + ue / Z.locationSize * Ce) * K, ne)
                    } else {
                        if (ce.isInstancedBufferAttribute) {
                            for (let se = 0; se < Z.locationSize; se++)
                                p(Z.location + se, ce.meshPerAttribute);
                            w.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ce.meshPerAttribute * ce.count)
                        } else
                            for (let se = 0; se < Z.locationSize; se++)
                                m(Z.location + se);
                        i.bindBuffer(i.ARRAY_BUFFER, at);
                        for (let se = 0; se < Z.locationSize; se++)
                            T(Z.location + se, ue / Z.locationSize, rt, pe, ue * K, ue / Z.locationSize * se * K, ne)
                    }
                } else if (V !== void 0) {
                    const pe = V[Q];
                    if (pe !== void 0)
                        switch (pe.length) {
                        case 2:
                            i.vertexAttrib2fv(Z.location, pe);
                            break;
                        case 3:
                            i.vertexAttrib3fv(Z.location, pe);
                            break;
                        case 4:
                            i.vertexAttrib4fv(Z.location, pe);
                            break;
                        default:
                            i.vertexAttrib1fv(Z.location, pe)
                        }
                }
            }
        }
        S()
    }
    function R() {
        y();
        for (const w in n) {
            const N = n[w];
            for (const F in N) {
                const k = N[F];
                for (const G in k) {
                    const B = k[G];
                    for (const V in B)
                        u(B[V].object),
                        delete B[V];
                    delete k[G]
                }
            }
            delete n[w]
        }
    }
    function A(w) {
        if (n[w.id] === void 0)
            return;
        const N = n[w.id];
        for (const F in N) {
            const k = N[F];
            for (const G in k) {
                const B = k[G];
                for (const V in B)
                    u(B[V].object),
                    delete B[V];
                delete k[G]
            }
        }
        delete n[w.id]
    }
    function P(w) {
        for (const N in n) {
            const F = n[N];
            for (const k in F) {
                const G = F[k];
                if (G[w.id] === void 0)
                    continue;
                const B = G[w.id];
                for (const V in B)
                    u(B[V].object),
                    delete B[V];
                delete G[w.id]
            }
        }
    }
    function x(w) {
        for (const N in n) {
            const F = n[N]
              , k = w.isInstancedMesh === !0 ? w.id : 0
              , G = F[k];
            if (G !== void 0) {
                for (const B in G) {
                    const V = G[B];
                    for (const Q in V)
                        u(V[Q].object),
                        delete V[Q];
                    delete G[B]
                }
                delete F[k],
                Object.keys(F).length === 0 && delete n[N]
            }
        }
    }
    function y() {
        W(),
        a = !0,
        s !== r && (s = r,
        l(s.object))
    }
    function W() {
        r.geometry = null,
        r.program = null,
        r.wireframe = !1
    }
    return {
        setup: o,
        reset: y,
        resetDefaultState: W,
        dispose: R,
        releaseStatesOfGeometry: A,
        releaseStatesOfObject: x,
        releaseStatesOfProgram: P,
        initAttributes: M,
        enableAttribute: m,
        disableUnusedAttributes: S
    }
}
function gp(i, e, t) {
    let n;
    function r(l) {
        n = l
    }
    function s(l, u) {
        i.drawArrays(n, l, u),
        t.update(u, n, 1)
    }
    function a(l, u, f) {
        f !== 0 && (i.drawArraysInstanced(n, l, u, f),
        t.update(u, n, f))
    }
    function o(l, u, f) {
        if (f === 0)
            return;
        e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, f);
        let d = 0;
        for (let g = 0; g < f; g++)
            d += u[g];
        t.update(d, n, 1)
    }
    function c(l, u, f, h) {
        if (f === 0)
            return;
        const d = e.get("WEBGL_multi_draw");
        if (d === null)
            for (let g = 0; g < l.length; g++)
                a(l[g], u[g], h[g]);
        else {
            d.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, h, 0, f);
            let g = 0;
            for (let M = 0; M < f; M++)
                g += u[M] * h[M];
            t.update(g, n, 1)
        }
    }
    this.setMode = r,
    this.render = s,
    this.renderInstances = a,
    this.renderMultiDraw = o,
    this.renderMultiDrawInstances = c
}
function _p(i, e, t, n) {
    let r;
    function s() {
        if (r !== void 0)
            return r;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            const P = e.get("EXT_texture_filter_anisotropic");
            r = i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            r = 0;
        return r
    }
    function a(P) {
        return !(P !== Vt && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function o(P) {
        const x = P === vn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
        return !(P !== Ut && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && P !== zt && !x)
    }
    function c(P) {
        if (P === "highp") {
            if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
                return "highp";
            P = "mediump"
        }
        return P === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let l = t.precision !== void 0 ? t.precision : "highp";
    const u = c(l);
    u !== l && (be("WebGLRenderer:", l, "not supported, using", u, "instead."),
    l = u);
    const f = t.logarithmicDepthBuffer === !0
      , h = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control")
      , d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)
      , g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , M = i.getParameter(i.MAX_TEXTURE_SIZE)
      , m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
      , p = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , S = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)
      , T = i.getParameter(i.MAX_VARYING_VECTORS)
      , E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)
      , R = i.getParameter(i.MAX_SAMPLES)
      , A = i.getParameter(i.SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: s,
        getMaxPrecision: c,
        textureFormatReadable: a,
        textureTypeReadable: o,
        precision: l,
        logarithmicDepthBuffer: f,
        reversedDepthBuffer: h,
        maxTextures: d,
        maxVertexTextures: g,
        maxTextureSize: M,
        maxCubemapSize: m,
        maxAttributes: p,
        maxVertexUniforms: S,
        maxVaryings: T,
        maxFragmentUniforms: E,
        maxSamples: R,
        samples: A
    }
}
function xp(i) {
    const e = this;
    let t = null
      , n = 0
      , r = !1
      , s = !1;
    const a = new Hn
      , o = new Ie
      , c = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = c,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(f, h) {
        const d = f.length !== 0 || h || n !== 0 || r;
        return r = h,
        n = f.length,
        d
    }
    ,
    this.beginShadows = function() {
        s = !0,
        u(null)
    }
    ,
    this.endShadows = function() {
        s = !1
    }
    ,
    this.setGlobalState = function(f, h) {
        t = u(f, h, 0)
    }
    ,
    this.setState = function(f, h, d) {
        const g = f.clippingPlanes
          , M = f.clipIntersection
          , m = f.clipShadows
          , p = i.get(f);
        if (!r || g === null || g.length === 0 || s && !m)
            s ? u(null) : l();
        else {
            const S = s ? 0 : n
              , T = S * 4;
            let E = p.clippingState || null;
            c.value = E,
            E = u(g, h, T, d);
            for (let R = 0; R !== T; ++R)
                E[R] = t[R];
            p.clippingState = E,
            this.numIntersection = M ? this.numPlanes : 0,
            this.numPlanes += S
        }
    }
    ;
    function l() {
        c.value !== t && (c.value = t,
        c.needsUpdate = n > 0),
        e.numPlanes = n,
        e.numIntersection = 0
    }
    function u(f, h, d, g) {
        const M = f !== null ? f.length : 0;
        let m = null;
        if (M !== 0) {
            if (m = c.value,
            g !== !0 || m === null) {
                const p = d + M * 4
                  , S = h.matrixWorldInverse;
                o.getNormalMatrix(S),
                (m === null || m.length < p) && (m = new Float32Array(p));
                for (let T = 0, E = d; T !== M; ++T,
                E += 4)
                    a.copy(f[T]).applyMatrix4(S, o),
                    a.normal.toArray(m, E),
                    m[E + 3] = a.constant
            }
            c.value = m,
            c.needsUpdate = !0
        }
        return e.numPlanes = M,
        e.numIntersection = 0,
        m
    }
}
const Dn = 4
  , ol = [.125, .215, .35, .446, .526, .582]
  , Xn = 20
  , vp = 256
  , Fi = new Yi
  , ll = new ke;
let Ds = null
  , Ls = 0
  , Is = 0
  , Us = !1;
const Mp = new U;
class cl {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._sizeLods = [],
        this._sigmas = [],
        this._lodMeshes = [],
        this._backgroundBox = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._blurMaterial = null,
        this._ggxMaterial = null
    }
    fromScene(e, t=0, n=.1, r=100, s={}) {
        const {size: a=256, position: o=Mp} = s;
        Ds = this._renderer.getRenderTarget(),
        Ls = this._renderer.getActiveCubeFace(),
        Is = this._renderer.getActiveMipmapLevel(),
        Us = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(a);
        const c = this._allocateTargets();
        return c.depthBuffer = !0,
        this._sceneToCubeUV(e, n, r, c, o),
        t > 0 && this._blur(c, 0, 0, t),
        this._applyPMREM(c),
        this._cleanup(c),
        c
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = dl(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = ul(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose(),
        this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose())
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._ggxMaterial !== null && this._ggxMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodMeshes.length; e++)
            this._lodMeshes[e].geometry.dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Ds, Ls, Is),
        this._renderer.xr.enabled = Us,
        e.scissorTest = !1,
        fi(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === Kn || e.mapping === _i ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        Ds = this._renderer.getRenderTarget(),
        Ls = this._renderer.getActiveCubeFace(),
        Is = this._renderer.getActiveMipmapLevel(),
        Us = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: lt,
            minFilter: lt,
            generateMipmaps: !1,
            type: vn,
            format: Vt,
            colorSpace: vi,
            depthBuffer: !1
        }
          , r = hl(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = hl(e, t, n);
            const {_lodMax: s} = this;
            ({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = Sp(s)),
            this._blurMaterial = bp(s, e, t),
            this._ggxMaterial = yp(s, e, t)
        }
        return r
    }
    _compileMaterial(e) {
        const t = new Pt(new Gt,e);
        this._renderer.compile(t, Fi)
    }
    _sceneToCubeUV(e, t, n, r, s) {
        const c = new wt(90,1,t,n)
          , l = [1, -1, 1, 1, 1, 1]
          , u = [1, 1, 1, -1, -1, -1]
          , f = this._renderer
          , h = f.autoClear
          , d = f.toneMapping;
        f.getClearColor(ll),
        f.toneMapping = nn,
        f.autoClear = !1,
        f.state.buffers.depth.getReversed() && (f.setRenderTarget(r),
        f.clearDepth(),
        f.setRenderTarget(null)),
        this._backgroundBox === null && (this._backgroundBox = new Pt(new $i,new jl({
            name: "PMREM.Background",
            side: Rt,
            depthWrite: !1,
            depthTest: !1
        })));
        const M = this._backgroundBox
          , m = M.material;
        let p = !1;
        const S = e.background;
        S ? S.isColor && (m.color.copy(S),
        e.background = null,
        p = !0) : (m.color.copy(ll),
        p = !0);
        for (let T = 0; T < 6; T++) {
            const E = T % 3;
            E === 0 ? (c.up.set(0, l[T], 0),
            c.position.set(s.x, s.y, s.z),
            c.lookAt(s.x + u[T], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[T]),
            c.position.set(s.x, s.y, s.z),
            c.lookAt(s.x, s.y + u[T], s.z)) : (c.up.set(0, l[T], 0),
            c.position.set(s.x, s.y, s.z),
            c.lookAt(s.x, s.y, s.z + u[T]));
            const R = this._cubeSize;
            fi(r, E * R, T > 2 ? R : 0, R, R),
            f.setRenderTarget(r),
            p && f.render(M, c),
            f.render(e, c)
        }
        f.toneMapping = d,
        f.autoClear = h,
        e.background = S
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer
          , r = e.mapping === Kn || e.mapping === _i;
        r ? (this._cubemapMaterial === null && (this._cubemapMaterial = dl()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ul());
        const s = r ? this._cubemapMaterial : this._equirectMaterial
          , a = this._lodMeshes[0];
        a.material = s;
        const o = s.uniforms;
        o.envMap.value = e;
        const c = this._cubeSize;
        fi(t, 0, 0, 3 * c, 2 * c),
        n.setRenderTarget(t),
        n.render(a, Fi)
    }
    _applyPMREM(e) {
        const t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        const r = this._lodMeshes.length;
        for (let s = 1; s < r; s++)
            this._applyGGXFilter(e, s - 1, s);
        t.autoClear = n
    }
    _applyGGXFilter(e, t, n) {
        const r = this._renderer
          , s = this._pingPongRenderTarget
          , a = this._ggxMaterial
          , o = this._lodMeshes[n];
        o.material = a;
        const c = a.uniforms
          , l = n / (this._lodMeshes.length - 1)
          , u = t / (this._lodMeshes.length - 1)
          , f = Math.sqrt(l * l - u * u)
          , h = 0 + l * 1.25
          , d = f * h
          , {_lodMax: g} = this
          , M = this._sizeLods[n]
          , m = 3 * M * (n > g - Dn ? n - g + Dn : 0)
          , p = 4 * (this._cubeSize - M);
        c.envMap.value = e.texture,
        c.roughness.value = d,
        c.mipInt.value = g - t,
        fi(s, m, p, 3 * M, 2 * M),
        r.setRenderTarget(s),
        r.render(o, Fi),
        c.envMap.value = s.texture,
        c.roughness.value = 0,
        c.mipInt.value = g - n,
        fi(e, m, p, 3 * M, 2 * M),
        r.setRenderTarget(e),
        r.render(o, Fi)
    }
    _blur(e, t, n, r, s) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, r, "latitudinal", s),
        this._halfBlur(a, e, n, n, r, "longitudinal", s)
    }
    _halfBlur(e, t, n, r, s, a, o) {
        const c = this._renderer
          , l = this._blurMaterial;
        a !== "latitudinal" && a !== "longitudinal" && we("blur direction must be either latitudinal or longitudinal!");
        const u = 3
          , f = this._lodMeshes[r];
        f.material = l;
        const h = l.uniforms
          , d = this._sizeLods[n] - 1
          , g = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Xn - 1)
          , M = s / g
          , m = isFinite(s) ? 1 + Math.floor(u * M) : Xn;
        m > Xn && be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);
        const p = [];
        let S = 0;
        for (let P = 0; P < Xn; ++P) {
            const x = P / M
              , y = Math.exp(-x * x / 2);
            p.push(y),
            P === 0 ? S += y : P < m && (S += 2 * y)
        }
        for (let P = 0; P < p.length; P++)
            p[P] = p[P] / S;
        h.envMap.value = e.texture,
        h.samples.value = m,
        h.weights.value = p,
        h.latitudinal.value = a === "latitudinal",
        o && (h.poleAxis.value = o);
        const {_lodMax: T} = this;
        h.dTheta.value = g,
        h.mipInt.value = T - n;
        const E = this._sizeLods[r]
          , R = 3 * E * (r > T - Dn ? r - T + Dn : 0)
          , A = 4 * (this._cubeSize - E);
        fi(t, R, A, 3 * E, 2 * E),
        c.setRenderTarget(t),
        c.render(f, Fi)
    }
}
function Sp(i) {
    const e = []
      , t = []
      , n = [];
    let r = i;
    const s = i - Dn + 1 + ol.length;
    for (let a = 0; a < s; a++) {
        const o = Math.pow(2, r);
        e.push(o);
        let c = 1 / o;
        a > i - Dn ? c = ol[a - i + Dn - 1] : a === 0 && (c = 0),
        t.push(c);
        const l = 1 / (o - 2)
          , u = -l
          , f = 1 + l
          , h = [u, u, f, u, f, f, u, u, f, f, u, f]
          , d = 6
          , g = 6
          , M = 3
          , m = 2
          , p = 1
          , S = new Float32Array(M * g * d)
          , T = new Float32Array(m * g * d)
          , E = new Float32Array(p * g * d);
        for (let A = 0; A < d; A++) {
            const P = A % 3 * 2 / 3 - 1
              , x = A > 2 ? 0 : -1
              , y = [P, x, 0, P + 2 / 3, x, 0, P + 2 / 3, x + 1, 0, P, x, 0, P + 2 / 3, x + 1, 0, P, x + 1, 0];
            S.set(y, M * g * A),
            T.set(h, m * g * A);
            const W = [A, A, A, A, A, A];
            E.set(W, p * g * A)
        }
        const R = new Gt;
        R.setAttribute("position", new kt(S,M)),
        R.setAttribute("uv", new kt(T,m)),
        R.setAttribute("faceIndex", new kt(E,p)),
        n.push(new Pt(R,null)),
        r > Dn && r--
    }
    return {
        lodMeshes: n,
        sizeLods: e,
        sigmas: t
    }
}
function hl(i, e, t) {
    const n = new Nt(i,e,t);
    return n.texture.mapping = Xr,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function fi(i, e, t, n, r) {
    i.viewport.set(e, t, n, r),
    i.scissor.set(e, t, n, r)
}
function yp(i, e, t) {
    return new Ft({
        name: "PMREMGGXConvolution",
        defines: {
            GGX_SAMPLES: vp,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            roughness: {
                value: 0
            },
            mipInt: {
                value: 0
            }
        },
        vertexShader: Yr(),
        fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
        blending: _n,
        depthTest: !1,
        depthWrite: !1
    })
}
function bp(i, e, t) {
    const n = new Float32Array(Xn)
      , r = new U(0,1,0);
    return new Ft({
        name: "SphericalGaussianBlur",
        defines: {
            n: Xn,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: r
            }
        },
        vertexShader: Yr(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: _n,
        depthTest: !1,
        depthWrite: !1
    })
}
function ul() {
    return new Ft({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Yr(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: _n,
        depthTest: !1,
        depthWrite: !1
    })
}
function dl() {
    return new Ft({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Yr(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: _n,
        depthTest: !1,
        depthWrite: !1
    })
}
function Yr() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
class lc extends Nt {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: e,
            height: e,
            depth: 1
        }
          , r = [n, n, n, n, n, n];
        this.texture = new ec(r),
        this._setTextureOptions(t),
        this.texture.isRenderTargetTexture = !0
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.colorSpace = t.colorSpace,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , r = new $i(5,5,5)
          , s = new Ft({
            name: "CubemapFromEquirect",
            uniforms: yi(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: Rt,
            blending: _n
        });
        s.uniforms.tEquirect.value = t;
        const a = new Pt(r,s)
          , o = t.minFilter;
        return t.minFilter === qn && (t.minFilter = lt),
        new vu(1,10,this).update(e, a),
        t.minFilter = o,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(e, t=!0, n=!0, r=!0) {
        const s = e.getRenderTarget();
        for (let a = 0; a < 6; a++)
            e.setRenderTarget(this, a),
            e.clear(t, n, r);
        e.setRenderTarget(s)
    }
}
function Ep(i) {
    let e = new WeakMap
      , t = new WeakMap
      , n = null;
    function r(h, d=!1) {
        return h == null ? null : d ? a(h) : s(h)
    }
    function s(h) {
        if (h && h.isTexture) {
            const d = h.mapping;
            if (d === jr || d === Jr)
                if (e.has(h)) {
                    const g = e.get(h).texture;
                    return o(g, h.mapping)
                } else {
                    const g = h.image;
                    if (g && g.height > 0) {
                        const M = new lc(g.height);
                        return M.fromEquirectangularTexture(i, h),
                        e.set(h, M),
                        h.addEventListener("dispose", l),
                        o(M.texture, h.mapping)
                    } else
                        return null
                }
        }
        return h
    }
    function a(h) {
        if (h && h.isTexture) {
            const d = h.mapping
              , g = d === jr || d === Jr
              , M = d === Kn || d === _i;
            if (g || M) {
                let m = t.get(h);
                const p = m !== void 0 ? m.texture.pmremVersion : 0;
                if (h.isRenderTargetTexture && h.pmremVersion !== p)
                    return n === null && (n = new cl(i)),
                    m = g ? n.fromEquirectangular(h, m) : n.fromCubemap(h, m),
                    m.texture.pmremVersion = h.pmremVersion,
                    t.set(h, m),
                    m.texture;
                if (m !== void 0)
                    return m.texture;
                {
                    const S = h.image;
                    return g && S && S.height > 0 || M && S && c(S) ? (n === null && (n = new cl(i)),
                    m = g ? n.fromEquirectangular(h) : n.fromCubemap(h),
                    m.texture.pmremVersion = h.pmremVersion,
                    t.set(h, m),
                    h.addEventListener("dispose", u),
                    m.texture) : null
                }
            }
        }
        return h
    }
    function o(h, d) {
        return d === jr ? h.mapping = Kn : d === Jr && (h.mapping = _i),
        h
    }
    function c(h) {
        let d = 0;
        const g = 6;
        for (let M = 0; M < g; M++)
            h[M] !== void 0 && d++;
        return d === g
    }
    function l(h) {
        const d = h.target;
        d.removeEventListener("dispose", l);
        const g = e.get(d);
        g !== void 0 && (e.delete(d),
        g.dispose())
    }
    function u(h) {
        const d = h.target;
        d.removeEventListener("dispose", u);
        const g = t.get(d);
        g !== void 0 && (t.delete(d),
        g.dispose())
    }
    function f() {
        e = new WeakMap,
        t = new WeakMap,
        n !== null && (n.dispose(),
        n = null)
    }
    return {
        get: r,
        dispose: f
    }
}
function Tp(i) {
    const e = {};
    function t(n) {
        if (e[n] !== void 0)
            return e[n];
        const r = i.getExtension(n);
        return e[n] = r,
        r
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function() {
            t("EXT_color_buffer_float"),
            t("WEBGL_clip_cull_distance"),
            t("OES_texture_float_linear"),
            t("EXT_color_buffer_half_float"),
            t("WEBGL_multisampled_render_to_texture"),
            t("WEBGL_render_shared_exponent")
        },
        get: function(n) {
            const r = t(n);
            return r === null && Vr("WebGLRenderer: " + n + " extension not supported."),
            r
        }
    }
}
function Ap(i, e, t, n) {
    const r = {}
      , s = new WeakMap;
    function a(f) {
        const h = f.target;
        h.index !== null && e.remove(h.index);
        for (const g in h.attributes)
            e.remove(h.attributes[g]);
        h.removeEventListener("dispose", a),
        delete r[h.id];
        const d = s.get(h);
        d && (e.remove(d),
        s.delete(h)),
        n.releaseStatesOfGeometry(h),
        h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
        t.memory.geometries--
    }
    function o(f, h) {
        return r[h.id] === !0 || (h.addEventListener("dispose", a),
        r[h.id] = !0,
        t.memory.geometries++),
        h
    }
    function c(f) {
        const h = f.attributes;
        for (const d in h)
            e.update(h[d], i.ARRAY_BUFFER)
    }
    function l(f) {
        const h = []
          , d = f.index
          , g = f.attributes.position;
        let M = 0;
        if (g === void 0)
            return;
        if (d !== null) {
            const S = d.array;
            M = d.version;
            for (let T = 0, E = S.length; T < E; T += 3) {
                const R = S[T + 0]
                  , A = S[T + 1]
                  , P = S[T + 2];
                h.push(R, A, A, P, P, R)
            }
        } else {
            const S = g.array;
            M = g.version;
            for (let T = 0, E = S.length / 3 - 1; T < E; T += 3) {
                const R = T + 0
                  , A = T + 1
                  , P = T + 2;
                h.push(R, A, A, P, P, R)
            }
        }
        const m = new (g.count >= 65535 ? $l : Kl)(h,1);
        m.version = M;
        const p = s.get(f);
        p && e.remove(p),
        s.set(f, m)
    }
    function u(f) {
        const h = s.get(f);
        if (h) {
            const d = f.index;
            d !== null && h.version < d.version && l(f)
        } else
            l(f);
        return s.get(f)
    }
    return {
        get: o,
        update: c,
        getWireframeAttribute: u
    }
}
function wp(i, e, t) {
    let n;
    function r(h) {
        n = h
    }
    let s, a;
    function o(h) {
        s = h.type,
        a = h.bytesPerElement
    }
    function c(h, d) {
        i.drawElements(n, d, s, h * a),
        t.update(d, n, 1)
    }
    function l(h, d, g) {
        g !== 0 && (i.drawElementsInstanced(n, d, s, h * a, g),
        t.update(d, n, g))
    }
    function u(h, d, g) {
        if (g === 0)
            return;
        e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, h, 0, g);
        let m = 0;
        for (let p = 0; p < g; p++)
            m += d[p];
        t.update(m, n, 1)
    }
    function f(h, d, g, M) {
        if (g === 0)
            return;
        const m = e.get("WEBGL_multi_draw");
        if (m === null)
            for (let p = 0; p < h.length; p++)
                l(h[p] / a, d[p], M[p]);
        else {
            m.multiDrawElementsInstancedWEBGL(n, d, 0, s, h, 0, M, 0, g);
            let p = 0;
            for (let S = 0; S < g; S++)
                p += d[S] * M[S];
            t.update(p, n, 1)
        }
    }
    this.setMode = r,
    this.setIndex = o,
    this.render = c,
    this.renderInstances = l,
    this.renderMultiDraw = u,
    this.renderMultiDrawInstances = f
}
function Rp(i) {
    const e = {
        geometries: 0,
        textures: 0
    }
      , t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(s, a, o) {
        switch (t.calls++,
        a) {
        case i.TRIANGLES:
            t.triangles += o * (s / 3);
            break;
        case i.LINES:
            t.lines += o * (s / 2);
            break;
        case i.LINE_STRIP:
            t.lines += o * (s - 1);
            break;
        case i.LINE_LOOP:
            t.lines += o * s;
            break;
        case i.POINTS:
            t.points += o * s;
            break;
        default:
            we("WebGLInfo: Unknown draw mode:", a);
            break
        }
    }
    function r() {
        t.calls = 0,
        t.triangles = 0,
        t.points = 0,
        t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: r,
        update: n
    }
}
function Cp(i, e, t) {
    const n = new WeakMap
      , r = new st;
    function s(a, o, c) {
        const l = a.morphTargetInfluences
          , u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color
          , f = u !== void 0 ? u.length : 0;
        let h = n.get(o);
        if (h === void 0 || h.count !== f) {
            let y = function() {
                P.dispose(),
                n.delete(o),
                o.removeEventListener("dispose", y)
            };
            h !== void 0 && h.texture.dispose();
            const d = o.morphAttributes.position !== void 0
              , g = o.morphAttributes.normal !== void 0
              , M = o.morphAttributes.color !== void 0
              , m = o.morphAttributes.position || []
              , p = o.morphAttributes.normal || []
              , S = o.morphAttributes.color || [];
            let T = 0;
            d === !0 && (T = 1),
            g === !0 && (T = 2),
            M === !0 && (T = 3);
            let E = o.attributes.position.count * T
              , R = 1;
            E > e.maxTextureSize && (R = Math.ceil(E / e.maxTextureSize),
            E = e.maxTextureSize);
            const A = new Float32Array(E * R * 4 * f)
              , P = new ql(A,E,R,f);
            P.type = zt,
            P.needsUpdate = !0;
            const x = T * 4;
            for (let W = 0; W < f; W++) {
                const w = m[W]
                  , N = p[W]
                  , F = S[W]
                  , k = E * R * 4 * W;
                for (let G = 0; G < w.count; G++) {
                    const B = G * x;
                    d === !0 && (r.fromBufferAttribute(w, G),
                    A[k + B + 0] = r.x,
                    A[k + B + 1] = r.y,
                    A[k + B + 2] = r.z,
                    A[k + B + 3] = 0),
                    g === !0 && (r.fromBufferAttribute(N, G),
                    A[k + B + 4] = r.x,
                    A[k + B + 5] = r.y,
                    A[k + B + 6] = r.z,
                    A[k + B + 7] = 0),
                    M === !0 && (r.fromBufferAttribute(F, G),
                    A[k + B + 8] = r.x,
                    A[k + B + 9] = r.y,
                    A[k + B + 10] = r.z,
                    A[k + B + 11] = F.itemSize === 4 ? r.w : 1)
                }
            }
            h = {
                count: f,
                texture: P,
                size: new Ge(E,R)
            },
            n.set(o, h),
            o.addEventListener("dispose", y)
        }
        if (a.isInstancedMesh === !0 && a.morphTexture !== null)
            c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
        else {
            let d = 0;
            for (let M = 0; M < l.length; M++)
                d += l[M];
            const g = o.morphTargetsRelative ? 1 : 1 - d;
            c.getUniforms().setValue(i, "morphTargetBaseInfluence", g),
            c.getUniforms().setValue(i, "morphTargetInfluences", l)
        }
        c.getUniforms().setValue(i, "morphTargetsTexture", h.texture, t),
        c.getUniforms().setValue(i, "morphTargetsTextureSize", h.size)
    }
    return {
        update: s
    }
}
function Pp(i, e, t, n, r) {
    let s = new WeakMap;
    function a(l) {
        const u = r.render.frame
          , f = l.geometry
          , h = e.get(l, f);
        if (s.get(h) !== u && (e.update(h),
        s.set(h, u)),
        l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c),
        s.get(l) !== u && (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
        l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
        s.set(l, u))),
        l.isSkinnedMesh) {
            const d = l.skeleton;
            s.get(d) !== u && (d.update(),
            s.set(d, u))
        }
        return h
    }
    function o() {
        s = new WeakMap
    }
    function c(l) {
        const u = l.target;
        u.removeEventListener("dispose", c),
        n.releaseStatesOfObject(u),
        t.remove(u.instanceMatrix),
        u.instanceColor !== null && t.remove(u.instanceColor)
    }
    return {
        update: a,
        dispose: o
    }
}
const Dp = {
    [Dl]: "LINEAR_TONE_MAPPING",
    [Ll]: "REINHARD_TONE_MAPPING",
    [Il]: "CINEON_TONE_MAPPING",
    [Ul]: "ACES_FILMIC_TONE_MAPPING",
    [Fl]: "AGX_TONE_MAPPING",
    [Ol]: "NEUTRAL_TONE_MAPPING",
    [Nl]: "CUSTOM_TONE_MAPPING"
};
function Lp(i, e, t, n, r) {
    const s = new Nt(e,t,{
        type: i,
        depthBuffer: n,
        stencilBuffer: r
    })
      , a = new Nt(e,t,{
        type: vn,
        depthBuffer: !1,
        stencilBuffer: !1
    })
      , o = new Gt;
    o.setAttribute("position", new Ct([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
    o.setAttribute("uv", new Ct([0, 2, 0, 0, 2, 0],2));
    const c = new eu({
        uniforms: {
            tDiffuse: {
                value: null
            }
        },
        vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
        fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
        depthTest: !1,
        depthWrite: !1
    })
      , l = new Pt(o,c)
      , u = new Yi(-1,1,1,-1,0,1);
    let f = null, h = null, d = !1, g, M = null, m = [], p = !1;
    this.setSize = function(S, T) {
        s.setSize(S, T),
        a.setSize(S, T);
        for (let E = 0; E < m.length; E++) {
            const R = m[E];
            R.setSize && R.setSize(S, T)
        }
    }
    ,
    this.setEffects = function(S) {
        m = S,
        p = m.length > 0 && m[0].isRenderPass === !0;
        const T = s.width
          , E = s.height;
        for (let R = 0; R < m.length; R++) {
            const A = m[R];
            A.setSize && A.setSize(T, E)
        }
    }
    ,
    this.begin = function(S, T) {
        if (d || S.toneMapping === nn && m.length === 0)
            return !1;
        if (M = T,
        T !== null) {
            const E = T.width
              , R = T.height;
            (s.width !== E || s.height !== R) && this.setSize(E, R)
        }
        return p === !1 && S.setRenderTarget(s),
        g = S.toneMapping,
        S.toneMapping = nn,
        !0
    }
    ,
    this.hasRenderPass = function() {
        return p
    }
    ,
    this.end = function(S, T) {
        S.toneMapping = g,
        d = !0;
        let E = s
          , R = a;
        for (let A = 0; A < m.length; A++) {
            const P = m[A];
            if (P.enabled !== !1 && (P.render(S, R, E, T),
            P.needsSwap !== !1)) {
                const x = E;
                E = R,
                R = x
            }
        }
        if (f !== S.outputColorSpace || h !== S.toneMapping) {
            f = S.outputColorSpace,
            h = S.toneMapping,
            c.defines = {},
            We.getTransfer(f) === $e && (c.defines.SRGB_TRANSFER = "");
            const A = Dp[h];
            A && (c.defines[A] = ""),
            c.needsUpdate = !0
        }
        c.uniforms.tDiffuse.value = E.texture,
        S.setRenderTarget(M),
        S.render(l, u),
        M = null,
        d = !1
    }
    ,
    this.isCompositing = function() {
        return d
    }
    ,
    this.dispose = function() {
        s.dispose(),
        a.dispose(),
        o.dispose(),
        c.dispose()
    }
}
const cc = new St
  , Da = new qi(1,1)
  , hc = new ql
  , uc = new Ah
  , dc = new ec
  , fl = []
  , pl = []
  , ml = new Float32Array(16)
  , gl = new Float32Array(9)
  , _l = new Float32Array(4);
function Ai(i, e, t) {
    const n = i[0];
    if (n <= 0 || n > 0)
        return i;
    const r = e * t;
    let s = fl[r];
    if (s === void 0 && (s = new Float32Array(r),
    fl[r] = s),
    e !== 0) {
        n.toArray(s, 0);
        for (let a = 1, o = 0; a !== e; ++a)
            o += t,
            i[a].toArray(s, o)
    }
    return s
}
function pt(i, e) {
    if (i.length !== e.length)
        return !1;
    for (let t = 0, n = i.length; t < n; t++)
        if (i[t] !== e[t])
            return !1;
    return !0
}
function mt(i, e) {
    for (let t = 0, n = e.length; t < n; t++)
        i[t] = e[t]
}
function Kr(i, e) {
    let t = pl[e];
    t === void 0 && (t = new Int32Array(e),
    pl[e] = t);
    for (let n = 0; n !== e; ++n)
        t[n] = i.allocateTextureUnit();
    return t
}
function Ip(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1f(this.addr, e),
    t[0] = e)
}
function Up(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (pt(t, e))
            return;
        i.uniform2fv(this.addr, e),
        mt(t, e)
    }
}
function Np(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else if (e.r !== void 0)
        (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b),
        t[0] = e.r,
        t[1] = e.g,
        t[2] = e.b);
    else {
        if (pt(t, e))
            return;
        i.uniform3fv(this.addr, e),
        mt(t, e)
    }
}
function Fp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (pt(t, e))
            return;
        i.uniform4fv(this.addr, e),
        mt(t, e)
    }
}
function Op(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (pt(t, e))
            return;
        i.uniformMatrix2fv(this.addr, !1, e),
        mt(t, e)
    } else {
        if (pt(t, n))
            return;
        _l.set(n),
        i.uniformMatrix2fv(this.addr, !1, _l),
        mt(t, n)
    }
}
function Bp(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (pt(t, e))
            return;
        i.uniformMatrix3fv(this.addr, !1, e),
        mt(t, e)
    } else {
        if (pt(t, n))
            return;
        gl.set(n),
        i.uniformMatrix3fv(this.addr, !1, gl),
        mt(t, n)
    }
}
function zp(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (pt(t, e))
            return;
        i.uniformMatrix4fv(this.addr, !1, e),
        mt(t, e)
    } else {
        if (pt(t, n))
            return;
        ml.set(n),
        i.uniformMatrix4fv(this.addr, !1, ml),
        mt(t, n)
    }
}
function Vp(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1i(this.addr, e),
    t[0] = e)
}
function kp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (pt(t, e))
            return;
        i.uniform2iv(this.addr, e),
        mt(t, e)
    }
}
function Gp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (pt(t, e))
            return;
        i.uniform3iv(this.addr, e),
        mt(t, e)
    }
}
function Hp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (pt(t, e))
            return;
        i.uniform4iv(this.addr, e),
        mt(t, e)
    }
}
function Wp(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1ui(this.addr, e),
    t[0] = e)
}
function Xp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (pt(t, e))
            return;
        i.uniform2uiv(this.addr, e),
        mt(t, e)
    }
}
function qp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (pt(t, e))
            return;
        i.uniform3uiv(this.addr, e),
        mt(t, e)
    }
}
function Yp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (pt(t, e))
            return;
        i.uniform4uiv(this.addr, e),
        mt(t, e)
    }
}
function Kp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r);
    let s;
    this.type === i.SAMPLER_2D_SHADOW ? (Da.compareFunction = t.isReversedDepthBuffer() ? Ha : Ga,
    s = Da) : s = cc,
    t.setTexture2D(e || s, r)
}
function $p(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTexture3D(e || uc, r)
}
function Zp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTextureCube(e || dc, r)
}
function jp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTexture2DArray(e || hc, r)
}
function Jp(i) {
    switch (i) {
    case 5126:
        return Ip;
    case 35664:
        return Up;
    case 35665:
        return Np;
    case 35666:
        return Fp;
    case 35674:
        return Op;
    case 35675:
        return Bp;
    case 35676:
        return zp;
    case 5124:
    case 35670:
        return Vp;
    case 35667:
    case 35671:
        return kp;
    case 35668:
    case 35672:
        return Gp;
    case 35669:
    case 35673:
        return Hp;
    case 5125:
        return Wp;
    case 36294:
        return Xp;
    case 36295:
        return qp;
    case 36296:
        return Yp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Kp;
    case 35679:
    case 36299:
    case 36307:
        return $p;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Zp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return jp
    }
}
function Qp(i, e) {
    i.uniform1fv(this.addr, e)
}
function em(i, e) {
    const t = Ai(e, this.size, 2);
    i.uniform2fv(this.addr, t)
}
function tm(i, e) {
    const t = Ai(e, this.size, 3);
    i.uniform3fv(this.addr, t)
}
function nm(i, e) {
    const t = Ai(e, this.size, 4);
    i.uniform4fv(this.addr, t)
}
function im(i, e) {
    const t = Ai(e, this.size, 4);
    i.uniformMatrix2fv(this.addr, !1, t)
}
function rm(i, e) {
    const t = Ai(e, this.size, 9);
    i.uniformMatrix3fv(this.addr, !1, t)
}
function sm(i, e) {
    const t = Ai(e, this.size, 16);
    i.uniformMatrix4fv(this.addr, !1, t)
}
function am(i, e) {
    i.uniform1iv(this.addr, e)
}
function om(i, e) {
    i.uniform2iv(this.addr, e)
}
function lm(i, e) {
    i.uniform3iv(this.addr, e)
}
function cm(i, e) {
    i.uniform4iv(this.addr, e)
}
function hm(i, e) {
    i.uniform1uiv(this.addr, e)
}
function um(i, e) {
    i.uniform2uiv(this.addr, e)
}
function dm(i, e) {
    i.uniform3uiv(this.addr, e)
}
function fm(i, e) {
    i.uniform4uiv(this.addr, e)
}
function pm(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = Kr(t, r);
    pt(n, s) || (i.uniform1iv(this.addr, s),
    mt(n, s));
    let a;
    this.type === i.SAMPLER_2D_SHADOW ? a = Da : a = cc;
    for (let o = 0; o !== r; ++o)
        t.setTexture2D(e[o] || a, s[o])
}
function mm(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = Kr(t, r);
    pt(n, s) || (i.uniform1iv(this.addr, s),
    mt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTexture3D(e[a] || uc, s[a])
}
function gm(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = Kr(t, r);
    pt(n, s) || (i.uniform1iv(this.addr, s),
    mt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTextureCube(e[a] || dc, s[a])
}
function _m(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = Kr(t, r);
    pt(n, s) || (i.uniform1iv(this.addr, s),
    mt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTexture2DArray(e[a] || hc, s[a])
}
function xm(i) {
    switch (i) {
    case 5126:
        return Qp;
    case 35664:
        return em;
    case 35665:
        return tm;
    case 35666:
        return nm;
    case 35674:
        return im;
    case 35675:
        return rm;
    case 35676:
        return sm;
    case 5124:
    case 35670:
        return am;
    case 35667:
    case 35671:
        return om;
    case 35668:
    case 35672:
        return lm;
    case 35669:
    case 35673:
        return cm;
    case 5125:
        return hm;
    case 36294:
        return um;
    case 36295:
        return dm;
    case 36296:
        return fm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return pm;
    case 35679:
    case 36299:
    case 36307:
        return mm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return gm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return _m
    }
}
class vm {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.setValue = Jp(t.type)
    }
}
class Mm {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.size = t.size,
        this.setValue = xm(t.type)
    }
}
class Sm {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        const r = this.seq;
        for (let s = 0, a = r.length; s !== a; ++s) {
            const o = r[s];
            o.setValue(e, t[o.id], n)
        }
    }
}
const Ns = /(\w+)(\])?(\[|\.)?/g;
function xl(i, e) {
    i.seq.push(e),
    i.map[e.id] = e
}
function ym(i, e, t) {
    const n = i.name
      , r = n.length;
    for (Ns.lastIndex = 0; ; ) {
        const s = Ns.exec(n)
          , a = Ns.lastIndex;
        let o = s[1];
        const c = s[2] === "]"
          , l = s[3];
        if (c && (o = o | 0),
        l === void 0 || l === "[" && a + 2 === r) {
            xl(t, l === void 0 ? new vm(o,i,e) : new Mm(o,i,e));
            break
        } else {
            let f = t.map[o];
            f === void 0 && (f = new Sm(o),
            xl(t, f)),
            t = f
        }
    }
}
class Fr {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let a = 0; a < n; ++a) {
            const o = e.getActiveUniform(t, a)
              , c = e.getUniformLocation(t, o.name);
            ym(o, c, this)
        }
        const r = []
          , s = [];
        for (const a of this.seq)
            a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(a) : s.push(a);
        r.length > 0 && (this.seq = r.concat(s))
    }
    setValue(e, t, n, r) {
        const s = this.map[t];
        s !== void 0 && s.setValue(e, n, r)
    }
    setOptional(e, t, n) {
        const r = t[n];
        r !== void 0 && this.setValue(e, n, r)
    }
    static upload(e, t, n, r) {
        for (let s = 0, a = t.length; s !== a; ++s) {
            const o = t[s]
              , c = n[o.id];
            c.needsUpdate !== !1 && o.setValue(e, c.value, r)
        }
    }
    static seqWithValue(e, t) {
        const n = [];
        for (let r = 0, s = e.length; r !== s; ++r) {
            const a = e[r];
            a.id in t && n.push(a)
        }
        return n
    }
}
function vl(i, e, t) {
    const n = i.createShader(e);
    return i.shaderSource(n, t),
    i.compileShader(n),
    n
}
const bm = 37297;
let Em = 0;
function Tm(i, e) {
    const t = i.split(`
`)
      , n = []
      , r = Math.max(e - 6, 0)
      , s = Math.min(e + 6, t.length);
    for (let a = r; a < s; a++) {
        const o = a + 1;
        n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`)
    }
    return n.join(`
`)
}
const Ml = new Ie;
function Am(i) {
    We._getMatrix(Ml, We.workingColorSpace, i);
    const e = `mat3( ${Ml.elements.map(t => t.toFixed(4))} )`;
    switch (We.getTransfer(i)) {
    case Br:
        return [e, "LinearTransferOETF"];
    case $e:
        return [e, "sRGBTransferOETF"];
    default:
        return be("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
    }
}
function Sl(i, e, t) {
    const n = i.getShaderParameter(e, i.COMPILE_STATUS)
      , s = (i.getShaderInfoLog(e) || "").trim();
    if (n && s === "")
        return "";
    const a = /ERROR: 0:(\d+)/.exec(s);
    if (a) {
        const o = parseInt(a[1]);
        return t.toUpperCase() + `

` + s + `

` + Tm(i.getShaderSource(e), o)
    } else
        return s
}
function wm(i, e) {
    const t = Am(e);
    return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
}
const Rm = {
    [Dl]: "Linear",
    [Ll]: "Reinhard",
    [Il]: "Cineon",
    [Ul]: "ACESFilmic",
    [Fl]: "AgX",
    [Ol]: "Neutral",
    [Nl]: "Custom"
};
function Cm(i, e) {
    const t = Rm[e];
    return t === void 0 ? (be("WebGLProgram: Unsupported toneMapping:", e),
    "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}
const Pr = new U;
function Pm() {
    We.getLuminanceCoefficients(Pr);
    const i = Pr.x.toFixed(4)
      , e = Pr.y.toFixed(4)
      , t = Pr.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
}
function Dm(i) {
    return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(zi).join(`
`)
}
function Lm(i) {
    const e = [];
    for (const t in i) {
        const n = i[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}
function Im(i, e) {
    const t = {}
      , n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < n; r++) {
        const s = i.getActiveAttrib(e, r)
          , a = s.name;
        let o = 1;
        s.type === i.FLOAT_MAT2 && (o = 2),
        s.type === i.FLOAT_MAT3 && (o = 3),
        s.type === i.FLOAT_MAT4 && (o = 4),
        t[a] = {
            type: s.type,
            location: i.getAttribLocation(e, a),
            locationSize: o
        }
    }
    return t
}
function zi(i) {
    return i !== ""
}
function yl(i, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function bl(i, e) {
    return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Um = /^[ \t]*#include +<([\w\d./]+)>/gm;
function La(i) {
    return i.replace(Um, Fm)
}
const Nm = new Map;
function Fm(i, e) {
    let t = Ne[e];
    if (t === void 0) {
        const n = Nm.get(e);
        if (n !== void 0)
            t = Ne[n],
            be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
        else
            throw new Error("Can not resolve #include <" + e + ">")
    }
    return La(t)
}
const Om = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function El(i) {
    return i.replace(Om, Bm)
}
function Bm(i, e, t, n) {
    let r = "";
    for (let s = parseInt(e); s < parseInt(t); s++)
        r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return r
}
function Tl(i) {
    let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
    return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`),
    e
}
const zm = {
    [Dr]: "SHADOWMAP_TYPE_PCF",
    [Bi]: "SHADOWMAP_TYPE_VSM"
};
function Vm(i) {
    return zm[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC"
}
const km = {
    [Kn]: "ENVMAP_TYPE_CUBE",
    [_i]: "ENVMAP_TYPE_CUBE",
    [Xr]: "ENVMAP_TYPE_CUBE_UV"
};
function Gm(i) {
    return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : km[i.envMapMode] || "ENVMAP_TYPE_CUBE"
}
const Hm = {
    [_i]: "ENVMAP_MODE_REFRACTION"
};
function Wm(i) {
    return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Hm[i.envMapMode] || "ENVMAP_MODE_REFLECTION"
}
const Xm = {
    [Pl]: "ENVMAP_BLENDING_MULTIPLY",
    [kc]: "ENVMAP_BLENDING_MIX",
    [Gc]: "ENVMAP_BLENDING_ADD"
};
function qm(i) {
    return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Xm[i.combine] || "ENVMAP_BLENDING_NONE"
}
function Ym(i) {
    const e = i.envMapCubeUVHeight;
    if (e === null)
        return null;
    const t = Math.log2(e) - 2
      , n = 1 / e;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
        texelHeight: n,
        maxMip: t
    }
}
function Km(i, e, t, n) {
    const r = i.getContext()
      , s = t.defines;
    let a = t.vertexShader
      , o = t.fragmentShader;
    const c = Vm(t)
      , l = Gm(t)
      , u = Wm(t)
      , f = qm(t)
      , h = Ym(t)
      , d = Dm(t)
      , g = Lm(s)
      , M = r.createProgram();
    let m, p, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(zi).join(`
`),
    m.length > 0 && (m += `
`),
    p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(zi).join(`
`),
    p.length > 0 && (p += `
`)) : (m = [Tl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(zi).join(`
`),
    p = [Tl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + f : "", h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "", h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "", h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== nn ? "#define TONE_MAPPING" : "", t.toneMapping !== nn ? Ne.tonemapping_pars_fragment : "", t.toneMapping !== nn ? Cm("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ne.colorspace_pars_fragment, wm("linearToOutputTexel", t.outputColorSpace), Pm(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(zi).join(`
`)),
    a = La(a),
    a = yl(a, t),
    a = bl(a, t),
    o = La(o),
    o = yl(o, t),
    o = bl(o, t),
    a = El(a),
    o = El(o),
    t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`,
    m = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m,
    p = ["#define varying in", t.glslVersion === Mo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Mo ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
    const T = S + m + a
      , E = S + p + o
      , R = vl(r, r.VERTEX_SHADER, T)
      , A = vl(r, r.FRAGMENT_SHADER, E);
    r.attachShader(M, R),
    r.attachShader(M, A),
    t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"),
    r.linkProgram(M);
    function P(w) {
        if (i.debug.checkShaderErrors) {
            const N = r.getProgramInfoLog(M) || ""
              , F = r.getShaderInfoLog(R) || ""
              , k = r.getShaderInfoLog(A) || ""
              , G = N.trim()
              , B = F.trim()
              , V = k.trim();
            let Q = !0
              , Z = !0;
            if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
                if (Q = !1,
                typeof i.debug.onShaderError == "function")
                    i.debug.onShaderError(r, M, R, A);
                else {
                    const ce = Sl(r, R, "vertex")
                      , pe = Sl(r, A, "fragment");
                    we("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + w.name + `
Material Type: ` + w.type + `

Program Info Log: ` + G + `
` + ce + `
` + pe)
                }
            else
                G !== "" ? be("WebGLProgram: Program Info Log:", G) : (B === "" || V === "") && (Z = !1);
            Z && (w.diagnostics = {
                runnable: Q,
                programLog: G,
                vertexShader: {
                    log: B,
                    prefix: m
                },
                fragmentShader: {
                    log: V,
                    prefix: p
                }
            })
        }
        r.deleteShader(R),
        r.deleteShader(A),
        x = new Fr(r,M),
        y = Im(r, M)
    }
    let x;
    this.getUniforms = function() {
        return x === void 0 && P(this),
        x
    }
    ;
    let y;
    this.getAttributes = function() {
        return y === void 0 && P(this),
        y
    }
    ;
    let W = t.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return W === !1 && (W = r.getProgramParameter(M, bm)),
        W
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        r.deleteProgram(M),
        this.program = void 0
    }
    ,
    this.type = t.shaderType,
    this.name = t.shaderName,
    this.id = Em++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = M,
    this.vertexShader = R,
    this.fragmentShader = A,
    this
}
let $m = 0;
class Zm {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        const t = e.vertexShader
          , n = e.fragmentShader
          , r = this._getShaderStage(t)
          , s = this._getShaderStage(n)
          , a = this._getShaderCacheForMaterial(e);
        return a.has(r) === !1 && (a.add(r),
        r.usedTimes++),
        a.has(s) === !1 && (a.add(s),
        s.usedTimes++),
        this
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const n of t)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        let n = t.get(e);
        return n === void 0 && (n = new Set,
        t.set(e, n)),
        n
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        let n = t.get(e);
        return n === void 0 && (n = new jm(e),
        t.set(e, n)),
        n
    }
}
class jm {
    constructor(e) {
        this.id = $m++,
        this.code = e,
        this.usedTimes = 0
    }
}
function Jm(i, e, t, n, r, s) {
    const a = new qa
      , o = new Zm
      , c = new Set
      , l = []
      , u = new Map
      , f = n.logarithmicDepthBuffer;
    let h = n.precision;
    const d = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distance",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function g(x) {
        return c.add(x),
        x === 0 ? "uv" : `uv${x}`
    }
    function M(x, y, W, w, N) {
        const F = w.fog
          , k = N.geometry
          , G = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? w.environment : null
          , B = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap
          , V = e.get(x.envMap || G, B)
          , Q = V && V.mapping === Xr ? V.image.height : null
          , Z = d[x.type];
        x.precision !== null && (h = n.getMaxPrecision(x.precision),
        h !== x.precision && be("WebGLProgram.getParameters:", x.precision, "not supported, using", h, "instead."));
        const ce = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color
          , pe = ce !== void 0 ? ce.length : 0;
        let ue = 0;
        k.morphAttributes.position !== void 0 && (ue = 1),
        k.morphAttributes.normal !== void 0 && (ue = 2),
        k.morphAttributes.color !== void 0 && (ue = 3);
        let Ue, at, rt, K;
        if (Z) {
            const Ke = en[Z];
            Ue = Ke.vertexShader,
            at = Ke.fragmentShader
        } else
            Ue = x.vertexShader,
            at = x.fragmentShader,
            o.update(x),
            rt = o.getVertexShaderID(x),
            K = o.getFragmentShaderID(x);
        const ne = i.getRenderTarget()
          , se = i.state.buffers.depth.getReversed()
          , Le = N.isInstancedMesh === !0
          , Ae = N.isBatchedMesh === !0
          , Ce = !!x.map
          , gt = !!x.matcap
          , He = !!V
          , Ye = !!x.aoMap
          , et = !!x.lightMap
          , Fe = !!x.bumpMap
          , ct = !!x.normalMap
          , C = !!x.displacementMap
          , dt = !!x.emissiveMap
          , qe = !!x.metalnessMap
          , nt = !!x.roughnessMap
          , Me = x.anisotropy > 0
          , b = x.clearcoat > 0
          , _ = x.dispersion > 0
          , L = x.iridescence > 0
          , Y = x.sheen > 0
          , $ = x.transmission > 0
          , q = Me && !!x.anisotropyMap
          , me = b && !!x.clearcoatMap
          , ie = b && !!x.clearcoatNormalMap
          , Te = b && !!x.clearcoatRoughnessMap
          , Re = L && !!x.iridescenceMap
          , j = L && !!x.iridescenceThicknessMap
          , ee = Y && !!x.sheenColorMap
          , ge = Y && !!x.sheenRoughnessMap
          , xe = !!x.specularMap
          , he = !!x.specularColorMap
          , Oe = !!x.specularIntensityMap
          , D = $ && !!x.transmissionMap
          , re = $ && !!x.thicknessMap
          , te = !!x.gradientMap
          , fe = !!x.alphaMap
          , J = x.alphaTest > 0
          , X = !!x.alphaHash
          , _e = !!x.extensions;
        let Pe = nn;
        x.toneMapped && (ne === null || ne.isXRRenderTarget === !0) && (Pe = i.toneMapping);
        const it = {
            shaderID: Z,
            shaderType: x.type,
            shaderName: x.name,
            vertexShader: Ue,
            fragmentShader: at,
            defines: x.defines,
            customVertexShaderID: rt,
            customFragmentShaderID: K,
            isRawShaderMaterial: x.isRawShaderMaterial === !0,
            glslVersion: x.glslVersion,
            precision: h,
            batching: Ae,
            batchingColor: Ae && N._colorsTexture !== null,
            instancing: Le,
            instancingColor: Le && N.instanceColor !== null,
            instancingMorph: Le && N.morphTexture !== null,
            outputColorSpace: ne === null ? i.outputColorSpace : ne.isXRRenderTarget === !0 ? ne.texture.colorSpace : vi,
            alphaToCoverage: !!x.alphaToCoverage,
            map: Ce,
            matcap: gt,
            envMap: He,
            envMapMode: He && V.mapping,
            envMapCubeUVHeight: Q,
            aoMap: Ye,
            lightMap: et,
            bumpMap: Fe,
            normalMap: ct,
            displacementMap: C,
            emissiveMap: dt,
            normalMapObjectSpace: ct && x.normalMapType === Yc,
            normalMapTangentSpace: ct && x.normalMapType === ka,
            metalnessMap: qe,
            roughnessMap: nt,
            anisotropy: Me,
            anisotropyMap: q,
            clearcoat: b,
            clearcoatMap: me,
            clearcoatNormalMap: ie,
            clearcoatRoughnessMap: Te,
            dispersion: _,
            iridescence: L,
            iridescenceMap: Re,
            iridescenceThicknessMap: j,
            sheen: Y,
            sheenColorMap: ee,
            sheenRoughnessMap: ge,
            specularMap: xe,
            specularColorMap: he,
            specularIntensityMap: Oe,
            transmission: $,
            transmissionMap: D,
            thicknessMap: re,
            gradientMap: te,
            opaque: x.transparent === !1 && x.blending === pi && x.alphaToCoverage === !1,
            alphaMap: fe,
            alphaTest: J,
            alphaHash: X,
            combine: x.combine,
            mapUv: Ce && g(x.map.channel),
            aoMapUv: Ye && g(x.aoMap.channel),
            lightMapUv: et && g(x.lightMap.channel),
            bumpMapUv: Fe && g(x.bumpMap.channel),
            normalMapUv: ct && g(x.normalMap.channel),
            displacementMapUv: C && g(x.displacementMap.channel),
            emissiveMapUv: dt && g(x.emissiveMap.channel),
            metalnessMapUv: qe && g(x.metalnessMap.channel),
            roughnessMapUv: nt && g(x.roughnessMap.channel),
            anisotropyMapUv: q && g(x.anisotropyMap.channel),
            clearcoatMapUv: me && g(x.clearcoatMap.channel),
            clearcoatNormalMapUv: ie && g(x.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: Te && g(x.clearcoatRoughnessMap.channel),
            iridescenceMapUv: Re && g(x.iridescenceMap.channel),
            iridescenceThicknessMapUv: j && g(x.iridescenceThicknessMap.channel),
            sheenColorMapUv: ee && g(x.sheenColorMap.channel),
            sheenRoughnessMapUv: ge && g(x.sheenRoughnessMap.channel),
            specularMapUv: xe && g(x.specularMap.channel),
            specularColorMapUv: he && g(x.specularColorMap.channel),
            specularIntensityMapUv: Oe && g(x.specularIntensityMap.channel),
            transmissionMapUv: D && g(x.transmissionMap.channel),
            thicknessMapUv: re && g(x.thicknessMap.channel),
            alphaMapUv: fe && g(x.alphaMap.channel),
            vertexTangents: !!k.attributes.tangent && (ct || Me),
            vertexColors: x.vertexColors,
            vertexAlphas: x.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
            pointsUvs: N.isPoints === !0 && !!k.attributes.uv && (Ce || fe),
            fog: !!F,
            useFog: x.fog === !0,
            fogExp2: !!F && F.isFogExp2,
            flatShading: x.wireframe === !1 && (x.flatShading === !0 || k.attributes.normal === void 0 && ct === !1 && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)),
            sizeAttenuation: x.sizeAttenuation === !0,
            logarithmicDepthBuffer: f,
            reversedDepthBuffer: se,
            skinning: N.isSkinnedMesh === !0,
            morphTargets: k.morphAttributes.position !== void 0,
            morphNormals: k.morphAttributes.normal !== void 0,
            morphColors: k.morphAttributes.color !== void 0,
            morphTargetsCount: pe,
            morphTextureStride: ue,
            numDirLights: y.directional.length,
            numPointLights: y.point.length,
            numSpotLights: y.spot.length,
            numSpotLightMaps: y.spotLightMap.length,
            numRectAreaLights: y.rectArea.length,
            numHemiLights: y.hemi.length,
            numDirLightShadows: y.directionalShadowMap.length,
            numPointLightShadows: y.pointShadowMap.length,
            numSpotLightShadows: y.spotShadowMap.length,
            numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
            numLightProbes: y.numLightProbes,
            numClippingPlanes: s.numPlanes,
            numClipIntersection: s.numIntersection,
            dithering: x.dithering,
            shadowMapEnabled: i.shadowMap.enabled && W.length > 0,
            shadowMapType: i.shadowMap.type,
            toneMapping: Pe,
            decodeVideoTexture: Ce && x.map.isVideoTexture === !0 && We.getTransfer(x.map.colorSpace) === $e,
            decodeVideoTextureEmissive: dt && x.emissiveMap.isVideoTexture === !0 && We.getTransfer(x.emissiveMap.colorSpace) === $e,
            premultipliedAlpha: x.premultipliedAlpha,
            doubleSided: x.side === pn,
            flipSided: x.side === Rt,
            useDepthPacking: x.depthPacking >= 0,
            depthPacking: x.depthPacking || 0,
            index0AttributeName: x.index0AttributeName,
            extensionClipCullDistance: _e && x.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: (_e && x.extensions.multiDraw === !0 || Ae) && t.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: x.customProgramCacheKey()
        };
        return it.vertexUv1s = c.has(1),
        it.vertexUv2s = c.has(2),
        it.vertexUv3s = c.has(3),
        c.clear(),
        it
    }
    function m(x) {
        const y = [];
        if (x.shaderID ? y.push(x.shaderID) : (y.push(x.customVertexShaderID),
        y.push(x.customFragmentShaderID)),
        x.defines !== void 0)
            for (const W in x.defines)
                y.push(W),
                y.push(x.defines[W]);
        return x.isRawShaderMaterial === !1 && (p(y, x),
        S(y, x),
        y.push(i.outputColorSpace)),
        y.push(x.customProgramCacheKey),
        y.join()
    }
    function p(x, y) {
        x.push(y.precision),
        x.push(y.outputColorSpace),
        x.push(y.envMapMode),
        x.push(y.envMapCubeUVHeight),
        x.push(y.mapUv),
        x.push(y.alphaMapUv),
        x.push(y.lightMapUv),
        x.push(y.aoMapUv),
        x.push(y.bumpMapUv),
        x.push(y.normalMapUv),
        x.push(y.displacementMapUv),
        x.push(y.emissiveMapUv),
        x.push(y.metalnessMapUv),
        x.push(y.roughnessMapUv),
        x.push(y.anisotropyMapUv),
        x.push(y.clearcoatMapUv),
        x.push(y.clearcoatNormalMapUv),
        x.push(y.clearcoatRoughnessMapUv),
        x.push(y.iridescenceMapUv),
        x.push(y.iridescenceThicknessMapUv),
        x.push(y.sheenColorMapUv),
        x.push(y.sheenRoughnessMapUv),
        x.push(y.specularMapUv),
        x.push(y.specularColorMapUv),
        x.push(y.specularIntensityMapUv),
        x.push(y.transmissionMapUv),
        x.push(y.thicknessMapUv),
        x.push(y.combine),
        x.push(y.fogExp2),
        x.push(y.sizeAttenuation),
        x.push(y.morphTargetsCount),
        x.push(y.morphAttributeCount),
        x.push(y.numDirLights),
        x.push(y.numPointLights),
        x.push(y.numSpotLights),
        x.push(y.numSpotLightMaps),
        x.push(y.numHemiLights),
        x.push(y.numRectAreaLights),
        x.push(y.numDirLightShadows),
        x.push(y.numPointLightShadows),
        x.push(y.numSpotLightShadows),
        x.push(y.numSpotLightShadowsWithMaps),
        x.push(y.numLightProbes),
        x.push(y.shadowMapType),
        x.push(y.toneMapping),
        x.push(y.numClippingPlanes),
        x.push(y.numClipIntersection),
        x.push(y.depthPacking)
    }
    function S(x, y) {
        a.disableAll(),
        y.instancing && a.enable(0),
        y.instancingColor && a.enable(1),
        y.instancingMorph && a.enable(2),
        y.matcap && a.enable(3),
        y.envMap && a.enable(4),
        y.normalMapObjectSpace && a.enable(5),
        y.normalMapTangentSpace && a.enable(6),
        y.clearcoat && a.enable(7),
        y.iridescence && a.enable(8),
        y.alphaTest && a.enable(9),
        y.vertexColors && a.enable(10),
        y.vertexAlphas && a.enable(11),
        y.vertexUv1s && a.enable(12),
        y.vertexUv2s && a.enable(13),
        y.vertexUv3s && a.enable(14),
        y.vertexTangents && a.enable(15),
        y.anisotropy && a.enable(16),
        y.alphaHash && a.enable(17),
        y.batching && a.enable(18),
        y.dispersion && a.enable(19),
        y.batchingColor && a.enable(20),
        y.gradientMap && a.enable(21),
        x.push(a.mask),
        a.disableAll(),
        y.fog && a.enable(0),
        y.useFog && a.enable(1),
        y.flatShading && a.enable(2),
        y.logarithmicDepthBuffer && a.enable(3),
        y.reversedDepthBuffer && a.enable(4),
        y.skinning && a.enable(5),
        y.morphTargets && a.enable(6),
        y.morphNormals && a.enable(7),
        y.morphColors && a.enable(8),
        y.premultipliedAlpha && a.enable(9),
        y.shadowMapEnabled && a.enable(10),
        y.doubleSided && a.enable(11),
        y.flipSided && a.enable(12),
        y.useDepthPacking && a.enable(13),
        y.dithering && a.enable(14),
        y.transmission && a.enable(15),
        y.sheen && a.enable(16),
        y.opaque && a.enable(17),
        y.pointsUvs && a.enable(18),
        y.decodeVideoTexture && a.enable(19),
        y.decodeVideoTextureEmissive && a.enable(20),
        y.alphaToCoverage && a.enable(21),
        x.push(a.mask)
    }
    function T(x) {
        const y = d[x.type];
        let W;
        if (y) {
            const w = en[y];
            W = jh.clone(w.uniforms)
        } else
            W = x.uniforms;
        return W
    }
    function E(x, y) {
        let W = u.get(y);
        return W !== void 0 ? ++W.usedTimes : (W = new Km(i,y,x,r),
        l.push(W),
        u.set(y, W)),
        W
    }
    function R(x) {
        if (--x.usedTimes === 0) {
            const y = l.indexOf(x);
            l[y] = l[l.length - 1],
            l.pop(),
            u.delete(x.cacheKey),
            x.destroy()
        }
    }
    function A(x) {
        o.remove(x)
    }
    function P() {
        o.dispose()
    }
    return {
        getParameters: M,
        getProgramCacheKey: m,
        getUniforms: T,
        acquireProgram: E,
        releaseProgram: R,
        releaseShaderCache: A,
        programs: l,
        dispose: P
    }
}
function Qm() {
    let i = new WeakMap;
    function e(a) {
        return i.has(a)
    }
    function t(a) {
        let o = i.get(a);
        return o === void 0 && (o = {},
        i.set(a, o)),
        o
    }
    function n(a) {
        i.delete(a)
    }
    function r(a, o, c) {
        i.get(a)[o] = c
    }
    function s() {
        i = new WeakMap
    }
    return {
        has: e,
        get: t,
        remove: n,
        update: r,
        dispose: s
    }
}
function eg(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id
}
function Al(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id
}
function wl() {
    const i = [];
    let e = 0;
    const t = []
      , n = []
      , r = [];
    function s() {
        e = 0,
        t.length = 0,
        n.length = 0,
        r.length = 0
    }
    function a(h) {
        let d = 0;
        return h.isInstancedMesh && (d += 2),
        h.isSkinnedMesh && (d += 1),
        d
    }
    function o(h, d, g, M, m, p) {
        let S = i[e];
        return S === void 0 ? (S = {
            id: h.id,
            object: h,
            geometry: d,
            material: g,
            materialVariant: a(h),
            groupOrder: M,
            renderOrder: h.renderOrder,
            z: m,
            group: p
        },
        i[e] = S) : (S.id = h.id,
        S.object = h,
        S.geometry = d,
        S.material = g,
        S.materialVariant = a(h),
        S.groupOrder = M,
        S.renderOrder = h.renderOrder,
        S.z = m,
        S.group = p),
        e++,
        S
    }
    function c(h, d, g, M, m, p) {
        const S = o(h, d, g, M, m, p);
        g.transmission > 0 ? n.push(S) : g.transparent === !0 ? r.push(S) : t.push(S)
    }
    function l(h, d, g, M, m, p) {
        const S = o(h, d, g, M, m, p);
        g.transmission > 0 ? n.unshift(S) : g.transparent === !0 ? r.unshift(S) : t.unshift(S)
    }
    function u(h, d) {
        t.length > 1 && t.sort(h || eg),
        n.length > 1 && n.sort(d || Al),
        r.length > 1 && r.sort(d || Al)
    }
    function f() {
        for (let h = e, d = i.length; h < d; h++) {
            const g = i[h];
            if (g.id === null)
                break;
            g.id = null,
            g.object = null,
            g.geometry = null,
            g.material = null,
            g.group = null
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: r,
        init: s,
        push: c,
        unshift: l,
        finish: f,
        sort: u
    }
}
function tg() {
    let i = new WeakMap;
    function e(n, r) {
        const s = i.get(n);
        let a;
        return s === void 0 ? (a = new wl,
        i.set(n, [a])) : r >= s.length ? (a = new wl,
        s.push(a)) : a = s[r],
        a
    }
    function t() {
        i = new WeakMap
    }
    return {
        get: e,
        dispose: t
    }
}
function ng() {
    const i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    direction: new U,
                    color: new ke
                };
                break;
            case "SpotLight":
                t = {
                    position: new U,
                    direction: new U,
                    color: new ke,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                t = {
                    position: new U,
                    color: new ke,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                t = {
                    direction: new U,
                    skyColor: new ke,
                    groundColor: new ke
                };
                break;
            case "RectAreaLight":
                t = {
                    color: new ke,
                    position: new U,
                    halfWidth: new U,
                    halfHeight: new U
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
function ig() {
    const i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ge
                };
                break;
            case "SpotLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ge
                };
                break;
            case "PointLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ge,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
let rg = 0;
function sg(i, e) {
    return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0)
}
function ag(i) {
    const e = new ng
      , t = ig()
      , n = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let l = 0; l < 9; l++)
        n.probe.push(new U);
    const r = new U
      , s = new Ve
      , a = new Ve;
    function o(l) {
        let u = 0
          , f = 0
          , h = 0;
        for (let y = 0; y < 9; y++)
            n.probe[y].set(0, 0, 0);
        let d = 0
          , g = 0
          , M = 0
          , m = 0
          , p = 0
          , S = 0
          , T = 0
          , E = 0
          , R = 0
          , A = 0
          , P = 0;
        l.sort(sg);
        for (let y = 0, W = l.length; y < W; y++) {
            const w = l[y]
              , N = w.color
              , F = w.intensity
              , k = w.distance;
            let G = null;
            if (w.shadow && w.shadow.map && (w.shadow.map.texture.format === xi ? G = w.shadow.map.texture : G = w.shadow.map.depthTexture || w.shadow.map.texture),
            w.isAmbientLight)
                u += N.r * F,
                f += N.g * F,
                h += N.b * F;
            else if (w.isLightProbe) {
                for (let B = 0; B < 9; B++)
                    n.probe[B].addScaledVector(w.sh.coefficients[B], F);
                P++
            } else if (w.isDirectionalLight) {
                const B = e.get(w);
                if (B.color.copy(w.color).multiplyScalar(w.intensity),
                w.castShadow) {
                    const V = w.shadow
                      , Q = t.get(w);
                    Q.shadowIntensity = V.intensity,
                    Q.shadowBias = V.bias,
                    Q.shadowNormalBias = V.normalBias,
                    Q.shadowRadius = V.radius,
                    Q.shadowMapSize = V.mapSize,
                    n.directionalShadow[d] = Q,
                    n.directionalShadowMap[d] = G,
                    n.directionalShadowMatrix[d] = w.shadow.matrix,
                    S++
                }
                n.directional[d] = B,
                d++
            } else if (w.isSpotLight) {
                const B = e.get(w);
                B.position.setFromMatrixPosition(w.matrixWorld),
                B.color.copy(N).multiplyScalar(F),
                B.distance = k,
                B.coneCos = Math.cos(w.angle),
                B.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)),
                B.decay = w.decay,
                n.spot[M] = B;
                const V = w.shadow;
                if (w.map && (n.spotLightMap[R] = w.map,
                R++,
                V.updateMatrices(w),
                w.castShadow && A++),
                n.spotLightMatrix[M] = V.matrix,
                w.castShadow) {
                    const Q = t.get(w);
                    Q.shadowIntensity = V.intensity,
                    Q.shadowBias = V.bias,
                    Q.shadowNormalBias = V.normalBias,
                    Q.shadowRadius = V.radius,
                    Q.shadowMapSize = V.mapSize,
                    n.spotShadow[M] = Q,
                    n.spotShadowMap[M] = G,
                    E++
                }
                M++
            } else if (w.isRectAreaLight) {
                const B = e.get(w);
                B.color.copy(N).multiplyScalar(F),
                B.halfWidth.set(w.width * .5, 0, 0),
                B.halfHeight.set(0, w.height * .5, 0),
                n.rectArea[m] = B,
                m++
            } else if (w.isPointLight) {
                const B = e.get(w);
                if (B.color.copy(w.color).multiplyScalar(w.intensity),
                B.distance = w.distance,
                B.decay = w.decay,
                w.castShadow) {
                    const V = w.shadow
                      , Q = t.get(w);
                    Q.shadowIntensity = V.intensity,
                    Q.shadowBias = V.bias,
                    Q.shadowNormalBias = V.normalBias,
                    Q.shadowRadius = V.radius,
                    Q.shadowMapSize = V.mapSize,
                    Q.shadowCameraNear = V.camera.near,
                    Q.shadowCameraFar = V.camera.far,
                    n.pointShadow[g] = Q,
                    n.pointShadowMap[g] = G,
                    n.pointShadowMatrix[g] = w.shadow.matrix,
                    T++
                }
                n.point[g] = B,
                g++
            } else if (w.isHemisphereLight) {
                const B = e.get(w);
                B.skyColor.copy(w.color).multiplyScalar(F),
                B.groundColor.copy(w.groundColor).multiplyScalar(F),
                n.hemi[p] = B,
                p++
            }
        }
        m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1,
        n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1,
        n.rectAreaLTC2 = ae.LTC_HALF_2)),
        n.ambient[0] = u,
        n.ambient[1] = f,
        n.ambient[2] = h;
        const x = n.hash;
        (x.directionalLength !== d || x.pointLength !== g || x.spotLength !== M || x.rectAreaLength !== m || x.hemiLength !== p || x.numDirectionalShadows !== S || x.numPointShadows !== T || x.numSpotShadows !== E || x.numSpotMaps !== R || x.numLightProbes !== P) && (n.directional.length = d,
        n.spot.length = M,
        n.rectArea.length = m,
        n.point.length = g,
        n.hemi.length = p,
        n.directionalShadow.length = S,
        n.directionalShadowMap.length = S,
        n.pointShadow.length = T,
        n.pointShadowMap.length = T,
        n.spotShadow.length = E,
        n.spotShadowMap.length = E,
        n.directionalShadowMatrix.length = S,
        n.pointShadowMatrix.length = T,
        n.spotLightMatrix.length = E + R - A,
        n.spotLightMap.length = R,
        n.numSpotLightShadowsWithMaps = A,
        n.numLightProbes = P,
        x.directionalLength = d,
        x.pointLength = g,
        x.spotLength = M,
        x.rectAreaLength = m,
        x.hemiLength = p,
        x.numDirectionalShadows = S,
        x.numPointShadows = T,
        x.numSpotShadows = E,
        x.numSpotMaps = R,
        x.numLightProbes = P,
        n.version = rg++)
    }
    function c(l, u) {
        let f = 0
          , h = 0
          , d = 0
          , g = 0
          , M = 0;
        const m = u.matrixWorldInverse;
        for (let p = 0, S = l.length; p < S; p++) {
            const T = l[p];
            if (T.isDirectionalLight) {
                const E = n.directional[f];
                E.direction.setFromMatrixPosition(T.matrixWorld),
                r.setFromMatrixPosition(T.target.matrixWorld),
                E.direction.sub(r),
                E.direction.transformDirection(m),
                f++
            } else if (T.isSpotLight) {
                const E = n.spot[d];
                E.position.setFromMatrixPosition(T.matrixWorld),
                E.position.applyMatrix4(m),
                E.direction.setFromMatrixPosition(T.matrixWorld),
                r.setFromMatrixPosition(T.target.matrixWorld),
                E.direction.sub(r),
                E.direction.transformDirection(m),
                d++
            } else if (T.isRectAreaLight) {
                const E = n.rectArea[g];
                E.position.setFromMatrixPosition(T.matrixWorld),
                E.position.applyMatrix4(m),
                a.identity(),
                s.copy(T.matrixWorld),
                s.premultiply(m),
                a.extractRotation(s),
                E.halfWidth.set(T.width * .5, 0, 0),
                E.halfHeight.set(0, T.height * .5, 0),
                E.halfWidth.applyMatrix4(a),
                E.halfHeight.applyMatrix4(a),
                g++
            } else if (T.isPointLight) {
                const E = n.point[h];
                E.position.setFromMatrixPosition(T.matrixWorld),
                E.position.applyMatrix4(m),
                h++
            } else if (T.isHemisphereLight) {
                const E = n.hemi[M];
                E.direction.setFromMatrixPosition(T.matrixWorld),
                E.direction.transformDirection(m),
                M++
            }
        }
    }
    return {
        setup: o,
        setupView: c,
        state: n
    }
}
function Rl(i) {
    const e = new ag(i)
      , t = []
      , n = [];
    function r(u) {
        l.camera = u,
        t.length = 0,
        n.length = 0
    }
    function s(u) {
        t.push(u)
    }
    function a(u) {
        n.push(u)
    }
    function o() {
        e.setup(t)
    }
    function c(u) {
        e.setupView(t, u)
    }
    const l = {
        lightsArray: t,
        shadowsArray: n,
        camera: null,
        lights: e,
        transmissionRenderTarget: {}
    };
    return {
        init: r,
        state: l,
        setupLights: o,
        setupLightsView: c,
        pushLight: s,
        pushShadow: a
    }
}
function og(i) {
    let e = new WeakMap;
    function t(r, s=0) {
        const a = e.get(r);
        let o;
        return a === void 0 ? (o = new Rl(i),
        e.set(r, [o])) : s >= a.length ? (o = new Rl(i),
        a.push(o)) : o = a[s],
        o
    }
    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}
const lg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , cg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`
  , hg = [new U(1,0,0), new U(-1,0,0), new U(0,1,0), new U(0,-1,0), new U(0,0,1), new U(0,0,-1)]
  , ug = [new U(0,-1,0), new U(0,-1,0), new U(0,0,1), new U(0,0,-1), new U(0,-1,0), new U(0,-1,0)]
  , Cl = new Ve
  , Oi = new U
  , Fs = new U;
function dg(i, e, t) {
    let n = new Ka;
    const r = new Ge
      , s = new Ge
      , a = new st
      , o = new nu
      , c = new iu
      , l = {}
      , u = t.maxTextureSize
      , f = {
        [Ln]: Rt,
        [Rt]: Ln,
        [pn]: pn
    }
      , h = new Ft({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Ge
            },
            radius: {
                value: 4
            }
        },
        vertexShader: lg,
        fragmentShader: cg
    })
      , d = h.clone();
    d.defines.HORIZONTAL_PASS = 1;
    const g = new Gt;
    g.setAttribute("position", new kt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const M = new Pt(g,h)
      , m = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = Dr;
    let p = this.type;
    this.render = function(A, P, x) {
        if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0)
            return;
        this.type === yc && (be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),
        this.type = Dr);
        const y = i.getRenderTarget()
          , W = i.getActiveCubeFace()
          , w = i.getActiveMipmapLevel()
          , N = i.state;
        N.setBlending(_n),
        N.buffers.depth.getReversed() === !0 ? N.buffers.color.setClear(0, 0, 0, 0) : N.buffers.color.setClear(1, 1, 1, 1),
        N.buffers.depth.setTest(!0),
        N.setScissorTest(!1);
        const F = p !== this.type;
        F && P.traverse(function(k) {
            k.material && (Array.isArray(k.material) ? k.material.forEach(G => G.needsUpdate = !0) : k.material.needsUpdate = !0)
        });
        for (let k = 0, G = A.length; k < G; k++) {
            const B = A[k]
              , V = B.shadow;
            if (V === void 0) {
                be("WebGLShadowMap:", B, "has no shadow.");
                continue
            }
            if (V.autoUpdate === !1 && V.needsUpdate === !1)
                continue;
            r.copy(V.mapSize);
            const Q = V.getFrameExtents();
            r.multiply(Q),
            s.copy(V.mapSize),
            (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / Q.x),
            r.x = s.x * Q.x,
            V.mapSize.x = s.x),
            r.y > u && (s.y = Math.floor(u / Q.y),
            r.y = s.y * Q.y,
            V.mapSize.y = s.y));
            const Z = i.state.buffers.depth.getReversed();
            if (V.camera._reversedDepth = Z,
            V.map === null || F === !0) {
                if (V.map !== null && (V.map.depthTexture !== null && (V.map.depthTexture.dispose(),
                V.map.depthTexture = null),
                V.map.dispose()),
                this.type === Bi) {
                    if (B.isPointLight) {
                        be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
                        continue
                    }
                    V.map = new Nt(r.x,r.y,{
                        format: xi,
                        type: vn,
                        minFilter: lt,
                        magFilter: lt,
                        generateMipmaps: !1
                    }),
                    V.map.texture.name = B.name + ".shadowMap",
                    V.map.depthTexture = new qi(r.x,r.y,zt),
                    V.map.depthTexture.name = B.name + ".shadowMapDepth",
                    V.map.depthTexture.format = Mn,
                    V.map.depthTexture.compareFunction = null,
                    V.map.depthTexture.minFilter = Mt,
                    V.map.depthTexture.magFilter = Mt
                } else
                    B.isPointLight ? (V.map = new lc(r.x),
                    V.map.depthTexture = new Kh(r.x,rn)) : (V.map = new Nt(r.x,r.y),
                    V.map.depthTexture = new qi(r.x,r.y,rn)),
                    V.map.depthTexture.name = B.name + ".shadowMap",
                    V.map.depthTexture.format = Mn,
                    this.type === Dr ? (V.map.depthTexture.compareFunction = Z ? Ha : Ga,
                    V.map.depthTexture.minFilter = lt,
                    V.map.depthTexture.magFilter = lt) : (V.map.depthTexture.compareFunction = null,
                    V.map.depthTexture.minFilter = Mt,
                    V.map.depthTexture.magFilter = Mt);
                V.camera.updateProjectionMatrix()
            }
            const ce = V.map.isWebGLCubeRenderTarget ? 6 : 1;
            for (let pe = 0; pe < ce; pe++) {
                if (V.map.isWebGLCubeRenderTarget)
                    i.setRenderTarget(V.map, pe),
                    i.clear();
                else {
                    pe === 0 && (i.setRenderTarget(V.map),
                    i.clear());
                    const ue = V.getViewport(pe);
                    a.set(s.x * ue.x, s.y * ue.y, s.x * ue.z, s.y * ue.w),
                    N.viewport(a)
                }
                if (B.isPointLight) {
                    const ue = V.camera
                      , Ue = V.matrix
                      , at = B.distance || ue.far;
                    at !== ue.far && (ue.far = at,
                    ue.updateProjectionMatrix()),
                    Oi.setFromMatrixPosition(B.matrixWorld),
                    ue.position.copy(Oi),
                    Fs.copy(ue.position),
                    Fs.add(hg[pe]),
                    ue.up.copy(ug[pe]),
                    ue.lookAt(Fs),
                    ue.updateMatrixWorld(),
                    Ue.makeTranslation(-Oi.x, -Oi.y, -Oi.z),
                    Cl.multiplyMatrices(ue.projectionMatrix, ue.matrixWorldInverse),
                    V._frustum.setFromProjectionMatrix(Cl, ue.coordinateSystem, ue.reversedDepth)
                } else
                    V.updateMatrices(B);
                n = V.getFrustum(),
                E(P, x, V.camera, B, this.type)
            }
            V.isPointLightShadow !== !0 && this.type === Bi && S(V, x),
            V.needsUpdate = !1
        }
        p = this.type,
        m.needsUpdate = !1,
        i.setRenderTarget(y, W, w)
    }
    ;
    function S(A, P) {
        const x = e.update(M);
        h.defines.VSM_SAMPLES !== A.blurSamples && (h.defines.VSM_SAMPLES = A.blurSamples,
        d.defines.VSM_SAMPLES = A.blurSamples,
        h.needsUpdate = !0,
        d.needsUpdate = !0),
        A.mapPass === null && (A.mapPass = new Nt(r.x,r.y,{
            format: xi,
            type: vn
        })),
        h.uniforms.shadow_pass.value = A.map.depthTexture,
        h.uniforms.resolution.value = A.mapSize,
        h.uniforms.radius.value = A.radius,
        i.setRenderTarget(A.mapPass),
        i.clear(),
        i.renderBufferDirect(P, null, x, h, M, null),
        d.uniforms.shadow_pass.value = A.mapPass.texture,
        d.uniforms.resolution.value = A.mapSize,
        d.uniforms.radius.value = A.radius,
        i.setRenderTarget(A.map),
        i.clear(),
        i.renderBufferDirect(P, null, x, d, M, null)
    }
    function T(A, P, x, y) {
        let W = null;
        const w = x.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
        if (w !== void 0)
            W = w;
        else if (W = x.isPointLight === !0 ? c : o,
        i.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0 || P.alphaToCoverage === !0) {
            const N = W.uuid
              , F = P.uuid;
            let k = l[N];
            k === void 0 && (k = {},
            l[N] = k);
            let G = k[F];
            G === void 0 && (G = W.clone(),
            k[F] = G,
            P.addEventListener("dispose", R)),
            W = G
        }
        if (W.visible = P.visible,
        W.wireframe = P.wireframe,
        y === Bi ? W.side = P.shadowSide !== null ? P.shadowSide : P.side : W.side = P.shadowSide !== null ? P.shadowSide : f[P.side],
        W.alphaMap = P.alphaMap,
        W.alphaTest = P.alphaToCoverage === !0 ? .5 : P.alphaTest,
        W.map = P.map,
        W.clipShadows = P.clipShadows,
        W.clippingPlanes = P.clippingPlanes,
        W.clipIntersection = P.clipIntersection,
        W.displacementMap = P.displacementMap,
        W.displacementScale = P.displacementScale,
        W.displacementBias = P.displacementBias,
        W.wireframeLinewidth = P.wireframeLinewidth,
        W.linewidth = P.linewidth,
        x.isPointLight === !0 && W.isMeshDistanceMaterial === !0) {
            const N = i.properties.get(W);
            N.light = x
        }
        return W
    }
    function E(A, P, x, y, W) {
        if (A.visible === !1)
            return;
        if (A.layers.test(P.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && W === Bi) && (!A.frustumCulled || n.intersectsObject(A))) {
            A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, A.matrixWorld);
            const F = e.update(A)
              , k = A.material;
            if (Array.isArray(k)) {
                const G = F.groups;
                for (let B = 0, V = G.length; B < V; B++) {
                    const Q = G[B]
                      , Z = k[Q.materialIndex];
                    if (Z && Z.visible) {
                        const ce = T(A, Z, y, W);
                        A.onBeforeShadow(i, A, P, x, F, ce, Q),
                        i.renderBufferDirect(x, null, F, ce, A, Q),
                        A.onAfterShadow(i, A, P, x, F, ce, Q)
                    }
                }
            } else if (k.visible) {
                const G = T(A, k, y, W);
                A.onBeforeShadow(i, A, P, x, F, G, null),
                i.renderBufferDirect(x, null, F, G, A, null),
                A.onAfterShadow(i, A, P, x, F, G, null)
            }
        }
        const N = A.children;
        for (let F = 0, k = N.length; F < k; F++)
            E(N[F], P, x, y, W)
    }
    function R(A) {
        A.target.removeEventListener("dispose", R);
        for (const x in l) {
            const y = l[x]
              , W = A.target.uuid;
            W in y && (y[W].dispose(),
            delete y[W])
        }
    }
}
function fg(i, e) {
    function t() {
        let D = !1;
        const re = new st;
        let te = null;
        const fe = new st(0,0,0,0);
        return {
            setMask: function(J) {
                te !== J && !D && (i.colorMask(J, J, J, J),
                te = J)
            },
            setLocked: function(J) {
                D = J
            },
            setClear: function(J, X, _e, Pe, it) {
                it === !0 && (J *= Pe,
                X *= Pe,
                _e *= Pe),
                re.set(J, X, _e, Pe),
                fe.equals(re) === !1 && (i.clearColor(J, X, _e, Pe),
                fe.copy(re))
            },
            reset: function() {
                D = !1,
                te = null,
                fe.set(-1, 0, 0, 0)
            }
        }
    }
    function n() {
        let D = !1
          , re = !1
          , te = null
          , fe = null
          , J = null;
        return {
            setReversed: function(X) {
                if (re !== X) {
                    const _e = e.get("EXT_clip_control");
                    X ? _e.clipControlEXT(_e.LOWER_LEFT_EXT, _e.ZERO_TO_ONE_EXT) : _e.clipControlEXT(_e.LOWER_LEFT_EXT, _e.NEGATIVE_ONE_TO_ONE_EXT),
                    re = X;
                    const Pe = J;
                    J = null,
                    this.setClear(Pe)
                }
            },
            getReversed: function() {
                return re
            },
            setTest: function(X) {
                X ? ne(i.DEPTH_TEST) : se(i.DEPTH_TEST)
            },
            setMask: function(X) {
                te !== X && !D && (i.depthMask(X),
                te = X)
            },
            setFunc: function(X) {
                if (re && (X = rh[X]),
                fe !== X) {
                    switch (X) {
                    case Vs:
                        i.depthFunc(i.NEVER);
                        break;
                    case ks:
                        i.depthFunc(i.ALWAYS);
                        break;
                    case Gs:
                        i.depthFunc(i.LESS);
                        break;
                    case gi:
                        i.depthFunc(i.LEQUAL);
                        break;
                    case Hs:
                        i.depthFunc(i.EQUAL);
                        break;
                    case Ws:
                        i.depthFunc(i.GEQUAL);
                        break;
                    case Xs:
                        i.depthFunc(i.GREATER);
                        break;
                    case qs:
                        i.depthFunc(i.NOTEQUAL);
                        break;
                    default:
                        i.depthFunc(i.LEQUAL)
                    }
                    fe = X
                }
            },
            setLocked: function(X) {
                D = X
            },
            setClear: function(X) {
                J !== X && (J = X,
                re && (X = 1 - X),
                i.clearDepth(X))
            },
            reset: function() {
                D = !1,
                te = null,
                fe = null,
                J = null,
                re = !1
            }
        }
    }
    function r() {
        let D = !1
          , re = null
          , te = null
          , fe = null
          , J = null
          , X = null
          , _e = null
          , Pe = null
          , it = null;
        return {
            setTest: function(Ke) {
                D || (Ke ? ne(i.STENCIL_TEST) : se(i.STENCIL_TEST))
            },
            setMask: function(Ke) {
                re !== Ke && !D && (i.stencilMask(Ke),
                re = Ke)
            },
            setFunc: function(Ke, an, on) {
                (te !== Ke || fe !== an || J !== on) && (i.stencilFunc(Ke, an, on),
                te = Ke,
                fe = an,
                J = on)
            },
            setOp: function(Ke, an, on) {
                (X !== Ke || _e !== an || Pe !== on) && (i.stencilOp(Ke, an, on),
                X = Ke,
                _e = an,
                Pe = on)
            },
            setLocked: function(Ke) {
                D = Ke
            },
            setClear: function(Ke) {
                it !== Ke && (i.clearStencil(Ke),
                it = Ke)
            },
            reset: function() {
                D = !1,
                re = null,
                te = null,
                fe = null,
                J = null,
                X = null,
                _e = null,
                Pe = null,
                it = null
            }
        }
    }
    const s = new t
      , a = new n
      , o = new r
      , c = new WeakMap
      , l = new WeakMap;
    let u = {}
      , f = {}
      , h = new WeakMap
      , d = []
      , g = null
      , M = !1
      , m = null
      , p = null
      , S = null
      , T = null
      , E = null
      , R = null
      , A = null
      , P = new ke(0,0,0)
      , x = 0
      , y = !1
      , W = null
      , w = null
      , N = null
      , F = null
      , k = null;
    const G = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let B = !1
      , V = 0;
    const Q = i.getParameter(i.VERSION);
    Q.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(Q)[1]),
    B = V >= 1) : Q.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),
    B = V >= 2);
    let Z = null
      , ce = {};
    const pe = i.getParameter(i.SCISSOR_BOX)
      , ue = i.getParameter(i.VIEWPORT)
      , Ue = new st().fromArray(pe)
      , at = new st().fromArray(ue);
    function rt(D, re, te, fe) {
        const J = new Uint8Array(4)
          , X = i.createTexture();
        i.bindTexture(D, X),
        i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
        for (let _e = 0; _e < te; _e++)
            D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(re, 0, i.RGBA, 1, 1, fe, 0, i.RGBA, i.UNSIGNED_BYTE, J) : i.texImage2D(re + _e, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
        return X
    }
    const K = {};
    K[i.TEXTURE_2D] = rt(i.TEXTURE_2D, i.TEXTURE_2D, 1),
    K[i.TEXTURE_CUBE_MAP] = rt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    K[i.TEXTURE_2D_ARRAY] = rt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1),
    K[i.TEXTURE_3D] = rt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    ne(i.DEPTH_TEST),
    a.setFunc(gi),
    Fe(!1),
    ct(co),
    ne(i.CULL_FACE),
    Ye(_n);
    function ne(D) {
        u[D] !== !0 && (i.enable(D),
        u[D] = !0)
    }
    function se(D) {
        u[D] !== !1 && (i.disable(D),
        u[D] = !1)
    }
    function Le(D, re) {
        return f[D] !== re ? (i.bindFramebuffer(D, re),
        f[D] = re,
        D === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = re),
        D === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = re),
        !0) : !1
    }
    function Ae(D, re) {
        let te = d
          , fe = !1;
        if (D) {
            te = h.get(re),
            te === void 0 && (te = [],
            h.set(re, te));
            const J = D.textures;
            if (te.length !== J.length || te[0] !== i.COLOR_ATTACHMENT0) {
                for (let X = 0, _e = J.length; X < _e; X++)
                    te[X] = i.COLOR_ATTACHMENT0 + X;
                te.length = J.length,
                fe = !0
            }
        } else
            te[0] !== i.BACK && (te[0] = i.BACK,
            fe = !0);
        fe && i.drawBuffers(te)
    }
    function Ce(D) {
        return g !== D ? (i.useProgram(D),
        g = D,
        !0) : !1
    }
    const gt = {
        [Wn]: i.FUNC_ADD,
        [Ec]: i.FUNC_SUBTRACT,
        [Tc]: i.FUNC_REVERSE_SUBTRACT
    };
    gt[Ac] = i.MIN,
    gt[wc] = i.MAX;
    const He = {
        [Rc]: i.ZERO,
        [Cc]: i.ONE,
        [Pc]: i.SRC_COLOR,
        [Bs]: i.SRC_ALPHA,
        [Fc]: i.SRC_ALPHA_SATURATE,
        [Uc]: i.DST_COLOR,
        [Lc]: i.DST_ALPHA,
        [Dc]: i.ONE_MINUS_SRC_COLOR,
        [zs]: i.ONE_MINUS_SRC_ALPHA,
        [Nc]: i.ONE_MINUS_DST_COLOR,
        [Ic]: i.ONE_MINUS_DST_ALPHA,
        [Oc]: i.CONSTANT_COLOR,
        [Bc]: i.ONE_MINUS_CONSTANT_COLOR,
        [zc]: i.CONSTANT_ALPHA,
        [Vc]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function Ye(D, re, te, fe, J, X, _e, Pe, it, Ke) {
        if (D === _n) {
            M === !0 && (se(i.BLEND),
            M = !1);
            return
        }
        if (M === !1 && (ne(i.BLEND),
        M = !0),
        D !== bc) {
            if (D !== m || Ke !== y) {
                if ((p !== Wn || E !== Wn) && (i.blendEquation(i.FUNC_ADD),
                p = Wn,
                E = Wn),
                Ke)
                    switch (D) {
                    case pi:
                        i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case ho:
                        i.blendFunc(i.ONE, i.ONE);
                        break;
                    case uo:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case fo:
                        i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
                        break;
                    default:
                        we("WebGLState: Invalid blending: ", D);
                        break
                    }
                else
                    switch (D) {
                    case pi:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case ho:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
                        break;
                    case uo:
                        we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
                        break;
                    case fo:
                        we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
                        break;
                    default:
                        we("WebGLState: Invalid blending: ", D);
                        break
                    }
                S = null,
                T = null,
                R = null,
                A = null,
                P.set(0, 0, 0),
                x = 0,
                m = D,
                y = Ke
            }
            return
        }
        J = J || re,
        X = X || te,
        _e = _e || fe,
        (re !== p || J !== E) && (i.blendEquationSeparate(gt[re], gt[J]),
        p = re,
        E = J),
        (te !== S || fe !== T || X !== R || _e !== A) && (i.blendFuncSeparate(He[te], He[fe], He[X], He[_e]),
        S = te,
        T = fe,
        R = X,
        A = _e),
        (Pe.equals(P) === !1 || it !== x) && (i.blendColor(Pe.r, Pe.g, Pe.b, it),
        P.copy(Pe),
        x = it),
        m = D,
        y = !1
    }
    function et(D, re) {
        D.side === pn ? se(i.CULL_FACE) : ne(i.CULL_FACE);
        let te = D.side === Rt;
        re && (te = !te),
        Fe(te),
        D.blending === pi && D.transparent === !1 ? Ye(_n) : Ye(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha),
        a.setFunc(D.depthFunc),
        a.setTest(D.depthTest),
        a.setMask(D.depthWrite),
        s.setMask(D.colorWrite);
        const fe = D.stencilWrite;
        o.setTest(fe),
        fe && (o.setMask(D.stencilWriteMask),
        o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
        dt(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
        D.alphaToCoverage === !0 ? ne(i.SAMPLE_ALPHA_TO_COVERAGE) : se(i.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function Fe(D) {
        W !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW),
        W = D)
    }
    function ct(D) {
        D !== Mc ? (ne(i.CULL_FACE),
        D !== w && (D === co ? i.cullFace(i.BACK) : D === Sc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : se(i.CULL_FACE),
        w = D
    }
    function C(D) {
        D !== N && (B && i.lineWidth(D),
        N = D)
    }
    function dt(D, re, te) {
        D ? (ne(i.POLYGON_OFFSET_FILL),
        (F !== re || k !== te) && (F = re,
        k = te,
        a.getReversed() && (re = -re),
        i.polygonOffset(re, te))) : se(i.POLYGON_OFFSET_FILL)
    }
    function qe(D) {
        D ? ne(i.SCISSOR_TEST) : se(i.SCISSOR_TEST)
    }
    function nt(D) {
        D === void 0 && (D = i.TEXTURE0 + G - 1),
        Z !== D && (i.activeTexture(D),
        Z = D)
    }
    function Me(D, re, te) {
        te === void 0 && (Z === null ? te = i.TEXTURE0 + G - 1 : te = Z);
        let fe = ce[te];
        fe === void 0 && (fe = {
            type: void 0,
            texture: void 0
        },
        ce[te] = fe),
        (fe.type !== D || fe.texture !== re) && (Z !== te && (i.activeTexture(te),
        Z = te),
        i.bindTexture(D, re || K[D]),
        fe.type = D,
        fe.texture = re)
    }
    function b() {
        const D = ce[Z];
        D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null),
        D.type = void 0,
        D.texture = void 0)
    }
    function _() {
        try {
            i.compressedTexImage2D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function L() {
        try {
            i.compressedTexImage3D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function Y() {
        try {
            i.texSubImage2D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function $() {
        try {
            i.texSubImage3D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function q() {
        try {
            i.compressedTexSubImage2D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function me() {
        try {
            i.compressedTexSubImage3D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function ie() {
        try {
            i.texStorage2D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function Te() {
        try {
            i.texStorage3D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function Re() {
        try {
            i.texImage2D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function j() {
        try {
            i.texImage3D(...arguments)
        } catch (D) {
            we("WebGLState:", D)
        }
    }
    function ee(D) {
        Ue.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w),
        Ue.copy(D))
    }
    function ge(D) {
        at.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w),
        at.copy(D))
    }
    function xe(D, re) {
        let te = l.get(re);
        te === void 0 && (te = new WeakMap,
        l.set(re, te));
        let fe = te.get(D);
        fe === void 0 && (fe = i.getUniformBlockIndex(re, D.name),
        te.set(D, fe))
    }
    function he(D, re) {
        const fe = l.get(re).get(D);
        c.get(re) !== fe && (i.uniformBlockBinding(re, fe, D.__bindingPointIndex),
        c.set(re, fe))
    }
    function Oe() {
        i.disable(i.BLEND),
        i.disable(i.CULL_FACE),
        i.disable(i.DEPTH_TEST),
        i.disable(i.POLYGON_OFFSET_FILL),
        i.disable(i.SCISSOR_TEST),
        i.disable(i.STENCIL_TEST),
        i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
        i.blendEquation(i.FUNC_ADD),
        i.blendFunc(i.ONE, i.ZERO),
        i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
        i.blendColor(0, 0, 0, 0),
        i.colorMask(!0, !0, !0, !0),
        i.clearColor(0, 0, 0, 0),
        i.depthMask(!0),
        i.depthFunc(i.LESS),
        a.setReversed(!1),
        i.clearDepth(1),
        i.stencilMask(4294967295),
        i.stencilFunc(i.ALWAYS, 0, 4294967295),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        i.clearStencil(0),
        i.cullFace(i.BACK),
        i.frontFace(i.CCW),
        i.polygonOffset(0, 0),
        i.activeTexture(i.TEXTURE0),
        i.bindFramebuffer(i.FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.useProgram(null),
        i.lineWidth(1),
        i.scissor(0, 0, i.canvas.width, i.canvas.height),
        i.viewport(0, 0, i.canvas.width, i.canvas.height),
        u = {},
        Z = null,
        ce = {},
        f = {},
        h = new WeakMap,
        d = [],
        g = null,
        M = !1,
        m = null,
        p = null,
        S = null,
        T = null,
        E = null,
        R = null,
        A = null,
        P = new ke(0,0,0),
        x = 0,
        y = !1,
        W = null,
        w = null,
        N = null,
        F = null,
        k = null,
        Ue.set(0, 0, i.canvas.width, i.canvas.height),
        at.set(0, 0, i.canvas.width, i.canvas.height),
        s.reset(),
        a.reset(),
        o.reset()
    }
    return {
        buffers: {
            color: s,
            depth: a,
            stencil: o
        },
        enable: ne,
        disable: se,
        bindFramebuffer: Le,
        drawBuffers: Ae,
        useProgram: Ce,
        setBlending: Ye,
        setMaterial: et,
        setFlipSided: Fe,
        setCullFace: ct,
        setLineWidth: C,
        setPolygonOffset: dt,
        setScissorTest: qe,
        activeTexture: nt,
        bindTexture: Me,
        unbindTexture: b,
        compressedTexImage2D: _,
        compressedTexImage3D: L,
        texImage2D: Re,
        texImage3D: j,
        updateUBOMapping: xe,
        uniformBlockBinding: he,
        texStorage2D: ie,
        texStorage3D: Te,
        texSubImage2D: Y,
        texSubImage3D: $,
        compressedTexSubImage2D: q,
        compressedTexSubImage3D: me,
        scissor: ee,
        viewport: ge,
        reset: Oe
    }
}
function pg(i, e, t, n, r, s, a) {
    const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null
      , c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , l = new Ge
      , u = new WeakMap;
    let f;
    const h = new WeakMap;
    let d = !1;
    try {
        d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function g(b, _) {
        return d ? new OffscreenCanvas(b,_) : Xi("canvas")
    }
    function M(b, _, L) {
        let Y = 1;
        const $ = Me(b);
        if (($.width > L || $.height > L) && (Y = L / Math.max($.width, $.height)),
        Y < 1)
            if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
                const q = Math.floor(Y * $.width)
                  , me = Math.floor(Y * $.height);
                f === void 0 && (f = g(q, me));
                const ie = _ ? g(q, me) : f;
                return ie.width = q,
                ie.height = me,
                ie.getContext("2d").drawImage(b, 0, 0, q, me),
                be("WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + q + "x" + me + ")."),
                ie
            } else
                return "data"in b && be("WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."),
                b;
        return b
    }
    function m(b) {
        return b.generateMipmaps
    }
    function p(b) {
        i.generateMipmap(b)
    }
    function S(b) {
        return b.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? i.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D
    }
    function T(b, _, L, Y, $=!1) {
        if (b !== null) {
            if (i[b] !== void 0)
                return i[b];
            be("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'")
        }
        let q = _;
        if (_ === i.RED && (L === i.FLOAT && (q = i.R32F),
        L === i.HALF_FLOAT && (q = i.R16F),
        L === i.UNSIGNED_BYTE && (q = i.R8)),
        _ === i.RED_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.R8UI),
        L === i.UNSIGNED_SHORT && (q = i.R16UI),
        L === i.UNSIGNED_INT && (q = i.R32UI),
        L === i.BYTE && (q = i.R8I),
        L === i.SHORT && (q = i.R16I),
        L === i.INT && (q = i.R32I)),
        _ === i.RG && (L === i.FLOAT && (q = i.RG32F),
        L === i.HALF_FLOAT && (q = i.RG16F),
        L === i.UNSIGNED_BYTE && (q = i.RG8)),
        _ === i.RG_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.RG8UI),
        L === i.UNSIGNED_SHORT && (q = i.RG16UI),
        L === i.UNSIGNED_INT && (q = i.RG32UI),
        L === i.BYTE && (q = i.RG8I),
        L === i.SHORT && (q = i.RG16I),
        L === i.INT && (q = i.RG32I)),
        _ === i.RGB_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.RGB8UI),
        L === i.UNSIGNED_SHORT && (q = i.RGB16UI),
        L === i.UNSIGNED_INT && (q = i.RGB32UI),
        L === i.BYTE && (q = i.RGB8I),
        L === i.SHORT && (q = i.RGB16I),
        L === i.INT && (q = i.RGB32I)),
        _ === i.RGBA_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.RGBA8UI),
        L === i.UNSIGNED_SHORT && (q = i.RGBA16UI),
        L === i.UNSIGNED_INT && (q = i.RGBA32UI),
        L === i.BYTE && (q = i.RGBA8I),
        L === i.SHORT && (q = i.RGBA16I),
        L === i.INT && (q = i.RGBA32I)),
        _ === i.RGB && (L === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5),
        L === i.UNSIGNED_INT_10F_11F_11F_REV && (q = i.R11F_G11F_B10F)),
        _ === i.RGBA) {
            const me = $ ? Br : We.getTransfer(Y);
            L === i.FLOAT && (q = i.RGBA32F),
            L === i.HALF_FLOAT && (q = i.RGBA16F),
            L === i.UNSIGNED_BYTE && (q = me === $e ? i.SRGB8_ALPHA8 : i.RGBA8),
            L === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4),
            L === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1)
        }
        return (q === i.R16F || q === i.R32F || q === i.RG16F || q === i.RG32F || q === i.RGBA16F || q === i.RGBA32F) && e.get("EXT_color_buffer_float"),
        q
    }
    function E(b, _) {
        let L;
        return b ? _ === null || _ === rn || _ === Hi ? L = i.DEPTH24_STENCIL8 : _ === zt ? L = i.DEPTH32F_STENCIL8 : _ === Gi && (L = i.DEPTH24_STENCIL8,
        be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === rn || _ === Hi ? L = i.DEPTH_COMPONENT24 : _ === zt ? L = i.DEPTH_COMPONENT32F : _ === Gi && (L = i.DEPTH_COMPONENT16),
        L
    }
    function R(b, _) {
        return m(b) === !0 || b.isFramebufferTexture && b.minFilter !== Mt && b.minFilter !== lt ? Math.log2(Math.max(_.width, _.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? _.mipmaps.length : 1
    }
    function A(b) {
        const _ = b.target;
        _.removeEventListener("dispose", A),
        x(_),
        _.isVideoTexture && u.delete(_)
    }
    function P(b) {
        const _ = b.target;
        _.removeEventListener("dispose", P),
        W(_)
    }
    function x(b) {
        const _ = n.get(b);
        if (_.__webglInit === void 0)
            return;
        const L = b.source
          , Y = h.get(L);
        if (Y) {
            const $ = Y[_.__cacheKey];
            $.usedTimes--,
            $.usedTimes === 0 && y(b),
            Object.keys(Y).length === 0 && h.delete(L)
        }
        n.remove(b)
    }
    function y(b) {
        const _ = n.get(b);
        i.deleteTexture(_.__webglTexture);
        const L = b.source
          , Y = h.get(L);
        delete Y[_.__cacheKey],
        a.memory.textures--
    }
    function W(b) {
        const _ = n.get(b);
        if (b.depthTexture && (b.depthTexture.dispose(),
        n.remove(b.depthTexture)),
        b.isWebGLCubeRenderTarget)
            for (let Y = 0; Y < 6; Y++) {
                if (Array.isArray(_.__webglFramebuffer[Y]))
                    for (let $ = 0; $ < _.__webglFramebuffer[Y].length; $++)
                        i.deleteFramebuffer(_.__webglFramebuffer[Y][$]);
                else
                    i.deleteFramebuffer(_.__webglFramebuffer[Y]);
                _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y])
            }
        else {
            if (Array.isArray(_.__webglFramebuffer))
                for (let Y = 0; Y < _.__webglFramebuffer.length; Y++)
                    i.deleteFramebuffer(_.__webglFramebuffer[Y]);
            else
                i.deleteFramebuffer(_.__webglFramebuffer);
            if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
            _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
            _.__webglColorRenderbuffer)
                for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++)
                    _.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
            _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer)
        }
        const L = b.textures;
        for (let Y = 0, $ = L.length; Y < $; Y++) {
            const q = n.get(L[Y]);
            q.__webglTexture && (i.deleteTexture(q.__webglTexture),
            a.memory.textures--),
            n.remove(L[Y])
        }
        n.remove(b)
    }
    let w = 0;
    function N() {
        w = 0
    }
    function F() {
        const b = w;
        return b >= r.maxTextures && be("WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + r.maxTextures),
        w += 1,
        b
    }
    function k(b) {
        const _ = [];
        return _.push(b.wrapS),
        _.push(b.wrapT),
        _.push(b.wrapR || 0),
        _.push(b.magFilter),
        _.push(b.minFilter),
        _.push(b.anisotropy),
        _.push(b.internalFormat),
        _.push(b.format),
        _.push(b.type),
        _.push(b.generateMipmaps),
        _.push(b.premultiplyAlpha),
        _.push(b.flipY),
        _.push(b.unpackAlignment),
        _.push(b.colorSpace),
        _.join()
    }
    function G(b, _) {
        const L = n.get(b);
        if (b.isVideoTexture && qe(b),
        b.isRenderTargetTexture === !1 && b.isExternalTexture !== !0 && b.version > 0 && L.__version !== b.version) {
            const Y = b.image;
            if (Y === null)
                be("WebGLRenderer: Texture marked for update but no image data found.");
            else if (Y.complete === !1)
                be("WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                K(L, b, _);
                return
            }
        } else
            b.isExternalTexture && (L.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
        t.bindTexture(i.TEXTURE_2D, L.__webglTexture, i.TEXTURE0 + _)
    }
    function B(b, _) {
        const L = n.get(b);
        if (b.isRenderTargetTexture === !1 && b.version > 0 && L.__version !== b.version) {
            K(L, b, _);
            return
        } else
            b.isExternalTexture && (L.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
        t.bindTexture(i.TEXTURE_2D_ARRAY, L.__webglTexture, i.TEXTURE0 + _)
    }
    function V(b, _) {
        const L = n.get(b);
        if (b.isRenderTargetTexture === !1 && b.version > 0 && L.__version !== b.version) {
            K(L, b, _);
            return
        }
        t.bindTexture(i.TEXTURE_3D, L.__webglTexture, i.TEXTURE0 + _)
    }
    function Q(b, _) {
        const L = n.get(b);
        if (b.isCubeDepthTexture !== !0 && b.version > 0 && L.__version !== b.version) {
            ne(L, b, _);
            return
        }
        t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + _)
    }
    const Z = {
        [Ys]: i.REPEAT,
        [mn]: i.CLAMP_TO_EDGE,
        [Ks]: i.MIRRORED_REPEAT
    }
      , ce = {
        [Mt]: i.NEAREST,
        [Wc]: i.NEAREST_MIPMAP_NEAREST,
        [er]: i.NEAREST_MIPMAP_LINEAR,
        [lt]: i.LINEAR,
        [Qr]: i.LINEAR_MIPMAP_NEAREST,
        [qn]: i.LINEAR_MIPMAP_LINEAR
    }
      , pe = {
        [Kc]: i.NEVER,
        [Qc]: i.ALWAYS,
        [$c]: i.LESS,
        [Ga]: i.LEQUAL,
        [Zc]: i.EQUAL,
        [Ha]: i.GEQUAL,
        [jc]: i.GREATER,
        [Jc]: i.NOTEQUAL
    };
    function ue(b, _) {
        if (_.type === zt && e.has("OES_texture_float_linear") === !1 && (_.magFilter === lt || _.magFilter === Qr || _.magFilter === er || _.magFilter === qn || _.minFilter === lt || _.minFilter === Qr || _.minFilter === er || _.minFilter === qn) && be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        i.texParameteri(b, i.TEXTURE_WRAP_S, Z[_.wrapS]),
        i.texParameteri(b, i.TEXTURE_WRAP_T, Z[_.wrapT]),
        (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) && i.texParameteri(b, i.TEXTURE_WRAP_R, Z[_.wrapR]),
        i.texParameteri(b, i.TEXTURE_MAG_FILTER, ce[_.magFilter]),
        i.texParameteri(b, i.TEXTURE_MIN_FILTER, ce[_.minFilter]),
        _.compareFunction && (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, pe[_.compareFunction])),
        e.has("EXT_texture_filter_anisotropic") === !0) {
            if (_.magFilter === Mt || _.minFilter !== er && _.minFilter !== qn || _.type === zt && e.has("OES_texture_float_linear") === !1)
                return;
            if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
                const L = e.get("EXT_texture_filter_anisotropic");
                i.texParameterf(b, L.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())),
                n.get(_).__currentAnisotropy = _.anisotropy
            }
        }
    }
    function Ue(b, _) {
        let L = !1;
        b.__webglInit === void 0 && (b.__webglInit = !0,
        _.addEventListener("dispose", A));
        const Y = _.source;
        let $ = h.get(Y);
        $ === void 0 && ($ = {},
        h.set(Y, $));
        const q = k(_);
        if (q !== b.__cacheKey) {
            $[q] === void 0 && ($[q] = {
                texture: i.createTexture(),
                usedTimes: 0
            },
            a.memory.textures++,
            L = !0),
            $[q].usedTimes++;
            const me = $[b.__cacheKey];
            me !== void 0 && ($[b.__cacheKey].usedTimes--,
            me.usedTimes === 0 && y(_)),
            b.__cacheKey = q,
            b.__webglTexture = $[q].texture
        }
        return L
    }
    function at(b, _, L) {
        return Math.floor(Math.floor(b / L) / _)
    }
    function rt(b, _, L, Y) {
        const q = b.updateRanges;
        if (q.length === 0)
            t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, L, Y, _.data);
        else {
            q.sort( (j, ee) => j.start - ee.start);
            let me = 0;
            for (let j = 1; j < q.length; j++) {
                const ee = q[me]
                  , ge = q[j]
                  , xe = ee.start + ee.count
                  , he = at(ge.start, _.width, 4)
                  , Oe = at(ee.start, _.width, 4);
                ge.start <= xe + 1 && he === Oe && at(ge.start + ge.count - 1, _.width, 4) === he ? ee.count = Math.max(ee.count, ge.start + ge.count - ee.start) : (++me,
                q[me] = ge)
            }
            q.length = me + 1;
            const ie = i.getParameter(i.UNPACK_ROW_LENGTH)
              , Te = i.getParameter(i.UNPACK_SKIP_PIXELS)
              , Re = i.getParameter(i.UNPACK_SKIP_ROWS);
            i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
            for (let j = 0, ee = q.length; j < ee; j++) {
                const ge = q[j]
                  , xe = Math.floor(ge.start / 4)
                  , he = Math.ceil(ge.count / 4)
                  , Oe = xe % _.width
                  , D = Math.floor(xe / _.width)
                  , re = he
                  , te = 1;
                i.pixelStorei(i.UNPACK_SKIP_PIXELS, Oe),
                i.pixelStorei(i.UNPACK_SKIP_ROWS, D),
                t.texSubImage2D(i.TEXTURE_2D, 0, Oe, D, re, te, L, Y, _.data)
            }
            b.clearUpdateRanges(),
            i.pixelStorei(i.UNPACK_ROW_LENGTH, ie),
            i.pixelStorei(i.UNPACK_SKIP_PIXELS, Te),
            i.pixelStorei(i.UNPACK_SKIP_ROWS, Re)
        }
    }
    function K(b, _, L) {
        let Y = i.TEXTURE_2D;
        (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY),
        _.isData3DTexture && (Y = i.TEXTURE_3D);
        const $ = Ue(b, _)
          , q = _.source;
        t.bindTexture(Y, b.__webglTexture, i.TEXTURE0 + L);
        const me = n.get(q);
        if (q.version !== me.__version || $ === !0) {
            t.activeTexture(i.TEXTURE0 + L);
            const ie = We.getPrimaries(We.workingColorSpace)
              , Te = _.colorSpace === Pn ? null : We.getPrimaries(_.colorSpace)
              , Re = _.colorSpace === Pn || ie === Te ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Re);
            let j = M(_.image, !1, r.maxTextureSize);
            j = nt(_, j);
            const ee = s.convert(_.format, _.colorSpace)
              , ge = s.convert(_.type);
            let xe = T(_.internalFormat, ee, ge, _.colorSpace, _.isVideoTexture);
            ue(Y, _);
            let he;
            const Oe = _.mipmaps
              , D = _.isVideoTexture !== !0
              , re = me.__version === void 0 || $ === !0
              , te = q.dataReady
              , fe = R(_, j);
            if (_.isDepthTexture)
                xe = E(_.format === Yn, _.type),
                re && (D ? t.texStorage2D(i.TEXTURE_2D, 1, xe, j.width, j.height) : t.texImage2D(i.TEXTURE_2D, 0, xe, j.width, j.height, 0, ee, ge, null));
            else if (_.isDataTexture)
                if (Oe.length > 0) {
                    D && re && t.texStorage2D(i.TEXTURE_2D, fe, xe, Oe[0].width, Oe[0].height);
                    for (let J = 0, X = Oe.length; J < X; J++)
                        he = Oe[J],
                        D ? te && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, he.width, he.height, ee, ge, he.data) : t.texImage2D(i.TEXTURE_2D, J, xe, he.width, he.height, 0, ee, ge, he.data);
                    _.generateMipmaps = !1
                } else
                    D ? (re && t.texStorage2D(i.TEXTURE_2D, fe, xe, j.width, j.height),
                    te && rt(_, j, ee, ge)) : t.texImage2D(i.TEXTURE_2D, 0, xe, j.width, j.height, 0, ee, ge, j.data);
            else if (_.isCompressedTexture)
                if (_.isCompressedArrayTexture) {
                    D && re && t.texStorage3D(i.TEXTURE_2D_ARRAY, fe, xe, Oe[0].width, Oe[0].height, j.depth);
                    for (let J = 0, X = Oe.length; J < X; J++)
                        if (he = Oe[J],
                        _.format !== Vt)
                            if (ee !== null)
                                if (D) {
                                    if (te)
                                        if (_.layerUpdates.size > 0) {
                                            const _e = al(he.width, he.height, _.format, _.type);
                                            for (const Pe of _.layerUpdates) {
                                                const it = he.data.subarray(Pe * _e / he.data.BYTES_PER_ELEMENT, (Pe + 1) * _e / he.data.BYTES_PER_ELEMENT);
                                                t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, Pe, he.width, he.height, 1, ee, it)
                                            }
                                            _.clearLayerUpdates()
                                        } else
                                            t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, he.width, he.height, j.depth, ee, he.data)
                                } else
                                    t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, xe, he.width, he.height, j.depth, 0, he.data, 0, 0);
                            else
                                be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                        else
                            D ? te && t.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, he.width, he.height, j.depth, ee, ge, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, J, xe, he.width, he.height, j.depth, 0, ee, ge, he.data)
                } else {
                    D && re && t.texStorage2D(i.TEXTURE_2D, fe, xe, Oe[0].width, Oe[0].height);
                    for (let J = 0, X = Oe.length; J < X; J++)
                        he = Oe[J],
                        _.format !== Vt ? ee !== null ? D ? te && t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, he.width, he.height, ee, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, J, xe, he.width, he.height, 0, he.data) : be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? te && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, he.width, he.height, ee, ge, he.data) : t.texImage2D(i.TEXTURE_2D, J, xe, he.width, he.height, 0, ee, ge, he.data)
                }
            else if (_.isDataArrayTexture)
                if (D) {
                    if (re && t.texStorage3D(i.TEXTURE_2D_ARRAY, fe, xe, j.width, j.height, j.depth),
                    te)
                        if (_.layerUpdates.size > 0) {
                            const J = al(j.width, j.height, _.format, _.type);
                            for (const X of _.layerUpdates) {
                                const _e = j.data.subarray(X * J / j.data.BYTES_PER_ELEMENT, (X + 1) * J / j.data.BYTES_PER_ELEMENT);
                                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, X, j.width, j.height, 1, ee, ge, _e)
                            }
                            _.clearLayerUpdates()
                        } else
                            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, ee, ge, j.data)
                } else
                    t.texImage3D(i.TEXTURE_2D_ARRAY, 0, xe, j.width, j.height, j.depth, 0, ee, ge, j.data);
            else if (_.isData3DTexture)
                D ? (re && t.texStorage3D(i.TEXTURE_3D, fe, xe, j.width, j.height, j.depth),
                te && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, ee, ge, j.data)) : t.texImage3D(i.TEXTURE_3D, 0, xe, j.width, j.height, j.depth, 0, ee, ge, j.data);
            else if (_.isFramebufferTexture) {
                if (re)
                    if (D)
                        t.texStorage2D(i.TEXTURE_2D, fe, xe, j.width, j.height);
                    else {
                        let J = j.width
                          , X = j.height;
                        for (let _e = 0; _e < fe; _e++)
                            t.texImage2D(i.TEXTURE_2D, _e, xe, J, X, 0, ee, ge, null),
                            J >>= 1,
                            X >>= 1
                    }
            } else if (Oe.length > 0) {
                if (D && re) {
                    const J = Me(Oe[0]);
                    t.texStorage2D(i.TEXTURE_2D, fe, xe, J.width, J.height)
                }
                for (let J = 0, X = Oe.length; J < X; J++)
                    he = Oe[J],
                    D ? te && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ee, ge, he) : t.texImage2D(i.TEXTURE_2D, J, xe, ee, ge, he);
                _.generateMipmaps = !1
            } else if (D) {
                if (re) {
                    const J = Me(j);
                    t.texStorage2D(i.TEXTURE_2D, fe, xe, J.width, J.height)
                }
                te && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee, ge, j)
            } else
                t.texImage2D(i.TEXTURE_2D, 0, xe, ee, ge, j);
            m(_) && p(Y),
            me.__version = q.version,
            _.onUpdate && _.onUpdate(_)
        }
        b.__version = _.version
    }
    function ne(b, _, L) {
        if (_.image.length !== 6)
            return;
        const Y = Ue(b, _)
          , $ = _.source;
        t.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + L);
        const q = n.get($);
        if ($.version !== q.__version || Y === !0) {
            t.activeTexture(i.TEXTURE0 + L);
            const me = We.getPrimaries(We.workingColorSpace)
              , ie = _.colorSpace === Pn ? null : We.getPrimaries(_.colorSpace)
              , Te = _.colorSpace === Pn || me === ie ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
            const Re = _.isCompressedTexture || _.image[0].isCompressedTexture
              , j = _.image[0] && _.image[0].isDataTexture
              , ee = [];
            for (let X = 0; X < 6; X++)
                !Re && !j ? ee[X] = M(_.image[X], !0, r.maxCubemapSize) : ee[X] = j ? _.image[X].image : _.image[X],
                ee[X] = nt(_, ee[X]);
            const ge = ee[0]
              , xe = s.convert(_.format, _.colorSpace)
              , he = s.convert(_.type)
              , Oe = T(_.internalFormat, xe, he, _.colorSpace)
              , D = _.isVideoTexture !== !0
              , re = q.__version === void 0 || Y === !0
              , te = $.dataReady;
            let fe = R(_, ge);
            ue(i.TEXTURE_CUBE_MAP, _);
            let J;
            if (Re) {
                D && re && t.texStorage2D(i.TEXTURE_CUBE_MAP, fe, Oe, ge.width, ge.height);
                for (let X = 0; X < 6; X++) {
                    J = ee[X].mipmaps;
                    for (let _e = 0; _e < J.length; _e++) {
                        const Pe = J[_e];
                        _.format !== Vt ? xe !== null ? D ? te && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e, 0, 0, Pe.width, Pe.height, xe, Pe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e, Oe, Pe.width, Pe.height, 0, Pe.data) : be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e, 0, 0, Pe.width, Pe.height, xe, he, Pe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e, Oe, Pe.width, Pe.height, 0, xe, he, Pe.data)
                    }
                }
            } else {
                if (J = _.mipmaps,
                D && re) {
                    J.length > 0 && fe++;
                    const X = Me(ee[0]);
                    t.texStorage2D(i.TEXTURE_CUBE_MAP, fe, Oe, X.width, X.height)
                }
                for (let X = 0; X < 6; X++)
                    if (j) {
                        D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, ee[X].width, ee[X].height, xe, he, ee[X].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Oe, ee[X].width, ee[X].height, 0, xe, he, ee[X].data);
                        for (let _e = 0; _e < J.length; _e++) {
                            const it = J[_e].image[X].image;
                            D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e + 1, 0, 0, it.width, it.height, xe, he, it.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e + 1, Oe, it.width, it.height, 0, xe, he, it.data)
                        }
                    } else {
                        D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, xe, he, ee[X]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Oe, xe, he, ee[X]);
                        for (let _e = 0; _e < J.length; _e++) {
                            const Pe = J[_e];
                            D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e + 1, 0, 0, xe, he, Pe.image[X]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, _e + 1, Oe, xe, he, Pe.image[X])
                        }
                    }
            }
            m(_) && p(i.TEXTURE_CUBE_MAP),
            q.__version = $.version,
            _.onUpdate && _.onUpdate(_)
        }
        b.__version = _.version
    }
    function se(b, _, L, Y, $, q) {
        const me = s.convert(L.format, L.colorSpace)
          , ie = s.convert(L.type)
          , Te = T(L.internalFormat, me, ie, L.colorSpace)
          , Re = n.get(_)
          , j = n.get(L);
        if (j.__renderTarget = _,
        !Re.__hasExternalTextures) {
            const ee = Math.max(1, _.width >> q)
              , ge = Math.max(1, _.height >> q);
            $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? t.texImage3D($, q, Te, ee, ge, _.depth, 0, me, ie, null) : t.texImage2D($, q, Te, ee, ge, 0, me, ie, null)
        }
        t.bindFramebuffer(i.FRAMEBUFFER, b),
        dt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, $, j.__webglTexture, 0, C(_)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, $, j.__webglTexture, q),
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function Le(b, _, L) {
        if (i.bindRenderbuffer(i.RENDERBUFFER, b),
        _.depthBuffer) {
            const Y = _.depthTexture
              , $ = Y && Y.isDepthTexture ? Y.type : null
              , q = E(_.stencilBuffer, $)
              , me = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
            dt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, C(_), q, _.width, _.height) : L ? i.renderbufferStorageMultisample(i.RENDERBUFFER, C(_), q, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, q, _.width, _.height),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, me, i.RENDERBUFFER, b)
        } else {
            const Y = _.textures;
            for (let $ = 0; $ < Y.length; $++) {
                const q = Y[$]
                  , me = s.convert(q.format, q.colorSpace)
                  , ie = s.convert(q.type)
                  , Te = T(q.internalFormat, me, ie, q.colorSpace);
                dt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, C(_), Te, _.width, _.height) : L ? i.renderbufferStorageMultisample(i.RENDERBUFFER, C(_), Te, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Te, _.width, _.height)
            }
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null)
    }
    function Ae(b, _, L) {
        const Y = _.isWebGLCubeRenderTarget === !0;
        if (t.bindFramebuffer(i.FRAMEBUFFER, b),
        !(_.depthTexture && _.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        const $ = n.get(_.depthTexture);
        if ($.__renderTarget = _,
        (!$.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width,
        _.depthTexture.image.height = _.height,
        _.depthTexture.needsUpdate = !0),
        Y) {
            if ($.__webglInit === void 0 && ($.__webglInit = !0,
            _.depthTexture.addEventListener("dispose", A)),
            $.__webglTexture === void 0) {
                $.__webglTexture = i.createTexture(),
                t.bindTexture(i.TEXTURE_CUBE_MAP, $.__webglTexture),
                ue(i.TEXTURE_CUBE_MAP, _.depthTexture);
                const Re = s.convert(_.depthTexture.format)
                  , j = s.convert(_.depthTexture.type);
                let ee;
                _.depthTexture.format === Mn ? ee = i.DEPTH_COMPONENT24 : _.depthTexture.format === Yn && (ee = i.DEPTH24_STENCIL8);
                for (let ge = 0; ge < 6; ge++)
                    i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, ee, _.width, _.height, 0, Re, j, null)
            }
        } else
            G(_.depthTexture, 0);
        const q = $.__webglTexture
          , me = C(_)
          , ie = Y ? i.TEXTURE_CUBE_MAP_POSITIVE_X + L : i.TEXTURE_2D
          , Te = _.depthTexture.format === Yn ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        if (_.depthTexture.format === Mn)
            dt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Te, ie, q, 0, me) : i.framebufferTexture2D(i.FRAMEBUFFER, Te, ie, q, 0);
        else if (_.depthTexture.format === Yn)
            dt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Te, ie, q, 0, me) : i.framebufferTexture2D(i.FRAMEBUFFER, Te, ie, q, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function Ce(b) {
        const _ = n.get(b)
          , L = b.isWebGLCubeRenderTarget === !0;
        if (_.__boundDepthTexture !== b.depthTexture) {
            const Y = b.depthTexture;
            if (_.__depthDisposeCallback && _.__depthDisposeCallback(),
            Y) {
                const $ = () => {
                    delete _.__boundDepthTexture,
                    delete _.__depthDisposeCallback,
                    Y.removeEventListener("dispose", $)
                }
                ;
                Y.addEventListener("dispose", $),
                _.__depthDisposeCallback = $
            }
            _.__boundDepthTexture = Y
        }
        if (b.depthTexture && !_.__autoAllocateDepthBuffer)
            if (L)
                for (let Y = 0; Y < 6; Y++)
                    Ae(_.__webglFramebuffer[Y], b, Y);
            else {
                const Y = b.texture.mipmaps;
                Y && Y.length > 0 ? Ae(_.__webglFramebuffer[0], b, 0) : Ae(_.__webglFramebuffer, b, 0)
            }
        else if (L) {
            _.__webglDepthbuffer = [];
            for (let Y = 0; Y < 6; Y++)
                if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]),
                _.__webglDepthbuffer[Y] === void 0)
                    _.__webglDepthbuffer[Y] = i.createRenderbuffer(),
                    Le(_.__webglDepthbuffer[Y], b, !1);
                else {
                    const $ = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                      , q = _.__webglDepthbuffer[Y];
                    i.bindRenderbuffer(i.RENDERBUFFER, q),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, q)
                }
        } else {
            const Y = b.texture.mipmaps;
            if (Y && Y.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
            _.__webglDepthbuffer === void 0)
                _.__webglDepthbuffer = i.createRenderbuffer(),
                Le(_.__webglDepthbuffer, b, !1);
            else {
                const $ = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , q = _.__webglDepthbuffer;
                i.bindRenderbuffer(i.RENDERBUFFER, q),
                i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, q)
            }
        }
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function gt(b, _, L) {
        const Y = n.get(b);
        _ !== void 0 && se(Y.__webglFramebuffer, b, b.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
        L !== void 0 && Ce(b)
    }
    function He(b) {
        const _ = b.texture
          , L = n.get(b)
          , Y = n.get(_);
        b.addEventListener("dispose", P);
        const $ = b.textures
          , q = b.isWebGLCubeRenderTarget === !0
          , me = $.length > 1;
        if (me || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()),
        Y.__version = _.version,
        a.memory.textures++),
        q) {
            L.__webglFramebuffer = [];
            for (let ie = 0; ie < 6; ie++)
                if (_.mipmaps && _.mipmaps.length > 0) {
                    L.__webglFramebuffer[ie] = [];
                    for (let Te = 0; Te < _.mipmaps.length; Te++)
                        L.__webglFramebuffer[ie][Te] = i.createFramebuffer()
                } else
                    L.__webglFramebuffer[ie] = i.createFramebuffer()
        } else {
            if (_.mipmaps && _.mipmaps.length > 0) {
                L.__webglFramebuffer = [];
                for (let ie = 0; ie < _.mipmaps.length; ie++)
                    L.__webglFramebuffer[ie] = i.createFramebuffer()
            } else
                L.__webglFramebuffer = i.createFramebuffer();
            if (me)
                for (let ie = 0, Te = $.length; ie < Te; ie++) {
                    const Re = n.get($[ie]);
                    Re.__webglTexture === void 0 && (Re.__webglTexture = i.createTexture(),
                    a.memory.textures++)
                }
            if (b.samples > 0 && dt(b) === !1) {
                L.__webglMultisampledFramebuffer = i.createFramebuffer(),
                L.__webglColorRenderbuffer = [],
                t.bindFramebuffer(i.FRAMEBUFFER, L.__webglMultisampledFramebuffer);
                for (let ie = 0; ie < $.length; ie++) {
                    const Te = $[ie];
                    L.__webglColorRenderbuffer[ie] = i.createRenderbuffer(),
                    i.bindRenderbuffer(i.RENDERBUFFER, L.__webglColorRenderbuffer[ie]);
                    const Re = s.convert(Te.format, Te.colorSpace)
                      , j = s.convert(Te.type)
                      , ee = T(Te.internalFormat, Re, j, Te.colorSpace, b.isXRRenderTarget === !0)
                      , ge = C(b);
                    i.renderbufferStorageMultisample(i.RENDERBUFFER, ge, ee, b.width, b.height),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, L.__webglColorRenderbuffer[ie])
                }
                i.bindRenderbuffer(i.RENDERBUFFER, null),
                b.depthBuffer && (L.__webglDepthRenderbuffer = i.createRenderbuffer(),
                Le(L.__webglDepthRenderbuffer, b, !0)),
                t.bindFramebuffer(i.FRAMEBUFFER, null)
            }
        }
        if (q) {
            t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture),
            ue(i.TEXTURE_CUBE_MAP, _);
            for (let ie = 0; ie < 6; ie++)
                if (_.mipmaps && _.mipmaps.length > 0)
                    for (let Te = 0; Te < _.mipmaps.length; Te++)
                        se(L.__webglFramebuffer[ie][Te], b, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ie, Te);
                else
                    se(L.__webglFramebuffer[ie], b, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0);
            m(_) && p(i.TEXTURE_CUBE_MAP),
            t.unbindTexture()
        } else if (me) {
            for (let ie = 0, Te = $.length; ie < Te; ie++) {
                const Re = $[ie]
                  , j = n.get(Re);
                let ee = i.TEXTURE_2D;
                (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (ee = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
                t.bindTexture(ee, j.__webglTexture),
                ue(ee, Re),
                se(L.__webglFramebuffer, b, Re, i.COLOR_ATTACHMENT0 + ie, ee, 0),
                m(Re) && p(ee)
            }
            t.unbindTexture()
        } else {
            let ie = i.TEXTURE_2D;
            if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (ie = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
            t.bindTexture(ie, Y.__webglTexture),
            ue(ie, _),
            _.mipmaps && _.mipmaps.length > 0)
                for (let Te = 0; Te < _.mipmaps.length; Te++)
                    se(L.__webglFramebuffer[Te], b, _, i.COLOR_ATTACHMENT0, ie, Te);
            else
                se(L.__webglFramebuffer, b, _, i.COLOR_ATTACHMENT0, ie, 0);
            m(_) && p(ie),
            t.unbindTexture()
        }
        b.depthBuffer && Ce(b)
    }
    function Ye(b) {
        const _ = b.textures;
        for (let L = 0, Y = _.length; L < Y; L++) {
            const $ = _[L];
            if (m($)) {
                const q = S(b)
                  , me = n.get($).__webglTexture;
                t.bindTexture(q, me),
                p(q),
                t.unbindTexture()
            }
        }
    }
    const et = []
      , Fe = [];
    function ct(b) {
        if (b.samples > 0) {
            if (dt(b) === !1) {
                const _ = b.textures
                  , L = b.width
                  , Y = b.height;
                let $ = i.COLOR_BUFFER_BIT;
                const q = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , me = n.get(b)
                  , ie = _.length > 1;
                if (ie)
                    for (let Re = 0; Re < _.length; Re++)
                        t.bindFramebuffer(i.FRAMEBUFFER, me.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Re, i.RENDERBUFFER, null),
                        t.bindFramebuffer(i.FRAMEBUFFER, me.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Re, i.TEXTURE_2D, null, 0);
                t.bindFramebuffer(i.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
                const Te = b.texture.mipmaps;
                Te && Te.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglFramebuffer);
                for (let Re = 0; Re < _.length; Re++) {
                    if (b.resolveDepthBuffer && (b.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT),
                    b.stencilBuffer && b.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)),
                    ie) {
                        i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, me.__webglColorRenderbuffer[Re]);
                        const j = n.get(_[Re]).__webglTexture;
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, j, 0)
                    }
                    i.blitFramebuffer(0, 0, L, Y, 0, 0, L, Y, $, i.NEAREST),
                    c === !0 && (et.length = 0,
                    Fe.length = 0,
                    et.push(i.COLOR_ATTACHMENT0 + Re),
                    b.depthBuffer && b.resolveDepthBuffer === !1 && (et.push(q),
                    Fe.push(q),
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Fe)),
                    i.invalidateFramebuffer(i.READ_FRAMEBUFFER, et))
                }
                if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
                ie)
                    for (let Re = 0; Re < _.length; Re++) {
                        t.bindFramebuffer(i.FRAMEBUFFER, me.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Re, i.RENDERBUFFER, me.__webglColorRenderbuffer[Re]);
                        const j = n.get(_[Re]).__webglTexture;
                        t.bindFramebuffer(i.FRAMEBUFFER, me.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Re, i.TEXTURE_2D, j, 0)
                    }
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer)
            } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && c) {
                const _ = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_])
            }
        }
    }
    function C(b) {
        return Math.min(r.maxSamples, b.samples)
    }
    function dt(b) {
        const _ = n.get(b);
        return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1
    }
    function qe(b) {
        const _ = a.render.frame;
        u.get(b) !== _ && (u.set(b, _),
        b.update())
    }
    function nt(b, _) {
        const L = b.colorSpace
          , Y = b.format
          , $ = b.type;
        return b.isCompressedTexture === !0 || b.isVideoTexture === !0 || L !== vi && L !== Pn && (We.getTransfer(L) === $e ? (Y !== Vt || $ !== Ut) && be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : we("WebGLTextures: Unsupported texture color space:", L)),
        _
    }
    function Me(b) {
        return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (l.width = b.naturalWidth || b.width,
        l.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (l.width = b.displayWidth,
        l.height = b.displayHeight) : (l.width = b.width,
        l.height = b.height),
        l
    }
    this.allocateTextureUnit = F,
    this.resetTextureUnits = N,
    this.setTexture2D = G,
    this.setTexture2DArray = B,
    this.setTexture3D = V,
    this.setTextureCube = Q,
    this.rebindTextures = gt,
    this.setupRenderTarget = He,
    this.updateRenderTargetMipmap = Ye,
    this.updateMultisampleRenderTarget = ct,
    this.setupDepthRenderbuffer = Ce,
    this.setupFrameBufferTexture = se,
    this.useMultisampledRTT = dt,
    this.isReversedDepthBuffer = function() {
        return t.buffers.depth.getReversed()
    }
}
function mg(i, e) {
    function t(n, r=Pn) {
        let s;
        const a = We.getTransfer(r);
        if (n === Ut)
            return i.UNSIGNED_BYTE;
        if (n === Na)
            return i.UNSIGNED_SHORT_4_4_4_4;
        if (n === Fa)
            return i.UNSIGNED_SHORT_5_5_5_1;
        if (n === kl)
            return i.UNSIGNED_INT_5_9_9_9_REV;
        if (n === Gl)
            return i.UNSIGNED_INT_10F_11F_11F_REV;
        if (n === zl)
            return i.BYTE;
        if (n === Vl)
            return i.SHORT;
        if (n === Gi)
            return i.UNSIGNED_SHORT;
        if (n === Ua)
            return i.INT;
        if (n === rn)
            return i.UNSIGNED_INT;
        if (n === zt)
            return i.FLOAT;
        if (n === vn)
            return i.HALF_FLOAT;
        if (n === Hl)
            return i.ALPHA;
        if (n === Wl)
            return i.RGB;
        if (n === Vt)
            return i.RGBA;
        if (n === Mn)
            return i.DEPTH_COMPONENT;
        if (n === Yn)
            return i.DEPTH_STENCIL;
        if (n === Oa)
            return i.RED;
        if (n === Ba)
            return i.RED_INTEGER;
        if (n === xi)
            return i.RG;
        if (n === za)
            return i.RG_INTEGER;
        if (n === Va)
            return i.RGBA_INTEGER;
        if (n === Lr || n === Ir || n === Ur || n === Nr)
            if (a === $e)
                if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"),
                s !== null) {
                    if (n === Lr)
                        return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === Ir)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === Ur)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === Nr)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (s = e.get("WEBGL_compressed_texture_s3tc"),
            s !== null) {
                if (n === Lr)
                    return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Ir)
                    return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === Ur)
                    return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === Nr)
                    return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === $s || n === Zs || n === js || n === Js)
            if (s = e.get("WEBGL_compressed_texture_pvrtc"),
            s !== null) {
                if (n === $s)
                    return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === Zs)
                    return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === js)
                    return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === Js)
                    return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === Qs || n === ea || n === ta || n === na || n === ia || n === ra || n === sa)
            if (s = e.get("WEBGL_compressed_texture_etc"),
            s !== null) {
                if (n === Qs || n === ea)
                    return a === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (n === ta)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
                if (n === na)
                    return s.COMPRESSED_R11_EAC;
                if (n === ia)
                    return s.COMPRESSED_SIGNED_R11_EAC;
                if (n === ra)
                    return s.COMPRESSED_RG11_EAC;
                if (n === sa)
                    return s.COMPRESSED_SIGNED_RG11_EAC
            } else
                return null;
        if (n === aa || n === oa || n === la || n === ca || n === ha || n === ua || n === da || n === fa || n === pa || n === ma || n === ga || n === _a || n === xa || n === va)
            if (s = e.get("WEBGL_compressed_texture_astc"),
            s !== null) {
                if (n === aa)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === oa)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === la)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === ca)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === ha)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === ua)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === da)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === fa)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === pa)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === ma)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === ga)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === _a)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === xa)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === va)
                    return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === Ma || n === Sa || n === ya)
            if (s = e.get("EXT_texture_compression_bptc"),
            s !== null) {
                if (n === Ma)
                    return a === $e ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === Sa)
                    return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === ya)
                    return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === ba || n === Ea || n === Ta || n === Aa)
            if (s = e.get("EXT_texture_compression_rgtc"),
            s !== null) {
                if (n === ba)
                    return s.COMPRESSED_RED_RGTC1_EXT;
                if (n === Ea)
                    return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === Ta)
                    return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === Aa)
                    return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === Hi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null
    }
    return {
        convert: t
    }
}
const gg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , _g = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class xg {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(e, t) {
        if (this.texture === null) {
            const n = new tc(e.texture);
            (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear,
            this.depthFar = e.depthFar),
            this.texture = n
        }
    }
    getMesh(e) {
        if (this.texture !== null && this.mesh === null) {
            const t = e.cameras[0].viewport
              , n = new Ft({
                vertexShader: gg,
                fragmentShader: _g,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: t.z
                    },
                    depthHeight: {
                        value: t.w
                    }
                }
            });
            this.mesh = new Pt(new Si(20,20),n)
        }
        return this.mesh
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
    getDepthTexture() {
        return this.texture
    }
}
class vg extends bi {
    constructor(e, t) {
        super();
        const n = this;
        let r = null
          , s = 1
          , a = null
          , o = "local-floor"
          , c = 1
          , l = null
          , u = null
          , f = null
          , h = null
          , d = null
          , g = null;
        const M = typeof XRWebGLBinding < "u"
          , m = new xg
          , p = {}
          , S = t.getContextAttributes();
        let T = null
          , E = null;
        const R = []
          , A = []
          , P = new Ge;
        let x = null;
        const y = new wt;
        y.viewport = new st;
        const W = new wt;
        W.viewport = new st;
        const w = [y, W]
          , N = new Mu;
        let F = null
          , k = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(K) {
            let ne = R[K];
            return ne === void 0 && (ne = new as,
            R[K] = ne),
            ne.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(K) {
            let ne = R[K];
            return ne === void 0 && (ne = new as,
            R[K] = ne),
            ne.getGripSpace()
        }
        ,
        this.getHand = function(K) {
            let ne = R[K];
            return ne === void 0 && (ne = new as,
            R[K] = ne),
            ne.getHandSpace()
        }
        ;
        function G(K) {
            const ne = A.indexOf(K.inputSource);
            if (ne === -1)
                return;
            const se = R[ne];
            se !== void 0 && (se.update(K.inputSource, K.frame, l || a),
            se.dispatchEvent({
                type: K.type,
                data: K.inputSource
            }))
        }
        function B() {
            r.removeEventListener("select", G),
            r.removeEventListener("selectstart", G),
            r.removeEventListener("selectend", G),
            r.removeEventListener("squeeze", G),
            r.removeEventListener("squeezestart", G),
            r.removeEventListener("squeezeend", G),
            r.removeEventListener("end", B),
            r.removeEventListener("inputsourceschange", V);
            for (let K = 0; K < R.length; K++) {
                const ne = A[K];
                ne !== null && (A[K] = null,
                R[K].disconnect(ne))
            }
            F = null,
            k = null,
            m.reset();
            for (const K in p)
                delete p[K];
            e.setRenderTarget(T),
            d = null,
            h = null,
            f = null,
            r = null,
            E = null,
            rt.stop(),
            n.isPresenting = !1,
            e.setPixelRatio(x),
            e.setSize(P.width, P.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(K) {
            s = K,
            n.isPresenting === !0 && be("WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(K) {
            o = K,
            n.isPresenting === !0 && be("WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return l || a
        }
        ,
        this.setReferenceSpace = function(K) {
            l = K
        }
        ,
        this.getBaseLayer = function() {
            return h !== null ? h : d
        }
        ,
        this.getBinding = function() {
            return f === null && M && (f = new XRWebGLBinding(r,t)),
            f
        }
        ,
        this.getFrame = function() {
            return g
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(K) {
            if (r = K,
            r !== null) {
                if (T = e.getRenderTarget(),
                r.addEventListener("select", G),
                r.addEventListener("selectstart", G),
                r.addEventListener("selectend", G),
                r.addEventListener("squeeze", G),
                r.addEventListener("squeezestart", G),
                r.addEventListener("squeezeend", G),
                r.addEventListener("end", B),
                r.addEventListener("inputsourceschange", V),
                S.xrCompatible !== !0 && await t.makeXRCompatible(),
                x = e.getPixelRatio(),
                e.getSize(P),
                M && "createProjectionLayer"in XRWebGLBinding.prototype) {
                    let se = null
                      , Le = null
                      , Ae = null;
                    S.depth && (Ae = S.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24,
                    se = S.stencil ? Yn : Mn,
                    Le = S.stencil ? Hi : rn);
                    const Ce = {
                        colorFormat: t.RGBA8,
                        depthFormat: Ae,
                        scaleFactor: s
                    };
                    f = this.getBinding(),
                    h = f.createProjectionLayer(Ce),
                    r.updateRenderState({
                        layers: [h]
                    }),
                    e.setPixelRatio(1),
                    e.setSize(h.textureWidth, h.textureHeight, !1),
                    E = new Nt(h.textureWidth,h.textureHeight,{
                        format: Vt,
                        type: Ut,
                        depthTexture: new qi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),
                        stencilBuffer: S.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: S.antialias ? 4 : 0,
                        resolveDepthBuffer: h.ignoreDepthValues === !1,
                        resolveStencilBuffer: h.ignoreDepthValues === !1
                    })
                } else {
                    const se = {
                        antialias: S.antialias,
                        alpha: !0,
                        depth: S.depth,
                        stencil: S.stencil,
                        framebufferScaleFactor: s
                    };
                    d = new XRWebGLLayer(r,t,se),
                    r.updateRenderState({
                        baseLayer: d
                    }),
                    e.setPixelRatio(1),
                    e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
                    E = new Nt(d.framebufferWidth,d.framebufferHeight,{
                        format: Vt,
                        type: Ut,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: S.stencil,
                        resolveDepthBuffer: d.ignoreDepthValues === !1,
                        resolveStencilBuffer: d.ignoreDepthValues === !1
                    })
                }
                E.isXRRenderTarget = !0,
                this.setFoveation(c),
                l = null,
                a = await r.requestReferenceSpace(o),
                rt.setContext(r),
                rt.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (r !== null)
                return r.environmentBlendMode
        }
        ,
        this.getDepthTexture = function() {
            return m.getDepthTexture()
        }
        ;
        function V(K) {
            for (let ne = 0; ne < K.removed.length; ne++) {
                const se = K.removed[ne]
                  , Le = A.indexOf(se);
                Le >= 0 && (A[Le] = null,
                R[Le].disconnect(se))
            }
            for (let ne = 0; ne < K.added.length; ne++) {
                const se = K.added[ne];
                let Le = A.indexOf(se);
                if (Le === -1) {
                    for (let Ce = 0; Ce < R.length; Ce++)
                        if (Ce >= A.length) {
                            A.push(se),
                            Le = Ce;
                            break
                        } else if (A[Ce] === null) {
                            A[Ce] = se,
                            Le = Ce;
                            break
                        }
                    if (Le === -1)
                        break
                }
                const Ae = R[Le];
                Ae && Ae.connect(se)
            }
        }
        const Q = new U
          , Z = new U;
        function ce(K, ne, se) {
            Q.setFromMatrixPosition(ne.matrixWorld),
            Z.setFromMatrixPosition(se.matrixWorld);
            const Le = Q.distanceTo(Z)
              , Ae = ne.projectionMatrix.elements
              , Ce = se.projectionMatrix.elements
              , gt = Ae[14] / (Ae[10] - 1)
              , He = Ae[14] / (Ae[10] + 1)
              , Ye = (Ae[9] + 1) / Ae[5]
              , et = (Ae[9] - 1) / Ae[5]
              , Fe = (Ae[8] - 1) / Ae[0]
              , ct = (Ce[8] + 1) / Ce[0]
              , C = gt * Fe
              , dt = gt * ct
              , qe = Le / (-Fe + ct)
              , nt = qe * -Fe;
            if (ne.matrixWorld.decompose(K.position, K.quaternion, K.scale),
            K.translateX(nt),
            K.translateZ(qe),
            K.matrixWorld.compose(K.position, K.quaternion, K.scale),
            K.matrixWorldInverse.copy(K.matrixWorld).invert(),
            Ae[10] === -1)
                K.projectionMatrix.copy(ne.projectionMatrix),
                K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
            else {
                const Me = gt + qe
                  , b = He + qe
                  , _ = C - nt
                  , L = dt + (Le - nt)
                  , Y = Ye * He / b * Me
                  , $ = et * He / b * Me;
                K.projectionMatrix.makePerspective(_, L, Y, $, Me, b),
                K.projectionMatrixInverse.copy(K.projectionMatrix).invert()
            }
        }
        function pe(K, ne) {
            ne === null ? K.matrixWorld.copy(K.matrix) : K.matrixWorld.multiplyMatrices(ne.matrixWorld, K.matrix),
            K.matrixWorldInverse.copy(K.matrixWorld).invert()
        }
        this.updateCamera = function(K) {
            if (r === null)
                return;
            let ne = K.near
              , se = K.far;
            m.texture !== null && (m.depthNear > 0 && (ne = m.depthNear),
            m.depthFar > 0 && (se = m.depthFar)),
            N.near = W.near = y.near = ne,
            N.far = W.far = y.far = se,
            (F !== N.near || k !== N.far) && (r.updateRenderState({
                depthNear: N.near,
                depthFar: N.far
            }),
            F = N.near,
            k = N.far),
            N.layers.mask = K.layers.mask | 6,
            y.layers.mask = N.layers.mask & -5,
            W.layers.mask = N.layers.mask & -3;
            const Le = K.parent
              , Ae = N.cameras;
            pe(N, Le);
            for (let Ce = 0; Ce < Ae.length; Ce++)
                pe(Ae[Ce], Le);
            Ae.length === 2 ? ce(N, y, W) : N.projectionMatrix.copy(y.projectionMatrix),
            ue(K, N, Le)
        }
        ;
        function ue(K, ne, se) {
            se === null ? K.matrix.copy(ne.matrixWorld) : (K.matrix.copy(se.matrixWorld),
            K.matrix.invert(),
            K.matrix.multiply(ne.matrixWorld)),
            K.matrix.decompose(K.position, K.quaternion, K.scale),
            K.updateMatrixWorld(!0),
            K.projectionMatrix.copy(ne.projectionMatrix),
            K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),
            K.isPerspectiveCamera && (K.fov = Mi * 2 * Math.atan(1 / K.projectionMatrix.elements[5]),
            K.zoom = 1)
        }
        this.getCamera = function() {
            return N
        }
        ,
        this.getFoveation = function() {
            if (!(h === null && d === null))
                return c
        }
        ,
        this.setFoveation = function(K) {
            c = K,
            h !== null && (h.fixedFoveation = K),
            d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = K)
        }
        ,
        this.hasDepthSensing = function() {
            return m.texture !== null
        }
        ,
        this.getDepthSensingMesh = function() {
            return m.getMesh(N)
        }
        ,
        this.getCameraTexture = function(K) {
            return p[K]
        }
        ;
        let Ue = null;
        function at(K, ne) {
            if (u = ne.getViewerPose(l || a),
            g = ne,
            u !== null) {
                const se = u.views;
                d !== null && (e.setRenderTargetFramebuffer(E, d.framebuffer),
                e.setRenderTarget(E));
                let Le = !1;
                se.length !== N.cameras.length && (N.cameras.length = 0,
                Le = !0);
                for (let He = 0; He < se.length; He++) {
                    const Ye = se[He];
                    let et = null;
                    if (d !== null)
                        et = d.getViewport(Ye);
                    else {
                        const ct = f.getViewSubImage(h, Ye);
                        et = ct.viewport,
                        He === 0 && (e.setRenderTargetTextures(E, ct.colorTexture, ct.depthStencilTexture),
                        e.setRenderTarget(E))
                    }
                    let Fe = w[He];
                    Fe === void 0 && (Fe = new wt,
                    Fe.layers.enable(He),
                    Fe.viewport = new st,
                    w[He] = Fe),
                    Fe.matrix.fromArray(Ye.transform.matrix),
                    Fe.matrix.decompose(Fe.position, Fe.quaternion, Fe.scale),
                    Fe.projectionMatrix.fromArray(Ye.projectionMatrix),
                    Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),
                    Fe.viewport.set(et.x, et.y, et.width, et.height),
                    He === 0 && (N.matrix.copy(Fe.matrix),
                    N.matrix.decompose(N.position, N.quaternion, N.scale)),
                    Le === !0 && N.cameras.push(Fe)
                }
                const Ae = r.enabledFeatures;
                if (Ae && Ae.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && M) {
                    f = n.getBinding();
                    const He = f.getDepthInformation(se[0]);
                    He && He.isValid && He.texture && m.init(He, r.renderState)
                }
                if (Ae && Ae.includes("camera-access") && M) {
                    e.state.unbindTexture(),
                    f = n.getBinding();
                    for (let He = 0; He < se.length; He++) {
                        const Ye = se[He].camera;
                        if (Ye) {
                            let et = p[Ye];
                            et || (et = new tc,
                            p[Ye] = et);
                            const Fe = f.getCameraImage(Ye);
                            et.sourceTexture = Fe
                        }
                    }
                }
            }
            for (let se = 0; se < R.length; se++) {
                const Le = A[se]
                  , Ae = R[se];
                Le !== null && Ae !== void 0 && Ae.update(Le, ne, l || a)
            }
            Ue && Ue(K, ne),
            ne.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: ne
            }),
            g = null
        }
        const rt = new oc;
        rt.setAnimationLoop(at),
        this.setAnimationLoop = function(K) {
            Ue = K
        }
        ,
        this.dispose = function() {}
    }
}
const Gn = new sn
  , Mg = new Ve;
function Sg(i, e) {
    function t(m, p) {
        m.matrixAutoUpdate === !0 && m.updateMatrix(),
        p.value.copy(m.matrix)
    }
    function n(m, p) {
        p.color.getRGB(m.fogColor.value, ic(i)),
        p.isFog ? (m.fogNear.value = p.near,
        m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density)
    }
    function r(m, p, S, T, E) {
        p.isMeshBasicMaterial ? s(m, p) : p.isMeshLambertMaterial ? (s(m, p),
        p.envMap && (m.envMapIntensity.value = p.envMapIntensity)) : p.isMeshToonMaterial ? (s(m, p),
        f(m, p)) : p.isMeshPhongMaterial ? (s(m, p),
        u(m, p),
        p.envMap && (m.envMapIntensity.value = p.envMapIntensity)) : p.isMeshStandardMaterial ? (s(m, p),
        h(m, p),
        p.isMeshPhysicalMaterial && d(m, p, E)) : p.isMeshMatcapMaterial ? (s(m, p),
        g(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p),
        M(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p),
        p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? c(m, p, S, T) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color),
        m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1)
    }
    function s(m, p) {
        m.opacity.value = p.opacity,
        p.color && m.diffuse.value.copy(p.color),
        p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
        p.map && (m.map.value = p.map,
        t(p.map, m.mapTransform)),
        p.alphaMap && (m.alphaMap.value = p.alphaMap,
        t(p.alphaMap, m.alphaMapTransform)),
        p.bumpMap && (m.bumpMap.value = p.bumpMap,
        t(p.bumpMap, m.bumpMapTransform),
        m.bumpScale.value = p.bumpScale,
        p.side === Rt && (m.bumpScale.value *= -1)),
        p.normalMap && (m.normalMap.value = p.normalMap,
        t(p.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(p.normalScale),
        p.side === Rt && m.normalScale.value.negate()),
        p.displacementMap && (m.displacementMap.value = p.displacementMap,
        t(p.displacementMap, m.displacementMapTransform),
        m.displacementScale.value = p.displacementScale,
        m.displacementBias.value = p.displacementBias),
        p.emissiveMap && (m.emissiveMap.value = p.emissiveMap,
        t(p.emissiveMap, m.emissiveMapTransform)),
        p.specularMap && (m.specularMap.value = p.specularMap,
        t(p.specularMap, m.specularMapTransform)),
        p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
        const S = e.get(p)
          , T = S.envMap
          , E = S.envMapRotation;
        T && (m.envMap.value = T,
        Gn.copy(E),
        Gn.x *= -1,
        Gn.y *= -1,
        Gn.z *= -1,
        T.isCubeTexture && T.isRenderTargetTexture === !1 && (Gn.y *= -1,
        Gn.z *= -1),
        m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Gn)),
        m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1,
        m.reflectivity.value = p.reflectivity,
        m.ior.value = p.ior,
        m.refractionRatio.value = p.refractionRatio),
        p.lightMap && (m.lightMap.value = p.lightMap,
        m.lightMapIntensity.value = p.lightMapIntensity,
        t(p.lightMap, m.lightMapTransform)),
        p.aoMap && (m.aoMap.value = p.aoMap,
        m.aoMapIntensity.value = p.aoMapIntensity,
        t(p.aoMap, m.aoMapTransform))
    }
    function a(m, p) {
        m.diffuse.value.copy(p.color),
        m.opacity.value = p.opacity,
        p.map && (m.map.value = p.map,
        t(p.map, m.mapTransform))
    }
    function o(m, p) {
        m.dashSize.value = p.dashSize,
        m.totalSize.value = p.dashSize + p.gapSize,
        m.scale.value = p.scale
    }
    function c(m, p, S, T) {
        m.diffuse.value.copy(p.color),
        m.opacity.value = p.opacity,
        m.size.value = p.size * S,
        m.scale.value = T * .5,
        p.map && (m.map.value = p.map,
        t(p.map, m.uvTransform)),
        p.alphaMap && (m.alphaMap.value = p.alphaMap,
        t(p.alphaMap, m.alphaMapTransform)),
        p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest)
    }
    function l(m, p) {
        m.diffuse.value.copy(p.color),
        m.opacity.value = p.opacity,
        m.rotation.value = p.rotation,
        p.map && (m.map.value = p.map,
        t(p.map, m.mapTransform)),
        p.alphaMap && (m.alphaMap.value = p.alphaMap,
        t(p.alphaMap, m.alphaMapTransform)),
        p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest)
    }
    function u(m, p) {
        m.specular.value.copy(p.specular),
        m.shininess.value = Math.max(p.shininess, 1e-4)
    }
    function f(m, p) {
        p.gradientMap && (m.gradientMap.value = p.gradientMap)
    }
    function h(m, p) {
        m.metalness.value = p.metalness,
        p.metalnessMap && (m.metalnessMap.value = p.metalnessMap,
        t(p.metalnessMap, m.metalnessMapTransform)),
        m.roughness.value = p.roughness,
        p.roughnessMap && (m.roughnessMap.value = p.roughnessMap,
        t(p.roughnessMap, m.roughnessMapTransform)),
        p.envMap && (m.envMapIntensity.value = p.envMapIntensity)
    }
    function d(m, p, S) {
        m.ior.value = p.ior,
        p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        m.sheenRoughness.value = p.sheenRoughness,
        p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap,
        t(p.sheenColorMap, m.sheenColorMapTransform)),
        p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap,
        t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
        p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat,
        m.clearcoatRoughness.value = p.clearcoatRoughness,
        p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap,
        t(p.clearcoatMap, m.clearcoatMapTransform)),
        p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap,
        t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap,
        t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
        m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
        p.side === Rt && m.clearcoatNormalScale.value.negate())),
        p.dispersion > 0 && (m.dispersion.value = p.dispersion),
        p.iridescence > 0 && (m.iridescence.value = p.iridescence,
        m.iridescenceIOR.value = p.iridescenceIOR,
        m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0],
        m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1],
        p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap,
        t(p.iridescenceMap, m.iridescenceMapTransform)),
        p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap,
        t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
        p.transmission > 0 && (m.transmission.value = p.transmission,
        m.transmissionSamplerMap.value = S.texture,
        m.transmissionSamplerSize.value.set(S.width, S.height),
        p.transmissionMap && (m.transmissionMap.value = p.transmissionMap,
        t(p.transmissionMap, m.transmissionMapTransform)),
        m.thickness.value = p.thickness,
        p.thicknessMap && (m.thicknessMap.value = p.thicknessMap,
        t(p.thicknessMap, m.thicknessMapTransform)),
        m.attenuationDistance.value = p.attenuationDistance,
        m.attenuationColor.value.copy(p.attenuationColor)),
        p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)),
        p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap,
        t(p.anisotropyMap, m.anisotropyMapTransform))),
        m.specularIntensity.value = p.specularIntensity,
        m.specularColor.value.copy(p.specularColor),
        p.specularColorMap && (m.specularColorMap.value = p.specularColorMap,
        t(p.specularColorMap, m.specularColorMapTransform)),
        p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap,
        t(p.specularIntensityMap, m.specularIntensityMapTransform))
    }
    function g(m, p) {
        p.matcap && (m.matcap.value = p.matcap)
    }
    function M(m, p) {
        const S = e.get(p).light;
        m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),
        m.nearDistance.value = S.shadow.camera.near,
        m.farDistance.value = S.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: r
    }
}
function yg(i, e, t, n) {
    let r = {}
      , s = {}
      , a = [];
    const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
    function c(S, T) {
        const E = T.program;
        n.uniformBlockBinding(S, E)
    }
    function l(S, T) {
        let E = r[S.id];
        E === void 0 && (g(S),
        E = u(S),
        r[S.id] = E,
        S.addEventListener("dispose", m));
        const R = T.program;
        n.updateUBOMapping(S, R);
        const A = e.render.frame;
        s[S.id] !== A && (h(S),
        s[S.id] = A)
    }
    function u(S) {
        const T = f();
        S.__bindingPointIndex = T;
        const E = i.createBuffer()
          , R = S.__size
          , A = S.usage;
        return i.bindBuffer(i.UNIFORM_BUFFER, E),
        i.bufferData(i.UNIFORM_BUFFER, R, A),
        i.bindBuffer(i.UNIFORM_BUFFER, null),
        i.bindBufferBase(i.UNIFORM_BUFFER, T, E),
        E
    }
    function f() {
        for (let S = 0; S < o; S++)
            if (a.indexOf(S) === -1)
                return a.push(S),
                S;
        return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function h(S) {
        const T = r[S.id]
          , E = S.uniforms
          , R = S.__cache;
        i.bindBuffer(i.UNIFORM_BUFFER, T);
        for (let A = 0, P = E.length; A < P; A++) {
            const x = Array.isArray(E[A]) ? E[A] : [E[A]];
            for (let y = 0, W = x.length; y < W; y++) {
                const w = x[y];
                if (d(w, A, y, R) === !0) {
                    const N = w.__offset
                      , F = Array.isArray(w.value) ? w.value : [w.value];
                    let k = 0;
                    for (let G = 0; G < F.length; G++) {
                        const B = F[G]
                          , V = M(B);
                        typeof B == "number" || typeof B == "boolean" ? (w.__data[0] = B,
                        i.bufferSubData(i.UNIFORM_BUFFER, N + k, w.__data)) : B.isMatrix3 ? (w.__data[0] = B.elements[0],
                        w.__data[1] = B.elements[1],
                        w.__data[2] = B.elements[2],
                        w.__data[3] = 0,
                        w.__data[4] = B.elements[3],
                        w.__data[5] = B.elements[4],
                        w.__data[6] = B.elements[5],
                        w.__data[7] = 0,
                        w.__data[8] = B.elements[6],
                        w.__data[9] = B.elements[7],
                        w.__data[10] = B.elements[8],
                        w.__data[11] = 0) : (B.toArray(w.__data, k),
                        k += V.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    i.bufferSubData(i.UNIFORM_BUFFER, N, w.__data)
                }
            }
        }
        i.bindBuffer(i.UNIFORM_BUFFER, null)
    }
    function d(S, T, E, R) {
        const A = S.value
          , P = T + "_" + E;
        if (R[P] === void 0)
            return typeof A == "number" || typeof A == "boolean" ? R[P] = A : R[P] = A.clone(),
            !0;
        {
            const x = R[P];
            if (typeof A == "number" || typeof A == "boolean") {
                if (x !== A)
                    return R[P] = A,
                    !0
            } else if (x.equals(A) === !1)
                return x.copy(A),
                !0
        }
        return !1
    }
    function g(S) {
        const T = S.uniforms;
        let E = 0;
        const R = 16;
        for (let P = 0, x = T.length; P < x; P++) {
            const y = Array.isArray(T[P]) ? T[P] : [T[P]];
            for (let W = 0, w = y.length; W < w; W++) {
                const N = y[W]
                  , F = Array.isArray(N.value) ? N.value : [N.value];
                for (let k = 0, G = F.length; k < G; k++) {
                    const B = F[k]
                      , V = M(B)
                      , Q = E % R
                      , Z = Q % V.boundary
                      , ce = Q + Z;
                    E += Z,
                    ce !== 0 && R - ce < V.storage && (E += R - ce),
                    N.__data = new Float32Array(V.storage / Float32Array.BYTES_PER_ELEMENT),
                    N.__offset = E,
                    E += V.storage
                }
            }
        }
        const A = E % R;
        return A > 0 && (E += R - A),
        S.__size = E,
        S.__cache = {},
        this
    }
    function M(S) {
        const T = {
            boundary: 0,
            storage: 0
        };
        return typeof S == "number" || typeof S == "boolean" ? (T.boundary = 4,
        T.storage = 4) : S.isVector2 ? (T.boundary = 8,
        T.storage = 8) : S.isVector3 || S.isColor ? (T.boundary = 16,
        T.storage = 12) : S.isVector4 ? (T.boundary = 16,
        T.storage = 16) : S.isMatrix3 ? (T.boundary = 48,
        T.storage = 48) : S.isMatrix4 ? (T.boundary = 64,
        T.storage = 64) : S.isTexture ? be("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : be("WebGLRenderer: Unsupported uniform value type.", S),
        T
    }
    function m(S) {
        const T = S.target;
        T.removeEventListener("dispose", m);
        const E = a.indexOf(T.__bindingPointIndex);
        a.splice(E, 1),
        i.deleteBuffer(r[T.id]),
        delete r[T.id],
        delete s[T.id]
    }
    function p() {
        for (const S in r)
            i.deleteBuffer(r[S]);
        a = [],
        r = {},
        s = {}
    }
    return {
        bind: c,
        update: l,
        dispose: p
    }
}
const bg = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let Qt = null;
function Eg() {
    return Qt === null && (Qt = new Ya(bg,16,16,xi,vn),
    Qt.name = "DFG_LUT",
    Qt.minFilter = lt,
    Qt.magFilter = lt,
    Qt.wrapS = mn,
    Qt.wrapT = mn,
    Qt.generateMipmaps = !1,
    Qt.needsUpdate = !0),
    Qt
}
class Tg {
    constructor(e={}) {
        const {canvas: t=nh(), context: n=null, depth: r=!0, stencil: s=!1, alpha: a=!1, antialias: o=!1, premultipliedAlpha: c=!0, preserveDrawingBuffer: l=!1, powerPreference: u="default", failIfMajorPerformanceCaveat: f=!1, reversedDepthBuffer: h=!1, outputBufferType: d=Ut} = e;
        this.isWebGLRenderer = !0;
        let g;
        if (n !== null) {
            if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            g = n.getContextAttributes().alpha
        } else
            g = a;
        const M = d
          , m = new Set([Va, za, Ba])
          , p = new Set([Ut, rn, Gi, Hi, Na, Fa])
          , S = new Uint32Array(4)
          , T = new Int32Array(4);
        let E = null
          , R = null;
        const A = []
          , P = [];
        let x = null;
        this.domElement = t,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.toneMapping = nn,
        this.toneMappingExposure = 1,
        this.transmissionResolutionScale = 1;
        const y = this;
        let W = !1;
        this._outputColorSpace = Bt;
        let w = 0
          , N = 0
          , F = null
          , k = -1
          , G = null;
        const B = new st
          , V = new st;
        let Q = null;
        const Z = new ke(0);
        let ce = 0
          , pe = t.width
          , ue = t.height
          , Ue = 1
          , at = null
          , rt = null;
        const K = new st(0,0,pe,ue)
          , ne = new st(0,0,pe,ue);
        let se = !1;
        const Le = new Ka;
        let Ae = !1
          , Ce = !1;
        const gt = new Ve
          , He = new U
          , Ye = new st
          , et = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        let Fe = !1;
        function ct() {
            return F === null ? Ue : 1
        }
        let C = n;
        function dt(v, I) {
            return t.getContext(v, I)
        }
        try {
            const v = {
                alpha: !0,
                depth: r,
                stencil: s,
                antialias: o,
                premultipliedAlpha: c,
                preserveDrawingBuffer: l,
                powerPreference: u,
                failIfMajorPerformanceCaveat: f
            };
            if ("setAttribute"in t && t.setAttribute("data-engine", `three.js r${Ia}`),
            t.addEventListener("webglcontextlost", _e, !1),
            t.addEventListener("webglcontextrestored", Pe, !1),
            t.addEventListener("webglcontextcreationerror", it, !1),
            C === null) {
                const I = "webgl2";
                if (C = dt(I, v),
                C === null)
                    throw dt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (v) {
            throw we("WebGLRenderer: " + v.message),
            v
        }
        let qe, nt, Me, b, _, L, Y, $, q, me, ie, Te, Re, j, ee, ge, xe, he, Oe, D, re, te, fe;
        function J() {
            qe = new Tp(C),
            qe.init(),
            re = new mg(C,qe),
            nt = new _p(C,qe,e,re),
            Me = new fg(C,qe),
            nt.reversedDepthBuffer && h && Me.buffers.depth.setReversed(!0),
            b = new Rp(C),
            _ = new Qm,
            L = new pg(C,qe,Me,_,nt,re,b),
            Y = new Ep(y),
            $ = new Lu(C),
            te = new mp(C,$),
            q = new Ap(C,$,b,te),
            me = new Pp(C,q,$,te,b),
            he = new Cp(C,nt,L),
            ee = new xp(_),
            ie = new Jm(y,Y,qe,nt,te,ee),
            Te = new Sg(y,_),
            Re = new tg,
            j = new og(qe),
            xe = new pp(y,Y,Me,me,g,c),
            ge = new dg(y,me,nt),
            fe = new yg(C,b,nt,Me),
            Oe = new gp(C,qe,b),
            D = new wp(C,qe,b),
            b.programs = ie.programs,
            y.capabilities = nt,
            y.extensions = qe,
            y.properties = _,
            y.renderLists = Re,
            y.shadowMap = ge,
            y.state = Me,
            y.info = b
        }
        J(),
        M !== Ut && (x = new Lp(M,t.width,t.height,r,s));
        const X = new vg(y,C);
        this.xr = X,
        this.getContext = function() {
            return C
        }
        ,
        this.getContextAttributes = function() {
            return C.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const v = qe.get("WEBGL_lose_context");
            v && v.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const v = qe.get("WEBGL_lose_context");
            v && v.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return Ue
        }
        ,
        this.setPixelRatio = function(v) {
            v !== void 0 && (Ue = v,
            this.setSize(pe, ue, !1))
        }
        ,
        this.getSize = function(v) {
            return v.set(pe, ue)
        }
        ,
        this.setSize = function(v, I, H=!0) {
            if (X.isPresenting) {
                be("WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            pe = v,
            ue = I,
            t.width = Math.floor(v * Ue),
            t.height = Math.floor(I * Ue),
            H === !0 && (t.style.width = v + "px",
            t.style.height = I + "px"),
            x !== null && x.setSize(t.width, t.height),
            this.setViewport(0, 0, v, I)
        }
        ,
        this.getDrawingBufferSize = function(v) {
            return v.set(pe * Ue, ue * Ue).floor()
        }
        ,
        this.setDrawingBufferSize = function(v, I, H) {
            pe = v,
            ue = I,
            Ue = H,
            t.width = Math.floor(v * H),
            t.height = Math.floor(I * H),
            this.setViewport(0, 0, v, I)
        }
        ,
        this.setEffects = function(v) {
            if (M === Ut) {
                console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
                return
            }
            if (v) {
                for (let I = 0; I < v.length; I++)
                    if (v[I].isOutputPass === !0) {
                        console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
                        break
                    }
            }
            x.setEffects(v || [])
        }
        ,
        this.getCurrentViewport = function(v) {
            return v.copy(B)
        }
        ,
        this.getViewport = function(v) {
            return v.copy(K)
        }
        ,
        this.setViewport = function(v, I, H, z) {
            v.isVector4 ? K.set(v.x, v.y, v.z, v.w) : K.set(v, I, H, z),
            Me.viewport(B.copy(K).multiplyScalar(Ue).round())
        }
        ,
        this.getScissor = function(v) {
            return v.copy(ne)
        }
        ,
        this.setScissor = function(v, I, H, z) {
            v.isVector4 ? ne.set(v.x, v.y, v.z, v.w) : ne.set(v, I, H, z),
            Me.scissor(V.copy(ne).multiplyScalar(Ue).round())
        }
        ,
        this.getScissorTest = function() {
            return se
        }
        ,
        this.setScissorTest = function(v) {
            Me.setScissorTest(se = v)
        }
        ,
        this.setOpaqueSort = function(v) {
            at = v
        }
        ,
        this.setTransparentSort = function(v) {
            rt = v
        }
        ,
        this.getClearColor = function(v) {
            return v.copy(xe.getClearColor())
        }
        ,
        this.setClearColor = function() {
            xe.setClearColor(...arguments)
        }
        ,
        this.getClearAlpha = function() {
            return xe.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            xe.setClearAlpha(...arguments)
        }
        ,
        this.clear = function(v=!0, I=!0, H=!0) {
            let z = 0;
            if (v) {
                let O = !1;
                if (F !== null) {
                    const oe = F.texture.format;
                    O = m.has(oe)
                }
                if (O) {
                    const oe = F.texture.type
                      , de = p.has(oe)
                      , le = xe.getClearColor()
                      , ve = xe.getClearAlpha()
                      , ye = le.r
                      , De = le.g
                      , Be = le.b;
                    de ? (S[0] = ye,
                    S[1] = De,
                    S[2] = Be,
                    S[3] = ve,
                    C.clearBufferuiv(C.COLOR, 0, S)) : (T[0] = ye,
                    T[1] = De,
                    T[2] = Be,
                    T[3] = ve,
                    C.clearBufferiv(C.COLOR, 0, T))
                } else
                    z |= C.COLOR_BUFFER_BIT
            }
            I && (z |= C.DEPTH_BUFFER_BIT),
            H && (z |= C.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            z !== 0 && C.clear(z)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            t.removeEventListener("webglcontextlost", _e, !1),
            t.removeEventListener("webglcontextrestored", Pe, !1),
            t.removeEventListener("webglcontextcreationerror", it, !1),
            xe.dispose(),
            Re.dispose(),
            j.dispose(),
            _.dispose(),
            Y.dispose(),
            me.dispose(),
            te.dispose(),
            fe.dispose(),
            ie.dispose(),
            X.dispose(),
            X.removeEventListener("sessionstart", to),
            X.removeEventListener("sessionend", no),
            Nn.stop()
        }
        ;
        function _e(v) {
            v.preventDefault(),
            zr("WebGLRenderer: Context Lost."),
            W = !0
        }
        function Pe() {
            zr("WebGLRenderer: Context Restored."),
            W = !1;
            const v = b.autoReset
              , I = ge.enabled
              , H = ge.autoUpdate
              , z = ge.needsUpdate
              , O = ge.type;
            J(),
            b.autoReset = v,
            ge.enabled = I,
            ge.autoUpdate = H,
            ge.needsUpdate = z,
            ge.type = O
        }
        function it(v) {
            we("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage)
        }
        function Ke(v) {
            const I = v.target;
            I.removeEventListener("dispose", Ke),
            an(I)
        }
        function an(v) {
            on(v),
            _.remove(v)
        }
        function on(v) {
            const I = _.get(v).programs;
            I !== void 0 && (I.forEach(function(H) {
                ie.releaseProgram(H)
            }),
            v.isShaderMaterial && ie.releaseShaderCache(v))
        }
        this.renderBufferDirect = function(v, I, H, z, O, oe) {
            I === null && (I = et);
            const de = O.isMesh && O.matrixWorld.determinant() < 0
              , le = pc(v, I, H, z, O);
            Me.setMaterial(z, de);
            let ve = H.index
              , ye = 1;
            if (z.wireframe === !0) {
                if (ve = q.getWireframeAttribute(H),
                ve === void 0)
                    return;
                ye = 2
            }
            const De = H.drawRange
              , Be = H.attributes.position;
            let Ee = De.start * ye
              , je = (De.start + De.count) * ye;
            oe !== null && (Ee = Math.max(Ee, oe.start * ye),
            je = Math.min(je, (oe.start + oe.count) * ye)),
            ve !== null ? (Ee = Math.max(Ee, 0),
            je = Math.min(je, ve.count)) : Be != null && (Ee = Math.max(Ee, 0),
            je = Math.min(je, Be.count));
            const ht = je - Ee;
            if (ht < 0 || ht === 1 / 0)
                return;
            te.setup(O, z, le, H, ve);
            let ot, Je = Oe;
            if (ve !== null && (ot = $.get(ve),
            Je = D,
            Je.setIndex(ot)),
            O.isMesh)
                z.wireframe === !0 ? (Me.setLineWidth(z.wireframeLinewidth * ct()),
                Je.setMode(C.LINES)) : Je.setMode(C.TRIANGLES);
            else if (O.isLine) {
                let yt = z.linewidth;
                yt === void 0 && (yt = 1),
                Me.setLineWidth(yt * ct()),
                O.isLineSegments ? Je.setMode(C.LINES) : O.isLineLoop ? Je.setMode(C.LINE_LOOP) : Je.setMode(C.LINE_STRIP)
            } else
                O.isPoints ? Je.setMode(C.POINTS) : O.isSprite && Je.setMode(C.TRIANGLES);
            if (O.isBatchedMesh)
                if (O._multiDrawInstances !== null)
                    Vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),
                    Je.renderMultiDrawInstances(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount, O._multiDrawInstances);
                else if (qe.get("WEBGL_multi_draw"))
                    Je.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
                else {
                    const yt = O._multiDrawStarts
                      , Se = O._multiDrawCounts
                      , Dt = O._multiDrawCount
                      , Xe = ve ? $.get(ve).bytesPerElement : 1
                      , Ht = _.get(z).currentProgram.getUniforms();
                    for (let jt = 0; jt < Dt; jt++)
                        Ht.setValue(C, "_gl_DrawID", jt),
                        Je.render(yt[jt] / Xe, Se[jt])
                }
            else if (O.isInstancedMesh)
                Je.renderInstances(Ee, ht, O.count);
            else if (H.isInstancedBufferGeometry) {
                const yt = H._maxInstanceCount !== void 0 ? H._maxInstanceCount : 1 / 0
                  , Se = Math.min(H.instanceCount, yt);
                Je.renderInstances(Ee, ht, Se)
            } else
                Je.render(Ee, ht)
        }
        ;
        function eo(v, I, H) {
            v.transparent === !0 && v.side === pn && v.forceSinglePass === !1 ? (v.side = Rt,
            v.needsUpdate = !0,
            Qi(v, I, H),
            v.side = Ln,
            v.needsUpdate = !0,
            Qi(v, I, H),
            v.side = pn) : Qi(v, I, H)
        }
        this.compile = function(v, I, H=null) {
            H === null && (H = v),
            R = j.get(H),
            R.init(I),
            P.push(R),
            H.traverseVisible(function(O) {
                O.isLight && O.layers.test(I.layers) && (R.pushLight(O),
                O.castShadow && R.pushShadow(O))
            }),
            v !== H && v.traverseVisible(function(O) {
                O.isLight && O.layers.test(I.layers) && (R.pushLight(O),
                O.castShadow && R.pushShadow(O))
            }),
            R.setupLights();
            const z = new Set;
            return v.traverse(function(O) {
                if (!(O.isMesh || O.isPoints || O.isLine || O.isSprite))
                    return;
                const oe = O.material;
                if (oe)
                    if (Array.isArray(oe))
                        for (let de = 0; de < oe.length; de++) {
                            const le = oe[de];
                            eo(le, H, O),
                            z.add(le)
                        }
                    else
                        eo(oe, H, O),
                        z.add(oe)
            }),
            R = P.pop(),
            z
        }
        ,
        this.compileAsync = function(v, I, H=null) {
            const z = this.compile(v, I, H);
            return new Promise(O => {
                function oe() {
                    if (z.forEach(function(de) {
                        _.get(de).currentProgram.isReady() && z.delete(de)
                    }),
                    z.size === 0) {
                        O(v);
                        return
                    }
                    setTimeout(oe, 10)
                }
                qe.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10)
            }
            )
        }
        ;
        let $r = null;
        function fc(v) {
            $r && $r(v)
        }
        function to() {
            Nn.stop()
        }
        function no() {
            Nn.start()
        }
        const Nn = new oc;
        Nn.setAnimationLoop(fc),
        typeof self < "u" && Nn.setContext(self),
        this.setAnimationLoop = function(v) {
            $r = v,
            X.setAnimationLoop(v),
            v === null ? Nn.stop() : Nn.start()
        }
        ,
        X.addEventListener("sessionstart", to),
        X.addEventListener("sessionend", no),
        this.render = function(v, I) {
            if (I !== void 0 && I.isCamera !== !0) {
                we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (W === !0)
                return;
            const H = X.enabled === !0 && X.isPresenting === !0
              , z = x !== null && (F === null || H) && x.begin(y, F);
            if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
            I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(),
            X.enabled === !0 && X.isPresenting === !0 && (x === null || x.isCompositing() === !1) && (X.cameraAutoUpdate === !0 && X.updateCamera(I),
            I = X.getCamera()),
            v.isScene === !0 && v.onBeforeRender(y, v, I, F),
            R = j.get(v, P.length),
            R.init(I),
            P.push(R),
            gt.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse),
            Le.setFromProjectionMatrix(gt, tn, I.reversedDepth),
            Ce = this.localClippingEnabled,
            Ae = ee.init(this.clippingPlanes, Ce),
            E = Re.get(v, A.length),
            E.init(),
            A.push(E),
            X.enabled === !0 && X.isPresenting === !0) {
                const de = y.xr.getDepthSensingMesh();
                de !== null && Zr(de, I, -1 / 0, y.sortObjects)
            }
            Zr(v, I, 0, y.sortObjects),
            E.finish(),
            y.sortObjects === !0 && E.sort(at, rt),
            Fe = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1,
            Fe && xe.addToRenderList(E, v),
            this.info.render.frame++,
            Ae === !0 && ee.beginShadows();
            const O = R.state.shadowsArray;
            if (ge.render(O, v, I),
            Ae === !0 && ee.endShadows(),
            this.info.autoReset === !0 && this.info.reset(),
            (z && x.hasRenderPass()) === !1) {
                const de = E.opaque
                  , le = E.transmissive;
                if (R.setupLights(),
                I.isArrayCamera) {
                    const ve = I.cameras;
                    if (le.length > 0)
                        for (let ye = 0, De = ve.length; ye < De; ye++) {
                            const Be = ve[ye];
                            ro(de, le, v, Be)
                        }
                    Fe && xe.render(v);
                    for (let ye = 0, De = ve.length; ye < De; ye++) {
                        const Be = ve[ye];
                        io(E, v, Be, Be.viewport)
                    }
                } else
                    le.length > 0 && ro(de, le, v, I),
                    Fe && xe.render(v),
                    io(E, v, I)
            }
            F !== null && N === 0 && (L.updateMultisampleRenderTarget(F),
            L.updateRenderTargetMipmap(F)),
            z && x.end(y),
            v.isScene === !0 && v.onAfterRender(y, v, I),
            te.resetDefaultState(),
            k = -1,
            G = null,
            P.pop(),
            P.length > 0 ? (R = P[P.length - 1],
            Ae === !0 && ee.setGlobalState(y.clippingPlanes, R.state.camera)) : R = null,
            A.pop(),
            A.length > 0 ? E = A[A.length - 1] : E = null
        }
        ;
        function Zr(v, I, H, z) {
            if (v.visible === !1)
                return;
            if (v.layers.test(I.layers)) {
                if (v.isGroup)
                    H = v.renderOrder;
                else if (v.isLOD)
                    v.autoUpdate === !0 && v.update(I);
                else if (v.isLight)
                    R.pushLight(v),
                    v.castShadow && R.pushShadow(v);
                else if (v.isSprite) {
                    if (!v.frustumCulled || Le.intersectsSprite(v)) {
                        z && Ye.setFromMatrixPosition(v.matrixWorld).applyMatrix4(gt);
                        const de = me.update(v)
                          , le = v.material;
                        le.visible && E.push(v, de, le, H, Ye.z, null)
                    }
                } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || Le.intersectsObject(v))) {
                    const de = me.update(v)
                      , le = v.material;
                    if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(),
                    Ye.copy(v.boundingSphere.center)) : (de.boundingSphere === null && de.computeBoundingSphere(),
                    Ye.copy(de.boundingSphere.center)),
                    Ye.applyMatrix4(v.matrixWorld).applyMatrix4(gt)),
                    Array.isArray(le)) {
                        const ve = de.groups;
                        for (let ye = 0, De = ve.length; ye < De; ye++) {
                            const Be = ve[ye]
                              , Ee = le[Be.materialIndex];
                            Ee && Ee.visible && E.push(v, de, Ee, H, Ye.z, Be)
                        }
                    } else
                        le.visible && E.push(v, de, le, H, Ye.z, null)
                }
            }
            const oe = v.children;
            for (let de = 0, le = oe.length; de < le; de++)
                Zr(oe[de], I, H, z)
        }
        function io(v, I, H, z) {
            const {opaque: O, transmissive: oe, transparent: de} = v;
            R.setupLightsView(H),
            Ae === !0 && ee.setGlobalState(y.clippingPlanes, H),
            z && Me.viewport(B.copy(z)),
            O.length > 0 && Ji(O, I, H),
            oe.length > 0 && Ji(oe, I, H),
            de.length > 0 && Ji(de, I, H),
            Me.buffers.depth.setTest(!0),
            Me.buffers.depth.setMask(!0),
            Me.buffers.color.setMask(!0),
            Me.setPolygonOffset(!1)
        }
        function ro(v, I, H, z) {
            if ((H.isScene === !0 ? H.overrideMaterial : null) !== null)
                return;
            if (R.state.transmissionRenderTarget[z.id] === void 0) {
                const Ee = qe.has("EXT_color_buffer_half_float") || qe.has("EXT_color_buffer_float");
                R.state.transmissionRenderTarget[z.id] = new Nt(1,1,{
                    generateMipmaps: !0,
                    type: Ee ? vn : Ut,
                    minFilter: qn,
                    samples: Math.max(4, nt.samples),
                    stencilBuffer: s,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: We.workingColorSpace
                })
            }
            const oe = R.state.transmissionRenderTarget[z.id]
              , de = z.viewport || B;
            oe.setSize(de.z * y.transmissionResolutionScale, de.w * y.transmissionResolutionScale);
            const le = y.getRenderTarget()
              , ve = y.getActiveCubeFace()
              , ye = y.getActiveMipmapLevel();
            y.setRenderTarget(oe),
            y.getClearColor(Z),
            ce = y.getClearAlpha(),
            ce < 1 && y.setClearColor(16777215, .5),
            y.clear(),
            Fe && xe.render(H);
            const De = y.toneMapping;
            y.toneMapping = nn;
            const Be = z.viewport;
            if (z.viewport !== void 0 && (z.viewport = void 0),
            R.setupLightsView(z),
            Ae === !0 && ee.setGlobalState(y.clippingPlanes, z),
            Ji(v, H, z),
            L.updateMultisampleRenderTarget(oe),
            L.updateRenderTargetMipmap(oe),
            qe.has("WEBGL_multisampled_render_to_texture") === !1) {
                let Ee = !1;
                for (let je = 0, ht = I.length; je < ht; je++) {
                    const ot = I[je]
                      , {object: Je, geometry: yt, material: Se, group: Dt} = ot;
                    if (Se.side === pn && Je.layers.test(z.layers)) {
                        const Xe = Se.side;
                        Se.side = Rt,
                        Se.needsUpdate = !0,
                        so(Je, H, z, yt, Se, Dt),
                        Se.side = Xe,
                        Se.needsUpdate = !0,
                        Ee = !0
                    }
                }
                Ee === !0 && (L.updateMultisampleRenderTarget(oe),
                L.updateRenderTargetMipmap(oe))
            }
            y.setRenderTarget(le, ve, ye),
            y.setClearColor(Z, ce),
            Be !== void 0 && (z.viewport = Be),
            y.toneMapping = De
        }
        function Ji(v, I, H) {
            const z = I.isScene === !0 ? I.overrideMaterial : null;
            for (let O = 0, oe = v.length; O < oe; O++) {
                const de = v[O]
                  , {object: le, geometry: ve, group: ye} = de;
                let De = de.material;
                De.allowOverride === !0 && z !== null && (De = z),
                le.layers.test(H.layers) && so(le, I, H, ve, De, ye)
            }
        }
        function so(v, I, H, z, O, oe) {
            v.onBeforeRender(y, I, H, z, O, oe),
            v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, v.matrixWorld),
            v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
            O.onBeforeRender(y, I, H, z, v, oe),
            O.transparent === !0 && O.side === pn && O.forceSinglePass === !1 ? (O.side = Rt,
            O.needsUpdate = !0,
            y.renderBufferDirect(H, I, z, O, v, oe),
            O.side = Ln,
            O.needsUpdate = !0,
            y.renderBufferDirect(H, I, z, O, v, oe),
            O.side = pn) : y.renderBufferDirect(H, I, z, O, v, oe),
            v.onAfterRender(y, I, H, z, O, oe)
        }
        function Qi(v, I, H) {
            I.isScene !== !0 && (I = et);
            const z = _.get(v)
              , O = R.state.lights
              , oe = R.state.shadowsArray
              , de = O.state.version
              , le = ie.getParameters(v, O.state, oe, I, H)
              , ve = ie.getProgramCacheKey(le);
            let ye = z.programs;
            z.environment = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? I.environment : null,
            z.fog = I.fog;
            const De = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap;
            z.envMap = Y.get(v.envMap || z.environment, De),
            z.envMapRotation = z.environment !== null && v.envMap === null ? I.environmentRotation : v.envMapRotation,
            ye === void 0 && (v.addEventListener("dispose", Ke),
            ye = new Map,
            z.programs = ye);
            let Be = ye.get(ve);
            if (Be !== void 0) {
                if (z.currentProgram === Be && z.lightsStateVersion === de)
                    return oo(v, le),
                    Be
            } else
                le.uniforms = ie.getUniforms(v),
                v.onBeforeCompile(le, y),
                Be = ie.acquireProgram(le, ve),
                ye.set(ve, Be),
                z.uniforms = le.uniforms;
            const Ee = z.uniforms;
            return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Ee.clippingPlanes = ee.uniform),
            oo(v, le),
            z.needsLights = gc(v),
            z.lightsStateVersion = de,
            z.needsLights && (Ee.ambientLightColor.value = O.state.ambient,
            Ee.lightProbe.value = O.state.probe,
            Ee.directionalLights.value = O.state.directional,
            Ee.directionalLightShadows.value = O.state.directionalShadow,
            Ee.spotLights.value = O.state.spot,
            Ee.spotLightShadows.value = O.state.spotShadow,
            Ee.rectAreaLights.value = O.state.rectArea,
            Ee.ltc_1.value = O.state.rectAreaLTC1,
            Ee.ltc_2.value = O.state.rectAreaLTC2,
            Ee.pointLights.value = O.state.point,
            Ee.pointLightShadows.value = O.state.pointShadow,
            Ee.hemisphereLights.value = O.state.hemi,
            Ee.directionalShadowMatrix.value = O.state.directionalShadowMatrix,
            Ee.spotLightMatrix.value = O.state.spotLightMatrix,
            Ee.spotLightMap.value = O.state.spotLightMap,
            Ee.pointShadowMatrix.value = O.state.pointShadowMatrix),
            z.currentProgram = Be,
            z.uniformsList = null,
            Be
        }
        function ao(v) {
            if (v.uniformsList === null) {
                const I = v.currentProgram.getUniforms();
                v.uniformsList = Fr.seqWithValue(I.seq, v.uniforms)
            }
            return v.uniformsList
        }
        function oo(v, I) {
            const H = _.get(v);
            H.outputColorSpace = I.outputColorSpace,
            H.batching = I.batching,
            H.batchingColor = I.batchingColor,
            H.instancing = I.instancing,
            H.instancingColor = I.instancingColor,
            H.instancingMorph = I.instancingMorph,
            H.skinning = I.skinning,
            H.morphTargets = I.morphTargets,
            H.morphNormals = I.morphNormals,
            H.morphColors = I.morphColors,
            H.morphTargetsCount = I.morphTargetsCount,
            H.numClippingPlanes = I.numClippingPlanes,
            H.numIntersection = I.numClipIntersection,
            H.vertexAlphas = I.vertexAlphas,
            H.vertexTangents = I.vertexTangents,
            H.toneMapping = I.toneMapping
        }
        function pc(v, I, H, z, O) {
            I.isScene !== !0 && (I = et),
            L.resetTextureUnits();
            const oe = I.fog
              , de = z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial ? I.environment : null
              , le = F === null ? y.outputColorSpace : F.isXRRenderTarget === !0 ? F.texture.colorSpace : vi
              , ve = z.isMeshStandardMaterial || z.isMeshLambertMaterial && !z.envMap || z.isMeshPhongMaterial && !z.envMap
              , ye = Y.get(z.envMap || de, ve)
              , De = z.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4
              , Be = !!H.attributes.tangent && (!!z.normalMap || z.anisotropy > 0)
              , Ee = !!H.morphAttributes.position
              , je = !!H.morphAttributes.normal
              , ht = !!H.morphAttributes.color;
            let ot = nn;
            z.toneMapped && (F === null || F.isXRRenderTarget === !0) && (ot = y.toneMapping);
            const Je = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color
              , yt = Je !== void 0 ? Je.length : 0
              , Se = _.get(z)
              , Dt = R.state.lights;
            if (Ae === !0 && (Ce === !0 || v !== G)) {
                const _t = v === G && z.id === k;
                ee.setState(z, v, _t)
            }
            let Xe = !1;
            z.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== Dt.state.version || Se.outputColorSpace !== le || O.isBatchedMesh && Se.batching === !1 || !O.isBatchedMesh && Se.batching === !0 || O.isBatchedMesh && Se.batchingColor === !0 && O.colorTexture === null || O.isBatchedMesh && Se.batchingColor === !1 && O.colorTexture !== null || O.isInstancedMesh && Se.instancing === !1 || !O.isInstancedMesh && Se.instancing === !0 || O.isSkinnedMesh && Se.skinning === !1 || !O.isSkinnedMesh && Se.skinning === !0 || O.isInstancedMesh && Se.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && Se.instancingColor === !1 && O.instanceColor !== null || O.isInstancedMesh && Se.instancingMorph === !0 && O.morphTexture === null || O.isInstancedMesh && Se.instancingMorph === !1 && O.morphTexture !== null || Se.envMap !== ye || z.fog === !0 && Se.fog !== oe || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== ee.numPlanes || Se.numIntersection !== ee.numIntersection) || Se.vertexAlphas !== De || Se.vertexTangents !== Be || Se.morphTargets !== Ee || Se.morphNormals !== je || Se.morphColors !== ht || Se.toneMapping !== ot || Se.morphTargetsCount !== yt) && (Xe = !0) : (Xe = !0,
            Se.__version = z.version);
            let Ht = Se.currentProgram;
            Xe === !0 && (Ht = Qi(z, I, O));
            let jt = !1
              , Fn = !1
              , Zn = !1;
            const tt = Ht.getUniforms()
              , vt = Se.uniforms;
            if (Me.useProgram(Ht.program) && (jt = !0,
            Fn = !0,
            Zn = !0),
            z.id !== k && (k = z.id,
            Fn = !0),
            jt || G !== v) {
                Me.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0,
                v.updateProjectionMatrix()),
                tt.setValue(C, "projectionMatrix", v.projectionMatrix),
                tt.setValue(C, "viewMatrix", v.matrixWorldInverse);
                const bn = tt.map.cameraPosition;
                bn !== void 0 && bn.setValue(C, He.setFromMatrixPosition(v.matrixWorld)),
                nt.logarithmicDepthBuffer && tt.setValue(C, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)),
                (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && tt.setValue(C, "isOrthographic", v.isOrthographicCamera === !0),
                G !== v && (G = v,
                Fn = !0,
                Zn = !0)
            }
            if (Se.needsLights && (Dt.state.directionalShadowMap.length > 0 && tt.setValue(C, "directionalShadowMap", Dt.state.directionalShadowMap, L),
            Dt.state.spotShadowMap.length > 0 && tt.setValue(C, "spotShadowMap", Dt.state.spotShadowMap, L),
            Dt.state.pointShadowMap.length > 0 && tt.setValue(C, "pointShadowMap", Dt.state.pointShadowMap, L)),
            O.isSkinnedMesh) {
                tt.setOptional(C, O, "bindMatrix"),
                tt.setOptional(C, O, "bindMatrixInverse");
                const _t = O.skeleton;
                _t && (_t.boneTexture === null && _t.computeBoneTexture(),
                tt.setValue(C, "boneTexture", _t.boneTexture, L))
            }
            O.isBatchedMesh && (tt.setOptional(C, O, "batchingTexture"),
            tt.setValue(C, "batchingTexture", O._matricesTexture, L),
            tt.setOptional(C, O, "batchingIdTexture"),
            tt.setValue(C, "batchingIdTexture", O._indirectTexture, L),
            tt.setOptional(C, O, "batchingColorTexture"),
            O._colorsTexture !== null && tt.setValue(C, "batchingColorTexture", O._colorsTexture, L));
            const yn = H.morphAttributes;
            if ((yn.position !== void 0 || yn.normal !== void 0 || yn.color !== void 0) && he.update(O, H, Ht),
            (Fn || Se.receiveShadow !== O.receiveShadow) && (Se.receiveShadow = O.receiveShadow,
            tt.setValue(C, "receiveShadow", O.receiveShadow)),
            (z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial) && z.envMap === null && I.environment !== null && (vt.envMapIntensity.value = I.environmentIntensity),
            vt.dfgLUT !== void 0 && (vt.dfgLUT.value = Eg()),
            Fn && (tt.setValue(C, "toneMappingExposure", y.toneMappingExposure),
            Se.needsLights && mc(vt, Zn),
            oe && z.fog === !0 && Te.refreshFogUniforms(vt, oe),
            Te.refreshMaterialUniforms(vt, z, Ue, ue, R.state.transmissionRenderTarget[v.id]),
            Fr.upload(C, ao(Se), vt, L)),
            z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Fr.upload(C, ao(Se), vt, L),
            z.uniformsNeedUpdate = !1),
            z.isSpriteMaterial && tt.setValue(C, "center", O.center),
            tt.setValue(C, "modelViewMatrix", O.modelViewMatrix),
            tt.setValue(C, "normalMatrix", O.normalMatrix),
            tt.setValue(C, "modelMatrix", O.matrixWorld),
            z.isShaderMaterial || z.isRawShaderMaterial) {
                const _t = z.uniformsGroups;
                for (let bn = 0, jn = _t.length; bn < jn; bn++) {
                    const lo = _t[bn];
                    fe.update(lo, Ht),
                    fe.bind(lo, Ht)
                }
            }
            return Ht
        }
        function mc(v, I) {
            v.ambientLightColor.needsUpdate = I,
            v.lightProbe.needsUpdate = I,
            v.directionalLights.needsUpdate = I,
            v.directionalLightShadows.needsUpdate = I,
            v.pointLights.needsUpdate = I,
            v.pointLightShadows.needsUpdate = I,
            v.spotLights.needsUpdate = I,
            v.spotLightShadows.needsUpdate = I,
            v.rectAreaLights.needsUpdate = I,
            v.hemisphereLights.needsUpdate = I
        }
        function gc(v) {
            return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0
        }
        this.getActiveCubeFace = function() {
            return w
        }
        ,
        this.getActiveMipmapLevel = function() {
            return N
        }
        ,
        this.getRenderTarget = function() {
            return F
        }
        ,
        this.setRenderTargetTextures = function(v, I, H) {
            const z = _.get(v);
            z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1,
            z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1),
            _.get(v.texture).__webglTexture = I,
            _.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : H,
            z.__hasExternalTextures = !0
        }
        ,
        this.setRenderTargetFramebuffer = function(v, I) {
            const H = _.get(v);
            H.__webglFramebuffer = I,
            H.__useDefaultFramebuffer = I === void 0
        }
        ;
        const _c = C.createFramebuffer();
        this.setRenderTarget = function(v, I=0, H=0) {
            F = v,
            w = I,
            N = H;
            let z = null
              , O = !1
              , oe = !1;
            if (v) {
                const le = _.get(v);
                if (le.__useDefaultFramebuffer !== void 0) {
                    Me.bindFramebuffer(C.FRAMEBUFFER, le.__webglFramebuffer),
                    B.copy(v.viewport),
                    V.copy(v.scissor),
                    Q = v.scissorTest,
                    Me.viewport(B),
                    Me.scissor(V),
                    Me.setScissorTest(Q),
                    k = -1;
                    return
                } else if (le.__webglFramebuffer === void 0)
                    L.setupRenderTarget(v);
                else if (le.__hasExternalTextures)
                    L.rebindTextures(v, _.get(v.texture).__webglTexture, _.get(v.depthTexture).__webglTexture);
                else if (v.depthBuffer) {
                    const De = v.depthTexture;
                    if (le.__boundDepthTexture !== De) {
                        if (De !== null && _.has(De) && (v.width !== De.image.width || v.height !== De.image.height))
                            throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                        L.setupDepthRenderbuffer(v)
                    }
                }
                const ve = v.texture;
                (ve.isData3DTexture || ve.isDataArrayTexture || ve.isCompressedArrayTexture) && (oe = !0);
                const ye = _.get(v).__webglFramebuffer;
                v.isWebGLCubeRenderTarget ? (Array.isArray(ye[I]) ? z = ye[I][H] : z = ye[I],
                O = !0) : v.samples > 0 && L.useMultisampledRTT(v) === !1 ? z = _.get(v).__webglMultisampledFramebuffer : Array.isArray(ye) ? z = ye[H] : z = ye,
                B.copy(v.viewport),
                V.copy(v.scissor),
                Q = v.scissorTest
            } else
                B.copy(K).multiplyScalar(Ue).floor(),
                V.copy(ne).multiplyScalar(Ue).floor(),
                Q = se;
            if (H !== 0 && (z = _c),
            Me.bindFramebuffer(C.FRAMEBUFFER, z) && Me.drawBuffers(v, z),
            Me.viewport(B),
            Me.scissor(V),
            Me.setScissorTest(Q),
            O) {
                const le = _.get(v.texture);
                C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + I, le.__webglTexture, H)
            } else if (oe) {
                const le = I;
                for (let ve = 0; ve < v.textures.length; ve++) {
                    const ye = _.get(v.textures[ve]);
                    C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0 + ve, ye.__webglTexture, H, le)
                }
            } else if (v !== null && H !== 0) {
                const le = _.get(v.texture);
                C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, le.__webglTexture, H)
            }
            k = -1
        }
        ,
        this.readRenderTargetPixels = function(v, I, H, z, O, oe, de, le=0) {
            if (!(v && v.isWebGLRenderTarget)) {
                we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let ve = _.get(v).__webglFramebuffer;
            if (v.isWebGLCubeRenderTarget && de !== void 0 && (ve = ve[de]),
            ve) {
                Me.bindFramebuffer(C.FRAMEBUFFER, ve);
                try {
                    const ye = v.textures[le]
                      , De = ye.format
                      , Be = ye.type;
                    if (v.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + le),
                    !nt.textureFormatReadable(De)) {
                        we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!nt.textureTypeReadable(Be)) {
                        we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    I >= 0 && I <= v.width - z && H >= 0 && H <= v.height - O && C.readPixels(I, H, z, O, re.convert(De), re.convert(Be), oe)
                } finally {
                    const ye = F !== null ? _.get(F).__webglFramebuffer : null;
                    Me.bindFramebuffer(C.FRAMEBUFFER, ye)
                }
            }
        }
        ,
        this.readRenderTargetPixelsAsync = async function(v, I, H, z, O, oe, de, le=0) {
            if (!(v && v.isWebGLRenderTarget))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let ve = _.get(v).__webglFramebuffer;
            if (v.isWebGLCubeRenderTarget && de !== void 0 && (ve = ve[de]),
            ve)
                if (I >= 0 && I <= v.width - z && H >= 0 && H <= v.height - O) {
                    Me.bindFramebuffer(C.FRAMEBUFFER, ve);
                    const ye = v.textures[le]
                      , De = ye.format
                      , Be = ye.type;
                    if (v.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + le),
                    !nt.textureFormatReadable(De))
                        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                    if (!nt.textureTypeReadable(Be))
                        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                    const Ee = C.createBuffer();
                    C.bindBuffer(C.PIXEL_PACK_BUFFER, Ee),
                    C.bufferData(C.PIXEL_PACK_BUFFER, oe.byteLength, C.STREAM_READ),
                    C.readPixels(I, H, z, O, re.convert(De), re.convert(Be), 0);
                    const je = F !== null ? _.get(F).__webglFramebuffer : null;
                    Me.bindFramebuffer(C.FRAMEBUFFER, je);
                    const ht = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    return C.flush(),
                    await ih(C, ht, 4),
                    C.bindBuffer(C.PIXEL_PACK_BUFFER, Ee),
                    C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, oe),
                    C.deleteBuffer(Ee),
                    C.deleteSync(ht),
                    oe
                } else
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
        }
        ,
        this.copyFramebufferToTexture = function(v, I=null, H=0) {
            const z = Math.pow(2, -H)
              , O = Math.floor(v.image.width * z)
              , oe = Math.floor(v.image.height * z)
              , de = I !== null ? I.x : 0
              , le = I !== null ? I.y : 0;
            L.setTexture2D(v, 0),
            C.copyTexSubImage2D(C.TEXTURE_2D, H, 0, 0, de, le, O, oe),
            Me.unbindTexture()
        }
        ;
        const xc = C.createFramebuffer()
          , vc = C.createFramebuffer();
        this.copyTextureToTexture = function(v, I, H=null, z=null, O=0, oe=0) {
            let de, le, ve, ye, De, Be, Ee, je, ht;
            const ot = v.isCompressedTexture ? v.mipmaps[oe] : v.image;
            if (H !== null)
                de = H.max.x - H.min.x,
                le = H.max.y - H.min.y,
                ve = H.isBox3 ? H.max.z - H.min.z : 1,
                ye = H.min.x,
                De = H.min.y,
                Be = H.isBox3 ? H.min.z : 0;
            else {
                const vt = Math.pow(2, -O);
                de = Math.floor(ot.width * vt),
                le = Math.floor(ot.height * vt),
                v.isDataArrayTexture ? ve = ot.depth : v.isData3DTexture ? ve = Math.floor(ot.depth * vt) : ve = 1,
                ye = 0,
                De = 0,
                Be = 0
            }
            z !== null ? (Ee = z.x,
            je = z.y,
            ht = z.z) : (Ee = 0,
            je = 0,
            ht = 0);
            const Je = re.convert(I.format)
              , yt = re.convert(I.type);
            let Se;
            I.isData3DTexture ? (L.setTexture3D(I, 0),
            Se = C.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (L.setTexture2DArray(I, 0),
            Se = C.TEXTURE_2D_ARRAY) : (L.setTexture2D(I, 0),
            Se = C.TEXTURE_2D),
            C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY),
            C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
            C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
            const Dt = C.getParameter(C.UNPACK_ROW_LENGTH)
              , Xe = C.getParameter(C.UNPACK_IMAGE_HEIGHT)
              , Ht = C.getParameter(C.UNPACK_SKIP_PIXELS)
              , jt = C.getParameter(C.UNPACK_SKIP_ROWS)
              , Fn = C.getParameter(C.UNPACK_SKIP_IMAGES);
            C.pixelStorei(C.UNPACK_ROW_LENGTH, ot.width),
            C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ot.height),
            C.pixelStorei(C.UNPACK_SKIP_PIXELS, ye),
            C.pixelStorei(C.UNPACK_SKIP_ROWS, De),
            C.pixelStorei(C.UNPACK_SKIP_IMAGES, Be);
            const Zn = v.isDataArrayTexture || v.isData3DTexture
              , tt = I.isDataArrayTexture || I.isData3DTexture;
            if (v.isDepthTexture) {
                const vt = _.get(v)
                  , yn = _.get(I)
                  , _t = _.get(vt.__renderTarget)
                  , bn = _.get(yn.__renderTarget);
                Me.bindFramebuffer(C.READ_FRAMEBUFFER, _t.__webglFramebuffer),
                Me.bindFramebuffer(C.DRAW_FRAMEBUFFER, bn.__webglFramebuffer);
                for (let jn = 0; jn < ve; jn++)
                    Zn && (C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, _.get(v).__webglTexture, O, Be + jn),
                    C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, _.get(I).__webglTexture, oe, ht + jn)),
                    C.blitFramebuffer(ye, De, de, le, Ee, je, de, le, C.DEPTH_BUFFER_BIT, C.NEAREST);
                Me.bindFramebuffer(C.READ_FRAMEBUFFER, null),
                Me.bindFramebuffer(C.DRAW_FRAMEBUFFER, null)
            } else if (O !== 0 || v.isRenderTargetTexture || _.has(v)) {
                const vt = _.get(v)
                  , yn = _.get(I);
                Me.bindFramebuffer(C.READ_FRAMEBUFFER, xc),
                Me.bindFramebuffer(C.DRAW_FRAMEBUFFER, vc);
                for (let _t = 0; _t < ve; _t++)
                    Zn ? C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, vt.__webglTexture, O, Be + _t) : C.framebufferTexture2D(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, vt.__webglTexture, O),
                    tt ? C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, yn.__webglTexture, oe, ht + _t) : C.framebufferTexture2D(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, yn.__webglTexture, oe),
                    O !== 0 ? C.blitFramebuffer(ye, De, de, le, Ee, je, de, le, C.COLOR_BUFFER_BIT, C.NEAREST) : tt ? C.copyTexSubImage3D(Se, oe, Ee, je, ht + _t, ye, De, de, le) : C.copyTexSubImage2D(Se, oe, Ee, je, ye, De, de, le);
                Me.bindFramebuffer(C.READ_FRAMEBUFFER, null),
                Me.bindFramebuffer(C.DRAW_FRAMEBUFFER, null)
            } else
                tt ? v.isDataTexture || v.isData3DTexture ? C.texSubImage3D(Se, oe, Ee, je, ht, de, le, ve, Je, yt, ot.data) : I.isCompressedArrayTexture ? C.compressedTexSubImage3D(Se, oe, Ee, je, ht, de, le, ve, Je, ot.data) : C.texSubImage3D(Se, oe, Ee, je, ht, de, le, ve, Je, yt, ot) : v.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, oe, Ee, je, de, le, Je, yt, ot.data) : v.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, oe, Ee, je, ot.width, ot.height, Je, ot.data) : C.texSubImage2D(C.TEXTURE_2D, oe, Ee, je, de, le, Je, yt, ot);
            C.pixelStorei(C.UNPACK_ROW_LENGTH, Dt),
            C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Xe),
            C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ht),
            C.pixelStorei(C.UNPACK_SKIP_ROWS, jt),
            C.pixelStorei(C.UNPACK_SKIP_IMAGES, Fn),
            oe === 0 && I.generateMipmaps && C.generateMipmap(Se),
            Me.unbindTexture()
        }
        ,
        this.initRenderTarget = function(v) {
            _.get(v).__webglFramebuffer === void 0 && L.setupRenderTarget(v)
        }
        ,
        this.initTexture = function(v) {
            v.isCubeTexture ? L.setTextureCube(v, 0) : v.isData3DTexture ? L.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? L.setTexture2DArray(v, 0) : L.setTexture2D(v, 0),
            Me.unbindTexture()
        }
        ,
        this.resetState = function() {
            w = 0,
            N = 0,
            F = null,
            Me.reset(),
            te.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return tn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        const t = this.getContext();
        t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e),
        t.unpackColorSpace = We._getUnpackColorSpace()
    }
}
const Os = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`
  , Ag = `
uniform sampler2D uScene;
uniform float     uThreshold;
varying vec2      vUv;
void main() {
    vec3  c = texture2D(uScene, vUv).rgb;
    float b = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float w = max(0.0, b - uThreshold) / max(b, 0.0001);
    gl_FragColor = vec4(c * w, 1.0);
}
`
  , wg = `
uniform sampler2D uBloom;
uniform vec2      uDir;
varying vec2      vUv;
void main() {
    vec3 c = vec3(0.0);
    c += texture2D(uBloom, vUv - uDir * 2.0).rgb * 0.0625;
    c += texture2D(uBloom, vUv - uDir      ).rgb * 0.25;
    c += texture2D(uBloom, vUv             ).rgb * 0.375;
    c += texture2D(uBloom, vUv + uDir      ).rgb * 0.25;
    c += texture2D(uBloom, vUv + uDir * 2.0).rgb * 0.0625;
    gl_FragColor = vec4(c, 1.0);
}
`
  , Rg = i => `
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float     uRadialBlur;
uniform vec2      uBlurCenter;
uniform float     uBloomStrength;
varying vec2      vUv;

#define SAMPLES ${i}

void main() {
    vec4 acc;
    if (uRadialBlur < 0.001) {
        acc = texture2D(uScene, vUv);
    } else {
        vec2 center = uBlurCenter;
        vec2 dir    = vUv - center;
        float dist  = length(dir);
        float amt   = dist * dist * uRadialBlur;
        acc = vec4(0.0);
        for (int i = 0; i < SAMPLES; i++) {
            float t = float(i) / float(SAMPLES - 1);
            acc += texture2D(uScene, vUv - dir * t * amt);
        }
        acc /= float(SAMPLES);
    }
    vec3 bloom = texture2D(uBloom, vUv).rgb;
    gl_FragColor = vec4(acc.rgb + bloom * uBloomStrength, 1.0);
}
`;
class Cg {
    constructor() {
        this.scene = null,
        this.camera = null,
        this.sceneCat = null,
        this.cameraCat = null,
        this.sceneOverlay = null,
        this.renderer = null,
        this.webglElement = null,
        this.isInitialized = !1,
        this.sizes = {
            width: 0,
            height: 0
        },
        this._fbo = null,
        this._postMat = null,
        this._postScene = null,
        this._blurCurrent = 0,
        this._blurTarget = 0,
        this._blurSpeed = .08,
        this._blurCenterCurrent = {
            x: .5,
            y: .5
        },
        this._blurCenterTarget = {
            x: .5,
            y: .5
        },
        this._bloomFbo1 = null,
        this._bloomFbo2 = null,
        this._bloomBrightMat = null,
        this._bloomBlurMat = null,
        this._bloomMesh = null,
        this._bloomScene = null,
        this._bloomStrength = 0,
        this._bloomPasses = null,
        this._forcePost = !1
    }
    init() {
        this._setCanvasSize(),
        this._setScene(),
        this._setCamera(),
        this._setRenderer(),
        this._setPost(),
        this.isInitialized = !0
    }
    _setCanvasSize() {
        this.sizes.width = window.innerWidth,
        this.sizes.height = window.innerHeight
    }
    _setScene() {
        this.scene = new Ci
    }
    _dprCap() {
        return wi.isSp() ? 1.5 : 2
    }
    _setRenderer() {
        this.renderer = new Tg({
            antialias: !0,
            alpha: !0
        }),
        this.renderer.setClearColor(0),
        this.renderer.setSize(this.sizes.width, this.sizes.height),
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this._dprCap())),
        this.renderer.autoClear = !1,
        this.webglElement = document.getElementById("webgl"),
        this.webglElement.appendChild(this.renderer.domElement)
    }
    _setCamera() {
        const e = this.sizes.width
          , t = this.sizes.height;
        this.camera = new Yi(e / -2,e / 2,t / 2,t / -2,.1,100),
        this.camera.position.z = 5,
        this.sceneCat = new Ci,
        this.cameraCat = new wt(50,e / t,.1,100),
        this.cameraCat.position.z = 5,
        this.sceneOverlay = new Ci
    }
    _setPost() {
        const e = this.sizes.width
          , t = this.sizes.height
          , n = Math.min(window.devicePixelRatio, this._dprCap());
        this._fbo = new Nt(e * n,t * n,{
            minFilter: lt,
            magFilter: lt
        });
        const r = Math.round(e * n * .5)
          , s = Math.round(t * n * .5);
        this._bloomFbo1 = new Nt(r,s,{
            minFilter: lt,
            magFilter: lt
        }),
        this._bloomFbo2 = new Nt(r,s,{
            minFilter: lt,
            magFilter: lt
        }),
        this._bloomBrightMat = new Ft({
            vertexShader: Os,
            fragmentShader: Ag,
            uniforms: {
                uScene: {
                    value: this._fbo.texture
                },
                uThreshold: {
                    value: .08
                }
            },
            depthWrite: !1,
            depthTest: !1
        }),
        this._bloomBlurMat = new Ft({
            vertexShader: Os,
            fragmentShader: wg,
            uniforms: {
                uBloom: {
                    value: this._bloomFbo1.texture
                },
                uDir: {
                    value: new Ge(1,0)
                }
            },
            depthWrite: !1,
            depthTest: !1
        });
        const a = new Si(2,2);
        this._bloomMesh = new Pt(a,this._bloomBrightMat),
        this._bloomScene = new Ci,
        this._bloomScene.add(this._bloomMesh);
        const o = Rg(wi.isSp() ? 8 : 16);
        this._postMat = new Ft({
            vertexShader: Os,
            fragmentShader: o,
            uniforms: {
                uScene: {
                    value: this._fbo.texture
                },
                uBloom: {
                    value: this._bloomFbo1.texture
                },
                uRadialBlur: {
                    value: 0
                },
                uBlurCenter: {
                    value: new Ge(.5,.5)
                },
                uBloomStrength: {
                    value: 0
                }
            },
            depthWrite: !1,
            depthTest: !1
        }),
        this._postScene = new Ci,
        this._postScene.add(new Pt(new Si(2,2),this._postMat)),
        this._postCam = new Yi(-1,1,1,-1,0,1),
        this._rebuildBloomPasses()
    }
    _rebuildBloomPasses() {
        const e = this._bloomFbo1.width
          , t = this._bloomFbo1.height
          , n = this._bloomFbo1.texture
          , r = this._bloomFbo2.texture
          , s = this._bloomPasses ?? (this._bloomPasses = [{
            src: null,
            dst: null,
            dx: 0,
            dy: 0
        }, {
            src: null,
            dst: null,
            dx: 0,
            dy: 0
        }, {
            src: null,
            dst: null,
            dx: 0,
            dy: 0
        }, {
            src: null,
            dst: null,
            dx: 0,
            dy: 0
        }, {
            src: null,
            dst: null,
            dx: 0,
            dy: 0
        }, {
            src: null,
            dst: null,
            dx: 0,
            dy: 0
        }]);
        s[0].src = n,
        s[0].dst = this._bloomFbo2,
        s[0].dx = 1 / e,
        s[0].dy = 0,
        s[1].src = r,
        s[1].dst = this._bloomFbo1,
        s[1].dx = 0,
        s[1].dy = 1 / t,
        s[2].src = n,
        s[2].dst = this._bloomFbo2,
        s[2].dx = 2 / e,
        s[2].dy = 0,
        s[3].src = r,
        s[3].dst = this._bloomFbo1,
        s[3].dx = 0,
        s[3].dy = 2 / t,
        s[4].src = n,
        s[4].dst = this._bloomFbo2,
        s[4].dx = 4 / e,
        s[4].dy = 0,
        s[5].src = r,
        s[5].dst = this._bloomFbo1,
        s[5].dx = 0,
        s[5].dy = 4 / t
    }
    triggerRadialBlur(e=.8) {
        wi.isTouch() || (this._blurCurrent = e,
        this._blurTarget = 0,
        this._blurSpeed = .04)
    }
    setRadialBlur(e) {
        wi.isTouch() || (this._blurCurrent = e,
        this._blurTarget = e,
        this._blurSpeed = 1)
    }
    clearRadialBlur() {
        this._blurCurrent = 0,
        this._blurTarget = 0,
        this._postMat && (this._postMat.uniforms.uRadialBlur.value = 0),
        this._blurCenterTarget.x = .5,
        this._blurCenterTarget.y = .5
    }
    setBlurCenter(e, t) {
        wi.isTouch() || (this._blurCenterTarget.x = e,
        this._blurCenterTarget.y = t)
    }
    setBloomStrength(e) {
        this._bloomStrength = e
    }
    setForcePost(e) {
        this._forcePost = !!e
    }
    render() {
        this._blurCurrent += (this._blurTarget - this._blurCurrent) * this._blurSpeed;
        const e = this._blurCenterCurrent
          , t = this._blurCenterTarget;
        if (e.x += (t.x - e.x) * .06,
        e.y += (t.y - e.y) * .06,
        !(Math.abs(this._blurCurrent) > .001 || Math.abs(this._blurTarget) > .001 || this._bloomStrength > .001 || this._forcePost)) {
            this.renderRaw();
            return
        }
        if (this._postMat && (this._postMat.uniforms.uRadialBlur.value = this._blurCurrent,
        this._postMat.uniforms.uBlurCenter.value.set(e.x, e.y)),
        this.renderer.setRenderTarget(this._fbo),
        this.renderer.clear(),
        this.renderer.render(this.scene, this.camera),
        this.renderer.clearDepth(),
        this.renderer.render(this.sceneCat, this.cameraCat),
        this._bloomStrength > .001) {
            this._bloomMesh.material = this._bloomBrightMat,
            this._bloomBrightMat.uniforms.uScene.value = this._fbo.texture,
            this.renderer.setRenderTarget(this._bloomFbo1),
            this.renderer.clear(),
            this.renderer.render(this._bloomScene, this._postCam),
            this._bloomMesh.material = this._bloomBlurMat;
            const r = this._bloomPasses
              , s = this._bloomBlurMat.uniforms;
            for (let a = 0; a < r.length; a++) {
                const o = r[a];
                s.uBloom.value = o.src,
                s.uDir.value.set(o.dx, o.dy),
                this.renderer.setRenderTarget(o.dst),
                this.renderer.clear(),
                this.renderer.render(this._bloomScene, this._postCam)
            }
            this._postMat.uniforms.uBloom.value = this._bloomFbo1.texture
        }
        this._postMat.uniforms.uBloomStrength.value = this._bloomStrength,
        this.renderer.setRenderTarget(null),
        this.renderer.render(this._postScene, this._postCam),
        this.renderer.clearDepth(),
        this.renderer.render(this.sceneOverlay, this.camera)
    }
    renderRaw() {
        this.renderer.clear(),
        this.renderer.render(this.scene, this.camera),
        this.renderer.clearDepth(),
        this.renderer.render(this.sceneCat, this.cameraCat),
        this.renderer.clearDepth(),
        this.renderer.render(this.sceneOverlay, this.camera)
    }
    resize() {
        this._setCanvasSize();
        const e = this.sizes.width
          , t = this.sizes.height;
        this.camera.left = e / -2,
        this.camera.right = e / 2,
        this.camera.top = t / 2,
        this.camera.bottom = t / -2,
        this.camera.updateProjectionMatrix(),
        this.cameraCat.aspect = e / t,
        this.cameraCat.updateProjectionMatrix(),
        this.renderer.setSize(e, t);
        const n = Math.min(window.devicePixelRatio, this._dprCap());
        if (this._fbo && this._fbo.setSize(e * n, t * n),
        this._bloomFbo1) {
            const r = Math.round(e * n * .5)
              , s = Math.round(t * n * .5);
            this._bloomFbo1.setSize(r, s),
            this._bloomFbo2.setSize(r, s),
            this._rebuildBloomPasses()
        }
    }
}
const n_ = new Cg;
export {Yi as $, ho as A, Vh as B, Gg as C, jg as D, vi as E, Yg as F, ir as G, vn as H, Qg as I, ji as J, Jg as K, Ql as L, du as M, Un as N, Ng as O, Ve as P, Pt as Q, jl as R, Xg as S, Wg as T, tu as U, Ks as V, Mt as W, er as X, Wc as Y, Hr as Z, ut as _, qg as a, wt as a0, Si as a1, Zg as a2, kg as a3, Yh as a4, Qe as a5, $n as a6, qr as a7, Vt as a8, t_ as a9, Ys as aa, Bt as ab, Ci as ac, Ft as ad, Jl as ae, Og as af, Sn as ag, $g as ah, St as ai, Kg as aj, e_ as ak, Ig as al, Lg as am, Dg as an, Ge as ao, U as ap, st as aq, Wr as ar, Nt as as, n_ as at, In as b, $i as c, kt as d, Gt as e, Hg as f, mn as g, ke as h, We as i, nc as j, pn as k, Ug as l, Ln as m, Ho as n, Bg as o, Fg as p, Zl as q, Zi as r, Or as s, wa as t, qh as u, Vg as v, zg as w, lt as x, qn as y, Qr as z};
