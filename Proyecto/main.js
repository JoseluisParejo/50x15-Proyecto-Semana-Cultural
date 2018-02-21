window.onload = iniciarFunciones;
function iniciarFunciones(){
	var scores = "/file/scores.txt";
	//var f = new File([], scores);
	var tiempo = 30;


	document.getElementById("user").addEventListener("blur", saveUser);
	document.getElementById("btnPlay").addEventListener("click", startPlaying);
	
	function startPlaying(){
		window.location.href = "index.html";
	}

	function temporizador(){
		for(var i = tiempo; i > 0; i--){
			setTimeOut(function(){
				document.getElementById("tiempo").value = i-1;
			}, 1000);
		}
	}

	/*function saveUser(){
		var user = document.getElementById("user").value;
		f.open("w");
		f.writeln(user);
		f.close;
	}

	/*questions = 0;
	max = 9;
	while(questions != max){

	}
	window.location.href = "fin.html";*/
};