var hotels ='http://www.mocky.io/v2/5e4e43272f00006c0016a52b';
var reg ='http://www.mocky.io/v2/5e4a7dd02f0000290097d24b';
$.when(
    $.getJSON(hotels ),
    $.getJSON(reg ),
    ).done(function(datahotels, datareg) {
        console.log(datahotels);
        console.log(datareg);
        initialPage(datahotels,datareg);
    });

function initialPage(datahotels,datareg){
    $('#container_hotels').html('');
    var hotelslist = datahotels[0].hotels; //get DATA
    for (var i = 0; i < hotelslist.length; i++){

        $('#container_hotels').append(
           '<div id="'+hotelslist[i].code+'" class="sizehotelClass">'+
           '<div id="header_hotel" class="flexhotelClass">'+
               '<div id="name_hotel" class="texthotelClass hfontClass">'+hotelslist[i].name+'</div>  '+
           '</div>'+
       '<div id="line_sep" class="lineClass"></div>'+
           '<div id="place_hotel" class="flexhotelClass">'+
               '<div id="city_hotel" class="texthotelClass bfontClass">'+hotelslist[i].location+'</div>'+
           '</div>'+
           '<div id="line_sep" class="lineClass"></div>'+
               '<div id="hotelcontainer_'+hotelslist[i].code+'" class="gridhotelClass">    '         +
               '</div>'+
       '<div id="code_hotel" class="codehotelClass">'+hotelslist[i].code+'</div>'  +
       '</div>'
           );
    }
    var reglist = datareg[0].regimenes; //get DATA
       console.log(reglist);
       for (var i = 0; i < reglist.length; i++){
           $('#hotelcontainer_'+reglist[i].hotel+'').append(
            '<div id="'+reglist[i].code+'" class="roomhotelClass">'+
               '<div id="room_name" class="texthotelClass h2fontClass clClass">'+reglist[i].name+'</div>'+
               '<div id="line_sep" class="lineClass clClass"></div> '+
              '<div id="type_room" class="texthotelClass b2fontClass ltClass clClass">'+reglist[i].room_type+'</div>'+
               '<div id="line_sep" class="linetinyClass clClass"></div>'+
               '<div id="price_room" class="texthotelClass b2fontClass ltClass clClass">'+reglist[i].price+' €</div>'+
           '</div>'+
          '</div>'
              );
           
           }
       
   }