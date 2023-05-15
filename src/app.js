/**
 * Resizes an image and displays it on the specified element.
 * @param {string} img - The URL of the image to resize.
 * @param {string} attr - The CSS selector of the element to display the resized image.
 * @param {number} [maxWidth=150] - The maximum width of the resized image.
 * @param {number} [maxHeight=150] - The maximum height of the resized image.
 */
async function imgLow(img, attr, maxWidth = 150, maxHeight = 150) {
    const response = await fetch(img);
    const data = await response.blob();
    const imageFile = data;

    const reader = new FileReader();
    reader.onload = () => {
        const imgElement = new Image();
        imgElement.onload = () => {
            const aspectRatio = imgElement.width / imgElement.height;
            let targetWidth = maxWidth;
            let targetHeight = maxHeight;

            // Calculate dimensions based on aspect ratio
            if (aspectRatio > 1) {
                targetHeight = Math.round(targetWidth / aspectRatio);
            } else {
                targetWidth = Math.round(targetHeight * aspectRatio);
            }

            const canvas = document.querySelector("#canvas");
            const ctx = canvas.getContext("2d");

            // Set canvas dimensions and draw the resized image
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.drawImage(imgElement, 0, 0, targetWidth, targetHeight);

            // Convert canvas content to a data URL and assign it to the specified element
            const dataUrl = canvas.toDataURL(imageFile.type);
            document.querySelector(attr).src = dataUrl;
        };
        imgElement.src = reader.result;
    };
    reader.readAsDataURL(imageFile);
}

// Usage example:
const image = document.querySelector('#img');

imgLow(
    'https://images.pexels.com/photos/912469/pexels-photo-912469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    '#img',
    200
);
