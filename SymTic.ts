import { Sym } from "./Sym"

export class SymTic extends Sym<GameTic> {

    override checkSym(sym: string): boolean {
        // TODO
        // Вызыват checkSym родителя и 
        //  дополнительно проверяет на то, 
        //  что символ один из _X0
            return super.checkSym(sym) && ['X', '0', '_'].includes(sym)
    }

}