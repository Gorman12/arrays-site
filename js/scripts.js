$(document).ready(function() {
  $("form#input-form").submit(function(event) {

    var answer1 = $("#input1").val();
    var answer2 = $("#input2").val();
    var answer3 = $("#input3").val();
    var answer4 = $("#input4").val();

    var array1 = [answer1, answer2, answer3, answer4];

    var array2 = [array1[1], array1[0], array1[2]]



  //  $("#result").text(array2[0]);


    $("#r1").text(array1[1]);
    $("#r2").text(array1[0]);
    $("#r3").text(array1[2]);

  event.preventDefault();
  });
});
