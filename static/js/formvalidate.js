function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
$('document').ready(function(){
$('#pass2').keyup(function (){
    if($('#pass1').val() == $('#pass2').val()){
         $('#confirmMessage').html('Passwords Match');
        $('#pass2').css("background-color",'#66cc66');
        $('#confirmMessage').css("color",'#66cc66');
        $('#submitbtn').prop('disabled', false);
    }else{
        $('#pass2').css("background-color",'#ff6666');
        $('#confirmMessage').css("color",'#ff6666');
        $('#confirmMessage').html('Passwords Do Not Match!');
         $('#submitbtn').prop('disabled', true);
        }
});
 $('#pass22').keyup(function (){
    if($('#pass11').val() == $('#pass22').val()){
         $('#confirmMessage1').html('Passwords Match');
        $('#pass22').css("background-color",'#66cc66');
        $('#confirmMessage1').css("color",'#66cc66');
        $('#submitbtn1').prop('disabled', false);
    }else{
        $('#pass22').css("background-color",'#ff6666');
        $('#confirmMessage1').css("color",'#ff6666');
        $('#confirmMessage1').html('Passwords Do Not Match!');
         $('#submitbtn1').prop('disabled', true);
        }
});

    });