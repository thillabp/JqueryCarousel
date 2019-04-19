$(function(){
    
    $('#carousel img:eq(0)').addClass('ativo').show();
    let legenda = $('.ativo').attr('alt');
    $('#carousel').prepend("<p>" + legenda + "</p>");
    setInterval(slider,3500);
    
    function slider(){
        if($('.ativo').next().length){
             $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');
            
        }else{
            $('.ativo').fadeOut().removeClass('ativo');
            $('#carousel img:eq(0)').fadeIn().addClass('ativo');
            
        }
        
        let legenda = $('.ativo').attr('alt');
        $('#carousel p').hide().html(legenda).delay(200).fadeIn();
    }
    
    
});
 

