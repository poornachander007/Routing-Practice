// Write your JS code here

import './index.css'

const imgUrl = 'https://assets.ccbp.in/frontend/react-js/home-blog-img.png'
// alt should be home

const Home = () => {
  const a = 0

  return (
    <div className="container">
      <img src={imgUrl} alt="home" className="image" />
      <h1 className="heading">Home</h1>
    </div>
  )
}

export default Home
