// 1.   render songs
// 2.   Scroll top
// 3.   Play / pause / seek
// 4.   CD rotate
// 5.   Next / prev
// 6.    Random
// 7.   Next / Repeat when ended
// 8.   Active song
// 9.   Scroll active song into view
// 10.  olay song when click
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

 var app = {
   
        songs : [
        {
            Name : 'Arcade',
            singer : '?',
            image :'./assets/img/song1.jpg',
            path: './assets/song-list/song1.mp3'
        },
        {
            Name : '2',
            singer : '?',
            image :'./assets/img/song2.jpg',
            path: './assets/song-list/song2.mp3'
        },
        {
            Name : '3',
            singer : '?',
            image :'./assets/img/song3.jpg',
            path: './assets/song-list/song3.mp3'
        },
        {
            Name : '4',
            singer : '?',
            image :'./assets/img/song4.jpg',
            path: './assets/song-list/song4.mp3'
        },
        {
            Name : '5',
            singer : '?',
            image :'./assets/img/song4.jpg',
            path: './assets/song-list/song5.mp3'
        },
        {
            Name : '6',
            singer : '?',
            image :'./assets/img/song6.jpg',
            path: './assets/song-list/song6.mp3'
        },
        {
            Name : '7',
            singer : '?',
            image :'./assets/img/song7.jpg',
            path: './assets/song-list/song7.mp3'
        },
        {
            Name : '8',
            singer : '?',
            image :'./assets/img/song2.jpg',
            path: './assets/song-list/song8.mp3'
        },
        {
            Name : '9',
            singer : '?',
            image :'./assets/img/song9.jpg',
            path: './assets/song-list/song9.mp3'
        },
      ],

      render : function () {
        const htmls = this.songs.map(song => {
            return`
                <div class="song">
                    <div class="thumb" 
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.Name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    </div>`
        })
        $('.playlist').innerHTML = htmls.join('')
      },

      start : function () {
          this.render()
      }
}
app.start()