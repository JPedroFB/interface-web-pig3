$('.tabela-dados').on('click', function(){
    $(this).next('.tabela-mais-dados,.tabela-mais-dados p').slideToggle(100)
})

/* MENU LATERAL */

var estadoMenu = true;

$('#icon-menu').on('click', function(){

    if(!estadoMenu){
        $("#menu-lateral").css({"width":"70px"})
        $("#view").css({"padding-left":"80px"})
        $('#icon-menu').css({"transform":"scale(1.0)"})
        $('#menu-lateral p').hide()
        estadoMenu = !false;
    }else{
        $("#menu-lateral").css({"width":"200px"})
        $("#view").css({"padding-left":"210px"})
        $('#icon-menu').css({"transform":"scale(0.7)"})
        $('#menu-lateral p').show()
        estadoMenu = !true;
    }
})

/* MENU LATERAL FIM*/