const videoUrlInput = document.getElementById('videoUrl');
const downloadBtn = document.getElementById('downloadBtn');
const downloadStatus = document.getElementById('downloadStatus');

downloadBtn.addEventListener('click', () => {
	const videoUrl = videoUrlInput.value.trim();

	if (videoUrl === '') {
		downloadStatus.textContent = 'Please enter a video URL.';
		return;
	}

	downloadStatus.textContent = 'Downloading...';

	fetch(`/download?url=${videoUrl}`)
		.then(response => response.json())
		.then(data => {
			if (data.error) {
				downloadStatus.textContent = `An error occurred: ${data.error}`;
			} else {
				downloadStatus.innerHTML = `Download complete. Click <a href="${data.fileUrl}" download>here</a> to download the file.`;
			}
		})
		.catch(() => {
			downloadStatus.textContent = 'An error occurred. Please try again later.';
		});
});
