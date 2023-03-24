import logo from './assets/logo.svg'
import './assets/App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SearchResults from './pages/SearchResults'
import Article from './pages/Article'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<h2>Not found</h2>}></Route>
          <Route path="/results" element={<SearchResults />}></Route>
          <Route path="/wiki/:keyword" element={<Article />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
