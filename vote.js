
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
	$('.lightbox-link').click(function(){
		var imageURL = $(this).data("img-url");
		var image = $('#lightbox-image')
		image.attr('src', imageURL);
		centerImage(image);
		$('.lightbox-outer').show();
		var btnWidth = $(window).width() - 50;
		//close button
		$('.btn').css("margin-left", btnWidth).show();
		//right click disable
		window.oncontextmenu = function () {
   			return false;
		}
		$('.btn').click(function(){
			$('.lightbox-outer').hide();
			//right click enable
			window.oncontextmenu = function () {
   			return true;
		}
		})
	});
	function centerImage(picture){
		picture.load(function(){
			var page_height = $(window).height();
			console.log(page_height);
			var image_height = picture.height();
			console.log(image_height);
			var image_height_offset = (page_height - image_height)/2;
			picture.css("margin-top", image_height_offset);
		})
	}
	
}); // end doc ready 