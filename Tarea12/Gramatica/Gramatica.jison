
%{
    const { Aritmetica, tipoOperacion } = require('../Expresion/Aritmetica');
    const { Factor } = require('../Expresion/Factor')
%}

/*------------------------------------------------PARTE LEXICA--------------------------------------------------- */
%lex

%%

[0-9]+("."[0-9]+)?             return 'tk_digito'

//Operaciones Aritmeticas
"+"     return 'tk_mas'
"-"     return 'tk_menos';
"*"     return 'tk_por'
"/"     return 'tk_div'
"("     return '('
")"     return ')'


[ \t\r\n\f]                    %{ /*se ignoran*/ %}

<<EOF>>                        %{  return 'EOF';   %}

/lex

/*------------------------------------------------PARTE SINTACTICA--------------------------------------------------- */

%start Init

%%

Init    
    : E EOF 
    {
        return $1;
    } 
;

E
    : E tk_mas T 
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.MAS, @1.first_line,@1.first_column);
    }
    | E tk_menos T
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.MENOS, @1.first_line,@1.first_column);
    }
    | T
    {
        $$ = $1;
    }
;

T
    : T tk_por F 
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.POR, @1.first_line,@1.first_column);
    }
    | T tk_div F 
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.DIV, @1.first_line,@1.first_column);
    }
    | F
    {
        $$ = $1;
    }
;


F   : '(' E ')'
    { 
        $$ = $2;
    }
    | tk_digito 
    {
        $$ = new Factor($1, @1.first_line, @1.first_column);
    }
;