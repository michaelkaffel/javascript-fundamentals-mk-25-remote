const WAVE_POOL_MIN_HEIGHT = 42; // in inches
const WATERSLIDE_MIN_HEIGHT = 48; // in inches
const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

//init SELECTS and BUTTON
const rideSelect = document.querySelector('#ride');
const heightSelect = document.querySelector('#height');
const adultOrParentSelect = document.querySelector('#adult-or-parent');
const checkBtn = document.querySelector('#check-btn');


//import IMAGES
const wavePoolImg = new URL('../images/the-wave-pool.png', import.meta.url).href;
const lazyRiverImg = new URL('../images/the-lazy-river.png', import.meta.url).href;
const waterSlide = new URL('../images/the-thunder-waterslide.png', import.meta.url).href;
const heightChecker = new URL('../images/height-checker.png', import.meta.url).href;



//image chaneging EVENT listener
rideSelect.addEventListener('change', changeImage);

//check height button EVENT listener
checkBtn.addEventListener('click', buyTicket)

function changeImage() {
    console.log('adding an image')
    const rideImage = document.querySelector('#ride-image');
    switch (rideSelect.value) {
        case 'wave':
            rideImage.src = wavePoolImg;
            break;
        case 'river':
            rideImage.src = lazyRiverImg;
            break;
        case 'water':
            rideImage.src = waterSlide;
            break;
        case '':
            rideImage.src = heightChecker;
    }
    
}


function buyTicket() {

    const attractionType = rideSelect.value;
    console.log(rideSelect.value)
    const userHeight = heightSelect.value;
    console.log(heightSelect.value)
    const withAdult = adultOrParentSelect.value;

    if (!attractionType || !userHeight || !withAdult) {
        alert('Please fill out the form');
    }

    const isAllowed = checkHeight(attractionType, userHeight, withAdult);
    const output = document.getElementById('output-wave');
    output.style.display = 'block';
    

    if (isAllowed === true) {
        
        output.textContent = 'You are tall enough for the ride';
    } else {
        
        output.textContent = 'You are not tall enough for this ride';
        output.style.backgroundColor = 'red';
        output.style.color = 'black';
    }
}

function checkHeight(attraction, height, withAdult) {
    
    if ((attraction === 'wave') && (height > WAVE_POOL_MIN_HEIGHT)) {
        return true;
    } else if ((attraction === 'water') && (height > WATERSLIDE_MIN_HEIGHT)) {
        return true
    } else if ((attraction === 'river') && (height > LAZY_RIVER_MIN_HEIGHT)) {
        return true
    } else if ((attraction === 'water') && (height > 42) && (withAdult === 'yes')) {
        return true
    } else {
        return false
    }
}