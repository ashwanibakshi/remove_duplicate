var arr=[1,2,3,3,4];

function demo(){
    arr = arr.filter(function (value, index, array) { 
        return array.indexOf(value) === index;
    });
    console.log(arr)
}

demo();
