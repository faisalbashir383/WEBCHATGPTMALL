import axios from 'axios';
export const searchSuplierItems=async(keywords, language)=>{
  
const options = {
  method: 'GET',
  // url: 'https://otapi-1688.p.rapidapi.com/BatchSearchItemsFrame',
  url: 'https://otapi-1688.p.rapidapi.com/BatchSearchItemsFrames',
  params: {
  language: language,
  framePosition: '0',
  frameSize: '50',
  ItemTitle: keywords,
  MinVolume: '50',
  },
  headers: {
  'X-RapidAPI-Key': '81af834222mshd8eecd103ea35fap137f84jsnb3229611d675',
  'X-RapidAPI-Host': 'otapi-1688.p.rapidapi.com'
  }
  };
  
  
  
  try {
  const response = await axios.request(options);
  return response.data.Result.Items.Items.Content
  } catch (error) {
  console.error(error);
  }
  
}
