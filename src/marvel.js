// const ts = 1679627411764
// const hash = "9770dbd31f88df8402b6003f18465292"
// const apiKey = "28d1eff87f424ef31391c5eb9ff016b7"

// export const fetchComics = async () => {
//     const comics = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`).then(res => res.json())
//     // if(!comics.data.results[0].images[0]){
//     //     return "https://abravidro.org.br/wp-content/uploads/2015/04/sem-imagem7.jpg"
//     // }s
//     console.log(comics)
//     const filtered = comics.data.results.filter(comicWithImage => !!comicWithImage.images[0])
//     console.log(filtered)
//     const imagens = filtered.map(comic => comic.images[0].path)
//     console.log(imagens)
//     // const xmen = comics.data.results[0].images[0]
//     // // console.log(`${xmen.path}.${xmen.extension}`)
//     // return `${xmen.path}.${xmen.extension}`
// }
// import md5 from 'md5';

// const publicKey = '28d1eff87f424ef31391c5eb9ff016b7';
// const privateKey = 'de1a26ee31c4db12e06bbd71ca5f0e1b6099d0ab';
// const timestamp = Date.now();
// const hash = md5(timestamp + privateKey + publicKey);

// fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
