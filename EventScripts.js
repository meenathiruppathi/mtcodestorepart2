
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
  
  // events
  
  $("p").click(function(){
  $(this).hide("slow");
});


$("p").dblclick(function(){
  $(this).hide();
});

$("#test").mouseenter(function(){
  $(this).css("background-color", "#cccccc");
});

$("#test").mouseleave(function(){
  $(this).css("background-color", "yellow");
});

$("#test").mousedown(function(){
  $(this).css("background-color", "pink");
});


$("#test").mouseup(function(){
   $(this).css("background-color", "blue");
});


$("#test").hover(function(){
  $(this).css("background-color", "orange");
},
function(){
 // alert("Bye! You now leave test!");
});

$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});


$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});


$("p").on("click", function(){
  $(this).hide();
});




$("p").on({mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});


$("input").keydown(function(){
  $("input").css("background-color", "yellow");
});

$("form").submit(function(){
  alert("Submitted Sucessfully");
});
$("input").change(function(){
  alert("The text has been changed.");
});












});

