


$("#commenters").on("click", ".reply", function(event){ //Place a listener on 'ul', applies to all 'li'
    event.preventDefault(); //Prevent default behavior of the event. (Here, prevent <a> change pages)
    var form = $("#postcomment").clone(true); // Get and clone the form with id=postcomment
    form.find('.parent').val($(this).parent().parent().attr('id'));
    //Find all the element within current selection that match the selector, which is
    //<input class=parent...>, and set that value to id of 'li'
    //which is also the id of the post
    var formExists = $(this).parent().find("#postcomment").is('form')
    if (formExists==true){ //Comment area exists
        $(this).parent().find('form').remove()
        $(this).text('reply')
    }
    else{ //Comment area doesn't exists
        $(this).parent().append(form);     //append this form with new id to <p> of the link <a class=reply>
        $(this).text('cancel')
    }


    // 'this' represent 'a' element which contains the link
    // this.parrent().parrent() is 'li'
    // this.parent() is 'p'
});


$('.span-shrink').on("click", function(event){
    event.preventDefault();
    var id = this.id
    if (id == 'shrink'){
    $(this).parent().next('#comment-text').hide()
    $(this).text('[+]')
    $(this).attr('id','expend')
    }
    if (id == 'expend'){
    $(this).parent().next('#comment-text').show()
    $(this).text('[-]')
    $(this).attr('id','shrink')
    }
})
