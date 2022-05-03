const scrollUp= document.querySelector('#scroll-button');

const scrollFunction = function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })

}

scrollUp.addEventListener('click', scrollFunction)


const hamburger =document.querySelector('.hamburger');
const unorderedlist =document.querySelector('.info-list');


hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    hamburger.classList.add('active');
    unorderedlist.classList.add('active');
    
    
}


const lists = document.getElementsByTagName('li');
for(i=0; i<lists.length; i++){

lists[i].addEventListener('click', closeMobileMenu);

function closeMobileMenu(){
    hamburger.classList.remove('active');
    unorderedlist.classList.remove('active'); 
}}