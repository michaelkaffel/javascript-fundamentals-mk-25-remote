window.addEventListener('load', fetchHeadlineNews)

const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const techURL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;
const scienceURL = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`;
const healthURL = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`;


// Headline button build and headline news fetch
const topNewsBtn = document.querySelector('#top-news');
topNewsBtn.addEventListener('click', fetchHeadlineNews);

async function fetchHeadlineNews() {
    clearNoResults()
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(`There was an error!`, error)
    }
}

// Tech button build and tech news fetch
const techNewsBtn = document.querySelector('#tech-news');
techNewsBtn.addEventListener('click', fetchTechNews);

async function fetchTechNews() {
    clearNoResults()

    try {
        const response = await fetch(techURL);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(`There was an error!`, error)
    }
}

// Science button build and science news fetch
const scienceNewsBtn = document.querySelector('#science-news');
scienceNewsBtn.addEventListener('click', fetchScienceNews);

async function fetchScienceNews() {
    clearNoResults()

    try {
        const response = await fetch(scienceURL);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(`There was an error!`, error)
    }
}

// Health button build and health news fetch
const healthNewsBtn = document.querySelector('#health-news');
healthNewsBtn.addEventListener('click', fetchHealthNews);

async function fetchHealthNews() {
    clearNoResults()

    try {
        const response = await fetch(healthURL);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(`There was an error!`, error)
    }
}

// Query elements and search functionality
const queryInput = document.querySelector('#query-input');
const queryBtn = document.querySelector('#search-btn');
queryBtn.addEventListener('click', searchForQuery);
const noResultsDiv = document.querySelector('#no-results')


// Enter button can trigger search function
queryInput.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter') {
        event.preventDefault();
        queryBtn.click()
    }
})


// Pull query from input and fetch query
function searchForQuery() {

    const searchTerm = queryInput.value.trim();
    if (!searchTerm) return;
    const queryURL = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${apiKey}`;
    fetchQueryNews(queryURL);
    
    queryInput.value = "";
}







async function fetchQueryNews(queryURL) {


    // try {
        const response = await fetch(queryURL);
        const data = await response.json();
        
        clearNoResults();

         

        displayNews(data.articles);
        console.log(data);
    // } catch (error) {
    //     console.error(`There was an error!`, error)
    // }

    
}



// get search term from Input
// assign to a URL
// insert into the fetch


// Build elements from fetched data
function displayNews(articles) {
    let newsDiv = document.querySelector('#news');
    while (newsDiv.firstChild) {
        newsDiv.removeChild(newsDiv.firstChild);
    }


    for (const article of articles) {
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
        title.textContent = `${article.title.toUpperCase().slice(0, 60)}...`;
        anchorForImg.href = article.url;
        anchorForImg.target = '_blank';
        img.src = article.urlToImage;



        // console.log(`${article.title}  ${img.src}`)
        img.alt = `Image from ${article.source.name}`;
        img.classList.add('news-image');
        img.classList.add('card-img-top');
        description.classList.add('card-text');

        try {
            description.textContent = `${article.description.slice(0, 120)}...`;
        } catch (error) {
            console.log(error.message)
            description.textContent = `Could not load description. Please click link to learn more...`;

        }

        anchor.textContent = 'Read More';
        anchor.href = article.url;
        anchor.classList.add('btn', 'btn-primary')

        // Build append elements
        articleDiv.appendChild(anchorForImg);
        anchorForImg.appendChild(img);
        articleDiv.appendChild(cardBodyDiv);
        cardBodyDiv.appendChild(title);
        cardBodyDiv.appendChild(description);
        articleDiv.appendChild(anchor);


        newsDiv.appendChild(articleDiv);

    }

    if(articles.length === 0) {
            console.log('test');
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
