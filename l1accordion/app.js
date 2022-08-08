var getacctitle = document.getElementsByClassName("acctitle");
// console.log(getacctitle);    //HTML Collection
var getacccontent = document.querySelectorAll(".accontent");
// console.log(getacccontent);  //NodeList

for(var x = 0 ; x < getacctitle.length ; x++ ){
    // console.log(x);

    getacctitle[x].addEventListener('click',function(e){
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle('active');
        var getcontent = this.nextElementSibling;
        // console.log(getcontent);

        if(getcontent.style.height){
            getcontent.style.height = null; //beware can't set 0
        }else{
            // console.log(getcontent.scrollHeight);
            getcontent.style.height = getcontent.scrollHeight + "px";
        }


    });
}
