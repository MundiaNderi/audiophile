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
import ThankyouModal from './Components/Modals/ThankyouModal'
import CheckoutModal from './Components/Modals/CheckoutModal'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import { useState } from 'react'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Earphones' element={<Earphones />} />
        <Route path='/Headphones' element={<Headphones />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/Speakers' element={<Speakers />} />
        <Route path='/thankyou' element={<ThankyouModal />} />
        <Route path='/checkoutmodal' element={<CheckoutModal />} />
        {/* Modify the route to include category and slug */}
        <Route
          path='/:category/:slug'
          element={<ProductPage products={data} />}
        />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
