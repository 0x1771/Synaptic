$(function(){$(".site-navigation").affix({offset:{top:$(".hero").height()}});var t=$(window);function e(){768>t.width()&&$(".nav a").on("click",function(){$(".navbar-toggle").click()})}e(),$(window).resize(e),$("body").scrollspy({target:".site-header",offset:10}),$(document).on("click",".page-scroll a",function(t){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},1e3,"easeInOutExpo"),t.preventDefault()}),$(".counter-start").length>0&&$(".counter-start").each(function(){var t=$(this),e=t.offset().top;$(window).scroll(function(){$(window).scrollTop()>e-1e3&&!t.hasClass("counting")&&(t.addClass("counting"),t.countTo())})});var o,s,i,n,r,a=$(".section-skills");$(document).bind("scroll",function(t){var e;$(document).scrollTop()>a.offset().top-window.innerHeight&&($(".progress .progress-bar").progressbar({transition_delay:500,display_text:"center"}),$(document).unbind("scroll"))}),$("#services-carousel").carousel({interval:!1}),$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(t,e,o,s,i){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:50}),$(".review-carousel").slick({nextArrow:'<button class="slick rectangle slick-next"><i class="fa fa-angle-right" aria-hidden="true"></button>',prevArrow:'<button class="slick rectangle slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></button>'}),$(".clients-carousel").slick({arrows:!1,slidesToShow:5,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]});var l=(s=(o=jQuery)("#grid"),i=o(".portfolio-sorting li"),n=function(){var t=i.children();t.on("click",function(t){t.preventDefault();var e=o(this),i=e.hasClass("active"),n=i?"all":e.data("group");i||o(".portfolio-sorting li a").removeClass("active"),e.toggleClass("active"),s.shuffle("shuffle",n)}),t=null},r=function(){var t=o.throttle(300,function(){s.shuffle("update")});s.find("img").each(function(){var e;(!this.complete||void 0===this.naturalWidth)&&(e=new Image,o(e).on("load",function(){o(this).off("load"),t()}),e.src=this.src)}),setTimeout(function(){t()},500)},{init:function(){setTimeout(function(){r(),n()},100),s.shuffle({itemSelector:'[class*="col-"]',group:Shuffle.ALL_ITEMS})}});$("#grid").length>0&&l.init()}());