var rootDir = 'material'

$(function() {
  /*Load places to listen to*/
  $("#include_places").load("places.html")
  
  //set up hash detection 
  $(window).bind( 'hashchange', function(e) {
  var hash = '';
  hash = location.hash;
  
  if (hash == '' && $(dialog).is(":visible"))
    close_dialog();
  else if (hash != ''){
    var placeId = hash.substring(1,hash.length)
    
    var title = document.getElementById(placeId).getAttribute('data-title')
    document.getElementById("dialog_title").innerHTML = '<h2>' + title + '</h2>'
    
    var text = document.getElementById(placeId).getAttribute('data-descp')
    document.getElementById("dialog_text").innerHTML = '<p align="left">' + text + '</p>'
    
    var img_src = document.getElementById(placeId).getAttribute('data-img')
    $('#dialog_img_src').attr("src",img_src);
    var audio_src = document.getElementById(placeId).getAttribute('data-audio')
    $('#dialog_audio_player').attr("src",audio_src);
    $("#dialog_audio_player").load();
    
    open_dialog(title);
  }
});
 
 $(window).trigger( 'hashchange' );
  
  /*$(".places_lnk").each(
    function(){
      $(this).click( open_dialog )});*/
});


function close_dialog() {
  $(transbox).hide('slow')
  $(dialog).hide('slow')
  $(document).unbind('keyup.esc')
  
  // going back to mapa-sonoro.html:
  document.location.hash = ''
  //history.pushState("", document.title, window.location.pathname + window.location.search);
  
  document.title = "Bitácora sonora"
}

function open_dialog(title) {
  // unfocus and desactivate any other component
  document.getElementById("map_container").onclick=close_dialog
  
  // abrir diálogo
  
  // poner imagen de cargando
  
  // load data and media
  //dialog.css('position:');*/
  
  // Change web title
  //document.title += ;
  
  // Una vez cargadas las imágenes el texto y el audio, mostrar todo.
  $(transbox).show('slow')
  $(dialog).show('slow') 
  
  // Update site title
  document.title = "Bitácora Sonora" + ' - ' + title
  
  // Adding esc event
  $(document).on('keyup.esc',function(e) {if (e.keyCode == 27) /* escape key */
    close_dialog();
  });
}

