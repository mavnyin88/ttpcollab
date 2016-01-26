
$(document).ready(function(){
	var resultA = 43;
	var resultB = 20;
	var resultC = 33;
	var resultD = 11;
	total = resultA + resultB + resultC + resultD;
	

	
	
	$("form").submit(function(event){
		event.preventDefault();
		// var user = $("#user").val();
		// var email = $("#email").val();
		


		var result = $("select option:selected").html();
		console.log(result);
		if(result==="a"){
			resultA++;
		}else if(result==="b"){
			resultB++;
		}else if(result==="c"){
			resultC++;
		}else if(result==="d"){
			resultD++;
		}else{
			alert("Error");
		}
		

		total = resultA + resultB + resultC + resultD;
		console.log(resultA);
		console.log(resultB);
		console.log(resultC);
		console.log(resultD);
		console.log(total);
		console.log(resultA/total);
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
		$("#result1").html("result of a: " + (resultA/total*100).toFixed(2) +"%");
		$("#result2").html("result of b: " + (resultB/total*100).toFixed(2) +"%");
		$("#result3").html("result of c: " + (resultC/total*100).toFixed(2) +"%");
		$("#result4").html("result of d: " + (resultD/total*100).toFixed(2) +"%");
		
	})
	$("#btn1").click(function(){
		$(".showResult").css("display", "block");
	})
	
	

	
});
