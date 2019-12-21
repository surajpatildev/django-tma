$(document).ready(function(){
	$('#addques').click(function(){
		$('#addquestion').fadeIn();
		
	});
	
	$('#addaques').click(function(){
		$('#addresponse').html('<i class="fa fa-refresh" aria-hidden="true"></i>Adding Please Wait');
		var direction=$('#form_direction').val();
		var passage=$('#form_passage').val();
		var question=$('#question').val();
		var answer=$('#answer').val();
		var option1=$('#option1').val();
		var option2=$('#option2').val();
		var option3=$('#option3').val();
		var option4=$('#option4').val();
		$.get('add-question',{
			 direction:direction,passage:passage,question:question,answer:answer,option1:option1,
			 option2:option2,option3:option3,option4:option4,
		 },function(res){
			 $('#addresponse').html(res);
			 $('#addresponse').css('color','green');
			 $('#form_direction').val("");
			 $('#form_passage').val("");
			 $('#question').val("");
			 $('#answer').val("");
			 $('#option1').val("");
			 $('#option2').val("");
			 $('#option3').val("");
			 $('#option4').val("");
             }).fail(function() {
            	 $('#addresponse').html("Server Error");
             });
	});
	
	$('#addresponse').html('<i class="fa fa-refresh" aria-hidden="true"></i>Adding Please Wait');
});