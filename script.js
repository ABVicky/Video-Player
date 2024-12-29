const uploadInput = document.getElementById('uploadInput');
    const videoList = document.getElementById('videoList');
    const mainVideo = document.getElementById('mainVideo');
    const videoSource = document.getElementById('videoSource');

    // Load videos from local storage on page load
    window.addEventListener('load', () => {
      const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];

      savedVideos.forEach(video => {
        addVideoToList(video.name, video.url);
      });
    });

    uploadInput.addEventListener('change', (event) => {
      const files = Array.from(event.target.files);

      files.forEach(file => {
        const videoURL = URL.createObjectURL(file);

        // Save video info to local storage
        const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
        savedVideos.push({ name: file.name, url: videoURL });
        localStorage.setItem('videos', JSON.stringify(savedVideos));

        // Add the video to the list
        addVideoToList(file.name, videoURL);
      });

      // Reset the input
      uploadInput.value = '';
    });

    function addVideoToList(name, url) {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      listItem.dataset.videoUrl = url;

      // Play video on click
      listItem.addEventListener('click', () => {
        videoSource.src = listItem.dataset.videoUrl;
        mainVideo.load();
        mainVideo.play();
      });

      videoList.appendChild(listItem);
    }
