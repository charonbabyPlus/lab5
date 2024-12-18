import { BoardParam } from "./Board"
import { SymError } from "./Error"
import { GameVC } from "./GameVC"
import { Input } from "./Input"
import { State } from "./State"

// Класс
export class Game<T extends GameType> {
    // Шаги игры
    steps: State<T>[]
    // Номер текущей игры    
    current: number
    // Параметры доски (размеры)    
    boardParam: BoardParam
    // интерфейс для пользовательского ввода    
    input: Input<T>

    constructor(
        steps: State<T>[] | State<T>,
        input: Input<T>,
        boardParam: BoardParam,
        current: number = 0
    ) {
        if (Array.isArray(steps))
            this.steps = steps
        else
            this.steps = [steps]
        this.current = current
        this.boardParam = boardParam
        this.input = input
    }

    get state(): State<T> {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        return this.steps[this.current]
    }

    clone(): Game<T> {
        // TODO
        // Функция должна вернуть копию объекта
        return new Game(this.steps.map(step => step.clone()), this.input, this.boardParam, this.current)
    }

    move(index: number): boolean {
        // TODO        
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // В случае, если произовшла ошибка при чтении из input
        //  функция должна вывести предупреждение с помощью alert        
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
        try{
            const currentSym = this.input.sym.clone()
            const board = this.state.board.clone()

            board.move(index, currentSym)
            const newState = new State(board, currentSym)
            this.steps = this.steps.slice(0, this.current + 1)
            this.steps.push(newState)
            this.current++
            this.input.move()
            GameVC.draw()
            return true
        }
        catch (error: any){
            alert(`Ошибка: ${error.message}`)
            console.log('Неизвестная ошибка', error)
            return false
        }
        
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        try {
            if (step >= 0 && step <= this.steps.length){
                this.current = step
                GameVC.draw()
                return true
            }
        }
        catch (error: any) {
            alert(`Ошибка: ${error.message}`)
            console.log('Неизвестная ошибка')
            return false
        }
        
    }
}