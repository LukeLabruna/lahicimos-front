import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import MoviesContainer from "./components/MoviesContainer/MoviesContainer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer"
import './App.css'
import axios from "axios"


function App() {

  const [searchMovies, setSearchMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearchMovie = async (query) => {
    setLoading(true)
    try {
      if (query.length >= 3) {
        const movies = await axios.get(`https://lahicimos-back.vercel.app/api/movies/search?query=${query}`)
        setSearchMovies(movies.data.data)
      } else {
        setSearchMovies(null)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Router>
      <NavBar handleChange={handleSearchMovie} search={searchMovies} setSearch={setSearchMovies} />
        <Routes>
          <Route path="/" element={<MoviesContainer searchMovies={searchMovies} searchLoading={loading}/>} />
          <Route path="/:page" element={<MoviesContainer searchMovies={searchMovies} searchLoading={loading}/>} />
          <Route path="/movie/:id" element={<MovieDetailContainer searchMovies={searchMovies} searchLoading={loading}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
