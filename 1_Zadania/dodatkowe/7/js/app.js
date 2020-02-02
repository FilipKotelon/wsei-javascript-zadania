//Zadanie 1
const getNumber = (num, arr) => {
    let isInArr = false;
    arr.forEach(el => {
        if(el === num){
            isInArr = true;
        }
    })
    return isInArr;
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100] ));

//Zadanie 2
const createIdentityMatrix = (rows, columns) => {
    const new2DArr = [];

    for(let i = 0; i < rows; i++){
        const arr = [];

        for(let j = 0; j < columns; j++){
            if(j === i){
                arr.push(1);
            } else {
                arr.push(0);
            }
        }

        new2DArr.push(arr);
    }

    return new2DArr;
}

console.log(createIdentityMatrix(5,5));