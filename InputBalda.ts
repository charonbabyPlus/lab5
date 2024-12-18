import { Input } from "./Input"
import { Sym } from "./Sym"

export class InputBalda extends Input<GameBalda>{
    override get html(): string  {
        return "<input id='inputBalda'></input>"
    }

    get sym(): Sym<GameBalda> {
        // TODO
        //  возвращает символ из поля ввода  
        const inputElement = document.getElementById('inputBalda') as HTMLInputElement
        if (inputElement){
            return new Sym<GameBalda>(inputElement.value)
        }     
        return new Sym<GameBalda>('_')
    }
    move(): void {
        // TODO
        //  очищает поле ввода
        const inputElement = document.getElementById('inputBalda') as HTMLInputElement
        if (inputElement){
            inputElement.value = ''
        }
    }

}