import './App.css'
import {NavBar} from './components/Nav/NavBar.jsx'

function App() {


  return (
    <div className="landing-container">
    {/* Hero Section */}
    <header className="hero">
      <NavBar/>

      <div className="hero-content">
        <div className="text-section">
          <h1>Cook’s Fascinations</h1>
          <p>Quality kitchen tools enhance cooking with precision and ease.</p>
        </div>
        <div className="image-section">
          <img src="/scissors.png" alt="Chef Scissors" />
          <span className="caption">Chef's Scissors</span>
        </div>
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
