// écoute du click sur les élmts ayant la classe .nav-item
$(".nav-item").on("click", function(){
    //console.log(this);
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});


// animation du texte de titre qui s'affiche lettre après lettre
$(document).ready(function(){
    var arrTxt = $("#txt_anim").text().trim();//trim pour enlever les espaces avant et après le texte

    // vidage de la zone de texte au chargement
    $("#txt_anim").text("");

    for(let i=0; i<=arrTxt.length; i++){    
        setTimeout(function(){
            $("#txt_anim").append(arrTxt[i]);
        }, 300 * i);
    }
});
