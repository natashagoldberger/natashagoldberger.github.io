function toggleSongs() {
    songsSecondHalf.classList.toggle("hidden");
}
songsSecondHalf = document.getElementById("songs-second-half")
document.getElementById("toggle-button").onclick = toggleSongs;
songsSecondHalf.classList.add("hidden");
