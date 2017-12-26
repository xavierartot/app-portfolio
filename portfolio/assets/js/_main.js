(function() {
  $('body').scrollspy({
    target: '.navbar-collapse',
    offset: 50
  });
  // Add smooth scrolling to all links inside a navbar
  $(".navbar-collapse a").on('click', function(e) {
    event.preventDefault();
    if (this.hash !== "") {
      //console.log(this.hash);
      //// Store hash (#)
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      }); 
      //console.log($(hash).offset().top);
    }
  });
  $('.top').click(function (e) {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 1000, function () {
      //console.log("value");
    });
  });
//});
  var words = [
    {text: "css",         weight: 15},
    {text: "wordpress",   weight: 12},
    {text: "jquery",      weight: 11},
    {text: "gulp",        weight: 9.4},
    {text: "javascript",  weight: 8},
    {text: "design",      weight: 8},
    {text: "gulp",        weight: 6.2},
    {text: "sass",        weight: 7},
    {text: "less",        weight: 7},
    {text: "angularjs",   weight: 5},
    {text: "html5",       weight: 5},
    {text: "grunt",       weight: 6},
    {text: "responsive",  weight: 7},
    {text: "bootstrap",   weight: 7},
    {text: "seo",         weight: 6},
    {text: "json",        weight: 7},
    {text: "ajax",        weight: 9},
    {text: "performance", weight: 8}
  ];
  $('#words').jQCloud(words, {
    width: 485,
    height: 400,
    afterCloudRender: function () {
      $(this).find('span')
      .addClass('animate')
      .css({ display: 'block' });

      $(window).scroll(function(event) {
        var s = $(this).scrollTop();
        if (s <= 500) {
          $('.animate').removeClass('pulse');
        }
        if (s >= 670) {
          setTimeout( function () {$('.w10').addClass('pulse');}, 100);
          setTimeout( function () {$('.w9').addClass('pulse');},  300);
          setTimeout( function () {$('.w8').addClass('pulse');},  500);
          setTimeout( function () {$('.w7').addClass('pulse');},  700);
          setTimeout( function () {$('.w5').addClass('pulse');},  900);
          setTimeout( function () {$('.w4').addClass('pulse');},  1100);
          setTimeout( function () {$('.w3').addClass('pulse');},  1300);
          setTimeout( function () {$('.w2').addClass('pulse');},  1500);
          setTimeout( function () {$('.w1').addClass('pulse');},  1700);
        }
      });
    }
  });
  $('#words-mobile').jQCloud(words, {
    //autoResize: true,
    width: 635,
    height: 400
  });

  $('.jqccloud').addClass('animate');

  $(window).scroll(function(event) {
    //console.log( $(document).height() );//3259px
    var y = $(this).scrollTop();
    //console.log(y);

    //$('.w7').hide();
    if (y >= 1) {
      //$('.navbar-brand').removeClass('flipoutx flipinx').addClass('flipoutx');
      $('.navbar-brand').removeClass('fadeInDown').addClass('fadeOutUp');
    }else if(y <= 90){
      $('.navbar-brand').removeClass('fadeOutUp').addClass('fadeInDown');
    }
    if (y >= 2780) {
      $('#s1').addClass('animate-down');
      setTimeout( function () {$('#s2').addClass('animate-down');}, 100);
      setTimeout( function () {$('#s3').addClass('animate-down');}, 200);
      setTimeout( function () {$('#s4').addClass('animate-down');}, 300);
      setTimeout( function () {$('#s5').addClass('animate-down');}, 400);
      setTimeout( function () {$('#s6').addClass('animate-down');}, 500);
      setTimeout( function () {$('#s7').addClass('animate-down');}, 600);
      setTimeout( function () {$('#s8').addClass('animate-down');}, 700);
      setTimeout( function () {$('#s9').addClass('animate-down');}, 800);
      setTimeout( function () {$('#s10').addClass('animate-down');}, 900);
      //setTimeout( function () {$('.us').addClass('animate');}, 700);
    }
    $('.bc').css({opacity: '0'});
    if (y >= 1300) {
      setTimeout( function () {$('.bc1').addClass('fadeInLeft animate');}, 100);
      setTimeout( function () {$('.bc2').addClass('fadeInLeft animate');}, 300);
      setTimeout( function () {$('.bc3').addClass('fadeInLeft animate');}, 600);
      setTimeout( function () {$('.bc4').addClass('fadeInLeft animate');}, 900);
      setTimeout( function () {$('.bc5').addClass('fadeInLeft animate');}, 1200);
    //$('.bc').css({opacity: '1'});
    }
  });

  //https://www.youtube.com/watch?v=ruhpekx3wsq
  //ex animationClick(#logo, tada);
  function animationClick(element, animation){
    element = $(element);
    element.click(
      function() {
        element.addClass('animated ' + animation);
        //wait for animation to finish before removing classes
        setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      }
    );
  }
  
  function animateHover(element, animation) {
    $(element).mouseenter(function(event) {
      $(this).addClass("animate "+ animation);
    });
    $(element).on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", 
      function(event) {
        $(this).removeClass("animate "+ animation);
    });
  }
  animateHover('.portfolio li', 'swing');
  //animateHover('.top', 'slideTop');
  $('.top').hover(function (e) {
    $(this).addClass('slideTop');
  }, function (e) {
    $(this).removeClass('slideTop');
  });

  //function animationHover(element, animation){
    //element = $(element);
    //element.hover(
      //function() {
        //this.('animated ' + animation);
      //},
      //function(){
        ////wait for animation to finish before removing classes
        //setTimeout( function(){
          //this.('animated ' + animation);
        //}, 2000);
      //}
    //);
  //}

  //animationHover('.portfolio p', 'pulse');

  //$(".img").each(function() {
  //if (Modernizr.mq('only screen and (min-width: 1200px)')) {
  //$(this).attr("src", $(this).attr("data-big"));
  //}
  //});

  //if (Modernizr.touch){
  //// bind to touchstart, touchmove, etc and watch `event.streamId`
  //} else {
  //// bind to normal click, mousemove, etc
  //}
  //if (!Modernizr.svg) {
  //var imgs = document.getElementsByTagName('img');
  //var svgExtension = /.*\.svg$/;
  //var l = imgs.length;
  //for(var i = 0; i < l; i++) {
  //if(imgs[i].src.match(svgExtension)) {
  //imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
  //console.log(imgs[i].src);
  //}
  //}
  //}
}());

