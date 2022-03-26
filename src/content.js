var staticUrl = 'http://www.mocky.io/v2/5e4a7e4f2f00005d0097d253';
$.getJSON(staticUrl,function(data){
    console.log(data);
    initialPage(configinterface.initialpage,data);
});

function initialPage(pageinitial,data){
    var hotelslist = data.hotels; //get DATA
    console.log(hotelslist);
    for (var i = 0; i < hotelslist.length; i++){
        
     $('#lateralmenu').append(
        '<div class="buttonmenu">'+
        '<div id="'+hotelslist.i+'" class="buttonmenusecond" onclick="internalMenu('+hotelslist.i+');">'+                             
            '<p class="textbutton">'+hotelslist[i].name+'</p>'+
        '</div>'+
    '</div>'
        );
    }
    $('#contentprincipal').append(
        '<div id="buttonmenuside" class="buttonnavbar animationmenunavbar">'+
        '<button class="hiddenbtnmenu" onclick="closeNav()"><</button>'+
        '</div>'
        );
    $('#contentprincipal').append(
    '<div id="lateralcontainer" class="sizerightbig animationiniright">'+
    '<div id="contentRight" class="divmenusecondright">'+
    '</div>'+
    '</div>'
    );
    //var prevButton = pageinitial;
    //internalContent(pageinitial,idButtoneffect);
    internalContent(pageinitial);		
}