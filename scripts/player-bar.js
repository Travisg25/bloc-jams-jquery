{

  $('button#play-pause').on('click',  function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
     if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;

     if (nextSongIndex >= album.songs.length) { return; }


     const nextSong = album.songs[nextSongIndex];
     player.playPause(nextSong);

  });

  $('button#previous').on('click', function() {
     if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const previousSongIndex = currentSongIndex - 1 ;

     if (currentSongIndex == 0) { return; }


     const previousSong = album.songs[previousSongIndex];
     player.playPause(previousSong);

  });

  $('#time-control input').on('input', function (event){
    player.skipTo(event.target.value);
  });

  setInterval (function () {
    if(player.playState !== 'playing'){return;}
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control input').val(percent);
    $('#time-current input').text(currentTime);

    }, 1000);

  // setInterval (function () {
  //   if(player.playState !== 'playing'){return;}
  //   const currentVolume = player.getTime();
  //   const duration = player.getVolume();
  //   const percent = (currentTime / duration) * 100;
  //   }, 1000);



  // setInterval( () => {
  //      if (player.playState !== 'playing') { return; }
  //    }, 1000);
}
