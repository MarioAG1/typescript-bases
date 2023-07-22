export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: "Mario",
}
const passenger2: Passenger = {
    name: "Alvarez",
    children: ["Natalia", "Elizabeth"],
}

//Esto es opti(onal chaining
// si pones : en la funcion debes añadir el return
const returnChildrenNumber = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0 ;
    // Este es unicamente sabes que existe children es decir not null
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren)
    
    return howManyChildren;
}

returnChildrenNumber(passenger1)