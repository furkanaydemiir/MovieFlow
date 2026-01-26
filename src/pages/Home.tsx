import Header from '../MUI/Header'
import FilmList from '../components/FilmList'
import SearchButton from '../MUI/SearchButton'

function Home() {
  return (
    <div>
          <div style={{ paddingBottom: "60px" }}>
                <Header />
                <FilmList />
              </div>
              <div className='search-button-wrapper'>
                <SearchButton/>
              </div>
    </div>
  
  )
}

export default Home