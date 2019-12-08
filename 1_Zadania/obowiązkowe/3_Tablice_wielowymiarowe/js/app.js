
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Zadanie 0
function checkArray(arr){
    let endArr = [];

    for(let i=0; i<arr.length; i++){
        let check = true;

        for(let j=0; j<arr[i].length; j++){

            if(arr[i][j] % 2 !== 0){
                check = false;
                break;
            }

        }

        endArr.push(check);
    }

    return endArr;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

// Zadanie 1
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[3][2]);

//Zadanie 2
//1.
for(let i = 0; i < task2Array.length; i++){
    console.log(task2Array[i]);
}
//2.
for(let i = 0; i < task2Array.length; i++){
    console.log(task2Array[i].length);
}
//3.
for(let i = 0; i < task2Array.length; i++){
    for(let j = 0; j < task2Array[i].length; j++){
        console.log(task2Array[i][j]);
    }
}

//Zadanie 3
function print2DArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

//Zadanie 4
let testArr = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2],
    [1]
]

print2DArray(testArr);

//Zadanie 4
function create2DArray(rows, columns){
    let endArr = [];
    let counter = 1;

    for(let i = 0; i < rows; i++){
        let insideArr = [];
        for(let j = 0; j < columns; j++){
            insideArr.push(counter);
            counter++;
        }
        endArr.push(insideArr);
    }

    return endArr;
}