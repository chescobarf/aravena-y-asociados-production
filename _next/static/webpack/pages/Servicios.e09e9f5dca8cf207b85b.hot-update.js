webpackHotUpdate_N_E("pages/Servicios",{

/***/ "./pages/Servicios.jsx":
/*!*****************************!*\
  !*** ./pages/Servicios.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Personal\\Aravena-Asociados\\front\\pages\\Servicios.jsx",
    _s = $RefreshSig$();






function Cotizar() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      servicios = _useState[0],
      setServicios = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      servicio = _useState2[0],
      SetServicio = _useState2[1];

  var fetchData = function fetchData() {
    // fetch("http://localhost:3000/api/servicesArray")
    fetch("https://aravena-y-asociados.netlify.app/api/servicesArray").then(function (response) {
      return response.json();
    }).then(function (data) {
      return setServicios(data);
    })["catch"](function (error) {
      return console.error("Error:", error);
    });
    console.log(servicios);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var descrip = document.querySelector("#description");
    var title = document.querySelector("#title");
    var content = servicios.find(function (element) {
      return element.id === servicio;
    });
    var imgback = document.querySelector("#img-back");

    if (content != undefined) {
      descrip.innerHTML = content.descrip;
      title.innerHTML = content.name;
      imgback.setAttribute("src", content.img);
    } else {
      descrip.innerHTML = "";
      title.innerHTML = "";
      imgback.setAttribute("src", "");
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "hidden text-center text-xl font-bold sm:block ",
        children: "Servicios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lateral w-6/12 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:w-full",
        children: servicios.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all items-center cursor-pointer w-full sm:flex-col sm:gap-2",
            onClick: function onClick() {
              return SetServicio(item.id);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: item.svg,
                  alt: "",
                  className: "w-8 h-8"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-4 sm:m-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                className: "text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this)]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "",
          id: "img-back",
          className: "absolute w-full h-full z-0 rounded-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "z-10 h-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            id: "title",
            className: "text-center text-3xl font-bold  mb-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "description",
            className: "text-xl sm:mb-24"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid place-items-center absolute bottom-0 w-full left-0 mb-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/Cotizar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "px-4 py-2 font-medium text-base bg-amber-500 text-white rounded cursor-pointer",
                children: "Cotizar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Cotizar, "X4BvHWmemBbzLkrk835nCWbJ7Pw=");

_c = Cotizar;
/* harmony default export */ __webpack_exports__["default"] = (Cotizar);

var _c;

$RefreshReg$(_c, "Cotizar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VydmljaW9zLmpzeCJdLCJuYW1lcyI6WyJDb3RpemFyIiwidXNlU3RhdGUiLCJzZXJ2aWNpb3MiLCJzZXRTZXJ2aWNpb3MiLCJzZXJ2aWNpbyIsIlNldFNlcnZpY2lvIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRlc2NyaXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZSIsImNvbnRlbnQiLCJmaW5kIiwiZWxlbWVudCIsImlkIiwiaW1nYmFjayIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJpbWciLCJtYXAiLCJpdGVtIiwic3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDVkMsU0FEVTtBQUFBLE1BQ0NDLFlBREQ7O0FBQUEsbUJBR2VGLHNEQUFRLENBQUMsQ0FBRCxDQUh2QjtBQUFBLE1BR1ZHLFFBSFU7QUFBQSxNQUdBQyxXQUhBOztBQUtqQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQ0FDLFNBQUssQ0FBQywyREFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsYUFBVVIsWUFBWSxDQUFDUSxJQUFELENBQXRCO0FBQUEsS0FGUixXQUdTLFVBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNELEtBQVIsQ0FBYyxRQUFkLEVBQXdCQSxLQUF4QixDQUFY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QUFSO0FBQXNCLHFCQUFTLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQUsscUJBQVMsRUFBQyw4REFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDLGdGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWtERSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbERGO0FBQUEsa0JBREY7QUFzREQ7O0dBeEZRdkIsTzs7S0FBQUEsTztBQTBGTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2VydmljaW9zLmUwOWU5ZjVkY2E4Y2YyMDdiODViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIENvdGl6YXIoKSB7XHJcbiAgY29uc3QgW3NlcnZpY2lvcywgc2V0U2VydmljaW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlcnZpY2lvLCBTZXRTZXJ2aWNpb10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlcnZpY2VzQXJyYXlcIilcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9hcmF2ZW5hLXktYXNvY2lhZG9zLm5ldGxpZnkuYXBwL2FwaS9zZXJ2aWNlc0FycmF5XCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2VydmljaW9zKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKSk7XHJcbiAgICBjb25zb2xlLmxvZyhzZXJ2aWNpb3MpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbiAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xyXG4gICAgdmFyIGNvbnRlbnQgPSBzZXJ2aWNpb3MuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gc2VydmljaW8pO1xyXG4gICAgdmFyIGltZ2JhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1iYWNrXCIpO1xyXG4gICAgaWYgKGNvbnRlbnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlc2NyaXAuaW5uZXJIVE1MID0gY29udGVudC5kZXNjcmlwO1xyXG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBjb250ZW50Lm5hbWU7XHJcbiAgICAgIGltZ2JhY2suc2V0QXR0cmlidXRlKFwic3JjXCIsIGNvbnRlbnQuaW1nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NyaXAuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgaW1nYmFjay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTEyIGZsZXggZmxleC1yb3cgZ2FwLTggbWQ6cHgtMiBzbTpmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHNtOmJsb2NrIFwiPlxyXG4gICAgICAgICAgU2VydmljaW9zXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVyYWwgdy02LzEyIGZsZXggZmxleC1jb2wgZ2FwLTIgc206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTp3LWZ1bGxcIj5cclxuICAgICAgICAgIHtzZXJ2aWNpb3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBmbGV4IGJnLWdyYXktYm9yZGVyLWdyYXktMTAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgc206ZmxleC1jb2wgc206Z2FwLTJcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0U2VydmljaW8oaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtbWQgYmctYW1iZXItNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zdmd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IHNtOm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0ZXh0LWxlZnQgc206dGV4dC1jZW50ZXIgc206dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgdy1mdWxsIGhvdmVyOnNoYWRvdy0yeGwgcm91bmRlZC1tZCByZWxhdGl2ZSBoLWF1dG8gZ3JpZCBweS04IHB4LTEyIHRleHQtd2hpdGUgc206cGItMTBcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWctYmFja1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0wIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkICBtYi04XCJcclxuICAgICAgICAgICAgPjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRleHQteGwgc206bWItMjRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgbGVmdC0wIG1iLThcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0NvdGl6YXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTQgcHktMiBmb250LW1lZGl1bSB0ZXh0LWJhc2UgYmctYW1iZXItNTAwIHRleHQtd2hpdGUgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBDb3RpemFyXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdGl6YXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=