// const API_BASE_URL = '';

export async function apiGet(queryString){
    console.log(queryString)
    const response = await fetch(`https://api.tvmaze.com/search/${queryString}`).then(r => r.json())
    return response;

}