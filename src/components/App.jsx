import GamesList from './GamesList'
import SearchBarHeader from './SearchBarHeader'
import gamesArray from '../data/games'
import { useState } from 'react';

function App() {

  const [filterBy, setFilterBy] = useState("all")
  const [filterByGenre, setFilterByGenre] = useState("")
  
  const filteredGames = gamesArray.filter(game => 
  {
    if (filterBy === "all") return true
    if (filterBy === "played" ) return game.played
    if (filterBy === "unplayed" ) return !game.played
  } )

  return (
    <div className="App">

      <SearchBarHeader setFilterBy={setFilterBy} setFilterByGenre={setFilterByGenre } />

      <GamesList gamesArray={filteredGames} filterBy={filterBy} filterByGenre={filterByGenre} />

    </div>
  );
}

export default App;
