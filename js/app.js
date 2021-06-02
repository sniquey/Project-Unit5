///////////////////////////////////////
// code to put image thumbnails into the html div with class imgcontainer
let html = '';
const container = document.querySelector('.imgcontainer');

for (let i=1; i<13; i++) {
    if (i < 10) {
    html += `<img src="photos/thumbnails/0${i}.jpg" alt="photo ${i}">`;
    } else {
        html += `<img src="photos/thumbnails/${i}.jpg" alt="photo ${i}">`;
    }
}

container.innerHTML = html;
//////////////////////////////////////////