function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var l=a("8zd4h");!function(){const t=document.querySelector(".feedback-form"),o=document.querySelector('input[type="email"]'),r=document.querySelector("textarea");if(t.addEventListener("input",e(l)((function(e){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email=o.value,e.message=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}catch(e){console.error(e)}}),500)),localStorage.getItem("feedback-form-state"))try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));o.value=e.email,r.value=e.message}catch(e){console.error(e)}t.addEventListener("submit",(function(e){e.preventDefault();try{const e=o.value,t=r.value;console.log({email:e,message:t}),localStorage.removeItem("feedback-form-state"),o.value="",r.value=""}catch(e){console.error(e)}}))}();
//# sourceMappingURL=03-feedback.07ae9bdb.js.map