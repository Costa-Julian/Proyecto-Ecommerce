
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Profile from './Pages/Profile'
import Carousel from './Components/Carrusel'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <h1> Welcome to Shoplane </h1>
        <Profile />
      </div>
      <Footer />
    </div>
  )
}

export default App
