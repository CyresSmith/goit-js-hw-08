!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var o,i,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(O,t),s?p(e):f}function w(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=b();if(w(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function h(e){return u=void 0,d&&o?p(e):(o=i=void 0,f)}function T(){var e=b(),n=w(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(m)return u=setTimeout(O,t),p(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},T.flush=function(){return void 0===u?f:h(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||u.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j,w={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form").email,message:document.querySelector(".feedback-form").message};w.form.addEventListener("input",e(t)((function(e){j={email:w.email.value,message:w.message.value},localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),localStorage.getItem("feedback-form-state")&&(w.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,w.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message);w.form.addEventListener("submit",(function(e){event.preventDefault(),localStorage.getItem("feedback-form-state")&&localStorage.removeItem("feedback-form-state"),w.email.value&&w.message.value?j={email:w.email.value,message:w.message.value}:window.alert("The form is not completed! You need to fill it!"),console.log(j),w.form.reset()}))}();
//# sourceMappingURL=03-feedback.35ce1db0.js.map