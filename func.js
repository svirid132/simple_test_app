function result(indexSelects, indexRights) {   
    // let func = (a, b) => a - b;
    // let arr = arr.sort(func);

    let indexRight = 0;

    const func = (accumulator, value) => {
        const isValid = (value) => value !== undefined && value !== null;

        while (true) {
            if (!isValid( indexRights[indexRight] )) {
                return --accumulator;
            }
            if (value <= indexRights[indexRight]) {
                break;
            }
            ++indexRight;
            --accumulator;
        } 

        if (value < indexRights[indexRight]) {
             return --accumulator;
        } else if(value === indexRights[indexRight]) {
            ++indexRight;
            return ++accumulator;
        }

        return accumulator;
    };
    
    return indexSelects.reduce(func, 0);
}

function result_1(indexSelects, indexRights) {   

    let func = (accumulator, value) => {
        let indexFind = indexRights.indexOf(value);
        return indexFind === -1 ? --accumulator : ++accumulator;
    }

    return indexSelects.reduce(func, 0);
}

function getRightIndexs(words, rights) {
    const rightIndexs = new Array();
    if (rights === null){ 
        return [];
    }
    rights.forEach(right => {
        const rightIndex = words.indexOf(right);
        if (rightIndex !== -1){ 
            rightIndexs.push(rightIndex);
        }
    });

    return rightIndexs;
}

let indexSelects = [1, 2, 3, 4, 5, 6, 8, 10, 22, 35, 37];
let indexRight = [1, 2, 4];

let res = result_1(indexSelects, indexRight);
console.log(res);

let allIndex = getRightIndexs(indexSelects, indexRight);
console.log(allIndex);

// arr.map((value))//indexOf if 1 then +1 if -1 then -1