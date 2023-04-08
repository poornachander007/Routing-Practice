// Write your JS code here
import './index.css'

const imgUrl = 'https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'
// alt should be contact

const Contact = () => {
  const a = 0

  return (
    <div className="container">
      <img src={imgUrl} alt="contact" className="image" />
      <h1 className="heading">Contact</h1>
    </div>
  )
}

export default Contact
