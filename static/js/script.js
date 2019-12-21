/*Reset password script*/
$(document).ready(function(){
	alert('hii');
	$('#resetbtnconfirm').hide();
	$('#resetbtn').click(function(){
		$('#errtextreset').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> Loading please wait....');
		$.get('resetpassreq',{
			mob:$('#mob').val(),resetemail:$('#resetemail').val()
		},function(res){
			
            if(res>0){
            	
            	$('#resetpassdiv').html('<h2 class="text-center">Enter your new Password.</h2>'+
                  '<p id="errtextpass"></p>'+
                  '<div class="panel-body"><div class="form-group">'+
                  '<div class="input-group">'+
                  '<span class="input-group-addon"><i class="glyphicon glyphicon-lock color-blue"></i></span>'+
                  '<input id="resetpass1" name="resetpass1" placeholder="Enter a New Password" required class="form-control" value="" autocomplete="off" type="password">'+
                  '</div><br>'+
                  '<div class="input-group">'+
                  '<span class="input-group-addon"><i class="glyphicon glyphicon-lock color-blue"></i></span>'+
                  '<input id="resetpass2" name="resetpass2" placeholder="Enter Password Again" required class="form-control" value="" autocomplete="off" type="password">'+
                  '</div>'+
                  '<br> </div></div>');
            	$('#resetbtn').hide();
            	$('#resetbtnconfirm').show();
            }else{
            	$('#errtextreset').html('<h4>invalid email id or mobile number.</h4>');
            	$('#errtextreset').removeClass('text-success');
            	$('#errtextreset').addClass('text-danger');
            } 
            });
	});
		$('#resetbtnconfirm').click(function(){
			$('#errtextpass').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> Loading please wait....');
			if($('#resetpass1').val()=="" && $('#resetpass2').val()==""){
				$('#errtextpass').html('Please enter the password.');
     			$('#errtextpass').removeClass('text-success');
	             	$('#errtextpass').addClass('text-danger');
			}else{
			if($('#resetpass1').val()==$('#resetpass2').val()){
				$.get('resetpassword',{
					password:$('#resetpass1').val()
				},function(res){
	                 console.log(res);
	                 if(res>0){
	                 $('#errtextpass').html('<h4>Password changed succesfully.</h4>');
	             	$('#errtextpass').addClass('text-success');
	             	$('#errtextpass').removeClass('text-danger');
	                 }else{if(res<0){
	                	 window.location.replace("resetpassword.jsp");
	 	             	
	                 		}else{
	                 			$('#errtextpass').html('Error Occured please try again later.');
	                 			$('#errtextpass').removeClass('text-success');
	    	 	             	$('#errtextpass').addClass('text-danger');
	                 		}
	                 }
	                  });
			}else{
				$('#errtextpass').html('<h4>Passwords do not match.</h4>');
            	$('#errtextpass').addClass('text-danger');
			}
			}
			});	
		/**  login module script**/	
	$('#sumbitbtn').click(function (){
		$('#errtextpass').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> Logging in please wait....');
		var email=$('#loginjspemail').val();
		var pass=$('#loginjsppass').val();
		$.get('resetpassreq',{
			mob:$('#mob').val(),resetemail:$('#resetemail').val()
		},function(res){
			console.log(res);
			
            if(res>0){
            	$('#loginjsploggingin').html('<h4>Login Succesful.</h4>');
            	$('#loginjsploggingin').addClass('text-success');
            	$('#loginjsploggingin').removeClass('text-danger');
            }else{
            	$('#loginjsploggingin').html('<h4>Invalid login id or password.</h4>');
            	$('#loginjsploggingin').addClass('text-danger');
            	$('#loginjsploggingin').removeClass('text-success');
            }
		});
	});	
		
});




