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
    })["catch"](function (error) {
      return console.error("Error:", error);
    });
    setLoading(false);
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
      setLoading(true);
      descrip.innerHTML = "";
      title.innerHTML = "";
      imgback.setAttribute("src", "");
    }
  });

  if (!loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "hidden text-center text-xl font-bold sm:block ",
          children: "Servicios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
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
                    lineNumber: 61,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-4 sm:m-0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                  className: "text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base",
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, _this)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "",
            id: "img-back",
            className: "absolute w-full h-full z-0 rounded-md"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "z-10 h-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              id: "title",
              className: "text-center text-3xl font-bold  mb-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "description",
              className: "text-xl sm:mb-24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
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
                  lineNumber: 87,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "hidden text-center text-xl font-bold sm:block ",
          children: "Servicios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "CARGANDO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } // return (
  //   <>
  //     <Header></Header>
  //     <div className="container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center">
  //       <h2 className="hidden text-center text-xl font-bold sm:block ">
  //         Servicios
  //       </h2>
  //       <div className="lateral w-6/12 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:w-full">
  //         {servicios.map((item) => {
  //           return (
  //             <button
  //               className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all items-center cursor-pointer w-full sm:flex-col sm:gap-2"
  //               key={item.id}
  //               onClick={() => SetServicio(item.id)}
  //             >
  //               <div className="flex-shrink-0">
  //                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
  //                   <img src={item.svg} alt="" className="w-8 h-8" />
  //                 </div>
  //               </div>
  //               <div className="ml-4 sm:m-0">
  //                 <dt className="text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base">
  //                   {item.name}
  //                 </dt>
  //               </div>
  //             </button>
  //           );
  //         })}
  //       </div>
  //       <div className="shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10">
  //         <img
  //           alt=""
  //           id="img-back"
  //           className="absolute w-full h-full z-0 rounded-md"
  //         />
  //         <div className="z-10 h-full">
  //           <h1
  //             id="title"
  //             className="text-center text-3xl font-bold  mb-8"
  //           ></h1>
  //           <div id="description" className="text-xl sm:mb-24"></div>
  //           <div className="grid place-items-center absolute bottom-0 w-full left-0 mb-8">
  //             <Link href="/Cotizar">
  //               <a className="px-4 py-2 font-medium text-base bg-amber-500 text-white rounded cursor-pointer">
  //                 Cotizar
  //               </a>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer></Footer>
  //   </>
  // );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VydmljaW9zLmpzeCJdLCJuYW1lcyI6WyJDb3RpemFyIiwidXNlU3RhdGUiLCJzZXJ2aWNpb3MiLCJzZXRTZXJ2aWNpb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlcnZpY2lvIiwiU2V0U2VydmljaW8iLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZGVzY3JpcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiY29udGVudCIsImZpbmQiLCJlbGVtZW50IiwiaWQiLCJpbWdiYWNrIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsImltZyIsIm1hcCIsIml0ZW0iLCJzdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxJQUFELENBRnJCO0FBQUEsTUFFVkcsT0FGVTtBQUFBLE1BRURDLFVBRkM7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsQ0FBRCxDQUh2QjtBQUFBLE1BR1ZLLFFBSFU7QUFBQSxNQUdBQyxXQUhBOztBQUtqQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQ0E7QUFDQUMsU0FBSyxDQUFDLDBEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVVixZQUFZLENBQUNVLElB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QTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRDs7R0FqS1F4QixPOztLQUFBQSxPO0FBbUtNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TZXJ2aWNpb3MuNjYyZTBlNWJjZmRmN2E1ZTRkZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQ290aXphcigpIHtcclxuICBjb25zdCBbc2VydmljaW9zLCBzZXRTZXJ2aWNpb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZXJ2aWNpbywgU2V0U2VydmljaW9dID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlc0FycmF5XCIpXHJcbiAgICAvLyBmZXRjaChcImh0dHBzOi8vYXJhdmVuYS15LWFzb2NpYWRvcy5uZXRsaWZ5LmFwcC9hcGkvc2VydmljZXNBcnJheVwiKVxyXG4gICAgZmV0Y2goXCJodHRwczovL2FyYXZlbmEteS1hc29jaWFkb3MudmVyY2VsLmFwcC9hcGkvc2VydmljZXNBcnJheVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFNlcnZpY2lvcyhkYXRhKSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBkZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbiAgICB2YXIgY29udGVudCA9IHNlcnZpY2lvcy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBzZXJ2aWNpbyk7XHJcbiAgICB2YXIgaW1nYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLWJhY2tcIik7XHJcbiAgICBpZiAoY29udGVudCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVzY3JpcC5pbm5lckhUTUwgPSBjb250ZW50LmRlc2NyaXA7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQubmFtZTtcclxuICAgICAgaW1nYmFjay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY29udGVudC5pbWcpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGRlc2NyaXAuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgaW1nYmFjay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBteS0xMiBmbGV4IGZsZXgtcm93IGdhcC04IG1kOnB4LTIgc206ZmxleC1jb2wgc206aXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHNtOmJsb2NrIFwiPlxyXG4gICAgICAgICAgICBTZXJ2aWNpb3NcclxuICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlcmFsIHctNi8xMiBmbGV4IGZsZXgtY29sIGdhcC0yIHNtOmdyaWQgc206Z3JpZC1jb2xzLTIgc206dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIHtzZXJ2aWNpb3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBmbGV4IGJnLWdyYXktYm9yZGVyLWdyYXktMTAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgc206ZmxleC1jb2wgc206Z2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNldFNlcnZpY2lvKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLW1kIGJnLWFtYmVyLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zdmd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IHNtOm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHRleHQtbGVmdCBzbTp0ZXh0LWNlbnRlciBzbTp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgdy1mdWxsIGhvdmVyOnNoYWRvdy0yeGwgcm91bmRlZC1tZCByZWxhdGl2ZSBoLWF1dG8gZ3JpZCBweS04IHB4LTEyIHRleHQtd2hpdGUgc206cGItMTBcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWctYmFja1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkICBtYi04XCJcclxuICAgICAgICAgICAgICA+PC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOm1iLTI0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgbGVmdC0wIG1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ290aXphclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC00IHB5LTIgZm9udC1tZWRpdW0gdGV4dC1iYXNlIGJnLWFtYmVyLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb3RpemFyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTEyIGZsZXggZmxleC1yb3cgZ2FwLTggbWQ6cHgtMiBzbTpmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgc206YmxvY2sgXCI+XHJcbiAgICAgICAgICAgIFNlcnZpY2lvc1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxoMT5DQVJHQU5ETzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICAvLyByZXR1cm4gKFxyXG4gIC8vICAgPD5cclxuICAvLyAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBteS0xMiBmbGV4IGZsZXgtcm93IGdhcC04IG1kOnB4LTIgc206ZmxleC1jb2wgc206aXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCBzbTpibG9jayBcIj5cclxuICAvLyAgICAgICAgIFNlcnZpY2lvc1xyXG4gIC8vICAgICAgIDwvaDI+XHJcblxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXJhbCB3LTYvMTIgZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOnctZnVsbFwiPlxyXG4gIC8vICAgICAgICAge3NlcnZpY2lvcy5tYXAoKGl0ZW0pID0+IHtcclxuICAvLyAgICAgICAgICAgcmV0dXJuIChcclxuICAvLyAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGZsZXggYmctZ3JheS1ib3JkZXItZ3JheS0xMDAgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgc2hhZG93LW1kIHAtNCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHctZnVsbCBzbTpmbGV4LWNvbCBzbTpnYXAtMlwiXHJcbiAgLy8gICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgLy8gICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTZXRTZXJ2aWNpbyhpdGVtLmlkKX1cclxuICAvLyAgICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEyIHctMTIgcm91bmRlZC1tZCBiZy1hbWJlci01MDAgdGV4dC13aGl0ZVwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnN2Z30gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgc206bS0wXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHRleHQtbGVmdCBzbTp0ZXh0LWNlbnRlciBzbTp0ZXh0LWJhc2VcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gIC8vICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgLy8gICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICB9KX1cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCB3LWZ1bGwgaG92ZXI6c2hhZG93LTJ4bCByb3VuZGVkLW1kIHJlbGF0aXZlIGgtYXV0byBncmlkIHB5LTggcHgtMTIgdGV4dC13aGl0ZSBzbTpwYi0xMFwiPlxyXG4gIC8vICAgICAgICAgPGltZ1xyXG4gIC8vICAgICAgICAgICBhbHQ9XCJcIlxyXG4gIC8vICAgICAgICAgICBpZD1cImltZy1iYWNrXCJcclxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTAgcm91bmRlZC1tZFwiXHJcbiAgLy8gICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGgtZnVsbFwiPlxyXG4gIC8vICAgICAgICAgICA8aDFcclxuICAvLyAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGQgIG1iLThcIlxyXG4gIC8vICAgICAgICAgICA+PC9oMT5cclxuICAvLyAgICAgICAgICAgPGRpdiBpZD1cImRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC14bCBzbTptYi0yNFwiPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBsZWZ0LTAgbWItOFwiPlxyXG4gIC8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ290aXphclwiPlxyXG4gIC8vICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtYmFzZSBiZy1hbWJlci01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgIENvdGl6YXJcclxuICAvLyAgICAgICAgICAgICAgIDwvYT5cclxuICAvLyAgICAgICAgICAgICA8L0xpbms+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gIC8vICAgPC8+XHJcbiAgLy8gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ290aXphcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==