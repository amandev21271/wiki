import logo from './assets/logo.svg'
import './assets/App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  HashRouter,
} from 'react-router-dom'
import SearchResults from './pages/SearchResults'
import Article from './pages/Article'
import { useEffect } from 'react'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    document.title = 'Better wiki!'
  }, [])
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/wiki" element={<Home />}></Route>
          <Route exact path="*" element={<h2>Not found</h2>}></Route>
          <Route path="/wiki/results" element={<SearchResults />}></Route>
          <Route path="/wiki/:keyword" element={<Article />}></Route> */}
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/results/:search" element={<SearchResults />}></Route>
          <Route path="/article/:keyword" element={<Article />}></Route>
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
