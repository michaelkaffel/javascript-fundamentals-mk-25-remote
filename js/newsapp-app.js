const apiKey = process.env.GNEWS_API_KEY_GMAIL;
const url = `https://gnews.io/api/v4/search?q=trump&lang=en&country=us&max=10&apikey=${apiKey}`

async function fetchNews() {
    const dataReceived = await fetch(url);
    const dataParsed = await dataReceived.json();
    console.log(dataParsed.articles.length)
    console.log(dataParsed.articles[0].title);
    console.log(dataParsed.articles[0].source.name);
    console.log(dataParsed.articles[0].description);
    console.log(dataParsed.articles[0].content);
    console.log(dataParsed.articles[0].image);    
    console.log(dataParsed.articles[0].url);
    return dataParsed.articles[0];

}


console.log(fetchNews());