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
 /* while(true){
    this.console.log(Math.floor(Math.random() * (9 - 1 + 1) + 1));
  }*/
  var initTimer = window.setInterval(DiscoDiscoPartizani,500)
  function DiscoDiscoPartizani(){
    var randomNumber = Math.floor(Math.random() * 9);
    var allItems = this.document.querySelectorAll('div.item');
    if(allItems[randomNumber].classList.contains('active'))
    {
      this.document.querySelectorAll('div.item')[randomNumber].classList.remove('active');
    }else{
      this.document.querySelectorAll('div.item')[randomNumber].classList.add('active');
    }
    console.log(randomNumber)
  }
};
