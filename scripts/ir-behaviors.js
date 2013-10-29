// JavaScript Document
$(function() {
	

	 $('.ttoggle').click(function() {
		 $(this).find('.expand, .collapse').toggleClass('hide');
    });
	
	 $('.ttoggle1').click(function() {
		 $(this).find('.expand, .collapse').toggleClass('hide');
    });
	
	// Toggle Scratch Pad table deatils
	
	$('.detail').click(function() {
		
   		 $(this)
   		.text( ($(this).text() == 'show detail' ? 'hide detail' : 'show detail') )
   		.toggleClass("hidedetail");
		$(this).parent('td').find('.modelsgrid').fadeToggle("slow");
	});
	
	// Toggle for FAID detail
	
	$(".faid-toggle").click(function(){
		$(this).find('.icon-plus, .icon-minus').toggleClass('hide');
		$(".faid-detail").slideToggle("slow");
		$(this).toggleClass("active"); return false;
		
	}); 
	
	// Toggle for alerts flap
	$(".ttoggle.flap").click(function(){
		$(".alerts-detail").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	}); 
	
	
	// Delete Row
	$(".icon-Delete").on("click",function() {
        var tr = $(this).closest('tr');
        tr.css("background-color","#ffa68e");

        tr.fadeOut(400, function(){
            tr.remove();
        });
      return false;
    });

	// Toggle for Target ammount
	$(".targtoggle").click(function(){
		$(this).toggleClass("percent"); return false;
	}); 
	
	// Toggle for Chart-table view
	$(".charttoggle").click(function(){
		$(this).toggleClass("chart"); return false;
	}); 
	
	// Scratch Pad
	
	$('.empty').click(function() {
		$(this).text("  Securities added");
		$(this).removeClass("empty").addClass("full ephemeral icon_spfull_container icon-sp_full");
		 window.setInterval(ephemeral, 2000);
		 });
		
		 function ephemeral() {
			 $('.full').removeClass("ephemeral")
		 }
		 

});