var hotels ='http://www.mocky.io/v2/5e4a7e4f2f00005d0097d253';
var meals ='http://www.mocky.io/v2/5e4a7e282f0000490097d252';
$.when(
    $.getJSON(hotels ),
    $.getJSON(meals )
    ).done(function(datahotels, datameals) {
        console.log(datahotels);
        console.log(datameals);
        initialPage(datahotels,datameals);
    });

function initialPage(datahotels,datameals){
    $('#container_hotels').html('');
    var hotelslist = datahotels[0].hotels; //get DATA
    var mealslist = datameals[0].meal_plans; //get DATA
    console.log(datahotels);
    console.log(datameals);
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
            '<div id="hotelcontainer_'+hotelslist[i].code+'" class="gridhotelClass">'+
            '</div>'+
    '<div id="code_hotel" class="codehotelClass">'+hotelslist[i].code+'</div>'  +
    '</div>'
        );
    }
    for (var i = 0; i < mealslist.length; i++){
       // var mealsputlength = Object.keys(mealslist[i].hotel).length;
        var mealsput = Object.keys(mealslist[i].hotel);
        for (var j = 0; j < mealsput.length; j++){

        for (var z = 0; z < mealslist[i].hotel[mealsput[j]].length; z++){
            var meals =mealslist[i].hotel[mealsput[j]][z];
            console.log(meals);
        $('#hotelcontainer_'+mealsput[j]+'').append(
            '<div id="room_hotel" class="roomhotelClass">'+
            '<div id="'+meals.room+'" class="texthotelClass h2fontClass clClass">'+meals.room+'</div>'+
            '<div id="line_sep" class="lineClass clClass"></div> '+
           '<div id="type_room" class="texthotelClass b2fontClass ltClass clClass">'+meals.room+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="'+mealslist[i].code+'" class="texthotelClass b2fontClass ltClass clClass">'+mealslist[i].name+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="price_room" class="texthotelClass b2fontClass ltClass clClass">'+meals.price+'</div>'+
            '<div id="line_sep" class="linetinyClass clClass"></div>'+
            '<div id="nights_room" class="texthotelClass b2fontClass ltClass clClass">nights_room</div>'+
        '</div>'+
       '</div>'
           );
        }
        }
       }

}