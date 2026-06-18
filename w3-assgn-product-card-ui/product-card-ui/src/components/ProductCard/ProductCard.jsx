import './ProductCard.css'

function ProductCard({ product }) {

    const {
        title,
        category,
        image,
        price,
        rating,
        discount,
        inStock
    } = product

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

                ⭐ {rating} / 5

                </p>


                <div className='price-row'>

                <span>

                    💰 ₹{price}

                </span>

                <span className='discount-badge'>

                    {discount}% OFF

                </span>

                </div>
                <p className='stock-status'>

                {

                    inStock

                    ?

                    '🟢 In Stock'

                    :

                    '🔴 Out Of Stock'

                }

                </p>
            </div>
            <div className='button-group'>
                <button>
                    🤍 Wishlist
                </button>
                <button>
                    🛒 Add To Cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard