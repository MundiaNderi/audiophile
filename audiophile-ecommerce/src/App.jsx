import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Earphones from './pages/Earphones/Earphones'
import Headphones from './pages/Headphones/Headphones'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import HeadPhonesProduct from './pages/HeadPhonesProduct/HeadPhonesProduct'

function App() {


  return (
    <div className="app">
        <Navbar />
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/headphonesproduct' element={<HeadPhonesProduct/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
