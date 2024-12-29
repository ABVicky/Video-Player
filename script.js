const uploadInput = document.getElementById('uploadInput');
const videoList = document.getElementById('videoList');
const mainVideo = document.getElementById('mainVideo');

// Array to store recently played videos
const recentlyPlayed = [];

uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);

    // Play the selected video
    mainVideo.src = videoURL;
    mainVideo.play();

    // Add to the list of recently played videos
    addVideoToList(file.name, videoURL);
  }
});

function addVideoToList(name, url) {
  // Prevent duplicate entries
  if (recentlyPlayed.find(video => video.name === name)) return;

  const listItem = document.createElement('li');
  listItem.textContent = name;
  listItem.dataset.videoUrl = url;

  listItem.addEventListener('click', () => {
    mainVideo.src = listItem.dataset.videoUrl;
    mainVideo.play();
  });

  videoList.appendChild(listItem);
  recentlyPlayed.push({ name, url });
}
