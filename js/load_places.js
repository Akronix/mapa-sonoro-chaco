$(function() {
  var x = 5, y = 5; /* off set for moving images to the middle of the coords set */
  
  var places = [
    {"cod": "1A", "title":"Torturas", "name":"1A_TORTURAS", "left":1075-x,"top":1405-y},
    {"cod": "1B", "title":"Chamamé", "name":"1B_CHAMAMÉ", "left":1100-x,"top":1405-y},
    {"cod": "2A", "title":"Ambiente Musical Auto", "name":"2A_AMBIENTE_MUSICAL_AUTO_2", "left":984-x,"top":1347-y},
    {"cod": "2B", "title":"Juan Carlos Cosmovisión", "name":"2B_JUANCARLOS_(Agus)COSMOVISIÓN", "left":789-x,"top":1424-y},
    {"cod": "2C", "title":"N'VIKÉ", "name":"2C_N'VIKÉ", "left":811-x,"top":1424-y},
    {"cod": "3A", "title":"3A Pedro Valquinta", "name":"3A_PEDRO_VALQUINTA", "left":869-x,"top":1387-y},
    {"cod": "3B", "title":"Avia Terai", "name":"3B_AVIA_TERAI", "left":871-x,"top":1296-y},
    {"cod": "4A", "title":"Niños Pampa largo", "name":"4A_NIÑOS_PAMPA_largo", "left":969-x,"top":1223-y},
    {"cod": "4B", "title":"Vacas Pampa corto", "name":"4B_VACAS_PAMPA_corto", "left":976-x,"top":1248-y},
    {"cod": "5A", "name":"5A_CONFESIÓN_ROCA", "title":"Confesión Roca", "left":1007-x,"top":1239-y},
    {"cod": "5B", "name":"5B_ROSY", "title":"Rosy", "left":938-x,"top":1175-y},
    {"cod": "6A", "name":"6A_AMANECER_RIO_BERMEJITO", "title":"Amanecer río Bermejito", "left":968-x,"top":1176-y},
    {"cod": "6B", "name":"6B_CRISTO_REDENTOR_RICARDO", "title":"Cristo Redentor Ricardo", "left":901-x,"top":1140-y},
    {"cod": "6C", "name":"6C_GENOCIDIO_NO_TERMINADO", "title":"Genocidio no terminado", "left":899-x,"top":1166-y},
    {"cod": "7A", "name":"7A_AUTO_DESATASCADO", "title":"Auto desatascado", "left":831-x,"top":1106-y},
    {"cod": "7B", "name":"7B_CHICHO_GIMÉNEZ_INTENDENTE", "title":"Chicho Giménez intendente", "left":805-x,"top":1066-y},
    {"cod": "7C", "name":"7C_OVEJAS_NUEVA_POMPEYA", "title":"Ovejas Nueva Pompeya", "left":808-x,"top":1153-y},
    {"cod": "8A", "name":"8A_INDIO_TOBA", "title":"Indio Toba", "left":831-x,"top":1066-y},
    {"cod": "8B", "name":"8B_PERROS", "title":"Perros", "left":846-x,"top":1133-y},
    {"cod": "9A", "name": "9A_INGENIERO_JUÁREZ", "title": "Ingeniero Juárez", "left":753-x,"top":946-y},
    {"cod": "10A", "name":"10A_TARTAGAL", "title":"Tartagal", "left":525-x,"top":772-y},
    {"cod": "11A", "name":"11A_FRONTERA", "title":"Frontera", "left":554-x,"top":708-y},
    {"cod": "11B", "name": "11B_ACTO_RECEPCIÓN_YACUIBA", "title": "Acto recepción yacuiba", "left":590-x,"top":692-y},
    {"cod": "12A", "name":"12A_CREPITAR_OLLA", "title":"Crepitar olla", "left":580-x,"top":708-y},
    {"cod": "12B", "name": "12B_CHACARERA_CON_VACAS", "title": "Chacarera con vacas", "left":614-x,"top":692-y},
    {"cod": "12C", "name": "12C_MENONITAS", "title": "Menonitas", "left":569-x,"top":679-y},
    {"cod": "13A", "name": "13A_MILITARES_ESCONBOL", "title": "Militares Esconbol", "left":536-x,"top":664-y},
    {"cod": "13B", "name": "13B_PLANTAS_REPSOL", "title": "Plantas repsol", "left":542-x,"top":638-y},
    {"cod": "14A", "name": "14A_PIEDRAS_RIO", "title": "Piedras río", "left":564-x,"top":610-y},
    {"cod": "15A", "name": "15A_WEENHAYEK", "title": "Weenhayek", "left":590-x,"top":610-y},
    {"cod": "15B", "name": "15B_PUENTE_(GUERRA_CHACO)", "title":"Puente (guerra chaco)", "left":614-x,"top":610-y},
    {"cod": "16A", "name": "16A_AMANECER_CAMIRI", "title": "Amanecer camiri", "left":560-x,"top":455-y},
    {"cod": "16B", "name": "16B_FELIPE_ROMÁN", "title": "Felipe Román", "left":587-x,"top":455-y},
    {"cod": "16C", "name": "16C_ARETE_GUASÚ", "title": "Arete Guasú", "left":613-x,"top":455-y},
    {"cod": "16D", "name": "16D_MARIACHIS", "title": "Mariachis", "left":639-x,"top":455-y},
    {"cod": "17A", "name": "17A_FÚTBOL_UNIBOL", "title": "Fútbol unibol", "left":583-x,"top":492-y},
    {"cod": "17B", "name": "17B_SERMÓN", "title": "Sermón", "left":608-x,"top":492-y},
    {"cod": "17C", "name": "17C_PAJARITOS_DONDE_HUBO_LUCHA", "title": "Pajaritos donde hubo lucha", "left":634-x,"top":492-y},
    {"cod": "18A", "name": "18A_LLUVIA_KAA_IYA", "title": "Lluvia Kaa Iya", "left":898-x,"top":283-y},
    {"cod": "18B", "name": "18B_RANAS_KAA_IYA", "title": "Ranas Kaa Iya", "left":923-x,"top":283-y},
    {"cod": "19A", "name": "19A_MUCHAS_RANAS_A_CORO", "title": "Muchas ranas a coro", "left":950-x,"top":283-y},
    {"cod": "20A", "name": "20A_RADIO_Y_REGGAE", "title": "Radio y reggae", "left":778-x,"top":162-y},
    {"cod": "20B", "name": "20B_TATÚ_CRUZ_ENTREVISTA_CALLEJERA", "title": "Tatú Cruz - entrevista callejera", "left":640-x,"top":610-y},
    {"cod": "21A", "name": "21A_TATÚ_CRUZ_BAND", "title": "Tatú Cruz Band", "left":665-x,"top":610-y},
    {"cod": "22A", "name": "22A_MENONITAS_FILADELFIA", "title": "Menonitas Filadelfia", "left":970-x,"top":751-y},
    {"cod": "23A", "name": "23A_CAMIÓN_ENLHET", "title": "Camión Enlhet", "left":1004-x,"top":800-y},
    {"cod": "23B", "name": "23B_ANCIANO_ENLHET", "title": "Anciano Enlhet", "left":969-x,"top":812-y},
    {"cod": "24A", "name": "24A_VIENTO_SACADA_COCHE", "title": "Viento sacada coche", "left":1018-x,"top":723-y},
    {"cod": "24B", "name": "24B_CANTO_HOMBRE_AYOREO", "title": "Canto hombre Ayoreo", "left":1033-x,"top":686-y},
    {"cod": "24C", "name": "24C_CANTO_MUJER_AYOREO", "title": "Canto mujer Ayoreo", "left":1059-x,"top":686-y},
    {"cod": "25A", "name": "25A_DE_PEDO_EN_EL_BARRO", "title": "De pedo en el barro", "left":1157-x,"top":664-y},
    {"cod": "26A", "name": "26A_BARCO", "title": "Barco", "left":1222-x,"top":525-y},
    {"cod": "27A", "name": "27A_VIEJUNO_ISHIR_PUERTO_DIANA", "title": "Viejuno Ishir Puerto Diana", "left":1213-x,"top":491-y},
    {"cod": "27B", "name": "27B_CERDO_Puerto_Diana", "title": "Cerdo Puerto Diana", "left":1239-x,"top":491-y},
    {"cod": "27C", "name": "27C_CANTOS_ISHIR", "title": "Cantos Ishir", "left":1264-x,"top":491-y},
    {"cod": "28A", "name": "28A_PÁJAROS_3_GIGANTES", "title": "Pájaros 3 gigantes", "left":1206-x,"top":468-y},
    {"cod": "29A", "name": "29A_MÚSICA_BRASILERA", "title": "Música brasilera", "left":1228-x,"top":680-y},
    {"cod": "29B", "name": "29B_AGUA_CASADO", "title": "Agua Casado", "left":1220-x,"top":754-y},
    {"cod": "29C", "name": "29C_AMBIENTE_CASADO", "title": "Ambiente Casado", "left":1248-x,"top":755-y},
    {"cod": "31A", "name": "31A_CHARLA_SAWHOYAMAXA", "title": "Charla Sawhoyamaxa", "left":1216-x,"top":902-y},
    {"cod": "31B", "name": "31B_NIÑOS_SAWHOYAMAXA", "title": "Niños Sawhoyamaxa", "left":1242-x,"top":902-y},
    {"cod": "J3", "name": "J3_NDE_RAMIREZ", "title": "Nde Ramirez", "left":1248-x,"top":1153-y},
    {"cod": "J4", "name": "J4_ASUNCIÓN_DESDE_GRAN_HOTEL_PARANÁ", "title": "Asunción desde gran hotel Paraná", "left":1266-x,"top":1153-y}

  ]
  
  var template = "<span id='{{cod}}_span' style='display:none' ><a id='{{cod}}_lnk' class='place_lnk' href='#{{cod}}' data-title='{{title}}' data-descp='material/descripciones/{{name}}.txt' data-img='material/imagenes/{{name}}.gif' data-audio='material/MP3/{{name}}.mp3'><img id='{{cod}}' src='material/imagenes/{{name}}.gif' alt='{{title}}' class='place' style='left: {{left}}px; top: {{top}}px' /></a></span>"

  Mustache.parse(template); // speeds up future uses

  places.forEach(
    function(element,index,array){
      var output = Mustache.render(template,element);
      document.getElementById('include_places').innerHTML += output;
      document.getElementById(element["cod"]).onload = function(){
        $('#'+element["cod"]+'_span').fadeIn('slow');
        //document.getElementById('pop').play()
        }
      
      /* onload = function(){
        //$(element["cod"]+'_lnk').show();
        placesCont = $('#include_places');
        placesCont.queue("popQueue",popImage('#'+element["cod"]+'_span'));
        setTimeout(function() {
          placesCont.dequeue("popQueue");
        }, 1000);
        //console.log(document.getElementById(element["cod"]+'_lnk'));
        //console.log('Image ' + element["cod"] + ' loaded')
      };*/
    }
  );
}());
