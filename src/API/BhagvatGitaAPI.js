import axios from "axios";

const MainUrl ='https://bhagavad-gita3.p.rapidapi.com/v2/chapters'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '591687f196mshbe9c4dc1cc4d36fp1fa1f3jsn96e9e1a34c9a',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
};

const fetchChapters = async (url)=>
{
    const response = await axios.get(`${MainUrl}/${url}`,options)
    return response;
}

export default fetchChapters;