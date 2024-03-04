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
})({"helsinkijs.org.e31bb0bc.f0be5f1f.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "M3Bo": [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var e,
        t = arguments[3];

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    parcelRequire = function (t, r, o, a) {
      var i,
          s = "function" == typeof parcelRequire && parcelRequire,
          c = "function" == typeof require && require;

      function l(e, n) {
        if (!r[e]) {
          if (!t[e]) {
            var o = "function" == typeof parcelRequire && parcelRequire;
            if (!n && o) return o(e, !0);
            if (s) return s(e, !0);
            if (c && "string" == typeof e) return c(e);
            var a = new Error("Cannot find module '" + e + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          u.resolve = function (n) {
            return t[e][1][n] || n;
          }, u.cache = {};
          var i = r[e] = new l.Module(e);
          t[e][0].call(i.exports, u, i, i.exports, this);
        }

        return r[e].exports;

        function u(e) {
          return l(u.resolve(e));
        }
      }

      l.isParcelRequire = !0, l.Module = function (e) {
        this.id = e, this.bundle = l, this.exports = {};
      }, l.modules = t, l.cache = r, l.parent = s, l.register = function (e, n) {
        t[e] = [function (e, t) {
          t.exports = n;
        }, {}];
      };

      for (var u = 0; u < o.length; u++) {
        try {
          l(o[u]);
        } catch (p) {
          i || (i = p);
        }
      }

      if (o.length) {
        var d = l(o[o.length - 1]);
        "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) && "undefined" != typeof module ? module.exports = d : "function" == typeof e && e.amd && e(function () {
          return d;
        });
      }

      if (parcelRequire = l, i) throw i;
      return l;
    }({
      "node_modules/parcel/src/builtins/bundle-url.js": [function (e, t, n) {
        var r = null;

        function o(e) {
          return ("" + e).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
        }

        n.getBundleURL = function () {
          return r || (r = function () {
            try {
              throw new Error();
            } catch (t) {
              var e = ("" + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
              if (e) return o(e[0]);
            }

            return "/";
          }()), r;
        }, n.getBaseURL = o;
      }, {}],
      "node_modules/parcel/src/builtins/css-loader.js": [function (e, t, n) {
        var r = e("./bundle-url");

        function o(e) {
          var t = e.cloneNode();
          t.onload = function () {
            e.remove();
          }, t.href = e.href.split("?")[0] + "?" + Date.now(), e.parentNode.insertBefore(t, e.nextSibling);
        }

        var a = null;

        t.exports = function () {
          a || (a = setTimeout(function () {
            for (var e = document.querySelectorAll('link[rel="stylesheet"]'), t = 0; t < e.length; t++) {
              r.getBaseURL(e[t].href) === r.getBundleURL() && o(e[t]);
            }

            a = null;
          }, 50));
        };
      }, {
        "./bundle-url": "node_modules/parcel/src/builtins/bundle-url.js"
      }],
      "style.scss": [function (e, t, n) {
        var r = e("_css_loader");
        t.hot.dispose(r), t.hot.accept(r);
      }, {
        _css_loader: "node_modules/parcel/src/builtins/css-loader.js"
      }],
      "node_modules/animate.css/animate.css": [function (e, t, n) {
        var r = e("_css_loader");
        t.hot.dispose(r), t.hot.accept(r);
      }, {
        _css_loader: "node_modules/parcel/src/builtins/css-loader.js"
      }],
      "index.js": [function (e, t, n) {
        "use strict";

        e("./style.scss"), e("animate.css");
        var r,
            o,
            a,
            i,
            s,
            c,
            l,
            u = 8,
            d = 500 * u,
            p = 200,
            f = 200,
            h = .05,
            m = .1,
            b = 10,
            v = 20,
            y = 120,
            g = 60,
            w = 50,
            x = 100,
            _ = 100,
            C = .0015,
            k = .0015,
            R = .0015,
            S = "hsla(220,60%,3%,1)";

        function q(e) {
          var t, n, r, a, u, d, S, q, E;
          t = p + rand(f), n = rand(o.a.width), r = i[1] + _, a = i[1] + _ - t, r += u = c.noise3D(n * C, r * k, s * R) * _, a += u, d = w + rand(x), S = b + rand(v), q = h + rand(m) * (round(rand(1)) ? 1 : -1), E = y + rand(g), l.set([n, r, a, 0, d, S, q, E], e);
        }

        function E(e) {
          var t,
              n,
              r,
              i,
              s,
              c,
              u,
              d = 1 + e,
              p = 2 + e,
              f = 3 + e,
              h = 4 + e,
              m = 5 + e,
              b = 6 + e,
              v = 7 + e;
          t = l[e], n = l[d], r = l[p], i = l[f], s = l[h], c = l[m], u = l[b], function (e, t, n, r, o, i, s) {
            var c;
            c = a.a.createLinearGradient(e, t, e, n), console.log("hue", s), c.addColorStop(0, "hsla(".concat(s, ",100%,65%,0)")), c.addColorStop(.25, "hsla(".concat(s, ",100%,65%,").concat(fadeInOut(r, o), ")")), c.addColorStop(.5, "hsla(".concat(s + 100, ",100%,65%,").concat(fadeInOut(r, o), ")")), c.addColorStop(1, "hsla(".concat(s + 150, ",100%,65%,0)")), c.addColorStop(0, "black"), c.addColorStop(1, "white"), a.a.save(), a.a.beginPath(), a.a.strokeStyle = c, a.a.lineWidth = i, a.a.moveTo(e, t), a.a.lineTo(e, n), a.a.stroke(), a.a.closePath(), a.a.restore();
          }(t, n, r, i, s, c, l[v]), t += u, i++, l[e] = t, l[f] = i, (function (e) {
            return e < 0 || e > o.a.width;
          }(t) || i > s) && q(e);
        }

        function j() {
          var e = window,
              t = e.innerWidth,
              n = e.innerHeight;
          o.a.width = t, o.a.height = n, a.a.drawImage(o.b, 0, 0), o.b.width = t, o.b.height = n, a.b.drawImage(o.a, 0, 0), i[0] = .5 * o.a.width, i[1] = .5 * o.a.height;
        }

        function L() {
          s++, a.a.clearRect(0, 0, o.a.width, o.a.height), a.b.fillStyle = S, a.b.fillRect(0, 0, o.b.width, o.a.height), function () {
            var e;

            for (e = 0; e < d; e += u) {
              E(e);
            }
          }(), a.b.save(), a.b.filter = "blur(12px)", a.a.globalCompositeOperation = "lighter", a.b.drawImage(o.a, 0, 0), a.b.restore(), window.requestAnimationFrame(L);
        }

        window.addEventListener("load", function () {
          r = document.querySelector(".content--canvas"), o = {
            a: document.createElement("canvas"),
            b: document.createElement("canvas")
          }, r.appendChild(o.b), a = {
            a: o.a.getContext("2d"),
            b: o.b.getContext("2d")
          }, i = [], j(), function () {
            var e;

            for (s = 0, c = new SimplexNoise(), l = new Float32Array(d), e = 0; e < d; e += u) {
              q(e);
            }
          }(), L();
        }), window.addEventListener("resize", j);
      }, {
        "./style.scss": "style.scss",
        "animate.css": "node_modules/animate.css/animate.css"
      }],
      "node_modules/parcel/src/builtins/hmr-runtime.js": [function (e, t, n) {
        var r,
            o,
            a = arguments[3],
            i = "__parcel__error__overlay__",
            s = t.bundle.Module;

        t.bundle.Module = function (e) {
          s.call(this, e), this.hot = {
            data: t.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function accept(e) {
              this._acceptCallbacks.push(e || function () {});
            },
            dispose: function dispose(e) {
              this._disposeCallbacks.push(e);
            }
          }, t.bundle.hotData = null;
        };

        var c = t.bundle.parent;

        if (!(c && c.isParcelRequire || "undefined" == typeof WebSocket)) {
          var l = location.hostname,
              u = "https:" === location.protocol ? "wss" : "ws",
              d = new WebSocket(u + "://" + l + ":59117/");

          d.onmessage = function (e) {
            r = {}, o = [];
            var t = JSON.parse(e.data);

            if ("update" === t.type) {
              var n = !1;
              t.assets.forEach(function (e) {
                e.isNew || function e(t, n) {
                  var i = t.modules;
                  if (!i) return;
                  if (!i[n] && t.parent) return e(t.parent, n);
                  if (r[n]) return;
                  r[n] = !0;
                  var s = t.cache[n];
                  o.push([t, n]);
                  if (s && s.hot && s.hot._acceptCallbacks.length) return !0;
                  return function e(t, n) {
                    var r = t.modules;
                    if (!r) return [];
                    var o = [];
                    var a, i, s;

                    for (a in r) {
                      for (i in r[a][1]) {
                        ((s = r[a][1][i]) === n || Array.isArray(s) && s[s.length - 1] === n) && o.push(a);
                      }
                    }

                    t.parent && (o = o.concat(e(t.parent, n)));
                    return o;
                  }(a.parcelRequire, n).some(function (t) {
                    return e(a.parcelRequire, t);
                  });
                }(a.parcelRequire, e.id) && (n = !0);
              }), (n = n || t.assets.every(function (e) {
                return "css" === e.type && e.generated.js;
              })) ? (console.clear(), t.assets.forEach(function (e) {
                !function e(t, n) {
                  var r = t.modules;
                  if (!r) return;

                  if (r[n.id] || !t.parent) {
                    var o = new Function("require", "module", "exports", n.generated.js);
                    n.isNew = !r[n.id], r[n.id] = [o, n.deps];
                  } else t.parent && e(t.parent, n);
                }(a.parcelRequire, e);
              }), o.forEach(function (e) {
                !function (e, t) {
                  var n = e.cache[t];
                  e.hotData = {}, n && (n.hot.data = e.hotData);
                  n && n.hot && n.hot._disposeCallbacks.length && n.hot._disposeCallbacks.forEach(function (t) {
                    t(e.hotData);
                  });
                  if (delete e.cache[t], e(t), (n = e.cache[t]) && n.hot && n.hot._acceptCallbacks.length) n.hot._acceptCallbacks.forEach(function (e) {
                    e();
                  });
                }(e[0], e[1]);
              })) : window.location.reload();
            }

            if ("reload" === t.type && (d.close(), d.onclose = function () {
              location.reload();
            }), "error-resolved" === t.type && (console.log("[parcel] ✨ Error resolved"), p()), "error" === t.type) {
              console.error("[parcel] 🚨  " + t.error.message + "\n" + t.error.stack), p();

              var s = function (e) {
                var t = document.createElement("div");
                t.id = i;
                var n = document.createElement("div"),
                    r = document.createElement("pre");
                return n.innerText = e.error.message, r.innerText = e.error.stack, t.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + n.innerHTML + "</div><pre>" + r.innerHTML + "</pre></div>", t;
              }(t);

              document.body.appendChild(s);
            }
          };
        }

        function p() {
          var e = document.getElementById(i);
          e && e.remove();
        }
      }, {}]
    }, {}, ["node_modules/parcel/src/builtins/hmr-runtime.js", "index.js"]);
  }, {}]
}, {}, ["M3Bo"], null);
},{}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55428" + '/');

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
},{}]},{},["../../node_modules/parcel/src/builtins/hmr-runtime.js","helsinkijs.org.e31bb0bc.f0be5f1f.js"], null)
//# sourceMappingURL=/helsinkijs.org.e31bb0bc.f0be5f1f.0bc1f80f.js.map