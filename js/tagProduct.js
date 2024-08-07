// TAG PRODUCT
window.addEventListener("load", event => {
    <basis core="repeater" name="rep" datamembername="db.gallery">

<basis core="dbsource" source="media" name="db" usedforid="[##rep.current.Table2ID##]">
    <member name="listt" type="list" request="taglist" />
</basis>

<basis core="print" datamembername="rep.current">
    <face>
        var  naturalWidth = document.getElementById("image@Table2ID").naturalWidth;
        var naturalHeight = document.getElementById("image@Table2ID").naturalHeight;
        var image = $('#image@Table2ID');
        var xRatio = naturalWidth / image.width();
        var yRatio = naturalHeight / image.height();
        var width = image.width();
        var height = image.height();
</face>
</basis>
<basis core="print" datamembername="db.listt">
 <layout>
        var settings=[@child]
 </layout>
    <face  >
         {{
           "id": "@id",
            "xCoordinates": "@xCoordinates",
            "yCoordinates": "@yCoordinates",
            "mediaid": "@mediaid",
            "usedforid": "@usedforid",
             "link": "@link",
            "description": "@description"
         }},
     </face>
     <else-layout>
         var settings='null'
    </else-layout>
 </basis>

<basis core="print" datamembername="rep.current">
 <face>
 var   iddd=@Table2ID;
      tagList(settings,width, height, xRatio, yRatio,iddd);
 </face>

 </basis>
</basis>
function tagList(settings, width, height, xRatio, yRatio, iddd) {
    console.log('tagg');
    
                for (i = 0; i < (settings.length); i++) {
                    $(".rrr" + iddd).append(`
                    
                    <div class="Tag Tag-1 info  tag-item tag${settings[i].id}" data-id=${settings[i].usedforid }>
                     <span class="Circle pulsating-circle">
                        <span class="Circle-Inner">

                        </span>
                     </span>
                             <div class="Pop-tag" data-id=${settings[i].usedforid }>
                        <div class="pop">

                            <div class="Box">
                                <div class="IMG load-product${settings[i].usedforid }">
            
                             </a>
                             </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    `);
                    xCoordinates =parseInt(settings[i].xCoordinates ) / xRatio;
                    yCoordinates =parseInt(settings[i].yCoordinates )  / yRatio;
                    var iconWidth = parseInt($('.tag' + settings[i].id).find('.tag-item').width());
                    var iconHeight = $('.tag' + settings[i].id).find('.tag-item ').height();
                    var left = xCoordinates - iconWidth;
                    var top = yCoordinates;
                    $(".tag" + settings[i].id).css({
                        "position": "absolute",
                        "left": left + "px",
                        "top": top + "px",
                        "z-index": "214748"
                    });

                }

            }
 $('body').on('mouseover', '.tag-item', function () {
var width = $(".width-94").width() + 400;
var rt = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
if (rt < width) {
    var id = $(this).attr("data-id");

    $(this).css("z-index", "214748361")
    $(".load-product" + id).show();
    console.log($(this).children('.Pop-tag'));
    
    $(this).children('.Pop-tag').addClass("expand");
    $(".load-product" + id).addClass("load-producty");
    $(".load-product" + id).css({ "right": "33px", "left": "unset" });
    $(".load-product" + id).load("/loadtagPro.bc?type=4&ownerid=[##db.productinfo.ownerid##]&id=" + id);
}
else {
    var id = $(this).attr("data-id");
    $(this).css("z-index", "214748361")
    $(".load-product" + id).show();
    console.log($(this).children('.Pop-tag'));
    
    $(this).children('.Pop-tag').addClass("expand");

    $(".load-product" + id).addClass("load-productx")
    $(".load-product" + id).load("/loadtagPro.bc?type=4&ownerid=[##db.productinfo.ownerid##]&id=" + id);
}
});
$('body').on('mouseout', '.tag-item', function () {
var id = $(this).attr("data-id");
$(".load-product" + id).hide();
$(this).children('.Pop-tag').removeClass("expand");
$(this).css("z-index", "214748")
});
   })

   naturalWidth = document.getElementById("image@Table2ID").getBoundingClientRect().height