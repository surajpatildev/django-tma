/*Reset password script*/
$(document).ready(function(){
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
	$('#submitbtn').click(function (){
		$('#loginjsploggingin').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> Logging in please wait....');
		var email=$('#loginjspemail').val();
		var password=$('#loginjsppassword').val();
		$.get('login',{
			email:email,password:password
		},function(res){
			
            if(res>0){
            	$('#loginjsploggingin').html('<h4>Login Succesful.</h4>');
            	$('#loginjsploggingin').addClass('text-success');
            	$('#loginjsploggingin').removeClass('text-danger');
            	window.location.replace('welcome.jsp');
            }else{
            	if(res<0){
            		$('#loginjsploggingin').html('<h4>Server Error! Please try again after some time.</h4>');
                	$('#loginjsploggingin').addClass('text-danger');
                	$('#loginjsploggingin').removeClass('text-success');
            	}else{
            	$('#loginjsploggingin').html('<h4>Invalid login id or password.</h4>');
            	$('#loginjsploggingin').addClass('text-danger');
            	$('#loginjsploggingin').removeClass('text-success');
            	}
            }
		});
	});	
	
	/**  login module script for navbar**/	
	$('#loginnav').click(function (){
		$('#loginnavloggingin').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> Logging in please wait....');
		var email=$('#loginnavemail').val();
		var password=$('#loginnavpassword').val();
		$.get('login',{
			email:email,password:password
		},function(res){
			
            if(res>0){
            	$(' #loginnavloggingin').html('<h4>Login Succesful.</h4>');
            	$('#loginnavloggingin').addClass('text-success');
            	$('#loginnavloggingin').removeClass('text-danger');
            	window.location.replace('welcome.jsp');
            }else{
            	if(res<0){
            		$('#loginnavloggingin').html('<h4>Server Error! Please try again after some time.</h4>');
                	$('#loginnavloggingin').addClass('text-danger');
                	$('#loginjsploggingin').removeClass('text-success');
            	}else{
            	$('#loginnavloggingin').html('<h4>Invalid login id or password.</h4>');
            	$('#loginnavloggingin').addClass('text-danger');
            	$('#loginnavloggingin').removeClass('text-success');
            	}
            }
		});
	});	
	
/***  Email availability*****/
	
	$('#emailid').change(function(){
		var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@gmail\.com$/;
		var email=$('#emailid').val();
	    if(regMail.test(email) == false)
	    {
	    $('#status').html("<span class='warning'>Email address is not valid yet.</span>");
	    }
	    else
	    {	
	    	$('#submitbtnsignup').removeAttr('disabled');
	    	$(' #status1').html(' ');
			$.get('emailcheck',{
				email:email
			},function(res){
				console.log(res);

	            if(res>0){
	            	$(' #status').html(' ');
	            	$('#status').addClass('text-success');
	            	$('#status').removeClass('text-danger');
	            }else{
	            	$('#status').html('Email already registerd!');
	            	$('#status').addClass('text-danger');
	            	$('#status').removeClass('text-success');
	            	$('#submitbtnsignup').attr('disabled','disabled');
	            }
			});
	    }
	    
	});
	$('#emailid1').change(function(){
		var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@gmail\.com$/;
		var email=$('#emailid1').val();
	    if(regMail.test(email) == false)
	    {
	    $('#status1').html("<span class='warning'>Email address is not valid yet.</span>");
	    }
	    else
	    {	$('#submitbtnsignup1').removeAttr('disabled');
	    	$(' #status1').html(' ');
			$.get('emailcheck',{
				email:email
			},function(res){
				console.log(res);

	            if(res>0){
	            	$(' #status1').html(' ');
	            	$('#status1').addClass('text-success');
	            	$('#status1').removeClass('text-danger');
	            }else{
	            	$('#status1').html('Email already registerd!');
	            	$('#status1').addClass('text-danger');
	            	$('#status1').removeClass('text-success');
	            	$('#submitbtnsignup1').attr('disabled','disabled');
	            }
			});
	    }
	    
	});
});




