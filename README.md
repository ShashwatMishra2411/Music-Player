# Music Player
This is a simple music player implemented using HTML, CSS, and JavaScript. It allows you to play and control the playback of multiple songs.

# Features
- Play/pause functionality: Clicking the play button toggles between playing and pausing the current song.
- Next/previous song: You can navigate to the next or previous song in the playlist.
- Progress bar: The progress bar indicates the current position of the song and allows you to seek to a specific position.
- Song information: The player displays the title and image of the current song.
# Usage
To use the music player, follow these steps:

- Include the required HTML markup and CSS styles for the player.
- Create an array songL containing the filenames of the songs you want to include in the playlist.
- Initialize the player by calling the load function with the index of the initial song to load.
- Attach event listeners to the play, next, previous, and progress bar elements to handle user interactions.
- Implement the necessary functions playSong, pauseSong, nextS, prevS, setProgress, and update as described in the code.
- Make sure to have the audio files (*.mp3) and corresponding images (*.webp) in the same directory as the HTML file.
