//Zadanie 0a
let city = {
    capital: 'San Escobar',
    population: 1234,
    president: 'Mister Fister',
    primeMinisters:[
        'John Doe',
        'John Bravo'
    ]
}

for (const key in city) {
     console.log(city[key]);
}

//Zadanie 0b
const timeMachine = {
    shape: 'square',
    model: 'axu317',
    run: function(date, place){
        console.log(`Przenosimy się do ${place}, w dniu ${date}`);
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run('1999', 'Bieszczady');

//Zadanie 1
let book = {
    title: 'Człowiek',
    author: 'Maszyna',
    numberOfPages: 1000
}

for (const key in book) {
     console.log(book[key]);
}

//Zadanie 2
let person = {
    name: 'Andrzej',
    age: 40,
    sayHello: function(){
        console.log('Hello')
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
let recipe = {
    title: 'Pizza',
    servings: 1
}

recipe.ingredients = ['tomato sauce', 'pepperoni', 'mozzarella'];
for (const key in recipe) {
    console.log(recipe[key]);
}

//Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);