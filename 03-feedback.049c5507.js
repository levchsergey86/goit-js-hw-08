function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(w,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function w(){var e=v();if(S(e))return j(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function j(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function O(){var e=v(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:j(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})},function(){const n=document.querySelector(".feedback-form"),o=document.querySelector('input[type="email"]'),r=document.querySelector("textarea");if(n.addEventListener("submit",(function(e){e.preventDefault();try{const e=o.value,t=r.value;if(!e||!t)throw console.log("Заповніть обидва поля!"),new Error("Заповніть обидва поля!");console.log({email:e,message:t}),localStorage.removeItem("feedback-form-state"),o.value="",r.value=""}catch(e){console.error(e)}})),localStorage.getItem("feedback-form-state"))try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));o.value=e.email,r.value=e.message}catch(e){console.error(e)}n.addEventListener("input",e(t)((function(e){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email=o.value,e.message=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}catch(e){console.error(e)}}),500))}();
//# sourceMappingURL=03-feedback.049c5507.js.map
