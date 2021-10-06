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
//localStoredNotes = JSON.parse(localStorage.getItem("listArray"))
var addTextBtn = $('.saveBtn')
addTextBtn.click(addListItem)

function getSavedNotes(){
    localStoredNotes = JSON.parse(localStorage.getItem("listArray"))
    console.log(localStoredNotes)
    var eachList = $('.time-block').children()
    var startingDiv = 9
    
    $('<div>', {
        class: 'schedule-list',
    }).appendTo('.note-area');
    
    $('<ul>', {
        class: 'added-items',
    }).appendTo('.schedule-list');
    
    for(i=0;i<eachList.length;i++){
        var listItemsArr = localStoredNotes[i]
        console.log(listItemsArr)
        for(j=0; j<listItemsArr.length; j++){
            var currentListTime = $('#' + (startingDiv+i)).find('.added-items')
            var localStoredNotesTime = localStoredNotes[i]
            if(localStoredNotesTime[j]){
                /*$('<li>').appendTo(currentListTime);
                $('<div>', {
                    class: "input-group-prepend",
                }).appendTo(currentListTime.children('li'));
                $('<div>', {
                    class: "input-group-text",
                }).appendTo(currentListTime.children('.input-group-prepend'));
                $(currentListTime).find('.input-group-prepend').append('<p></p>')
                $(currentListTime).find('.input-group-prepend').append('<input type="checkbox">')
                $('<input>', {
                    type: "checkox",
                }).appendTo(currentListTime.children('.input-group-text'));*/
                $(currentListTime).append('<li><div class="input-group-prepend"><div class="input-group-text"><p>hello</p><input type="checkbox"></div></div></li>')
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