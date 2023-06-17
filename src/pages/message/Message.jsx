import React from 'react'
import "./Message.scss"

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
        MESSAGES > ANNA KARENINA
          {/* <Link to="/messages">MESSAGES</Link> > ANNA KARENINA */}
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://i.postimg.cc/T12gqG2K/Khu-Photography.jpg" alt="" />
            <p>
            Lorem ipsum dolor sit amet, im veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="item owner">
            <img src="https://i.postimg.cc/8zy8X5rd/Shalki-1.jpg" alt="" />
            <p>
            Lorem ipsum dolor sit amet, im veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="item">
            <img src="https://i.postimg.cc/T12gqG2K/Khu-Photography.jpg" alt="" />
            <p>
            Lorem ipsum dolor sit amet, im veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message