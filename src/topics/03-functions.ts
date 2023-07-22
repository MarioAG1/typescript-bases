
function addNumber(a: number, b: number): number {
    return a + b;
};

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstnumber: number, secondnumber?: number, base: number = 2) {
    return firstnumber * base;
}

// const result: number = addNumber(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult:number = multiply(5);

// console.log(result,result2,multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

healCharacter(strider,15)
strider.showHp()

export { }