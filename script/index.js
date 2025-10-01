const faBars = document.querySelector('.fa-bars');
const navLinksContainer = document.querySelector('.navLinksContainer');
const faTimes = document.querySelector('.fa-times');
const faSearch = document.querySelector('.fa-search');
const searchContainer = document.querySelector('.searchContainer');
const closeSearch = document.querySelector('#closeSearch');


faBars.addEventListener('click', function(){
    navLinksContainer.classList.add('showNavLinksContainer');
    faBars.style.display = 'none';
    faTimes.style.display = 'block';
})

faTimes.addEventListener('click', function(){
    navLinksContainer.classList.remove('showNavLinksContainer');
    faTimes.style.display = 'none';
    faBars.style.display = 'block';
})

faSearch.addEventListener('click', function(){
    searchContainer.classList.add('displaySearchContainer');
    faSearch.style.display = 'none';
    closeSearch.style.display = 'block';
})


closeSearch.addEventListener('click', function(){
    searchContainer.classList.remove('displaySearchContainer');
    faSearch.style.display = 'block';
    closeSearch.style.display = 'none';
})


const prev = document.querySelector('.fa-arrow-left');
const next = document.querySelector('.fa-arrow-right');
const sliderContainer = document.querySelector('.sliderContainer');
const images = document.querySelectorAll('.sliderContainer img');




let i = 0;
next.addEventListener('click', function(){
    
     i++;

     if (i == images.length){
        i = 0;
    }
   

    updateSlide();
    
    
    
})

prev.addEventListener('click', function(){
    i--;

    if (i < 0){
        i = images.length - 1;
    }
    
   updateSlide();
    

})

setInterval(function(){
    i++;
    if (i == images.length){
        i = 0;
    }

    updateSlide();

}, 5000);


function updateSlide(){
    sliderContainer.style.transform = `translate(${-i * 100}%)`;
    sliderContainer.style.transition = '.9s';
}