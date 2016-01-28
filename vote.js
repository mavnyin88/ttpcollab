
$(document).ready(function(){

	var resultA = 42;
	var resultB = 18;
	var resultC = 31;
	var resultD = 9;
	total = resultA + resultB + resultC + resultD;
	event.preventDefault();

	$("form").submit(function(event){
		event.preventDefault();
		$("#thanksDis").html("<br> THANKS FOR YOUR VOTE <br> TO VIEW RESULTS CLICK BELOW");
		var result = $("select option:selected").html();
		console.log(result);
		if(result==="Hillary Clinton"){
			resultA++;
		}else if(result==="Bernie Sanders"){
			resultB++;
		}else if(result==="Donald Trump"){
			resultC++;
		}else if(result==="Ted Cruz"){
			resultD++;
		}else{
			alert("Error");
		}
		total = resultA + resultB + resultC + resultD;
		var a = (resultA/total*100).toFixed(0)*2;
		a = a.toString();
		$(".bar1").css("width", a);
		var b = (resultB/total*100).toFixed(0)*2;
		b = b.toString();
		$(".bar2").css("width", b);
		var c = (resultC/total*100).toFixed(0)*2;
		c = c.toString();
		$(".bar3").css("width", c);
		var d = (resultD/total*100).toFixed(0)*2;
		d = d.toString();
		$(".bar4").css("width", d);
		$("#result1").html("Result of Hillary Clinton: " + (resultA/total*100).toFixed(2) +"%");
		$("#result2").html("Result of Bernie Sanders: " + (resultB/total*100).toFixed(2) +"%");
		$("#result3").html("Result of Donald Trump: " + (resultC/total*100).toFixed(2) +"%");
		$("#result4").html("Result of Ted Cruz: " + (resultD/total*100).toFixed(2) +"%");		
	}) // end form/submit

	

	$("#btn1").click(function(){
		$(".showResult").css("display", "block");
		$("#thanksDis").css("display","none");
	})

	var windowWidth = window.innerWidth/20;
	windowWidth = windowWidth.toString()+"px";
	console.log(windowWidth);
	$(".centerHeader").css("font-size", windowWidth);
	
	
}); // end doc ready 