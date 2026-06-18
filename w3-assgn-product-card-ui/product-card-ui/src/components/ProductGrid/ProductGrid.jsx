import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

function ProductGrid({
    products,
    cart,
    setCart,
    wishlist,
    setWishlist
}) {
    return (
        <div className='product-grid'>
            {
                products.map(product => 
                    <ProductCard 
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        wishlist={wishlist}
                        setWishlist={setWishlist}
                    />
                )
            }
        </div>
    )
}

export default ProductGrid
