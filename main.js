const windowSquare = document.querySelectorAll('.window');
const cameraSquare = document.querySelector('#container');
console.log(cameraSquare);
setInterval(() => {
    if (windowSquare[0].style.borderColor === 'red') {
        windowSquare[0].style.borderColor = 'greenyellow';
        cameraSquare.style.borderColor = 'greenyellow';
        windowSquare[1].style.borderColor = 'blue';
        windowSquare[2].style.borderColor = 'red';
        windowSquare[3].style.borderColor = 'greenyellow';
        windowSquare[4].style.borderColor = 'blue';
        windowSquare[5].style.borderColor = 'red';
    } else if (windowSquare[0].style.borderColor === 'greenyellow') {
        windowSquare[0].style.borderColor = 'blue';
        cameraSquare.style.borderColor = 'blue';
        windowSquare[1].style.borderColor = 'red';
        windowSquare[2].style.borderColor = 'greenyellow';
        windowSquare[3].style.borderColor = 'blue';
        windowSquare[4].style.borderColor = 'red';
        windowSquare[5].style.borderColor = 'greenyellow';
    } else {
        windowSquare[0].style.borderColor = 'red';
        cameraSquare.style.borderColor = 'red';
        windowSquare[1].style.borderColor = 'greenyellow';
        windowSquare[2].style.borderColor = 'blue';
        windowSquare[3].style.borderColor = 'red';
        windowSquare[4].style.borderColor = 'greenyellow';
        windowSquare[5].style.borderColor = 'blue';
    }
}, 1000);

const video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}