function changecolor(){
    var newColor = makeColor();
    var box = document.getElementById("box").style.backgroundColor = newColor;
    document.getElementById("rgb").innerHTML = newColor;
    var body = document.getElementById("body").style.backgroundColor = newColor;
}

function makeColor(){
    var arr =[];
    for(var i = 0; i < 3 ; i++){
        var num = Math.floor(Math.random() * 256); //Math.floor最大整數 Math.random 隨機0-1小數
        arr.push(num);
    }
    var newRgb = 'rgb('+ arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRgb; 
}