import { Sym } from "./Sym"

export type BoardParam = {
    row: number,
    col: number
  }

// Абстрактный класс доски
export abstract class Board<T extends GameType>{
    cells: Sym<T>[]

    static row: number
    static col: number

    constructor(
        str: Sym<T>[],
        row?: number,
        col?: number,
    ) {
        // TODO
        // При наличии row или col 
        //  инициализировать соответсвующие поля
        // Инициализировать массив cells
        if (row){
            Board.row = row
        }
        if (col){
            Board.col = col
        }
        this.cells = str.length > 0 ? str : new Array(Board.row * Board.col).fill(new Sym<T>('_'))
    }

    abstract clone(): Board<T>     

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        // Реомендуется реализация без циклов,
        //  с использованием функций массивов
        return this.cells.every(cell => cell.sym !== '_')
    }

    move(index: number, sym: Sym<T>): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        const status = this.status()

        if (status.startsWith('Победил') || status === 'Ничья'){
            throw new Error('Игра уже закончена')
        }
        if (this.cells[index].sym !== '_'){
            throw new Error('Ячейка занята')
        }
        this.cells[index] = sym
        return true
    }

    status(): string { 
        // TODO
        // Если доска заполнена возвращает "Игра закончена"
        //   если игра не закончена, строку "Идет игра".
        if (this.isFill()){
            return 'Игра закончена'
        }
        return "Идет игра"
    }

}
