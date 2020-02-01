// Zadanie 0
const distFromAverage = (arr) => {
    let avg;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;
    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    })

    return newArr;
}

distFromAverage([1,2,3,4,5,6,7])

//Zadanie 1
const fruits = ["banana", "apple", "strawberry", "grape"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Zadanie 3
const printTable = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printTable([1, 2, 3, 4]);

//Zadanie 4
const multiply = (array) => {
    let all = 1;
    for(let i = 0; i < array.length; i++){
        all *= array[i];
    }

    return all;
}

multiply([1,2,3,4,5,6,7])
multiply([1,1,1,1])
multiply([2,8,3,7])

//Zadanie 5
const getEvenAvarage = (arr) => {
    let sum = 0;

    let evenArr = [];
    arr.forEach(item => {
        if(item % 2 === 0){
            evenArr.push(item);
            sum += item;
        }
    })

    if(sum > 0) return sum / evenArr.length;
    else return null;
}

getEvenAvarage([1,2,3,4,5,6,7])

//Zadanie 6
const sortArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

sortArray([145,11,3,64,4,6,10])

//Zadanie 7
const addArray = (arr1, arr2) => {
    let len1 = arr1.length;
    let len2 = arr2.length;
}