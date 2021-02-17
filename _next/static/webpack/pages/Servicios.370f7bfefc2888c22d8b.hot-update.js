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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      servicio = _useState3[0],
      SetServicio = _useState3[1];

  var fetchData = function fetchData() {
    // fetch("http://localhost:3000/api/servicesArray")
    // fetch("https://aravena-y-asociados.netlify.app/api/servicesArray")
    fetch("https://aravena-y-asociados.vercel.app/api/servicesArray4").then(function (response) {
      return response.json();
    }).then(function (data) {
      return setServicios(data);
    }, setLoading(false))["catch"](function (error) {
      return console.error("Error:", error);
    });
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
      setLoading(false);
    } else {
      descrip.innerHTML = "";
      title.innerHTML = "";
      imgback.setAttribute("src", "");
      setLoading(true);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "hidden text-center text-xl font-bold sm:block ",
        children: "Servicios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
                  lineNumber: 59,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-4 sm:m-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                className: "text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this)]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "",
          id: "img-back",
          className: "absolute w-full h-full z-0 rounded-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "z-10 h-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            id: "title",
            className: "text-center text-3xl font-bold  mb-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "description",
            className: "text-xl sm:mb-24"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
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
                lineNumber: 85,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Cotizar, "MIOcW5e44EG8M9k+JCKHj0BuQ4Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VydmljaW9zLmpzeCJdLCJuYW1lcyI6WyJDb3RpemFyIiwidXNlU3RhdGUiLCJzZXJ2aWNpb3MiLCJzZXRTZXJ2aWNpb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlcnZpY2lvIiwiU2V0U2VydmljaW8iLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZGVzY3JpcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiY29udGVudCIsImZpbmQiLCJlbGVtZW50IiwiaWQiLCJpbWdiYWNrIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsImltZyIsIm1hcCIsIml0ZW0iLCJzdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxJQUFELENBRnJCO0FBQUEsTUFFVkcsT0FGVTtBQUFBLE1BRURDLFVBRkM7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsQ0FBRCxDQUh2QjtBQUFBLE1BR1ZLLFFBSFU7QUFBQSxNQUdBQyxXQUhBOztBQUtqQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQ0E7QUFDQUMsU0FBSyxDQUFDLDJEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVVixZQUFZLENBQUNVLElB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QUFBO0FBQUEsZ0JBREYsZUFNRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNFO0FBQ0UsY0FBRSxFQUFDLE9BREw7QUFFRSxxQkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUssY0FBRSxFQUFDLGFBQVI7QUFBc0IscUJBQVMsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBSyxxQkFBUyxFQUFDLDhEQUFmO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsZ0ZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBa0RFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsREY7QUFBQSxrQkFERjtBQXNERDs7R0ExRlF4QixPOztLQUFBQSxPO0FBNEZNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TZXJ2aWNpb3MuMzcwZjdiZmVmYzI4ODhjMjJkOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQ290aXphcigpIHtcclxuICBjb25zdCBbc2VydmljaW9zLCBzZXRTZXJ2aWNpb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZXJ2aWNpbywgU2V0U2VydmljaW9dID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlc0FycmF5XCIpXHJcbiAgICAvLyBmZXRjaChcImh0dHBzOi8vYXJhdmVuYS15LWFzb2NpYWRvcy5uZXRsaWZ5LmFwcC9hcGkvc2VydmljZXNBcnJheVwiKVxyXG4gICAgZmV0Y2goXCJodHRwczovL2FyYXZlbmEteS1hc29jaWFkb3MudmVyY2VsLmFwcC9hcGkvc2VydmljZXNBcnJheTRcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRTZXJ2aWNpb3MoZGF0YSksIHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBkZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbiAgICB2YXIgY29udGVudCA9IHNlcnZpY2lvcy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBzZXJ2aWNpbyk7XHJcbiAgICB2YXIgaW1nYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWJhY2tcIik7XHJcbiAgICBpZiAoY29udGVudCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVzY3JpcC5pbm5lckhUTUwgPSBjb250ZW50LmRlc2NyaXA7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQubmFtZTtcclxuICAgICAgaW1nYmFjay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY29udGVudC5pbWcpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NyaXAuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgaW1nYmFjay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJcIik7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTEyIGZsZXggZmxleC1yb3cgZ2FwLTggbWQ6cHgtMiBzbTpmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHNtOmJsb2NrIFwiPlxyXG4gICAgICAgICAgU2VydmljaW9zXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVyYWwgdy02LzEyIGZsZXggZmxleC1jb2wgZ2FwLTIgc206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTp3LWZ1bGxcIj5cclxuICAgICAgICAgIHtzZXJ2aWNpb3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBmbGV4IGJnLWdyYXktYm9yZGVyLWdyYXktMTAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgc206ZmxleC1jb2wgc206Z2FwLTJcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0U2VydmljaW8oaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtbWQgYmctYW1iZXItNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zdmd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IHNtOm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0ZXh0LWxlZnQgc206dGV4dC1jZW50ZXIgc206dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgdy1mdWxsIGhvdmVyOnNoYWRvdy0yeGwgcm91bmRlZC1tZCByZWxhdGl2ZSBoLWF1dG8gZ3JpZCBweS04IHB4LTEyIHRleHQtd2hpdGUgc206cGItMTBcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWctYmFja1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0wIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkICBtYi04XCJcclxuICAgICAgICAgICAgPjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRleHQteGwgc206bWItMjRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgbGVmdC0wIG1iLThcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0NvdGl6YXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTQgcHktMiBmb250LW1lZGl1bSB0ZXh0LWJhc2UgYmctYW1iZXItNTAwIHRleHQtd2hpdGUgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBDb3RpemFyXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdGl6YXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=