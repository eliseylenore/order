$(document).ready(function(){
  $(".blanks form").submit(function(event){

    event.preventDefault();


    var nameInput = $("input#name").val();
    var shirtName = $("#shirts .shirtName").val();
    var shirtPrice = $("#shirts .shirtPrice").val();


    $(".name").text(nameInput);
    $("#shirtName").text(shirtName);

    $("#confirmation").show();


  });
});
