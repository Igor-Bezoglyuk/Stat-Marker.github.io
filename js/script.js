jQuery( document ).ready(function(){
    $(function (){
    $(".Open-phone-menu").click(function(){
    $(".ModalMenu-phone").animate({'height': 'toggle'}); /*Скрипт по открытию и закрытию Phone Menu слева на право */
 });
    $(".Close").click(function(){
    $(".Menu").animate({'height': 'toggle'});
});
    $(".active-modal").click(function(){
    $(".Modal-Drop-menu").animate({'height': 'toggle'}); /*Скрипт по открытию и закрытию Phone Menu слева на право */
 });
    $(window).resize(function(){
    $(".ModalMenu-phone").hide();
});
});
});

const animItems = document.querySelectorAll('.anim-items'); //у каждого обьекта у кого есть класс .anim-items  будит работать анимация при сколле. Просто добавте в класс обьекта этот класс в html
if(animItems.length > 0){
   window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for(let index = 0; index  < animItems.length; index++){
       const animItem = animItems[index];
       const animItemHeight = animItem.offsetHeight;
       const animItemOffset = offset(animItem).top;
       const animStart = 4; // при достижении скролоом  высоты 1.4 высоты окна браузера 

       let animItemPoint = window.innerHeight - animItemHeight / animStart;
       if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
       }
       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active'); // если высота обьекта больше окна браузера, добавляется класс .active
       }else{

        if (!animItem.classList.contains('anim-no-hide')) { // class который  блокирует  постоянное  воспроизведение анимации  после скрола верх и в низ, позволяя ему воспроизвестись после скрола один раз вниз 
           animItem.classList.remove('active'); // если мы не докрутили или перекрутили обьет, то класс .active отнимаеться
        } 
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{top: rect.top + scrollTop, left: rect.left + scrollLeft}  
 }

    animOnScroll();// изначальная функция , позволяет  обьектам находящихся на стартовой позиции  без скролла  работать

  /*setTimeout(()=>{ общая задержка появления обьекта - анимации
    animOnScroll();
  },300);*/
}

let bg = document.querySelectorAll('.footer-wave, .footer-wave-two');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;  
        bg[i].style.transform = 'translate(-' + x * 50 + 'px)';
    });    
}




