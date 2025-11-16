$(document).ready(function() {
  // Инициализация первого слайдера
  const owl1 = $('.owl-carousel').eq(0);
  owl1.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    items: 3,
  });

  // Кнопки управления для первого слайдера
  $('.slider').eq(0).find('.btn_left').click(function() {
    owl1.trigger('prev.owl.carousel');
  });

  $('.slider').eq(0).find('.btn_right').click(function() {
    owl1.trigger('next.owl.carousel');
  });

  // Инициализация второго слайдера
  const owl2 = $('.owl-carousel').eq(1);
  owl2.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    items: 3,
  });

  // Кнопки управления для второго слайдера
  $('.slider').eq(1).find('.btn_left_1').click(function() {
    owl2.trigger('prev.owl.carousel');
  });

  $('.slider').eq(1).find('.btn_right_1').click(function() {
    owl2.trigger('next.owl.carousel');
  });


const owl3 = $('.owl-carousel').eq(2);
  owl3.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    items: 3,
  });

  $('.slider').eq(2).find('.btn_left_1').click(function() {
    owl3.trigger('prev.owl.carousel');
  });

  $('.slider').eq(2).find('.btn_right_1').click(function() {
    owl3.trigger('next.owl.carousel');
  });

  const owl4 = $('.owl-carousel').eq(3);
  owl4.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    items: 3,
  });

  $('.slider').eq(3).find('.btn_left_1').click(function() {
    owl4.trigger('prev.owl.carousel');
  });

  $('.slider').eq(3).find('.btn_right_1').click(function() {
    owl4.trigger('next.owl.carousel');
  });

  const owl5 = $('.owl-carousel').eq(4);
  owl5.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    items: 3,
  });

  $('.slider').eq(4).find('.btn_left_1').click(function() {
    owl5.trigger('prev.owl.carousel');
  });

  $('.slider').eq(4).find('.btn_right_1').click(function() {
    owl5.trigger('next.owl.carousel');
  });

  // карусель reviews
  const owl6 = $('.owl-carousel').eq(5);
  owl6.owlCarousel({
    center: true,
    loop: true,
    margin: 15,
    items: 3,
    autoplay: true,             // включить автоматическую прокрутку
    autoplayTimeout: 4000,      // задержка 3000 мс (3 секунды)
  });
});
//button gift
function gift_button(){
  alert("Какой подарок вы хотите?");
}

document.getElementById('host-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращает стандартное поведение отправки формы
  
  // Получаем значения полей
  var date = document.getElementById('date').value;
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;

  // Простейшая валидация (можете добавить свою)
  if (date && name && phone) {
      document.getElementById('response-message').innerHTML = 
          "Спасибо, " + name + "! Ваша заявка на " + date + " успешно отправлена.";
      
      // Очищаем поля формы
      document.getElementById('host-form').reset();
  } else {
      document.getElementById('response-message').innerHTML = 
          "Пожалуйста, заполните все поля.";
  }
});