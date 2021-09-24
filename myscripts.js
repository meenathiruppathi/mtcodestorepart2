
// jquery selectors

$(document).ready(function(){
	alert('hlo');
  $("#button").click(function(){
    $("#test").hide();
	$(".newclass").hide();
	$("p:first").hide();
	// $("p:last").append('This is last p tag div);
	//$('div').append('This is div.);
	 $(this).css("backgroundColor", "grey");
	  $("text").hide();
	  $("file").hide();
  });
  
  
  $("#fbutton").click(function(){
    $("#test").show();
	$(".newclass").show();
	$("p:first").show();
	// $("p:last").append('This is last p tag div);
	//$('div').append('This is div.);
	 $(this).css("backgroundColor", "Red");
	 var element;
	     element=  document.querySelector(".newclass");
		// element.innerHTML="change in content";
		// element="hey";
		// alert(element);
		
 $(":text").show();
	  $(":file").show();
 
	 
  });
  
  
  
  
  
  
  
  
  
  
  
  
});