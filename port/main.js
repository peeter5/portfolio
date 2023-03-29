//swiperjs
/*const swiper= new Swiper('.swiper',{
    scrollbar:{
        el: '.swiper-scrollbar',
        draggable: true,
    },
});*/

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('#ul');

menuBtn.addEventListener('click', ()=>{
    menu.style.display='block';
    menuBtn.style.display='none'
    closeBtn.style.display='inline-block';
})
//hide
closeBtn.addEventListener('click',()=>{
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';

})
const navItems=menu.querySelector('.li');

navItems.forEach(item =>{
    const link =item.querySelector('.a');
    link.addEventListener('click',()=>{
        link.class
    })
})

//read
const readMoreBtn =document.querySelector('.read-more')
const readMoreContent =document.querySelector('.read-more-content')

readMoreBtn.addEventListener('click',()=>{
    readMoreContent.classList.toggle('show-content')
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent= "show less"
    }else{
        readMoreBtn.textContent="show more"
    }
})