//swiperjs
/*const swiper= new Swiper('.swiper',{
    scrollbar:{
        el: '.swiper-scrollbar',
        draggable: true,
    },
});*/

/*const navItems=menu.querySelector('.li');

/*navItems.forEach(item =>{
    const link =item.querySelector('.a');
    link.addEventListener('click',()=>{
        link.classList.add='active'
    })
})*/

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
$(document).ready(function() {
    const menuBtn = $('#menu-btn');
    const closeBtn = $('#close-btn');
    const menu = $('#ul');
    const navItems=$('.li')



    $(menuBtn).click(function(){
        $(menu).css('display', "block");
        $(menuBtn).css('display', "none")
        $(closeBtn).css('display', "inline-block")
        // action goes here!!
      });
    $(closeBtn).click(function(){
        $(menu).css('display', "none");
        $(menuBtn).css('display', "inline-block");
        $(closeBtn).css('display', "none")

    })
    $('.li').each(
        function() {
            $(this).addClass('active');
        }
        );
 });