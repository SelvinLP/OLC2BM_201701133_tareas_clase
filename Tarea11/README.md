# Tarea 11
Esquema de traducción dirigido por la sintaxis posfijo, para un analizador ascendente que recibe como entrada una expresión aritmética (*,+,-,/ y paréntesis) y genera el código de tres direcciones equivalente.
### Ejemplo 📋
_Entrada_
```
2*3+6-1/8
```
_Salida_
```
 t0 = 2 * 3
 t1 = t0 + 6
 t2 = 1 / 8
 t3 = t1 - t2
```



## Herramienta utilizada 🔧
* [PLY](https://www.dabeaz.com/ply/ply.html) 


