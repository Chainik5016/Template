 //  *Скрипт используется для добавления класса active ссылку, находящейся в фиксированно шапке при достижения блока в который ведет якорь.
 //  ?Что бы использовать скрипт нужно добавить в ul, в котором находятся ссылки Id и ввести его на 6 строчке.
 //  !Класс active добаляется к родителю, то есть у li.

var lastId,

    topMenu = $("#header-list"), //  !Нужно заменить на ID меню
    topMenuHeight = topMenu.outerHeight()+100,

    menuItems = topMenu.find("a"),

    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 700);
  e.preventDefault();
});

$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active"); // active добавляется к родителю тооесть к li
   }                   
});