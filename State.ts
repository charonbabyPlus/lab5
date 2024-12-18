import { Board } from "./Board"
import { Sym } from "./Sym"


export class State<T extends GameType> {
    board: Board<T>
    sym: Sym<T>

    constructor(
        board: Board<T>,
        sym: Sym<T>
    ) {
        this.board = board
        this.sym = sym
    }

    clone(): State<T>{
        // TODO
        // Функция должна вернуть копию объекта
        const cloneBoard = this.board.clone()
        const cloneSym = this.sym.clone()
        return new State(cloneBoard, cloneSym)
    }
}