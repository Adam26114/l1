var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");

getbtnsignup.addEventListener("click",function(){
    getmodal.style.display = "block";
});

getbtnclose.addEventListener("click",function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
};