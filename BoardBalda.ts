import { Board, BoardParam } from "./Board"
import { Sym } from "./Sym"

export class BoardBalda extends Board<GameBalda> {
    constructor(
        str: string | Sym<GameBalda>[] = "балда",
        init: boolean = true
    ) {
        // TODO
        // Если длина str==5, то дополняет ее 10 пробелами до и после
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
        if (str.length == 5){
            str = '__________' + str + '__________'
        }
        
        const syms = str instanceof Array ? str : new Sym<GameBalda>('_').StringToSyms(str)
        super(syms)

        if (init){
            BoardBalda.row = BoardBaldaParam.row
            BoardBalda.col = BoardBaldaParam.col
        }
    }
    clone(): Board<GameBalda> {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        const newClone = this.cells.map(cell => cell.clone())
        return new BoardBalda(newClone)
    }
}

export const BoardBaldaParam: BoardParam = {
    row: 5,
    col: 5
}