$(document).ready(function(){
  $('.in_stories-list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
    {
    	breakpoint: 750,
    	settings: {
    		slidesToShow: 1
    	}
    }    	
    ]
  });

  $('.in_team-list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true
  });

  $('.in_works-list').slick({
  	dots: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

