"use strict";
var parser = require('./Gramatica/Gramatica');
var salida = parser.parse("2*3+6-1/8");
var resultado = salida.ejecutar();
console.log(resultado.cd3);
