const WAVE_POOL_MIN_HEIGHT = 42; // in inches
const WATERSLIDE_MIN_HEIGHT = 48; // in inches
const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

function buyTicket() {

    const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water" for waterslide, or "river" for lazy river?');
    const userHeight = prompt('What is your height in inches?');
    console.log("User's selected attraction is " + attractionType);
    console.log("User's height is " + userHeight);

    const isAllowed = checkHeight(attractionType, userHeight);
    const output = document.getElementById('output');
    

    if (isAllowed === true) {
        alert('You are tall enough for the ride');
        output.textContent = 'You are tall enough for the ride';
    } else {
        alert('You are not tall enough for this ride')
        output.textContent = 'You are not tall enough for this ride';
    }
}

function checkHeight(attraction, height,) {
    const withAdult = prompt('Are you accompanied by an adult? (please respond "yes" or "no")')
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