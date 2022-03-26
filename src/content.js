var hotels ='http://www.mocky.io/v2/5e4e43272f00006c0016a52b';
$.when(
    $.getJSON(hotels ),
    ).done(function(datahotels) {
        console.log(datahotels);
        initialPage(datahotels);
    });

function initialPage(datahotels){
    $('#container_hotels').html('');
    var hotelslist = datahotels.hotels; //get DATA
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
       var roomslist = hotelslist[i].rooms; //get DATA
       console.log(roomslist);
       for (var j = 0; j < roomslist.length; j++){
        console.log(roomslist[j]);
           $('#hotelcontainer_'+hotelslist[i].code+'').append(
               '<div id="room_hotel" class="roomhotelClass">'+
               '<div id="room_name" class="texthotelClass h2fontClass clClass">'+roomslist[j].name+'</div>'+
           '</div>'+
          '</div>'
              );
           
           }
       }
   }