# imgLow

The `imgLow` function is a utility for resizing and displaying images in JavaScript. It provides a convenient way to resize an image and assign the resized version to an HTML element's `src` attribute.

## Usage

To use the `imgLow` function, follow these steps:

1. Include the `imgLow` function in your JavaScript code or import it as needed.

2. Call the `imgLow` function, providing the necessary parameters:

   ```javascript
   imgLow(img, attr, maxWidth = 150, maxHeight = 150);
   ```

   - `img` (string): The URL of the image to be resized.
   - `attr` (string): The CSS selector of the HTML element where the resized image should be displayed.
   - `maxWidth` (number, optional): The maximum width of the resized image (default is 150 pixels).
   - `maxHeight` (number, optional): The maximum height of the resized image (default is 150 pixels).

3. The `imgLow` function will load the image, resize it based on the specified dimensions, and assign the resized version to the specified HTML element.

## Example

Here's an example that demonstrates how to use the `imgLow` function:

```javascript
const image = document.querySelector('#img');

imgLow(
  'https://example.com/path/to/image.jpg',
  '#img',
  200,
  150
);
```

In this example, the `imgLow` function is called with the URL of the image to be resized (`https://example.com/path/to/image.jpg`), the CSS selector of the target HTML element (`#img`), and custom maximum width and height values (200 and 150, respectively). The function will fetch the image, resize it to fit within the specified dimensions, and assign the resized version to the `src` attribute of the `#img` element.

Make sure to replace the example URL with the actual URL of the image you want to resize, and adjust the CSS selector and dimensions according to your specific use case.

## Requirements

The `imgLow` function requires a modern web browser that supports the following features:

- `fetch` API for loading the image.
- `FileReader` API for reading the image data.
- `canvas` element and its associated methods for resizing and drawing the image.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the README file based on your specific project and requirements. Add any additional information, installation instructions, or usage examples that would be helpful for your users.