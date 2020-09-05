"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factor = void 0;
var Expresion_1 = require("../Abstracto/Expresion");
var Factor = /** @class */ (function (_super) {
    __extends(Factor, _super);
    function Factor(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Factor.prototype.ejecutar = function () {
        var retono = { cd3: "", tmp: this.value.toString() };
        return retono;
    };
    return Factor;
}(Expresion_1.Expresion));
exports.Factor = Factor;
