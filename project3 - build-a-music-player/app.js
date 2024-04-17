var main = function() {
    var state;
$('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
});

    $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

      $('#stop').click(function(){
        $('#message').text("Track stopped");
        $('#player').trigger("pause"); 
        $('#player').prop('currentTime', 0); 
    });

      $('#mute').click(function(){
        $('#message').text("Player muted");
        $('#player').prop('muted', true);
    });

    $('#unmute').click(function(){
        $('#message').text("Player unmuted");
        $('#player').prop('muted', false);
    });

     $('#volup').click(function(){
        var volume = $('#player').prop('volume');
        if (volume < 1) {
            volume += 0.1; 
            $('#player').prop('volume', volume);
        }
    });

    $('#voldown').click(function(){
        var volume = $('#player').prop('volume');
        if (volume > 0) {
            volume -= 0.1; 
            $('#player').prop('volume', volume);
        }
    });
  
}

$(document).ready(main);
