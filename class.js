//Создание объекта с помощью функции конструктора
// function Car(name, model) {
//   this.name = name;
//   this.model = model;
// }
// const audi = new Car("Audi", "07");
// console.log(audi);

//Создание объекта посредством классов
// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
//   getCarInfo() {
//     return `${this.name} ${this.model}`;
//   }
// }
// const AudiClass = new Car("Audi", "08");
// const BMWClass = new Car("BMW", "X7");
// const PeugeotClass = new Car("Peugeot", "407");

// console.log(AudiClass.getCarInfo());
// console.log(BMWClass.getCarInfo());
// console.log(PeugeotClass.getCarInfo());

// class ElectricCarClass extends Car {
//   constructor(name, model, type) {
//     super(name, model);
//     this.type = type;
//   }
//   getCarInfo() {
//     return `${this.name} ${this.model} ${this.type}`;
//   }
// }

// const Tesla = new ElectricCarClass("Tesla", "ModelS", "electro");
// Tesla.model = "ModelX";
// console.log(Tesla.getCarInfo());

//Самост работа
// class Animal {
//   constructor(name, type, isPet) {
//     this.name = name;
//     this.type = type;
//     this.isPet = isPet;
//   }
//   getAnimalInfo() {
//     return `${this.name} является подтипом - ${this.type} и является ${
//       this.isPet ? "домашним" : "не домашним"
//     } животным`;
//   }
// }

// const Bird = new Animal("Снигирь", "птица", false);
// const Dog = new Animal("Собака", "собачий", true);
// console.log(Bird.getAnimalInfo());
// console.log(Dog.getAnimalInfo());

// class Cat extends Animal {
//   constructor(name, isPet, type, place, isPredator) {
//     super(name, type, isPet);
//     this.type = "кошачий";
//     this.place = place;
//     this.isPredator = isPredator;
//   }
//   getAnimalInfo() {
//     return `${this.name} является подтипом - ${this.type} и является ${
//       this.isPet ? "домашним" : "не домашним"
//     } животным, обитает в ${this.place} и является ${
//       this.isPredator ? "хищником" : "не хищником"
//     }`;
//   }
// }

// const Tiger = new Cat("Тигр", false, "", "джунглях", true);
// const cat = new Cat("Кот", true, "", "домах", false);

// console.log(Tiger.getAnimalInfo());
// console.log(cat.getAnimalInfo());

// class Calc {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   getResult(operator) {
//     switch (operator) {
//       case "+":
//         return this.a + this.b;
//         break;

//       case "-":
//         return this.a - this.b;
//         break;

//       case "*":
//         return this.a * this.b;
//         break;
//       default:
//         return this.a / this.b;
//     }
//   }

//   }

//   getSum() {
//     return this.a + this.b;
//   }
//   getMinus() {
//     return this.a - this.b;
//   }
//   getMulti() {
//     return this.a * this.b;
//   }
//   getDevision() {
//     return this.a / this.b;
//   }
// }
// const plus = new Calc(5, 4, "+");
// console.log(
//   plus.getSum(),
//   plus.getMinus(),
//   plus.getMulti(),
//   plus.getDevision()
// );
// console.log(plus.getResult("+"));
// console.log(plus.getResult("-"));
// console.log(plus.getResult("*"));
// console.log(plus.getResult("/"));

// function fizzbuzz(n) {
//   let result = [];
//   for (let i = 0; i <= n.length; i++) {
//     if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else {
//       result.push(n[i]);
//     }
//   }
//   return result;
// }

// console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
