// 🎵 Background music setup
const music = new Howl({
  src: ['assets/music/hbd.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.4
});

function toggleMusic() {
  if (music.playing()) {
    music.pause();
  } else {
    music.play();
  }
}

// 📜 Load friend messages from JSON
fetch('data/messages.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('friendMessages');
    data.forEach(msg => {
      const el = document.createElement('div');
      el.className = "bg-white p-4 rounded-lg shadow";
      el.innerHTML = `<strong>${msg.name}:</strong> <p>${msg.message}</p>`;
      container.appendChild(el);
    });
  });
