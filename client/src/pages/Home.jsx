import React from 'react'
const Home = () => {
  return (
    <>
    <main className='section-hero'>
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <p>We are the World Best IT Company</p>
          <h1>Welcome to Thapa Technical</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
          <div className="btn btn-group">
            <a href="/contact">
              <button className='btn'>connect now</button>
            </a>
            <a href="/services">
              <button className='btn'>learn more</button>
            </a>
          </div>
        </div>
        {/* hero images */}
        <div className="hero-image">
          <img src="/images/home.png" alt="home" width='400' height='500'/>
        </div>
      </div>
    </main>
    </>
  )
}
export default Home