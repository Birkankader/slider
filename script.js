$(function(){
	var i=1;
	$("#r1").show();
	$("#r2").hide();
	$("#r3").hide()
	$("#r4").hide();
	$("#r5").hide();
	$("#right_button").click(function(){
		if(i==5){
			$("#r"+i).hide();
			 i=0;		
		 }
		$("#r"+i).hide();
		var a=i+1;
		$("#r"+a).show();
		 i++;	
	});
	
	$("#left_button").click(function(){
		if(i==1){
			$("#r"+i).hide();
			 i=6;		
		 }
		$("#r"+i).hide();
		var a=i-1;
		$("#r"+a).show();
		i--;
		
	});	
});