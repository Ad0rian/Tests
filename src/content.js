    initialPage(datahotels);
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
            '<div id="city_hotel" class="texthotelClass bfontClass">'+hotelslist[i].city+'</div>'+
        '</div>'+
        '<div id="line_sep" class="lineClass"></div>'+
            '<div id="hotelcontainer_'+hotelslist[i].code+'" class="gridhotelClass">    '         +
            '</div>'+
    '<div id="code_hotel" class="codehotelClass">'+hotelslist[i].code+'</div>'  +
    '</div>'
        );
    var roomslist = hotelslist[i].rooms; //get DATA
    for (var j = 0; j < roomslist.length; j++){
        $('#hotelcontainer_'+hotelslist[i].code+'').append(
            '<div id="room_hotel" class="roomhotelClass">'+
            '<div id="room_name" class="texthotelClass h2fontClass clClass">'+roomslist[j].name+'</div>'+
            '<div id="line_sep" class="lineClass clClass"></div> '+
           '<div id="type_room" class="texthotelClass b2fontClass ltClass clClass">'+roomslist[j].room_type+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="meals_room" class="texthotelClass b2fontClass ltClass clClass">'+roomslist[j].meals_plan+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="price_room" class="texthotelClass b2fontClass ltClass clClass">'+roomslist[j].price+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="nights_room" class="texthotelClass b2fontClass ltClass clClass">'+roomslist[j].nights+'</div>'+
        '</div>'+
       '</div>'
           );
        
        }
    }
}