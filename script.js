$(document).ready(function(){

$("#summer").hide();
$("#winter").hide();
$("#summer").fadeIn(2000);
$("#winter").fadeIn(2000);

$("#summer").click(function(){
  $(".text1").hide();
  $(".text2").hide();
  $(".text3").hide();
  $(".text4").hide();
  $(".text5").hide();
  $(".text6").hide();
  $(".text7").hide();
  $(".text8").hide();

    $("#profil").hide();
  $("#profil").fadeIn(1000);

    $("#profil").html(
'<div class="row menu2">'+
  '<div class="box boxp1 col-xs-12 col-sm-6">'+
    '<div id="p1">'+
      '<div class="rowcat row">'+
        '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
        '<img class="img" src="img/clim.png" alt="clim">'+
        '</div>'+
        '<div class="txtcat1 col-xs-12 col-sm-12 col-md-8">'+
          '<h3>Climatisation</h3>'+
          '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
          '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
          '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
          '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
          '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
    '<div class="text1"></div>'+
  '</div>'+

  '<div class="box boxp2 col-xs-12 col-sm-6">'+
    '<div id="p2">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/techno.png" alt="electronique">'+
      '</div>'+
      '<div class="txtcat2 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Electroménager / Multimédias</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text2"></div>'+
  '</div>'+

  '<div class="box boxp3 col-xs-12 col-sm-6">'+
    '<div id="p3">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/piscine.jpg" alt="piscine">'+
      '</div>'+
      '<div class="txtcat3 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Piscine</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text3"></div>'+
  '</div>'+

  '<div class="box boxp4 col-xs-12 col-sm-6">'+
    '<div id="p4">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/light.png" alt="clim">'+
      '</div>'+
      '<div class="txtcat4 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Autres Conseils</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text4"></div>'+
  '</div>'+

  '</div>'
);
});


$("#winter").click(function(){
  $(".text1").hide();
  $(".text2").hide();
  $(".text3").hide();
  $(".text4").hide();
  $(".text5").hide();
  $(".text6").hide();
  $(".text7").hide();
  $(".text8").hide();


    $("#profil").hide();
    $("#profil").fadeIn(1000);

    $("#profil").html(
'<div class="row menu2">'+
  '<div class="box boxp5 col-xs-12 col-sm-6">'+
    '<div id="p5">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/chauffage.jpg" alt="clim">'+
      '</div>'+
      '<div class="txtcat1 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Chauffage</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text5"></div>'+
  '</div>'+

  '<div class="box boxp6 col-xs-12 col-sm-6">'+
    '<div id="p6">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/techno.png" alt="electronique">'+
      '</div>'+
      '<div class="txtcat2 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Electroménager / Multimédias</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text6"></div>'+
  '</div>'+

  '<div class="box boxp7 col-xs-12 col-sm-6">'+
    '<div id="p7">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/eau.jpg" alt="chauffe-eau">'+
      '</div>'+
      '<div class="txtcat3 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Chauffe-eau</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text7"></div>'+
  '</div>'+

  '<div class="box boxp8 col-xs-12 col-sm-6">'+
    '<div id="p8">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/light.png" alt="clim">'+
      '</div>'+
      '<div class="txtcat4 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Autres conseils</h3>'+
        '<p>bah i viur i iuiuv veivieviev ivbefibve iu ei</p>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text8"></div>'+
  '</div>'+

  '</div>'
);
});

$("#profil").delegate("#p1", "click", function(){
  $(".text1").toggle(500);
    $(".text1").html(

      '<p>conseil 1-1</p>'+
      '<p>conseil 1-2</p>'+
      '<p>conseil 1-2</p>'
    );
  });

  $("#profil").delegate("#p2", "click", function(){
    $(".text2").toggle(500);
      $(".text2").html(

        '<p>conseil 2-1</p>'+
        '<p>conseil 2-2</p>'+
        '<p>conseil 2-3</p>'
      );
    });

    $("#profil").delegate("#p3", "click", function(){
      $(".text3").toggle(500);
        $(".text3").html(

          '<p>conseil 3-1</p>'+
          '<p>conseil 3-2</p>'+
          '<p>conseil 3-3</p>'
        );
      });

      $("#profil").delegate("#p4", "click", function(){
        $(".text4").toggle(500);
          $(".text4").html(

            '<p>conseil 4-1</p>'+
            '<p>conseil 4-2</p>'+
            '<p>conseil 4-3</p>'
          );
        });

        $("#profil").delegate("#p5", "click", function(){
          $(".text5").toggle(500);
            $(".text5").html(

              '<p>conseil 5-1</p>'+
              '<p>conseil 5-2</p>'+
              '<p>conseil 5-3</p>'
            );
          });

          $("#profil").delegate("#p6", "click", function(){
            $(".text6").toggle(500);
              $(".text6").html(

                '<p>conseil 6-1</p>'+
                '<p>conseil 6-2</p>'+
                '<p>conseil 6-3</p>'
              );
            });

            $("#profil").delegate("#p7", "click", function(){
              $(".text7").toggle(500);
                $(".text7").html(

                  '<p>conseil 7-1</p>'+
                  '<p>conseil 7-2</p>'+
                  '<p>conseil 7-3</p>'
                );
              });

              $("#profil").delegate("#p8", "click", function(){
                $(".text8").toggle(500);
                  $(".text8").html(

                    '<p>conseil 8-1</p>'+
                    '<p>conseil 8-2</p>'+
                    '<p>conseil 8-3</p>'
                  );
                });
});
