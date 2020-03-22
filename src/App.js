import React, { useState } from 'react';
import axios from 'axios';

import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })

  const apiUrl = 'http://www.omdbapi.com/?apiKey=78074b9d';

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiUrl + "&s=" + state.s).then((data) => {
        console.log(data);
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    })

    console.log(state.s)
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
