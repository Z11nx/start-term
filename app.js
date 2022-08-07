//selectors
const comInput = document.querySelector('.text-field');
const bg = document.querySelector('.bg');
const borderVar = '--border';
const bgVar = '--background';
const frontImg = '--front-img';
const vignette = '--vignette-overlay-exists';

//event listeners
comInput.addEventListener('keypress', commands);

//functions
function commands(e) {
    if (e.key === 'Enter') {
        if (comInput.value === 'bg 2'){
            document.documentElement.style.setProperty(bgVar, 'url(pictures/2.jpg)');
        }

        if (comInput.value === 'bg 1'){
            document.documentElement.style.setProperty(bgVar, 'url(pictures/1.jpg)');
        }

        if (comInput.value === 'front-img 1'){
            document.documentElement.style.setProperty(frontImg, 'url(pictures/1.jpg)');
        }

        if (comInput.value === 'front-img 2'){
            document.documentElement.style.setProperty(frontImg, 'url(pictures/2.jpg)');
        }

        if (comInput.value === 'v off'){
            document.documentElement.style.setProperty(vignette, 'hidden');
        }

        if (comInput.value === 'v on'){
            document.documentElement.style.setProperty(vignette, 'visible');
        }

        else {
            //window.open('https://www.google.com/search?q=' + comInput.value, '_blank');
        }

        comInput.value = '';
    }
}