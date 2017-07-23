projects = document.getElementsByClassName("info");

for(var a = 0; a<projects.length; a++){
	projects[a].addEventListener("click", function(){
		//change this to close img
		//toggle the ul 
		if (this.nextSibling.nextSibling.nextSibling.nextSibling.style.display == "block") {
			this.src="./img/info.png";
			this.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
		} else {
			this.src = "./img/close.png";
			this.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "block";
		}
	})
}







 