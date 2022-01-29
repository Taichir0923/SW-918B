// // Sorting Algorithm
// // Sorting - Эрэмблэх

// // var arr = [12 , 1 , 100 , 9 , 23];
// // sort

// // Anonymous function - Нэргүй функц

// // var sortedArray = arr.sort(function(a , b){
// //     return b - a
// // })

// // Bubble sort - Бөмблөгөн эрэмблэх арга

// // 12 , 1 , 100 , 9 , 23 => 12 , 12 , 100 , 9 , 23 => 1 , 12 , 100 , 9 , 23
// // 1 , 12 , 100 , 9 , 23
// // 1 , 12 , 100 , 9 , 23
// // 1 , 12 , 9 , 100 , 23
// // 1 , 12 , 9 , 23 , 100

// // 1 , 9 , 12 , 23 , 100

// // 1. Параметер хэлбэрээр массив авдаг функц бичих
// // 2. Өгөгдсөн массив дээр давталт хийх
// // 3. Элементүүдийн байрыг солих зорилгоор давхар давталт хийх
// // 4. Давхар давталт ашиглан, тухайн давталтын индекс дээр байгаа утга дараагийн элементээс их эсэхийг шалга.
// // 4.1. Хэрэв давталтын индекс дээр байгаа утга дараагийн элементээс их бол, тухайн хоёр элементийн байрыг солих
// // 5. Давталтын төгсгөлд массив буцаа

// function bubbleSort(arr , isReverse){
//     var swapped = true;
//     for(var i = arr.length - 1; i >= 0; i--){
//         swapped = false;
//         for(var j = 0; j < i; j++){
//             if(isReverse){
//                 if(arr[j] < arr[j+1]){
//                     var temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                     swapped = true;
//                 }
//             } else {
//                 if(arr[j] > arr[j+1]){
//                     var temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                     swapped = true;
//                 }
//             }
//         }
//         if(!swapped){
//             break;
//         }
//     }

//     return arr;
// }

// // var a = 5;
// // var b = 10;
// // var temp = a; // 5
// // a = b // 10
// // b = temp;

// // Selection sort

// // 12 , 1 , 100 , 9 , 23
// // 1 , 12 , 100 , 9 , 23
// // 1 , 9 , 100 , 12 , 23
// // 1 , 9 , 12 , 100 , 23
// // 1 , 9 , 12 , 23 , 100

// // 1. Параметер хэлбэрээр массив авдаг функц бичих
// // 2. Өгөгдсөн массив дээр давталт хийх
// // 3. Давталтын индексийг хамгийн бага элементийн индекс гэж үзээд хувьсагчинд хадгал
// // 4. Хамгийн бага гэж үзсэн элементээс бага элемент байгаа эсэхийг хайх зорилгоор давхар давталт ашиглах.
// // 5. Бага элемент олдсон тохиолдолд 3-р алхам дээр хадгалсан индексийн утгыг тухайн олдсон элементийн индексээр солино.
// // 6. 2-р алхам дээр хийсэн давталтын индекс дээр байгаа элементийг, 5-р алхам дээр өөрчилсөн индекстэй элементтэй байрыг нь соль
// // 7. Массив буцаа...

// function selectionSort(arr , isReverse){
//     for(var i = 0; i < arr.length; i++){
//         var minIndex = i;
//         for(var j = i + 1; j < arr.length; j++){
//             if(isReverse){
//                 if(arr[minIndex] < arr[j]){
//                     minIndex = j;
//                 }
//             } else {
//                 if(arr[minIndex] > arr[j]){
//                     minIndex = j;
//                 }
//             }
//         }
//         var temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }

//     return arr;
// }

// // Гэрт: Insertion sort , Quick sort

// // Merge Sort , Radix Sort

// // [234 , 12 , 1 , 23 , 56 , 99 , 11 , 100];

// // [234 , 12 , 1 , 23] , [56 , 99 , 11 , 100]
// // [234 , 12] [1 , 23]  ,  [56 , 99] [11 , 100]
// // [234] [12]  [1] [23]  ,   [56] [99]  [11] [100]
// // [12 , 234]  [1 , 23]  ,   [56 , 99]  [11 , 100]
// // [1, 12 , 23 , 234]  ,  [11 , 56 , 99 , 100]
// // [1 , 11 , 12 , 23 , 56 , 99 , 100 , 234]

// function mergeArrays(left , right){
//     var result = [];
//     var i = 0;
//     var j = 0;

//     while(i < left.length && j < right.length){
//         if(left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     result = result.concat(left.slice(i));

//     result = result.concat(right.slice(j));


//     return result;
// }

// // [23 , 45 , 2 , 6]
// //  0    1    2   3

// // [23 , 45 , 2 , 7 , 1]; 2
// // [23 , 45]   [2 , 7 , 1]

// function mergeSort(arr){
//     if(arr.length === 1){
//         return arr;
//     }
//     var mid = Math.floor(arr.length/2);
//     var left = mergeSort(arr.slice(0 , mid));
//     var right = mergeSort(arr.slice(mid));

//     return mergeArrays(left , right);
// }

// // Radix sort

// function getDigit(num , i){
//     return Math.floor(Math.abs(num) / Math.pow(10 , i)) % 10;
// }

// function countDigits(num){
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

// function findMax(arr){
//     var max = 0;

//     for(var i = 0; i < arr.length; i++){
//         max = Math.max(max , arr[i]);
//     }

//     return max;
// }

// function radixSort(arr){
//     const max = findMax(arr);
//     const numToLoop = countDigits(max);
//     for(var i = 0; i < numToLoop; i++){
//         const buckets = Array.from({length: 10} , function(){ return [] });
//         for(var j = 0; j < arr.length; j++){
//             var whichPlace = getDigit(arr[j] , i);
//             buckets[whichPlace].push(arr[j]);
//         }

//         arr = [].concat(...buckets);
//     }

//     return arr;
// }

// // leetcode.com 23-р дасгалыг хийх...

// MATRIX - Матриц
var matrix = [
    [12 , 13], // [0][2]
    [11 , 5],
    [11 , 5]
] // mor , bagana

var matrix1 = [
    [2 , 4 , 1],
    [23 , 1 , 5],
    [13 , 4 , 3]
]

var c = [
    [14 , 17 , 24],
    [34 , 6 , 128],
    [24 , 9 , 126]
]

function sumMatrix(A , B){
    var C;
    var aDimension = calculateDimension(A);
    var bDimension = calculateDimension(B);

    if(aDimension.row === bDimension.row && aDimension.column === bDimension.column){
        C = Array.from({length: aDimension.row} , function(){
            return [];
        });
        for(var row = 0; row < A.length; row++){
            for(var column = 0; column < A[row].length; column++){
                var el = A[row][column] + B[row][column];
                C[row].push(el);
            }
        }
    } else {
        return "Invalid dimensions"
    }

    return C;
}

function sumMatrices(...matrices){
    var C;
    var dimentions = [];
    var isEqual;
    if(matrices.length === 1){
        return matrices[0];
    }
    for(var i = 0; i < matrices.length; i++){
        var dimension = calculateDimension(matrices[i]);
        dimentions.push(dimension);
    }

    isEqual = equalDimensions(dimentions);

    if(!isEqual){
        return "Invalid dimensions"
    }

    C = Array.from({length: dimentions[0].row} , function(){
        return [];
    });

    for(var mat = 0; mat < matrices.length; mat++){
        console.log(matrices[mat]);
    }

    return C;
}

function calculateDimension(matrix){
    var row , column;
    row = matrix.length;
    column = matrix[0].length;
    return {
        row: row,
        column: column
    }
}

function equalDimensions(arr){
    var isEqual = true;
    var row = arr[0].row;
    var column = arr[0].column;
    for(var i = 1; i < arr.length; i++){
        if(arr[i].row !== row || arr[i].column !== column){
            isEqual = false;
            break;
        }
    }

    return isEqual
}