import { useState, useEffect } from "react";
import './index.css';


function App() {
  const [comics, setComics] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);

  const fetchComics = async () => {
    const timestamp = 1679627411764;
    const hash = "9770dbd31f88df8402b6003f18465292";
    const apiKey = "28d1eff87f424ef31391c5eb9ff016b7";
    const url = `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.results) {
      setComics(data.data.results);
    }
  };

  useEffect(() => {
    fetchComics();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    const timestamp = 1679627411764;
    const hash = "9770dbd31f88df8402b6003f18465292";
    const apiKey = "28d1eff87f424ef31391c5eb9ff016b7";
    const url = `http://gateway.marvel.com/v1/public/comics?titleStartsWith=${searchValue}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.results) {
      setComics(data.data.results);
    }
  };

  const handleOpenModal = (comic) => {
    setSelectedComic(comic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedComic(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <label>
          Search comics by title:
          <input type="text" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <button onClick={() => handleOpenModal(comic)}>
              <img
                src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <p>{comic.title}</p>
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedComic.title}</h2>
            <img
              src={`${selectedComic.thumbnail.path}/portrait_uncanny.${selectedComic.thumbnail.extension}`}
              alt={selectedComic.title}
            />
            <p>{selectedComic.description}</p>
            <ul>
              {selectedComic.characters.items.map((character) => (
                <li key={character.name}>{character.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
