import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from './queries/anime';
import { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState({
    page: 1,
    perPage: 10
  })

  const { loading, error, data, refetch } = useQuery(GET_ANIME_LIST, {
    variables: query
  })

  if (loading) {
    return (
      <div>
        Hello
      </div>
    )
  }

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log(error)
  }

  const doRefecth = () => {
    console.log("WOW")
    setQuery({ ...query, page: query.page + 1 })
    refetch()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => { doRefecth() }}
        >
          Hello
        </button>
      </header>
    </div>
  );
}

export default App;
