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
      // descrip.innerHTML = "";
      // title.innerHTML = "";
      // imgback.setAttribute("src", "");
      setLoading(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VydmljaW9zLmpzeCJdLCJuYW1lcyI6WyJDb3RpemFyIiwidXNlU3RhdGUiLCJzZXJ2aWNpb3MiLCJzZXRTZXJ2aWNpb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlcnZpY2lvIiwiU2V0U2VydmljaW8iLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZGVzY3JpcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiY29udGVudCIsImZpbmQiLCJlbGVtZW50IiwiaWQiLCJpbWdiYWNrIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsImltZyIsIm1hcCIsIml0ZW0iLCJzdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxJQUFELENBRnJCO0FBQUEsTUFFVkcsT0FGVTtBQUFBLE1BRURDLFVBRkM7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsQ0FBRCxDQUh2QjtBQUFBLE1BR1ZLLFFBSFU7QUFBQSxNQUdBQyxXQUhBOztBQUtqQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQ0E7QUFDQUMsU0FBSyxDQUFDLDBEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVVixZQUFZLENBQUNVLElB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNEOztHQWpLUXhCLE87O0tBQUFBLE87QUFtS01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NlcnZpY2lvcy5kNGI1OTAxYjY2ZWUyMWZiZjRjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBDb3RpemFyKCkge1xyXG4gIGNvbnN0IFtzZXJ2aWNpb3MsIHNldFNlcnZpY2lvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlcnZpY2lvLCBTZXRTZXJ2aWNpb10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlcnZpY2VzQXJyYXlcIilcclxuICAgIC8vIGZldGNoKFwiaHR0cHM6Ly9hcmF2ZW5hLXktYXNvY2lhZG9zLm5ldGxpZnkuYXBwL2FwaS9zZXJ2aWNlc0FycmF5XCIpXHJcbiAgICBmZXRjaChcImh0dHBzOi8vYXJhdmVuYS15LWFzb2NpYWRvcy52ZXJjZWwuYXBwL2FwaS9zZXJ2aWNlc0FycmF5XCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2VydmljaW9zKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIGRlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcclxuICAgIHZhciBjb250ZW50ID0gc2VydmljaW9zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHNlcnZpY2lvKTtcclxuICAgIHZhciBpbWdiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctYmFja1wiKTtcclxuICAgIGlmIChjb250ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZXNjcmlwLmlubmVySFRNTCA9IGNvbnRlbnQuZGVzY3JpcDtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY29udGVudC5uYW1lO1xyXG4gICAgICBpbWdiYWNrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb250ZW50LmltZyk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZGVzY3JpcC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAvLyB0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAvLyBpbWdiYWNrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIlwiKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoIWxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTEyIGZsZXggZmxleC1yb3cgZ2FwLTggbWQ6cHgtMiBzbTpmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgc206YmxvY2sgXCI+XHJcbiAgICAgICAgICAgIFNlcnZpY2lvc1xyXG4gICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVyYWwgdy02LzEyIGZsZXggZmxleC1jb2wgZ2FwLTIgc206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTp3LWZ1bGxcIj5cclxuICAgICAgICAgICAge3NlcnZpY2lvcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGZsZXggYmctZ3JheS1ib3JkZXItZ3JheS0xMDAgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgc2hhZG93LW1kIHAtNCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHctZnVsbCBzbTpmbGV4LWNvbCBzbTpnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0U2VydmljaW8oaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtbWQgYmctYW1iZXItNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnN2Z30gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgc206bS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdGV4dC1sZWZ0IHNtOnRleHQtY2VudGVyIHNtOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCB3LWZ1bGwgaG92ZXI6c2hhZG93LTJ4bCByb3VuZGVkLW1kIHJlbGF0aXZlIGgtYXV0byBncmlkIHB5LTggcHgtMTIgdGV4dC13aGl0ZSBzbTpwYi0xMFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICBpZD1cImltZy1iYWNrXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHotMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGQgIG1iLThcIlxyXG4gICAgICAgICAgICAgID48L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRleHQteGwgc206bWItMjRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBsZWZ0LTAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Db3RpemFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTQgcHktMiBmb250LW1lZGl1bSB0ZXh0LWJhc2UgYmctYW1iZXItNTAwIHRleHQtd2hpdGUgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvdGl6YXJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXktMTIgZmxleCBmbGV4LXJvdyBnYXAtOCBtZDpweC0yIHNtOmZsZXgtY29sIHNtOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCBzbTpibG9jayBcIj5cclxuICAgICAgICAgICAgU2VydmljaW9zXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGgxPkNBUkdBTkRPPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIC8vIHJldHVybiAoXHJcbiAgLy8gICA8PlxyXG4gIC8vICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTEyIGZsZXggZmxleC1yb3cgZ2FwLTggbWQ6cHgtMiBzbTpmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAvLyAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHNtOmJsb2NrIFwiPlxyXG4gIC8vICAgICAgICAgU2VydmljaW9zXHJcbiAgLy8gICAgICAgPC9oMj5cclxuXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlcmFsIHctNi8xMiBmbGV4IGZsZXgtY29sIGdhcC0yIHNtOmdyaWQgc206Z3JpZC1jb2xzLTIgc206dy1mdWxsXCI+XHJcbiAgLy8gICAgICAgICB7c2VydmljaW9zLm1hcCgoaXRlbSkgPT4ge1xyXG4gIC8vICAgICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICAgIDxidXR0b25cclxuICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gZmxleCBiZy1ncmF5LWJvcmRlci1ncmF5LTEwMCBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1tZCBzaGFkb3ctbWQgcC00IGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdy1mdWxsIHNtOmZsZXgtY29sIHNtOmdhcC0yXCJcclxuICAvLyAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAvLyAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNldFNlcnZpY2lvKGl0ZW0uaWQpfVxyXG4gIC8vICAgICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLW1kIGJnLWFtYmVyLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3ZnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJ3LTggaC04XCIgLz5cclxuICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBzbTptLTBcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdGV4dC1sZWZ0IHNtOnRleHQtY2VudGVyIHNtOnRleHQtYmFzZVwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAvLyAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgIH0pfVxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHctZnVsbCBob3ZlcjpzaGFkb3ctMnhsIHJvdW5kZWQtbWQgcmVsYXRpdmUgaC1hdXRvIGdyaWQgcHktOCBweC0xMiB0ZXh0LXdoaXRlIHNtOnBiLTEwXCI+XHJcbiAgLy8gICAgICAgICA8aW1nXHJcbiAgLy8gICAgICAgICAgIGFsdD1cIlwiXHJcbiAgLy8gICAgICAgICAgIGlkPVwiaW1nLWJhY2tcIlxyXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHotMCByb3VuZGVkLW1kXCJcclxuICAvLyAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgaC1mdWxsXCI+XHJcbiAgLy8gICAgICAgICAgIDxoMVxyXG4gIC8vICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCAgbWItOFwiXHJcbiAgLy8gICAgICAgICAgID48L2gxPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGlkPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOm1iLTI0XCI+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsIGxlZnQtMCBtYi04XCI+XHJcbiAgLy8gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Db3RpemFyXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC00IHB5LTIgZm9udC1tZWRpdW0gdGV4dC1iYXNlIGJnLWFtYmVyLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgQ290aXphclxyXG4gIC8vICAgICAgICAgICAgICAgPC9hPlxyXG4gIC8vICAgICAgICAgICAgIDwvTGluaz5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgLy8gICA8Lz5cclxuICAvLyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3RpemFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9