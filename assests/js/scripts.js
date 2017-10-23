$("ul").on("click", "li", function() {
    /*
     $(this).css("color", "gray");
    $(this).css("text-decoration", "line-through");
    
    */
    
    /*
    if($(this).css("color") === "rgb(128, 128, 128)") {
        
          $(this).css({
           color: "black",
           textDecoration: "none"
       });
     
    } else {
      $(this).css({
           color: "gray",
           textDecoration: "line-through"
       });
        
    }*/
    
    $(this).toggleClass("completed");
    
    
});

$("ul").on("click", "span", function(event) {   
    
    $(this).parent().fadeOut(500, function() {
        
        $(this).remove();
        
    });
    
     event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
   if(event.which == 13){
        
       var todoText = $(this).val();
       
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
       
       $("ul li:last").hide().fadeIn(500);
       
       $(this).val("");
        
   } 
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
    
});