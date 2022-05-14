$(document).ready(function(){

    $('#add').click(function(){
        $('.ficha:first-of-type').clone().appendTo('#list');
        var fichas = $('.ficha').length;
        if(fichas > 1){
            $('#delete').removeClass('disabled');
        }
    });

    $('#delete').click(function(){
        $('.ficha:last-of-type').remove(); 
        var fichas = $('.ficha').length;
        if(fichas == 1){
            $(this).addClass('disabled');
        }
    });
  });
  