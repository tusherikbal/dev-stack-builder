import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto font-sans">
      <Navbar />
      <Banner />

      
      {/* Main content */ }
      <div className="h-[2000px] bg-gray-50 flex justify-center pt-20">
        <h1 className="text-4xl font-bold text-gray-700">Welcome to Dev Stack</h1>
      </div>
    </div>
  )
}

export default App