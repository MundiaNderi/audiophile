import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Earphones from './pages/Earphones/Earphones'
import Headphones from './pages/Headphones/Headphones'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Speakers from './pages/Speakers/Speakers'
import ProductPage from './Components/ProductPage/ProductPage'
import data from '/data.json' // Assuming data.json is in the same directory
import CheckoutPage from './pages/Checkout/CheckoutPage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Earphones' element={<Earphones />} />
        <Route path='/Headphones' element={<Headphones />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/Speakers' element={<Speakers />} />
        {/* Modify the route to include category and slug */}
        <Route
          path='/:category/:slug'
          element={<ProductPage products={data} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
