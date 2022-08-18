const music=new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id:1,
        songName:`You Are The Reason
        <br> <div class="subtitle">Calum Scott</div>`,
        poster:"images/1.jpeg",

    },
    {
        id:2,
        songName:`Agar Tum Sath Ho
        <br> <div class="subtitle">Arijit Singh</div>`,
        poster:"images/2.jpeg",

    },
    {
        id:3,
        songName:`Bpraak & Jaani Live
        <br> <div class="subtitle">Bpraak & Jaani Live </div>`,
        poster:"images/3.jpeg",

    },
    {
        id:4,
        songName:`Let Her Go 
        <br> <div class="subtitle">Passenger</div>`,
        poster:"images/4.jpeg",

    },
    {
        id:5,
        songName:`Ektarfa
        <br> <div class="subtitle">King</div>`,
        poster:"images/5.jpeg",

    },
    {
        id:6,
        songName:`Tere Naino Mein
        <br> <div class="subtitle">Bilz & kashif </div>`,
        poster:"images/6.jpeg",

    },
    {
        id:7,
        songName:`Milleya Milleya
        <br> <div class="subtitle">Rekha Bhardwaj</div>`,
        poster:"images/7.jpeg",

    },
    {
        id:8,
        songName:`Rock On
        <br> <div class="subtitle">Farhan Akhtar </div>`,
        poster:"images/8.jpeg",

    },
    {
        id:9,
        songName:`Aadat
        <br> <div class="subtitle">Jal The Band </div>`,
        poster:"images/9.jpeg",

    },
    {
        id:10,
        songName:`Dus Bahane
        <br> <div class="subtitle">KK & Sunidhi </div>`,
        poster:"images/10.jpeg",

    },
    {
        id:11,
        songName:`Spaceship
        <br> <div class="subtitle">AP Dhillon</div>`,
        poster:"images/11.jpeg",

    },
    {
        id:12,
        songName:`Afgan jalebi 
        <br> <div class="subtitle">Akhtar chanal Zahir</div>`,
        poster:"images/12.jpeg",

    },
    {
        id:13,
        songName:`Mercy
        <br> <div class="subtitle">Badshah</div>`,
        poster:"images/13.jpeg",

    },
    {
        id:14,
        songName:`Proper Patola
        <br> <div class="subtitle">Badshah</div>`,
        poster:"images/14.jpeg",

    },
    {
        id:15,
        songName:`Phir Se Udd Chala
        <br> <div class="subtitle">Mohit Chauhan</div>`,
        poster:"images/15.jpeg",

    },
    {
        id:16,
        songName:`Desi Kalakaar
        <br> <div class="subtitle">Honey Singh </div>`,
        poster:"images/16.jpeg",

    },
    {
        id:17,
        songName:`Dope Shope
        <br> <div class="subtitle">Honey Singh </div>`,
        poster:"images/17.jpeg",

    },
    {
        id:18,
        songName:`Laree Choote
        <br> <div class="subtitle">Call </div>`,
        poster:"images/18.jpeg",

    },
    {
        id:19,
        songName:`Jiyen Kyun
        <br> <div class="subtitle">Papon</div>`,
        poster:"images/19.jpeg",

    },
    {
        id:20,
        songName:`Firework
        <br> <div class="subtitle">Katty Perry</div>`,
        poster:"images/20.jpeg",

    },
    {
        id:21,
        songName:`Dooriyan
        <br> <div class="subtitle">Dino james</div>`,
        poster:"images/21.jpeg",

    },
    {
        id:22,
        songName:`Pichle Saat Dino Mein
        <br> <div class="subtitle">Farhan Akhtar</div>`,
        poster:"images/22.jpeg",

    },
    {
        id:23,
        songName:`Wolves
        <br> <div class="subtitle">Selena Gomez</div>`,
        poster:"images/23.jpeg",

    },
    {
        id:24,
        songName:`Kaam 25
        <br> <div class="subtitle">Divine</div>`,
        poster:"images/24.jpeg",

    },
    {
        id:25,
        songName:`Tere bin
        <br> <div class="subtitle">Atif Aslam</div>`,
        poster:"images/25.jpeg",

    },
    {
        id:26,
        songName:`Taj Dar-e-haram
        <br> <div class="subtitle">Atif Aslam</div>`,
        poster:"images/26.jpeg",

    },
    {
        id:27,
        songName:`295
        <br> <div class="subtitle">Siddhu Moosewala </div>`,
        poster:"images/27.jpeg",

    },

    
]

Array.from(document.getElementsByClassName ('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let search_results=document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id,songName,poster}= element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href='#'+ id;
    card.innerHTML= ` <img src="${poster}" alt="">
                        <div class="content">
                            ${songName}
                         </div>`;
    
    search_results.appendChild(card);
});


let input =document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    
    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display='flex';
        } else {
            items[index].style.display='none';
        }

        if (input.value==0) {
            search_results.style.display='none'; 
        } else {
            search_results.style.display=''; 
        }
    }
})

let masterPlay =document.getElementById('masterPlay'); 
let wave =document.getElementById('wave'); 

masterPlay.addEventListener('click', ()=>{
     if (music.paused || music.currentTime <=0) {
         music.play(); 
         wave.classList.add('active1');
         masterPlay.classList.add('bi-pause-fill');
         masterPlay.classList.remove('bi-play-fill');

     } else {
         music.pause();
         wave.classList.remove('active1');
         masterPlay.classList.remove('bi-pause-fill');
         masterPlay.classList.add ('bi-play-fill');
     }
});

const makeAllPlays  =() => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}
const makeAllBackground =() => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105, 105,  .0)';
    })
}

let index=0;
let poster_master_play= document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title= document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
     e.addEventListener('click',(el)=>{
         index=el.target.id; 
         music.src=`audio/${index }.mp3`;
         poster_master_play.src=`images/${index }.jpeg `;
         music.play();
         masterPlay.classList.add('bi-pause-fill');
         masterPlay.classList.remove('bi-play-fill');
        download_music.href=`audio/${index}.mp3`;
         let songTitles= songs.filter((els)=>{
             return els.id== index;
         });

         songTitles.forEach (elss=>{
             let {songName}=elss;
             title.innerHTML=songName;
             download_music.setAttribute('download',songName);
         });

         makeAllBackground(); 
         Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105,.1)"; 
         makeAllPlays();
         el.target.classList.remove('bi-play-circle-fill');
         el.target.classList.add('bi-pause-circle-fill');
         wave.classList.remove('active1');
    })
})

let currentStart= document.getElementById('currentStart');
let currentEnd= document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }

    currentEnd.innerHTML = `${min1}:${sec1}`;

    let min2=Math.floor(music_curr / 60);
    let sec2=Math.floor(music_curr % 60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }

    currentStart.innerHTML = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    // console.log(seek.value); 
    let seekbar= seek.value;
    bar2.style.width=  `${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime= seek.value * music.duration /100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
 
vol.addEventListener('change',()=>{
     if (vol.value==0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;  

    music.volume = vol_a/100;
});

let back =document.getElementById('back');
let next =document.getElementById('next'); 

back.addEventListener('click',()=>{
     index -=1;

    if (index<1) {
        index=Array.from(document.getElementsByClassName('songItem ')).length;
    }

     music.src=`audio/${index }.mp3`;
     poster_master_play.src=`images/${index }.jpeg `;
     music.play();
     masterPlay.classList.add('bi-pause-fill');
     masterPlay.classList.remove('bi-play-fill');

     let songTitles= songs.filter((els)=>{
         return els.id== index;
     });

     songTitles.forEach (elss=>{
         let {songName}=elss;
         title.innerHTML=songName;
     });

     makeAllBackground(); 
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105,.1)"; 
     makeAllPlays();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
     wave.classList.remove('active1');
})

next.addEventListener('click',()=>{
    index++;
    
    if (index>Array.from(document.getElementsByClassName('songItem ')).length) {
        index=1;
    }

     music.src=`audio/${index }.mp3`;
     poster_master_play.src=`images/${index }.jpeg `;
     music.play();
     masterPlay.classList.add('bi-pause-fill');
     masterPlay.classList.remove('bi-play-fill');

     let songTitles= songs.filter((els)=>{
         return els.id== index;
     });

     songTitles.forEach (elss=>{
         let {songName}=elss;
         title.innerHTML=songName;
     });

     makeAllBackground(); 
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105,.1)"; 
     makeAllPlays();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
     wave.classList.remove('active1');
})


let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right= document.getElementById('pop_song_right'); 
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener ('click',()=>{
    pop_song.scrollLeft += 330; 
});


pop_song_left.addEventListener ('click',()=>{
    pop_song.scrollLeft -= 330; 
});


let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right= document.getElementById('pop_art_right'); 
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener ('click',()=>{
    Artists_bx.scrollLeft += 330; 
});

pop_art_left.addEventListener ('click',()=>{
    Artists_bx.scrollLeft -= 330; 
});

let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');

            shuffle.innerHTML='repeat';
            break;
    
        case"repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');

            shuffle.innerHTML='random'; 
            break;
        
        case"random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');

            shuffle.innerHTML='next'; 
            break; 
            
    }
});

music.addEventListener('ended',()=>{
    // index ++; 
   
});

const next_music= () =>{
    if (index==songs.length) {
        index=1;
    } else {
        index++;
    }
    music.src=`audio/${index }.mp3`;
    poster_master_play.src=`images/${index }.jpeg `;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
   download_music.href=`audio/${index}.mp3`;
    let songTitles= songs.filter((els)=>{
        return els.id== index;
    });

    songTitles.forEach (elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground(); 
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105,.1)"; 
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.remove('active1'); 
}

const repeat_music= () =>{
   index;
    music.src=`audio/${index }.mp3`;
    poster_master_play.src=`images/${index }.jpeg `;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
   download_music.href=`audio/${index}.mp3`;
    let songTitles= songs.filter((els)=>{
        return els.id== index;
    });

    songTitles.forEach (elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground(); 
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105,.1)"; 
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.remove('active1'); 
}

const random_music= () =>{
    if (index==songs.length) {
        index=1;
    } else {
        index=Math.floor((Math.random()*songs.length)+1);
    }
     music.src=`audio/${index }.mp3`;
     poster_master_play.src=`images/${index }.jpeg `;
     music.play();
     masterPlay.classList.add('bi-pause-fill');
     masterPlay.classList.remove('bi-play-fill');
    download_music.href=`audio/${index}.mp3`;
     let songTitles= songs.filter((els)=>{
         return els.id== index;
     });
 
     songTitles.forEach (elss=>{
         let {songName}=elss;
         title.innerHTML=songName;
         download_music.setAttribute('download',songName);
     });
 
     makeAllBackground(); 
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105,.1)"; 
     makeAllPlays();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
     wave.classList.remove('active1'); 
 }

 music.addEventListener('ended',()=>{
    // index ++; 
    let b=shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'random':
            random_music();
            break;
        case 'next':
            next_music();
            break;    
    }
}); 