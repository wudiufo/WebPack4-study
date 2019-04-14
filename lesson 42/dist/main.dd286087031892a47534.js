(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hello, this is dell');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('service-worker registed');
    }).catch(error => {
      console.log('service-worker register error');
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.dd286087031892a47534.js.map