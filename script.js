

var timer = setInterval(myTimer, 1000)

function myTimer(){
    var currentTime = moment()
    $("#currentDay").text(currentTime.format('MMMM Do YYYY, h:mm:ss a'))
}

