window.onload = function() {
  /*
    Пишем на чистом JS без сторонних библиотек типа jQuery :)

    ***** Исчезалка *******

    Надо написать функцию fade() в которую передается element DOM и время применения в секундах;
    Функция должна плавно скрывать елемент за отведенное время в секундах.

     Удачи!   
  */
  

  function fade(element, time){
    // Paste your code here...
  }


  var items = this.document.querySelectorAll(".item");

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