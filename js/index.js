$(document).ready(function() {

	$('.green').click(function(){

       $('#slider').animate({
	      left: "-="+($('#viewer').width()+100) /*100 = margin right on curved_box*/ 
       },500);
        
    });

	$('.grey').click(function(){

       $(this).closest('.curved_box').animate({
       	  marginTop: "-="+($('#viewer').height()),
	      opacity: 0.1 
       },900).next().hide();
        
    });

});