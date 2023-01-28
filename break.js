for ( var i =1; i <= 20; i++){
    console.log(i);
    if (i > 10){
        break
    }
}

var numbers = [45, 52, 224, 524, 24, 52, 11, 41, 1, 3, 414, 5, 2];

for(var a = 0; a < numbers.length; a++){
    var number = numbers[a];
    if (number > 50 ){
        continue;
    }
    console.log(number);
}