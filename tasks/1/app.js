window.onload = function() {
  /*
    Пишем на чистом JS без сторонних библиотек типа jQuery :)

    ***** Дискотека *******

    Надо чтобы  случайный елемент (items) менял свой цвет,
     методом присвоения и удаления класса active. 
     Сие действие должно происходить каждую секунду.
     Удачи!   
  */
  // Paste your code here:

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
