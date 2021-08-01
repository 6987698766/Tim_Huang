(function($) {
    if ( !$.cssHooks ) {
      throw("jQuery 1.4.3+ is needed for this plugin to work");
      return;
    }
   
    function styleSupport( prop ) {
      var vendorProp, supportedProp,
          capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
          prefixes = [ "Moz", "Webkit", "O", "ms" ],
          div = document.createElement( "div" );
   
      if ( prop in div.style ) {
        supportedProp = prop;
      } else {
        for ( var i = 0; i < prefixes.length; i++ ) {
          vendorProp = prefixes[i] + capProp;
          if ( vendorProp in div.style ) {
            supportedProp = vendorProp;
            break;
          }
        }
      }
   
      div = null;
      $.support[ prop ] = supportedProp
      return supportedProp;
    }
   
    var animationDuration = styleSupport( "animationDuration" );
   
    // Set cssHooks only for browsers that
    // support a vendor-prefixed border radius
    if ( animationDuration && animationDuration !== "animationDuration" ) {
      $.cssHooks.animationDuration = {
        get: function( elem, computed, extra ) {
          return $.css( elem, animationDuration );
        },
        set: function( elem, value) {
          elem.style[ animationDuration ] = value;
        }
      };
    }
  
    $.fn.disableSelection = function() {
          return this
              .attr('unselectable', 'on')
              .css('user-select', 'none')
              .on('selectstart', false);
    };
 });

  
$(document).ready(function () {
    var messages = ["Nice!","Excellent","Very good",
                                        "Man you good",
                                        "You're a pro",
                                        "That was crazy.",
                                        "You're blowing my mind!",
                                        "Unbelievable!",
                                        "You're on fire!",
                                        "Boom!",
                                        "Insanity!"]
    var levels = 0

    $('#ball').on('click', function () {
        if (levels < 11){
            speedUpAnimation(this);
            flashMessage();
        }else{
            $('#congrats').text('WINNER!');
			$('#next_level').text("Holy cow! You won the whole freakin' thing!");
			$('#replay').show();
			$('#ball_container').hide();
			$('#message_container').show();
        }
    });

    function flashMessage() {
		var message = messages[levels];

		$('#congrats').text(message);
		
		levels += 1;

		$('#level').text(levels + 1);

		$('#message_container').show();
		$('#ball_container').hide();

		setTimeout(function() { 
			$('#message_container').hide();
			$('#ball_container').show();
		 }, 3000);

	}
    function speedUpAnimation(elm) {
		var speed = $(elm).css('animation-duration');
        //下面s用,代替
		var newSpeed = (speed.split('s'))[0] - 1;
		$(elm).css('animation-duration', newSpeed + 's');

	}
    //不能做文字選取
	//$('#container_right').disableSelection();
	//$('#message_container').disableSelection();
});

