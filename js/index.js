
function buyerButtonClick(){
    document.getElementById("titleWelcome").style.display = "none";
    document.getElementById("buyerSearch").style.display = "block";
}

function renterButtonClick(){
    document.getElementById("titleWelcome").style.display = "none";
	document.getElementById("renterSearch").style.display = "block";
}

function resetSearch(){
    document.getElementById("titleWelcome").style.display = "block";
    document.getElementById("renterSearch").style.display = "none";
    document.getElementById("buyerSearch").style.display = "none";
}