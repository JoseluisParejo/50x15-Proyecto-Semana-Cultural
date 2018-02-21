window.onload = iniciarFunciones;
function iniciarFunciones(){
	var scores = "/file/scores.txt";
	var f = new File (scores);


	document.getElementById("user").addEventListener("blur", saveUser);
	document.getElementById("btnPlay").addEventListener("click", startPlaying);
	
	function startPlaying(){
		window.location.href = "index.html";
	}

	function saveUser(){
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