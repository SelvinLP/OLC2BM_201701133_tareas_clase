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
exports.Aritmetica = exports.tipoOperacion = void 0;
var Expresion_1 = require("../Abstracto/Expresion");
var Nodo_1 = require("../Abstracto/Nodo");
var tipoOperacion;
(function (tipoOperacion) {
    tipoOperacion[tipoOperacion["MAS"] = 0] = "MAS";
    tipoOperacion[tipoOperacion["MENOS"] = 1] = "MENOS";
    tipoOperacion[tipoOperacion["POR"] = 2] = "POR";
    tipoOperacion[tipoOperacion["DIV"] = 3] = "DIV";
})(tipoOperacion = exports.tipoOperacion || (exports.tipoOperacion = {}));
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    function Aritmetica(left, right, type) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Aritmetica.prototype.ejecutar = function () {
        var leftValue = this.left.ejecutar();
        var rightValue = this.right.ejecutar();
        if (this.type == tipoOperacion.MAS) {
            Nodo_1.cont.cont++;
            var tmp = 'T' + Nodo_1.cont.cont;
            var c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '+' + rightValue.tmp + ';\n';
            var result = { cd3: c3d, tmp: tmp };
            return result;
        }
        else if (this.type == tipoOperacion.MENOS) {
            Nodo_1.cont.cont++;
            var tmp = 'T' + Nodo_1.cont.cont;
            var c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '-' + rightValue.tmp + ';\n';
            var result = { cd3: c3d, tmp: tmp };
            return result;
        }
        else if (this.type == tipoOperacion.POR) {
            Nodo_1.cont.cont++;
            var tmp = 'T' + Nodo_1.cont.cont;
            var c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '*' + rightValue.tmp + ';\n';
            var result = { cd3: c3d, tmp: tmp };
            return result;
        }
        else if (this.type == tipoOperacion.DIV) {
            Nodo_1.cont.cont++;
            var tmp = 'T' + Nodo_1.cont.cont;
            var c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '/' + rightValue.tmp + ';\n';
            var result = { cd3: c3d, tmp: tmp };
            return result;
        }
        else {
            return { cd3: "error", tmp: "error" };
        }
    };
    return Aritmetica;
}(Expresion_1.Expresion));
exports.Aritmetica = Aritmetica;
