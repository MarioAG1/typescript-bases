
export class Person {
    // public name: string;
    // public address: string = "No address";

    // constructor(name: string, address:string) {
    //     this.name = name;
    //     this.address = address;
    // }
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = ("No adress")) {

    }
}
export class Hero {

    // public person: Person;

    constructor(
        public alterego: string,
        public age: number,
        public realname: string,
        //Importante
        public person: Person,
    ) {
        //Si modificamos clase persona cambiara Hero y 
        // no queremos eso por eso la siguiente linea no sirve
        // this.person = new Person(realname);
    }
}
//Esta lina de codigo es reutilizable para otra traje de Tony
const tony = new Person("Tony Stak","New York");

const ironman = new Hero("IronMan", 45, "Tony",tony);

console.log(ironman)