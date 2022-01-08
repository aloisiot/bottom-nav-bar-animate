export default class NavButtom{
    #position: number
    #active: boolean

    constructor(position: number, active = false){
        this.#position = position
        this.#active = active
    }

    get position(){
        return this.#position
    }

    get active(){
        return this.#active
    }
}