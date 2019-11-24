function Calculator(){
    this.operations = [];
}

Calculator.prototype.add = function(num1, num2){
    let result = num1 + num2;
    this.operations.push(`added ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.operations.push(`multiplied ${num1} with ${num2} got ${result}`)
    return result;
}

Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2;
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`)
    return result;
}

Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2;
    this.operations.push(`divided ${num1} by ${num2} got ${result}`)
    return result;
}

Calculator.prototype.printOperations = function(){
    console.log(this.operations);
}

Calculator.prototype.clearOperations = function(){
    this.operations = [];
}

const calculator = new Calculator();
calculator.add(2, 2);
calculator.multiply(2, 2);
calculator.subtract(2, 2);
calculator.divide(2, 2);
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();