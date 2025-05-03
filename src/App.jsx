import './App.css'
import {NavBar} from './components/Nav/NavBar.jsx'
import {Carousel} from './components/Carousel/Carousel.jsx'
import { CAROUSELIMAGES, PRODUCTS} from './constants.js'
import { ProductCard } from './components/ProductCard/ProductCard.jsx'



function App() {

  const carouselImages = CAROUSELIMAGES
  let products = PRODUCTS

  return (
    <div className="landing-container">
    {/* Hero Section */}
    <header className="hero">
      <NavBar/>

      <div className="hero-content">
        <div className="text-content">
          <h1>Cook’s Fascinations</h1>
          <p>Quality kitchen tools enhance cooking with precision and ease.</p>
        </div>
          <Carousel images={carouselImages}/>
      </div>
    </header>

    {/* Product Section */}
    <section className="collection">
      <h2>Discover Curated Collection</h2>

      

      <div className="product-grid">
        
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price}
              rating={product.rating}
              isOnSale={!!product.discountPercentage}
              discount={product.discountPercentage || 0}
            />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
              
      </div>

      <button className="view-all-btn">View All</button>
    </section>
  </div>
  )
}

export default App
