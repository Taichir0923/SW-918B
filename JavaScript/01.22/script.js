// Sorting Algorithm
// Sorting - Эрэмблэх

// var arr = [12 , 1 , 100 , 9 , 23];
// sort

// Anonymous function - Нэргүй функц

// var sortedArray = arr.sort(function(a , b){
//     return b - a
// })

// Bubble sort - Бөмблөгөн эрэмблэх арга

// 12 , 1 , 100 , 9 , 23 => 12 , 12 , 100 , 9 , 23 => 1 , 12 , 100 , 9 , 23
// 1 , 12 , 100 , 9 , 23
// 1 , 12 , 100 , 9 , 23
// 1 , 12 , 9 , 100 , 23
// 1 , 12 , 9 , 23 , 100

// 1 , 9 , 12 , 23 , 100

// 1. Параметер хэлбэрээр массив авдаг функц бичих
// 2. Өгөгдсөн массив дээр давталт хийх
// 3. Элементүүдийн байрыг солих зорилгоор давхар давталт хийх
// 4. Давхар давталт ашиглан, тухайн давталтын индекс дээр байгаа утга дараагийн элементээс их эсэхийг шалга.
// 4.1. Хэрэв давталтын индекс дээр байгаа утга дараагийн элементээс их бол, тухайн хоёр элементийн байрыг солих
// 5. Давталтын төгсгөлд массив буцаа

function bubbleSort(arr , isReverse){
    var swapped = true;
    for(var i = arr.length - 1; i >= 0; i--){
        swapped = false;
        for(var j = 0; j < i; j++){
            if(isReverse){
                if(arr[j] < arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            } else {
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
        }
        if(!swapped){
            break;
        }
    }

    return arr;
}

// var a = 5;
// var b = 10;
// var temp = a; // 5
// a = b // 10
// b = temp;

// Selection sort

// 12 , 1 , 100 , 9 , 23
// 1 , 12 , 100 , 9 , 23
// 1 , 9 , 100 , 12 , 23
// 1 , 9 , 12 , 100 , 23
// 1 , 9 , 12 , 23 , 100

// 1. Параметер хэлбэрээр массив авдаг функц бичих
// 2. Өгөгдсөн массив дээр давталт хийх
// 3. Давталтын индексийг хамгийн бага элементийн индекс гэж үзээд хувьсагчинд хадгал
// 4. Хамгийн бага гэж үзсэн элементээс бага элемент байгаа эсэхийг хайх зорилгоор давхар давталт ашиглах.
// 5. Бага элемент олдсон тохиолдолд 3-р алхам дээр хадгалсан индексийн утгыг тухайн олдсон элементийн индексээр солино.
// 6. 2-р алхам дээр хийсэн давталтын индекс дээр байгаа элементийг, 5-р алхам дээр өөрчилсөн индекстэй элементтэй байрыг нь соль
// 7. Массив буцаа...

function selectionSort(arr , isReverse){
    for(var i = 0; i < arr.length; i++){
        var minIndex = i;
        for(var j = i + 1; j < arr.length; j++){
            if(isReverse){
                if(arr[minIndex] < arr[j]){
                    minIndex = j;
                }
            } else {
                if(arr[minIndex] > arr[j]){
                    minIndex = j;
                }
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// Гэрт: Insertion sort , Quick sort