$(document).ready(function () {
    var advice = ["That's terrible! You should knock that off!",
    "Seriously? Why don't you grow the hell up?!",
    "Aren't you a little old for that crap?",
    "You are bad and you should feel bad!",
    "Gross. You are gross.",
    "Are you going to suck all your life?",
    "What? Who does that?!",
    "I thought you were better than that.",
    "My disapproval is overwhelming.",
    "Are you freaking kidding me?",
    "NO! Bad!",
    "And when do you plan on becoming an adult?",
    "That is totally unacceptable.",
    "You should be utterly ashamed.",
    "┐(´  д｀)┌",
    "Ugh! That's horrible!",
    "A kitten dies everytime you do that.",
    "I can't believe you are that disgusting."]
    $('#bad_habit').get(0).focus();
    //當這個form被submit 要做的事
    $('form').on('submit', function (event) {
        event.preventDefault();//停止事件的默認動作 默認會跳轉 加這句 不會跳轉
        var bad_habit = $('#bad_habit').val().replace(/^\s+|\s+$/g, '');//轉換input內的 輸入文字 若有空格用“”空代替。
        if (bad_habit == '') {
            bad_habit = "don't fill in forms"
        }
        bad_habit = changePronouns(bad_habit);
        $('#habit_repeater').text(bad_habit + "?");
        $('#advice').text(advice[Math.floor(Math.random() * 18)]);
        $('#bad_habit').val("");
        
    });
    function changePronouns(phrase) {
        var startWithI = phrase.substr(0, 2).toUpperCase();//切割字串(0-2的字) 2代表字串長度
        var startWithMy = phrase.substr(0, 3).toUpperCase();
        var newPhrase;

        if (startWithI == "I ")	{
			newPhrase = phrase.replace(/I /gi, "You ");
		} else if ( startWithMy == "MY " ) {
			newPhrase = phrase.replace(/My /gi, "Your ");
		} else {
			newPhrase = "You " + phrase;			
		}

        newPhrase = newPhrase.replace(/ I /gi, " you ");
		newPhrase = newPhrase.replace(/ my /gi, " your ");
		newPhrase = newPhrase.replace(/ me /gi, " you ");

		return newPhrase;

    }

    
});


