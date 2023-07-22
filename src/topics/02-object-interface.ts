//: para definir obligatoriamente algo
// let por si cambia, const si es permanente importante
const skills: string[] = ["Bash","Counter","Healing"]

//Creo que esto es tipar
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;

};

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["Bash","Counter"]
};

strider.hometown = "Rivendell"

console.log(strider);

export{};