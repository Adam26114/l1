var slides = document.getElementsByClassName("carousel-item");
// console.log(slides); HTML collection

var dots = document.querySelectorAll(".dot")
// console.log(dots); Nodelist


var currslide = 1;

carousel(currslide);

function carousel(slidenum){
    console.log(slidenum);
}