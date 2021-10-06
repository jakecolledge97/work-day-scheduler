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
var localStoredNotes = []
localStoredNotes = JSON.parse(localStorage.getItem("listArray"))
var addTextBtn = $('.saveBtn')
addTextBtn.click(addListItem)

function getSavedNotes(){
    localStoredNotes = [JSON.parse(localStorage.getItem(listItems))]
    var eachList = $('.time-block').children()
    var startingDiv = 9
    
    $('<div>', {
        class: 'schedule-list',
    }).appendTo('.note-area');
    
    $('<ul>', {
        class: 'added-items',
    }).appendTo('.schedule-list');
    
    for(i=0;i<eachList.length;i++){
        for(y=0; y<localStoredNotes[i].length; y++){
            var currentListTime = $('#' + (startingDiv+i)).find('.added-items')
            var localStoredNotesTime = [localStoredNotes[i]]
            if(!localStoredNotesTime[y].length === 0){
                $('<li>').appendTo(currentListTime);
                $('<div>', {
                    class: "input-group-prepend",
                }).appendTo(currentListTime.children('li'));
                $('<div>', {
                    class: "input-group-text",
                }).appendTo(currentListTime.children('.input-group-prepend'));
                $('<p>').appendTo(currentListTime.children('.input-group-text'));
                $('<input>', {
                    type: "checkox",
                }).appendTo(currentListTime.children('.input-group-text'));
                $(currentListTime.children('p')).text('test')
            }
        }
    }
}

function addListItem(event){
    var buttonId = $(this).parent().attr('id')
    var textInput = $('#' + buttonId).find('input').val()
    if(!textInput){
        $('#' + buttonId).find('input').css('box-shadow', '0px 0px 5px 1px red')
    }else{

    }
}