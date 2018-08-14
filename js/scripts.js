$(document).ready(function(){
 $("form#results").submit(function(event){
   event.preventDefault();
   var countTo = parseInt($("#numberOne").val());
   var countBy = parseInt($("#numberTwo").val());
   var resultsArr = [];


   if (countTo == 0 || countBy == 0){
     alert("Please enter numbers greater than zero.");
   }

   else if (countBy > countTo){
     alert("Please enter a smaller Count By number than Count To number.");
   }

   else if (countTo < 0){
     for (var index = countBy; index >= countTo; index -= countBy){
     resultsArr.push(index);
     $("#outputList").text(resultsArr);
   }
 }

  else if (countTo > 0 || countBy > 0){

   for (var index = countBy; index <= countTo; index += countBy){
   resultsArr.push(index);
   $("#outputList").text(resultsArr);
  }
}







  });
});
