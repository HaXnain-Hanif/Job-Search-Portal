export const options = {
    method: 'GET',
    params: {page: '1', num_pages: '1'},
    headers: {
      'X-RapidAPI-Key': 'b7c1a21bafmshfb63cc7f4927836p14b1aejsncddb222d57e7',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };


export const fetchData = async(url, option) =>{
    const data = await fetch(url, option);
    const result = data.json();

    return result;
}