(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _componentes_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/app.component */ "./src/app/componentes/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/utilitarios.service */ "./src/app/servicios/utilitarios.service.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _componentes_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_5__["UtilitariosService"]
            ],
            bootstrap: [_componentes_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/app.component.css":
/*!***********************************************!*\
  !*** ./src/app/componentes/app.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 100%;\n    height: 100%;\n    font-family: 'Balsamiq Sans', cursive;\n    font-size: 17px;\n    position: relative;\n}\n\n.alert {\n    position: absolute;\n}\n\n.principalDiv {\n    margin: 3%;\n    border: 2px solid #E2583E ;\n    width: 93%;\n    height: 480px;\n    border-radius: 17px;\n}\n\n.titulo {\n    font-family: 'Courgette', cursive;\n    color: #BF1932;\n    font-size: 30px;\n    text-align: center;\n    vertical-align: middle;\n    height: 20%;\n}\n\n.pies {\n    font-family: 'Courgette', cursive;\n    color: #BF1932;\n    font-size: 17px;\n    text-align: center;\n    vertical-align: middle;\n    height: 20%;\n}\n\n.colores {\n    color: white;\n    height: 60%;\n}\n\n.color {\n    border: 2px solid black;\n    border-radius: 7px;\n    width: 30%;\n    margin: 1%;\n    padding: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWxlcnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnByaW5jaXBhbERpdiB7XG4gICAgbWFyZ2luOiAzJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTI1ODNFIDtcbiAgICB3aWR0aDogOTMlO1xuICAgIGhlaWdodDogNDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cblxuLnRpdHVsbyB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjQkYxOTMyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cblxuLnBpZXMge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogI0JGMTkzMjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jb2xvcmVzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA2MCU7XG59XG4uY29sb3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZzogMSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/app.component.html":
/*!************************************************!*\
  !*** ./src/app/componentes/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principalDiv container\">\n    <div class=\"alert alert-success align-self-center justify-content-center\" *ngIf=\"mostrarMensaje\" (close)=\"!mostrarMensaje\">{{ mensaje }}</div>\n    <div class=\"d-flex p-12 titulo justify-content-center align-items-center\">\n        Colorines\n    </div>\n    <div class=\"d-flex p-12 colores justify-content-center align-items-center\" *ngIf=\"pensando\">\n        <img src=\"./assets/img/loading.gif\" width=\"20%\">\n    </div>\n    <div class=\"d-flex p-12 colores justify-content-center align-items-center\" *ngIf=\"!pensando && !hayMas\">\n        <p style=\"color: #BF1932;\">No hay m&aacute;s colorines.</p>\n    </div>\n    <div class=\"d-flex colores row justify-content-center\" *ngIf=\"!pensando && hayMas\">\n        <div class=\"color\" id=\"color\" [ngStyle]=\"{'background-color': color.color }\" *ngFor=\"let color of colores; let i = index\"\n            (contextmenu)=\"copiarDatos('', i)\" (click)=\"copiarDatos('color', i)\">\n            <div class=\"w-100 h-25\" style=\"font-size: 12px;\">{{color.year}}</div>\n            <div class=\"w-100 h-25 text-uppercase text-center align-text-bottom\">{{color.name}}</div>\n            <div class=\"w-100 h-25 text-center\">{{color.color}}</div>\n            <div class=\"w-100 h-25 text-right\" style=\"font-size: 12px;\">{{color.pantone_value}}</div>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-around align-items-center pies\">\n        <div class=\"p-2\" (click)=\"cambiarPagina('-')\" *ngIf=\"hayMenos\">\n            Anterior\n        </div>\n        <div class=\"p-2\" style=\"text-align: right;\" (click)=\"cambiarPagina('+')\" *ngIf=\"hayMas\">\n            Siguiente\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/componentes/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/utilitarios.service */ "./src/app/servicios/utilitarios.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(utilitarios) {
        this.utilitarios = utilitarios;
        this.title = 'colorin-app';
        this.pagina = 1;
        this.pensando = false;
        this.hayMas = true;
        this.hayMenos = false;
        this.mensaje = '';
        this.mostrarMensaje = false;
        document.getElementById('loadingScreen').setAttribute('hidden', 'true');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.obtenerColoritos('');
    };
    AppComponent.prototype.obtenerColoritos = function (pag) {
        var _this = this;
        this.utilitarios.obtieneColoritos(pag).subscribe(function (data) {
            _this.pensando = false;
            if (!esVacio(data)) {
                _this.colores = data.data;
            }
            else {
                _this.colores = [];
            }
            if (esVacio(_this.colores)) {
                _this.hayMas = false;
            }
            else {
                _this.hayMas = true;
            }
        });
    };
    AppComponent.prototype.textoCopiaOk = function (texto) {
        var _this = this;
        this.mensaje = texto;
        this.mostrarMensaje = true;
        setTimeout(function () { return _this.mostrarMensaje = false; }, 3000);
    };
    AppComponent.prototype.cambiarPagina = function (variacion) {
        this.colores = [];
        this.pensando = true;
        if (variacion == '-') {
            if (this.pagina != 1) {
                this.pagina = this.pagina - 1;
            }
        }
        else {
            this.pagina = this.pagina + 1;
        }
        if (this.pagina == 1) {
            this.hayMenos = false;
            this.obtenerColoritos('');
        }
        else {
            this.hayMenos = true;
            this.obtenerColoritos('?page=' + this.pagina);
        }
    };
    AppComponent.prototype.copiarDatos = function (dato, pos) {
        var colorin = this.colores[pos];
        var texto = '';
        var datoCopia = document.createElement("textarea");
        document.body.appendChild(datoCopia);
        if (!esVacio(dato)) {
            datoCopia.value = colorin[dato];
            texto = 'Valor copiado: ' + colorin[dato];
        }
        else {
            datoCopia.value = JSON.stringify(colorin);
            texto = 'Info de "' + colorin.name.toUpperCase() + '" copiada al portapapeles!';
        }
        datoCopia.select();
        document.execCommand("copy");
        document.body.removeChild(datoCopia);
        this.textoCopiaOk(texto);
    };
    AppComponent.prototype.onRightClick = function (event) {
        event.preventDefault();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onRightClick", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/componentes/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/componentes/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__["UtilitariosService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/servicios/utilitarios.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/utilitarios.service.ts ***!
  \**************************************************/
/*! exports provided: UtilitariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitariosService", function() { return UtilitariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UtilitariosService = /** @class */ (function () {
    function UtilitariosService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Accept: 'application/json' });
        this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers = this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        this.headers = this.headers.append('Content-Type', 'application/json');
    }
    UtilitariosService.prototype.obtieneColoritos = function (pag) {
        return this.http.get('https://reqres.in/api/colors' + pag, { headers: this.headers });
    };
    UtilitariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UtilitariosService);
    return UtilitariosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/carola/Documents/Projectos/Colorines/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map