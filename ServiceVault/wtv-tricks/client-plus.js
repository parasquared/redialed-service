var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<html>
<title>Plus Downloads</title>
<a href="wtv-disk:/content/GamesLC2/Games.html">Open games list (on server)</a>
<br>
<a href="wtv-disk:/content/GamesLC2/StartDoom.html">Start Doom</a>
<br>

<a href="wtv-disk:/content/GamesLC2/StartJack.html">Start You Don't Know Jack</a>
<br>

<p>Don't have games? Get 'em here! (takes about an hour per game to download)</p>
<!-- to do: figure out how to download the group (the server recognizes it as valid but doesn't send any files over) -->
<a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=GamesLC2&group=GamesLC2">Download game information</a>
<br>
<a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=GamesLC2-Update&group=GamesLC2-Update">Download game information????</a>
<br>

<a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=DoomLC2&group=DoomLC2">Download Doom</a>
<br>

<a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=JackLC2&group=JackLC2">Download You Don't Know Jack</a>
<br>

</html>`;
