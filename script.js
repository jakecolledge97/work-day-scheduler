var timer = setInterval(myTimer, 1000)

function myTimer(){
    var currentTime = moment()
    $('#currentDay').text(currentTime.format('MMMM Do YYYY, h:mm:ss a'))
}
/*if(timePast.format('H') > 9){
    pastTime.addClass('.list-group-item past')
}*/

$('button').each(function(index){
    console.log($(this).attr('id'))
    var currentTime = moment()
    var timeAttr = $(this).attr('id')
    if(timeAttr < currentTime.format('H')){
        $(this).addClass('.list-group-item past')
    }
})