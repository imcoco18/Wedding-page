// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

$(document).on('turbolinks:load', ()=> {
    // 省略

    $(function() {
      $('.slick01').slick({
        prevArrow:'<i class="fa fa-angle-left arrow arrow-left"></i>',
        nextArrow:'<i class="fa fa-angle-right arrow arrow-right"></i>',
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow: 4, //表示するスライドの数
    		slidesToScroll: 1, //スクロールで切り替わるスライドの数

      });
    });

    $(function() {
      $('.slick02').slick({
      	arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 2, //表示するスライドの数
    		slidesToScroll: 1, //スクロールで切り替わるスライドの数

      });
    });
});

$(document).on('turbolinks:load', function() {
 $("#hoge").css("color","red")
});