/* 此最外層語法，使用的時間點在於確保html全部load完，
才開始執行js，避免js找不到html dom而發生錯誤，這種寫法等同把js寫在html之後 */
/*中間程式碼是 監聽事件*/

$(document).ready(function () {

    var paint = "white"
    /*click是事件名稱 */
    $(".color").on("click", function () {

        paint = $(this).css('background-color') /*$(this) 就是指 .color這個selector 返回的事屬性值 */

    });
    $('.row').on('click', function () {

        $(this).css('background-color',paint) /* $(selector).css(name,value)  name屬性名,value屬性值 */ 
		
	});
});