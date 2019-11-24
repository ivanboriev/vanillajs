window.onload = function() {
  /*
    Пишем на чистом JS без сторонних библиотек типа jQuery :)

    ***** Исчезалка *******

    Надо написать функцию fade() в которую передается element DOM и время применения в секундах;
    Функция должна плавно скрывать елемент за отведенное время в секундах.

     Удачи!   
  */
  

  function fade(element, time){
    this.fps = 60; // Кадры в секунду
    this.element = element; // Елемент ДОМ
    this.time = time || 500; // Время Анимации
    this.steps = Math.floor(this.time / this.fps); // Количество кадров
    this.opacity = 1; // Прозрачность
    this.d0 = this.opacity / this.steps; // На сколько уменьшаем opacity за кадр


    this.timer = setInterval(function(){
        this.opacity -= this.d0;
        element.style.opacity = this.opacity;
        this.steps--;        

        if(this.steps === 0){
          clearInterval(this.timer);
        }
      }, (1000/ this.fps));
    

  }


  var items = this.document.querySelectorAll(".item");

  for(var i = 0; i < items.length; i++){
    items[i].onclick = function(){
       fade(this, 1000);
    }
  }

  function activeItem() {
    this.classList.toggle("active");
  }

  this.setInterval(function() {
    var rnd = itemRand(0, items.length - 1);
    activeItem.call(items[rnd]);
  }, 500);

  function itemRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }
};
