var getacctitle = document.getElementsByClassName("acctitle");
// console.log(getacctitle);
var getacccontent = document.querySelectorAll(".accontent");
// console.log(getacccontent);

for(var x = 0 ; x < getacctitle.length ; x++ ){
    // console.log(x);

    getacctitle[x].addEventListener('click',function(e){
        // console.log(e.target);
        // console.log(this);
    });
}
