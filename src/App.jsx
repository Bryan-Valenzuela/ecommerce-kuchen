import './App.css'
import {NavBar} from './components/Nav/NavBar.jsx'
import {Carousel} from './components/Carousel/Carousel.jsx'

function App() {

  const carouselImages = [
    {
        url: 'https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png',
        caption: 'Producto 1',
    },
    {
        url: 'https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png',
        caption: 'Producto 2',
    },
    {
        url: 'https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png',
        caption: 'Producto 3',
    },
    {
        url: 'https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png',
        caption: 'Producto 4',
    },
    ];

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

      <div className="collection-categories">
        <span>Best Seller</span>
        <span>Equipment</span>
        <span>Kitchenware</span>
        <span>Chef's Tools</span>
      </div>

      <div className="product-grid">
        <div className="product-card">
          <span className="tag">Best Seller</span>
          <img src="/bundle.png" alt="Bundle Bliss" />
          <h3>Bundle Bliss</h3>
          <p>$24.99</p>
        </div>
              
      </div>

      <button className="view-all">View All</button>
    </section>
  </div>
  )
}

export default App
