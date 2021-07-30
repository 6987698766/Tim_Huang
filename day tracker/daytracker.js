$(document).ready(function () {
    var d =new Date();/*No parameters
    When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.*/ 
    var day = d.getDay(); //sunday=0 ... 
    var msg =["Sunday Funday!",
                "Monday 忙day",
                "Tuesday 兔死day",
                "Wednesday 蚊子day",
                "Thursday 奢侈day",
                "Friday 福來day",
                "Saturday 灑脫day"];
    $('#' + day).attr('id', 'today'); //找尋html中的#day 後面是指定（屬性名稱,值）就是將id的屬性，設成today 
    
    $("#message").text(msg[day]);
});

