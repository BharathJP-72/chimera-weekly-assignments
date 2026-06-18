import { useState } from 'react'
import { ShoppingCart, Heart, Home } from 'lucide-react'
import productsData from './data/products'
import ProductGrid from './components/ProductGrid/ProductGrid'
import './App.css'

function App() {
  const [products] = useState(productsData)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [currentView, setCurrentView] = useState('home') 

  const displayProducts = () => {
    if (currentView === 'cart') {
      return products.filter(p => cart.includes(p.id))
    }
    if (currentView === 'wishlist') {
      return products.filter(p => wishlist.includes(p.id))
    }
    return products
  }

  return(
    <div className='app-container'>
      
      <header className='top-header'>
        <h1>Gadget Bay</h1>
        <nav className='navbar'>
          <button 
            className={currentView === 'home' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setCurrentView('home')}
            title="Home"
          >
            <Home size={22} />
          </button>
          <button 
            className={currentView === 'wishlist' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setCurrentView('wishlist')}
            title="Wishlist"
          >
            <Heart size={22} /> {wishlist.length > 0 && <span className="count-badge">{wishlist.length}</span>}
          </button>
          <button 
            className={currentView === 'cart' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setCurrentView('cart')}
            title="Cart"
          >
            <ShoppingCart size={22} /> {cart.length > 0 && <span className="count-badge">{cart.length}</span>}
          </button>
        </nav>
      </header>
      <p className='subtitle'>
        {currentView === 'home' && 'Premium Tech Essentials'}
        {currentView === 'wishlist' && 'Your Saved Items'}
        {currentView === 'cart' && 'Your Shopping Cart'}
      </p>

      {displayProducts().length > 0 ? (
        <ProductGrid 
          products={displayProducts()} 
          cart={cart}
          setCart={setCart}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      ) : (
        <div className="empty-state">
          <h2>No items found in {currentView}.</h2>
        </div>
      )}
      
    </div>
  )
}

export default App
