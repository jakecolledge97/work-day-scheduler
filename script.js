var timer = setInterval(myTimer, 1000)

function myTimer(){
    var currentTime = moment()
    $('#currentDay').text(currentTime.format('MMMM Do YYYY, h:mm:ss a'))
}
/*if(timePast.format('H') > 9){
    pastTime.addClass('.list-group-item past')
}*/

$('button').each(function(){
    console.log($(this).attr('id'))
    var currentTime = moment()
    var timeAttr = parseInt($(this).attr('id'))
    if(timeAttr < parseInt(currentTime.format('H'))){
        console.log(timeAttr + ' ' + currentTime.format('H'))
        $(this).addClass('.list-group-item past')
    }else if(timeAttr === 11){
        $(this).addClass('.list-group-item present')
    }else{
        $(this).addClass('.list-group-item future')
    }
})