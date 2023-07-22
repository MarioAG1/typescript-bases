function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newPropery = "New Property";
        hello = "overide";
    }
}


@classDecorator
export class SuperClass {

    public myProperty: string = "Abc123";

    prinnt() {
        console.log("Hols Munfdo")
    }
}


console.log(SuperClass)

const myClass = new SuperClass();
console.log(myClass)