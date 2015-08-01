var title_e=document.getElementById("player-song-title");
var title=title_e.innerHTML; 
title=title.replace(/& /g,"&");
var tenc=encodeURIComponent(title);
var artist_e=document.getElementById("player-artist");
var artist=artist_e.innerHTML; 
artist=artist.replace(/& /g,"&");
var aenc=encodeURIComponent(artist);
var album_e=document.getElementsByClassName("player-album"); 
var album=album_e[0].innerHTML;
album=album.replace(/& /g,"&"); 
var tweet=encodeURIComponent('Title : '+title+'\n')+encodeURIComponent('Artist : '+artist+'\n')+encodeURIComponent('Album : '+album+'\n\n'); 

//ジャケット画像をGoogle画像検索で取得
var google = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=";
var search= new XMLHttpRequest();
search.open("GET", google+title+artist, false);
search.send();
var result = search.responseText;
var url = result.match( /(http?:\/\/[\x21\x23-\x2B\x2D-\x7e]+)/ );
console.log(url[0]);

void(window.open('https://twitter.com/intent/tweet?text='+tweet+url[0]+'&hashtags=NowPlaying'));
