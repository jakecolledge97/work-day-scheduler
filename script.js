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

var timeBlockBtn = $('.time-block button')
var addNoteBtn = $('#add-note-btn')
var noteTitle = $('#note-title')
var noteDesc = $('#note-desc')
var closeBtn = $('#close-note-btn')
var addTimeId;

timeBlockBtn.click(addButtonTime)


function addButtonTime(event){
    addTimeId = $(this).parent().attr('id');
    addNoteBtn.click(addNote)
    closeBtn.click(removeElements)
}

function addNote(){
    var idOfButton = addTimeId
    console.log(noteTitle.val())
    if(noteTitle.val()){
        addItemToList()
    }else{
        emptyBoxAnimation()
    }
}
function addItemToList(){
    var newItem = $('<li>')
    var elementSelected = $('#' + addTimeId)
    newItem.addClass('list-group-item')  
    newItem.text(noteTitle.val())
    elementSelected.children('ul').append(newItem)
}

function emptyBoxAnimation(){
    if(noteTitle.classList != 'emptyBox'){
        noteTitle.addClass('emptyBox')
    }
}

function removeElements(){
    noteTitle.removeClass('emptyBox')
}