// This function will be used to update the width of the loading bar based on a value
function updateLoadingBar(value) {
  document.getElementById("loading").style.width = 100 + "px";
}

// // This function will be used to change the background color with RGBA
// function updateBackgroundColor(r, g, b, alpha) {
//   document.getElementsByClassName(
//     "wrapper"
//   )[0].style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }

// // This function will be used to change the font size
// function updateFontSize(size) {
//   document.getElementsByClassName("text")[0].style.fontSize = size + "px";
// }

// // This function will be used to change the font weight
// function updateFontWeight(weight) {
//   document.getElementsByClassName(
//     "text"
//   )[0].style.fontVariationSettings = `"wght" ${weight}`;
// }

// // This function will be used to display the value in specific spans
// function displayData(value, height, width) {
//   document.getElementById("data-span").innerText = value;
//   document.getElementById("height-span").innerText = height;
//   document.getElementById("width-span").innerText = width;
// }

// // Example usage: You can call these functions inside script.js whenever needed

// // Assuming you have some trigger event to call the functions (from script.js)
// // For example, after you receive a serial port value or perform some calculation

// // Usage example
// // updateLoadingBar(150); // Sets the width of the loading bar to 150px
// // updateBackgroundColor(100, 100, 100, 0.4); // Sets background to rgba(100, 100, 100, 0.4)
// // updateFontSize(100); // Sets font size to 100px
// // updateFontWeight(100); // Sets font weight to 100
// // displayData(42, 180, 200); // Updates span elements with value, height, and width
