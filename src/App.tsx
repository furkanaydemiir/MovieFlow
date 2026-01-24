import Header from './MUI/Header'
import './App.css'
import SearchButton from './MUI/SearchButton'
import FilmList from './components/FilmList'
function App() {
  return (
    <div>
      <div style={{paddingBottom:"60px"}}>
        <Header />
        <FilmList />
      </div>
      <div className='search-button-wrapper'>
        <SearchButton />
      </div>

    </div>
  )
}

export default App