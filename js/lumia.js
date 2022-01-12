
// setting auto padding top to body //
$('body').css('padding-top', $('.header').innerHeight())

// add class active to nav items 

$('.nav-item').on('click',function  () {
	$('.nav-item').removeClass('active');
	$(this).addClass('active')

})
/******* progress bar animation ******/
$(document).ready(function  () {
	$('.header nav li a').click(function  (e) {
		e.preventDefault()
		$('body,html').animate({
			scrollTop : $($(this).data('link')).offset().top
		},600)

	})





	if ( $(window).scrollTop() >= $('.experience-progress').offset().top - 450 ) {


		$('.exp-prog span').each(function () {
			$(this).animate({

				width : $(this).data('progress')

			},1000)

		})

	}
	var L = 3 ;
	/* progress bar animatiob ****/
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= $('.experience-progress').offset().top - 450 ){


			$('.exp-prog span').each(function () {
				$(this).animate({

					width : $(this).data('progress')

				},1000)

			})

		}
		if( $(window).scrollTop() > ($('.feats').offset().top -500 ) && L == 3 ){
			L = 4;
			$('.timer').countTo();
		}
		
		/* shows arrow btn up */
		if ($(window).scrollTop() >= 100){

			$('.arrow-top').fadeIn(500)
		}else{

			$('.arrow-top').fadeOut(500)
		}


	});

})
$('.portfolio-works .menu li a').on('click',function (e) {
	var selected = $(this).data('selected');
	e.preventDefault()
	$('.portfolio-works .menu li a').removeClass('active')
	$(this).addClass('active')

	$('.portif-work-content .row').isotope({
		filter : selected

	})
	return false

})
$('.portif-work-content .row').isotope({
	itemSelector:'.ss',
	layoutMode: 'fitRows'
})



$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		margin : 40 ,
		autoplay:true,
		autoplayTimeout:5000,
		stagePadding :20,
		rewind:true,
		loop:true,
		items:3,

		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	var placeholderItrr = '';
	$('[placeholder]').focus(function () {

		placeholderItrr= $(this).attr('placeholder')


		$(this).attr('placeholder','')


	})
	$('[placeholder]').blur(function () {

		$(this).attr('placeholder',placeholderItrr)


	});

	/*  arrow btn animates to up */
	$('.arrow-top').on('click',function () {
		$('body,html').animate({
			scrollTop : 0	})


	})

});





