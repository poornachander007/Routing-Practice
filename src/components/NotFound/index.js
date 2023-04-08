// Write your JS code here

import './index.css'

const imgUrl = 'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
// alt should be not found

const NotFound = () => {
  const a = 0

  return (
    <div className="container">
      <img src={imgUrl} alt="not found" className="image" />
      <h1 className="heading">Not Found</h1>
    </div>
  )
}

export default NotFound
