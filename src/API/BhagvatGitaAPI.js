import axios from "axios";

const MainUrl ='https://bhagavad-gita3.p.rapidapi.com/v2/chapters'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c710081029msh091669b9f833cffp14c72ajsnef139d8e26ab',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
};

const fetchChapters = async (url)=>
{
    const response = await axios.get(`${MainUrl}/${url}`,options)
    return response;
}

export default fetchChapters;