// Video Player Controls
const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const videoOverlay = document.getElementById('videoOverlay');

playButton.addEventListener('click', () => {
    videoPlayer.play();
    videoOverlay.classList.add('hidden');
});

videoPlayer.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        videoOverlay.classList.add('hidden');
    } else {
        videoPlayer.pause();
        videoOverlay.classList.remove('hidden');
    }
});

videoPlayer.addEventListener('pause', () => {
    videoOverlay.classList.remove('hidden');
});

videoPlayer.addEventListener('play', () => {
    videoOverlay.classList.add('hidden');
});

// Video Upload Functionality
const uploadButton = document.getElementById('uploadButton');
const videoUpload = document.getElementById('videoUpload');
const uploadInfo = document.getElementById('uploadInfo');

uploadButton.addEventListener('click', () => {
    videoUpload.click();
});

videoUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file) {
        // Validate file type
        if (!file.type.startsWith('video/')) {
            uploadInfo.textContent = 'Please select a valid video file';
            uploadInfo.style.color = '#ef4444';
            return;
        }

        // Display file info
        const fileSize = (file.size / (1024 * 1024)).toFixed(2);
        uploadInfo.textContent = `Selected: ${file.name} (${fileSize} MB)`;
        uploadInfo.style.color = '#10b981';

        // Create object URL and load video
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        
        // Show success message
        setTimeout(() => {
            uploadInfo.textContent = 'Video loaded successfully! Click play to preview.';
        }, 500);

        // Clean up object URL when video is loaded
        videoPlayer.addEventListener('loadeddata', () => {
            URL.revokeObjectURL(videoURL);
        }, { once: true });
    }
});

// View buttons functionality
const viewButtons = document.querySelectorAll('.view-button');
viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const timeText = e.target.textContent;
        const timeMatch = timeText.match(/(\d+):(\d+)/);
        
        if (timeMatch) {
            const minutes = parseInt(timeMatch[1]);
            const seconds = parseInt(timeMatch[2]);
            const totalSeconds = minutes * 60 + seconds;
            
            videoPlayer.currentTime = totalSeconds;
            videoPlayer.play();
            
            // Scroll to video
            videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// Action buttons
const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent;
        alert(`${action} functionality would be implemented here`);
    });
});

// Animate metrics on load
window.addEventListener('load', () => {
    const metricBars = document.querySelectorAll('.bar-fill');
    metricBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});