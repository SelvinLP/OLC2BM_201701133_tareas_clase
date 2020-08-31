#Selvin Lisandro Aragón Pérez 201701133
import ply.yacc as yacc
import ply.lex as lex

#Primero hay que definir los toknes
tokens  = (
    'MAS',
    'MENOS',
    'POR',
    'DIV',
    'PARIZQ',
    'PARDER',
    'ENTERO'
)
#Para definir los patrones de los tokens podemos agregar el prefijo 't_'
#Para especificar una expresion regular debemos hacer uso de 'r'
t_MAS = r'\+'
t_MENOS = r'-'
t_POR = r'\*'
t_DIV = r'/'
t_PARIZQ = r'\('
t_PARDER = r'\)'

#Definicion de patrones con funciones
def t_ENTERO(t):
    r'\d+'
    try:
        t.value = int(t.value)
    except ValueError:
        print("Integer value too large %d", t.value)
        t.value = 0
    return t

#Caracteres ignorados
t_ignore = " \t"


def t_newline(t):
    r'\n+'
    t.lexer.lineno += t.value.count("\n")
    
def t_error(t):
    print("Illegal character '%s'" % t.value[0])
    t.lexer.skip(1)

# Construyendo el analizador léxico
lexer = lex.lex()

# Asociación de operadores y precedencia
precedence = (
    ('left','MAS','MENOS'),
    ('left','POR','DIV'),
    ('left','PARIZQ', 'PARDER'),
    )

#Definicion de gramatica
class Return:
    tmp = ""
    c3d = ""

cont_temp=0
def new_temp():
    global cont_temp
    cad = 't'+ str(cont_temp)
    cont_temp+=1
    return cad

#Utilizando Gramatica vista en clase

def p_s_e(t):
    'S  :   E'
    t[0] = Return()
    t[0] = t[1]
    print(t[0].c3d)
  
def p_e_mas_t(t):
    'E  :   E   MAS   T'
    t[0] = Return()
    t[0].tmp = new_temp()
    t[0].c3d = t[1].c3d + t[3].c3d + t[0].tmp + " = " + t[1].tmp + " + " + t[3].tmp + " \n "

def p_e_menos_t(t):
    'E  :   E   MENOS   T'
    t[0] = Return()
    t[0].tmp = new_temp()
    t[0].c3d = t[1].c3d + t[3].c3d + t[0].tmp + " = " + t[1].tmp + " - " + t[3].tmp + " \n "

def p_e_t(t):
    'E  :   T'
    t[0] = Return()
    t[0].tmp = t[1].tmp
    t[0].c3d = t[1].c3d

def p_t_por_f(t):
    'T  :   T   POR   F'
    t[0] = Return()
    t[0].tmp = new_temp()
    t[0].c3d = t[1].c3d + t[3].c3d + t[0].tmp + " = " + t[1].tmp + " * " + t[3].tmp + " \n "

def p_t_div_f(t):
    'T  :   T   DIV   F'
    t[0] = Return()
    t[0].tmp = new_temp()
    t[0].c3d = t[1].c3d + t[3].c3d + t[0].tmp + " = " + t[1].tmp + " / " + t[3].tmp + " \n "

def p_t_f(t):
    'T  :   F'
    t[0] = Return()
    t[0].tmp = t[1].tmp
    t[0].c3d = t[1].c3d

def p_t_e(t):
    'F  : PARIZQ   E   PARDER'
    t[0] = Return()
    t[0].tmp = t[2].tmp
    t[0].c3d = t[2].c3d

def p_f_id(t):
    'F  :   ENTERO'
    t[0] = Return()
    t[0].tmp = str(t[1])
    t[0].c3d = ""


def p_error(t):
    print("Error sintáctico en '%s'" % t.value)

parser = yacc.yacc()
parser.parse("2*3+6-1/8")
