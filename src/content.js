var staticUrl = 'http://www.mocky.io/v2/5e4a7e4f2f00005d0097d253';
$.getJSON(staticUrl,function(data){
    console.log(data);
    initialPage(data);
});

function initialPage(data){
    $('#container_hotels').html('');
    var hotelslist = data.hotels; //get DATA
    console.log(hotelslist);
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
            '<div id="hotelcontainer" class="gridhotelClass">    '         +
            '</div>'+
    '<div id="code_hotel" class="codehotelClass">'+hotelslist[i].code+'</div>'  +
    '</div>'
        );
    }
}