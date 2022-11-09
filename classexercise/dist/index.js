"use strict";
console.log("------------JUKEBOX SECTION------------");
class Song {
    constructor(title, artist, link) {
        this.title = title;
        this.link = link;
        this.artist = artist;
    }
}
const s1 = new Song("new", "song", "created");
s1.title = "Title";
s1.artist = "John Albesa";
s1.link = "www.johnalbesa.com";
console.log(`${s1.title}, ${s1.artist}, ${s1.link}`);
const s2 = new Song("Pink Venom", "BLACKPINK", "www.somewhereontheinternet.com");
const s3 = new Song("STAR WALKIN'", "Lil Nas X", "www.leagueoflegends.com");
const s4 = new Song("Ghosts 'N' Stuff", "Deadmau5", "ghosts.com");
const s5 = new Song("Gospel", "Panic! at the disco", "tiktok.com");
let jukeboxSongs = [s1, s2, s3, s4, s5];
let jukebox = jukeboxSongs[Math.floor(Math.random() * jukeboxSongs.length)];
console.log(`Randomly selected: ${jukebox.title}, ${jukebox.artist}, ${jukebox.link}`);
console.log("-----------Playlist of Songs-----------");
class Playlist {
    constructor() {
        this.songlist = [];
    }
    addSong(n) {
        this.songlist.push(n);
    }
    get _songlist() {
        return this.songlist;
    }
    get _playlistName() {
        return this.playlistName;
    }
    get _playlistCreator() {
        return this.playlistCreator;
    }
    set _playlistName(val) {
        this.playlistName = val;
    }
    set _playlistCreator(val) {
        this.playlistCreator = val;
    }
}
Playlist.hostingsite = "www.hostwebsite.com/playlists";
const p1 = new Playlist();
p1._playlistName = "Playlist 1";
p1._playlistCreator = "John Albesa";
p1.addSong(s1);
p1.addSong(s3);
p1.addSong(s1);
p1.addSong(s1);
console.log(`${p1._playlistName}: Created by ${p1._playlistCreator} on ${Playlist.hostingsite}\n`);
let counter = 0;
p1._songlist.forEach(element => {
    console.log(`Song ${++counter}: ${element.title} by ${element.artist} from ${element.link}`);
});
console.log("------------ITEM WAREHOUSE------------");
class item {
    get _location() {
        return this.location;
    }
    set _location(val) {
        this.location = val;
    }
    get _itemId() {
        return this.itemId;
    }
    set _itemId(val) {
        this.itemId = val;
    }
    get _type() {
        return this.type;
    }
    set _type(val) {
        this.type = val;
    }
}
class warehouse {
    constructor() {
        this.items = [];
        this.warehouseId = "first warehouse";
    }
    addItem(n) {
        n._location = this.warehouseId;
        this.items.push(n);
    }
    get _items() {
        return this.items;
    }
    set _warehouseId(val) {
        this.warehouseId = val;
    }
}
const i1 = new item;
i1._itemId = 1;
i1._type = "tree branch";
const i2 = new item;
i2._itemId = 2;
i2._type = "car horn";
const w1 = new warehouse;
w1.addItem(i1);
w1.addItem(i1);
w1.addItem(i2);
w1.addItem(i2);
w1._items.forEach(element => {
    console.log(`Item: ${element._type}, ${element._itemId}, located in ${element._location}`);
});
//# sourceMappingURL=index.js.map