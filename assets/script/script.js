

//---------------------------------- HEADER AND LEFT PANEL START ---------------------------------------

var leftpanel = document.querySelector('.leftpanel');
var pagelinks = leftpanel.getElementsByClassName('pagelink');
for (var i = 0; i < pagelinks.length; i++) {
    pagelinks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0){
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
};

document.querySelector('.namelabel').textContent = 'SUNEIL'
document.querySelector('.emailid').textContent = 'suniel.stanly@gmail.com'

//---------------------------------- HEADER AND LEFT PANEL END ---------------------------------------


//----------------------------------COMPOSE MAIL  WINDOW START ----------------------------------------

var modal = document.getElementById("myModal");
var compose = document.querySelector('.composebtn');
var cont = document.querySelector('.cont');
var span = document.querySelector('.close');


compose.onclick = function () {
cont.style.display = "flex";
modal.style.display = "block";
}

span.onclick = function () {
modal.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}
//----------------------------------COMPOSE MAIL  WINDOW END  -----------------------------------------

