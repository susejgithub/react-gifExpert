export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4gsx4fz2sgfXWzW4SBHC6isI90ZoSyAF&q=${ category }&limit=20`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    
    //console.log(data);
    const gifs =  data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    console.log(gifs);
    return gifs;
}