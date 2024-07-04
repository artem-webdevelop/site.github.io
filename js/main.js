$(document).ready(function(){
	$('.top-slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight: true,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:false,
		speed:500,
		// easing:'ease',
		infinite:true,
		initialSlide:0,
		// autoplaySpeed:4000,
		fade:false,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		
		
		
		// ------------
        // для тачскринов прокрутка по єкрану пальцем
		swipe:true,
		// -------------
		
		// ------------
        // уменьшить расстояние свайпа 10,20
		touchThreshold: 5,
		// -------------
		
		// ------------
        // быстрая прокрутка на клацания стрелок и дотсов если false
		// и насколько бістро клик на стрелку,настолько бістро прокрутка
		waitForAnimate:true,
		// ------------- 
		
		// ------------
        //  во сколько рядов
		rows:1,
		// ------------- 
		
		// ------------
        //  во сколько рядов + строк
		slidesPerRow:1,
		// ------------- 
 
		// --------------------
		// если vertical:true, то в СSS меняем  display: block;
		// .slick-track{
		// 	display: block;
		// 	align-items: flex-start;
		// }
		vertical:false,
		// ----------------------
		
		// --------------------
		// чтобы прокрутка тоже была вертикальной
		verticalSwiping:false,
		// ----------------------
		

		

		
		
		
		
		responsive:[
			
			{
				breakpoint: 640,
				settings: {
					
				}
			},
		],
        // мобил фест меняет на мин-визд (с 550 будет 1 слайд до 768,а после 768 и далее будет 2 слайда) )
		mobileFirst:true, 
		
		// вынести стрелки в отдельный Div с классом .content
		// appendArrows:$('.content'),
		
		// вынести дотсы в отдельный Div с классом .content
		// appendDots:$('.content'),
         
		
	});

 
    // методы для создания элементов управления,но тогда нужно отключить arrows:false,
	$('.head__arr-left img').click(function(event){
		$('.top-slider').slick('slickPrev');
   });
	$('.head__arr-right img').click(function(event){
		$('.top-slider').slick('slickNext');
   });
    
   // методы для создания кнопок прокрутки и запустить и остановить слайдер.Нужно отключить autoplay:false,
	$('.link_play').click(function(event){
		$('.slider').slick('slickPlay');
   });
	$('.link_pause').click(function(event){
		$('.slider').slick('slickPause');
   });

   

});

// https://kenwheeler.github.io/slick/ - документация по слайдеру слик

/* Слайдер */
// .slick-slider{}
// /* Слайдер запущен */
// .slick-slider.slick-initialized{}
// /* Слайдер с точками */
// .slick-slider.slick-dotted{}
// /* Ограничивающая оболочка */
// .slick-list {}
// /* Лента слайдов */
// .slick-track{}
// /* Слайд */
// .slick-slide{}
// /* Слайд активный (показывается) */
// .slick-slide.slick-active{}
// /* Слайд основной */
// .slick-slide.slick-current{}
// /* Слайд по центру */
// .slick-slide.slick-center{}
// /* Клонированный слайд */
// .slick-slide.slick-cloned{}
// /* Стрелка */
// .slick-arrow{}
// /* Стрелка влево */
// .slick-arrow.slick-prev{}
// /* Стрелка вправо */
// .slick-arrow.slick-next{}
// /* Стрелка не активная */
// .slick-arrow.slick-disabled{}
// /* Точки (булиты) */
// .slick-dots{}
// .slick-dots li{}
// /* Активная точка */
// .slick-dots li.slick-active{}
// /* Элемент точки */
// .slick-dots li button{}