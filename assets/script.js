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
var eachList = $('.time-block').children()
addTextBtn.click(addListItem)


getSavedNotes()

function create2dArray(){
    localStoredNotes = []
    for(i=0;i<9;i++){
        localStoredNotes[i] = ['']
    }
}

function getSavedNotes(){
    
    localStoredNotes = JSON.parse(localStorage.getItem("listArray"))
    if(localStoredNotes === null){
        create2dArray()
    }
    console.log(localStoredNotes)
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
                $(currentListTime).append('<li><div class="input-group-prepend"><div class="input-group-text"><p></p><input type="checkbox"></div></div></li>')
                $(currentListTime).children().eq(j).find('p').text(localStoredNotes[i][j])
            }
        }
    }

}

function addListItem(event){
    var buttonId = $(this).parent().attr('id')
    var textInput = $('#' + buttonId).find('#list-input')
    var checkBox = $('li').find('input:checkbox')
    if(!textInput.val() && !checkBox.is(':checked')){
        textInput.css('box-shadow', '0px 0px 5px 1px red')
    }else if(checkBox.is(':checked') && !textInput.val()){
        $('input:checked').closest('li').remove()
        saveListItems()
        console.log(localStoredNotes)
    }else{
        $('#' + buttonId).find('.added-items').append('<li><div class="input-group-prepend"><div class="input-group-text"><p></p><input type="checkbox"></div></div></li>')
        $('#' + buttonId).find('.added-items li').last().find('p').text(textInput.val())
        textInput.css('box-shadow', 'none')
        textInput.val('')
        $('input:checked').closest('li').remove()
        saveListItems()
        console.log(localStoredNotes)
    }
}

function saveListItems(){
    localStoredNotes = []
    var listItems = []
    for(i=0;i<eachList.length;i++){
        var list = $('#' + (9+i)).find('ul')
        if(list.childElementCount === 0){
            localStoredNotes[i] = [""]
            console.log(localStoredNotes)
        }else{
            listItems = []
            for(j=0;j<list.children().length;j++){
                listItems.push(list.children().eq(j).find('p').text())
                localStoredNotes
            }
            if(localStoredNotes[i] == null){
                localStoredNotes[i] = listItems
                console.log(localStoredNotes)
            }else{
                localStoredNotes[i].push(listItems)
                console.log(localStoredNotes)
            }
        }
    }
    localStorage.setItem("listArray", JSON.stringify(localStoredNotes))
}