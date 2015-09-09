$(function() {
  var x = 5, y = 5; /* off set for moving images to the middle of the coords set */
  
  var places = [
    {"cod": "1A", "title":"Relato de torturas durante la dictadura (1976-1983) en La Casa por la Memoria", "name":"1A_TORTURAS", "left":1075-x,"top":1405-y},
    {"cod": "1B", "title":"Seba Ibarra y su banda interpretan Pseudo Chamamé en el CECUAL", "name":"1B_CHAMAMÉ", "left":1100-x,"top":1405-y},
    {"cod": "2A", "title":"Ambiente musical en una parada de la caravana Chaco Ra’anga", "name":"2A_AMBIENTE_MUSICAL_AUTO_2", "left":984-x,"top":1347-y},
    {"cod": "2B", "title":"Cosmovisión moqoit junto a los meteoritos del Campo del Cielo", "name":"2B_JUANCARLOS_(Agus)COSMOVISIÓN", "left":789-x,"top":1424-y},
    {"cod": "2C", "title":"Mbiké", "name":"2C_N'VIKÉ", "left":811-x,"top":1424-y},
    {"cod": "3A", "title":"Pedro Valquinta, superviviente de la masacre de Napalpí, celebra sus 107 años", "name":"3A_PEDRO_VALQUINTA", "left":869-x,"top":1387-y},
    {"cod": "3B", "title":"Transgénicos y fumigaciones en Avia Terai", "name":"3B_AVIA_TERAI", "left":871-x,"top":1296-y},
    {"cod": "4A", "title":"Niños en Pampa del Indio", "name":"4A_NIÑOS_PAMPA_largo", "left":969-x,"top":1223-y},
    {"cod": "4B", "title":"Vacas en Pampa del Indio", "name":"4B_VACAS_PAMPA_corto", "left":976-x,"top":1248-y},
    {"cod": "5A", "name":"5A_CONFESIÓN_ROCA", "title":"Presidencia Roca", "left":1007-x,"top":1239-y},
    {"cod": "5B", "name":"5B_ROSY", "title":"Campaña electoral de Rosy Martínez en Villa Río Bermejito", "left":938-x,"top":1175-y},
    {"cod": "6A", "name":"6A_AMANECER_RIO_BERMEJITO", "title":"Amanecer en el Río Bermejito", "left":968-x,"top":1176-y},
    {"cod": "6B", "name":"6B_CRISTO_REDENTOR_RICARDO", "title":"Ricardo Sánchez en Paraje Cristo Redentor", "left":901-x,"top":1140-y},
    {"cod": "6C", "name":"6C_GENOCIDIO_NO_TERMINADO", "title":"Lucas Giraudo en el Impenetrable", "left":899-x,"top":1166-y},
    {"cod": "7A", "name":"7A_AUTO_DESATASCADO", "title":"Auto desatascado", "left":831-x,"top":1106-y},
    {"cod": "7B", "name":"7B_CHICHO_GIMÉNEZ_INTENDENTE", "title":"“Chicho Giménez, intendente”", "left":805-x,"top":1066-y},
    {"cod": "7C", "name":"7C_OVEJAS_NUEVA_POMPEYA", "title":"Ovejas en Campo Palermo", "left":808-x,"top":1153-y},
    {"cod": "8A", "name":"8A_INDIO_TOBA", "title":"Escuela wichí en Nueva Pompeya", "left":831-x,"top":1066-y},
    {"cod": "8B", "name":"8B_PERROS", "title":"Perros", "left":846-x,"top":1133-y},
    {"cod": "9A", "name": "9A_INGENIERO_JUÁREZ", "title": "Tensión social en Ingeniero Juárez", "left":753-x,"top":946-y},
    {"cod": "10A", "name":"10A_TARTAGAL", "title":"Radio “La Voz Indígena” en Tartagal", "left":525-x,"top":772-y},
    {"cod": "11A", "name":"11A_FRONTERA", "title":"Frontera Argentina-Bolivia, Yacuiba", "left":554-x,"top":708-y},
    {"cod": "11B", "name": "11B_ACTO_RECEPCIÓN_YACUIBA", "title": "Acto de recepción en Yacuiba", "left":590-x,"top":692-y},
    {"cod": "12A", "name":"12A_CREPITAR_OLLA", "title":"Crepitar de brasas bajo la olla", "left":580-x,"top":708-y},
    {"cod": "12B", "name": "12B_CHACARERA_CON_VACAS", "title": "Chacarera con vacas", "left":614-x,"top":692-y},
    {"cod": "12C", "name": "12C_MENONITAS", "title": "Menonitas de El Breal-Colonia Sur", "left":569-x,"top":679-y},
    {"cod": "13A", "name": "13A_MILITARES_ESCONBOL", "title": "ESCONBOL en Sanandita", "left":536-x,"top":664-y},
    {"cod": "13B", "name": "13B_PLANTAS_REPSOL", "title": "Planta de Gas en Campo Margarita", "left":542-x,"top":638-y},
    {"cod": "14A", "name": "14A_PIEDRAS_RIO", "title": "Piedras a la orilla del Pilcomayo", "left":564-x,"top":610-y},
    {"cod": "15A", "name": "15A_WEENHAYEK", "title": "Creencias y costumbres Weenhayek", "left":590-x,"top":610-y},
    {"cod": "15B", "name": "15B_PUENTE_(GUERRA_CHACO)", "title":"Museo de la Guerra del Chaco", "left":614-x,"top":610-y},
    {"cod": "16A", "name": "16A_AMANECER_CAMIRI", "title": "Amanecer en Camiri", "left":560-x,"top":455-y},
    {"cod": "16B", "name": "16B_FELIPE_ROMÁN", "title": "Felipe Román en la charla de la APG", "left":587-x,"top":455-y},
    {"cod": "16C", "name": "16C_ARETE_GUASÚ", "title": "Arete Guasú", "left":613-x,"top":455-y},
    {"cod": "16D", "name": "16D_MARIACHIS", "title": "Mariachis", "left":639-x,"top":455-y},
    {"cod": "17A", "name": "17A_FÚTBOL_UNIBOL", "title": "Fútbol en la UNIBOL", "left":583-x,"top":492-y},
    {"cod": "17B", "name": "17B_SERMÓN", "title": "Sermón cristiano en la UNIBOL", "left":608-x,"top":492-y},
    {"cod": "17C", "name": "17C_PAJARITOS_DONDE_HUBO_LUCHA", "title": "Paz en Kuruyuki", "left":634-x,"top":492-y},
    {"cod": "18A", "name": "18A_LLUVIA_KAA_IYA", "title": "Lluvia en Kaa Iya", "left":898-x,"top":283-y},
    {"cod": "18B", "name": "18B_RANAS_KAA_IYA", "title": "Ranas Kaa Iya", "left":923-x,"top":283-y},
    {"cod": "19A", "name": "19A_MUCHAS_RANAS_A_CORO", "title": "Ranas a coro en Kaa Iya", "left":950-x,"top":283-y},
    {"cod": "20A", "name": "20A_RADIO_Y_REGGAE", "title": "Autos, radio y rock and roll", "left":778-x,"top":162-y},
    {"cod": "20B", "name": "20B_TATÚ_CRUZ_BAND", "title": "La banda de Tatú Cruz", "left":640-x,"top":610-y},
    {"cod": "21A", "name": "21A_TATÚ_CRUZ_ENTREVISTA_CALLEJERA", "title": "Tatú Cruz: entrevista improvisada", "left":665-x,"top":610-y},
    {"cod": "22A", "name": "22A_MENONITAS_FILADELFIA", "title": "Menonitas en Filadelfia", "left":970-x,"top":751-y},
    {"cod": "23A", "name": "23A_CAMIÓN_ENLHET", "title": "En camión con los Enlhet", "left":1004-x,"top":800-y},
    {"cod": "23B", "name": "23B_ANCIANO_ENLHET", "title": "Anciano Enlhet", "left":969-x,"top":812-y},
    {"cod": "24A", "name": "24A_VIENTO_SACADA_COCHE", "title": "Viento y sacada de auto", "left":1018-x,"top":723-y},
    {"cod": "24B", "name": "24B_CANTO_HOMBRE_AYOREO", "title": "Canto de hombre ayoreo. Comunidad Chaidi", "left":1033-x,"top":686-y},
    {"cod": "24C", "name": "24C_CANTO_MUJER_AYOREO", "title": "Canto de mujer ayoreo. Comunidad Chaidi", "left":1059-x,"top":686-y},
    {"cod": "25A", "name": "25A_DE_PEDO_EN_EL_BARRO", "title": "Atrapados por el barro", "left":1157-x,"top":664-y},
    {"cod": "26A", "name": "26A_BARCO", "title": "Navegando el río Paraguay", "left":1222-x,"top":525-y},
    {"cod": "27A", "name": "27A_VIEJUNO_ISHIR_PUERTO_DIANA", "title": "Anciano y nieto ishir fabrican una lanza para cazar yacarés en Puerto Diana", "left":1213-x,"top":491-y},
    {"cod": "27B", "name": "27B_CERDO_Puerto_Diana", "title": "Cerdos en Puerto Diana", "left":1239-x,"top":491-y},
    {"cod": "27C", "name": "27C_CANTOS_ISHIR", "title": "Cantos Ishir en Puerto Diana", "left":1264-x,"top":491-y},
    {"cod": "28A", "name": "28A_PÁJAROS_3_GIGANTES", "title": "Aves en la Estación Biológica de los Tres Gigantes", "left":1206-x,"top":468-y},
    {"cod": "29A", "name": "29A_MÚSICA_BRASILERA", "title": "Porto Murtinho", "left":1228-x,"top":680-y},
    {"cod": "29B", "name": "29B_AGUA_CASADO", "title": "El agua en Puerto Casado", "left":1220-x,"top":754-y},
    {"cod": "29C", "name": "29C_AMBIENTE_CASADO", "title": "Ambiente en Puerto Casado", "left":1248-x,"top":755-y},
    {"cod": "31A", "name": "31A_CHARLA_SAWHOYAMAXA", "title": "Charla en Sawhoyamaxa", "left":1216-x,"top":902-y},
    {"cod": "31B", "name": "31B_NIÑOS_SAWHOYAMAXA", "title": "Niños en Sawhoyamaxa", "left":1242-x,"top":902-y},
    {"cod": "J3", "name": "J3_NDE_RAMIREZ", "title": "Nde Ramirez en el Juan de Salazar", "left":1248-x,"top":1153-y},
    {"cod": "J4", "name": "J4_ASUNCIÓN_DESDE_GRAN_HOTEL_PARANÁ", "title": "Asunción desde la azotea del Gran Hotel Paraná", "left":1266-x,"top":1153-y}

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
