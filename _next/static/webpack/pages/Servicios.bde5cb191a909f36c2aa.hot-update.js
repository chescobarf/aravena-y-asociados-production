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
    fetch("https://aravena-y-asociados.vercel.app/api/servicesArray").then(function (response) {
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

  if (!loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "hidden text-center text-xl font-bold sm:block ",
          children: "Servicios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hidden",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                      lineNumber: 60,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "ml-4 sm:m-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                    className: "text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base",
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 21
                }, _this)]
              }, item.id, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              alt: "",
              id: "img-back",
              className: "absolute w-full h-full z-0 rounded-md"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "z-10 h-full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                id: "title",
                className: "text-center text-3xl font-bold  mb-8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "description",
                className: "text-xl sm:mb-24"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "grid place-items-center absolute bottom-0 w-full left-0 mb-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/Cotizar",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "px-4 py-2 font-medium text-base bg-amber-500 text-white rounded cursor-pointer",
                    children: "Cotizar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            "class": "text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0",
            style: "\r top: 50%;\r\n",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              "class": "fas fa-circle-notch fa-spin fa-5x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "hidden text-center text-xl font-bold sm:block ",
          children: "Servicios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
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
                    lineNumber: 126,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-4 sm:m-0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                  className: "text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base",
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "",
            id: "img-back",
            className: "absolute w-full h-full z-0 rounded-md"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "z-10 h-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              id: "title",
              className: "text-center text-3xl font-bold  mb-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "description",
              className: "text-xl sm:mb-24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "grid place-items-center absolute bottom-0 w-full left-0 mb-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/Cotizar",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "px-4 py-2 font-medium text-base bg-amber-500 text-white rounded cursor-pointer",
                  children: "Cotizar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VydmljaW9zLmpzeCJdLCJuYW1lcyI6WyJDb3RpemFyIiwidXNlU3RhdGUiLCJzZXJ2aWNpb3MiLCJzZXRTZXJ2aWNpb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlcnZpY2lvIiwiU2V0U2VydmljaW8iLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZGVzY3JpcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiY29udGVudCIsImZpbmQiLCJlbGVtZW50IiwiaWQiLCJpbWdiYWNrIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsImltZyIsIm1hcCIsIml0ZW0iLCJzdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxJQUFELENBRnJCO0FBQUEsTUFFVkcsT0FGVTtBQUFBLE1BRURDLFVBRkM7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsQ0FBRCxDQUh2QjtBQUFBLE1BR1ZLLFFBSFU7QUFBQSxNQUdBQyxXQUhBOztBQUtqQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQ0E7QUFDQUMsU0FBSyxDQUFDLDBEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVVixZQUFZLENBQUNVLElB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QUFFLEVBQUMsT0FETDtBQUVFLHVCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBS0U7QUFBSyxnQkFBRSxFQUFDLGFBQVI7QUFBc0IsdUJBQVMsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBTUU7QUFBSyx1QkFBUyxFQUFDLDhEQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFVBQVg7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsZ0ZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQWtERSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbERGO0FBQUEsb0JBREY7QUFzREQ7QUFDRjs7R0E5SlF4QixPOztLQUFBQSxPO0FBZ0tNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TZXJ2aWNpb3MuYmRlNWNiMTkxYTkwOWYzNmMyYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQ290aXphcigpIHtcclxuICBjb25zdCBbc2VydmljaW9zLCBzZXRTZXJ2aWNpb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZXJ2aWNpbywgU2V0U2VydmljaW9dID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlc0FycmF5XCIpXHJcbiAgICAvLyBmZXRjaChcImh0dHBzOi8vYXJhdmVuYS15LWFzb2NpYWRvcy5uZXRsaWZ5LmFwcC9hcGkvc2VydmljZXNBcnJheVwiKVxyXG4gICAgZmV0Y2goXCJodHRwczovL2FyYXZlbmEteS1hc29jaWFkb3MudmVyY2VsLmFwcC9hcGkvc2VydmljZXNBcnJheVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFNlcnZpY2lvcyhkYXRhKSwgc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIGRlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcclxuICAgIHZhciBjb250ZW50ID0gc2VydmljaW9zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHNlcnZpY2lvKTtcclxuICAgIHZhciBpbWdiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctYmFja1wiKTtcclxuICAgIGlmIChjb250ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZXNjcmlwLmlubmVySFRNTCA9IGNvbnRlbnQuZGVzY3JpcDtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY29udGVudC5uYW1lO1xyXG4gICAgICBpbWdiYWNrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb250ZW50LmltZyk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzY3JpcC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBpbWdiYWNrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIlwiKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoIWxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTEyIGZsZXggZmxleC1yb3cgZ2FwLTggbWQ6cHgtMiBzbTpmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgc206YmxvY2sgXCI+XHJcbiAgICAgICAgICAgIFNlcnZpY2lvc1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXJhbCB3LTYvMTIgZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIHtzZXJ2aWNpb3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBmbGV4IGJnLWdyYXktYm9yZGVyLWdyYXktMTAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgc206ZmxleC1jb2wgc206Z2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTZXRTZXJ2aWNpbyhpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEyIHctMTIgcm91bmRlZC1tZCBiZy1hbWJlci01MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zdmd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IHNtOm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdGV4dC1sZWZ0IHNtOnRleHQtY2VudGVyIHNtOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgdy1mdWxsIGhvdmVyOnNoYWRvdy0yeGwgcm91bmRlZC1tZCByZWxhdGl2ZSBoLWF1dG8gZ3JpZCBweS04IHB4LTEyIHRleHQtd2hpdGUgc206cGItMTBcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbWctYmFja1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHotMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkICBtYi04XCJcclxuICAgICAgICAgICAgICAgID48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC14bCBzbTptYi0yNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgbGVmdC0wIG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Db3RpemFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtYmFzZSBiZy1hbWJlci01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb3RpemFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIGZpeGVkIGJsb2NrIHRvcC0wIGxlZnQtMCBiZy13aGl0ZSBvcGFjaXR5LTc1IHotNTBcIj5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JlZW4tNTAwIG9wYWNpdHktNzUgdG9wLTEvMiBteS0wIG14LWF1dG8gYmxvY2sgcmVsYXRpdmUgdy0wIGgtMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgIHRvcDogNTAlO1xyXG5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW4gZmEtNXhcIj48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXktMTIgZmxleCBmbGV4LXJvdyBnYXAtOCBtZDpweC0yIHNtOmZsZXgtY29sIHNtOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCBzbTpibG9jayBcIj5cclxuICAgICAgICAgICAgU2VydmljaW9zXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlcmFsIHctNi8xMiBmbGV4IGZsZXgtY29sIGdhcC0yIHNtOmdyaWQgc206Z3JpZC1jb2xzLTIgc206dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIHtzZXJ2aWNpb3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBmbGV4IGJnLWdyYXktYm9yZGVyLWdyYXktMTAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgc206ZmxleC1jb2wgc206Z2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNldFNlcnZpY2lvKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLW1kIGJnLWFtYmVyLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zdmd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IHNtOm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHRleHQtbGVmdCBzbTp0ZXh0LWNlbnRlciBzbTp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgdy1mdWxsIGhvdmVyOnNoYWRvdy0yeGwgcm91bmRlZC1tZCByZWxhdGl2ZSBoLWF1dG8gZ3JpZCBweS04IHB4LTEyIHRleHQtd2hpdGUgc206cGItMTBcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWctYmFja1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkICBtYi04XCJcclxuICAgICAgICAgICAgICA+PC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOm1iLTI0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgbGVmdC0wIG1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ290aXphclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC00IHB5LTIgZm9udC1tZWRpdW0gdGV4dC1iYXNlIGJnLWFtYmVyLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb3RpemFyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3RpemFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9