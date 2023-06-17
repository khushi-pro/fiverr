import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">FIVERR > GRAPHIC & DESIGN ></span>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img className="pp" src="https://i.postimg.cc/8zy8X5rd/Shalki-1.jpg" alt="" />
            <span>Anna Karenina</span>
            <div className="stars">
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <span>5 (31)</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider"> 
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297611242/original/72c7ccbe85dcaefb6337b98460f5baf1e38d4396/create-any-realistic-product-images-using-midjourney-ai.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/268421370/original/e09b8d5b642a63975ee828f44b00d2d52a7171c2/create-text-based-ai-generated-art-for-you.jpg" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/268421370/original/2a9b5d520f7c145e55ae67f6220a976c6906c3d8/create-text-based-ai-generated-art-for-you.jpg" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>I'm a child of the 80's who's been trained by books and movies to fear the computer take over. In order to prevent this I've decided to fight the enemy from the inside by embracing the machine and diving straight into this AI phenomena. I'm a graphic artist, photographer and filmmaker with over 20 years of experience. I've been enthusiastically following AI art generators since they emerged. As an artist I find it to be an amazing tool for creating. From concept art to fantastic pieces that can be framed and displayed, I want to make something cool for you.</p>
          <div className="seller">
            <h2>About the Seller</h2>
             <div className="user">
             <img src="https://i.postimg.cc/8zy8X5rd/Shalki-1.jpg" alt="" />
             <div className="info">
              <span>Anna Karenina</span>
              <div className="stars">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
              <span>5 (31)</span>
            </div>
            <button>Contact Me</button>
             </div>
             </div>
             <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Netherlands</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, Dutch</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">2020</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">about 16 hours</span>
                </div>
              </div>
              <hr />
              <p>I'm an indie filmmaker and graphic designer and out of necessity have been creating movie posters for myself and the local indie film for the past 15 years.</p>
             </div>
           </div>
           <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/28beccdea16117ce3a82bdae464860db-951115061686184816359/JPEG_20230608_094014_5310507138319109241.jpg" alt="" />
                <div className="info">
                  <span>Erica</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
              <span>5 (31 reviews)</span>
              </div>
              <p> Anna is so wonderfully talented! She is also extremely positive, highly intelligent and artistically creative. As a Hollywood filmmaker, her quality, work ethic and creativity are world-class. I am looking forward to working with her again and again. She is awesome as a person, as an artist, and as a professional! AI LANI epitomizes what is beautiful and good in our world!! </p>
              <div className="helpful">
                <span>Helpful</span>
                <img src="./img/like.png" alt="" />
                <span>Yes</span>
                <img src="./img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ac233300fb2b3b5c6f7b80ce50cdd984-18553421605815738.966773/BAC32C05-313E-443F-AB3A-940647774531" alt="" />
                <div className="info">
                  <span>Leon</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png" alt="" />
                    <span>Netherlands</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
              <span>5 (31 reviews)</span>
              </div>
              <p> I am thrilled to write a glowing review for Ai Lani's exceptional work on my recent Photoshop template order. I was struggling to create a professional-looking template for my business, and I was running out of options. Fortunately, I found Ai Lani who was able to create a beautiful and functional template that exceeded all my expectations. Ai Lani was able to understand my vision and provided valuable feedback that made the end product even better. What I appreciated most about working with Ai Lani was her prompt communication and attention to detail. Ai Lani went above and beyond to ensure that every aspect of the template was perfect and to my satisfaction.</p>
              <div className="helpful">
                <span>Helpful</span>
                <img src="./img/like.png" alt="" />
                <span>Yes</span>
                <img src="./img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3499daf54e48df516f60f56c352e85a7-1665468089892/01ad6ab2-eeab-439f-8f45-ae835dde7b10.jpg" alt="" />
                <div className="info">
                  <span>Ichtiban</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1fc.png" alt="" />
                    <span>Taiwan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
              <span>5 (31 reviews)</span>
              </div>
              <p> Anna is a world-class talent. I love her creativity, her passion, her work ethic, her Hollywood-calibre talent. AI LANI is a joy to work with and a beautiful, loving, artisic spirit. Coming from Hollywood as an experienced agent, manager, film producer, tv network president and studio executive, I recommend AI LANI with the same respect and passion as the great Hollywood talents with which I have been blessed to work :)</p>
              <div className="helpful">
                <span>Helpful</span>
                <img src="./img/like.png" alt="" />
                <span>Yes</span>
                <img src="./img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
           </div>
          </div>
        <div className="right">
          <div className="price">
            <h2>2 AI generated images</h2>
            <h3>$59.99</h3>
          </div>
          <p>Contact me via Chat. I will offer a price based on the complexity of the image.</p>
          <div className="details">
            <div className="item">
            <img src="./img/clock.png" alt="" />
            <span>2 day delivery</span>
            </div>
            <div className="item">
            <img src="./img/recycle.png" alt="" />
            <span>3 revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="./img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="./img/greencheck.png" alt="" />
              <span>Prompt delivery</span>
            </div>
            <div className="item">
              <img src="./img/greencheck.png" alt="" />
              <span>Instructions</span>
            </div>
            <div className="item">
              <img src="./img/greencheck.png" alt="" />
              <span>Generated image examples</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig