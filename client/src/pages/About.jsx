import React from 'react'
import Analytics from '../Components/Analytics'
import { useState } from 'react'
import { useAuth } from '../store/auth';
const About = () => {
  const[about,setAbout]=useState({
      username:"",
      email:"",
      message:"",
    });
  const [userData, setUserData] = useState(true)
    const {user}=useAuth()
  
    if(userData && user){
      setAbout({
        username:user.username,
      })
  
      setUserData(false)
    }
  return (
    <>
    <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Hii. {user.username}</p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertise. Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
              </p>
              <p>Customization. We understand that every bussiness is unique. That's why we create solutions that are tailored to your specific needs and goals.
              </p>
              <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns</p>
              <p>Affordability: We offer competitive pricing without compromsing on the quality of our services.</p>
              <p>Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* second section */}
      <Analytics/>
  </>
)
}

export default About