window.addEventListener('load', fetchHeadlineNews)

const apiKeyNewsDataIo = process.env.NEWSDATAIO_API_KEY_GMAIL2;

const urlHeadline = `https://newsdata.io/api/1/latest?apikey=${apiKeyNewsDataIo}&language=en`;
const urlTech = `https://newsdata.io/api/1/latest?apikey=${apiKeyNewsDataIo}&q=technology&language=en`;
const urlScience = `https://newsdata.io/api/1/latest?apikey=${apiKeyNewsDataIo}&q=science&language=en`;
const urlHealth = `https://newsdata.io/api/1/latest?apikey=${apiKeyNewsDataIo}&q=health&language=en`;

const placeholderImage = new URL('../images/image-placeholder.png', import.meta.url).href;

// HEADLINE FETCH and BTN
const topNewsBtn = document.querySelector('#top-news');
topNewsBtn.addEventListener('click', fetchHeadlineNews);

async function fetchHeadlineNews() {
    // console.log('test headline')
    clearNoResults();
    
    try {
        const response = await fetch(urlHeadline);
        const data = await response.json();
        // console.log(data.results);
        const results = data.results;
        // console.log(results);

        displayNews(results);

    } catch (error) {
        console.error(`Fetch Error MK`, error)
    }
}

// TECH FETCH and BTN 
const techNewsBtn = document.querySelector('#tech-news');
techNewsBtn.addEventListener('click', fetchTechNews)

async function fetchTechNews() {
    // console.log('test tech')
    clearNoResults();
    
    try {
        const response = await fetch(urlTech);
        const data = await response.json();
        // console.log(data);
        const results = data.results;
        // console.log(results);
        displayNews(results)
    } catch(error) {
        console.error(`Fetch Error MK`, error)
    }
}

// SCIENCE FETCH and BTN
const scienceNewsBtn = document.querySelector('#science-news');
scienceNewsBtn.addEventListener('click', fetchScienceNews)

async function fetchScienceNews() {
    // console.log('test science');
    clearNoResults();

    try {
        const response = await fetch(urlScience);
        const data = await response.json();
        // console.log(data);
        const results = data.results;
        // console.log(results);
        displayNews(results);
    } catch(error) {
        console.error('There was an error!', error)
    }

}


// HEALTH FETCH and BTN
const healthNewsBtn = document.querySelector('#health-news');
healthNewsBtn.addEventListener('click', fetchHealthNews);

async function fetchHealthNews() {
    // console.log('test health');
    clearNoResults();

    try {
        const response = await fetch(urlHealth);
        const data = await response.json();
        // console.log(data);
        const results = data.results;
        // console.log(results);
        displayNews(results);
    } catch {
        console.error('There was an error!', error)
    }
};

// QUERY ELEMENTS
const queryInput = document.querySelector('#query-input');
const queryBtn = document.querySelector('#search-btn');
queryBtn.addEventListener('click', assembleQueryUrl);
const noResultsDiv = document.querySelector('#no-results');

// ENTER BUTTON ACTIVATES SEARCH
queryInput.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter') {
        event.preventDefault();
        queryBtn.click()
    }
});

// BUILD QUERY FETCH URL
function assembleQueryUrl() {
    const query = queryInput.value.trim();
    if (!query) return;
    const queryUrl = `https://newsdata.io/api/1/latest?apikey=${apiKeyNewsDataIo}&q=${query}&language=en`;
    fetchQueryNews(queryUrl)
    queryInput.value = "";
}

// QUERY FETCH
async function fetchQueryNews(queryUrl) {
    try {
        const response = await fetch(queryUrl);
        const data = await response.json();
        // console.log(data);
        const results = data.results;
        // console.log(results);
        clearNoResults();
        displayNews(results);
    } catch(error) {
        console.error('There was an error!', error)
    }
}

// BUILD CARDS AND DISPLAY RESULtS
function displayNews(results) {
    let newsDiv = document.querySelector('#news');
    while (newsDiv.firstChild) {
        newsDiv.removeChild(newsDiv.firstChild);
    }
    for (const result of results) {
        try {
            const articleDiv = document.createElement('div');
            const cardBodyDiv = document.createElement('div');
            const title = document.createElement('h4');
            const img = document.createElement('img');
            const anchorForImg = document.createElement('a');
            const description = document.createElement('p');
            const anchor = document.createElement('a');
            articleDiv.classList.add('news-card', 'col-12', 'col-lg-5', 'card');
            cardBodyDiv.classList.add('card-body');
            anchor.classList.add('read-more-btn');
            anchor.target = '_blank';
            title.classList.add('card-title');
            title.textContent = `${result.title.toUpperCase().slice(0, 60)}...`;
            anchorForImg.href = result.image_url;
            anchorForImg.target = '_blank';

            if (!result.image_url) {
                img.src = placeholderImage;
                // console.log('placeholder image')
            } else {
                img.src = result.image_url
            }

            img.alt = `Image from ${result.source_name}`;
            img.classList.add('news-image', 'card-img-top');
            description.classList.add('card-text');

            try {
                description.textContent = `${result.description.slice(0, 120)}...`;
            } catch(error) {
                console.error('MK description error', error)
            }

            anchor.textContent = 'Read More';
            anchor.href = result.link;
            anchor.classList.add('btn','btn-primary');

            articleDiv.appendChild(anchorForImg);
            anchorForImg.appendChild(img);
            articleDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(title);
            cardBodyDiv.appendChild(description);
            articleDiv.appendChild(anchor);

            newsDiv.appendChild(articleDiv);

            // console.log(result.image_url);
            // console.log(result.title);
            // console.log(result.description)
        } catch(error) {
            console.error('Card build error', error)
        }
    }
        

    if(results.length === 0) {
            // console.log('test');
        const noResultsMessage = document.createElement('h3');
        noResultsMessage.textContent = 'No articles found...';
        noResultsDiv.appendChild(noResultsMessage);
        return;
    }
}

function clearNoResults() {
    while(noResultsDiv.firstChild) {
        noResultsDiv.removeChild(noResultsDiv.firstChild)
    }
}

