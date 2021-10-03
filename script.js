

var timer = setInterval(myTimer, 1000)
var test = $('.time')
console.log(test.value)
function myTimer(){
    var currentTime = moment()
    $('#currentDay').text(currentTime.format('MMMM Do YYYY, h:mm:ss a'))
}
