$(document).ready(function(){
    $(".password__visible").on("click", function() {
        if ($(this).hasClass('password__visible--hide')) {
            $(this).removeClass("password__visible--hide");
            $(this).addClass("password__visible--show");
            $(this).siblings('input').attr('type', 'text');
        }
        else if ($(this).hasClass('password__visible--show')) {
            $(this).removeClass("password__visible--show");
            $(this).addClass("password__visible--hide");
            $(this).siblings('input').attr('type', 'password');
        }
    })
});