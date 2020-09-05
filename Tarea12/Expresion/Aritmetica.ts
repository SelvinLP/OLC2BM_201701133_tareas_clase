import { Expresion } from "../Abstracto/Expresion";
import { codigo, cont } from '../Abstracto/Nodo';
export enum tipoOperacion {
  MAS,
  MENOS,
  POR,
  DIV
}

export class Aritmetica extends Expresion {

  constructor(private left: Expresion, private right: Expresion, private type: tipoOperacion) {
    super();
  }

  public ejecutar(): codigo {
    const leftValue = this.left.ejecutar();
    const rightValue = this.right.ejecutar();

    if (this.type == tipoOperacion.MAS) {
      cont.cont++;

      let tmp = 'T' + cont.cont;
      let c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '+' + rightValue.tmp + ';\n';
      let result: codigo = { cd3: c3d, tmp: tmp };
      return result;
    }
    else if (this.type == tipoOperacion.MENOS) {
      cont.cont++;
      let tmp = 'T' + cont.cont;
      let c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '-' + rightValue.tmp + ';\n';
      let result: codigo = { cd3: c3d, tmp: tmp };
      return result;
    }
    else if (this.type == tipoOperacion.POR) {
      cont.cont++;
      let tmp = 'T' + cont.cont;
      let c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '*' + rightValue.tmp + ';\n';
      let result: codigo = { cd3: c3d, tmp: tmp };
      return result;
    }
    else if (this.type == tipoOperacion.DIV) {
      cont.cont++;
      let tmp = 'T' + cont.cont;
      let c3d = leftValue.cd3 + rightValue.cd3 + tmp + '=' + leftValue.tmp + '/' + rightValue.tmp + ';\n';
      let result: codigo = { cd3: c3d, tmp: tmp };
      return result;
    } else { 
      return { cd3: "error", tmp: "error" }
    }
  }
}