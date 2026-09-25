import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MainSection from './components/MainSection'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto font-sans">
      <Navbar />
      <Banner />
      <MainSection />
    </div>
  )
}

export default App