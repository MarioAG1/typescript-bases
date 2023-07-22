//Primer generico es la letra T, puede ser cualquier letra
// export function whatsMyType(argument: any): any {
//     return argument;
// }

export function whatsMyType<T>(argument: T): T {
    return argument;
}

// const amIString = whatsMyType("Hola mundo");
 const amIString = whatsMyType<string>("Hola mundo");
const amINumber = whatsMyType<number>(2);
const amIArray = whatsMyType<number[]>([1, 2, 3]);


//Al ser any no te da ninguna ayuda de autocompletado
console.log(amIString.split(""));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));