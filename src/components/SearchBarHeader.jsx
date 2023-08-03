function SearchBarHeader({ setFilterBy,setFilterByGenre }) {

  return (
    <div className="search-bar-header">

      <button onClick={(e) => setFilterBy(e.target.name)} name="all" >Show All Games</button>
      <button onClick={(e) => setFilterBy(e.target.name)} name="played" >Show Played Games</button>
      <button onClick={(e) => setFilterBy(e.target.name)} name="unplayed" >Show Unplayed Games</button>

      <input type="search" placeholder="search by genre" onChange={(e) => setFilterByGenre(e.target.value)} />

    </div>
  )
}

export default SearchBarHeader
