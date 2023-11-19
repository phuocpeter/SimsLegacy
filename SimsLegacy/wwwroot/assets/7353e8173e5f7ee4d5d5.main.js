/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 58324:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(33538);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(43745);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(97769);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(53737);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(31043);
// EXTERNAL MODULE: ./node_modules/react-toastify/esm/react-toastify.js + 9 modules
var react_toastify = __webpack_require__(11570);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 23 modules
var es = __webpack_require__(63505);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(33842);
;// CONCATENATED MODULE: ./src/redux/actions.js
var ADD_TREE = 'ADD_TREE';
var UPDATE_TREE = 'UPDATE_TREE';
var LOAD_TREES = 'LOAD_TREES';
function actions_addTree(tree) {
  return {
    type: ADD_TREE,
    tree: tree
  };
}
function actions_updateTree(tree) {
  return {
    type: UPDATE_TREE,
    tree: tree
  };
}
function actions_loadUsersTree(trees) {
  return {
    type: LOAD_TREES,
    trees: trees
  };
}
;// CONCATENATED MODULE: ./src/redux/reducers.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var initialState = {
  usersTrees: []
};
function plumTreeApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_TREE:
      return Object.assign({}, state, {
        usersTrees: [].concat(_toConsumableArray(state.usersTrees), [action.tree])
      });
    case UPDATE_TREE:
      return Object.assign({}, state, {
        usersTrees: state.usersTrees.map(function (tree) {
          if (tree._id !== action.tree._id) {
            // This isn't the item we care about - keep it as-is
            return tree;
          }

          // Otherwise, this is the one we want - return an updated value
          return _objectSpread(_objectSpread({}, tree), action.tree);
        })
      });
    case LOAD_TREES:
      return Object.assign({}, state, {
        usersTrees: action.trees
      });
    default:
      return state;
  }
}
/* harmony default export */ const reducers = (plumTreeApp);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(87302);
;// CONCATENATED MODULE: ./src/components/Layout/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"sunsetAlert":"f4a9e20a","root":"dfc6189e","container":"ca4fd2f2","containerActiveMenu":"c99ef728","header":"a5d9bfef","headerLogo":"da8858c3","brand":"a565e441","menuButton":"e59b2aa5","hamburger":"fc0b6a7e","hamburgerActive":"e0e6d504","closeRow":"d9573a78","closeButton":"b3c8ea01","close":"ff3557d5","nav":"db7470ae","navMask":"c9ce4af8","navMaskActiveMenu":"c018c2a0","body":"d598e3ea"});
;// CONCATENATED MODULE: ./src/common/images/logo.png
const logo_namespaceObject = __webpack_require__.p + "258a4434a7bf170a0664.png";
;// CONCATENATED MODULE: ./src/common/js/utils.js
/**
 * Images with no "avatar" or "cover" prefix a pre-migration so are held in the
 * original s3 uploads bucket. Otherwise we can get them from the plum tree
 * domain as they are served from the API Gateway (resized).
 */
var isMigratedImage = function isMigratedImage(image) {
  if (!image) return false;
  return image.startsWith('avatar/') || image.startsWith('cover/');
};

/**
 * Images with no "avatar" or "cover" prefix a pre-migration so are held in the
 * original s3 uploads bucket. Otherwise we can get them from the plum tree
 * domain as they are served from the API Gateway (resized).
 */
var getUploadedImageUri = function getUploadedImageUri(image, dimensions) {
  if (!image) return null;
  var s3Host = 'https://s3-eu-west-1.amazonaws.com/plum-tree-uploads/';
  var migratedHost = 'https://theplumtreeapp.com/uploads/';
  if (isMigratedImage(image)) {
    return dimensions ? "/api/upload/".concat(dimensions, "/").concat(image) : "".concat(migratedHost).concat(image);
  }
  return "".concat(s3Host).concat(image);
};

/**
 * Gets the original uploaded image URI (pre-processed original size)
 */
var getOrigUploadedImageUri = function getOrigUploadedImageUri(image) {
  if (!image) return null;
  var s3Host = 'https://s3-eu-west-1.amazonaws.com/plum-tree-uploads/';
  var migratedHost = 'https://theplumtreeapp.com/uploads-orig/';
  return isMigratedImage(image) ? "".concat(migratedHost).concat(image) : "".concat(s3Host).concat(image);
};

/**
 * Checks an email string is valid.
 */
var isValidEmail = function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
var sendGoogleAnalyticsPageView = function sendGoogleAnalyticsPageView(page) {
  if (window.ga) {
    window.ga('set', 'page', location.pathname + location.search);
    window.ga('send', 'pageview');
  }
};

;// CONCATENATED MODULE: ./src/components/Home/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home_styles = ({"sunsetAlert":"c5f7c25a","homeBannerImage":"c76793d4","homeBannerMask":"c567ac9c","introPanel":"b249c547","featureImage":"df709fd3","galleryImage":"c24ec0f0","guidesImage":"ad95c89b","guideVideo":"bbd6fcb6"});
;// CONCATENATED MODULE: ./src/components/Home/plumbob.png
const plumbob_namespaceObject = __webpack_require__.p + "9225b91662b4aa7a3cae.png";
;// CONCATENATED MODULE: ./src/components/Home/thumbsup.png
const thumbsup_namespaceObject = __webpack_require__.p + "878d8af3364eec950dbb.png";
;// CONCATENATED MODULE: ./src/components/Home/lifering.png
const lifering_namespaceObject = __webpack_require__.p + "a2e01ddc64ece9235441.png";
;// CONCATENATED MODULE: ./src/components/Home/SiteStats/index.jsx

/* harmony default export */ const SiteStats = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", null, "Some Big Numbers"), /*#__PURE__*/react.createElement("p", null, "Looks like our user have been busy creating trees so I thought I would share some stats so you can see just how busy you've been."), /*#__PURE__*/react.createElement("table", {
    className: "table",
    style: {
      maxWidth: 500,
      margin: '20px auto'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "Users Signed Up"), /*#__PURE__*/react.createElement("td", null, "220,000+")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "Trees Created"), /*#__PURE__*/react.createElement("td", null, "500,000+")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "Trees Published"), /*#__PURE__*/react.createElement("td", null, "70,000+")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "Images Uploaded"), /*#__PURE__*/react.createElement("td", null, "8,000,000+", /*#__PURE__*/react.createElement("br", null), "(1.8 terabytes)")))));
});
;// CONCATENATED MODULE: ./src/components/DonateBar/paypal.png
const paypal_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAGhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6YXV4PSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wL2F1eC8iCiAgICB4bWxuczpleGlmRVg9Imh0dHA6Ly9jaXBhLmpwL2V4aWYvMS4wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgIGF1eDpMZW5zPSIiCiAgIGV4aWZFWDpMZW5zTW9kZWw9IiIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNjAiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNjAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA2LTA2VDEzOjU2OjQwKzAxOjAwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA2LTA2VDEzOjU2OjQwKzAxOjAwIgogICB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNEODM2RkZBNTEzODExRTQ4NTg5QzM3N0Q2MzQ1RTI2IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNEODM2RkY5NTEzODExRTQ4NTg5QzM3N0Q2MzQ1RTI2IgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNjAiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI2MCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPgogICA8eG1wTU06RGVyaXZlZEZyb20KICAgIHhtcE1NOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0Q4MzZGRjg1MTM4MTFFNDg1ODlDMzc3RDYzNDVFMjYiCiAgICB4bXBNTTppbnN0YW5jZUlEPSJ4bXAuaWlkOjNEODM2RkY3NTEzODExRTQ4NTg5QzM3N0Q2MzQ1RTI2Ii8+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InByb2R1Y2VkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAxLjEwLjYiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMDYtMDZUMTM6NTY6NDArMDE6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/Pi7YMVAAAAGBaUNDUHNSR0IgSUVDNjE5NjYtMi4xAAAokXWRzytEURTHPzODkR9RZmFhMQmrGQ1KbJSRUJLGKL82M897M2pmvN6bSbJVtlOU2Pi14C9gq6yV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";
;// CONCATENATED MODULE: ./src/components/DonateBar/patreon.png
const patreon_namespaceObject = __webpack_require__.p + "cdb5c0a9ce058af93aaa.png";
;// CONCATENATED MODULE: ./src/components/DonateBar/index.jsx





/* harmony default export */ const DonateBar = (function (_ref) {
  var _ref$showWhy = _ref.showWhy,
    showWhy = _ref$showWhy === void 0 ? false : _ref$showWhy;
  return /*#__PURE__*/react.createElement("div", {
    className: "donate-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "donate-title"
  }, "Donate"), /*#__PURE__*/react.createElement("div", {
    className: "donate-buttons"
  }, /*#__PURE__*/react.createElement("a", {
    className: "btn btn-patreon",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://patreon.com/ThePlumTree"
  }, /*#__PURE__*/react.createElement("img", {
    src: patreon_namespaceObject,
    height: "20",
    style: {
      verticalAlign: 'middle'
    }
  }), " Patreon"), /*#__PURE__*/react.createElement("a", {
    className: "btn btn-paypal",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZXUTDCZXY7L28&source=url"
  }, /*#__PURE__*/react.createElement("img", {
    src: paypal_namespaceObject,
    height: "20",
    style: {
      verticalAlign: 'middle'
    }
  }), " PayPal"), showWhy && /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/donate"
  }, "Why Donate?")));
});
;// CONCATENATED MODULE: ./src/components/Home/index.jsx








/* harmony default export */ const Home = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: Home_styles.homeBannerImage
  }), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: Home_styles.introPanel
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/sunset",
    className: Home_styles.sunsetAlert
  }, "The Plum Tree App shutdown 1st Dec 2023. Click to find out more."), /*#__PURE__*/react.createElement("p", null, "Welcome to the plum tree app!"), /*#__PURE__*/react.createElement("p", null, "Create dynamic family trees for your sims legacies."), /*#__PURE__*/react.createElement("p", null, "Then publish and share your trees for others to see.")), /*#__PURE__*/react.createElement(DonateBar, {
    showWhy: true
  }), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-12 col-md-4"
  }, /*#__PURE__*/react.createElement("img", {
    src: plumbob_namespaceObject,
    className: Home_styles.featureImage,
    width: "100"
  }), /*#__PURE__*/react.createElement("p", null, "Crafted with Sims in mind we allow to set traits, aspirations and other Sims specific details to really help convey your sims colourful lives.")), /*#__PURE__*/react.createElement("div", {
    className: "col-12 col-md-4"
  }, /*#__PURE__*/react.createElement("img", {
    src: thumbsup_namespaceObject,
    className: Home_styles.featureImage,
    width: "100"
  }), /*#__PURE__*/react.createElement("p", null, "Built to be simple yet flexible so you can easily build and share your sims legacy.")), /*#__PURE__*/react.createElement("div", {
    className: "col-12 col-md-4"
  }, /*#__PURE__*/react.createElement("img", {
    src: lifering_namespaceObject,
    className: Home_styles.featureImage,
    width: "100"
  }), /*#__PURE__*/react.createElement("p", null, "Need help or have a question? Checkout ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides"
  }, "our guides"), " or ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/support"
  }, "see our support page"), "."))), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react.createElement("h2", null, "Using The Plum Tree"), /*#__PURE__*/react.createElement("p", null, "If our guides don't do it for you, check out ", /*#__PURE__*/react.createElement("a", {
    href: "https://www.youtube.com/channel/UCYorr-o7j29k9vF8xGiiCmA",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "The SimTwins"), " video instead. We thank them for this brilliant guide they put together on how to build the perfect Sims 4 family tree."), /*#__PURE__*/react.createElement("div", {
    className: Home_styles.guideVideo
  }, /*#__PURE__*/react.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/QatRM3knISY",
    frameBorder: "0",
    allowFullScreen: true
  })))), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react.createElement("h2", null, "The Public Gallery"), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: Home_styles.galleryImage,
    to: "/gallery"
  }), /*#__PURE__*/react.createElement("p", null, "Checkout the gallery of trees published by our wonderful users!"), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: "btn btn-primary",
    to: "/gallery"
  }, "Browse The Gallery")), /*#__PURE__*/react.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react.createElement("h2", null, "Guides"), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: Home_styles.guidesImage,
    to: "/guides"
  }), /*#__PURE__*/react.createElement("p", null, "Get up to speed with how to use The Plum Tree with our guides."), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: "btn btn-primary",
    to: "/guides"
  }, "Read The Guides"))), /*#__PURE__*/react.createElement(SiteStats, null)));
});
;// CONCATENATED MODULE: ./src/components/Guides/GuidesHome/index.jsx


/* harmony default export */ const GuidesHome = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, "Guides"), /*#__PURE__*/react.createElement("p", null, "Creating a Sims family tree using The Plum Tree can be a bit daunting at first so we've created some guides with useful tips to get you started."), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides/create-a-tree"
  }, "Create a Tree")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides/tree-editor"
  }, "The Tree Editor")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides/create-and-edit-sims"
  }, "Adding/Editing Sims")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides/placing-sims"
  }, "Placing Sims in Your Tree")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides/publising-trees"
  }, "Publish Your Tree")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides/linking-sims-to-other-trees"
  }, "Link Sims Across Multiple Trees"))), /*#__PURE__*/react.createElement("p", null, "If you can't find what your looking for in the guides try our ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "support"
  }, "support page"), " where there's some FAQs and ways you can get in touch with us."));
});
;// CONCATENATED MODULE: ./src/components/Guides/GuideIndexLink/index.jsx


/* harmony default export */ const GuideIndexLink = (function () {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      paddingTop: 15
    }
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides",
    className: "btn btn-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-list"
  }), " Guides Index"));
});
;// CONCATENATED MODULE: ./src/components/Guides/GuideNavLinks/index.jsx


/* harmony default export */ const GuideNavLinks = (function (_ref) {
  var prevLink = _ref.prevLink,
    prevText = _ref.prevText,
    nextLink = _ref.nextLink,
    nextText = _ref.nextText;
  return /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, prevLink && /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: prevLink,
    className: "btn btn-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-left"
  }), " ", prevText), nextLink && /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: nextLink,
    className: "btn btn-default"
  }, nextText, " ", /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-right"
  })));
});
;// CONCATENATED MODULE: ./src/components/Guides/MobileMock/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const MobileMock_styles = ({"root":"c41746ff","display":"b37906c8"});
;// CONCATENATED MODULE: ./src/components/Guides/MobileMock/phone-mock.svg
const phone_mock_namespaceObject = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDMzMCA0OTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjgzMzkxMSwwLDAsMC41ODYwMSwtMzcyLjksLTE0My4xNTgpIj4KICAgICAgICA8cGF0aCBkPSJNNzk2LjI5OCwyNjEuMzEyTDQ5NC4yMTgsMjYxLjMxMkM0NjIuMDY2LDI2MS4zMTIgNDUzLjM2NiwyODcuNDc5IDQ1My4zNjYsMzE5LjY0M0w0NTMuMjMzLDEwODMuNzVMNDc3LjE0NywxMDg0LjE3TDQ3Ny4zMDgsNDE0Ljg4TDgxMi44MDksNDE0LjgyNUw4MTIuOTQzLDEwODEuNTFMODM2LjY1NCwxMDgxLjk1TDgzNi44ODIsMzE5LjY0M0M4MzYuODgyLDI4Ny40NzkgODI4LjQ1LDI2MS4zMTIgNzk2LjI5OCwyNjEuMzEyWiIgc3R5bGU9ImZpbGw6cmdiKDYxLDcwLDgwKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuODQ1NTY3LDAsMCwwLjg0NTU2NywtMzgxLjE4NSwtMjE3LjY0KSI+CiAgICAgICAgPHBhdGggZD0iTTY3MC4wMjMsMzE3LjQyMkw2MTkuMjMyLDMxNy40MjJDNjE0Ljc1LDMxNy40MjIgNjExLjA2NCwzMjEuMDc2IDYxMS4wNjQsMzI1LjU0OUM2MTEuMDY0LDMzMC4wMiA2MTQuNzUsMzMzLjcgNjE5LjIzMiwzMzMuN0w2NzAuMDIzLDMzMy43QzY3NC41MDgsMzMzLjcgNjc4LjE4OSwzMzAuMDIgNjc4LjE4OSwzMjUuNTQ5QzY3OC4xODksMzIxLjA3NiA2NzQuNTA4LDMxNy40MjIgNjcwLjAyMywzMTcuNDIyWiIgc3R5bGU9ImZpbGw6cmdiKDk0LDEwNSwxMTYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/components/Guides/MobileMock/index.jsx



/* harmony default export */ const MobileMock = (function (props) {
  return /*#__PURE__*/react.createElement("div", {
    className: MobileMock_styles.root
  }, /*#__PURE__*/react.createElement("img", {
    src: phone_mock_namespaceObject,
    width: "200"
  }), /*#__PURE__*/react.createElement("img", {
    src: props.display,
    className: MobileMock_styles.display
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/CreateTree/create-tree.gif
const create_tree_namespaceObject = __webpack_require__.p + "f3045c2677f9bdbb752c.gif";
;// CONCATENATED MODULE: ./src/components/Guides/CreateTree/edit-tree.gif
const edit_tree_namespaceObject = __webpack_require__.p + "84d01e2a2a8a648ac00e.gif";
;// CONCATENATED MODULE: ./src/components/Guides/CreateTree/index.jsx






/* harmony default export */ const CreateTree = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(GuideIndexLink, null), /*#__PURE__*/react.createElement("h1", null, "Create a Tree"), /*#__PURE__*/react.createElement("p", null, "In this guide you can find out how to create your first tree or remind yourself how to add more to your collection."), /*#__PURE__*/react.createElement("h2", null, "Go To Create a New Tree View"), /*#__PURE__*/react.createElement("p", null, "You can get to the create tree view by opening the side navigation, Scroll to the ", /*#__PURE__*/react.createElement("strong", null, "Your Trees"), " header and ", /*#__PURE__*/react.createElement("strong", null, "Create New"), " will always be at the top of this list."), /*#__PURE__*/react.createElement(MobileMock, {
    display: create_tree_namespaceObject
  }), /*#__PURE__*/react.createElement("h3", null, "The Title, Description & Cover Image"), /*#__PURE__*/react.createElement("p", null, "A trees Title, Descriptions and Cover Image are shown when a tree is displayed in the gallery and in the tree info pane."), /*#__PURE__*/react.createElement("p", null, "You can emphasize parts of a trees description using the basic formatting options provided such as ", /*#__PURE__*/react.createElement("b", null, "Bold"), ", ", /*#__PURE__*/react.createElement("i", null, "Italic"), " and ", /*#__PURE__*/react.createElement("u", null, "Underline"), "."), /*#__PURE__*/react.createElement("p", null, "Once you've set everything you want hit ", /*#__PURE__*/react.createElement("strong", null, "Create Tree"), " and you'll be taken to the tree editor for your new tree."), /*#__PURE__*/react.createElement("h2", null, "Update The Tree Details"), /*#__PURE__*/react.createElement("p", null, "You can update the details you set when creating your tree by finding ", /*#__PURE__*/react.createElement("strong", null, "Tree Details"), " under the ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " menu in the tree editor toolbar."), /*#__PURE__*/react.createElement(MobileMock, {
    display: edit_tree_namespaceObject
  }), /*#__PURE__*/react.createElement(GuideNavLinks, {
    nextLink: "/guides/tree-editor",
    nextText: "The Tree Editor"
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/TreeEditor/tree-editor-toolbar.gif
const tree_editor_toolbar_namespaceObject = __webpack_require__.p + "46919135afabd43a5661.gif";
;// CONCATENATED MODULE: ./src/components/Guides/TreeEditor/tree-node.png
const tree_node_namespaceObject = __webpack_require__.p + "ffa35d879d207606740d.png";
;// CONCATENATED MODULE: ./src/components/Guides/TreeEditor/index.jsx





/* harmony default export */ const TreeEditor = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(GuideIndexLink, null), /*#__PURE__*/react.createElement("h1", null, "The Tree Editor"), /*#__PURE__*/react.createElement("p", null, "Once you've created your tree before you dive in make sure you're familiar with the tree editor. Get to know it, take it out for dinner, live a long and happy life together or something along those lines."), /*#__PURE__*/react.createElement("h2", null, "The Tree Editor Toolbar"), /*#__PURE__*/react.createElement("img", {
    src: tree_editor_toolbar_namespaceObject,
    width: "100%"
  }), /*#__PURE__*/react.createElement("p", null, "The tree editor toolbar lets you get to many areas when it comes to editing your tree."), /*#__PURE__*/react.createElement("h3", null, "Actions - Save Tree"), /*#__PURE__*/react.createElement("p", null, "Under ", /*#__PURE__*/react.createElement("strong", null, "Actions"), " you can save your tree. The plum tree auto saves as you modify your tree but this lets you be certain everything is saved. A success message will appear to confirm the save."), /*#__PURE__*/react.createElement("h3", null, "Actions - Publish Tree"), /*#__PURE__*/react.createElement("p", null, "Under ", /*#__PURE__*/react.createElement("strong", null, "Actions"), " when you click ", /*#__PURE__*/react.createElement("strong", null, "Publish Tree"), " you'll be given the options to make your tree public and if you want it listed in the gallery."), /*#__PURE__*/react.createElement("p", null, "We go into more details of this in the guide Publish Your Tree."), /*#__PURE__*/react.createElement("h3", null, "Actions - Delete Tree"), /*#__PURE__*/react.createElement("p", null, "If you no longer want a tree you can delete it. You'll be asked to confirm if you want to delete a tree incase you click this option accidently."), /*#__PURE__*/react.createElement("p", null, "If a tree is public or in the gallery these copies will still remain unless you unpublish your tree before you delete it."), /*#__PURE__*/react.createElement("p", null, "If you delete a tree accidentailly you'll have to get in contact with us to try and recover it."), /*#__PURE__*/react.createElement("h3", null, "Edit - Tree Details"), /*#__PURE__*/react.createElement("p", null, "Under ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " you can update the tree details you entered when you first created your tree."), /*#__PURE__*/react.createElement("p", null, "These are things such as the trees title, description or cover image wich all shown in the tree info pane and gallery if the tree is pblished there."), /*#__PURE__*/react.createElement("h3", null, "Edit - People in Tree"), /*#__PURE__*/react.createElement("p", null, "Before you start creating your trees links between sims, their children, parents and partners you'll need to have some Sims at hand."), /*#__PURE__*/react.createElement("p", null, "Going to ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " and selecting ", /*#__PURE__*/react.createElement("strong", null, "People in Tree"), " takes you to the people manager where you can add, edit or delete people you will be placing in yur tree."), /*#__PURE__*/react.createElement("p", null, "The guide ", /*#__PURE__*/react.createElement("strong", null, "Adding/Editing Sims"), " goes into more details on what you can do there and how."), /*#__PURE__*/react.createElement("h3", null, "Preview Mode"), /*#__PURE__*/react.createElement("p", null, "You can toggle preview mode which will hide any buttons in the tree below the toolbar to show you how a tree will look once published."), /*#__PURE__*/react.createElement("p", null, "Remeber to turn it off to be able to continue to edit the trees structure."), /*#__PURE__*/react.createElement("h2", null, "The Tree Structure"), /*#__PURE__*/react.createElement("p", null, "The Plum Tree seperates the Sims and the structure of your trees into two seperate concepts. You'll create some Sims and you'll also create a structure that shows the links between parents and children."), /*#__PURE__*/react.createElement("p", null, "Then you'll place the Sims you created into the structure you created to form a family tree."), /*#__PURE__*/react.createElement("img", {
    src: tree_node_namespaceObject,
    width: "150",
    style: {
      margin: '0px auto',
      display: 'block'
    }
  }), /*#__PURE__*/react.createElement("p", null, "When you first create a tree below the toolbar you'll see a single empty ", /*#__PURE__*/react.createElement("strong", null, "Node"), "."), /*#__PURE__*/react.createElement("p", null, "Think of a ", /*#__PURE__*/react.createElement("strong", null, "Node"), " as a point in a tree where you'll add a Sim and their partners."), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Nodes"), " below this one signify the children of the Sim and their partner(s) above."), /*#__PURE__*/react.createElement("p", null, "Each ", /*#__PURE__*/react.createElement("strong", null, "Nodes"), " has two buttons. The one to the left showing the wrench lets you add details to the ", /*#__PURE__*/react.createElement("strong", null, "Node"), " such as the Sim, their partners, and details about how the sim of the ", /*#__PURE__*/react.createElement("strong", null, "Node"), " was conceived by their parents (i.e. were they adopted, cloned, or result of alien abduction \uD83D\uDC7D)."), /*#__PURE__*/react.createElement("p", null, "The button below allows you to add child ", /*#__PURE__*/react.createElement("strong", null, "Nodes"), ", each you can setup in the same was as the inital ", /*#__PURE__*/react.createElement("strong", null, "Node"), " by clicking the wrench for that child."), /*#__PURE__*/react.createElement("p", null, "You can keep adding as many child ", /*#__PURE__*/react.createElement("strong", null, "Nodes"), " to any depth as you need. Just remember you'll need to create the Sims you want to put in a ", /*#__PURE__*/react.createElement("strong", null, "Node"), " beforehand."), /*#__PURE__*/react.createElement(GuideNavLinks, {
    prevLink: "/guides/create-a-tree",
    prevText: "Create a Tree",
    nextLink: "/guides/create-and-edit-sims",
    nextText: "Adding/Editing Sims"
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/CreateAndEditSims/custom-trait.gif
const custom_trait_namespaceObject = __webpack_require__.p + "3e782ef5bf5e03c9367b.gif";
;// CONCATENATED MODULE: ./src/components/Guides/CreateAndEditSims/sim-info-panel.gif
const sim_info_panel_namespaceObject = __webpack_require__.p + "ca4e24ae3d1acd9bc76a.gif";
;// CONCATENATED MODULE: ./src/components/Guides/CreateAndEditSims/index.jsx






/* harmony default export */ const CreateAndEditSims = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(GuideIndexLink, null), /*#__PURE__*/react.createElement("h1", null, "Adding/Editing Sims"), /*#__PURE__*/react.createElement("p", null, "Every Sims family tree needs Sims so in these guides find out how to add, edit and all about the details you can give your sims to tell their life stories."), /*#__PURE__*/react.createElement("h2", null, "Add A New Sim"), /*#__PURE__*/react.createElement("p", null, "From the tree editor in the toolbar click ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " and select ", /*#__PURE__*/react.createElement("strong", null, "People in Tree"), "."), /*#__PURE__*/react.createElement("p", null, "You'll be shown the people manager view and from here click the ", /*#__PURE__*/react.createElement("strong", null, "Add Someone New"), " button."), /*#__PURE__*/react.createElement("p", null, "Fill out the details about your Sim and hit ", /*#__PURE__*/react.createElement("strong", null, "Create Person"), " at the bottom of the page."), /*#__PURE__*/react.createElement("h2", null, "Edit A Sim"), /*#__PURE__*/react.createElement("p", null, "Once you've created a Sim you can always go back to update them. This will update that Sim anywhere they are placed in the tree too."), /*#__PURE__*/react.createElement("p", null, "From the tree editor in the toolbar click ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " and select ", /*#__PURE__*/react.createElement("strong", null, "People in Tree"), "."), /*#__PURE__*/react.createElement("p", null, "You'll be shown the people manager. Find the Sim you want to edit in the list and click the ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " button toward the top right of that row."), /*#__PURE__*/react.createElement("p", null, "Fill out the details about your Sim and hit ", /*#__PURE__*/react.createElement("strong", null, "Update Person"), " at the bottom of the page."), /*#__PURE__*/react.createElement("h2", null, "Your Sims Details"), /*#__PURE__*/react.createElement("p", null, "The details you add to your Sim will show up when they are clicked in the tree in a panel to the right."), /*#__PURE__*/react.createElement(MobileMock, {
    display: sim_info_panel_namespaceObject
  }), /*#__PURE__*/react.createElement("p", null, "The details and some information on each is as follows:"), /*#__PURE__*/react.createElement("dl", null, /*#__PURE__*/react.createElement("dt", null, "Avatar"), /*#__PURE__*/react.createElement("dd", null, "Upload and crop (if needed) a picture of your Sim"), /*#__PURE__*/react.createElement("dt", null, "First and Last Name"), /*#__PURE__*/react.createElement("dd", null, "Name your Sim"), /*#__PURE__*/react.createElement("dt", null, "Description"), /*#__PURE__*/react.createElement("dd", null, "Give your Sim a story. Write a short bio or any other details you want and feel free to format it using the formatting options."), /*#__PURE__*/react.createElement("dt", null, "Traits, Aspirations and Life States"), /*#__PURE__*/react.createElement("dd", null, "Start typing to reveal options from the dropdown. You can add as many items to these as you want and if what you want isn't there you can add your own items too.", /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: custom_trait_namespaceObject,
    width: "290",
    style: {
      display: 'block',
      margin: '0px auto'
    }
  }), /*#__PURE__*/react.createElement("small", null, "Example of adding custom traits"))), /*#__PURE__*/react.createElement("dt", null, "More (Custom)"), /*#__PURE__*/react.createElement("dd", null, "Add any other details that can be displayed as a title and value. These items will be shown as a simple table in the Sims info panel.")), /*#__PURE__*/react.createElement(GuideNavLinks, {
    prevLink: "/guides/tree-editor",
    prevText: "The Tree Editor",
    nextLink: "/guides/placing-sims",
    nextText: "Placing Sims in Your Tree"
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/PlacingSims/set-node-person.gif
const set_node_person_namespaceObject = __webpack_require__.p + "cd1080c316f8c2e0b4f9.gif";
;// CONCATENATED MODULE: ./src/components/Guides/PlacingSims/add-partner.gif
const add_partner_namespaceObject = __webpack_require__.p + "9eaaa5e2c68be7505afc.gif";
;// CONCATENATED MODULE: ./src/components/Guides/PlacingSims/parents.gif
const parents_namespaceObject = __webpack_require__.p + "afe753bf71991416dac9.gif";
;// CONCATENATED MODULE: ./src/components/Guides/PlacingSims/index.jsx







/* harmony default export */ const PlacingSims = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(GuideIndexLink, null), /*#__PURE__*/react.createElement("h1", null, "Placing Sims in Your Tree"), /*#__PURE__*/react.createElement("p", null, "Sims and tree structures are two seperate things in The Plum Tree so once you've added some Sims you'll want to master how place them to form a tree."), /*#__PURE__*/react.createElement("div", {
    className: "side-note"
  }, "Remember you'll have to have already created your Sims before you can place them in a tree"), /*#__PURE__*/react.createElement("h2", null, "Add Your Sim"), /*#__PURE__*/react.createElement("p", null, "To set the Sim for a node click the ", /*#__PURE__*/react.createElement("strong", null, "Wrench Icon"), " on a node."), /*#__PURE__*/react.createElement("p", null, "Click ", /*#__PURE__*/react.createElement("strong", null, "Set This Nodes Person"), " and select one of you Sims from the dropdown."), /*#__PURE__*/react.createElement(MobileMock, {
    display: set_node_person_namespaceObject
  }), /*#__PURE__*/react.createElement("h2", null, "Add Your Sims Partners"), /*#__PURE__*/react.createElement("p", null, "To set a Sims partners in a node click the ", /*#__PURE__*/react.createElement("strong", null, "Wrench Icon"), " on a node."), /*#__PURE__*/react.createElement("p", null, "Click ", /*#__PURE__*/react.createElement("strong", null, "Set This Nodes Partners"), "."), /*#__PURE__*/react.createElement("p", null, "Add partner rows using the ", /*#__PURE__*/react.createElement("strong", null, "Add Partner"), " button. These will be displayed above each other to the right of the Node person."), /*#__PURE__*/react.createElement("p", null, "You can add multiple Sims into each partner row you add. These will display to the right of each previous partner in that row."), /*#__PURE__*/react.createElement("p", null, "It's up to you how you organise a node partners. Some people use multiple partners in a row to show a partners other partners. Others use it when a lots of partners take up too much space obove each other."), /*#__PURE__*/react.createElement("p", null, "When you're done click ", /*#__PURE__*/react.createElement("strong", null, "Save"), "."), /*#__PURE__*/react.createElement(MobileMock, {
    display: add_partner_namespaceObject
  }), /*#__PURE__*/react.createElement("h2", null, "Adding Children"), /*#__PURE__*/react.createElement("p", null, "To add children to a tree click the ", /*#__PURE__*/react.createElement("strong", null, "Plus Icon"), " below a node."), /*#__PURE__*/react.createElement("p", null, "On the new node click the ", /*#__PURE__*/react.createElement("strong", null, "Wrench Icon"), " and set the Node person as described above."), /*#__PURE__*/react.createElement("p", null, "When you're in the Node edit main screen go down and click ", /*#__PURE__*/react.createElement("strong", null, "Set This Nodes Parent Details "), "."), /*#__PURE__*/react.createElement("p", null, "When you set the nodes parents this information will be in that Sims info panel. This is useful if a parent Node has many partners, the child was adopted or something else that isn't made apparent by the tree itself."), /*#__PURE__*/react.createElement(MobileMock, {
    display: parents_namespaceObject
  }), /*#__PURE__*/react.createElement("h2", null, "Delete a Node"), /*#__PURE__*/react.createElement("p", null, "To delete a node ", /*#__PURE__*/react.createElement("strong", null, "and all of its child nodes"), " click the ", /*#__PURE__*/react.createElement("strong", null, "Wrench Icon"), " on a node."), /*#__PURE__*/react.createElement("p", null, "Scroll down to the bottom of the edit node page and click ", /*#__PURE__*/react.createElement("strong", null, "Delete This Node"), " and confirm you want to delete it."), /*#__PURE__*/react.createElement(GuideNavLinks, {
    prevLink: "/guides/create-and-edit-sims",
    prevText: "Adding/Editing Sims",
    nextLink: "/guides/publising-trees",
    nextText: "Publish Your Tree"
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/PublishTrees/index.jsx



/* harmony default export */ const PublishTrees = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(GuideIndexLink, null), /*#__PURE__*/react.createElement("h1", null, "Publish Your Tree"), /*#__PURE__*/react.createElement("p", null, "This guide takes you through how to make your trees public and share them in the gallery."), /*#__PURE__*/react.createElement("p", null, "When you publish a tree it will be a copy of the tree as it is at the time it was published."), /*#__PURE__*/react.createElement("p", null, "When you make changes in the tree editor these changes won't show in your published tree until you re-publish it."), /*#__PURE__*/react.createElement("h2", null, "Make Your Tree Public"), /*#__PURE__*/react.createElement("p", null, "In the tree editor toolbar go to ", /*#__PURE__*/react.createElement("strong", null, "Actions"), " and select ", /*#__PURE__*/react.createElement("strong", null, "Publish Tree"), " to open the publish tree view."), /*#__PURE__*/react.createElement("p", null, "On this page should be a note to say what URL your published tree will be at."), /*#__PURE__*/react.createElement("p", null, "Enable the switch for ", /*#__PURE__*/react.createElement("strong", null, "Is Public"), " and click ", /*#__PURE__*/react.createElement("strong", null, "Save"), "."), /*#__PURE__*/react.createElement("p", null, "Only people who you share the public link with will have access to your tree."), /*#__PURE__*/react.createElement("p", null, "Feel free to link to it from your own website or embed it using an iframe."), /*#__PURE__*/react.createElement("h2", null, "Publish Your Tree To The Gallery"), /*#__PURE__*/react.createElement("p", null, "Publishing a tree to the gallery means it more likely people will find your tree and peruse it."), /*#__PURE__*/react.createElement("p", null, "In the tree editor toolbar go to ", /*#__PURE__*/react.createElement("strong", null, "Actions"), " and select ", /*#__PURE__*/react.createElement("strong", null, "Publish Tree"), " to open the publish tree view."), /*#__PURE__*/react.createElement("p", null, "Enable the switch for ", /*#__PURE__*/react.createElement("strong", null, "Is Public"), "."), /*#__PURE__*/react.createElement("p", null, "Also enable the switch for ", /*#__PURE__*/react.createElement("strong", null, "Display in Gallery"), " and click ", /*#__PURE__*/react.createElement("strong", null, "Save"), "."), /*#__PURE__*/react.createElement("h2", null, "Unpublish Your Tree"), /*#__PURE__*/react.createElement("p", null, "You can unpublish your tree or remove it from the gallery by going to ", /*#__PURE__*/react.createElement("strong", null, "Actions"), " and select ", /*#__PURE__*/react.createElement("strong", null, "Publish Tree"), " from the tree editor toolbar."), /*#__PURE__*/react.createElement("p", null, "While in the publish tree view simply disable the switches as desired."), /*#__PURE__*/react.createElement("p", null, "Click ", /*#__PURE__*/react.createElement("strong", null, "Save"), " and your trees public visibility settings will be saved."), /*#__PURE__*/react.createElement(GuideNavLinks, {
    prevLink: "/guides/placing-sims",
    prevText: "Placing Sims in Your Tree",
    nextLink: "/guides/linking-sims-to-other-trees",
    nextText: "Link Sims Across Multiple Trees"
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/LinkSims/link-details.gif
const link_details_namespaceObject = __webpack_require__.p + "0faa546c51eea43d7b2e.gif";
;// CONCATENATED MODULE: ./src/components/Guides/LinkSims/add-link.gif
const add_link_namespaceObject = __webpack_require__.p + "ccab2a9990b4d82bed91.gif";
;// CONCATENATED MODULE: ./src/components/Guides/LinkSims/index.jsx






/* harmony default export */ const LinkSims = (function () {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(GuideIndexLink, null), /*#__PURE__*/react.createElement("h1", null, "Link Multiple Trees Together"), /*#__PURE__*/react.createElement("p", null, "Some Sims like to get around and can find themselves in more than one tree. This guide will take you through linking up those trees."), /*#__PURE__*/react.createElement("h2", null, "Preperations"), /*#__PURE__*/react.createElement("p", null, "Before you link two trees the first thing you'll have to do is make sure both trees are public. You can only link public trees since if someone is linked to a tree that isn't published and they don't own it they won't see anything."), /*#__PURE__*/react.createElement("p", null, "Next you'll have to gather the tree Id and person Id you want to link to. If you want to link back from the tree your linking to you'll have to get these details from both trees."), /*#__PURE__*/react.createElement("p", null, "To get the tree Id and person Id go to the tree you want to link to."), /*#__PURE__*/react.createElement("p", null, "Find the person you want to link to in that tree and click their avatar to open the persons details panel."), /*#__PURE__*/react.createElement("p", null, "At the very bottom is a small link titled ", /*#__PURE__*/react.createElement("strong", null, "Show Link Details"), ". Click it to reveal the tree Id and person Id and make a note of each."), /*#__PURE__*/react.createElement(MobileMock, {
    display: link_details_namespaceObject
  }), /*#__PURE__*/react.createElement("h2", null, "Linking Sims"), /*#__PURE__*/react.createElement("p", null, "In the tree you want to link from - in the editor toolbar under ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " click ", /*#__PURE__*/react.createElement("strong", null, "People in Tree"), "."), /*#__PURE__*/react.createElement("p", null, "Find the Sim you want to link from in the list of Sims and click the ", /*#__PURE__*/react.createElement("strong", null, "Link"), " button in that row."), /*#__PURE__*/react.createElement("p", null, "Enter a title for your link."), /*#__PURE__*/react.createElement("p", null, "Enter the tree Id and person Id you noted earlier from the tree and person to want to link to."), /*#__PURE__*/react.createElement("p", null, "Click the ", /*#__PURE__*/react.createElement("strong", null, "Link Person"), " button to create the link."), /*#__PURE__*/react.createElement(MobileMock, {
    display: add_link_namespaceObject
  }), /*#__PURE__*/react.createElement("p", null, "You can link out to as many trees as you want."), /*#__PURE__*/react.createElement("p", null, "Remember you may want to link back from the tree your linking to. Just repeat the steps above just the other way around."), /*#__PURE__*/react.createElement("p", null, "Now anytime your linked person is placed in your tree they will have an icon next to their avatar that reveals a list of the links you created."), /*#__PURE__*/react.createElement("h2", null, "Removing Links"), /*#__PURE__*/react.createElement("p", null, "In the tree you want to remove a link from - in the editor toolbar under ", /*#__PURE__*/react.createElement("strong", null, "Edit"), " click ", /*#__PURE__*/react.createElement("strong", null, "People in Tree"), "."), /*#__PURE__*/react.createElement("p", null, "Find the Sim you want to remove a link from in the list of Sims and click the ", /*#__PURE__*/react.createElement("strong", null, "Link"), " button in that row."), /*#__PURE__*/react.createElement("p", null, "Find the link you want to remove in the list and click ", /*#__PURE__*/react.createElement("strong", null, "Delete"), "."), /*#__PURE__*/react.createElement(GuideNavLinks, {
    prevLink: "/guides/publising-trees",
    prevText: "Publish Your Tree"
  }));
});
;// CONCATENATED MODULE: ./src/common/images/tragic-clown.jpg
const tragic_clown_namespaceObject = __webpack_require__.p + "0847a42246a512f958d7.jpg";
;// CONCATENATED MODULE: ./src/components/NotFound.jsx



/* harmony default export */ const NotFound = (function () {
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "sr-only"
  }, "Not Found"), /*#__PURE__*/react.createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Looks like this pages does not exist. ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/"
  }, "Return home?")), /*#__PURE__*/react.createElement("img", {
    src: tragic_clown_namespaceObject,
    width: "100%"
  }));
});
;// CONCATENATED MODULE: ./src/components/Guides/index.jsx










/* harmony default export */ const Guides = (function () {
  var location = (0,react_router_dist/* useLocation */.TH)();
  var myRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [location]);
  return /*#__PURE__*/react.createElement("div", {
    className: "container",
    ref: myRef
  }, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(GuidesHome, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/create-a-tree",
    element: /*#__PURE__*/react.createElement(CreateTree, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/tree-editor",
    element: /*#__PURE__*/react.createElement(TreeEditor, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/create-and-edit-sims",
    element: /*#__PURE__*/react.createElement(CreateAndEditSims, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/placing-sims",
    element: /*#__PURE__*/react.createElement(PlacingSims, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/publising-trees",
    element: /*#__PURE__*/react.createElement(PublishTrees, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/linking-sims-to-other-trees",
    element: /*#__PURE__*/react.createElement(LinkSims, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/*",
    element: /*#__PURE__*/react.createElement(NotFound, null)
  })));
});
;// CONCATENATED MODULE: ./src/components/Donate/index.jsx



/* harmony default export */ const Donate = (function () {
  var myRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "container",
    ref: myRef
  }, /*#__PURE__*/react.createElement("h1", null, "Why Donate?"), /*#__PURE__*/react.createElement("p", null, "Hi my name is Tobias."), /*#__PURE__*/react.createElement("p", null, "It has been fantastic creating a tool that so many people love and use to track their Sims legacies. However with this rise in popularity so do the monthly costs."), /*#__PURE__*/react.createElement("p", null, "The Plum Tree started out as personal project free to use for what I expected to only be a small number of users. Every donation goes a little way towards the monthly bills of storing terabytes of uploaded images, thousands of trees and handling the vast number of user traffic browsing the trees created."), /*#__PURE__*/react.createElement("p", null, "I humbly thank those of you that are able to contribute even just a little."), /*#__PURE__*/react.createElement(DonateBar, null), /*#__PURE__*/react.createElement(SiteStats, null));
});
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(56406);
// EXTERNAL MODULE: ./node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(68636);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);
;// CONCATENATED MODULE: ./src/components/Gallery/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Gallery_styles = ({"headerMask":"d45cb655","galleryHead":"e122ef94","galleryList":"a67bacb5","galleryTitle":"cf175884","treeTileNoDescription":"b9e8367d","paginationContainer":"d9fa03b8","pagination":"d2f063ff","paginationBtn":"ed9b9cfa","active":"b26a09f5","disabled":"e3cf5c86","paginationCount":"b0a70dd1","loading":"c2e4ea10","treeTile":"ea909829","tileArrow":"b514f84f","treeTileImage":"a64ab9d4","tileContent":"eac273c9","treeTileInfo":"cbed513e","treeTileTitle":"b4275186"});
;// CONCATENATED MODULE: ./src/components/Gallery/Pagination.jsx



/* harmony default export */ const Pagination = (function (_ref) {
  var loading = _ref.loading,
    page = _ref.page,
    items = _ref.items,
    totalPages = _ref.totalPages,
    changePage = _ref.changePage,
    search = _ref.search;
  if (loading) {
    return /*#__PURE__*/react.createElement("div", null);
  }
  var activeClass = [Gallery_styles.paginationBtn, Gallery_styles.active];
  var searchQuery = search.trim().length > 1 ? "&search=".concat(search) : '';
  var prevLink = "/gallery?page=".concat(page - 1).concat(searchQuery);
  var nextLink = "/gallery?page=".concat(page + 1).concat(searchQuery);
  var prevBtn = /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: Gallery_styles.paginationBtn,
    to: prevLink,
    onClick: function onClick() {
      return changePage(page - 1);
    }
  }, "\xAB");
  var nextBtn = /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: Gallery_styles.paginationBtn,
    to: nextLink,
    onClick: function onClick() {
      return changePage(page + 1);
    }
  }, "\xBB");

  // If we're at the boundary of prev or next use disabled buttons instead
  if (page <= 1) {
    prevBtn = /*#__PURE__*/react.createElement("div", {
      className: [Gallery_styles.paginationBtn, Gallery_styles.disabled].join(' ')
    }, "\xAB");
  } else if (page >= totalPages) {
    nextBtn = /*#__PURE__*/react.createElement("div", {
      className: [Gallery_styles.paginationBtn, Gallery_styles.disabled].join(' ')
    }, "\xBB");
  }

  // calculate page numbers
  var pages = [];
  if (totalPages <= 5) {
    for (var i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
  } else if (page <= 3) {
    pages = [1, 2, 3, 4, 5];
  } else if (page >= totalPages - 2) {
    pages = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  } else {
    pages = [page - 2, page - 1, page, page + 1, page + 2];
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Gallery_styles.paginationContainer
  }, /*#__PURE__*/react.createElement("div", {
    className: Gallery_styles.pagination
  }, prevBtn, pages.map(function (pageNum, index) {
    if (pageNum === page) {
      return /*#__PURE__*/react.createElement(dist/* Link */.rU, {
        key: index,
        className: activeClass.join(' '),
        to: "/gallery?page=".concat(pageNum).concat(search),
        onClick: function onClick() {
          return changePage(pageNum);
        }
      }, pageNum);
    }
    return /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      key: index,
      className: Gallery_styles.paginationBtn,
      to: "/gallery?page=".concat(pageNum).concat(search),
      onClick: function onClick() {
        return changePage(pageNum);
      }
    }, pageNum);
  }), nextBtn), /*#__PURE__*/react.createElement("div", {
    className: Gallery_styles.paginationCount
  }, items, " Items, Page ", page, " of ", totalPages, " pages"));
});
;// CONCATENATED MODULE: ./src/components/Loading/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Loading_styles = ({"loading":"db4f8468"});
;// CONCATENATED MODULE: ./src/components/Loading/index.jsx


/* harmony default export */ const Loading = (function (_ref) {
  var message = _ref.message;
  return /*#__PURE__*/react.createElement("div", {
    className: Loading_styles.loading
  }, /*#__PURE__*/react.createElement("p", null, message), /*#__PURE__*/react.createElement("i", {
    className: "icon-loading icon-spin"
  }));
});
;// CONCATENATED MODULE: ./src/components/Gallery/GalleryList.jsx





/* harmony default export */ const GalleryList = (function (_ref) {
  var loading = _ref.loading,
    trees = _ref.trees;
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Loading Gallery"
    });
  }
  var arrowIcon = ['fa', 'fa-chevron-right', Gallery_styles.tileArrow].join(' ');
  return /*#__PURE__*/react.createElement("div", {
    className: Gallery_styles.galleryList
  }, trees.map(function (tree) {
    var coverImage = /*#__PURE__*/react.createElement("div", {
      className: Gallery_styles.treeTileImage
    });
    var description = /*#__PURE__*/react.createElement("div", {
      className: Gallery_styles.treeTileNoDescription
    }, "No description");
    if (tree.cover) {
      var coverCss = {
        backgroundImage: "url(\"".concat(getUploadedImageUri(tree.cover, '600x320'), "\")")
      };
      coverImage = /*#__PURE__*/react.createElement("div", {
        className: Gallery_styles.treeTileImage,
        style: coverCss
      });
    }
    if (tree.description) {
      // check if description is just whitespace
      var tmp = document.createElement('DIV');
      tmp.innerHTML = tree.description;
      var text = tmp.textContent || tmp.innerText || '';
      if (text.trim().length > 0) {
        description = /*#__PURE__*/react.createElement("div", {
          className: Gallery_styles.treeTileDescription,
          dangerouslySetInnerHTML: {
            __html: tree.description
          }
        });
      }
    }
    return /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      key: tree._id,
      className: Gallery_styles.treeTile,
      to: "/public/".concat(tree._id)
    }, coverImage, /*#__PURE__*/react.createElement("div", {
      className: Gallery_styles.tileContent
    }, /*#__PURE__*/react.createElement("div", {
      className: Gallery_styles.treeTileInfo
    }, /*#__PURE__*/react.createElement("div", {
      className: Gallery_styles.treeTileTitle
    }, tree.title), description), /*#__PURE__*/react.createElement("i", {
      className: arrowIcon
    })));
  }));
});
;// CONCATENATED MODULE: ./src/components/Gallery/index.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Gallery_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Gallery_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Gallery_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gallery_arrayLikeToArray(o, minLen); }
function Gallery_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const Gallery = (function (_ref) {
  var location = _ref.location;
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useSearchParams = (0,dist/* useSearchParams */.lr)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    trees = _useState2[0],
    setTrees = _useState2[1];
  var _useState3 = (0,react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = (0,react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    totalPages = _useState8[0],
    setTotalPages = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  (0,react.useEffect)(function () {
    setSearch(searchParams.get('search') || '');
  }, []);
  (0,react.useEffect)(function () {
    loadGalleryItems();
  }, [search]);
  function loadGalleryItems(page) {
    // if we didn't load the page use the page URL query parameter or default to
    // page 1
    if (!page) {
      page = parseInt(searchParams.get('page')) || 1;
    }
    setTrees([]);
    setPage(page);
    setLoading(true);
    setTotalPages(0); // we don't know the total pages at this point

    axios/* default.get */.Z.get("/api/published?page[number]=".concat(page, "&search=").concat(search)).then(function (response) {
      setTotalPages(lodash_get_default()(response, 'data.meta.totalPages', null));
      setTrees(lodash_get_default()(response, 'data.data', []));
      setLoading(false);
    }).catch(function (error) {
      setLoading(false);
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Error when loading gallery trees'), {
        autoClose: false
      });
    });
  }
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (search.trim().length > 1) {
      navigate("/gallery?page=1&search=".concat(search));
    } else {
      navigate('/gallery?page=1');
    }
    loadGalleryItems(1);
  }
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: Gallery_styles.headerMask
  }), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: Gallery_styles.galleryHead
  }, /*#__PURE__*/react.createElement("h1", {
    className: Gallery_styles.galleryTitle
  }, "Gallery"), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSearchSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "input-group",
    styles: "max-wid"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    className: "sr-only"
  }, "Search"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "text",
    name: "search",
    placeholder: "Search",
    value: search,
    onChange: function onChange(ev) {
      return setSearch(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Search"))), /*#__PURE__*/react.createElement(Pagination, {
    loading: loading,
    page: page,
    totalPages: totalPages,
    items: trees.length,
    search: search,
    changePage: loadGalleryItems
  })), /*#__PURE__*/react.createElement(GalleryList, {
    loading: loading,
    trees: trees
  }), /*#__PURE__*/react.createElement(Pagination, {
    loading: loading,
    page: page,
    totalPages: totalPages,
    items: trees.length,
    search: search,
    changePage: loadGalleryItems
  })));
});
;// CONCATENATED MODULE: ./src/components/Signup/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Signup_styles = ({"signupPanel":"a87fe995","sunsetAlert":"a3c4bfa2"});
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(17933);
;// CONCATENATED MODULE: ./src/common/js/auth.js




/**
 * Util object for dealing with the auth token.
 */
/* harmony default export */ const auth = ({
  /**
   * Save auth token to local storage
   * @param  {string} token JWT token to save
   * @return {void}
   */
  saveToken: function saveToken(token) {
    localStorage.setItem('token', token);
  },
  /**
   * Get the auth token from local storage and decode to get the claims
   * @return {object} JWT claims object
   */
  getSession: function getSession() {
    return (0,jsonwebtoken.decode)(localStorage.getItem('token'));
  },
  /**
   * Get the raw JWT token from local storage
   * @return {string} JWT token
   */
  getToken: function getToken() {
    return localStorage.getItem('token');
  },
  /**
   * Delete the token from local storage
   * @return {void}
   */
  clearToken: function clearToken() {
    localStorage.removeItem('token');
  },
  /**
   * Checks if a error given is a axios error with a response code of 403. If so
   * we redirect the user to login and let them know they need to sign in again.
   * @param {Object} error
   * @param {Object} navigate
   * @returns
   */
  loginRequired: function loginRequired(error, navigate) {
    if (lodash_get_default()(error, 'response.status') === 403) {
      localStorage.removeItem('token');
      react_toastify/* toast.warn */.Am.warn('You\'re session expired. Please login again.');
      navigate('/login');
      return true;
    }
    return false;
  }
});
;// CONCATENATED MODULE: ./src/components/Signup/index.jsx
function Signup_slicedToArray(arr, i) { return Signup_arrayWithHoles(arr) || Signup_iterableToArrayLimit(arr, i) || Signup_unsupportedIterableToArray(arr, i) || Signup_nonIterableRest(); }
function Signup_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Signup_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Signup_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Signup_arrayLikeToArray(o, minLen); }
function Signup_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Signup_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Signup_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ const Signup = (function () {
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(''),
    _useState2 = Signup_slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = Signup_slicedToArray(_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = Signup_slicedToArray(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  function handleSubmit(event) {
    event.preventDefault();
    axios/* default.post */.Z.post('/api/account/signup', {
      username: username,
      email: email,
      password: password
    }).then(function (response) {
      var token = response.data.token;
      auth.saveToken(token);
      react_toastify/* toast.success */.Am.success('Account created!');
      navigate('/');
    }).catch(function (error) {
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Signup_styles.signupPanel
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/sunset",
    className: Signup_styles.sunsetAlert
  }, "The Plum Tree App shutdown 1st Dec 2023. Click to find out more."), /*#__PURE__*/react.createElement("h1", null, "Create Account"), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Username"), /*#__PURE__*/react.createElement("input", {
    id: "username-input",
    className: "form-control",
    placeholder: "BobPancake100",
    type: "text",
    name: "username",
    value: username,
    onChange: function onChange(ev) {
      return setUsername(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Email"), /*#__PURE__*/react.createElement("input", {
    id: "email-input",
    className: "form-control",
    placeholder: "bob@example.com",
    type: "text",
    name: "email",
    value: email,
    onChange: function onChange(ev) {
      return setEmail(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Password"), /*#__PURE__*/react.createElement("input", {
    id: "password-input",
    className: "form-control",
    type: "password",
    name: "password",
    value: password,
    onChange: function onChange(ev) {
      return setPassword(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("button", {
    id: "signup-submit",
    type: "submit",
    className: "btn btn-primary"
  }, "Create Account"), /*#__PURE__*/react.createElement("p", null, "Already got an account? ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/login"
  }, "Click here to login."))));
});
;// CONCATENATED MODULE: ./src/components/Login/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Login_styles = ({"loginPanel":"fff3650e","sunsetAlert":"d95529ac"});
;// CONCATENATED MODULE: ./src/components/Login/index.jsx
function Login_slicedToArray(arr, i) { return Login_arrayWithHoles(arr) || Login_iterableToArrayLimit(arr, i) || Login_unsupportedIterableToArray(arr, i) || Login_nonIterableRest(); }
function Login_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Login_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Login_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Login_arrayLikeToArray(o, minLen); }
function Login_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Login_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Login_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ const Login = (function (_ref) {
  var loadUsersTree = _ref.loadUsersTree;
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(''),
    _useState2 = Login_slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = Login_slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  function handleSubmit(event) {
    event.preventDefault();
    axios/* default.post */.Z.post('/api/account/signin', {
      username: username,
      password: password
    }).then(function (response) {
      var token = lodash_get_default()(response, 'data.token');
      auth.saveToken(token);
      var session = auth.getSession();
      react_toastify/* toast.success */.Am.success("Welcome back ".concat(session.username, "!"));
      navigate('/');
      axios/* default.get */.Z.get('/api/trees', {
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (response) {
        loadUsersTree(response.data);
      }).catch(function (error) {
        react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Oops, we failed fetch your trees. Refresh the page to try again.'), {
          autoClose: false
        });
      });
    }).catch(function (error) {
      console.log(error);
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Login_styles.loginPanel
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/sunset",
    className: Login_styles.sunsetAlert
  }, "The Plum Tree App shutdown 1st Dec 2023. Click to find out more."), /*#__PURE__*/react.createElement("h1", null, "Login"), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Username"), /*#__PURE__*/react.createElement("input", {
    id: "username-input",
    className: "form-control",
    type: "text",
    name: "username",
    value: username,
    onChange: function onChange(ev) {
      return setUsername(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Password"), /*#__PURE__*/react.createElement("input", {
    id: "password-input",
    className: "form-control",
    type: "password",
    name: "password",
    value: password,
    onChange: function onChange(ev) {
      return setPassword(ev.target.value);
    },
    autoComplete: "on"
  })), /*#__PURE__*/react.createElement("button", {
    id: "login-submit",
    type: "submit",
    className: "btn btn-primary"
  }, "Login"), /*#__PURE__*/react.createElement("p", null, "Not signed up yet? ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/signup"
  }, "Click here to create an account.")), /*#__PURE__*/react.createElement("p", null, "Forgot your password? ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/forgot-password"
  }, "Click here to reset it.")), /*#__PURE__*/react.createElement("p", null, "Can't remember your username? ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/forgot-username"
  }, "Click here retreive it."))));
});
;// CONCATENATED MODULE: ./src/containers/Login.jsx



var mapStateToProps = function mapStateToProps(state) {
  return {
    trees: state.usersTrees
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadUsersTree: function loadUsersTree(trees) {
      dispatch(actions_loadUsersTree(trees));
    }
  };
};
/* harmony default export */ const containers_Login = ((0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps)(Login));
;// CONCATENATED MODULE: ./src/components/Account/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Account_styles = ({"username":"be3905f0"});
;// CONCATENATED MODULE: ./src/components/Account/index.jsx
function Account_slicedToArray(arr, i) { return Account_arrayWithHoles(arr) || Account_iterableToArrayLimit(arr, i) || Account_unsupportedIterableToArray(arr, i) || Account_nonIterableRest(); }
function Account_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Account_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Account_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Account_arrayLikeToArray(o, minLen); }
function Account_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Account_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Account_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/* harmony default export */ const Account = (function () {
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(true),
    _useState2 = Account_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = Account_slicedToArray(_useState3, 2),
    username = _useState4[0],
    setUsername = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = Account_slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = Account_slicedToArray(_useState7, 2),
    oldPassword = _useState8[0],
    setOldPassword = _useState8[1]; // current password when user it updating password
  var _useState9 = (0,react.useState)(''),
    _useState10 = Account_slicedToArray(_useState9, 2),
    newPassword = _useState10[0],
    setNewPassword = _useState10[1];
  var _useState11 = (0,react.useState)(''),
    _useState12 = Account_slicedToArray(_useState11, 2),
    confirmPassword = _useState12[0],
    setConfirmPassword = _useState12[1];
  var _useState13 = (0,react.useState)(''),
    _useState14 = Account_slicedToArray(_useState13, 2),
    deletePassword = _useState14[0],
    setDeletePassword = _useState14[1];
  (0,react.useEffect)(function () {
    var authToken = auth.getToken();
    if (!authToken) {
      setLoading(false);
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    axios/* default.get */.Z.get('/api/user', {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      setEmail(lodash_get_default()(response, 'data.email', ''));
      setUsername(lodash_get_default()(response, 'data._id', ''));
      setLoading(false);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      setLoading(false);
      react_toastify/* toast.error */.Am.error('Failed to get account info', {
        autoClose: false
      });
    });
  }, []);
  function handleChange(ev) {
    var inputName = ev.target.name;
    var inputValue = ev.target.value;
    switch (inputName) {
      case 'email':
        setEmail(inputValue);
        break;
      case 'oldPassword':
        setOldPassword(inputValue);
        break;
      case 'newPassword':
        setNewPassword(inputValue);
        break;
      case 'confirmPassword':
        setConfirmPassword(inputValue);
        break;
      case 'deletePassword':
        setDeletePassword(inputValue);
        break;
    }
  }
  function handleEmailSubmit(ev) {
    ev.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    if (!isValidEmail(email)) {
      return react_toastify/* toast.warn */.Am.warn('Looks like your new email is not valid', {
        autoClose: false
      });
    }
    axios/* default.put */.Z.put('/api/user/email', {
      email: email
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Your email address has been updated');
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating your email'), {
        autoClose: false
      });
    });
  }
  function handlePasswordSubmit(ev) {
    ev.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    if (newPassword !== confirmPassword) {
      return react_toastify/* toast.warn */.Am.warn('Looks like your new and confirmation passwords don\'t match', {
        autoClose: false
      });
    }
    if (newPassword.length < 8) {
      return react_toastify/* toast.warn */.Am.warn('Your new password should be at least 8 characters', {
        autoClose: false
      });
    }
    axios/* default.put */.Z.put('/api/user/password', {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Your password has been updated');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating your password'), {
        autoClose: false
      });
    });
  }
  function handleDeleteAccountSubmit(ev) {
    ev.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    if (newPassword !== confirmPassword) {
      return react_toastify/* toast.warn */.Am.warn('Looks like your new and confirmation passwords don\'t match', {
        autoClose: false
      });
    }
    if (deletePassword.length === 0) {
      return react_toastify/* toast.warn */.Am.warn('Your password is required to delete this account', {
        autoClose: false
      });
    }
    axios/* default.delete */.Z["delete"]('/api/account', {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      },
      data: {
        password: deletePassword
      }
    }).then(function () {
      var session = auth.getSession();
      auth.clearToken();
      react_toastify/* toast.success */.Am.success("Account ".concat(session.username, " has now been deleted"));
      navigate('/');
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating your password'), {
        autoClose: false
      });
    });
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Loading your account details..."
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "Account Settings ", /*#__PURE__*/react.createElement("span", {
    className: Account_styles.username
  }, "(", username, ")")), /*#__PURE__*/react.createElement("p", null, "In account settings you can update your email address and/or password."), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react.createElement("h2", null, "Update Email"), /*#__PURE__*/react.createElement("div", {
    className: "side-note"
  }, /*#__PURE__*/react.createElement("p", null, "It's important to keep your email address up to date incase you ever need to reset your password.")), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleEmailSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Email"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    placeholder: "bob@example.com",
    type: "email",
    name: "email",
    value: email,
    onChange: handleChange
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Update Email"))), /*#__PURE__*/react.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react.createElement("h2", null, "Update Password"), /*#__PURE__*/react.createElement("form", {
    onSubmit: handlePasswordSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Current Password"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "password",
    name: "oldPassword",
    value: oldPassword,
    onChange: handleChange,
    autoComplete: "off"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "New Password"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "password",
    name: "newPassword",
    value: newPassword,
    onChange: handleChange,
    autoComplete: "off"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Confirm Password"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "password",
    name: "confirmPassword",
    value: confirmPassword,
    onChange: handleChange,
    autoComplete: "off"
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Update Password"))), /*#__PURE__*/react.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react.createElement("h2", null, "Delete Account"), /*#__PURE__*/react.createElement("p", null, "If you no longer want to keep your Plum Tree account you can delete it and any data associated with it. However once deleted an account cannot be recovered."), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleDeleteAccountSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Password"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "password",
    name: "deletePassword",
    value: deletePassword,
    onChange: handleChange,
    autoComplete: "off"
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "Delete Account")))));
});
;// CONCATENATED MODULE: ./src/components/ForgotPassword/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const ForgotPassword_styles = ({"forgotPasswordPanel":"e5ef0b26"});
;// CONCATENATED MODULE: ./src/components/ForgotPassword/index.jsx
function ForgotPassword_slicedToArray(arr, i) { return ForgotPassword_arrayWithHoles(arr) || ForgotPassword_iterableToArrayLimit(arr, i) || ForgotPassword_unsupportedIterableToArray(arr, i) || ForgotPassword_nonIterableRest(); }
function ForgotPassword_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ForgotPassword_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ForgotPassword_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ForgotPassword_arrayLikeToArray(o, minLen); }
function ForgotPassword_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ForgotPassword_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ForgotPassword_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const ForgotPassword = (function () {
  var _useState = (0,react.useState)(''),
    _useState2 = ForgotPassword_slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  function handleSubmit(event) {
    event.preventDefault();
    axios/* default.post */.Z.post('/api/account/forgotpassword', {
      username: username
    }).then(function () {
      react_toastify/* toast.success */.Am.success('You should receive an email with password reset instructions shortly');
    }).catch(function (error) {
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: ForgotPassword_styles.forgotPasswordPanel
  }, /*#__PURE__*/react.createElement("h1", null, "Forgot Password"), /*#__PURE__*/react.createElement("p", null, "Forgot your password? Just tell us your username and we'll email you instructions on how to reset your password."), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Username"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "text",
    name: "username",
    value: username,
    onChange: function onChange(ev) {
      return setUsername(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit")));
});
;// CONCATENATED MODULE: ./src/components/ResetPassword/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const ResetPassword_styles = ({"resetPasswordPanel":"afb39959"});
;// CONCATENATED MODULE: ./src/components/ResetPassword/index.jsx
function ResetPassword_slicedToArray(arr, i) { return ResetPassword_arrayWithHoles(arr) || ResetPassword_iterableToArrayLimit(arr, i) || ResetPassword_unsupportedIterableToArray(arr, i) || ResetPassword_nonIterableRest(); }
function ResetPassword_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ResetPassword_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ResetPassword_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ResetPassword_arrayLikeToArray(o, minLen); }
function ResetPassword_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ResetPassword_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ResetPassword_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const ResetPassword = (function () {
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useSearchParams = (0,dist/* useSearchParams */.lr)(),
    _useSearchParams2 = ResetPassword_slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var _useState = (0,react.useState)(''),
    _useState2 = ResetPassword_slicedToArray(_useState, 2),
    password = _useState2[0],
    setPassword = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = ResetPassword_slicedToArray(_useState3, 2),
    confirmPassword = _useState4[0],
    setConfirmPassword = _useState4[1];
  function handleSubmit(event) {
    event.preventDefault();
    var token = searchParams.get('t');
    var username = searchParams.get('u');
    if (password !== confirmPassword) {
      return react_toastify/* toast.warn */.Am.warn('Your new password and the confirm password does not match');
    }
    axios/* default.post */.Z.post('/api/account/resetpassword', {
      username: username,
      password: password,
      token: token
    }).then(function (response) {
      react_toastify/* toast.success */.Am.success('Password has been saved');
      navigate('/');
    }).catch(function (error) {
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: ResetPassword_styles.resetPasswordPanel
  }, /*#__PURE__*/react.createElement("h1", null, "Reset Password"), /*#__PURE__*/react.createElement("p", null, "Enter what you want your new password to be."), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "New Password"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "password",
    name: "password",
    value: password,
    onChange: function onChange(ev) {
      return setPassword(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Confirm Password"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "password",
    name: "confirmPassword",
    value: confirmPassword,
    onChange: function onChange(ev) {
      return setConfirmPassword(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit")));
});
;// CONCATENATED MODULE: ./src/components/ForgotUsername/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const ForgotUsername_styles = ({"forgotUsernamePanel":"eb30563d"});
;// CONCATENATED MODULE: ./src/components/ForgotUsername/index.jsx
function ForgotUsername_slicedToArray(arr, i) { return ForgotUsername_arrayWithHoles(arr) || ForgotUsername_iterableToArrayLimit(arr, i) || ForgotUsername_unsupportedIterableToArray(arr, i) || ForgotUsername_nonIterableRest(); }
function ForgotUsername_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ForgotUsername_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ForgotUsername_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ForgotUsername_arrayLikeToArray(o, minLen); }
function ForgotUsername_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ForgotUsername_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ForgotUsername_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const ForgotUsername = (function () {
  var _useState = (0,react.useState)(''),
    _useState2 = ForgotUsername_slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      return react_toastify/* toast.error */.Am.error('Email address is required', {
        autoClose: false
      });
    }
    axios/* default.post */.Z.post('/api/account/forgotusername', {
      email: email
    }).then(function () {
      react_toastify/* toast.success */.Am.success('You should receive an email with your username(s) shortly');
    }).catch(function (error) {
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: ForgotUsername_styles.forgotUsernamePanel
  }, /*#__PURE__*/react.createElement("h1", null, "Forgot Username"), /*#__PURE__*/react.createElement("p", null, "Forgot your username? Enter the email you used to signup with and we'll send you all the usernames linked to it."), /*#__PURE__*/react.createElement("div", {
    className: "side-note"
  }, "Note that usernames are case sensitive as this can catch people out from time to time."), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Email"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "email",
    name: "email",
    value: email,
    onChange: function onChange(ev) {
      return setEmail(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit")));
});
;// CONCATENATED MODULE: ./src/components/Support/index.jsx


/* harmony default export */ const Support = (function () {
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "Support"), /*#__PURE__*/react.createElement("h2", null, "FAQ"), /*#__PURE__*/react.createElement("h3", null, "I forgot my username"), /*#__PURE__*/react.createElement("p", null, "Head to ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/forgot-username"
  }, "our forgot username page"), " and enter your email. We'll send you an email with all the usernames linked to that email address."), /*#__PURE__*/react.createElement("p", null, "Remember usernames are case sensitive."), /*#__PURE__*/react.createElement("h3", null, "I forgot my password"), /*#__PURE__*/react.createElement("p", null, "Head to ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/forgot-password"
  }, "our forgot password page"), " and enter your username. We'll email you a unique link that lets you set a new password."), /*#__PURE__*/react.createElement("h3", null, "I didn't receive my forgot username or password reset email"), /*#__PURE__*/react.createElement("p", null, "Sometimes automated emails like the ones we send for username reminders or password resets don't get through to your inbox so check your spam folders too."), /*#__PURE__*/react.createElement("h3", null, "Issues Downloading Trees"), /*#__PURE__*/react.createElement("p", null, "Since the release of the downloading trees feature there have been several patches to fix most peoples issues. However some users with impressively exceptionally large trees may still see download errors. For the small number of users this now affects I would ask you to drop me an email and I will manually generate a download link for you."), /*#__PURE__*/react.createElement("h3", null, "Downloaded Trees Are Blank"), /*#__PURE__*/react.createElement("p", null, "A few users reported an issue where opening the downloaded tree only shows a blank page. Generally the cause is the downloaded \".zip\" file needs to be extracted before opening the \"tree.html\" file inside. You'll need to right click on the downloaded file and you should see an option to \"Extract all\" or similar. Once you've done that you can open the file in the extracted folder location."), /*#__PURE__*/react.createElement("h2", null, "Email Me"), /*#__PURE__*/react.createElement("p", null, "I'm not currently working on new features. I've always been happy to listen to ideas but due to other commitments cannot address most of these."), /*#__PURE__*/react.createElement("p", null, "Also due to limited time I get on the plum tree and the number of requests that come through I would like to set expectations that responses are likely slow to arrive."), /*#__PURE__*/react.createElement("p", null, "However if you are facing issues you can get in touch via ", /*#__PURE__*/react.createElement("strong", null, "theplumtreeinbox@gmail.com"), " and I'll try to help as best I can."));
});
// EXTERNAL MODULE: ./node_modules/draft-js-export-html/esm/main.js + 4 modules
var main = __webpack_require__(39581);
// EXTERNAL MODULE: ./node_modules/draft-js-import-html/esm/main.js + 8 modules
var esm_main = __webpack_require__(36993);
// EXTERNAL MODULE: ./node_modules/draft-js/lib/Draft.js
var Draft = __webpack_require__(28584);
;// CONCATENATED MODULE: ./src/components/RichEditor/index.jsx
function RichEditor_slicedToArray(arr, i) { return RichEditor_arrayWithHoles(arr) || RichEditor_iterableToArrayLimit(arr, i) || RichEditor_unsupportedIterableToArray(arr, i) || RichEditor_nonIterableRest(); }
function RichEditor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function RichEditor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RichEditor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RichEditor_arrayLikeToArray(o, minLen); }
function RichEditor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function RichEditor_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function RichEditor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var BLOCK_TYPES = [{
  icon: 'list-ul',
  style: 'unordered-list-item'
}, {
  icon: 'list-ol',
  style: 'ordered-list-item'
}];
var INLINE_STYLES = [{
  icon: 'bold',
  style: 'BOLD'
}, {
  icon: 'italic',
  style: 'ITALIC'
}, {
  icon: 'underline',
  style: 'UNDERLINE'
}, {
  icon: 'strikethrough',
  style: 'STRIKETHROUGH'
}];
/* harmony default export */ const RichEditor = (function (_ref) {
  var initialHtml = _ref.initialHtml,
    onUpdate = _ref.onUpdate;
  var _useState = (0,react.useState)(true),
    _useState2 = RichEditor_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = RichEditor_slicedToArray(_useState3, 2),
    editorState = _useState4[0],
    setEditorState = _useState4[1];
  var editorRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var editorState;
    if (initialHtml) {
      var contentState = (0,esm_main/* stateFromHTML */.M)(initialHtml);
      editorState = Draft.EditorState.createWithContent(contentState);
    } else {
      editorState = Draft.EditorState.createEmpty();
    }
    setEditorState(editorState);
    setLoading(false);
  }, []);
  (0,react.useEffect)(function () {
    if (editorState) {
      var content = editorState.getCurrentContent();
      var html = (0,main/* stateToHTML */.E)(content);
      onUpdate && onUpdate(html);
    }
  }, [editorState]);
  function handleChange(newEditorState) {
    setEditorState(newEditorState);
  }
  function handleFocus() {
    editorRef.current && editorRef.current.focus();
  }
  function onKeyCommand(command) {
    var newState = Draft.RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChange(newState);
      return true;
    }
    return false;
  }
  function handleTab(e) {
    var maxDepth = 4;
    this.handleChange(Draft.RichUtils.onTab(e, editorState, maxDepth));
  }
  function toggleBlockType(blockType) {
    handleChange(Draft.RichUtils.toggleBlockType(editorState, blockType));
  }
  function toggleInlineStyle(inlineStyle) {
    handleChange(Draft.RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, null);
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Description"), /*#__PURE__*/react.createElement(StylesToolbar, {
    editorState: editorState,
    toggleBlockType: toggleBlockType,
    toggleInlineStyle: toggleInlineStyle
  }), /*#__PURE__*/react.createElement("div", {
    className: "form-control draft-editor",
    onClick: handleFocus
  }, /*#__PURE__*/react.createElement(Draft.Editor, {
    editorState: editorState,
    handleKeyCommand: onKeyCommand,
    onChange: handleChange,
    onTab: handleTab,
    ref: editorRef,
    spellCheck: true
  })));
});
var StyleButton = function StyleButton(_ref2) {
  var onToggle = _ref2.onToggle,
    style = _ref2.style,
    active = _ref2.active,
    icon = _ref2.icon;
  function handleToggle(e) {
    e.preventDefault();
    onToggle(style);
  }
  return /*#__PURE__*/react.createElement("span", {
    className: active ? 'btn btn-primary' : 'btn btn-default',
    onMouseDown: handleToggle
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-".concat(icon)
  }));
};
var StylesToolbar = function StylesToolbar(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  var editorState = props.editorState;
  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  var handleInlineToggle = function handleInlineToggle(style) {
    return props.toggleInlineStyle(style);
  };
  var handleBlockToggle = function handleBlockToggle(style) {
    return props.toggleBlockType(style);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "input-group"
  }, INLINE_STYLES.map(function (type) {
    return /*#__PURE__*/react.createElement(StyleButton, {
      key: type.icon,
      icon: type.icon,
      active: currentStyle.has(type.style),
      onToggle: handleInlineToggle,
      style: type.style
    });
  }), BLOCK_TYPES.map(function (type) {
    return /*#__PURE__*/react.createElement(StyleButton, {
      key: type.icon,
      icon: type.icon,
      active: type.style === blockType,
      onToggle: handleBlockToggle,
      style: type.style
    });
  }));
};
;// CONCATENATED MODULE: ./src/components/trees/TreeDetails/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const TreeDetails_styles = ({"formBtn":"ae06d4bf","coverImage":"fefcd0b5"});
// EXTERNAL MODULE: ./node_modules/react-image-crop/dist/ReactCrop.min.js
var ReactCrop_min = __webpack_require__(18877);
var ReactCrop_min_default = /*#__PURE__*/__webpack_require__.n(ReactCrop_min);
;// CONCATENATED MODULE: ./src/components/trees/ImageManager/index.jsx
function ImageManager_slicedToArray(arr, i) { return ImageManager_arrayWithHoles(arr) || ImageManager_iterableToArrayLimit(arr, i) || ImageManager_unsupportedIterableToArray(arr, i) || ImageManager_nonIterableRest(); }
function ImageManager_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ImageManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ImageManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImageManager_arrayLikeToArray(o, minLen); }
function ImageManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ImageManager_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ImageManager_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ const ImageManager = (function (_ref) {
  var imagePreview = _ref.imagePreview,
    onImageChange = _ref.onImageChange,
    image = _ref.image,
    aspect = _ref.aspect,
    _ref$dir = _ref.dir,
    dir = _ref$dir === void 0 ? 'avatar' : _ref$dir;
  var fileRef = (0,react.useRef)(null);
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(false),
    _useState2 = ImageManager_slicedToArray(_useState, 2),
    uploading = _useState2[0],
    setUploading = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = ImageManager_slicedToArray(_useState3, 2),
    showCropper = _useState4[0],
    setShowCropper = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = ImageManager_slicedToArray(_useState5, 2),
    cropping = _useState6[0],
    setCropping = _useState6[1];
  var _useState7 = (0,react.useState)(null),
    _useState8 = ImageManager_slicedToArray(_useState7, 2),
    naturalHeight = _useState8[0],
    setNaturalHeight = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState10 = ImageManager_slicedToArray(_useState9, 2),
    naturalWidth = _useState10[0],
    setNaturalWidth = _useState10[1];
  var _useState11 = (0,react.useState)(null),
    _useState12 = ImageManager_slicedToArray(_useState11, 2),
    crop = _useState12[0],
    setCrop = _useState12[1];
  var _useState13 = (0,react.useState)(null),
    _useState14 = ImageManager_slicedToArray(_useState13, 2),
    percentCrop = _useState14[0],
    setPercentCrop = _useState14[1];
  var _useState15 = (0,react.useState)(getUploadedImageUri(image)),
    _useState16 = ImageManager_slicedToArray(_useState15, 2),
    cropImageUri = _useState16[0],
    setCropImageUri = _useState16[1];
  function selectImage(ev) {
    ev.preventDefault();
    fileRef.current.click();
  }

  /**
   * When a file is selected (a change on the file input) upload it
   * @param  {Object} event File input change event
   * @return {void}
   */
  function fileSelected(ev) {
    ev.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    setUploading(true);
    var file = fileRef.current.files[0];
    var type = file.type,
      size = file.size;
    var acceptedFileTypes = ['image/png', 'image/jpeg'];
    if (!acceptedFileTypes.includes(type)) {
      return react_toastify/* toast.info */.Am.info('File must be a JPG or PNG');
    }
    if (size > 10000000) {
      return react_toastify/* toast.info */.Am.info('Files must be under 10MB in size');
    }
    var uploadedFile;

    // get S3 signed URL
    axios/* default.get */.Z.get("/api/upload/url?type=".concat(type, "&dir=").concat(dir), {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      uploadedFile = response.data.filename;
      var options = {
        headers: {
          'Content-Type': type,
          'x-amz-acl': 'public-read'
        }
      };
      options.headers['x-amz-tagging'] = 'temp=true';

      // upload to S3
      return axios/* default.put */.Z.put(response.data.uploadURL, file, options);
    }).then(function () {
      onImageChange(uploadedFile);
      setCropImageUri(getOrigUploadedImageUri(uploadedFile));
      setUploading(false);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred uploading your file'), {
        autoClose: false
      });
    });
  }

  /**
   * Called when the selected crop area changes.
   * @param  {Object} crop New crop selection
   * @return {void}
   */
  function onCropChange(crop, percentCrop) {
    setCrop(crop);
    setPercentCrop(percentCrop);
  }

  /**
   * When an image loads in the cropper get its original dimension. This is
   * because ReactCrop uses percentages for its crop dimensions but our crop
   * endpoint uses pixels so some math is needed.
   * @param  {Object} image ReactCrop image object
   * @return {void}
   */
  function onImageLoaded(image) {
    setNaturalWidth(image.currentTarget.naturalWidth);
    setNaturalHeight(image.currentTarget.naturalHeight);
  }

  /**
   * Calculate the crop pixels and send details of dimensions and image to crop
   * to our crop endpoint.
   * @param  {Object} e Click event from the crop image button
   * @return {void}
   */
  function cropImage(e) {
    e.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    setCropping(true);

    // convert crop data from percentages to pixels
    var cropData = {
      x: Math.floor(percentCrop.x / 100 * naturalWidth),
      y: Math.floor(percentCrop.y / 100 * naturalHeight),
      width: Math.floor(percentCrop.width / 100 * naturalWidth),
      height: Math.floor(percentCrop.height / 100 * naturalHeight)
    };
    axios/* default.put */.Z.put('/api/upload/crop', {
      cropData: cropData,
      image: image
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      var croppedFile = lodash_get_default()(response, 'data.filename');
      setCropping(false);
      setCrop(null);
      onImageChange(croppedFile);
      setCropImageUri(getOrigUploadedImageUri(croppedFile));
      setShowCropper(false);
      react_toastify/* toast.success */.Am.success('Image cropped');
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred while cropping image'), {
        autoClose: false
      });
    });
  }

  /**
   * Hide the crop image UI
   * @return {void}
   */
  function cancelCrop() {
    setShowCropper(false);
  }
  if (uploading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Uploading image..."
    });
  }
  if (cropping) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Cropping image..."
    });
  }
  if (showCropper) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((ReactCrop_min_default()), {
      crop: crop,
      onChange: onCropChange,
      aspect: aspect
    }, /*#__PURE__*/react.createElement("img", {
      src: cropImageUri,
      onLoad: onImageLoaded
    })), /*#__PURE__*/react.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-default",
      onClick: cancelCrop
    }, "Cancel Crop"), /*#__PURE__*/react.createElement("button", {
      className: "btn btn-primary",
      onClick: cropImage
    }, "Crop Image")));
  }
  return /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, imagePreview, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-link",
    style: {
      margin: 10
    },
    onClick: selectImage
  }, "Upload Image"), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-link",
    style: {
      margin: 10
    },
    disabled: !image,
    onClick: function onClick() {
      return setShowCropper(true);
    }
  }, "Crop Image"), /*#__PURE__*/react.createElement("input", {
    name: "file",
    type: "file",
    id: "file",
    accept: ".png,.jpg,.jpeg,image/png,image/jpeg",
    onChange: fileSelected,
    ref: fileRef,
    style: {
      display: 'none'
    }
  }));
});
;// CONCATENATED MODULE: ./src/components/trees/TreeDetails/index.jsx
function TreeDetails_slicedToArray(arr, i) { return TreeDetails_arrayWithHoles(arr) || TreeDetails_iterableToArrayLimit(arr, i) || TreeDetails_unsupportedIterableToArray(arr, i) || TreeDetails_nonIterableRest(); }
function TreeDetails_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TreeDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TreeDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TreeDetails_arrayLikeToArray(o, minLen); }
function TreeDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TreeDetails_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TreeDetails_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/* harmony default export */ const TreeDetails = (function (_ref) {
  var addTree = _ref.addTree,
    updateTree = _ref.updateTree;
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var params = (0,react_router_dist/* useParams */.UO)();
  var treeId = params.treeId;
  var _useState = (0,react.useState)(''),
    _useState2 = TreeDetails_slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = TreeDetails_slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var _useState5 = (0,react.useState)(null),
    _useState6 = TreeDetails_slicedToArray(_useState5, 2),
    cover = _useState6[0],
    setCover = _useState6[1];
  var _useState7 = (0,react.useState)(null),
    _useState8 = TreeDetails_slicedToArray(_useState7, 2),
    coverUri = _useState8[0],
    setCoverUri = _useState8[1];
  var _useState9 = (0,react.useState)(!!treeId),
    _useState10 = TreeDetails_slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  (0,react.useEffect)(function () {
    var authToken = auth.getToken();
    if (!authToken) {
      setLoading(false);
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    if (treeId) {
      axios/* default.get */.Z.get("/api/trees/".concat(treeId), {
        headers: {
          Authorization: "Bearer ".concat(authToken)
        }
      }).then(function (response) {
        var _response$data = response.data,
          title = _response$data.title,
          description = _response$data.description,
          cover = _response$data.cover;
        setTitle(title);
        setDescription(description);
        setCover(cover);
        setCoverUri(getUploadedImageUri(cover, '600x320'));
        setLoading(false);
      }).catch(function (error) {
        if (auth.loginRequired(error, navigate)) {
          return;
        }
        setLoading(false);
        react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Failed to get tree info'), {
          autoClose: false
        });
      });
    }
  }, []);
  function updateCover(image) {
    setCoverUri(getOrigUploadedImageUri(image));
    setCover(image);
  }
  function handleSubmit(event) {
    event.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    var tree = {
      title: title,
      description: description,
      cover: cover
    };
    if (treeId) {
      _updateTree(treeId, tree, authToken);
    } else {
      _createTree(tree, authToken);
    }
  }
  function _createTree(tree, authToken) {
    axios/* default.post */.Z.post('/api/trees', tree, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      var tree = lodash_get_default()(response, 'data');
      var treeId = lodash_get_default()(response, 'data._id');
      react_toastify/* toast.success */.Am.success('Tree created');
      navigate("/trees/".concat(treeId));
      // update the side nav
      addTree(tree);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred creating tree'), {
        autoClose: false
      });
    });
  }
  function _updateTree(treeId, tree, authToken) {
    axios/* default.patch */.Z.patch("/api/trees/".concat(treeId), tree, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Tree details updated');
      navigate("/trees/".concat(treeId));
      // update the side nav
      updateTree(Object.assign(tree, {
        _id: treeId
      }));
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating tree details'), {
        autoClose: false
      });
    });
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Loading..."
    });
  }
  var cancelLink = treeId ? "/trees/".concat(treeId) : '/';
  var cancelClass = [TreeDetails_styles.formBtn, 'btn', 'btn-default'].join(' ');
  var submitClass = [TreeDetails_styles.formBtn, 'btn', 'btn-primary'].join(' ');
  var imagePreview;
  if (cover) {
    console.log(cover);
    var style = {
      backgroundImage: "url(".concat(coverUri, ")")
    };
    imagePreview = /*#__PURE__*/react.createElement("div", {
      className: TreeDetails_styles.coverImage,
      style: style
    });
  } else {
    imagePreview = /*#__PURE__*/react.createElement("div", {
      className: TreeDetails_styles.coverImage
    }, "No cover image currently set.");
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, treeId ? 'Update Tree Details' : 'Create a New Tree'), /*#__PURE__*/react.createElement(ImageManager, {
    image: cover,
    imagePreview: imagePreview,
    dir: "cover",
    onImageChange: updateCover
  }), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Title"), /*#__PURE__*/react.createElement("input", {
    id: "tree-title-input",
    className: "form-control",
    type: "text",
    name: "title",
    value: title,
    onChange: function onChange(ev) {
      return setTitle(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement(RichEditor, {
    initialHtml: description,
    onUpdate: setDescription
  }), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: cancelClass,
    to: cancelLink
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    id: "tree-details-submit",
    type: "submit",
    className: submitClass
  }, treeId ? 'Update Tree Details' : 'Create Tree')));
});
;// CONCATENATED MODULE: ./src/containers/TreeDetails.jsx



var TreeDetails_mapStateToProps = function mapStateToProps(state) {
  return {
    trees: state.usersTrees
  };
};
var TreeDetails_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTree: function addTree(tree) {
      dispatch(actions_addTree(tree));
    },
    updateTree: function updateTree(tree) {
      dispatch(actions_updateTree(tree));
    }
  };
};
/* harmony default export */ const containers_TreeDetails = ((0,es/* connect */.$j)(TreeDetails_mapStateToProps, TreeDetails_mapDispatchToProps)(TreeDetails));
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(74329);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/trees/TreePublish/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const TreePublish_styles = ({"formBtn":"a32b2bfa"});
;// CONCATENATED MODULE: ./src/components/trees/TreePublish/index.jsx
function TreePublish_slicedToArray(arr, i) { return TreePublish_arrayWithHoles(arr) || TreePublish_iterableToArrayLimit(arr, i) || TreePublish_unsupportedIterableToArray(arr, i) || TreePublish_nonIterableRest(); }
function TreePublish_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TreePublish_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TreePublish_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TreePublish_arrayLikeToArray(o, minLen); }
function TreePublish_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TreePublish_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TreePublish_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/* harmony default export */ const TreePublish = (function () {
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var params = (0,react_router_dist/* useParams */.UO)();
  var treeId = params.treeId;
  var _useState = (0,react.useState)(true),
    _useState2 = TreePublish_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = TreePublish_slicedToArray(_useState3, 2),
    publishDate = _useState4[0],
    setPublishDate = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = TreePublish_slicedToArray(_useState5, 2),
    published = _useState6[0],
    setPublished = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = TreePublish_slicedToArray(_useState7, 2),
    publishedToGallery = _useState8[0],
    setPublishedToGallery = _useState8[1];
  (0,react.useEffect)(function () {
    axios/* default.get */.Z.get("/api/published/".concat(treeId)).then(function (response) {
      setPublished(true);
      setPublishDate(response.data.lastPublishDate);
      setPublishedToGallery(response.data.publishToGallery);
      setLoading(false);
    }).catch(function (error) {
      if (lodash_get_default()(error, 'response.status') === 404) {
        setPublished(false);
        setPublishDate(null);
        setPublishedToGallery(false);
        setLoading(false);
        return;
      }
      react_toastify/* toast.error */.Am.error('Failed to get tree info', {
        autoClose: false
      });
    });
  }, []);
  function handleTogglePublished() {
    setPublishedToGallery(published ? false : publishedToGallery);
    setPublished(!published);
  }
  function handleTogglePublishedToGallery() {
    if (!published) {
      return;
    }
    setPublishedToGallery(!publishedToGallery);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (published) {
      _publishTree(publishedToGallery);
    } else {
      _unpublishTree();
    }
  }
  function _publishTree(publishToGallery) {
    var authToken = auth.getToken();
    axios/* default.put */.Z.put("/api/published/".concat(treeId), {
      publishToGallery: publishToGallery
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Tree published');
      navigate("/trees/".concat(treeId));
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred publishing your tree'), {
        autoClose: false
      });
    });
  }
  function _unpublishTree() {
    var authToken = auth.getToken();
    axios/* default.delete */.Z["delete"]("/api/published/".concat(treeId), {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Tree is no longer published');
      navigate("/trees/".concat(treeId));
    }).catch(function (error) {
      if (lodash_get_default()(error, 'response.status') === 404) {
        react_toastify/* toast.success */.Am.success('Tree is already not published');
        return navigate("/trees/".concat(treeId));
      }
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred unpublishing your tree'), {
        autoClose: false
      });
    });
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Loading tree details..."
    });
  }
  var publicUrl = "https://www.theplumtreeapp.com/public/".concat(treeId);
  var publicLink = /*#__PURE__*/react.createElement("a", {
    href: publicUrl
  }, publicUrl);
  var message = publishDate ? "Your tree was last published on ".concat(moment_default()(publishDate).format('MMMM Do YYYY'), ". It is publicly accessible at ") : 'Once published your tree will be publicly accessible to view at ';
  var cancelClass = [TreePublish_styles.formBtn, 'btn', 'btn-default'].join(' ');
  var submitClass = [TreePublish_styles.formBtn, 'btn', 'btn-primary'].join(' ');
  return /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit,
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "Publish Your Tree"), /*#__PURE__*/react.createElement("p", null, "Share your tree with the world by publishing it. Have even more people see it by making it visible on the Gallery."), /*#__PURE__*/react.createElement("div", {
    className: "side-note"
  }, /*#__PURE__*/react.createElement("p", null, message, publicLink)), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: published,
    onChange: handleTogglePublished
  }), /*#__PURE__*/react.createElement("label", {
    className: "checkbox",
    onClick: handleTogglePublished
  }, /*#__PURE__*/react.createElement("span", null), " Is Public"), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: publishedToGallery,
    disabled: !published,
    onChange: handleTogglePublishedToGallery
  }), /*#__PURE__*/react.createElement("label", {
    className: "checkbox",
    onClick: handleTogglePublishedToGallery
  }, /*#__PURE__*/react.createElement("span", null), " Display in Gallery"), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: cancelClass,
    to: "/trees/".concat(treeId)
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: submitClass
  }, "Save Settings"));
});
;// CONCATENATED MODULE: ./src/components/trees/TreeDownload/index.jsx
function TreeDownload_slicedToArray(arr, i) { return TreeDownload_arrayWithHoles(arr) || TreeDownload_iterableToArrayLimit(arr, i) || TreeDownload_unsupportedIterableToArray(arr, i) || TreeDownload_nonIterableRest(); }
function TreeDownload_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TreeDownload_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TreeDownload_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TreeDownload_arrayLikeToArray(o, minLen); }
function TreeDownload_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TreeDownload_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TreeDownload_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const TreeDownload = (function () {
  var params = (0,react_router_dist/* useParams */.UO)();
  var treeId = params.treeId;
  var _useState = (0,react.useState)(false),
    _useState2 = TreeDownload_slicedToArray(_useState, 2),
    downloading = _useState2[0],
    setDownloading = _useState2[1];
  function downloadTree() {
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    setDownloading(true);
    axios/* default.get */.Z.get("/api/trees/".concat(treeId, "/download"), {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      console.log(response.data);

      // create "a" HTML element with href to file & click
      var link = document.createElement('a');
      link.href = response.data.downloadURL;
      link.setAttribute('download', 'tree.zip');
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
    }).catch(function (err) {
      console.log(err);
      react_toastify/* toast.error */.Am.error('Something went wrong with your download', {
        autoClose: false
      });
    }).finally(function () {
      setDownloading(false);
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "Download Your Tree"), /*#__PURE__*/react.createElement("p", null, "Downloading your tree lets you keep an offline backup of your tree. The download will be a ", /*#__PURE__*/react.createElement("code", null, ".zip"), " file containing ", /*#__PURE__*/react.createElement("code", null, "tree.html"), " which you can open in your browser, the trees data and all the Sims images."), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: "btn btn-default",
    to: "/trees/".concat(treeId)
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: downloading,
    onClick: downloadTree
  }, downloading ? 'Preparing your download' : 'Download'));
});
;// CONCATENATED MODULE: ./src/components/trees/TreeEditor/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const TreeEditor_styles = ({"toolbar":"a7dd18c8","toolbarMobile":"b204d843","hamburger":"e0090820","hamburgerActive":"ecbe12e6","toolbarDropdown":"f7582319","toolbarItem":"cd0acf5d","toolbarHelp":"e583e49e","downArrow":"d25aff62","downArrowActive":"eb43fa05","menu":"b0598950","menuMobile":"cb3675dc","menuActive":"efa741bd","menuMobileActive":"e0142e40","mobileMenuHeading":"d7c31ab1","toolbarTitle":"bb698bb5"});
;// CONCATENATED MODULE: ./src/components/trees/TreeEditor/ToolbarDropdown.jsx
function ToolbarDropdown_slicedToArray(arr, i) { return ToolbarDropdown_arrayWithHoles(arr) || ToolbarDropdown_iterableToArrayLimit(arr, i) || ToolbarDropdown_unsupportedIterableToArray(arr, i) || ToolbarDropdown_nonIterableRest(); }
function ToolbarDropdown_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ToolbarDropdown_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ToolbarDropdown_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ToolbarDropdown_arrayLikeToArray(o, minLen); }
function ToolbarDropdown_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ToolbarDropdown_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ToolbarDropdown_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ const ToolbarDropdown = (function (_ref) {
  var id = _ref.id,
    label = _ref.label,
    items = _ref.items;
  var _useState = (0,react.useState)(false),
    _useState2 = ToolbarDropdown_slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var wrapperRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    // Close if clicked on outside of element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  function handleItemClick(menuItem) {
    menuItem.onClick && menuItem.onClick();
    setOpen(false);
  }
  function handleDropdownToggle() {
    setOpen(!open);
  }
  return /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.toolbarDropdown,
    ref: wrapperRef
  }, /*#__PURE__*/react.createElement("div", {
    id: id,
    className: TreeEditor_styles.toolbarItem,
    onClick: handleDropdownToggle
  }, label, " ", /*#__PURE__*/react.createElement("i", {
    className: open ? "".concat(TreeEditor_styles.downArrow, " ").concat(TreeEditor_styles.downArrowActive) : TreeEditor_styles.downArrow
  })), /*#__PURE__*/react.createElement("div", {
    className: open ? "".concat(TreeEditor_styles.menu, " ").concat(TreeEditor_styles.menuActive) : TreeEditor_styles.menu
  }, /*#__PURE__*/react.createElement("ul", null, items.map(function (menuItem, index) {
    return /*#__PURE__*/react.createElement("li", {
      id: menuItem.id,
      key: index
    }, menuItem.link ? /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      to: menuItem.link,
      onClick: function onClick() {
        return handleItemClick(menuItem);
      }
    }, menuItem.label) : /*#__PURE__*/react.createElement("div", {
      onClick: function onClick() {
        return handleItemClick(menuItem);
      }
    }, menuItem.label));
  }))));
});
;// CONCATENATED MODULE: ./src/components/trees/TreeEditor/Toolbar.jsx
function Toolbar_slicedToArray(arr, i) { return Toolbar_arrayWithHoles(arr) || Toolbar_iterableToArrayLimit(arr, i) || Toolbar_unsupportedIterableToArray(arr, i) || Toolbar_nonIterableRest(); }
function Toolbar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Toolbar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Toolbar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Toolbar_arrayLikeToArray(o, minLen); }
function Toolbar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Toolbar_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Toolbar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const Toolbar = (function (_ref) {
  var tree = _ref.tree,
    onPreviewModeChange = _ref.setPreviewMode,
    onSaveTree = _ref.saveTree;
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useState = (0,react.useState)(false),
    _useState2 = Toolbar_slicedToArray(_useState, 2),
    previewMode = _useState2[0],
    setPreviewMode = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = Toolbar_slicedToArray(_useState3, 2),
    mobileMenuOpen = _useState4[0],
    setMobileMenuOpen = _useState4[1];
  (0,react.useEffect)(function () {
    closeMenus();

    // Close all toolbar menus when window is resized. Prevents switching to
    // mobile view and back with unexpected open menus.
    window.addEventListener('resize', closeMenus);
    return function () {
      window.removeEventListener('resize', closeMenus);
    };
  }, []);
  (0,react.useEffect)(function () {
    onPreviewModeChange && onPreviewModeChange(previewMode);
  }, [previewMode]);
  function handleTogglePreview() {
    setPreviewMode(!previewMode);
  }
  function closeMenus() {
    setMobileMenuOpen(false);
  }
  function saveTree() {
    closeMenus();
    onSaveTree && onSaveTree(tree, true);
  }
  function deleteTree() {
    closeMenus();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    var deleteConfirmed = confirm('Are you sure you want to delete this tree?');
    if (deleteConfirmed) {
      axios/* default.delete */.Z["delete"]("/api/trees/".concat(lodash_get_default()(tree, '_id')), {
        headers: {
          Authorization: "Bearer ".concat(authToken)
        }
      }).then(function () {
        react_toastify/* toast.success */.Am.success('Tree deleted');
        // quickest way to go to homepage and reload trees for side nav is to
        // simply reload the page and going to homepage.
        window.location.href = '/';
      }).catch(function (error) {
        if (auth.loginRequired(error, navigate)) {
          return;
        }
        react_toastify/* toast.error */.Am.error('Failed to delete your tree', {
          autoClose: false
        });
      });
    }
  }
  var burgerClassNames = [TreeEditor_styles.hamburger];
  var mobileMenuClassNames = [TreeEditor_styles.menuMobile];
  if (mobileMenuOpen) {
    burgerClassNames.push(TreeEditor_styles.hamburgerActive);
    mobileMenuClassNames.push(TreeEditor_styles.menuMobileActive);
  }
  var ACTION_MENU_ITEMS = [{
    id: 'actions-dropdown-save',
    label: 'Save Tree',
    onClick: saveTree
  }, {
    id: 'actions-dropdown-publish',
    label: 'Publish Tree',
    onClick: closeMenus,
    link: "/trees/".concat(lodash_get_default()(tree, '_id'), "/publish")
  }, {
    id: 'actions-dropdown-delete',
    label: 'Delete Tree',
    onClick: deleteTree
  }, {
    id: 'download-tree',
    label: 'Download Tree',
    onClick: closeMenus,
    link: "/trees/".concat(lodash_get_default()(tree, '_id'), "/download")
  }];
  var EDIT_MENU_ITEMS = [{
    id: 'edit-dropdown-tree-details',
    label: 'Tree Details',
    onClick: closeMenus,
    link: "/trees/".concat(lodash_get_default()(tree, '_id'), "/details")
  }, {
    id: 'edit-dropdown-people',
    label: 'People in Tree',
    onClick: closeMenus,
    link: "/trees/".concat(lodash_get_default()(tree, '_id'), "/people")
  }];
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "hidden-xs-down"
  }, /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.toolbar
  }, /*#__PURE__*/react.createElement("span", {
    className: TreeEditor_styles.toolbarTitle
  }, "Tree Editor"), /*#__PURE__*/react.createElement(ToolbarDropdown, {
    id: "actions-dropdown",
    label: "Actions",
    items: ACTION_MENU_ITEMS
  }), /*#__PURE__*/react.createElement(ToolbarDropdown, {
    id: "edit-dropdown",
    label: "Edit",
    items: EDIT_MENU_ITEMS
  }), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: previewMode,
    onChange: handleTogglePreview
  }), /*#__PURE__*/react.createElement("label", {
    className: [TreeEditor_styles.toolbarItem, 'checkbox'].join(' '),
    onClick: handleTogglePreview
  }, /*#__PURE__*/react.createElement("span", null), " Preview"))), /*#__PURE__*/react.createElement("div", {
    className: "hidden-sm-up"
  }, /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.toolbarMobile,
    onClick: function onClick() {
      return setMobileMenuOpen(!mobileMenuOpen);
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: TreeEditor_styles.toolbarTitle
  }, "Tree Editor"), /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.menuButton
  }, /*#__PURE__*/react.createElement("i", {
    className: burgerClassNames.join(' ')
  }, /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("div", null)))), /*#__PURE__*/react.createElement("div", {
    className: mobileMenuClassNames.join(' ')
  }, /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.mobileMenuHeading
  }, "Actions"), ACTION_MENU_ITEMS.map(function (menuItem, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index
    }, menuItem.link ? /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      to: menuItem.link,
      onClick: function onClick() {
        return menuItem.onClick();
      }
    }, menuItem.label) : /*#__PURE__*/react.createElement("div", {
      onClick: function onClick() {
        return menuItem.onClick();
      }
    }, menuItem.label));
  }), /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.mobileMenuHeading
  }, "Edit"), EDIT_MENU_ITEMS.map(function (menuItem, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index
    }, menuItem.link ? /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      to: menuItem.link,
      onClick: function onClick() {
        return menuItem.onClick();
      }
    }, menuItem.label) : /*#__PURE__*/react.createElement("div", {
      onClick: function onClick() {
        return menuItem.onClick();
      }
    }, menuItem.label));
  }), /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.mobileMenuHeading
  }, "Preview"), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: previewMode,
    onChange: handleTogglePreview
  }), /*#__PURE__*/react.createElement("label", {
    className: [TreeEditor_styles.toolbarItem, 'checkbox'].join(' '),
    onClick: handleTogglePreview
  }, /*#__PURE__*/react.createElement("span", null), " Preview")))));
});
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js
var react_select_esm = __webpack_require__(83846);
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/PersonSelect.jsx
function PersonSelect_typeof(obj) { "@babel/helpers - typeof"; return PersonSelect_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PersonSelect_typeof(obj); }
function PersonSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PersonSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PersonSelect_ownKeys(Object(source), !0).forEach(function (key) { PersonSelect_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PersonSelect_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PersonSelect_defineProperty(obj, key, value) { key = PersonSelect_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PersonSelect_toPropertyKey(arg) { var key = PersonSelect_toPrimitive(arg, "string"); return PersonSelect_typeof(key) === "symbol" ? key : String(key); }
function PersonSelect_toPrimitive(input, hint) { if (PersonSelect_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PersonSelect_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var customStyles = {
  multiValue: function multiValue(provided) {
    return PersonSelect_objectSpread(PersonSelect_objectSpread({}, provided), {
      background: '#3498db',
      borderRadius: 3,
      boxShadow: '0 2px 3px 0 rgba(0,0,0,.075)'
    });
  },
  multiValueLabel: function multiValueLabel(provided) {
    return PersonSelect_objectSpread(PersonSelect_objectSpread({}, provided), {
      color: '#fff',
      padding: '3px 10px',
      textShadow: '0 1px 2px rgba(0,0,0,.2)',
      fontSize: 16,
      fontWeight: 300
    });
  },
  multiValueRemove: function multiValueRemove(provided) {
    return PersonSelect_objectSpread(PersonSelect_objectSpread({}, provided), {
      color: '#fff',
      textShadow: '0 1px 2px rgba(0,0,0,.2)',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#2980b9',
        color: '#fff'
      }
    });
  },
  control: function control(provided) {
    return PersonSelect_objectSpread(PersonSelect_objectSpread({}, provided), {
      borderColor: '#ccc',
      ':hover': {
        borderColor: 'rgba(26, 188, 156, 1)'
      }
    });
  }
};
/* harmony default export */ const PersonSelect = (function (_ref) {
  var options = _ref.options,
    onValueChange = _ref.onValueChange,
    defaultValue = _ref.defaultValue,
    inputId = _ref.inputId;
  return /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
    defaultValue: defaultValue,
    onChange: onValueChange,
    isClearable: false,
    isSearchable: true,
    options: options,
    styles: customStyles,
    inputId: inputId
  });
});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/Person/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Person_styles = ({"personDetailsAvatar":"b1d7705f"});
;// CONCATENATED MODULE: ./src/common/images/default-avatar.png
const default_avatar_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/Person/index.jsx
function Person_slicedToArray(arr, i) { return Person_arrayWithHoles(arr) || Person_iterableToArrayLimit(arr, i) || Person_unsupportedIterableToArray(arr, i) || Person_nonIterableRest(); }
function Person_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Person_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Person_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Person_arrayLikeToArray(o, minLen); }
function Person_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Person_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Person_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const Person = (function (_ref) {
  var node = _ref.node,
    people = _ref.people,
    onSave = _ref.onSave,
    close = _ref.close;
  var personId = lodash_get_default()(node, 'data.person._id');
  var _useState = (0,react.useState)(people.find(function (person) {
      return person._id === personId;
    })),
    _useState2 = Person_slicedToArray(_useState, 2),
    person = _useState2[0],
    setPerson = _useState2[1];
  function selectPerson(personId) {
    setPerson(people.find(function (person) {
      return person._id === personId;
    }));
  }
  function handleSaveNodePerson() {
    onSave({
      person: person
    });
    close();
  }
  var backgroundImage = lodash_get_default()(person, 'avatar') ? "url(".concat(getUploadedImageUri(person.avatar, '200x200'), ")") : "url(".concat(default_avatar_namespaceObject, ")");
  var peopleOptions = people.map(function (person) {
    return {
      label: "".concat(person.firstName, " ").concat(person.lastName),
      value: person._id
    };
  });
  var defaultValue = person ? {
    label: "".concat(person.firstName, " ").concat(person.lastName),
    value: person._id
  } : null;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", null, "Node Person"), /*#__PURE__*/react.createElement("p", null, "Select the primary person for this node."), /*#__PURE__*/react.createElement("div", {
    className: Person_styles.personDetailsAvatar,
    style: {
      backgroundImage: backgroundImage
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement(PersonSelect, {
    inputId: "node-person-select",
    options: peopleOptions,
    onValueChange: function onValueChange(selected) {
      return selectPerson(selected.value);
    },
    defaultValue: defaultValue
  })), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-default",
    onClick: close
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    id: "save-node-person",
    className: "btn btn-primary",
    onClick: handleSaveNodePerson
  }, "Save"));
});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/PeopleSelect.jsx
function PeopleSelect_typeof(obj) { "@babel/helpers - typeof"; return PeopleSelect_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PeopleSelect_typeof(obj); }
function PeopleSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PeopleSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PeopleSelect_ownKeys(Object(source), !0).forEach(function (key) { PeopleSelect_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PeopleSelect_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PeopleSelect_defineProperty(obj, key, value) { key = PeopleSelect_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PeopleSelect_toPropertyKey(arg) { var key = PeopleSelect_toPrimitive(arg, "string"); return PeopleSelect_typeof(key) === "symbol" ? key : String(key); }
function PeopleSelect_toPrimitive(input, hint) { if (PeopleSelect_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PeopleSelect_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var PeopleSelect_customStyles = {
  multiValue: function multiValue(provided) {
    return PeopleSelect_objectSpread(PeopleSelect_objectSpread({}, provided), {
      background: '#3498db',
      borderRadius: 3,
      boxShadow: '0 2px 3px 0 rgba(0,0,0,.075)'
    });
  },
  multiValueLabel: function multiValueLabel(provided) {
    return PeopleSelect_objectSpread(PeopleSelect_objectSpread({}, provided), {
      color: '#fff',
      padding: '3px 10px',
      textShadow: '0 1px 2px rgba(0,0,0,.2)',
      fontSize: 16,
      fontWeight: 300
    });
  },
  multiValueRemove: function multiValueRemove(provided) {
    return PeopleSelect_objectSpread(PeopleSelect_objectSpread({}, provided), {
      color: '#fff',
      textShadow: '0 1px 2px rgba(0,0,0,.2)',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#2980b9',
        color: '#fff'
      }
    });
  },
  control: function control(provided) {
    return PeopleSelect_objectSpread(PeopleSelect_objectSpread({}, provided), {
      borderColor: '#ccc',
      ':hover': {
        borderColor: 'rgba(26, 188, 156, 1)'
      }
    });
  }
};
/* harmony default export */ const PeopleSelect = (function (_ref) {
  var options = _ref.options,
    onValuesChange = _ref.onValuesChange,
    defaultValues = _ref.defaultValues,
    inputId = _ref.inputId;
  return /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
    inputId: inputId,
    value: defaultValues,
    onChange: onValuesChange,
    options: options,
    isMulti: true,
    isSearchable: true,
    styles: PeopleSelect_customStyles
  });
});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/Partners/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Partners_styles = ({"partnerTile":"d514c321","tileArrow":"a6a1af75"});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/Partners/PartnerRow.jsx
function PartnerRow_slicedToArray(arr, i) { return PartnerRow_arrayWithHoles(arr) || PartnerRow_iterableToArrayLimit(arr, i) || PartnerRow_unsupportedIterableToArray(arr, i) || PartnerRow_nonIterableRest(); }
function PartnerRow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PartnerRow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PartnerRow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PartnerRow_arrayLikeToArray(o, minLen); }
function PartnerRow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PartnerRow_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PartnerRow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const PartnerRow = (function (_ref) {
  var partner = _ref.partner,
    people = _ref.people,
    index = _ref.index,
    onChange = _ref.onChange,
    onRemove = _ref.onRemove;
  var _useState = (0,react.useState)(lodash_get_default()(partner, 'type', 'PARTNER')),
    _useState2 = PartnerRow_slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0,react.useState)(lodash_get_default()(partner, 'people', []).map(function (p) {
      return {
        label: "".concat(p.firstName, " ").concat(p.lastName),
        value: p._id
      };
    })),
    _useState4 = PartnerRow_slicedToArray(_useState3, 2),
    partners = _useState4[0],
    setPartners = _useState4[1];
  (0,react.useEffect)(function () {
    onChange(index, {
      type: type,
      partners: partners
    });
  }, [type, partners]);
  function handleTypeChange(event) {
    setType(event.target.value);
  }
  function handleRemovePartner() {
    onRemove(index);
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Partners_styles.partnerTile
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Partner Sim(s)"), /*#__PURE__*/react.createElement(PeopleSelect, {
    inputId: "node-partner-select-".concat(index),
    options: people,
    onValuesChange: setPartners,
    defaultValues: partners
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Partner Type"), /*#__PURE__*/react.createElement("input", {
    id: "partner-".concat(index),
    type: "radio",
    name: "type-".concat(index),
    value: "PARTNER",
    checked: type === 'PARTNER',
    onChange: handleTypeChange
  }), /*#__PURE__*/react.createElement("label", {
    id: "partner-label-".concat(index),
    className: "radio",
    htmlFor: "partner-".concat(index)
  }, /*#__PURE__*/react.createElement("span", null), " Partner"), /*#__PURE__*/react.createElement("input", {
    id: "ex-partner-".concat(index),
    type: "radio",
    name: "type-".concat(index),
    value: "EX_PARTNER",
    checked: type === 'EX_PARTNER',
    onChange: handleTypeChange
  }), /*#__PURE__*/react.createElement("label", {
    id: "ex-partner-label-".concat(index),
    className: "radio",
    htmlFor: "ex-partner-".concat(index)
  }, /*#__PURE__*/react.createElement("span", null), " Ex-Partner"), /*#__PURE__*/react.createElement("input", {
    id: "married-".concat(index),
    type: "radio",
    name: "type-".concat(index),
    value: "MARRIED",
    checked: type === 'MARRIED',
    onChange: handleTypeChange
  }), /*#__PURE__*/react.createElement("label", {
    id: "married-label-".concat(index),
    className: "radio",
    htmlFor: "married-".concat(index)
  }, /*#__PURE__*/react.createElement("span", null), " Married"), /*#__PURE__*/react.createElement("input", {
    id: "abduction-".concat(index),
    type: "radio",
    name: "type-".concat(index),
    value: "ABDUCTION",
    checked: type === 'ABDUCTION',
    onChange: handleTypeChange
  }), /*#__PURE__*/react.createElement("label", {
    id: "abduction-label-".concat(index),
    className: "radio",
    htmlFor: "abduction-".concat(index)
  }, /*#__PURE__*/react.createElement("span", null), " Abduction")), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-danger",
    onClick: handleRemovePartner
  }, "Remove Partner"));
});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/Partners/index.jsx
function Partners_toConsumableArray(arr) { return Partners_arrayWithoutHoles(arr) || Partners_iterableToArray(arr) || Partners_unsupportedIterableToArray(arr) || Partners_nonIterableSpread(); }
function Partners_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Partners_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Partners_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Partners_arrayLikeToArray(arr); }
function Partners_slicedToArray(arr, i) { return Partners_arrayWithHoles(arr) || Partners_iterableToArrayLimit(arr, i) || Partners_unsupportedIterableToArray(arr, i) || Partners_nonIterableRest(); }
function Partners_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Partners_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Partners_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Partners_arrayLikeToArray(o, minLen); }
function Partners_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Partners_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Partners_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ const Partners = (function (_ref) {
  var node = _ref.node,
    people = _ref.people,
    onSave = _ref.onSave,
    close = _ref.close;
  var _useState = (0,react.useState)(lodash_get_default()(node, 'data.partners', [])),
    _useState2 = Partners_slicedToArray(_useState, 2),
    partners = _useState2[0],
    setPartners = _useState2[1];
  function handleAddPartner() {
    setPartners(partners.concat([{
      people: [],
      type: 'PARTNER'
    }]));
  }
  function removePartner(index) {
    setPartners([].concat(Partners_toConsumableArray(partners.slice(0, index)), Partners_toConsumableArray(partners.slice(index + 1))));
  }
  function partnerUpdated(partnerRowIndex, partner) {
    var type = partner.type,
      partnerRowPartners = partner.partners;
    var newPartner = {
      type: type,
      people: partnerRowPartners.map(function (partner) {
        return people.find(function (person) {
          return person._id === partner.value;
        });
      })
    };
    var newPartners = partners.map(function (originalPartner, index) {
      return index === partnerRowIndex ? newPartner : originalPartner;
    });
    setPartners(newPartners);
  }
  function handleSaveNodePartners() {
    onSave({
      partners: partners
    });
    close();
  }
  var peopleOptions = people.map(function (person) {
    return {
      label: "".concat(person.firstName, " ").concat(person.lastName),
      value: person._id
    };
  });
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", null, "Persons Partners"), /*#__PURE__*/react.createElement("p", null, "Add partners by using the \"Add Partner\" button and selecting Sims."), /*#__PURE__*/react.createElement("button", {
    id: "add-node-partner",
    className: "btn btn-primary",
    onClick: handleAddPartner
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-plus"
  }), " Add Partner"), partners.map(function (partner, index) {
    return /*#__PURE__*/react.createElement(PartnerRow, {
      key: index,
      index: index,
      partner: partner,
      people: peopleOptions,
      onChange: partnerUpdated,
      onRemove: removePartner
    });
  }), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-default",
    onClick: close
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    id: "save-node-partners",
    className: "btn btn-primary",
    onClick: handleSaveNodePartners
  }, "Save"));
});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/Parents/index.jsx
function Parents_slicedToArray(arr, i) { return Parents_arrayWithHoles(arr) || Parents_iterableToArrayLimit(arr, i) || Parents_unsupportedIterableToArray(arr, i) || Parents_nonIterableRest(); }
function Parents_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Parents_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Parents_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Parents_arrayLikeToArray(o, minLen); }
function Parents_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Parents_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Parents_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ const Parents = (function (_ref) {
  var node = _ref.node,
    people = _ref.people,
    onSave = _ref.onSave,
    close = _ref.close;
  var _useState = (0,react.useState)(lodash_get_default()(node, 'data.parentType', 'NONE')),
    _useState2 = Parents_slicedToArray(_useState, 2),
    conception = _useState2[0],
    setConception = _useState2[1];
  var _useState3 = (0,react.useState)(lodash_get_default()(node, 'data.parents', []).map(function (person) {
      return {
        label: "".concat(person.firstName, " ").concat(person.lastName),
        value: person._id
      };
    })),
    _useState4 = Parents_slicedToArray(_useState3, 2),
    parents = _useState4[0],
    setParents = _useState4[1];
  var _useState5 = (0,react.useState)(lodash_get_default()(node, 'data.adoptiveParents', []).map(function (person) {
      return {
        label: "".concat(person.firstName, " ").concat(person.lastName),
        value: person._id
      };
    })),
    _useState6 = Parents_slicedToArray(_useState5, 2),
    adoptiveParents = _useState6[0],
    setAdoptiveParents = _useState6[1];
  function handleConceptionChange(event) {
    setConception(event.target.value);
  }
  function handleSaveNodeParents() {
    var newNodeData = {
      parentType: conception,
      parents: parents.map(function (parent) {
        return people.find(function (person) {
          return person._id === parent.value;
        });
      }),
      adoptiveParents: adoptiveParents.map(function (parent) {
        return people.find(function (person) {
          return person._id === parent.value;
        });
      })
    };
    onSave(newNodeData);
    close();
  }
  var peopleOptions = people.map(function (person) {
    return {
      label: "".concat(person.firstName, " ").concat(person.lastName),
      value: person._id
    };
  });
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", null, "Persons Parents"), /*#__PURE__*/react.createElement("p", null, "You can add the details about this node persons parents. These might not be the people you choose to show in the tree above this node."), /*#__PURE__*/react.createElement("h3", null, "Biological Parents"), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Parents"), /*#__PURE__*/react.createElement(PeopleSelect, {
    inputId: "node-parents-select",
    options: peopleOptions,
    onValuesChange: setParents,
    defaultValues: parents
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Sims Conception"), /*#__PURE__*/react.createElement("input", {
    id: "parent-type-none",
    type: "radio",
    name: "parentType",
    value: "NONE",
    checked: conception === 'NONE',
    onChange: handleConceptionChange
  }), /*#__PURE__*/react.createElement("label", {
    className: "radio",
    htmlFor: "parent-type-none"
  }, /*#__PURE__*/react.createElement("span", null), " WooHoo"), /*#__PURE__*/react.createElement("input", {
    id: "parent-type-abduction",
    type: "radio",
    name: "parentType",
    value: "ABDUCTION",
    checked: conception === 'ABDUCTION',
    onChange: handleConceptionChange
  }), /*#__PURE__*/react.createElement("label", {
    className: "radio",
    htmlFor: "parent-type-abduction"
  }, /*#__PURE__*/react.createElement("span", null), " Alien Abduction"), /*#__PURE__*/react.createElement("input", {
    id: "parent-type-clone",
    type: "radio",
    name: "parentType",
    value: "CLONE",
    checked: conception === 'CLONE',
    onChange: handleConceptionChange
  }), /*#__PURE__*/react.createElement("label", {
    className: "radio",
    htmlFor: "parent-type-clone"
  }, /*#__PURE__*/react.createElement("span", null), " Cloning")), /*#__PURE__*/react.createElement("h3", null, "Adoptive Parents"), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Parents"), /*#__PURE__*/react.createElement(PeopleSelect, {
    inputId: "node-adoptive-parents-select",
    options: peopleOptions,
    onValuesChange: setAdoptiveParents,
    defaultValues: adoptiveParents
  })), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-default",
    onClick: close
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    id: "save-node-parents",
    className: "btn btn-primary",
    onClick: handleSaveNodeParents
  }, "Save"));
});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const NodeEditor_styles = ({"editNodeContainer":"fa66400b","closeButton":"e4894d0d","close":"e40e49f9","editNodeSection":"e8916c8e"});
;// CONCATENATED MODULE: ./src/components/trees/NodeEditor/index.jsx
function NodeEditor_slicedToArray(arr, i) { return NodeEditor_arrayWithHoles(arr) || NodeEditor_iterableToArrayLimit(arr, i) || NodeEditor_unsupportedIterableToArray(arr, i) || NodeEditor_nonIterableRest(); }
function NodeEditor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function NodeEditor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NodeEditor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NodeEditor_arrayLikeToArray(o, minLen); }
function NodeEditor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function NodeEditor_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function NodeEditor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const NodeEditor = (function (_ref) {
  var _ref$people = _ref.people,
    people = _ref$people === void 0 ? [] : _ref$people,
    tree = _ref.tree,
    node = _ref.node,
    close = _ref.close,
    onChange = _ref.onChange;
  var _useState = (0,react.useState)(null),
    _useState2 = NodeEditor_slicedToArray(_useState, 2),
    currentView = _useState2[0],
    setCurrentView = _useState2[1];
  var _useState3 = (0,react.useState)(node),
    _useState4 = NodeEditor_slicedToArray(_useState3, 2),
    editingNode = _useState4[0],
    setEditingNode = _useState4[1];
  function updateNode(newNodeData) {
    // create a record of the child indexes in the tree to get to the node we
    // want delete
    var parentNode = node;
    var childIndexes = [];
    while (parentNode.parent) {
      // determine the current nodes index in the parent nodes children
      childIndexes.unshift(parentNode.parent.children.indexOf(parentNode));

      // move on to next parent node
      parentNode = parentNode.parent;
    }

    // Use the child indexes to delete the node to the tree
    var newTree = JSON.parse(JSON.stringify(tree)); // deep clone of the tree
    var currentNode = newTree.data;
    for (var i = 0; i < childIndexes.length; i++) {
      var index = childIndexes[i];
      currentNode = currentNode.children[index];
    }
    currentNode = Object.assign(currentNode, newNodeData);
    setEditingNode(Object.assign({}, editingNode, {
      data: currentNode
    }));
    onChange(newTree);
  }
  function deleteNode() {
    var confirmDelete = confirm('Are you sure you want to delete this node?');
    if (confirmDelete) {
      // create a record of the child indexes in the tree to get to the node we
      // want delete
      var parentNode = node;
      var childIndexes = [];
      while (parentNode.parent) {
        // determine the current nodes index in the parent nodes children
        childIndexes.unshift(parentNode.parent.children.indexOf(parentNode));

        // move on to next parent node
        parentNode = parentNode.parent;
      }

      // Use the child indexes to delete the node to the tree
      var newTree = JSON.parse(JSON.stringify(tree)); // deep clone of the tree
      var currentNode = newTree.data;
      for (var i = 0; i < childIndexes.length; i++) {
        var index = childIndexes[i];

        // if the last node in child indexes we delete it
        if (i === childIndexes.length - 1) {
          currentNode.children.splice(index, 1);
          break;
        }
        // otherwise keep moving through the nodes
        currentNode = currentNode.children[index];
      }
      onChange(newTree);
      close();
    }
  }
  return /*#__PURE__*/react.createElement("div", {
    className: NodeEditor_styles.editNodeContainer
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    id: "close-node-editor",
    className: NodeEditor_styles.closeButton,
    onClick: close
  }, /*#__PURE__*/react.createElement("span", null, "Close"), /*#__PURE__*/react.createElement("i", {
    className: NodeEditor_styles.close
  })), /*#__PURE__*/react.createElement("h1", null, "Edit Node"), /*#__PURE__*/react.createElement("p", null, "Edit a point in a tree by adding a person to a node and their partners."), currentView === 'person' && /*#__PURE__*/react.createElement(Person, {
    node: editingNode,
    people: people,
    onSave: updateNode,
    close: function close() {
      return setCurrentView(null);
    }
  }), currentView === 'partners' && /*#__PURE__*/react.createElement(Partners, {
    node: editingNode,
    people: people,
    onSave: updateNode,
    close: function close() {
      return setCurrentView(null);
    }
  }), currentView === 'parents' && /*#__PURE__*/react.createElement(Parents, {
    node: editingNode,
    people: people,
    onSave: updateNode,
    close: function close() {
      return setCurrentView(null);
    }
  }), currentView === null && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: NodeEditor_styles.editNodeSection
  }, /*#__PURE__*/react.createElement("h2", null, "Set Node Person"), /*#__PURE__*/react.createElement("p", null, "A node person is the Sim you'll see on the left at each point in the tree with their parents above, partners to the right and children below."), /*#__PURE__*/react.createElement("button", {
    id: "set-node-person",
    className: "btn btn-primary",
    onClick: function onClick() {
      return setCurrentView('person');
    }
  }, "Set This Nodes Person ", /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-right"
  }))), /*#__PURE__*/react.createElement("div", {
    className: NodeEditor_styles.editNodeSection
  }, /*#__PURE__*/react.createElement("h2", null, "Set Node Partners"), /*#__PURE__*/react.createElement("p", null, "A Sim can have multiple partners current or past."), /*#__PURE__*/react.createElement("button", {
    id: "set-node-partners",
    className: "btn btn-primary",
    onClick: function onClick() {
      return setCurrentView('partners');
    }
  }, "Set This Nodes Partners ", /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-right"
  }))), /*#__PURE__*/react.createElement("div", {
    className: NodeEditor_styles.editNodeSection
  }, /*#__PURE__*/react.createElement("h2", null, "Set Node Parents"), /*#__PURE__*/react.createElement("p", null, "Add extra information on how your Sim came to be and who raised them."), /*#__PURE__*/react.createElement("button", {
    id: "set-node-parents",
    className: "btn btn-primary",
    onClick: function onClick() {
      return setCurrentView('parents');
    }
  }, "Set This Nodes Parent Details ", /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-right"
  }))), /*#__PURE__*/react.createElement("div", {
    className: NodeEditor_styles.editNodeSection
  }, /*#__PURE__*/react.createElement("h2", null, "Danger Zone"), /*#__PURE__*/react.createElement("p", null, "Delete this node? Remember if you delete this node you will also delete any children attached to it too."), /*#__PURE__*/react.createElement("button", {
    id: "delete-node",
    className: "btn btn-danger",
    onClick: deleteNode
  }, "Delete This Node")))));
});
// EXTERNAL MODULE: ./node_modules/d3-hierarchy/src/hierarchy/index.js + 13 modules
var hierarchy = __webpack_require__(86620);
// EXTERNAL MODULE: ./node_modules/d3-hierarchy/src/tree.js
var src_tree = __webpack_require__(1873);
// EXTERNAL MODULE: ./node_modules/d3-zoom/src/index.js + 54 modules
var src = __webpack_require__(61210);
// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__(40191);
;// CONCATENATED MODULE: ./src/components/trees/Tree/constants.js


/*
    Constants used for rendering a plum tree. Mostly size values used throughout
    the tree.
 */
var TREE_DEPTH = 170;
var NODE_HEIGHT = 80;
var NODE_WIDTH = 160;
var NODE_BUTTON_RADIUS = 14;
var NODE_AVATAR_RADIUS = 30;
var NODE_SMALL_AVATAR_RADIUS = 20;
var NODE_PARTNER_PARTNER_CX = 150;
var NODE_PLUS_WIDTH = 10;
var NODE_PLUS_HEIGHT = NODE_PLUS_WIDTH;
var TREE_TOP_PADDING = 120;
var PARTNER_PADDING = 10;
var PARTNER_ABDUCTION_BASE_Y = 5;
var PARTNER_ABDUCTION_BASE_HEIGHT = 4;
var PARTNER_ABDUCTION_BASE_WIDTH = 12;
var PARTNER_ABDUCTION_TOP_Y = 5;
var PARTNER_ABDUCTION_TOP_RADIUS = 3;
var LINK_LIST_WIDTH = 198;
var LINK_LIST_FONT_SIZE = 14;
var LINK_LIST_LINE_HEIGHT = 20;
var LINK_LIST_PADDING_TOP = 14;
var LINK_LIST_PADDING_LEFT = 16;
var LINK_BUTTON_PATTERN = 'link-icon';
var PLUS_BUTTON_PATTERN = 'plus-icon';
var EDIT_BUTTON_PATTERN = 'edit-icon';
var DEFAULT_AVATAR_PATTERN = 'default-avatar';
var DEFAULT_SMALL_AVATAR_PATTERN = 'default-small-avatar';
;// CONCATENATED MODULE: ./src/components/trees/Tree/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tree_styles = ({"root":"dee461a6","link":"a4ab847d","person":"c09c7714","background":"f238e69d","avatar":"eed76e7e","plus":"caaee8f8","abduction":"ec17b431","marriage":"c189b6ae","personDetails":"b643d5ec","showTreeDetails":"c03e28fb","treeDetails":"ef667a62","treeImage":"e4537bce","treeDetailsContent":"c3397b9e","personDetailsTop":"e5a43ddc","personDetailsAvatar":"d3591240","parentRow":"b04289c2","parentAvatar":"e3085c10","editButton":"e321c1e4","closeButton":"d0783d74","close":"c7991ffb","tag":"c7316501","linksIcon":"cb8948ad","addChildIcon":"a7c72566","editNodeIcon":"cadb010e","linkList":"a6eac7ae","linkListItem":"df58b04d","linkListText":"d2475797","linkDetailsToggle":"afa79212","linkDetails":"d60bfa01"});
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(92455);
;// CONCATENATED MODULE: ./src/components/trees/Tree/PersonLinks.jsx
function PersonLinks_slicedToArray(arr, i) { return PersonLinks_arrayWithHoles(arr) || PersonLinks_iterableToArrayLimit(arr, i) || PersonLinks_unsupportedIterableToArray(arr, i) || PersonLinks_nonIterableRest(); }
function PersonLinks_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PersonLinks_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PersonLinks_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PersonLinks_arrayLikeToArray(o, minLen); }
function PersonLinks_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PersonLinks_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PersonLinks_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const PersonLinks = (function (_ref) {
  var small = _ref.small,
    links = _ref.links;
  var _useState = (0,react.useState)(false),
    _useState2 = PersonLinks_slicedToArray(_useState, 2),
    linksOpen = _useState2[0],
    setLinksOpen = _useState2[1];
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  function handleToggleLinks() {
    setLinksOpen(!linksOpen);
  }
  function goToTree(treeId, personId) {
    navigate({
      pathname: "/public/".concat(treeId),
      search: "?p=".concat(personId)
    });
  }

  // icon position
  var offset = small ? NODE_SMALL_AVATAR_RADIUS : NODE_AVATAR_RADIUS;
  var centered = NODE_BUTTON_RADIUS + (NODE_HEIGHT - NODE_BUTTON_RADIUS * 2) / 2;

  // list position
  var linkListHeight = links.length * 48;
  var listX = centered + offset - NODE_BUTTON_RADIUS;
  var listY = centered - offset - NODE_BUTTON_RADIUS - linkListHeight - 10;
  return /*#__PURE__*/react.createElement("g", {
    className: "person-link"
  }, /*#__PURE__*/react.createElement("circle", {
    className: "".concat(Tree_styles.linksIcon, " person-links"),
    cx: centered + offset,
    cy: centered - offset,
    fill: "url(#".concat(LINK_BUTTON_PATTERN, ")"),
    r: NODE_BUTTON_RADIUS,
    onClick: handleToggleLinks
  }), linksOpen && /*#__PURE__*/react.createElement("g", {
    transform: "translate(".concat(listX, ",").concat(listY, ")")
  }, /*#__PURE__*/react.createElement("rect", {
    className: Tree_styles.linkList,
    width: "198",
    height: linkListHeight,
    rx: "3",
    ry: "3"
  }), links.map(function (linkData, index) {
    var treeId = linkData.treeId,
      personId = linkData.personId;
    return /*#__PURE__*/react.createElement("g", {
      key: index,
      className: "".concat(Tree_styles.linkListItem, " person-link"),
      transform: "translate(0,".concat(48 * index, ")"),
      onClick: function onClick() {
        return goToTree(treeId, personId);
      }
    }, /*#__PURE__*/react.createElement("rect", {
      width: "198",
      height: "48",
      rx: "3",
      ry: "3"
    }), /*#__PURE__*/react.createElement("text", {
      className: Tree_styles.linkListText,
      transform: "translate(10,30)"
    }, linkData.title));
  })));
});
;// CONCATENATED MODULE: ./src/components/trees/Tree/Person.jsx







var Person_Person = function Person(props) {
  var small = props.small,
    personData = props.personData,
    nodeData = props.nodeData,
    transform = props.transform,
    mute = props.mute,
    highlightParents = props.highlightParents,
    unhighlightParents = props.unhighlightParents;
  function handleMouseOver() {
    highlightParents && highlightParents();
  }
  function handleMouseOut() {
    unhighlightParents && unhighlightParents();
  }
  var avatarRadius = small ? NODE_SMALL_AVATAR_RADIUS : NODE_AVATAR_RADIUS;
  var fillId = small ? DEFAULT_SMALL_AVATAR_PATTERN : DEFAULT_AVATAR_PATTERN;
  var personAvatar = lodash_get_default()(personData, 'avatar', false);
  var image, links;
  if (!lodash_get_default()(personData, '_id', false)) {
    return null; // no person set
  }

  if (personAvatar) {
    fillId = (0,v4/* default */.Z)();
    image = /*#__PURE__*/react.createElement("image", {
      className: "avatar-image",
      "aria-hidden": "true",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      xlinkHref: getUploadedImageUri(personData.avatar, '200x200'),
      x: "0",
      y: "0",
      width: avatarRadius * 2,
      height: avatarRadius * 2,
      preserveAspectRatio: "xMidYMid slice"
    });
  }
  if (lodash_get_default()(personData, 'links.length')) {
    links = /*#__PURE__*/react.createElement(PersonLinks, {
      links: personData.links,
      small: small
    });
  }

  // extra node data for person details pane (main node person only)
  var parentType = lodash_get_default()(nodeData, 'data.parentType', 'NONE');
  var parents = lodash_get_default()(nodeData, 'data.parents', []).map(function (parent) {
    return lodash_get_default()(parent, '_id');
  });
  var adoptiveParents = lodash_get_default()(nodeData, 'data.adoptiveParents', []).map(function (parent) {
    return lodash_get_default()(parent, '_id');
  });
  return /*#__PURE__*/react.createElement("g", {
    className: "person",
    transform: transform
  }, personAvatar && /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("pattern", {
    className: "avatar-pattern",
    id: fillId,
    width: "1",
    height: "1",
    x: "10",
    y: "10"
  }, image)), /*#__PURE__*/react.createElement("circle", {
    className: Tree_styles.avatar,
    opacity: mute ? '0.5' : '1',
    r: avatarRadius,
    cx: avatarRadius + (NODE_HEIGHT - avatarRadius * 2) / 2,
    cy: avatarRadius + (NODE_HEIGHT - avatarRadius * 2) / 2,
    fill: "url(#".concat(fillId, ")"),
    onClick: function onClick() {
      return props.showPersonDetails(personData._id, parentType, parents, adoptiveParents);
    },
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }), links);
};
/* harmony default export */ const Tree_Person = (Person_Person);
;// CONCATENATED MODULE: ./src/components/trees/Tree/PartnerType.jsx



/* harmony default export */ const PartnerType = (function (_ref) {
  var type = _ref.type;
  if (type === 'PARTNER' || type === 'EX_PARTNER') {
    var transform = 'translate(-5,35)';
    if (type === 'EX_PARTNER') {
      transform += ' rotate(45,5,5)';
    }
    return /*#__PURE__*/react.createElement("g", {
      className: type === 'EX_PARTNER' ? "".concat(Tree_styles.plus, " ex-partner-symbol") : "".concat(Tree_styles.plus, " partner-symbol"),
      transform: transform
    }, /*#__PURE__*/react.createElement("line", {
      x1: NODE_PLUS_WIDTH / 2,
      y1: "0",
      x2: NODE_PLUS_WIDTH / 2,
      y2: NODE_PLUS_HEIGHT
    }), /*#__PURE__*/react.createElement("line", {
      x1: "0",
      y1: NODE_PLUS_HEIGHT / 2,
      x2: NODE_PLUS_WIDTH,
      y2: NODE_PLUS_HEIGHT / 2
    }));
  }
  if (type === 'ABDUCTION') {
    return /*#__PURE__*/react.createElement("g", {
      className: "".concat(Tree_styles.abduction, " abduction-symbol"),
      transform: "translate(-5,35)"
    }, /*#__PURE__*/react.createElement("circle", {
      cx: PARTNER_ABDUCTION_BASE_WIDTH / 2,
      cy: PARTNER_ABDUCTION_TOP_Y,
      r: PARTNER_ABDUCTION_TOP_RADIUS
    }), /*#__PURE__*/react.createElement("rect", {
      x: "0",
      y: PARTNER_ABDUCTION_BASE_Y,
      ry: PARTNER_ABDUCTION_BASE_HEIGHT / 2,
      width: PARTNER_ABDUCTION_BASE_WIDTH,
      height: PARTNER_ABDUCTION_BASE_HEIGHT
    }));
  }
  if (type === 'MARRIED') {
    return /*#__PURE__*/react.createElement("polyline", {
      transform: "translate(-2,35)",
      className: "".concat(Tree_styles.marriage, " marriage-symbol"),
      points: "0,10 0,3 3,6 6,3 6,10"
    });
  }
  return null;
});
;// CONCATENATED MODULE: ./src/components/trees/Tree/Partner.jsx




/* harmony default export */ const Partner = (function (_ref) {
  var partners = _ref.partners,
    partnerData = _ref.partnerData,
    people = _ref.people,
    transform = _ref.transform,
    highlightPeople = _ref.highlightPeople,
    showPersonDetails = _ref.showPersonDetails;
  var nodePartners = partners;
  var partnerPeople = partnerData.people;
  var partnerType = partnerData.type;
  return /*#__PURE__*/react.createElement("g", {
    className: "partner",
    transform: transform
  }, /*#__PURE__*/react.createElement(PartnerType, {
    type: partnerType
  }), partnerPeople.map(function (person, index) {
    var small = nodePartners.length > 1 || index > 0;
    var personData = people.find(function (p) {
      return p._id === lodash_get_default()(person, '_id');
    });

    // check if we need to mute/darken the node person.
    var personId = lodash_get_default()(personData, '_id');
    var mute = personId && highlightPeople && highlightPeople.length && !highlightPeople.includes(personId);
    return /*#__PURE__*/react.createElement(Tree_Person, {
      key: index,
      personData: personData,
      small: small,
      transform: "translate(".concat(index * 35, ",0)"),
      showPersonDetails: showPersonDetails,
      mute: mute
    });
  }));
});
;// CONCATENATED MODULE: ./src/components/trees/Tree/Node.jsx






/* harmony default export */ const Node = (function (_ref) {
  var nodeData = _ref.nodeData,
    highlightPeople = _ref.highlightPeople,
    highlightParents = _ref.highlightParents,
    showPersonDetails = _ref.showPersonDetails,
    people = _ref.people,
    readonly = _ref.readonly,
    editNode = _ref.editNode,
    addNode = _ref.addNode;
  function doHighlightParents() {
    var nodeParentIds = lodash_get_default()(nodeData, 'data.parents', []).map(function (parent) {
      return parent._id;
    });
    if (lodash_get_default()(nodeData, 'parent') && highlightParents) {
      highlightParents(nodeData.parent, nodeParentIds);
    }
  }
  function doUnhighlightParents() {
    if (lodash_get_default()(nodeData, 'parent') && highlightParents) {
      highlightParents(nodeData.parent, []);
    }
  }
  function nodePosition(node) {
    var left = NODE_HEIGHT / 2;
    if (node.data.partners.length > 0) {
      left = NODE_HEIGHT;
    }
    return [node.x - left, node.y];
  }
  function getPartnerPosition(index, partnerCount) {
    var partnerSize = NODE_SMALL_AVATAR_RADIUS * 2 + PARTNER_PADDING;
    var totalHeight = partnerCount * partnerSize;
    var heightDiff = (NODE_HEIGHT - totalHeight) / 2;
    var offset = partnerSize / 2 + heightDiff;
    var y = index * partnerSize + offset - 40;
    return [80, y];
  }
  function getNodeWidth(node) {
    if (node.data.partners.length > 0) {
      return NODE_HEIGHT * 2;
    }
    return NODE_HEIGHT;
  }
  var nodeX = nodePosition(nodeData)[0];
  var nodeY = nodePosition(nodeData)[1];
  var nodeWidth = getNodeWidth(nodeData);
  var personData = people.find(function (p) {
    return p._id === lodash_get_default()(nodeData, 'data.person._id');
  });
  var partners = nodeData.data.partners;

  // check if we need to mute/darken the node person.
  var personId = lodash_get_default()(personData, '_id');
  var mute = personId && highlightPeople && highlightPeople.length && !highlightPeople.includes(personId);
  return /*#__PURE__*/react.createElement("g", {
    className: "node",
    transform: "translate(".concat(nodeX, ",").concat(nodeY, ")")
  }, !readonly && /*#__PURE__*/react.createElement("rect", {
    height: NODE_HEIGHT,
    width: nodeWidth,
    rx: NODE_HEIGHT / 2,
    ry: NODE_HEIGHT / 2,
    className: Tree_styles.background
  }), /*#__PURE__*/react.createElement(Tree_Person, {
    personData: personData,
    nodeData: nodeData,
    showPersonDetails: showPersonDetails,
    mute: mute,
    highlightParents: doHighlightParents,
    unhighlightParents: doUnhighlightParents
  }), partners.map(function (partnerData, index, partners) {
    var partnerPosition = getPartnerPosition(index, partners.length);
    return /*#__PURE__*/react.createElement(Partner, {
      key: index,
      partnerData: partnerData,
      partners: partners,
      people: people,
      transform: "translate(".concat(partnerPosition[0], ",").concat(partnerPosition[1], ")"),
      showPersonDetails: showPersonDetails,
      highlightPeople: highlightPeople
    });
  }), !readonly && /*#__PURE__*/react.createElement("circle", {
    className: "".concat(Tree_styles.addChildIcon, " add-node"),
    cx: partners.length ? NODE_HEIGHT : NODE_HEIGHT / 2,
    cy: NODE_HEIGHT,
    fill: "url(#".concat(PLUS_BUTTON_PATTERN, ")"),
    r: NODE_BUTTON_RADIUS,
    onClick: function onClick() {
      return addNode(nodeData);
    }
  }), !readonly && /*#__PURE__*/react.createElement("circle", {
    className: "".concat(Tree_styles.editNodeIcon, " edit-node"),
    cy: NODE_HEIGHT / 2,
    fill: "url(#".concat(EDIT_BUTTON_PATTERN, ")"),
    r: NODE_BUTTON_RADIUS,
    onClick: function onClick() {
      return editNode(nodeData);
    }
  }));
});
;// CONCATENATED MODULE: ./src/components/trees/Tree/Link.jsx



/* harmony default export */ const Link = (function (_ref) {
  var linkData = _ref.linkData;
  function drawPath() {
    var path = 'M ';
    var startX = linkData.parent.x;

    // start Y is determined by the number of partners
    var sourcePartnersCount = linkData.parent.data.partners.length;
    var partnerSize = NODE_SMALL_AVATAR_RADIUS * 2 + PARTNER_PADDING;
    var totalHeight = sourcePartnersCount * partnerSize;
    var heightDiff = (NODE_HEIGHT - totalHeight) / 2;
    var offset = partnerSize / 2 + heightDiff;
    var startY = sourcePartnersCount * partnerSize + offset + linkData.parent.y;
    var sourceHidden = linkData.parent.data.hidden;
    if (sourceHidden) {
      // start half way down the depth
      path += startX + ' ' + (linkData.parent.y + (TREE_DEPTH - 25));
    } else {
      // start centered to start node just below the + sign
      path += startX + ' ' + (startY - 30);
    }

    // move down half the depth
    path += ' V ' + (linkData.parent.y + (TREE_DEPTH - 30));

    // move to the target x position
    if (linkData.data.partners.length === 0) {
      // if the target has no partners center to the node
      path += ' H ' + linkData.x;
    } else {
      // if the target has partners slightly to the left of the node to
      // get to the node avatar
      path += ' H ' + (linkData.x - 40);
    }

    // // move down to final depth
    path += ' V ' + (TREE_DEPTH * linkData.depth + 10);
    return path;
  }
  return /*#__PURE__*/react.createElement("path", {
    className: Tree_styles.link,
    d: drawPath()
  });
});
;// CONCATENATED MODULE: ./src/components/RawHTML/index.jsx

/* harmony default export */ const RawHTML = (function (_ref) {
  var html = _ref.html;
  return /*#__PURE__*/react.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
});
;// CONCATENATED MODULE: ./src/components/trees/Tree/PersonDetails.jsx
function PersonDetails_slicedToArray(arr, i) { return PersonDetails_arrayWithHoles(arr) || PersonDetails_iterableToArrayLimit(arr, i) || PersonDetails_unsupportedIterableToArray(arr, i) || PersonDetails_nonIterableRest(); }
function PersonDetails_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PersonDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PersonDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PersonDetails_arrayLikeToArray(o, minLen); }
function PersonDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PersonDetails_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PersonDetails_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const PersonDetails = (function (_ref) {
  var personId = _ref.personId,
    treeId = _ref.treeId,
    _ref$traits = _ref.traits,
    traits = _ref$traits === void 0 ? [] : _ref$traits,
    _ref$aspirations = _ref.aspirations,
    aspirations = _ref$aspirations === void 0 ? [] : _ref$aspirations,
    _ref$lifeStates = _ref.lifeStates,
    lifeStates = _ref$lifeStates === void 0 ? [] : _ref$lifeStates,
    _ref$parentType = _ref.parentType,
    parentType = _ref$parentType === void 0 ? 'NONE' : _ref$parentType,
    _ref$parents = _ref.parents,
    parents = _ref$parents === void 0 ? [] : _ref$parents,
    _ref$adoptiveParents = _ref.adoptiveParents,
    adoptiveParents = _ref$adoptiveParents === void 0 ? [] : _ref$adoptiveParents,
    _ref$custom = _ref.custom,
    custom = _ref$custom === void 0 ? [] : _ref$custom,
    avatar = _ref.avatar,
    style = _ref.style,
    readonly = _ref.readonly,
    closeDetails = _ref.closeDetails,
    firstName = _ref.firstName,
    lastName = _ref.lastName,
    bio = _ref.bio;
  var _useState = (0,react.useState)(false),
    _useState2 = PersonDetails_slicedToArray(_useState, 2),
    linkDataVisible = _useState2[0],
    setLinkDataVisible = _useState2[1];
  function handleToggleLinkData() {
    setLinkDataVisible(!linkDataVisible);
  }
  var inlineAvatarStyle = {};
  if (avatar) {
    inlineAvatarStyle.backgroundImage = "url(".concat(getUploadedImageUri(avatar, '200x200'), ")");
  } else {
    inlineAvatarStyle.backgroundImage = "url(".concat(default_avatar_namespaceObject, ")");
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.personDetails,
    style: style
  }, !readonly && /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: Tree_styles.editButton,
    to: "/trees/".concat(treeId, "/people/").concat(personId)
  }, /*#__PURE__*/react.createElement("span", null, "Edit")), /*#__PURE__*/react.createElement("div", {
    id: "close-person-details",
    className: Tree_styles.closeButton,
    onClick: function onClick() {
      return closeDetails();
    }
  }, /*#__PURE__*/react.createElement("span", null, "Close")), /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.personDetailsTop
  }, /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.personDetailsAvatar,
    style: inlineAvatarStyle
  }), /*#__PURE__*/react.createElement("h2", {
    id: "person-details-name"
  }, firstName, " ", lastName)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(RawHTML, {
    html: bio
  })), parents.length > 0 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", {
    id: "person-details-biological-parents-title"
  }, "Biological Parents ", /*#__PURE__*/react.createElement(ParentType, {
    type: parentType
  })), /*#__PURE__*/react.createElement("div", null, parents.map(function (parent, index) {
    var backgroundImage = parent.avatar ? "url(".concat(getUploadedImageUri(parent.avatar, '200x200'), ")") : "url(".concat(default_avatar_namespaceObject, ")");
    return /*#__PURE__*/react.createElement("div", {
      className: Tree_styles.parentRow,
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: Tree_styles.parentAvatar,
      style: {
        backgroundImage: backgroundImage
      }
    }), /*#__PURE__*/react.createElement("span", {
      className: "person-details-biological-parent-name"
    }, parent.firstName, " ", parent.lastName));
  }))), adoptiveParents.length > 0 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", null, "Adoptive Parents"), /*#__PURE__*/react.createElement("div", null, adoptiveParents.map(function (parent, index) {
    var backgroundImage = parent.avatar ? "url(".concat(getUploadedImageUri(parent.avatar, '200x200'), ")") : "url(".concat(default_avatar_namespaceObject, ")");
    return /*#__PURE__*/react.createElement("div", {
      className: Tree_styles.parentRow,
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: Tree_styles.parentAvatar,
      style: {
        backgroundImage: backgroundImage
      }
    }), /*#__PURE__*/react.createElement("span", null, parent.firstName, " ", parent.lastName));
  }))), traits.length > 0 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", null, "Traits"), /*#__PURE__*/react.createElement("div", null, traits.map(function (trait, index) {
    return /*#__PURE__*/react.createElement("span", {
      className: Tree_styles.tag,
      key: index
    }, trait);
  }))), aspirations.length > 0 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", null, "Aspirations"), /*#__PURE__*/react.createElement("div", null, aspirations.map(function (aspiration, index) {
    return /*#__PURE__*/react.createElement("span", {
      className: Tree_styles.tag,
      key: index
    }, aspiration);
  }))), lifeStates.length > 0 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", null, "Life States"), lifeStates.map(function (lifeState, index) {
    return /*#__PURE__*/react.createElement("span", {
      className: Tree_styles.tag,
      key: index
    }, lifeState);
  })), custom.length > 0 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", null, "More"), /*#__PURE__*/react.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react.createElement("tbody", null, custom.map(function (item, index) {
    return /*#__PURE__*/react.createElement("tr", {
      key: index
    }, /*#__PURE__*/react.createElement("th", {
      scope: "row"
    }, item.title), /*#__PURE__*/react.createElement("td", null, item.value));
  })))), /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.linkDetailsToggle,
    onClick: handleToggleLinkData
  }, linkDataVisible ? 'Hide Link Details' : 'Show Link Details'), linkDataVisible && /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.linkDetails
  }, /*#__PURE__*/react.createElement("div", null, "Tree Id ", /*#__PURE__*/react.createElement("code", null, treeId)), /*#__PURE__*/react.createElement("div", null, "Person Id ", /*#__PURE__*/react.createElement("code", null, personId))));
});
var ParentType = function ParentType(_ref2) {
  var type = _ref2.type;
  if (type === 'CLONE') {
    return /*#__PURE__*/react.createElement("span", {
      className: "label label-blue"
    }, "Clone");
  } else if (type === 'ABDUCTION') {
    return /*#__PURE__*/react.createElement("span", {
      className: "label label-green"
    }, "Alien Abduction");
  } else {
    return null;
  }
};
;// CONCATENATED MODULE: ./src/components/trees/Tree/TreeDetails.jsx




/* harmony default export */ const Tree_TreeDetails = (function (_ref) {
  var title = _ref.title,
    description = _ref.description,
    image = _ref.image,
    style = _ref.style,
    closeDetails = _ref.closeDetails;
  var inlineAvatarStyle = {};
  if (image) {
    inlineAvatarStyle.backgroundImage = "url(".concat(getUploadedImageUri(image, '600x320'), ")");
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.treeDetails,
    style: style
  }, image && /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.treeImage,
    style: inlineAvatarStyle
  }), /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.closeButton,
    onClick: function onClick() {
      return closeDetails();
    }
  }, /*#__PURE__*/react.createElement("span", null, "Close"), /*#__PURE__*/react.createElement("i", {
    className: Tree_styles.close
  })), /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.treeDetailsContent
  }, /*#__PURE__*/react.createElement("h1", null, title), /*#__PURE__*/react.createElement(RawHTML, {
    html: description
  })));
});
;// CONCATENATED MODULE: ./src/common/images/link.png
const link_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAACAWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmRVg9Imh0dHA6Ly9jaXBhLmpwL2V4aWYvMS4wLyIKICAgIHhtbG5zOmF1eD0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC9hdXgvIgogICB0aWZmOkltYWdlTGVuZ3RoPSIxMjgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iMTI4IgogICBleGlmRVg6TGVuc01vZGVsPSIiCiAgIGF1eDpMZW5zPSIiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5YMeZKAAABg2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miPxopszCwmISspiRHzWxUUZCSRqjDDYzz7wZNT9e771Jk62yVZTY+LXgL2CrrJUiUrKxsSY26DnPUzPJnNu553O/957TveeCK5pRskZ1D2Rzph4ZC/vnYvP+2ifceGmiC19cMbTh6elJKtr7LVV2vA7atSqf+9calpKGAlV1wkOKppvC48KTK6Zm85awT0nHl4RPhAO6XFD4xtYTDj/bnHL402Y9GhkBl1fYnyrjRBkraT0rLC+nPZspKL/3sV/SmMzNzkhsE2/FIMIYYfxMMMoIIXoZlDlEkD66ZUWF/J6f/CnykqvIrFFEZ5kUaUwCohakelKiKnpSRoai3f+/fTXU/j6nemMYah4t67UDajfha8OyPg4s6+sQ3A9wnivl5/dh4E30jZLWvgeeNTi9KGmJbThbh5Z7La7HfyS3uEtV4eUYmmLQfAX1C07Pfvc5uoPoqnzVJezsQqec9yx+AzuNZ9JWVJp+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAU6ElEQVR4nO2deZBV5ZXAf9+9b+tuLr3RgCwKYWnABkEWUSAJxDjxRTOTicZgUONE6yWTSmpiajKVMTNmMVqZqiQ1lUmcNxmTlCIY1MRMKi9qJjoJiAqoIEtDs9iySAstdPft5a33zh/3Pmia1913exvdv6pXBd19v/O9e863n3M+wSVIJKbWAo39PjOBGkDJ8QFQc3w6gEPAgewnGlbOFu5bFAZR7Aq4JRJTFWAVsBpYjqHwhjyJO41hDK8CLwJbomFFzZOsglB2BhCJqQFgJbDG/CwD5CJVJwNswzCGrEEki1QXR5SFAURiqgCuAe4APgPUFbdGg3IGeBJ4DNgWDSt6keszLCVtAJGYOg1YB9wJzCpubWzTAjwOrI+GldYi12VQStIAIjF1CXA/8DfFrotHPAt8LxpWdhS7IgMpKQOIxNRVGIr/q2LXJU88DzwYDStbil2RLCVhAJGYuhr4FvDBIlelUPwF+FY0rLxU7IoU1QAiMXUy8CPg1mLWo4hsAu6LhpUTxapAUQwgElP9wFcwWv2YYtShhOgGHgB+HA0rqUILL7gBRGLqSuARoKnQskucPcAXCz0/KJgBRGKqD/gO8I1CySxTHgIeiIaVdCGEFcQAIjF1CrARYwdvlOHZDNweDSvH8y1IyreASEy9EdjJqPLtsArYab67vJK3HiASUyXgQUa7fLc8DHwzGla0fBSeFwMwD2x+CazNR/kjkA3A3fk4aPLcAMzj2WeAj3pd9gjnBeBT0bDS7WWhnhpAJKY2ADFgiZfljnKO7cDHo2HltFcFemYAkZh6OfBHYLZXZY6Skxbgo9GwctSLwjwxALPlb2FU+YWiBVgRDSvtbgtyvQyMxNQxwO8ZVX4hmQ3EzHfvClcGYM72fw0sdVuRUWyzFHjG1IFjHA8B5jp/PSN4qScAJShoqJT4QI3ErDqZCVUSNSGBTxJkNOhMaLzXo/N2R4aDZzK092mcjevo3jmLbQTWOd0n8LkQ/CAjWPl1FYIbpgeYO06mrkLCn6MvlWVoqJRoqISmBpmMDh1xjaNdGn88kuJIR8aLqqwF3sZwpLGNox7A3KKMOXm23BkbFCyZ6OPjswJU+Z3PoXXgjZNp/vh2kne6NC96hBujYeU5uw/Z/gbmwc5OoN7us+XOhCqJu68KckW17Nn6uTups/1kmt+2JImnXVlBO7DQrnOJre9hHum+xAg72BHAggk+7lkYytnVu0UHmtsz/GpfglM9Gi7MYDOwxs5Rst2v8x1GmPIBlk7ycdf8YF6UD4aBzRsn8+UlIabVuIpxWQV8265sS5iePJvt1qicEcC1U/zcOT9YMJlqUue/d8ZpOZNxMy9YZdWzyJJNmz58jziuTpmyfLKPT891tcy2jRIQ3H1ViKmKq+7mp+ZwPSxWpXyZEeTDJ4AVU/zctSBEyFd4v9maoODOBSHGBh3Lno+hs2EZVoI5629mBHnvXjfFz6fnBoqi/P682Zbm0V1x0s5cQbqBOcOtCqx0Ez9khChfACum+lnX5GzMT2agrVujI6HRl4KQz9g3GF8lOdozmNcgM7tOZl+7ow2jMRi6u22oPxqyVpGYugb4kxPp5cgkReLryysctfyDZzI81ZygvU+nL21s9Qog5BNUBwUrp/r5yHS/7f2D1k6N72/tdbM0XDNUBNJwc4AHnMstLyQBdzsY8zM6bD2e4qevxznapdGbOr/PrwN9aZ22Ho2n9yf4/tZe29u/06olrp7oZsd+aB0OagBmoOZIidWjvkJi6lh7M29dhxeOJNmwN0GfhV281k6Nn+yIs+OkPZf/D13hx+d8UfAhcwmfk6GKdXS4UK5U2GxkaQ3+fDRF7HDS1iStJ6XzxJ4Ee05b7wnGV0nUVbhaFg6qy5ylmvH5l2qIdk7UpPVRNtvyn2pOkHIwP+tL62zYG7e8918dEIyvdLUi+Vgkpi7O9YvBzGpEtX6AjrjOgfeH12Zag5eOpvjD4SQZFzOzM306z7YkLe32CQEza12nQcqp04sMwEzLcqlk5rCMDjy6K05XYnCN6Do8fyTJ080JUh6Eabx1Kk3HEPL6c0W1awP4pKnbC8jVA6xzK6lc6UrorN+ToC3HiVxXQue5I0n+cDiJ5pE3T08S3u+zZkkNVZ5sSn124A8uKNXMxnWA8kvI5BkCqAoI5tTLNDX48EvwTqfGG++leb/X1VFtTln3LAqx2MIyL5mBr7zgOiakBWN38NzXGCj5Gkaw8sEYCrqTOjtOpm0v15zISlicCLpYBvZnNkZexdeyPxhY7B2eiBnFMkHZWtfuZsI5gAt0fM4ATPfiz3gmZpRh8cuGV7EVVIuTRQus7e9K3r8HWEnpZuC8JBnjF4yzuMFzutez6PA6YEX2P/2lr/FKwijWmFPvozZkrQc42uVpeoBzuh41gCIxJiC4ZW4AYUH/OtByxpMYgiwXGoAZ07/MSwmlhF+CcZUS06olZtcZZ+zTa2QaKiUCRcgzHpQFt18ZtOwjoCZ0Tvd42gMsM3V+bhm4iuKlXM8LkoA59TLXTfHTWC/jk4yfSebWhw5kdJ1EGva1p3npnRTHvO1mcyKA2+YFWDjB+ulTe59mecPIIj6MOd8fsrVY7WXpxWRatcTCiT4WT/TRUDncBEtQ4TNcwJZP9nPobIYtx1K80ZZ26oY1JEHZ6Pavm+K39dzmoylPtp4HsJp+BrDc8+ILzNigYF1TkDn1PkfduiRgdp3MjFqZj80wzu29bHUCuP3KIEsn2Tt3flfVeO3dvGxILYfzQ0BjPiQUgkq/4NrJPq6fHrA8ox4KWcCkMRJfXRZiU3OS3afTruP2grLg1rkBrplsT/nJDPz2oHdnDwNoBBDmBUtn8iIiz1T6BV9aHOIDNbKl2bRd0ho8sSfBKyecp/AVwOcXGvv9duvY/H6Gn+zoy8twZFLro0xb/8IJPm6/MujGd35YfBLcMjfAcTXjaIIYlAW3zQuw5DL7Pn3v9Wis353Ip/IBGiXK0ABu+ECAexe5CpywTJVfcNeCkO3nhIDPLQhy7WR7Ez6A3pTOL99KeD3zz0V5GYAk4KZZAT4xK4DFMxRPGF8p2ZpfBGXBnfNDLHLQ7fekdDbsTdDqTfKI4Wj0YVyqWPJIAj7bFOS6yf68jPdDIQRU+ARnLXgDSAI+vzDI/PH2u/1ERufRnXGngSBOmOnDuFGzpJEEfLIxyPIiKB9A03VLTqNBWXB7U5AFDpTfndR5cl+CZgt+iR5S4+P89akliSTgjvkhlk/2ucrK0dqp8crxFCe7NWQBCyf6+OBUawa173RmWAOQBNy7KMSVDfY3IRIZnUd3xWkuXMvPopS0AUgCPjUnyLJJzpQfT+u8fDzNqydSHO+60J2r+f0Mvz+U5OZZAVZNHXyi1tatsXFfYkg5QVmwbn6QJgfKV5M6T+5NsL+wLT9L6RqAJOBzC0Isdaj846rGv2/rozupDzpydyV0NuxJ0Natccuc4EW9QW9K52c7h/YUlgV8YXGIOfUOW/7OeLGUD6VqALLZ8hdfZl/5qQz85ViK5w4nLY3bOvCn1hQHz2ZoGuejJiRI63C8S+PNtvSQIV9BWXDH/CBzHSi/K2HM9q3EIuQRxUeJhX7LAu6+KuRo8wTg2ZYEL7ambHvvHu3UONppPR2/LOBLS0LMrnPW8rNpYIqM4irs1Gt8EtwyJ+goGrYnpfPM/iSvnLCvfLsEZcFdC4KOlN+ZMGIDDxZf+YBxGNQN1Ba9IhL83VUhx6HQz+xPsvV4/q/d80nwlaUhZjgI1YqnjTG/BFp+FtUHqBTZAHwS3Do3aMtJIkt3Uuep5gTbhjkylQTUhASyEHQkNEdBnca2cNCR8jviOuv3xEum5ZucM4Ci4ZOM07JFDpSv6/D0/sSQ5+UCmF4jc+eCIBOrDAcRTYffHUzy/BHrR63VQcHXr62g3kGYdjxtjPmHzpaU8qHYBuCX4LZ5Qa5yuHP2q32JYaN3Pj4zQHhmAKnfckIS8NezAzQ1yDxuLgMHQxKwaKKPm2cFHCn/rNnyD5ee8gFUiSIZgN9s+Sun+i9QjhU0HTY1J9h+Mj3khK+xXuamWYFBy59RK/OlxSFqQuKiPQAhjMne5xeGuHdh6FzvYYc+c8zfezqT94mpQ1Qf0FFoqX4Z1s5ztmeumnvmrw/T8v2S4YI1HA2VEt/9YBW7TqV5pzNDPG24bE8dKzGnXqbSYUbwM306j+8uyW6/Px0+4FAhJQZkuGdhyJHyNR02WVA+QF2FRF3IWqv1y7DkMp/jvYeB9KaMvf0S7fb7c8iHEQ5eEAIyrL0yRFODs5a/YU+CN9+z5iApC4pwN7rhwv347kQ5KB/gQMEMwG+u850s9TI6PLnXuvIBupI6GU3Hb3eC4YLelM4vdpWN8gEOSBTIAMIzA46cJLoSOj97M87rbfZco7uTOltPFOQGdgBOqBr/saMsuv3+HJCiYeUs4NlNlAMRGMuoG2fYd+NKa7BxX4KdNlp+f57al+C4ml+/Oh0jcveRN+Je3QFUKE5Fw0pHdpaUt16gtkLwt432U653JXT+6804b9ps+f3RgZ/vjOct5EvTjaidf3ulj3bvwrcLxQE4Hx38ar6krJjitxCidSEpDTbsTfDWKfdd+LvdGg9v7fUkwKM/PSmdn++Ks2FvwlaOwRLiVThvAIMmE3bDuAqJNdPsuUV3JnSib/Q57vZzoenw850JNjUn6Ii7U1ZvSud/3zZafb5zCOWZl+B8aNhmIIOHEcICuH66nwobyZeTGVhvM42qVfrSOi+9YwR+3jYvyLxxMkGfsLRS1HTjDH//+xmebk4Wwl8/36Qx7no+//0jMXUrcK1XEpSA4GvXVDBxjLXuvyuh89jueF6Un4tJYyRm1Mo01stcUW3k4u0/SU1kdE716LR2Zjh0JsPbnRqnvI3RLyZbo2FlBVyYJu5FPDSA+gqJ2gprrV/XIXY4WTDlgzE3eLdbY/Mxw4fAJxlG65ME8bQ+pC/hJcCL2X9IuX7oBVdUS5ZToL11Ks3mo/l35hiKtGac3J3u1VAvbeXDIAawBQ+jhK06TaQyxtm8h3nwRhmaM8DL2f+cM4BoWEkCT3ol5TKLY39bj3Gb9igFY6Opa+DiTKGPeyWlzuL43xHXLN22MYpnXKDjgQbwGnDQCylWl39qUs9XBoxRLqYF2Nb/BxcYgJlF+jEvJFld/edL+ZIwMohUBwVjg8LyhPQS57H+mcIh972B64HvupXUl9YtedMoAYEkvDWECp/gplkBGutlxgQEug7tvRqvt6XZciyV76wbpcwTA39w0UwtGlZagWfdSrJ6E0ZNSPL0hs5xlRL3r6zgI9P8TFEkaoKC2pBgVp3MZ+YF+VSOGMARwm9M3V7AYFP177mVdtLiMeyEKuFJdi8w/P7vWRgaMgHzqql+rnbglHIJkFOnOd9UNKzsAJ53I83q2XjIJ7h++uCeu1ZpqJT4p2srmVY99PLTJ8HaK4MFTTFTAjwXDSuv5/rFUG/rQTcSWzs1khZ3dq+Z5M4hs65CcO+ikOWeZExAMM7mEXWZM6guB30L0bCyBfiLU4ntvRpn49aGgWwKmMtt3twJMLFK4h+XV9p+1qMrWMqBP0fDysuD/XK41/Atp1K7krotn/jakOCLiytYPtlnaTgQQFODzBeutt7ys2R0w29/hPDtoX457JuLxNRNwK1OJF82RuKfV1Tit9HaNB1eb0vzwpEkZ8ybuLNLxGy2LiUgWDPNzyoHUUU68GJriqeah077comwKRpWhrw+3srA+1XgRhwkkjhpHreuucK6V5AkYOllPhaMlznVo9MR187tFo4NCqqDEuOrhC1Hk/4cPpvhf1qsJ4IoY7qB+4b7I0tvMRJT7wN+4KQWE6ok/mFZhWdLPTe092r8eEec9y4dx46huC8aVn403B9Z7Zx/DOxxUotTvRqxQ8VvcUc6Mvzgtb6RovzdGDobFksGEA0rKeCLTmqi67D5WIrNx1JFO/Q51aPxi12JkXLsrAN/Hw0rljxWLU/PzGXhw05r9eyBZFHSoR0+m+FH2/q8vHat1HnY1JUl7K6G/xXTm9QuPSmd/3yjj72nMwXpCXTdCNcaQS0fDO/uB+w8YHtmFompU4CdQL3dZ8HIs3PzrAAftrEycML2k2k27SvboA0ntAMLo2HlhJ2HHE3NIzH1RiDm5Nks103xc9PMgGXPIat0JXT+750Uzx8ZcX6GN0bDynN2H3L89iMx9SHgG06fF8KIHFp1uY/VlwfwuwxJSWvw2rsp/vS2kRB6ZOmeh6Jh5X4nD7o5F/0mMA1Y6+RhXTeian+9P8nmo2mun+6nsU6mtsK6905KM3wKWzs1XjiSvCgh9AhhA/AvTh921f+at1D/DrjBTTlg9AhKQFAXkri8WmJGjcwkxbipI+tZFE/rnI3rtHVrHOnI0Nqp0d6r0ZW45P34B+N54BP9vXzt4noAjsTUMRiBBkvdljWKLbYBH4mGlW43hXgyA4vE1AaM5eFsL8obZVgOACujYaXdbUGenIpHw8pp4KMYbsej5JcW4AYvlA8eGQBANKwcxbiQeLtXZY5yEduBFea79gRP/WLMnmAN8IKX5Y4CGO90jVctP4vnjlHmpORmYKPXZY9gNgA3u53w5SIvnnHmsmQdLg6PRjnHQ8AdbpZ6Q5F3Lw1z2/hxHJ4djGDaMRRve3vXDgVx0zEPkDZiTBJHGZ7NwFq7BztOKIhzdDSsHAdWY3RnowyOjhHBs6YQyocipFOOxNSVwCNAU6Fllzi7MTx5HPlbOKXg4RHmF7wa+BqG5+pIJ+u9u7jQyoeiJFQ/TySmTgZ+CHy6mPUoIr8Cvlao7j4XxffVBiIxdTWGK9OHil2XAvFn4NvRsJKXDK12KAkDyGLOD+4HPlbsuuSJ54DvFaOrH4ySMoAskZi6GMMQPlnsunjEbzAUnzNEu5iUpAFkicTUacBngTspv6PmFox8S0/kysxRKpS0AWSJxFQBLAPuwHBBqytujQblDMaG12PA9oEJmUqRsjCA/phuaCswTh3XYBhGsXK+pDE8c140Py/na88+X5SdAQwkElMVjC3m1cByoBEYnydxpzC8cV7FUPiWfJzQFZKyN4BcRGJqLcacoRGYA8wAagAlxweM21MHfjow7lQ8YH5azPuVLin+H6ojWXh90wE9AAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/common/images/plus.png
const plus_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/common/images/edit.png
const edit_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/trees/Tree/CommonPatterns.jsx






/* harmony default export */ const CommonPatterns = (function () {
  return /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("pattern", {
    id: LINK_BUTTON_PATTERN,
    width: "1",
    height: "1",
    x: "10",
    y: "10"
  }, /*#__PURE__*/react.createElement("image", {
    "aria-hidden": "true",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: link_namespaceObject,
    x: "0",
    y: "0",
    width: NODE_BUTTON_RADIUS * 2,
    height: NODE_BUTTON_RADIUS * 2,
    preserveAspectRatio: "xMidYMid slice"
  })), /*#__PURE__*/react.createElement("pattern", {
    id: PLUS_BUTTON_PATTERN,
    width: "1",
    height: "1",
    x: "10",
    y: "10"
  }, /*#__PURE__*/react.createElement("image", {
    "aria-hidden": "true",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: plus_namespaceObject,
    x: "0",
    y: "0",
    width: NODE_BUTTON_RADIUS * 2,
    height: NODE_BUTTON_RADIUS * 2,
    preserveAspectRatio: "xMidYMid slice"
  })), /*#__PURE__*/react.createElement("pattern", {
    id: EDIT_BUTTON_PATTERN,
    width: "1",
    height: "1",
    x: "10",
    y: "10"
  }, /*#__PURE__*/react.createElement("image", {
    "aria-hidden": "true",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: edit_namespaceObject,
    x: "0",
    y: "0",
    width: NODE_BUTTON_RADIUS * 2,
    height: NODE_BUTTON_RADIUS * 2,
    preserveAspectRatio: "xMidYMid slice"
  })), /*#__PURE__*/react.createElement("pattern", {
    id: DEFAULT_AVATAR_PATTERN,
    width: "1",
    height: "1",
    x: "10",
    y: "10"
  }, /*#__PURE__*/react.createElement("image", {
    "aria-hidden": "true",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: default_avatar_namespaceObject,
    x: "0",
    y: "0",
    width: NODE_AVATAR_RADIUS * 2,
    height: NODE_AVATAR_RADIUS * 2,
    preserveAspectRatio: "xMidYMid slice"
  })), /*#__PURE__*/react.createElement("pattern", {
    id: DEFAULT_SMALL_AVATAR_PATTERN,
    width: "1",
    height: "1",
    x: "10",
    y: "10"
  }, /*#__PURE__*/react.createElement("image", {
    "aria-hidden": "true",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: default_avatar_namespaceObject,
    x: "0",
    y: "0",
    width: NODE_SMALL_AVATAR_RADIUS * 2,
    height: NODE_SMALL_AVATAR_RADIUS * 2,
    preserveAspectRatio: "xMidYMid slice"
  })));
});
;// CONCATENATED MODULE: ./src/components/trees/Tree/index.jsx
function Tree_toConsumableArray(arr) { return Tree_arrayWithoutHoles(arr) || Tree_iterableToArray(arr) || Tree_unsupportedIterableToArray(arr) || Tree_nonIterableSpread(); }
function Tree_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Tree_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Tree_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Tree_arrayLikeToArray(arr); }
function Tree_slicedToArray(arr, i) { return Tree_arrayWithHoles(arr) || Tree_iterableToArrayLimit(arr, i) || Tree_unsupportedIterableToArray(arr, i) || Tree_nonIterableRest(); }
function Tree_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Tree_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Tree_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tree_arrayLikeToArray(o, minLen); }
function Tree_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Tree_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Tree_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function usePrevious(value) {
  var ref = (0,react.useRef)();
  (0,react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}
/* harmony default export */ const Tree = (function (_ref) {
  var tree = _ref.tree,
    _ref$people = _ref.people,
    people = _ref$people === void 0 ? [] : _ref$people,
    loading = _ref.loading,
    readonly = _ref.readonly,
    onChange = _ref.onChange,
    onEditNode = _ref.onEditNode;
  var _useState = (0,react.useState)(false),
    _useState2 = Tree_slicedToArray(_useState, 2),
    zoomInitialized = _useState2[0],
    setZoomInitialized = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = Tree_slicedToArray(_useState3, 2),
    links = _useState4[0],
    setLinks = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = Tree_slicedToArray(_useState5, 2),
    nodes = _useState6[0],
    setNodes = _useState6[1];
  var _useState7 = (0,react.useState)(null),
    _useState8 = Tree_slicedToArray(_useState7, 2),
    nodeToHighlight = _useState8[0],
    setNodeToHighlight = _useState8[1];
  var _useState9 = (0,react.useState)([]),
    _useState10 = Tree_slicedToArray(_useState9, 2),
    nodePeopleToHighlight = _useState10[0],
    setNodePeopleToHighlight = _useState10[1];
  var _useState11 = (0,react.useState)(null),
    _useState12 = Tree_slicedToArray(_useState11, 2),
    personDetails = _useState12[0],
    setPersonDetails = _useState12[1];
  var _useState13 = (0,react.useState)(null),
    _useState14 = Tree_slicedToArray(_useState13, 2),
    treeDetails = _useState14[0],
    setTreeDetails = _useState14[1];
  var _useState15 = (0,react.useState)('NONE'),
    _useState16 = Tree_slicedToArray(_useState15, 2),
    parentType = _useState16[0],
    setParentType = _useState16[1];
  var _useState17 = (0,react.useState)([]),
    _useState18 = Tree_slicedToArray(_useState17, 2),
    parents = _useState18[0],
    setParents = _useState18[1];
  var _useState19 = (0,react.useState)([]),
    _useState20 = Tree_slicedToArray(_useState19, 2),
    adoptiveParents = _useState20[0],
    setAdoptiveParents = _useState20[1];
  var prevTree = usePrevious(tree);
  var svg = (0,react.useRef)(null);
  var zoom = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    setZoomInitialized(false);
  }, []);
  (0,react.useEffect)(function () {
    // when moving between trees the component will try and be smart and not
    // remove the Component from the DOM. This makes re-render faster but screws
    // up the zoom handler. So we need to re-init by setting zoomInitialized to
    // false
    if (lodash_get_default()(tree, '_id') !== lodash_get_default()(prevTree, '_id')) {
      setZoomInitialized(false);
    }
    if (tree && tree.data) {
      updateTreeState(tree.data);
    }
  }, [tree]);
  (0,react.useEffect)(function () {
    if (svg.current && !zoomInitialized) {
      initSVGZoom(svg.current);
    }
  }, [zoomInitialized, svg.current]);

  /**
   * Takes the tree data and generates the links and nodes data followed by
   * setting those in the component state. Called when new props for tree data
   * are received.
   * @param  {Object} tree The tree data
   * @return {void}
   */
  function updateTreeState(tree) {
    // setup tree data
    var root = (0,hierarchy/* default */.ZP)(tree);

    // declares a tree layout
    var treeMap = (0,src_tree/* default */.Z)().nodeSize([200, 80]).separation(function (a, b) {
      return a.parent === b.parent ? 1 : 1.2;
    });
    var treeData = treeMap(root);

    // compute the tree layout nodes and links
    var nodes = treeData.descendants();

    // overwrite the height increase for each node depth/generation
    nodes.forEach(function (d) {
      d.y = d.depth * TREE_DEPTH;
    });

    // get link data (from nodes minus the root node)
    var links = nodes.slice(1);

    // set state data for our tree to render
    setNodes(nodes);
    setLinks(links);
  }
  function initSVGZoom(svg) {
    // have to check both clientWidth and parentNode.clientWidth to fix FireFox
    // issue where clientWidth is 0
    var width = svg.clientWidth || svg.parentNode.clientWidth;
    var zoomInstance = (0,src/* zoom */.sP)().scaleExtent([0.1, 3]).on('zoom', zoomed);
    var selectionSvg = (0,src_select/* default */.Z)('svg').call(zoomInstance);

    // move to initial position
    zoomInstance.translateBy(selectionSvg, width / 2, TREE_TOP_PADDING);
    setZoomInitialized(true);
  }
  function zoomed(event) {
    var zoomTransform = event.transform;
    zoom.current.setAttribute('transform', "translate(".concat(zoomTransform.x, ",").concat(zoomTransform.y, ")scale(").concat(zoomTransform.k, ")"));
  }
  function showPersonDetails(personId) {
    var parentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NONE';
    var parentIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var adoptiveParentIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var personDetails = people.find(function (p) {
      return p._id === personId;
    });
    var parents = parentIds.map(function (parentId) {
      return people.find(function (person) {
        return person._id === parentId;
      });
    });
    var adoptiveParents = adoptiveParentIds.map(function (parentId) {
      return people.find(function (person) {
        return person._id === parentId;
      });
    });
    setPersonDetails(personDetails);
    setParentType(parentType);
    setParents(parents);
    setAdoptiveParents(adoptiveParents);
  }
  function handleShowTreeDetails() {
    setTreeDetails(true);
  }
  function closePersonDetails() {
    setPersonDetails(null);
  }
  function closeTreeDetails() {
    setTreeDetails(false);
  }
  function addNode(node) {
    var newNode = {
      partners: []
    };

    // create a record of the child indexes in the tree to get to the node we
    // want to add a new node to
    var parentNode = node;
    var childIndexes = [];
    while (parentNode.parent) {
      // determine the current nodes index in the parent nodes children
      childIndexes.unshift(parentNode.parent.children.indexOf(parentNode));

      // move on to next parent node
      parentNode = parentNode.parent;
    }

    // Use the child indexes to add the new node to the tree
    var newTree = JSON.parse(JSON.stringify(tree)); // deep clone of the tree
    var currentNode = newTree.data;
    for (var i = 0; i < childIndexes.length; i++) {
      var index = childIndexes[i];
      currentNode = currentNode.children[index];
    }
    currentNode.children = currentNode.children ? [].concat(Tree_toConsumableArray(currentNode.children), [newNode]) : [newNode];
    onChange(newTree);
  }
  function highlightParents(node, peopleIds) {
    setNodeToHighlight(node);
    setNodePeopleToHighlight(peopleIds);
  }
  if (loading) {
    return /*#__PURE__*/react.createElement("div", {
      className: Tree_styles.root
    }, /*#__PURE__*/react.createElement(Loading, {
      message: "Loading Tree"
    }));
  }
  var treeId = lodash_get_default()(tree, '_id', '');
  var treeTitle = lodash_get_default()(tree, 'title', 'Untitled Tree');
  var treeCover = lodash_get_default()(tree, 'cover');
  var treeDescription = lodash_get_default()(tree, 'description', '');
  return /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.root
  }, /*#__PURE__*/react.createElement("div", {
    className: Tree_styles.showTreeDetails,
    onClick: handleShowTreeDetails,
    style: onChange ? {
      top: 65
    } : {
      top: 0
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-info",
    style: {
      marginRight: 7
    }
  }), " Tree Info"), personDetails && /*#__PURE__*/react.createElement(PersonDetails, {
    style: onChange ? {
      top: 65
    } : {
      top: 0
    },
    closeDetails: closePersonDetails,
    avatar: personDetails.avatar,
    firstName: personDetails.firstName,
    lastName: personDetails.lastName,
    bio: personDetails.bio,
    traits: personDetails.traits,
    aspirations: personDetails.aspirations,
    lifeStates: personDetails.lifeStates,
    parentType: parentType,
    parents: parents,
    adoptiveParents: adoptiveParents,
    custom: personDetails.custom,
    personId: personDetails._id,
    treeId: treeId,
    readonly: readonly
  }), treeDetails && /*#__PURE__*/react.createElement(Tree_TreeDetails, {
    style: onChange ? {
      top: 65
    } : {
      top: 0
    },
    closeDetails: closeTreeDetails,
    image: treeCover,
    title: treeTitle,
    description: treeDescription
  }), /*#__PURE__*/react.createElement("svg", {
    width: "100%",
    height: "100%",
    ref: svg
  }, /*#__PURE__*/react.createElement(CommonPatterns, null), /*#__PURE__*/react.createElement("g", {
    ref: zoom
  }, /*#__PURE__*/react.createElement("g", {
    className: "transform-layer"
  }, links.map(function (linkData, index) {
    return /*#__PURE__*/react.createElement(Link, {
      key: index,
      linkData: linkData
    });
  }), nodes.map(function (nodeData, index) {
    // if the node we are rendering is the one where we need to
    // highlight some people (parents) then pass the array of
    // nodePeopleToHighlight otherwise default to an empty array.
    var highlightPeople = [];
    if (nodeData === nodeToHighlight) {
      highlightPeople = nodePeopleToHighlight;
    }
    return /*#__PURE__*/react.createElement(Node, {
      key: index,
      nodeData: nodeData,
      people: people,
      highlightPeople: highlightPeople,
      highlightParents: highlightParents,
      showPersonDetails: showPersonDetails,
      addNode: addNode,
      readonly: readonly,
      editNode: onEditNode
    });
  })))));
});
;// CONCATENATED MODULE: ./src/components/trees/TreeEditor/index.jsx
function TreeEditor_slicedToArray(arr, i) { return TreeEditor_arrayWithHoles(arr) || TreeEditor_iterableToArrayLimit(arr, i) || TreeEditor_unsupportedIterableToArray(arr, i) || TreeEditor_nonIterableRest(); }
function TreeEditor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TreeEditor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TreeEditor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TreeEditor_arrayLikeToArray(o, minLen); }
function TreeEditor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TreeEditor_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TreeEditor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ const trees_TreeEditor = (function () {
  var params = (0,react_router_dist/* useParams */.UO)();
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var treeId = params.treeId;
  var _useState = (0,react.useState)(true),
    _useState2 = TreeEditor_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = TreeEditor_slicedToArray(_useState3, 2),
    tree = _useState4[0],
    setTree = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = TreeEditor_slicedToArray(_useState5, 2),
    people = _useState6[0],
    setPeople = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = TreeEditor_slicedToArray(_useState7, 2),
    readonly = _useState8[0],
    setReadonly = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState10 = TreeEditor_slicedToArray(_useState9, 2),
    nodeToEdit = _useState10[0],
    setNodeToEdit = _useState10[1];
  (0,react.useEffect)(function () {
    setLoading(true);
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    var getTree = axios/* default.get */.Z.get("/api/trees/".concat(treeId), {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    });
    var getPeople = axios/* default.get */.Z.get("/api/people?tree=".concat(treeId), {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    });
    Promise.all([getTree, getPeople]).then(function (response) {
      var tree = lodash_get_default()(response, '[0].data');
      var people = lodash_get_default()(response, '[1].data');
      setLoading(false);
      setTree(tree);
      setPeople(people);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      setLoading(false);
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }, [treeId]);
  function saveTree(tree) {
    var alertSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }

    // only save the tree structure data
    var data = tree.data;
    axios/* default.patch */.Z.patch("/api/trees/".concat(treeId), {
      data: data
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      setTree(tree);
      if (alertSuccess) {
        react_toastify/* toast.success */.Am.success('Tree saved');
      }
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: TreeEditor_styles.root
  }, /*#__PURE__*/react.createElement("h1", {
    className: "sr-only"
  }, "Tree Editor"), /*#__PURE__*/react.createElement(Tree, {
    tree: tree,
    people: people,
    loading: loading,
    readonly: readonly,
    onChange: saveTree,
    onEditNode: setNodeToEdit
  }), /*#__PURE__*/react.createElement(Toolbar, {
    tree: tree,
    saveTree: saveTree,
    setPreviewMode: setReadonly
  }), nodeToEdit && /*#__PURE__*/react.createElement(NodeEditor, {
    people: people,
    tree: tree,
    node: nodeToEdit,
    close: function close() {
      return setNodeToEdit(null);
    },
    onChange: saveTree
  }));
});
;// CONCATENATED MODULE: ./src/components/trees/TreePeople/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const TreePeople_styles = ({"loading":"c82a2f4a","navButtons":"abcf34af","personTile":"d1858303","tileArrow":"c07dd35f","avatar":"bffa9495","personMenu":"cc5b5859"});
;// CONCATENATED MODULE: ./src/components/trees/TreePeople/index.jsx
function TreePeople_slicedToArray(arr, i) { return TreePeople_arrayWithHoles(arr) || TreePeople_iterableToArrayLimit(arr, i) || TreePeople_unsupportedIterableToArray(arr, i) || TreePeople_nonIterableRest(); }
function TreePeople_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TreePeople_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TreePeople_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TreePeople_arrayLikeToArray(o, minLen); }
function TreePeople_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TreePeople_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TreePeople_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ const TreePeople = (function (_ref) {
  var loadingProp = _ref.loading;
  var params = (0,react_router_dist/* useParams */.UO)();
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var treeId = params.treeId;
  var _useState = (0,react.useState)(loadingProp),
    _useState2 = TreePeople_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = TreePeople_slicedToArray(_useState3, 2),
    people = _useState4[0],
    setPeople = _useState4[1];
  var _useState5 = (0,react.useState)(null),
    _useState6 = TreePeople_slicedToArray(_useState5, 2),
    tree = _useState6[0],
    setTree = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = TreePeople_slicedToArray(_useState7, 2),
    filter = _useState8[0],
    setFilter = _useState8[1];
  var _useState9 = (0,react.useState)([]),
    _useState10 = TreePeople_slicedToArray(_useState9, 2),
    filteredPeople = _useState10[0],
    setFilteredPeople = _useState10[1];
  (0,react.useEffect)(function () {
    setLoading(true);
    var authToken = auth.getToken();
    var headers = {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    };
    axios/* default.all */.Z.all([axios/* default.get */.Z.get("/api/people?tree=".concat(treeId), headers), axios/* default.get */.Z.get("/api/trees/".concat(treeId), headers)]).then(axios/* default.spread */.Z.spread(function (peopleResponse, treeResponse) {
      var people = lodash_get_default()(peopleResponse, 'data');
      var tree = lodash_get_default()(treeResponse, 'data');
      setPeople(people);
      setTree(tree);
      setFilter('');
      setFilteredPeople(people);
      setLoading(false);
    })).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      setLoading(false);
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }, []);
  function handleFilterPeople(event) {
    setFilter(event.target.value);
    setFilteredPeople(_filterPeople(people, event.target.value));
  }
  function _filterPeople(people) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (filter === '') {
      return people;
    }
    return people.filter(function (person) {
      var name = "".concat(person.firstName, " ").concat(person.lastName).toLowerCase();
      return name.includes(filter.toLowerCase());
    });
  }
  function deletePerson(personId) {
    var authToken = auth.getToken();
    var headers = {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    };
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    var deleteConfirmed = confirm('Are you sure you want to delete this person?');
    if (deleteConfirmed) {
      // delete all references of this person in the tree
      var updatedTree = Object.assign({}, tree);
      _removePersonFromTree(personId, updatedTree.data);
      axios/* default.all */.Z.all([axios/* default.patch */.Z.patch("/api/trees/".concat(treeId), {
        data: updatedTree.data
      }, headers), axios/* default.delete */.Z["delete"]("/api/people/".concat(personId), headers)]).then(axios/* default.spread */.Z.spread(function (saveTreeResponse, deletePersonResponse) {
        setPeople(people.filter(function (person) {
          return person._id !== personId;
        }));
        setFilteredPeople(filteredPeople.filter(function (person) {
          return person._id !== personId;
        }));
        react_toastify/* toast.success */.Am.success('Person removed');
      })).catch(function (error) {
        if (auth.loginRequired(error, navigate)) {
          return;
        }
        react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Failed to delete person from tree'), {
          autoClose: false
        });
      });
    }
  }
  function _removePersonFromTree(personId, treeNode) {
    if (lodash_get_default()(treeNode, 'person._id') === personId) {
      treeNode.person = null;
    }
    if (lodash_get_default()(treeNode, 'adoptiveParents.length', false)) {
      treeNode.adoptiveParents = treeNode.adoptiveParents.filter(function (parent) {
        return parent._id !== personId;
      });
    }
    if (lodash_get_default()(treeNode, 'parents.length', false)) {
      treeNode.parents = treeNode.parents.filter(function (parent) {
        return parent._id !== personId;
      });
    }
    if (lodash_get_default()(treeNode, 'partners.length', false)) {
      treeNode.partners.forEach(function (partnerRow) {
        if (lodash_get_default()(partnerRow, 'people.length', false)) {
          partnerRow.people = partnerRow.people.filter(function (partner) {
            return partner._id !== personId;
          });
        }
      });
    }
    if (lodash_get_default()(treeNode, 'children.length', false)) {
      treeNode.children.forEach(function (child) {
        return _removePersonFromTree(personId, child);
      });
    }
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Loading people"
    });
  }
  var personCreateLink = "/trees/".concat(treeId, "/people/add");
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "Manage People in Your Tree"), /*#__PURE__*/react.createElement("p", null, "Here you can create people to place in the structure of your family tree or edit existing people already in the tree."), /*#__PURE__*/react.createElement("div", {
    className: TreePeople_styles.navButtons
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    id: "back-to-tree",
    className: "btn btn-default",
    to: "/trees/".concat(treeId)
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-left"
  }), " Back to Your Tree"), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    id: "add-new-person",
    className: "btn btn-primary",
    to: personCreateLink
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-plus"
  }), " Add Someone New")), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Search"), /*#__PURE__*/react.createElement("input", {
    className: "form-control",
    type: "text",
    name: "filter",
    value: filter,
    placeholder: "Start typing to filter...",
    onChange: handleFilterPeople
  })), filteredPeople.map(function (person) {
    var personEditLink = "/trees/".concat(treeId, "/people/").concat(person._id);
    var personLinkLink = "/trees/".concat(treeId, "/people/").concat(person._id, "/link");
    var backgroundImage;
    if (person.avatar) {
      backgroundImage = "url(".concat(getUploadedImageUri(person.avatar, '200x200'), ")");
    } else {
      backgroundImage = "url(".concat(default_avatar_namespaceObject, ")");
    }
    var inlineAvatarStyle = {
      backgroundImage: backgroundImage
    };
    var name;
    if (person.firstName || person.lastName) {
      name = "".concat(person.firstName, " ").concat(person.lastName);
    } else {
      name = /*#__PURE__*/react.createElement("i", null, "~ No Name ~");
    }
    return /*#__PURE__*/react.createElement("div", {
      key: person._id,
      className: "".concat(TreePeople_styles.personTile, " people-list-item")
    }, /*#__PURE__*/react.createElement("div", {
      className: TreePeople_styles.avatar,
      style: inlineAvatarStyle
    }), /*#__PURE__*/react.createElement("div", null, name), /*#__PURE__*/react.createElement("div", {
      className: TreePeople_styles.personMenu
    }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      className: "btn btn-small btn-default edit-person",
      to: personEditLink
    }, "Edit"), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      className: "btn btn-small btn-default link-person",
      to: personLinkLink
    }, "Link"), /*#__PURE__*/react.createElement("button", {
      className: "btn btn-small btn-danger delete-person",
      onClick: function onClick() {
        return deletePerson(person._id);
      }
    }, "Delete")));
  }));
});
// EXTERNAL MODULE: ./node_modules/react-select/creatable/dist/react-select-creatable.esm.js + 1 modules
var react_select_creatable_esm = __webpack_require__(76348);
// EXTERNAL MODULE: ./src/common/js/traits.js
var js_traits = __webpack_require__(38073);
var traits_default = /*#__PURE__*/__webpack_require__.n(js_traits);
// EXTERNAL MODULE: ./src/common/js/aspirations.js
var js_aspirations = __webpack_require__(5593);
var aspirations_default = /*#__PURE__*/__webpack_require__.n(js_aspirations);
// EXTERNAL MODULE: ./src/common/js/lifeStates.js
var js_lifeStates = __webpack_require__(74994);
var lifeStates_default = /*#__PURE__*/__webpack_require__.n(js_lifeStates);
;// CONCATENATED MODULE: ./src/components/trees/PersonEditor/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const PersonEditor_styles = ({"personAvatarContainer":"d4cffbb3","personAvatarImage":"a1261a9d","avatarButtons":"a64fdcb1","customInfo":"d07ab3c4"});
;// CONCATENATED MODULE: ./src/components/trees/PersonEditor/index.jsx
function PersonEditor_typeof(obj) { "@babel/helpers - typeof"; return PersonEditor_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PersonEditor_typeof(obj); }
function PersonEditor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PersonEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PersonEditor_ownKeys(Object(source), !0).forEach(function (key) { PersonEditor_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PersonEditor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PersonEditor_defineProperty(obj, key, value) { key = PersonEditor_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PersonEditor_toPropertyKey(arg) { var key = PersonEditor_toPrimitive(arg, "string"); return PersonEditor_typeof(key) === "symbol" ? key : String(key); }
function PersonEditor_toPrimitive(input, hint) { if (PersonEditor_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PersonEditor_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function PersonEditor_toConsumableArray(arr) { return PersonEditor_arrayWithoutHoles(arr) || PersonEditor_iterableToArray(arr) || PersonEditor_unsupportedIterableToArray(arr) || PersonEditor_nonIterableSpread(); }
function PersonEditor_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PersonEditor_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function PersonEditor_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PersonEditor_arrayLikeToArray(arr); }
function PersonEditor_slicedToArray(arr, i) { return PersonEditor_arrayWithHoles(arr) || PersonEditor_iterableToArrayLimit(arr, i) || PersonEditor_unsupportedIterableToArray(arr, i) || PersonEditor_nonIterableRest(); }
function PersonEditor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PersonEditor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PersonEditor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PersonEditor_arrayLikeToArray(o, minLen); }
function PersonEditor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PersonEditor_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PersonEditor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















/* harmony default export */ const PersonEditor = (function () {
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var params = (0,react_router_dist/* useParams */.UO)();
  var treeId = params.treeId,
    personId = params.personId;
  var _useState = (0,react.useState)(null),
    _useState2 = PersonEditor_slicedToArray(_useState, 2),
    avatar = _useState2[0],
    setAvatar = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = PersonEditor_slicedToArray(_useState3, 2),
    avatarUri = _useState4[0],
    setAvatarUri = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = PersonEditor_slicedToArray(_useState5, 2),
    firstName = _useState6[0],
    setFirstName = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = PersonEditor_slicedToArray(_useState7, 2),
    lastName = _useState8[0],
    setLastName = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = PersonEditor_slicedToArray(_useState9, 2),
    bio = _useState10[0],
    setBio = _useState10[1];
  var _useState11 = (0,react.useState)([]),
    _useState12 = PersonEditor_slicedToArray(_useState11, 2),
    traits = _useState12[0],
    setTraits = _useState12[1];
  var _useState13 = (0,react.useState)([]),
    _useState14 = PersonEditor_slicedToArray(_useState13, 2),
    aspirations = _useState14[0],
    setAspirations = _useState14[1];
  var _useState15 = (0,react.useState)([]),
    _useState16 = PersonEditor_slicedToArray(_useState15, 2),
    lifeStates = _useState16[0],
    setLifeStates = _useState16[1];
  var _useState17 = (0,react.useState)([]),
    _useState18 = PersonEditor_slicedToArray(_useState17, 2),
    custom = _useState18[0],
    setCustom = _useState18[1];
  var _useState19 = (0,react.useState)(Boolean(personId)),
    _useState20 = PersonEditor_slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  (0,react.useEffect)(function () {
    var authToken = auth.getToken();
    if (!authToken) {
      setLoading(false);
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    if (personId) {
      axios/* default.get */.Z.get("/api/people/".concat(personId), {
        headers: {
          Authorization: "Bearer ".concat(authToken)
        }
      }).then(function (response) {
        var _response$data = response.data,
          avatar = _response$data.avatar,
          firstName = _response$data.firstName,
          lastName = _response$data.lastName,
          bio = _response$data.bio,
          traits = _response$data.traits,
          aspirations = _response$data.aspirations,
          lifeStates = _response$data.lifeStates,
          custom = _response$data.custom;
        setAvatar(avatar);
        setAvatarUri(getUploadedImageUri(avatar, '200x200'));
        setFirstName(firstName);
        setLastName(lastName);
        setBio(bio);
        setTraits(traits);
        setAspirations(aspirations);
        setLifeStates(lifeStates);
        setCustom(custom);
        setLoading(false);
      }).catch(function (error) {
        if (auth.loginRequired(error, navigate)) {
          return;
        }
        setLoading(false);
        react_toastify/* toast.error */.Am.error('Failed to get person info', {
          autoClose: false
        });
      });
    }
  }, []);
  function updateAvatar(image) {
    setAvatarUri(getOrigUploadedImageUri(image));
    setAvatar(image);
  }

  /**
   * Saves/updates the persons detail from what is currently in the state
   */
  function handleSubmit(event) {
    event.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    var person = {
      tree: treeId,
      avatar: avatar,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      traits: traits,
      aspirations: aspirations,
      lifeStates: lifeStates,
      custom: custom
    };
    if (personId) {
      _updatePerson(person);
    } else {
      _createPerson(person);
    }
  }
  function _createPerson(person) {
    var authToken = auth.getToken();
    axios/* default.post */.Z.post('/api/people', person, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Person created');
      navigate("/trees/".concat(treeId, "/people"));
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred creating person'), {
        autoClose: false
      });
    });
  }
  function _updatePerson(person) {
    var authToken = auth.getToken();
    axios/* default.put */.Z.put("/api/people/".concat(personId), person, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function () {
      react_toastify/* toast.success */.Am.success('Person updated');
      navigate(-1);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating person'), {
        autoClose: false
      });
    });
  }
  function handleAddCustomRow(event) {
    event.preventDefault();
    setCustom([].concat(PersonEditor_toConsumableArray(custom), [{
      title: '',
      value: ''
    }]));
  }
  function handleRemoveCustomRow(event) {
    event.preventDefault();
    var indexToDelete = parseInt(event.target.dataset.index);
    var newCustom = custom.filter(function (item, index) {
      return index !== indexToDelete;
    });
    setCustom(newCustom);
  }
  function handleCustomFieldChange(event) {
    var index = parseInt(event.target.dataset.index);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    var updated = {};
    updated[name] = value;
    var newCustom = custom.map(function (c, i) {
      if (index !== i) {
        // This isn't the item we care about - keep it as-is
        return c;
      }
      return PersonEditor_objectSpread(PersonEditor_objectSpread({}, c), updated);
    });
    setCustom(newCustom);
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Loading person editor"
    });
  }
  var imagePreview;
  if (avatar) {
    var style = {
      backgroundImage: "url(".concat(avatarUri, ")")
    };
    imagePreview = /*#__PURE__*/react.createElement("div", {
      className: PersonEditor_styles.personAvatarImage,
      style: style
    });
  } else {
    var _style = {
      backgroundImage: "url(".concat(default_avatar_namespaceObject, ")")
    };
    imagePreview = /*#__PURE__*/react.createElement("div", {
      className: PersonEditor_styles.personAvatarImage,
      style: _style
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, personId ? 'Edit Person' : 'Create Person'), /*#__PURE__*/react.createElement(ImageManager, {
    aspect: 1,
    image: avatar,
    imagePreview: imagePreview,
    dir: "avatar",
    onImageChange: updateAvatar
  }), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "First Name"), /*#__PURE__*/react.createElement("input", {
    id: "first-name",
    className: "form-control",
    type: "text",
    name: "firstName",
    value: firstName,
    onChange: function onChange(ev) {
      return setFirstName(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Last Name"), /*#__PURE__*/react.createElement("input", {
    id: "last-name",
    className: "form-control",
    type: "text",
    name: "lastName",
    value: lastName,
    onChange: function onChange(ev) {
      return setLastName(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement(RichEditor, {
    initialHtml: bio,
    onUpdate: setBio
  }), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Traits"), /*#__PURE__*/react.createElement(PlumTreeMultiSelect, {
    options: (traits_default()),
    onValuesChange: function onValuesChange(values) {
      return setTraits(values.map(function (v) {
        return v.value;
      }));
    },
    defaultValues: traits
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Aspirations"), /*#__PURE__*/react.createElement(PlumTreeMultiSelect, {
    options: (aspirations_default()),
    onValuesChange: function onValuesChange(values) {
      return setAspirations(values.map(function (v) {
        return v.value;
      }));
    },
    defaultValues: aspirations
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Life States"), /*#__PURE__*/react.createElement(PlumTreeMultiSelect, {
    options: (lifeStates_default()),
    onValuesChange: function onValuesChange(values) {
      return setLifeStates(values.map(function (v) {
        return v.value;
      }));
    },
    defaultValues: lifeStates
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "More (Custom)"), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-primary",
    onClick: handleAddCustomRow
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-plus"
  }), " Add More Custom Info"), custom.map(function (c, i) {
    return /*#__PURE__*/react.createElement("div", {
      className: PersonEditor_styles.customInfo,
      key: i
    }, /*#__PURE__*/react.createElement("input", {
      "data-index": i,
      className: "form-control",
      name: "title",
      type: "text",
      placeholder: "Title",
      value: c.title,
      onChange: handleCustomFieldChange
    }), /*#__PURE__*/react.createElement("input", {
      "data-index": i,
      className: "form-control",
      name: "value",
      type: "text",
      placeholder: "Value",
      value: c.value,
      onChange: handleCustomFieldChange
    }), /*#__PURE__*/react.createElement("button", {
      "data-index": i,
      className: "btn btn-danger",
      onClick: handleRemoveCustomRow
    }, /*#__PURE__*/react.createElement("i", {
      className: "icon-trash"
    })));
  })), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: "btn btn-default",
    to: "/trees/".concat(treeId, "/people")
  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    id: "save-person",
    type: "submit",
    className: "btn btn-primary"
  }, personId ? 'Update Person' : 'Create Person')));
});
var PlumTreeMultiSelect = function PlumTreeMultiSelect(_ref) {
  var options = _ref.options,
    onValuesChange = _ref.onValuesChange,
    defaultValues = _ref.defaultValues;
  var customStyles = {
    multiValue: function multiValue(provided, state) {
      return PersonEditor_objectSpread(PersonEditor_objectSpread({}, provided), {
        background: '#3498db',
        borderRadius: 3,
        boxShadow: '0 2px 3px 0 rgba(0,0,0,.075)'
      });
    },
    multiValueLabel: function multiValueLabel(provided, state) {
      return PersonEditor_objectSpread(PersonEditor_objectSpread({}, provided), {
        color: '#fff',
        padding: '3px 10px',
        textShadow: '0 1px 2px rgba(0,0,0,.2)',
        fontSize: 16,
        fontWeight: 300
      });
    },
    multiValueRemove: function multiValueRemove(provided, state) {
      return PersonEditor_objectSpread(PersonEditor_objectSpread({}, provided), {
        color: '#fff',
        textShadow: '0 1px 2px rgba(0,0,0,.2)',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: '#2980b9',
          color: '#fff'
        }
      });
    },
    control: function control(provided, state) {
      return PersonEditor_objectSpread(PersonEditor_objectSpread({}, provided), {
        borderColor: '#ccc',
        ':hover': {
          borderColor: 'rgba(26, 188, 156, 1)'
        }
      });
    }
  };
  var optionObjects = options.map(function (value) {
    return {
      label: value,
      value: value
    };
  });
  var defaultValueObjects = defaultValues.map(function (value) {
    return {
      label: value,
      value: value
    };
  });
  return /*#__PURE__*/react.createElement(react_select_creatable_esm/* default */.Z, {
    value: defaultValueObjects,
    onChange: onValuesChange,
    options: optionObjects,
    isMulti: true,
    isSearchable: true,
    styles: customStyles
  });
};
;// CONCATENATED MODULE: ./src/components/trees/PersonLinker/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const PersonLinker_styles = ({"formBtn":"b2139987","linkTile":"f4229e8e","tileArrow":"a8c16148","linkDetails":"d9d552d3","linkMenu":"c2680f68"});
;// CONCATENATED MODULE: ./src/components/trees/PersonLinker/index.jsx
function PersonLinker_slicedToArray(arr, i) { return PersonLinker_arrayWithHoles(arr) || PersonLinker_iterableToArrayLimit(arr, i) || PersonLinker_unsupportedIterableToArray(arr, i) || PersonLinker_nonIterableRest(); }
function PersonLinker_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PersonLinker_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PersonLinker_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PersonLinker_arrayLikeToArray(o, minLen); }
function PersonLinker_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PersonLinker_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PersonLinker_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const PersonLinker = (function () {
  var params = (0,react_router_dist/* useParams */.UO)();
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var treeId = params.treeId,
    personId = params.personId;
  var _useState = (0,react.useState)(''),
    _useState2 = PersonLinker_slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = PersonLinker_slicedToArray(_useState3, 2),
    person = _useState4[0],
    setPerson = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = PersonLinker_slicedToArray(_useState5, 2),
    tree = _useState6[0],
    setTree = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = PersonLinker_slicedToArray(_useState7, 2),
    links = _useState8[0],
    setLinks = _useState8[1];
  var _useState9 = (0,react.useState)(true),
    _useState10 = PersonLinker_slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  (0,react.useEffect)(function () {
    var authToken = auth.getToken();
    if (!authToken) {
      react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
      return setLoading(false);
    }
    axios/* default.get */.Z.get("/api/people/".concat(personId), {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      var links = lodash_get_default()(response, 'data.links', []);
      setLoading(false);
      setLinks(links);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      setLoading(false);
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    links.push({
      title: title,
      treeId: tree,
      personId: person
    });
    axios/* default.put */.Z.put("/api/people/".concat(personId), {
      links: links
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      react_toastify/* toast.success */.Am.success('Person links updated');
      setLinks(response.data.links);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating persons links'), {
        autoClose: false
      });
    });
  }
  function deleteLink(linkData) {
    var authToken = auth.getToken();
    if (!authToken) {
      return react_toastify/* toast.error */.Am.error('Looks like you\'re not logged in', {
        autoClose: false
      });
    }
    var newLinks = links.filter(function (link) {
      return link !== linkData;
    });
    axios/* default.put */.Z.put("/api/people/".concat(personId), {
      links: newLinks
    }, {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      react_toastify/* toast.success */.Am.success('Person links updated');
      setLinks(response.data.links);
    }).catch(function (error) {
      if (auth.loginRequired(error, navigate)) {
        return;
      }
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred updating persons links'), {
        autoClose: false
      });
    });
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      messsage: "Loading Person Links"
    });
  }
  var cancelClass = [PersonLinker_styles.formBtn, 'btn', 'btn-default'].join(' ');
  var submitClass = [PersonLinker_styles.formBtn, 'btn', 'btn-primary'].join(' ');
  var cancelLink = "/trees/".concat(treeId, "/people");
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "Link Person"), /*#__PURE__*/react.createElement("p", null, "If this person is also in another tree elsewhere you can link the two trees via this person."), /*#__PURE__*/react.createElement("p", null, "You'll need the tree ID and the ID of the person you want to link to from that tree."), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Title"), /*#__PURE__*/react.createElement("input", {
    id: "link-tree-title",
    className: "form-control",
    type: "text",
    name: "title",
    placeholder: "My Other Tree",
    value: title,
    onChange: function onChange(ev) {
      return setTitle(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Tree ID"), /*#__PURE__*/react.createElement("input", {
    id: "link-tree-id",
    className: "form-control",
    type: "text",
    name: "tree",
    value: tree,
    onChange: function onChange(ev) {
      return setTree(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", null, "Person ID"), /*#__PURE__*/react.createElement("input", {
    id: "link-tree-person",
    className: "form-control",
    type: "text",
    name: "person",
    value: person,
    onChange: function onChange(ev) {
      return setPerson(ev.target.value);
    }
  })), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    className: cancelClass,
    to: cancelLink
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-chevron-left"
  }), " Back to Tree People"), /*#__PURE__*/react.createElement("button", {
    id: "submit-tree-link",
    type: "submit",
    className: submitClass
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon-plus"
  }), "  Link Person")), /*#__PURE__*/react.createElement("h2", null, "Existing Links"), links.length ? /*#__PURE__*/react.createElement("p", null, "Here's the links to other trees this person already has. Remember a Sim can be linked to multiple trees.") : /*#__PURE__*/react.createElement("p", null, "Links you add/create will appear here."), links.map(function (linkData, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index,
      className: PersonLinker_styles.linkTile
    }, /*#__PURE__*/react.createElement("div", {
      className: PersonLinker_styles.linkMenu
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-small btn-danger",
      onClick: function onClick() {
        return deleteLink(linkData);
      }
    }, "Delete")), /*#__PURE__*/react.createElement("div", {
      className: PersonLinker_styles.linkDetails
    }, /*#__PURE__*/react.createElement("a", {
      id: "link-info-title-".concat(index),
      href: "/"
    }, linkData.title, " ", /*#__PURE__*/react.createElement("i", {
      className: "icon-link"
    })), /*#__PURE__*/react.createElement("div", {
      id: "link-info-tree-".concat(index)
    }, /*#__PURE__*/react.createElement("strong", null, "Tree Id:"), " ", linkData.treeId), /*#__PURE__*/react.createElement("div", {
      id: "link-info-person-".concat(index)
    }, /*#__PURE__*/react.createElement("strong", null, "Person Id:"), " ", linkData.personId)));
  }));
});
;// CONCATENATED MODULE: ./src/components/AccountDropdown/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const AccountDropdown_styles = ({"dropdownButton":"c1023eba","downArrow":"f6d0e176","downArrowActive":"df2e0eb2","menu":"e3c47457","menuActive":"f82bc2d7"});
;// CONCATENATED MODULE: ./src/components/AccountDropdown/index.jsx
function AccountDropdown_slicedToArray(arr, i) { return AccountDropdown_arrayWithHoles(arr) || AccountDropdown_iterableToArrayLimit(arr, i) || AccountDropdown_unsupportedIterableToArray(arr, i) || AccountDropdown_nonIterableRest(); }
function AccountDropdown_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AccountDropdown_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AccountDropdown_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AccountDropdown_arrayLikeToArray(o, minLen); }
function AccountDropdown_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function AccountDropdown_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AccountDropdown_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const AccountDropdown = (function () {
  var _useState = (0,react.useState)(false),
    _useState2 = AccountDropdown_slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var wrapperRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    // Close if clicked on outside of element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  function handleDropdownToggle() {
    setOpen(!open);
  }
  function handleLogout() {
    var session = auth.getSession();
    auth.clearToken();
    react_toastify/* toast.success */.Am.success("Cya later ".concat(session.username, "!"));
    setOpen(false);
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: wrapperRef
  }, /*#__PURE__*/react.createElement("div", {
    id: "account-dropdown",
    className: AccountDropdown_styles.dropdownButton,
    onClick: handleDropdownToggle
  }, "Account", /*#__PURE__*/react.createElement("i", {
    className: open ? "".concat(AccountDropdown_styles.downArrow, " ").concat(AccountDropdown_styles.downArrowActive) : AccountDropdown_styles.downArrow
  })), /*#__PURE__*/react.createElement("div", {
    className: open ? "".concat(AccountDropdown_styles.menu, " ").concat(AccountDropdown_styles.menuActive) : AccountDropdown_styles.menu
  }, auth.getSession() ? /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/account",
    onClick: handleDropdownToggle
  }, "Account Settings")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    id: "account-logout",
    to: "/",
    onClick: handleLogout
  }, "Logout"))) : /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/login",
    onClick: handleDropdownToggle
  }, "Login")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/signup",
    onClick: handleDropdownToggle
  }, "Create Account")))));
});
;// CONCATENATED MODULE: ./src/components/SideNav/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const SideNav_styles = ({"navList":"dbc9fa29","lastNav":"b21b5d8b","navTreesHeader":"d1ecb512","menuLoginMessage":"e6559f56"});
;// CONCATENATED MODULE: ./src/components/SideNav/index.jsx





/* harmony default export */ const SideNav = (function (_ref) {
  var loadUsersTree = _ref.loadUsersTree,
    trees = _ref.trees,
    onItemClick = _ref.onItemClick;
  (0,react.useEffect)(function () {
    var authToken = auth.getToken();
    axios/* default.get */.Z.get('/api/trees', {
      headers: {
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (response) {
      loadUsersTree(response.data);
    }).catch(function () {
      // nothing to do here - user is just not logged in
    });
  }, []);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    className: SideNav_styles.navList
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/",
    onClick: onItemClick
  }, " Home ")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/gallery",
    onClick: onItemClick
  }, " Gallery ")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/guides",
    onClick: onItemClick
  }, " Guides ")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/donate",
    onClick: onItemClick
  }, " Donate ")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/support",
    onClick: onItemClick
  }, " Support "))), /*#__PURE__*/react.createElement("div", {
    className: SideNav_styles.navTreesHeader
  }, "Your Trees"), auth.getSession() ? /*#__PURE__*/react.createElement("ul", {
    className: [SideNav_styles.navList, SideNav_styles.lastNav].join(' ')
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/trees/create",
    onClick: onItemClick
  }, " Create New ")), trees.map(function (tree) {
    var url = "/trees/".concat(tree._id);
    return /*#__PURE__*/react.createElement("li", {
      key: tree._id
    }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
      to: url,
      onClick: onItemClick
    }, " ", tree.title, " "));
  })) : /*#__PURE__*/react.createElement("p", {
    className: SideNav_styles.menuLoginMessage
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/login",
    onClick: onItemClick
  }, "Login"), " or ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/signup",
    onClick: onItemClick
  }, "Create an Account"), " to create, view and edit your trees."));
});
;// CONCATENATED MODULE: ./src/containers/SideNav.jsx



var SideNav_mapStateToProps = function mapStateToProps(state) {
  return {
    trees: state.usersTrees
  };
};
var SideNav_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadUsersTree: function loadUsersTree(trees) {
      dispatch(actions_loadUsersTree(trees));
    }
  };
};
/* harmony default export */ const containers_SideNav = ((0,es/* connect */.$j)(SideNav_mapStateToProps, SideNav_mapDispatchToProps)(SideNav));
;// CONCATENATED MODULE: ./src/components/Version/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Version_styles = ({"panel":"a351599d"});
;// CONCATENATED MODULE: ./src/components/Version/index.jsx
function Version_slicedToArray(arr, i) { return Version_arrayWithHoles(arr) || Version_iterableToArrayLimit(arr, i) || Version_unsupportedIterableToArray(arr, i) || Version_nonIterableRest(); }
function Version_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Version_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Version_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Version_arrayLikeToArray(o, minLen); }
function Version_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Version_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Version_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const Version = (function () {
  var _useState = (0,react.useState)(true),
    _useState2 = Version_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)('unknown'),
    _useState4 = Version_slicedToArray(_useState3, 2),
    apiVersion = _useState4[0],
    setApiVersion = _useState4[1];
  var _useState5 = (0,react.useState)('unknown'),
    _useState6 = Version_slicedToArray(_useState5, 2),
    apiColor = _useState6[0],
    setApiColor = _useState6[1];
  (0,react.useEffect)(function () {
    axios/* default.get */.Z.get('/api/version').then(function (_ref) {
      var _ref$data = _ref.data,
        version = _ref$data.version,
        color = _ref$data.color;
      setApiVersion(version);
      setApiColor(color);
      setLoading(false);
    }).catch(function () {
      setLoading(false);
    });
  }, []);
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, {
      message: "Getting version details"
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: Version_styles.panel
  }, /*#__PURE__*/react.createElement("table", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "API Version"), /*#__PURE__*/react.createElement("td", null, apiVersion)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "API Color"), /*#__PURE__*/react.createElement("td", null, apiColor)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "UI Version"), /*#__PURE__*/react.createElement("td", null, "f5a7bfc735dbb5f2045e91b9540497fb111dc3b5".substring(0, 7))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "UI Color"), /*#__PURE__*/react.createElement("td", null, "green"))));
});
;// CONCATENATED MODULE: ./src/components/Sunset/index.jsx


/* harmony default export */ const Sunset = (function () {
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h1", null, "We're Shutting Down"), /*#__PURE__*/react.createElement("p", null, "The Plum Tree First launched August 2016 which means it's been running for over 7 years now."), /*#__PURE__*/react.createElement("p", null, "In that time its popularity has grown far beyond expectations and it's had a genuinely heart warming amount of love from our users."), /*#__PURE__*/react.createElement("p", null, "However it's with a heap of sadness I'm announcing the upcoming shutdown of Plum Tree on ", /*#__PURE__*/react.createElement("strong", null, "1st Dec 2023"), " for the reasons explained below."), /*#__PURE__*/react.createElement("h2", null, "Sunset"), /*#__PURE__*/react.createElement("p", null, "The Plum Tree will not shut down immediately. Instead we'll be going through a period of \"sunset\" to give users some time to make backups of their trees until ", /*#__PURE__*/react.createElement("strong", null, "1st Dec 2023"), "."), /*#__PURE__*/react.createElement("p", null, "Downloading trees is a recent feature addition. Go to any tree you want to keep, hit download and a ", /*#__PURE__*/react.createElement("code", null, ".zip"), " file containing your tree's data, images and a html file to view the tree will be downloaded."), /*#__PURE__*/react.createElement("h2", null, "Why Shut Down"), /*#__PURE__*/react.createElement("p", null, "There's a few reasons but the primary one is costs. While I do get a regular set of donations, which I can't thank those contributors enough for, each month these donations generally fall short ~$100-$200 of the actual server running costs."), /*#__PURE__*/react.createElement("p", null, "Without the help of those people chipping in the Plum Tree would have likely shut down years ago."), /*#__PURE__*/react.createElement("p", null, "Another reason is time. Over the years my other life commitments have left little time for me to work on the Plum Tree. I've kept the site running, made optimizations to reduce costs and tried to keep things up to date. However that time given is far less than I had starting out with what was a fun side project. As it stands I don't have the time to add new features or really give the Plum Tree and its community the focus it deserves."), /*#__PURE__*/react.createElement("p", null, "The last reason to mention really just emphasizes the previous two. On September 12th me and my wife expanded our family with the birth of our first baby girl."), /*#__PURE__*/react.createElement("p", null, "While I know for many the Plum Tree will be missed I hope you can understand with even less time and financial spends to be prioritized elsewhere, it's time for me to take down the Plum Tree."), /*#__PURE__*/react.createElement("h2", null, "Thank You"), /*#__PURE__*/react.createElement("p", null, "It's been a fantastic ride. From those who have donated through the years, helped find bugs and suggest features, send in kind words or just used the Plum Tree I can't thank you all enough."), /*#__PURE__*/react.createElement("p", null, "The project has been fun and challenging in some ways but always a labour of love. I've loved the technical aspects of coding the project and had great pleasure from seeing people love something I created."), /*#__PURE__*/react.createElement("p", null, "A final thank you all - Tobias"), /*#__PURE__*/react.createElement("h2", null, "Some Other FAQs"), /*#__PURE__*/react.createElement("h3", null, "Issues Downloading Trees"), /*#__PURE__*/react.createElement("p", null, "Since the release of the downloading trees feature there have been several patches to fix most peoples issues. However some users with impressively exceptionally large trees may still see download errors. For the small number of users this now affects I would ask you to ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/support"
  }, "drop me an email"), " and I will manually generate a download link for you."), /*#__PURE__*/react.createElement("h3", null, "Downloaded Trees Are Blank"), /*#__PURE__*/react.createElement("p", null, "A few users reported an issue where opening the downloaded tree only shows a blank page. Generally the cause is the downloaded \".zip\" file needs to be extracted before opening the \"tree.html\" file inside. You'll need to right click on the downloaded file and you should see an option to \"Extract all\" or similar. Once you've done that you can open the file in the extracted folder location."), /*#__PURE__*/react.createElement("h3", null, "Are You Selling The Plum Tree?"), /*#__PURE__*/react.createElement("p", null, "Since the announcement I've had offers but replied to all the same message."), /*#__PURE__*/react.createElement("p", null, "While many of these offers are with good intentions I can't verify individuals' integrity and don't want to hand over the current Plum Tree users and their data and be the source of spam emails due to the information being sold. If an offer came from an entity with accountability (e.g. a company with good data protection policies) then that may be a consideration."), /*#__PURE__*/react.createElement("h3", null, "Open Source"), /*#__PURE__*/react.createElement("p", null, "It's unlikely the Plum Tree will be sold as mentioned above. A few others have asked about the code being open sourced."), /*#__PURE__*/react.createElement("p", null, "After the shutdown this is currently the most likely scenario."), /*#__PURE__*/react.createElement("p", null, "All the code will be made open for anyone to look at and do with as they please. You could make a new version of the plum tree and host it elsewhere, run your own version locally, make an offline version or get some of the sims community together and decide what to do."));
});
;// CONCATENATED MODULE: ./src/components/Layout/index.jsx
function Layout_slicedToArray(arr, i) { return Layout_arrayWithHoles(arr) || Layout_iterableToArrayLimit(arr, i) || Layout_unsupportedIterableToArray(arr, i) || Layout_nonIterableRest(); }
function Layout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Layout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Layout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Layout_arrayLikeToArray(o, minLen); }
function Layout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Layout_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Layout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




























/* harmony default export */ const Layout = (function () {
  var _useState = (0,react.useState)(false),
    _useState2 = Layout_slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setMenuOpen = _useState2[1];
  var location = (0,react_router_dist/* useLocation */.TH)();
  (0,react.useEffect)(function () {
    sendGoogleAnalyticsPageView(location.pathname + location.search);
  }, [location]);
  return /*#__PURE__*/react.createElement("div", {
    className: styles.root
  }, /*#__PURE__*/react.createElement("div", {
    className: menuOpen ? "".concat(styles.container, " ").concat(styles.containerActiveMenu) : styles.container
  }, /*#__PURE__*/react.createElement("header", {
    className: styles.header
  }, /*#__PURE__*/react.createElement("div", {
    className: styles.menuButton,
    onClick: function onClick() {
      return setMenuOpen(true);
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: menuOpen ? "".concat(styles.hamburger, " ").concat(styles.hamburgerActive) : styles.hamburger
  }, /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("div", null)), "Menu"), /*#__PURE__*/react.createElement("div", {
    className: styles.brand
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    className: styles.headerLogo,
    height: "40",
    width: "40"
  }), /*#__PURE__*/react.createElement("h1", {
    className: "hidden-xs-down"
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/"
  }, " The Plum Tree "))), /*#__PURE__*/react.createElement(AccountDropdown, null)), /*#__PURE__*/react.createElement("div", {
    className: styles.body
  }, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(Home, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    path: "/guides/*",
    element: /*#__PURE__*/react.createElement(Guides, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/signup",
    element: /*#__PURE__*/react.createElement(Signup, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/login",
    element: /*#__PURE__*/react.createElement(containers_Login, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/donate",
    element: /*#__PURE__*/react.createElement(Donate, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/gallery",
    element: /*#__PURE__*/react.createElement(Gallery, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/account",
    element: /*#__PURE__*/react.createElement(Account, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/support",
    element: /*#__PURE__*/react.createElement(Support, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/forgot-password",
    element: /*#__PURE__*/react.createElement(ForgotPassword, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/reset-password",
    element: /*#__PURE__*/react.createElement(ResetPassword, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/forgot-username",
    element: /*#__PURE__*/react.createElement(ForgotUsername, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/create",
    element: /*#__PURE__*/react.createElement(containers_TreeDetails, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId",
    element: /*#__PURE__*/react.createElement(trees_TreeEditor, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/publish",
    element: /*#__PURE__*/react.createElement(TreePublish, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/download",
    element: /*#__PURE__*/react.createElement(TreeDownload, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/details",
    element: /*#__PURE__*/react.createElement(containers_TreeDetails, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/people",
    element: /*#__PURE__*/react.createElement(TreePeople, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/people/add",
    element: /*#__PURE__*/react.createElement(PersonEditor, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/people/:personId",
    element: /*#__PURE__*/react.createElement(PersonEditor, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/trees/:treeId/people/:personId/link",
    element: /*#__PURE__*/react.createElement(PersonLinker, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/version",
    element: /*#__PURE__*/react.createElement(Version, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/sunset",
    element: /*#__PURE__*/react.createElement(Sunset, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    path: "/*",
    element: /*#__PURE__*/react.createElement(NotFound, null)
  }))), /*#__PURE__*/react.createElement("nav", {
    className: styles.nav
  }, /*#__PURE__*/react.createElement("div", {
    className: styles.closeRow
  }, /*#__PURE__*/react.createElement("div", {
    className: styles.closeButton,
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }, /*#__PURE__*/react.createElement("span", null, "Close"), /*#__PURE__*/react.createElement("i", {
    className: styles.close
  }))), /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/sunset",
    className: styles.sunsetAlert,
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }, "The Plum Tree App shutdown 1st Dec 2023. Click to find out more."), /*#__PURE__*/react.createElement(containers_SideNav, {
    onItemClick: function onItemClick() {
      return setMenuOpen(false);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: menuOpen ? "".concat(styles.navMask, " ").concat(styles.navMaskActiveMenu) : styles.navMask,
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  })));
});
;// CONCATENATED MODULE: ./src/components/trees/Public/index.jsx
function Public_slicedToArray(arr, i) { return Public_arrayWithHoles(arr) || Public_iterableToArrayLimit(arr, i) || Public_unsupportedIterableToArray(arr, i) || Public_nonIterableRest(); }
function Public_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Public_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Public_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Public_arrayLikeToArray(o, minLen); }
function Public_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Public_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Public_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const Public = (function () {
  var params = (0,react_router_dist/* useParams */.UO)();
  var treeId = params.treeId;
  var _useState = (0,react.useState)(true),
    _useState2 = Public_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = Public_slicedToArray(_useState3, 2),
    tree = _useState4[0],
    setTree = _useState4[1];
  (0,react.useEffect)(function () {
    setLoading(true);
    axios/* default.get */.Z.get("/api/published/".concat(treeId)).then(function (response) {
      var tree = lodash_get_default()(response, 'data');
      setTree(tree);
      setLoading(false);
      sendGoogleAnalyticsPageView("/public/".concat(treeId));
    }).catch(function (error) {
      setLoading(false);
      react_toastify/* toast.error */.Am.error(lodash_get_default()(error, 'response.data.errors[0].detail', 'Unknown error occurred'), {
        autoClose: false
      });
    });
  }, [treeId]);
  if (loading) {
    return /*#__PURE__*/react.createElement(Loading, null);
  }
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Tree, {
    tree: tree,
    people: lodash_get_default()(tree, 'people', []),
    readonly: true,
    loading: loading
  }));
});
;// CONCATENATED MODULE: ./src/AppRoot.jsx













var store = (0,redux/* createStore */.MT)(reducers);
var root = client.createRoot(document.getElementById('app'));
root.render( /*#__PURE__*/react.createElement(dist/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
  store: store
}, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(react_toastify/* ToastContainer */.Ix, {
  autoClose: 8000,
  position: react_toastify/* toast.POSITION.TOP_CENTER */.Am.POSITION.TOP_CENTER,
  toastClassName: "alert"
}), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
  exact: true,
  path: "/public/:treeId",
  element: /*#__PURE__*/react.createElement(Public, null)
}), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
  path: "/*",
  element: /*#__PURE__*/react.createElement(Layout, null)
}))))));

/***/ }),

/***/ 5593:
/***/ ((module) => {

module.exports = ['Academic', 'Admired Icon', 'Angling Ace', 'Archaeology Scholar', 'Artistic Prodigy', 'Athlete', 'Beach Life', 'Bestselling Author', 'Big Happy Family ', 'Bodybuilder', 'Championship Rider', 'Chef', 'Chief of Mischief ', 'City Native', 'Computer Whiz', 'Country Caretaker', 'Creative Genius', 'Cure Seeker', 'Drama Llama', 'Eco Innovator', 'Emissary of the Collective', 'Enforcer of Order ', 'Expert Nectar Maker', 'Extreme Sports Enthusiast', 'Fabulously Filthy', 'Fabulously Wealthy', 'Freelance Botanist', 'Friend of the Animals', 'Friend of the World', 'Galactic Privateer', 'Goal Oriented ', 'Good Vampire', 'Hope VS Order', 'Inner Peace', 'Joke Star ', 'Jungle Explorer', 'Leader of the Pack', 'Live Fast ', 'Lone Wolf ', 'Lord/Lady of the Knits', 'Mansion Baron', 'Master Actor/Master Actress', 'Master Chef', 'Master Maker', 'Master Mixologist ', 'Master Vampire', 'Mind and Body', 'Mt. Komorebi Sightseer', 'Musical Genius', 'Neighborhood Confidante', 'Nerd Brain', 'Outdoor Enthusiast', 'Painter', 'Painter Extraordinaire', 'Paragon of Hope ', 'Party Animal', 'Perfectly Pristine ', 'Playtime Captain', 'Public Enemy', 'Purveyor of Potions', 'Rambunctious Scamp', 'Renaissance Sim ', 'Self-Care Specialist', 'Serial Romantic', 'Slumber Party Animal', 'Social Butterfly', 'Soulmate', 'Spellcraft & Sorcery', 'StrangerVille Mystery', 'Successful Lineage', 'Super Parent', 'The Curator', 'The Positivity Challenge', 'Trend-Setter', 'Vampire Family', 'Villainous Valentine', 'Werewolf Initiate', 'Whiz Kid ', 'Wildfang Renegade', 'World-Famous Celebrity', 'Zen Guru'];

/***/ }),

/***/ 74994:
/***/ ((module) => {

module.exports = ['Alien', 'Cat', 'Dog', 'Ghost', 'Mermaid', 'PlantSim', 'Servo', 'Sim', 'Skeleton', 'Spellcaster', 'Vampire'];

/***/ }),

/***/ 38073:
/***/ ((module) => {

module.exports = ['A Gift of Credits', 'A True Master', 'Active', 'Adventurous', 'Affectionate', 'Afizzionado', 'Aggressive', 'Alluring', 'Aloof', 'Always Welcome', 'Ambitious', 'Ancient Bloodline', 'Angelic', 'Angler\'s Tranquility', 'Animal Affection', 'Animal Enthusiast', 'Animal Whisperer', 'Antiseptic', 'Appraiser', 'Argumentative', 'Art Lover', 'Bad Manners', 'Beguiling', 'Beloved', 'Bookworm', 'Brave', 'Bro', 'Business Savvy', 'Calm', 'Calming Aura', 'Capable Mountaineer', 'Career-Minded', 'Carefree', 'Cat Lover', 'Cautious', 'Champion Genes', 'Champion of the People', 'Champion', 'Charismatic Crooner', 'Charmer', 'Cheerful', 'Child of the Islands', 'Child of the Ocean', 'Childish', 'Chomp Champion', 'Chopstick Savvy', 'Clear Perspective', 'Clever', 'Clingy', 'Clumsy', 'Cold Acclimation', 'Collector', 'Companion', 'Compassionate', 'Confidante', 'Connections', 'Consumed By the Mother', 'Couch Potato', 'Creative Visionary', 'Creative', 'Creatively Gifted', 'Critically Connected', 'Curious', 'Dance Machine', 'Dastardly', 'Dauntless', 'Death by Anger', 'Death by Beetles', 'Death By Being Crushed By a Murphy Bed', 'Death By Being Swarmed By Flies', 'Death by Cowplant', 'Death by Drowning', 'Death by Electrocution', 'Death by Embarrassment', 'Death by Falling from Heights', 'Death by Fire', 'Death by Flowers', 'Death by Freezing', 'Death by Hunger', 'Death by Killer Chicken', 'Death by Killer Rabbit', 'Death by Laughter', 'Death by Lightning', 'Death by Meteorite', 'Death by Old Age', 'Death by Overexertion', 'Death by Overheating', 'Death by Poison', 'Death by Pufferfish', 'Death by Rabid Rodent Fever', 'Death by Spellcaster Overload', 'Death by Steam', 'Death by Stink Capsule', 'Death by Sunlight', 'Death by Urban Myth', 'Death by Vending Machine', 'Defiant', 'Distant', 'Dog Lover', 'Domestic', 'Dormant Wolf', 'Eco Master', 'Eco-Engineer', 'Emotional Control', 'Energetic', 'Entrepreneur', 'Entrepreneurial', 'Erratic', 'Essence of Flavor', 'Evil', 'Expert Mountaineer', 'Expressionistic', 'Family-oriented', 'Fast & Fastidious', 'Father Winter\'s Baby', 'Fearful', 'Fertile', 'Filth Dweller', 'Fluffy', 'Foodie', 'Forever Fresh', 'Forever Full', 'Free Services', 'Free Spirit', 'Freegan', 'Fresh Chef', 'Friend of the Moonwood Collective', 'Friend of the Wildfangs', 'Friendly', 'Frisky', 'Frugal', 'Fussy', 'Geek', 'Genius', 'Ghastly Consequences', 'Gloomy', 'Glutton', 'Good Manners', 'Good', 'Goofball', 'Great Kisser', 'Great Storyteller', 'Greater Wolf Blood', 'Green Fiend', 'Gregarious', 'Gym Rat', 'Hairy', 'Handy', 'Happy Infant', 'Happy Toddler', 'Hardly Hungry', 'Hates Children', 'Headstrong', 'Heat Acclimation', 'Heatproof', 'Hero of StrangerVille', 'Heroic Presence', 'High Confidence', 'High Maintenance', 'High Metabolism', 'High Self-Esteem', 'Higher Education', 'Highflier', 'Hilarious', 'Home Turf', 'Horse Lover', 'Hot-Headed', 'Hunter', 'I am the Master', 'I\'m a Bear!', 'Ice Proof', 'Iconic', 'Idea Person', 'Immortal', 'In the Know', 'Incredibly Friendly', 'Independent', 'Infected', 'Influential Individual', 'Inquisitive', 'Insensitive', 'Insider', 'Inspired Explorer', 'Intelligent', 'Intense', 'Irresponsible', 'Jealous', 'Jumpy', 'Kindness Ambassador', 'Kleptomaniac', 'Lactose Intolerant', 'Laid-Back', 'Lazy', 'Legendary Stamina', 'Loner', 'Long Lived', 'Loud', 'Loves Outdoors', 'Low Confidence', 'Low Self-Esteem', 'Loyal', 'Lunar Confidant', 'Lunar Link', 'Maker', 'Marketable', 'Master Crafter', 'Master Mixer', 'Master of the Sea', 'Mastermind', 'Materialistic', 'Matriarch/Patriarch', 'Mean Streak', 'Mean', 'Mediator', 'Mellow', 'Melt Master', 'Memorable', 'Mental Magister', 'Mentally Gifted', 'Mentor', 'Middling Mountaineer', 'Mischievous', 'Morning Sim', 'Muse of the Maker', 'Muser', 'Museum Patron', 'Music Lover', 'Mystical Sensing', 'Natural Leader', 'Natural Speaker', 'Naturalist', 'Nature Conversationalist', 'Neat', 'Needs No One', 'Needy', 'Neutral Confidence', 'Never Weary', 'Night Owl', 'Night Wraith', 'Noncommittal', 'Observant', 'Outgoing', 'Over-Achiever', 'Overachiever', 'Pack Animal', 'Paranoid', 'Paranormal Investigator', 'Party Animal', 'Perfect Host', 'Perfectionist', 'Physically Gifted', 'Picky Eater', 'Piper', 'Player', 'Playful', 'Poetic', 'Potion Master', 'Practiced Host', 'Prepared Voyager', 'Professional Slacker', 'Professorial', 'Proper', 'Prowler', 'Quick Learner', 'Rancher', 'Rebellious', 'Recycle Disciple', 'Refined Lupine', 'Regained Humanity', 'Relatable', 'Responsible', 'Role Model', 'Romantic', 'Sacred Knitting Knowledge', 'Savant', 'Scouting Aptitude', 'Seasoned Gamer', 'Seldom Sleepy', 'Self-Absorbed', 'Self-Assured', 'Self-Care Expertise', 'Sensitive', 'Shameless', 'Shrewd', 'Sickness Resistance', 'Silly', 'Sincere', 'Skittish', 'Sleight of Hand', 'Sleuth', 'Slinger of Spells', 'Slob', 'Smart', 'Snob', 'Socially Awkward', 'Socially Gifted', 'Spa Membership', 'Spectral Look', 'Speed Cleaner', 'Speed Reader', 'Spice Hound', 'Spoiled', 'Squeamish', 'Steel Bladder', 'Storm Chaser', 'Stoves and Grills Master', 'Strong Bloodline', 'Stubborn', 'Sulani Mana', 'Sunny', 'Super Green Thumb', 'Supreme Authority', 'Survival Instinct', 'Survivalist', 'Talkative', 'Temporary Genius', 'Territorial', 'Threatening Presence', 'Thrifty', 'Top Notch Infant', 'Top-Notch Toddler', 'Tormentor', 'Treasure Hunter', 'Troublemaker', 'Twisted Heart', 'Uncontrolled Emotions', 'Unflirty', 'Unhappy Infant', 'Unstoppable Fame', 'Untroubled', 'Vegetarian', 'Vicarious', 'Vocal', 'Waterproof', 'Weak Bloodline', 'Webmaster', 'Well-Mannered Foal', 'Werewolf Ally', 'Wiggly', 'Wild', 'World-Renowned Actor', 'Worldly Knowledge'];

/***/ }),

/***/ 46700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 68704,
	"./af.js": 68704,
	"./ar": 27156,
	"./ar-dz": 42642,
	"./ar-dz.js": 42642,
	"./ar-kw": 20640,
	"./ar-kw.js": 20640,
	"./ar-ly": 82641,
	"./ar-ly.js": 82641,
	"./ar-ma": 52750,
	"./ar-ma.js": 52750,
	"./ar-sa": 43697,
	"./ar-sa.js": 43697,
	"./ar-tn": 60667,
	"./ar-tn.js": 60667,
	"./ar.js": 27156,
	"./az": 33899,
	"./az.js": 33899,
	"./be": 55777,
	"./be.js": 55777,
	"./bg": 26429,
	"./bg.js": 26429,
	"./bm": 18337,
	"./bm.js": 18337,
	"./bn": 91379,
	"./bn-bd": 36843,
	"./bn-bd.js": 36843,
	"./bn.js": 91379,
	"./bo": 71798,
	"./bo.js": 71798,
	"./br": 50706,
	"./br.js": 50706,
	"./bs": 60158,
	"./bs.js": 60158,
	"./ca": 10191,
	"./ca.js": 10191,
	"./cs": 41958,
	"./cs.js": 41958,
	"./cv": 54139,
	"./cv.js": 54139,
	"./cy": 99673,
	"./cy.js": 99673,
	"./da": 48845,
	"./da.js": 48845,
	"./de": 50940,
	"./de-at": 1477,
	"./de-at.js": 1477,
	"./de-ch": 64025,
	"./de-ch.js": 64025,
	"./de.js": 50940,
	"./dv": 72684,
	"./dv.js": 72684,
	"./el": 1672,
	"./el.js": 1672,
	"./en-au": 62979,
	"./en-au.js": 62979,
	"./en-ca": 67149,
	"./en-ca.js": 67149,
	"./en-gb": 35595,
	"./en-gb.js": 35595,
	"./en-ie": 62994,
	"./en-ie.js": 62994,
	"./en-il": 86866,
	"./en-il.js": 86866,
	"./en-in": 82260,
	"./en-in.js": 82260,
	"./en-nz": 59993,
	"./en-nz.js": 59993,
	"./en-sg": 94434,
	"./en-sg.js": 94434,
	"./eo": 40996,
	"./eo.js": 40996,
	"./es": 59314,
	"./es-do": 99749,
	"./es-do.js": 99749,
	"./es-mx": 29604,
	"./es-mx.js": 29604,
	"./es-us": 57034,
	"./es-us.js": 57034,
	"./es.js": 59314,
	"./et": 75366,
	"./et.js": 75366,
	"./eu": 95121,
	"./eu.js": 95121,
	"./fa": 55851,
	"./fa.js": 55851,
	"./fi": 89785,
	"./fi.js": 89785,
	"./fil": 62830,
	"./fil.js": 62830,
	"./fo": 74933,
	"./fo.js": 74933,
	"./fr": 92051,
	"./fr-ca": 36979,
	"./fr-ca.js": 36979,
	"./fr-ch": 62466,
	"./fr-ch.js": 62466,
	"./fr.js": 92051,
	"./fy": 57389,
	"./fy.js": 57389,
	"./ga": 44060,
	"./ga.js": 44060,
	"./gd": 44640,
	"./gd.js": 44640,
	"./gl": 85090,
	"./gl.js": 85090,
	"./gom-deva": 22927,
	"./gom-deva.js": 22927,
	"./gom-latn": 73602,
	"./gom-latn.js": 73602,
	"./gu": 20486,
	"./gu.js": 20486,
	"./he": 19023,
	"./he.js": 19023,
	"./hi": 79435,
	"./hi.js": 79435,
	"./hr": 96345,
	"./hr.js": 96345,
	"./hu": 47492,
	"./hu.js": 47492,
	"./hy-am": 24585,
	"./hy-am.js": 24585,
	"./id": 96701,
	"./id.js": 96701,
	"./is": 65276,
	"./is.js": 65276,
	"./it": 23602,
	"./it-ch": 75062,
	"./it-ch.js": 75062,
	"./it.js": 23602,
	"./ja": 90987,
	"./ja.js": 90987,
	"./jv": 35485,
	"./jv.js": 35485,
	"./ka": 13048,
	"./ka.js": 13048,
	"./kk": 12664,
	"./kk.js": 12664,
	"./km": 12681,
	"./km.js": 12681,
	"./kn": 45263,
	"./kn.js": 45263,
	"./ko": 36023,
	"./ko.js": 36023,
	"./ku": 34839,
	"./ku.js": 34839,
	"./ky": 77750,
	"./ky.js": 77750,
	"./lb": 77223,
	"./lb.js": 77223,
	"./lo": 81906,
	"./lo.js": 81906,
	"./lt": 64837,
	"./lt.js": 64837,
	"./lv": 18656,
	"./lv.js": 18656,
	"./me": 48331,
	"./me.js": 48331,
	"./mi": 97645,
	"./mi.js": 97645,
	"./mk": 2963,
	"./mk.js": 2963,
	"./ml": 44744,
	"./ml.js": 44744,
	"./mn": 3296,
	"./mn.js": 3296,
	"./mr": 62448,
	"./mr.js": 62448,
	"./ms": 406,
	"./ms-my": 23814,
	"./ms-my.js": 23814,
	"./ms.js": 406,
	"./mt": 28957,
	"./mt.js": 28957,
	"./my": 18940,
	"./my.js": 18940,
	"./nb": 37127,
	"./nb.js": 37127,
	"./ne": 43285,
	"./ne.js": 43285,
	"./nl": 75835,
	"./nl-be": 77243,
	"./nl-be.js": 77243,
	"./nl.js": 75835,
	"./nn": 32802,
	"./nn.js": 32802,
	"./oc-lnc": 87282,
	"./oc-lnc.js": 87282,
	"./pa-in": 53424,
	"./pa-in.js": 53424,
	"./pl": 83696,
	"./pl.js": 83696,
	"./pt": 61551,
	"./pt-br": 61657,
	"./pt-br.js": 61657,
	"./pt.js": 61551,
	"./ro": 29199,
	"./ro.js": 29199,
	"./ru": 88217,
	"./ru.js": 88217,
	"./sd": 14817,
	"./sd.js": 14817,
	"./se": 91403,
	"./se.js": 91403,
	"./si": 18446,
	"./si.js": 18446,
	"./sk": 21098,
	"./sk.js": 21098,
	"./sl": 48805,
	"./sl.js": 48805,
	"./sq": 47718,
	"./sq.js": 47718,
	"./sr": 52003,
	"./sr-cyrl": 86925,
	"./sr-cyrl.js": 86925,
	"./sr.js": 52003,
	"./ss": 83707,
	"./ss.js": 83707,
	"./sv": 80643,
	"./sv.js": 80643,
	"./sw": 46250,
	"./sw.js": 46250,
	"./ta": 52550,
	"./ta.js": 52550,
	"./te": 5558,
	"./te.js": 5558,
	"./tet": 63503,
	"./tet.js": 63503,
	"./tg": 87711,
	"./tg.js": 87711,
	"./th": 95626,
	"./th.js": 95626,
	"./tk": 60727,
	"./tk.js": 60727,
	"./tl-ph": 97568,
	"./tl-ph.js": 97568,
	"./tlh": 71682,
	"./tlh.js": 71682,
	"./tr": 53538,
	"./tr.js": 53538,
	"./tzl": 83614,
	"./tzl.js": 83614,
	"./tzm": 77706,
	"./tzm-latn": 77828,
	"./tzm-latn.js": 77828,
	"./tzm.js": 77706,
	"./ug-cn": 86550,
	"./ug-cn.js": 86550,
	"./uk": 75509,
	"./uk.js": 75509,
	"./ur": 912,
	"./ur.js": 912,
	"./uz": 23725,
	"./uz-latn": 67537,
	"./uz-latn.js": 67537,
	"./uz.js": 23725,
	"./vi": 53285,
	"./vi.js": 53285,
	"./x-pseudo": 69201,
	"./x-pseudo.js": 69201,
	"./yo": 90392,
	"./yo.js": 90392,
	"./zh-cn": 98914,
	"./zh-cn.js": 98914,
	"./zh-hk": 8229,
	"./zh-hk.js": 8229,
	"./zh-mo": 59735,
	"./zh-mo.js": 59735,
	"./zh-tw": 55786,
	"./zh-tw.js": 55786
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 80950:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 89214:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8623:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7748:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56619:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 77108:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 52361:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 94616:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplum_tree_ui"] = self["webpackChunkplum_tree_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [432], () => (__webpack_require__(58324)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;