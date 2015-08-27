$(function() {
 /*
  <a class="place_lnk" href="#%cod%" id="%cod%" data-title="%titulo%" data-descp="material/descripciones/%nombre%.txt" data-img="material/imagenes/%nombre%.png" data-audio="material/MP3/%nombre%.mp3">
    <img src="material/imagenes/%nombre%.png" alt="%titulo%" class="place hvr-grow" style="left: px; top: px" />
  </a>
  */
  
  var places = [
    {"cod": "01", "title":"palmeras", "name":"01", "lat":100,"long":100},
    {"cod": "1A", "title":"Torturas", "name":"1A_TORTURAS", "lat":400,"long":200},
    {"cod": "1B", "title":"Chamamé", "name":"1B_CHAMAMÉ", "lat":450,"long":508},
    {"cod": "2A", "title":"Ambiente Musical Auto", "name":"2A_AMBIENTE_MUSICAL_AUTO_2", "lat":360,"long":400}
    {"cod": "2B", "title":"Juan Carlos Cosmovisión", "name":"2B_JUANCARLOS_(Agus)COSMOVISIÓN", "lat":360,"long":400}
    {"cod": "2C", "title":"N'VIKÉ", "name":"2C_N'VIKÉ", "lat":360,"long":400}
    {"cod": "3A", "title":"3A Pedro Valquinta", "name":"3A_PEDRO_VALQUINTA", "lat":360,"long":400}
    {"cod": "3B", "title":"Avia Terai", "name":"3B_AVIA_TERAI", "lat":360,"long":400}
    {"cod": "4A", "title":"Niños Pampa largo", "name":"4A_NIÑOS_PAMPA_largo", "lat":360,"long":400}
    {"cod": "4B", "title":"Vacas Pampa corto", "name":"4B_VACAS_PAMPA_corto", "lat":360,"long":400}
    {"cod": "5A", "name":"5A_CONFESIÓN_ROCA", "title":"Confesión Roca", "lat":360,"long":400}
    {"cod": "5B", "name":"5B_ROSY", "title":"Rosy", "lat":360,"long":400}
    {"cod": "6A", "name":"6A_AMANECER_RIO_BERMEJITO", "title":"Amanecer río Bermejito", "lat":360,"long":400}
    {"cod": "6B", "name":"6B_CRISTO_REDENTOR_RICARDO", "title":"Cristo Redentor Ricardo", "lat":360,"long":400}
    {"cod": "6C", "name":"6C_GENOCIDIO_NO_TERMINADO", "title":"Genocidio no terminado", "lat":360,"long":400}
    {"cod": "7A", "name":"7A_AUTO_DESATASCADO", "title":"Auto desatascado", "lat":360,"long":400}
    {"cod": "7B", "name":"7B_CHICHO_GIMÉNEZ_INTENDENTE", "title":"Chicho Giménez intendente", "lat":360,"long":400}
    {"cod": "7C", "name":"7C_OVEJAS_NUEVA_POMPEYA", "title":"Ovejas Nueva Pompeya", "lat":360,"long":400}
    {"cod": "8A", "name":"8A_INDIO_TOBA", "title":"Indio Toba", "lat":360,"long":400}
    {"cod": "8B", "name":"8B_PERROS", "title":"Perros", "lat":360,"long":400}
    {"cod": "10A", "name":"10A_TARTAGAL", "title":"Tartagal", "lat":360,"long":400}
    {"cod": "11A", "name":"11A_FRONTERA", "title":"Frontera", "lat":360,"long":400}
    {"cod": "12A", "name":"12A_CREPITAR_OLLA", "title":"Crepitar olla", "lat":360,"long":400}
    {"cod": "12B", "name": "12B_CHACARERA_CON_VACAS", "title": "chacarera con vacas", "lat":820,"long":971}
    {"cod": "12C", "name": "12C_MENONITAS", "title": "Menonitas", "lat":355,"long":643}
    {"cod": "13A", "name": "13A_MILITARES_ESCONBOL", "title": "Militares Esconbol", "lat":262,"long":965}
    {"cod": "13B", "name": "13B_PLANTAS_REPSOL", "title": "Plantas repsol", "lat":523,"long":281}
    {"cod": "14A", "name": "14A_PIEDRAS_RIO", "title": "piedras río", "lat":505,"long":326}
    {"cod": "15B", "name": "15B_PUENTE_(GUERRA_CHACO)", "title":"puente (guerra chaco)", "lat":858,"long":142}
    {"cod": "16A", "name": "16A_AMANECER_CAMIRI", "title": "Amanecer camiri", "lat":732,"long":131}
    {"cod": "16C", "name": "16C_ARETE_GUASÚ", "title": "Arete Guasú    ", "lat":337,"long":869}
    {"cod": "17A", "name": "17A_FÚTBOL_UNIBOL", "title": "Fútbol unibol", "lat":147,"long":811}
    {"cod": "17B", "name": "17B_SERMÓN", "title": "sermÓn
    ", "lat":758,"long":716}
    {"cod": "17C", "name": "17C_PAJARITOS_DONDE_HUBO_LUCHA", "title": "pajaritos donde hubo lucha
    ", "lat":639,"long":660}
    {"cod": "18A", "name": "18A_LLUVIA_KAA_IYA", "title": "lluvia kaa iya
    ", "lat":999,"long":668}
    {"cod": "18B", "name": "18B_RANAS_KAA_IYA", "title": "ranas kaa iya
    ", "lat":984,"long":534}
    {"cod": "19A", "name": "19A_MUCHAS_RANAS_A_CORO", "title": "muchas ranas a coro
    ", "lat":656,"long":171}
    {"cod": "1A", "name": "1A_TORTURAS", "title": "torturas
    ", "lat":350,"long":182}
    {"cod": "1B", "name": "1B_CHAMAMÉ", "title": "chamamÉ
    ", "lat":726,"long":578}
    {"cod": "20A", "name": "20A_RADIO_Y_REGGAE", "title": "radio y reggae
    ", "lat":907,"long":186}
    {"cod": "21A", "name": "21A_TATÚ_CRUZ_ENTREVISTA_CALLEJERA", "title": "tatÚ cruz entrevista callejera
    ", "lat":897,"long":575}
    {"cod": "23A", "name": "23A_CAMIÓN_ENLHET", "title": "camiÓn enlhet
    ", "lat":427,"long":902}
    {"cod": "23B", "name": "23B_ANCIANO_ENLHET", "title": "anciano enlhet
    ", "lat":707,"long":420}
    {"cod": "24A", "name": "24A_VIENTO_SACADA_COCHE", "title": "viento sacada coche
    ", "lat":507,"long":692}
    {"cod": "24B", "name": "24B_CANTO_HOMBRE_AYOREO", "title": "canto hombre ayoreo
    ", "lat":613,"long":872}
    {"cod": "24C", "name": "24C_CANTO_MUJER_AYOREO", "title": "canto mujer ayoreo
    ", "lat":696,"long":795}
    {"cod": "25A", "name": "25A_DE_PEDO_EN_EL_BARRO", "title": "de pedo en el barro
    ", "lat":964,"long":224}
    {"cod": "26A", "name": "26A_BARCO", "title": "barco
    ", "lat":397,"long":813}
    {"cod": "27B", "name": "27B_CERDO_PUERTO_DIANA", "title": "cerdo puerto diana
    ", "lat":897,"long":531}
    {"cod": "27C", "name": "27C_CANTOS_ISHIR", "title": "cantos ishir
    ", "lat":892,"long":277}
    {"cod": "28A", "name": "28A_PÁJAROS_3_GIGANTES", "title": "pÁjaros 3 gigantes
    ", "lat":325,"long":459}
  


12B_CHACARERA_CON_VACAS
12C_MENONITAS
13A_MILITARES_ESCONBOL
13B_PLANTAS_REPSOL
14A_PIEDRAS_RIO
15B_PUENTE_(GUERRA_CHACO)
16A_AMANECER_CAMIRI
16C_ARETE_GUASÚ
17A_FÚTBOL_UNIBOL
17B_SERMÓN
17C_PAJARITOS_DONDE_HUBO_LUCHA
18A_LLUVIA_KAA_IYA
18B_RANAS_KAA_IYA
19A_MUCHAS_RANAS_A_CORO
20A_RADIO_Y_REGGAE
21A_TATÚ_CRUZ_ENTREVISTA_CALLEJERA
23A_CAMIÓN_ENLHET
23B_ANCIANO_ENLHET
24A_VIENTO_SACADA_COCHE
24B_CANTO_HOMBRE_AYOREO
24C_CANTO_MUJER_AYOREO
25A_DE_PEDO_EN_EL_BARRO
26A_BARCO
27B_CERDO_PUERTO_DIANA
27C_CANTOS_ISHIR
28A_PÁJAROS_3_GIGANTES
29A_MÚSICA_BRASILERA
29B_AGUA_CASADO
29C_AMBIENTE_CASADO
31A_CHARLA_SAWHOYAMAXA
31B_NIÑOS_SAWHOYAMAXA
J3_NDE_RAMIREZ
J4_ASUNCIÓN_DESDE_GRAN_HOTEL_PARANÁ

  ]
  
  
  
  var template = "<a class='place_lnk' href='#{{cod}}' id='{{cod}}' data-title='{{title}}' data-descp='material/descripciones/{{name}}.txt' data-img='material/imagenes/{{name}}.png' data-audio='material/MP3/{{name}}.mp3'><img src='material/imagenes/{{name}}.png' alt='{{title}}' class='place hvr-grow' style='left: {{lat}}px; top: {{long}}px' /></a>"

  places.forEach(
    function(element,index,array){
      var output = Mustache.render(template,element);
      console.log(output);
      document.getElementById('include_places').innerHTML += output;
    }
  );

}());
