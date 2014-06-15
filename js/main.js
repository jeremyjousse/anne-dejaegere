function resize() {
      var winHeight = $(window).height();
      var winWidth = $(window).width();
    
      if(winWidth < 1200) {
              var Imagewidth = winWidth / 4;
      }

      else {
              var Imagewidth = winWidth / 5;
      }

      var Margin = Imagewidth / 2;

      var fiftyprocentheight = winHeight / 2;
      var Margintopuse = fiftyprocentheight - Margin - 40;
      var Margintopusing = Margintopuse+"px auto 0";  
      var Bgimage = Imagewidth + 5 + 8;      
      var Imagewidthplusacht = Imagewidth + 8;

      
      $("#bg").css('height',winHeight); 
      $("#bg").css('width',winWidth); 
      $("#background").css('min-height','100%'); 
      $("#background").css('width','100%');
      
} 
    
$(document).ready(function($) {
resize();  


$('#nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

}); 
$(window).on("resize", function(){  
resize();
});

