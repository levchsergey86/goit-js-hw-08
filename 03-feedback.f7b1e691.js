!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var l=o("eaxEB");!function(){var t=document.querySelector(".feedback-form"),r=document.querySelector('input[type="email"]'),a=document.querySelector("textarea");if(t.addEventListener("input",e(l)((function(e){try{var t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t.email=r.value,t.message=a.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}catch(e){console.error(e)}}),500)),localStorage.getItem("feedback-form-state"))try{var o=JSON.parse(localStorage.getItem("feedback-form-state"));r.value=o.email,a.value=o.message}catch(e){console.error(e)}t.addEventListener("submit",(function(e){e.preventDefault();try{var t=r.value,o=a.value;console.log({email:t,message:o}),localStorage.removeItem("feedback-form-state"),r.value="",a.value=""}catch(e){console.error(e)}}))}()}();
//# sourceMappingURL=03-feedback.f7b1e691.js.map