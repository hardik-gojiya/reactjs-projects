import { useState } from "react";
import "./App.css";

function App() {
  let nextId = 0;
  const [name, setName] = useState();
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>artists Names:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button key={artist}
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
