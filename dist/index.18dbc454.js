// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"54dwi":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _translation = require("../../mock/translation");
var _translationDefault = parcelHelpers.interopDefault(_translation);
var _image = require("../../mock/image");
var _imageDefault = parcelHelpers.interopDefault(_image);
document.addEventListener('DOMContentLoaded', ()=>{
    const result = document.getElementById('result');
    // form
    const form = document.forms.search;
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const { value  } = e.currentTarget.elements[0];
        console.log(value);
        const translationNode = await getTranslateText(value);
        const imageNode = await getImage(value);
        result.appendChild(translationNode);
        result.appendChild(imageNode);
    // e.currentTarget.reset();
    });
});
async function getImage(text) {
    try {
        const data = await fetch(`/api/search?q=${text}&tbm=isch`, {
            method: 'GET'
        });
        const html = await data.text();
        // mock
        // const html = imageMock;
        parser = new DOMParser();
        doc = parser.parseFromString(html, 'text/html');
        // TODO
        return doc.body.querySelectorAll('div')[5];
    } catch (error) {
        console.error(console.error);
    }
}
async function getTranslateText(text) {
    const from_language = 'english';
    const to_language = 'russian';
    text = from_language + '-' + to_language + '/' + encodeURIComponent(text);
    try {
        const data = await fetch(`/api/translation/${text}`, {
            method: 'GET'
        });
        const html = await data.text();
        // mock
        // const html = translationMock;
        parser = new DOMParser();
        doc = parser.parseFromString(html, 'text/html');
        return doc.querySelector('div[id="translations-content"]');
    } catch (error) {
        console.error(console.error);
    }
}

},{"../../mock/translation":"dhz5P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../mock/image":"8RavG"}],"dhz5P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>run - Translation into Russian - examples English | Reverso Context</title>
<meta name="description" content="Translations in context of &quot;run&quot; in English-Russian from Reverso Context: run by, run away, run out, in the long run, run into" />
<link rel="alternate" hreflang="en" href="https://context.reverso.net/translation/english-russian/run" /><link rel="alternate" hreflang="ru" href="https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/run" /><link rel="alternate" href="android-app://com.softissimo.reverso.context/reversocontext/context.reverso.net/translation/english-russian/run" />
  <meta name="apple-itunes-app" content="app-id=919979642, app-argument=reversocontext://context.reverso.net/translation/english-russian/run"/>
<link rel="canonical" href="https://context.reverso.net/translation/english-russian/run"/>
<script>
  var request = {
    srctext: "run",
    trgtext: "",
    srclang: "en",
    trglang: "ru",
    rpage: 1,
    rmode: 0,
    original: "run"
  };
</script>
<meta name="keywords" content="words in context, translation in context, Reverso Context, idioms in context,  translation search engine, idiomatic translation, idioms translation, translation example, translation examples, Arabic, German, Spanish, French, Hebrew, Italian, Japanese, Dutch, Polish, Portuguese, Romanian, Russian, Swedish, Turkish, Ukrainian, Chinese, English, idiomatic translations, bilingual concordancer, contextual dictionary, example of use, examples of use, translations in context, context, language lovers, contextual example, idiomatic expressions, dictionary, examples and idioms, concordance tool">
  <meta name="google-play-app" content="app-id=com.softissimo.reverso.context">
  <meta name="google" content="notranslate"/>
<meta name="viewport" content="initial-scale=1.0">
<link rel="preload" href="//cdn.reverso.net/fonts/montserrat/latin-n400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="//cdn.reverso.net/fonts/roboto/latin-n500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="//cdn.reverso.net/fonts/robotoc/latin-n400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://cdn.reverso.net/context/v60500/fonts/contexticons.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" crossorigin href="https://sdk.privacy-center.org">
<link rel="preconnect" crossorigin href="https://www.googletagmanager.com">
<link rel="preconnect" crossorigin href="https://www.google-analytics.com">
<script defer src="//cdn.reverso.net/rumjs/conf/rum.config.context.min.js"></script>
<script>
  
  if(typeof window.request === "undefined") {
    window.request = {
      srctext: "",
      trgtext: "",
      srclang: "en",
      trglang: "ru",
      rpage: 1,
      rmode: 0
    };
  }
  var logLOCD = false;
  var context_path = '';
  var special_chars = "،؟י¬¿¡ºª·؛。、・゠＝";
  var is_rtl = false;
  
  var register_link = "https://account.reverso.net/register/context.reverso.net/en?utm_source=contextweb&utm_medium={0}&utm_campaign=register";
  var login_link = "https://account.reverso.net/login/context.reverso.net/en?utm_source=contextweb&utm_medium={0}&utm_campaign=login";
  
  window.mobilecheck = function() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
        check = true
      })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  
  var device = (window.mobilecheck() ? "mobile" : (window.innerWidth>1024 ? "desktop" : "tablet"));
</script>
<script src="//cdn.reverso.net/abp/v1/Static/JS/advertising.js?ch=1&ad_code="></script>
  <script src="//cdn.reverso.net/abp/v1/Static/JS/advertising.js?ch=2&ad_code="></script>
<script>
  var rumjs = rumjs || {};
  rumjs.que = rumjs.que || [];
  rumjs.gaque = rumjs.gaque || function(){
    (rumjs.gaque.q=rumjs.gaque.q||[]).push(arguments);
    
  };
  
  rumjs.gaque('send', 'pageview', '/bst/result/en-ru/1w/translations-precomputed');
  
  rumjs.que.push(function() {
    var gaCustomDimensions = {};
    gaCustomDimensions['dimension1'] = logLOCD ? (is_premium ? 'premium' : 'registered') : 'anonymous';
    
    	gaCustomDimensions['dimension4'] = typeof(adblock)=='undefined' ? 'yes' : (typeof(abp)!='undefined' && abp ? 'abp' : 'no' );
    
    
    rumjs.config.init();
    rumjs.business.init(gaCustomDimensions);
    rumjs.fb.trackEvent('PageView');
  });
</script><style class="font-family">
@font-face{font-family:'contexticons';src:url('https://cdn.reverso.net/context/v60500/fonts/contexticons.woff2') format('woff2'),url('https://cdn.reverso.net/context/v60500/fonts/contexticons.ttf') format('truetype'),url('https://cdn.reverso.net/context/v60500/fonts/contexticons.woff') format('woff'),url('https://cdn.reverso.net/context/v60500/fonts/contexticons.svg#contexticons') format('svg');font-weight: normal;font-style: normal;font-display: swap;}

/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/cyrillicext-n400.woff2') format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/cyrillic-n400.woff2') format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/vietnamese-n400.woff2') format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/latinext-n400.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/latin-n400.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/cyrillicext-n500.woff2') format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/cyrillic-n500.woff2') format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/vietnamese-n500.woff2') format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/latinext-n500.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/latin-n500.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/cyrillicext-n600.woff2') format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/cyrillic-n600.woff2') format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/vietnamese-n600.woff2') format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/latinext-n600.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('//cdn.reverso.net/fonts/montserrat/latin-n600.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/cyrillicext-n500.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/cyrillic-n500.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/greekext-n500.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/greek-n500.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/vietnamese-n500.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/latinext-n500.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/roboto/latin-n500.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/cyrillicext-n400.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/cyrillic-n400.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/greek-n400.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/greek-n400.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/vietnamese-n400.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/latinext-n400.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(//cdn.reverso.net/fonts/robotoc/latin-n400.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
  margin: 0 auto;
  background-color: #FFFFFF;
  font-family: 'Montserrat', 'Tahoma', 'Meiryo', sans-serif;
  font-weight: 400;
  text-align: center;
  min-width: 320px;
  height: 100%;
  transition: 1s ease transform;
}
</style><link rel="stylesheet preload" type="text/css" media="all" href="https://cdn.reverso.net/context/v60500/css/gensearchrca.css" as="style">
<link rel="stylesheet preload" type="text/css" media="all" href="https://cdn.reverso.net/context/v60500/css/resultpage.css" as="style">
<link rel="stylesheet preload" type="text/css" media="screen and (max-width: 1024px)" href="https://cdn.reverso.net/context/v60500/css/genresponsive.css" as="style">
<script defer src="//cdn.reverso.net/ramjs/conf/ram.config.context.min.js"></script>
  <script>
  
    var tagsArray = [device]; // for defineGoogleSlots
    
    if (device !== "mobile") {
    	tagsArray.push('native');
    }
    
    
    var adTargeting = {}
    adTargeting['Interface'] = 'EN';
    adTargeting['device'] = device;
    adTargeting['Status'] = 'prod';
    
    adTargeting['Direction'] = 'EN-RU';
    
  
    var ramjs = ramjs || {};
    ramjs.que = ramjs.que || [];
    
    ramjs.que.push( function() {
      ramjs.config.init(adTargeting);
      
      ramjs.business.init(tagsArray);
    	if (device === "desktop") {
    		ramjs.que.push(["initdesktop"]);
    	}
    });
  </script><script>
  </script>
<link href="https://cdn.reverso.net/context/v60500/images/reverso180.png" rel="image_src" />
<link rel="apple-touch-icon" href="https://cdn.reverso.net/context/v60500/images/reverso180.png">
<link rel="shortcut icon" href="https://cdn.reverso.net/context/v60500/images/reverso-context.ico">
</head>
  <body class="locked mobile-locked  noticed">
    <div class="loading-pannel">
  <span class="icon"></span>
</div>
<header id="reverso-header-2020">
    <div class="reverso-header-wrapper">
        <div class="reverso-header-left-wrapper">
            <div class="reverso-logo-wrapper">
                <a class="reverso-context-logo" title="Reverso Context: the search engine for translations in context" href="/translation/">
                  <span class="logo rev-logo">
                    <span class="icon reverso-logo"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                  </span>
                  <span class="icon rev-title">
                    <span class="icon reverso-text"></span>
                    <span class="icon reverso-context-text"><span class="path1"></span><span class="path2"></span></span>
                  </span>
                </a>
            </div>
            <nav class="reverso-links-wrapper">
                <a class="translation-link product" href="https://www.reverso.net/text-translation">
                  <span>Translation</span>
                </a>
                <a class="context-link product current" href="/translation/">
                  <span>Context</span>
                </a>
                <a class="speller-link product" href="https://www.reverso.net/spell-checker/english-spelling-grammar/">
                  <span>Grammar Check</span>
                </a>
                <a class="synonyms-link product" href="https://synonyms.reverso.net/synonym/">
                  <span>Synonyms</span>
                </a>
                <a class="conjugator-link product" href="https://conjugator.reverso.net/conjugation-english.html">
                  <span>Conjugation</span>
                </a>
                <div id="more-products-menu" class="selector closed nonselectable">
                    <div class="option front">
                        <span class="icon horizontal-dots"></span>
                    </div>
                    <div class="drop-down">
                        <a class="option conjugator" href="https://conjugator.reverso.net/conjugation-english.html">
                            <span class="icon conjugator"></span>
                            <span class="text">Conjugation</span>
                        </a>
                        <a class="option document" href="https://documents.reverso.net/Default.aspx?lang=en&utm_source=reversocontext&utm_medium=textlink&utm_campaign=menu">
                            <span class="icon document"></span>
                            <span class="text">Documents</span>
                        </a>
                        <a class="option dictionary" href="https://dictionary.reverso.net">
                            <span class="icon dictionary"></span>
                            <span class="text">Dictionary</span>
                        </a>
                        <a class="option collab-dict" href="https://dictionary.reverso.net/CollabDict.aspx?srcLang=-1&targLang=-1&lang=en">
                            <span class="icon collab-dict"></span>
                            <span class="text">Collaborative Dictionary</span>
                        </a>
                        <a class="option grammar" href="https://grammar.reverso.net/">
                            <span class="icon book"></span>
                            <span class="text">Grammar</span>
                        </a>
                        <a class="option expressio" href="https://www.expressio.fr/">
                            <span class="icon expressio"></span>
                            <span class="text">Expressio</span>
                        </a>
                        <a class="option corporate" href="https://www.corporate-translation.reverso.com/?lang=en">
                            <span class="icon briefcase"></span>
                            <span class="text">Reverso Corporate</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="reverso-header-right-wrapper">
            <a class="dapp-dl-button " data-os="mac" data-dl="/translation/windows-mac-app/thanks?utm_source=contextweb&utm_medium=headerbutton&utm_campaign=ctxtresultpage" title="Download for free<span class='newlink'>Translate text from any application or website in just one click.</span>" href="https://dl.reverso.net/desktop-app/macos?utm_source=contextweb&utm_medium=headerbutton&utm_campaign=ctxtresultpage">
                  <span class="icon download"></span>
                  <span class="text">Download for Mac</span>
                </a>
            <div id="reverso-user-menu" class="reverso-user-menu selector closed nonselectable  ">
    <div class="option front">
  		<span class="icon user"></span>
        <span class="login">Log in</span>
      <span class="icon cancel"></span>
    </div>
    <div class="drop-down">
  		<a class="option register sep-24" href="https://account.reverso.net/register/context.reverso.net/en?utm_source=contextweb&utm_medium=usertopmenu&utm_campaign=register">
            <span class="icon add-user"></span>
            <span class="text">Register</span>
        </a>
        <a class="option login sep-24" href="https://account.reverso.net/login/context.reverso.net/en?utm_source=contextweb&utm_medium=usertopmenu&utm_campaign=login">
            <span class="icon login"></span>
            <span class="text">Log in</span>
        </a>
        <span id="fb-content" class="option facebook sep-24">
            <span class="icon facebook"></span>
            <span class="text">Connect with Facebook</span>
        </span>
        <span id="google-content" class="option google sep-24">
            <span class="icon google"></span>
            <span class="text">Connect with Google</span>
        </span>
        <span id="apple-content" class="option apple sep-24">
            <span class="icon appleinc"></span>
            <span class="text">Connect with Apple</span>
        </span>
        <div class="sep-full mobile-hidden"></div>
        <a class="option premium" href="https://documents.reverso.net/Pricing.aspx?lang=en&origin=1">
            <span class="icon crown-unfilled"></span>
            <span class="text">Reverso Premium</span>
        </a>
      <div class="sep-full"></div>
      <div class="space-filler"></div>
    </div>
</div><div id="interface-lang-menu" class="selector closed nonselectable">
                <div class="option front">
                    <span class="text">en</span>
                    <span class="sel-arrow icon down-caret-full"></span>
                </div>
                <div class="drop-down">
                  <a href="/%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/" class="option" data-value="ar">العربية</a>
                  <a href="/%C3%BCbersetzung/" class="option" data-value="de">Deutsch</a>
                  <a href="/translation/" class="option selected" data-value="en">English</a>
                  <a href="/traduccion/" class="option" data-value="es">Español</a>
                  <a href="/traduction/" class="option" data-value="fr">Français</a>
                  <a href="/%D7%AA%D7%A8%D7%92%D7%95%D7%9D/" class="option" data-value="he">עברית</a>
                  <a href="/traduzione/" class="option" data-value="it">Italiano</a>
                  <a href="/%E7%BF%BB%E8%A8%B3/" class="option" data-value="ja">日本語</a>
                  <a href="/vertaling/" class="option" data-value="nl">Nederlands</a>
                  <a href="/t%C5%82umaczenie/" class="option" data-value="pl">Polski</a>
                  <a href="/traducao/" class="option" data-value="pt">Português</a>
                  <a href="/traducere/" class="option" data-value="ro">Română</a>
                  <a href="/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/" class="option" data-value="ru">Русский</a>
                  <a href="/%C3%B6vers%C3%A4ttning/" class="option" data-value="sv">Svenska</a>
                  <a href="/%C3%A7eviri/" class="option" data-value="tr">Türkçe</a>
                  <a href="/%E7%BF%BB%E8%AF%91/" class="option" data-value="zh">中文</a>
                  </div>
            </div>
            <div id="mobile-info-menu" class="selector closed nonselectable">
                <span class="option front icon hamburger-menu"></span>
                <span class="option front icon cancel"></span>
                <div class="floating-menu drop-down">
                    <a aria-label="Download our <b>free</b> app" class="option mobileapp grey-item" href="/translation/mobile-app?utm_source=contextweb&utm_medium=banner&utm_campaign=ctxtmobilemenu&utm_content=ctxtappdl">
                      <span class="mapp-title">
                        <span class="mapp-icon">
                          <span class="icon reverso-logo-white"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                        </span>
                        <span class="text">Download our free app</span>
                      </span>
                      <span class="badge and no-loading en"></span>
                      </a>
                    <div class="sep-full"></div>
                    <a class="option translation sep-24" href="https://www.reverso.net/text-translation">
                        <span class="icon lang"></span>
                        <span class="text">Translation</span>
                    </a>
                    <a class="option context sep-24" href="/translation/">
                        <span class="icon reverse"></span>
                        <span class="text">Context</span>
                    </a>
                    <a class="option speller sep-24" href="https://www.reverso.net/spell-checker/english-spelling-grammar/">
                        <span class="icon spellcheck"></span>
                        <span class="text">Grammar Check</span>
                    </a>
                    <a class="option synonyms sep-24" href="https://synonyms.reverso.net/synonym/">
                        <span class="icon synonyms"></span>
                        <span class="text">Synonyms</span>
                    </a>
                    <a class="option conjugator sep-24" href="https://conjugator.reverso.net/conjugation-english.html">
                        <span class="icon conjugator"></span>
                        <span class="text">Conjugation</span>
                    </a>
                    <a class="option document sep-24 hidden" href="https://documents.reverso.net/Default.aspx?lang=en&utm_source=reversocontext&utm_medium=textlink&utm_campaign=menu">
                        <span class="icon document"></span>
                        <span class="text">Documents</span>
                    </a>
                    <a class="option dictionary sep-24 hidden" href="https://dictionary.reverso.net">
                        <span class="icon dictionary"></span>
                        <span class="text">Dictionary</span>
                    </a>
                    <a class="option collab-dict sep-24 hidden" href="https://dictionary.reverso.net/CollabDict.aspx?srcLang=-1&targLang=-1&lang=en">
                        <span class="icon collab-dict"></span>
                        <span class="text">Collaborative Dictionary</span>
                    </a>
                    <a class="option grammar sep-24 hidden" href="https://grammar.reverso.net/">
                        <span class="icon book"></span>
                        <span class="text">Grammar</span>
                    </a>
                    <a class="option expressio sep-24 hidden" href="https://www.expressio.fr/">
                        <span class="icon expressio"></span>
                        <span class="text">Expressio</span>
                    </a>
                    <a class="option corporate hidden" href="https://www.corporate-translation.reverso.com/?lang=en">
                        <span class="icon briefcase"></span>
                        <span class="text">Reverso Corporate</span>
                    </a>
                    <button class="option more-menu">More<span class="icon down-arrow"></span></button>
                    <div class="sep-full"></div>
                    <div class="interface-langs-select grey-item">
                        <span class="icon web"></span>
                        <select>
                          <option class="option"  value="/%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/" data-value="ar">العربية</option>
                          <option class="option"  value="/%C3%BCbersetzung/" data-value="de">Deutsch</option>
                          <option class="option" selected value="/translation/" data-value="en">English</option>
                          <option class="option"  value="/traduccion/" data-value="es">Español</option>
                          <option class="option"  value="/traduction/" data-value="fr">Français</option>
                          <option class="option"  value="/%D7%AA%D7%A8%D7%92%D7%95%D7%9D/" data-value="he">עברית</option>
                          <option class="option"  value="/traduzione/" data-value="it">Italiano</option>
                          <option class="option"  value="/%E7%BF%BB%E8%A8%B3/" data-value="ja">日本語</option>
                          <option class="option"  value="/vertaling/" data-value="nl">Nederlands</option>
                          <option class="option"  value="/t%C5%82umaczenie/" data-value="pl">Polski</option>
                          <option class="option"  value="/traducao/" data-value="pt">Português</option>
                          <option class="option"  value="/traducere/" data-value="ro">Română</option>
                          <option class="option"  value="/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/" data-value="ru">Русский</option>
                          <option class="option"  value="/%C3%B6vers%C3%A4ttning/" data-value="sv">Svenska</option>
                          <option class="option"  value="/%C3%A7eviri/" data-value="tr">Türkçe</option>
                          <option class="option"  value="/%E7%BF%BB%E8%AF%91/" data-value="zh">中文</option>
                          </select>
                    </div>
                    <div class="sep-full"></div>
                    <div class="space-filler"></div>
                </div>
            </div>
        </div>
    </div>
</header>
<div id="wrapper" class=" results">
      <section id="body-content">
  <div class="right-content">
    <section id="subtop-content">
  <div id="title-content">
    </div>
  <div class="user-profile">
    <a href="https://documents.reverso.net/Pricing.aspx?lang=en&origin=1" class="rca-no-ads"><span class="icon crown-unfilled"></span><span>Premium</span><span class="icon right-arrow"></span></a>
    <a href="/history" class="button history" title="See the whole history">
        <span class="icon history"></span>
        <span class="text">History</span>
      </a>
    <a href="/favourites" class="button favourites" title="See all favourites">
        <span class="icon non-favourite"></span>
        <span class="text">Favourites</span>
      </a>
    <a class="button info" href="/translation/about" title="About Reverso Context">
      <span class="icon help_outline"></span>
    </a>
  </div>
  </section>
<div id="rca">
  <span class="rca-title">Advertising</span>
  <div id='div-gpt-ad-Reverso_Ctxt_D_Result_300x250_ATF' class="rca">
    <script>
      if(!window.mobilecheck()) {
        ramjs.que.push(function() { ramjs.business.displayGoogletagSlot('div-gpt-ad-Reverso_Ctxt_D_Result_300x250_ATF') });
      }
    </script>
  </div>
  <div id="side-badges">
    <a id="dapp-badge" class="mobile-hidden mac" data-os="mac" data-dl="/translation/windows-mac-app/thanks?utm_source=contextweb&utm_medium=appbutton&utm_campaign=ctxtresultpage" href="https://dl.reverso.net/desktop-app/macos?utm_source=contextweb&utm_medium=appbutton&utm_campaign=ctxtresultpage">
      <span class="icon dl-computer"></span>
      <span class="text"><strong>Download for Mac</strong> It's free</span>
    </a>
    <div class="badges pannel">
      <a class="text" href="/translation/mobile-app?utm_source=contextweb&utm_medium=banner&utm_campaign=ctxtresultpage&utm_content=ctxtappdl">Download our <b>free</b> app</a>
      <a aria-label="Get it on Google Play - Reverso Context" href="/translation/mobile-app?utm_source=contextweb&utm_medium=banner&utm_campaign=ctxtresultpage&utm_content=ctxtappdl" class="badge and no-loading en"></a>
      <a aria-label="Download on the App Store - Reverso Context" href="/translation/mobile-app?utm_source=contextweb&utm_medium=banner&utm_campaign=ctxtresultpage&utm_content=ctxtappdl" class="badge ios no-loading en"></a>
    </div>
  </div>
  <span class="rca-title">Advertising</span>
  <div id='div-gpt-ad-Reverso_Ctxt_D_Result_300x250_BTF' class="rca">
    <script>
      if(!window.mobilecheck()) {
        ramjs.que.push(function() { ramjs.business.displayGoogletagSlot('div-gpt-ad-Reverso_Ctxt_D_Result_300x250_BTF') });
      }
    </script>
  </div>
  <span class="rca-title disabled tall-rca">Advertising</span>
    <div id='div-gpt-ad-Reverso_Ctxt_D_Result_300x600_BTF' class="rca disabled tall-rca">
      <script>
        if(!window.mobilecheck()) {
          ramjs.que.push(function() { ramjs.business.displayGoogletagSlot('div-gpt-ad-Reverso_Ctxt_D_Result_300x600_BTF') });
        }
      </script>
    </div>
  <a href="https://documents.reverso.net/Pricing.aspx?lang=en&origin=1" class="rca-no-ads hidden">No ads with Premium</a>
</div>
</div>
  <div class="left-content">
    <div id="register-popup-bottom" class="popup closed">
  <div class="header">
    <span class="title">Join Reverso, it's <b>free and fast</b>!</span>
    <button class="icon up-arrow" title="Close"></button>
  </div>
  <div class="body wide-container">
    <a class="button register" href="https://account.reverso.net/register/context.reverso.net/en?utm_source=contextweb&utm_medium=floatingpopup&utm_campaign=register"><span class="icon add-user"></span>Register</a>
    <a class="button login" href="https://account.reverso.net/login/context.reverso.net/en?utm_source=contextweb&utm_medium=floatingpopup&utm_campaign=login"><span class="icon login"></span>Login</a>
  </div>
</div>
<section id="search-content">
  <div id="search">
    <div id="search-input" class="ltr">
      <input tabindex="0" type="text" name="text" id="entry" value="run" autocapitalize="none" autocomplete="off" class="keyboardInput ui-autocomplete-input ltr" placeholder="Enter a word, expression or long text"/>
      <div class="icons">
        <button class="icon exclude" title="Click here to exclude some words from your search. For instance, word1 -{word2} : will search phrases that contain word1 and NOT word2"></button>
        <button class="icon cancel" title="Clear this input"></button>
      </div>
    </div>
    <div id="pair-selector" class="nonselectable">
      <div id="src-selector" class="selector double closed" tabindex="0">
        <span class="sel-arrow icon down-caret"></span>
        <span class="option front" data-value="en">English</span>
        <span class="space-filler"></span>
        <div class="drop-down">
          <span class="option" data-value="ar">Arabic</span>
          <span class="option" data-value="de">German</span>
          <span class="option selected" data-value="en">English</span>
          <span class="option" data-value="es">Spanish</span>
          <span class="option" data-value="fr">French</span>
          <span class="option" data-value="he">Hebrew</span>
          <span class="option" data-value="it">Italian</span>
          <span class="option" data-value="ja">Japanese</span>
          <span class="option" data-value="nl">Dutch</span>
          <span class="option" data-value="pl">Polish</span>
          <span class="option" data-value="pt">Portuguese</span>
          <span class="option" data-value="ro">Romanian</span>
          <span class="option" data-value="ru">Russian</span>
          <span class="option" data-value="sv">Swedish</span>
          <span class="option" data-value="tr">Turkish</span>
          <span class="option" data-value="uk">Ukrainian</span>
          <span class="option" data-value="zh">Chinese</span>
          </div>
      </div>
      <div class="swap-content" title="Change the translation direction">
        <div class="icons" tabindex="0">
          <span class="icon reverso-top"></span>
          <span class="icon reverso-bottom"></span>
        </div>
      </div>
      <div id="trg-selector" class="selector double closed" tabindex="0">
        <span class="sel-arrow icon down-caret"></span>
        <span class="option front" data-value="ru">Russian</span>
        <span class="space-filler"></span>
        <div class="drop-down">
          <span class="option" data-value="synonyms">Synonyms<span class="icon synonyms"></span></span>
          <span class="option" data-value="ar">Arabic</span>
          <span class="option" data-value="de">German</span>
          <span class="option" data-value="en">English</span>
          <span class="option" data-value="es">Spanish</span>
          <span class="option" data-value="fr">French</span>
          <span class="option" data-value="he">Hebrew</span>
          <span class="option" data-value="it">Italian</span>
          <span class="option" data-value="ja">Japanese</span>
          <span class="option" data-value="nl">Dutch</span>
          <span class="option" data-value="pl">Polish</span>
          <span class="option" data-value="pt">Portuguese</span>
          <span class="option" data-value="ro">Romanian</span>
          <span class="option selected" data-value="ru">Russian</span>
          <span class="option" data-value="sv">Swedish</span>
          <span class="option" data-value="tr">Turkish</span>
          <span class="option" data-value="uk">Ukrainian</span>
          <span class="option" data-value="zh">Chinese</span>
          <span class="option external" data-value="uk-ext">Ukrainian<span class="icon launch"></span></span>
        </div>
      </div>
    </div>
    <button id="search-button" class="icon search" title="Search" tabindex="0"></button>
  </div>
  <div class="exclude-content">
    <button class="icon add disabled"></button>
    <div class="input-content">
      <input placeholder="Exclude from search">
    </div>
  </div>
  </section>
<section id="notice-content">
  <div id="search-links" >
    <button class="voice2 icon stopped" title="Pronunciation"></button>
    <a class="icon synonyms" data-value="synonyms" href="https://synonyms.reverso.net/synonym/en/run" title="Search in Synonyms"></a>
    <a class="icon conjugator" data-value="conjugator" href="https://conjugator.reverso.net/conjugation-english-verb-run.html" title="Search in Conjugation"></a>
    <button class="icon web" data-value="web" data-url="https://www.google.com/search?hl=en&q=" title="Search in Web<br><span class='newlink'><span class='icon launch'></span>This link will open in a new tab</span>"></button>
    <button class="icon wikipedia " data-value="wikipedia" data-url="https://en.wikipedia.org/wiki/" title="Search in Wikipedia<br><span class='newlink'><span class='icon launch'></span>This link will open in a new tab</span>"></button>
    <button class="icon images " data-value="images" data-url="https://www.google.com/search?hl=en&tbm=isch&q=" title="Search in Images<br><span class='newlink'><span class='icon launch'></span>This link will open in a new tab</span>"></button>
    <a class="icon dictionary" data-value="definition" href="https://dictionary.reverso.net/english-definition/run" title="Search in Definition"></a>
    </div>
  <div id="conj_search" class="notice">
      <a class="message" class="suggestion" href="https://conjugator.reverso.net/conjugation-english-verb-run.html">Conjugate this verb</a>
    </div>
  <div id="dym-content" class="notice suggested search " data-pair="null">
    <span class="text">Suggestions:</span>
    <a class="dym-link" href="/translation/english-russian/rerun?d=0">rerun</a>
        <script>rumjs.gaque("send", "event", "didyoumean", "display-suggestedsearch", "en-ru");</script>
    <a class="dym-link seealso-link mobile-hidden" href="/translation/english-russian/run+by">run by</a>
        <a class="dym-link seealso-link mobile-hidden" href="/translation/english-russian/run+out">run out</a>
        <a class="dym-link seealso-link mobile-hidden" href="/translation/english-russian/long+run">long run</a>
        <a class="dym-link seealso-link mobile-hidden" href="/translation/english-russian/run+into">run into</a>
        <script>rumjs.gaque("send", "event", "seealso", "display", "en-ru");</script>
    </div>
  <div id="rude" class="notice">
    <i class="icon warning"></i>
    <span class="message">These examples may contain rude words based on your search.</span>
  </div>
  <div id="colloquial" class="notice">
    <i class="icon warning"></i>
    <span class="message">These examples may contain colloquial words based on your search.</span>
  </div>
</section>
<section id="top-results">
  <section id="search-options" class="">
    <button class="icon down-arrow detailed-view closed" title="Show details and suggestions"></button>
    <div class="title-content">
      <h1>Translation of &quot;run&quot; in Russian</h1>
    </div>
  </section>
  <div id="pos-filters">

      <button class="v" data-pos="v." data-index="0" title="Display all translations tagged as Verb">
        Verb</button>
      <button class="n" data-pos="n." data-index="1" title="Display all translations tagged as Noun">
        Noun</button>
      <button class="adjp" data-pos="adj." data-index="2" title="Display all translations tagged as Adjective&nbsp;/&nbsp;Participle">
        Adjective / Participle</button>
      <div id="synonyms-button-container" >
      <a id="synonyms-button" class="icon synonyms" title="Synonyms" dir="ltr" href="https://synonyms.reverso.net/synonym/en/run" ></a>
	     </div>
      </div> <div id="filtered-entry" class="wide-container">
    </div>
    <div id="translations-content" class="wide-container">
    <a href="/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='bezhat&apos;' data-pos-index='0' data-term="бежать" data-posGroup="1" data-freq="2351" title="<div class='nobold'>See examples translated by <em class='translation'>бежать</em><br>Verb<br>bezhat'<br>(2351 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          бежать</a>
      <a href="/translation/russian-english/%D1%81%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='sbezhat&apos;' data-pos-index='0' data-term="сбежать" data-posGroup="1" data-freq="990" title="<div class='nobold'>See examples translated by <em class='translation'>сбежать</em><br>Verb<br>sbezhat'<br>(990 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          сбежать</a>
      <a href="/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B0%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='begat&apos;' data-pos-index='0' data-term="бегать" data-posGroup="1" data-freq="918" title="<div class='nobold'>See examples translated by <em class='translation'>бегать</em><br>Verb<br>begat'<br>(918 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          бегать</a>
      <a href="/translation/russian-english/%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%B8%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='zapustit&apos;' data-pos-index='0' data-term="запустить" data-posGroup="1" data-freq="878" title="<div class='nobold'>See examples translated by <em class='translation'>запустить</em><br>Verb<br>zapustit'<br>(878 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          запустить</a>
      <a href="/translation/russian-english/%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='upravlyat&apos;' data-pos-index='0' data-term="управлять" data-posGroup="1" data-freq="843" title="<div class='nobold'>See examples translated by <em class='translation'>управлять</em><br>Verb<br>upravlyat'<br>(843 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          управлять</a>
      <a href="/translation/russian-english/%D1%83%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='ubezhat&apos;' data-pos-index='0' data-term="убежать" data-posGroup="1" data-freq="812" title="<div class='nobold'>See examples translated by <em class='translation'>убежать</em><br>Verb<br>ubezhat'<br>(812 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          убежать</a>
      <a href="/translation/russian-english/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%82%D1%8C" class="translation ltr dict v" data-pos='[v]' data-trans='rabotat&apos;' data-pos-index='0' data-term="работать" data-posGroup="1" data-freq="791" title="<div class='nobold'>See examples translated by <em class='translation'>работать</em><br>Verb<br>rabotat'<br>(791 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          работать</a>
      <a href="/translation/russian-english/%D0%B1%D0%B0%D0%BB%D0%BB%D0%BE%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F" class="translation ltr dict first v" data-pos='[v]' data-trans='ballotirovat&apos;sya' data-pos-index='0' data-term="баллотироваться" data-posGroup="1" data-freq="551" title="<div class='nobold'>See examples translated by <em class='translation'>баллотироваться</em><br>Verb<br>ballotirovat'sya<br>(551 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          баллотироваться</a>
      <a href="/translation/russian-english/%D0%B1%D0%B5%D0%B3" class="translation ltr dict n" data-pos='[nm]' data-trans='beg' data-inflected='бегах}--{бегу}--{бега}--{бегом' data-pos-index='1' data-term="бег" data-posGroup="2" data-freq="1077" title="<div class='nobold'>See examples translated by <em class='translation'>бег</em><br>Noun - Masculine<br>beg<br>(1077 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Masculine"></span>
                  </div>
          бег</a>
      <a href="/translation/russian-english/%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA" class="translation ltr dict n" data-pos='[nm]' data-trans='zapusk' data-inflected='запуска' data-pos-index='1' data-term="запуск" data-posGroup="2" data-freq="704" title="<div class='nobold'>See examples translated by <em class='translation'>запуск</em><br>Noun - Masculine<br>zapusk<br>(704 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Masculine"></span>
                  </div>
          запуск</a>
      <a href="/translation/russian-english/%D0%BF%D0%B5%D1%80%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%B5" class="translation ltr dict mobile-hidden n" data-pos='[nf]' data-trans='perspektive' data-pos-index='1' data-term="перспективе" data-posGroup="2" data-freq="471" title="<div class='nobold'>See examples translated by <em class='translation'>перспективе</em><br>Noun - Feminine<br>perspektive<br>(471 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Feminine"></span>
                  </div>
          перспективе</a>
      <a href="/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%B6%D0%BA%D0%B0" class="translation ltr dict mobile-hidden n" data-pos='[nf]' data-trans='probezhka' data-inflected='пробежку' data-pos-index='1' data-term="пробежка" data-posGroup="2" data-freq="235" title="<div class='nobold'>See examples translated by <em class='translation'>пробежка</em><br>Noun - Feminine<br>probezhka<br>(235 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Feminine"></span>
                  </div>
          пробежка</a>
      <a href="/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%B3" class="translation ltr dict mobile-hidden n" data-pos='[nm]' data-trans='probeg' data-pos-index='1' data-term="пробег" data-posGroup="2" data-freq="69" title="<div class='nobold'>See examples translated by <em class='translation'>пробег</em><br>Noun - Masculine<br>probeg<br>(69 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Masculine"></span>
                  </div>
          пробег</a>
      <a href="/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B3%D0%BE%D0%BD" class="translation ltr dict mobile-hidden n" data-pos='[nm]' data-trans='progon' data-pos-index='1' data-term="прогон" data-posGroup="2" data-freq="55" title="<div class='nobold'>See examples translated by <em class='translation'>прогон</em><br>Noun - Masculine<br>progon<br>(55 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Masculine"></span>
                  </div>
          прогон</a>
      <a href="/translation/russian-english/%D1%82%D0%B8%D1%80%D0%B0%D0%B6" class="translation ltr dict mobile-hidden n" data-pos='[nm]' data-trans='tirazh' data-pos-index='1' data-term="тираж" data-posGroup="2" data-freq="49" title="<div class='nobold'>See examples translated by <em class='translation'>тираж</em><br>Noun - Masculine<br>tirazh<br>(49 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Masculine"></span>
                  </div>
          тираж</a>
      <a href="/translation/russian-english/%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4" class="translation ltr dict first mobile-hidden n" data-pos='[nm]' data-trans='period' data-pos-index='1' data-term="период" data-posGroup="2" data-freq="44" title="<div class='nobold'>See examples translated by <em class='translation'>период</em><br>Noun - Masculine<br>period<br>(44 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="n" title="Noun - Masculine"></span>
                  </div>
          период</a>
      <div class="translation ltr dict first mobile-hidden translation-hidden adj" data-pos='[adj]' data-trans='tirazhnoye izdaniye' data-pos-index='2' data-term="тиражное издание" data-posGroup="3" data-freq="1" title="<div class='nobold'>See examples translated by <em class='translation'>тиражное издание</em><br>Adjective<br>tirazhnoye izdaniye<br>(1 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="adj" title="Adjective"></span>
                  </div>
          тиражное издание</div>
      <a href="/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B8" class="translation ltr dict mobile-hidden translation-hidden no-pos" data-trans='begi' data-term="беги" data-posGroup="6" data-freq="1403" title="<div class='nobold'>See examples translated by <em class='translation'>беги</em><br>begi<br>(1403 examples with alignment)</div>" lang='ru'>
          беги</a>
      <a href="/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B8" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='provesti' data-pos-index='0' data-term="провести" data-posGroup="4" data-freq="462" title="<div class='nobold'>See examples translated by <em class='translation'>провести</em><br>Verb<br>provesti<br>(462 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          провести</a>
      <a href="/translation/russian-english/%D1%83%D0%B1%D0%B5%D0%B3%D0%B0%D1%82%D1%8C" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='ubegat&apos;' data-pos-index='0' data-term="убегать" data-posGroup="4" data-freq="422" title="<div class='nobold'>See examples translated by <em class='translation'>убегать</em><br>Verb<br>ubegat'<br>(422 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          убегать</a>
      <a href="/translation/russian-english/%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D1%82%D1%8C" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='zapuskat&apos;' data-pos-index='0' data-term="запускать" data-posGroup="4" data-freq="367" title="<div class='nobold'>See examples translated by <em class='translation'>запускать</em><br>Verb<br>zapuskat'<br>(367 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          запускать</a>
      <a href="/translation/russian-english/%D0%B2%D0%B5%D1%81%D1%82%D0%B8" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='vesti' data-pos-index='0' data-term="вести" data-posGroup="4" data-freq="295" title="<div class='nobold'>See examples translated by <em class='translation'>вести</em><br>Verb<br>vesti<br>(295 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          вести</a>
      <a href="/translation/russian-english/%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D1%8C" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='vypolnit&apos;' data-pos-index='0' data-term="выполнить" data-posGroup="4" data-freq="271" title="<div class='nobold'>See examples translated by <em class='translation'>выполнить</em><br>Verb<br>vypolnit'<br>(271 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          выполнить</a>
      <a href="/translation/russian-english/%D1%81%D0%B1%D0%B5%D0%B3%D0%B0%D1%82%D1%8C" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='sbegat&apos;' data-pos-index='0' data-term="сбегать" data-posGroup="4" data-freq="245" title="<div class='nobold'>See examples translated by <em class='translation'>сбегать</em><br>Verb<br>sbegat'<br>(245 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          сбегать</a>
      <a href="/translation/russian-english/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D1%8C" class="translation ltr dict mobile-hidden translation-hidden v" data-pos='[v]' data-trans='rukovodit&apos;' data-pos-index='0' data-term="руководить" data-posGroup="4" data-freq="199" title="<div class='nobold'>See examples translated by <em class='translation'>руководить</em><br>Verb<br>rukovodit'<br>(199 examples with alignment)</div>" lang='ru'>
          <div class="pos-mark">
              <span class="v" title="Verb"></span>
                  </div>
          руководить</a>
      <div title="More" class="translation icon horizontal-dots"></div>
      </div>
  <section id="filters-content" class="wide-container">
    <button class="other-content" data-other="0" data-negative=" -{бежать} -{сбежать} -{бегать} -{запустить} -{управлять} -{убежать} -{работать} -{баллотироваться} -{бег} -{бегах} -{бегу} -{бега} -{бегом} -{запуск} -{запуска} -{перспективе} -{пробежка} -{пробежку} -{пробег} -{прогон} -{тираж} -{период} -{тиражное издание} -{беги} -{провести} -{убегать} -{запускать} -{вести} -{выполнить} -{сбегать} -{руководить}">Other translations</button>
    <div class="filter-form closed">
      <button class="icon filter" title="You can obtain even more precise results by indicating the word(s) that the translation should have. This will allow you to show only the examples that contain those words."></button>
      <button class="icon cancel" title="Clear filter"></button>
      <div class="input-content">
        <button class="icon exclude" title="Click here to exclude some words from your search. For instance, word1 -{word2} : will search phrases that contain word1 and NOT word2"></button>
        <input placeholder="Display the translations containing..." autocomplete="off" readonly>
      </div>
    </div>
  </section>
  <section id="top-suggestions" class="wide-container">
    <h3>Suggestions</h3>
    <div class="wide-container">
      <div class="suggestion negative" title="This suggestion is excluded from the results">
            <span class="icon pf"></span>
            <button class="text" data-url="/translation/english-russian/run+by">run by</button>
            <span class="figure ">3260</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/run+away" class="text">run away</a>
            <span class="figure ">2449</span>
            </div>
        <div class="suggestion negative" title="This suggestion is excluded from the results">
            <span class="icon pf"></span>
            <button class="text" data-url="/translation/english-russian/run+out">run out</button>
            <span class="figure ">1794</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/in+the+long+run" class="text">in the long run</a>
            <span class="figure ">1661</span>
            </div>
        <div class="suggestion negative" title="This suggestion is excluded from the results">
            <span class="icon pf"></span>
            <button class="text" data-url="/translation/english-russian/run+into">run into</button>
            <span class="figure ">1343</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/gonna+run" class="text">gonna run</a>
            <span class="figure ">934</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/run+off" class="text">run off</a>
            <span class="figure ">846</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/run+counter" class="text">run counter</a>
            <span class="figure ">799</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/on+the+run" class="text">on the run</a>
            <span class="figure ">796</span>
            </div>
        <button class="icon other other-suggestions" title="Other translations" data-negative="-{run by} -{run away} -{run out} -{in the long run} -{run into} -{gonna run} -{run off} -{run counter} -{on the run}">
        </button>
    </div>
  </section>
  <button id="mobile-detailed-view" class="icon down-arrow detailed-view closed" title="Show details and suggestions"></button>
  </section>
<section id="examples-content" class="wide-container ">
  <div id="OPENSUBTITLES-2016.EN-RU_10107201" class="example">
      <div class="src ltr">
        <span class="text">
          We have to <em>run</em> and <em>run</em> and <em>run</em>.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Нам приходится <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>, и <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>, и <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>...</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_10107201" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_10107201"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_10107201"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_10107201" data-text="Нам приходится <em>бежать</em>, и <em>бежать</em>, и <em>бежать</em>..."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_10107201"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_10107201"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_10107201" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_10107201" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_11101454" class="example">
      <div class="src ltr">
        <span class="text">
          You <em>run</em> and <em>run</em> until you're safe.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          <a class="link_highlighted" href='/translation/russian-english/%D0%91%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>Бежать</em></a> и <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>, пока не будешь в безопасности.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_11101454" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_11101454"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_11101454"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_11101454" data-text="<em>Бежать</em> и <em>бежать</em>, пока не будешь в безопасности."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_11101454"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_11101454"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_11101454" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_11101454" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_11365533" class="example">
      <div class="src ltr">
        <span class="text">
          Getting up at dawn to <em>run</em> before school.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Вставал на рассвете, чтобы <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бегать</em></a> перед занятиями в школе.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_11365533" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_11365533"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_11365533"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_11365533" data-text="Вставал на рассвете, чтобы <em>бегать</em> перед занятиями в школе."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_11365533"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_11365533"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_11365533" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_11365533" class="mobile-voice icon stopped "></button>
      </div>
  <div id='lig_reverso_smartbox_article_tc' class="inner-rca unloaded">
	        <!-- /2629866/Context_1x1_Banner -->
	        <div id='div-gpt-ad-Reverso_Ctxt_R_Result_InFeed_ATF'>
	          <script>ramjs.que.push(function() { ramjs.business.displayGoogletagSlot('div-gpt-ad-Reverso_Ctxt_R_Result_InFeed_ATF') });</script>
	        </div>
	      </div>
        <div id="OPENSUBTITLES-2012.EN-RU_5057234" class="example">
      <div class="src ltr">
        <span class="text">
          And I want to <em>run</em> and <em>run</em> and <em>run</em>, but it keeps following me.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          И я хочу <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a> и <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a> и <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>, но оно преследует меня.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2012.EN-RU_5057234" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2012.EN-RU_5057234"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2012.EN-RU_5057234"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2012.EN-RU_5057234" data-text="И я хочу <em>бежать</em> и <em>бежать</em> и <em>бежать</em>, но оно преследует меня."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2012.EN-RU_5057234"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2012.EN-RU_5057234"></button>
          <button data-id="OPENSUBTITLES-2012.EN-RU_5057234" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2012.EN-RU_5057234" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_11275295" class="example">
      <div class="src ltr">
        <span class="text">
          Just <em>run</em> him off the road.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Можем <a class="link_highlighted" href='/translation/russian-english/%D1%83%D1%81%D0%BA%D0%BE%D1%80%D0%B8%D1%82%D1%8C+%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%2C+%D1%81%D0%B1%D0%B8%D1%82%D1%8C' rel="nofollow"><em>ускорить процесс, сбить</em></a> его с дороги.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_11275295" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_11275295"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_11275295"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_11275295" data-text="Можем <em>ускорить процесс, сбить</em> его с дороги."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_11275295"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_11275295"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_11275295" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_11275295" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_10223794" class="example">
      <div class="src ltr">
        <span class="text">
          I'll <em>run</em> his face through DMV database using facial recognition.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Я <a class="link_highlighted" href='/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B3%D0%BE%D0%BD%D1%8E' rel="nofollow"><em>прогоню</em></a> его лицо через базу данных отдела транспортных средств с использованием распознавания лица.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_10223794" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_10223794"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_10223794"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_10223794" data-text="Я <em>прогоню</em> его лицо через базу данных отдела транспортных средств с использованием распознавания лица."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_10223794"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_10223794"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_10223794" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_10223794" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_10139706" class="example">
      <div class="src ltr">
        <span class="text">
          That's for making me <em>run</em>.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Это за то, что заставил меня <a class="link_highlighted" href='/translation/russian-english/%D0%BF%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%82%D1%8C' rel="nofollow"><em>побегать</em></a>.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_10139706" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_10139706"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_10139706"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_10139706" data-text="Это за то, что заставил меня <em>побегать</em>."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_10139706"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_10139706"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_10139706" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_10139706" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_10032925" class="example">
      <div class="src ltr">
        <span class="text">
          You said your roommate has <em>run</em> away...</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Ты что-то говорила о сожителе, который от тебя <a class="link_highlighted" href='/translation/russian-english/%D1%83%D0%B1%D0%B5%D0%B6%D0%B0%D0%BB' rel="nofollow"><em>убежал</em></a>...</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_10032925" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_10032925"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_10032925"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_10032925" data-text="Ты что-то говорила о сожителе, который от тебя <em>убежал</em>..."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_10032925"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_10032925"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_10032925" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_10032925" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_9441217" class="example">
      <div class="src ltr">
        <span class="text">
          Have forensics <em>run</em> her prints as fast as possible.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Пусть эксперты <a class="link_highlighted" href='/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B3%D0%BE%D0%BD%D1%8F%D1%82' rel="nofollow"><em>прогонят</em></a> ее отпечатки через базу данных как можно скорее.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_9441217" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_9441217"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_9441217"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_9441217" data-text="Пусть эксперты <em>прогонят</em> ее отпечатки через базу данных как можно скорее."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_9441217"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_9441217"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_9441217" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_9441217" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2012.EN-RU_4917216" class="example blocked">
      <div class="src ltr">
        <span class="text">
          We say <em>run</em>, you <em>run</em>.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Если мы говорим <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>, то Вы <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B8%D1%82%D0%B5' rel="nofollow"><em>бежите</em></a>.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2012.EN-RU_4917216" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2012.EN-RU_4917216"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2012.EN-RU_4917216"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2012.EN-RU_4917216" data-text="Если мы говорим <em>бежать</em>, то Вы <em>бежите</em>."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2012.EN-RU_4917216"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2012.EN-RU_4917216"></button>
          <button data-id="OPENSUBTITLES-2012.EN-RU_4917216" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2012.EN-RU_4917216" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2018.EN-RU_6054374" class="example blocked">
      <div class="src ltr">
        <span class="text">
          Everybody <em>run</em>, <em>run</em>, <em>run</em> in America.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Все в Америке <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D1%83%D1%82' rel="nofollow"><em>бегут</em></a>, <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D1%83%D1%82' rel="nofollow"><em>бегут</em></a>, <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D1%83%D1%82' rel="nofollow"><em>бегут</em></a>.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2018.EN-RU_6054374" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2018.php)" data-id="OPENSUBTITLES-2018.EN-RU_6054374"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2018.EN-RU_6054374"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2018.EN-RU_6054374" data-text="Все в Америке <em>бегут</em>, <em>бегут</em>, <em>бегут</em>."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2018.EN-RU_6054374"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2018.EN-RU_6054374"></button>
          <button data-id="OPENSUBTITLES-2018.EN-RU_6054374" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2018.EN-RU_6054374" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_14693037" class="example blocked">
      <div class="src ltr">
        <span class="text">
          So you <em>run</em>, <em>run</em>, <em>run</em>.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Итак, ты <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B8%D1%88%D1%8C' rel="nofollow"><em>бежишь</em></a>, <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B8%D1%88%D1%8C' rel="nofollow"><em>бежишь</em></a>, <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B8%D1%88%D1%8C' rel="nofollow"><em>бежишь</em></a>.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_14693037" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_14693037"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_14693037"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_14693037" data-text="Итак, ты <em>бежишь</em>, <em>бежишь</em>, <em>бежишь</em>."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_14693037"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_14693037"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_14693037" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_14693037" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2018.EN-RU_5026373" class="example blocked">
      <div class="src ltr">
        <span class="text">
          You better <em>run run</em>, <em>run</em>, <em>run</em></span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Лучше <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B8%2C+%D0%B1%D0%B5%D0%B3%D0%B8' rel="nofollow"><em>беги, беги</em></a>, <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B8' rel="nofollow"><em>беги</em></a>, <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B8' rel="nofollow"><em>беги</em></a>!</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2018.EN-RU_5026373" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2018.php)" data-id="OPENSUBTITLES-2018.EN-RU_5026373"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2018.EN-RU_5026373"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2018.EN-RU_5026373" data-text="Лучше <em>беги, беги</em>, <em>беги</em>, <em>беги</em>!"></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2018.EN-RU_5026373"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2018.EN-RU_5026373"></button>
          <button data-id="OPENSUBTITLES-2018.EN-RU_5026373" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2018.EN-RU_5026373" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_3447375" class="example blocked">
      <div class="src ltr">
        <span class="text">
          <em>Run</em>... <em>run</em>... <em>run</em> my friend...</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          <a class="link_highlighted" href='/translation/russian-english/%D0%91%D0%B5%D0%B3%D0%B8' rel="nofollow"><em>Беги</em></a>... <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B8' rel="nofollow"><em>беги</em></a>... <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B8' rel="nofollow"><em>беги</em></a>, мой друг...</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_3447375" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_3447375"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_3447375"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_3447375" data-text="<em>Беги</em>... <em>беги</em>... <em>беги</em>, мой друг..."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_3447375"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_3447375"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_3447375" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_3447375" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_10869731" class="example blocked">
      <div class="src ltr">
        <span class="text">
          I can't tell you how to <em>run</em> your case, I can only <em>run</em> my own.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Я не знаю, как вы <a class="link_highlighted" href='/translation/russian-english/%D0%B2%D0%B5%D0%B4%D0%B5%D1%82%D0%B5' rel="nofollow"><em>ведете</em></a> ваше расследование, я только могу <a class="link_highlighted" href='/translation/russian-english/%D0%B2%D0%B5%D1%81%D1%82%D0%B8' rel="nofollow"><em>вести</em></a> свое собственное.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_10869731" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_10869731"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_10869731"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_10869731" data-text="Я не знаю, как вы <em>ведете</em> ваше расследование, я только могу <em>вести</em> свое собственное."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_10869731"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_10869731"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_10869731" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_10869731" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_11947948" class="example blocked">
      <div class="src ltr">
        <span class="text">
          Lady, when my Gran tells me to <em>run</em>, I <em>run</em>.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Леди, когда моя бабушка говорит <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a>, я <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D1%83' rel="nofollow"><em>бегу</em></a>.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_11947948" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_11947948"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_11947948"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_11947948" data-text="Леди, когда моя бабушка говорит <em>бежать</em>, я <em>бегу</em>."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_11947948"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_11947948"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_11947948" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_11947948" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_12403947" class="example blocked">
      <div class="src ltr">
        <span class="text">
          I keep peeking out blind, and when boy <em>run</em> away, h-he <em>run</em> right by this window.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Я продолжал подглядывать, и... и когда парень <a class="link_highlighted" href='/translation/russian-english/%D1%83%D0%B1%D0%B5%D0%B3%D0%B0%D0%BB' rel="nofollow"><em>убегал</em></a>, он <a class="link_highlighted" href='/translation/russian-english/%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%B6%D0%B0%D0%BB' rel="nofollow"><em>пробежал</em></a> прямо перед этим окном.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_12403947" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_12403947"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_12403947"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_12403947" data-text="Я продолжал подглядывать, и... и когда парень <em>убегал</em>, он <em>пробежал</em> прямо перед этим окном."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_12403947"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_12403947"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_12403947" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_12403947" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_12709532" class="example blocked">
      <div class="src ltr">
        <span class="text">
          And no matter how far you <em>run</em>, you can never <em>run</em> from yourself.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Я хочу добавить... я был в <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D0%B0%D1%85' rel="nofollow"><em>бегах</em></a> два года, и как далеко ты не убежал бы, нельзя <a class="link_highlighted" href='/translation/russian-english/%D1%83%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>убежать</em></a> от самого себя.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_12709532" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_12709532"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_12709532"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_12709532" data-text="Я хочу добавить... я был в <em>бегах</em> два года, и как далеко ты не убежал бы, нельзя <em>убежать</em> от самого себя."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_12709532"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_12709532"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_12709532" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_12709532" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_8715919" class="example blocked">
      <div class="src ltr">
        <span class="text">
          Maybe when basic instinct says to <em>run</em> away from a fire, a few <em>run</em> towards it.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Может, когда основной инстинкт повелевает <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' rel="nofollow"><em>бежать</em></a> от огня, некоторые <a class="link_highlighted" href='/translation/russian-english/%D0%B1%D0%B5%D0%B3%D1%83%D1%82' rel="nofollow"><em>бегут</em></a> к нему.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_8715919" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_8715919"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_8715919"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_8715919" data-text="Может, когда основной инстинкт повелевает <em>бежать</em> от огня, некоторые <em>бегут</em> к нему."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_8715919"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_8715919"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_8715919" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_8715919" class="mobile-voice icon stopped "></button>
      </div>
  <div id="OPENSUBTITLES-2016.EN-RU_8932649" class="example blocked">
      <div class="src ltr">
        <span class="text">
          I can <em>run</em> his ID, trace his cell, <em>run</em> surveillance.</span>
      </div>
      <div class="trg ltr">
        <span class="icon jump-right"></span>
        <span class="text" lang='ru'>
          Я могу <a class="link_highlighted" href='/translation/russian-english/%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%B8%D1%82%D1%8C' rel="nofollow"><em>запустить</em></a> его личный номер, вычислить его сотовый и <a class="link_highlighted" href='/translation/russian-english/%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D1%8C' rel="nofollow"><em>начать</em></a> наблюдение.</span>
      </div>
      <div class="options">
        <div class="src">
          <button data-id="OPENSUBTITLES-2016.EN-RU_8932649" class="voice icon stopped" title="Pronunciation" data-lang="en"></button>
          </div>
        <div class="trg">
          <button class="icon more-context" title="See this translation example in its context (http://opus.nlpl.eu/OpenSubtitles2016.php)" data-id="OPENSUBTITLES-2016.EN-RU_8932649"></button>
          <button class="report icon thumb-down" title="Report a problem in this example" data-id="OPENSUBTITLES-2016.EN-RU_8932649"></button>
          <button class="add icon addentry " title="Add this translation to Reverso Collaborative Dictionary" data-url="https://dictionary.reverso.net/CollabDict.aspx?view=2&lang=EN" data-id="OPENSUBTITLES-2016.EN-RU_8932649" data-text="Я могу <em>запустить</em> его личный номер, вычислить его сотовый и <em>начать</em> наблюдение."></button>
          <button class="copy icon mobile-hidden" title="Copy the translation" data-id="OPENSUBTITLES-2016.EN-RU_8932649"></button>
          <button class="icon non-favourite " title="Mark this example as favourite" data-id="OPENSUBTITLES-2016.EN-RU_8932649"></button>
          <button data-id="OPENSUBTITLES-2016.EN-RU_8932649" class="voice icon stopped" title="Pronunciation" data-lang="ru"></button>
          </div>
      </div>
      <button aria-label="Pronunciation" data-id="OPENSUBTITLES-2016.EN-RU_8932649" class="mobile-voice icon stopped "></button>
      </div>
  <div id="blocked-rude-results-banner" class="popup wide-container">
    <div class="header"></div>
    <div class="body">
      <span>Possibly inappropriate content</span>
      <div class="buttons-content">
        <button class="button close">Unlock</button>
      </div>
      <span class="disclaimer">
        Examples are used only to help you translate the word or expression searched in various contexts. They are not selected or validated by us and can contain inappropriate terms or ideas. Please report examples to be edited or not to be displayed. Rude or colloquial translations are usually marked in red or orange.</span>
    </div>
  </div>
  <div id="blocked-results-banner" class="popup wide-container">
      <div class="header">
        <button class="icon close"></button>
      </div>
      <div class="body">
        <span>Register to see more examples</span>
        <span>It's <b>simple</b> and it's <b>free</b></span>
        <div class="buttons-content">
          <a href="https://account.reverso.net/register/context.reverso.net/en?utm_source=contextweb&utm_medium=blockedexamples&utm_campaign=register" class="button register">Register</a>
          <a href="https://account.reverso.net/login/context.reverso.net/en?utm_source=contextweb&utm_medium=blockedexamples&utm_campaign=login" class="button login">Connect</a>
        </div>
      </div>
    </div>
  </section>
<section id="no-results">
  <span class="wide-container message">No results found for this meaning.</span>
  <div class="wide-container">
      <button id="add-example3" class="add-example-button" title="Suggest example for &quot;run&quot;" data-ga="display-noexamples">Suggest an example</button>
    </div>
  </section>
<section id="examples-bottom">
  <div class="loading-pannel">
  <span class="icon"></span>
</div>
<button id="load-more-examples" class="button load-more unregistered">Display more examples</button>
  <div id="result-info" class="wide-container" data-exact="52411">
      <p>Results: <span id="nrows">52411</span>. Exact: <span id="nrows_exact">52411</span>. Elapsed time: <span id="time">121</span> ms.</p>
    </div>
    <div id="home-badges-background">
  <div id="home-mobile-badges-apps">
    <a class="text title-text" href="/translation/mobile-app?utm_source=contextweb&utm_medium=storebadge&utm_campaign=ctxthomepage&utm_content=ctxtappdl">More features with our <span>free</span> app</a>
    <div>
      <a aria-label="Get it on Google Play - Reverso Context" href="/translation/mobile-app?utm_source=contextweb&utm_medium=storebadge&utm_campaign=ctxthomepage&utm_content=ctxtappdl" class="badge and no-loading en"></a>
      <a aria-label="Download on the App Store - Reverso Context" href="/translation/mobile-app?utm_source=contextweb&utm_medium=storebadge&utm_campaign=ctxthomepage&utm_content=ctxtappdl" class="badge ios no-loading en"></a>
      <div><b>Voice and photo</b> translation, <b>offline</b> features, <b>synonyms</b>, <b>conjugation</b>, <b>learning</b> games</div>
    </div>
  </div>
</div><div class="wide-container">
      <button id="add-example1" class="add-example-button" title="Suggest example for &quot;run&quot;" data-ga="display-examplesbottom">Suggest an example</button>
    </div>
  <section id="bottom-suggestions" class="wide-container">
    <div class="suggestion hidden" title="This suggestion is excluded from the results">
            <span class="text" data-url="/translation/english-russian/run+by">run by</span>
            <span class="figure ">3260</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/run+away" class="text">run away</a>
            <span class="figure ">2449</span>
            </div>
        <div class="suggestion hidden" title="This suggestion is excluded from the results">
            <span class="text" data-url="/translation/english-russian/run+out">run out</span>
            <span class="figure ">1794</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/in+the+long+run" class="text">in the long run</a>
            <span class="figure ">1661</span>
            </div>
        <div class="suggestion hidden" title="This suggestion is excluded from the results">
            <span class="text" data-url="/translation/english-russian/run+into">run into</span>
            <span class="figure ">1343</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/gonna+run" class="text">gonna run</a>
            <span class="figure ">934</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/run+off" class="text">run off</a>
            <span class="figure ">846</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/run+counter" class="text">run counter</a>
            <span class="figure ">799</span>
            </div>
        <div class="suggestion">
            <a href="/translation/english-russian/on+the+run" class="text">on the run</a>
            <span class="figure ">796</span>
            </div>
        <button class="icon other other-suggestions" title="Other translations" data-negative="-{run by} -{run away} -{run out} -{in the long run} -{run into} -{gonna run} -{run off} -{run counter} -{on the run}">
      </button>
    </section>
  </section>
</div>
  <!-- /64378609/Context_MegaBanner_Bottom -->
  <div id="bottom-mega-rca-box">
    <div id='div-gpt-ad-Reverso_Ctxt_D_Result_728x90_BTF' class="bottom-rca mega-rca">
      <script> if(!window.mobilecheck()) { ramjs.que.push(function() { ramjs.business.displayGoogletagSlot('div-gpt-ad-Reverso_Ctxt_D_Result_728x90_BTF') }); } </script>
    </div>
    <span class="rca-title rca-title-vertical bottom-rca">Advertising</span>
  </div>
  </section>
<section id="reverso-nav">
  <a class="documents-link" target="_blank" rel="noopener" href="https://documents.reverso.net/Default.aspx?lang=en&utm_source=reversocontext&utm_medium=homepage&utm_campaign=mobilefooter">
    Documents</a>
  <a class="corporate-link" target="_blank" rel="noopener" href="https://www.corporate-translation.reverso.com/?lang=en">
    Corporate solutions</a>
  <a class="conjugation-link" target="_blank" rel="noopener" href="https://conjugator.reverso.net/conjugation-english.html">
    Conjugation</a>
  <a class="synonyms-link" target="_blank" rel="noopener" href="https://synonyms.reverso.net/synonym/">
    Synonyms</a>
  <a class="speller-link" target="_blank" rel="noopener" href="https://www.reverso.net/spell-checker/english-spelling-grammar/">
    Grammar Check</a>
  <a href="/translation/about">
    Help & about</a>
</section>
<section id="sitemaps">
  <p><a href="/translation/index/english-russian/w.html">Word index:</a> <a href="/translation/index/english-russian/w-1-300.html">1-300</a>, <a href="/translation/index/english-russian/w-301-600.html">301-600</a>, <a href="/translation/index/english-russian/w-601-900.html">601-900</a><p><a href="/translation/index/english-russian/e.html">Expression index:</a> <a href="/translation/index/english-russian/e-1-400.html">1-400</a>, <a href="/translation/index/english-russian/e-401-800.html">401-800</a>, <a href="/translation/index/english-russian/e-801-1200.html">801-1200</a><p><a href="/translation/index/english-russian/p.html">Phrase index:</a> <a href="/translation/index/english-russian/p-1-400.html">1-400</a>, <a href="/translation/index/english-russian/p-401-800.html">401-800</a>, <a href="/translation/index/english-russian/p-801-1200.html">801-1200</a></section>
    <section id="footer">
  <div class="high">
    <a href="/translation/about">About the contextual dictionary</a>
    <a class="app-link" href="/translation/mobile-app">Download the App</a>
    <a target="_blank" rel="noopener" href="https://www.reverso.net/feedback.aspx?type=3&lang=EN">Contact</a>
    <a href="/translation/legal">Legal considerations</a>
    <a class="last" href="javascript:Didomi.preferences.show()">Privacy settings</a>
    <div class="social-content">
      <button class="icon font-resize" title="Text size" data-size="0"></button>
      <a class="facebook-link icon facebook" target="_blank" rel="noopener" href="https://www.facebook.com/Reverso.net?ref=ts" title="Facebook"></a>
      <a class="twitter-link icon twitter" target="_blank" rel="noopener" href="https://twitter.com/ReversoEN" title="Twitter"></a>
      <a class="instagram-link icon instagram" target="_blank" rel="noopener" href="https://www.instagram.com/reverso_app/?hl=en" title="Instagram"></a>
    </div>
  </div>
  <div class="low">
    <a href="/traduction/">Traduction en contexte</a><a href="/traduccion/">Traducción en contexto</a><a href="/traducao/">Tradução em contexto</a><a href="/traduzione/">Traduzione in contesto</a><a href="/übersetzung/">Übersetzung im Kontext</a><a href="/الترجمة/">الترجمة في السياق</a><a href="/翻訳/">文脈に沿った翻訳</a><a href="/翻译/">情境中的译文</a><a href="/vertaling/">Vertaling in context</a><a href="/תרגום/">תרגום בהקשר</a><a href="/перевод/">Перевод в контексте</a><a href="/tłumaczenie/">Tłumaczenie w kontekście</a><a href="/traducere/">Traducere în context</a><a href="/översättning/">Översättning i sammanhang</a><a href="/çeviri/">İçerik tercümesi</a></div>
  <div class="low">
    <a target="_blank" rel="noopener" href="https://synonyms.reverso.net/synonym/">Synonyms</a>
    <a target="_blank" rel="noopener" href="https://conjugator.reverso.net/conjugation-english.html">Conjugation</a>
    <a target="_blank" rel="noopener" href="https://www.corporate-translation.reverso.com/?lang=en">Reverso Corporate</a>
    <a target="_blank" rel="noopener" class="partner_link" href="https://www.opensubtitles.org">Subtitles for movies and TV series</a></div>
  <p class="copy">&copy; 2013-2022 Reverso Technologies Inc. All rights reserved.</p>
</section>
</div>
    <script defer src="https://cdn.reverso.net/context/v60500/js/bst.constants-en.js"></script>
<script defer src="https://cdn.reverso.net/context/v60500/js/main.js"></script>
<script defer src="https://cdn.reverso.net/context/v60500/js/result.js"></script>
<script>
  var ezt = ezt ||[];
  (function(){
    var elem = document.createElement('script');
    elem.src = "https://secure.quantserve.com/aquant.js?a=p-9z6v4xdJwT5Z-";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem,scpt);
  }());
  ezt.push({qacct: 'p-9z6v4xdJwT5Z-', labels: 'context', uid: '' });
</script><noscript><img src="https://pixel.quantserve.com/pixel/p-9z6v4xdJwT5Z-.gif?labels=context" style="display: none;" height="1" width="1" alt=""/>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1090291004350551&ev=PageView&noscript=1" alt=""/>
</noscript></body>
</html>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8RavG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="ru"><head><meta content="application/xhtml+xml; charset=UTF-8" http-equiv="Content-Type"/><meta content="no-cache" name="Cache-Control"/><title>run - Поиск в Google</title><style>a{text-decoration:none;color:inherit}a:hover{text-decoration:underline}a img{border:0}body{font-family:Roboto,Helvetica,Arial,sans-serif;padding:8px;margin:0 auto;max-width:700px;min-width:240px;}.FbhRzb{border-left:thin solid #dadce0;border-right:thin solid #dadce0;border-top:thin solid #dadce0;height:40px;overflow:hidden}.n692Zd{margin-bottom:10px}.cvifge{height:40px;border-spacing:0}.QvGUP{height:40px;padding:0 8px 0 8px;vertical-align:top}.O4cRJf{height:40px;width:100%;padding:0;padding-right:16px}.O1ePr{height:40px;padding:0;vertical-align:top}.kgJEQe{height:36px;width:98px;vertical-align:top;margin-top:4px}.lXLRf{vertical-align:top}.MhzMZd{border:0;vertical-align:middle;font-size:14px;height:40px;padding:0;width:100%;padding-left:16px}.xB0fq{height:40px;border:none;font-size:14px;background-color:#4285f4;color:#fff;padding:0 16px;margin:0;vertical-align:top;cursor:pointer}.xB0fq:focus{border:1px solid #000}.M7pB2{border:thin solid #dadce0;margin:0 0 3px 0;font-size:13px;font-weight:500;height:40px}.euZec{width:100%;height:40px;text-align:center;border-spacing:0}table.euZec td{padding:0;width:25%}.QIqI7{display:inline-block;padding-top:4px;font-weight:bold;color:#4285f4}.EY24We{border-bottom:2px solid #4285f4}.CsQyDc{display:inline-block;color:#70757a}.TuS8Ad{font-size:14px}.HddGcc{padding:8px;color:#70757a}.dzp8ae{font-weight:bold;color:#3c4043}.rEM8G{color:#70757a}.bookcf{table-layout:fixed;width:100%;border-spacing:0}.InWNIe{text-align:center}.uZgmoc{border:thin solid #dadce0;color:#70757a;font-size:14px;text-align:center;table-layout:fixed;width:100%}.frGj1b{display:block;padding:12px 0 12px 0;width:100%}.BnJWBc{text-align:center;padding:6px 0 13px 0;height:35px}.e3goi{vertical-align:top;padding:0;height:180px}.GpQGbf{margin:auto;border-collapse:collapse;border-spacing:0;width:100%}</style></head><body><style>.X6ZCif{color:#202124;font-size:11px;line-height:16px;display:inline-block;padding-top:2px;overflow:hidden;padding-bottom:4px;width:100%}.TwVfHd{border-radius:16px;border:thin solid #dadce0;display:inline-block;padding:8px 8px;margin-right:8px;margin-bottom:4px}.yekiAe{background-color:#dadce0}.mnTahd{width:100%}.ezO2md{border:thin solid #dadce0;padding:12px 16px 12px 16px;margin-bottom:10px;font-family:Roboto,Helvetica,Arial,sans-serif}.lIMUZd{font-family:Roboto,Helvetica,Arial,sans-serif}.IkMU6e{border-spacing:0}.SjCsie{width:100%}.EnarA{text-align:center}.NZWO1b{width:162px;height:140px;line-height:140px;overflow:'hidden';text-align:center}.yWs4tf{text-align:center;margin:auto;vertical-align:middle;max-width:162px;max-height:140px}.jB2rPd{padding-top:2px;padding-bottom:8px;}.fYyStc{word-break:break-word}.ynsChf{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Fj3V3b{color:#1967d2;font-size:14px;line-height:20px}.FrIlee{color:#202124;font-size:11px;line-height:16px}.F9iS2e{color:#70757a;font-size:11px;line-height:16px}.WMQ2Le{color:#70757a;font-size:12px;line-height:16px}.x3G5ab{color:#202124;font-size:12px;line-height:16px}.fuLhoc{color:#1967d2;font-size:16px;line-height:20px}.epoveb{font-size:24px;line-height:28px;font-weight:400;color:#202124}.dXDvrc{color:#0d652d;font-size:14px;line-height:20px;word-wrap:break-word}.dloBPe{font-weight:bold}.YVIcad{color:#70757a}.JkVVdd{color:#ea4335}.oXZRFd{color:#ea4335}.MQHtg{color:#fbbc04}.pyMRrb{color:#1e8e3e}.EtTZid{color:#1e8e3e}.M3vVJe{color:#1967d2}.qXLe6d{display:block}.NHQNef{font-style:italic}.Cb8Z7c{white-space:pre}a.ZWRArf{text-decoration:none}a .CVA68e:hover{text-decoration:underline}</style><div class="n692Zd"><div class="BnJWBc"><a class="lXLRf" href="/?output=images&amp;tbm=isch&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QPAgC"><img class="kgJEQe" src="/images/branding/searchlogo/1x/googlelogo_desk_heirloom_color_150x55dp.gif" alt="Google"/></a></div><div class="FbhRzb"><form action="/search"><input name="tbm" value="isch" type="hidden"/><input name="oq" type="hidden"/><input name="aqs" type="hidden"/><table class="cvifge"><tr><td class="O4cRJf"><input class="MhzMZd" value="run" name="q" type="text"/></td><td class="O1ePr"><input class="xB0fq" value="Поиск" type="submit"/></td></tr></table></form></div><div class="M7pB2"><table class="euZec"><tbody><tr><td><a class="CsQyDc" href="/search?q=run&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q_AUIBCgA">ВСЕ</a></td><td><a class="CsQyDc" href="/search?q=run&amp;tbm=vid&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q_AUIBSgB">ВИДЕО</a></td><td class="EY24We"><span class="QIqI7">КАРТИНКИ</span></td><td><a class="CsQyDc" href="/search?q=run&amp;tbm=nws&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q_AUIBygD">НОВОСТИ</a></td></tr></tbody></table></div></div><div class="X6ZCif"><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:%D1%84%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9+%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYICygA">фразовый глагол</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:adidas&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIDCgB">adidas</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:adidas+run+dmc&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIDSgC">adidas run dmc</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:race&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIDigD">race</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:nike+run+club&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIDygE">nike run club</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:nike+renew+run&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIECgF">nike renew run</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:nike+free+run&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIESgG">nike free run</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB%D0%B0&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIEigH">формы глагола</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:run+swift&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIEygI">run swift</a><a class="TwVfHd" href="/search?tbm=isch&amp;q=run&amp;chips=q:run,online_chips:adidas+originals&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Q4lYIFCgJ">adidas originals</a></div><div><table class="GpQGbf"><tr><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.healthline.com/health/tempo-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIAxAB&amp;usg=AOvVaw1BWIncCh_j6hT8FnbvORLy"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i0qgB1M4xK3ClSgZM2-ll4OQw_dBdFAykQ3oIxde9JYsadoGpVIbmB3rqA&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.healthline.com/health/tempo-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIAxAC&amp;usg=AOvVaw0UwuELpVl8OPrSJjFEPOSM"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">What Tempo Runs and...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.healthline.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.polar.com/ru/smart-coaching/running-index&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIExAB&amp;usg=AOvVaw0OZKUZQK0B-6w_HdHLvp6c"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshsfGbKg6Nbz430CCPJEkbtIWzC4Q6jDtGrSiX6HcDAa7qZ8Ap1_nUwFQohc&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.polar.com/ru/smart-coaching/running-index&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIExAC&amp;usg=AOvVaw3vHlRE_VXv2fA-W3fUiF4W"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Running Index | Polar...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.polar.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://en.wiktionary.org/wiki/run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIEhAB&amp;usg=AOvVaw1pkNS4Ai7tYf_dEAGy_VIZ"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdue58J8InE6PPDRnHYIcL3SFcPk82pTQTRQC0z4HVQmfsT79Z8fr3xpHcA&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://en.wiktionary.org/wiki/run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIEhAC&amp;usg=AOvVaw0-O9Ju7Vr2uMH78yKgueaE"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">run - Wiktionary</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">en.wiktionary.org</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.nike.com/ru/t/%25D0%25BA%25D1%2580%25D0%25BE%25D1%2581%25D1%2581%25D0%25BE%25D0%25B2%25D0%25BA%25D0%25B8-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25B1%25D0%25B5%25D0%25B3%25D0%25B0-%25D0%25BF%25D0%25BE-%25D1%2588%25D0%25BE%25D1%2581%25D1%2581%25D0%25B5-run-swift-2-LFKjsW&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIEBAB&amp;usg=AOvVaw2l_lnNHZfSSklisACPjrHy"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiZLgJNaL3pID9ltPKpe7LnpPMv3Y6Az5YCrrRb61exkGPqj7c9235OItNA&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.nike.com/ru/t/%25D0%25BA%25D1%2580%25D0%25BE%25D1%2581%25D1%2581%25D0%25BE%25D0%25B2%25D0%25BA%25D0%25B8-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25B1%25D0%25B5%25D0%25B3%25D0%25B0-%25D0%25BF%25D0%25BE-%25D1%2588%25D0%25BE%25D1%2581%25D1%2581%25D0%25B5-run-swift-2-LFKjsW&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIEBAC&amp;usg=AOvVaw0lzzhMRWL-Bnwdx-1s2ZLV"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Мужские кроссовки для бега...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.nike.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td></tr><tr><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.active.com/running/articles/how-far-should-you-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIERAB&amp;usg=AOvVaw3vcPhmmmaAefbYW0XRYzuh"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkwi0wVfmLJ4jAVyjzaRkfIZmEG8iob38V8Cxt9TtwtvjXADZFyttT1MCuS4&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.active.com/running/articles/how-far-should-you-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIERAC&amp;usg=AOvVaw0ttPP7C29fL_YfbxSLgDxx"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">How Far Should You Run? |...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.active.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://fr-fr.facebook.com/pages/Run-for-Life/1696190343759513&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIDxAB&amp;usg=AOvVaw1YNmorKdXG83Os9E67Pjag"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtsl9LcPGM8WY_iB8YEBTKu_q_XiLwsRRNLucR5SLj_wc2DXPZnXqEXvMlio&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://fr-fr.facebook.com/pages/Run-for-Life/1696190343759513&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIDxAC&amp;usg=AOvVaw17mncO_GqMlzoQQhR1j-nu"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Run for Life - Accueil |...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">fr-fr.facebook.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://onepiece.fandom.com/ru/wiki/RUN!_RUN!_RUN!&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIDhAB&amp;usg=AOvVaw09jkNu6-MRV5MfBQStbW32"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSTD28VchJjHXnrOiwF7Le8-_gkG0bXzy1xkpfGLktqdx0KGibStnHxiZng&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://onepiece.fandom.com/ru/wiki/RUN!_RUN!_RUN!&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIDhAC&amp;usg=AOvVaw3tmwRj3nzWoUMdcAdVxA_l"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">RUN! RUN! RUN! | One Piece...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">onepiece.fandom.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.cosmopolitan.com/uk/body/fitness-workouts/a32378723/average-time-run-5k/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIDRAB&amp;usg=AOvVaw1ZD2mVjyXej5GhWd3CNMIq"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY23UUPUAJ2PzsW-RE6aQayQYlvPqR3ZYDblFOD4Z-J2ktZ7g33rj8B2VdorQ&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.cosmopolitan.com/uk/body/fitness-workouts/a32378723/average-time-run-5k/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIDRAC&amp;usg=AOvVaw0B5BnPEqsYVsZfrX8J0sPZ"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">How long does it take to...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.cosmopolitan.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td></tr><tr><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.nike.com/ru/help/a/nrc-speed-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIDBAB&amp;usg=AOvVaw1Hi2Baq0ulbvqIRegRdbaO"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfLlnGW9Z_hLEeCA7C1Zog-288KNLGe7T8QoqLW8ixTXeXfubtwkpSvBj9g&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.nike.com/ru/help/a/nrc-speed-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIDBAC&amp;usg=AOvVaw2g6VeN5Ok2JXpRnwRhIoKW"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Как использовать Nike Run...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.nike.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://fr-fr.facebook.com/pages/Run-for-Life/1696190343759513&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIChAB&amp;usg=AOvVaw0yNPmHZ1DSSqm_zmTE2azC"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPPU23Z2ZkEHz2xOipdTMFVrJz-s8PyGPLo955b68iZ_J-VSKnoBhiDgZ4ys&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://fr-fr.facebook.com/pages/Run-for-Life/1696190343759513&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIChAC&amp;usg=AOvVaw0nyZRi0wlGfWCgVzFLO0c8"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Run for Life - Accueil |...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">fr-fr.facebook.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://theconversation.com/running-shoes-how-science-can-help-you-to-run-faster-and-more-efficiently-127634&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQICxAB&amp;usg=AOvVaw3D9CIrkFzn0xNUS2ABUdNi"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPHnrWhlwAH_gHqkgKl8jXjVXrirHC9kgcwpmGu1Vh6Eax-zdBwd5eJuNPQ&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://theconversation.com/running-shoes-how-science-can-help-you-to-run-faster-and-more-efficiently-127634&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQICxAC&amp;usg=AOvVaw3v3sV9DQ2seYpoZWwQ_lEA"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Running shoes: how science...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">theconversation.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.jennyhadfield.com/training-plans/zero-to-running/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQICRAB&amp;usg=AOvVaw0rHvwcBRn1EpbesoYbLdwW"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZUyOImbCnPUntsmix7lHuwHyxjWMsiY8HT6aP2WCcAWOstjp9mm_eRBYpKo&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.jennyhadfield.com/training-plans/zero-to-running/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQICRAC&amp;usg=AOvVaw24mVJYLl6fGdFxLSl6sUbn"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Learn to Run with Coach...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.jennyhadfield.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td></tr><tr><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://health.clevelandclinic.org/born-to-run-how-young-is-too-young-to-run-a-race/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQICBAB&amp;usg=AOvVaw00A_N2CPxbAWI03ynQDOFP"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsL8lBIjEjHUQ8RKwKOH0pwGV32XMop6gDkQf4_dShhv0Pqvvsjlw7aE2738&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://health.clevelandclinic.org/born-to-run-how-young-is-too-young-to-run-a-race/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQICBAC&amp;usg=AOvVaw3IWA-wKZh7egrVqdTZOuSQ"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Born to Run: How Young is...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">health.clevelandclinic.org</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://skysmart.ru/articles/english/frazovyj-glagol-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIBxAB&amp;usg=AOvVaw1HQ8mHs-SKmW_xDny3lCS6"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZjDogaANmNne1WIE_rm_GaoAoXS1fiC46J_NX8sx4zUIIeIMC4AULKBI8j0&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://skysmart.ru/articles/english/frazovyj-glagol-run&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIBxAC&amp;usg=AOvVaw1ZddLZrsnw7g_ZxhejTXTG"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Фразовый глагол RUN: идиомы...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">skysmart.ru</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.adidas.ru/krossovki-run-60s-2.0/FZ0962.html&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIBRAB&amp;usg=AOvVaw2Vy_8IkgbR1Cpa4osc3JPH"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu99jR4pW1pJqlLw675EP9ZU39q-GW0ySyyIHVSfdPLOuDObGEC_TVZ-x-fg&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.adidas.ru/krossovki-run-60s-2.0/FZ0962.html&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIBRAC&amp;usg=AOvVaw3VplopilOmVbJUPYOtdUh4"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">adidas Кроссовки Run 60s...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.adidas.ru</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.active.com/running/articles/how-to-run-faster-with-less-work&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIABAB&amp;usg=AOvVaw3WGNL_Egyol54nCE9FBRle"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrt_2inKtsKDzo2v5RpMA8ifj7_hb5xIe-3659TWumM0hayEkrunR7jb-bQ&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.active.com/running/articles/how-to-run-faster-with-less-work&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIABAC&amp;usg=AOvVaw1wdty31qfSmY9rSDZWmJbt"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">How to Run Faster With Less...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.active.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td></tr><tr><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.nike.com/ru/help/a/nrc-gps-1&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIBhAB&amp;usg=AOvVaw0-tFkCVmf3uY-WDHsO-g5J"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfSuJVCyDQlFnJI6KoEw9g6Oe6t6cIfei5sxRhCLt0bYBV6-jgLa2HDgShbQ&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.nike.com/ru/help/a/nrc-gps-1&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIBhAC&amp;usg=AOvVaw2JypEKWX28GeeydjRgjduz"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Почему в приложении Nike...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.nike.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.vox.com/2015/8/4/9091093/walking-versus-running&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIBBAB&amp;usg=AOvVaw1cVlWBQ37lQ64Saqn50I-p"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlP-YJUXZ0MZR-DDeU9lmpPFLHznqD4FM6rn4QZiiSD-Zo-FpTuvRpbgJ6jiQ&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.vox.com/2015/8/4/9091093/walking-versus-running&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIBBAC&amp;usg=AOvVaw0FU7kXsZ9_qyGdnTo7emSh"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Should you walk or run for...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.vox.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.healthxchange.sg/fitness-exercise/exercise-tips/why-run-health-benefits-running&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIARAB&amp;usg=AOvVaw1S7ci88lYwoQWnr3ISy-Yh"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzaOoW3ztRtQv7prrW3_KsRqtvcPQmmfgPo0C_EV3hDWdnC4O0H6FRGBuRh0&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.healthxchange.sg/fitness-exercise/exercise-tips/why-run-health-benefits-running&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIARAC&amp;usg=AOvVaw10oOUNsP2g4442JkW1BL31"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Why Run? The Health...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.healthxchange.sg</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td><td class="e3goi" align="center"><div class="mnTahd"> <div> <div class="lIMUZd"><div><table class="IkMU6e"><tr><td><a href="/url?q=https://www.outsideonline.com/health/running/training-advice/running-101/the-runners-battle-speed-vs-aerobic-endurance/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QqoUBegQIAhAB&amp;usg=AOvVaw07Sdv_uw3w9FZDKNVX2h5p"><div class="NZWO1b"><img class="yWs4tf" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTnALTsMTUC_u6dcmhcdS3Z7EaM04bOpmlqGOCMweaOTC1f21LlBRqwdd-w&amp;s"/></div></a></td></tr><tr><td><a href="/url?q=https://www.outsideonline.com/health/running/training-advice/running-101/the-runners-battle-speed-vs-aerobic-endurance/&amp;sa=U&amp;ved=2ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qr4kDegQIAhAC&amp;usg=AOvVaw0nVKs1JFf6MplJ6oxnoEn7"><div class="jB2rPd">  <span class="qXLe6d x3G5ab">  <span class="fYyStc">Want to Run Faster? You...</span>  </span>   <span class="qXLe6d F9iS2e">  <span class="fYyStc">www.outsideonline.com</span>  </span> </div></a></td></tr></table></div></div> </div> </div></td></tr></table></div><table class="uZgmoc"><tbody><td><a class="frGj1b" href="/search?q=run&amp;tbm=isch&amp;ei=fEVvYr6pCe_irgTTwJ7oBQ&amp;start=20&amp;sa=N">Следующая&nbsp;&gt;</a></td></tbody></table><br/><div class="TuS8Ad" data-ved="0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10QpyoIUg"><style>.VYM29{font-weight:bold}</style><div class="HddGcc" align="center"><span class="VYM29">Лазаревское, Сочи, Краснодарский край</span><span>&nbsp;-&nbsp;</span><span>Определено по IP-адресу</span><span>&nbsp;-&nbsp;</span><a href="/url?q=https://support.google.com/websearch%3Fp%3Dws_settings_location%26hl%3Dru&amp;sa=U&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qty4IUw&amp;usg=AOvVaw1EvLthhpFCI1uq7K4-8S96">Подробнее…</a></div><div align="center"><a class="rEM8G" href="/url?q=https://accounts.google.com/ServiceLogin%3Fcontinue%3Dhttps://www.google.com/search%253Fq%253Drun%2526tbm%253Disch%26hl%3Dru&amp;sa=U&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qxs8CCFQ&amp;usg=AOvVaw0gsgjA7VoPXJmSh0yFzkko">Войти</a></div><div><table class="bookcf"><tbody class="InWNIe"><tr><td><a class="rEM8G" href="https://www.google.com/preferences?hl=ru&amp;sa=X&amp;ved=0ahUKEwi-14bw5b_3AhVvsYsKHVOgB10Qv5YECFU">Настройки</a></td><td><a class="rEM8G" href="https://www.google.com/intl/ru_ru/policies/privacy/">Конфиденциальность</a></td><td><a class="rEM8G" href="https://www.google.com/intl/ru_ru/policies/terms/">Условия</a></td></tr></tbody></table></div></div><div>  </div></body></html>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["54dwi","1SICI"], "1SICI", "parcelRequire5c8c")

//# sourceMappingURL=index.18dbc454.js.map
