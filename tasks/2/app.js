window.onload = function() {
  /*
    Пишем на чистом JS без сторонних библиотек типа jQuery :)

    ***** Исчезалка *******

    Надо написать функцию fade() в которую передается element DOM и время применения в секундах;
    Функция должна плавно скрывать елемент за отведенное время в секундах.

     Удачи!   
  */
  var items = this.document.querySelectorAll(".item");
  var myTimer = 3330;
  items.forEach(el => {
    el.style.transition = "${myTimer}ms opacity, ${myTimer}ms height"
  });
  var trigger = this.document.querySelector('div.items')
  trigger.addEventListener('click',event =>{
    fade(items[itemRand(0,items.length -1)],myTimer)
  },false);
  function fade(element, time){
    // Paste your code here...
    element.style.opacity = 0;
    element.style.opacity = 0;
    setTimeout(() => {
    element.style.display = "none"
    }, time);
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
