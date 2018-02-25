$(document).ready(function() {

	getBestScores();
  

	$("#btnPlay").click(function(){
		name = $("#user").val();
		localStorage.setItem('name',name);
		window.location.replace("game.html");

	});

	function getBestScores(){
		console.log('best scores');
		scores = localStorage.getItem('scores');
		console.log(scores);
		if (scores == null){
			return;
		}
		scores = JSON.parse(scores);
		console.log(scores);
		$("#divScores").append('<ol id="best_score_list"></ol>');

		scores.sort(function(a,b){
			score_a = a['score'];
			score_b = b['score'];
			return score_b - score_a;
		});

		len = (scores.length > 4) ? 5 : scores.length;
		best_scores = scores.slice(0,len);
		console.log(best_scores);
		best_scores.forEach(function(score){
			$('#best_score_list').append('<li>'+score['name']+':'+score['score']+'</li>');
		});

	}

});
