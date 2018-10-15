// écoute du click sur les élmts ayant la classe .nav-item
$(".nav-item").on("click", function(){
    //console.log(this);
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});

