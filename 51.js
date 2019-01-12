//check off specific todos by clicking
$("ul").on("click", "li" , function(){
    $(this).toggleClass("done");
})
//remove todo on clicking on cross
$("ul").on("click", "span" ,function(event){
    //to access the parent of span i.e li
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extract the todo from text input
        var todotext = $(this).val();
        //clear the text input field
        $(this).val("");
        // create a new li
        $("ul").append("<li><span class='trashcan'><i class='fa fa-trash'></i> </span>" + todotext + "</li>");
        
    }
})
$("#toggleform").click(function(){
    $("input").fadeToggle();
})