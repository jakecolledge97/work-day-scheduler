var timer = setInterval(myTimer, 1000)

function myTimer(){
    var currentTime = moment()
    $('#currentDay').text(currentTime.format('MMMM Do YYYY, h:mm:ss a'))
}
//checks the time and highlights the respective time in the list
$('li').each(function(){
    //console.log($(this).attr('id'))
    var currentTime = moment()
    var timeAttr = parseInt($(this).attr('id'))
    if(timeAttr < parseInt(currentTime.format('H'))){
        $(this).addClass('.list-group-item past')
    }else if(timeAttr === parseInt(currentTime.format('H'))){
        $(this).addClass('.list-group-item present')
    }else{
        $(this).addClass('.list-group-item future')
    }
})
var addTextBtn = $('.saveBtn')
addTextBtn.click(addListItem)

function addListItem(event){
    var buttonId = $(this).parent().attr('id')
    var textInput = $('#' + buttonId).find('input').val()
    if(textInput){
        
    }
}
