// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"helsinkijs.org.e31bb0bc.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;

        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};
      var module = cache[name] = new newRequire.Module(name);
      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;

  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "node_modules/parcel/src/builtins/bundle-url.js": [function (require, module, exports) {
    var bundleURL = null;

    function getBundleURLCached() {
      if (!bundleURL) {
        bundleURL = getBundleURL();
      }

      return bundleURL;
    }

    function getBundleURL() {
      // Attempt to find the URL of the current script and use that as the base URL
      try {
        throw new Error();
      } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

        if (matches) {
          return getBaseURL(matches[0]);
        }
      }

      return '/';
    }

    function getBaseURL(url) {
      return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
    }

    exports.getBundleURL = getBundleURLCached;
    exports.getBaseURL = getBaseURL;
  }, {}],
  "node_modules/parcel/src/builtins/css-loader.js": [function (require, module, exports) {
    var bundle = require('./bundle-url');

    function updateLink(link) {
      var newLink = link.cloneNode();

      newLink.onload = function () {
        link.remove();
      };

      newLink.href = link.href.split('?')[0] + '?' + Date.now();
      link.parentNode.insertBefore(newLink, link.nextSibling);
    }

    var cssTimeout = null;

    function reloadCSS() {
      if (cssTimeout) {
        return;
      }

      cssTimeout = setTimeout(function () {
        var links = document.querySelectorAll('link[rel="stylesheet"]');

        for (var i = 0; i < links.length; i++) {
          if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
            updateLink(links[i]);
          }
        }

        cssTimeout = null;
      }, 50);
    }

    module.exports = reloadCSS;
  }, {
    "./bundle-url": "node_modules/parcel/src/builtins/bundle-url.js"
  }],
  "style.scss": [function (require, module, exports) {
    var reloadCSS = require('_css_loader');

    module.hot.dispose(reloadCSS);
    module.hot.accept(reloadCSS);
  }, {
    "_css_loader": "node_modules/parcel/src/builtins/css-loader.js"
  }],
  "node_modules/animate.css/animate.css": [function (require, module, exports) {
    var reloadCSS = require('_css_loader');

    module.hot.dispose(reloadCSS);
    module.hot.accept(reloadCSS);
  }, {
    "_css_loader": "node_modules/parcel/src/builtins/css-loader.js"
  }],
  "index.js": [function (require, module, exports) {
    "use strict";

    require("./style.scss");

    require("animate.css");

    "use strict";

    var rayCount = 500;
    var rayPropCount = 8;
    var rayPropsLength = rayCount * rayPropCount;
    var baseLength = 200;
    var rangeLength = 200;
    var baseSpeed = 0.05;
    var rangeSpeed = 0.1;
    var baseWidth = 10;
    var rangeWidth = 20;
    var baseHue = 120;
    var rangeHue = 60;
    var baseTTL = 50;
    var rangeTTL = 100;
    var noiseStrength = 100;
    var xOff = 0.0015;
    var yOff = 0.0015;
    var zOff = 0.0015;
    var backgroundColor = "hsla(220,60%,3%,1)";
    var container;
    var canvas;
    var ctx;
    var center;
    var tick;
    var simplex;
    var rayProps;

    function setup() {
      createCanvas();
      resize();
      initRays();
      draw();
    }

    function initRays() {
      tick = 0;
      simplex = new SimplexNoise();
      rayProps = new Float32Array(rayPropsLength);
      var i;

      for (i = 0; i < rayPropsLength; i += rayPropCount) {
        initRay(i);
      }
    }

    function initRay(i) {
      var length, x, y1, y2, n, life, ttl, width, speed, hue;
      length = baseLength + rand(rangeLength);
      x = rand(canvas.a.width);
      y1 = center[1] + noiseStrength;
      y2 = center[1] + noiseStrength - length;
      n = simplex.noise3D(x * xOff, y1 * yOff, tick * zOff) * noiseStrength;
      y1 += n;
      y2 += n;
      life = 0;
      ttl = baseTTL + rand(rangeTTL);
      width = baseWidth + rand(rangeWidth);
      speed = baseSpeed + rand(rangeSpeed) * (round(rand(1)) ? 1 : -1);
      hue = baseHue + rand(rangeHue);
      rayProps.set([x, y1, y2, life, ttl, width, speed, hue], i);
    }

    function drawRays() {
      var i;

      for (i = 0; i < rayPropsLength; i += rayPropCount) {
        updateRay(i);
      }
    }

    function updateRay(i) {
      var i2 = 1 + i,
          i3 = 2 + i,
          i4 = 3 + i,
          i5 = 4 + i,
          i6 = 5 + i,
          i7 = 6 + i,
          i8 = 7 + i;
      var x, y1, y2, life, ttl, width, speed, hue;
      x = rayProps[i];
      y1 = rayProps[i2];
      y2 = rayProps[i3];
      life = rayProps[i4];
      ttl = rayProps[i5];
      width = rayProps[i6];
      speed = rayProps[i7];
      hue = rayProps[i8];
      drawRay(x, y1, y2, life, ttl, width, hue);
      x += speed;
      life++;
      rayProps[i] = x;
      rayProps[i4] = life;
      (checkBounds(x) || life > ttl) && initRay(i);
    }

    function drawRay(x, y1, y2, life, ttl, width, hue) {
      var gradient;
      gradient = ctx.a.createLinearGradient(x, y1, x, y2);
      console.log("hue", hue);
      gradient.addColorStop(0, "hsla(".concat(hue, ",100%,65%,0)"));
      gradient.addColorStop(0.25, "hsla(".concat(hue, ",100%,65%,").concat(fadeInOut(life, ttl), ")"));
      gradient.addColorStop(0.5, "hsla(".concat(hue + 100, ",100%,65%,").concat(fadeInOut(life, ttl), ")"));
      gradient.addColorStop(1, "hsla(".concat(hue + 150, ",100%,65%,0)"));
      gradient.addColorStop(0, "black");
      gradient.addColorStop(1, "white");
      ctx.a.save();
      ctx.a.beginPath();
      ctx.a.strokeStyle = gradient;
      ctx.a.lineWidth = width;
      ctx.a.moveTo(x, y1);
      ctx.a.lineTo(x, y2);
      ctx.a.stroke();
      ctx.a.closePath();
      ctx.a.restore();
    }

    function checkBounds(x) {
      return x < 0 || x > canvas.a.width;
    }

    function createCanvas() {
      container = document.querySelector(".content--canvas");
      canvas = {
        a: document.createElement("canvas"),
        b: document.createElement("canvas")
      };
      container.appendChild(canvas.b);
      ctx = {
        a: canvas.a.getContext("2d"),
        b: canvas.b.getContext("2d")
      };
      center = [];
    }

    function resize() {
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
      canvas.a.width = innerWidth;
      canvas.a.height = innerHeight;
      ctx.a.drawImage(canvas.b, 0, 0);
      canvas.b.width = innerWidth;
      canvas.b.height = innerHeight;
      ctx.b.drawImage(canvas.a, 0, 0);
      center[0] = 0.5 * canvas.a.width;
      center[1] = 0.5 * canvas.a.height;
    }

    function render() {
      ctx.b.save();
      ctx.b.filter = "blur(12px)";
      ctx.a.globalCompositeOperation = "lighter";
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    }

    function draw() {
      tick++;
      ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.a.height);
      drawRays();
      render();
      window.requestAnimationFrame(draw);
    }

    window.addEventListener("load", setup);
    window.addEventListener("resize", resize);
  }, {
    "./style.scss": "style.scss",
    "animate.css": "node_modules/animate.css/animate.css"
  }],
  "node_modules/parcel/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };
      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var checkedAssets, assetsToAccept;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = "" || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "59117" + '/');

      ws.onmessage = function (event) {
        checkedAssets = {};
        assetsToAccept = [];
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          var handled = false;
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

              if (didAccept) {
                handled = true;
              }
            }
          }); // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js;
          });

          if (handled) {
            console.clear();
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset);
            });
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1]);
            });
          } else {
            window.location.reload();
          }
        }

        if (data.type === 'reload') {
          ws.close();

          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');
          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
          removeErrorOverlay();
          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);

      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID; // html encode message and stack trace

      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAcceptCheck(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id);
      }

      if (checkedAssets[id]) {
        return;
      }

      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToAccept.push([bundle, id]);

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id);
      });
    }

    function hmrAcceptRun(bundle, id) {
      var cached = bundle.cache[id];
      bundle.hotData = {};

      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);
      cached = bundle.cache[id];

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });

        return true;
      }
    }
  }, {}]
}, {}, ["node_modules/parcel/src/builtins/hmr-runtime.js", "index.js"], null);
},{}]},{},["helsinkijs.org.e31bb0bc.js"], null)
//# sourceMappingURL=/helsinkijs.org.e31bb0bc.b5b962bf.js.map