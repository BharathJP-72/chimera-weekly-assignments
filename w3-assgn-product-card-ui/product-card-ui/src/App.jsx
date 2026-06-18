import products from './data/products'
import ProductGrid from './components/ProductGrid/ProductGrid'
import './App.css'


function App() {
  return(

    <div className='app-container'>
      <h1>Byte Bazaar</h1>
      <p className='subtitle'>
        Premium Tech Essentials
      </p>
      <ProductGrid products={ products }/>
    </div>
  )
}

export default App 

