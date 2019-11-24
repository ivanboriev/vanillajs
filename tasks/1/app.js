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
  var allItems = this.document.querySelectorAll('div.item');
  var initTimer = window.setInterval(DiscoDiscoPartizani,500)
  function DiscoDiscoPartizani(){
    var randomNumber = Math.floor(Math.random() * allItems.length);
    allItems[randomNumber].classList.toggle('active')
    console.log(randomNumber)
  }
 

};
