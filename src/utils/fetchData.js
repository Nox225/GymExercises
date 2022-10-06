export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cc168e8b00msh9fb16546b81d2eep1db2a1jsn3f6cb2ec7a80',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cc168e8b00msh9fb16546b81d2eep1db2a1jsn3f6cb2ec7a80',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}