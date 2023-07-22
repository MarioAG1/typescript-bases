
export class Person {
    // public name: string;
    // public address: string = "No address";

    // constructor(name: string, address:string) {
    //     this.name = name;
    //     this.address = address;
    // }
    constructor(
        public name: string,
        private address: string = ("No adress")) {

    }
}

export class Hero extends Person {
    constructor(
        public alterego: string,
        public age: number,
        public realname: string
    ) {
        super(realname, "New York");
    }
}

const ironman = new Hero("Mario", 23,"Vicente");

console.log(ironman)