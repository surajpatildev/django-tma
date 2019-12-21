var json = null;
            var r=0;
            var a=0;
            var ans={};
            var ansop={};
            var cansop={};
            var score=0;
            var cans={};
        $(document).ready(function(){
        	
             $('#submit').hide();
             $('#questionset').hide();
          $('#begin').click(function(){
        	$('#loading').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> Loading please wait....');
        	  $.get('sample',{},function(arrayOfObjects){
                  json= jQuery.parseJSON(arrayOfObjects);
                  $('#instructions').hide();
                  $('#questionset').show();
                  renderQues(0);
                  }).fail(function() {
                	  $('#instructions').html('<br><br><br><h2 class="text-danger text-center" style="font-family:monochrome">Error occured<br> please try after some time..</h2>'+
                			  '<br><h2 class="text-primary text-center" style="font-family:monochrome">Click the link below to Register or Login</h2>'
                			  +'<button type="button" class="btn btn-link btn-info btn-lg"'+
                             ' data-toggle="modal" data-target="#myModalSignUp">'+
                              '<span class="glyphicon glyphicon-user"></span> Sign Up'+
                         ' </button>'+
                         '<button type="button" class="btn btn-link btn-info btn-lg"'+
                                   ' data-toggle="modal" data-target="#myModalLogIn">'+
                                    '<span class="glyphicon glyphicon-log-in"></span> Login'+
                                '</button>');
                  });
          });
            
            $('#next').click(function(){
                    r++;
                    a=r-1;
                if($('input:radio[name=choice]:checked').val()==undefined) ans[a]=0;
		else ans[a]=$('input:radio[name=choice]:checked').val();
                renderQues(r);
                if(ans[a]==cans[a]) score =parseInt(score)+1; 
                ansop[a]=getOption(ans[a]);
                cansop[a]=getOption(cans[a]);
                if(a==13){
                    $('#next').remove();
                    $('#submit').show();
                }
            });
        $('#submit').click(function (){
             r++;
                    a=r-1;
                if($('input:radio[name=choice]:checked').val()==undefined) ans[a]=0;
		else ans[a]=$('input:radio[name=choice]:checked').val();
            if(ans[a]==cans[a]) score =parseInt(score)+1;
            ansop[a]=getOption(ans[a]);
            cansop[a]=getOption(cans[a]);
            $('#questionset').html('<h1>Congratulatios The test is completed</h1>'+
    '<p>You have got <b>'+score+'</b> out of 15 marks.<br>The deatiled result summary is given below.'+
    '<br>Practicing our Tests will make you score better in any competitive exams.'+
    'Sign Up by clicking the link below and enjoy our unlimited free services.</p>'+
    '<a href="signup.jsp"><button type="button" class="btn btn-link btn-info btn-lg"'+
                                   ' <span class="glyphicon glyphicon-user"></span> Sign Up'+
                                '</button></a> OR'+ 
    '<a href="login.jsp"><button type="button" class="btn btn-link btn-info btn-lg"'+
                                    '<span class="glyphicon glyphicon-log-in"></span> Login'+
                                '</button></a>'+
          '<div class="row">'+
        '<div class="panel panel-primary filterable resulttable">'+
            '<div class="panel-heading">'+
                '<h3 class="panel-title" >Result Summary.</h3>'+
            '</div>'+
            '<table class="table">'+
                '<thead>'+
                   '<tr class="filters">'+
                      '<th class="col-lg-1 col-md-1 text-center"><input type="text" class="form-control" placeholder="No." disabled></th>'+
                        '<th class="col-lg-6 col-md-6 "><input type="text" class="form-control" placeholder="Question" disabled></th>'+
                        '<th class="text-center"><input type="text" class="form-control" placeholder="Your Answer" disabled></th>'+
                        '<th class="text-center"><input type="text" class="form-control" placeholder="Correct Answer" disabled></th>'+
                        '<th class="col-lg-1 col-md-1 text-center"><input type="text" class="form-control" placeholder="#" disabled></th>'+
                    '</tr>'+
                    '</thead>'+
                '<tbody id="results">'+
                '</tbody>'+
                '</table>'+
        '</div></div><!--row ends-->');
            for(var opp=0;opp<15;opp++){
            	$('#results').append('<tr>'+
            			'<td class="col-lg-1 col-md-1 text-center">'+(opp+1)+'</td>'+              
                        '<td class="col-lg-6">'+json[opp].question+'</td>'+
                        '<td class="text-center">'+ansop[opp]+'</td>'+
                        '<td class="text-center">'+cansop[opp]+'</td>'+
                        '<td class="col-lg-1 col-md-1 text-center" id="correctornot'+opp+'"></td>'+
                        '</tr>');
            	if(ans[opp]==cans[opp]){
            		$('#correctornot'+opp).html('<span class="glyphicon glyphicon-ok text-success"></span>');
            	}
            	else{
            		$('#correctornot'+opp).html('<span class="glyphicon glyphicon-remove text-danger"></span>');
            	}
            }
            
        });
       
            
}); 	
 function renderQues(i){
    var object = json[i];
     
                cans[r]=object.answer;
                var q={}
                if(object.direction==undefined) q.dir="<br><br>";
		          else  q.dir=object.direction;;
                $('#qid').html(r+1);
                $('#direction').html('<p>'+q.dir+'<p>');
                $('#question').html(object.question);
                $('#op1').html('<th scope="row" class="choice"><input type="radio" name="choice" id="option1" value="1"></th><td><label for="option1">'+object.option_1+'</label></td>');
                $('#op2').html('<th scope="row" class="choice"><input type="radio" name="choice" id="option2" value="2"></th><td><label for="option2">'+object.option_2+'</label></td>');
                $('#op3').html('<th scope="row" class="choice"><input type="radio" name="choice" id="option3" value="3"></th><td><label for="option3">'+object.option_3+'</label></td>');
                $('#op4').html('<th scope="row" class="choice"><input type="radio" name="choice" id="option4" value="4"></th><td><label for="option">'+object.option_4+'</label></td>');
}       
            
            
 function getOption(op){
 if(op==1) 
     return json[a].option_1;  
 if(op==2)
 	return json[a].option_2;
 if(op==3)
 	return json[a].option_3; 
if(op==4)
 	return json[a].option_4; 
 else
 	return "-";
 }