const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex =0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex=0;
    }

    //create dom elements same as we made manualy html
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    //i have done some work in outbound

    //ataching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting ements classname
    slide.className='slider';
    content.className='slide-content';
    h1.className ='movie-title';
    p.className = 'movie-des';

    //push this slide to sliders array
    sliders.push(slide);

    //adding sliding effect
    if(sliders.length){
        //clac is css formula to 
        // negative sign indicate we want negative margin left
        //sub 2 because we want second slide at the middle
        sliders[0].style.marginLeft = `calc( -${100 * (sliders.length-2)}% - ${30 * (sliders.length-2)}px)`;
    }
}


//this will show us 3 slides at a time/. see frontend
for(let i=0;i<3;i++)
{
    createSlide();
}


setInterval(()=>{
    createSlide();
},3000);


//js to play video cards
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        //children 1 of videocard class  is our video element .... 0 is image
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    })

})