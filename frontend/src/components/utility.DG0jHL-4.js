let n = null;
const o = () => typeof window > "u" ? !1 : window.matchMedia ? window.matchMedia("(hover: none) and (pointer: coarse)").matches : "ontouchstart"in window || navigator.maxTouchPoints > 0;
class r {
    static lerp(e, i, t) {
        return (1 - t) * e + t * i
    }
    static isTouch() {
        return n === null && (n = o()),
        n
    }
    static isSp() {
        return typeof window < "u" && window.innerWidth < 980
    }
}
export {r as U};
