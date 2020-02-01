//Deklaracja funkcji została przeniesiona do globalnego zasięgu, więc można z niej korzystać przed deklaracją w kodzie
sayHi();

function sayHi(){
    console.log('Cześć');
}

sayHi();

//Zmienna sayHello ma przypisaną wartość undefined, dopóki nie dojdziemy do wyrażenia funkcyjnego
sayHello();

var sayHello = function(){
    console.log('Witaj');
}

sayHello();