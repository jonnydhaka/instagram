if ($('#instafeed').length > 0) {
   // Instagram Feed
   var instaFeedLoad = function(){
     var feed = new Instafeed({
       get: 'user',
       userId: '',
       //clientId: '',
       limit: 20,
       sortBy: 'most-liked',
       resolution: "thumbnail",
       accessToken: '',
       template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
     });
     feed.run();
   };
   $(window).on('scroll keydown touchcancel', function(e){
     if((e.type == 'keydown' && e.keyCode != 35) || $('#instafeed').hasClass('instafeed-loaded')){
       return true;
     }
     var instafeedtop = $('#instafeed').offset().top;
     var wtop = $(this).scrollTop();
     var wh = $(this).height();
     if(wtop + wh >= instafeedtop){
       $('#instafeed').addClass('instafeed-loaded');
       instaFeedLoad();
     }
   });
 }
