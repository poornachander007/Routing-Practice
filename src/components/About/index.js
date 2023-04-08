// Write your JS code here
import './index.css'

const imgUrl = 'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'
// alt should be about

const About = () => {
  const a = 0

  return (
    <div className="container">
      <img src={imgUrl} alt="about" className="image" />
      <h1 className="heading">About</h1>
      <p className="para">I love to create! I am a frontend web developer</p>
    </div>
  )
}

export default About
