import GameCard from './GameCard'

function GamesList({ gamesArray, filterByGenre }) {

  const filteredGames = gamesArray.filter( game => game.genre.includes(filterByGenre) )

  return (
    <div className="games-list">
      { filteredGames.map((game) => <GameCard key={game.id} game={game} />) }
    </div>
  )
}

export default GamesList
