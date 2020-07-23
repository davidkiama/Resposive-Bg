
const shoes = document.querySelectorAll('.shoe');

const shoeBg = document.querySelector('.shoeBackground');


let x = window.matchMedia("(max-width:1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();
window.addEventListener('resize', changeHeight);