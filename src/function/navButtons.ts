import NavButtom from "../model/NavButton";

export function getNavButtonList(activePosition: number): NavButtom[] {
    return Array.from({length: 5}, (_, i) => {
        if(activePosition === i){
            return new NavButtom(i, true);
        }
        return new NavButtom(i);
    })
}