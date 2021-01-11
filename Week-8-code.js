function whichIndex(arr, num){//whichIndex([1,2,3,4], 1.5)

    arr.sort((a, b) => a - b);
    console.log(arr, 'arr')
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > num){
            return i;
        }
    }
}
// console.log(whichIndex([1,3,2,5], 2.5))

function abbreviation(str){//"Deric Yee"

    let result = []
    let splitStr = str.split(' ');//["Deric", "Yee"]

    for(let i = 0; i < splitStr.length; i++){

        console.log(`tranforming the ${i}${i==1?'st':i==2?'nd':'th'} word: `,splitStr[i])
        result.push(splitStr[i][0].toUpperCase())//["D", "Y"]

    }
    return result.join('.')//"D.Y"
}
// console.log(abbreviation("Deric Yee"))

function compare(arr1, arr2){
    let filteredArr1 = arr1.filter(element => !arr2.includes(element));
    let filteredArr2 = arr2.filter(element => !arr1.includes(element));

    return filteredArr1.concat(filteredArr2)
}

// console.log(compare([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))