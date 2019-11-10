const car = {
    brand: 'Fiat',
    color: 'blue',
    numberOfKilometers: 0
}

car.printCarInfo = function(){
    return `${this.brand}, ${this.color}, ${this.numberOfKilometers}km`;
}

car.drive = function(km){
    this.numberOfKilometers += km;
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();

car.list = ['2019', '2018', '2017'];

car.addToList = function(date){
    this.list.push(date);
}

car.getList = function(){
    return this.list;
}