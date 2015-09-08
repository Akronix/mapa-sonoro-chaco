$(function() {
    
    /* At start up, center screen on stating point of the map */
    var wOffSet = $("#scrollable_container").width() / 2, hOffSet = $("#scrollable_container").height() / 2;
    document.getElementById("scrollable_container").scrollTop = 1400 - hOffSet;
    document.getElementById("scrollable_container").scrollLeft= 640 + wOffSet;
    
    
    //set up hash detection 
    $(window).bind( 'hashchange', function(e) {
    var hash = '';
    hash = location.hash;
    
    if (hash == '' && $(dialog).is(":visible"))
      close_dialog();
    else if (hash != ''){
      var placeId = hash.substring(1,hash.length) + '_lnk'
      
      var title = document.getElementById(placeId).getAttribute('data-title')
      document.getElementById("dialog_title").innerHTML = '<h2>' + title + '</h2>'
      
      var text_src = document.getElementById(placeId).getAttribute('data-descp')
      /*
       * jQuery.get(text_src, function(data) {
        document.getElementById("dialog_text").innerHTML = '<p align="left">' + data + '</p>';
      });
      */
      
      var img_src = document.getElementById(placeId).getAttribute('data-img')
      $('#dialog_img_src').attr("src",img_src);
      var audio_src = document.getElementById(placeId).getAttribute('data-audio')
      $('#dialog_audio_player').attr("src",audio_src);
      $("#dialog_audio_player").load();
      
      open_dialog(title);
    }
    
    $('#dialog_img').click(function() {
      var player = document.getElementById('dialog_audio_player')
      if (player.paused == false)
        player.pause();
      else
        player.play();
    });
    
  });
 
   $(window).trigger( 'hashchange' );
  
});


function close_dialog() {
  $(background_container).hide()
  $(dialog).hide('slow')
  $(document).unbind('keyup.esc')
  
  // going back to mapa-sonoro.html:
  document.location.hash = ''
  //history.pushState("", document.title, window.location.pathname + window.location.search);
  document.getElementById("dialog_audio_player").pause();
  document.title = "Bitácora sonora"
  
  $(scrollable_container).addClass("dragscroll")
  dragscroll.reset();
}

function open_dialog(title) {
  // unfocus and desactivate any other component
  document.getElementById("background_container").onclick=close_dialog
  // abrir diálogo
  
  // poner imagen de cargando
  
  $(scrollable_container).removeClass("dragscroll")
  
  // Una vez cargadas las imágenes el texto y el audio, mostrar todo.
  $(background_container).show()
  $(dialog).show('slow') 
  
  // Update site title
  document.title = "Bitácora Sonora" + ' - ' + title
  
  // Adding esc event
  $(document).on('keyup.esc',function(e) {if (e.keyCode == 27) /* escape key */
    close_dialog();
  });
}

