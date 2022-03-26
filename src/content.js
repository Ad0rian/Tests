var hotels ='http://www.mocky.io/v2/5e4a7e4f2f00005d0097d253';
var rooms ='https://run.mocky.io/v3/132af02e-8beb-438f-ac6e-a9902bc67036';

$.when(
    $.getJSON(hotels ),
    $.getJSON(rooms )
    ).done(function(datahotels, datarooms) {
        console.log(datahotels);
        console.log(datarooms);
        initialPage(datahotels,datarooms);
    });

function initialPage(datahotels,datarooms){
    $('#container_hotels').html('');
    var hotelslist = datahotels[0].hotels; //get DATA
    var roomslist = datarooms[0].rooms_type; //get DATA
    console.log(datahotels);
    console.log(roomslist);
    for (var i = 0; i < hotelslist.length; i++){
     $('#container_hotels').append(
        '<div id="'+hotelslist[i].code+'" class="sizehotelClass">'+
        '<div id="header_hotel" class="flexhotelClass">'+
            '<div id="name_hotel" class="texthotelClass hfontClass">'+hotelslist[i].name+'</div>  '+
        '</div>'+
    '<div id="line_sep" class="lineClass"></div>'+
        '<div id="place_hotel" class="flexhotelClass">'+
            '<div id="city_hotel" class="texthotelClass bfontClass">'+hotelslist[i].city+'</div>'+
        '</div>'+
        '<div id="line_sep" class="lineClass"></div>'+
            '<div id="hotelcontainer_'+hotelslist[i].code+'" class="gridhotelClass">    '         +
            '</div>'+
    '<div id="code_hotel" class="codehotelClass">'+hotelslist[i].code+'</div>'  +
    '</div>'
        );
    }
    for (var i = 0; i < roomslist.length; i++){
        for (var j = 0; j < roomslist[i].hotels.length; j++){
            console.log(roomslist[i].hotels[j]);
        $('#hotelcontainer_'+roomslist[i].hotels[j]+'').append(
            '<div id="room_hotel" class="roomhotelClass">'+
            '<div id="room_name" class="texthotelClass h2fontClass clClass">'+roomslist[i].name+'</div>'+
            '<div id="line_sep" class="lineClass clClass"></div> '+
           '<div id="type_room" class="texthotelClass b2fontClass ltClass clClass">'+roomslist[i].code+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="meals_room" class="texthotelClass b2fontClass ltClass clClass">meals_room</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="price_room" class="texthotelClass b2fontClass ltClass clClass">price_room</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="nights_room" class="texthotelClass b2fontClass ltClass clClass">nights_room</div>'+
        '</div>'+
       '</div>'
           );
        
        }
       }

}