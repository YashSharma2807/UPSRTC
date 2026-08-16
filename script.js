const playlist = [
    { title: "Bol Bol Bol", artist: "Ila Arun, Sudesh Bhonsle", src: "Old Songs/Ila_Arun_Sudesh_Bhonsle_Udit_Narayan_-_Bol_Bol_Bol_(mp3.pm).mp3" },
    { title: "Khalnayak Hoon Main", artist: "Khalnayak", src: "Old Songs/Khalnayak_-_Nayak_Nahin_Khalnayak_Hoon_Main_(mp3.pm).mp3" },
    { title: "Ek Hasina Thi", artist: "Kishore Kumar, Asha Bhosle", src: "Old Songs/Kishore_Kumar_Asha_Bhosle_Rishi_Kapoor_-_Ek_Hasina_Thi_Ek_Diwana_Tha_(mp3.pm).mp3" },
    { title: "Intaha Ho Gai", artist: "Kishore Kumar", src: "Old Songs/Kishore_Kumar_-_Intaha_Ho_Gai_Intezar_Ki_(mp3.pm).mp3" },
    { title: "Ek Sanam Chahiye", artist: "Kumar Sanu", src: "Old Songs/Kumar_Sanu_-_Ek_Sanam_Chahiye_(mp3.pm).mp3" },
    { title: "Teri Aankho Me", artist: "Kumar Sanu", src: "Old Songs/Kumar_Sanu_-_Teri_Aankho_Me_Dil_Hai_Mera_(mp3.pm).mp3" },
    { title: "Zeehale Muskin", artist: "Lata Mangeshkar, Shabbir Kumar", src: "Old Songs/Lata_Mangeshkar_Shabbir_Kumar_-_Zeehale_Muskin_(mp3.pm).mp3" },
    { title: "O Saathi Re 2", artist: "Muqaddar Ka Sikandar", src: "Old Songs/Muqaddar_Ka_Sikandar_1978_Vladyka_sudby_-_O_Saathi_Re_2_(mp3.pm).mp3" },
    { title: "O Saathi Re", artist: "Muqaddar Ka Sikandar", src: "Old Songs/Muqaddar_Ka_Sikandar_1978_Vladyka_sudby_-_O_Saathi_Re_(mp3.pm).mp3" },
    { title: "Salam-E-Ishq", artist: "Muqaddar Ka Sikandar", src: "Old Songs/Muqaddar_Ka_Sikandar_1978_Vladyka_sudby_-_Salam-E-Ishq_(mp3.pm).mp3" },
    { title: "Mujhse Mohabbat Ka Izhar", artist: "Navstrechu", src: "Old Songs/Navstrechu_lyubvi_Hum_Hain_Rahi_Pyaar_Ke_-_Mujhse_Mohabbat_Ka_Izhar_(mp3.pm).mp3" },
    { title: "Tu Pyar Hai Kisi Aur Ka", artist: "Sonia, Hind Qizi", src: "Old Songs/SONIA_Hind_Qizi_-_Tu_Pyar_Hai_Kisi_Aur_Ka_(mp3.pm).mp3" },
    { title: "Kya Hua Tera Vada", artist: "Sushma Shreshtha, Mohd. Rafi", src: "Old Songs/Sushma_Shreshtha_Mohd.Rafi_-_Kya_Hua_Tera_Vada_iz_My_ne_huzhe_drugih_(mp3.pm).mp3" },
    { title: "Aakhir Tumhein Aana Hai", artist: "Udit Narayan, Sapna Mukherjee", src: "Old Songs/Udit_Narayan_Sapna_Mukherjee_-_Aakhir_Tumhein_Aana_Hai_From_Yalgaar_(mp3.pm).mp3" }
];

let currentTrackIndex = 0;
const audio = document.getElementById('background-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volUpBtn = document.getElementById('vol-up-btn');
const volDownBtn = document.getElementById('vol-down-btn');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

// Initial volume setting
audio.volume = 0.7;

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    audio.load();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    } else {
        audio.pause();
        playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>`;
    }
}

function getRandomIndex() {
    return Math.floor(Math.random() * playlist.length);
}

function nextTrack() {
    currentTrackIndex = getRandomIndex();
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
}

function prevTrack() {
    currentTrackIndex = getRandomIndex();
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
}

// Fixed Volume Functions
function volumeUp() {
    if (audio.volume <= 0.9) {
        audio.volume = parseFloat((audio.volume + 0.1).toFixed(1));
    }
}

function volumeDown() {
    if (audio.volume >= 0.1) {
        audio.volume = parseFloat((audio.volume - 0.1).toFixed(1));
    }
}

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
volUpBtn.addEventListener('click', volumeUp);
volDownBtn.addEventListener('click', volumeDown);
audio.addEventListener('ended', nextTrack);

// Initialize random song
currentTrackIndex = getRandomIndex();
loadTrack(currentTrackIndex);
