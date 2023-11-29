export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J3ilkk8OZzB4xoBi3gtf2NWOVexqfOoW&q=${category}&limit=10`;
    const response = await fetch(url);

    const { data } = await response.json();
    
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });
    return gifs; 
  
  }catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
