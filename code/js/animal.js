export default class Animal{
    constructor (name,type,sound,hasPassport = false){
        this.name = name;
        this.type = type;
        this.age = age;
        this.sound = sound;
        this.hasPassport = hasPassport;
    }

    getOlder(){
        this.age = this.age + 1;
        // this.age += 1;
        // this.age++;  //WILL ALYWAYS ADD 1
        Console.log ('Age',this.age);
    }
    makesound(){
        return `${this.sound}! Hello, I'm a ${this.type}. And I'm ${this.age} years old.`;
    }
} 