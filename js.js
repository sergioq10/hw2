$(document).ready(function(){
        
        //global variable
        
        var score = 0;
   
        // at least one event listener
        $("button").on("click", gradeQuiz);
            
        //functions
        function isFormValid(){
            let isValid = true;
            if ($("#q1").val() == ""){
                isValid = false;
                $("#validationFdbk").html("Question 1 was not answered");
            }
            
            return isValid;
        }
            
        function gradeQuiz(){
            $("#validationFdbk").html(""); //resets validation feedback
            $("#totalScore").html(`Total Score: ${score}`);
 
            
            if(!isFormValid()){
                return;
            }
            
            // right answer function
            function rightAnswer(index){
                
                $(`#q${index}Feedback`).html("Correct");
                $(`#q${index}Feedback`).attr("class", "bg-success text-white");
                score += 35;
            }
            
            //funciton answer is incorrect
            function wrongAnswer(index){
             $(`#q${index}Feedback`).html("Incorrect!");
                $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
               
            }
            

            // ----------- users answers --------------
            score = 0;
            let q1Response = $("#q1").val().toLowerCase();
            let q2Response = $("#q2").val()

            //question 1
            if(q1Response == "amazon"){
                rightAnswer(1); 
            } else {
                wrongAnswer(1);
            }
            
            //question 2
            if(q2Response == "ind"){
                rightAnswer(2);
            } else {
                wrongAnswer(2); 
            }

            //question 3
            if($("#blue").is(":checked") && $("#yellow").is(":checked")
              && $("#red").is(":checked") && !$("#green").is(":checked")){
                  
                  rightAnswer(3);
              }else {
                  wrongAnswer(3);
              }
            
            // display of score if score is above 80 or below
            if($("#totalScore").html(`Total Score: ${score}`) >= 80){
                $(this).css('color', 'green');
                
            }else {
                $(this).css('color', 'red');
            }
         
           }
         }) //ready