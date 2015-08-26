var rootDir = 'material'

$(function() {
  
  //set up hash detection 
  $(window).bind( 'hashchange', function(e) {
  var hash = '';
  hash = location.hash;
  
  if (hash == '' && $(dialog).is(":visible"))
    close_dialog();
  else if (hash != ''){
    var placeId = hash.substring(1,hash.length)
    var dir = rootDir + '/' + placeId + '/';
    var title = '<h2>Título del lugar</h2>'
    document.getElementById("dialog_title").innerHTML = title
    var text =  '<p align="left">Texto informativo para el lugar.<br/></p>'//dir+'texto.txt');
    document.getElementById("dialog_text").innerHTML = text
    $('#dialog_img_src').attr("src",dir+placeId+'.png');
    $('#dialog_audio_src').attr("src",dir+placeId+'.mp3');
    $("#dialog_audio_player").load();
    
    
    open_dialog();
   /*hashwith = '#'+hash.substring(7, hashlenght);
   hash = location.hash.substring(7, hashlenght);
   if(hashwith != "#"+'index'){
   show_overlay(hash);
   document.title = 'Work '+hash;
   }
   else{
   close_overlay();
    
   }*/
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
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function open_dialog() {
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
  
  // Adding esc event
  $(document).on('keyup.esc',function(e) {if (e.keyCode == 27) /* escape key */
    close_dialog();
  });
}

