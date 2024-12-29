const uploadInput = document.getElementById('uploadInput');
const videoList = document.getElementById('videoList');
const mainVideo = document.getElementById('mainVideo');
const videoSource = document.getElementById('videoSource');

uploadInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);

    files.forEach(file => {
    const videoURL = URL.createObjectURL(file);

    // Add the video to the list
    const listItem = document.createElement('li');
    listItem.textContent = file.name;
    listItem.dataset.videoUrl = videoURL;

    // Play video on click
    listItem.addEventListener('click', () => {
        videoSource.src = listItem.dataset.videoUrl;
        mainVideo.load();
        mainVideo.play();
    });

    videoList.appendChild(listItem);
    });

    // Reset the input
    uploadInput.value = '';
});