
"use scrict";

const itemesEl=document.querySelectorAll('.itemes')

const scorollFunc=()=>{
    const triggerBottom=window.innerHeight*.8
    for(let i=0;i<itemesEl.length;i++){
        const top=itemesEl[i].getBoundingClientRect().top
        if(top<triggerBottom){
            itemesEl[i].classList.add('show')
        }else{itemesEl[i].classList.remove('show')}
    }
}
window.addEventListener('scroll',scorollFunc)
scorollFunc()