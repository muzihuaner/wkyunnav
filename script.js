$(function(){
    $("#changeColor").change(function(){
      var checked = $(this).prop("checked");
      $("body").removeClass();
      if(checked){
        $("body").addClass("dark");
      }else{
         $("body").addClass("neumorphism");
      }
    });
    
  });