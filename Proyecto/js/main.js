Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}



$(document).ready(function() {

    countdown_id = 0;
    val_score = 0;
    localStorage['score'] = '4500';

    $.post("questions.php", function(datos){
    	res = $.parseJSON(datos).shuffle();
      //recuperar nombre del login
      counter = 0;
      question_to_ask = {};

      loadQuestion();
      startCounter();


      $(".answer_class").click(function(){
        text_answer = $.trim($(this).text().replace(/\s\s+/g, ' '));
        correct_answer = $.trim(question_to_ask['correct_answer'].replace(/\s\s+/g, ' '));
        console.log(correct_answer);
        console.log(text_answer);
        if (text_answer == correct_answer){
          clearInterval(countdown_id);
          alert('Acertado');
          val_score = parseInt($("#punt").find('h2').text());
          $("#punt").find('h2').text((val_score+1000).toString());


          console.log(counter);
          console.log(res.length);
          if(counter == res.length){
            clearInterval(countdown_id);
            alert('YOU ARE A WINNER');
            window.location.replace("bestScores.html");
          }else{
            loadQuestion();
            startCounter();
          }

        }
        else {
          clearInterval(countdown_id);
          alert('Fallo');
          window.location.replace("bestScores.html");
        }
    	});
    });

    function countdownTimer(){
      val_timer = parseInt($("#time").find('h2').text());
      $("#time").find('h2').text((val_timer-1).toString());
      if(val_timer == 1){
        clearInterval(countdown_id);
        alert('SIN TIEMPO');
        window.location.replace("bestScores.html");
      }
    }

    function startCounter(){
      $("#time").find('h2').text('30');
      countdown_id = setInterval(countdownTimer,1000);
    }

    function loadQuestion(){


      r1_h3 = $("#r1").find('h3');
      question_to_ask = res[counter];
      counter++;
      question_to_ask['answers'].shuffle();
      res_1 = question_to_ask['answers'][0];
      res_2 = question_to_ask['answers'][1];
      res_3 = question_to_ask['answers'][2];
      res_4 = question_to_ask['answers'][3];
      preg = question_to_ask['title'];

      r1_h3.text(res_1);
      $("#r2").find('h3').text(res_2);
      $("#r3").find('h3').text(res_3);
      $("#r4").find('h3').text(res_4);
      $("#preg").find('h1').text(preg);
    }

});
