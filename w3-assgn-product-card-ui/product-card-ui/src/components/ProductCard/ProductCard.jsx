import { Star, IndianRupee, Heart, ShoppingCart, CheckCircle, XCircle } from 'lucide-react'
import './ProductCard.css'

function ProductCard({ 
    product,
    cart,
    setCart,
    wishlist,
    setWishlist
}) {
    const {
        id,
        title,
        category,
        image,
        price,
        rating,
        discount,
        inStock
    } = product

    const isWishlisted = wishlist.includes(id)
    const isInCart = cart.includes(id)

    const toggleWishlist = () => {
        if (isWishlisted) {
            setWishlist(wishlist.filter(itemId => itemId !== id))
        } else {
            setWishlist([...wishlist, id])
        }
    }

    const toggleCart = () => {
        if (isInCart) {
            setCart(cart.filter(itemId => itemId !== id))
        } else {
            setCart([...cart, id])
        }
    }

    return(
         <div className='product-card'>
            <div className='product-details'>
                <div className='image-container'>
                    <img
                        src={image}
                        alt={title}
                        className='product-image'
                    />
                </div>
                <h2>
                    {title}
                </h2>
                <h3>
                    {category}
                </h3>
                <p className='rating'>
                    <Star size={16} fill="currentColor" /> {rating} / 5
                </p>

                <div className='price-row'>
                    <span>
                        <IndianRupee size={20} className="rupee-icon" />{price}
                    </span>
                    <span className='discount-badge'>
                        {discount}% OFF
                    </span>
                </div>
                
                <p className='stock-status'>
                    {inStock ? (
                        <><CheckCircle size={16} /> In Stock</>
                    ) : (
                        <><XCircle size={16} /> Out Of Stock</>
                    )}
                </p>
            </div>
            
            <div className='button-group'>
                <button 
                    className={isWishlisted ? 'wishlist-btn active' : 'wishlist-btn'}
                    onClick={toggleWishlist}
                >
                    <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} /> 
                    {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </button>
                <button 
                    className={isInCart ? 'cart-btn active' : 'cart-btn'}
                    onClick={toggleCart}
                >
                    <ShoppingCart size={18} /> 
                    {isInCart ? 'Remove' : 'Add To Cart'}
                </button>
            </div>
        </div>
    )
}

export default ProductCard