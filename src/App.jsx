import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MainSection from './components/Mainsection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto font-sans">
      <Navbar />
      <Banner />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App