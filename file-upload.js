// File upload functionality for contact form
const fileInput = document.getElementById('files');
const fileList = document.getElementById('fileList');

if (fileInput && fileList) {
    fileInput.addEventListener('change', function(e) {
        const files = Array.from(this.files);
        fileList.innerHTML = '';

        files.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <span>${file.name} (${formatFileSize(file.size)})</span>
                <button type="button" class="file-item-remove" data-index="${index}">&times;</button>
            `;
            fileList.appendChild(fileItem);
        });

        // Add remove functionality
        document.querySelectorAll('.file-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const dt = new DataTransfer();
                const files = Array.from(fileInput.files);

                files.forEach((file, i) => {
                    if (i !== index) dt.items.add(file);
                });

                fileInput.files = dt.files;
                fileInput.dispatchEvent(new Event('change'));
            });
        });
    });
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
