# Tarea 12
Esquema de traducción dirigido por la sintaxis posfijo, para un analizador ascendente que reciba como entrada una expresión aritmética (*,+,-,/ y paréntesis) y genere un AST y el código de tres direcciones debe generarse a partir de un recorrido al AST construido previamente.
### Ejemplo 📋
_Entrada_
```
2*3+6-1/8
```
_Salida_
T0=2*3;
T1=T0+6;
T2=1/8;
T3=T1-T2;


## Herramienta utilizada 🔧
* [JISON](https://zaa.ch/jison/) 


