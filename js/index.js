
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

function sendContact(){
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div><p>Message sent successfully, we will be in touch</p></div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}