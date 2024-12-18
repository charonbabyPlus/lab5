import { SymError } from "./Error"

// Обощенный класс для проверки символа хода
export class Sym<T extends GameType> {
    private field: string = ""

    constructor(sym: string = "_") {
        // TODO
        // Вызывает checkSym (которая будет перегружана в наследниках)
        // Если checkSym возвращает false, выбрасывает исключение SymError
        if (!this.checkSym(sym)){
            console.error(SymError.message)
            alert(SymError.message)
            this.field = '_'
            return
        }  
        this.field = sym
    }

    make(sym: string): Sym<T> {
        return new Sym(sym)
    }

    clone(): Sym<T> {
        return this.make(this.sym)
    }

    checkSym(sym: string): boolean {
        // TODO
        // Общая проверка для всех игр.
        // Если длина строки равна 1 то true,
        //  иначе false
        try {
            return sym.length === 1
        }
        catch (error){
            console.error('Ошибка при поверке символа:', error)
            return false
        }
    }

    get sym() {
        return this.field
    }

    StringToSyms<T extends GameType>(str: string): Sym<T>[] {
        const result = new Array(str.length)
        for (let i = 0; i < str.length; i++)
            result[i] = this.make(str[i])
        return result
    }

    SymsToString(syms: Sym<T>[]): string {
        let result: string = ""
        for (let i = 0; i < syms.length; i++)
            result = result + syms[i]
        return result
    }

}

