
console.log("------------JUKEBOX SECTION------------")
//Create structure about songs, and then randomly select one song from the list of songs.

class Song {
    title!: string;
    artist!: string;
    link!: string;

    constructor(title:string,artist:string,link:string){
        this.title = title;
        this.link = link;
        this.artist = artist;
    }
}

const s1 = new Song("new","song","created");
s1.title = "Title"
s1.artist = "John Albesa"
s1.link = "www.johnalbesa.com"

console.log(`${s1.title}, ${s1.artist}, ${s1.link}`)

const s2 = new Song("Pink Venom","BLACKPINK","www.somewhereontheinternet.com");
const s3 = new Song("STAR WALKIN'","Lil Nas X","www.leagueoflegends.com");
const s4 = new Song("Ghosts 'N' Stuff","Deadmau5","ghosts.com")
const s5 = new Song("Gospel","Panic! at the disco","tiktok.com")

let jukeboxSongs: Array<Song> = [s1,s2,s3,s4,s5];

let jukebox: Song = jukeboxSongs[Math.floor(Math.random() * jukeboxSongs.length)]

console.log(`Randomly selected: ${jukebox.title}, ${jukebox.artist}, ${jukebox.link}`)

console.log("-----------Playlist of Songs-----------")
//using song class, now making playlist class using static and private properties, addSong method
//create new instance, access and call: playlist, its public instance property, public instance method, public static property

class Playlist {
    private songlist: Array<Song> = []
    public playlistName!: string
    private playlistCreator!: string
    public static hostingsite:string = "www.hostwebsite.com/playlists"

    addSong(n: Song):void {
        this.songlist.push(n);
    }
    public get _songlist() {
        return this.songlist;
    }
    public get _playlistName(){
        return this.playlistName
    }
    public get _playlistCreator(){
        return this.playlistCreator
    }
    public set _playlistName(val){
        this.playlistName = val
    }
    public set _playlistCreator(val){
        this.playlistCreator = val
    }
}

const p1 = new Playlist();
p1._playlistName = "Playlist 1";
p1._playlistCreator = "John Albesa";

p1.addSong(s1)
p1.addSong(s3)
p1.addSong(s1)
p1.addSong(s1)

console.log(`${p1._playlistName}: Created by ${p1._playlistCreator} on ${Playlist.hostingsite}\n`)
let counter = 0;
p1._songlist.forEach(element => {
    console.log(`Song ${++counter}: ${element.title} by ${element.artist} from ${element.link}`)
});

console.log("------------ITEM WAREHOUSE------------")
//honestly, the instructions in this area are unclear, so I am just creating an interface, and then an item class
//afterwards, store them in a warehouse class...

interface stockItem {
    type: string;
    itemId:number;
    location:string;

    get _location(): string;
    set _location(val);
    get _itemId(): number;
    set _itemId(val);
    get _type(): string;
    set _type(val);
}

class item implements stockItem {
    type!: string;
    itemId!: number;
    location!: string;
    
    get _location(): string {
        return this.location
    }
    set _location(val: string) {
        this.location = val
    }
    get _itemId(): number {
        return this.itemId
    }
    set _itemId(val: number) {
        this.itemId = val;
    }
    get _type(): string {
        return this.type
    }
    set _type(val: string) {
        this.type = val
    }
}

class warehouse {
    items: Array<item> = []
    warehouseId:string = "first warehouse"

    addItem(n:item) {
        n._location = this.warehouseId
        this.items.push(n);
    }

    get _items() {
        return this.items;
    }
    set _warehouseId(val:string) {
        this.warehouseId = val;
    }
}

const i1 = new item
i1._itemId = 1
i1._type = "tree branch"

const i2 = new item
i2._itemId = 2
i2._type = "car horn"
const w1 = new warehouse
w1.addItem(i1)
w1.addItem(i1)
w1.addItem(i2)
w1.addItem(i2)

w1._items.forEach(element => {
    console.log(`Item: ${element._type}, ${element._itemId}, located in ${element._location}`)
});