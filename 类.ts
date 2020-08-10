class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;

        console.log(this.name)
    }
}

console.log(new Animal("Cat"));