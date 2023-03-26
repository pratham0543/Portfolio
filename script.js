window.addEventListener('scroll',reveal);

function reveal(){
    var reveal=document.querySelectorAll('.reveal');
 for(let i=0;i<reveal.length;i++)
 {
    var windowHeight=window.innerHeight;
    var revealtop=reveal[i].getBoundingClientRect().top;
    var revealpoint=200;


    if(revealtop<windowHeight-revealpoint){
        reveal[i].classList.add('active');
    }
    else{
        reveal[i].classList.remove('active');
    }
 }
}