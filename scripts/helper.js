class Helper {
  playPauseAndUpdate(player, song) {
    player.playPause(song)
    // update times
    // tims is probably in the song obj
    // console.log(song.duration)
    console.log(player)
    player.getDuration();
  }
}

const helper = new Helper()
