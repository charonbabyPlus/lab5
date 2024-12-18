import { Board, BoardParam } from "./Board"
import { Sym } from "./Sym"
import { SymTic } from "./SymTic"

export class BoardTic extends Board<GameTic> {

    constructor(
        str: string | SymTic[] = "_________",
        init: boolean = true
    ) {
        // TODO
        // Если длина str!=9, то используется строка по умолчанию
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
        if (str.length != 9){
            str = "_________"
        }
        
        const syms = str instanceof Array ? str : new SymTic('_').StringToSyms(str)
        super(syms)
        if (init){
            BoardTic.row = BoardTicParam.row
            BoardTic.col = BoardTicParam.col
        }
    }

    clone(): Board<GameType> {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        const newBoard = this.cells.map(cell => cell.clone())
        return new BoardTic(newBoard)
    }

    private getLineChar(line: number[]): string[] {
        return [
            this.cells[line[0]].sym,
            this.cells[line[1]].sym,
            this.cells[line[2]].sym,
        ]
    }

    private static winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    private checkWin(): string {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        for (let line of BoardTic.winPos){
            const[a, b, c] = this.getLineChar(line)
            if (a === b && b === c && a !== '_'){
                return a
            }
        }
        return "_"
    }

    override status(): string {
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, вызывает status родителя.
        if (this.checkWin() === 'X'){
            return 'Победил X'
        }
        else if (this.checkWin() === '0'){
            return 'Победил 0'
        }
        else if (this.isFill()){
            return 'Ничья'
        }
        else{
            return super.status()
        }
    }
}

export const BoardTicParam: BoardParam = {
    row: 3,
    col: 3
}