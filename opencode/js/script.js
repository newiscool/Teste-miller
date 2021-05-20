if (window.innerWidth < 992) {
    jQuery( ".checkMenu" ).on( "click", function() {
        // console.log("passouAq")
            if( jQuery("#wrapper").hasClass("menuClose")) {
                jQuery("#wrapper").removeClass("menuClose");
            }
        })
    jQuery( ".close-menu" ).on( "click", function() {
        jQuery("#wrapper").addClass("menuClose");
    })
}

jQuery( document ).ready(function() {
    if (window.innerWidth < 992) {
        jQuery( ".checkMenu" ).on( "click", function() {
            // console.log("passouAq")
                if( jQuery("#wrapper").hasClass("menuClose")) {
                    jQuery("#wrapper").removeClass("menuClose");
                }
            })
        jQuery( ".close-menu" ).on( "click", function() {
            jQuery("#wrapper").addClass("menuClose");
        })
    }
})

jQuery(".search__triger").click(function () {
    jQuery(".search-block").addClass("actived");
}); 
jQuery(".close-icon-search").click(function () {
    jQuery(".search-block").removeClass("actived");
}); 



// jQuery(".menu-dropdown-link").hover(function () {
//     jQuery(".menu-navbar").toggleClass("actived");
// }); 







jQuery(".minicart__close").click(function () {
    jQuery(".cart__dropdown").removeClass("actived");
}); 
// if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery')}
// +function ($) {'use strict';
// 	var version = $.fn.jquery.split(' ')[0].split('.')
// 	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
// 		throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
// 	}
// }(jQuery);
jQuery(document).ready(function ($) {
    +function ($) {
        if (jQuery.fn.owlCarousel) {
			var $fullBanner = jQuery('#full-banner');
			$fullBanner.find('ul').owlCarousel({
				autoPlay : 5000,
				stopOnHover : true,
				pagination: false,
				navigation:false,
				navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				paginationSpeed : 1000,
				goToFirstSpeed : 2000,
				singleItem : true,
				autoHeight : true
			});



            jQuery(".showcase-carousel ul").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [600, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                singleItem: false,
                responsiveClass:true,
                responsive: {
                    0:{
                      navigation:false, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });

            jQuery(".brands-list").owlCarousel({
                autoPlay: false,
                items: 6,
                padding : 23,
                itemsCustom: [[320, 2], [600, 2], [768, 3], [992, 4], [1200, 6]],
                loop:true,
                nav:true,
                responsive: {
                    0:{
                      navigation:false, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });

     

            jQuery(".facebook-recomenda_list").owlCarousel({
                autoPlay: true,
                items: 4,
                itemsCustom: [[320, 1], [600, 2], [768, 2], [992, 2], [1200, 3]],
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                responsiveClass:true,
                responsive: {
                    0:{
                      navigation:true, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });

            jQuery(".banners-carousel ul").owlCarousel({
                autoPlay: true,
                items: 2,
                itemsCustom: [[320, 1], [768, 1], [992, 1], [1200, 2]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                singxleItem: false,
                responsiveClass:true,
                responsive: {
                    0:{
                      navigation:false, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });
            // jQuery("#instafeed").owlCarousel({
            //     autoPlay: true,
            //     items: 10,
            //     itemsCustom: [[320, 2], [768, 2], [992, 4], [1200, 5]],
            //     itemsScaleUp: false,
            //     itemsTabletSmall: false,
            //     navigation: true,
            //     navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            //     pagination: true,
            //     singxleItem: false,
            //     responsiveClass:true,
            //     responsive: {
            //         0:{
            //           navigation:false, // from this breakpoint 678 to 959
            //           pagination:true // only within 678 and next - 959
            //         }
            //     }
            // });

            /*jQuery(".dep_lista ").owlCarousel({
                autoPlay: true,
                items: 2,
                itemsCustom: [[320, 1], [768, 1], [992, 1], [1200, 2]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                singxleItem: false
            });*/

            /*
               jQuery(".visitados_produtos #produtos").owlCarousel({
                autoPlay: true,
                items: 2,
                itemsCustom: [[320, 2], [768, 2], [992, 4], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                singxleItem: false
            })
            */

            jQuery(".showcase-videoproduct").slick({            
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:false,
                    vertical:true,
                    nextArrow: '<i class="fa fa-angle-down" aria-hidden="true"></i>',
                    prevArrow: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
                    responsiveClass:true,
                    responsive: [
                        {
                          breakpoint: 992,
                          settings: {
                            vertical:false,
                            dots:true,
                            arrows:false,
                          }
                    }
                ]
            });
            /*if (window.innerWidth > 992) {
                jQuery(".carrossel-navbar").owlCarousel({
                    autoPlay: false,
                    items: 8,
                    itemsCustom: [[1200, 5]],
                    itemsScaleUp: false,
                    itemsTabletSmall: false,
                    navigation: false,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    pagination: true,
                    singxleItem: false
                });
            }*/
            
            jQuery(".product__related ul").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                singxleItem: false,
                responsiveClass:true,
                responsive: {
                    0:{
                      navigation:false, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });
            

            jQuery(".brands__list ul").owlCarousel({
                autoPlay: false,
                itemsCustom: [[320, 3], [768, 3], [992, 5], [1200, 8]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                responsiveClass:true,
                responsive: {
                    0:{
                      navigation:false, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });

            jQuery(".banners-extra__list").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: true,
                singxleItem: false,
                responsiveClass:true,
                responsive: {
                    0:{
                      navigation:false, // from this breakpoint 678 to 959
                      pagination:true // only within 678 and next - 959
                    }
                }
            });
            
            jQuery("#product-page .produto-imagem-miniaturas li span").on("click",function(e){
                var fotoClicada = (event.currentTarget.getAttribute("id"));
                var fotoClicadaNew = fotoClicada.replace("L", "H");
                var fotoMostra = jQuery("#foto_p");
                var elementoMostra = jQuery(fotoMostra).find("#" + fotoClicadaNew);
                jQuery("#foto_p span").removeClass("teste");
                jQuery("#foto_p span").addClass("removeFoto");
                elementoMostra.removeClass("removeFoto");
                elementoMostra.addClass("mostraFoto");
            });

            if (window.innerWidth < 992) {
                jQuery(".banners-extras__center").owlCarousel({
                    autoPlay: false,
                    items: 4,
                    itemsCustom: [[320, 1], [600, 2], [768, 3]],
                    navigation: false,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    pagination: true,
                    singleItem: false
                });
                jQuery(".amamosvip_body-list").owlCarousel({
                    autoPlay: false,
                    items: 3,
                    itemsCustom: [[320, 2], [600, 2], [768, 3]],
                    navigation: false,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    pagination: true,
                    singleItem: false
                });
            }

            // if (window.innerWidth < 992) {
            //     jQuery("section.info-lane.center").owlCarousel({
            //         autoPlay: true,
            //         items: 2,
            //         itemsCustom: [[320, 1], [600, 2], [768, 3]],
            //         navigation: false,
            //         navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            //         pagination: true,
            //         singleItem: false
            //     });
            // }

            


            // console.log(jQuery(window).width());
            if(jQuery(window).width() < 1200) {
                jQuery(".vertical-showcases ul").owlCarousel({
                    autoPlay: true,
                    items: 1,
                    itemsCustom: [[320, 1], [768, 1], [992, 1], [1200, 1]],
                    itemsScaleUp: false,
                    itemsTabletSmall: false,
                    navigation: false,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    pagination: true,
                    singxleItem: false
                });
            }

        }
    }(jQuery);

    if (screen.width < 767) {
        var i = 1;
        jQuery('.smart_filter .smart-filter-label').each(function (index, el) {
            var self = jQuery(this);
            var name = self.attr('data-filter-label');

            self.bind('click', function (event) {
                self.toggleClass('estado-ativo');
                jQuery('[data-filter-container=' + name + ']').slideToggle('300')
                    .toggleClass('estado-ativo');
            });
        });
    };

    jQuery(".triger_btn-tabs").click(function () {
        var item = jQuery(this).closest('.dispblock');
        var hasOpen = !item.hasClass('drop');
        jQuery('.dispblock').removeClass('drop');
        if(hasOpen) item.addClass("drop");
        else{ item.removeClass("drop") }
    
    });
    if (screen.width > 992) {
    jQuery( ".title-triger" ).on( "click", function() {
        var item = jQuery(this).closest('.filter-block');
        var hasOpen = !item.hasClass('drop');
        jQuery('.filter-block').removeClass('drop');
        if(hasOpen) item.addClass("drop");
        else{ item.removeClass("drop") }
    });
    }
    if (screen.width < 992) {
    jQuery( ".title-triger" ).on( "click", function() {
        var item = jQuery(this).closest('.list-block');
        var hasOpen = !item.hasClass('drop');
        jQuery('.list-block').removeClass('drop');
        if(hasOpen) item.addClass("drop");
        else{ item.removeClass("drop") }
    });
    }

    // jQuery( ".title-triger" ).on( "click", function() {
    //     if(jQuery(".filter-block").hasClass("active__dropdown")) {
    //         jQuery(".filter-block").removeClass("active__dropdown");
    //     } else {
    //         jQuery(".filter-block").addClass("active__dropdown");
    //     }
    // });

    $(".submenu.in").closest(".menu").addClass("in");

    jQuery('#foto_p').attr('data-target', "");

    if($('.smart_filter h3').eq(0).text() == "Categorias") {
        $('.smart_filter h3').eq(0).text($('.breadcrumb .category').text());
    }

    if($('.fotosCompreJunto').length > 0) {

        var aux;

        $.each($('.fotosCompreJunto .produto img'), function() {
            aux = $(this).attr('src');

            aux = aux.replace('/90_', '/180_');

            $(this).attr('src', aux);
        });

    }
    $(function(){
        $('#linksPag a').click(function(){
            //ajax
            setTimeout(function() {
                jQuery('a.FotoLista img').attr('class', "vistadosImg");
                if($('.vistadosImg').length > 0) {
                    var aux;
                    $.each($('.vistadosImg'), function() {
                        aux = $(this).attr('src');
                        aux = aux.replace('/90_', '/');
                        $(this).attr('src', aux);
                    });
                }
                return false;
            },500)
        })
    })
      
        jQuery('a.FotoLista img').attr('class', "vistadosImg");
        if($('.vistadosImg').length > 0) {
            var aux;
            $.each($('.vistadosImg'), function() {
                aux = $(this).attr('src');
                aux = aux.replace('/90_', '/');
                $(this).attr('src', aux);
            });
        }

    if($('#nav_bar .nv-01 > .you-need').length > 0) {

        if($(window).width() < 980) {
            $('#nav_bar .nv-01 > .you-need .you-need__toggle').on('click', function(){
                $('.you-need__list').slideToggle(150);
            });
        }

    }

    var lastScrollTop = 0;
    jQuery(window).scroll(function (event) {
        var st = jQuery(this).scrollTop();

        if (st > 150) {
            jQuery('body').addClass('moving');
            if (st > lastScrollTop) {
                jQuery('body').addClass('moving--down');
            } else {
                jQuery('body').removeClass('moving--down');
            }
            lastScrollTop = st;
        } else {
            jQuery('body').removeClass('moving');
        }
    });

});
+function ($) {
    'use strict';

    var $smartFilterMobile = jQuery('.mobileFilter');
    var $mobileMenu = jQuery('.mobileMenu');
    var $mask = jQuery('#mask');

    jQuery($smartFilterMobile).click(function () {
        jQuery('body').toggleClass('ac_sm_ft');
    });
    jQuery($mobileMenu).click(function () {
        jQuery('body').toggleClass('ac_sm_menu');
    });
    jQuery($mask).click(function () {
        jQuery('body').removeClass('ac_sm_menu ac_sm_ft');
    });
}(jQuery);


jQuery( document ).ready(function() {
    jQuery("body").addClass("active__body");
    jQuery("li[class='']").addClass("bbox");
});

jQuery( document ).ready(function() {
   


if (window.innerWidth < 992) {
    // jQuery( ".condicoes-item" ).on( "click", function() {
    //     if(jQuery(".dropdown-content").hasClass("dropdown-modal")) {
    //         jQuery(".dropdown-content").removeClass("dropdown-modal");
    //     } else {
    //         jQuery(".dropdown-content").addClass("dropdown-modal");
    //     }
    // });
}
    
jQuery("svg.icon_inforuler").click(function () {   
    console.log("passou aqui") 
    var item = jQuery(this).closest('.condicoes-item');
    var hasOpen = !item.hasClass('drop');
    jQuery('.condicoes-item').removeClass('drop');
    if(hasOpen) item.addClass("drop");
    else{ item.removeClass("drop") }

});

jQuery(".closeModalinfo").click(function () {    
    jQuery('.condicoes-item').removeClass('drop');
});



    if (window.innerWidth < 992) {
        // jQuery( "svg.arrow-down" ).on( "click", function() {
        //     if(jQuery(".nv-03").hasClass("active__dropdown-novo")) {
        //         jQuery(".nv-03").removeClass("active__dropdown-novo");
        //     } else {
        //         jQuery(".nv-03").addClass("active__dropdown-novo");
        //     }
        // });


        jQuery("svg.arrow-down").click(function () {    
            var item = jQuery(this).closest('.dropdown-nv2');
            var hasOpen = !item.hasClass('drop');
            jQuery('.dropdown-nv2').removeClass('drop');
            if(hasOpen) item.addClass("drop");
            else{ item.removeClass("drop") }
        
        });

        jQuery(".title-triger").click(function () {    
            var item = jQuery(this).closest('.filter-block');
            var hasOpen = !item.hasClass('drop');
            jQuery('.filter-block').removeClass('drop');
            if(hasOpen) item.addClass("drop");
            else{ item.removeClass("drop") }
        
        });


        jQuery("svg.search__icon").click(function () {    
            var item = jQuery(this).closest('.dropdown-content');
            var hasOpen = !item.hasClass('drop');
            jQuery('.dropdown-content').removeClass('drop');
            if(hasOpen) item.addClass("drop");
            else{ item.removeClass("drop") }
        
        });

        jQuery(".closeModalinfo").click(function () {    
            jQuery('.dropdown-content').removeClass('drop');
        });
        

    }
    
});


   //Movie
   var movieItem = jQuery('.modal_item-save').html();
   jQuery('.btn-modal-movie').click(function(){
       jQuery('.movie__one .modal-body').html( movieItem );
   });

   jQuery('.modal').click(function(e){
      if( jQuery(e.target).hasClass('modal') ){
         jQuery('.movie__one .modal-body').html('');
         jQuery('#modal-video-produto .modal-body').html('');
      }
   });

   jQuery('.modal .close').click(function(e){
       jQuery('.movie__one .modal-body').html('');
       jQuery('#modal-video-produto .modal-body').html('');
   });
   



   jQuery(function() {
    jQuery('#colorselector').change(function(){
      jQuery('.colors').hide();
      jQuery('#' + jQuery(this).val()).show();
    });
  });
  // [forked from](http://jsfiddle.net/FvMYz/)
  // [show-hide-based-on-select-option-jquery)(http://stackoverflow.com/questions/2975521/show-hide-div-based-on-select-option-jquery/2975565#2975565)



    jQuery('.checkbox').on("change", function () {
        var links = [], //array for links
        sum = 0;
    jQuery('.checkbox').each(function () {
        links.push(jQuery(this).attr('data-link')); //get links
        //sum of all price values of this into price
        sum += +jQuery(this).attr('data-cart');
    });
    jQuery('.price').html(sum);

    jQuery("a").attr("href", links.join(",")); // change link

});

    jQuery(window).load(function(){
        jQuery('.facebook-recomenda_list_item iframe').attr('class', "facebookIframe");
    })


// instafeed

// How to get an access token:
// http://jelled.com/instagram/access-token

// {{model.user.username}}, {{likes}} likes

// var galleryFeed = new Instafeed({
//     get: "user",
//     userId: 11924983430,
//     accessToken: "11924983430.7fd7e25.55fe417047384570aec60a4a24a4a23b",
//     resolution: "standard_resolution",
//     useHttp: "true",
//     limit: 5,
//     template: '<li><a href="{{link}}"><img src="{{image}}" /></a></li>'
// });




// galleryFeed.run();


// How to get an access token:
// http://jelled.com/instagram/access-token

// {{model.user.username}}, {{likes}} likes

var galleryFeed = new Instafeed({
    get: "user",
    userId: 11924983430,
    accessToken: "11924983430.7fd7e25.55fe417047384570aec60a4a24a4a23b",
    resolution: "standard_resolution",
    useHttp: "true",
    limit: 10,
    template: '<li><a href="{{link}}"><img src="{{image}}" /></a></li>',
    target: "instafeed",
    after: function() {
      // disable button if no more results to load
      if (!this.hasNext()) {
        btnInstafeedLoad.setAttribute('disabled', 'disabled');
      }
      
      var owl = $(".owl-carousel"),
          owlSlideSpeed = 300;
  
      // init owl    
      jQuery(document).ready(function(){
        jQuery("#instafeed").owlCarousel({
            autoPlay: false,
            items: 4,
            itemsCustom: [[320, 1], [600, 2], [768, 4]],
            navigation: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: true,
            singleItem: false
        });
      });
    }
  });
  
  galleryFeed.run();



     jQuery( "div#modal-form-content .botao" ).addClass( "myClass" );
        setTimeout(function() {
            // jQuery(".pointer").trigger('click');
            console.log('passou aqui')
        },500)
    jQuery("#btnTeste").on('click', function(){
        jQuery( "div#modal-form-content" ).addClass( "myClass" );
        console.log("foiii")
        //ajax
        return false;
    })
    jQuery("#product-page .produto-imagem-miniaturas li span").on("click",function(e){
        var fotoClicada = (event.currentTarget.getAttribute("id"));
        var fotoClicadaNew = fotoClicada;
        console.log("passou aqui");
        var fotoMostra = jQuery("#foto_p");
        var elementoMostra = jQuery(fotoMostra).find("#" + fotoClicadaNew);
        jQuery("#foto_p span").removeClass("teste");
        jQuery("#foto_p span").addClass("removeFoto");
        elementoMostra.removeClass("removeFoto");
        elementoMostra.addClass("mostraFoto");
    });

    jQuery(window).load(function(){
    if (window.innerWidth < 992) {
        if (jQuery("#carousel").children().length <= 0) {
        } else {
            // console.log("passou aqui")
            jQuery('.jcarousel-skin-tango').slick({
                centerMode: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                variableWidth: true,
                dots: true,
                arrows: false,  
            });
            // console.log("não vazio");
        }
    }
        if (jQuery("#carousel").children().length <= 0) {
            // console.log("vazio");
        } else {
            jQuery("#foto_p").addClass("fotoDisplayNone");
            // console.log("não vazio");
        }
})
    jQuery("#btnTeste").trigger('click');



    jQuery('.inputv2').change(function () {
        var itemNew = jQuery(this).closest('.dropdown');
        var noOpen = !itemNew.hasClass('dropdown');
        // console.log("Aeee")
        if (this.checked) {
                jQuery(this).closest('.dropdown').addClass("drop");
                jQuery(this).siblings('.dropdown-switcher').addClass("active__dropdown");
            }else {
                jQuery('div.dropdown-switcher').removeClass("active__dropdown");
                jQuery(".dropdown").removeClass("drop");

        }
    });
    
    jQuery('.inputv3').change(function () {
        var itemNew = jQuery(this).closest('.dropdown-nv2');
        var noOpen = !itemNew.hasClass('dropdown-nv2');
        // console.log("Aeee")
        if (this.checked) {
                jQuery(this).closest('.dropdown-nv2').addClass("drop");
                jQuery(this).siblings('.dropdown-switcher-3').addClass("active__dropdown");
            }else {
                jQuery('div.dropdown-switcher-3').removeClass("active__dropdown");
                jQuery(".dropdown-nv2").removeClass("drop");

        }
    });
    jQuery(document).ready(function(){
        if (window.innerWidth < 992) {
            jQuery( ".btn-voltarmenu" ).on( "click", function() {
                // console.log("clicado")
                jQuery('.list-block').removeClass('drop');
                jQuery('input:checkbox').removeAttr('checked', 'checked');
                jQuery(".dropdown-switcher").removeClass("active__dropdown");
            });
        }
    })


    jQuery( ".title-triger" ).on( "click", function() {
        var item = jQuery(this).closest('.list-block');
        var hasOpen = !item.hasClass('drop');
        jQuery('.list-block').removeClass('drop');
        if(hasOpen) item.addClass("drop");
        else{ item.removeClass("drop") }
    });

    if (window.innerWidth < 992) {
        jQuery( ".dropdown" ).on( "click", function() {
            jQuery(this).addClass("rotateDrop");
            if(jQuery(".dropdown-switcher").hasClass("active__dropdown")) {
                jQuery(".dropdown-switcher").removeClass("active__dropdown");
                jQuery(".dropdown").removeClass("rotateDrop");
            } else {
                jQuery(".dropdown-switcher").addClass("active__dropdown");
            }
        });

        jQuery( ".btn-show-hiddem_search" ).on( "click", function() {
            jQuery(this).addClass("closestats");
            if(jQuery("#search_01").hasClass("drop-active")) {
                jQuery("#search_01").removeClass("drop-active");
                jQuery(".btn-show-hiddem_search").removeClass("closestats");
            } else {
                jQuery("#search_01").addClass("drop-active");
            }
        });

    }



// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


// var params = {};
//  params["attrs"] = "Variant.id";

//  $.ajax({
//      method: "GET",
//      url: "/web_api/variants/",
//      data: params
//  }).done(function( response, textStatus, jqXHR ) {
//         console.log(response);
//         document.getElementById("demo").innerHTML = params;
//         console.log("testeeee"); 
//  }).fail(function( jqXHR, status, errorThrown ){
//      var response = $.parseJSON( jqXHR.responseText );
//      console.log(response);
//  });

var params = {};
params["attrs"] = "";

$.ajax({
    method: "GET",
    url: "/web_api/variants/",
    data: params
}).done(function( response, textStatus, jqXHR ) {
    variants = response.Variants
    // Bloco de Separacao dos Dados da variacao
    for (i = 0; i < variants.length; i++) {
        var variant = variants[i].Variant.Sku[0].image;
        var variantId = variants[i].Variant.product_id;
        // var test = document.getElementById('demoss'+variantId);
        var test = $('.demoss'+variantId);
        // test.innerHTML += '<div>' +'<img src="'+ variant +'"'+'></div>';
        $( test ).append( '<div>' +'<img src="'+ variant +'"'+'></div>' );
        test.innerHTML += '<div>' +'<img src="'+ variant +'"'+'></div>';
        console.log(test)
        // var available = variant.available;

        // document.getElementById("demo").innerHTML = variant;
    }
        // console.log(JSON.stringify(response));
}).fail(function( jqXHR, status, errorThrown ){
    var response = $.parseJSON( jqXHR.responseText );
    console.log(response);
});



//    // Variaveis
//    var content = this.selector;
//    var params = {};
//    var variants = "";
//    var skuVariants = {};
//    var skuVariantsData = {};
//    var skuVariantKey = "";
//    var skuVariantsId = {};
// var methods = {
//     init: function(){

//         methods.requestVariants(params);

//         jQuery( document ).ready(function() {
//          jQuery('#opcoes0 li').click(function(){
//            jQuery('.lista_select').val("");
//            jQuery('#opcoes1 li').removeClass('selecionada');
//            jQuery('.lista_select').removeClass('indisponivel');
//            jQuery('#variacao1').val("");
//          });

//          jQuery(content+' > #opcoes1 li').click(function(){
//            if(jQuery("input#selectedVariant").val() == ""){
//              jQuery('.var-unavailable' ).css('display','block');
//              jQuery(this).addClass('indisponivel');
//            }else{
//              jQuery(this).removeClass('indisponivel');
//            }
//          });
//        });

//     },
    


//     showVariants: function () {
//         // bloco para montar as variacoes
//         jQuery(content).empty();
//         jQuery(content).append("<input type='hidden' name='variacao' id='selectedVariant"+"' value=''>");
//         jQuery(content).prepend('<span class="var-unavailable'+' blocoAlerta" style="display:none">Indisponivel</span>');
   
//           var iOp = 0;
//           for (var key in skuVariants) {
//             var variantDiv = jQuery("<div></div>").text(key).attr("class","varTit onVar color-tone-1").attr("id","vars"+iOp);
//             var variantInput = jQuery("<input></input>").attr("id","variacao"+iOp).attr("type","hidden");
//             var variantUl = jQuery("<ul></ul>").attr("id","opcoes"+iOp).attr("class","lista_radios").css('margin', '5px 0 5px 0');
   
//             var variantOp = [];
   
//             for (var index in skuVariants[key]){
//               if (skuVariants[key].hasOwnProperty(index)) {
//                 var skuVariant  = skuVariantsData[key][index].toString().split(",");
//                 var nameVariant = skuVariantsData[key][index][0];
//                 var image1      = skuVariantsData[key][index][1];
//                 var image2      = skuVariantsData[key][index][2];
//                 if (image2) {
//                   var variantLi = jQuery("<li></li>").attr("class","color variacao-").css('margin-right', '3px');;
//                   var labelVar  = jQuery("<label></label>").attr("class","lista-radios-input");
//                   var divImgVar = jQuery("<div></div>")
//                   var linkVar   = jQuery("<a></a>").attr("href","javascript:void(0)").attr("alt",nameVariant).click(function() {methods.selectVariation(jQuery(this))});
//                   var imgVar    = jQuery("<img>").attr("src",image2).attr("alt",nameVariant).attr("title",nameVariant).attr("full",image1);
   
//                   jQuery(variantLi).css('display', 'inline-block');
//                   jQuery(linkVar).append(imgVar);
//                   jQuery(divImgVar).append(linkVar);
//                   jQuery(labelVar).append(divImgVar);
//                   jQuery(variantLi).append(labelVar);
//                   jQuery(variantUl).append(variantLi);
   
//                 } else {
//                   var variantLi = jQuery("<li></li>").attr("class","").css('margin-right', '3px');
//                   var labelVar  = jQuery("<label></label>").attr("class","lista-radios-input");
//                   var divLabelVar = jQuery("<div></div>").css('border', '1px solid black').css('padding','8px 10px 10px 10px');
//                   var linkVar   = jQuery("<a></a>").attr("href","javascript:void(0)").attr("alt",nameVariant).click(function() {methods.selectVariation(jQuery(this))});
//                   var nameVar    = jQuery("<div>"+nameVariant.toUpperCase()+"</div>");
   
//                   jQuery(variantLi).css('display', 'inline-block');
//                   jQuery(linkVar).append(nameVar);
//                   jQuery(divLabelVar).append(linkVar);
//                   jQuery(labelVar).append(divLabelVar);
//                   jQuery(variantLi).append(labelVar);
//                   jQuery(variantUl).append(variantLi);
//                 }
//               }
//             }
//             jQuery(content).append(variantDiv);
//             jQuery(content).append(variantInput);
//             jQuery(content).append(variantUl);
//             iOp++;
//           }
//           for (i = 0; i < skuVariants.length; i++) {
//             var variantDiv = jQuery("<div></div>").append(skuVariants);
//           }
 
//       },
   
// }
//         jQuery.get('/web_api/variants').done(function( response ) {
//             variants = response.Variants;
//             // Bloco de Separacao dos Dados da variacao
//             for (i = 0; i < variants.length; i++) {
//                 var variant = variants[i].Variant;
//                 var available = variant.available;
//             }
//             console.log(JSON.stringify(variant+ "teste"));
//             console.log(variant)
            
//             if(parseInt(response.paging.total) > parseInt(response.paging.page) * parseInt(response.paging.limit)){
        
//             params["product_id"] = product_id;
//             params["page"] = parseInt(response.paging.page) + 1;
//             methods.requestVariants(params);
//           }else{
//             methods.showVariants()
//           }
        
//         }).fail(function( jqXHR, status, errorThrown ){
//           var response = $.parseJSON( jqXHR.responseText );
//         });



 
