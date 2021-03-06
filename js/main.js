$('.small-image img').click(function(){
    var image = $(this).attr('src');
    $('.big-image img').attr('src', image);
});
$('#zoom').imagezoomsl();