// Programming paradigm
// Ett sätt att designa och strukturera kod.

// OOP:
// 1. Objekt skall ansvara för sig själva
// 2. Kod skall vara flexibel
// 3. Kod skall vara enkel att förstå och använda

// Pelare
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism

// Exempel UTAN abstraction
function taFramStekpanna() {}
function läggISmörIStekpanna() {}
function sättPåUgn() {}

// Exempel MED abstraction
function lagaMat() {}

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const ironman = new Person("Ironman", 45, "tony@stark.com");
console.log(ironman.name);

class Player {
  constructor() {
    this._level = 1;
  }

  // Metod = funktion som ligger innanför klass
  addExperience(xp) {
    if (xp > 10) {
      this._level++;
    }
  }
}

const player = new Player();
player.addExperience(15);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {}
}

class Cat extends Animal {
  eat() {
    console.log("Ät fisk.");
  }
}

class NorwegianForestCat extends Cat {}

class Dog extends Animal {
  eat() {
    console.log("Ät ben.");
  }
}

const cat = new Cat();
const dog = new Dog();

cat.eat();
dog.eat();
